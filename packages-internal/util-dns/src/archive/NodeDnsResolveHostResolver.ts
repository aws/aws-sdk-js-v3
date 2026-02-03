import { HostAddress, HostAddressType, HostResolver as IHostResolver, HostResolverArguments } from "@aws-sdk/types";
import { promises as dnsPromises } from "dns";

/**
 * @internal
 * {@link HostResolver} implementation that uses the Node.js dns.resolve*() APIs.
 *
 * TODO(dns): should NOT be used or exported until fixed to fit the specified
 * behavior:
 * - implement cache
 * - happy eyeballs support
 * - identity behavior for a valid input IP address
 */
export class NodeDnsResolveHostResolver implements IHostResolver {
  /**
   * Node.js resolveAddress() using dns.resolve*() APIs.
   * Does NOT satisfy happy eyeballs due to sequential
   * IPv4 and IPv6 DNS queries.
   * @see https://nodejs.org/api/dns.html#dnspromisesresolvehostname-rrtype
   * @param args arguments with host name query addresses for
   * @returns promise with a list of {@link HostAddress}
   */
  async resolveAddress(args: HostResolverArguments): Promise<HostAddress[]> {
    const addresses: HostAddress[] = [];
    const ipV4Addresses = await dnsPromises.resolve4(args.hostName);
    for (const address of ipV4Addresses) {
      addresses.push({
        addressType: HostAddressType.A,
        address,
        hostName: args.hostName,
        service: args.service,
      });
    }
    const ipV6Addresses = await dnsPromises.resolve6(args.hostName);
    for (const address of ipV6Addresses) {
      addresses.push({
        addressType: HostAddressType.AAAA,
        address,
        hostName: args.hostName,
        service: args.service,
      });
    }
    return addresses;
  }
  reportFailureOnAddress(addr: HostAddress): void {
    throw new Error("reportFailureOnAddress(addr) is not implemented");
  }
  purgeCache(args?: HostResolverArguments): void {
    throw new Error("purgeCache(args?) is not implemented");
  }
}
