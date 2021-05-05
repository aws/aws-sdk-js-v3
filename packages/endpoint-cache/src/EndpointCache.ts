import { LRUCache } from "mnemonist";

export class EndpointCache {
  // ToDo: remove `| undefined` once LRUCache.remove(key) is available.
  // Refs: https://github.com/Yomguithereal/mnemonist/issues/143
  private readonly cache: LRUCache<string, string | undefined>;

  constructor(capacity: number) {
    this.cache = new LRUCache(capacity);
  }

  get(key: string) {
    return this.cache.get(key);
  }

  set(key: string, value: string) {
    this.cache.set(key, value);
  }

  remove(key: string) {
    // Replace with remove call once support is added upstream
    // Refs: https://github.com/Yomguithereal/mnemonist/issues/143
    this.cache.set(key, undefined);
  }

  clear() {
    this.cache.clear();
  }
}
