import {JsonBuilder} from "./";
import {OperationModel, Member} from "@aws-sdk/types";

import {minimalOperation} from './operations.fixtures';
import {
    blobShape,
    booleanShape,
    floatShape,
    integerShape,
    listOfStringsShape,
    mapOfStringsToIntegersShape,
    stringShape,
    timestampShape
} from './shapes.fixtures';

describe('JsonBuilder', () => {
    describe('structures', () => {
        const operation: OperationModel = {
            ...minimalOperation,
            input: {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        foo: {
                            shape: {...stringShape},
                        },
                        bar: {
                            shape: {...stringShape},
                        },
                        baz: {
                            shape: {...stringShape},
                            locationName: 'quux'
                        }
                    }
                }
            }
        };

        const jsonBody = new JsonBuilder(jest.fn(), jest.fn());

        it('should serialize known properties of a structure', () => {
            const toSerialize = {foo: 'fizz', bar: 'buzz'};
            expect(jsonBody.build({operation, input: toSerialize}))
                .toBe(JSON.stringify(toSerialize));
        });

        it('should ignore unknown properties', () => {
            const toSerialize = {foo: 'fizz', bar: 'buzz'};
            expect(jsonBody.build({operation, input: {...toSerialize, pop: 'weasel'}}))
                .toBe(JSON.stringify(toSerialize));
        });

        it('should serialize properties to the locationNames', () => {
            expect(jsonBody.build({operation, input: {baz: 'value'}}))
                .toEqual(JSON.stringify({quux: 'value'}));
        });

        it('should throw if a scalar value is provided', () => {
            for (let scalar of ['string', 123, true, null, void 0]) {
                expect(() => jsonBody.build({operation, input: scalar})).toThrow();
            }
        });
    });

    describe('lists', () => {
        const operation: OperationModel = {
            ...minimalOperation,
            input: {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        list: {
                            shape: {...listOfStringsShape},
                        }
                    }
                }
            }
        };

        const jsonBody = new JsonBuilder(jest.fn(), jest.fn());

        it('should serialize arrays', () => {
            expect(jsonBody.build({operation, input: {list: ['foo', 'bar', 'baz']}}))
                .toEqual(JSON.stringify({list: ['foo', 'bar', 'baz']}));
        });

        it('should serialize iterators', () => {
            const iterator = function* () {
                yield 'foo';
                yield 'bar';
                yield 'baz';
            };

            expect(jsonBody.build({operation, input: {list: iterator()}}))
                .toEqual(JSON.stringify({list: ['foo', 'bar', 'baz']}));
        });

        it('should throw if a non-iterable value is provided', () => {
            for (let nonIterable of [{}, 123, true]) {
                expect(() => jsonBody.build({operation, input: {list: nonIterable}})).toThrow();
            }
        });
    });

    describe('maps', () => {
        const operation: OperationModel = {
            ...minimalOperation,
            input: {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        map: {
                            shape: {...mapOfStringsToIntegersShape},
                        }
                    }
                }
            }
        };

        const jsonBody = new JsonBuilder(jest.fn(), jest.fn());

        it('should serialize objects', () => {
            const object = {
                map: {
                    foo: 0,
                    bar: 1,
                    baz: 2,
                }
            };

            expect(jsonBody.build({operation, input: object}))
                .toEqual(JSON.stringify(object));
        });

        it('should serialize [key, value] iterables (like ES6 maps)', () => {
            const iterator = function* () {
                yield ['foo', 0];
                yield ['bar', 1];
                yield ['baz', 2];
            };

            expect(jsonBody.build({operation, input: {map: iterator()}}))
                .toEqual(JSON.stringify({
                    map: {
                        foo: 0,
                        bar: 1,
                        baz: 2,
                    }
                }));
        });

        it('should throw if a non-iterable and non-object value is provided', () => {
            for (let nonIterable of [123, true]) {
                expect(() => jsonBody.build({operation, input: {map: nonIterable}})).toThrow();
            }
        });
    });

    describe('blobs', () => {
        const operation: OperationModel = {
            ...minimalOperation,
            input: {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        blob: {
                            shape: {...blobShape},
                        }
                    }
                }
            }
        };

        const base64Encode = jest.fn(arg => arg);
        const utf8Decode = jest.fn(arg => arg);
        const jsonBody = new JsonBuilder(base64Encode, utf8Decode);

        beforeEach(() => {
            base64Encode.mockClear();
            utf8Decode.mockClear();
        });

        it('should base64 encode ArrayBuffers', () => {
            jsonBody.build({operation, input: {blob: new ArrayBuffer(2)}});

            expect(base64Encode.mock.calls.length).toBe(1);
        });

        it('should base64 encode ArrayBufferViews', () => {
            jsonBody.build({operation, input: {blob: Uint8Array.from([0])}});

            expect(base64Encode.mock.calls.length).toBe(1);
        });

        it('should utf8 decode and base64 encode strings', () => {
            jsonBody.build({operation, input: {blob: 'foo' as any}});

            expect(base64Encode.mock.calls.length).toBe(1);
            expect(utf8Decode.mock.calls.length).toBe(1);
        });

        it('should throw if a non-binary value is provided', () => {
            for (let nonBinary of [[], {}, 123, true]) {
                expect(() => jsonBody.build({operation, input: {blob: nonBinary}})).toThrow();
            }
        });
    });

    describe('timestamps', () => {
        const operation: OperationModel = {
            ...minimalOperation,
            input: {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        timestamp: {
                            shape: {...timestampShape},
                        }
                    }
                }
            }
        };
        const date = new Date('2017-05-22T19:33:14.175Z');
        const timestamp = 1495481594;
        const jsonBody = new JsonBuilder(jest.fn(), jest.fn());

        it('should convert Date objects to epoch timestamps', () => {
            expect(jsonBody.build({operation, input: {timestamp: date}}))
                .toBe(JSON.stringify({timestamp}));
        });

        it('should convert date strings to epoch timestamps', () => {
            expect(jsonBody.build({operation, input: {timestamp: date.toUTCString() as any}}))
                .toBe(JSON.stringify({timestamp}));
        });

        it('should preserve numbers as epoch timestamps', () => {
            expect(jsonBody.build({operation, input: {timestamp: timestamp as any}}))
                .toBe(JSON.stringify({timestamp}));
        });

        it('should throw if a value that cannot be converted to a time object is provided', () => {
            for (let nonTime of [[], {}, true, new ArrayBuffer(0)]) {
                expect(() => jsonBody.build({operation, input: {timestamp: nonTime}}))
                    .toThrow();
            }
        });
    });

    describe('scalars', () => {
        it('should echo back scalars in their JSON-ified form', () => {
            const cases: Iterable<[Member, any]> = [
                [{shape: stringShape}, 'string'],
                [{shape: floatShape}, 3.14],
                [{shape: integerShape}, 1],
                [{shape: booleanShape}, true],
            ];
            const jsonBody = new JsonBuilder(jest.fn(), jest.fn());

            for (let [shape, scalar] of cases) {
                let operation: OperationModel = {
                    ...minimalOperation,
                    input: {
                        ...shape
                    }
                };
                expect(jsonBody.build({operation, input: scalar}))
                    .toBe(JSON.stringify(scalar));
            }
        });
    });
});
