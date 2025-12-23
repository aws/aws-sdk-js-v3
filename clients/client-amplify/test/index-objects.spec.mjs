import {
  Amplify,
  AmplifyClient,
  AmplifyServiceException,
  App$,
  Artifact$,
  AutoBranchCreationConfig$,
  Backend$,
  BackendEnvironment$,
  BadRequestException,
  BadRequestException$,
  Branch$,
  BuildComputeType,
  CacheConfig$,
  CacheConfigType,
  Certificate$,
  CertificateSettings$,
  CertificateType,
  CreateApp$,
  CreateAppCommand,
  CreateAppRequest$,
  CreateAppResult$,
  CreateBackendEnvironment$,
  CreateBackendEnvironmentCommand,
  CreateBackendEnvironmentRequest$,
  CreateBackendEnvironmentResult$,
  CreateBranch$,
  CreateBranchCommand,
  CreateBranchRequest$,
  CreateBranchResult$,
  CreateDeployment$,
  CreateDeploymentCommand,
  CreateDeploymentRequest$,
  CreateDeploymentResult$,
  CreateDomainAssociation$,
  CreateDomainAssociationCommand,
  CreateDomainAssociationRequest$,
  CreateDomainAssociationResult$,
  CreateWebhook$,
  CreateWebhookCommand,
  CreateWebhookRequest$,
  CreateWebhookResult$,
  CustomRule$,
  DeleteApp$,
  DeleteAppCommand,
  DeleteAppRequest$,
  DeleteAppResult$,
  DeleteBackendEnvironment$,
  DeleteBackendEnvironmentCommand,
  DeleteBackendEnvironmentRequest$,
  DeleteBackendEnvironmentResult$,
  DeleteBranch$,
  DeleteBranchCommand,
  DeleteBranchRequest$,
  DeleteBranchResult$,
  DeleteDomainAssociation$,
  DeleteDomainAssociationCommand,
  DeleteDomainAssociationRequest$,
  DeleteDomainAssociationResult$,
  DeleteJob$,
  DeleteJobCommand,
  DeleteJobRequest$,
  DeleteJobResult$,
  DeleteWebhook$,
  DeleteWebhookCommand,
  DeleteWebhookRequest$,
  DeleteWebhookResult$,
  DependentServiceFailureException,
  DependentServiceFailureException$,
  DomainAssociation$,
  DomainStatus,
  GenerateAccessLogs$,
  GenerateAccessLogsCommand,
  GenerateAccessLogsRequest$,
  GenerateAccessLogsResult$,
  GetApp$,
  GetAppCommand,
  GetAppRequest$,
  GetAppResult$,
  GetArtifactUrl$,
  GetArtifactUrlCommand,
  GetArtifactUrlRequest$,
  GetArtifactUrlResult$,
  GetBackendEnvironment$,
  GetBackendEnvironmentCommand,
  GetBackendEnvironmentRequest$,
  GetBackendEnvironmentResult$,
  GetBranch$,
  GetBranchCommand,
  GetBranchRequest$,
  GetBranchResult$,
  GetDomainAssociation$,
  GetDomainAssociationCommand,
  GetDomainAssociationRequest$,
  GetDomainAssociationResult$,
  GetJob$,
  GetJobCommand,
  GetJobRequest$,
  GetJobResult$,
  GetWebhook$,
  GetWebhookCommand,
  GetWebhookRequest$,
  GetWebhookResult$,
  InternalFailureException,
  InternalFailureException$,
  Job$,
  JobConfig$,
  JobStatus,
  JobSummary$,
  JobType,
  LimitExceededException,
  LimitExceededException$,
  ListApps$,
  ListAppsCommand,
  ListAppsRequest$,
  ListAppsResult$,
  ListArtifacts$,
  ListArtifactsCommand,
  ListArtifactsRequest$,
  ListArtifactsResult$,
  ListBackendEnvironments$,
  ListBackendEnvironmentsCommand,
  ListBackendEnvironmentsRequest$,
  ListBackendEnvironmentsResult$,
  ListBranches$,
  ListBranchesCommand,
  ListBranchesRequest$,
  ListBranchesResult$,
  ListDomainAssociations$,
  ListDomainAssociationsCommand,
  ListDomainAssociationsRequest$,
  ListDomainAssociationsResult$,
  ListJobs$,
  ListJobsCommand,
  ListJobsRequest$,
  ListJobsResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWebhooks$,
  ListWebhooksCommand,
  ListWebhooksRequest$,
  ListWebhooksResult$,
  NotFoundException,
  NotFoundException$,
  paginateListApps,
  paginateListBranches,
  paginateListDomainAssociations,
  paginateListJobs,
  Platform,
  ProductionBranch$,
  RepositoryCloneMethod,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SourceUrlType,
  Stage,
  StartDeployment$,
  StartDeploymentCommand,
  StartDeploymentRequest$,
  StartDeploymentResult$,
  StartJob$,
  StartJobCommand,
  StartJobRequest$,
  StartJobResult$,
  Step$,
  StopJob$,
  StopJobCommand,
  StopJobRequest$,
  StopJobResult$,
  SubDomain$,
  SubDomainSetting$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApp$,
  UpdateAppCommand,
  UpdateAppRequest$,
  UpdateAppResult$,
  UpdateBranch$,
  UpdateBranchCommand,
  UpdateBranchRequest$,
  UpdateBranchResult$,
  UpdateDomainAssociation$,
  UpdateDomainAssociationCommand,
  UpdateDomainAssociationRequest$,
  UpdateDomainAssociationResult$,
  UpdateStatus,
  UpdateWebhook$,
  UpdateWebhookCommand,
  UpdateWebhookRequest$,
  UpdateWebhookResult$,
  WafConfiguration$,
  WafStatus,
  Webhook$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AmplifyClient === "function");
assert(typeof Amplify === "function");
// commands
assert(typeof CreateAppCommand === "function");
assert(typeof CreateApp$ === "object");
assert(typeof CreateBackendEnvironmentCommand === "function");
assert(typeof CreateBackendEnvironment$ === "object");
assert(typeof CreateBranchCommand === "function");
assert(typeof CreateBranch$ === "object");
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDeployment$ === "object");
assert(typeof CreateDomainAssociationCommand === "function");
assert(typeof CreateDomainAssociation$ === "object");
assert(typeof CreateWebhookCommand === "function");
assert(typeof CreateWebhook$ === "object");
assert(typeof DeleteAppCommand === "function");
assert(typeof DeleteApp$ === "object");
assert(typeof DeleteBackendEnvironmentCommand === "function");
assert(typeof DeleteBackendEnvironment$ === "object");
assert(typeof DeleteBranchCommand === "function");
assert(typeof DeleteBranch$ === "object");
assert(typeof DeleteDomainAssociationCommand === "function");
assert(typeof DeleteDomainAssociation$ === "object");
assert(typeof DeleteJobCommand === "function");
assert(typeof DeleteJob$ === "object");
assert(typeof DeleteWebhookCommand === "function");
assert(typeof DeleteWebhook$ === "object");
assert(typeof GenerateAccessLogsCommand === "function");
assert(typeof GenerateAccessLogs$ === "object");
assert(typeof GetAppCommand === "function");
assert(typeof GetApp$ === "object");
assert(typeof GetArtifactUrlCommand === "function");
assert(typeof GetArtifactUrl$ === "object");
assert(typeof GetBackendEnvironmentCommand === "function");
assert(typeof GetBackendEnvironment$ === "object");
assert(typeof GetBranchCommand === "function");
assert(typeof GetBranch$ === "object");
assert(typeof GetDomainAssociationCommand === "function");
assert(typeof GetDomainAssociation$ === "object");
assert(typeof GetJobCommand === "function");
assert(typeof GetJob$ === "object");
assert(typeof GetWebhookCommand === "function");
assert(typeof GetWebhook$ === "object");
assert(typeof ListAppsCommand === "function");
assert(typeof ListApps$ === "object");
assert(typeof ListArtifactsCommand === "function");
assert(typeof ListArtifacts$ === "object");
assert(typeof ListBackendEnvironmentsCommand === "function");
assert(typeof ListBackendEnvironments$ === "object");
assert(typeof ListBranchesCommand === "function");
assert(typeof ListBranches$ === "object");
assert(typeof ListDomainAssociationsCommand === "function");
assert(typeof ListDomainAssociations$ === "object");
assert(typeof ListJobsCommand === "function");
assert(typeof ListJobs$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWebhooksCommand === "function");
assert(typeof ListWebhooks$ === "object");
assert(typeof StartDeploymentCommand === "function");
assert(typeof StartDeployment$ === "object");
assert(typeof StartJobCommand === "function");
assert(typeof StartJob$ === "object");
assert(typeof StopJobCommand === "function");
assert(typeof StopJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAppCommand === "function");
assert(typeof UpdateApp$ === "object");
assert(typeof UpdateBranchCommand === "function");
assert(typeof UpdateBranch$ === "object");
assert(typeof UpdateDomainAssociationCommand === "function");
assert(typeof UpdateDomainAssociation$ === "object");
assert(typeof UpdateWebhookCommand === "function");
assert(typeof UpdateWebhook$ === "object");
// structural schemas
assert(typeof App$ === "object");
assert(typeof Artifact$ === "object");
assert(typeof AutoBranchCreationConfig$ === "object");
assert(typeof Backend$ === "object");
assert(typeof BackendEnvironment$ === "object");
assert(typeof Branch$ === "object");
assert(typeof CacheConfig$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof CertificateSettings$ === "object");
assert(typeof CreateAppRequest$ === "object");
assert(typeof CreateAppResult$ === "object");
assert(typeof CreateBackendEnvironmentRequest$ === "object");
assert(typeof CreateBackendEnvironmentResult$ === "object");
assert(typeof CreateBranchRequest$ === "object");
assert(typeof CreateBranchResult$ === "object");
assert(typeof CreateDeploymentRequest$ === "object");
assert(typeof CreateDeploymentResult$ === "object");
assert(typeof CreateDomainAssociationRequest$ === "object");
assert(typeof CreateDomainAssociationResult$ === "object");
assert(typeof CreateWebhookRequest$ === "object");
assert(typeof CreateWebhookResult$ === "object");
assert(typeof CustomRule$ === "object");
assert(typeof DeleteAppRequest$ === "object");
assert(typeof DeleteAppResult$ === "object");
assert(typeof DeleteBackendEnvironmentRequest$ === "object");
assert(typeof DeleteBackendEnvironmentResult$ === "object");
assert(typeof DeleteBranchRequest$ === "object");
assert(typeof DeleteBranchResult$ === "object");
assert(typeof DeleteDomainAssociationRequest$ === "object");
assert(typeof DeleteDomainAssociationResult$ === "object");
assert(typeof DeleteJobRequest$ === "object");
assert(typeof DeleteJobResult$ === "object");
assert(typeof DeleteWebhookRequest$ === "object");
assert(typeof DeleteWebhookResult$ === "object");
assert(typeof DomainAssociation$ === "object");
assert(typeof GenerateAccessLogsRequest$ === "object");
assert(typeof GenerateAccessLogsResult$ === "object");
assert(typeof GetAppRequest$ === "object");
assert(typeof GetAppResult$ === "object");
assert(typeof GetArtifactUrlRequest$ === "object");
assert(typeof GetArtifactUrlResult$ === "object");
assert(typeof GetBackendEnvironmentRequest$ === "object");
assert(typeof GetBackendEnvironmentResult$ === "object");
assert(typeof GetBranchRequest$ === "object");
assert(typeof GetBranchResult$ === "object");
assert(typeof GetDomainAssociationRequest$ === "object");
assert(typeof GetDomainAssociationResult$ === "object");
assert(typeof GetJobRequest$ === "object");
assert(typeof GetJobResult$ === "object");
assert(typeof GetWebhookRequest$ === "object");
assert(typeof GetWebhookResult$ === "object");
assert(typeof Job$ === "object");
assert(typeof JobConfig$ === "object");
assert(typeof JobSummary$ === "object");
assert(typeof ListAppsRequest$ === "object");
assert(typeof ListAppsResult$ === "object");
assert(typeof ListArtifactsRequest$ === "object");
assert(typeof ListArtifactsResult$ === "object");
assert(typeof ListBackendEnvironmentsRequest$ === "object");
assert(typeof ListBackendEnvironmentsResult$ === "object");
assert(typeof ListBranchesRequest$ === "object");
assert(typeof ListBranchesResult$ === "object");
assert(typeof ListDomainAssociationsRequest$ === "object");
assert(typeof ListDomainAssociationsResult$ === "object");
assert(typeof ListJobsRequest$ === "object");
assert(typeof ListJobsResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWebhooksRequest$ === "object");
assert(typeof ListWebhooksResult$ === "object");
assert(typeof ProductionBranch$ === "object");
assert(typeof StartDeploymentRequest$ === "object");
assert(typeof StartDeploymentResult$ === "object");
assert(typeof StartJobRequest$ === "object");
assert(typeof StartJobResult$ === "object");
assert(typeof Step$ === "object");
assert(typeof StopJobRequest$ === "object");
assert(typeof StopJobResult$ === "object");
assert(typeof SubDomain$ === "object");
assert(typeof SubDomainSetting$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAppRequest$ === "object");
assert(typeof UpdateAppResult$ === "object");
assert(typeof UpdateBranchRequest$ === "object");
assert(typeof UpdateBranchResult$ === "object");
assert(typeof UpdateDomainAssociationRequest$ === "object");
assert(typeof UpdateDomainAssociationResult$ === "object");
assert(typeof UpdateWebhookRequest$ === "object");
assert(typeof UpdateWebhookResult$ === "object");
assert(typeof WafConfiguration$ === "object");
assert(typeof Webhook$ === "object");
// enums
assert(typeof BuildComputeType === "object");
assert(typeof CacheConfigType === "object");
assert(typeof CertificateType === "object");
assert(typeof DomainStatus === "object");
assert(typeof JobStatus === "object");
assert(typeof JobType === "object");
assert(typeof Platform === "object");
assert(typeof RepositoryCloneMethod === "object");
assert(typeof SourceUrlType === "object");
assert(typeof Stage === "object");
assert(typeof UpdateStatus === "object");
assert(typeof WafStatus === "object");
// errors
assert(BadRequestException.prototype instanceof AmplifyServiceException);
assert(typeof BadRequestException$ === "object");
assert(DependentServiceFailureException.prototype instanceof AmplifyServiceException);
assert(typeof DependentServiceFailureException$ === "object");
assert(InternalFailureException.prototype instanceof AmplifyServiceException);
assert(typeof InternalFailureException$ === "object");
assert(LimitExceededException.prototype instanceof AmplifyServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotFoundException.prototype instanceof AmplifyServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AmplifyServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(UnauthorizedException.prototype instanceof AmplifyServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(AmplifyServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApps === "function");
assert(typeof paginateListBranches === "function");
assert(typeof paginateListDomainAssociations === "function");
assert(typeof paginateListJobs === "function");
console.log(`Amplify index test passed.`);
