import {
  AddPolicyStatementCommand,
  AttributeMatchingModel,
  BatchDeleteUniqueIdCommand,
  CreateIdMappingWorkflowCommand,
  CreateIdNamespaceCommand,
  CreateMatchingWorkflowCommand,
  CreateSchemaMappingCommand,
  DeleteIdMappingWorkflowCommand,
  DeleteIdNamespaceCommand,
  DeleteMatchingWorkflowCommand,
  DeletePolicyStatementCommand,
  DeleteSchemaMappingCommand,
  DeleteUniqueIdErrorType,
  DeleteUniqueIdStatus,
  EntityResolution,
  EntityResolutionClient,
  EntityResolutionServiceException,
  GenerateMatchIdCommand,
  GetIdMappingJobCommand,
  GetIdMappingWorkflowCommand,
  GetIdNamespaceCommand,
  GetMatchIdCommand,
  GetMatchingJobCommand,
  GetMatchingWorkflowCommand,
  GetPolicyCommand,
  GetProviderServiceCommand,
  GetSchemaMappingCommand,
  IdMappingIncrementalRunType,
  IdMappingType,
  IdMappingWorkflowRuleDefinitionType,
  IdNamespaceType,
  IncrementalRunType,
  JobStatus,
  JobType,
  ListIdMappingJobsCommand,
  ListIdMappingWorkflowsCommand,
  ListIdNamespacesCommand,
  ListMatchingJobsCommand,
  ListMatchingWorkflowsCommand,
  ListProviderServicesCommand,
  ListSchemaMappingsCommand,
  ListTagsForResourceCommand,
  MatchPurpose,
  ProcessingType,
  PutPolicyCommand,
  RecordMatchingModel,
  ResolutionType,
  SchemaAttributeType,
  ServiceType,
  StartIdMappingJobCommand,
  StartMatchingJobCommand,
  StatementEffect,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateIdMappingWorkflowCommand,
  UpdateIdNamespaceCommand,
  UpdateMatchingWorkflowCommand,
  UpdateSchemaMappingCommand,
  paginateListIdMappingJobs,
  paginateListIdMappingWorkflows,
  paginateListIdNamespaces,
  paginateListMatchingJobs,
  paginateListMatchingWorkflows,
  paginateListProviderServices,
  paginateListSchemaMappings,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EntityResolutionClient === "function");
assert(typeof EntityResolution === "function");
// commands
assert(typeof AddPolicyStatementCommand === "function");
assert(typeof BatchDeleteUniqueIdCommand === "function");
assert(typeof CreateIdMappingWorkflowCommand === "function");
assert(typeof CreateIdNamespaceCommand === "function");
assert(typeof CreateMatchingWorkflowCommand === "function");
assert(typeof CreateSchemaMappingCommand === "function");
assert(typeof DeleteIdMappingWorkflowCommand === "function");
assert(typeof DeleteIdNamespaceCommand === "function");
assert(typeof DeleteMatchingWorkflowCommand === "function");
assert(typeof DeletePolicyStatementCommand === "function");
assert(typeof DeleteSchemaMappingCommand === "function");
assert(typeof GenerateMatchIdCommand === "function");
assert(typeof GetIdMappingJobCommand === "function");
assert(typeof GetIdMappingWorkflowCommand === "function");
assert(typeof GetIdNamespaceCommand === "function");
assert(typeof GetMatchIdCommand === "function");
assert(typeof GetMatchingJobCommand === "function");
assert(typeof GetMatchingWorkflowCommand === "function");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetProviderServiceCommand === "function");
assert(typeof GetSchemaMappingCommand === "function");
assert(typeof ListIdMappingJobsCommand === "function");
assert(typeof ListIdMappingWorkflowsCommand === "function");
assert(typeof ListIdNamespacesCommand === "function");
assert(typeof ListMatchingJobsCommand === "function");
assert(typeof ListMatchingWorkflowsCommand === "function");
assert(typeof ListProviderServicesCommand === "function");
assert(typeof ListSchemaMappingsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutPolicyCommand === "function");
assert(typeof StartIdMappingJobCommand === "function");
assert(typeof StartMatchingJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateIdMappingWorkflowCommand === "function");
assert(typeof UpdateIdNamespaceCommand === "function");
assert(typeof UpdateMatchingWorkflowCommand === "function");
assert(typeof UpdateSchemaMappingCommand === "function");
// enums
assert(typeof AttributeMatchingModel === "object");
assert(typeof DeleteUniqueIdErrorType === "object");
assert(typeof DeleteUniqueIdStatus === "object");
assert(typeof IdMappingIncrementalRunType === "object");
assert(typeof IdMappingType === "object");
assert(typeof IdMappingWorkflowRuleDefinitionType === "object");
assert(typeof IdNamespaceType === "object");
assert(typeof IncrementalRunType === "object");
assert(typeof JobStatus === "object");
assert(typeof JobType === "object");
assert(typeof MatchPurpose === "object");
assert(typeof ProcessingType === "object");
assert(typeof RecordMatchingModel === "object");
assert(typeof ResolutionType === "object");
assert(typeof SchemaAttributeType === "object");
assert(typeof ServiceType === "object");
assert(typeof StatementEffect === "object");
// errors
assert(EntityResolutionServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListIdMappingJobs === "function");
assert(typeof paginateListIdMappingWorkflows === "function");
assert(typeof paginateListIdNamespaces === "function");
assert(typeof paginateListMatchingJobs === "function");
assert(typeof paginateListMatchingWorkflows === "function");
assert(typeof paginateListProviderServices === "function");
assert(typeof paginateListSchemaMappings === "function");
console.log(`EntityResolution index test passed.`);
