import { LRUCache } from "mnemonist";

export class EndpointCache {
  private readonly cache: LRUCache<string, string>;

  constructor(capacity: number) {
    this.cache = new LRUCache(capacity);
  }
}
