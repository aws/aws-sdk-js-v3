import {
  BackupPolicy,
  BackupRetentionType,
  BackupState,
  CloudHSMV2,
  CloudHSMV2Client,
  CloudHSMV2ServiceException,
  CloudHsmAccessDeniedException,
  CloudHsmInternalFailureException,
  CloudHsmInvalidRequestException,
  CloudHsmResourceLimitExceededException,
  CloudHsmResourceNotFoundException,
  CloudHsmServiceException,
  CloudHsmTagException,
  ClusterMode,
  ClusterState,
  CopyBackupToRegionCommand,
  CreateClusterCommand,
  CreateHsmCommand,
  DeleteBackupCommand,
  DeleteClusterCommand,
  DeleteHsmCommand,
  DeleteResourcePolicyCommand,
  DescribeBackupsCommand,
  DescribeClustersCommand,
  GetResourcePolicyCommand,
  HsmState,
  InitializeClusterCommand,
  ListTagsCommand,
  ModifyBackupAttributesCommand,
  ModifyClusterCommand,
  NetworkType,
  PutResourcePolicyCommand,
  RestoreBackupCommand,
  TagResourceCommand,
  UntagResourceCommand,
  paginateDescribeBackups,
  paginateDescribeClusters,
  paginateListTags,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudHSMV2Client === "function");
assert(typeof CloudHSMV2 === "function");
// commands
assert(typeof CopyBackupToRegionCommand === "function");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateHsmCommand === "function");
assert(typeof DeleteBackupCommand === "function");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteHsmCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DescribeBackupsCommand === "function");
assert(typeof DescribeClustersCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof InitializeClusterCommand === "function");
assert(typeof ListTagsCommand === "function");
assert(typeof ModifyBackupAttributesCommand === "function");
assert(typeof ModifyClusterCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof RestoreBackupCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof BackupPolicy === "object");
assert(typeof BackupRetentionType === "object");
assert(typeof BackupState === "object");
assert(typeof ClusterMode === "object");
assert(typeof ClusterState === "object");
assert(typeof HsmState === "object");
assert(typeof NetworkType === "object");
// errors
assert(CloudHsmAccessDeniedException.prototype instanceof CloudHSMV2ServiceException);
assert(CloudHsmInternalFailureException.prototype instanceof CloudHSMV2ServiceException);
assert(CloudHsmInvalidRequestException.prototype instanceof CloudHSMV2ServiceException);
assert(CloudHsmResourceLimitExceededException.prototype instanceof CloudHSMV2ServiceException);
assert(CloudHsmResourceNotFoundException.prototype instanceof CloudHSMV2ServiceException);
assert(CloudHsmServiceException.prototype instanceof CloudHSMV2ServiceException);
assert(CloudHsmTagException.prototype instanceof CloudHSMV2ServiceException);
assert(CloudHSMV2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeBackups === "function");
assert(typeof paginateDescribeClusters === "function");
assert(typeof paginateListTags === "function");
console.log(`CloudHSMV2 index test passed.`);
