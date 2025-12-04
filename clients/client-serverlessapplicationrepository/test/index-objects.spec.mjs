import {
  Capability,
  CreateApplicationCommand,
  CreateApplicationVersionCommand,
  CreateCloudFormationChangeSetCommand,
  CreateCloudFormationTemplateCommand,
  DeleteApplicationCommand,
  GetApplicationCommand,
  GetApplicationPolicyCommand,
  GetCloudFormationTemplateCommand,
  ListApplicationDependenciesCommand,
  ListApplicationVersionsCommand,
  ListApplicationsCommand,
  PutApplicationPolicyCommand,
  ServerlessApplicationRepository,
  ServerlessApplicationRepositoryClient,
  ServerlessApplicationRepositoryServiceException,
  Status,
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
assert(ServerlessApplicationRepositoryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplicationDependencies === "function");
assert(typeof paginateListApplicationVersions === "function");
assert(typeof paginateListApplications === "function");
console.log(`ServerlessApplicationRepository index test passed.`);
