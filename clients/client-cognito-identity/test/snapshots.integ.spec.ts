// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  CognitoIdentityClient,
  CreateIdentityPool$,
  CreateIdentityPoolCommand,
  DeleteIdentities$,
  DeleteIdentitiesCommand,
  DeleteIdentityPool$,
  DeleteIdentityPoolCommand,
  DescribeIdentity$,
  DescribeIdentityCommand,
  DescribeIdentityPool$,
  DescribeIdentityPoolCommand,
  GetCredentialsForIdentity$,
  GetCredentialsForIdentityCommand,
  GetId$,
  GetIdCommand,
  GetIdentityPoolRoles$,
  GetIdentityPoolRolesCommand,
  GetOpenIdToken$,
  GetOpenIdTokenCommand,
  GetOpenIdTokenForDeveloperIdentity$,
  GetOpenIdTokenForDeveloperIdentityCommand,
  GetPrincipalTagAttributeMap$,
  GetPrincipalTagAttributeMapCommand,
  ListIdentities$,
  ListIdentitiesCommand,
  ListIdentityPools$,
  ListIdentityPoolsCommand,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  LookupDeveloperIdentity$,
  LookupDeveloperIdentityCommand,
  MergeDeveloperIdentities$,
  MergeDeveloperIdentitiesCommand,
  SetIdentityPoolRoles$,
  SetIdentityPoolRolesCommand,
  SetPrincipalTagAttributeMap$,
  SetPrincipalTagAttributeMapCommand,
  TagResource$,
  TagResourceCommand,
  UnlinkDeveloperIdentity$,
  UnlinkDeveloperIdentityCommand,
  UnlinkIdentity$,
  UnlinkIdentityCommand,
  UntagResource$,
  UntagResourceCommand,
  UpdateIdentityPool$,
  UpdateIdentityPoolCommand,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = CognitoIdentityClient;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe("CognitoIdentityClient" + ` (${mode})`, () => {
  const runner = new SnapshotRunner({
    snapshotDirPath: join(__dirname, "snapshots"),
    Client,
    mode,
    testCase(caseName: string, run: () => Promise<void>) {
      it(caseName, run);
    },
    assertions(caseName: string, expected: string, actual: string): Promise<void> {
      expect(actual).toEqual(expected);
      return Promise.resolve();
    },
    schemas:
      new Map<any, any>([
        [CreateIdentityPool$, CreateIdentityPoolCommand],
        [DeleteIdentities$, DeleteIdentitiesCommand],
        [DeleteIdentityPool$, DeleteIdentityPoolCommand],
        [DescribeIdentity$, DescribeIdentityCommand],
        [DescribeIdentityPool$, DescribeIdentityPoolCommand],
        [GetCredentialsForIdentity$, GetCredentialsForIdentityCommand],
        [GetId$, GetIdCommand],
        [GetIdentityPoolRoles$, GetIdentityPoolRolesCommand],
        [GetOpenIdToken$, GetOpenIdTokenCommand],
        [GetOpenIdTokenForDeveloperIdentity$, GetOpenIdTokenForDeveloperIdentityCommand],
        [GetPrincipalTagAttributeMap$, GetPrincipalTagAttributeMapCommand],
        [ListIdentities$, ListIdentitiesCommand],
        [ListIdentityPools$, ListIdentityPoolsCommand],
        [ListTagsForResource$, ListTagsForResourceCommand],
        [LookupDeveloperIdentity$, LookupDeveloperIdentityCommand],
        [MergeDeveloperIdentities$, MergeDeveloperIdentitiesCommand],
        [SetIdentityPoolRoles$, SetIdentityPoolRolesCommand],
        [SetPrincipalTagAttributeMap$, SetPrincipalTagAttributeMapCommand],
        [TagResource$, TagResourceCommand],
        [UnlinkDeveloperIdentity$, UnlinkDeveloperIdentityCommand],
        [UnlinkIdentity$, UnlinkIdentityCommand],
        [UntagResource$, UntagResourceCommand],
        [UpdateIdentityPool$, UpdateIdentityPoolCommand],
      ]),

  });

  runner.run();
}, 30_000);
