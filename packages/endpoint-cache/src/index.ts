import {LRUCache} from './utils/LRU';
import {DiscoveredEndpoints} from '@aws/types';

const CACHE_SIZE = 1000;
type EndpointRecords = Array<{Address: string, Expire: number}>;

export interface EndpointIdentifier {
    [key: string]: string | undefined;
    serviceId?: string;
    region?: string;
    accessKeyId?: string;
    operation?: string;
}

export class EndpointCache {
    private cache: LRUCache<EndpointRecords>
    constructor(size: number = CACHE_SIZE) {
        this.cache = new LRUCache<EndpointRecords>(size);
    };

    get size() {
      return this.cache.length;
    }

    public put(key: EndpointIdentifier, value: DiscoveredEndpoints) {
      const keyString = this.populateKey(key);
      const endpointRecord = this.populateValue(value);
      this.cache.put(keyString, endpointRecord);
    }

    public get(key: EndpointIdentifier): DiscoveredEndpoints | undefined {
      const keyString = this.populateKey(key);
      const now = Date.now();
      const records = this.cache.get(keyString);
      if (records) {
        for (const record of records) {
          if (record.Expire > now) {
            this.cache.remove(keyString);
            return undefined
          }
        }
      }
      return records;
    }

    private populateKey(key: EndpointIdentifier): string {
      const identifiers: Array<string> = [];
      for (const identifierName of Object.keys(key).sort()) {
        if (key[identifierName] === undefined)
          continue;
        identifiers.push(key[identifierName]!)
      }
      return identifiers.join(' ');
    }

    private populateValue(endpoints: DiscoveredEndpoints): EndpointRecords {
      const now = Date.now();
      return endpoints.map((endpoint) => ({
        Address: endpoint.Address || '',
        Expire: now + parseInt(endpoint.CachePeriod || '1') * 60
      }));
    }
}

export const endpointCache = new EndpointCache();
