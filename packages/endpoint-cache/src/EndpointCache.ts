import { LRUCache } from "mnemonist";

import { Endpoint } from "./Endpoint";

interface EndpointWithExpiry extends Pick<Endpoint, "Address"> {
  Expires: number;
}

export class EndpointCache {
  private readonly cache: LRUCache<string, EndpointWithExpiry[]>;

  constructor(capacity: number) {
    this.cache = new LRUCache(capacity);
  }

  private getEndpoint(endpointsWithExpiry: EndpointWithExpiry[]) {
    const now = Date.now();
    const endpoints = endpointsWithExpiry
      .filter((endpoint) => now < endpoint.Expires)
      .map((endpoint) => endpoint.Address);
    return endpoints[Math.floor(Math.random() * endpoints.length)];
  }

  /**
   * Returns an un-expired endpoint for the given key.
   *
   * @param key
   * @returns
   */
  get(key: string) {
    if (!this.has(key)) {
      return;
    }

    const endpointsWithExpiry = this.cache.get(key);
    if (!endpointsWithExpiry) {
      return;
    }

    const endpoint = this.getEndpoint(endpointsWithExpiry);
    if (endpoint === undefined) {
      this.delete(key);
    }
    return endpoint;
  }

  /**
   * Stores the endpoints passed for the key in cache.
   * If not defined, uses empty string for the Address in endpoint.
   * If not defined, uses one minute for CachePeriodInMinutes in endpoint.
   * Stores milliseconds elapsed since the UNIX epoch in Expires param based
   * on value provided in CachePeriodInMinutes.
   *
   * @param key
   * @param endpoints
   */
  set(key: string, endpoints: Endpoint[]) {
    const now = Date.now();
    this.cache.set(
      key,
      endpoints.map(({ Address = "", CachePeriodInMinutes = 1 }) => ({
        Address,
        Expires: now + CachePeriodInMinutes * 60 * 1000,
      }))
    );
  }

  /**
   * Deletes the value for the given key in the cache.
   *
   * @param {string} key
   */
  delete(key: string) {
    // Replace with remove/delete call once support is added upstream
    // Refs: https://github.com/Yomguithereal/mnemonist/issues/143
    this.cache.set(key, []);
  }

  /**
   * Checks whether the key exists in cache.
   *
   * @param {string} key
   * @returns {boolean}
   */
  has(key: string): boolean {
    if (!this.cache.has(key)) {
      return false;
    }

    // Remove call for peek, once remove/delete support is added upstream
    // Refs: https://github.com/Yomguithereal/mnemonist/issues/143
    const endpoints = this.cache.peek(key);
    if (!endpoints) {
      return false;
    }
    return endpoints.length > 0;
  }

  /**
   * Clears the cache.
   */
  clear() {
    this.cache.clear();
  }
}
