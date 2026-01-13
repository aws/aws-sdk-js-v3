import {
  _InstanceType,
  AccessDeniedException,
  AccessDeniedException$,
  AccessTokenSummary$,
  CodeCatalyst,
  CodeCatalystClient,
  CodeCatalystServiceException,
  ComparisonOperator,
  ConflictException,
  ConflictException$,
  CreateAccessToken$,
  CreateAccessTokenCommand,
  CreateAccessTokenRequest$,
  CreateAccessTokenResponse$,
  CreateDevEnvironment$,
  CreateDevEnvironmentCommand,
  CreateDevEnvironmentRequest$,
  CreateDevEnvironmentResponse$,
  CreateProject$,
  CreateProjectCommand,
  CreateProjectRequest$,
  CreateProjectResponse$,
  CreateSourceRepository$,
  CreateSourceRepositoryBranch$,
  CreateSourceRepositoryBranchCommand,
  CreateSourceRepositoryBranchRequest$,
  CreateSourceRepositoryBranchResponse$,
  CreateSourceRepositoryCommand,
  CreateSourceRepositoryRequest$,
  CreateSourceRepositoryResponse$,
  DeleteAccessToken$,
  DeleteAccessTokenCommand,
  DeleteAccessTokenRequest$,
  DeleteAccessTokenResponse$,
  DeleteDevEnvironment$,
  DeleteDevEnvironmentCommand,
  DeleteDevEnvironmentRequest$,
  DeleteDevEnvironmentResponse$,
  DeleteProject$,
  DeleteProjectCommand,
  DeleteProjectRequest$,
  DeleteProjectResponse$,
  DeleteSourceRepository$,
  DeleteSourceRepositoryCommand,
  DeleteSourceRepositoryRequest$,
  DeleteSourceRepositoryResponse$,
  DeleteSpace$,
  DeleteSpaceCommand,
  DeleteSpaceRequest$,
  DeleteSpaceResponse$,
  DevEnvironmentAccessDetails$,
  DevEnvironmentRepositorySummary$,
  DevEnvironmentSessionConfiguration$,
  DevEnvironmentSessionSummary$,
  DevEnvironmentSessionType,
  DevEnvironmentStatus,
  DevEnvironmentSummary$,
  EmailAddress$,
  EventLogEntry$,
  EventPayload$,
  ExecuteCommandSessionConfiguration$,
  Filter$,
  FilterKey,
  GetDevEnvironment$,
  GetDevEnvironmentCommand,
  GetDevEnvironmentRequest$,
  GetDevEnvironmentResponse$,
  GetProject$,
  GetProjectCommand,
  GetProjectRequest$,
  GetProjectResponse$,
  GetSourceRepository$,
  GetSourceRepositoryCloneUrls$,
  GetSourceRepositoryCloneUrlsCommand,
  GetSourceRepositoryCloneUrlsRequest$,
  GetSourceRepositoryCloneUrlsResponse$,
  GetSourceRepositoryCommand,
  GetSourceRepositoryRequest$,
  GetSourceRepositoryResponse$,
  GetSpace$,
  GetSpaceCommand,
  GetSpaceRequest$,
  GetSpaceResponse$,
  GetSubscription$,
  GetSubscriptionCommand,
  GetSubscriptionRequest$,
  GetSubscriptionResponse$,
  GetUserDetails$,
  GetUserDetailsCommand,
  GetUserDetailsRequest$,
  GetUserDetailsResponse$,
  GetWorkflow$,
  GetWorkflowCommand,
  GetWorkflowRequest$,
  GetWorkflowResponse$,
  GetWorkflowRun$,
  GetWorkflowRunCommand,
  GetWorkflowRunRequest$,
  GetWorkflowRunResponse$,
  Ide$,
  IdeConfiguration$,
  ListAccessTokens$,
  ListAccessTokensCommand,
  ListAccessTokensRequest$,
  ListAccessTokensResponse$,
  ListDevEnvironments$,
  ListDevEnvironmentsCommand,
  ListDevEnvironmentSessions$,
  ListDevEnvironmentSessionsCommand,
  ListDevEnvironmentSessionsRequest$,
  ListDevEnvironmentSessionsResponse$,
  ListDevEnvironmentsRequest$,
  ListDevEnvironmentsResponse$,
  ListEventLogs$,
  ListEventLogsCommand,
  ListEventLogsRequest$,
  ListEventLogsResponse$,
  ListProjects$,
  ListProjectsCommand,
  ListProjectsRequest$,
  ListProjectsResponse$,
  ListSourceRepositories$,
  ListSourceRepositoriesCommand,
  ListSourceRepositoriesItem$,
  ListSourceRepositoriesRequest$,
  ListSourceRepositoriesResponse$,
  ListSourceRepositoryBranches$,
  ListSourceRepositoryBranchesCommand,
  ListSourceRepositoryBranchesItem$,
  ListSourceRepositoryBranchesRequest$,
  ListSourceRepositoryBranchesResponse$,
  ListSpaces$,
  ListSpacesCommand,
  ListSpacesRequest$,
  ListSpacesResponse$,
  ListWorkflowRuns$,
  ListWorkflowRunsCommand,
  ListWorkflowRunsRequest$,
  ListWorkflowRunsResponse$,
  ListWorkflows$,
  ListWorkflowsCommand,
  ListWorkflowsRequest$,
  ListWorkflowsResponse$,
  OperationType,
  paginateListAccessTokens,
  paginateListDevEnvironments,
  paginateListDevEnvironmentSessions,
  paginateListEventLogs,
  paginateListProjects,
  paginateListSourceRepositories,
  paginateListSourceRepositoryBranches,
  paginateListSpaces,
  paginateListWorkflowRuns,
  paginateListWorkflows,
  PersistentStorage$,
  PersistentStorageConfiguration$,
  ProjectInformation$,
  ProjectListFilter$,
  ProjectSummary$,
  RepositoryInput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SpaceSummary$,
  StartDevEnvironment$,
  StartDevEnvironmentCommand,
  StartDevEnvironmentRequest$,
  StartDevEnvironmentResponse$,
  StartDevEnvironmentSession$,
  StartDevEnvironmentSessionCommand,
  StartDevEnvironmentSessionRequest$,
  StartDevEnvironmentSessionResponse$,
  StartWorkflowRun$,
  StartWorkflowRunCommand,
  StartWorkflowRunRequest$,
  StartWorkflowRunResponse$,
  StopDevEnvironment$,
  StopDevEnvironmentCommand,
  StopDevEnvironmentRequest$,
  StopDevEnvironmentResponse$,
  StopDevEnvironmentSession$,
  StopDevEnvironmentSessionCommand,
  StopDevEnvironmentSessionRequest$,
  StopDevEnvironmentSessionResponse$,
  ThrottlingException,
  ThrottlingException$,
  UpdateDevEnvironment$,
  UpdateDevEnvironmentCommand,
  UpdateDevEnvironmentRequest$,
  UpdateDevEnvironmentResponse$,
  UpdateProject$,
  UpdateProjectCommand,
  UpdateProjectRequest$,
  UpdateProjectResponse$,
  UpdateSpace$,
  UpdateSpaceCommand,
  UpdateSpaceRequest$,
  UpdateSpaceResponse$,
  UserIdentity$,
  UserType,
  ValidationException,
  ValidationException$,
  VerifySession$,
  VerifySessionCommand,
  VerifySessionResponse$,
  WorkflowDefinition$,
  WorkflowDefinitionSummary$,
  WorkflowRunMode,
  WorkflowRunSortCriteria$,
  WorkflowRunStatus,
  WorkflowRunStatusReason$,
  WorkflowRunSummary$,
  WorkflowSortCriteria$,
  WorkflowStatus,
  WorkflowSummary$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeCatalystClient === "function");
assert(typeof CodeCatalyst === "function");
// commands
assert(typeof CreateAccessTokenCommand === "function");
assert(typeof CreateAccessToken$ === "object");
assert(typeof CreateDevEnvironmentCommand === "function");
assert(typeof CreateDevEnvironment$ === "object");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateProject$ === "object");
assert(typeof CreateSourceRepositoryCommand === "function");
assert(typeof CreateSourceRepository$ === "object");
assert(typeof CreateSourceRepositoryBranchCommand === "function");
assert(typeof CreateSourceRepositoryBranch$ === "object");
assert(typeof DeleteAccessTokenCommand === "function");
assert(typeof DeleteAccessToken$ === "object");
assert(typeof DeleteDevEnvironmentCommand === "function");
assert(typeof DeleteDevEnvironment$ === "object");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteProject$ === "object");
assert(typeof DeleteSourceRepositoryCommand === "function");
assert(typeof DeleteSourceRepository$ === "object");
assert(typeof DeleteSpaceCommand === "function");
assert(typeof DeleteSpace$ === "object");
assert(typeof GetDevEnvironmentCommand === "function");
assert(typeof GetDevEnvironment$ === "object");
assert(typeof GetProjectCommand === "function");
assert(typeof GetProject$ === "object");
assert(typeof GetSourceRepositoryCommand === "function");
assert(typeof GetSourceRepository$ === "object");
assert(typeof GetSourceRepositoryCloneUrlsCommand === "function");
assert(typeof GetSourceRepositoryCloneUrls$ === "object");
assert(typeof GetSpaceCommand === "function");
assert(typeof GetSpace$ === "object");
assert(typeof GetSubscriptionCommand === "function");
assert(typeof GetSubscription$ === "object");
assert(typeof GetUserDetailsCommand === "function");
assert(typeof GetUserDetails$ === "object");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflow$ === "object");
assert(typeof GetWorkflowRunCommand === "function");
assert(typeof GetWorkflowRun$ === "object");
assert(typeof ListAccessTokensCommand === "function");
assert(typeof ListAccessTokens$ === "object");
assert(typeof ListDevEnvironmentsCommand === "function");
assert(typeof ListDevEnvironments$ === "object");
assert(typeof ListDevEnvironmentSessionsCommand === "function");
assert(typeof ListDevEnvironmentSessions$ === "object");
assert(typeof ListEventLogsCommand === "function");
assert(typeof ListEventLogs$ === "object");
assert(typeof ListProjectsCommand === "function");
assert(typeof ListProjects$ === "object");
assert(typeof ListSourceRepositoriesCommand === "function");
assert(typeof ListSourceRepositories$ === "object");
assert(typeof ListSourceRepositoryBranchesCommand === "function");
assert(typeof ListSourceRepositoryBranches$ === "object");
assert(typeof ListSpacesCommand === "function");
assert(typeof ListSpaces$ === "object");
assert(typeof ListWorkflowRunsCommand === "function");
assert(typeof ListWorkflowRuns$ === "object");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ListWorkflows$ === "object");
assert(typeof StartDevEnvironmentCommand === "function");
assert(typeof StartDevEnvironment$ === "object");
assert(typeof StartDevEnvironmentSessionCommand === "function");
assert(typeof StartDevEnvironmentSession$ === "object");
assert(typeof StartWorkflowRunCommand === "function");
assert(typeof StartWorkflowRun$ === "object");
assert(typeof StopDevEnvironmentCommand === "function");
assert(typeof StopDevEnvironment$ === "object");
assert(typeof StopDevEnvironmentSessionCommand === "function");
assert(typeof StopDevEnvironmentSession$ === "object");
assert(typeof UpdateDevEnvironmentCommand === "function");
assert(typeof UpdateDevEnvironment$ === "object");
assert(typeof UpdateProjectCommand === "function");
assert(typeof UpdateProject$ === "object");
assert(typeof UpdateSpaceCommand === "function");
assert(typeof UpdateSpace$ === "object");
assert(typeof VerifySessionCommand === "function");
assert(typeof VerifySession$ === "object");
// structural schemas
assert(typeof AccessTokenSummary$ === "object");
assert(typeof CreateAccessTokenRequest$ === "object");
assert(typeof CreateAccessTokenResponse$ === "object");
assert(typeof CreateDevEnvironmentRequest$ === "object");
assert(typeof CreateDevEnvironmentResponse$ === "object");
assert(typeof CreateProjectRequest$ === "object");
assert(typeof CreateProjectResponse$ === "object");
assert(typeof CreateSourceRepositoryBranchRequest$ === "object");
assert(typeof CreateSourceRepositoryBranchResponse$ === "object");
assert(typeof CreateSourceRepositoryRequest$ === "object");
assert(typeof CreateSourceRepositoryResponse$ === "object");
assert(typeof DeleteAccessTokenRequest$ === "object");
assert(typeof DeleteAccessTokenResponse$ === "object");
assert(typeof DeleteDevEnvironmentRequest$ === "object");
assert(typeof DeleteDevEnvironmentResponse$ === "object");
assert(typeof DeleteProjectRequest$ === "object");
assert(typeof DeleteProjectResponse$ === "object");
assert(typeof DeleteSourceRepositoryRequest$ === "object");
assert(typeof DeleteSourceRepositoryResponse$ === "object");
assert(typeof DeleteSpaceRequest$ === "object");
assert(typeof DeleteSpaceResponse$ === "object");
assert(typeof DevEnvironmentAccessDetails$ === "object");
assert(typeof DevEnvironmentRepositorySummary$ === "object");
assert(typeof DevEnvironmentSessionConfiguration$ === "object");
assert(typeof DevEnvironmentSessionSummary$ === "object");
assert(typeof DevEnvironmentSummary$ === "object");
assert(typeof EmailAddress$ === "object");
assert(typeof EventLogEntry$ === "object");
assert(typeof EventPayload$ === "object");
assert(typeof ExecuteCommandSessionConfiguration$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetDevEnvironmentRequest$ === "object");
assert(typeof GetDevEnvironmentResponse$ === "object");
assert(typeof GetProjectRequest$ === "object");
assert(typeof GetProjectResponse$ === "object");
assert(typeof GetSourceRepositoryCloneUrlsRequest$ === "object");
assert(typeof GetSourceRepositoryCloneUrlsResponse$ === "object");
assert(typeof GetSourceRepositoryRequest$ === "object");
assert(typeof GetSourceRepositoryResponse$ === "object");
assert(typeof GetSpaceRequest$ === "object");
assert(typeof GetSpaceResponse$ === "object");
assert(typeof GetSubscriptionRequest$ === "object");
assert(typeof GetSubscriptionResponse$ === "object");
assert(typeof GetUserDetailsRequest$ === "object");
assert(typeof GetUserDetailsResponse$ === "object");
assert(typeof GetWorkflowRequest$ === "object");
assert(typeof GetWorkflowResponse$ === "object");
assert(typeof GetWorkflowRunRequest$ === "object");
assert(typeof GetWorkflowRunResponse$ === "object");
assert(typeof Ide$ === "object");
assert(typeof IdeConfiguration$ === "object");
assert(typeof ListAccessTokensRequest$ === "object");
assert(typeof ListAccessTokensResponse$ === "object");
assert(typeof ListDevEnvironmentSessionsRequest$ === "object");
assert(typeof ListDevEnvironmentSessionsResponse$ === "object");
assert(typeof ListDevEnvironmentsRequest$ === "object");
assert(typeof ListDevEnvironmentsResponse$ === "object");
assert(typeof ListEventLogsRequest$ === "object");
assert(typeof ListEventLogsResponse$ === "object");
assert(typeof ListProjectsRequest$ === "object");
assert(typeof ListProjectsResponse$ === "object");
assert(typeof ListSourceRepositoriesItem$ === "object");
assert(typeof ListSourceRepositoriesRequest$ === "object");
assert(typeof ListSourceRepositoriesResponse$ === "object");
assert(typeof ListSourceRepositoryBranchesItem$ === "object");
assert(typeof ListSourceRepositoryBranchesRequest$ === "object");
assert(typeof ListSourceRepositoryBranchesResponse$ === "object");
assert(typeof ListSpacesRequest$ === "object");
assert(typeof ListSpacesResponse$ === "object");
assert(typeof ListWorkflowRunsRequest$ === "object");
assert(typeof ListWorkflowRunsResponse$ === "object");
assert(typeof ListWorkflowsRequest$ === "object");
assert(typeof ListWorkflowsResponse$ === "object");
assert(typeof PersistentStorage$ === "object");
assert(typeof PersistentStorageConfiguration$ === "object");
assert(typeof ProjectInformation$ === "object");
assert(typeof ProjectListFilter$ === "object");
assert(typeof ProjectSummary$ === "object");
assert(typeof RepositoryInput$ === "object");
assert(typeof SpaceSummary$ === "object");
assert(typeof StartDevEnvironmentRequest$ === "object");
assert(typeof StartDevEnvironmentResponse$ === "object");
assert(typeof StartDevEnvironmentSessionRequest$ === "object");
assert(typeof StartDevEnvironmentSessionResponse$ === "object");
assert(typeof StartWorkflowRunRequest$ === "object");
assert(typeof StartWorkflowRunResponse$ === "object");
assert(typeof StopDevEnvironmentRequest$ === "object");
assert(typeof StopDevEnvironmentResponse$ === "object");
assert(typeof StopDevEnvironmentSessionRequest$ === "object");
assert(typeof StopDevEnvironmentSessionResponse$ === "object");
assert(typeof UpdateDevEnvironmentRequest$ === "object");
assert(typeof UpdateDevEnvironmentResponse$ === "object");
assert(typeof UpdateProjectRequest$ === "object");
assert(typeof UpdateProjectResponse$ === "object");
assert(typeof UpdateSpaceRequest$ === "object");
assert(typeof UpdateSpaceResponse$ === "object");
assert(typeof UserIdentity$ === "object");
assert(typeof VerifySessionResponse$ === "object");
assert(typeof WorkflowDefinition$ === "object");
assert(typeof WorkflowDefinitionSummary$ === "object");
assert(typeof WorkflowRunSortCriteria$ === "object");
assert(typeof WorkflowRunStatusReason$ === "object");
assert(typeof WorkflowRunSummary$ === "object");
assert(typeof WorkflowSortCriteria$ === "object");
assert(typeof WorkflowSummary$ === "object");
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
assert(AccessDeniedException.prototype instanceof CodeCatalystServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof CodeCatalystServiceException);
assert(typeof ConflictException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CodeCatalystServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof CodeCatalystServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof CodeCatalystServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof CodeCatalystServiceException);
assert(typeof ValidationException$ === "object");
assert(CodeCatalystServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccessTokens === "function");
assert(typeof paginateListDevEnvironmentSessions === "function");
assert(typeof paginateListDevEnvironments === "function");
assert(typeof paginateListEventLogs === "function");
assert(typeof paginateListProjects === "function");
assert(typeof paginateListSourceRepositories === "function");
assert(typeof paginateListSourceRepositoryBranches === "function");
assert(typeof paginateListSpaces === "function");
assert(typeof paginateListWorkflowRuns === "function");
assert(typeof paginateListWorkflows === "function");
console.log(`CodeCatalyst index test passed.`);
