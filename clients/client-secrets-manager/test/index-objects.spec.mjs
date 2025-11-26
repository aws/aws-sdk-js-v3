import {
  BatchGetSecretValueCommand,
  CancelRotateSecretCommand,
  CreateSecretCommand,
  DeleteResourcePolicyCommand,
  DeleteSecretCommand,
  DescribeSecretCommand,
  FilterNameStringType,
  GetRandomPasswordCommand,
  GetResourcePolicyCommand,
  GetSecretValueCommand,
  ListSecretVersionIdsCommand,
  ListSecretsCommand,
  PutResourcePolicyCommand,
  PutSecretValueCommand,
  RemoveRegionsFromReplicationCommand,
  ReplicateSecretToRegionsCommand,
  RestoreSecretCommand,
  RotateSecretCommand,
  SecretsManager,
  SecretsManagerClient,
  SecretsManagerServiceException,
  SortOrderType,
  StatusType,
  StopReplicationToReplicaCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateSecretCommand,
  UpdateSecretVersionStageCommand,
  ValidateResourcePolicyCommand,
  paginateBatchGetSecretValue,
  paginateListSecretVersionIds,
  paginateListSecrets,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SecretsManagerClient === "function")
assert(typeof SecretsManager === "function")
// commands
assert(typeof BatchGetSecretValueCommand === "function")
assert(typeof CancelRotateSecretCommand === "function")
assert(typeof CreateSecretCommand === "function")
assert(typeof DeleteResourcePolicyCommand === "function")
assert(typeof DeleteSecretCommand === "function")
assert(typeof DescribeSecretCommand === "function")
assert(typeof GetRandomPasswordCommand === "function")
assert(typeof GetResourcePolicyCommand === "function")
assert(typeof GetSecretValueCommand === "function")
assert(typeof ListSecretsCommand === "function")
assert(typeof ListSecretVersionIdsCommand === "function")
assert(typeof PutResourcePolicyCommand === "function")
assert(typeof PutSecretValueCommand === "function")
assert(typeof RemoveRegionsFromReplicationCommand === "function")
assert(typeof ReplicateSecretToRegionsCommand === "function")
assert(typeof RestoreSecretCommand === "function")
assert(typeof RotateSecretCommand === "function")
assert(typeof StopReplicationToReplicaCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateSecretCommand === "function")
assert(typeof UpdateSecretVersionStageCommand === "function")
assert(typeof ValidateResourcePolicyCommand === "function")
// enums
assert(typeof FilterNameStringType === "object");
assert(typeof SortOrderType === "object");
assert(typeof StatusType === "object");
// errors
assert(SecretsManagerServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateBatchGetSecretValue === "function")
assert(typeof paginateListSecretVersionIds === "function")
assert(typeof paginateListSecrets === "function")
console.log(`SecretsManager index test passed.`);
