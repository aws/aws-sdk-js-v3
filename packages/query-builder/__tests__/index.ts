import {QueryBuilder} from "../";
import {Member} from "@aws/types";
describe('QueryBuilder', () => {
    describe('structures', () => {
        const structure: Member = {
            shape: {
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
            }
        };

        const queryBody = new QueryBuilder(jest.fn(), jest.fn());

        it('should serialize known properties of a structure', () => {
            const toSerialize = {foo: 'fizz', bar: 'buzz'};
            expect(queryBody.build(structure, toSerialize))
                .toEqual('foo=fizz&bar=buzz');
        });

        it('should ignore unknown properties', () => {
            const toSerialize = {foo: 'fizz', bar: 'buzz', pop: 'weasel'};
            expect(queryBody.build(structure, toSerialize))
                .toEqual('foo=fizz&bar=buzz');
        });

        it('should serialize properties to the locationNames', () => {
            const toSerialize = {baz: 'value'};
            expect(queryBody.build(structure, toSerialize))
                .toEqual('quux=value');
        });

        it('should throw if a scalar value is provided', () => {
            for (let scalar of ['string', 123, true, null, void 0]) {
                expect(() => queryBody.build(structure, scalar)).toThrow();
            }
        });
        
        const nestedStructure: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    foo: {
                        shape: {
                            type: "structure",
                            required: [],
                            members: {
                                bar: {shape: {type: 'string'}},
                                pop: {shape: {type: 'boolean'}},
                            }
                        }
                    }    
                }
            }
        };

        it('should searialize nested structure', () => {
            const toSerialize = {foo: {bar: 'buzz', pop: false}};
            expect(queryBody.build(nestedStructure, toSerialize))
                .toEqual('foo.bar=buzz&foo.pop=false');
        });
    });

    describe('lists', () => {
        const listShape: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    nah: {
                        shape: {
                            type: 'list',
                            member: {shape: {type: 'string'}},
                        }
                    }
                }
            }
        };
        const queryBody = new QueryBuilder(jest.fn(), jest.fn());

        describe('should serialize non-flattened list', () => {
            const toSerialize = {nah: ['foo', 'bar', 'baz']};
            expect(queryBody.build(listShape, toSerialize))
                .toEqual('nah.member.1=foo&nah.member.2=bar&nah.member.3=baz');
        });

        describe('should serialize empty list', () => {
            const toSerialize = {nah: []};
            expect(queryBody.build(listShape, toSerialize))
                .toEqual('nah=');
        });

        it('should serialize iterators', () => {
            const iterator = function* () {
                yield 'foo';
                yield 'bar';
                yield 'baz';
            };
            const toSerialize = {nah: iterator()};
            expect(queryBody.build(listShape, toSerialize))
                .toEqual('nah.member.1=foo&nah.member.2=bar&nah.member.3=baz');
        });

        it('should throw if a non-iterable value is provided', () => {
            for (let nonIterable of [{}, 123, true, null, void 0]) {
                const toSerialize = {nah: nonIterable};
                expect(() => queryBody.build(listShape, toSerialize)).toThrow();
            }
        });

        const listShapeWithName: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    nah: {
                        shape: {
                            type: 'list',
                            member: {shape: {type: 'string'}}
                        },
                        locationName: 'item'
                    }
                }
            }
        };
        describe('should serialize non-flattened list with locationName', () => {
            const toSerialize = {nah: ['foo', 'bar', 'baz']};
            expect(queryBody.build(listShapeWithName, toSerialize))
                .toEqual('nah.item.1=foo&nah.item.2=bar&nah.item.3=baz');
        });

        const listShapeFlattened: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    nah: {
                        shape: {
                            type: 'list',
                            flattened: true,
                            member: {shape: {type: 'string'}}
                        }
                    }
                }
            }
        }
        it('should serialize flattened list', () => {
            const toSerialize = {nah: ['foo', 'bar', 'baz']};
            expect(queryBody.build(listShapeFlattened, toSerialize))
                .toBe('nah.1=foo&nah.2=bar&nah.3=baz');
        });
    });

    describe('maps', () => {
        const mapShape: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    nah: {
                        shape: {
                            type: 'map',
                            key: {shape: {type: 'string'}},
                            value: {shape: {type: 'number'}}
                        }
                    }
                }
            }        
        };
        const queryBody = new QueryBuilder(jest.fn(), jest.fn());

        it('should serialize non-flattened objects', () => {
            const toSerialize = {
                nah: {
                    foo: 0,
                    bar: 1
                } 
            };
            expect(queryBody.build(mapShape, toSerialize))
                .toEqual('nah.entry.1.key=foo&nah.entry.1.value=0&nah.entry.2.key=bar&nah.entry.2.value=1');
        });

        it('should serialize [key, value] iterables (like ES6 maps)', () => {
            const iterator = function* () {
                yield ['foo', 0];
                yield ['bar', 1];
            };
            const toSerialize = {nah: iterator()}
            expect(queryBody.build(mapShape, toSerialize))
                .toEqual('nah.entry.1.key=foo&nah.entry.1.value=0&nah.entry.2.key=bar&nah.entry.2.value=1');
        });

        it('should throw if a non-iterable and non-object value is provided', () => {
            for (let nonIterable of [123, true, null, void 0]) {
                expect(() => queryBody.build(mapShape, nonIterable)).toThrow();
            }
        });

        const mapShapeWithName: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    nah: {
                        shape: {
                            type: 'map',
                            key: {shape: {type: 'string'}, locationName: 'theKey'},
                            value: {shape: {type: 'number'}, locationName: 'theValue'},
                        }
                    }
                }
            }        
        };
        it('should serialize map with locationName of key and value', () => {
            const toSerialize = {
                nah: {
                    foo: 0,
                    bar: 1
                } 
            };
            expect(queryBody.build(mapShape, toSerialize))
                .toEqual('nah.1.theKey=foo&nah.1.theValue=0&nah.2.theKey=bar&nah.2.theValue=1');
        });

        const mapShapeFlattened: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    nah: {
                        shape: {
                            type: 'map',
                            key: {shape: {type: 'string'}},
                            value: {shape: {type: 'number'}},
                            flattened: true
                        }
                    }
                }
            }        
        };
        it('should serialize flattened map', () => {
            const toSerialize = {
                nah: {
                    foo: 0,
                    bar: 1
                } 
            };
            expect(queryBody.build(mapShape, toSerialize))
                .toEqual('nah.1.key=foo&nah.1.value=0&nah.2.key=bar&nah.2.value=1');
        });
    });

    describe('blobs', () => {
        const blobShape: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    blobArg: {
                        shape: {type: 'blob'}                   
                    }
                }
            }
        };
        const base64Encode = jest.fn(arg => arg);
        const utf8Decode = jest.fn(arg => arg);
        const queryBody = new QueryBuilder(base64Encode, utf8Decode);

        beforeEach(() => {
            base64Encode.mockClear();
            utf8Decode.mockClear();
        });
//need to check mock call
//doubt
        it('should base64 encode ArrayBuffers', () => {
            queryBody.build(blobShape, new ArrayBuffer(2));

            expect(base64Encode.mock.calls.length).toBe(1);
        });

        it('should base64 encode ArrayBufferViews', () => {
            queryBody.build(blobShape, Uint8Array.from([0]));

            expect(base64Encode.mock.calls.length).toBe(1);
        });

        it('should utf8 decode and base64 encode strings', () => {
            queryBody.build(blobShape, 'foo' as any);

            expect(base64Encode.mock.calls.length).toBe(1);
            expect(utf8Decode.mock.calls.length).toBe(1);
        });

        it('should throw if a non-binary value is provided', () => {
            for (let nonBinary of [[], {}, 123, true, null, void 0]) {
                expect(() => queryBody.build(blobShape, nonBinary)).toThrow();
            }
        });
    });

    describe('timestamps', () => {
        const timestampShape: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    timeArg: {
                        shape: {type: "timestamp"},
                    }
                }
            }};
        const date = new Date('2017-05-22T19:33:14.175Z');
        const timestamp = 1495481594;
        const queryBody = new QueryBuilder(jest.fn(), jest.fn());

        it('should convert Date objects to epoch timestamps', () => {
            expect(queryBody.build(timestampShape, date))
                .toBe(`timeArg=${encodeURI(date.toISOString())}`);
        });

        it('should convert date strings to epoch timestamps', () => {
            expect(queryBody.build(timestampShape, date.toUTCString() as any))
                .toBe(`timeArg=${encodeURI(date.toISOString())}`);
        });

        it('should preserve numbers as epoch timestamps', () => {
            expect(queryBody.build(timestampShape, timestamp as any))
                .toBe(`timeArg=${encodeURI(date.toISOString())}`);
        });

        it('should throw if a value that cannot be converted to a time object is provided', () => {
            for (let nonTime of [[], {}, true, null, void 0, new ArrayBuffer(0)]) {
                expect(() => queryBody.build(timestampShape, nonTime))
                    .toThrow();
            }
        });
    });
});