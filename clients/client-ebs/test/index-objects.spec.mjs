import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionReason,
  Block$,
  ChangedBlock$,
  ChecksumAggregationMethod,
  ChecksumAlgorithm,
  CompleteSnapshot$,
  CompleteSnapshotCommand,
  CompleteSnapshotRequest$,
  CompleteSnapshotResponse$,
  ConcurrentLimitExceededException,
  ConcurrentLimitExceededException$,
  ConflictException,
  ConflictException$,
  EBS,
  EBSClient,
  EBSServiceException,
  GetSnapshotBlock$,
  GetSnapshotBlockCommand,
  GetSnapshotBlockRequest$,
  GetSnapshotBlockResponse$,
  InternalServerException,
  InternalServerException$,
  ListChangedBlocks$,
  ListChangedBlocksCommand,
  ListChangedBlocksRequest$,
  ListChangedBlocksResponse$,
  ListSnapshotBlocks$,
  ListSnapshotBlocksCommand,
  ListSnapshotBlocksRequest$,
  ListSnapshotBlocksResponse$,
  paginateListChangedBlocks,
  paginateListSnapshotBlocks,
  PutSnapshotBlock$,
  PutSnapshotBlockCommand,
  PutSnapshotBlockRequest$,
  PutSnapshotBlockResponse$,
  RequestThrottledException,
  RequestThrottledException$,
  RequestThrottledExceptionReason,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceNotFoundExceptionReason,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceQuotaExceededExceptionReason,
  SSEType,
  StartSnapshot$,
  StartSnapshotCommand,
  StartSnapshotRequest$,
  StartSnapshotResponse$,
  Status,
  Tag$,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EBSClient === "function");
assert(typeof EBS === "function");
// commands
assert(typeof CompleteSnapshotCommand === "function");
assert(typeof CompleteSnapshot$ === "object");
assert(typeof GetSnapshotBlockCommand === "function");
assert(typeof GetSnapshotBlock$ === "object");
assert(typeof ListChangedBlocksCommand === "function");
assert(typeof ListChangedBlocks$ === "object");
assert(typeof ListSnapshotBlocksCommand === "function");
assert(typeof ListSnapshotBlocks$ === "object");
assert(typeof PutSnapshotBlockCommand === "function");
assert(typeof PutSnapshotBlock$ === "object");
assert(typeof StartSnapshotCommand === "function");
assert(typeof StartSnapshot$ === "object");
// structural schemas
assert(typeof Block$ === "object");
assert(typeof ChangedBlock$ === "object");
assert(typeof CompleteSnapshotRequest$ === "object");
assert(typeof CompleteSnapshotResponse$ === "object");
assert(typeof GetSnapshotBlockRequest$ === "object");
assert(typeof GetSnapshotBlockResponse$ === "object");
assert(typeof ListChangedBlocksRequest$ === "object");
assert(typeof ListChangedBlocksResponse$ === "object");
assert(typeof ListSnapshotBlocksRequest$ === "object");
assert(typeof ListSnapshotBlocksResponse$ === "object");
assert(typeof PutSnapshotBlockRequest$ === "object");
assert(typeof PutSnapshotBlockResponse$ === "object");
assert(typeof StartSnapshotRequest$ === "object");
assert(typeof StartSnapshotResponse$ === "object");
assert(typeof Tag$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConcurrentLimitExceededException.prototype instanceof EBSServiceException);
assert(typeof ConcurrentLimitExceededException$ === "object");
assert(ConflictException.prototype instanceof EBSServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof EBSServiceException);
assert(typeof InternalServerException$ === "object");
assert(RequestThrottledException.prototype instanceof EBSServiceException);
assert(typeof RequestThrottledException$ === "object");
assert(ResourceNotFoundException.prototype instanceof EBSServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof EBSServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof EBSServiceException);
assert(typeof ValidationException$ === "object");
assert(EBSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChangedBlocks === "function");
assert(typeof paginateListSnapshotBlocks === "function");
console.log(`EBS index test passed.`);
