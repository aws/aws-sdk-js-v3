import {
  CodeCatalyst,
  CodeCatalystClient,
  CodeCatalystServiceException,
  ComparisonOperator,
  CreateAccessTokenCommand,
  CreateDevEnvironmentCommand,
  CreateProjectCommand,
  CreateSourceRepositoryBranchCommand,
  CreateSourceRepositoryCommand,
  DeleteAccessTokenCommand,
  DeleteDevEnvironmentCommand,
  DeleteProjectCommand,
  DeleteSourceRepositoryCommand,
  DeleteSpaceCommand,
  DevEnvironmentSessionType,
  DevEnvironmentStatus,
  FilterKey,
  GetDevEnvironmentCommand,
  GetProjectCommand,
  GetSourceRepositoryCloneUrlsCommand,
  GetSourceRepositoryCommand,
  GetSpaceCommand,
  GetSubscriptionCommand,
  GetUserDetailsCommand,
  GetWorkflowCommand,
  GetWorkflowRunCommand,
  ListAccessTokensCommand,
  ListDevEnvironmentSessionsCommand,
  ListDevEnvironmentsCommand,
  ListEventLogsCommand,
  ListProjectsCommand,
  ListSourceRepositoriesCommand,
  ListSourceRepositoryBranchesCommand,
  ListSpacesCommand,
  ListWorkflowRunsCommand,
  ListWorkflowsCommand,
  OperationType,
  StartDevEnvironmentCommand,
  StartDevEnvironmentSessionCommand,
  StartWorkflowRunCommand,
  StopDevEnvironmentCommand,
  StopDevEnvironmentSessionCommand,
  UpdateDevEnvironmentCommand,
  UpdateProjectCommand,
  UpdateSpaceCommand,
  UserType,
  VerifySessionCommand,
  WorkflowRunMode,
  WorkflowRunStatus,
  WorkflowStatus,
  _InstanceType,
  paginateListAccessTokens,
  paginateListDevEnvironmentSessions,
  paginateListDevEnvironments,
  paginateListEventLogs,
  paginateListProjects,
  paginateListSourceRepositories,
  paginateListSourceRepositoryBranches,
  paginateListSpaces,
  paginateListWorkflowRuns,
  paginateListWorkflows,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeCatalystClient === "function")
assert(typeof CodeCatalyst === "function")
// commands
assert(typeof CreateAccessTokenCommand === "function")
assert(typeof CreateDevEnvironmentCommand === "function")
assert(typeof CreateProjectCommand === "function")
assert(typeof CreateSourceRepositoryCommand === "function")
assert(typeof CreateSourceRepositoryBranchCommand === "function")
assert(typeof DeleteAccessTokenCommand === "function")
assert(typeof DeleteDevEnvironmentCommand === "function")
assert(typeof DeleteProjectCommand === "function")
assert(typeof DeleteSourceRepositoryCommand === "function")
assert(typeof DeleteSpaceCommand === "function")
assert(typeof GetDevEnvironmentCommand === "function")
assert(typeof GetProjectCommand === "function")
assert(typeof GetSourceRepositoryCommand === "function")
assert(typeof GetSourceRepositoryCloneUrlsCommand === "function")
assert(typeof GetSpaceCommand === "function")
assert(typeof GetSubscriptionCommand === "function")
assert(typeof GetUserDetailsCommand === "function")
assert(typeof GetWorkflowCommand === "function")
assert(typeof GetWorkflowRunCommand === "function")
assert(typeof ListAccessTokensCommand === "function")
assert(typeof ListDevEnvironmentsCommand === "function")
assert(typeof ListDevEnvironmentSessionsCommand === "function")
assert(typeof ListEventLogsCommand === "function")
assert(typeof ListProjectsCommand === "function")
assert(typeof ListSourceRepositoriesCommand === "function")
assert(typeof ListSourceRepositoryBranchesCommand === "function")
assert(typeof ListSpacesCommand === "function")
assert(typeof ListWorkflowRunsCommand === "function")
assert(typeof ListWorkflowsCommand === "function")
assert(typeof StartDevEnvironmentCommand === "function")
assert(typeof StartDevEnvironmentSessionCommand === "function")
assert(typeof StartWorkflowRunCommand === "function")
assert(typeof StopDevEnvironmentCommand === "function")
assert(typeof StopDevEnvironmentSessionCommand === "function")
assert(typeof UpdateDevEnvironmentCommand === "function")
assert(typeof UpdateProjectCommand === "function")
assert(typeof UpdateSpaceCommand === "function")
assert(typeof VerifySessionCommand === "function")
// enums
assert(typeof ComparisonOperator === "object");
assert(typeof DevEnvironmentSessionType === "object");
assert(typeof DevEnvironmentStatus === "object");
assert(typeof FilterKey === "object");
assert(typeof _InstanceType === "object");
assert(typeof OperationType === "object");
assert(typeof UserType === "object");
assert(typeof WorkflowRunMode === "object");
assert(typeof WorkflowRunStatus === "object");
assert(typeof WorkflowStatus === "object");
// errors
assert(CodeCatalystServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListAccessTokens === "function")
assert(typeof paginateListDevEnvironmentSessions === "function")
assert(typeof paginateListDevEnvironments === "function")
assert(typeof paginateListEventLogs === "function")
assert(typeof paginateListProjects === "function")
assert(typeof paginateListSourceRepositories === "function")
assert(typeof paginateListSourceRepositoryBranches === "function")
assert(typeof paginateListSpaces === "function")
assert(typeof paginateListWorkflowRuns === "function")
assert(typeof paginateListWorkflows === "function")
console.log(`CodeCatalyst index test passed.`);
