import {JsonBody} from "../lib/JsonBody";
import {
    Blob,
    List,
    Map as MapShape,
    Timestamp,
    Structure,
} from "@aws/types";

describe('JsonBody', () => {
    describe('structures', () => {
        const structure: Structure = {
            type: "structure",
            required: [],
            members: {
                foo: {shape: {type: 'string'}},
                bar: {shape: {type: 'string'}},
                baz: {
                    shape: {type: 'string'},
                    locationName: 'quux',
                },
            }
        };
        const jsonBody = new JsonBody(jest.fn(), jest.fn());

        it('should serialize known properties of a structure', () => {
            const toSerialize = {foo: 'fizz', bar: 'buzz'};
            expect(jsonBody.build(structure, toSerialize))
                .toBe(JSON.stringify(toSerialize));
        });

        it('should ignore unknown properties', () => {
            const toSerialize = {foo: 'fizz', bar: 'buzz'};
            expect(jsonBody.build(structure, {...toSerialize, pop: 'weasel'}))
                .toBe(JSON.stringify(toSerialize));
        });

        it('should serialize properties to the locationNames', () => {
            expect(jsonBody.build(structure, {baz: 'value'}))
                .toEqual(JSON.stringify({quux: 'value'}));
        });
    });

    describe('lists', () => {
        const listShape: List = {
            type: 'list',
            member: {shape: {type: 'string'}},
        };
        const jsonBody = new JsonBody(jest.fn(), jest.fn());

        it('should serialize arrays', () => {
            expect(jsonBody.build(listShape, ['foo', 'bar', 'baz']))
                .toEqual(JSON.stringify(['foo', 'bar', 'baz']));
        });

        it('should serialize iterators', () => {
            const iterator = function* () {
                yield 'foo';
                yield 'bar';
                yield 'baz';
            };

            expect(jsonBody.build(listShape, iterator()))
                .toEqual(JSON.stringify(['foo', 'bar', 'baz']));
        });
    });

    describe('maps', () => {
        const mapShape: MapShape = {
            type: 'map',
            key: {shape: {type: 'string'}},
            value: {shape: {type: 'number'}}
        };
        const jsonBody = new JsonBody(jest.fn(), jest.fn());

        it('should serialize objects', () => {
            const object = {
                foo: 0,
                bar: 1,
                baz: 2,
            };

            expect(jsonBody.build(mapShape, object))
                .toEqual(JSON.stringify(object));
        });

        it('should serialize [key, value] iterables (like ES6 maps)', () => {
            const iterator = function* () {
                yield ['foo', 0];
                yield ['bar', 1];
                yield ['baz', 2];
            };

            expect(jsonBody.build(mapShape, iterator()))
                .toEqual(JSON.stringify({
                    foo: 0,
                    bar: 1,
                    baz: 2,
                }));
        });
    });

    describe('blobs', () => {
        const blobShape: Blob = {type: 'blob'};
        const base64Encode = jest.fn(arg => arg);
        const utf8Decode = jest.fn(arg => arg);
        const jsonBody = new JsonBody(base64Encode, utf8Decode);

        beforeEach(() => {
            base64Encode.mockClear();
            utf8Decode.mockClear();
        });

        it('should base64 encode ArrayBuffers', () => {
            jsonBody.build(blobShape, new ArrayBuffer(2));

            expect(base64Encode.mock.calls.length).toBe(1);
        });

        it('should base64 encode ArrayBufferViews', () => {
            jsonBody.build(blobShape, Uint8Array.from([0]));

            expect(base64Encode.mock.calls.length).toBe(1);
        });

        it('should utf8 decode and base64 encode strings', () => {
            jsonBody.build(blobShape, 'foo' as any);

            expect(base64Encode.mock.calls.length).toBe(1);
            expect(utf8Decode.mock.calls.length).toBe(1);
        });
    });

    describe('timestamps', () => {
        const timestampShape: Timestamp = {type: "timestamp"};
        const date = new Date('2017-05-22T19:33:14.175Z');
        const timestamp = 1495481594;
        const jsonBody = new JsonBody(jest.fn(), jest.fn());

        it('should convert Date objects to epoch timestamps', () => {
            expect(jsonBody.build(timestampShape, date))
                .toBe(JSON.stringify(timestamp));
        });

        it('should convert date strings to epoch timestamps', () => {
            expect(jsonBody.build(timestampShape, date.toUTCString() as any))
                .toBe(JSON.stringify(timestamp));
        });

        it('should preserve numbers as epoch timestamps', () => {
            expect(jsonBody.build(timestampShape, timestamp as any))
                .toBe(JSON.stringify(timestamp));
        });
    });

    describe('scalars', () => {
        it('should echo back scalars in their JSON-ified form', () => {
            const cases = [
                [{type: 'string'}, 'string'],
                [{type: 'number'}, 1],
                [{type: 'boolean'}, true],
            ];
            const jsonBody = new JsonBody(jest.fn(), jest.fn());

            for (let [shape, scalar] of cases) {
                expect(jsonBody.build(shape as any, scalar as any))
                    .toBe(JSON.stringify(scalar));
            }
        });
    });
});
