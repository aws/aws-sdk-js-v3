import {
  _Record$,
  AccessDeniedException,
  AccessDeniedException$,
  AddPolicyStatement$,
  AddPolicyStatementCommand,
  AddPolicyStatementInput$,
  AddPolicyStatementOutput$,
  AttributeMatchingModel,
  BatchDeleteUniqueId$,
  BatchDeleteUniqueIdCommand,
  BatchDeleteUniqueIdInput$,
  BatchDeleteUniqueIdOutput$,
  ConflictException,
  ConflictException$,
  CreateIdMappingWorkflow$,
  CreateIdMappingWorkflowCommand,
  CreateIdMappingWorkflowInput$,
  CreateIdMappingWorkflowOutput$,
  CreateIdNamespace$,
  CreateIdNamespaceCommand,
  CreateIdNamespaceInput$,
  CreateIdNamespaceOutput$,
  CreateMatchingWorkflow$,
  CreateMatchingWorkflowCommand,
  CreateMatchingWorkflowInput$,
  CreateMatchingWorkflowOutput$,
  CreateSchemaMapping$,
  CreateSchemaMappingCommand,
  CreateSchemaMappingInput$,
  CreateSchemaMappingOutput$,
  CustomerProfilesIntegrationConfig$,
  DeletedUniqueId$,
  DeleteIdMappingWorkflow$,
  DeleteIdMappingWorkflowCommand,
  DeleteIdMappingWorkflowInput$,
  DeleteIdMappingWorkflowOutput$,
  DeleteIdNamespace$,
  DeleteIdNamespaceCommand,
  DeleteIdNamespaceInput$,
  DeleteIdNamespaceOutput$,
  DeleteMatchingWorkflow$,
  DeleteMatchingWorkflowCommand,
  DeleteMatchingWorkflowInput$,
  DeleteMatchingWorkflowOutput$,
  DeletePolicyStatement$,
  DeletePolicyStatementCommand,
  DeletePolicyStatementInput$,
  DeletePolicyStatementOutput$,
  DeleteSchemaMapping$,
  DeleteSchemaMappingCommand,
  DeleteSchemaMappingInput$,
  DeleteSchemaMappingOutput$,
  DeleteUniqueIdError$,
  DeleteUniqueIdErrorType,
  DeleteUniqueIdStatus,
  EntityResolution,
  EntityResolutionClient,
  EntityResolutionServiceException,
  ErrorDetails$,
  ExceedsLimitException,
  ExceedsLimitException$,
  FailedRecord$,
  GenerateMatchId$,
  GenerateMatchIdCommand,
  GenerateMatchIdInput$,
  GenerateMatchIdOutput$,
  GetIdMappingJob$,
  GetIdMappingJobCommand,
  GetIdMappingJobInput$,
  GetIdMappingJobOutput$,
  GetIdMappingWorkflow$,
  GetIdMappingWorkflowCommand,
  GetIdMappingWorkflowInput$,
  GetIdMappingWorkflowOutput$,
  GetIdNamespace$,
  GetIdNamespaceCommand,
  GetIdNamespaceInput$,
  GetIdNamespaceOutput$,
  GetMatchId$,
  GetMatchIdCommand,
  GetMatchIdInput$,
  GetMatchIdOutput$,
  GetMatchingJob$,
  GetMatchingJobCommand,
  GetMatchingJobInput$,
  GetMatchingJobOutput$,
  GetMatchingWorkflow$,
  GetMatchingWorkflowCommand,
  GetMatchingWorkflowInput$,
  GetMatchingWorkflowOutput$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyInput$,
  GetPolicyOutput$,
  GetProviderService$,
  GetProviderServiceCommand,
  GetProviderServiceInput$,
  GetProviderServiceOutput$,
  GetSchemaMapping$,
  GetSchemaMappingCommand,
  GetSchemaMappingInput$,
  GetSchemaMappingOutput$,
  IdMappingIncrementalRunConfig$,
  IdMappingIncrementalRunType,
  IdMappingJobMetrics$,
  IdMappingJobOutputSource$,
  IdMappingRuleBasedProperties$,
  IdMappingTechniques$,
  IdMappingType,
  IdMappingWorkflowInputSource$,
  IdMappingWorkflowOutputSource$,
  IdMappingWorkflowRuleDefinitionType,
  IdMappingWorkflowSummary$,
  IdNamespaceIdMappingWorkflowMetadata$,
  IdNamespaceIdMappingWorkflowProperties$,
  IdNamespaceInputSource$,
  IdNamespaceSummary$,
  IdNamespaceType,
  IncrementalRunConfig$,
  IncrementalRunType,
  InputSource$,
  IntermediateSourceConfiguration$,
  InternalServerException,
  InternalServerException$,
  JobMetrics$,
  JobOutputSource$,
  JobStatus,
  JobSummary$,
  JobType,
  ListIdMappingJobs$,
  ListIdMappingJobsCommand,
  ListIdMappingJobsInput$,
  ListIdMappingJobsOutput$,
  ListIdMappingWorkflows$,
  ListIdMappingWorkflowsCommand,
  ListIdMappingWorkflowsInput$,
  ListIdMappingWorkflowsOutput$,
  ListIdNamespaces$,
  ListIdNamespacesCommand,
  ListIdNamespacesInput$,
  ListIdNamespacesOutput$,
  ListMatchingJobs$,
  ListMatchingJobsCommand,
  ListMatchingJobsInput$,
  ListMatchingJobsOutput$,
  ListMatchingWorkflows$,
  ListMatchingWorkflowsCommand,
  ListMatchingWorkflowsInput$,
  ListMatchingWorkflowsOutput$,
  ListProviderServices$,
  ListProviderServicesCommand,
  ListProviderServicesInput$,
  ListProviderServicesOutput$,
  ListSchemaMappings$,
  ListSchemaMappingsCommand,
  ListSchemaMappingsInput$,
  ListSchemaMappingsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  MatchedRecord$,
  MatchGroup$,
  MatchingWorkflowSummary$,
  MatchPurpose,
  NamespaceProviderProperties$,
  NamespaceRuleBasedProperties$,
  OutputAttribute$,
  OutputSource$,
  paginateListIdMappingJobs,
  paginateListIdMappingWorkflows,
  paginateListIdNamespaces,
  paginateListMatchingJobs,
  paginateListMatchingWorkflows,
  paginateListProviderServices,
  paginateListSchemaMappings,
  ProcessingType,
  ProviderComponentSchema$,
  ProviderEndpointConfiguration$,
  ProviderIdNameSpaceConfiguration$,
  ProviderIntermediateDataAccessConfiguration$,
  ProviderMarketplaceConfiguration$,
  ProviderProperties$,
  ProviderSchemaAttribute$,
  ProviderServiceSummary$,
  PutPolicy$,
  PutPolicyCommand,
  PutPolicyInput$,
  PutPolicyOutput$,
  RecordMatchingModel,
  ResolutionTechniques$,
  ResolutionType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Rule$,
  RuleBasedProperties$,
  RuleCondition$,
  RuleConditionProperties$,
  SchemaAttributeType,
  SchemaInputAttribute$,
  SchemaMappingSummary$,
  ServiceType,
  StartIdMappingJob$,
  StartIdMappingJobCommand,
  StartIdMappingJobInput$,
  StartIdMappingJobOutput$,
  StartMatchingJob$,
  StartMatchingJobCommand,
  StartMatchingJobInput$,
  StartMatchingJobOutput$,
  StatementEffect,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateIdMappingWorkflow$,
  UpdateIdMappingWorkflowCommand,
  UpdateIdMappingWorkflowInput$,
  UpdateIdMappingWorkflowOutput$,
  UpdateIdNamespace$,
  UpdateIdNamespaceCommand,
  UpdateIdNamespaceInput$,
  UpdateIdNamespaceOutput$,
  UpdateMatchingWorkflow$,
  UpdateMatchingWorkflowCommand,
  UpdateMatchingWorkflowInput$,
  UpdateMatchingWorkflowOutput$,
  UpdateSchemaMapping$,
  UpdateSchemaMappingCommand,
  UpdateSchemaMappingInput$,
  UpdateSchemaMappingOutput$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EntityResolutionClient === "function");
assert(typeof EntityResolution === "function");
// commands
assert(typeof AddPolicyStatementCommand === "function");
assert(typeof AddPolicyStatement$ === "object");
assert(typeof BatchDeleteUniqueIdCommand === "function");
assert(typeof BatchDeleteUniqueId$ === "object");
assert(typeof CreateIdMappingWorkflowCommand === "function");
assert(typeof CreateIdMappingWorkflow$ === "object");
assert(typeof CreateIdNamespaceCommand === "function");
assert(typeof CreateIdNamespace$ === "object");
assert(typeof CreateMatchingWorkflowCommand === "function");
assert(typeof CreateMatchingWorkflow$ === "object");
assert(typeof CreateSchemaMappingCommand === "function");
assert(typeof CreateSchemaMapping$ === "object");
assert(typeof DeleteIdMappingWorkflowCommand === "function");
assert(typeof DeleteIdMappingWorkflow$ === "object");
assert(typeof DeleteIdNamespaceCommand === "function");
assert(typeof DeleteIdNamespace$ === "object");
assert(typeof DeleteMatchingWorkflowCommand === "function");
assert(typeof DeleteMatchingWorkflow$ === "object");
assert(typeof DeletePolicyStatementCommand === "function");
assert(typeof DeletePolicyStatement$ === "object");
assert(typeof DeleteSchemaMappingCommand === "function");
assert(typeof DeleteSchemaMapping$ === "object");
assert(typeof GenerateMatchIdCommand === "function");
assert(typeof GenerateMatchId$ === "object");
assert(typeof GetIdMappingJobCommand === "function");
assert(typeof GetIdMappingJob$ === "object");
assert(typeof GetIdMappingWorkflowCommand === "function");
assert(typeof GetIdMappingWorkflow$ === "object");
assert(typeof GetIdNamespaceCommand === "function");
assert(typeof GetIdNamespace$ === "object");
assert(typeof GetMatchIdCommand === "function");
assert(typeof GetMatchId$ === "object");
assert(typeof GetMatchingJobCommand === "function");
assert(typeof GetMatchingJob$ === "object");
assert(typeof GetMatchingWorkflowCommand === "function");
assert(typeof GetMatchingWorkflow$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof GetProviderServiceCommand === "function");
assert(typeof GetProviderService$ === "object");
assert(typeof GetSchemaMappingCommand === "function");
assert(typeof GetSchemaMapping$ === "object");
assert(typeof ListIdMappingJobsCommand === "function");
assert(typeof ListIdMappingJobs$ === "object");
assert(typeof ListIdMappingWorkflowsCommand === "function");
assert(typeof ListIdMappingWorkflows$ === "object");
assert(typeof ListIdNamespacesCommand === "function");
assert(typeof ListIdNamespaces$ === "object");
assert(typeof ListMatchingJobsCommand === "function");
assert(typeof ListMatchingJobs$ === "object");
assert(typeof ListMatchingWorkflowsCommand === "function");
assert(typeof ListMatchingWorkflows$ === "object");
assert(typeof ListProviderServicesCommand === "function");
assert(typeof ListProviderServices$ === "object");
assert(typeof ListSchemaMappingsCommand === "function");
assert(typeof ListSchemaMappings$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutPolicyCommand === "function");
assert(typeof PutPolicy$ === "object");
assert(typeof StartIdMappingJobCommand === "function");
assert(typeof StartIdMappingJob$ === "object");
assert(typeof StartMatchingJobCommand === "function");
assert(typeof StartMatchingJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateIdMappingWorkflowCommand === "function");
assert(typeof UpdateIdMappingWorkflow$ === "object");
assert(typeof UpdateIdNamespaceCommand === "function");
assert(typeof UpdateIdNamespace$ === "object");
assert(typeof UpdateMatchingWorkflowCommand === "function");
assert(typeof UpdateMatchingWorkflow$ === "object");
assert(typeof UpdateSchemaMappingCommand === "function");
assert(typeof UpdateSchemaMapping$ === "object");
// structural schemas
assert(typeof AddPolicyStatementInput$ === "object");
assert(typeof AddPolicyStatementOutput$ === "object");
assert(typeof BatchDeleteUniqueIdInput$ === "object");
assert(typeof BatchDeleteUniqueIdOutput$ === "object");
assert(typeof CreateIdMappingWorkflowInput$ === "object");
assert(typeof CreateIdMappingWorkflowOutput$ === "object");
assert(typeof CreateIdNamespaceInput$ === "object");
assert(typeof CreateIdNamespaceOutput$ === "object");
assert(typeof CreateMatchingWorkflowInput$ === "object");
assert(typeof CreateMatchingWorkflowOutput$ === "object");
assert(typeof CreateSchemaMappingInput$ === "object");
assert(typeof CreateSchemaMappingOutput$ === "object");
assert(typeof CustomerProfilesIntegrationConfig$ === "object");
assert(typeof DeletedUniqueId$ === "object");
assert(typeof DeleteIdMappingWorkflowInput$ === "object");
assert(typeof DeleteIdMappingWorkflowOutput$ === "object");
assert(typeof DeleteIdNamespaceInput$ === "object");
assert(typeof DeleteIdNamespaceOutput$ === "object");
assert(typeof DeleteMatchingWorkflowInput$ === "object");
assert(typeof DeleteMatchingWorkflowOutput$ === "object");
assert(typeof DeletePolicyStatementInput$ === "object");
assert(typeof DeletePolicyStatementOutput$ === "object");
assert(typeof DeleteSchemaMappingInput$ === "object");
assert(typeof DeleteSchemaMappingOutput$ === "object");
assert(typeof DeleteUniqueIdError$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof FailedRecord$ === "object");
assert(typeof GenerateMatchIdInput$ === "object");
assert(typeof GenerateMatchIdOutput$ === "object");
assert(typeof GetIdMappingJobInput$ === "object");
assert(typeof GetIdMappingJobOutput$ === "object");
assert(typeof GetIdMappingWorkflowInput$ === "object");
assert(typeof GetIdMappingWorkflowOutput$ === "object");
assert(typeof GetIdNamespaceInput$ === "object");
assert(typeof GetIdNamespaceOutput$ === "object");
assert(typeof GetMatchIdInput$ === "object");
assert(typeof GetMatchIdOutput$ === "object");
assert(typeof GetMatchingJobInput$ === "object");
assert(typeof GetMatchingJobOutput$ === "object");
assert(typeof GetMatchingWorkflowInput$ === "object");
assert(typeof GetMatchingWorkflowOutput$ === "object");
assert(typeof GetPolicyInput$ === "object");
assert(typeof GetPolicyOutput$ === "object");
assert(typeof GetProviderServiceInput$ === "object");
assert(typeof GetProviderServiceOutput$ === "object");
assert(typeof GetSchemaMappingInput$ === "object");
assert(typeof GetSchemaMappingOutput$ === "object");
assert(typeof IdMappingIncrementalRunConfig$ === "object");
assert(typeof IdMappingJobMetrics$ === "object");
assert(typeof IdMappingJobOutputSource$ === "object");
assert(typeof IdMappingRuleBasedProperties$ === "object");
assert(typeof IdMappingTechniques$ === "object");
assert(typeof IdMappingWorkflowInputSource$ === "object");
assert(typeof IdMappingWorkflowOutputSource$ === "object");
assert(typeof IdMappingWorkflowSummary$ === "object");
assert(typeof IdNamespaceIdMappingWorkflowMetadata$ === "object");
assert(typeof IdNamespaceIdMappingWorkflowProperties$ === "object");
assert(typeof IdNamespaceInputSource$ === "object");
assert(typeof IdNamespaceSummary$ === "object");
assert(typeof IncrementalRunConfig$ === "object");
assert(typeof InputSource$ === "object");
assert(typeof IntermediateSourceConfiguration$ === "object");
assert(typeof JobMetrics$ === "object");
assert(typeof JobOutputSource$ === "object");
assert(typeof JobSummary$ === "object");
assert(typeof ListIdMappingJobsInput$ === "object");
assert(typeof ListIdMappingJobsOutput$ === "object");
assert(typeof ListIdMappingWorkflowsInput$ === "object");
assert(typeof ListIdMappingWorkflowsOutput$ === "object");
assert(typeof ListIdNamespacesInput$ === "object");
assert(typeof ListIdNamespacesOutput$ === "object");
assert(typeof ListMatchingJobsInput$ === "object");
assert(typeof ListMatchingJobsOutput$ === "object");
assert(typeof ListMatchingWorkflowsInput$ === "object");
assert(typeof ListMatchingWorkflowsOutput$ === "object");
assert(typeof ListProviderServicesInput$ === "object");
assert(typeof ListProviderServicesOutput$ === "object");
assert(typeof ListSchemaMappingsInput$ === "object");
assert(typeof ListSchemaMappingsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof MatchedRecord$ === "object");
assert(typeof MatchGroup$ === "object");
assert(typeof MatchingWorkflowSummary$ === "object");
assert(typeof NamespaceProviderProperties$ === "object");
assert(typeof NamespaceRuleBasedProperties$ === "object");
assert(typeof OutputAttribute$ === "object");
assert(typeof OutputSource$ === "object");
assert(typeof ProviderComponentSchema$ === "object");
assert(typeof ProviderEndpointConfiguration$ === "object");
assert(typeof ProviderIdNameSpaceConfiguration$ === "object");
assert(typeof ProviderIntermediateDataAccessConfiguration$ === "object");
assert(typeof ProviderMarketplaceConfiguration$ === "object");
assert(typeof ProviderProperties$ === "object");
assert(typeof ProviderSchemaAttribute$ === "object");
assert(typeof ProviderServiceSummary$ === "object");
assert(typeof PutPolicyInput$ === "object");
assert(typeof PutPolicyOutput$ === "object");
assert(typeof _Record$ === "object");
assert(typeof ResolutionTechniques$ === "object");
assert(typeof Rule$ === "object");
assert(typeof RuleBasedProperties$ === "object");
assert(typeof RuleCondition$ === "object");
assert(typeof RuleConditionProperties$ === "object");
assert(typeof SchemaInputAttribute$ === "object");
assert(typeof SchemaMappingSummary$ === "object");
assert(typeof StartIdMappingJobInput$ === "object");
assert(typeof StartIdMappingJobOutput$ === "object");
assert(typeof StartMatchingJobInput$ === "object");
assert(typeof StartMatchingJobOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateIdMappingWorkflowInput$ === "object");
assert(typeof UpdateIdMappingWorkflowOutput$ === "object");
assert(typeof UpdateIdNamespaceInput$ === "object");
assert(typeof UpdateIdNamespaceOutput$ === "object");
assert(typeof UpdateMatchingWorkflowInput$ === "object");
assert(typeof UpdateMatchingWorkflowOutput$ === "object");
assert(typeof UpdateSchemaMappingInput$ === "object");
assert(typeof UpdateSchemaMappingOutput$ === "object");
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
assert(AccessDeniedException.prototype instanceof EntityResolutionServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof EntityResolutionServiceException);
assert(typeof ConflictException$ === "object");
assert(ExceedsLimitException.prototype instanceof EntityResolutionServiceException);
assert(typeof ExceedsLimitException$ === "object");
assert(InternalServerException.prototype instanceof EntityResolutionServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof EntityResolutionServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof EntityResolutionServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof EntityResolutionServiceException);
assert(typeof ValidationException$ === "object");
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
