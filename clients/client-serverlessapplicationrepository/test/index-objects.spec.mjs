import {
  ApplicationDependencySummary$,
  ApplicationPolicyStatement$,
  ApplicationSummary$,
  BadRequestException,
  BadRequestException$,
  Capability,
  ConflictException,
  ConflictException$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateApplicationVersion$,
  CreateApplicationVersionCommand,
  CreateApplicationVersionRequest$,
  CreateApplicationVersionResponse$,
  CreateCloudFormationChangeSet$,
  CreateCloudFormationChangeSetCommand,
  CreateCloudFormationChangeSetRequest$,
  CreateCloudFormationChangeSetResponse$,
  CreateCloudFormationTemplate$,
  CreateCloudFormationTemplateCommand,
  CreateCloudFormationTemplateRequest$,
  CreateCloudFormationTemplateResponse$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  ForbiddenException,
  ForbiddenException$,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationPolicy$,
  GetApplicationPolicyCommand,
  GetApplicationPolicyRequest$,
  GetApplicationPolicyResponse$,
  GetApplicationRequest$,
  GetApplicationResponse$,
  GetCloudFormationTemplate$,
  GetCloudFormationTemplateCommand,
  GetCloudFormationTemplateRequest$,
  GetCloudFormationTemplateResponse$,
  InternalServerErrorException,
  InternalServerErrorException$,
  ListApplicationDependencies$,
  ListApplicationDependenciesCommand,
  ListApplicationDependenciesRequest$,
  ListApplicationDependenciesResponse$,
  ListApplicationVersions$,
  ListApplicationVersionsCommand,
  ListApplicationVersionsRequest$,
  ListApplicationVersionsResponse$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  NotFoundException,
  NotFoundException$,
  ParameterDefinition$,
  ParameterValue$,
  PutApplicationPolicy$,
  PutApplicationPolicyCommand,
  PutApplicationPolicyRequest$,
  PutApplicationPolicyResponse$,
  RollbackConfiguration$,
  RollbackTrigger$,
  ServerlessApplicationRepository,
  ServerlessApplicationRepositoryClient,
  ServerlessApplicationRepositoryServiceException,
  Status,
  Tag$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UnshareApplication$,
  UnshareApplicationCommand,
  UnshareApplicationRequest$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
  Version$,
  VersionSummary$,
  paginateListApplicationDependencies,
  paginateListApplicationVersions,
  paginateListApplications,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ServerlessApplicationRepositoryClient === "function");
assert(typeof ServerlessApplicationRepository === "function");
// commands
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateApplicationVersionCommand === "function");
assert(typeof CreateApplicationVersion$ === "object");
assert(typeof CreateCloudFormationChangeSetCommand === "function");
assert(typeof CreateCloudFormationChangeSet$ === "object");
assert(typeof CreateCloudFormationTemplateCommand === "function");
assert(typeof CreateCloudFormationTemplate$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetApplicationPolicyCommand === "function");
assert(typeof GetApplicationPolicy$ === "object");
assert(typeof GetCloudFormationTemplateCommand === "function");
assert(typeof GetCloudFormationTemplate$ === "object");
assert(typeof ListApplicationDependenciesCommand === "function");
assert(typeof ListApplicationDependencies$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListApplicationVersionsCommand === "function");
assert(typeof ListApplicationVersions$ === "object");
assert(typeof PutApplicationPolicyCommand === "function");
assert(typeof PutApplicationPolicy$ === "object");
assert(typeof UnshareApplicationCommand === "function");
assert(typeof UnshareApplication$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
// structural schemas
assert(typeof ApplicationDependencySummary$ === "object");
assert(typeof ApplicationPolicyStatement$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateApplicationVersionRequest$ === "object");
assert(typeof CreateApplicationVersionResponse$ === "object");
assert(typeof CreateCloudFormationChangeSetRequest$ === "object");
assert(typeof CreateCloudFormationChangeSetResponse$ === "object");
assert(typeof CreateCloudFormationTemplateRequest$ === "object");
assert(typeof CreateCloudFormationTemplateResponse$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof GetApplicationPolicyRequest$ === "object");
assert(typeof GetApplicationPolicyResponse$ === "object");
assert(typeof GetApplicationRequest$ === "object");
assert(typeof GetApplicationResponse$ === "object");
assert(typeof GetCloudFormationTemplateRequest$ === "object");
assert(typeof GetCloudFormationTemplateResponse$ === "object");
assert(typeof ListApplicationDependenciesRequest$ === "object");
assert(typeof ListApplicationDependenciesResponse$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListApplicationVersionsRequest$ === "object");
assert(typeof ListApplicationVersionsResponse$ === "object");
assert(typeof ParameterDefinition$ === "object");
assert(typeof ParameterValue$ === "object");
assert(typeof PutApplicationPolicyRequest$ === "object");
assert(typeof PutApplicationPolicyResponse$ === "object");
assert(typeof RollbackConfiguration$ === "object");
assert(typeof RollbackTrigger$ === "object");
assert(typeof Tag$ === "object");
assert(typeof UnshareApplicationRequest$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
assert(typeof Version$ === "object");
assert(typeof VersionSummary$ === "object");
// enums
assert(typeof Capability === "object");
assert(typeof Status === "object");
// errors
assert(BadRequestException.prototype instanceof ServerlessApplicationRepositoryServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof ServerlessApplicationRepositoryServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof ServerlessApplicationRepositoryServiceException);
assert(typeof ForbiddenException$ === "object");
assert(InternalServerErrorException.prototype instanceof ServerlessApplicationRepositoryServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(NotFoundException.prototype instanceof ServerlessApplicationRepositoryServiceException);
assert(typeof NotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof ServerlessApplicationRepositoryServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(ServerlessApplicationRepositoryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplicationDependencies === "function");
assert(typeof paginateListApplicationVersions === "function");
assert(typeof paginateListApplications === "function");
console.log(`ServerlessApplicationRepository index test passed.`);
