import {
  AccessDeniedException,
  ConflictException,
  CreateIndexCommand,
  CreateVectorBucketCommand,
  DataType,
  DeleteIndexCommand,
  DeleteVectorBucketCommand,
  DeleteVectorBucketPolicyCommand,
  DeleteVectorsCommand,
  DistanceMetric,
  GetIndexCommand,
  GetVectorBucketCommand,
  GetVectorBucketPolicyCommand,
  GetVectorsCommand,
  InternalServerException,
  KmsDisabledException,
  KmsInvalidKeyUsageException,
  KmsInvalidStateException,
  KmsNotFoundException,
  ListIndexesCommand,
  ListTagsForResourceCommand,
  ListVectorBucketsCommand,
  ListVectorsCommand,
  NotFoundException,
  PutVectorBucketPolicyCommand,
  PutVectorsCommand,
  QueryVectorsCommand,
  RequestTimeoutException,
  S3Vectors,
  S3VectorsClient,
  S3VectorsServiceException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SseType,
  TagResourceCommand,
  TooManyRequestsException,
  UntagResourceCommand,
  ValidationException,
  paginateListIndexes,
  paginateListVectorBuckets,
  paginateListVectors,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof S3VectorsClient === "function");
assert(typeof S3Vectors === "function");
// commands
assert(typeof CreateIndexCommand === "function");
assert(typeof CreateVectorBucketCommand === "function");
assert(typeof DeleteIndexCommand === "function");
assert(typeof DeleteVectorBucketCommand === "function");
assert(typeof DeleteVectorBucketPolicyCommand === "function");
assert(typeof DeleteVectorsCommand === "function");
assert(typeof GetIndexCommand === "function");
assert(typeof GetVectorBucketCommand === "function");
assert(typeof GetVectorBucketPolicyCommand === "function");
assert(typeof GetVectorsCommand === "function");
assert(typeof ListIndexesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListVectorBucketsCommand === "function");
assert(typeof ListVectorsCommand === "function");
assert(typeof PutVectorBucketPolicyCommand === "function");
assert(typeof PutVectorsCommand === "function");
assert(typeof QueryVectorsCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof DataType === "object");
assert(typeof DistanceMetric === "object");
assert(typeof SseType === "object");
// errors
assert(AccessDeniedException.prototype instanceof S3VectorsServiceException);
assert(ConflictException.prototype instanceof S3VectorsServiceException);
assert(InternalServerException.prototype instanceof S3VectorsServiceException);
assert(KmsDisabledException.prototype instanceof S3VectorsServiceException);
assert(KmsInvalidKeyUsageException.prototype instanceof S3VectorsServiceException);
assert(KmsInvalidStateException.prototype instanceof S3VectorsServiceException);
assert(KmsNotFoundException.prototype instanceof S3VectorsServiceException);
assert(NotFoundException.prototype instanceof S3VectorsServiceException);
assert(RequestTimeoutException.prototype instanceof S3VectorsServiceException);
assert(ServiceQuotaExceededException.prototype instanceof S3VectorsServiceException);
assert(ServiceUnavailableException.prototype instanceof S3VectorsServiceException);
assert(TooManyRequestsException.prototype instanceof S3VectorsServiceException);
assert(ValidationException.prototype instanceof S3VectorsServiceException);
assert(S3VectorsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListIndexes === "function");
assert(typeof paginateListVectorBuckets === "function");
assert(typeof paginateListVectors === "function");
console.log(`S3Vectors index test passed.`);
