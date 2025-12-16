import {
  AccessPointAlreadyExists,
  AccessPointAlreadyExists$,
  AccessPointDescription$,
  AccessPointLimitExceeded,
  AccessPointLimitExceeded$,
  AccessPointNotFound,
  AccessPointNotFound$,
  AvailabilityZonesMismatch,
  AvailabilityZonesMismatch$,
  BackupPolicy$,
  BackupPolicyDescription$,
  BadRequest,
  BadRequest$,
  ConflictException,
  ConflictException$,
  CreateAccessPoint$,
  CreateAccessPointCommand,
  CreateAccessPointRequest$,
  CreateFileSystem$,
  CreateFileSystemCommand,
  CreateFileSystemRequest$,
  CreateMountTarget$,
  CreateMountTargetCommand,
  CreateMountTargetRequest$,
  CreateReplicationConfiguration$,
  CreateReplicationConfigurationCommand,
  CreateReplicationConfigurationRequest$,
  CreateTags$,
  CreateTagsCommand,
  CreateTagsRequest$,
  CreationInfo$,
  DeleteAccessPoint$,
  DeleteAccessPointCommand,
  DeleteAccessPointRequest$,
  DeleteFileSystem$,
  DeleteFileSystemCommand,
  DeleteFileSystemPolicy$,
  DeleteFileSystemPolicyCommand,
  DeleteFileSystemPolicyRequest$,
  DeleteFileSystemRequest$,
  DeleteMountTarget$,
  DeleteMountTargetCommand,
  DeleteMountTargetRequest$,
  DeleteReplicationConfiguration$,
  DeleteReplicationConfigurationCommand,
  DeleteReplicationConfigurationRequest$,
  DeleteTags$,
  DeleteTagsCommand,
  DeleteTagsRequest$,
  DeletionMode,
  DependencyTimeout,
  DependencyTimeout$,
  DescribeAccessPoints$,
  DescribeAccessPointsCommand,
  DescribeAccessPointsRequest$,
  DescribeAccessPointsResponse$,
  DescribeAccountPreferences$,
  DescribeAccountPreferencesCommand,
  DescribeAccountPreferencesRequest$,
  DescribeAccountPreferencesResponse$,
  DescribeBackupPolicy$,
  DescribeBackupPolicyCommand,
  DescribeBackupPolicyRequest$,
  DescribeFileSystemPolicy$,
  DescribeFileSystemPolicyCommand,
  DescribeFileSystemPolicyRequest$,
  DescribeFileSystems$,
  DescribeFileSystemsCommand,
  DescribeFileSystemsRequest$,
  DescribeFileSystemsResponse$,
  DescribeLifecycleConfiguration$,
  DescribeLifecycleConfigurationCommand,
  DescribeLifecycleConfigurationRequest$,
  DescribeMountTargetSecurityGroups$,
  DescribeMountTargetSecurityGroupsCommand,
  DescribeMountTargetSecurityGroupsRequest$,
  DescribeMountTargetSecurityGroupsResponse$,
  DescribeMountTargets$,
  DescribeMountTargetsCommand,
  DescribeMountTargetsRequest$,
  DescribeMountTargetsResponse$,
  DescribeReplicationConfigurations$,
  DescribeReplicationConfigurationsCommand,
  DescribeReplicationConfigurationsRequest$,
  DescribeReplicationConfigurationsResponse$,
  DescribeTags$,
  DescribeTagsCommand,
  DescribeTagsRequest$,
  DescribeTagsResponse$,
  Destination$,
  DestinationToCreate$,
  EFS,
  EFSClient,
  EFSServiceException,
  FileSystemAlreadyExists,
  FileSystemAlreadyExists$,
  FileSystemDescription$,
  FileSystemInUse,
  FileSystemInUse$,
  FileSystemLimitExceeded,
  FileSystemLimitExceeded$,
  FileSystemNotFound,
  FileSystemNotFound$,
  FileSystemPolicyDescription$,
  FileSystemProtectionDescription$,
  FileSystemSize$,
  IncorrectFileSystemLifeCycleState,
  IncorrectFileSystemLifeCycleState$,
  IncorrectMountTargetState,
  IncorrectMountTargetState$,
  InsufficientThroughputCapacity,
  InsufficientThroughputCapacity$,
  InternalServerError,
  InternalServerError$,
  InvalidPolicyException,
  InvalidPolicyException$,
  IpAddressInUse,
  IpAddressInUse$,
  IpAddressType,
  LifeCycleState,
  LifecycleConfigurationDescription$,
  LifecyclePolicy$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ModifyMountTargetSecurityGroups$,
  ModifyMountTargetSecurityGroupsCommand,
  ModifyMountTargetSecurityGroupsRequest$,
  MountTargetConflict,
  MountTargetConflict$,
  MountTargetDescription$,
  MountTargetNotFound,
  MountTargetNotFound$,
  NetworkInterfaceLimitExceeded,
  NetworkInterfaceLimitExceeded$,
  NoFreeAddressesInSubnet,
  NoFreeAddressesInSubnet$,
  PerformanceMode,
  PolicyNotFound,
  PolicyNotFound$,
  PosixUser$,
  PutAccountPreferences$,
  PutAccountPreferencesCommand,
  PutAccountPreferencesRequest$,
  PutAccountPreferencesResponse$,
  PutBackupPolicy$,
  PutBackupPolicyCommand,
  PutBackupPolicyRequest$,
  PutFileSystemPolicy$,
  PutFileSystemPolicyCommand,
  PutFileSystemPolicyRequest$,
  PutLifecycleConfiguration$,
  PutLifecycleConfigurationCommand,
  PutLifecycleConfigurationRequest$,
  ReplicationAlreadyExists,
  ReplicationAlreadyExists$,
  ReplicationConfigurationDescription$,
  ReplicationNotFound,
  ReplicationNotFound$,
  ReplicationOverwriteProtection,
  ReplicationStatus,
  Resource,
  ResourceIdPreference$,
  ResourceIdType,
  RootDirectory$,
  SecurityGroupLimitExceeded,
  SecurityGroupLimitExceeded$,
  SecurityGroupNotFound,
  SecurityGroupNotFound$,
  Status,
  SubnetNotFound,
  SubnetNotFound$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  ThrottlingException,
  ThrottlingException$,
  ThroughputLimitExceeded,
  ThroughputLimitExceeded$,
  ThroughputMode,
  TooManyRequests,
  TooManyRequests$,
  TransitionToArchiveRules,
  TransitionToIARules,
  TransitionToPrimaryStorageClassRules,
  UnsupportedAvailabilityZone,
  UnsupportedAvailabilityZone$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateFileSystem$,
  UpdateFileSystemCommand,
  UpdateFileSystemProtection$,
  UpdateFileSystemProtectionCommand,
  UpdateFileSystemProtectionRequest$,
  UpdateFileSystemRequest$,
  ValidationException,
  ValidationException$,
  paginateDescribeAccessPoints,
  paginateDescribeFileSystems,
  paginateDescribeMountTargets,
  paginateDescribeReplicationConfigurations,
  paginateDescribeTags,
  paginateListTagsForResource,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EFSClient === "function");
assert(typeof EFS === "function");
// commands
assert(typeof CreateAccessPointCommand === "function");
assert(typeof CreateAccessPoint$ === "object");
assert(typeof CreateFileSystemCommand === "function");
assert(typeof CreateFileSystem$ === "object");
assert(typeof CreateMountTargetCommand === "function");
assert(typeof CreateMountTarget$ === "object");
assert(typeof CreateReplicationConfigurationCommand === "function");
assert(typeof CreateReplicationConfiguration$ === "object");
assert(typeof CreateTagsCommand === "function");
assert(typeof CreateTags$ === "object");
assert(typeof DeleteAccessPointCommand === "function");
assert(typeof DeleteAccessPoint$ === "object");
assert(typeof DeleteFileSystemCommand === "function");
assert(typeof DeleteFileSystem$ === "object");
assert(typeof DeleteFileSystemPolicyCommand === "function");
assert(typeof DeleteFileSystemPolicy$ === "object");
assert(typeof DeleteMountTargetCommand === "function");
assert(typeof DeleteMountTarget$ === "object");
assert(typeof DeleteReplicationConfigurationCommand === "function");
assert(typeof DeleteReplicationConfiguration$ === "object");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteTags$ === "object");
assert(typeof DescribeAccessPointsCommand === "function");
assert(typeof DescribeAccessPoints$ === "object");
assert(typeof DescribeAccountPreferencesCommand === "function");
assert(typeof DescribeAccountPreferences$ === "object");
assert(typeof DescribeBackupPolicyCommand === "function");
assert(typeof DescribeBackupPolicy$ === "object");
assert(typeof DescribeFileSystemPolicyCommand === "function");
assert(typeof DescribeFileSystemPolicy$ === "object");
assert(typeof DescribeFileSystemsCommand === "function");
assert(typeof DescribeFileSystems$ === "object");
assert(typeof DescribeLifecycleConfigurationCommand === "function");
assert(typeof DescribeLifecycleConfiguration$ === "object");
assert(typeof DescribeMountTargetsCommand === "function");
assert(typeof DescribeMountTargets$ === "object");
assert(typeof DescribeMountTargetSecurityGroupsCommand === "function");
assert(typeof DescribeMountTargetSecurityGroups$ === "object");
assert(typeof DescribeReplicationConfigurationsCommand === "function");
assert(typeof DescribeReplicationConfigurations$ === "object");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTags$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ModifyMountTargetSecurityGroupsCommand === "function");
assert(typeof ModifyMountTargetSecurityGroups$ === "object");
assert(typeof PutAccountPreferencesCommand === "function");
assert(typeof PutAccountPreferences$ === "object");
assert(typeof PutBackupPolicyCommand === "function");
assert(typeof PutBackupPolicy$ === "object");
assert(typeof PutFileSystemPolicyCommand === "function");
assert(typeof PutFileSystemPolicy$ === "object");
assert(typeof PutLifecycleConfigurationCommand === "function");
assert(typeof PutLifecycleConfiguration$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateFileSystemCommand === "function");
assert(typeof UpdateFileSystem$ === "object");
assert(typeof UpdateFileSystemProtectionCommand === "function");
assert(typeof UpdateFileSystemProtection$ === "object");
// structural schemas
assert(typeof AccessPointDescription$ === "object");
assert(typeof BackupPolicy$ === "object");
assert(typeof BackupPolicyDescription$ === "object");
assert(typeof CreateAccessPointRequest$ === "object");
assert(typeof CreateFileSystemRequest$ === "object");
assert(typeof CreateMountTargetRequest$ === "object");
assert(typeof CreateReplicationConfigurationRequest$ === "object");
assert(typeof CreateTagsRequest$ === "object");
assert(typeof CreationInfo$ === "object");
assert(typeof DeleteAccessPointRequest$ === "object");
assert(typeof DeleteFileSystemPolicyRequest$ === "object");
assert(typeof DeleteFileSystemRequest$ === "object");
assert(typeof DeleteMountTargetRequest$ === "object");
assert(typeof DeleteReplicationConfigurationRequest$ === "object");
assert(typeof DeleteTagsRequest$ === "object");
assert(typeof DescribeAccessPointsRequest$ === "object");
assert(typeof DescribeAccessPointsResponse$ === "object");
assert(typeof DescribeAccountPreferencesRequest$ === "object");
assert(typeof DescribeAccountPreferencesResponse$ === "object");
assert(typeof DescribeBackupPolicyRequest$ === "object");
assert(typeof DescribeFileSystemPolicyRequest$ === "object");
assert(typeof DescribeFileSystemsRequest$ === "object");
assert(typeof DescribeFileSystemsResponse$ === "object");
assert(typeof DescribeLifecycleConfigurationRequest$ === "object");
assert(typeof DescribeMountTargetSecurityGroupsRequest$ === "object");
assert(typeof DescribeMountTargetSecurityGroupsResponse$ === "object");
assert(typeof DescribeMountTargetsRequest$ === "object");
assert(typeof DescribeMountTargetsResponse$ === "object");
assert(typeof DescribeReplicationConfigurationsRequest$ === "object");
assert(typeof DescribeReplicationConfigurationsResponse$ === "object");
assert(typeof DescribeTagsRequest$ === "object");
assert(typeof DescribeTagsResponse$ === "object");
assert(typeof Destination$ === "object");
assert(typeof DestinationToCreate$ === "object");
assert(typeof FileSystemDescription$ === "object");
assert(typeof FileSystemPolicyDescription$ === "object");
assert(typeof FileSystemProtectionDescription$ === "object");
assert(typeof FileSystemSize$ === "object");
assert(typeof LifecycleConfigurationDescription$ === "object");
assert(typeof LifecyclePolicy$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ModifyMountTargetSecurityGroupsRequest$ === "object");
assert(typeof MountTargetDescription$ === "object");
assert(typeof PosixUser$ === "object");
assert(typeof PutAccountPreferencesRequest$ === "object");
assert(typeof PutAccountPreferencesResponse$ === "object");
assert(typeof PutBackupPolicyRequest$ === "object");
assert(typeof PutFileSystemPolicyRequest$ === "object");
assert(typeof PutLifecycleConfigurationRequest$ === "object");
assert(typeof ReplicationConfigurationDescription$ === "object");
assert(typeof ResourceIdPreference$ === "object");
assert(typeof RootDirectory$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateFileSystemProtectionRequest$ === "object");
assert(typeof UpdateFileSystemRequest$ === "object");
// enums
assert(typeof DeletionMode === "object");
assert(typeof IpAddressType === "object");
assert(typeof LifeCycleState === "object");
assert(typeof PerformanceMode === "object");
assert(typeof ReplicationOverwriteProtection === "object");
assert(typeof ReplicationStatus === "object");
assert(typeof Resource === "object");
assert(typeof ResourceIdType === "object");
assert(typeof Status === "object");
assert(typeof ThroughputMode === "object");
assert(typeof TransitionToArchiveRules === "object");
assert(typeof TransitionToIARules === "object");
assert(typeof TransitionToPrimaryStorageClassRules === "object");
// errors
assert(AccessPointAlreadyExists.prototype instanceof EFSServiceException);
assert(typeof AccessPointAlreadyExists$ === "object");
assert(AccessPointLimitExceeded.prototype instanceof EFSServiceException);
assert(typeof AccessPointLimitExceeded$ === "object");
assert(AccessPointNotFound.prototype instanceof EFSServiceException);
assert(typeof AccessPointNotFound$ === "object");
assert(AvailabilityZonesMismatch.prototype instanceof EFSServiceException);
assert(typeof AvailabilityZonesMismatch$ === "object");
assert(BadRequest.prototype instanceof EFSServiceException);
assert(typeof BadRequest$ === "object");
assert(ConflictException.prototype instanceof EFSServiceException);
assert(typeof ConflictException$ === "object");
assert(DependencyTimeout.prototype instanceof EFSServiceException);
assert(typeof DependencyTimeout$ === "object");
assert(FileSystemAlreadyExists.prototype instanceof EFSServiceException);
assert(typeof FileSystemAlreadyExists$ === "object");
assert(FileSystemInUse.prototype instanceof EFSServiceException);
assert(typeof FileSystemInUse$ === "object");
assert(FileSystemLimitExceeded.prototype instanceof EFSServiceException);
assert(typeof FileSystemLimitExceeded$ === "object");
assert(FileSystemNotFound.prototype instanceof EFSServiceException);
assert(typeof FileSystemNotFound$ === "object");
assert(IncorrectFileSystemLifeCycleState.prototype instanceof EFSServiceException);
assert(typeof IncorrectFileSystemLifeCycleState$ === "object");
assert(IncorrectMountTargetState.prototype instanceof EFSServiceException);
assert(typeof IncorrectMountTargetState$ === "object");
assert(InsufficientThroughputCapacity.prototype instanceof EFSServiceException);
assert(typeof InsufficientThroughputCapacity$ === "object");
assert(InternalServerError.prototype instanceof EFSServiceException);
assert(typeof InternalServerError$ === "object");
assert(InvalidPolicyException.prototype instanceof EFSServiceException);
assert(typeof InvalidPolicyException$ === "object");
assert(IpAddressInUse.prototype instanceof EFSServiceException);
assert(typeof IpAddressInUse$ === "object");
assert(MountTargetConflict.prototype instanceof EFSServiceException);
assert(typeof MountTargetConflict$ === "object");
assert(MountTargetNotFound.prototype instanceof EFSServiceException);
assert(typeof MountTargetNotFound$ === "object");
assert(NetworkInterfaceLimitExceeded.prototype instanceof EFSServiceException);
assert(typeof NetworkInterfaceLimitExceeded$ === "object");
assert(NoFreeAddressesInSubnet.prototype instanceof EFSServiceException);
assert(typeof NoFreeAddressesInSubnet$ === "object");
assert(PolicyNotFound.prototype instanceof EFSServiceException);
assert(typeof PolicyNotFound$ === "object");
assert(ReplicationAlreadyExists.prototype instanceof EFSServiceException);
assert(typeof ReplicationAlreadyExists$ === "object");
assert(ReplicationNotFound.prototype instanceof EFSServiceException);
assert(typeof ReplicationNotFound$ === "object");
assert(SecurityGroupLimitExceeded.prototype instanceof EFSServiceException);
assert(typeof SecurityGroupLimitExceeded$ === "object");
assert(SecurityGroupNotFound.prototype instanceof EFSServiceException);
assert(typeof SecurityGroupNotFound$ === "object");
assert(SubnetNotFound.prototype instanceof EFSServiceException);
assert(typeof SubnetNotFound$ === "object");
assert(ThrottlingException.prototype instanceof EFSServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ThroughputLimitExceeded.prototype instanceof EFSServiceException);
assert(typeof ThroughputLimitExceeded$ === "object");
assert(TooManyRequests.prototype instanceof EFSServiceException);
assert(typeof TooManyRequests$ === "object");
assert(UnsupportedAvailabilityZone.prototype instanceof EFSServiceException);
assert(typeof UnsupportedAvailabilityZone$ === "object");
assert(ValidationException.prototype instanceof EFSServiceException);
assert(typeof ValidationException$ === "object");
assert(EFSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeAccessPoints === "function");
assert(typeof paginateDescribeFileSystems === "function");
assert(typeof paginateDescribeMountTargets === "function");
assert(typeof paginateDescribeReplicationConfigurations === "function");
assert(typeof paginateDescribeTags === "function");
assert(typeof paginateListTagsForResource === "function");
console.log(`EFS index test passed.`);
