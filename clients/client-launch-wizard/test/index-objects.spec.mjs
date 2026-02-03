import {
  CreateDeployment$,
  CreateDeploymentCommand,
  CreateDeploymentInput$,
  CreateDeploymentOutput$,
  DeleteDeployment$,
  DeleteDeploymentCommand,
  DeleteDeploymentInput$,
  DeleteDeploymentOutput$,
  DeploymentConditionalField$,
  DeploymentData$,
  DeploymentDataSummary$,
  DeploymentEventDataSummary$,
  DeploymentFilter$,
  DeploymentFilterKey,
  DeploymentPatternVersionDataSummary$,
  DeploymentPatternVersionFilter$,
  DeploymentPatternVersionFilterKey,
  DeploymentSpecificationsField$,
  DeploymentStatus,
  EventStatus,
  GetDeployment$,
  GetDeploymentCommand,
  GetDeploymentInput$,
  GetDeploymentOutput$,
  GetDeploymentPatternVersion$,
  GetDeploymentPatternVersionCommand,
  GetDeploymentPatternVersionInput$,
  GetDeploymentPatternVersionOutput$,
  GetWorkload$,
  GetWorkloadCommand,
  GetWorkloadDeploymentPattern$,
  GetWorkloadDeploymentPatternCommand,
  GetWorkloadDeploymentPatternInput$,
  GetWorkloadDeploymentPatternOutput$,
  GetWorkloadInput$,
  GetWorkloadOutput$,
  InternalServerException,
  InternalServerException$,
  LaunchWizard,
  LaunchWizardClient,
  LaunchWizardServiceException,
  ListDeploymentEvents$,
  ListDeploymentEventsCommand,
  ListDeploymentEventsInput$,
  ListDeploymentEventsOutput$,
  ListDeploymentPatternVersions$,
  ListDeploymentPatternVersionsCommand,
  ListDeploymentPatternVersionsInput$,
  ListDeploymentPatternVersionsOutput$,
  ListDeployments$,
  ListDeploymentsCommand,
  ListDeploymentsInput$,
  ListDeploymentsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListWorkloadDeploymentPatterns$,
  ListWorkloadDeploymentPatternsCommand,
  ListWorkloadDeploymentPatternsInput$,
  ListWorkloadDeploymentPatternsOutput$,
  ListWorkloads$,
  ListWorkloadsCommand,
  ListWorkloadsInput$,
  ListWorkloadsOutput$,
  paginateListDeploymentEvents,
  paginateListDeploymentPatternVersions,
  paginateListDeployments,
  paginateListWorkloadDeploymentPatterns,
  paginateListWorkloads,
  ResourceLimitException,
  ResourceLimitException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateDeployment$,
  UpdateDeploymentCommand,
  UpdateDeploymentInput$,
  UpdateDeploymentOutput$,
  ValidationException,
  ValidationException$,
  WorkloadData$,
  WorkloadDataSummary$,
  WorkloadDeploymentPatternData$,
  WorkloadDeploymentPatternDataSummary$,
  WorkloadDeploymentPatternStatus,
  WorkloadStatus,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LaunchWizardClient === "function");
assert(typeof LaunchWizard === "function");
// commands
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDeployment$ === "object");
assert(typeof DeleteDeploymentCommand === "function");
assert(typeof DeleteDeployment$ === "object");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeployment$ === "object");
assert(typeof GetDeploymentPatternVersionCommand === "function");
assert(typeof GetDeploymentPatternVersion$ === "object");
assert(typeof GetWorkloadCommand === "function");
assert(typeof GetWorkload$ === "object");
assert(typeof GetWorkloadDeploymentPatternCommand === "function");
assert(typeof GetWorkloadDeploymentPattern$ === "object");
assert(typeof ListDeploymentEventsCommand === "function");
assert(typeof ListDeploymentEvents$ === "object");
assert(typeof ListDeploymentPatternVersionsCommand === "function");
assert(typeof ListDeploymentPatternVersions$ === "object");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListDeployments$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWorkloadDeploymentPatternsCommand === "function");
assert(typeof ListWorkloadDeploymentPatterns$ === "object");
assert(typeof ListWorkloadsCommand === "function");
assert(typeof ListWorkloads$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDeploymentCommand === "function");
assert(typeof UpdateDeployment$ === "object");
// structural schemas
assert(typeof CreateDeploymentInput$ === "object");
assert(typeof CreateDeploymentOutput$ === "object");
assert(typeof DeleteDeploymentInput$ === "object");
assert(typeof DeleteDeploymentOutput$ === "object");
assert(typeof DeploymentConditionalField$ === "object");
assert(typeof DeploymentData$ === "object");
assert(typeof DeploymentDataSummary$ === "object");
assert(typeof DeploymentEventDataSummary$ === "object");
assert(typeof DeploymentFilter$ === "object");
assert(typeof DeploymentPatternVersionDataSummary$ === "object");
assert(typeof DeploymentPatternVersionFilter$ === "object");
assert(typeof DeploymentSpecificationsField$ === "object");
assert(typeof GetDeploymentInput$ === "object");
assert(typeof GetDeploymentOutput$ === "object");
assert(typeof GetDeploymentPatternVersionInput$ === "object");
assert(typeof GetDeploymentPatternVersionOutput$ === "object");
assert(typeof GetWorkloadDeploymentPatternInput$ === "object");
assert(typeof GetWorkloadDeploymentPatternOutput$ === "object");
assert(typeof GetWorkloadInput$ === "object");
assert(typeof GetWorkloadOutput$ === "object");
assert(typeof ListDeploymentEventsInput$ === "object");
assert(typeof ListDeploymentEventsOutput$ === "object");
assert(typeof ListDeploymentPatternVersionsInput$ === "object");
assert(typeof ListDeploymentPatternVersionsOutput$ === "object");
assert(typeof ListDeploymentsInput$ === "object");
assert(typeof ListDeploymentsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListWorkloadDeploymentPatternsInput$ === "object");
assert(typeof ListWorkloadDeploymentPatternsOutput$ === "object");
assert(typeof ListWorkloadsInput$ === "object");
assert(typeof ListWorkloadsOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateDeploymentInput$ === "object");
assert(typeof UpdateDeploymentOutput$ === "object");
assert(typeof WorkloadData$ === "object");
assert(typeof WorkloadDataSummary$ === "object");
assert(typeof WorkloadDeploymentPatternData$ === "object");
assert(typeof WorkloadDeploymentPatternDataSummary$ === "object");
// enums
assert(typeof DeploymentFilterKey === "object");
assert(typeof DeploymentPatternVersionFilterKey === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof EventStatus === "object");
assert(typeof WorkloadDeploymentPatternStatus === "object");
assert(typeof WorkloadStatus === "object");
// errors
assert(InternalServerException.prototype instanceof LaunchWizardServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceLimitException.prototype instanceof LaunchWizardServiceException);
assert(typeof ResourceLimitException$ === "object");
assert(ResourceNotFoundException.prototype instanceof LaunchWizardServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof LaunchWizardServiceException);
assert(typeof ValidationException$ === "object");
assert(LaunchWizardServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDeploymentEvents === "function");
assert(typeof paginateListDeploymentPatternVersions === "function");
assert(typeof paginateListDeployments === "function");
assert(typeof paginateListWorkloadDeploymentPatterns === "function");
assert(typeof paginateListWorkloads === "function");
console.log(`LaunchWizard index test passed.`);
