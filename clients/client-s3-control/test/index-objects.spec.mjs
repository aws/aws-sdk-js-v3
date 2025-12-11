import {
  AssociateAccessGrantsIdentityCenterCommand,
  AsyncOperationName,
  BadRequestException,
  BucketAlreadyExists,
  BucketAlreadyOwnedByYou,
  BucketCannedACL,
  BucketLocationConstraint,
  BucketVersioningStatus,
  ComputeObjectChecksumAlgorithm,
  ComputeObjectChecksumType,
  CreateAccessGrantCommand,
  CreateAccessGrantsInstanceCommand,
  CreateAccessGrantsLocationCommand,
  CreateAccessPointCommand,
  CreateAccessPointForObjectLambdaCommand,
  CreateBucketCommand,
  CreateJobCommand,
  CreateMultiRegionAccessPointCommand,
  CreateStorageLensGroupCommand,
  DeleteAccessGrantCommand,
  DeleteAccessGrantsInstanceCommand,
  DeleteAccessGrantsInstanceResourcePolicyCommand,
  DeleteAccessGrantsLocationCommand,
  DeleteAccessPointCommand,
  DeleteAccessPointForObjectLambdaCommand,
  DeleteAccessPointPolicyCommand,
  DeleteAccessPointPolicyForObjectLambdaCommand,
  DeleteAccessPointScopeCommand,
  DeleteBucketCommand,
  DeleteBucketLifecycleConfigurationCommand,
  DeleteBucketPolicyCommand,
  DeleteBucketReplicationCommand,
  DeleteBucketTaggingCommand,
  DeleteJobTaggingCommand,
  DeleteMarkerReplicationStatus,
  DeleteMultiRegionAccessPointCommand,
  DeletePublicAccessBlockCommand,
  DeleteStorageLensConfigurationCommand,
  DeleteStorageLensConfigurationTaggingCommand,
  DeleteStorageLensGroupCommand,
  DescribeJobCommand,
  DescribeMultiRegionAccessPointOperationCommand,
  DissociateAccessGrantsIdentityCenterCommand,
  ExistingObjectReplicationStatus,
  ExpirationStatus,
  Format,
  GeneratedManifestFormat,
  GetAccessGrantCommand,
  GetAccessGrantsInstanceCommand,
  GetAccessGrantsInstanceForPrefixCommand,
  GetAccessGrantsInstanceResourcePolicyCommand,
  GetAccessGrantsLocationCommand,
  GetAccessPointCommand,
  GetAccessPointConfigurationForObjectLambdaCommand,
  GetAccessPointForObjectLambdaCommand,
  GetAccessPointPolicyCommand,
  GetAccessPointPolicyForObjectLambdaCommand,
  GetAccessPointPolicyStatusCommand,
  GetAccessPointPolicyStatusForObjectLambdaCommand,
  GetAccessPointScopeCommand,
  GetBucketCommand,
  GetBucketLifecycleConfigurationCommand,
  GetBucketPolicyCommand,
  GetBucketReplicationCommand,
  GetBucketTaggingCommand,
  GetBucketVersioningCommand,
  GetDataAccessCommand,
  GetJobTaggingCommand,
  GetMultiRegionAccessPointCommand,
  GetMultiRegionAccessPointPolicyCommand,
  GetMultiRegionAccessPointPolicyStatusCommand,
  GetMultiRegionAccessPointRoutesCommand,
  GetPublicAccessBlockCommand,
  GetStorageLensConfigurationCommand,
  GetStorageLensConfigurationTaggingCommand,
  GetStorageLensGroupCommand,
  GranteeType,
  IdempotencyException,
  InternalServiceException,
  InvalidNextTokenException,
  InvalidRequestException,
  JobManifestFieldName,
  JobManifestFormat,
  JobReportFormat,
  JobReportScope,
  JobStatus,
  JobStatusException,
  ListAccessGrantsCommand,
  ListAccessGrantsInstancesCommand,
  ListAccessGrantsLocationsCommand,
  ListAccessPointsCommand,
  ListAccessPointsForDirectoryBucketsCommand,
  ListAccessPointsForObjectLambdaCommand,
  ListCallerAccessGrantsCommand,
  ListJobsCommand,
  ListMultiRegionAccessPointsCommand,
  ListRegionalBucketsCommand,
  ListStorageLensConfigurationsCommand,
  ListStorageLensGroupsCommand,
  ListTagsForResourceCommand,
  MFADelete,
  MFADeleteStatus,
  MetricsStatus,
  MultiRegionAccessPointStatus,
  NetworkOrigin,
  NoSuchPublicAccessBlockConfiguration,
  NotFoundException,
  ObjectLambdaAccessPointAliasStatus,
  ObjectLambdaAllowedFeature,
  ObjectLambdaTransformationConfigurationAction,
  OperationName,
  OutputSchemaVersion,
  OwnerOverride,
  Permission,
  Privilege,
  PutAccessGrantsInstanceResourcePolicyCommand,
  PutAccessPointConfigurationForObjectLambdaCommand,
  PutAccessPointPolicyCommand,
  PutAccessPointPolicyForObjectLambdaCommand,
  PutAccessPointScopeCommand,
  PutBucketLifecycleConfigurationCommand,
  PutBucketPolicyCommand,
  PutBucketReplicationCommand,
  PutBucketTaggingCommand,
  PutBucketVersioningCommand,
  PutJobTaggingCommand,
  PutMultiRegionAccessPointPolicyCommand,
  PutPublicAccessBlockCommand,
  PutStorageLensConfigurationCommand,
  PutStorageLensConfigurationTaggingCommand,
  ReplicaModificationsStatus,
  ReplicationRuleStatus,
  ReplicationStatus,
  ReplicationStorageClass,
  ReplicationTimeStatus,
  RequestedJobStatus,
  S3CannedAccessControlList,
  S3ChecksumAlgorithm,
  S3Control,
  S3ControlClient,
  S3ControlServiceException,
  S3GlacierJobTier,
  S3GranteeTypeIdentifier,
  S3MetadataDirective,
  S3ObjectLockLegalHoldStatus,
  S3ObjectLockMode,
  S3ObjectLockRetentionMode,
  S3Permission,
  S3PrefixType,
  S3SSEAlgorithm,
  S3StorageClass,
  ScopePermission,
  SseKmsEncryptedObjectsStatus,
  SubmitMultiRegionAccessPointRoutesCommand,
  TagResourceCommand,
  TooManyRequestsException,
  TooManyTagsException,
  TransitionStorageClass,
  UntagResourceCommand,
  UpdateAccessGrantsLocationCommand,
  UpdateJobPriorityCommand,
  UpdateJobStatusCommand,
  UpdateStorageLensGroupCommand,
  paginateListAccessGrants,
  paginateListAccessGrantsInstances,
  paginateListAccessGrantsLocations,
  paginateListAccessPoints,
  paginateListAccessPointsForDirectoryBuckets,
  paginateListAccessPointsForObjectLambda,
  paginateListCallerAccessGrants,
  paginateListJobs,
  paginateListMultiRegionAccessPoints,
  paginateListRegionalBuckets,
  paginateListStorageLensConfigurations,
  paginateListStorageLensGroups,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof S3ControlClient === "function");
assert(typeof S3Control === "function");
// commands
assert(typeof AssociateAccessGrantsIdentityCenterCommand === "function");
assert(typeof CreateAccessGrantCommand === "function");
assert(typeof CreateAccessGrantsInstanceCommand === "function");
assert(typeof CreateAccessGrantsLocationCommand === "function");
assert(typeof CreateAccessPointCommand === "function");
assert(typeof CreateAccessPointForObjectLambdaCommand === "function");
assert(typeof CreateBucketCommand === "function");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateMultiRegionAccessPointCommand === "function");
assert(typeof CreateStorageLensGroupCommand === "function");
assert(typeof DeleteAccessGrantCommand === "function");
assert(typeof DeleteAccessGrantsInstanceCommand === "function");
assert(typeof DeleteAccessGrantsInstanceResourcePolicyCommand === "function");
assert(typeof DeleteAccessGrantsLocationCommand === "function");
assert(typeof DeleteAccessPointCommand === "function");
assert(typeof DeleteAccessPointForObjectLambdaCommand === "function");
assert(typeof DeleteAccessPointPolicyCommand === "function");
assert(typeof DeleteAccessPointPolicyForObjectLambdaCommand === "function");
assert(typeof DeleteAccessPointScopeCommand === "function");
assert(typeof DeleteBucketCommand === "function");
assert(typeof DeleteBucketLifecycleConfigurationCommand === "function");
assert(typeof DeleteBucketPolicyCommand === "function");
assert(typeof DeleteBucketReplicationCommand === "function");
assert(typeof DeleteBucketTaggingCommand === "function");
assert(typeof DeleteJobTaggingCommand === "function");
assert(typeof DeleteMultiRegionAccessPointCommand === "function");
assert(typeof DeletePublicAccessBlockCommand === "function");
assert(typeof DeleteStorageLensConfigurationCommand === "function");
assert(typeof DeleteStorageLensConfigurationTaggingCommand === "function");
assert(typeof DeleteStorageLensGroupCommand === "function");
assert(typeof DescribeJobCommand === "function");
assert(typeof DescribeMultiRegionAccessPointOperationCommand === "function");
assert(typeof DissociateAccessGrantsIdentityCenterCommand === "function");
assert(typeof GetAccessGrantCommand === "function");
assert(typeof GetAccessGrantsInstanceCommand === "function");
assert(typeof GetAccessGrantsInstanceForPrefixCommand === "function");
assert(typeof GetAccessGrantsInstanceResourcePolicyCommand === "function");
assert(typeof GetAccessGrantsLocationCommand === "function");
assert(typeof GetAccessPointCommand === "function");
assert(typeof GetAccessPointConfigurationForObjectLambdaCommand === "function");
assert(typeof GetAccessPointForObjectLambdaCommand === "function");
assert(typeof GetAccessPointPolicyCommand === "function");
assert(typeof GetAccessPointPolicyForObjectLambdaCommand === "function");
assert(typeof GetAccessPointPolicyStatusCommand === "function");
assert(typeof GetAccessPointPolicyStatusForObjectLambdaCommand === "function");
assert(typeof GetAccessPointScopeCommand === "function");
assert(typeof GetBucketCommand === "function");
assert(typeof GetBucketLifecycleConfigurationCommand === "function");
assert(typeof GetBucketPolicyCommand === "function");
assert(typeof GetBucketReplicationCommand === "function");
assert(typeof GetBucketTaggingCommand === "function");
assert(typeof GetBucketVersioningCommand === "function");
assert(typeof GetDataAccessCommand === "function");
assert(typeof GetJobTaggingCommand === "function");
assert(typeof GetMultiRegionAccessPointCommand === "function");
assert(typeof GetMultiRegionAccessPointPolicyCommand === "function");
assert(typeof GetMultiRegionAccessPointPolicyStatusCommand === "function");
assert(typeof GetMultiRegionAccessPointRoutesCommand === "function");
assert(typeof GetPublicAccessBlockCommand === "function");
assert(typeof GetStorageLensConfigurationCommand === "function");
assert(typeof GetStorageLensConfigurationTaggingCommand === "function");
assert(typeof GetStorageLensGroupCommand === "function");
assert(typeof ListAccessGrantsCommand === "function");
assert(typeof ListAccessGrantsInstancesCommand === "function");
assert(typeof ListAccessGrantsLocationsCommand === "function");
assert(typeof ListAccessPointsCommand === "function");
assert(typeof ListAccessPointsForDirectoryBucketsCommand === "function");
assert(typeof ListAccessPointsForObjectLambdaCommand === "function");
assert(typeof ListCallerAccessGrantsCommand === "function");
assert(typeof ListJobsCommand === "function");
assert(typeof ListMultiRegionAccessPointsCommand === "function");
assert(typeof ListRegionalBucketsCommand === "function");
assert(typeof ListStorageLensConfigurationsCommand === "function");
assert(typeof ListStorageLensGroupsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutAccessGrantsInstanceResourcePolicyCommand === "function");
assert(typeof PutAccessPointConfigurationForObjectLambdaCommand === "function");
assert(typeof PutAccessPointPolicyCommand === "function");
assert(typeof PutAccessPointPolicyForObjectLambdaCommand === "function");
assert(typeof PutAccessPointScopeCommand === "function");
assert(typeof PutBucketLifecycleConfigurationCommand === "function");
assert(typeof PutBucketPolicyCommand === "function");
assert(typeof PutBucketReplicationCommand === "function");
assert(typeof PutBucketTaggingCommand === "function");
assert(typeof PutBucketVersioningCommand === "function");
assert(typeof PutJobTaggingCommand === "function");
assert(typeof PutMultiRegionAccessPointPolicyCommand === "function");
assert(typeof PutPublicAccessBlockCommand === "function");
assert(typeof PutStorageLensConfigurationCommand === "function");
assert(typeof PutStorageLensConfigurationTaggingCommand === "function");
assert(typeof SubmitMultiRegionAccessPointRoutesCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccessGrantsLocationCommand === "function");
assert(typeof UpdateJobPriorityCommand === "function");
assert(typeof UpdateJobStatusCommand === "function");
assert(typeof UpdateStorageLensGroupCommand === "function");
// enums
assert(typeof AsyncOperationName === "object");
assert(typeof BucketCannedACL === "object");
assert(typeof BucketLocationConstraint === "object");
assert(typeof BucketVersioningStatus === "object");
assert(typeof ComputeObjectChecksumAlgorithm === "object");
assert(typeof ComputeObjectChecksumType === "object");
assert(typeof DeleteMarkerReplicationStatus === "object");
assert(typeof ExistingObjectReplicationStatus === "object");
assert(typeof ExpirationStatus === "object");
assert(typeof Format === "object");
assert(typeof GeneratedManifestFormat === "object");
assert(typeof GranteeType === "object");
assert(typeof JobManifestFieldName === "object");
assert(typeof JobManifestFormat === "object");
assert(typeof JobReportFormat === "object");
assert(typeof JobReportScope === "object");
assert(typeof JobStatus === "object");
assert(typeof MetricsStatus === "object");
assert(typeof MFADelete === "object");
assert(typeof MFADeleteStatus === "object");
assert(typeof MultiRegionAccessPointStatus === "object");
assert(typeof NetworkOrigin === "object");
assert(typeof ObjectLambdaAccessPointAliasStatus === "object");
assert(typeof ObjectLambdaAllowedFeature === "object");
assert(typeof ObjectLambdaTransformationConfigurationAction === "object");
assert(typeof OperationName === "object");
assert(typeof OutputSchemaVersion === "object");
assert(typeof OwnerOverride === "object");
assert(typeof Permission === "object");
assert(typeof Privilege === "object");
assert(typeof ReplicaModificationsStatus === "object");
assert(typeof ReplicationRuleStatus === "object");
assert(typeof ReplicationStatus === "object");
assert(typeof ReplicationStorageClass === "object");
assert(typeof ReplicationTimeStatus === "object");
assert(typeof RequestedJobStatus === "object");
assert(typeof S3CannedAccessControlList === "object");
assert(typeof S3ChecksumAlgorithm === "object");
assert(typeof S3GlacierJobTier === "object");
assert(typeof S3GranteeTypeIdentifier === "object");
assert(typeof S3MetadataDirective === "object");
assert(typeof S3ObjectLockLegalHoldStatus === "object");
assert(typeof S3ObjectLockMode === "object");
assert(typeof S3ObjectLockRetentionMode === "object");
assert(typeof S3Permission === "object");
assert(typeof S3PrefixType === "object");
assert(typeof S3SSEAlgorithm === "object");
assert(typeof S3StorageClass === "object");
assert(typeof ScopePermission === "object");
assert(typeof SseKmsEncryptedObjectsStatus === "object");
assert(typeof TransitionStorageClass === "object");
// errors
assert(BadRequestException.prototype instanceof S3ControlServiceException);
assert(BucketAlreadyExists.prototype instanceof S3ControlServiceException);
assert(BucketAlreadyOwnedByYou.prototype instanceof S3ControlServiceException);
assert(IdempotencyException.prototype instanceof S3ControlServiceException);
assert(InternalServiceException.prototype instanceof S3ControlServiceException);
assert(InvalidNextTokenException.prototype instanceof S3ControlServiceException);
assert(InvalidRequestException.prototype instanceof S3ControlServiceException);
assert(JobStatusException.prototype instanceof S3ControlServiceException);
assert(NoSuchPublicAccessBlockConfiguration.prototype instanceof S3ControlServiceException);
assert(NotFoundException.prototype instanceof S3ControlServiceException);
assert(TooManyRequestsException.prototype instanceof S3ControlServiceException);
assert(TooManyTagsException.prototype instanceof S3ControlServiceException);
assert(S3ControlServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccessGrants === "function");
assert(typeof paginateListAccessGrantsInstances === "function");
assert(typeof paginateListAccessGrantsLocations === "function");
assert(typeof paginateListAccessPoints === "function");
assert(typeof paginateListAccessPointsForDirectoryBuckets === "function");
assert(typeof paginateListAccessPointsForObjectLambda === "function");
assert(typeof paginateListCallerAccessGrants === "function");
assert(typeof paginateListJobs === "function");
assert(typeof paginateListMultiRegionAccessPoints === "function");
assert(typeof paginateListRegionalBuckets === "function");
assert(typeof paginateListStorageLensConfigurations === "function");
assert(typeof paginateListStorageLensGroups === "function");
console.log(`S3Control index test passed.`);
