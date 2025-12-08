import {
  CloudSearchDomain,
  CloudSearchDomainClient,
  CloudSearchDomainServiceException,
  ContentType,
  DocumentServiceException,
  QueryParser,
  SearchCommand,
  SearchException,
  SuggestCommand,
  UploadDocumentsCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudSearchDomainClient === "function");
assert(typeof CloudSearchDomain === "function");
// commands
assert(typeof SearchCommand === "function");
assert(typeof SuggestCommand === "function");
assert(typeof UploadDocumentsCommand === "function");
// enums
assert(typeof ContentType === "object");
assert(typeof QueryParser === "object");
// errors
assert(DocumentServiceException.prototype instanceof CloudSearchDomainServiceException);
assert(SearchException.prototype instanceof CloudSearchDomainServiceException);
assert(CloudSearchDomainServiceException.prototype instanceof Error);
console.log(`CloudSearchDomain index test passed.`);
