// smithy-typescript generated code
import { SnapshotRunner } from "@smithy/snapshot-testing";
import { join } from "node:path";
import { describe, expect, test as it, vi } from "vitest";

import {
  BatchGetSecretValue$,
  BatchGetSecretValueCommand,
  CancelRotateSecret$,
  CancelRotateSecretCommand,
  CreateSecret$,
  CreateSecretCommand,
  DecryptionFailure$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteSecret$,
  DeleteSecretCommand,
  DescribeSecret$,
  DescribeSecretCommand,
  EncryptionFailure$,
  GetRandomPassword$,
  GetRandomPasswordCommand,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetSecretValue$,
  GetSecretValueCommand,
  InternalServiceError$,
  InvalidNextTokenException$,
  InvalidParameterException$,
  InvalidRequestException$,
  LimitExceededException$,
  ListSecrets$,
  ListSecretsCommand,
  ListSecretVersionIds$,
  ListSecretVersionIdsCommand,
  MalformedPolicyDocumentException$,
  PreconditionNotMetException$,
  PublicPolicyException$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutSecretValue$,
  PutSecretValueCommand,
  RemoveRegionsFromReplication$,
  RemoveRegionsFromReplicationCommand,
  ReplicateSecretToRegions$,
  ReplicateSecretToRegionsCommand,
  ResourceExistsException$,
  ResourceNotFoundException$,
  RestoreSecret$,
  RestoreSecretCommand,
  RotateSecret$,
  RotateSecretCommand,
  SecretsManagerClient,
  StopReplicationToReplica$,
  StopReplicationToReplicaCommand,
  TagResource$,
  TagResourceCommand,
  UntagResource$,
  UntagResourceCommand,
  UpdateSecret$,
  UpdateSecretCommand,
  UpdateSecretVersionStage$,
  UpdateSecretVersionStageCommand,
  ValidateResourcePolicy$,
  ValidateResourcePolicyCommand,
} from "../src";

vi.setSystemTime(new Date(946702799999));
const Client = SecretsManagerClient;

const mode = (process.env.SNAPSHOT_MODE as "write" | "compare") ?? "write";

describe("SecretsManagerClient" + ` (${mode})`, () => {
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
      [BatchGetSecretValue$, BatchGetSecretValueCommand],
      [CancelRotateSecret$, CancelRotateSecretCommand],
      [CreateSecret$, CreateSecretCommand],
      [DeleteResourcePolicy$, DeleteResourcePolicyCommand],
      [DeleteSecret$, DeleteSecretCommand],
      [DescribeSecret$, DescribeSecretCommand],
      [GetRandomPassword$, GetRandomPasswordCommand],
      [GetResourcePolicy$, GetResourcePolicyCommand],
      [GetSecretValue$, GetSecretValueCommand],
      [ListSecrets$, ListSecretsCommand],
      [ListSecretVersionIds$, ListSecretVersionIdsCommand],
      [PutResourcePolicy$, PutResourcePolicyCommand],
      [PutSecretValue$, PutSecretValueCommand],
      [RemoveRegionsFromReplication$, RemoveRegionsFromReplicationCommand],
      [ReplicateSecretToRegions$, ReplicateSecretToRegionsCommand],
      [RestoreSecret$, RestoreSecretCommand],
      [RotateSecret$, RotateSecretCommand],
      [StopReplicationToReplica$, StopReplicationToReplicaCommand],
      [TagResource$, TagResourceCommand],
      [UntagResource$, UntagResourceCommand],
      [UpdateSecret$, UpdateSecretCommand],
      [UpdateSecretVersionStage$, UpdateSecretVersionStageCommand],
      [ValidateResourcePolicy$, ValidateResourcePolicyCommand],
    ]),
    errors: [
      DecryptionFailure$,
      EncryptionFailure$,
      InternalServiceError$,
      InvalidNextTokenException$,
      InvalidParameterException$,
      InvalidRequestException$,
      LimitExceededException$,
      MalformedPolicyDocumentException$,
      PreconditionNotMetException$,
      PublicPolicyException$,
      ResourceExistsException$,
      ResourceNotFoundException$,
    ],
  });
  runner.run();
}, 30_000);
