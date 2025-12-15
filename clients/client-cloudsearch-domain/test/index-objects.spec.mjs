import {
  Bucket$,
  BucketInfo$,
  CloudSearchDomain,
  CloudSearchDomainClient,
  CloudSearchDomainServiceException,
  ContentType,
  DocumentServiceException,
  DocumentServiceException$,
  DocumentServiceWarning$,
  FieldStats$,
  Hit$,
  Hits$,
  QueryParser,
  Search$,
  SearchCommand,
  SearchException,
  SearchException$,
  SearchRequest$,
  SearchResponse$,
  SearchStatus$,
  Suggest$,
  SuggestCommand,
  SuggestModel$,
  SuggestRequest$,
  SuggestResponse$,
  SuggestStatus$,
  SuggestionMatch$,
  UploadDocuments$,
  UploadDocumentsCommand,
  UploadDocumentsRequest$,
  UploadDocumentsResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudSearchDomainClient === "function");
assert(typeof CloudSearchDomain === "function");
// commands
assert(typeof SearchCommand === "function");
assert(typeof Search$ === "object");
assert(typeof SuggestCommand === "function");
assert(typeof Suggest$ === "object");
assert(typeof UploadDocumentsCommand === "function");
assert(typeof UploadDocuments$ === "object");
// structural schemas
assert(typeof Bucket$ === "object");
assert(typeof BucketInfo$ === "object");
assert(typeof DocumentServiceWarning$ === "object");
assert(typeof FieldStats$ === "object");
assert(typeof Hit$ === "object");
assert(typeof Hits$ === "object");
assert(typeof SearchRequest$ === "object");
assert(typeof SearchResponse$ === "object");
assert(typeof SearchStatus$ === "object");
assert(typeof SuggestionMatch$ === "object");
assert(typeof SuggestModel$ === "object");
assert(typeof SuggestRequest$ === "object");
assert(typeof SuggestResponse$ === "object");
assert(typeof SuggestStatus$ === "object");
assert(typeof UploadDocumentsRequest$ === "object");
assert(typeof UploadDocumentsResponse$ === "object");
// enums
assert(typeof ContentType === "object");
assert(typeof QueryParser === "object");
// errors
assert(DocumentServiceException.prototype instanceof CloudSearchDomainServiceException);
assert(typeof DocumentServiceException$ === "object");
assert(SearchException.prototype instanceof CloudSearchDomainServiceException);
assert(typeof SearchException$ === "object");
assert(CloudSearchDomainServiceException.prototype instanceof Error);
console.log(`CloudSearchDomain index test passed.`);
