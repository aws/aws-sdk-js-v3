import {
  AddTagsToOnPremisesInstancesCommand,
  AlarmsLimitExceededException,
  ApplicationAlreadyExistsException,
  ApplicationDoesNotExistException,
  ApplicationLimitExceededException,
  ApplicationNameRequiredException,
  ApplicationRevisionSortBy,
  ArnNotSupportedException,
  AutoRollbackEvent,
  BatchGetApplicationRevisionsCommand,
  BatchGetApplicationsCommand,
  BatchGetDeploymentGroupsCommand,
  BatchGetDeploymentInstancesCommand,
  BatchGetDeploymentTargetsCommand,
  BatchGetDeploymentsCommand,
  BatchGetOnPremisesInstancesCommand,
  BatchLimitExceededException,
  BucketNameFilterRequiredException,
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
  DeploymentAlreadyCompletedException,
  DeploymentConfigAlreadyExistsException,
  DeploymentConfigDoesNotExistException,
  DeploymentConfigInUseException,
  DeploymentConfigLimitExceededException,
  DeploymentConfigNameRequiredException,
  DeploymentCreator,
  DeploymentDoesNotExistException,
  DeploymentGroupAlreadyExistsException,
  DeploymentGroupDoesNotExistException,
  DeploymentGroupLimitExceededException,
  DeploymentGroupNameRequiredException,
  DeploymentIdRequiredException,
  DeploymentIsNotInReadyStateException,
  DeploymentLimitExceededException,
  DeploymentNotStartedException,
  DeploymentOption,
  DeploymentReadyAction,
  DeploymentStatus,
  DeploymentTargetDoesNotExistException,
  DeploymentTargetIdRequiredException,
  DeploymentTargetListSizeExceededException,
  DeploymentTargetType,
  DeploymentType,
  DeploymentWaitType,
  DeregisterOnPremisesInstanceCommand,
  DescriptionTooLongException,
  EC2TagFilterType,
  ECSServiceMappingLimitExceededException,
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
  GitHubAccountTokenDoesNotExistException,
  GitHubAccountTokenNameRequiredException,
  GreenFleetProvisioningAction,
  IamArnRequiredException,
  IamSessionArnAlreadyRegisteredException,
  IamUserArnAlreadyRegisteredException,
  IamUserArnRequiredException,
  InstanceAction,
  InstanceDoesNotExistException,
  InstanceIdRequiredException,
  InstanceLimitExceededException,
  InstanceNameAlreadyRegisteredException,
  InstanceNameRequiredException,
  InstanceNotRegisteredException,
  InstanceStatus,
  InvalidAlarmConfigException,
  InvalidApplicationNameException,
  InvalidArnException,
  InvalidAutoRollbackConfigException,
  InvalidAutoScalingGroupException,
  InvalidBlueGreenDeploymentConfigurationException,
  InvalidBucketNameFilterException,
  InvalidComputePlatformException,
  InvalidDeployedStateFilterException,
  InvalidDeploymentConfigNameException,
  InvalidDeploymentGroupNameException,
  InvalidDeploymentIdException,
  InvalidDeploymentInstanceTypeException,
  InvalidDeploymentStatusException,
  InvalidDeploymentStyleException,
  InvalidDeploymentTargetIdException,
  InvalidDeploymentWaitTypeException,
  InvalidEC2TagCombinationException,
  InvalidEC2TagException,
  InvalidECSServiceException,
  InvalidExternalIdException,
  InvalidFileExistsBehaviorException,
  InvalidGitHubAccountTokenException,
  InvalidGitHubAccountTokenNameException,
  InvalidIamSessionArnException,
  InvalidIamUserArnException,
  InvalidIgnoreApplicationStopFailuresValueException,
  InvalidInputException,
  InvalidInstanceNameException,
  InvalidInstanceStatusException,
  InvalidInstanceTypeException,
  InvalidKeyPrefixFilterException,
  InvalidLifecycleEventHookExecutionIdException,
  InvalidLifecycleEventHookExecutionStatusException,
  InvalidLoadBalancerInfoException,
  InvalidMinimumHealthyHostValueException,
  InvalidNextTokenException,
  InvalidOnPremisesTagCombinationException,
  InvalidOperationException,
  InvalidRegistrationStatusException,
  InvalidRevisionException,
  InvalidRoleException,
  InvalidSortByException,
  InvalidSortOrderException,
  InvalidTagException,
  InvalidTagFilterException,
  InvalidTagsToAddException,
  InvalidTargetFilterNameException,
  InvalidTargetGroupPairException,
  InvalidTargetInstancesException,
  InvalidTimeRangeException,
  InvalidTrafficRoutingConfigurationException,
  InvalidTriggerConfigException,
  InvalidUpdateOutdatedInstancesOnlyValueException,
  InvalidZonalDeploymentConfigurationException,
  LifecycleErrorCode,
  LifecycleEventAlreadyCompletedException,
  LifecycleEventStatus,
  LifecycleHookLimitExceededException,
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
  MultipleIamArnsProvidedException,
  OperationNotSupportedException,
  OutdatedInstancesStrategy,
  PutLifecycleEventHookExecutionStatusCommand,
  RegisterApplicationRevisionCommand,
  RegisterOnPremisesInstanceCommand,
  RegistrationStatus,
  RemoveTagsFromOnPremisesInstancesCommand,
  ResourceArnRequiredException,
  ResourceValidationException,
  RevisionDoesNotExistException,
  RevisionLocationType,
  RevisionRequiredException,
  RoleRequiredException,
  SkipWaitTimeForInstanceTerminationCommand,
  SortOrder,
  StopDeploymentCommand,
  StopStatus,
  TagFilterType,
  TagLimitExceededException,
  TagRequiredException,
  TagResourceCommand,
  TagSetListLimitExceededException,
  TargetFilterName,
  TargetLabel,
  TargetStatus,
  ThrottlingException,
  TrafficRoutingType,
  TriggerEventType,
  TriggerTargetsLimitExceededException,
  UnsupportedActionForDeploymentTypeException,
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
assert(typeof CodeDeployClient === "function");
assert(typeof CodeDeploy === "function");
// commands
assert(typeof AddTagsToOnPremisesInstancesCommand === "function");
assert(typeof BatchGetApplicationRevisionsCommand === "function");
assert(typeof BatchGetApplicationsCommand === "function");
assert(typeof BatchGetDeploymentGroupsCommand === "function");
assert(typeof BatchGetDeploymentInstancesCommand === "function");
assert(typeof BatchGetDeploymentsCommand === "function");
assert(typeof BatchGetDeploymentTargetsCommand === "function");
assert(typeof BatchGetOnPremisesInstancesCommand === "function");
assert(typeof ContinueDeploymentCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDeploymentConfigCommand === "function");
assert(typeof CreateDeploymentGroupCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteDeploymentConfigCommand === "function");
assert(typeof DeleteDeploymentGroupCommand === "function");
assert(typeof DeleteGitHubAccountTokenCommand === "function");
assert(typeof DeleteResourcesByExternalIdCommand === "function");
assert(typeof DeregisterOnPremisesInstanceCommand === "function");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplicationRevisionCommand === "function");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeploymentConfigCommand === "function");
assert(typeof GetDeploymentGroupCommand === "function");
assert(typeof GetDeploymentInstanceCommand === "function");
assert(typeof GetDeploymentTargetCommand === "function");
assert(typeof GetOnPremisesInstanceCommand === "function");
assert(typeof ListApplicationRevisionsCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListDeploymentConfigsCommand === "function");
assert(typeof ListDeploymentGroupsCommand === "function");
assert(typeof ListDeploymentInstancesCommand === "function");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListDeploymentTargetsCommand === "function");
assert(typeof ListGitHubAccountTokenNamesCommand === "function");
assert(typeof ListOnPremisesInstancesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutLifecycleEventHookExecutionStatusCommand === "function");
assert(typeof RegisterApplicationRevisionCommand === "function");
assert(typeof RegisterOnPremisesInstanceCommand === "function");
assert(typeof RemoveTagsFromOnPremisesInstancesCommand === "function");
assert(typeof SkipWaitTimeForInstanceTerminationCommand === "function");
assert(typeof StopDeploymentCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateDeploymentGroupCommand === "function");
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
assert(AlarmsLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(ApplicationAlreadyExistsException.prototype instanceof CodeDeployServiceException);
assert(ApplicationDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(ApplicationLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(ApplicationNameRequiredException.prototype instanceof CodeDeployServiceException);
assert(ArnNotSupportedException.prototype instanceof CodeDeployServiceException);
assert(BatchLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(BucketNameFilterRequiredException.prototype instanceof CodeDeployServiceException);
assert(DeploymentAlreadyCompletedException.prototype instanceof CodeDeployServiceException);
assert(DeploymentConfigAlreadyExistsException.prototype instanceof CodeDeployServiceException);
assert(DeploymentConfigDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(DeploymentConfigInUseException.prototype instanceof CodeDeployServiceException);
assert(DeploymentConfigLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(DeploymentConfigNameRequiredException.prototype instanceof CodeDeployServiceException);
assert(DeploymentDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(DeploymentGroupAlreadyExistsException.prototype instanceof CodeDeployServiceException);
assert(DeploymentGroupDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(DeploymentGroupLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(DeploymentGroupNameRequiredException.prototype instanceof CodeDeployServiceException);
assert(DeploymentIdRequiredException.prototype instanceof CodeDeployServiceException);
assert(DeploymentIsNotInReadyStateException.prototype instanceof CodeDeployServiceException);
assert(DeploymentLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(DeploymentNotStartedException.prototype instanceof CodeDeployServiceException);
assert(DeploymentTargetDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(DeploymentTargetIdRequiredException.prototype instanceof CodeDeployServiceException);
assert(DeploymentTargetListSizeExceededException.prototype instanceof CodeDeployServiceException);
assert(DescriptionTooLongException.prototype instanceof CodeDeployServiceException);
assert(ECSServiceMappingLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(GitHubAccountTokenDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(GitHubAccountTokenNameRequiredException.prototype instanceof CodeDeployServiceException);
assert(IamArnRequiredException.prototype instanceof CodeDeployServiceException);
assert(IamSessionArnAlreadyRegisteredException.prototype instanceof CodeDeployServiceException);
assert(IamUserArnAlreadyRegisteredException.prototype instanceof CodeDeployServiceException);
assert(IamUserArnRequiredException.prototype instanceof CodeDeployServiceException);
assert(InstanceDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(InstanceIdRequiredException.prototype instanceof CodeDeployServiceException);
assert(InstanceLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(InstanceNameAlreadyRegisteredException.prototype instanceof CodeDeployServiceException);
assert(InstanceNameRequiredException.prototype instanceof CodeDeployServiceException);
assert(InstanceNotRegisteredException.prototype instanceof CodeDeployServiceException);
assert(InvalidAlarmConfigException.prototype instanceof CodeDeployServiceException);
assert(InvalidApplicationNameException.prototype instanceof CodeDeployServiceException);
assert(InvalidArnException.prototype instanceof CodeDeployServiceException);
assert(InvalidAutoRollbackConfigException.prototype instanceof CodeDeployServiceException);
assert(InvalidAutoScalingGroupException.prototype instanceof CodeDeployServiceException);
assert(InvalidBlueGreenDeploymentConfigurationException.prototype instanceof CodeDeployServiceException);
assert(InvalidBucketNameFilterException.prototype instanceof CodeDeployServiceException);
assert(InvalidComputePlatformException.prototype instanceof CodeDeployServiceException);
assert(InvalidDeployedStateFilterException.prototype instanceof CodeDeployServiceException);
assert(InvalidDeploymentConfigNameException.prototype instanceof CodeDeployServiceException);
assert(InvalidDeploymentGroupNameException.prototype instanceof CodeDeployServiceException);
assert(InvalidDeploymentIdException.prototype instanceof CodeDeployServiceException);
assert(InvalidDeploymentInstanceTypeException.prototype instanceof CodeDeployServiceException);
assert(InvalidDeploymentStatusException.prototype instanceof CodeDeployServiceException);
assert(InvalidDeploymentStyleException.prototype instanceof CodeDeployServiceException);
assert(InvalidDeploymentTargetIdException.prototype instanceof CodeDeployServiceException);
assert(InvalidDeploymentWaitTypeException.prototype instanceof CodeDeployServiceException);
assert(InvalidEC2TagCombinationException.prototype instanceof CodeDeployServiceException);
assert(InvalidEC2TagException.prototype instanceof CodeDeployServiceException);
assert(InvalidECSServiceException.prototype instanceof CodeDeployServiceException);
assert(InvalidExternalIdException.prototype instanceof CodeDeployServiceException);
assert(InvalidFileExistsBehaviorException.prototype instanceof CodeDeployServiceException);
assert(InvalidGitHubAccountTokenException.prototype instanceof CodeDeployServiceException);
assert(InvalidGitHubAccountTokenNameException.prototype instanceof CodeDeployServiceException);
assert(InvalidIamSessionArnException.prototype instanceof CodeDeployServiceException);
assert(InvalidIamUserArnException.prototype instanceof CodeDeployServiceException);
assert(InvalidIgnoreApplicationStopFailuresValueException.prototype instanceof CodeDeployServiceException);
assert(InvalidInputException.prototype instanceof CodeDeployServiceException);
assert(InvalidInstanceNameException.prototype instanceof CodeDeployServiceException);
assert(InvalidInstanceStatusException.prototype instanceof CodeDeployServiceException);
assert(InvalidInstanceTypeException.prototype instanceof CodeDeployServiceException);
assert(InvalidKeyPrefixFilterException.prototype instanceof CodeDeployServiceException);
assert(InvalidLifecycleEventHookExecutionIdException.prototype instanceof CodeDeployServiceException);
assert(InvalidLifecycleEventHookExecutionStatusException.prototype instanceof CodeDeployServiceException);
assert(InvalidLoadBalancerInfoException.prototype instanceof CodeDeployServiceException);
assert(InvalidMinimumHealthyHostValueException.prototype instanceof CodeDeployServiceException);
assert(InvalidNextTokenException.prototype instanceof CodeDeployServiceException);
assert(InvalidOnPremisesTagCombinationException.prototype instanceof CodeDeployServiceException);
assert(InvalidOperationException.prototype instanceof CodeDeployServiceException);
assert(InvalidRegistrationStatusException.prototype instanceof CodeDeployServiceException);
assert(InvalidRevisionException.prototype instanceof CodeDeployServiceException);
assert(InvalidRoleException.prototype instanceof CodeDeployServiceException);
assert(InvalidSortByException.prototype instanceof CodeDeployServiceException);
assert(InvalidSortOrderException.prototype instanceof CodeDeployServiceException);
assert(InvalidTagException.prototype instanceof CodeDeployServiceException);
assert(InvalidTagFilterException.prototype instanceof CodeDeployServiceException);
assert(InvalidTagsToAddException.prototype instanceof CodeDeployServiceException);
assert(InvalidTargetFilterNameException.prototype instanceof CodeDeployServiceException);
assert(InvalidTargetGroupPairException.prototype instanceof CodeDeployServiceException);
assert(InvalidTargetInstancesException.prototype instanceof CodeDeployServiceException);
assert(InvalidTimeRangeException.prototype instanceof CodeDeployServiceException);
assert(InvalidTrafficRoutingConfigurationException.prototype instanceof CodeDeployServiceException);
assert(InvalidTriggerConfigException.prototype instanceof CodeDeployServiceException);
assert(InvalidUpdateOutdatedInstancesOnlyValueException.prototype instanceof CodeDeployServiceException);
assert(InvalidZonalDeploymentConfigurationException.prototype instanceof CodeDeployServiceException);
assert(LifecycleEventAlreadyCompletedException.prototype instanceof CodeDeployServiceException);
assert(LifecycleHookLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(MultipleIamArnsProvidedException.prototype instanceof CodeDeployServiceException);
assert(OperationNotSupportedException.prototype instanceof CodeDeployServiceException);
assert(ResourceArnRequiredException.prototype instanceof CodeDeployServiceException);
assert(ResourceValidationException.prototype instanceof CodeDeployServiceException);
assert(RevisionDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(RevisionRequiredException.prototype instanceof CodeDeployServiceException);
assert(RoleRequiredException.prototype instanceof CodeDeployServiceException);
assert(TagLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(TagRequiredException.prototype instanceof CodeDeployServiceException);
assert(TagSetListLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(ThrottlingException.prototype instanceof CodeDeployServiceException);
assert(TriggerTargetsLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(UnsupportedActionForDeploymentTypeException.prototype instanceof CodeDeployServiceException);
assert(CodeDeployServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForDeploymentSuccessful === "function");
assert(typeof waitUntilDeploymentSuccessful === "function");
// paginators
assert(typeof paginateListApplicationRevisions === "function");
assert(typeof paginateListApplications === "function");
assert(typeof paginateListDeploymentConfigs === "function");
assert(typeof paginateListDeploymentGroups === "function");
assert(typeof paginateListDeploymentInstances === "function");
assert(typeof paginateListDeployments === "function");
console.log(`CodeDeploy index test passed.`);
