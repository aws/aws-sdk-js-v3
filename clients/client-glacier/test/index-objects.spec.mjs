import {
  AbortMultipartUploadCommand,
  AbortVaultLockCommand,
  ActionCode,
  AddTagsToVaultCommand,
  CannedACL,
  CompleteMultipartUploadCommand,
  CompleteVaultLockCommand,
  CreateVaultCommand,
  DeleteArchiveCommand,
  DeleteVaultAccessPolicyCommand,
  DeleteVaultCommand,
  DeleteVaultNotificationsCommand,
  DescribeJobCommand,
  DescribeVaultCommand,
  EncryptionType,
  ExpressionType,
  FileHeaderInfo,
  GetDataRetrievalPolicyCommand,
  GetJobOutputCommand,
  GetVaultAccessPolicyCommand,
  GetVaultLockCommand,
  GetVaultNotificationsCommand,
  Glacier,
  GlacierClient,
  GlacierServiceException,
  InitiateJobCommand,
  InitiateMultipartUploadCommand,
  InitiateVaultLockCommand,
  InsufficientCapacityException,
  InvalidParameterValueException,
  LimitExceededException,
  ListJobsCommand,
  ListMultipartUploadsCommand,
  ListPartsCommand,
  ListProvisionedCapacityCommand,
  ListTagsForVaultCommand,
  ListVaultsCommand,
  MissingParameterValueException,
  NoLongerSupportedException,
  Permission,
  PolicyEnforcedException,
  PurchaseProvisionedCapacityCommand,
  QuoteFields,
  RemoveTagsFromVaultCommand,
  RequestTimeoutException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  SetDataRetrievalPolicyCommand,
  SetVaultAccessPolicyCommand,
  SetVaultNotificationsCommand,
  StatusCode,
  StorageClass,
  Type,
  UploadArchiveCommand,
  UploadMultipartPartCommand,
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
assert(typeof AbortVaultLockCommand === "function");
assert(typeof AddTagsToVaultCommand === "function");
assert(typeof CompleteMultipartUploadCommand === "function");
assert(typeof CompleteVaultLockCommand === "function");
assert(typeof CreateVaultCommand === "function");
assert(typeof DeleteArchiveCommand === "function");
assert(typeof DeleteVaultCommand === "function");
assert(typeof DeleteVaultAccessPolicyCommand === "function");
assert(typeof DeleteVaultNotificationsCommand === "function");
assert(typeof DescribeJobCommand === "function");
assert(typeof DescribeVaultCommand === "function");
assert(typeof GetDataRetrievalPolicyCommand === "function");
assert(typeof GetJobOutputCommand === "function");
assert(typeof GetVaultAccessPolicyCommand === "function");
assert(typeof GetVaultLockCommand === "function");
assert(typeof GetVaultNotificationsCommand === "function");
assert(typeof InitiateJobCommand === "function");
assert(typeof InitiateMultipartUploadCommand === "function");
assert(typeof InitiateVaultLockCommand === "function");
assert(typeof ListJobsCommand === "function");
assert(typeof ListMultipartUploadsCommand === "function");
assert(typeof ListPartsCommand === "function");
assert(typeof ListProvisionedCapacityCommand === "function");
assert(typeof ListTagsForVaultCommand === "function");
assert(typeof ListVaultsCommand === "function");
assert(typeof PurchaseProvisionedCapacityCommand === "function");
assert(typeof RemoveTagsFromVaultCommand === "function");
assert(typeof SetDataRetrievalPolicyCommand === "function");
assert(typeof SetVaultAccessPolicyCommand === "function");
assert(typeof SetVaultNotificationsCommand === "function");
assert(typeof UploadArchiveCommand === "function");
assert(typeof UploadMultipartPartCommand === "function");
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
assert(InvalidParameterValueException.prototype instanceof GlacierServiceException);
assert(LimitExceededException.prototype instanceof GlacierServiceException);
assert(MissingParameterValueException.prototype instanceof GlacierServiceException);
assert(NoLongerSupportedException.prototype instanceof GlacierServiceException);
assert(PolicyEnforcedException.prototype instanceof GlacierServiceException);
assert(RequestTimeoutException.prototype instanceof GlacierServiceException);
assert(ResourceNotFoundException.prototype instanceof GlacierServiceException);
assert(ServiceUnavailableException.prototype instanceof GlacierServiceException);
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
