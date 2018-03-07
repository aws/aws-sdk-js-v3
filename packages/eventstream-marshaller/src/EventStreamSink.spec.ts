import { EventStreamSink } from './EventStreamSink';
import { SELECT_STREAM } from './eventStreamExamples.fixture';
import { fromUtf8, toUtf8 } from '@aws/util-utf8-universal';
import { PassThrough } from 'stream';
import { IterationCeasedError } from './IterationCeasedError';

describe('EventStreamSink', () => {
    it('should parse event streams into messages', async () => {
        const sink = new EventStreamSink({ fromUtf8, toUtf8 });

        const eventTypesAndSizes: Array<[string, number]> = [
            ['Records', 7646],
            ['QStats', 104],
            ['End', 0],
        ]

        sink.write(SELECT_STREAM)
        sink.close()

        for await (const {headers, body} of sink) {
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

        const sink = new EventStreamSink({ fromUtf8, toUtf8 });
        for (const byte of SELECT_STREAM) {
            sink.write(Uint8Array.from([byte]))
        }
        sink.close()

        for await (const {headers, body} of sink) {
            const [type, size] = eventTypesAndSizes.shift() as [string, number];
            expect(headers[':event-type'].value).toBe(type)
            expect(body.byteLength).toBe(size)
        }

        expect(eventTypesAndSizes.length).toBe(0);
    })

    it('should allow parallel reading and writing', async () => {
        const eventTypesAndSizes: Array<[string, number]> = [
            ['Records', 7646],
            ['QStats', 104],
            ['End', 0],
        ];

        const sink = new EventStreamSink({ fromUtf8, toUtf8 });
        const chunkSize = 1024;
        let writePromise = Promise.resolve()
        for (let i = 0; i < SELECT_STREAM.byteLength / chunkSize; i++) {
            const chunkStart = i * chunkSize,
                chunkEnd = (i + 1) * chunkSize;
            writePromise = writePromise.then(() => sink.write(
                SELECT_STREAM.subarray(chunkStart, chunkEnd)
            ))
        }

        writePromise.then(() => sink.close())

        for await (const {headers, body} of sink) {
            const [type, size] = eventTypesAndSizes.shift() as [string, number];
            expect(headers[':event-type'].value).toBe(type)
            expect(body.byteLength).toBe(size)
        }

        expect(eventTypesAndSizes.length).toBe(0);
    })

    it('should emit an error the writable stream if `return` is called', async () => {
        const sink = new EventStreamSink({ fromUtf8, toUtf8 })
        const ready = sink.write(SELECT_STREAM)

        for await (const _ of sink) {
            break
        }

        await expect(ready)
            .rejects
            .toMatchObject(
                new IterationCeasedError('Iteration ceased prematurely.')
            )
    })

    it('should close the writable sink to further writes if `return` is called', async () => {
        const sink = new EventStreamSink({ fromUtf8, toUtf8 })
        sink.return()

        await expect(sink.write(new Uint8Array(0)))
            .rejects
            .toMatchObject(new Error(
                'The end of the stream has already been encountered; no more bytes may be written'
            ))
    })

    it(
        'should reject the writer promise if write is invoked with anything other than an ArrayBufferView',
        async () => {
            const sink = new EventStreamSink({ fromUtf8, toUtf8 })

            await expect(sink.write(new Date as any))
                .rejects
                .toMatchObject(new Error(
                    'Only ArrayBufferViews may be written to EventStreamSinks; received [object Date]'
                ))
        }
    )

    it(
        'should reject the writer promise if the input cannot be parsed as a valid event stream',
        async () => {
            const selectStreamClone = new Uint8Array(SELECT_STREAM)
            selectStreamClone[0]++ // this will cause a checksum mismatch for the first message's prelude
            const sink = new EventStreamSink({ fromUtf8, toUtf8 })

            await expect(sink.write(selectStreamClone))
                .rejects
                .toMatchObject(new Error(
                    'Message length metadata corrupted; unable to read'
                ))
        }
    )

    it(
        'should reject the reader promise if the writer closes the stream in the middle of a message',
        async () => {
            const sink = new EventStreamSink({ fromUtf8, toUtf8 })
            sink.write(SELECT_STREAM.subarray(0, SELECT_STREAM.byteLength - 10))
            sink.close()

            try {
                for await (const _ of sink) {}
            } catch (err) {
                expect(err).toMatchObject(
                    new Error('Incomplete message received')
                )
            }
        }
    )

    it(
        'should reject the reader promise if the writer aborts the stream',
        async () => {
            const sink = new EventStreamSink({ fromUtf8, toUtf8 })
            sink.abort(new Error('PANIC PANIC'))

            try {
                for await (const _ of sink) {}
            } catch (err) {
                expect(err).toMatchObject(new Error('PANIC PANIC'))
            }
        }
    )

    it('should convert a string abort reason into an error', async () => {
        const sink = new EventStreamSink({ fromUtf8, toUtf8 })
        sink.abort('PANIC PANIC')

        try {
            for await (const _ of sink) {}
        } catch (err) {
            expect(err).toMatchObject(new Error('PANIC PANIC'))
        }
    })
})
