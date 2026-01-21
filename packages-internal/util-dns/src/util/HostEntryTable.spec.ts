import { HostResolverArguments } from "@aws-sdk/types";
import { beforeEach, describe, expect, test as it } from "vitest";

import { HostEntryTable } from "./HostEntryTable";

describe(HostEntryTable.name, () => {
  const TEST_HOST_NAME = "TEST_HOST_NAME";
  const TEST_SERVICE = "TEST_SERVICE";
  const TEST_HOST_RESOLVER_ARGUMENTS: HostResolverArguments = {
    hostName: TEST_HOST_NAME,
    service: TEST_SERVICE,
  };

  let hostEntryTable: HostEntryTable;

  beforeEach(() => {
    hostEntryTable = new HostEntryTable();
  });

  describe("updateRecords(addresses, expirationTtlMs)", () => {
    it("sets a host entry correctly", () => {
      hostEntryTable.set(TEST_HOST_RESOLVER_ARGUMENTS, [], 0);

      const hostEntry = hostEntryTable.get(TEST_HOST_NAME);
      expect(hostEntry).toBeDefined();
      // HostEntry population is tested in HostEntry.spec.ts
    });
  });
});
