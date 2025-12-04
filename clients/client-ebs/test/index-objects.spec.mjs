import {
  ChecksumAggregationMethod,
  ChecksumAlgorithm,
  CompleteSnapshotCommand,
  EBS,
  EBSClient,
  EBSServiceException,
  GetSnapshotBlockCommand,
  ListChangedBlocksCommand,
  ListSnapshotBlocksCommand,
  PutSnapshotBlockCommand,
  SSEType,
  StartSnapshotCommand,
  Status,
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
assert(typeof ChecksumAggregationMethod === "object");
assert(typeof ChecksumAlgorithm === "object");
assert(typeof SSEType === "object");
assert(typeof Status === "object");
// errors
assert(EBSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChangedBlocks === "function");
assert(typeof paginateListSnapshotBlocks === "function");
console.log(`EBS index test passed.`);
