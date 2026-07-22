// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  AccessDeniedException$,
  ConflictException$,
  CreateOAuth2Token$,
  CreateOAuth2TokenCommand,
  CreateOAuth2TokenWithIAM$,
  CreateOAuth2TokenWithIAMCommand,
  DeleteConsoleAuthorizationConfiguration$,
  DeleteConsoleAuthorizationConfigurationCommand,
  DeleteResourcePermissionStatement$,
  DeleteResourcePermissionStatementCommand,
  GetConsoleAuthorizationConfiguration$,
  GetConsoleAuthorizationConfigurationCommand,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  InternalServerException$,
  IntrospectOAuth2TokenWithIAM$,
  IntrospectOAuth2TokenWithIAMCommand,
  ListResourcePermissionStatements$,
  ListResourcePermissionStatementsCommand,
  PutConsoleAuthorizationConfiguration$,
  PutConsoleAuthorizationConfigurationCommand,
  PutResourcePermissionStatement$,
  PutResourcePermissionStatementCommand,
  ResourceNotFoundException$,
  RevokeOAuth2TokenWithIAM$,
  RevokeOAuth2TokenWithIAMCommand,
  ServiceQuotaExceededException$,
  SigninClient,
  TooManyRequestsError$,
  ValidationException$,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = SigninClient;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe("SigninClient" + ` (${mode})`, () => {
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
    schemas: new Map<any, any>([
      [CreateOAuth2Token$, CreateOAuth2TokenCommand],
      [CreateOAuth2TokenWithIAM$, CreateOAuth2TokenWithIAMCommand],
      [DeleteConsoleAuthorizationConfiguration$, DeleteConsoleAuthorizationConfigurationCommand],
      [DeleteResourcePermissionStatement$, DeleteResourcePermissionStatementCommand],
      [GetConsoleAuthorizationConfiguration$, GetConsoleAuthorizationConfigurationCommand],
      [GetResourcePolicy$, GetResourcePolicyCommand],
      [IntrospectOAuth2TokenWithIAM$, IntrospectOAuth2TokenWithIAMCommand],
      [ListResourcePermissionStatements$, ListResourcePermissionStatementsCommand],
      [PutConsoleAuthorizationConfiguration$, PutConsoleAuthorizationConfigurationCommand],
      [PutResourcePermissionStatement$, PutResourcePermissionStatementCommand],
      [RevokeOAuth2TokenWithIAM$, RevokeOAuth2TokenWithIAMCommand],
    ]),
    errors: [
      AccessDeniedException$,
      ConflictException$,
      InternalServerException$,
      ResourceNotFoundException$,
      ServiceQuotaExceededException$,
      TooManyRequestsError$,
      ValidationException$,
    ],
  });
  runner.run();
}, 30_000);
