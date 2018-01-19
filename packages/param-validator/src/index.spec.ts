import { Validator } from './'
import { Float, Integer, Member } from '@aws/types';

describe('Validator', () => {
    describe('blobs', () => {
        it('should require blobs be binary values or strings', () => {
            const { violations } = (new Validator).validate(
                [],
                { shape: { type: 'blob' } }
            );

            expect(violations).toEqual([
                '[Root shape]: Invalid type. Expected ArrayBuffer, ArrayBufferView or string but received [object Array]'
            ]);
        });

        it('should require blobs be binary values in strict mode', () => {
            const { violations } = (new Validator({strictTypes: true})).validate(
                '',
                { shape: { type: 'blob' } }
            );

            expect(violations).toEqual([
                '[Root shape]: Invalid type. Expected ArrayBuffer or ArrayBufferView but received string'
            ]);
        });

        it('should enforce a minimum length constraint by default', () => {
            const { violations } = (new Validator).validate(
                new ArrayBuffer(0),
                { shape: { type: 'blob', min: 1 } }
            );

            expect(violations).toEqual([
                '[Root shape]: Length violation -- 0 is less than the specified minimum of 1'
            ]);
        });

        it('should ignore a minimum length constraint if so configured', () => {
            const { violations } = (new Validator({min: false})).validate(
                new Uint8Array(0),
                { shape: { type: 'blob', min: 1 } }
            );

            expect(violations.length).toBe(0);
        });

        it('should ignore a maximum length constraint by default', () => {
            const { violations } = (new Validator).validate(
                new Uint32Array(10),
                { shape: { type: 'blob', max: 36 } }
            );

            expect(violations.length).toBe(0);
        });

        it('should enforce a maximum length constraint if so configured', () => {
            const { violations } = (new Validator({max: true})).validate(
                new Uint32Array(10),
                { shape: { type: 'blob', max: 36 } }
            );

            expect(violations).toEqual([
                '[Root shape]: Length violation -- 40 is greater than the specified maximum of 36'
            ]);
        });

        it('should enforce length constraints on strings based on byte length', () => {
            let context = (new Validator({max: true})).validate(
                '🐎👱❤',
                { shape: { type: 'blob', max: 10 } }
            );

            expect(context.violations).toEqual([
                '[Root shape]: Length violation -- 11 is greater than the specified maximum of 10'
            ]);

            context = (new Validator).validate(
                'fée',
                { shape: { type: 'blob', min: 4 } }
            );

            expect(context.violations.length).toBe(0);

            context = (new Validator).validate(
                '\uffff',
                { shape: { type: 'blob', min: 4 } }
            );

            expect(context.violations).toEqual([
                '[Root shape]: Length violation -- 3 is less than the specified minimum of 4'
            ]);
        });

        describe('streaming blobs', () => {
            // a stream type the SDK has never seen before
            class ExoticStream {}

            for (const streaming of [
                { shape: { type: 'blob' }, streaming: true } as Member,
                { shape: { type: 'blob', streaming: true } } as Member,
            ]) {

                it('should skip all validation on streaming blobs', () => {
                    const {value, violations} = (new Validator).validate(
                        new ExoticStream,
                        streaming
                    );

                    expect(value).toBeInstanceOf(ExoticStream);
                    expect(violations.length).toBe(0);
                });
            }
        });
    });

    describe('booleans', () => {
        it('should allow any value for booleans by default', () => {
            const { violations } = (new Validator).validate(
                {},
                { shape: { type: 'boolean' } }
            );

            expect(violations.length).toBe(0);
        });

        it('should require booleans be boolean values in strict mode', () => {
            const { violations } = (new Validator({strictTypes: true})).validate(
                null,
                { shape: { type: 'boolean' } }
            );

            expect(violations).toEqual([
                '[Root shape]: Invalid type. Expected boolean but received [object Null]'
            ]);
        });
    });

    for (const numberType of ['float', 'integer']) {
        describe(`${numberType}s`, () => {
            it('should allow any value that can be cast to a number by default', () => {
                const { violations } = (new Validator).validate(
                    new Date,
                    { shape: { type: numberType } as Float|Integer }
                );

                expect(violations.length).toBe(0);
            });

            it('should disallow values that cannot be cast to a number', () => {
                const { violations } = (new Validator).validate(
                    'foo',
                    { shape: { type: numberType } as Float|Integer }
                );

                expect(violations).toEqual([
                    '[Root shape]: Invalid type. Expected number but received string'
                ]);
            });

            it('should require number values in strict mode', () => {
                const { violations } = (new Validator({strictTypes: true})).validate(
                    new Date,
                    { shape: { type: numberType } as Float|Integer }
                );

                expect(violations).toEqual([
                    '[Root shape]: Invalid type. Expected number but received [object Date]'
                ]);
            });

            it('should enforce a minimum length constraint by default', () => {
                const { violations } = (new Validator).validate(
                    0,
                    { shape: { type: numberType, min: 1 } as Float|Integer }
                );

                expect(violations).toEqual([
                    '[Root shape]: Range violation -- 0 is less than the specified minimum of 1'
                ]);
            });

            it('should ignore a minimum length constraint if so configured', () => {
                const { violations } = (new Validator({min: false})).validate(
                    0,
                    { shape: { type: numberType, min: 1 } as Float|Integer }
                );

                expect(violations.length).toBe(0);
            });

            it('should ignore a maximum length constraint by default', () => {
                const { violations } = (new Validator).validate(
                    40,
                    { shape: { type: numberType, max: 36 } as Float|Integer }
                );

                expect(violations.length).toBe(0);
            });

            it('should enforce a maximum length constraint if so configured', () => {
                const { violations } = (new Validator({max: true})).validate(
                    40,
                    { shape: { type: numberType, max: 36 } as Float|Integer }
                );

                expect(violations).toEqual([
                    '[Root shape]: Range violation -- 40 is greater than the specified maximum of 36'
                ]);
            });
        });
    }

    describe('lists', () => {
        it('should allow any iterable value for lists', () => {
            const { value, violations } = (new Validator).validate(
                'foo',
                {
                    shape: {
                        type: 'list',
                        member: { shape: { type: 'string' } },
                    },
                }
            );

            expect(value).toEqual(['f', 'o', 'o'])
            expect(violations.length).toBe(0);
        });

        it('should disallow non-iterable values', () => {
            const { violations } = (new Validator).validate(
                {},
                {
                    shape: {
                        type: 'list',
                        member: { shape: { type: 'string' } },
                    },
                }
            );

            expect(violations).toEqual([
                '[Root shape]: Invalid type. Expected Array or Iterable but received [object Object]'
            ]);
        });



        it('should enforce a minimum length constraint by default', () => {
            const { violations } = (new Validator).validate(
                [],
                {
                    shape: {
                        type: 'list',
                        member: { shape: { type: 'string' } },
                        min: 1,
                    },
                }
            );

            expect(violations).toEqual([
                '[Root shape]: Length violation -- 0 is less than the specified minimum of 1'
            ]);
        });

        it('should ignore a minimum length constraint if so configured', () => {
            const { violations } = (new Validator({min: false})).validate(
                [],
                {
                    shape: {
                        type: 'list',
                        member: { shape: { type: 'string' } },
                        min: 1,
                    },
                }
            );

            expect(violations.length).toBe(0);
        });

        it('should ignore a maximum length constraint by default', () => {
            const { violations } = (new Validator).validate(
                ['foo', 'bar'],
                {
                    shape: {
                        type: 'list',
                        member: { shape: { type: 'string' } },
                        max: 1,
                    },
                }
            );

            expect(violations.length).toBe(0);
        });

        it('should enforce a maximum length constraint if so configured', () => {
            const { violations } = (new Validator({max: true})).validate(
                ['foo', 'bar'],
                {
                    shape: {
                        type: 'list',
                        member: { shape: { type: 'string' } },
                        max: 1,
                    },
                }
            );

            expect(violations).toEqual([
                '[Root shape]: Length violation -- 2 is greater than the specified maximum of 1'
            ]);
        });

        it('should enforce type constraints on list members', () => {
            const { violations } = (new Validator({max: true})).validate(
                [[], 123, new Date],
                {
                    shape: {
                        type: 'list',
                        member: { shape: { type: 'blob' } },
                    },
                }
            );

            expect(violations).toEqual([
                '[Root shape][0]: Invalid type. Expected ArrayBuffer, ArrayBufferView or string but received [object Array]',
                '[Root shape][1]: Invalid type. Expected ArrayBuffer, ArrayBufferView or string but received number',
                '[Root shape][2]: Invalid type. Expected ArrayBuffer, ArrayBufferView or string but received [object Date]',
            ]);
        });
    });

    describe('maps', () => {
        it('should allow any [key, value] iterable value for maps', () => {
            const { value, violations } = (new Validator).validate(
                function *() {
                    yield ['key', 'value'];
                }(),
                {
                    shape: {
                        type: 'map',
                        key: { shape: { type: 'string' } },
                        value: { shape: { type: 'string' } },
                    },
                }
            );

            expect(value).toBeInstanceOf(Map);
            expect([...value]).toEqual([['key', 'value']]);
            expect(violations.length).toBe(0);
        });

        it('should allow objects', () => {
            const { value, violations } = (new Validator).validate(
                { key: 'value' },
                {
                    shape: {
                        type: 'map',
                        key: { shape: { type: 'string' } },
                        value: { shape: { type: 'string' } },
                    },
                }
            );

            expect(value).toEqual({ key: 'value' });
            expect(violations).toEqual([]);
        });

        it('should disallow other values', () => {
            const { value, violations } = (new Validator).validate(
                123,
                {
                    shape: {
                        type: 'map',
                        key: { shape: { type: 'string' } },
                        value: { shape: { type: 'string' } },
                    },
                }
            );

            expect(value).toBe(123);
            expect(violations.length).toBe(1);
            expect(violations).toEqual([
                '[Root shape]: Invalid type. Expected Map, object or Iterable but received number'
            ]);
        });

        it('should enforce a minimum length constraint by default', () => {
            const { violations } = (new Validator).validate(
                {},
                {
                    shape: {
                        type: 'map',
                        key: { shape: { type: 'string' } },
                        value: { shape: { type: 'string' } },
                        min: 1,
                    },
                }
            );

            expect(violations).toEqual([
                '[Root shape]: Length violation -- 0 is less than the specified minimum of 1'
            ]);
        });

        it('should ignore a minimum length constraint if so configured', () => {
            const { violations } = (new Validator({min: false})).validate(
                {},
                {
                    shape: {
                        type: 'map',
                        key: { shape: { type: 'string' } },
                        value: { shape: { type: 'string' } },
                        min: 1,
                    },
                }
            );

            expect(violations.length).toBe(0);
        });

        it('should ignore a maximum length constraint by default', () => {
            const { violations } = (new Validator).validate(
                {
                    'foo': 'bar',
                    'fizz': 'buzz',
                },
                {
                    shape: {
                        type: 'map',
                        key: { shape: { type: 'string' } },
                        value: { shape: { type: 'string' } },
                        max: 1,
                    },
                }
            );

            expect(violations.length).toBe(0);
        });

        it('should enforce a maximum length constraint if so configured', () => {
            const { violations } = (new Validator({max: true})).validate(
                {
                    'foo': 'bar',
                    'fizz': 'buzz',
                },
                {
                    shape: {
                        type: 'map',
                        key: { shape: { type: 'string' } },
                        value: { shape: { type: 'string' } },
                        max: 1,
                    },
                }
            );

            expect(violations).toEqual([
                '[Root shape]: Length violation -- 2 is greater than the specified maximum of 1'
            ]);
        });

        it('should enforce type constraints on map keys', () => {
            const { violations } = (new Validator({strictTypes: true})).validate(
                new Map([
                    ['foo', 'bar'],
                    ['fizz', 'buzz'],
                    [123 as any, 'value']
                ]),
                {
                    shape: {
                        type: 'map',
                        key: { shape: { type: 'string' } },
                        value: { shape: { type: 'string' } },
                    },
                }
            );

            expect(violations).toEqual([
                '[Root shape][2].key: Invalid type. Expected string but received number',
            ]);
        });

        it('should enforce type constraints on map values', () => {
            const { violations } = (new Validator({strictTypes: true})).validate(
                {
                    foo: 'bar',
                    fizz: 'buzz',
                    key: 123
                },
                {
                    shape: {
                        type: 'map',
                        key: { shape: { type: 'string' } },
                        value: { shape: { type: 'string' } },
                    },
                }
            );

            expect(violations).toEqual([
                '[Root shape][2].value: Invalid type. Expected string but received number',
            ]);
        });
    });

    describe('strings', () => {
        it('should allow any value for strings by default', () => {
            const { value, violations } = (new Validator).validate(
                function foo() {},
                { shape: { type: 'string' } }
            );

            expect(value).toBe('function foo() {}');
            expect(violations.length).toBe(0);
        });

        it('should require strings be strings values in strict mode', () => {
            const { violations } = (new Validator({strictTypes: true})).validate(
                function foo() {},
                { shape: { type: 'string' } }
            );

            expect(violations).toEqual([
                '[Root shape]: Invalid type. Expected string but received function (foo)'
            ]);
        });

        it('should ignore a pattern constraint by default', () => {
            const { violations } = (new Validator).validate(
                'foo',
                { shape: { type: 'string', pattern: '\\S+\\s+\\S+' } }
            );

            expect(violations.length).toBe(0);
        });

        it('should enforce a pattern constraint if so configured', () => {
            const { violations } = (new Validator({pattern: true})).validate(
                'foo',
                { shape: { type: 'string', pattern: '\\S+\\s+\\S+' } }
            );

            expect(violations).toEqual([
                '[Root shape]: Pattern violation -- "foo" does not match regex pattern /\\S+\\s+\\S+/'
            ]);
        });

        it('should ignore an enum constraint by default', () => {
            const { violations } = (new Validator).validate(
                'foo',
                { shape: { type: 'string', enum: ['bar', 'baz'] } }
            );

            expect(violations.length).toBe(0);
        });

        it('should enforce an enum constraint if so configured', () => {
            const { violations } = (new Validator({enum: true})).validate(
                'foo',
                { shape: { type: 'string', enum: ['bar', 'baz'] } }
            );

            expect(violations).toEqual([
                '[Root shape]: Enum violation -- "foo" is not in the list of allowed values (bar, baz)'
            ]);
        });

        it('should enforce a minimum length constraint by default', () => {
            const { violations } = (new Validator).validate(
                '',
                { shape: { type: 'string', min: 1 } }
            );

            expect(violations).toEqual([
                '[Root shape]: Length violation -- 0 is less than the specified minimum of 1'
            ]);
        });

        it('should ignore a minimum length constraint if so configured', () => {
            const { violations } = (new Validator({min: false})).validate(
                '',
                { shape: { type: 'string', min: 1 } }
            );

            expect(violations.length).toBe(0);
        });

        it('should ignore a maximum length constraint by default', () => {
            const { violations } = (new Validator).validate(
                'foo',
                { shape: { type: 'string', max: 2 } }
            );

            expect(violations.length).toBe(0);
        });

        it('should enforce a maximum length constraint if so configured', () => {
            const { violations } = (new Validator({max: true})).validate(
                'foo',
                { shape: { type: 'string', max: 2 } }
            );

            expect(violations).toEqual([
                '[Root shape]: Length violation -- 3 is greater than the specified maximum of 2'
            ]);
        });

        it('should enforce a maximum based on code points', () => {
            const { violations } = (new Validator({max: true})).validate(
                '🐎👱❤',
                { shape: { type: 'string', max: 10 } }
            );

            expect(violations.length).toBe(0);
        });
    });

    describe('structures', () => {
        const foo: Member = {
            shape:  {
                type: 'structure',
                required: [ 'fizz', 'buzz' ],
                members: {
                    fizz: { shape: { type: 'string' } },
                    buzz: { shape: { type: 'float' } },
                    pop: { shape: { type: 'boolean' } },
                }
            }
        };

        it('should disallow non-object values', () => {
            const { value, violations } = (new Validator).validate(123, foo);

            expect(value).toBe(123);
            expect(violations.length).toBe(1);
            expect(violations).toEqual([
                '[Root shape]: Invalid type. Expected object but received number'
            ]);
        });

        it('should report any missing required properties by default', () => {
            const { value, violations } = (new Validator).validate({}, foo);

            expect(value).toEqual({});
            expect(violations).toEqual([
                '[Root shape]: Required property fizz not set',
                '[Root shape]: Required property buzz not set',
            ]);
        });

        it('should ignore any missing required properties if so configured', () => {
            const { value, violations } = (new Validator({required: false}))
                .validate({}, foo);

            expect(value).toEqual({});
            expect(violations.length).toBe(0);
        });

        it('should validate structure members', () => {
            const { value, violations } = (new Validator({strictTypes: true})).validate(
                    {
                        fizz: 123,
                        buzz: 'quux',
                        pop: [],
                    },
                    foo
                );

            expect(value).toEqual({
                fizz: 123,
                buzz: 'quux',
                pop: [],
            });
            expect(violations).toEqual([
                '[Root shape].fizz: Invalid type. Expected string but received number',
                '[Root shape].buzz: Invalid type. Expected number but received string',
                '[Root shape].pop: Invalid type. Expected boolean but received [object Array]',
            ]);
        });
    });

    describe('timestamps', () => {
        it(
            'should allow any value that can be converted to a date for timestamps by default',
            () => {
                const { violations } = (new Validator).validate(
                    '2018-01-10T03:57:44.232Z',
                    { shape: { type: 'timestamp' } }
                );

                expect(violations.length).toBe(0);
            }
        );

        it('should disallow values that cannot be converted to dates', () => {
            const { violations } = (new Validator).validate(
                'foo',
                { shape: { type: 'timestamp' } }
            );

            expect(violations).toEqual([
                '[Root shape]: Invalid date received for timestamp property'
            ]);
        });

        it('should require timestamps be Date values in strict mode', () => {
            const { violations } = (new Validator({strictTypes: true})).validate(
                '2018-01-10T03:57:44.232Z',
                { shape: { type: 'timestamp' } }
            );

            expect(violations).toEqual([
                '[Root shape]: Invalid type. Expected Date but received string'
            ]);
        });
    });
});
