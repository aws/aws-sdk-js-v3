import {
  Amplify,
  AmplifyClient,
  AmplifyServiceException,
  BuildComputeType,
  CacheConfigType,
  CertificateType,
  CreateAppCommand,
  CreateBackendEnvironmentCommand,
  CreateBranchCommand,
  CreateDeploymentCommand,
  CreateDomainAssociationCommand,
  CreateWebhookCommand,
  DeleteAppCommand,
  DeleteBackendEnvironmentCommand,
  DeleteBranchCommand,
  DeleteDomainAssociationCommand,
  DeleteJobCommand,
  DeleteWebhookCommand,
  DomainStatus,
  GenerateAccessLogsCommand,
  GetAppCommand,
  GetArtifactUrlCommand,
  GetBackendEnvironmentCommand,
  GetBranchCommand,
  GetDomainAssociationCommand,
  GetJobCommand,
  GetWebhookCommand,
  JobStatus,
  JobType,
  ListAppsCommand,
  ListArtifactsCommand,
  ListBackendEnvironmentsCommand,
  ListBranchesCommand,
  ListDomainAssociationsCommand,
  ListJobsCommand,
  ListTagsForResourceCommand,
  ListWebhooksCommand,
  Platform,
  RepositoryCloneMethod,
  SourceUrlType,
  Stage,
  StartDeploymentCommand,
  StartJobCommand,
  StopJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAppCommand,
  UpdateBranchCommand,
  UpdateDomainAssociationCommand,
  UpdateStatus,
  UpdateWebhookCommand,
  WafStatus,
  paginateListApps,
  paginateListBranches,
  paginateListDomainAssociations,
  paginateListJobs,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AmplifyClient === "function")
assert(typeof Amplify === "function")
// commands
assert(typeof CreateAppCommand === "function")
assert(typeof CreateBackendEnvironmentCommand === "function")
assert(typeof CreateBranchCommand === "function")
assert(typeof CreateDeploymentCommand === "function")
assert(typeof CreateDomainAssociationCommand === "function")
assert(typeof CreateWebhookCommand === "function")
assert(typeof DeleteAppCommand === "function")
assert(typeof DeleteBackendEnvironmentCommand === "function")
assert(typeof DeleteBranchCommand === "function")
assert(typeof DeleteDomainAssociationCommand === "function")
assert(typeof DeleteJobCommand === "function")
assert(typeof DeleteWebhookCommand === "function")
assert(typeof GenerateAccessLogsCommand === "function")
assert(typeof GetAppCommand === "function")
assert(typeof GetArtifactUrlCommand === "function")
assert(typeof GetBackendEnvironmentCommand === "function")
assert(typeof GetBranchCommand === "function")
assert(typeof GetDomainAssociationCommand === "function")
assert(typeof GetJobCommand === "function")
assert(typeof GetWebhookCommand === "function")
assert(typeof ListAppsCommand === "function")
assert(typeof ListArtifactsCommand === "function")
assert(typeof ListBackendEnvironmentsCommand === "function")
assert(typeof ListBranchesCommand === "function")
assert(typeof ListDomainAssociationsCommand === "function")
assert(typeof ListJobsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListWebhooksCommand === "function")
assert(typeof StartDeploymentCommand === "function")
assert(typeof StartJobCommand === "function")
assert(typeof StopJobCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAppCommand === "function")
assert(typeof UpdateBranchCommand === "function")
assert(typeof UpdateDomainAssociationCommand === "function")
assert(typeof UpdateWebhookCommand === "function")
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
assert(AmplifyServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListApps === "function")
assert(typeof paginateListBranches === "function")
assert(typeof paginateListDomainAssociations === "function")
assert(typeof paginateListJobs === "function")
console.log(`Amplify index test passed.`);
