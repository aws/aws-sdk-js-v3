import { BlobEventStreamSplitter } from './BlobEventStreamSplitter';
import { Message } from '@aws/types';

export function iterableForEventStream(
    blob: Blob
): AsyncIterableIterator<Message> {
    return new BlobEventStreamSplitter(blob);
}
