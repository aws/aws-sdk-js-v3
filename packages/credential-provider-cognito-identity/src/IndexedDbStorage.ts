import { Storage } from './Storage';
import { ProviderError } from '@aws/property-provider';

const STORE_NAME = 'IdentityIds';

export class IndexedDbStorage implements Storage {
    private readonly db: Promise<IDBDatabase>;

    constructor(
        dbName: string = 'aws:cognito-identity-ids',
        version: number = 1
    ) {
        const openDbRequest = self.indexedDB.open(dbName, version);
        this.db = new Promise((resolve, reject) => {
            openDbRequest.onsuccess = () => {
                resolve(openDbRequest.result);
            }

            openDbRequest.onerror = () => {
                reject(openDbRequest.error);
            }

            openDbRequest.onupgradeneeded = (event) => {
                const db = openDbRequest.result;
                db.onerror = () => {
                    reject(new Error('Failed to create object store'));
                }

                db.createObjectStore(STORE_NAME, {keyPath: 'id'});
            }
        });

        // Prevent unhandled promise rejections from bubbling up
        this.db.catch(() => {});
    }

    async getItem(key: string): Promise<string|null> {
        const store = (await this.db)
            .transaction(STORE_NAME, 'readonly')
            .objectStore(STORE_NAME);
        const req = store.get(key);

        return new Promise<string|null>(resolve => {
            req.onerror = () => resolve(null);

            req.onsuccess = () => resolve(req.result ? req.result.value : null);
        });
    }

    async removeItem(key: string): Promise<void> {
        const store = (await this.db)
            .transaction(STORE_NAME, 'readwrite')
            .objectStore(STORE_NAME);
        const req = store.delete(key);

        return new Promise<void>((resolve, reject) => {
            req.onerror = () => reject(req.error);

            req.onsuccess = () => resolve();
        });
    }

    async setItem(id: string, value: string): Promise<void> {
        const store = (await this.db)
            .transaction(STORE_NAME, 'readwrite')
            .objectStore(STORE_NAME);
        const req = store.put({ id, value });

        return new Promise<void>((resolve, reject) => {
            req.onerror = () => reject(req.error);

            req.onsuccess = () => resolve();
        });
    }
}
