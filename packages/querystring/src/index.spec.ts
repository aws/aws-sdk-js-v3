import { Querystring } from '.';

const TEST_CASES: {[querystring: string]: Array<[string, string|undefined]>} = {
    // basic querystring
    'a=b&c=d': [
        ['a', 'b'],
        ['c', 'd']
    ],
    // leading question mark
    '?a=b&c=d': [
        ['a', 'b'],
        ['c', 'd']
    ],
    // exotic/reserved characters
    '?weird%3D%26key=strange%25value&pony=%F0%9F%90%8E': [
        ['weird=&key', 'strange%value'],
        ['pony', '🐎']
    ],
    // mixed defined/undefined values
    '?a=b&a=c&d=&e&f&f=g': [
        ['a', 'b'],
        ['a', 'c'],
        ['d', ''],
        ['e', undefined],
        ['f', undefined],
        ['f', 'g'],
    ],
    // diacriticals
    '?snap=cr%C3%A4ckle&snap=p%C3%B4p&fizz=buzz&quux': [
        ['snap', 'cräckle'],
        ['snap', 'pôp'],
        ['fizz', 'buzz'],
        ['quux', undefined],
    ],
    // empty querystring
    '?': [],
}

describe('Querystring', () => {
    for (const querystring of Object.keys(TEST_CASES)) {
        const expected = [...TEST_CASES[querystring]]
        it(`should properly parse ${querystring}`, () => {
            for (const pair of new Querystring(querystring)) {
                expect(pair).toEqual(expected.shift())
            }
        })

        it(`should parse and re-encode ${querystring}`, () => {
            expect((new Querystring(querystring)).toString())
                .toBe(querystring.replace(/^\?/, ''))
        })
    }

    describe('#delete', () => {
        it(
            'should remove all values for the provided key from the querystring',
            () => {
                const qs = new Querystring
                qs.append('foo', 'bar')
                qs.append('foo', 'baz')
                qs.append('foo', 'quux')

                expect(qs.toString()).toBe('foo=bar&foo=baz&foo=quux')

                qs.delete('foo')
                expect(qs.has('foo')).toBe(false)
                expect(qs.toString()).toBe('')
            }
        )
    })

    describe('#getAll', () => {
        it('should return an empty array for unset keys', () => {
            expect((new Querystring).getAll('foo')).toEqual([])
        })

        it('should return all values for set keys', () => {
            const qs = new Querystring
            qs.append('foo', 'bar')
            qs.append('foo', 'baz')
            qs.append('foo', 'quux')
            qs.append('foo', null)

            expect(qs.getAll('foo')).toEqual([
                'bar',
                'baz',
                'quux',
                undefined
            ])
        })
    })

    describe('#keys', () => {
        it('should yield each key for which values have been set', () => {
            const qs = new Querystring
            qs.append('foo', 'bar')
            qs.append('fizz', 'buzz')
            qs.append('foo', 'baz')

            expect([...qs.keys()]).toEqual(['foo', 'fizz'])
        })
    })

    describe('#set', () => {
        it('should overwrite all values set for a key', () => {
            const qs = new Querystring
            qs.append('foo', 'bar')
            qs.append('foo', 'baz')

            expect(qs.getAll('foo')).toEqual(['bar', 'baz'])

            qs.set('foo', null)
            expect(qs.getAll('foo')).toEqual([undefined])

            qs.set('foo', 'quux')
            expect(qs.getAll('foo')).toEqual(['quux'])
        })
    })

    describe('#sort', () => {
        it('should sort parameter keys alphabetically', () => {
            const qs = new Querystring
            qs.append('foo', 'car')
            qs.append('foo', 'baz')
            qs.append('cc', undefined)
            qs.append('ee', undefined)
            qs.append('aa', undefined)
            qs.append('dd', undefined)
            qs.append('ZZ', undefined)
            qs.append('bb', null)

            expect(qs.toString()).toBe('foo=car&foo=baz&cc&ee&aa&dd&ZZ&bb')

            qs.sort()

            expect(qs.toString()).toBe('ZZ&aa&bb&cc&dd&ee&foo=car&foo=baz')
        })
    })

    describe('#values', () => {
        it('should yield all values for all keys', () => {
            const qs = new Querystring
            qs.append('foo', 'bar')
            qs.append('fizz', 'buzz')
            qs.append('foo', 'baz')

            expect([...qs.values()]).toEqual(['bar', 'baz', 'buzz'])
        })
    })
})
