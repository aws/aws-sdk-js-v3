import {
  AccountLimitExceededException,
  AccountSuspendedException,
  ArtifactNamespace,
  ArtifactPackaging,
  ArtifactsType,
  AuthType,
  BatchDeleteBuildsCommand,
  BatchGetBuildBatchesCommand,
  BatchGetBuildsCommand,
  BatchGetCommandExecutionsCommand,
  BatchGetFleetsCommand,
  BatchGetProjectsCommand,
  BatchGetReportGroupsCommand,
  BatchGetReportsCommand,
  BatchGetSandboxesCommand,
  BatchReportModeType,
  BucketOwnerAccess,
  BuildBatchPhaseType,
  BuildPhaseType,
  CacheMode,
  CacheType,
  CodeBuild,
  CodeBuildClient,
  CodeBuildServiceException,
  CommandType,
  ComputeType,
  CreateFleetCommand,
  CreateProjectCommand,
  CreateReportGroupCommand,
  CreateWebhookCommand,
  CredentialProviderType,
  DeleteBuildBatchCommand,
  DeleteFleetCommand,
  DeleteProjectCommand,
  DeleteReportCommand,
  DeleteReportGroupCommand,
  DeleteResourcePolicyCommand,
  DeleteSourceCredentialsCommand,
  DeleteWebhookCommand,
  DescribeCodeCoveragesCommand,
  DescribeTestCasesCommand,
  EnvironmentType,
  EnvironmentVariableType,
  FileSystemType,
  FleetContextCode,
  FleetOverflowBehavior,
  FleetProxyRuleBehavior,
  FleetProxyRuleEffectType,
  FleetProxyRuleType,
  FleetScalingMetricType,
  FleetScalingType,
  FleetSortByType,
  FleetStatusCode,
  GetReportGroupTrendCommand,
  GetResourcePolicyCommand,
  ImagePullCredentialsType,
  ImportSourceCredentialsCommand,
  InvalidInputException,
  InvalidateProjectCacheCommand,
  LanguageType,
  ListBuildBatchesCommand,
  ListBuildBatchesForProjectCommand,
  ListBuildsCommand,
  ListBuildsForProjectCommand,
  ListCommandExecutionsForSandboxCommand,
  ListCuratedEnvironmentImagesCommand,
  ListFleetsCommand,
  ListProjectsCommand,
  ListReportGroupsCommand,
  ListReportsCommand,
  ListReportsForReportGroupCommand,
  ListSandboxesCommand,
  ListSandboxesForProjectCommand,
  ListSharedProjectsCommand,
  ListSharedReportGroupsCommand,
  ListSourceCredentialsCommand,
  LogsConfigStatusType,
  MachineType,
  OAuthProviderException,
  PlatformType,
  ProjectSortByType,
  ProjectVisibilityType,
  PullRequestBuildApproverRole,
  PullRequestBuildCommentApproval,
  PutResourcePolicyCommand,
  ReportCodeCoverageSortByType,
  ReportExportConfigType,
  ReportGroupSortByType,
  ReportGroupStatusType,
  ReportGroupTrendFieldType,
  ReportPackagingType,
  ReportStatusType,
  ReportType,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RetryBuildBatchCommand,
  RetryBuildBatchType,
  RetryBuildCommand,
  ServerType,
  SharedResourceSortByType,
  SortOrderType,
  SourceAuthType,
  SourceType,
  StartBuildBatchCommand,
  StartBuildCommand,
  StartCommandExecutionCommand,
  StartSandboxCommand,
  StartSandboxConnectionCommand,
  StatusType,
  StopBuildBatchCommand,
  StopBuildCommand,
  StopSandboxCommand,
  UpdateFleetCommand,
  UpdateProjectCommand,
  UpdateProjectVisibilityCommand,
  UpdateReportGroupCommand,
  UpdateWebhookCommand,
  WebhookBuildType,
  WebhookFilterType,
  WebhookScopeType,
  WebhookStatus,
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
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeBuildClient === "function");
assert(typeof CodeBuild === "function");
// commands
assert(typeof BatchDeleteBuildsCommand === "function");
assert(typeof BatchGetBuildBatchesCommand === "function");
assert(typeof BatchGetBuildsCommand === "function");
assert(typeof BatchGetCommandExecutionsCommand === "function");
assert(typeof BatchGetFleetsCommand === "function");
assert(typeof BatchGetProjectsCommand === "function");
assert(typeof BatchGetReportGroupsCommand === "function");
assert(typeof BatchGetReportsCommand === "function");
assert(typeof BatchGetSandboxesCommand === "function");
assert(typeof CreateFleetCommand === "function");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateReportGroupCommand === "function");
assert(typeof CreateWebhookCommand === "function");
assert(typeof DeleteBuildBatchCommand === "function");
assert(typeof DeleteFleetCommand === "function");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteReportCommand === "function");
assert(typeof DeleteReportGroupCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteSourceCredentialsCommand === "function");
assert(typeof DeleteWebhookCommand === "function");
assert(typeof DescribeCodeCoveragesCommand === "function");
assert(typeof DescribeTestCasesCommand === "function");
assert(typeof GetReportGroupTrendCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof ImportSourceCredentialsCommand === "function");
assert(typeof InvalidateProjectCacheCommand === "function");
assert(typeof ListBuildBatchesCommand === "function");
assert(typeof ListBuildBatchesForProjectCommand === "function");
assert(typeof ListBuildsCommand === "function");
assert(typeof ListBuildsForProjectCommand === "function");
assert(typeof ListCommandExecutionsForSandboxCommand === "function");
assert(typeof ListCuratedEnvironmentImagesCommand === "function");
assert(typeof ListFleetsCommand === "function");
assert(typeof ListProjectsCommand === "function");
assert(typeof ListReportGroupsCommand === "function");
assert(typeof ListReportsCommand === "function");
assert(typeof ListReportsForReportGroupCommand === "function");
assert(typeof ListSandboxesCommand === "function");
assert(typeof ListSandboxesForProjectCommand === "function");
assert(typeof ListSharedProjectsCommand === "function");
assert(typeof ListSharedReportGroupsCommand === "function");
assert(typeof ListSourceCredentialsCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof RetryBuildCommand === "function");
assert(typeof RetryBuildBatchCommand === "function");
assert(typeof StartBuildCommand === "function");
assert(typeof StartBuildBatchCommand === "function");
assert(typeof StartCommandExecutionCommand === "function");
assert(typeof StartSandboxCommand === "function");
assert(typeof StartSandboxConnectionCommand === "function");
assert(typeof StopBuildCommand === "function");
assert(typeof StopBuildBatchCommand === "function");
assert(typeof StopSandboxCommand === "function");
assert(typeof UpdateFleetCommand === "function");
assert(typeof UpdateProjectCommand === "function");
assert(typeof UpdateProjectVisibilityCommand === "function");
assert(typeof UpdateReportGroupCommand === "function");
assert(typeof UpdateWebhookCommand === "function");
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
assert(AccountSuspendedException.prototype instanceof CodeBuildServiceException);
assert(InvalidInputException.prototype instanceof CodeBuildServiceException);
assert(OAuthProviderException.prototype instanceof CodeBuildServiceException);
assert(ResourceAlreadyExistsException.prototype instanceof CodeBuildServiceException);
assert(ResourceNotFoundException.prototype instanceof CodeBuildServiceException);
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
