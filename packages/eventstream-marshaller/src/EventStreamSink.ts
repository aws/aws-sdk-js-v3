import { EventStreamMarshaller } from './EventStreamMarshaller';
import { crc32 } from '@aws/crc32';
import { Decoder, Encoder, Message } from '@aws/types';
import { IterationCeasedError } from './IterationCeasedError';

if (Symbol && !Symbol.asyncIterator) {
    (Symbol as any).asyncIterator = Symbol.for("__@@asyncIterator__");
}

export interface EventStreamSinkOptions {
    /**
     * The UTF-8 decoder to use.
     */
    fromUtf8: Decoder;

    /**
     * The maximum number of objects to store in the internal buffer before
     * communicating backpressure to the byte source.
     */
    highWaterMark?: number;

    /**
     * The UTF-8 encoder to use.
     */
    toUtf8: Encoder;
}

/**
 * A readable/writable object the converts bytes into parsed eventstream
 * messages. Parsed messages may be read by iterating the sink as an
 * `AsyncIterableIterator<Message`, and bytes may be written using the `write`,
 * `abort`, and `close` method (designed for compatibility with the WHATWG
 * WritableStream underlying sink API).
 *
 * Backpressure is communicated via the promise returned by `write`, which will
 * remain pending until the sink has drained to below the designated high water
 * mark.
 *
 * @see https://streams.spec.whatwg.org/#underlying-sink-api
 */
export class EventStreamSink implements AsyncIterableIterator<Message> {
    private current?: Uint8Array;
    private readonly highWaterMark: number;
    private readonly marshaller: EventStreamMarshaller;
    private nextAvailable!: Promise<void>;
    private readonly parsed: Array<Message> = [];
    private position = 0;
    private ready?: Promise<void>;
    private remainder?: Uint8Array;
    private rejectNext!: (reason?: any) => void;
    private rejectReady?: (reason?: any) => void;
    private resolveNext!: () => void;
    private resolveReady?: () => void;
    private streamEnded = false;

    constructor({
        fromUtf8,
        highWaterMark = 1,
        toUtf8,
    }: EventStreamSinkOptions) {
        this.highWaterMark = highWaterMark;
        this.marshaller = new EventStreamMarshaller(toUtf8, fromUtf8);

        this.initializeNextPromise();
    }

    [Symbol.asyncIterator]() {
        return this;
    }



    /**
     * Closes the iterator abruptly. Called by the producer to signal that no
     * further bytes will be written do to an adverse condition upstream.
     *
     * @param reason    The reason the producer terminated the stream early.
     */
    abort(reason: any) {
        if (typeof reason === 'string') {
            reason = new Error(reason);
        }

        this.rejectNext(reason);
        this.streamEnded = true;
    }

    /**
     * Closes the iterator. Called by the producer to signal that the input has
     * reached its end.
     */
    close() {
        if (this.current) {
            this.rejectNext(new Error('Incomplete message received'));
        }

        this.streamEnded = true;
    }

    /**
     * Retrieves the next message in the sequence or a sigil indicating that the
     * sequence has terminated.
     */
    next(): Promise<IteratorResult<Message>> {
        if (this.parsed.length > 0) {
            // Signal to producers that we can begin receiving more data
            if (this.parsed.length === this.highWaterMark) {
                if (this.resolveReady) {
                    this.resolveReady();
                }
                this.initializeReadyPromise();
            }

            return Promise.resolve({
                done: false,
                value: this.parsed.shift() as Message
            });
        }

        if (this.streamEnded) {
            return Promise.resolve({ done: true } as any);
        }

        return this.nextAvailable.then(() => this.next())
    }

    /**
     * Closes the iterator. Called by the consumer to signal that no more events
     * will be read.
     */
    return() {
        this.parsed.length = 0
        this.streamEnded = true;

        if (this.rejectReady) {
            this.rejectReady(
                new IterationCeasedError('Iteration ceased prematurely.')
            );
        }

        return Promise.resolve({done: true} as IteratorResult<Message>);
    }

    /**
     * Enqueue a chunk of event stream data for parsing.
     *
     * @param chunk The next sequence of bytes in the event stream.
     *
     * @returns     A promise that will resolve when the sink is ready to
     *              receive more data or be rejected when writing should cease.
     */
    write(chunk: ArrayBufferView): Promise<void> {
        if (this.streamEnded) {
            return Promise.reject(new Error(
                'The end of the stream has already been encountered; no more bytes may be written'
            ));
        }

        if (!ArrayBuffer.isView(chunk)) {
            return Promise.reject(new Error(
                `Only ArrayBufferViews may be written to EventStreamSinks; received ${
                    Object.prototype.toString.call(chunk)
                }`
            ));
        }

        const { buffer, byteLength, byteOffset } = chunk
        let bytes: Uint8Array;
        if (this.remainder) {
            bytes = new Uint8Array(
                this.remainder.byteLength + chunk.byteLength
            );
            bytes.set(this.remainder);
            bytes.set(
                new Uint8Array(buffer, byteOffset, byteLength),
                this.remainder.byteLength
            );
            delete this.remainder;
        } else {
            bytes = new Uint8Array(buffer, byteOffset, byteLength);
        }

        try {
            this.processChunk(bytes);
        } catch (err) {
            this.rejectNext(err);
            return Promise.reject(err);
        }

        if (!this.ready) {
            this.initializeReadyPromise()
        }

        if (this.parsed.length < this.highWaterMark) {
            this.resolveReady!();
        }

        return this.ready!;
    }

    private enqueueChunk(chunk: Uint8Array) {
        this.parsed.push(this.marshaller.unmarshall(chunk));

        // Signal backpressure to producers if we've hit the high water mark
        if (this.parsed.length === this.highWaterMark) {
            this.initializeReadyPromise();
        }

        // Signal to consumers that a new chunk is ready
        this.resolveNext();
        this.initializeNextPromise();
    }

    private initializeNextPromise(): void {
        this.nextAvailable = new Promise<void>((resolve, reject) => {
            this.resolveNext = resolve;
            this.rejectNext = reject;
        })

        // Rather than allowing an unhandled promise rejection to bubble up,
        // let the promise returned by `.next()` be rejected and allow the
        // consumer of this iterable to handle the error.
        this.nextAvailable.catch(() => {})
    }

    private initializeReadyPromise(): void {
        this.ready = new Promise<void>((resolve, reject) => {
            this.resolveReady = resolve;
            this.rejectReady = reject;
        })

        // Rather than allowing an unhandled promise rejection to bubble up,
        // let the promise returned by `.write()` be rejected and allow the
        // writer to handle the error.
        this.ready.catch(() => {})
    }

    private processChunk(chunk: Uint8Array) {
        while (chunk.byteLength > 0) {
            if (!this.current) {
                if (chunk.byteLength >= 12) {
                    const view = new DataView(chunk.buffer, chunk.byteOffset);
                    if (view.getUint32(8, false) !== crc32(
                        new Uint8Array(chunk.buffer, chunk.byteOffset, 8)
                    )) {
                        // If the message prelude has been corrupted, we can't
                        // trust the reported length and should stop reading
                        // immediately.
                        throw new Error(
                            'Message length metadata corrupted; unable to read'
                        );
                    }

                    this.current = new Uint8Array(view.getUint32(0, false));
                    this.position = 0;
                } else {
                    this.remainder = chunk;
                    break;
                }
            }

            const toRead = Math.min(
                this.current.byteLength - this.position,
                chunk.byteLength
            );
            this.current.set(
                new Uint8Array(chunk.buffer, chunk.byteOffset, toRead),
                this.position
            );
            chunk = new Uint8Array(
                chunk.buffer,
                chunk.byteOffset + toRead,
                chunk.byteLength - toRead
            );

            this.position += toRead;
            if (this.position === this.current.byteLength) {
                this.enqueueChunk(this.current);
                delete this.current;
            }
        }
    }
}
