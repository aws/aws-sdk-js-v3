import {
  AccessDeniedException,
  AccessDeniedException$,
  ConflictException,
  ConflictException$,
  CreateIndex$,
  CreateIndexCommand,
  CreateIndexInput$,
  CreateIndexOutput$,
  CreateVectorBucket$,
  CreateVectorBucketCommand,
  CreateVectorBucketInput$,
  CreateVectorBucketOutput$,
  DataType,
  DeleteIndex$,
  DeleteIndexCommand,
  DeleteIndexInput$,
  DeleteIndexOutput$,
  DeleteVectorBucket$,
  DeleteVectorBucketCommand,
  DeleteVectorBucketInput$,
  DeleteVectorBucketOutput$,
  DeleteVectorBucketPolicy$,
  DeleteVectorBucketPolicyCommand,
  DeleteVectorBucketPolicyInput$,
  DeleteVectorBucketPolicyOutput$,
  DeleteVectors$,
  DeleteVectorsCommand,
  DeleteVectorsInput$,
  DeleteVectorsOutput$,
  DistanceMetric,
  EncryptionConfiguration$,
  GetIndex$,
  GetIndexCommand,
  GetIndexInput$,
  GetIndexOutput$,
  GetOutputVector$,
  GetVectorBucket$,
  GetVectorBucketCommand,
  GetVectorBucketInput$,
  GetVectorBucketOutput$,
  GetVectorBucketPolicy$,
  GetVectorBucketPolicyCommand,
  GetVectorBucketPolicyInput$,
  GetVectorBucketPolicyOutput$,
  GetVectors$,
  GetVectorsCommand,
  GetVectorsInput$,
  GetVectorsOutput$,
  Index$,
  IndexSummary$,
  InternalServerException,
  InternalServerException$,
  KmsDisabledException,
  KmsDisabledException$,
  KmsInvalidKeyUsageException,
  KmsInvalidKeyUsageException$,
  KmsInvalidStateException,
  KmsInvalidStateException$,
  KmsNotFoundException,
  KmsNotFoundException$,
  ListIndexes$,
  ListIndexesCommand,
  ListIndexesInput$,
  ListIndexesOutput$,
  ListOutputVector$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListVectorBuckets$,
  ListVectorBucketsCommand,
  ListVectorBucketsInput$,
  ListVectorBucketsOutput$,
  ListVectors$,
  ListVectorsCommand,
  ListVectorsInput$,
  ListVectorsOutput$,
  MetadataConfiguration$,
  NotFoundException,
  NotFoundException$,
  PutInputVector$,
  PutVectorBucketPolicy$,
  PutVectorBucketPolicyCommand,
  PutVectorBucketPolicyInput$,
  PutVectorBucketPolicyOutput$,
  PutVectors$,
  PutVectorsCommand,
  PutVectorsInput$,
  PutVectorsOutput$,
  QueryOutputVector$,
  QueryVectors$,
  QueryVectorsCommand,
  QueryVectorsInput$,
  QueryVectorsOutput$,
  RequestTimeoutException,
  RequestTimeoutException$,
  S3Vectors,
  S3VectorsClient,
  S3VectorsServiceException,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SseType,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  VectorBucket$,
  VectorBucketSummary$,
  VectorData$,
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
assert(typeof CreateIndex$ === "object");
assert(typeof CreateVectorBucketCommand === "function");
assert(typeof CreateVectorBucket$ === "object");
assert(typeof DeleteIndexCommand === "function");
assert(typeof DeleteIndex$ === "object");
assert(typeof DeleteVectorBucketCommand === "function");
assert(typeof DeleteVectorBucket$ === "object");
assert(typeof DeleteVectorBucketPolicyCommand === "function");
assert(typeof DeleteVectorBucketPolicy$ === "object");
assert(typeof DeleteVectorsCommand === "function");
assert(typeof DeleteVectors$ === "object");
assert(typeof GetIndexCommand === "function");
assert(typeof GetIndex$ === "object");
assert(typeof GetVectorBucketCommand === "function");
assert(typeof GetVectorBucket$ === "object");
assert(typeof GetVectorBucketPolicyCommand === "function");
assert(typeof GetVectorBucketPolicy$ === "object");
assert(typeof GetVectorsCommand === "function");
assert(typeof GetVectors$ === "object");
assert(typeof ListIndexesCommand === "function");
assert(typeof ListIndexes$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVectorBucketsCommand === "function");
assert(typeof ListVectorBuckets$ === "object");
assert(typeof ListVectorsCommand === "function");
assert(typeof ListVectors$ === "object");
assert(typeof PutVectorBucketPolicyCommand === "function");
assert(typeof PutVectorBucketPolicy$ === "object");
assert(typeof PutVectorsCommand === "function");
assert(typeof PutVectors$ === "object");
assert(typeof QueryVectorsCommand === "function");
assert(typeof QueryVectors$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof CreateIndexInput$ === "object");
assert(typeof CreateIndexOutput$ === "object");
assert(typeof CreateVectorBucketInput$ === "object");
assert(typeof CreateVectorBucketOutput$ === "object");
assert(typeof DeleteIndexInput$ === "object");
assert(typeof DeleteIndexOutput$ === "object");
assert(typeof DeleteVectorBucketInput$ === "object");
assert(typeof DeleteVectorBucketOutput$ === "object");
assert(typeof DeleteVectorBucketPolicyInput$ === "object");
assert(typeof DeleteVectorBucketPolicyOutput$ === "object");
assert(typeof DeleteVectorsInput$ === "object");
assert(typeof DeleteVectorsOutput$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof GetIndexInput$ === "object");
assert(typeof GetIndexOutput$ === "object");
assert(typeof GetOutputVector$ === "object");
assert(typeof GetVectorBucketInput$ === "object");
assert(typeof GetVectorBucketOutput$ === "object");
assert(typeof GetVectorBucketPolicyInput$ === "object");
assert(typeof GetVectorBucketPolicyOutput$ === "object");
assert(typeof GetVectorsInput$ === "object");
assert(typeof GetVectorsOutput$ === "object");
assert(typeof Index$ === "object");
assert(typeof IndexSummary$ === "object");
assert(typeof ListIndexesInput$ === "object");
assert(typeof ListIndexesOutput$ === "object");
assert(typeof ListOutputVector$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListVectorBucketsInput$ === "object");
assert(typeof ListVectorBucketsOutput$ === "object");
assert(typeof ListVectorsInput$ === "object");
assert(typeof ListVectorsOutput$ === "object");
assert(typeof MetadataConfiguration$ === "object");
assert(typeof PutInputVector$ === "object");
assert(typeof PutVectorBucketPolicyInput$ === "object");
assert(typeof PutVectorBucketPolicyOutput$ === "object");
assert(typeof PutVectorsInput$ === "object");
assert(typeof PutVectorsOutput$ === "object");
assert(typeof QueryOutputVector$ === "object");
assert(typeof QueryVectorsInput$ === "object");
assert(typeof QueryVectorsOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VectorBucket$ === "object");
assert(typeof VectorBucketSummary$ === "object");
assert(typeof VectorData$ === "object");
// enums
assert(typeof DataType === "object");
assert(typeof DistanceMetric === "object");
assert(typeof SseType === "object");
// errors
assert(AccessDeniedException.prototype instanceof S3VectorsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof S3VectorsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof S3VectorsServiceException);
assert(typeof InternalServerException$ === "object");
assert(KmsDisabledException.prototype instanceof S3VectorsServiceException);
assert(typeof KmsDisabledException$ === "object");
assert(KmsInvalidKeyUsageException.prototype instanceof S3VectorsServiceException);
assert(typeof KmsInvalidKeyUsageException$ === "object");
assert(KmsInvalidStateException.prototype instanceof S3VectorsServiceException);
assert(typeof KmsInvalidStateException$ === "object");
assert(KmsNotFoundException.prototype instanceof S3VectorsServiceException);
assert(typeof KmsNotFoundException$ === "object");
assert(NotFoundException.prototype instanceof S3VectorsServiceException);
assert(typeof NotFoundException$ === "object");
assert(RequestTimeoutException.prototype instanceof S3VectorsServiceException);
assert(typeof RequestTimeoutException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof S3VectorsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof S3VectorsServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TooManyRequestsException.prototype instanceof S3VectorsServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(ValidationException.prototype instanceof S3VectorsServiceException);
assert(typeof ValidationException$ === "object");
assert(S3VectorsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListIndexes === "function");
assert(typeof paginateListVectorBuckets === "function");
assert(typeof paginateListVectors === "function");
console.log(`S3Vectors index test passed.`);
