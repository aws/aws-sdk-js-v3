import { Writable, WritableOptions } from 'stream';
import { EventStreamMarshaller } from '@aws/eventstream-marshaller';
import { Message } from '@aws/types';
import { fromUtf8, toUtf8 } from '@aws/util-utf8-node';

if (Symbol && !Symbol.asyncIterator) {
    (Symbol as any).asyncIterator = Symbol.for("__@@asyncIterator__");
}

export interface EventStreamChunkerOptions extends WritableOptions {
    decodeStrings?: undefined;
    objectMode?: undefined;
    write?: undefined;
    writev?: undefined;
    destroy?: undefined;
    final?: undefined;
}

const marshaller = new EventStreamMarshaller(toUtf8, fromUtf8);

/**
 * A writable stream that aggregates chunks into buffers and parses them into
 * event stream messages. The size of each buffer is determined by the message
 * prelude, which begins with the message length expressed as a big-endian
 * UInt32.
 */
export class EventStreamChunker extends Writable implements
    AsyncIterableIterator<Message>
{
    private readonly parsed: Array<Message> = [];
    private currentChunk?: Uint8Array;
    private drainedCallbacks: Array<Function> = [];
    private nextAvailable!: Promise<void>;
    private position = 0;
    private rejectNext!: (reason?: any) => void;
    private remainder?: Buffer;
    private resolveNext!: () => void;
    private streamEnded = false;

    constructor(options: EventStreamChunkerOptions = {}) {
        super(options);

        if (options.objectMode === true) {
            throw new Error(
                'EventStream binary buffers cannot be aggregated from a stream in object mode'
            )
        }

        this.initializeNextPromise();

        this.on('finish', () => {
            this.streamEnded = true
        })
    }

    [Symbol.asyncIterator]() {
        return this;
    }

    /**
     * Retrieve the next message in the sequence or a sigil indicating that the
     * sequence has terminated.
     */
    next(): Promise<IteratorResult<Message>> {
        if (this.parsed.length > 0) {
            if (this.parsed.length === 1) {
                this.emitDrainedNotification()
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
     * Close the iterator. Communicates to the producer that iteration has
     * ceased.
     */
    return() {
        this.end()
        this.emit('close')
        this.parsed.length = 0
        this.emitDrainedNotification()
        return Promise.resolve({done: true} as IteratorResult<Message>);
    }

    /**
     * @internal
     */
    _write(chunk: Buffer|string, encoding: string, callback: Function) {
        try {
            this.processChunk(chunk, encoding);
            this.handleWriteCallback(callback);
        } catch (err) {
            this.rejectNext(err);
            callback(err);
        }
    }

    private emitDrainedNotification() {
        while (this.drainedCallbacks.length > 0) {
            (this.drainedCallbacks.shift() as Function)();
        }
    }

    private handleWriteCallback(callback: Function) {
        if (this.parsed.length > 0) {
            this.drainedCallbacks.push(callback);
        } else {
            callback();
        }
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

    private processChunk(chunk: Buffer|string, encoding: string) {
        if (typeof chunk === 'string') {
            chunk = Buffer.from(chunk, encoding);
        }

        if (this.remainder) {
            chunk = Buffer.concat([this.remainder, chunk]);
            delete this.remainder;
        }

        while (chunk.byteLength > 0) {
            if (!this.currentChunk) {
                if (chunk.byteLength >= 4) {
                    this.currentChunk = new Uint8Array(chunk.readUInt32BE(0));
                    this.position = 0;
                } else {
                    this.remainder = chunk;
                    break;
                }
            }

            const toRead = Math.min(
                this.currentChunk.byteLength - this.position,
                chunk.byteLength
            );
            this.currentChunk.set(chunk.slice(0, toRead), this.position);
            chunk = chunk.slice(toRead);

            this.position += toRead;
            if (this.position === this.currentChunk.byteLength) {
                this.parsed.push(marshaller.unmarshall(this.currentChunk));
                delete this.currentChunk;

                this.resolveNext();
                this.initializeNextPromise();
            }
        }
    }
}
