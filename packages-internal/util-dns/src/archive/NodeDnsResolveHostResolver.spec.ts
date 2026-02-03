import { HostAddress, HostAddressType, HostResolverArguments } from "@aws-sdk/types";
import { describe, expect, test } from "vitest";

import { NodeDnsResolveHostResolver } from "./NodeDnsResolveHostResolver";

describe(NodeDnsResolveHostResolver.name, () => {
  const TEST_HOST_RESOLVER = new NodeDnsResolveHostResolver();
  const TEST_HOST_NAME = "TEST_HOST_NAME";
  const TEST_SERVICE = "TEST_SERVICE";
  const TEST_ADDRESS = "TEST_ADDRESS";
  const TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
    hostName: TEST_HOST_NAME,
    service: TEST_SERVICE,
  };
  const TEST_HOST_ADDRESS: HostAddress = {
    addressType: HostAddressType.AAAA,
    address: TEST_ADDRESS,
    hostName: TEST_HOST_NAME,
    service: TEST_SERVICE,
  };

  // TODO(dns): skipping identity behavior
  test.skip("resolveAddress() should return itself with a valid IPv4 address", async () => {
    const TEST_VALID_IPV4_ADDRESS = "13.224.30.153";
    const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
      ...TEST_HOST_RESOLVER_ARGUMENTS,
      hostName: TEST_VALID_IPV4_ADDRESS,
    };
    const RESOLVED_HOST_ADDRESSES: HostAddress[] = await TEST_HOST_RESOLVER.resolveAddress(
      CURRENT_TEST_HOST_RESOLVER_ARGUMENTS
    );
    expect(Array.isArray(RESOLVED_HOST_ADDRESSES)).toBe(true);
    expect(RESOLVED_HOST_ADDRESSES).toHaveLength(1);
    expect(RESOLVED_HOST_ADDRESSES[0]).toEqual({
      address: TEST_VALID_IPV4_ADDRESS,
      addressType: HostAddressType.A,
      hostName: TEST_VALID_IPV4_ADDRESS,
      service: TEST_SERVICE,
    });
  });

  // TODO(dns): skipping identity behavior
  test.skip("resolveAddress() should return itself with a valid IPv6 address", async () => {
    const TEST_VALID_IPV6_ADDRESS = "::1";
    const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
      ...TEST_HOST_RESOLVER_ARGUMENTS,
      hostName: TEST_VALID_IPV6_ADDRESS,
    };
    const RESOLVED_HOST_ADDRESSES: HostAddress[] = await TEST_HOST_RESOLVER.resolveAddress(
      CURRENT_TEST_HOST_RESOLVER_ARGUMENTS
    );
    expect(Array.isArray(RESOLVED_HOST_ADDRESSES)).toBe(true);
    expect(RESOLVED_HOST_ADDRESSES).toHaveLength(1);
    expect(RESOLVED_HOST_ADDRESSES[0]).toEqual({
      address: TEST_VALID_IPV6_ADDRESS,
      addressType: HostAddressType.AAAA,
      hostName: TEST_VALID_IPV6_ADDRESS,
      service: TEST_SERVICE,
    });
  });

  test("resolveAddress() should throw an ENOTFOUND error on an invalid host name", async () => {
    const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
      ...TEST_HOST_RESOLVER_ARGUMENTS,
    };
    await expect(TEST_HOST_RESOLVER.resolveAddress(CURRENT_TEST_HOST_RESOLVER_ARGUMENTS)).rejects.toThrowError(
      "queryA ENOTFOUND TEST_HOST_NAME"
    );
  });

  test("resolveAddress() should return a list of IPv4 and IPv6 addresses for a valid host name", async () => {
    const HOST_NAME = "www.amazon.com";
    const CURRENT_TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
      ...TEST_HOST_RESOLVER_ARGUMENTS,
      hostName: HOST_NAME,
    };
    const RESOLVED_HOST_ADDRESSES: HostAddress[] = await TEST_HOST_RESOLVER.resolveAddress(
      CURRENT_TEST_HOST_RESOLVER_ARGUMENTS
    );
    expect(RESOLVED_HOST_ADDRESSES.length).toBeGreaterThan(0);
    for (const hostAddress of RESOLVED_HOST_ADDRESSES) {
      expect(hostAddress.hostName).toBe(HOST_NAME);
      expect(hostAddress.service).toBe(TEST_SERVICE);
      expect(hostAddress.address).toBeDefined();
      expect(hostAddress.address.length).toBeGreaterThan(0);
      expect(hostAddress.addressType === HostAddressType.A || hostAddress.addressType === HostAddressType.AAAA).toBe(
        true
      );
    }
  });

  test("reportFailureOnAddress() should throw a not implemented error", async () => {
    expect(() => TEST_HOST_RESOLVER.reportFailureOnAddress(TEST_HOST_ADDRESS)).toThrowError(
      "reportFailureOnAddress(addr) is not implemented"
    );
  });

  test("purgeCache() should throw a not implemented error", async () => {
    expect(() => TEST_HOST_RESOLVER.purgeCache()).toThrowError("purgeCache(args?) is not implemented");
  });

  test("purgeCache(args) should throw a not implemented error", async () => {
    expect(() => TEST_HOST_RESOLVER.purgeCache(TEST_HOST_RESOLVER_ARGUMENTS)).toThrowError(
      "purgeCache(args?) is not implemented"
    );
  });
});
