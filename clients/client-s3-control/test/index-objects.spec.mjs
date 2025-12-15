import {
  AbortIncompleteMultipartUpload$,
  AccessControlTranslation$,
  AccessGrantsLocationConfiguration$,
  AccessPoint$,
  AccountLevel$,
  ActivityMetrics$,
  AdvancedCostOptimizationMetrics$,
  AdvancedDataProtectionMetrics$,
  AdvancedPerformanceMetrics$,
  AssociateAccessGrantsIdentityCenter$,
  AssociateAccessGrantsIdentityCenterCommand,
  AssociateAccessGrantsIdentityCenterRequest$,
  AsyncErrorDetails$,
  AsyncOperation$,
  AsyncOperationName,
  AsyncRequestParameters$,
  AsyncResponseDetails$,
  AwsLambdaTransformation$,
  BadRequestException,
  BadRequestException$,
  BucketAlreadyExists,
  BucketAlreadyExists$,
  BucketAlreadyOwnedByYou,
  BucketAlreadyOwnedByYou$,
  BucketCannedACL,
  BucketLevel$,
  BucketLocationConstraint,
  BucketVersioningStatus,
  CloudWatchMetrics$,
  ComputeObjectChecksumAlgorithm,
  ComputeObjectChecksumType,
  CreateAccessGrant$,
  CreateAccessGrantCommand,
  CreateAccessGrantRequest$,
  CreateAccessGrantResult$,
  CreateAccessGrantsInstance$,
  CreateAccessGrantsInstanceCommand,
  CreateAccessGrantsInstanceRequest$,
  CreateAccessGrantsInstanceResult$,
  CreateAccessGrantsLocation$,
  CreateAccessGrantsLocationCommand,
  CreateAccessGrantsLocationRequest$,
  CreateAccessGrantsLocationResult$,
  CreateAccessPoint$,
  CreateAccessPointCommand,
  CreateAccessPointForObjectLambda$,
  CreateAccessPointForObjectLambdaCommand,
  CreateAccessPointForObjectLambdaRequest$,
  CreateAccessPointForObjectLambdaResult$,
  CreateAccessPointRequest$,
  CreateAccessPointResult$,
  CreateBucket$,
  CreateBucketCommand,
  CreateBucketConfiguration$,
  CreateBucketRequest$,
  CreateBucketResult$,
  CreateJob$,
  CreateJobCommand,
  CreateJobRequest$,
  CreateJobResult$,
  CreateMultiRegionAccessPoint$,
  CreateMultiRegionAccessPointCommand,
  CreateMultiRegionAccessPointInput$,
  CreateMultiRegionAccessPointRequest$,
  CreateMultiRegionAccessPointResult$,
  CreateStorageLensGroup$,
  CreateStorageLensGroupCommand,
  CreateStorageLensGroupRequest$,
  Credentials$,
  DSSEKMSFilter$,
  DeleteAccessGrant$,
  DeleteAccessGrantCommand,
  DeleteAccessGrantRequest$,
  DeleteAccessGrantsInstance$,
  DeleteAccessGrantsInstanceCommand,
  DeleteAccessGrantsInstanceRequest$,
  DeleteAccessGrantsInstanceResourcePolicy$,
  DeleteAccessGrantsInstanceResourcePolicyCommand,
  DeleteAccessGrantsInstanceResourcePolicyRequest$,
  DeleteAccessGrantsLocation$,
  DeleteAccessGrantsLocationCommand,
  DeleteAccessGrantsLocationRequest$,
  DeleteAccessPoint$,
  DeleteAccessPointCommand,
  DeleteAccessPointForObjectLambda$,
  DeleteAccessPointForObjectLambdaCommand,
  DeleteAccessPointForObjectLambdaRequest$,
  DeleteAccessPointPolicy$,
  DeleteAccessPointPolicyCommand,
  DeleteAccessPointPolicyForObjectLambda$,
  DeleteAccessPointPolicyForObjectLambdaCommand,
  DeleteAccessPointPolicyForObjectLambdaRequest$,
  DeleteAccessPointPolicyRequest$,
  DeleteAccessPointRequest$,
  DeleteAccessPointScope$,
  DeleteAccessPointScopeCommand,
  DeleteAccessPointScopeRequest$,
  DeleteBucket$,
  DeleteBucketCommand,
  DeleteBucketLifecycleConfiguration$,
  DeleteBucketLifecycleConfigurationCommand,
  DeleteBucketLifecycleConfigurationRequest$,
  DeleteBucketPolicy$,
  DeleteBucketPolicyCommand,
  DeleteBucketPolicyRequest$,
  DeleteBucketReplication$,
  DeleteBucketReplicationCommand,
  DeleteBucketReplicationRequest$,
  DeleteBucketRequest$,
  DeleteBucketTagging$,
  DeleteBucketTaggingCommand,
  DeleteBucketTaggingRequest$,
  DeleteJobTagging$,
  DeleteJobTaggingCommand,
  DeleteJobTaggingRequest$,
  DeleteJobTaggingResult$,
  DeleteMarkerReplication$,
  DeleteMarkerReplicationStatus,
  DeleteMultiRegionAccessPoint$,
  DeleteMultiRegionAccessPointCommand,
  DeleteMultiRegionAccessPointInput$,
  DeleteMultiRegionAccessPointRequest$,
  DeleteMultiRegionAccessPointResult$,
  DeletePublicAccessBlock$,
  DeletePublicAccessBlockCommand,
  DeletePublicAccessBlockRequest$,
  DeleteStorageLensConfiguration$,
  DeleteStorageLensConfigurationCommand,
  DeleteStorageLensConfigurationRequest$,
  DeleteStorageLensConfigurationTagging$,
  DeleteStorageLensConfigurationTaggingCommand,
  DeleteStorageLensConfigurationTaggingRequest$,
  DeleteStorageLensConfigurationTaggingResult$,
  DeleteStorageLensGroup$,
  DeleteStorageLensGroupCommand,
  DeleteStorageLensGroupRequest$,
  DescribeJob$,
  DescribeJobCommand,
  DescribeJobRequest$,
  DescribeJobResult$,
  DescribeMultiRegionAccessPointOperation$,
  DescribeMultiRegionAccessPointOperationCommand,
  DescribeMultiRegionAccessPointOperationRequest$,
  DescribeMultiRegionAccessPointOperationResult$,
  Destination$,
  DetailedStatusCodesMetrics$,
  DissociateAccessGrantsIdentityCenter$,
  DissociateAccessGrantsIdentityCenterCommand,
  DissociateAccessGrantsIdentityCenterRequest$,
  EncryptionConfiguration$,
  EstablishedMultiRegionAccessPointPolicy$,
  ExistingObjectReplication$,
  ExistingObjectReplicationStatus,
  ExpirationStatus,
  Format,
  GeneratedManifestEncryption$,
  GeneratedManifestFormat,
  GetAccessGrant$,
  GetAccessGrantCommand,
  GetAccessGrantRequest$,
  GetAccessGrantResult$,
  GetAccessGrantsInstance$,
  GetAccessGrantsInstanceCommand,
  GetAccessGrantsInstanceForPrefix$,
  GetAccessGrantsInstanceForPrefixCommand,
  GetAccessGrantsInstanceForPrefixRequest$,
  GetAccessGrantsInstanceForPrefixResult$,
  GetAccessGrantsInstanceRequest$,
  GetAccessGrantsInstanceResourcePolicy$,
  GetAccessGrantsInstanceResourcePolicyCommand,
  GetAccessGrantsInstanceResourcePolicyRequest$,
  GetAccessGrantsInstanceResourcePolicyResult$,
  GetAccessGrantsInstanceResult$,
  GetAccessGrantsLocation$,
  GetAccessGrantsLocationCommand,
  GetAccessGrantsLocationRequest$,
  GetAccessGrantsLocationResult$,
  GetAccessPoint$,
  GetAccessPointCommand,
  GetAccessPointConfigurationForObjectLambda$,
  GetAccessPointConfigurationForObjectLambdaCommand,
  GetAccessPointConfigurationForObjectLambdaRequest$,
  GetAccessPointConfigurationForObjectLambdaResult$,
  GetAccessPointForObjectLambda$,
  GetAccessPointForObjectLambdaCommand,
  GetAccessPointForObjectLambdaRequest$,
  GetAccessPointForObjectLambdaResult$,
  GetAccessPointPolicy$,
  GetAccessPointPolicyCommand,
  GetAccessPointPolicyForObjectLambda$,
  GetAccessPointPolicyForObjectLambdaCommand,
  GetAccessPointPolicyForObjectLambdaRequest$,
  GetAccessPointPolicyForObjectLambdaResult$,
  GetAccessPointPolicyRequest$,
  GetAccessPointPolicyResult$,
  GetAccessPointPolicyStatus$,
  GetAccessPointPolicyStatusCommand,
  GetAccessPointPolicyStatusForObjectLambda$,
  GetAccessPointPolicyStatusForObjectLambdaCommand,
  GetAccessPointPolicyStatusForObjectLambdaRequest$,
  GetAccessPointPolicyStatusForObjectLambdaResult$,
  GetAccessPointPolicyStatusRequest$,
  GetAccessPointPolicyStatusResult$,
  GetAccessPointRequest$,
  GetAccessPointResult$,
  GetAccessPointScope$,
  GetAccessPointScopeCommand,
  GetAccessPointScopeRequest$,
  GetAccessPointScopeResult$,
  GetBucket$,
  GetBucketCommand,
  GetBucketLifecycleConfiguration$,
  GetBucketLifecycleConfigurationCommand,
  GetBucketLifecycleConfigurationRequest$,
  GetBucketLifecycleConfigurationResult$,
  GetBucketPolicy$,
  GetBucketPolicyCommand,
  GetBucketPolicyRequest$,
  GetBucketPolicyResult$,
  GetBucketReplication$,
  GetBucketReplicationCommand,
  GetBucketReplicationRequest$,
  GetBucketReplicationResult$,
  GetBucketRequest$,
  GetBucketResult$,
  GetBucketTagging$,
  GetBucketTaggingCommand,
  GetBucketTaggingRequest$,
  GetBucketTaggingResult$,
  GetBucketVersioning$,
  GetBucketVersioningCommand,
  GetBucketVersioningRequest$,
  GetBucketVersioningResult$,
  GetDataAccess$,
  GetDataAccessCommand,
  GetDataAccessRequest$,
  GetDataAccessResult$,
  GetJobTagging$,
  GetJobTaggingCommand,
  GetJobTaggingRequest$,
  GetJobTaggingResult$,
  GetMultiRegionAccessPoint$,
  GetMultiRegionAccessPointCommand,
  GetMultiRegionAccessPointPolicy$,
  GetMultiRegionAccessPointPolicyCommand,
  GetMultiRegionAccessPointPolicyRequest$,
  GetMultiRegionAccessPointPolicyResult$,
  GetMultiRegionAccessPointPolicyStatus$,
  GetMultiRegionAccessPointPolicyStatusCommand,
  GetMultiRegionAccessPointPolicyStatusRequest$,
  GetMultiRegionAccessPointPolicyStatusResult$,
  GetMultiRegionAccessPointRequest$,
  GetMultiRegionAccessPointResult$,
  GetMultiRegionAccessPointRoutes$,
  GetMultiRegionAccessPointRoutesCommand,
  GetMultiRegionAccessPointRoutesRequest$,
  GetMultiRegionAccessPointRoutesResult$,
  GetPublicAccessBlock$,
  GetPublicAccessBlockCommand,
  GetPublicAccessBlockOutput$,
  GetPublicAccessBlockRequest$,
  GetStorageLensConfiguration$,
  GetStorageLensConfigurationCommand,
  GetStorageLensConfigurationRequest$,
  GetStorageLensConfigurationResult$,
  GetStorageLensConfigurationTagging$,
  GetStorageLensConfigurationTaggingCommand,
  GetStorageLensConfigurationTaggingRequest$,
  GetStorageLensConfigurationTaggingResult$,
  GetStorageLensGroup$,
  GetStorageLensGroupCommand,
  GetStorageLensGroupRequest$,
  GetStorageLensGroupResult$,
  Grantee$,
  GranteeType,
  IdempotencyException,
  IdempotencyException$,
  Include$,
  InternalServiceException,
  InternalServiceException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidRequestException,
  InvalidRequestException$,
  JobDescriptor$,
  JobFailure$,
  JobListDescriptor$,
  JobManifest$,
  JobManifestFieldName,
  JobManifestFormat,
  JobManifestGenerator$,
  JobManifestGeneratorFilter$,
  JobManifestLocation$,
  JobManifestSpec$,
  JobOperation$,
  JobProgressSummary$,
  JobReport$,
  JobReportFormat,
  JobReportScope,
  JobStatus,
  JobStatusException,
  JobStatusException$,
  JobTimers$,
  KeyNameConstraint$,
  LambdaInvokeOperation$,
  LifecycleConfiguration$,
  LifecycleExpiration$,
  LifecycleRule$,
  LifecycleRuleAndOperator$,
  LifecycleRuleFilter$,
  ListAccessGrantEntry$,
  ListAccessGrants$,
  ListAccessGrantsCommand,
  ListAccessGrantsInstanceEntry$,
  ListAccessGrantsInstances$,
  ListAccessGrantsInstancesCommand,
  ListAccessGrantsInstancesRequest$,
  ListAccessGrantsInstancesResult$,
  ListAccessGrantsLocations$,
  ListAccessGrantsLocationsCommand,
  ListAccessGrantsLocationsEntry$,
  ListAccessGrantsLocationsRequest$,
  ListAccessGrantsLocationsResult$,
  ListAccessGrantsRequest$,
  ListAccessGrantsResult$,
  ListAccessPoints$,
  ListAccessPointsCommand,
  ListAccessPointsForDirectoryBuckets$,
  ListAccessPointsForDirectoryBucketsCommand,
  ListAccessPointsForDirectoryBucketsRequest$,
  ListAccessPointsForDirectoryBucketsResult$,
  ListAccessPointsForObjectLambda$,
  ListAccessPointsForObjectLambdaCommand,
  ListAccessPointsForObjectLambdaRequest$,
  ListAccessPointsForObjectLambdaResult$,
  ListAccessPointsRequest$,
  ListAccessPointsResult$,
  ListCallerAccessGrants$,
  ListCallerAccessGrantsCommand,
  ListCallerAccessGrantsEntry$,
  ListCallerAccessGrantsRequest$,
  ListCallerAccessGrantsResult$,
  ListJobs$,
  ListJobsCommand,
  ListJobsRequest$,
  ListJobsResult$,
  ListMultiRegionAccessPoints$,
  ListMultiRegionAccessPointsCommand,
  ListMultiRegionAccessPointsRequest$,
  ListMultiRegionAccessPointsResult$,
  ListRegionalBuckets$,
  ListRegionalBucketsCommand,
  ListRegionalBucketsRequest$,
  ListRegionalBucketsResult$,
  ListStorageLensConfigurationEntry$,
  ListStorageLensConfigurations$,
  ListStorageLensConfigurationsCommand,
  ListStorageLensConfigurationsRequest$,
  ListStorageLensConfigurationsResult$,
  ListStorageLensGroupEntry$,
  ListStorageLensGroups$,
  ListStorageLensGroupsCommand,
  ListStorageLensGroupsRequest$,
  ListStorageLensGroupsResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResult$,
  MFADelete,
  MFADeleteStatus,
  MatchObjectAge$,
  MatchObjectSize$,
  Metrics$,
  MetricsStatus,
  MultiRegionAccessPointPolicyDocument$,
  MultiRegionAccessPointRegionalResponse$,
  MultiRegionAccessPointReport$,
  MultiRegionAccessPointRoute$,
  MultiRegionAccessPointStatus,
  MultiRegionAccessPointsAsyncResponse$,
  NetworkOrigin,
  NoSuchPublicAccessBlockConfiguration,
  NoSuchPublicAccessBlockConfiguration$,
  NoncurrentVersionExpiration$,
  NoncurrentVersionTransition$,
  NotFoundException,
  NotFoundException$,
  NotSSEFilter$,
  ObjectEncryptionFilter$,
  ObjectLambdaAccessPoint$,
  ObjectLambdaAccessPointAlias$,
  ObjectLambdaAccessPointAliasStatus,
  ObjectLambdaAllowedFeature,
  ObjectLambdaConfiguration$,
  ObjectLambdaContentTransformation$,
  ObjectLambdaTransformationConfiguration$,
  ObjectLambdaTransformationConfigurationAction,
  OperationName,
  OutputSchemaVersion,
  OwnerOverride,
  Permission,
  PolicyStatus$,
  PrefixLevel$,
  PrefixLevelStorageMetrics$,
  Privilege,
  ProposedMultiRegionAccessPointPolicy$,
  PublicAccessBlockConfiguration$,
  PutAccessGrantsInstanceResourcePolicy$,
  PutAccessGrantsInstanceResourcePolicyCommand,
  PutAccessGrantsInstanceResourcePolicyRequest$,
  PutAccessGrantsInstanceResourcePolicyResult$,
  PutAccessPointConfigurationForObjectLambda$,
  PutAccessPointConfigurationForObjectLambdaCommand,
  PutAccessPointConfigurationForObjectLambdaRequest$,
  PutAccessPointPolicy$,
  PutAccessPointPolicyCommand,
  PutAccessPointPolicyForObjectLambda$,
  PutAccessPointPolicyForObjectLambdaCommand,
  PutAccessPointPolicyForObjectLambdaRequest$,
  PutAccessPointPolicyRequest$,
  PutAccessPointScope$,
  PutAccessPointScopeCommand,
  PutAccessPointScopeRequest$,
  PutBucketLifecycleConfiguration$,
  PutBucketLifecycleConfigurationCommand,
  PutBucketLifecycleConfigurationRequest$,
  PutBucketPolicy$,
  PutBucketPolicyCommand,
  PutBucketPolicyRequest$,
  PutBucketReplication$,
  PutBucketReplicationCommand,
  PutBucketReplicationRequest$,
  PutBucketTagging$,
  PutBucketTaggingCommand,
  PutBucketTaggingRequest$,
  PutBucketVersioning$,
  PutBucketVersioningCommand,
  PutBucketVersioningRequest$,
  PutJobTagging$,
  PutJobTaggingCommand,
  PutJobTaggingRequest$,
  PutJobTaggingResult$,
  PutMultiRegionAccessPointPolicy$,
  PutMultiRegionAccessPointPolicyCommand,
  PutMultiRegionAccessPointPolicyInput$,
  PutMultiRegionAccessPointPolicyRequest$,
  PutMultiRegionAccessPointPolicyResult$,
  PutPublicAccessBlock$,
  PutPublicAccessBlockCommand,
  PutPublicAccessBlockRequest$,
  PutStorageLensConfiguration$,
  PutStorageLensConfigurationCommand,
  PutStorageLensConfigurationRequest$,
  PutStorageLensConfigurationTagging$,
  PutStorageLensConfigurationTaggingCommand,
  PutStorageLensConfigurationTaggingRequest$,
  PutStorageLensConfigurationTaggingResult$,
  Region$,
  RegionReport$,
  RegionalBucket$,
  ReplicaModifications$,
  ReplicaModificationsStatus,
  ReplicationConfiguration$,
  ReplicationRule$,
  ReplicationRuleAndOperator$,
  ReplicationRuleFilter$,
  ReplicationRuleStatus,
  ReplicationStatus,
  ReplicationStorageClass,
  ReplicationTime$,
  ReplicationTimeStatus,
  ReplicationTimeValue$,
  RequestedJobStatus,
  S3AccessControlList$,
  S3AccessControlPolicy$,
  S3BucketDestination$,
  S3CannedAccessControlList,
  S3ChecksumAlgorithm,
  S3ComputeObjectChecksumOperation$,
  S3Control,
  S3ControlClient,
  S3ControlServiceException,
  S3CopyObjectOperation$,
  S3DeleteObjectTaggingOperation$,
  S3GeneratedManifestDescriptor$,
  S3GlacierJobTier,
  S3Grant$,
  S3Grantee$,
  S3GranteeTypeIdentifier,
  S3InitiateRestoreObjectOperation$,
  S3JobManifestGenerator$,
  S3ManifestOutputLocation$,
  S3MetadataDirective,
  S3ObjectLockLegalHold$,
  S3ObjectLockLegalHoldStatus,
  S3ObjectLockMode,
  S3ObjectLockRetentionMode,
  S3ObjectMetadata$,
  S3ObjectOwner$,
  S3Permission,
  S3PrefixType,
  S3ReplicateObjectOperation$,
  S3Retention$,
  S3SSEAlgorithm,
  S3SetObjectAclOperation$,
  S3SetObjectLegalHoldOperation$,
  S3SetObjectRetentionOperation$,
  S3SetObjectTaggingOperation$,
  S3StorageClass,
  S3Tag$,
  SSECFilter$,
  SSEKMS$,
  SSEKMSEncryption$,
  SSEKMSFilter$,
  SSES3$,
  SSES3Encryption$,
  SSES3Filter$,
  Scope$,
  ScopePermission,
  SelectionCriteria$,
  SourceSelectionCriteria$,
  SseKmsEncryptedObjects$,
  SseKmsEncryptedObjectsStatus,
  StorageLensAwsOrg$,
  StorageLensConfiguration$,
  StorageLensDataExport$,
  StorageLensDataExportEncryption$,
  StorageLensExpandedPrefixesDataExport$,
  StorageLensGroup$,
  StorageLensGroupAndOperator$,
  StorageLensGroupFilter$,
  StorageLensGroupLevel$,
  StorageLensGroupLevelSelectionCriteria$,
  StorageLensGroupOrOperator$,
  StorageLensTableDestination$,
  StorageLensTag$,
  SubmitMultiRegionAccessPointRoutes$,
  SubmitMultiRegionAccessPointRoutesCommand,
  SubmitMultiRegionAccessPointRoutesRequest$,
  SubmitMultiRegionAccessPointRoutesResult$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResult$,
  Tagging$,
  TooManyRequestsException,
  TooManyRequestsException$,
  TooManyTagsException,
  TooManyTagsException$,
  Transition$,
  TransitionStorageClass,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResult$,
  UpdateAccessGrantsLocation$,
  UpdateAccessGrantsLocationCommand,
  UpdateAccessGrantsLocationRequest$,
  UpdateAccessGrantsLocationResult$,
  UpdateJobPriority$,
  UpdateJobPriorityCommand,
  UpdateJobPriorityRequest$,
  UpdateJobPriorityResult$,
  UpdateJobStatus$,
  UpdateJobStatusCommand,
  UpdateJobStatusRequest$,
  UpdateJobStatusResult$,
  UpdateStorageLensGroup$,
  UpdateStorageLensGroupCommand,
  UpdateStorageLensGroupRequest$,
  VersioningConfiguration$,
  VpcConfiguration$,
  _Exclude$,
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
assert(typeof AssociateAccessGrantsIdentityCenter$ === "object");
assert(typeof CreateAccessGrantCommand === "function");
assert(typeof CreateAccessGrant$ === "object");
assert(typeof CreateAccessGrantsInstanceCommand === "function");
assert(typeof CreateAccessGrantsInstance$ === "object");
assert(typeof CreateAccessGrantsLocationCommand === "function");
assert(typeof CreateAccessGrantsLocation$ === "object");
assert(typeof CreateAccessPointCommand === "function");
assert(typeof CreateAccessPoint$ === "object");
assert(typeof CreateAccessPointForObjectLambdaCommand === "function");
assert(typeof CreateAccessPointForObjectLambda$ === "object");
assert(typeof CreateBucketCommand === "function");
assert(typeof CreateBucket$ === "object");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateJob$ === "object");
assert(typeof CreateMultiRegionAccessPointCommand === "function");
assert(typeof CreateMultiRegionAccessPoint$ === "object");
assert(typeof CreateStorageLensGroupCommand === "function");
assert(typeof CreateStorageLensGroup$ === "object");
assert(typeof DeleteAccessGrantCommand === "function");
assert(typeof DeleteAccessGrant$ === "object");
assert(typeof DeleteAccessGrantsInstanceCommand === "function");
assert(typeof DeleteAccessGrantsInstance$ === "object");
assert(typeof DeleteAccessGrantsInstanceResourcePolicyCommand === "function");
assert(typeof DeleteAccessGrantsInstanceResourcePolicy$ === "object");
assert(typeof DeleteAccessGrantsLocationCommand === "function");
assert(typeof DeleteAccessGrantsLocation$ === "object");
assert(typeof DeleteAccessPointCommand === "function");
assert(typeof DeleteAccessPoint$ === "object");
assert(typeof DeleteAccessPointForObjectLambdaCommand === "function");
assert(typeof DeleteAccessPointForObjectLambda$ === "object");
assert(typeof DeleteAccessPointPolicyCommand === "function");
assert(typeof DeleteAccessPointPolicy$ === "object");
assert(typeof DeleteAccessPointPolicyForObjectLambdaCommand === "function");
assert(typeof DeleteAccessPointPolicyForObjectLambda$ === "object");
assert(typeof DeleteAccessPointScopeCommand === "function");
assert(typeof DeleteAccessPointScope$ === "object");
assert(typeof DeleteBucketCommand === "function");
assert(typeof DeleteBucket$ === "object");
assert(typeof DeleteBucketLifecycleConfigurationCommand === "function");
assert(typeof DeleteBucketLifecycleConfiguration$ === "object");
assert(typeof DeleteBucketPolicyCommand === "function");
assert(typeof DeleteBucketPolicy$ === "object");
assert(typeof DeleteBucketReplicationCommand === "function");
assert(typeof DeleteBucketReplication$ === "object");
assert(typeof DeleteBucketTaggingCommand === "function");
assert(typeof DeleteBucketTagging$ === "object");
assert(typeof DeleteJobTaggingCommand === "function");
assert(typeof DeleteJobTagging$ === "object");
assert(typeof DeleteMultiRegionAccessPointCommand === "function");
assert(typeof DeleteMultiRegionAccessPoint$ === "object");
assert(typeof DeletePublicAccessBlockCommand === "function");
assert(typeof DeletePublicAccessBlock$ === "object");
assert(typeof DeleteStorageLensConfigurationCommand === "function");
assert(typeof DeleteStorageLensConfiguration$ === "object");
assert(typeof DeleteStorageLensConfigurationTaggingCommand === "function");
assert(typeof DeleteStorageLensConfigurationTagging$ === "object");
assert(typeof DeleteStorageLensGroupCommand === "function");
assert(typeof DeleteStorageLensGroup$ === "object");
assert(typeof DescribeJobCommand === "function");
assert(typeof DescribeJob$ === "object");
assert(typeof DescribeMultiRegionAccessPointOperationCommand === "function");
assert(typeof DescribeMultiRegionAccessPointOperation$ === "object");
assert(typeof DissociateAccessGrantsIdentityCenterCommand === "function");
assert(typeof DissociateAccessGrantsIdentityCenter$ === "object");
assert(typeof GetAccessGrantCommand === "function");
assert(typeof GetAccessGrant$ === "object");
assert(typeof GetAccessGrantsInstanceCommand === "function");
assert(typeof GetAccessGrantsInstance$ === "object");
assert(typeof GetAccessGrantsInstanceForPrefixCommand === "function");
assert(typeof GetAccessGrantsInstanceForPrefix$ === "object");
assert(typeof GetAccessGrantsInstanceResourcePolicyCommand === "function");
assert(typeof GetAccessGrantsInstanceResourcePolicy$ === "object");
assert(typeof GetAccessGrantsLocationCommand === "function");
assert(typeof GetAccessGrantsLocation$ === "object");
assert(typeof GetAccessPointCommand === "function");
assert(typeof GetAccessPoint$ === "object");
assert(typeof GetAccessPointConfigurationForObjectLambdaCommand === "function");
assert(typeof GetAccessPointConfigurationForObjectLambda$ === "object");
assert(typeof GetAccessPointForObjectLambdaCommand === "function");
assert(typeof GetAccessPointForObjectLambda$ === "object");
assert(typeof GetAccessPointPolicyCommand === "function");
assert(typeof GetAccessPointPolicy$ === "object");
assert(typeof GetAccessPointPolicyForObjectLambdaCommand === "function");
assert(typeof GetAccessPointPolicyForObjectLambda$ === "object");
assert(typeof GetAccessPointPolicyStatusCommand === "function");
assert(typeof GetAccessPointPolicyStatus$ === "object");
assert(typeof GetAccessPointPolicyStatusForObjectLambdaCommand === "function");
assert(typeof GetAccessPointPolicyStatusForObjectLambda$ === "object");
assert(typeof GetAccessPointScopeCommand === "function");
assert(typeof GetAccessPointScope$ === "object");
assert(typeof GetBucketCommand === "function");
assert(typeof GetBucket$ === "object");
assert(typeof GetBucketLifecycleConfigurationCommand === "function");
assert(typeof GetBucketLifecycleConfiguration$ === "object");
assert(typeof GetBucketPolicyCommand === "function");
assert(typeof GetBucketPolicy$ === "object");
assert(typeof GetBucketReplicationCommand === "function");
assert(typeof GetBucketReplication$ === "object");
assert(typeof GetBucketTaggingCommand === "function");
assert(typeof GetBucketTagging$ === "object");
assert(typeof GetBucketVersioningCommand === "function");
assert(typeof GetBucketVersioning$ === "object");
assert(typeof GetDataAccessCommand === "function");
assert(typeof GetDataAccess$ === "object");
assert(typeof GetJobTaggingCommand === "function");
assert(typeof GetJobTagging$ === "object");
assert(typeof GetMultiRegionAccessPointCommand === "function");
assert(typeof GetMultiRegionAccessPoint$ === "object");
assert(typeof GetMultiRegionAccessPointPolicyCommand === "function");
assert(typeof GetMultiRegionAccessPointPolicy$ === "object");
assert(typeof GetMultiRegionAccessPointPolicyStatusCommand === "function");
assert(typeof GetMultiRegionAccessPointPolicyStatus$ === "object");
assert(typeof GetMultiRegionAccessPointRoutesCommand === "function");
assert(typeof GetMultiRegionAccessPointRoutes$ === "object");
assert(typeof GetPublicAccessBlockCommand === "function");
assert(typeof GetPublicAccessBlock$ === "object");
assert(typeof GetStorageLensConfigurationCommand === "function");
assert(typeof GetStorageLensConfiguration$ === "object");
assert(typeof GetStorageLensConfigurationTaggingCommand === "function");
assert(typeof GetStorageLensConfigurationTagging$ === "object");
assert(typeof GetStorageLensGroupCommand === "function");
assert(typeof GetStorageLensGroup$ === "object");
assert(typeof ListAccessGrantsCommand === "function");
assert(typeof ListAccessGrants$ === "object");
assert(typeof ListAccessGrantsInstancesCommand === "function");
assert(typeof ListAccessGrantsInstances$ === "object");
assert(typeof ListAccessGrantsLocationsCommand === "function");
assert(typeof ListAccessGrantsLocations$ === "object");
assert(typeof ListAccessPointsCommand === "function");
assert(typeof ListAccessPoints$ === "object");
assert(typeof ListAccessPointsForDirectoryBucketsCommand === "function");
assert(typeof ListAccessPointsForDirectoryBuckets$ === "object");
assert(typeof ListAccessPointsForObjectLambdaCommand === "function");
assert(typeof ListAccessPointsForObjectLambda$ === "object");
assert(typeof ListCallerAccessGrantsCommand === "function");
assert(typeof ListCallerAccessGrants$ === "object");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobs$ === "object");
assert(typeof ListMultiRegionAccessPointsCommand === "function");
assert(typeof ListMultiRegionAccessPoints$ === "object");
assert(typeof ListRegionalBucketsCommand === "function");
assert(typeof ListRegionalBuckets$ === "object");
assert(typeof ListStorageLensConfigurationsCommand === "function");
assert(typeof ListStorageLensConfigurations$ === "object");
assert(typeof ListStorageLensGroupsCommand === "function");
assert(typeof ListStorageLensGroups$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutAccessGrantsInstanceResourcePolicyCommand === "function");
assert(typeof PutAccessGrantsInstanceResourcePolicy$ === "object");
assert(typeof PutAccessPointConfigurationForObjectLambdaCommand === "function");
assert(typeof PutAccessPointConfigurationForObjectLambda$ === "object");
assert(typeof PutAccessPointPolicyCommand === "function");
assert(typeof PutAccessPointPolicy$ === "object");
assert(typeof PutAccessPointPolicyForObjectLambdaCommand === "function");
assert(typeof PutAccessPointPolicyForObjectLambda$ === "object");
assert(typeof PutAccessPointScopeCommand === "function");
assert(typeof PutAccessPointScope$ === "object");
assert(typeof PutBucketLifecycleConfigurationCommand === "function");
assert(typeof PutBucketLifecycleConfiguration$ === "object");
assert(typeof PutBucketPolicyCommand === "function");
assert(typeof PutBucketPolicy$ === "object");
assert(typeof PutBucketReplicationCommand === "function");
assert(typeof PutBucketReplication$ === "object");
assert(typeof PutBucketTaggingCommand === "function");
assert(typeof PutBucketTagging$ === "object");
assert(typeof PutBucketVersioningCommand === "function");
assert(typeof PutBucketVersioning$ === "object");
assert(typeof PutJobTaggingCommand === "function");
assert(typeof PutJobTagging$ === "object");
assert(typeof PutMultiRegionAccessPointPolicyCommand === "function");
assert(typeof PutMultiRegionAccessPointPolicy$ === "object");
assert(typeof PutPublicAccessBlockCommand === "function");
assert(typeof PutPublicAccessBlock$ === "object");
assert(typeof PutStorageLensConfigurationCommand === "function");
assert(typeof PutStorageLensConfiguration$ === "object");
assert(typeof PutStorageLensConfigurationTaggingCommand === "function");
assert(typeof PutStorageLensConfigurationTagging$ === "object");
assert(typeof SubmitMultiRegionAccessPointRoutesCommand === "function");
assert(typeof SubmitMultiRegionAccessPointRoutes$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccessGrantsLocationCommand === "function");
assert(typeof UpdateAccessGrantsLocation$ === "object");
assert(typeof UpdateJobPriorityCommand === "function");
assert(typeof UpdateJobPriority$ === "object");
assert(typeof UpdateJobStatusCommand === "function");
assert(typeof UpdateJobStatus$ === "object");
assert(typeof UpdateStorageLensGroupCommand === "function");
assert(typeof UpdateStorageLensGroup$ === "object");
// structural schemas
assert(typeof AbortIncompleteMultipartUpload$ === "object");
assert(typeof AccessControlTranslation$ === "object");
assert(typeof AccessGrantsLocationConfiguration$ === "object");
assert(typeof AccessPoint$ === "object");
assert(typeof AccountLevel$ === "object");
assert(typeof ActivityMetrics$ === "object");
assert(typeof AdvancedCostOptimizationMetrics$ === "object");
assert(typeof AdvancedDataProtectionMetrics$ === "object");
assert(typeof AdvancedPerformanceMetrics$ === "object");
assert(typeof AssociateAccessGrantsIdentityCenterRequest$ === "object");
assert(typeof AsyncErrorDetails$ === "object");
assert(typeof AsyncOperation$ === "object");
assert(typeof AsyncRequestParameters$ === "object");
assert(typeof AsyncResponseDetails$ === "object");
assert(typeof AwsLambdaTransformation$ === "object");
assert(typeof BucketLevel$ === "object");
assert(typeof CloudWatchMetrics$ === "object");
assert(typeof CreateAccessGrantRequest$ === "object");
assert(typeof CreateAccessGrantResult$ === "object");
assert(typeof CreateAccessGrantsInstanceRequest$ === "object");
assert(typeof CreateAccessGrantsInstanceResult$ === "object");
assert(typeof CreateAccessGrantsLocationRequest$ === "object");
assert(typeof CreateAccessGrantsLocationResult$ === "object");
assert(typeof CreateAccessPointForObjectLambdaRequest$ === "object");
assert(typeof CreateAccessPointForObjectLambdaResult$ === "object");
assert(typeof CreateAccessPointRequest$ === "object");
assert(typeof CreateAccessPointResult$ === "object");
assert(typeof CreateBucketConfiguration$ === "object");
assert(typeof CreateBucketRequest$ === "object");
assert(typeof CreateBucketResult$ === "object");
assert(typeof CreateJobRequest$ === "object");
assert(typeof CreateJobResult$ === "object");
assert(typeof CreateMultiRegionAccessPointInput$ === "object");
assert(typeof CreateMultiRegionAccessPointRequest$ === "object");
assert(typeof CreateMultiRegionAccessPointResult$ === "object");
assert(typeof CreateStorageLensGroupRequest$ === "object");
assert(typeof Credentials$ === "object");
assert(typeof DeleteAccessGrantRequest$ === "object");
assert(typeof DeleteAccessGrantsInstanceRequest$ === "object");
assert(typeof DeleteAccessGrantsInstanceResourcePolicyRequest$ === "object");
assert(typeof DeleteAccessGrantsLocationRequest$ === "object");
assert(typeof DeleteAccessPointForObjectLambdaRequest$ === "object");
assert(typeof DeleteAccessPointPolicyForObjectLambdaRequest$ === "object");
assert(typeof DeleteAccessPointPolicyRequest$ === "object");
assert(typeof DeleteAccessPointRequest$ === "object");
assert(typeof DeleteAccessPointScopeRequest$ === "object");
assert(typeof DeleteBucketLifecycleConfigurationRequest$ === "object");
assert(typeof DeleteBucketPolicyRequest$ === "object");
assert(typeof DeleteBucketReplicationRequest$ === "object");
assert(typeof DeleteBucketRequest$ === "object");
assert(typeof DeleteBucketTaggingRequest$ === "object");
assert(typeof DeleteJobTaggingRequest$ === "object");
assert(typeof DeleteJobTaggingResult$ === "object");
assert(typeof DeleteMarkerReplication$ === "object");
assert(typeof DeleteMultiRegionAccessPointInput$ === "object");
assert(typeof DeleteMultiRegionAccessPointRequest$ === "object");
assert(typeof DeleteMultiRegionAccessPointResult$ === "object");
assert(typeof DeletePublicAccessBlockRequest$ === "object");
assert(typeof DeleteStorageLensConfigurationRequest$ === "object");
assert(typeof DeleteStorageLensConfigurationTaggingRequest$ === "object");
assert(typeof DeleteStorageLensConfigurationTaggingResult$ === "object");
assert(typeof DeleteStorageLensGroupRequest$ === "object");
assert(typeof DescribeJobRequest$ === "object");
assert(typeof DescribeJobResult$ === "object");
assert(typeof DescribeMultiRegionAccessPointOperationRequest$ === "object");
assert(typeof DescribeMultiRegionAccessPointOperationResult$ === "object");
assert(typeof Destination$ === "object");
assert(typeof DetailedStatusCodesMetrics$ === "object");
assert(typeof DissociateAccessGrantsIdentityCenterRequest$ === "object");
assert(typeof DSSEKMSFilter$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof EstablishedMultiRegionAccessPointPolicy$ === "object");
assert(typeof _Exclude$ === "object");
assert(typeof ExistingObjectReplication$ === "object");
assert(typeof GeneratedManifestEncryption$ === "object");
assert(typeof GetAccessGrantRequest$ === "object");
assert(typeof GetAccessGrantResult$ === "object");
assert(typeof GetAccessGrantsInstanceForPrefixRequest$ === "object");
assert(typeof GetAccessGrantsInstanceForPrefixResult$ === "object");
assert(typeof GetAccessGrantsInstanceRequest$ === "object");
assert(typeof GetAccessGrantsInstanceResourcePolicyRequest$ === "object");
assert(typeof GetAccessGrantsInstanceResourcePolicyResult$ === "object");
assert(typeof GetAccessGrantsInstanceResult$ === "object");
assert(typeof GetAccessGrantsLocationRequest$ === "object");
assert(typeof GetAccessGrantsLocationResult$ === "object");
assert(typeof GetAccessPointConfigurationForObjectLambdaRequest$ === "object");
assert(typeof GetAccessPointConfigurationForObjectLambdaResult$ === "object");
assert(typeof GetAccessPointForObjectLambdaRequest$ === "object");
assert(typeof GetAccessPointForObjectLambdaResult$ === "object");
assert(typeof GetAccessPointPolicyForObjectLambdaRequest$ === "object");
assert(typeof GetAccessPointPolicyForObjectLambdaResult$ === "object");
assert(typeof GetAccessPointPolicyRequest$ === "object");
assert(typeof GetAccessPointPolicyResult$ === "object");
assert(typeof GetAccessPointPolicyStatusForObjectLambdaRequest$ === "object");
assert(typeof GetAccessPointPolicyStatusForObjectLambdaResult$ === "object");
assert(typeof GetAccessPointPolicyStatusRequest$ === "object");
assert(typeof GetAccessPointPolicyStatusResult$ === "object");
assert(typeof GetAccessPointRequest$ === "object");
assert(typeof GetAccessPointResult$ === "object");
assert(typeof GetAccessPointScopeRequest$ === "object");
assert(typeof GetAccessPointScopeResult$ === "object");
assert(typeof GetBucketLifecycleConfigurationRequest$ === "object");
assert(typeof GetBucketLifecycleConfigurationResult$ === "object");
assert(typeof GetBucketPolicyRequest$ === "object");
assert(typeof GetBucketPolicyResult$ === "object");
assert(typeof GetBucketReplicationRequest$ === "object");
assert(typeof GetBucketReplicationResult$ === "object");
assert(typeof GetBucketRequest$ === "object");
assert(typeof GetBucketResult$ === "object");
assert(typeof GetBucketTaggingRequest$ === "object");
assert(typeof GetBucketTaggingResult$ === "object");
assert(typeof GetBucketVersioningRequest$ === "object");
assert(typeof GetBucketVersioningResult$ === "object");
assert(typeof GetDataAccessRequest$ === "object");
assert(typeof GetDataAccessResult$ === "object");
assert(typeof GetJobTaggingRequest$ === "object");
assert(typeof GetJobTaggingResult$ === "object");
assert(typeof GetMultiRegionAccessPointPolicyRequest$ === "object");
assert(typeof GetMultiRegionAccessPointPolicyResult$ === "object");
assert(typeof GetMultiRegionAccessPointPolicyStatusRequest$ === "object");
assert(typeof GetMultiRegionAccessPointPolicyStatusResult$ === "object");
assert(typeof GetMultiRegionAccessPointRequest$ === "object");
assert(typeof GetMultiRegionAccessPointResult$ === "object");
assert(typeof GetMultiRegionAccessPointRoutesRequest$ === "object");
assert(typeof GetMultiRegionAccessPointRoutesResult$ === "object");
assert(typeof GetPublicAccessBlockOutput$ === "object");
assert(typeof GetPublicAccessBlockRequest$ === "object");
assert(typeof GetStorageLensConfigurationRequest$ === "object");
assert(typeof GetStorageLensConfigurationResult$ === "object");
assert(typeof GetStorageLensConfigurationTaggingRequest$ === "object");
assert(typeof GetStorageLensConfigurationTaggingResult$ === "object");
assert(typeof GetStorageLensGroupRequest$ === "object");
assert(typeof GetStorageLensGroupResult$ === "object");
assert(typeof Grantee$ === "object");
assert(typeof Include$ === "object");
assert(typeof JobDescriptor$ === "object");
assert(typeof JobFailure$ === "object");
assert(typeof JobListDescriptor$ === "object");
assert(typeof JobManifest$ === "object");
assert(typeof JobManifestGenerator$ === "object");
assert(typeof JobManifestGeneratorFilter$ === "object");
assert(typeof JobManifestLocation$ === "object");
assert(typeof JobManifestSpec$ === "object");
assert(typeof JobOperation$ === "object");
assert(typeof JobProgressSummary$ === "object");
assert(typeof JobReport$ === "object");
assert(typeof JobTimers$ === "object");
assert(typeof KeyNameConstraint$ === "object");
assert(typeof LambdaInvokeOperation$ === "object");
assert(typeof LifecycleConfiguration$ === "object");
assert(typeof LifecycleExpiration$ === "object");
assert(typeof LifecycleRule$ === "object");
assert(typeof LifecycleRuleAndOperator$ === "object");
assert(typeof LifecycleRuleFilter$ === "object");
assert(typeof ListAccessGrantEntry$ === "object");
assert(typeof ListAccessGrantsInstanceEntry$ === "object");
assert(typeof ListAccessGrantsInstancesRequest$ === "object");
assert(typeof ListAccessGrantsInstancesResult$ === "object");
assert(typeof ListAccessGrantsLocationsEntry$ === "object");
assert(typeof ListAccessGrantsLocationsRequest$ === "object");
assert(typeof ListAccessGrantsLocationsResult$ === "object");
assert(typeof ListAccessGrantsRequest$ === "object");
assert(typeof ListAccessGrantsResult$ === "object");
assert(typeof ListAccessPointsForDirectoryBucketsRequest$ === "object");
assert(typeof ListAccessPointsForDirectoryBucketsResult$ === "object");
assert(typeof ListAccessPointsForObjectLambdaRequest$ === "object");
assert(typeof ListAccessPointsForObjectLambdaResult$ === "object");
assert(typeof ListAccessPointsRequest$ === "object");
assert(typeof ListAccessPointsResult$ === "object");
assert(typeof ListCallerAccessGrantsEntry$ === "object");
assert(typeof ListCallerAccessGrantsRequest$ === "object");
assert(typeof ListCallerAccessGrantsResult$ === "object");
assert(typeof ListJobsRequest$ === "object");
assert(typeof ListJobsResult$ === "object");
assert(typeof ListMultiRegionAccessPointsRequest$ === "object");
assert(typeof ListMultiRegionAccessPointsResult$ === "object");
assert(typeof ListRegionalBucketsRequest$ === "object");
assert(typeof ListRegionalBucketsResult$ === "object");
assert(typeof ListStorageLensConfigurationEntry$ === "object");
assert(typeof ListStorageLensConfigurationsRequest$ === "object");
assert(typeof ListStorageLensConfigurationsResult$ === "object");
assert(typeof ListStorageLensGroupEntry$ === "object");
assert(typeof ListStorageLensGroupsRequest$ === "object");
assert(typeof ListStorageLensGroupsResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResult$ === "object");
assert(typeof MatchObjectAge$ === "object");
assert(typeof MatchObjectSize$ === "object");
assert(typeof Metrics$ === "object");
assert(typeof MultiRegionAccessPointPolicyDocument$ === "object");
assert(typeof MultiRegionAccessPointRegionalResponse$ === "object");
assert(typeof MultiRegionAccessPointReport$ === "object");
assert(typeof MultiRegionAccessPointRoute$ === "object");
assert(typeof MultiRegionAccessPointsAsyncResponse$ === "object");
assert(typeof NoncurrentVersionExpiration$ === "object");
assert(typeof NoncurrentVersionTransition$ === "object");
assert(typeof NotSSEFilter$ === "object");
assert(typeof ObjectEncryptionFilter$ === "object");
assert(typeof ObjectLambdaAccessPoint$ === "object");
assert(typeof ObjectLambdaAccessPointAlias$ === "object");
assert(typeof ObjectLambdaConfiguration$ === "object");
assert(typeof ObjectLambdaContentTransformation$ === "object");
assert(typeof ObjectLambdaTransformationConfiguration$ === "object");
assert(typeof PolicyStatus$ === "object");
assert(typeof PrefixLevel$ === "object");
assert(typeof PrefixLevelStorageMetrics$ === "object");
assert(typeof ProposedMultiRegionAccessPointPolicy$ === "object");
assert(typeof PublicAccessBlockConfiguration$ === "object");
assert(typeof PutAccessGrantsInstanceResourcePolicyRequest$ === "object");
assert(typeof PutAccessGrantsInstanceResourcePolicyResult$ === "object");
assert(typeof PutAccessPointConfigurationForObjectLambdaRequest$ === "object");
assert(typeof PutAccessPointPolicyForObjectLambdaRequest$ === "object");
assert(typeof PutAccessPointPolicyRequest$ === "object");
assert(typeof PutAccessPointScopeRequest$ === "object");
assert(typeof PutBucketLifecycleConfigurationRequest$ === "object");
assert(typeof PutBucketPolicyRequest$ === "object");
assert(typeof PutBucketReplicationRequest$ === "object");
assert(typeof PutBucketTaggingRequest$ === "object");
assert(typeof PutBucketVersioningRequest$ === "object");
assert(typeof PutJobTaggingRequest$ === "object");
assert(typeof PutJobTaggingResult$ === "object");
assert(typeof PutMultiRegionAccessPointPolicyInput$ === "object");
assert(typeof PutMultiRegionAccessPointPolicyRequest$ === "object");
assert(typeof PutMultiRegionAccessPointPolicyResult$ === "object");
assert(typeof PutPublicAccessBlockRequest$ === "object");
assert(typeof PutStorageLensConfigurationRequest$ === "object");
assert(typeof PutStorageLensConfigurationTaggingRequest$ === "object");
assert(typeof PutStorageLensConfigurationTaggingResult$ === "object");
assert(typeof Region$ === "object");
assert(typeof RegionalBucket$ === "object");
assert(typeof RegionReport$ === "object");
assert(typeof ReplicaModifications$ === "object");
assert(typeof ReplicationConfiguration$ === "object");
assert(typeof ReplicationRule$ === "object");
assert(typeof ReplicationRuleAndOperator$ === "object");
assert(typeof ReplicationRuleFilter$ === "object");
assert(typeof ReplicationTime$ === "object");
assert(typeof ReplicationTimeValue$ === "object");
assert(typeof S3AccessControlList$ === "object");
assert(typeof S3AccessControlPolicy$ === "object");
assert(typeof S3BucketDestination$ === "object");
assert(typeof S3ComputeObjectChecksumOperation$ === "object");
assert(typeof S3CopyObjectOperation$ === "object");
assert(typeof S3DeleteObjectTaggingOperation$ === "object");
assert(typeof S3GeneratedManifestDescriptor$ === "object");
assert(typeof S3Grant$ === "object");
assert(typeof S3Grantee$ === "object");
assert(typeof S3InitiateRestoreObjectOperation$ === "object");
assert(typeof S3JobManifestGenerator$ === "object");
assert(typeof S3ManifestOutputLocation$ === "object");
assert(typeof S3ObjectLockLegalHold$ === "object");
assert(typeof S3ObjectMetadata$ === "object");
assert(typeof S3ObjectOwner$ === "object");
assert(typeof S3ReplicateObjectOperation$ === "object");
assert(typeof S3Retention$ === "object");
assert(typeof S3SetObjectAclOperation$ === "object");
assert(typeof S3SetObjectLegalHoldOperation$ === "object");
assert(typeof S3SetObjectRetentionOperation$ === "object");
assert(typeof S3SetObjectTaggingOperation$ === "object");
assert(typeof S3Tag$ === "object");
assert(typeof Scope$ === "object");
assert(typeof SelectionCriteria$ === "object");
assert(typeof SourceSelectionCriteria$ === "object");
assert(typeof SSECFilter$ === "object");
assert(typeof SSEKMS$ === "object");
assert(typeof SseKmsEncryptedObjects$ === "object");
assert(typeof SSEKMSEncryption$ === "object");
assert(typeof SSEKMSFilter$ === "object");
assert(typeof SSES3$ === "object");
assert(typeof SSES3Encryption$ === "object");
assert(typeof SSES3Filter$ === "object");
assert(typeof StorageLensAwsOrg$ === "object");
assert(typeof StorageLensConfiguration$ === "object");
assert(typeof StorageLensDataExport$ === "object");
assert(typeof StorageLensDataExportEncryption$ === "object");
assert(typeof StorageLensExpandedPrefixesDataExport$ === "object");
assert(typeof StorageLensGroup$ === "object");
assert(typeof StorageLensGroupAndOperator$ === "object");
assert(typeof StorageLensGroupFilter$ === "object");
assert(typeof StorageLensGroupLevel$ === "object");
assert(typeof StorageLensGroupLevelSelectionCriteria$ === "object");
assert(typeof StorageLensGroupOrOperator$ === "object");
assert(typeof StorageLensTableDestination$ === "object");
assert(typeof StorageLensTag$ === "object");
assert(typeof SubmitMultiRegionAccessPointRoutesRequest$ === "object");
assert(typeof SubmitMultiRegionAccessPointRoutesResult$ === "object");
assert(typeof Tag$ === "object");
assert(typeof Tagging$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResult$ === "object");
assert(typeof Transition$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResult$ === "object");
assert(typeof UpdateAccessGrantsLocationRequest$ === "object");
assert(typeof UpdateAccessGrantsLocationResult$ === "object");
assert(typeof UpdateJobPriorityRequest$ === "object");
assert(typeof UpdateJobPriorityResult$ === "object");
assert(typeof UpdateJobStatusRequest$ === "object");
assert(typeof UpdateJobStatusResult$ === "object");
assert(typeof UpdateStorageLensGroupRequest$ === "object");
assert(typeof VersioningConfiguration$ === "object");
assert(typeof VpcConfiguration$ === "object");
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
assert(typeof BadRequestException$ === "object");
assert(BucketAlreadyExists.prototype instanceof S3ControlServiceException);
assert(typeof BucketAlreadyExists$ === "object");
assert(BucketAlreadyOwnedByYou.prototype instanceof S3ControlServiceException);
assert(typeof BucketAlreadyOwnedByYou$ === "object");
assert(IdempotencyException.prototype instanceof S3ControlServiceException);
assert(typeof IdempotencyException$ === "object");
assert(InternalServiceException.prototype instanceof S3ControlServiceException);
assert(typeof InternalServiceException$ === "object");
assert(InvalidNextTokenException.prototype instanceof S3ControlServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidRequestException.prototype instanceof S3ControlServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(JobStatusException.prototype instanceof S3ControlServiceException);
assert(typeof JobStatusException$ === "object");
assert(NoSuchPublicAccessBlockConfiguration.prototype instanceof S3ControlServiceException);
assert(typeof NoSuchPublicAccessBlockConfiguration$ === "object");
assert(NotFoundException.prototype instanceof S3ControlServiceException);
assert(typeof NotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof S3ControlServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(TooManyTagsException.prototype instanceof S3ControlServiceException);
assert(typeof TooManyTagsException$ === "object");
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
