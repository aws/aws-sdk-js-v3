import {JsonParser} from "./";
import {Member} from "@aws-sdk/types";

describe('JsonParser', () => {
    describe('structures', () => {
        const structure: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    foo: {
                        shape: {type: 'string'},
                    },
                    bar: {
                        shape: {type: 'string'},
                    },
                    baz: {
                        shape: {type: 'string'},
                        locationName: 'quux',
                    },
                }
            },
        };
        const jsonBody = new JsonParser(jest.fn());

        it('should unmarshall known properties of a structure', () => {
            const toParse = {foo: 'fizz', bar: 'buzz'};
            expect(jsonBody.parse(structure, JSON.stringify(toParse)))
                .toEqual(toParse);
        });

        it('should ignore unknown properties', () => {
            const toParse = {foo: 'fizz', bar: 'buzz'};
            expect(jsonBody.parse(
                structure,
                JSON.stringify({...toParse, pop: 'weasel'})
            )).toEqual(toParse);
        });

        it('should unmarshall properties from the locationNames', () => {
            expect(jsonBody.parse(
                structure,
                JSON.stringify({quux: 'value'})
            )).toEqual({baz: 'value'});
        });

        it('should return undefined if the input is null', () => {
            expect(jsonBody.parse(structure, JSON.stringify(null)))
                .toBeUndefined();
        });
    });

    describe('lists', () => {
        const listShape: Member = {
            shape: {
                type: 'list',
                member: {
                    shape: {type: 'string'},
                },
            },
        };
        const jsonBody = new JsonParser(jest.fn());

        it('should unmarshall arrays', () => {
            expect(jsonBody.parse(
                listShape,
                JSON.stringify(['foo', 'bar', 'baz'])
            )).toEqual(['foo', 'bar', 'baz']);
        });

        it('should return undefined if the input is not an array', () => {
            expect(jsonBody.parse(listShape, JSON.stringify(null)))
                .toBeUndefined();
        });
    });

    describe('maps', () => {
        const mapShape: Member = {
            shape: {
                type: 'map',
                key: {shape: {type: 'string'}},
                value: {
                    shape: {type: 'integer'},
                }
            },
        };
        const jsonBody = new JsonParser(jest.fn());

        it('should serialize objects', () => {
            const object = {
                foo: 0,
                bar: 1,
                baz: 2,
            };

            expect(jsonBody.parse(mapShape, JSON.stringify(object)))
                .toEqual(object);
        });

        it('should return undefined if the input is null', () => {
            expect(jsonBody.parse(mapShape, JSON.stringify(null)))
                .toBeUndefined();
        });
    });

    describe('blobs', () => {
        const blobShape: Member = {shape: {type: 'blob'}};
        const base64Decode = jest.fn(arg => arg);
        const jsonBody = new JsonParser(base64Decode);

        beforeEach(() => {
            base64Decode.mockClear();
        });

        it('should base64 decode values', () => {
            jsonBody.parse(blobShape, '"deadbeef"');

            expect(base64Decode.mock.calls.length).toBe(1);
        });

        it('should return undefined if the input is not a string', () => {
            expect(jsonBody.parse(blobShape, JSON.stringify(1)))
                .toBeUndefined();
        });
    });

    describe('timestamps', () => {
        const timestampShape: Member = {shape: {type: "timestamp"}};
        const date = new Date('2017-05-22T19:33:14.000Z');
        const timestamp = 1495481594;
        const jsonBody = new JsonParser(jest.fn());

        it('should convert timestamps to date objects', () => {
            expect(jsonBody.parse(timestampShape, timestamp.toString(10)))
                .toEqual(date);
        });

        it('should return undefined if the input is not a number', () => {
            expect(jsonBody.parse(timestampShape, JSON.stringify('foo')))
                .toBeUndefined();
        });
    });

    describe('scalars', () => {
        it('should echo back scalars in their JSON-ified form', () => {
            const cases: Array<[Member, any]> = [
                [{shape: {type: 'string'}}, 'string'],
                [{shape: {type: 'integer'}}, 1],
                [{shape: {type: 'float'}}, 3.14],
                [{shape: {type: 'boolean'}}, true],
            ];
            const jsonBody = new JsonParser(jest.fn());

            for (let [shape, scalar] of cases) {
                expect(jsonBody.parse(shape, JSON.stringify(scalar)))
                    .toBe(scalar);
            }
        });
    });
});
