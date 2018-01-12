import {QueryBuilder} from "./";
import {Member, OperationModel} from "@aws/types";
import {minimalOperation} from './operations.fixtures';
import {
    blobShape,
    booleanShape,
    floatShape,
    integerShape,
    listOfStringsShape,
    listOfStringsFlattenedShape,
    listOfStringsWithLocationNameShape,
    listOfStringsWithLocationNameFlattenedShape,
    mapOfStringsToIntegersShape,
    mapOfStringsToIntegersFlattenedShape,
    mapOfStringsToIntegersWithLocationNameShape,
    stringShape,
    timestampShape
} from './shapes.fixtures';


describe('QueryBuilder', () => {
    describe('structures', () => {
        const inputMember: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    foo: {
                        shape: stringShape,
                    },
                    bar: {
                        shape: stringShape,
                    },
                    baz: {
                        shape: stringShape,
                        locationName: 'quux'
                    }
                }
            }
        };

        const queryBody = new QueryBuilder(jest.fn(), jest.fn());

        it('should serialize known properties of a structure', () => {
            const toSerialize = {foo: 'fizz', bar: 'buzz'};
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('bar=buzz&foo=fizz');
        });

        it('should serialize empty structures as empty strings', () => {
            expect(queryBody.build(inputMember, {})).toEqual('');
        });

        it('should ignore unknown properties', () => {
            const toSerialize = {foo: 'fizz', bar: 'buzz', pop: 'weasel'};
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('bar=buzz&foo=fizz');
        });

        it('should serialize properties to the locationNames', () => {
            const toSerialize = {baz: 'value'};
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('quux=value');
        });

        it('should throw if a scalar value is provided', () => {
            for (let scalar of ['string', 123, true, null, void 0]) {
                expect(() => queryBody.build(inputMember, scalar)).toThrow();
            }
        });

        it('should searialize nested structure', () => {
            const inputMember: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        foo: {
                            shape: {
                                type: 'structure',
                                required: [],
                                members: {
                                    bar: {
                                        shape: stringShape,
                                    },
                                    pop: {
                                        shape: booleanShape,
                                    }
                                }
                            }
                        }
                    }
                }
            };

            const toSerialize = {foo: {bar: 'buzz', pop: false}};
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('foo.bar=buzz&foo.pop=false');
        });
    });

    describe('lists', () => {
        const inputMember: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    nah: {
                        shape: listOfStringsShape,
                    }
                }
            }
        }

        const queryBody = new QueryBuilder(jest.fn(), jest.fn());

        it('should serialize non-flattened list', () => {
            const toSerialize = {nah: ['foo', 'bar', 'baz']};
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('nah.member.1=foo&nah.member.2=bar&nah.member.3=baz');
        });

        it('should serialize empty list', () => {
            const toSerialize = {nah: []};
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('nah=');
        });

        it('should serialize iterators', () => {
            const iterator = function* () {
                yield 'foo';
                yield 'bar';
                yield 'baz';
            };
            const toSerialize = {nah: iterator()};
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('nah.member.1=foo&nah.member.2=bar&nah.member.3=baz');
        });

        it('should throw if a non-iterable value is provided', () => {
            for (let nonIterable of [{}, 123, true, null, void 0]) {
                const toSerialize = {nah: nonIterable};
                expect(() => queryBody.build(inputMember, toSerialize))
                    .toThrow();
            }
        });

        it('should serialize non-flattened list with locationName', () => {
            const inputMember: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        nah: {
                            shape: listOfStringsWithLocationNameShape,
                        }
                    }
                }
            };
            const toSerialize = {nah: ['foo', 'bar', 'baz']};
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('nah.item.1=foo&nah.item.2=bar&nah.item.3=baz');
        });

        it('should serialize flattened list', () => {
            const inputMember: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        nah: {
                            shape: listOfStringsFlattenedShape,
                        }
                    }
                }
            };

            const toSerialize = {nah: ['foo', 'bar', 'baz']};
            expect(queryBody.build(inputMember, toSerialize))
                .toBe('nah.1=foo&nah.2=bar&nah.3=baz');
        });

        it('should serialize flattened list with locationName', () => {
            const inputMember: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        nah: {
                            shape: listOfStringsWithLocationNameFlattenedShape,
                        }
                    }
                }
            };

            const toSerialize = {nah: ['foo', 'bar', 'baz']};
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('item.1=foo&item.2=bar&item.3=baz');
        });
    });

    describe('maps', () => {
        const inputMember: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    nah: {
                        shape: mapOfStringsToIntegersShape,
                    }
                }
            }
        };

        const queryBody = new QueryBuilder(jest.fn(), jest.fn());

        it('should throw when given a non-object input', () => {
            const toSerialize = {nah: 1};
            expect(() => queryBody.build(inputMember, toSerialize)).toThrow()
        });

        it('should serialize non-flattened objects', () => {
            const toSerialize = {
                nah: {
                    foo: 0,
                    bar: 1
                }
            };
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('nah.entry.1.key=foo&nah.entry.1.value=0&nah.entry.2.key=bar&nah.entry.2.value=1');
        });

        it('should serialize [key, value] iterables (like ES6 maps)', () => {
            const iterator = function* () {
                yield ['foo', 0];
                yield ['bar', 1];
            };
            const toSerialize = {nah: iterator()}
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('nah.entry.1.key=foo&nah.entry.1.value=0&nah.entry.2.key=bar&nah.entry.2.value=1');
        });

        it('should throw if a non-iterable and non-object value is provided', () => {
            for (let nonIterable of [123, true, null, void 0]) {
                expect(() => queryBody.build(inputMember, nonIterable))
                    .toThrow();
            }
        });

        it('should serialize map with locationName of key and value', () => {
            const inputMember: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        nah: {
                            shape: mapOfStringsToIntegersWithLocationNameShape,
                        }
                    }
                }
            };
            const toSerialize = {
                nah: {
                    foo: 0,
                    bar: 1
                }
            };
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('nah.entry.1.theKey=foo&nah.entry.1.theValue=0&nah.entry.2.theKey=bar&nah.entry.2.theValue=1');
        });

        it('should serialize flattened map', () => {
            const inputMember: Member = {
                shape: {
                    type: 'structure',
                    required: [],
                    members: {
                        nah: {
                            shape: mapOfStringsToIntegersFlattenedShape,
                        }
                    }
                }
            };

            const toSerialize = {
                nah: {
                    foo: 0,
                    bar: 1
                }
            };
            expect(queryBody.build(inputMember, toSerialize))
                .toEqual('nah.1.key=foo&nah.1.value=0&nah.2.key=bar&nah.2.value=1');
        });
    });

    describe('blobs', () => {
        const inputMember: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    blobArg: {
                        shape: blobShape,
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
            queryBody.build(inputMember, {blobArg: new ArrayBuffer(2)})

            expect(base64Encode.mock.calls.length).toBe(1);
        });

        it('should base64 encode ArrayBufferViews', () => {
            queryBody.build(inputMember, {blobArg: Uint8Array.from([0])});

            expect(base64Encode.mock.calls.length).toBe(1);
        });

        it('should utf8 decode and base64 encode strings', () => {
            queryBody.build(inputMember, {blobArg: 'foo'});

            expect(base64Encode.mock.calls.length).toBe(1);
            expect(utf8Decode.mock.calls.length).toBe(1);
        });

        it('should throw if a non-binary value is provided', () => {
            for (let item of [[], {}, 123, true, null, void 0]) {
                expect(() => queryBody.build(inputMember, {blobArg: item}))
                    .toThrow();
            }
        });
    });

    describe('timestamps', () => {
        const inputMember: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    timeArg: {
                        shape: timestampShape,
                    }
                }
            }
        };

        const date = new Date('2017-05-22T19:33:14.175Z');
        const timestamp = 1495481594;
        const queryBody = new QueryBuilder(jest.fn(), jest.fn());

        it('should convert Date objects to ISO strings', () => {
            expect(queryBody.build(inputMember, {timeArg: date}))
                .toBe('timeArg=2017-05-22T19%3A33%3A14Z');
        });

        it('should convert date strings to ISO Strings', () => {
            expect(queryBody.build(inputMember, {timeArg: date.toString()}))
                .toBe('timeArg=2017-05-22T19%3A33%3A14Z');
        });

        it('should interpret numbers as epoch timestamps', () => {
            expect(queryBody.build(inputMember, {timeArg: timestamp}))
                .toBe('timeArg=2017-05-22T19%3A33%3A14Z');
        });

        it('should throw if a value that cannot be converted to a time object is provided', () => {
            for (let item of [[], {}, true, null, void 0, new ArrayBuffer(0)]) {
                const nonTime = {timeArg: item};
                expect(() => queryBody.build(inputMember, nonTime))
                    .toThrow();
            }
        });
    });

    describe('scalars', () => {
        const stringMember: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    stringArg: {
                        shape: stringShape,
                    }
                }
            }
        };
        const queryBody = new QueryBuilder(jest.fn(), jest.fn());
        it('should serialize a string with out-range character', () => {
            const toSerialize = {stringArg: 'thisIsA&@$💩String'}
            expect(queryBody.build(stringMember, toSerialize))
                .toEqual('stringArg=thisIsA%26%40%24%F0%9F%92%A9String');
        });

        it('should serialize an empty string', () => {
            const toSerialize = {stringArg: ''}
            expect(queryBody.build(stringMember, toSerialize))
                .toEqual('stringArg=');
        });

        it('should throw when given a null', () => {
            const toSerialize = {stringArg: void 0};
            expect(() => queryBody.build(stringMember, toSerialize))
                .toThrow();
        });

        it('should serialize an empty string and structure with extra property', () => {
            const toSerialize = {stringArg: '', another: 'aaa'}
            expect(queryBody.build(stringMember, toSerialize))
                .toEqual('stringArg=');
        });

        it('should serialize an object that can be converted to string', () => {
            const printableObj = {
                toString: function() {
                    return 'object_string';
                }
            };
            const toSerialize = {stringArg: printableObj};
            expect(queryBody.build(stringMember, toSerialize))
                .toEqual('stringArg=object_string');
        });

        const floatMember: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    floatArg: {
                        shape: floatShape,
                    }
                }
            }
        };
        it('should serialize a float', () => {
            const toSerialize = {floatArg: 3.14}
            expect(queryBody.build(floatMember, toSerialize))
                .toEqual('floatArg=3.14');
        });

        it('should throw given a member that cannot be converted to float', () => {
            const toSerialize = {floatArg: 'bar'}
            expect(() => queryBody.build(floatMember, toSerialize))
                .toThrow();
        });

        const integerMember: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    integerArg: {
                        shape: integerShape,
                    }
                }
            }
        };
        it('should serialize a integer', () => {
            const toSerialize = {integerArg: 1}
            expect(queryBody.build(integerMember, toSerialize))
                .toEqual('integerArg=1');
        });

        it('should throw given a member that cannot be converted to integer', () => {
            const toSerialize = {integerArg: 'bar'}
            expect(() => queryBody.build(integerMember, toSerialize))
                .toThrow();
        });

        const booleanMember: Member = {
            shape: {
                type: 'structure',
                required: [],
                members: {
                    booleanArg: {
                        shape: booleanShape,
                    }
                }
            }
        };
        it('should serialize a boolean', () => {
            const toSerialize = {booleanArg: false}
            expect(queryBody.build(booleanMember, toSerialize))
                .toEqual('booleanArg=false');
        });
    });
});
