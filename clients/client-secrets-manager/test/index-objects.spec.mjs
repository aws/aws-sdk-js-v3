import {
  BatchGetSecretValueCommand,
  CancelRotateSecretCommand,
  CreateSecretCommand,
  DecryptionFailure,
  DeleteResourcePolicyCommand,
  DeleteSecretCommand,
  DescribeSecretCommand,
  EncryptionFailure,
  FilterNameStringType,
  GetRandomPasswordCommand,
  GetResourcePolicyCommand,
  GetSecretValueCommand,
  InternalServiceError,
  InvalidNextTokenException,
  InvalidParameterException,
  InvalidRequestException,
  LimitExceededException,
  ListSecretVersionIdsCommand,
  ListSecretsCommand,
  MalformedPolicyDocumentException,
  PreconditionNotMetException,
  PublicPolicyException,
  PutResourcePolicyCommand,
  PutSecretValueCommand,
  RemoveRegionsFromReplicationCommand,
  ReplicateSecretToRegionsCommand,
  ResourceExistsException,
  ResourceNotFoundException,
  RestoreSecretCommand,
  RotateSecretCommand,
  SecretsManager,
  SecretsManagerClient,
  SecretsManagerServiceException,
  SortByType,
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
assert(typeof SecretsManagerClient === "function");
assert(typeof SecretsManager === "function");
// commands
assert(typeof BatchGetSecretValueCommand === "function");
assert(typeof CancelRotateSecretCommand === "function");
assert(typeof CreateSecretCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteSecretCommand === "function");
assert(typeof DescribeSecretCommand === "function");
assert(typeof GetRandomPasswordCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetSecretValueCommand === "function");
assert(typeof ListSecretsCommand === "function");
assert(typeof ListSecretVersionIdsCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutSecretValueCommand === "function");
assert(typeof RemoveRegionsFromReplicationCommand === "function");
assert(typeof ReplicateSecretToRegionsCommand === "function");
assert(typeof RestoreSecretCommand === "function");
assert(typeof RotateSecretCommand === "function");
assert(typeof StopReplicationToReplicaCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateSecretCommand === "function");
assert(typeof UpdateSecretVersionStageCommand === "function");
assert(typeof ValidateResourcePolicyCommand === "function");
// enums
assert(typeof FilterNameStringType === "object");
assert(typeof SortByType === "object");
assert(typeof SortOrderType === "object");
assert(typeof StatusType === "object");
// errors
assert(DecryptionFailure.prototype instanceof SecretsManagerServiceException);
assert(EncryptionFailure.prototype instanceof SecretsManagerServiceException);
assert(InternalServiceError.prototype instanceof SecretsManagerServiceException);
assert(InvalidNextTokenException.prototype instanceof SecretsManagerServiceException);
assert(InvalidParameterException.prototype instanceof SecretsManagerServiceException);
assert(InvalidRequestException.prototype instanceof SecretsManagerServiceException);
assert(LimitExceededException.prototype instanceof SecretsManagerServiceException);
assert(MalformedPolicyDocumentException.prototype instanceof SecretsManagerServiceException);
assert(PreconditionNotMetException.prototype instanceof SecretsManagerServiceException);
assert(PublicPolicyException.prototype instanceof SecretsManagerServiceException);
assert(ResourceExistsException.prototype instanceof SecretsManagerServiceException);
assert(ResourceNotFoundException.prototype instanceof SecretsManagerServiceException);
assert(SecretsManagerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateBatchGetSecretValue === "function");
assert(typeof paginateListSecretVersionIds === "function");
assert(typeof paginateListSecrets === "function");
console.log(`SecretsManager index test passed.`);
