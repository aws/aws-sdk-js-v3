import {
  APIErrorType$,
  BatchGetSecretValue$,
  BatchGetSecretValueCommand,
  BatchGetSecretValueRequest$,
  BatchGetSecretValueResponse$,
  CancelRotateSecret$,
  CancelRotateSecretCommand,
  CancelRotateSecretRequest$,
  CancelRotateSecretResponse$,
  CreateSecret$,
  CreateSecretCommand,
  CreateSecretRequest$,
  CreateSecretResponse$,
  DecryptionFailure,
  DecryptionFailure$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteSecret$,
  DeleteSecretCommand,
  DeleteSecretRequest$,
  DeleteSecretResponse$,
  DescribeSecret$,
  DescribeSecretCommand,
  DescribeSecretRequest$,
  DescribeSecretResponse$,
  EncryptionFailure,
  EncryptionFailure$,
  ExternalSecretRotationMetadataItem$,
  Filter$,
  FilterNameStringType,
  GetRandomPassword$,
  GetRandomPasswordCommand,
  GetRandomPasswordRequest$,
  GetRandomPasswordResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  GetSecretValue$,
  GetSecretValueCommand,
  GetSecretValueRequest$,
  GetSecretValueResponse$,
  InternalServiceError,
  InternalServiceError$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidRequestException,
  InvalidRequestException$,
  LimitExceededException,
  LimitExceededException$,
  ListSecretVersionIds$,
  ListSecretVersionIdsCommand,
  ListSecretVersionIdsRequest$,
  ListSecretVersionIdsResponse$,
  ListSecrets$,
  ListSecretsCommand,
  ListSecretsRequest$,
  ListSecretsResponse$,
  MalformedPolicyDocumentException,
  MalformedPolicyDocumentException$,
  PreconditionNotMetException,
  PreconditionNotMetException$,
  PublicPolicyException,
  PublicPolicyException$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  PutSecretValue$,
  PutSecretValueCommand,
  PutSecretValueRequest$,
  PutSecretValueResponse$,
  RemoveRegionsFromReplication$,
  RemoveRegionsFromReplicationCommand,
  RemoveRegionsFromReplicationRequest$,
  RemoveRegionsFromReplicationResponse$,
  ReplicaRegionType$,
  ReplicateSecretToRegions$,
  ReplicateSecretToRegionsCommand,
  ReplicateSecretToRegionsRequest$,
  ReplicateSecretToRegionsResponse$,
  ReplicationStatusType$,
  ResourceExistsException,
  ResourceExistsException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RestoreSecret$,
  RestoreSecretCommand,
  RestoreSecretRequest$,
  RestoreSecretResponse$,
  RotateSecret$,
  RotateSecretCommand,
  RotateSecretRequest$,
  RotateSecretResponse$,
  RotationRulesType$,
  SecretListEntry$,
  SecretValueEntry$,
  SecretVersionsListEntry$,
  SecretsManager,
  SecretsManagerClient,
  SecretsManagerServiceException,
  SortByType,
  SortOrderType,
  StatusType,
  StopReplicationToReplica$,
  StopReplicationToReplicaCommand,
  StopReplicationToReplicaRequest$,
  StopReplicationToReplicaResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateSecret$,
  UpdateSecretCommand,
  UpdateSecretRequest$,
  UpdateSecretResponse$,
  UpdateSecretVersionStage$,
  UpdateSecretVersionStageCommand,
  UpdateSecretVersionStageRequest$,
  UpdateSecretVersionStageResponse$,
  ValidateResourcePolicy$,
  ValidateResourcePolicyCommand,
  ValidateResourcePolicyRequest$,
  ValidateResourcePolicyResponse$,
  ValidationErrorsEntry$,
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
assert(typeof BatchGetSecretValue$ === "object");
assert(typeof CancelRotateSecretCommand === "function");
assert(typeof CancelRotateSecret$ === "object");
assert(typeof CreateSecretCommand === "function");
assert(typeof CreateSecret$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteSecretCommand === "function");
assert(typeof DeleteSecret$ === "object");
assert(typeof DescribeSecretCommand === "function");
assert(typeof DescribeSecret$ === "object");
assert(typeof GetRandomPasswordCommand === "function");
assert(typeof GetRandomPassword$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetSecretValueCommand === "function");
assert(typeof GetSecretValue$ === "object");
assert(typeof ListSecretsCommand === "function");
assert(typeof ListSecrets$ === "object");
assert(typeof ListSecretVersionIdsCommand === "function");
assert(typeof ListSecretVersionIds$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof PutSecretValueCommand === "function");
assert(typeof PutSecretValue$ === "object");
assert(typeof RemoveRegionsFromReplicationCommand === "function");
assert(typeof RemoveRegionsFromReplication$ === "object");
assert(typeof ReplicateSecretToRegionsCommand === "function");
assert(typeof ReplicateSecretToRegions$ === "object");
assert(typeof RestoreSecretCommand === "function");
assert(typeof RestoreSecret$ === "object");
assert(typeof RotateSecretCommand === "function");
assert(typeof RotateSecret$ === "object");
assert(typeof StopReplicationToReplicaCommand === "function");
assert(typeof StopReplicationToReplica$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateSecretCommand === "function");
assert(typeof UpdateSecret$ === "object");
assert(typeof UpdateSecretVersionStageCommand === "function");
assert(typeof UpdateSecretVersionStage$ === "object");
assert(typeof ValidateResourcePolicyCommand === "function");
assert(typeof ValidateResourcePolicy$ === "object");
// structural schemas
assert(typeof APIErrorType$ === "object");
assert(typeof BatchGetSecretValueRequest$ === "object");
assert(typeof BatchGetSecretValueResponse$ === "object");
assert(typeof CancelRotateSecretRequest$ === "object");
assert(typeof CancelRotateSecretResponse$ === "object");
assert(typeof CreateSecretRequest$ === "object");
assert(typeof CreateSecretResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteSecretRequest$ === "object");
assert(typeof DeleteSecretResponse$ === "object");
assert(typeof DescribeSecretRequest$ === "object");
assert(typeof DescribeSecretResponse$ === "object");
assert(typeof ExternalSecretRotationMetadataItem$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetRandomPasswordRequest$ === "object");
assert(typeof GetRandomPasswordResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof GetSecretValueRequest$ === "object");
assert(typeof GetSecretValueResponse$ === "object");
assert(typeof ListSecretsRequest$ === "object");
assert(typeof ListSecretsResponse$ === "object");
assert(typeof ListSecretVersionIdsRequest$ === "object");
assert(typeof ListSecretVersionIdsResponse$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof PutSecretValueRequest$ === "object");
assert(typeof PutSecretValueResponse$ === "object");
assert(typeof RemoveRegionsFromReplicationRequest$ === "object");
assert(typeof RemoveRegionsFromReplicationResponse$ === "object");
assert(typeof ReplicaRegionType$ === "object");
assert(typeof ReplicateSecretToRegionsRequest$ === "object");
assert(typeof ReplicateSecretToRegionsResponse$ === "object");
assert(typeof ReplicationStatusType$ === "object");
assert(typeof RestoreSecretRequest$ === "object");
assert(typeof RestoreSecretResponse$ === "object");
assert(typeof RotateSecretRequest$ === "object");
assert(typeof RotateSecretResponse$ === "object");
assert(typeof RotationRulesType$ === "object");
assert(typeof SecretListEntry$ === "object");
assert(typeof SecretValueEntry$ === "object");
assert(typeof SecretVersionsListEntry$ === "object");
assert(typeof StopReplicationToReplicaRequest$ === "object");
assert(typeof StopReplicationToReplicaResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateSecretRequest$ === "object");
assert(typeof UpdateSecretResponse$ === "object");
assert(typeof UpdateSecretVersionStageRequest$ === "object");
assert(typeof UpdateSecretVersionStageResponse$ === "object");
assert(typeof ValidateResourcePolicyRequest$ === "object");
assert(typeof ValidateResourcePolicyResponse$ === "object");
assert(typeof ValidationErrorsEntry$ === "object");
// enums
assert(typeof FilterNameStringType === "object");
assert(typeof SortByType === "object");
assert(typeof SortOrderType === "object");
assert(typeof StatusType === "object");
// errors
assert(DecryptionFailure.prototype instanceof SecretsManagerServiceException);
assert(typeof DecryptionFailure$ === "object");
assert(EncryptionFailure.prototype instanceof SecretsManagerServiceException);
assert(typeof EncryptionFailure$ === "object");
assert(InternalServiceError.prototype instanceof SecretsManagerServiceException);
assert(typeof InternalServiceError$ === "object");
assert(InvalidNextTokenException.prototype instanceof SecretsManagerServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidParameterException.prototype instanceof SecretsManagerServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidRequestException.prototype instanceof SecretsManagerServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LimitExceededException.prototype instanceof SecretsManagerServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MalformedPolicyDocumentException.prototype instanceof SecretsManagerServiceException);
assert(typeof MalformedPolicyDocumentException$ === "object");
assert(PreconditionNotMetException.prototype instanceof SecretsManagerServiceException);
assert(typeof PreconditionNotMetException$ === "object");
assert(PublicPolicyException.prototype instanceof SecretsManagerServiceException);
assert(typeof PublicPolicyException$ === "object");
assert(ResourceExistsException.prototype instanceof SecretsManagerServiceException);
assert(typeof ResourceExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SecretsManagerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(SecretsManagerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateBatchGetSecretValue === "function");
assert(typeof paginateListSecretVersionIds === "function");
assert(typeof paginateListSecrets === "function");
console.log(`SecretsManager index test passed.`);
