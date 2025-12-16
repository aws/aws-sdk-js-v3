import {
  AccessDeniedException,
  AccessDeniedException$,
  CloudFrontKeyValueStore,
  CloudFrontKeyValueStoreClient,
  CloudFrontKeyValueStoreServiceException,
  ConflictException,
  ConflictException$,
  DeleteKey$,
  DeleteKeyCommand,
  DeleteKeyRequest$,
  DeleteKeyRequestListItem$,
  DeleteKeyResponse$,
  DescribeKeyValueStore$,
  DescribeKeyValueStoreCommand,
  DescribeKeyValueStoreRequest$,
  DescribeKeyValueStoreResponse$,
  GetKey$,
  GetKeyCommand,
  GetKeyRequest$,
  GetKeyResponse$,
  InternalServerException,
  InternalServerException$,
  ListKeys$,
  ListKeysCommand,
  ListKeysRequest$,
  ListKeysResponse$,
  ListKeysResponseListItem$,
  PutKey$,
  PutKeyCommand,
  PutKeyRequest$,
  PutKeyRequestListItem$,
  PutKeyResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  UpdateKeys$,
  UpdateKeysCommand,
  UpdateKeysRequest$,
  UpdateKeysResponse$,
  ValidationException,
  ValidationException$,
  paginateListKeys,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudFrontKeyValueStoreClient === "function");
assert(typeof CloudFrontKeyValueStore === "function");
// commands
assert(typeof DeleteKeyCommand === "function");
assert(typeof DeleteKey$ === "object");
assert(typeof DescribeKeyValueStoreCommand === "function");
assert(typeof DescribeKeyValueStore$ === "object");
assert(typeof GetKeyCommand === "function");
assert(typeof GetKey$ === "object");
assert(typeof ListKeysCommand === "function");
assert(typeof ListKeys$ === "object");
assert(typeof PutKeyCommand === "function");
assert(typeof PutKey$ === "object");
assert(typeof UpdateKeysCommand === "function");
assert(typeof UpdateKeys$ === "object");
// structural schemas
assert(typeof DeleteKeyRequest$ === "object");
assert(typeof DeleteKeyRequestListItem$ === "object");
assert(typeof DeleteKeyResponse$ === "object");
assert(typeof DescribeKeyValueStoreRequest$ === "object");
assert(typeof DescribeKeyValueStoreResponse$ === "object");
assert(typeof GetKeyRequest$ === "object");
assert(typeof GetKeyResponse$ === "object");
assert(typeof ListKeysRequest$ === "object");
assert(typeof ListKeysResponse$ === "object");
assert(typeof ListKeysResponseListItem$ === "object");
assert(typeof PutKeyRequest$ === "object");
assert(typeof PutKeyRequestListItem$ === "object");
assert(typeof PutKeyResponse$ === "object");
assert(typeof UpdateKeysRequest$ === "object");
assert(typeof UpdateKeysResponse$ === "object");
// errors
assert(AccessDeniedException.prototype instanceof CloudFrontKeyValueStoreServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof CloudFrontKeyValueStoreServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof CloudFrontKeyValueStoreServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CloudFrontKeyValueStoreServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof CloudFrontKeyValueStoreServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof CloudFrontKeyValueStoreServiceException);
assert(typeof ValidationException$ === "object");
assert(CloudFrontKeyValueStoreServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListKeys === "function");
console.log(`CloudFrontKeyValueStore index test passed.`);
