import {
  AccessDeniedException,
  AccessDeniedExceptionReason,
  ChecksumAggregationMethod,
  ChecksumAlgorithm,
  CompleteSnapshotCommand,
  ConcurrentLimitExceededException,
  ConflictException,
  EBS,
  EBSClient,
  EBSServiceException,
  GetSnapshotBlockCommand,
  InternalServerException,
  ListChangedBlocksCommand,
  ListSnapshotBlocksCommand,
  PutSnapshotBlockCommand,
  RequestThrottledException,
  RequestThrottledExceptionReason,
  ResourceNotFoundException,
  ResourceNotFoundExceptionReason,
  SSEType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededExceptionReason,
  StartSnapshotCommand,
  Status,
  ValidationException,
  ValidationExceptionReason,
  paginateListChangedBlocks,
  paginateListSnapshotBlocks,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EBSClient === "function");
assert(typeof EBS === "function");
// commands
assert(typeof CompleteSnapshotCommand === "function");
assert(typeof GetSnapshotBlockCommand === "function");
assert(typeof ListChangedBlocksCommand === "function");
assert(typeof ListSnapshotBlocksCommand === "function");
assert(typeof PutSnapshotBlockCommand === "function");
assert(typeof StartSnapshotCommand === "function");
// enums
assert(typeof AccessDeniedExceptionReason === "object");
assert(typeof ChecksumAggregationMethod === "object");
assert(typeof ChecksumAlgorithm === "object");
assert(typeof RequestThrottledExceptionReason === "object");
assert(typeof ResourceNotFoundExceptionReason === "object");
assert(typeof ServiceQuotaExceededExceptionReason === "object");
assert(typeof SSEType === "object");
assert(typeof Status === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof EBSServiceException);
assert(ConcurrentLimitExceededException.prototype instanceof EBSServiceException);
assert(ConflictException.prototype instanceof EBSServiceException);
assert(InternalServerException.prototype instanceof EBSServiceException);
assert(RequestThrottledException.prototype instanceof EBSServiceException);
assert(ResourceNotFoundException.prototype instanceof EBSServiceException);
assert(ServiceQuotaExceededException.prototype instanceof EBSServiceException);
assert(ValidationException.prototype instanceof EBSServiceException);
assert(EBSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChangedBlocks === "function");
assert(typeof paginateListSnapshotBlocks === "function");
console.log(`EBS index test passed.`);
