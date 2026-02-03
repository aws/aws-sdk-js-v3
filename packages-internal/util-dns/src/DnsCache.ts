import { HostAddress, HostResolverArguments } from "@aws-sdk/types";

/**
 * DNS cache used by a {@link HostResolver} which maps:
 * host name (string) -> {@link DnsCacheEntry}
 * @internal
 */
export interface DnsCache {
  /**
   * Maps a host name to a {@link DnsCacheEntry} in the cache
   * @param args host resolver arguments which include host name
   * @param addresses addresses to set into the cache entry
   * @param nextTimestampToProcessMs timestamp for both cache entry processed and addresses' expiration
   */
  set(args: HostResolverArguments, addresses: HostAddress[], nextTimestampToProcessMs: number): void;
  /**
   * Gets the corresponding cache entry for hostName, otherwise undefined
   * @param hostName key to get cache entry
   */
  get(hostName: string): DnsCacheEntry | undefined;
  /**
   * Deletes the corresponding cache entry for hostName
   * @param hostName key to delete cache entry
   */
  delete(hostName: string): void;
  /**
   * Deletes all cache entries
   */
  clear(): void;
  /**
   * Gets the size of the cache
   */
  size: number;
}

/**
 * Entry for a host name, mapped to in {@link DnsCache}
 * @internal
 */
export interface DnsCacheEntry {
  /**
   * Collection of good IPv6 records for an address
   */
  aaaaRecords: DnsCacheEntryCollection;
  /**
   * Collection of good IPv4 records for an address
   */
  aRecords: DnsCacheEntryCollection;
  /**
   * Collection of failed IPv6 records for an address
   */
  failedAaaaRecords: DnsCacheEntryCollection;
  /**
   * Collection of failed IPv4 records for an address
   */
  failedARecords: DnsCacheEntryCollection;
  /**
   * Timestamp for when to next process the entry
   */
  nextTimestampToUpdateMs: number;
  /**
   * Updates the entry given the new set of addresses and a new expiration
   * timestamp:
   * - If an address is already in the entry, the expiration timestamp is updated.
   * - If an address is not in the entry, then it is added to the good records.
   * @param addresses list of addresses used to update entry records
   * @param expirationTtlMs expiration timestamp for new or updated addresses
   */
  updateRecords(addresses: HostAddress[], expirationTtlMs: number): void;
  /**
   * Removes expired records from records (except 1 in case of DNS outages).
   * In the case that good records are empty, should attempt to promote 1
   * non-expired failed address to the good records.
   */
  processRecords(): void;
  /**
   * Moves the address from good records to failed records
   * @param address address to move to failed records
   */
  failAddressInRecords(address: HostAddress): void;
}

/**
 * Collection which is used to manage {@link DnsCacheHostAddressEntry}
 * @internal
 */
export interface DnsCacheEntryCollection {
  /**
   * Get length / size of the collection
   */
  length: number;
  /**
   * Moves a {@link DnsCacheHostAddressEntry} from the beginning of the
   * collection to the end of itself, and returns the host address entry
   * that was cycled.
   * If another collection is provided, it will move the host address entry
   * to the end of that collection.
   * @param collection optional collection to cycle to.
   */
  cycle(collection?: DnsCacheEntryCollection): DnsCacheHostAddressEntry;
  /**
   * Appends an element to the end of the collection
   * @param element element to append to the collection
   */
  append(element: DnsCacheHostAddressEntry): void;
  /**
   * Removes an element from the collection, and returns that element.
   * @param element element to remove and return from the collection
   */
  remove(element: DnsCacheHostAddressEntry): DnsCacheHostAddressEntry;
  /**
   * Implements iterator for the collection
   */
  [Symbol.iterator](): Iterator<DnsCacheHostAddressEntry>;
}

/**
 * Captures cached {@link HostAddress} information
 * @internal
 */
export interface DnsCacheHostAddressEntry extends HostAddress {
  /**
   * Timestamp for when the entry expires
   */
  expirationTtlMs: number;
}
