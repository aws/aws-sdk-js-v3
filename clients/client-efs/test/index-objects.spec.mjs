import {
  AccessPointAlreadyExists,
  AccessPointLimitExceeded,
  AccessPointNotFound,
  AvailabilityZonesMismatch,
  BadRequest,
  ConflictException,
  CreateAccessPointCommand,
  CreateFileSystemCommand,
  CreateMountTargetCommand,
  CreateReplicationConfigurationCommand,
  CreateTagsCommand,
  DeleteAccessPointCommand,
  DeleteFileSystemCommand,
  DeleteFileSystemPolicyCommand,
  DeleteMountTargetCommand,
  DeleteReplicationConfigurationCommand,
  DeleteTagsCommand,
  DeletionMode,
  DependencyTimeout,
  DescribeAccessPointsCommand,
  DescribeAccountPreferencesCommand,
  DescribeBackupPolicyCommand,
  DescribeFileSystemPolicyCommand,
  DescribeFileSystemsCommand,
  DescribeLifecycleConfigurationCommand,
  DescribeMountTargetSecurityGroupsCommand,
  DescribeMountTargetsCommand,
  DescribeReplicationConfigurationsCommand,
  DescribeTagsCommand,
  EFS,
  EFSClient,
  EFSServiceException,
  FileSystemAlreadyExists,
  FileSystemInUse,
  FileSystemLimitExceeded,
  FileSystemNotFound,
  IncorrectFileSystemLifeCycleState,
  IncorrectMountTargetState,
  InsufficientThroughputCapacity,
  InternalServerError,
  InvalidPolicyException,
  IpAddressInUse,
  IpAddressType,
  LifeCycleState,
  ListTagsForResourceCommand,
  ModifyMountTargetSecurityGroupsCommand,
  MountTargetConflict,
  MountTargetNotFound,
  NetworkInterfaceLimitExceeded,
  NoFreeAddressesInSubnet,
  PerformanceMode,
  PolicyNotFound,
  PutAccountPreferencesCommand,
  PutBackupPolicyCommand,
  PutFileSystemPolicyCommand,
  PutLifecycleConfigurationCommand,
  ReplicationAlreadyExists,
  ReplicationNotFound,
  ReplicationOverwriteProtection,
  ReplicationStatus,
  Resource,
  ResourceIdType,
  SecurityGroupLimitExceeded,
  SecurityGroupNotFound,
  Status,
  SubnetNotFound,
  TagResourceCommand,
  ThrottlingException,
  ThroughputLimitExceeded,
  ThroughputMode,
  TooManyRequests,
  TransitionToArchiveRules,
  TransitionToIARules,
  TransitionToPrimaryStorageClassRules,
  UnsupportedAvailabilityZone,
  UntagResourceCommand,
  UpdateFileSystemCommand,
  UpdateFileSystemProtectionCommand,
  ValidationException,
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
assert(typeof CreateFileSystemCommand === "function");
assert(typeof CreateMountTargetCommand === "function");
assert(typeof CreateReplicationConfigurationCommand === "function");
assert(typeof CreateTagsCommand === "function");
assert(typeof DeleteAccessPointCommand === "function");
assert(typeof DeleteFileSystemCommand === "function");
assert(typeof DeleteFileSystemPolicyCommand === "function");
assert(typeof DeleteMountTargetCommand === "function");
assert(typeof DeleteReplicationConfigurationCommand === "function");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DescribeAccessPointsCommand === "function");
assert(typeof DescribeAccountPreferencesCommand === "function");
assert(typeof DescribeBackupPolicyCommand === "function");
assert(typeof DescribeFileSystemPolicyCommand === "function");
assert(typeof DescribeFileSystemsCommand === "function");
assert(typeof DescribeLifecycleConfigurationCommand === "function");
assert(typeof DescribeMountTargetsCommand === "function");
assert(typeof DescribeMountTargetSecurityGroupsCommand === "function");
assert(typeof DescribeReplicationConfigurationsCommand === "function");
assert(typeof DescribeTagsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ModifyMountTargetSecurityGroupsCommand === "function");
assert(typeof PutAccountPreferencesCommand === "function");
assert(typeof PutBackupPolicyCommand === "function");
assert(typeof PutFileSystemPolicyCommand === "function");
assert(typeof PutLifecycleConfigurationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateFileSystemCommand === "function");
assert(typeof UpdateFileSystemProtectionCommand === "function");
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
assert(AccessPointLimitExceeded.prototype instanceof EFSServiceException);
assert(AccessPointNotFound.prototype instanceof EFSServiceException);
assert(AvailabilityZonesMismatch.prototype instanceof EFSServiceException);
assert(BadRequest.prototype instanceof EFSServiceException);
assert(ConflictException.prototype instanceof EFSServiceException);
assert(DependencyTimeout.prototype instanceof EFSServiceException);
assert(FileSystemAlreadyExists.prototype instanceof EFSServiceException);
assert(FileSystemInUse.prototype instanceof EFSServiceException);
assert(FileSystemLimitExceeded.prototype instanceof EFSServiceException);
assert(FileSystemNotFound.prototype instanceof EFSServiceException);
assert(IncorrectFileSystemLifeCycleState.prototype instanceof EFSServiceException);
assert(IncorrectMountTargetState.prototype instanceof EFSServiceException);
assert(InsufficientThroughputCapacity.prototype instanceof EFSServiceException);
assert(InternalServerError.prototype instanceof EFSServiceException);
assert(InvalidPolicyException.prototype instanceof EFSServiceException);
assert(IpAddressInUse.prototype instanceof EFSServiceException);
assert(MountTargetConflict.prototype instanceof EFSServiceException);
assert(MountTargetNotFound.prototype instanceof EFSServiceException);
assert(NetworkInterfaceLimitExceeded.prototype instanceof EFSServiceException);
assert(NoFreeAddressesInSubnet.prototype instanceof EFSServiceException);
assert(PolicyNotFound.prototype instanceof EFSServiceException);
assert(ReplicationAlreadyExists.prototype instanceof EFSServiceException);
assert(ReplicationNotFound.prototype instanceof EFSServiceException);
assert(SecurityGroupLimitExceeded.prototype instanceof EFSServiceException);
assert(SecurityGroupNotFound.prototype instanceof EFSServiceException);
assert(SubnetNotFound.prototype instanceof EFSServiceException);
assert(ThrottlingException.prototype instanceof EFSServiceException);
assert(ThroughputLimitExceeded.prototype instanceof EFSServiceException);
assert(TooManyRequests.prototype instanceof EFSServiceException);
assert(UnsupportedAvailabilityZone.prototype instanceof EFSServiceException);
assert(ValidationException.prototype instanceof EFSServiceException);
assert(EFSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeAccessPoints === "function");
assert(typeof paginateDescribeFileSystems === "function");
assert(typeof paginateDescribeMountTargets === "function");
assert(typeof paginateDescribeReplicationConfigurations === "function");
assert(typeof paginateDescribeTags === "function");
assert(typeof paginateListTagsForResource === "function");
console.log(`EFS index test passed.`);
