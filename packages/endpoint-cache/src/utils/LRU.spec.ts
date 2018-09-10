import {LRUCache} from './LRU';

describe('LRUCache', () => {
    test('should raise error when instantiate cache size smaller than 1', () => {
        for (const size of [-1, 0, undefined, 'string']) {
            let error;
            try {
                new LRUCache(-1);
            } catch(e) {
                error = e;
            }
            expect(error).toBeInstanceOf(Error);
        }
    });

    test('can put elements correctly', () => {
        const integers = [3, 5, 2, 7, 1, 6, 0, 9, 4, 8]
        const cache = new LRUCache<number>(integers.length);
        expect(cache.length).toBe(0);
        integers.forEach((cur, index) => {
            cache.put(String(index), cur);
            expect(cache.length).toEqual(index + 1);
        });
        const moreIntegers = [15, 18, 11, 10, 17];
        moreIntegers.forEach((cur, index) => {
          cache.put(String(index), cur);
          expect(cache.length).toEqual(integers.length);
        });
        const andMoreIntegers = [20, 25, 22, 24, 23];
        andMoreIntegers.forEach((cur, index) => {
            cache.put(String(integers.length + index), cur);
            expect(cache.length).toEqual(integers.length);
        })
        const expectedValueSequence = [15, 18, 11, 10, 17, undefined, undefined, undefined, undefined, undefined, 20, 25, 22, 24, 23];
        for (let i = 0; i < 15; i++) {
            expect(cache.get(String(i))).toBe(expectedValueSequence[i]);
        }
    });

    test('get non-exist element will return undefined', () => {
        const integers = [3, 5, 2, 7, 1]
        const cache = new LRUCache<number>(integers.length);
        integers.forEach((cur, index) => {
            cache.put(String(index), cur);
        });
        expect(cache.length).toBe(integers.length);
        const getIntegers = [];
        for (let i = 0; i < 10; i++) {
            getIntegers.push(cache.get(String(i)));
        }
        expect(getIntegers).toEqual([
            3, 5, 2, 7, 1, undefined, undefined, undefined, undefined, undefined
        ]);
    });

    test('remove element correctly', () => {
        const integers = [3, 5, 2, 7, 1, 6, 0, 9, 4, 8]
        const cache = new LRUCache<number>(integers.length);
        integers.forEach((cur, index) => {
            cache.put(String(index), cur);
        });
        expect(cache.length).toBe(integers.length);
        for (let i = 0; i < integers.length; i++) {
            cache.remove(String(i));
            expect(cache.length).toBe(integers.length - i -1);
            expect(cache.get(String(i))).toBeUndefined;
        };
        integers.forEach((cur, index) => {
            cache.put(String(index), cur);
        });
        expect(cache.length).toBe(integers.length);
        for (let i = 0; i < integers.length; i++) {
            expect(cache.get(String(i))).toBe(integers[i]);
        };
    });

    test('remove duplicated elements when put', () => {
        const integers = [3, 5, 2, 4, 1, 2, 1];
        const expected = [6, 5, 0, 3, 1];
        const cache = new LRUCache<number>(integers.length);
        integers.forEach((cur, index) => {
            cache.put(String(cur), index);
        });
        expect(cache.length).toBe(5);
        for (let i = 1; i <= 5; i++) {
            expect(cache.get(String(i))).toBe(expected[i-1]);
        }
    });

    test('empty all contents', () => {
        const integers = [3, 5, 2, 7, 1, 6, 0, 9, 4, 8];
        const cache = new LRUCache<number>(integers.length);
        integers.forEach((cur, index) => {
            cache.put(String(index), cur);
        });
        expect(cache.length).toBe(integers.length);
        cache.empty();
        expect(cache.length).toBe(0);
        integers.forEach((cur, index) => {
            expect(cache.get(String(index))).toBeUndefined;
        });
    })
})