import {
  CreateDeploymentCommand,
  DeleteDeploymentCommand,
  DeploymentFilterKey,
  DeploymentStatus,
  EventStatus,
  GetDeploymentCommand,
  GetWorkloadCommand,
  GetWorkloadDeploymentPatternCommand,
  InternalServerException,
  LaunchWizard,
  LaunchWizardClient,
  LaunchWizardServiceException,
  ListDeploymentEventsCommand,
  ListDeploymentsCommand,
  ListTagsForResourceCommand,
  ListWorkloadDeploymentPatternsCommand,
  ListWorkloadsCommand,
  ResourceLimitException,
  ResourceNotFoundException,
  TagResourceCommand,
  UntagResourceCommand,
  ValidationException,
  WorkloadDeploymentPatternStatus,
  WorkloadStatus,
  paginateListDeploymentEvents,
  paginateListDeployments,
  paginateListWorkloadDeploymentPatterns,
  paginateListWorkloads,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LaunchWizardClient === "function");
assert(typeof LaunchWizard === "function");
// commands
assert(typeof CreateDeploymentCommand === "function");
assert(typeof DeleteDeploymentCommand === "function");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetWorkloadCommand === "function");
assert(typeof GetWorkloadDeploymentPatternCommand === "function");
assert(typeof ListDeploymentEventsCommand === "function");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWorkloadDeploymentPatternsCommand === "function");
assert(typeof ListWorkloadsCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof DeploymentFilterKey === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof EventStatus === "object");
assert(typeof WorkloadDeploymentPatternStatus === "object");
assert(typeof WorkloadStatus === "object");
// errors
assert(InternalServerException.prototype instanceof LaunchWizardServiceException);
assert(ResourceLimitException.prototype instanceof LaunchWizardServiceException);
assert(ResourceNotFoundException.prototype instanceof LaunchWizardServiceException);
assert(ValidationException.prototype instanceof LaunchWizardServiceException);
assert(LaunchWizardServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDeploymentEvents === "function");
assert(typeof paginateListDeployments === "function");
assert(typeof paginateListWorkloadDeploymentPatterns === "function");
assert(typeof paginateListWorkloads === "function");
console.log(`LaunchWizard index test passed.`);
