import {
  CreateTemplateCommand,
  CreateWorkflowCommand,
  CreateWorkflowStepCommand,
  CreateWorkflowStepGroupCommand,
  DataType,
  DeleteTemplateCommand,
  DeleteWorkflowCommand,
  DeleteWorkflowStepCommand,
  DeleteWorkflowStepGroupCommand,
  GetTemplateCommand,
  GetTemplateStepCommand,
  GetTemplateStepGroupCommand,
  GetWorkflowCommand,
  GetWorkflowStepCommand,
  GetWorkflowStepGroupCommand,
  ListPluginsCommand,
  ListTagsForResourceCommand,
  ListTemplateStepGroupsCommand,
  ListTemplateStepsCommand,
  ListTemplatesCommand,
  ListWorkflowStepGroupsCommand,
  ListWorkflowStepsCommand,
  ListWorkflowsCommand,
  MigrationHubOrchestrator,
  MigrationHubOrchestratorClient,
  MigrationHubOrchestratorServiceException,
  MigrationWorkflowStatusEnum,
  Owner,
  PluginHealth,
  RetryWorkflowStepCommand,
  RunEnvironment,
  StartWorkflowCommand,
  StepActionType,
  StepGroupStatus,
  StepStatus,
  StopWorkflowCommand,
  TagResourceCommand,
  TargetType,
  TemplateStatus,
  UntagResourceCommand,
  UpdateTemplateCommand,
  UpdateWorkflowCommand,
  UpdateWorkflowStepCommand,
  UpdateWorkflowStepGroupCommand,
  paginateListPlugins,
  paginateListTemplateStepGroups,
  paginateListTemplateSteps,
  paginateListTemplates,
  paginateListWorkflowStepGroups,
  paginateListWorkflowSteps,
  paginateListWorkflows,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MigrationHubOrchestratorClient === "function");
assert(typeof MigrationHubOrchestrator === "function");
// commands
assert(typeof CreateTemplateCommand === "function");
assert(typeof CreateWorkflowCommand === "function");
assert(typeof CreateWorkflowStepCommand === "function");
assert(typeof CreateWorkflowStepGroupCommand === "function");
assert(typeof DeleteTemplateCommand === "function");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DeleteWorkflowStepCommand === "function");
assert(typeof DeleteWorkflowStepGroupCommand === "function");
assert(typeof GetTemplateCommand === "function");
assert(typeof GetTemplateStepCommand === "function");
assert(typeof GetTemplateStepGroupCommand === "function");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflowStepCommand === "function");
assert(typeof GetWorkflowStepGroupCommand === "function");
assert(typeof ListPluginsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTemplatesCommand === "function");
assert(typeof ListTemplateStepGroupsCommand === "function");
assert(typeof ListTemplateStepsCommand === "function");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ListWorkflowStepGroupsCommand === "function");
assert(typeof ListWorkflowStepsCommand === "function");
assert(typeof RetryWorkflowStepCommand === "function");
assert(typeof StartWorkflowCommand === "function");
assert(typeof StopWorkflowCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateTemplateCommand === "function");
assert(typeof UpdateWorkflowCommand === "function");
assert(typeof UpdateWorkflowStepCommand === "function");
assert(typeof UpdateWorkflowStepGroupCommand === "function");
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
