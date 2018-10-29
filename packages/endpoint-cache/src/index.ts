import {LRUCache} from './utils/LRU';
import {DiscoveredEndpoints} from '@aws/types';

const CACHE_SIZE = 1000;
type EndpointRecords = Array<{Address: string, Expire: number}>;
/**
 * Object with keys used to identify a request endpoint
 */
export interface EndpointIdentifier {
    [key: string]: string | undefined;
    serviceId?: string;
    region?: string;
    accessKeyId?: string;
    operation?: string;
}

/**
 * An LRU cache to store endpoints from endpoint discovery.
 * Default to have capability of 1000;
 */
export class EndpointCache {
    private cache: LRUCache<EndpointRecords>
    constructor(public readonly maxSize: number = CACHE_SIZE) {
        this.cache = new LRUCache<EndpointRecords>(maxSize);
    };

    get size() {
        return this.cache.length;
    }

    /**
     * Put discovered endpoints into cache
     * @param key Object with keys used to identify a request that can be sent to given endpoints
     * @param value Array of endpoints from endpoint discovery
     */
    public put(key: EndpointIdentifier | string, value: DiscoveredEndpoints) {
        const keyString = typeof key !== 'string' ? EndpointCache.getKeyString(key) : key;
        const endpointRecord = this.populateValue(value);
        this.cache.put(keyString, endpointRecord);
    }

    /**
     * Try to get discovered endpoints from cache. Returns undefined if not found.
     * @param key Object with keys used to identify a request that can be sent to returned endpoints
     */
    public get(key: EndpointIdentifier | string): EndpointRecords | undefined {
        const keyString = typeof key !== 'string' ? EndpointCache.getKeyString(key) : key;
        const now = Date.now();
        const records = this.cache.get(keyString);
        if (records) {
            for (const record of records) {
                if (record.Expire < now) {
                    this.cache.remove(keyString);
                    return undefined
                }
            }
        }
        return records;
    }

    /**
     * Generate a string to index the cache
     * @param key Object with keys to identify a request
     */
    public static getKeyString(key: EndpointIdentifier): string {
        const identifiers: Array<string> = [];
        for (const identifierName of Object.keys(key).sort()) {
            if (key[identifierName] === undefined)
                continue;
            identifiers.push(key[identifierName]!)
        }
        return identifiers.join(' ');
    }

    /**
     * Remove all the key-value pairs in the cache. This operation contains
     * iterating over all existing key-value pairs.
     */
    public empty(): void {
        this.cache.empty();
    }

    /**
     * Remove discovered endpoints associated with given request
     * @param key Object with keys to identify a request
     */
    public remove(key: EndpointIdentifier | string): void {
        const keyString = typeof key !== 'string' ? EndpointCache.getKeyString(key) : key;
        this.cache.remove(keyString);
    }

    private populateValue(endpoints: DiscoveredEndpoints): EndpointRecords {
        const now = Date.now();
        return endpoints.map((endpoint) => ({
            Address: endpoint.Address || '',
            Expire: now + (endpoint.CachePeriodInMinutes || 1) * 60 * 1000
        }));
    }
}
