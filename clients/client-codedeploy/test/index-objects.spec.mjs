import {
  AddTagsToOnPremisesInstancesCommand,
  ApplicationRevisionSortBy,
  AutoRollbackEvent,
  BatchGetApplicationRevisionsCommand,
  BatchGetApplicationsCommand,
  BatchGetDeploymentGroupsCommand,
  BatchGetDeploymentInstancesCommand,
  BatchGetDeploymentTargetsCommand,
  BatchGetDeploymentsCommand,
  BatchGetOnPremisesInstancesCommand,
  BundleType,
  CodeDeploy,
  CodeDeployClient,
  CodeDeployServiceException,
  ComputePlatform,
  ContinueDeploymentCommand,
  CreateApplicationCommand,
  CreateDeploymentCommand,
  CreateDeploymentConfigCommand,
  CreateDeploymentGroupCommand,
  DeleteApplicationCommand,
  DeleteDeploymentConfigCommand,
  DeleteDeploymentGroupCommand,
  DeleteGitHubAccountTokenCommand,
  DeleteResourcesByExternalIdCommand,
  DeploymentCreator,
  DeploymentOption,
  DeploymentReadyAction,
  DeploymentStatus,
  DeploymentTargetType,
  DeploymentType,
  DeploymentWaitType,
  DeregisterOnPremisesInstanceCommand,
  EC2TagFilterType,
  ErrorCode,
  FileExistsBehavior,
  GetApplicationCommand,
  GetApplicationRevisionCommand,
  GetDeploymentCommand,
  GetDeploymentConfigCommand,
  GetDeploymentGroupCommand,
  GetDeploymentInstanceCommand,
  GetDeploymentTargetCommand,
  GetOnPremisesInstanceCommand,
  GreenFleetProvisioningAction,
  InstanceAction,
  InstanceStatus,
  LifecycleErrorCode,
  LifecycleEventStatus,
  ListApplicationRevisionsCommand,
  ListApplicationsCommand,
  ListDeploymentConfigsCommand,
  ListDeploymentGroupsCommand,
  ListDeploymentInstancesCommand,
  ListDeploymentTargetsCommand,
  ListDeploymentsCommand,
  ListGitHubAccountTokenNamesCommand,
  ListOnPremisesInstancesCommand,
  ListStateFilterAction,
  ListTagsForResourceCommand,
  MinimumHealthyHostsPerZoneType,
  MinimumHealthyHostsType,
  OutdatedInstancesStrategy,
  PutLifecycleEventHookExecutionStatusCommand,
  RegisterApplicationRevisionCommand,
  RegisterOnPremisesInstanceCommand,
  RegistrationStatus,
  RemoveTagsFromOnPremisesInstancesCommand,
  RevisionLocationType,
  SkipWaitTimeForInstanceTerminationCommand,
  SortOrder,
  StopDeploymentCommand,
  StopStatus,
  TagFilterType,
  TagResourceCommand,
  TargetFilterName,
  TargetLabel,
  TargetStatus,
  TrafficRoutingType,
  TriggerEventType,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateDeploymentGroupCommand,
  _InstanceType,
  paginateListApplicationRevisions,
  paginateListApplications,
  paginateListDeploymentConfigs,
  paginateListDeploymentGroups,
  paginateListDeploymentInstances,
  paginateListDeployments,
  waitForDeploymentSuccessful,
  waitUntilDeploymentSuccessful,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeDeployClient === "function")
assert(typeof CodeDeploy === "function")
// commands
assert(typeof AddTagsToOnPremisesInstancesCommand === "function")
assert(typeof BatchGetApplicationRevisionsCommand === "function")
assert(typeof BatchGetApplicationsCommand === "function")
assert(typeof BatchGetDeploymentGroupsCommand === "function")
assert(typeof BatchGetDeploymentInstancesCommand === "function")
assert(typeof BatchGetDeploymentsCommand === "function")
assert(typeof BatchGetDeploymentTargetsCommand === "function")
assert(typeof BatchGetOnPremisesInstancesCommand === "function")
assert(typeof ContinueDeploymentCommand === "function")
assert(typeof CreateApplicationCommand === "function")
assert(typeof CreateDeploymentCommand === "function")
assert(typeof CreateDeploymentConfigCommand === "function")
assert(typeof CreateDeploymentGroupCommand === "function")
assert(typeof DeleteApplicationCommand === "function")
assert(typeof DeleteDeploymentConfigCommand === "function")
assert(typeof DeleteDeploymentGroupCommand === "function")
assert(typeof DeleteGitHubAccountTokenCommand === "function")
assert(typeof DeleteResourcesByExternalIdCommand === "function")
assert(typeof DeregisterOnPremisesInstanceCommand === "function")
assert(typeof GetApplicationCommand === "function")
assert(typeof GetApplicationRevisionCommand === "function")
assert(typeof GetDeploymentCommand === "function")
assert(typeof GetDeploymentConfigCommand === "function")
assert(typeof GetDeploymentGroupCommand === "function")
assert(typeof GetDeploymentInstanceCommand === "function")
assert(typeof GetDeploymentTargetCommand === "function")
assert(typeof GetOnPremisesInstanceCommand === "function")
assert(typeof ListApplicationRevisionsCommand === "function")
assert(typeof ListApplicationsCommand === "function")
assert(typeof ListDeploymentConfigsCommand === "function")
assert(typeof ListDeploymentGroupsCommand === "function")
assert(typeof ListDeploymentInstancesCommand === "function")
assert(typeof ListDeploymentsCommand === "function")
assert(typeof ListDeploymentTargetsCommand === "function")
assert(typeof ListGitHubAccountTokenNamesCommand === "function")
assert(typeof ListOnPremisesInstancesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutLifecycleEventHookExecutionStatusCommand === "function")
assert(typeof RegisterApplicationRevisionCommand === "function")
assert(typeof RegisterOnPremisesInstanceCommand === "function")
assert(typeof RemoveTagsFromOnPremisesInstancesCommand === "function")
assert(typeof SkipWaitTimeForInstanceTerminationCommand === "function")
assert(typeof StopDeploymentCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateApplicationCommand === "function")
assert(typeof UpdateDeploymentGroupCommand === "function")
// enums
assert(typeof ApplicationRevisionSortBy === "object");
assert(typeof AutoRollbackEvent === "object");
assert(typeof BundleType === "object");
assert(typeof ComputePlatform === "object");
assert(typeof DeploymentCreator === "object");
assert(typeof DeploymentOption === "object");
assert(typeof DeploymentReadyAction === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof DeploymentTargetType === "object");
assert(typeof DeploymentType === "object");
assert(typeof DeploymentWaitType === "object");
assert(typeof EC2TagFilterType === "object");
assert(typeof ErrorCode === "object");
assert(typeof FileExistsBehavior === "object");
assert(typeof GreenFleetProvisioningAction === "object");
assert(typeof InstanceAction === "object");
assert(typeof InstanceStatus === "object");
assert(typeof _InstanceType === "object");
assert(typeof LifecycleErrorCode === "object");
assert(typeof LifecycleEventStatus === "object");
assert(typeof ListStateFilterAction === "object");
assert(typeof MinimumHealthyHostsPerZoneType === "object");
assert(typeof MinimumHealthyHostsType === "object");
assert(typeof OutdatedInstancesStrategy === "object");
assert(typeof RegistrationStatus === "object");
assert(typeof RevisionLocationType === "object");
assert(typeof SortOrder === "object");
assert(typeof StopStatus === "object");
assert(typeof TagFilterType === "object");
assert(typeof TargetFilterName === "object");
assert(typeof TargetLabel === "object");
assert(typeof TargetStatus === "object");
assert(typeof TrafficRoutingType === "object");
assert(typeof TriggerEventType === "object");
// errors
assert(CodeDeployServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForDeploymentSuccessful === "function")
assert(typeof waitUntilDeploymentSuccessful === "function")
// paginators
assert(typeof paginateListApplicationRevisions === "function")
assert(typeof paginateListApplications === "function")
assert(typeof paginateListDeploymentConfigs === "function")
assert(typeof paginateListDeploymentGroups === "function")
assert(typeof paginateListDeploymentInstances === "function")
assert(typeof paginateListDeployments === "function")
console.log(`CodeDeploy index test passed.`);
