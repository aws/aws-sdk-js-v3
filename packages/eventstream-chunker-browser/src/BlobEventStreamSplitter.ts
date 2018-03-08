
import { EventStreamSink } from '@aws/eventstream-marshaller';
import { Message } from '@aws/types';
import { fromUtf8, toUtf8 } from '@aws/util-utf8-browser';

if (Symbol && !Symbol.asyncIterator) {
    (Symbol as any).asyncIterator = Symbol.for("__@@asyncIterator__");
}

const MB = 1024 * 1

export class BlobEventStreamSplitter implements AsyncIterableIterator<Message> {
    private readStarted = false
    private readonly sink = new EventStreamSink({ fromUtf8, toUtf8 })

    constructor(private readonly blob: Blob) {}

    [Symbol.asyncIterator]() {
        return this;
    }

    next() {
        if (!this.readStarted) {
            this.initiateRead().catch(() => {});
            this.readStarted = true;
        }

        return this.sink.next();
    }

    return() {
        return this.sink.return();
    }

    private async initiateRead() {
        let position = 0
        const { size } = this.blob

        while (position < size) {
            const readEnd = Math.min(size, position + MB);
            const subBlob = this.blob.slice(position, readEnd);
            position = readEnd;

            await new Promise<void>((resolve, reject) => {
                const reader = new FileReader;
                reader.onerror = () => {
                    this.sink.abort(reader.error);
                    reject();
                };

                reader.onload = event => {
                    this.sink.write(
                        new Uint8Array((event.target as any).result, 0)
                    )
                        .then(resolve)
                        .catch(() => {})

                    if (readEnd === size) {
                        this.sink.close()
                    }
                }

                reader.readAsArrayBuffer(subBlob);
            })
        }
    }
}
