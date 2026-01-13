import {
  AccessDeniedException,
  AccessDeniedException$,
  ConflictException,
  ConflictException$,
  CreateMigrationWorkflowRequest$,
  CreateMigrationWorkflowResponse$,
  CreateTemplate$,
  CreateTemplateCommand,
  CreateTemplateRequest$,
  CreateTemplateResponse$,
  CreateWorkflow$,
  CreateWorkflowCommand,
  CreateWorkflowStep$,
  CreateWorkflowStepCommand,
  CreateWorkflowStepGroup$,
  CreateWorkflowStepGroupCommand,
  CreateWorkflowStepGroupRequest$,
  CreateWorkflowStepGroupResponse$,
  CreateWorkflowStepRequest$,
  CreateWorkflowStepResponse$,
  DataType,
  DeleteMigrationWorkflowRequest$,
  DeleteMigrationWorkflowResponse$,
  DeleteTemplate$,
  DeleteTemplateCommand,
  DeleteTemplateRequest$,
  DeleteTemplateResponse$,
  DeleteWorkflow$,
  DeleteWorkflowCommand,
  DeleteWorkflowStep$,
  DeleteWorkflowStepCommand,
  DeleteWorkflowStepGroup$,
  DeleteWorkflowStepGroupCommand,
  DeleteWorkflowStepGroupRequest$,
  DeleteWorkflowStepGroupResponse$,
  DeleteWorkflowStepRequest$,
  DeleteWorkflowStepResponse$,
  GetMigrationWorkflowRequest$,
  GetMigrationWorkflowResponse$,
  GetMigrationWorkflowTemplateRequest$,
  GetMigrationWorkflowTemplateResponse$,
  GetTemplate$,
  GetTemplateCommand,
  GetTemplateStep$,
  GetTemplateStepCommand,
  GetTemplateStepGroup$,
  GetTemplateStepGroupCommand,
  GetTemplateStepGroupRequest$,
  GetTemplateStepGroupResponse$,
  GetTemplateStepRequest$,
  GetTemplateStepResponse$,
  GetWorkflow$,
  GetWorkflowCommand,
  GetWorkflowStep$,
  GetWorkflowStepCommand,
  GetWorkflowStepGroup$,
  GetWorkflowStepGroupCommand,
  GetWorkflowStepGroupRequest$,
  GetWorkflowStepGroupResponse$,
  GetWorkflowStepRequest$,
  GetWorkflowStepResponse$,
  InternalServerException,
  InternalServerException$,
  ListMigrationWorkflowsRequest$,
  ListMigrationWorkflowsResponse$,
  ListMigrationWorkflowTemplatesRequest$,
  ListMigrationWorkflowTemplatesResponse$,
  ListPlugins$,
  ListPluginsCommand,
  ListPluginsRequest$,
  ListPluginsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTemplates$,
  ListTemplatesCommand,
  ListTemplateStepGroups$,
  ListTemplateStepGroupsCommand,
  ListTemplateStepGroupsRequest$,
  ListTemplateStepGroupsResponse$,
  ListTemplateSteps$,
  ListTemplateStepsCommand,
  ListTemplateStepsRequest$,
  ListTemplateStepsResponse$,
  ListWorkflows$,
  ListWorkflowsCommand,
  ListWorkflowStepGroups$,
  ListWorkflowStepGroupsCommand,
  ListWorkflowStepGroupsRequest$,
  ListWorkflowStepGroupsResponse$,
  ListWorkflowSteps$,
  ListWorkflowStepsCommand,
  ListWorkflowStepsRequest$,
  ListWorkflowStepsResponse$,
  MigrationHubOrchestrator,
  MigrationHubOrchestratorClient,
  MigrationHubOrchestratorServiceException,
  MigrationWorkflowStatusEnum,
  MigrationWorkflowSummary$,
  Owner,
  paginateListPlugins,
  paginateListTemplates,
  paginateListTemplateStepGroups,
  paginateListTemplateSteps,
  paginateListWorkflows,
  paginateListWorkflowStepGroups,
  paginateListWorkflowSteps,
  PlatformCommand$,
  PlatformScriptKey$,
  PluginHealth,
  PluginSummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetryWorkflowStep$,
  RetryWorkflowStepCommand,
  RetryWorkflowStepRequest$,
  RetryWorkflowStepResponse$,
  RunEnvironment,
  StartMigrationWorkflowRequest$,
  StartMigrationWorkflowResponse$,
  StartWorkflow$,
  StartWorkflowCommand,
  StepActionType,
  StepAutomationConfiguration$,
  StepGroupStatus,
  StepInput$,
  StepOutput$,
  StepStatus,
  StopMigrationWorkflowRequest$,
  StopMigrationWorkflowResponse$,
  StopWorkflow$,
  StopWorkflowCommand,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetType,
  TemplateInput$,
  TemplateSource$,
  TemplateStatus,
  TemplateStepGroupSummary$,
  TemplateStepSummary$,
  TemplateSummary$,
  ThrottlingException,
  ThrottlingException$,
  Tool$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateMigrationWorkflowRequest$,
  UpdateMigrationWorkflowResponse$,
  UpdateTemplate$,
  UpdateTemplateCommand,
  UpdateTemplateRequest$,
  UpdateTemplateResponse$,
  UpdateWorkflow$,
  UpdateWorkflowCommand,
  UpdateWorkflowStep$,
  UpdateWorkflowStepCommand,
  UpdateWorkflowStepGroup$,
  UpdateWorkflowStepGroupCommand,
  UpdateWorkflowStepGroupRequest$,
  UpdateWorkflowStepGroupResponse$,
  UpdateWorkflowStepRequest$,
  UpdateWorkflowStepResponse$,
  ValidationException,
  ValidationException$,
  WorkflowStepAutomationConfiguration$,
  WorkflowStepGroupSummary$,
  WorkflowStepOutput$,
  WorkflowStepOutputUnion$,
  WorkflowStepSummary$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MigrationHubOrchestratorClient === "function");
assert(typeof MigrationHubOrchestrator === "function");
// commands
assert(typeof CreateTemplateCommand === "function");
assert(typeof CreateTemplate$ === "object");
assert(typeof CreateWorkflowCommand === "function");
assert(typeof CreateWorkflow$ === "object");
assert(typeof CreateWorkflowStepCommand === "function");
assert(typeof CreateWorkflowStep$ === "object");
assert(typeof CreateWorkflowStepGroupCommand === "function");
assert(typeof CreateWorkflowStepGroup$ === "object");
assert(typeof DeleteTemplateCommand === "function");
assert(typeof DeleteTemplate$ === "object");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DeleteWorkflow$ === "object");
assert(typeof DeleteWorkflowStepCommand === "function");
assert(typeof DeleteWorkflowStep$ === "object");
assert(typeof DeleteWorkflowStepGroupCommand === "function");
assert(typeof DeleteWorkflowStepGroup$ === "object");
assert(typeof GetTemplateCommand === "function");
assert(typeof GetTemplate$ === "object");
assert(typeof GetTemplateStepCommand === "function");
assert(typeof GetTemplateStep$ === "object");
assert(typeof GetTemplateStepGroupCommand === "function");
assert(typeof GetTemplateStepGroup$ === "object");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflow$ === "object");
assert(typeof GetWorkflowStepCommand === "function");
assert(typeof GetWorkflowStep$ === "object");
assert(typeof GetWorkflowStepGroupCommand === "function");
assert(typeof GetWorkflowStepGroup$ === "object");
assert(typeof ListPluginsCommand === "function");
assert(typeof ListPlugins$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTemplatesCommand === "function");
assert(typeof ListTemplates$ === "object");
assert(typeof ListTemplateStepGroupsCommand === "function");
assert(typeof ListTemplateStepGroups$ === "object");
assert(typeof ListTemplateStepsCommand === "function");
assert(typeof ListTemplateSteps$ === "object");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ListWorkflows$ === "object");
assert(typeof ListWorkflowStepGroupsCommand === "function");
assert(typeof ListWorkflowStepGroups$ === "object");
assert(typeof ListWorkflowStepsCommand === "function");
assert(typeof ListWorkflowSteps$ === "object");
assert(typeof RetryWorkflowStepCommand === "function");
assert(typeof RetryWorkflowStep$ === "object");
assert(typeof StartWorkflowCommand === "function");
assert(typeof StartWorkflow$ === "object");
assert(typeof StopWorkflowCommand === "function");
assert(typeof StopWorkflow$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateTemplateCommand === "function");
assert(typeof UpdateTemplate$ === "object");
assert(typeof UpdateWorkflowCommand === "function");
assert(typeof UpdateWorkflow$ === "object");
assert(typeof UpdateWorkflowStepCommand === "function");
assert(typeof UpdateWorkflowStep$ === "object");
assert(typeof UpdateWorkflowStepGroupCommand === "function");
assert(typeof UpdateWorkflowStepGroup$ === "object");
// structural schemas
assert(typeof CreateMigrationWorkflowRequest$ === "object");
assert(typeof CreateMigrationWorkflowResponse$ === "object");
assert(typeof CreateTemplateRequest$ === "object");
assert(typeof CreateTemplateResponse$ === "object");
assert(typeof CreateWorkflowStepGroupRequest$ === "object");
assert(typeof CreateWorkflowStepGroupResponse$ === "object");
assert(typeof CreateWorkflowStepRequest$ === "object");
assert(typeof CreateWorkflowStepResponse$ === "object");
assert(typeof DeleteMigrationWorkflowRequest$ === "object");
assert(typeof DeleteMigrationWorkflowResponse$ === "object");
assert(typeof DeleteTemplateRequest$ === "object");
assert(typeof DeleteTemplateResponse$ === "object");
assert(typeof DeleteWorkflowStepGroupRequest$ === "object");
assert(typeof DeleteWorkflowStepGroupResponse$ === "object");
assert(typeof DeleteWorkflowStepRequest$ === "object");
assert(typeof DeleteWorkflowStepResponse$ === "object");
assert(typeof GetMigrationWorkflowRequest$ === "object");
assert(typeof GetMigrationWorkflowResponse$ === "object");
assert(typeof GetMigrationWorkflowTemplateRequest$ === "object");
assert(typeof GetMigrationWorkflowTemplateResponse$ === "object");
assert(typeof GetTemplateStepGroupRequest$ === "object");
assert(typeof GetTemplateStepGroupResponse$ === "object");
assert(typeof GetTemplateStepRequest$ === "object");
assert(typeof GetTemplateStepResponse$ === "object");
assert(typeof GetWorkflowStepGroupRequest$ === "object");
assert(typeof GetWorkflowStepGroupResponse$ === "object");
assert(typeof GetWorkflowStepRequest$ === "object");
assert(typeof GetWorkflowStepResponse$ === "object");
assert(typeof ListMigrationWorkflowsRequest$ === "object");
assert(typeof ListMigrationWorkflowsResponse$ === "object");
assert(typeof ListMigrationWorkflowTemplatesRequest$ === "object");
assert(typeof ListMigrationWorkflowTemplatesResponse$ === "object");
assert(typeof ListPluginsRequest$ === "object");
assert(typeof ListPluginsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTemplateStepGroupsRequest$ === "object");
assert(typeof ListTemplateStepGroupsResponse$ === "object");
assert(typeof ListTemplateStepsRequest$ === "object");
assert(typeof ListTemplateStepsResponse$ === "object");
assert(typeof ListWorkflowStepGroupsRequest$ === "object");
assert(typeof ListWorkflowStepGroupsResponse$ === "object");
assert(typeof ListWorkflowStepsRequest$ === "object");
assert(typeof ListWorkflowStepsResponse$ === "object");
assert(typeof MigrationWorkflowSummary$ === "object");
assert(typeof PlatformCommand$ === "object");
assert(typeof PlatformScriptKey$ === "object");
assert(typeof PluginSummary$ === "object");
assert(typeof RetryWorkflowStepRequest$ === "object");
assert(typeof RetryWorkflowStepResponse$ === "object");
assert(typeof StartMigrationWorkflowRequest$ === "object");
assert(typeof StartMigrationWorkflowResponse$ === "object");
assert(typeof StepAutomationConfiguration$ === "object");
assert(typeof StepInput$ === "object");
assert(typeof StepOutput$ === "object");
assert(typeof StopMigrationWorkflowRequest$ === "object");
assert(typeof StopMigrationWorkflowResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TemplateInput$ === "object");
assert(typeof TemplateSource$ === "object");
assert(typeof TemplateStepGroupSummary$ === "object");
assert(typeof TemplateStepSummary$ === "object");
assert(typeof TemplateSummary$ === "object");
assert(typeof Tool$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateMigrationWorkflowRequest$ === "object");
assert(typeof UpdateMigrationWorkflowResponse$ === "object");
assert(typeof UpdateTemplateRequest$ === "object");
assert(typeof UpdateTemplateResponse$ === "object");
assert(typeof UpdateWorkflowStepGroupRequest$ === "object");
assert(typeof UpdateWorkflowStepGroupResponse$ === "object");
assert(typeof UpdateWorkflowStepRequest$ === "object");
assert(typeof UpdateWorkflowStepResponse$ === "object");
assert(typeof WorkflowStepAutomationConfiguration$ === "object");
assert(typeof WorkflowStepGroupSummary$ === "object");
assert(typeof WorkflowStepOutput$ === "object");
assert(typeof WorkflowStepOutputUnion$ === "object");
assert(typeof WorkflowStepSummary$ === "object");
// enums
assert(typeof DataType === "object");
assert(typeof MigrationWorkflowStatusEnum === "object");
assert(typeof Owner === "object");
assert(typeof PluginHealth === "object");
assert(typeof RunEnvironment === "object");
assert(typeof StepActionType === "object");
assert(typeof StepGroupStatus === "object");
assert(typeof StepStatus === "object");
assert(typeof TargetType === "object");
assert(typeof TemplateStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof MigrationHubOrchestratorServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof MigrationHubOrchestratorServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof MigrationHubOrchestratorServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MigrationHubOrchestratorServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof MigrationHubOrchestratorServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MigrationHubOrchestratorServiceException);
assert(typeof ValidationException$ === "object");
assert(MigrationHubOrchestratorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListPlugins === "function");
assert(typeof paginateListTemplateStepGroups === "function");
assert(typeof paginateListTemplateSteps === "function");
assert(typeof paginateListTemplates === "function");
assert(typeof paginateListWorkflowStepGroups === "function");
assert(typeof paginateListWorkflowSteps === "function");
assert(typeof paginateListWorkflows === "function");
console.log(`MigrationHubOrchestrator index test passed.`);
