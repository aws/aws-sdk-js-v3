import {
  AccessDeniedException,
  CloudFrontKeyValueStore,
  CloudFrontKeyValueStoreClient,
  CloudFrontKeyValueStoreServiceException,
  ConflictException,
  DeleteKeyCommand,
  DescribeKeyValueStoreCommand,
  GetKeyCommand,
  InternalServerException,
  ListKeysCommand,
  PutKeyCommand,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  UpdateKeysCommand,
  ValidationException,
  paginateListKeys,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudFrontKeyValueStoreClient === "function");
assert(typeof CloudFrontKeyValueStore === "function");
// commands
assert(typeof DeleteKeyCommand === "function");
assert(typeof DescribeKeyValueStoreCommand === "function");
assert(typeof GetKeyCommand === "function");
assert(typeof ListKeysCommand === "function");
assert(typeof PutKeyCommand === "function");
assert(typeof UpdateKeysCommand === "function");
// errors
assert(AccessDeniedException.prototype instanceof CloudFrontKeyValueStoreServiceException);
assert(ConflictException.prototype instanceof CloudFrontKeyValueStoreServiceException);
assert(InternalServerException.prototype instanceof CloudFrontKeyValueStoreServiceException);
assert(ResourceNotFoundException.prototype instanceof CloudFrontKeyValueStoreServiceException);
assert(ServiceQuotaExceededException.prototype instanceof CloudFrontKeyValueStoreServiceException);
assert(ValidationException.prototype instanceof CloudFrontKeyValueStoreServiceException);
assert(CloudFrontKeyValueStoreServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListKeys === "function");
console.log(`CloudFrontKeyValueStore index test passed.`);
