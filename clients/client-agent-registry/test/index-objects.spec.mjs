import {
  A2aAgentCardDescriptor$,
  AccessDeniedException,
  AccessDeniedException$,
  AgentRegistry,
  AgentRegistryClient,
  AgentRegistryServiceException,
  AgentSkillsAdditionalData$,
  AgentSkillsDefinitionDescriptor$,
  AgentSkillsMdDescriptor$,
  AgUiDescriptor$,
  BatchGetDiscoverableRegistryRecord$,
  BatchGetDiscoverableRegistryRecordCommand,
  BatchGetDiscoverableRegistryRecordError$,
  BatchGetDiscoverableRegistryRecordErrorCode,
  BatchGetDiscoverableRegistryRecordRequest$,
  BatchGetDiscoverableRegistryRecordResponse$,
  CustomDescriptor$,
  Descriptors$,
  DescriptorSource$,
  DescriptorSourceFromUrl$,
  DiscoverableRegistryRecordSummary$,
  HttpDescriptor$,
  InternalServerException,
  InternalServerException$,
  ListDiscoverableRegistryRecords$,
  ListDiscoverableRegistryRecordsCommand,
  ListDiscoverableRegistryRecordsRequest$,
  ListDiscoverableRegistryRecordsResponse$,
  McpServerAdditionalData$,
  McpServerDescriptor$,
  McpToolsDescriptor$,
  paginateListDiscoverableRegistryRecords,
  RecordType,
  RegistryRecordFilter$,
  RegistryRecordFilterName,
  RegistryRecordsEntry$,
  RegistryRecordStatus,
  RegistryRecordSummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SearchDiscoverableRegistryRecords$,
  SearchDiscoverableRegistryRecordsCommand,
  SearchDiscoverableRegistryRecordsRequest$,
  SearchDiscoverableRegistryRecordsResponse$,
  ThrottlingException,
  ThrottlingException$,
  UnauthorizedException,
  UnauthorizedException$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AgentRegistryClient === "function");
assert(typeof AgentRegistry === "function");
// commands
assert(typeof BatchGetDiscoverableRegistryRecordCommand === "function");
assert(typeof BatchGetDiscoverableRegistryRecord$ === "object");
assert(typeof ListDiscoverableRegistryRecordsCommand === "function");
assert(typeof ListDiscoverableRegistryRecords$ === "object");
assert(typeof SearchDiscoverableRegistryRecordsCommand === "function");
assert(typeof SearchDiscoverableRegistryRecords$ === "object");
// structural schemas
assert(typeof A2aAgentCardDescriptor$ === "object");
assert(typeof AgentSkillsAdditionalData$ === "object");
assert(typeof AgentSkillsDefinitionDescriptor$ === "object");
assert(typeof AgentSkillsMdDescriptor$ === "object");
assert(typeof AgUiDescriptor$ === "object");
assert(typeof BatchGetDiscoverableRegistryRecordError$ === "object");
assert(typeof BatchGetDiscoverableRegistryRecordRequest$ === "object");
assert(typeof BatchGetDiscoverableRegistryRecordResponse$ === "object");
assert(typeof CustomDescriptor$ === "object");
assert(typeof Descriptors$ === "object");
assert(typeof DescriptorSource$ === "object");
assert(typeof DescriptorSourceFromUrl$ === "object");
assert(typeof DiscoverableRegistryRecordSummary$ === "object");
assert(typeof HttpDescriptor$ === "object");
assert(typeof ListDiscoverableRegistryRecordsRequest$ === "object");
assert(typeof ListDiscoverableRegistryRecordsResponse$ === "object");
assert(typeof McpServerAdditionalData$ === "object");
assert(typeof McpServerDescriptor$ === "object");
assert(typeof McpToolsDescriptor$ === "object");
assert(typeof RegistryRecordFilter$ === "object");
assert(typeof RegistryRecordsEntry$ === "object");
assert(typeof RegistryRecordSummary$ === "object");
assert(typeof SearchDiscoverableRegistryRecordsRequest$ === "object");
assert(typeof SearchDiscoverableRegistryRecordsResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof BatchGetDiscoverableRegistryRecordErrorCode === "object");
assert(typeof RecordType === "object");
assert(typeof RegistryRecordFilterName === "object");
assert(typeof RegistryRecordStatus === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof AgentRegistryServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof AgentRegistryServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AgentRegistryServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof AgentRegistryServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnauthorizedException.prototype instanceof AgentRegistryServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(ValidationException.prototype instanceof AgentRegistryServiceException);
assert(typeof ValidationException$ === "object");
assert(AgentRegistryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDiscoverableRegistryRecords === "function");
console.log(`AgentRegistry index test passed.`);
