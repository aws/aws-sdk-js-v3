import { EventStreamChunker } from './EventStreamChunker';
import { SELECT_STREAM } from './eventStreamExamples.fixture';
import { PassThrough } from 'stream';

describe('EventStreamChunker', () => {
    it('should parse event streams into messages', async () => {
        const stream = new EventStreamChunker;

        const eventTypesAndSizes: Array<[string, number]> = [
            ['Records', 7646],
            ['QStats', 104],
            ['End', 0],
        ]

        stream.end(Buffer.from(
            SELECT_STREAM.buffer,
            SELECT_STREAM.byteOffset,
            SELECT_STREAM.byteLength
        ))

        for await (const {headers, body} of stream) {
            const [type, size] = eventTypesAndSizes.shift() as [string, number];
            expect(headers[':event-type'].value).toBe(type)
            expect(body.byteLength).toBe(size)
        }

        expect(eventTypesAndSizes.length).toBe(0);
    })

    it('should handle paused input streams', async () => {
        const stream = new PassThrough;
        stream.pause()

        const eventTypesAndSizes: Array<[string, number]> = [
            ['Records', 7646],
            ['QStats', 104],
            ['End', 0],
        ]

        stream.end(Buffer.from(
            SELECT_STREAM.buffer,
            SELECT_STREAM.byteOffset,
            SELECT_STREAM.byteLength
        ))

        for await (const {headers, body} of stream.pipe(new EventStreamChunker)) {
            const [type, size] = eventTypesAndSizes.shift() as [string, number];
            expect(headers[':event-type'].value).toBe(type)
            expect(body.byteLength).toBe(size)
        }

        expect(eventTypesAndSizes.length).toBe(0);
    })

    it('should parse finely chunked event streams into messages', async () => {
        const eventTypesAndSizes: Array<[string, number]> = [
            ['Records', 7646],
            ['QStats', 104],
            ['End', 0],
        ];

        const stream = new EventStreamChunker;
        function writeByteToStream(position: number) {
            stream.write(Buffer.from(
                SELECT_STREAM.buffer,
                SELECT_STREAM.byteOffset + position,
                1
            ))

            if (position < SELECT_STREAM.byteLength - 1) {
                process.nextTick(() => {
                    writeByteToStream(position + 1)
                })
            } else {
                process.nextTick(() => {
                    stream.end()
                })
            }
        }

        process.nextTick(() => {
            writeByteToStream(0);
        })

        for await (const {headers, body} of stream) {
            const [type, size] = eventTypesAndSizes.shift() as [string, number];
            expect(headers[':event-type'].value).toBe(type)
            expect(body.byteLength).toBe(size)
        }

        expect(eventTypesAndSizes.length).toBe(0);
    })

    it('should properly handle encoded strings', async () => {
        const stream = new EventStreamChunker

        const eventTypesAndSizes: Array<[string, number]> = [
            ['Records', 7646],
            ['QStats', 104],
            ['End', 0],
        ]

        stream.end(
            Buffer.from(
                SELECT_STREAM.buffer,
                SELECT_STREAM.byteOffset,
                SELECT_STREAM.byteLength
            ).toString('hex'),
            'hex'
        )

        for await (const {headers, body} of stream) {
            const [type, size] = eventTypesAndSizes.shift() as [string, number];
            expect(headers[':event-type'].value).toBe(type)
            expect(body.byteLength).toBe(size)
        }

        expect(eventTypesAndSizes.length).toBe(0);
    })

    it('should properly handle encoded strings even if string decoding is disabled', async () => {
        const stream = new EventStreamChunker({decodeStrings: false as any})

        const eventTypesAndSizes: Array<[string, number]> = [
            ['Records', 7646],
            ['QStats', 104],
            ['End', 0],
        ]

        stream.end(
            Buffer.from(
                SELECT_STREAM.buffer,
                SELECT_STREAM.byteOffset,
                SELECT_STREAM.byteLength
            ).toString('hex'),
            'hex'
        )

        for await (const {headers, body} of stream) {
            const [type, size] = eventTypesAndSizes.shift() as [string, number];
            expect(headers[':event-type'].value).toBe(type)
            expect(body.byteLength).toBe(size)
        }

        expect(eventTypesAndSizes.length).toBe(0);
    })

    it('should finish the writable stream if `return` is called', async () => {
        const stream = new EventStreamChunker
        let finished = false
        stream.on('finish', () => {
            finished = true
        })
        stream.write(Buffer.from(
            SELECT_STREAM.buffer,
            SELECT_STREAM.byteOffset,
            SELECT_STREAM.byteLength
        ))

        expect(finished).toBe(false)

        for await (const _ of stream) {
            break
        }

        expect(finished).toBe(true)
    })

    it('should close the writable stream if `return` is called', async () => {
        const stream = new EventStreamChunker
        let closed = false
        stream.on('close', () => {
            closed = true
        })
        stream.write(Buffer.from(
            SELECT_STREAM.buffer,
            SELECT_STREAM.byteOffset,
            SELECT_STREAM.byteLength
        ))

        expect(closed).toBe(false)

        for await (const _ of stream) {
            break
        }

        expect(closed).toBe(true)
    })

    it('should throw if the stream is started in object mode', () => {
        expect(() => new EventStreamChunker({objectMode: true as any}))
            .toThrow()
    })

    it('should emit an error if the input cannot be parsed as a valid event stream', async () => {
        const selectStreamClone = new Uint8Array(SELECT_STREAM)
        selectStreamClone[0]++ // this will cause a checksum mismatch for the first message's prelude
        const stream = new EventStreamChunker
        let errorEncountered = false
        stream.on('error', () => {
            errorEncountered = true
        })

        stream.write(Buffer.from(
            selectStreamClone.buffer,
            selectStreamClone.byteOffset,
            selectStreamClone.byteLength
        ))

        await (stream.next().catch(() => {}))

        expect(errorEncountered).toBe(true)
    })
})
