import { HostAddress, HostAddressType, HostResolver as IHostResolver, HostResolverArguments } from "@aws-sdk/types";
import { ALL, LookupAddress, LookupAllOptions, promises as dnsPromises, V4MAPPED } from "dns";

import { DnsCache } from "./DnsCache";
import { HostEntryTable } from "./util/HostEntryTable";

/**
 * Node.js DNS family to Smithy Host Address Type Mapping
 * @see https://nodejs.org/api/dns.html#dnspromiseslookuphostname-options
 */
const NODE_DNS_FAMILY_TO_HOST_ADDRESS_TYPE: Record<number, HostAddressType> = {
  4: HostAddressType.A,
  6: HostAddressType.AAAA,
} as const;

/**
 * lookUp() options that return a list of all IPv4 and IPv6 addresses
 * @see https://nodejs.org/api/dns.html#dnspromiseslookuphostname-options
 */
const DNS_LOOKUP_OPTIONS = {
  all: true,
  hints: V4MAPPED | ALL,
  verbatim: true,
} as const;

/**
 * Node.js dns.lookup() function type used in {@link NodeDnsLookupHostResolver}
 * @internal
 */
interface NodeDnsLookupFn {
  (hostname: string, options: LookupAllOptions): Promise<LookupAddress[]>;
}

/**
 * Configuration options for {@link NodeDnsLookupHostResolver}
 * @internal
 */
export interface NodeDnsLookupHostResolverConfig {
  /**
   * Cache for holding address entries
   * @internal
   */
  cache?: DnsCache;
  /**
   * TTL offset in MS when generating expiration TTLs
   * @internal
   */
  ttlMs?: number;
  /**
   * Pluggable Node.js dns.lookup() function
   * @internal
   */
  nodeDnsLookup?: NodeDnsLookupFn;
}

/**
 * @internal
 *
 * {@link HostResolver} implementation that uses the Node.js dns.lookup() API.
 */
export class NodeDnsLookupHostResolver implements IHostResolver {
  /**
   * Default TTL in ms
   * @internal
   */
  private static DEFAULT_TTL_MS = 30_000;

  /**
   * Provider that returns a default {@link DnsCache}
   * @returns DnsCache implementation
   * @internal
   */
  private static createDefaultCacheProvider = () => new HostEntryTable();

  /**
   * Default Node.js dns.lookup() function
   * @internal
   */
  private static DEFAULT_NODE_DNS_LOOKUP: NodeDnsLookupFn = dnsPromises.lookup;

  /**
   * TTL in ms
   * @internal
   */
  private ttlMs: number;

  /**
   * {@link DnsCache} which maps {@link HostAddress.hostName} to {@link DnsCacheEntry}
   * @internal
   */
  private cache: DnsCache;

  /**
   * Node.js dns.lookup() API implementation
   * @internal
   */
  private nodeDnsLookup: NodeDnsLookupFn;

  public constructor({
    ttlMs = NodeDnsLookupHostResolver.DEFAULT_TTL_MS,
    cache = NodeDnsLookupHostResolver.createDefaultCacheProvider(),
    nodeDnsLookup = NodeDnsLookupHostResolver.DEFAULT_NODE_DNS_LOOKUP,
  }: NodeDnsLookupHostResolverConfig = {}) {
    this.ttlMs = ttlMs;
    this.cache = cache;
    this.nodeDnsLookup = nodeDnsLookup;
  }

  /**
   * Resolves the address(es) for {@link HostResolverArguments} and returns a
   * list of addresses with (most likely) two addresses, one {@link HostAddressType.AAAA}
   * and one {@link HostAddressType.A}. Calls to this function will likely alter
   * the cache so that if there's multiple addresses, a different set will be
   * returned on the next call.
   * In the case of multi-answer, still only a maximum of two records should be
   * returned.
   * @param args arguments with host name query addresses for
   * @returns promise with a list of {@link HostAddress}
   * @see https://github.com/awslabs/aws-c-io/blob/f2ff573c191e1c4ea0248af5c08161356be3bc78/source/host_resolver.c#L964
   */
  public async resolveAddress(args: HostResolverArguments): Promise<HostAddress[]> {
    const possibleHostEntry = this.cache.get(args.hostName);
    const newNextTimestampToUpdateMs = Date.now() + this.ttlMs;

    // If not in cache, create a new entry.
    // If this fails, then fail resolution.
    if (possibleHostEntry === undefined) {
      const addresses = await this.nodeDnsLookupResolveAddress(args);
      this.cache.set(args, addresses, newNextTimestampToUpdateMs);
    }

    const hostEntry = this.cache.get(args.hostName)!;

    // Update existing cache entries every once in a while.
    // Skips if it was the initial host resolution.
    if (possibleHostEntry !== undefined && Date.now() >= hostEntry.nextTimestampToUpdateMs) {
      try {
        const addresses = await this.nodeDnsLookupResolveAddress(args);
        hostEntry.updateRecords(addresses, newNextTimestampToUpdateMs);
      } catch (error) {
        console.error(`Could not update DNS address cache for "${args.hostName}": ${error}`);
      }
    }

    hostEntry.processRecords();

    const result: HostAddress[] = [];
    if (hostEntry.aRecords.length > 0) {
      result.push(hostEntry.aRecords.cycle());
    }
    if (hostEntry.aaaaRecords.length > 0) {
      result.push(hostEntry.aaaaRecords.cycle());
    }
    if (result.length === 0) {
      throw new Error(`Could not resolve addresses for "${args.hostName}"`);
    }
    return result;
  }

  /**
   * Reports a failure on a {@link HostAddress} so that the cache can
   * accomodate the failure and likely not return the address until it recovers.
   * @param addr host address to report a failure on
   */
  public reportFailureOnAddress(addr: HostAddress): void {
    const hostEntry = this.cache.get(addr.hostName);
    if (hostEntry === undefined) {
      throw new Error(`Could not find cached host name "${addr.hostName}"`);
    }
    hostEntry.failAddressInRecords(addr);
  }

  /**
   * Empties the cache for a {@link HostResolverArguments.hostName}.
   * If {@link HostResolverArguments.hostName} is not provided, the cache
   * is emptied for all host names.
   * @param args optional arguments to empty the cache for
   */
  public purgeCache(args?: HostResolverArguments): void {
    if (args?.hostName) {
      this.cache.delete(args.hostName);
    } else {
      this.cache.clear();
    }
  }

  /**
   * Node.js resolveAddress() using the dns.lookup() APIs.
   * @see https://nodejs.org/api/dns.html#dnspromiseslookuphostname-options
   * @param args arguments with host name query addresses for
   * @returns promise with a list of {@link HostAddress}
   */
  private async nodeDnsLookupResolveAddress(args: HostResolverArguments): Promise<HostAddress[]> {
    const addresses: HostAddress[] = [];
    const ipEntries = await this.nodeDnsLookup(args.hostName, DNS_LOOKUP_OPTIONS);
    for (const { address, family } of ipEntries) {
      const addressType: HostAddressType | undefined = NODE_DNS_FAMILY_TO_HOST_ADDRESS_TYPE[family];
      if (addressType === undefined) {
        throw new Error(`dns.lookup() Node DNS family \`${family}\` is not supported`);
      }
      addresses.push({
        addressType,
        address,
        hostName: args.hostName,
        service: args.service,
      });
    }
    return addresses;
  }
}
