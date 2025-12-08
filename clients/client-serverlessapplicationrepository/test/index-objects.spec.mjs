import {
  BadRequestException,
  Capability,
  ConflictException,
  CreateApplicationCommand,
  CreateApplicationVersionCommand,
  CreateCloudFormationChangeSetCommand,
  CreateCloudFormationTemplateCommand,
  DeleteApplicationCommand,
  ForbiddenException,
  GetApplicationCommand,
  GetApplicationPolicyCommand,
  GetCloudFormationTemplateCommand,
  InternalServerErrorException,
  ListApplicationDependenciesCommand,
  ListApplicationVersionsCommand,
  ListApplicationsCommand,
  NotFoundException,
  PutApplicationPolicyCommand,
  ServerlessApplicationRepository,
  ServerlessApplicationRepositoryClient,
  ServerlessApplicationRepositoryServiceException,
  Status,
  TooManyRequestsException,
  UnshareApplicationCommand,
  UpdateApplicationCommand,
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
assert(typeof CreateApplicationVersionCommand === "function");
assert(typeof CreateCloudFormationChangeSetCommand === "function");
assert(typeof CreateCloudFormationTemplateCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplicationPolicyCommand === "function");
assert(typeof GetCloudFormationTemplateCommand === "function");
assert(typeof ListApplicationDependenciesCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplicationVersionsCommand === "function");
assert(typeof PutApplicationPolicyCommand === "function");
assert(typeof UnshareApplicationCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
// enums
assert(typeof Capability === "object");
assert(typeof Status === "object");
// errors
assert(BadRequestException.prototype instanceof ServerlessApplicationRepositoryServiceException);
assert(ConflictException.prototype instanceof ServerlessApplicationRepositoryServiceException);
assert(ForbiddenException.prototype instanceof ServerlessApplicationRepositoryServiceException);
assert(InternalServerErrorException.prototype instanceof ServerlessApplicationRepositoryServiceException);
assert(NotFoundException.prototype instanceof ServerlessApplicationRepositoryServiceException);
assert(TooManyRequestsException.prototype instanceof ServerlessApplicationRepositoryServiceException);
assert(ServerlessApplicationRepositoryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplicationDependencies === "function");
assert(typeof paginateListApplicationVersions === "function");
assert(typeof paginateListApplications === "function");
console.log(`ServerlessApplicationRepository index test passed.`);
