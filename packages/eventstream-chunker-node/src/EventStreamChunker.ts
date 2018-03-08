import { Writable, WritableOptions } from 'stream';
import { EventStreamSink } from '@aws/eventstream-marshaller';
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

/**
 * A writable stream that aggregates chunks into buffers and parses them into
 * event stream messages.
 */
export class EventStreamChunker extends Writable implements
    AsyncIterableIterator<Message>
{
    private readonly sink = new EventStreamSink({ fromUtf8, toUtf8 });
    private readonly outstandingCallbacks = new Map<{}, Function>();

    constructor(options: EventStreamChunkerOptions = {}) {
        super(options);

        if (options.objectMode === true) {
            throw new Error(
                'EventStream binary buffers cannot be aggregated from a stream in object mode'
            )
        }

        this.on('finish', () => this.sink.close())
    }

    [Symbol.asyncIterator]() {
        return this;
    }

    /**
     * Retrieve the next message in the sequence or a sigil indicating that the
     * sequence has terminated.
     */
    next(): Promise<IteratorResult<Message>> {
        return this.sink.next();
    }

    /**
     * Close the iterator. Communicates to the producer that iteration has
     * ceased.
     */
    return() {
        this.end();
        for (const [id, callback] of this.outstandingCallbacks) {
            callback();
            this.outstandingCallbacks.delete(id);
        }
        this.emit('close');
        // return Promise.resolve({done: true} as any);
        return this.sink.return();
    }

    throw(error?: any) {
        return this.sink.throw(error);
    }

    /**
     * @internal
     */
    _write(chunk: Buffer|string, encoding: string, callback: Function) {
        if (typeof chunk === 'string') {
            chunk = Buffer.from(chunk, encoding);
        }
        const cbIdentifier = {};
        this.outstandingCallbacks.set(cbIdentifier, callback);

        this.sink.write(chunk)
            .then(() => {
                if (this.outstandingCallbacks.has(cbIdentifier)) {
                    callback();
                    this.outstandingCallbacks.delete(cbIdentifier);
                }
            }).catch(err => {
                if (this.outstandingCallbacks.has(cbIdentifier)) {
                    callback(
                        err.iterationCeasedError === true ? undefined : err
                    );
                    this.outstandingCallbacks.delete(cbIdentifier);
                }
            });
    }
}
