import { Message } from '@aws/types';
import { EventStreamChunker } from './EventStreamChunker';

export function iterableForEventStream(
    binaryStream: NodeJS.ReadableStream
): AsyncIterableIterator<Message> {
    const chunker = new EventStreamChunker
    binaryStream.pipe(chunker)

    chunker.on('error', err => {
        if (isDestroyable(binaryStream)) {
            binaryStream.destroy(err)
        }
    })

    binaryStream.on('error', err => {
        chunker.throw(err);
    })

    return chunker;
}

interface Destroyable {
    destroy(error?: Error): void;
}

function isDestroyable(arg: any): arg is Destroyable {
    return Boolean(arg) && typeof arg.destroy === 'function';
}
