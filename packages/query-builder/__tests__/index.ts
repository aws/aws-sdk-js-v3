import {QueryBuilder} from "../";
import {Member} from "@aws/types";

describe('QueryBuilder', () => {
    describe('input', () => {
        const nonstructure: Member = {
            shape: {
                type: "string"
            }
        }
        const queryBody = new QueryBuilder(jest.fn(), jest.fn());

        it('should through if input shape is not a structure', () => {
            const toSerialize = {foo: 'fizz'};
            expect(() => queryBody.build(nonstructure, toSerialize)).toThrow();
        });
    });

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

        it('should serialize non-flattened list', () => {
            const toSerialize = {nah: ['foo', 'bar', 'baz']};
            expect(queryBody.build(listShape, toSerialize))
                .toEqual('nah.member.1=foo&nah.member.2=bar&nah.member.3=baz');
        });

        it('should serialize empty list', () => {
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
                            member: {
                                shape: {type: 'string'},
                                locationName: 'item'
                            }
                        }
                    }
                }
            }
        };
        it('should serialize non-flattened list with locationName', () => {
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

        const listShapeFlattenedWithName: Member =  {
            shape: {
                type: "structure",
                required: [],
                members: {
                    nah: {
                        shape: {
                            type: 'list',
                            flattened: true,
                            member: {
                                shape: {type: 'string'},
                                locationName: 'item'
                            }
                        }
                    }
                }
            }
        }
        it('should serialize flattened list with locationName', () => {
            const toSerialize = {nah: ['foo', 'bar', 'baz']};
            expect(queryBody.build(listShapeFlattenedWithName, toSerialize))
                .toEqual('item.1=foo&item.2=bar&item.3=baz');
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

        it('should throw when given a non-object input', () => {
            const toSerialize = {nah: 1};
            expect(() => queryBody.build(mapShape, toSerialize)).toThrow()
        });

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
            expect(queryBody.build(mapShapeWithName, toSerialize))
                .toEqual('nah.entry.1.theKey=foo&nah.entry.1.theValue=0&nah.entry.2.theKey=bar&nah.entry.2.theValue=1');
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
            expect(queryBody.build(mapShapeFlattened, toSerialize))
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

        it('should base64 encode ArrayBuffers', () => {
            queryBody.build(blobShape, {blobArg: new ArrayBuffer(2)});

            expect(base64Encode.mock.calls.length).toBe(1);
        });

        it('should base64 encode ArrayBufferViews', () => {
            queryBody.build(blobShape, {blobArg: Uint8Array.from([0])});

            expect(base64Encode.mock.calls.length).toBe(1);
        });

        it('should utf8 decode and base64 encode strings', () => {
            queryBody.build(blobShape, {blobArg: 'foo' as any});

            expect(base64Encode.mock.calls.length).toBe(1);
            expect(utf8Decode.mock.calls.length).toBe(1);
        });

        it('should throw if a non-binary value is provided', () => {
            for (let item of [[], {}, 123, true, null, void 0]) {
                const nonBinary = {blobArg: item}
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
            expect(queryBody.build(timestampShape, {timeArg: date}))
                .toBe('timeArg=2017-05-22T19%3A33%3A14Z');
        });

        it('should convert date strings to epoch timestamps', () => {
            expect(queryBody.build(timestampShape, {timeArg: date.toUTCString()}))
                .toBe('timeArg=2017-05-22T19%3A33%3A14Z');
        });

        it('should preserve numbers as epoch timestamps', () => {
            expect(queryBody.build(timestampShape, {timeArg: timestamp}))
                .toBe('timeArg=2017-05-22T19%3A33%3A14Z');
        });

        it('should throw if a value that cannot be converted to a time object is provided', () => {
            for (let item of [[], {}, true, null, void 0, new ArrayBuffer(0)]) {
                const nonTime = {timeArg: item};
                expect(() => queryBody.build(timestampShape, nonTime))
                    .toThrow();
            }
        });
    });

    describe('scalars', () => {
        const stringShape: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    stringArg: {
                        shape: {type: "string"},
                    }
                }
            }
        };
        const queryBody = new QueryBuilder(jest.fn(), jest.fn());
        it('should serialize a string with out-range character', () => {
            const toSerialize = {stringArg: 'thisIsA&@$💩String'}
            expect(queryBody.build(stringShape, toSerialize)).toEqual('stringArg=thisIsA%26%40%24%F0%9F%92%A9String');
        });

        it('should serialize an empty string', () => {
            const toSerialize = {stringArg: ''}
            expect(queryBody.build(stringShape, toSerialize)).toEqual('stringArg=');
        });

        it('should throw when given a null', () => {
            const toSerialize = {stringArg: void 0};
            expect(() => queryBody.build(stringShape, toSerialize)).toThrow();
        });

        it('should serialize an empty string and structure with extra property', () => {
            const toSerialize = {stringArg: '', another: 'aaa'}
            expect(queryBody.build(stringShape, toSerialize)).toEqual('stringArg=');
        });

        it('should serialize an object that can be converted to string', () => {
            const printableObj = {
                toString: function() {
                    return 'object_string';
                }
            };
            const toSerialize = {stringArg: printableObj};
            expect(queryBody.build(stringShape, toSerialize)).toEqual('stringArg=object_string');
        });

        const numberShape: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    numberArg: {
                        shape: {type: "number"},
                    }
                }
            }
        };
        it('should serialize a number', () => {
            const toSerialize = {numberArg: 0}
            expect(queryBody.build(numberShape, toSerialize)).toEqual('numberArg=0');
        });

        it('should throw given a member that cannot be converted to number', () => {
            const toSerialize = {numberArg: 'bar'}
            expect(() => queryBody.build(numberShape, toSerialize)).toThrow();
        });

        const booleanShape: Member = {
            shape: {
                type: "structure",
                required: [],
                members: {
                    booleanArg: {
                        shape: {type: "boolean"},
                    }
                }
            }
        };
        it('should serialize a boolean', () => {
            const toSerialize = {booleanArg: false}
            expect(queryBody.build(booleanShape, toSerialize)).toEqual('booleanArg=false');
        });
    });
});