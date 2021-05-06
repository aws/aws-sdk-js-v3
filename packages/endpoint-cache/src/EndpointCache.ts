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
      .filter((endpoint) => now > endpoint.Expires)
      .map((endpoint) => endpoint.Address);
    return endpoints[Math.floor(Math.random() * endpoints.length)];
  }

  get(key: string) {
    const endpointsWithExpiry = this.cache.get(key);

    if (!endpointsWithExpiry) {
      return;
    }

    const endpoint = this.getEndpoint(endpointsWithExpiry);
    if (endpoint === undefined) {
      this.remove(key);
    }
    return endpoint;
  }

  set(key: string, endpoints: Endpoint[]) {
    const now = Date.now();
    this.cache.set(
      key,
      endpoints.map(({ Address = "", CachePeriodInMinutes = 1 }) => ({
        Address,
        Expires: now + CachePeriodInMinutes * 60 * 100,
      }))
    );
  }

  remove(key: string) {
    // Replace with remove call once support is added upstream
    // Refs: https://github.com/Yomguithereal/mnemonist/issues/143
    this.cache.set(key, []);
  }

  clear() {
    this.cache.clear();
  }
}
