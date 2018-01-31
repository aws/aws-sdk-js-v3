import { localStorage } from './localStorage';
import { IndexedDbStorage } from './IndexedDbStorage';
import { InMemoryStorage } from './InMemoryStorage';

describe('localStorage', () => {
    const storageAtInit: Storage|undefined = window && window.localStorage;
    const idbAtInit: IDBFactory|undefined = self && self.indexedDB;

    beforeEach(() => {
        if (window) {
            (window.localStorage as any) = undefined;
        }

        if (self) {
            (self.indexedDB as any) = undefined;
        }
    });

    afterEach(() => {
        if (window) {
            (window.localStorage as any) = storageAtInit;
        }

        if (self) {
            (self.indexedDB as any) = idbAtInit;
        }
    });

    it('should return an IndexedDB-backed cache if possible', () => {
        if (!self) {
            (self as any) = {};
        }
        (self.indexedDB as any) = { open() { return {}; } };

        expect(localStorage()).toBeInstanceOf(IndexedDbStorage);
    });

    it(
        'should return window.localStorage if IndexedDB is undefined but localStorage is available',
        () => {
            if (!window) {
                (window as any) = {};
            }
            (window.localStorage as any) = {};

            expect(localStorage()).toBe(window.localStorage);
        }
    );

    it('should return an in-memory storage implementation otherwise', () => {
        expect(localStorage()).toBeInstanceOf(InMemoryStorage);
    });
});
