import {LRUCache} from './LRU';

describe('LRUCache', () => {
    test ('should raise error when instantiate cache size smaller than 1', () => {
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
        })
        const expectedSequence = [15, 18, 11, 10, 17, 6, 0, 9, 4, 8]
        for (let i = 0; i < cache.length; i++) {
            const value = cache.get(String(i));
            expect(value).toEqual(expectedSequence[i]);
        }
    });

    test('get un-exist element will return undefined', () => {
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

    test ('remove element correctly', () => {
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
        }
    });
})