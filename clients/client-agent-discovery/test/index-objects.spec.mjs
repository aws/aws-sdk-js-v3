import {
  AgentDiscovery,
  AgentDiscoveryClient,
  AgentDiscoveryServiceException,
  ArdErrorCode,
  DescriptorEntry$,
  DescriptorSource$,
  DescriptorSourceUrl$,
  Identifier$,
  InternalServerException,
  InternalServerException$,
  paginateSearchPublicRecords,
  ProvenanceLink$,
  ProvenanceRelation,
  PublicRecord$,
  RecordType,
  SearchPublicRecords$,
  SearchPublicRecordsCommand,
  SearchPublicRecordsRequest$,
  SearchPublicRecordsResponse$,
  ThrottlingException,
  ThrottlingException$,
  TrustManifest$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AgentDiscoveryClient === "function");
assert(typeof AgentDiscovery === "function");
// commands
assert(typeof SearchPublicRecordsCommand === "function");
assert(typeof SearchPublicRecords$ === "object");
// structural schemas
assert(typeof DescriptorEntry$ === "object");
assert(typeof DescriptorSource$ === "object");
assert(typeof DescriptorSourceUrl$ === "object");
assert(typeof Identifier$ === "object");
assert(typeof ProvenanceLink$ === "object");
assert(typeof PublicRecord$ === "object");
assert(typeof SearchPublicRecordsRequest$ === "object");
assert(typeof SearchPublicRecordsResponse$ === "object");
assert(typeof TrustManifest$ === "object");
// enums
assert(typeof ArdErrorCode === "object");
assert(typeof ProvenanceRelation === "object");
assert(typeof RecordType === "object");
// errors
assert(InternalServerException.prototype instanceof AgentDiscoveryServiceException);
assert(typeof InternalServerException$ === "object");
assert(ThrottlingException.prototype instanceof AgentDiscoveryServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof AgentDiscoveryServiceException);
assert(typeof ValidationException$ === "object");
assert(AgentDiscoveryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateSearchPublicRecords === "function");
console.log(`AgentDiscovery index test passed.`);
