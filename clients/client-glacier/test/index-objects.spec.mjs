import {
  AbortMultipartUpload$,
  AbortMultipartUploadCommand,
  AbortMultipartUploadInput$,
  AbortVaultLock$,
  AbortVaultLockCommand,
  AbortVaultLockInput$,
  ActionCode,
  AddTagsToVault$,
  AddTagsToVaultCommand,
  AddTagsToVaultInput$,
  ArchiveCreationOutput$,
  CSVInput$,
  CSVOutput$,
  CannedACL,
  CompleteMultipartUpload$,
  CompleteMultipartUploadCommand,
  CompleteMultipartUploadInput$,
  CompleteVaultLock$,
  CompleteVaultLockCommand,
  CompleteVaultLockInput$,
  CreateVault$,
  CreateVaultCommand,
  CreateVaultInput$,
  CreateVaultOutput$,
  DataRetrievalPolicy$,
  DataRetrievalRule$,
  DeleteArchive$,
  DeleteArchiveCommand,
  DeleteArchiveInput$,
  DeleteVault$,
  DeleteVaultAccessPolicy$,
  DeleteVaultAccessPolicyCommand,
  DeleteVaultAccessPolicyInput$,
  DeleteVaultCommand,
  DeleteVaultInput$,
  DeleteVaultNotifications$,
  DeleteVaultNotificationsCommand,
  DeleteVaultNotificationsInput$,
  DescribeJob$,
  DescribeJobCommand,
  DescribeJobInput$,
  DescribeVault$,
  DescribeVaultCommand,
  DescribeVaultInput$,
  DescribeVaultOutput$,
  Encryption$,
  EncryptionType,
  ExpressionType,
  FileHeaderInfo,
  GetDataRetrievalPolicy$,
  GetDataRetrievalPolicyCommand,
  GetDataRetrievalPolicyInput$,
  GetDataRetrievalPolicyOutput$,
  GetJobOutput$,
  GetJobOutputCommand,
  GetJobOutputInput$,
  GetJobOutputOutput$,
  GetVaultAccessPolicy$,
  GetVaultAccessPolicyCommand,
  GetVaultAccessPolicyInput$,
  GetVaultAccessPolicyOutput$,
  GetVaultLock$,
  GetVaultLockCommand,
  GetVaultLockInput$,
  GetVaultLockOutput$,
  GetVaultNotifications$,
  GetVaultNotificationsCommand,
  GetVaultNotificationsInput$,
  GetVaultNotificationsOutput$,
  Glacier,
  GlacierClient,
  GlacierJobDescription$,
  GlacierServiceException,
  Grant$,
  Grantee$,
  InitiateJob$,
  InitiateJobCommand,
  InitiateJobInput$,
  InitiateJobOutput$,
  InitiateMultipartUpload$,
  InitiateMultipartUploadCommand,
  InitiateMultipartUploadInput$,
  InitiateMultipartUploadOutput$,
  InitiateVaultLock$,
  InitiateVaultLockCommand,
  InitiateVaultLockInput$,
  InitiateVaultLockOutput$,
  InputSerialization$,
  InsufficientCapacityException,
  InsufficientCapacityException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  InventoryRetrievalJobDescription$,
  InventoryRetrievalJobInput$,
  JobParameters$,
  LimitExceededException,
  LimitExceededException$,
  ListJobs$,
  ListJobsCommand,
  ListJobsInput$,
  ListJobsOutput$,
  ListMultipartUploads$,
  ListMultipartUploadsCommand,
  ListMultipartUploadsInput$,
  ListMultipartUploadsOutput$,
  ListParts$,
  ListPartsCommand,
  ListPartsInput$,
  ListPartsOutput$,
  ListProvisionedCapacity$,
  ListProvisionedCapacityCommand,
  ListProvisionedCapacityInput$,
  ListProvisionedCapacityOutput$,
  ListTagsForVault$,
  ListTagsForVaultCommand,
  ListTagsForVaultInput$,
  ListTagsForVaultOutput$,
  ListVaults$,
  ListVaultsCommand,
  ListVaultsInput$,
  ListVaultsOutput$,
  MissingParameterValueException,
  MissingParameterValueException$,
  NoLongerSupportedException,
  NoLongerSupportedException$,
  OutputLocation$,
  OutputSerialization$,
  PartListElement$,
  Permission,
  PolicyEnforcedException,
  PolicyEnforcedException$,
  ProvisionedCapacityDescription$,
  PurchaseProvisionedCapacity$,
  PurchaseProvisionedCapacityCommand,
  PurchaseProvisionedCapacityInput$,
  PurchaseProvisionedCapacityOutput$,
  QuoteFields,
  RemoveTagsFromVault$,
  RemoveTagsFromVaultCommand,
  RemoveTagsFromVaultInput$,
  RequestTimeoutException,
  RequestTimeoutException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Location$,
  SelectParameters$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SetDataRetrievalPolicy$,
  SetDataRetrievalPolicyCommand,
  SetDataRetrievalPolicyInput$,
  SetVaultAccessPolicy$,
  SetVaultAccessPolicyCommand,
  SetVaultAccessPolicyInput$,
  SetVaultNotifications$,
  SetVaultNotificationsCommand,
  SetVaultNotificationsInput$,
  StatusCode,
  StorageClass,
  Type,
  UploadArchive$,
  UploadArchiveCommand,
  UploadArchiveInput$,
  UploadListElement$,
  UploadMultipartPart$,
  UploadMultipartPartCommand,
  UploadMultipartPartInput$,
  UploadMultipartPartOutput$,
  VaultAccessPolicy$,
  VaultLockPolicy$,
  VaultNotificationConfig$,
  paginateListJobs,
  paginateListMultipartUploads,
  paginateListParts,
  paginateListVaults,
  waitForVaultExists,
  waitForVaultNotExists,
  waitUntilVaultExists,
  waitUntilVaultNotExists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GlacierClient === "function");
assert(typeof Glacier === "function");
// commands
assert(typeof AbortMultipartUploadCommand === "function");
assert(typeof AbortMultipartUpload$ === "object");
assert(typeof AbortVaultLockCommand === "function");
assert(typeof AbortVaultLock$ === "object");
assert(typeof AddTagsToVaultCommand === "function");
assert(typeof AddTagsToVault$ === "object");
assert(typeof CompleteMultipartUploadCommand === "function");
assert(typeof CompleteMultipartUpload$ === "object");
assert(typeof CompleteVaultLockCommand === "function");
assert(typeof CompleteVaultLock$ === "object");
assert(typeof CreateVaultCommand === "function");
assert(typeof CreateVault$ === "object");
assert(typeof DeleteArchiveCommand === "function");
assert(typeof DeleteArchive$ === "object");
assert(typeof DeleteVaultCommand === "function");
assert(typeof DeleteVault$ === "object");
assert(typeof DeleteVaultAccessPolicyCommand === "function");
assert(typeof DeleteVaultAccessPolicy$ === "object");
assert(typeof DeleteVaultNotificationsCommand === "function");
assert(typeof DeleteVaultNotifications$ === "object");
assert(typeof DescribeJobCommand === "function");
assert(typeof DescribeJob$ === "object");
assert(typeof DescribeVaultCommand === "function");
assert(typeof DescribeVault$ === "object");
assert(typeof GetDataRetrievalPolicyCommand === "function");
assert(typeof GetDataRetrievalPolicy$ === "object");
assert(typeof GetJobOutputCommand === "function");
assert(typeof GetJobOutput$ === "object");
assert(typeof GetVaultAccessPolicyCommand === "function");
assert(typeof GetVaultAccessPolicy$ === "object");
assert(typeof GetVaultLockCommand === "function");
assert(typeof GetVaultLock$ === "object");
assert(typeof GetVaultNotificationsCommand === "function");
assert(typeof GetVaultNotifications$ === "object");
assert(typeof InitiateJobCommand === "function");
assert(typeof InitiateJob$ === "object");
assert(typeof InitiateMultipartUploadCommand === "function");
assert(typeof InitiateMultipartUpload$ === "object");
assert(typeof InitiateVaultLockCommand === "function");
assert(typeof InitiateVaultLock$ === "object");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobs$ === "object");
assert(typeof ListMultipartUploadsCommand === "function");
assert(typeof ListMultipartUploads$ === "object");
assert(typeof ListPartsCommand === "function");
assert(typeof ListParts$ === "object");
assert(typeof ListProvisionedCapacityCommand === "function");
assert(typeof ListProvisionedCapacity$ === "object");
assert(typeof ListTagsForVaultCommand === "function");
assert(typeof ListTagsForVault$ === "object");
assert(typeof ListVaultsCommand === "function");
assert(typeof ListVaults$ === "object");
assert(typeof PurchaseProvisionedCapacityCommand === "function");
assert(typeof PurchaseProvisionedCapacity$ === "object");
assert(typeof RemoveTagsFromVaultCommand === "function");
assert(typeof RemoveTagsFromVault$ === "object");
assert(typeof SetDataRetrievalPolicyCommand === "function");
assert(typeof SetDataRetrievalPolicy$ === "object");
assert(typeof SetVaultAccessPolicyCommand === "function");
assert(typeof SetVaultAccessPolicy$ === "object");
assert(typeof SetVaultNotificationsCommand === "function");
assert(typeof SetVaultNotifications$ === "object");
assert(typeof UploadArchiveCommand === "function");
assert(typeof UploadArchive$ === "object");
assert(typeof UploadMultipartPartCommand === "function");
assert(typeof UploadMultipartPart$ === "object");
// structural schemas
assert(typeof AbortMultipartUploadInput$ === "object");
assert(typeof AbortVaultLockInput$ === "object");
assert(typeof AddTagsToVaultInput$ === "object");
assert(typeof ArchiveCreationOutput$ === "object");
assert(typeof CompleteMultipartUploadInput$ === "object");
assert(typeof CompleteVaultLockInput$ === "object");
assert(typeof CreateVaultInput$ === "object");
assert(typeof CreateVaultOutput$ === "object");
assert(typeof CSVInput$ === "object");
assert(typeof CSVOutput$ === "object");
assert(typeof DataRetrievalPolicy$ === "object");
assert(typeof DataRetrievalRule$ === "object");
assert(typeof DeleteArchiveInput$ === "object");
assert(typeof DeleteVaultAccessPolicyInput$ === "object");
assert(typeof DeleteVaultInput$ === "object");
assert(typeof DeleteVaultNotificationsInput$ === "object");
assert(typeof DescribeJobInput$ === "object");
assert(typeof DescribeVaultInput$ === "object");
assert(typeof DescribeVaultOutput$ === "object");
assert(typeof Encryption$ === "object");
assert(typeof GetDataRetrievalPolicyInput$ === "object");
assert(typeof GetDataRetrievalPolicyOutput$ === "object");
assert(typeof GetJobOutputInput$ === "object");
assert(typeof GetJobOutputOutput$ === "object");
assert(typeof GetVaultAccessPolicyInput$ === "object");
assert(typeof GetVaultAccessPolicyOutput$ === "object");
assert(typeof GetVaultLockInput$ === "object");
assert(typeof GetVaultLockOutput$ === "object");
assert(typeof GetVaultNotificationsInput$ === "object");
assert(typeof GetVaultNotificationsOutput$ === "object");
assert(typeof GlacierJobDescription$ === "object");
assert(typeof Grant$ === "object");
assert(typeof Grantee$ === "object");
assert(typeof InitiateJobInput$ === "object");
assert(typeof InitiateJobOutput$ === "object");
assert(typeof InitiateMultipartUploadInput$ === "object");
assert(typeof InitiateMultipartUploadOutput$ === "object");
assert(typeof InitiateVaultLockInput$ === "object");
assert(typeof InitiateVaultLockOutput$ === "object");
assert(typeof InputSerialization$ === "object");
assert(typeof InventoryRetrievalJobDescription$ === "object");
assert(typeof InventoryRetrievalJobInput$ === "object");
assert(typeof JobParameters$ === "object");
assert(typeof ListJobsInput$ === "object");
assert(typeof ListJobsOutput$ === "object");
assert(typeof ListMultipartUploadsInput$ === "object");
assert(typeof ListMultipartUploadsOutput$ === "object");
assert(typeof ListPartsInput$ === "object");
assert(typeof ListPartsOutput$ === "object");
assert(typeof ListProvisionedCapacityInput$ === "object");
assert(typeof ListProvisionedCapacityOutput$ === "object");
assert(typeof ListTagsForVaultInput$ === "object");
assert(typeof ListTagsForVaultOutput$ === "object");
assert(typeof ListVaultsInput$ === "object");
assert(typeof ListVaultsOutput$ === "object");
assert(typeof OutputLocation$ === "object");
assert(typeof OutputSerialization$ === "object");
assert(typeof PartListElement$ === "object");
assert(typeof ProvisionedCapacityDescription$ === "object");
assert(typeof PurchaseProvisionedCapacityInput$ === "object");
assert(typeof PurchaseProvisionedCapacityOutput$ === "object");
assert(typeof RemoveTagsFromVaultInput$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SelectParameters$ === "object");
assert(typeof SetDataRetrievalPolicyInput$ === "object");
assert(typeof SetVaultAccessPolicyInput$ === "object");
assert(typeof SetVaultNotificationsInput$ === "object");
assert(typeof UploadArchiveInput$ === "object");
assert(typeof UploadListElement$ === "object");
assert(typeof UploadMultipartPartInput$ === "object");
assert(typeof UploadMultipartPartOutput$ === "object");
assert(typeof VaultAccessPolicy$ === "object");
assert(typeof VaultLockPolicy$ === "object");
assert(typeof VaultNotificationConfig$ === "object");
// enums
assert(typeof ActionCode === "object");
assert(typeof CannedACL === "object");
assert(typeof EncryptionType === "object");
assert(typeof ExpressionType === "object");
assert(typeof FileHeaderInfo === "object");
assert(typeof Permission === "object");
assert(typeof QuoteFields === "object");
assert(typeof StatusCode === "object");
assert(typeof StorageClass === "object");
assert(typeof Type === "object");
// errors
assert(InsufficientCapacityException.prototype instanceof GlacierServiceException);
assert(typeof InsufficientCapacityException$ === "object");
assert(InvalidParameterValueException.prototype instanceof GlacierServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(LimitExceededException.prototype instanceof GlacierServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MissingParameterValueException.prototype instanceof GlacierServiceException);
assert(typeof MissingParameterValueException$ === "object");
assert(NoLongerSupportedException.prototype instanceof GlacierServiceException);
assert(typeof NoLongerSupportedException$ === "object");
assert(PolicyEnforcedException.prototype instanceof GlacierServiceException);
assert(typeof PolicyEnforcedException$ === "object");
assert(RequestTimeoutException.prototype instanceof GlacierServiceException);
assert(typeof RequestTimeoutException$ === "object");
assert(ResourceNotFoundException.prototype instanceof GlacierServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof GlacierServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(GlacierServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForVaultExists === "function");
assert(typeof waitForVaultNotExists === "function");
assert(typeof waitUntilVaultExists === "function");
assert(typeof waitUntilVaultNotExists === "function");
// paginators
assert(typeof paginateListJobs === "function");
assert(typeof paginateListMultipartUploads === "function");
assert(typeof paginateListParts === "function");
assert(typeof paginateListVaults === "function");
console.log(`Glacier index test passed.`);
