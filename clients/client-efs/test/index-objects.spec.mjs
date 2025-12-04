import {
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
  IpAddressType,
  LifeCycleState,
  ListTagsForResourceCommand,
  ModifyMountTargetSecurityGroupsCommand,
  PerformanceMode,
  PutAccountPreferencesCommand,
  PutBackupPolicyCommand,
  PutFileSystemPolicyCommand,
  PutLifecycleConfigurationCommand,
  ReplicationOverwriteProtection,
  ReplicationStatus,
  Resource,
  ResourceIdType,
  Status,
  TagResourceCommand,
  ThroughputMode,
  TransitionToArchiveRules,
  TransitionToIARules,
  TransitionToPrimaryStorageClassRules,
  UntagResourceCommand,
  UpdateFileSystemCommand,
  UpdateFileSystemProtectionCommand,
  paginateDescribeAccessPoints,
  paginateDescribeFileSystems,
  paginateDescribeMountTargets,
  paginateDescribeReplicationConfigurations,
  paginateDescribeTags,
  paginateListTagsForResource,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EFSClient === "function")
assert(typeof EFS === "function")
// commands
assert(typeof CreateAccessPointCommand === "function")
assert(typeof CreateFileSystemCommand === "function")
assert(typeof CreateMountTargetCommand === "function")
assert(typeof CreateReplicationConfigurationCommand === "function")
assert(typeof CreateTagsCommand === "function")
assert(typeof DeleteAccessPointCommand === "function")
assert(typeof DeleteFileSystemCommand === "function")
assert(typeof DeleteFileSystemPolicyCommand === "function")
assert(typeof DeleteMountTargetCommand === "function")
assert(typeof DeleteReplicationConfigurationCommand === "function")
assert(typeof DeleteTagsCommand === "function")
assert(typeof DescribeAccessPointsCommand === "function")
assert(typeof DescribeAccountPreferencesCommand === "function")
assert(typeof DescribeBackupPolicyCommand === "function")
assert(typeof DescribeFileSystemPolicyCommand === "function")
assert(typeof DescribeFileSystemsCommand === "function")
assert(typeof DescribeLifecycleConfigurationCommand === "function")
assert(typeof DescribeMountTargetsCommand === "function")
assert(typeof DescribeMountTargetSecurityGroupsCommand === "function")
assert(typeof DescribeReplicationConfigurationsCommand === "function")
assert(typeof DescribeTagsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ModifyMountTargetSecurityGroupsCommand === "function")
assert(typeof PutAccountPreferencesCommand === "function")
assert(typeof PutBackupPolicyCommand === "function")
assert(typeof PutFileSystemPolicyCommand === "function")
assert(typeof PutLifecycleConfigurationCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateFileSystemCommand === "function")
assert(typeof UpdateFileSystemProtectionCommand === "function")
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
assert(EFSServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeAccessPoints === "function")
assert(typeof paginateDescribeFileSystems === "function")
assert(typeof paginateDescribeMountTargets === "function")
assert(typeof paginateDescribeReplicationConfigurations === "function")
assert(typeof paginateDescribeTags === "function")
assert(typeof paginateListTagsForResource === "function")
console.log(`EFS index test passed.`);
