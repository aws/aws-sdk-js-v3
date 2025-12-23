import {
  Backup$,
  BackupPolicy,
  BackupRetentionPolicy$,
  BackupRetentionType,
  BackupState,
  Certificates$,
  CloudHsmAccessDeniedException,
  CloudHsmAccessDeniedException$,
  CloudHsmInternalFailureException,
  CloudHsmInternalFailureException$,
  CloudHsmInvalidRequestException,
  CloudHsmInvalidRequestException$,
  CloudHsmResourceLimitExceededException,
  CloudHsmResourceLimitExceededException$,
  CloudHsmResourceNotFoundException,
  CloudHsmResourceNotFoundException$,
  CloudHsmServiceException,
  CloudHsmServiceException$,
  CloudHsmTagException,
  CloudHsmTagException$,
  CloudHSMV2,
  CloudHSMV2Client,
  CloudHSMV2ServiceException,
  Cluster$,
  ClusterMode,
  ClusterState,
  CopyBackupToRegion$,
  CopyBackupToRegionCommand,
  CopyBackupToRegionRequest$,
  CopyBackupToRegionResponse$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterRequest$,
  CreateClusterResponse$,
  CreateHsm$,
  CreateHsmCommand,
  CreateHsmRequest$,
  CreateHsmResponse$,
  DeleteBackup$,
  DeleteBackupCommand,
  DeleteBackupRequest$,
  DeleteBackupResponse$,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterRequest$,
  DeleteClusterResponse$,
  DeleteHsm$,
  DeleteHsmCommand,
  DeleteHsmRequest$,
  DeleteHsmResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DescribeBackups$,
  DescribeBackupsCommand,
  DescribeBackupsRequest$,
  DescribeBackupsResponse$,
  DescribeClusters$,
  DescribeClustersCommand,
  DescribeClustersRequest$,
  DescribeClustersResponse$,
  DestinationBackup$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  Hsm$,
  HsmState,
  InitializeCluster$,
  InitializeClusterCommand,
  InitializeClusterRequest$,
  InitializeClusterResponse$,
  ListTags$,
  ListTagsCommand,
  ListTagsRequest$,
  ListTagsResponse$,
  ModifyBackupAttributes$,
  ModifyBackupAttributesCommand,
  ModifyBackupAttributesRequest$,
  ModifyBackupAttributesResponse$,
  ModifyCluster$,
  ModifyClusterCommand,
  ModifyClusterRequest$,
  ModifyClusterResponse$,
  NetworkType,
  paginateDescribeBackups,
  paginateDescribeClusters,
  paginateListTags,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  RestoreBackup$,
  RestoreBackupCommand,
  RestoreBackupRequest$,
  RestoreBackupResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudHSMV2Client === "function");
assert(typeof CloudHSMV2 === "function");
// commands
assert(typeof CopyBackupToRegionCommand === "function");
assert(typeof CopyBackupToRegion$ === "object");
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateHsmCommand === "function");
assert(typeof CreateHsm$ === "object");
assert(typeof DeleteBackupCommand === "function");
assert(typeof DeleteBackup$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteHsmCommand === "function");
assert(typeof DeleteHsm$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DescribeBackupsCommand === "function");
assert(typeof DescribeBackups$ === "object");
assert(typeof DescribeClustersCommand === "function");
assert(typeof DescribeClusters$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof InitializeClusterCommand === "function");
assert(typeof InitializeCluster$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof ModifyBackupAttributesCommand === "function");
assert(typeof ModifyBackupAttributes$ === "object");
assert(typeof ModifyClusterCommand === "function");
assert(typeof ModifyCluster$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RestoreBackupCommand === "function");
assert(typeof RestoreBackup$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof Backup$ === "object");
assert(typeof BackupRetentionPolicy$ === "object");
assert(typeof Certificates$ === "object");
assert(typeof Cluster$ === "object");
assert(typeof CopyBackupToRegionRequest$ === "object");
assert(typeof CopyBackupToRegionResponse$ === "object");
assert(typeof CreateClusterRequest$ === "object");
assert(typeof CreateClusterResponse$ === "object");
assert(typeof CreateHsmRequest$ === "object");
assert(typeof CreateHsmResponse$ === "object");
assert(typeof DeleteBackupRequest$ === "object");
assert(typeof DeleteBackupResponse$ === "object");
assert(typeof DeleteClusterRequest$ === "object");
assert(typeof DeleteClusterResponse$ === "object");
assert(typeof DeleteHsmRequest$ === "object");
assert(typeof DeleteHsmResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DescribeBackupsRequest$ === "object");
assert(typeof DescribeBackupsResponse$ === "object");
assert(typeof DescribeClustersRequest$ === "object");
assert(typeof DescribeClustersResponse$ === "object");
assert(typeof DestinationBackup$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof Hsm$ === "object");
assert(typeof InitializeClusterRequest$ === "object");
assert(typeof InitializeClusterResponse$ === "object");
assert(typeof ListTagsRequest$ === "object");
assert(typeof ListTagsResponse$ === "object");
assert(typeof ModifyBackupAttributesRequest$ === "object");
assert(typeof ModifyBackupAttributesResponse$ === "object");
assert(typeof ModifyClusterRequest$ === "object");
assert(typeof ModifyClusterResponse$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RestoreBackupRequest$ === "object");
assert(typeof RestoreBackupResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
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
assert(typeof CloudHsmAccessDeniedException$ === "object");
assert(CloudHsmInternalFailureException.prototype instanceof CloudHSMV2ServiceException);
assert(typeof CloudHsmInternalFailureException$ === "object");
assert(CloudHsmInvalidRequestException.prototype instanceof CloudHSMV2ServiceException);
assert(typeof CloudHsmInvalidRequestException$ === "object");
assert(CloudHsmResourceLimitExceededException.prototype instanceof CloudHSMV2ServiceException);
assert(typeof CloudHsmResourceLimitExceededException$ === "object");
assert(CloudHsmResourceNotFoundException.prototype instanceof CloudHSMV2ServiceException);
assert(typeof CloudHsmResourceNotFoundException$ === "object");
assert(CloudHsmServiceException.prototype instanceof CloudHSMV2ServiceException);
assert(typeof CloudHsmServiceException$ === "object");
assert(CloudHsmTagException.prototype instanceof CloudHSMV2ServiceException);
assert(typeof CloudHsmTagException$ === "object");
assert(CloudHSMV2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeBackups === "function");
assert(typeof paginateDescribeClusters === "function");
assert(typeof paginateListTags === "function");
console.log(`CloudHSMV2 index test passed.`);
