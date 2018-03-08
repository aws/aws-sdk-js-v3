import { BlobEventStreamSplitter } from './BlobEventStreamSplitter';
import { SELECT_STREAM } from './eventStreamExamples.fixture';

describe('BlobEventStreamSplitter', () => {
    const blob = new Blob([SELECT_STREAM])

    it('should parse event streams into messages', async () => {
        const blobSplitter = new BlobEventStreamSplitter(blob)

        const eventTypesAndSizes: Array<[string, number]> = [
            ['Records', 7646],
            ['QStats', 104],
            ['End', 0],
        ]

        for await (const {headers, body} of blobSplitter) {
            const [type, size] = eventTypesAndSizes.shift() as [string, number];
            expect(headers[':event-type'].value).toBe(type)
            expect(body.byteLength).toBe(size)
        }

        expect(eventTypesAndSizes.length).toBe(0);
    })

    it('should not emit an error the writable stream if `return` is called', async () => {
        const blobSplitter = new BlobEventStreamSplitter(blob)

        for await (const _ of blobSplitter) {
            break
        }
    })

});
