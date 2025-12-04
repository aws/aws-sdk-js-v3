import {
  CloudFrontKeyValueStore,
  CloudFrontKeyValueStoreClient,
  CloudFrontKeyValueStoreServiceException,
  DeleteKeyCommand,
  DescribeKeyValueStoreCommand,
  GetKeyCommand,
  ListKeysCommand,
  PutKeyCommand,
  UpdateKeysCommand,
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
assert(CloudFrontKeyValueStoreServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListKeys === "function");
console.log(`CloudFrontKeyValueStore index test passed.`);
