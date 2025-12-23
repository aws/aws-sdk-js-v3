import {
  AccountLimitExceededException,
  AccountLimitExceededException$,
  AccountSuspendedException,
  AccountSuspendedException$,
  ArtifactNamespace,
  ArtifactPackaging,
  ArtifactsType,
  AuthType,
  AutoRetryConfig$,
  BatchDeleteBuilds$,
  BatchDeleteBuildsCommand,
  BatchDeleteBuildsInput$,
  BatchDeleteBuildsOutput$,
  BatchGetBuildBatches$,
  BatchGetBuildBatchesCommand,
  BatchGetBuildBatchesInput$,
  BatchGetBuildBatchesOutput$,
  BatchGetBuilds$,
  BatchGetBuildsCommand,
  BatchGetBuildsInput$,
  BatchGetBuildsOutput$,
  BatchGetCommandExecutions$,
  BatchGetCommandExecutionsCommand,
  BatchGetCommandExecutionsInput$,
  BatchGetCommandExecutionsOutput$,
  BatchGetFleets$,
  BatchGetFleetsCommand,
  BatchGetFleetsInput$,
  BatchGetFleetsOutput$,
  BatchGetProjects$,
  BatchGetProjectsCommand,
  BatchGetProjectsInput$,
  BatchGetProjectsOutput$,
  BatchGetReportGroups$,
  BatchGetReportGroupsCommand,
  BatchGetReportGroupsInput$,
  BatchGetReportGroupsOutput$,
  BatchGetReports$,
  BatchGetReportsCommand,
  BatchGetReportsInput$,
  BatchGetReportsOutput$,
  BatchGetSandboxes$,
  BatchGetSandboxesCommand,
  BatchGetSandboxesInput$,
  BatchGetSandboxesOutput$,
  BatchReportModeType,
  BatchRestrictions$,
  BucketOwnerAccess,
  Build$,
  BuildArtifacts$,
  BuildBatch$,
  BuildBatchFilter$,
  BuildBatchPhase$,
  BuildBatchPhaseType,
  BuildGroup$,
  BuildNotDeleted$,
  BuildPhase$,
  BuildPhaseType,
  BuildStatusConfig$,
  BuildSummary$,
  CacheMode,
  CacheType,
  CloudWatchLogsConfig$,
  CodeBuild,
  CodeBuildClient,
  CodeBuildServiceException,
  CodeCoverage$,
  CodeCoverageReportSummary$,
  CommandExecution$,
  CommandType,
  ComputeConfiguration$,
  ComputeType,
  CreateFleet$,
  CreateFleetCommand,
  CreateFleetInput$,
  CreateFleetOutput$,
  CreateProject$,
  CreateProjectCommand,
  CreateProjectInput$,
  CreateProjectOutput$,
  CreateReportGroup$,
  CreateReportGroupCommand,
  CreateReportGroupInput$,
  CreateReportGroupOutput$,
  CreateWebhook$,
  CreateWebhookCommand,
  CreateWebhookInput$,
  CreateWebhookOutput$,
  CredentialProviderType,
  DebugSession$,
  DeleteBuildBatch$,
  DeleteBuildBatchCommand,
  DeleteBuildBatchInput$,
  DeleteBuildBatchOutput$,
  DeleteFleet$,
  DeleteFleetCommand,
  DeleteFleetInput$,
  DeleteFleetOutput$,
  DeleteProject$,
  DeleteProjectCommand,
  DeleteProjectInput$,
  DeleteProjectOutput$,
  DeleteReport$,
  DeleteReportCommand,
  DeleteReportGroup$,
  DeleteReportGroupCommand,
  DeleteReportGroupInput$,
  DeleteReportGroupOutput$,
  DeleteReportInput$,
  DeleteReportOutput$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyInput$,
  DeleteResourcePolicyOutput$,
  DeleteSourceCredentials$,
  DeleteSourceCredentialsCommand,
  DeleteSourceCredentialsInput$,
  DeleteSourceCredentialsOutput$,
  DeleteWebhook$,
  DeleteWebhookCommand,
  DeleteWebhookInput$,
  DeleteWebhookOutput$,
  DescribeCodeCoverages$,
  DescribeCodeCoveragesCommand,
  DescribeCodeCoveragesInput$,
  DescribeCodeCoveragesOutput$,
  DescribeTestCases$,
  DescribeTestCasesCommand,
  DescribeTestCasesInput$,
  DescribeTestCasesOutput$,
  DockerServer$,
  DockerServerStatus$,
  EnvironmentImage$,
  EnvironmentLanguage$,
  EnvironmentPlatform$,
  EnvironmentType,
  EnvironmentVariable$,
  EnvironmentVariableType,
  ExportedEnvironmentVariable$,
  FileSystemType,
  Fleet$,
  FleetContextCode,
  FleetOverflowBehavior,
  FleetProxyRule$,
  FleetProxyRuleBehavior,
  FleetProxyRuleEffectType,
  FleetProxyRuleType,
  FleetScalingMetricType,
  FleetScalingType,
  FleetSortByType,
  FleetStatus$,
  FleetStatusCode,
  GetReportGroupTrend$,
  GetReportGroupTrendCommand,
  GetReportGroupTrendInput$,
  GetReportGroupTrendOutput$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyInput$,
  GetResourcePolicyOutput$,
  GitSubmodulesConfig$,
  ImagePullCredentialsType,
  ImportSourceCredentials$,
  ImportSourceCredentialsCommand,
  ImportSourceCredentialsInput$,
  ImportSourceCredentialsOutput$,
  InvalidateProjectCache$,
  InvalidateProjectCacheCommand,
  InvalidateProjectCacheInput$,
  InvalidateProjectCacheOutput$,
  InvalidInputException,
  InvalidInputException$,
  LanguageType,
  ListBuildBatches$,
  ListBuildBatchesCommand,
  ListBuildBatchesForProject$,
  ListBuildBatchesForProjectCommand,
  ListBuildBatchesForProjectInput$,
  ListBuildBatchesForProjectOutput$,
  ListBuildBatchesInput$,
  ListBuildBatchesOutput$,
  ListBuilds$,
  ListBuildsCommand,
  ListBuildsForProject$,
  ListBuildsForProjectCommand,
  ListBuildsForProjectInput$,
  ListBuildsForProjectOutput$,
  ListBuildsInput$,
  ListBuildsOutput$,
  ListCommandExecutionsForSandbox$,
  ListCommandExecutionsForSandboxCommand,
  ListCommandExecutionsForSandboxInput$,
  ListCommandExecutionsForSandboxOutput$,
  ListCuratedEnvironmentImages$,
  ListCuratedEnvironmentImagesCommand,
  ListCuratedEnvironmentImagesInput$,
  ListCuratedEnvironmentImagesOutput$,
  ListFleets$,
  ListFleetsCommand,
  ListFleetsInput$,
  ListFleetsOutput$,
  ListProjects$,
  ListProjectsCommand,
  ListProjectsInput$,
  ListProjectsOutput$,
  ListReportGroups$,
  ListReportGroupsCommand,
  ListReportGroupsInput$,
  ListReportGroupsOutput$,
  ListReports$,
  ListReportsCommand,
  ListReportsForReportGroup$,
  ListReportsForReportGroupCommand,
  ListReportsForReportGroupInput$,
  ListReportsForReportGroupOutput$,
  ListReportsInput$,
  ListReportsOutput$,
  ListSandboxes$,
  ListSandboxesCommand,
  ListSandboxesForProject$,
  ListSandboxesForProjectCommand,
  ListSandboxesForProjectInput$,
  ListSandboxesForProjectOutput$,
  ListSandboxesInput$,
  ListSandboxesOutput$,
  ListSharedProjects$,
  ListSharedProjectsCommand,
  ListSharedProjectsInput$,
  ListSharedProjectsOutput$,
  ListSharedReportGroups$,
  ListSharedReportGroupsCommand,
  ListSharedReportGroupsInput$,
  ListSharedReportGroupsOutput$,
  ListSourceCredentials$,
  ListSourceCredentialsCommand,
  ListSourceCredentialsInput$,
  ListSourceCredentialsOutput$,
  LogsConfig$,
  LogsConfigStatusType,
  LogsLocation$,
  MachineType,
  NetworkInterface$,
  OAuthProviderException,
  OAuthProviderException$,
  paginateDescribeCodeCoverages,
  paginateDescribeTestCases,
  paginateListBuildBatches,
  paginateListBuildBatchesForProject,
  paginateListBuilds,
  paginateListBuildsForProject,
  paginateListCommandExecutionsForSandbox,
  paginateListFleets,
  paginateListProjects,
  paginateListReportGroups,
  paginateListReports,
  paginateListReportsForReportGroup,
  paginateListSandboxes,
  paginateListSandboxesForProject,
  paginateListSharedProjects,
  paginateListSharedReportGroups,
  PhaseContext$,
  PlatformType,
  Project$,
  ProjectArtifacts$,
  ProjectBadge$,
  ProjectBuildBatchConfig$,
  ProjectCache$,
  ProjectEnvironment$,
  ProjectFileSystemLocation$,
  ProjectFleet$,
  ProjectSortByType,
  ProjectSource$,
  ProjectSourceVersion$,
  ProjectVisibilityType,
  ProxyConfiguration$,
  PullRequestBuildApproverRole,
  PullRequestBuildCommentApproval,
  PullRequestBuildPolicy$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyInput$,
  PutResourcePolicyOutput$,
  RegistryCredential$,
  Report$,
  ReportCodeCoverageSortByType,
  ReportExportConfig$,
  ReportExportConfigType,
  ReportFilter$,
  ReportGroup$,
  ReportGroupSortByType,
  ReportGroupStatusType,
  ReportGroupTrendFieldType,
  ReportGroupTrendStats$,
  ReportPackagingType,
  ReportStatusType,
  ReportType,
  ReportWithRawData$,
  ResolvedArtifact$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetryBuild$,
  RetryBuildBatch$,
  RetryBuildBatchCommand,
  RetryBuildBatchInput$,
  RetryBuildBatchOutput$,
  RetryBuildBatchType,
  RetryBuildCommand,
  RetryBuildInput$,
  RetryBuildOutput$,
  S3LogsConfig$,
  S3ReportExportConfig$,
  Sandbox$,
  SandboxSession$,
  SandboxSessionPhase$,
  ScalingConfigurationInput$,
  ScalingConfigurationOutput$,
  ScopeConfiguration$,
  ServerType,
  SharedResourceSortByType,
  SortOrderType,
  SourceAuth$,
  SourceAuthType,
  SourceCredentialsInfo$,
  SourceType,
  SSMSession$,
  StartBuild$,
  StartBuildBatch$,
  StartBuildBatchCommand,
  StartBuildBatchInput$,
  StartBuildBatchOutput$,
  StartBuildCommand,
  StartBuildInput$,
  StartBuildOutput$,
  StartCommandExecution$,
  StartCommandExecutionCommand,
  StartCommandExecutionInput$,
  StartCommandExecutionOutput$,
  StartSandbox$,
  StartSandboxCommand,
  StartSandboxConnection$,
  StartSandboxConnectionCommand,
  StartSandboxConnectionInput$,
  StartSandboxConnectionOutput$,
  StartSandboxInput$,
  StartSandboxOutput$,
  StatusType,
  StopBuild$,
  StopBuildBatch$,
  StopBuildBatchCommand,
  StopBuildBatchInput$,
  StopBuildBatchOutput$,
  StopBuildCommand,
  StopBuildInput$,
  StopBuildOutput$,
  StopSandbox$,
  StopSandboxCommand,
  StopSandboxInput$,
  StopSandboxOutput$,
  Tag$,
  TargetTrackingScalingConfiguration$,
  TestCase$,
  TestCaseFilter$,
  TestReportSummary$,
  UpdateFleet$,
  UpdateFleetCommand,
  UpdateFleetInput$,
  UpdateFleetOutput$,
  UpdateProject$,
  UpdateProjectCommand,
  UpdateProjectInput$,
  UpdateProjectOutput$,
  UpdateProjectVisibility$,
  UpdateProjectVisibilityCommand,
  UpdateProjectVisibilityInput$,
  UpdateProjectVisibilityOutput$,
  UpdateReportGroup$,
  UpdateReportGroupCommand,
  UpdateReportGroupInput$,
  UpdateReportGroupOutput$,
  UpdateWebhook$,
  UpdateWebhookCommand,
  UpdateWebhookInput$,
  UpdateWebhookOutput$,
  VpcConfig$,
  Webhook$,
  WebhookBuildType,
  WebhookFilter$,
  WebhookFilterType,
  WebhookScopeType,
  WebhookStatus,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeBuildClient === "function");
assert(typeof CodeBuild === "function");
// commands
assert(typeof BatchDeleteBuildsCommand === "function");
assert(typeof BatchDeleteBuilds$ === "object");
assert(typeof BatchGetBuildBatchesCommand === "function");
assert(typeof BatchGetBuildBatches$ === "object");
assert(typeof BatchGetBuildsCommand === "function");
assert(typeof BatchGetBuilds$ === "object");
assert(typeof BatchGetCommandExecutionsCommand === "function");
assert(typeof BatchGetCommandExecutions$ === "object");
assert(typeof BatchGetFleetsCommand === "function");
assert(typeof BatchGetFleets$ === "object");
assert(typeof BatchGetProjectsCommand === "function");
assert(typeof BatchGetProjects$ === "object");
assert(typeof BatchGetReportGroupsCommand === "function");
assert(typeof BatchGetReportGroups$ === "object");
assert(typeof BatchGetReportsCommand === "function");
assert(typeof BatchGetReports$ === "object");
assert(typeof BatchGetSandboxesCommand === "function");
assert(typeof BatchGetSandboxes$ === "object");
assert(typeof CreateFleetCommand === "function");
assert(typeof CreateFleet$ === "object");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateProject$ === "object");
assert(typeof CreateReportGroupCommand === "function");
assert(typeof CreateReportGroup$ === "object");
assert(typeof CreateWebhookCommand === "function");
assert(typeof CreateWebhook$ === "object");
assert(typeof DeleteBuildBatchCommand === "function");
assert(typeof DeleteBuildBatch$ === "object");
assert(typeof DeleteFleetCommand === "function");
assert(typeof DeleteFleet$ === "object");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteProject$ === "object");
assert(typeof DeleteReportCommand === "function");
assert(typeof DeleteReport$ === "object");
assert(typeof DeleteReportGroupCommand === "function");
assert(typeof DeleteReportGroup$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteSourceCredentialsCommand === "function");
assert(typeof DeleteSourceCredentials$ === "object");
assert(typeof DeleteWebhookCommand === "function");
assert(typeof DeleteWebhook$ === "object");
assert(typeof DescribeCodeCoveragesCommand === "function");
assert(typeof DescribeCodeCoverages$ === "object");
assert(typeof DescribeTestCasesCommand === "function");
assert(typeof DescribeTestCases$ === "object");
assert(typeof GetReportGroupTrendCommand === "function");
assert(typeof GetReportGroupTrend$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ImportSourceCredentialsCommand === "function");
assert(typeof ImportSourceCredentials$ === "object");
assert(typeof InvalidateProjectCacheCommand === "function");
assert(typeof InvalidateProjectCache$ === "object");
assert(typeof ListBuildBatchesCommand === "function");
assert(typeof ListBuildBatches$ === "object");
assert(typeof ListBuildBatchesForProjectCommand === "function");
assert(typeof ListBuildBatchesForProject$ === "object");
assert(typeof ListBuildsCommand === "function");
assert(typeof ListBuilds$ === "object");
assert(typeof ListBuildsForProjectCommand === "function");
assert(typeof ListBuildsForProject$ === "object");
assert(typeof ListCommandExecutionsForSandboxCommand === "function");
assert(typeof ListCommandExecutionsForSandbox$ === "object");
assert(typeof ListCuratedEnvironmentImagesCommand === "function");
assert(typeof ListCuratedEnvironmentImages$ === "object");
assert(typeof ListFleetsCommand === "function");
assert(typeof ListFleets$ === "object");
assert(typeof ListProjectsCommand === "function");
assert(typeof ListProjects$ === "object");
assert(typeof ListReportGroupsCommand === "function");
assert(typeof ListReportGroups$ === "object");
assert(typeof ListReportsCommand === "function");
assert(typeof ListReports$ === "object");
assert(typeof ListReportsForReportGroupCommand === "function");
assert(typeof ListReportsForReportGroup$ === "object");
assert(typeof ListSandboxesCommand === "function");
assert(typeof ListSandboxes$ === "object");
assert(typeof ListSandboxesForProjectCommand === "function");
assert(typeof ListSandboxesForProject$ === "object");
assert(typeof ListSharedProjectsCommand === "function");
assert(typeof ListSharedProjects$ === "object");
assert(typeof ListSharedReportGroupsCommand === "function");
assert(typeof ListSharedReportGroups$ === "object");
assert(typeof ListSourceCredentialsCommand === "function");
assert(typeof ListSourceCredentials$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RetryBuildCommand === "function");
assert(typeof RetryBuild$ === "object");
assert(typeof RetryBuildBatchCommand === "function");
assert(typeof RetryBuildBatch$ === "object");
assert(typeof StartBuildCommand === "function");
assert(typeof StartBuild$ === "object");
assert(typeof StartBuildBatchCommand === "function");
assert(typeof StartBuildBatch$ === "object");
assert(typeof StartCommandExecutionCommand === "function");
assert(typeof StartCommandExecution$ === "object");
assert(typeof StartSandboxCommand === "function");
assert(typeof StartSandbox$ === "object");
assert(typeof StartSandboxConnectionCommand === "function");
assert(typeof StartSandboxConnection$ === "object");
assert(typeof StopBuildCommand === "function");
assert(typeof StopBuild$ === "object");
assert(typeof StopBuildBatchCommand === "function");
assert(typeof StopBuildBatch$ === "object");
assert(typeof StopSandboxCommand === "function");
assert(typeof StopSandbox$ === "object");
assert(typeof UpdateFleetCommand === "function");
assert(typeof UpdateFleet$ === "object");
assert(typeof UpdateProjectCommand === "function");
assert(typeof UpdateProject$ === "object");
assert(typeof UpdateProjectVisibilityCommand === "function");
assert(typeof UpdateProjectVisibility$ === "object");
assert(typeof UpdateReportGroupCommand === "function");
assert(typeof UpdateReportGroup$ === "object");
assert(typeof UpdateWebhookCommand === "function");
assert(typeof UpdateWebhook$ === "object");
// structural schemas
assert(typeof AutoRetryConfig$ === "object");
assert(typeof BatchDeleteBuildsInput$ === "object");
assert(typeof BatchDeleteBuildsOutput$ === "object");
assert(typeof BatchGetBuildBatchesInput$ === "object");
assert(typeof BatchGetBuildBatchesOutput$ === "object");
assert(typeof BatchGetBuildsInput$ === "object");
assert(typeof BatchGetBuildsOutput$ === "object");
assert(typeof BatchGetCommandExecutionsInput$ === "object");
assert(typeof BatchGetCommandExecutionsOutput$ === "object");
assert(typeof BatchGetFleetsInput$ === "object");
assert(typeof BatchGetFleetsOutput$ === "object");
assert(typeof BatchGetProjectsInput$ === "object");
assert(typeof BatchGetProjectsOutput$ === "object");
assert(typeof BatchGetReportGroupsInput$ === "object");
assert(typeof BatchGetReportGroupsOutput$ === "object");
assert(typeof BatchGetReportsInput$ === "object");
assert(typeof BatchGetReportsOutput$ === "object");
assert(typeof BatchGetSandboxesInput$ === "object");
assert(typeof BatchGetSandboxesOutput$ === "object");
assert(typeof BatchRestrictions$ === "object");
assert(typeof Build$ === "object");
assert(typeof BuildArtifacts$ === "object");
assert(typeof BuildBatch$ === "object");
assert(typeof BuildBatchFilter$ === "object");
assert(typeof BuildBatchPhase$ === "object");
assert(typeof BuildGroup$ === "object");
assert(typeof BuildNotDeleted$ === "object");
assert(typeof BuildPhase$ === "object");
assert(typeof BuildStatusConfig$ === "object");
assert(typeof BuildSummary$ === "object");
assert(typeof CloudWatchLogsConfig$ === "object");
assert(typeof CodeCoverage$ === "object");
assert(typeof CodeCoverageReportSummary$ === "object");
assert(typeof CommandExecution$ === "object");
assert(typeof ComputeConfiguration$ === "object");
assert(typeof CreateFleetInput$ === "object");
assert(typeof CreateFleetOutput$ === "object");
assert(typeof CreateProjectInput$ === "object");
assert(typeof CreateProjectOutput$ === "object");
assert(typeof CreateReportGroupInput$ === "object");
assert(typeof CreateReportGroupOutput$ === "object");
assert(typeof CreateWebhookInput$ === "object");
assert(typeof CreateWebhookOutput$ === "object");
assert(typeof DebugSession$ === "object");
assert(typeof DeleteBuildBatchInput$ === "object");
assert(typeof DeleteBuildBatchOutput$ === "object");
assert(typeof DeleteFleetInput$ === "object");
assert(typeof DeleteFleetOutput$ === "object");
assert(typeof DeleteProjectInput$ === "object");
assert(typeof DeleteProjectOutput$ === "object");
assert(typeof DeleteReportGroupInput$ === "object");
assert(typeof DeleteReportGroupOutput$ === "object");
assert(typeof DeleteReportInput$ === "object");
assert(typeof DeleteReportOutput$ === "object");
assert(typeof DeleteResourcePolicyInput$ === "object");
assert(typeof DeleteResourcePolicyOutput$ === "object");
assert(typeof DeleteSourceCredentialsInput$ === "object");
assert(typeof DeleteSourceCredentialsOutput$ === "object");
assert(typeof DeleteWebhookInput$ === "object");
assert(typeof DeleteWebhookOutput$ === "object");
assert(typeof DescribeCodeCoveragesInput$ === "object");
assert(typeof DescribeCodeCoveragesOutput$ === "object");
assert(typeof DescribeTestCasesInput$ === "object");
assert(typeof DescribeTestCasesOutput$ === "object");
assert(typeof DockerServer$ === "object");
assert(typeof DockerServerStatus$ === "object");
assert(typeof EnvironmentImage$ === "object");
assert(typeof EnvironmentLanguage$ === "object");
assert(typeof EnvironmentPlatform$ === "object");
assert(typeof EnvironmentVariable$ === "object");
assert(typeof ExportedEnvironmentVariable$ === "object");
assert(typeof Fleet$ === "object");
assert(typeof FleetProxyRule$ === "object");
assert(typeof FleetStatus$ === "object");
assert(typeof GetReportGroupTrendInput$ === "object");
assert(typeof GetReportGroupTrendOutput$ === "object");
assert(typeof GetResourcePolicyInput$ === "object");
assert(typeof GetResourcePolicyOutput$ === "object");
assert(typeof GitSubmodulesConfig$ === "object");
assert(typeof ImportSourceCredentialsInput$ === "object");
assert(typeof ImportSourceCredentialsOutput$ === "object");
assert(typeof InvalidateProjectCacheInput$ === "object");
assert(typeof InvalidateProjectCacheOutput$ === "object");
assert(typeof ListBuildBatchesForProjectInput$ === "object");
assert(typeof ListBuildBatchesForProjectOutput$ === "object");
assert(typeof ListBuildBatchesInput$ === "object");
assert(typeof ListBuildBatchesOutput$ === "object");
assert(typeof ListBuildsForProjectInput$ === "object");
assert(typeof ListBuildsForProjectOutput$ === "object");
assert(typeof ListBuildsInput$ === "object");
assert(typeof ListBuildsOutput$ === "object");
assert(typeof ListCommandExecutionsForSandboxInput$ === "object");
assert(typeof ListCommandExecutionsForSandboxOutput$ === "object");
assert(typeof ListCuratedEnvironmentImagesInput$ === "object");
assert(typeof ListCuratedEnvironmentImagesOutput$ === "object");
assert(typeof ListFleetsInput$ === "object");
assert(typeof ListFleetsOutput$ === "object");
assert(typeof ListProjectsInput$ === "object");
assert(typeof ListProjectsOutput$ === "object");
assert(typeof ListReportGroupsInput$ === "object");
assert(typeof ListReportGroupsOutput$ === "object");
assert(typeof ListReportsForReportGroupInput$ === "object");
assert(typeof ListReportsForReportGroupOutput$ === "object");
assert(typeof ListReportsInput$ === "object");
assert(typeof ListReportsOutput$ === "object");
assert(typeof ListSandboxesForProjectInput$ === "object");
assert(typeof ListSandboxesForProjectOutput$ === "object");
assert(typeof ListSandboxesInput$ === "object");
assert(typeof ListSandboxesOutput$ === "object");
assert(typeof ListSharedProjectsInput$ === "object");
assert(typeof ListSharedProjectsOutput$ === "object");
assert(typeof ListSharedReportGroupsInput$ === "object");
assert(typeof ListSharedReportGroupsOutput$ === "object");
assert(typeof ListSourceCredentialsInput$ === "object");
assert(typeof ListSourceCredentialsOutput$ === "object");
assert(typeof LogsConfig$ === "object");
assert(typeof LogsLocation$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof PhaseContext$ === "object");
assert(typeof Project$ === "object");
assert(typeof ProjectArtifacts$ === "object");
assert(typeof ProjectBadge$ === "object");
assert(typeof ProjectBuildBatchConfig$ === "object");
assert(typeof ProjectCache$ === "object");
assert(typeof ProjectEnvironment$ === "object");
assert(typeof ProjectFileSystemLocation$ === "object");
assert(typeof ProjectFleet$ === "object");
assert(typeof ProjectSource$ === "object");
assert(typeof ProjectSourceVersion$ === "object");
assert(typeof ProxyConfiguration$ === "object");
assert(typeof PullRequestBuildPolicy$ === "object");
assert(typeof PutResourcePolicyInput$ === "object");
assert(typeof PutResourcePolicyOutput$ === "object");
assert(typeof RegistryCredential$ === "object");
assert(typeof Report$ === "object");
assert(typeof ReportExportConfig$ === "object");
assert(typeof ReportFilter$ === "object");
assert(typeof ReportGroup$ === "object");
assert(typeof ReportGroupTrendStats$ === "object");
assert(typeof ReportWithRawData$ === "object");
assert(typeof ResolvedArtifact$ === "object");
assert(typeof RetryBuildBatchInput$ === "object");
assert(typeof RetryBuildBatchOutput$ === "object");
assert(typeof RetryBuildInput$ === "object");
assert(typeof RetryBuildOutput$ === "object");
assert(typeof S3LogsConfig$ === "object");
assert(typeof S3ReportExportConfig$ === "object");
assert(typeof Sandbox$ === "object");
assert(typeof SandboxSession$ === "object");
assert(typeof SandboxSessionPhase$ === "object");
assert(typeof ScalingConfigurationInput$ === "object");
assert(typeof ScalingConfigurationOutput$ === "object");
assert(typeof ScopeConfiguration$ === "object");
assert(typeof SourceAuth$ === "object");
assert(typeof SourceCredentialsInfo$ === "object");
assert(typeof SSMSession$ === "object");
assert(typeof StartBuildBatchInput$ === "object");
assert(typeof StartBuildBatchOutput$ === "object");
assert(typeof StartBuildInput$ === "object");
assert(typeof StartBuildOutput$ === "object");
assert(typeof StartCommandExecutionInput$ === "object");
assert(typeof StartCommandExecutionOutput$ === "object");
assert(typeof StartSandboxConnectionInput$ === "object");
assert(typeof StartSandboxConnectionOutput$ === "object");
assert(typeof StartSandboxInput$ === "object");
assert(typeof StartSandboxOutput$ === "object");
assert(typeof StopBuildBatchInput$ === "object");
assert(typeof StopBuildBatchOutput$ === "object");
assert(typeof StopBuildInput$ === "object");
assert(typeof StopBuildOutput$ === "object");
assert(typeof StopSandboxInput$ === "object");
assert(typeof StopSandboxOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TargetTrackingScalingConfiguration$ === "object");
assert(typeof TestCase$ === "object");
assert(typeof TestCaseFilter$ === "object");
assert(typeof TestReportSummary$ === "object");
assert(typeof UpdateFleetInput$ === "object");
assert(typeof UpdateFleetOutput$ === "object");
assert(typeof UpdateProjectInput$ === "object");
assert(typeof UpdateProjectOutput$ === "object");
assert(typeof UpdateProjectVisibilityInput$ === "object");
assert(typeof UpdateProjectVisibilityOutput$ === "object");
assert(typeof UpdateReportGroupInput$ === "object");
assert(typeof UpdateReportGroupOutput$ === "object");
assert(typeof UpdateWebhookInput$ === "object");
assert(typeof UpdateWebhookOutput$ === "object");
assert(typeof VpcConfig$ === "object");
assert(typeof Webhook$ === "object");
assert(typeof WebhookFilter$ === "object");
// enums
assert(typeof ArtifactNamespace === "object");
assert(typeof ArtifactPackaging === "object");
assert(typeof ArtifactsType === "object");
assert(typeof AuthType === "object");
assert(typeof BatchReportModeType === "object");
assert(typeof BucketOwnerAccess === "object");
assert(typeof BuildBatchPhaseType === "object");
assert(typeof BuildPhaseType === "object");
assert(typeof CacheMode === "object");
assert(typeof CacheType === "object");
assert(typeof CommandType === "object");
assert(typeof ComputeType === "object");
assert(typeof CredentialProviderType === "object");
assert(typeof EnvironmentType === "object");
assert(typeof EnvironmentVariableType === "object");
assert(typeof FileSystemType === "object");
assert(typeof FleetContextCode === "object");
assert(typeof FleetOverflowBehavior === "object");
assert(typeof FleetProxyRuleBehavior === "object");
assert(typeof FleetProxyRuleEffectType === "object");
assert(typeof FleetProxyRuleType === "object");
assert(typeof FleetScalingMetricType === "object");
assert(typeof FleetScalingType === "object");
assert(typeof FleetSortByType === "object");
assert(typeof FleetStatusCode === "object");
assert(typeof ImagePullCredentialsType === "object");
assert(typeof LanguageType === "object");
assert(typeof LogsConfigStatusType === "object");
assert(typeof MachineType === "object");
assert(typeof PlatformType === "object");
assert(typeof ProjectSortByType === "object");
assert(typeof ProjectVisibilityType === "object");
assert(typeof PullRequestBuildApproverRole === "object");
assert(typeof PullRequestBuildCommentApproval === "object");
assert(typeof ReportCodeCoverageSortByType === "object");
assert(typeof ReportExportConfigType === "object");
assert(typeof ReportGroupSortByType === "object");
assert(typeof ReportGroupStatusType === "object");
assert(typeof ReportGroupTrendFieldType === "object");
assert(typeof ReportPackagingType === "object");
assert(typeof ReportStatusType === "object");
assert(typeof ReportType === "object");
assert(typeof RetryBuildBatchType === "object");
assert(typeof ServerType === "object");
assert(typeof SharedResourceSortByType === "object");
assert(typeof SortOrderType === "object");
assert(typeof SourceAuthType === "object");
assert(typeof SourceType === "object");
assert(typeof StatusType === "object");
assert(typeof WebhookBuildType === "object");
assert(typeof WebhookFilterType === "object");
assert(typeof WebhookScopeType === "object");
assert(typeof WebhookStatus === "object");
// errors
assert(AccountLimitExceededException.prototype instanceof CodeBuildServiceException);
assert(typeof AccountLimitExceededException$ === "object");
assert(AccountSuspendedException.prototype instanceof CodeBuildServiceException);
assert(typeof AccountSuspendedException$ === "object");
assert(InvalidInputException.prototype instanceof CodeBuildServiceException);
assert(typeof InvalidInputException$ === "object");
assert(OAuthProviderException.prototype instanceof CodeBuildServiceException);
assert(typeof OAuthProviderException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof CodeBuildServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CodeBuildServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(CodeBuildServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeCodeCoverages === "function");
assert(typeof paginateDescribeTestCases === "function");
assert(typeof paginateListBuildBatches === "function");
assert(typeof paginateListBuildBatchesForProject === "function");
assert(typeof paginateListBuilds === "function");
assert(typeof paginateListBuildsForProject === "function");
assert(typeof paginateListCommandExecutionsForSandbox === "function");
assert(typeof paginateListFleets === "function");
assert(typeof paginateListProjects === "function");
assert(typeof paginateListReportGroups === "function");
assert(typeof paginateListReports === "function");
assert(typeof paginateListReportsForReportGroup === "function");
assert(typeof paginateListSandboxes === "function");
assert(typeof paginateListSandboxesForProject === "function");
assert(typeof paginateListSharedProjects === "function");
assert(typeof paginateListSharedReportGroups === "function");
console.log(`CodeBuild index test passed.`);
