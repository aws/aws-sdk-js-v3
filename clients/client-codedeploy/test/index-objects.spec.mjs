import {
  AddTagsToOnPremisesInstances$,
  AddTagsToOnPremisesInstancesCommand,
  AddTagsToOnPremisesInstancesInput$,
  Alarm$,
  AlarmConfiguration$,
  AlarmsLimitExceededException,
  AlarmsLimitExceededException$,
  AppSpecContent$,
  ApplicationAlreadyExistsException,
  ApplicationAlreadyExistsException$,
  ApplicationDoesNotExistException,
  ApplicationDoesNotExistException$,
  ApplicationInfo$,
  ApplicationLimitExceededException,
  ApplicationLimitExceededException$,
  ApplicationNameRequiredException,
  ApplicationNameRequiredException$,
  ApplicationRevisionSortBy,
  ArnNotSupportedException,
  ArnNotSupportedException$,
  AutoRollbackConfiguration$,
  AutoRollbackEvent,
  AutoScalingGroup$,
  BatchGetApplicationRevisions$,
  BatchGetApplicationRevisionsCommand,
  BatchGetApplicationRevisionsInput$,
  BatchGetApplicationRevisionsOutput$,
  BatchGetApplications$,
  BatchGetApplicationsCommand,
  BatchGetApplicationsInput$,
  BatchGetApplicationsOutput$,
  BatchGetDeploymentGroups$,
  BatchGetDeploymentGroupsCommand,
  BatchGetDeploymentGroupsInput$,
  BatchGetDeploymentGroupsOutput$,
  BatchGetDeploymentInstances$,
  BatchGetDeploymentInstancesCommand,
  BatchGetDeploymentInstancesInput$,
  BatchGetDeploymentInstancesOutput$,
  BatchGetDeploymentTargets$,
  BatchGetDeploymentTargetsCommand,
  BatchGetDeploymentTargetsInput$,
  BatchGetDeploymentTargetsOutput$,
  BatchGetDeployments$,
  BatchGetDeploymentsCommand,
  BatchGetDeploymentsInput$,
  BatchGetDeploymentsOutput$,
  BatchGetOnPremisesInstances$,
  BatchGetOnPremisesInstancesCommand,
  BatchGetOnPremisesInstancesInput$,
  BatchGetOnPremisesInstancesOutput$,
  BatchLimitExceededException,
  BatchLimitExceededException$,
  BlueGreenDeploymentConfiguration$,
  BlueInstanceTerminationOption$,
  BucketNameFilterRequiredException,
  BucketNameFilterRequiredException$,
  BundleType,
  CloudFormationTarget$,
  CodeDeploy,
  CodeDeployClient,
  CodeDeployServiceException,
  ComputePlatform,
  ContinueDeployment$,
  ContinueDeploymentCommand,
  ContinueDeploymentInput$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationInput$,
  CreateApplicationOutput$,
  CreateDeployment$,
  CreateDeploymentCommand,
  CreateDeploymentConfig$,
  CreateDeploymentConfigCommand,
  CreateDeploymentConfigInput$,
  CreateDeploymentConfigOutput$,
  CreateDeploymentGroup$,
  CreateDeploymentGroupCommand,
  CreateDeploymentGroupInput$,
  CreateDeploymentGroupOutput$,
  CreateDeploymentInput$,
  CreateDeploymentOutput$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationInput$,
  DeleteDeploymentConfig$,
  DeleteDeploymentConfigCommand,
  DeleteDeploymentConfigInput$,
  DeleteDeploymentGroup$,
  DeleteDeploymentGroupCommand,
  DeleteDeploymentGroupInput$,
  DeleteDeploymentGroupOutput$,
  DeleteGitHubAccountToken$,
  DeleteGitHubAccountTokenCommand,
  DeleteGitHubAccountTokenInput$,
  DeleteGitHubAccountTokenOutput$,
  DeleteResourcesByExternalId$,
  DeleteResourcesByExternalIdCommand,
  DeleteResourcesByExternalIdInput$,
  DeleteResourcesByExternalIdOutput$,
  DeploymentAlreadyCompletedException,
  DeploymentAlreadyCompletedException$,
  DeploymentConfigAlreadyExistsException,
  DeploymentConfigAlreadyExistsException$,
  DeploymentConfigDoesNotExistException,
  DeploymentConfigDoesNotExistException$,
  DeploymentConfigInUseException,
  DeploymentConfigInUseException$,
  DeploymentConfigInfo$,
  DeploymentConfigLimitExceededException,
  DeploymentConfigLimitExceededException$,
  DeploymentConfigNameRequiredException,
  DeploymentConfigNameRequiredException$,
  DeploymentCreator,
  DeploymentDoesNotExistException,
  DeploymentDoesNotExistException$,
  DeploymentGroupAlreadyExistsException,
  DeploymentGroupAlreadyExistsException$,
  DeploymentGroupDoesNotExistException,
  DeploymentGroupDoesNotExistException$,
  DeploymentGroupInfo$,
  DeploymentGroupLimitExceededException,
  DeploymentGroupLimitExceededException$,
  DeploymentGroupNameRequiredException,
  DeploymentGroupNameRequiredException$,
  DeploymentIdRequiredException,
  DeploymentIdRequiredException$,
  DeploymentInfo$,
  DeploymentIsNotInReadyStateException,
  DeploymentIsNotInReadyStateException$,
  DeploymentLimitExceededException,
  DeploymentLimitExceededException$,
  DeploymentNotStartedException,
  DeploymentNotStartedException$,
  DeploymentOption,
  DeploymentOverview$,
  DeploymentReadyAction,
  DeploymentReadyOption$,
  DeploymentStatus,
  DeploymentStyle$,
  DeploymentTarget$,
  DeploymentTargetDoesNotExistException,
  DeploymentTargetDoesNotExistException$,
  DeploymentTargetIdRequiredException,
  DeploymentTargetIdRequiredException$,
  DeploymentTargetListSizeExceededException,
  DeploymentTargetListSizeExceededException$,
  DeploymentTargetType,
  DeploymentType,
  DeploymentWaitType,
  DeregisterOnPremisesInstance$,
  DeregisterOnPremisesInstanceCommand,
  DeregisterOnPremisesInstanceInput$,
  DescriptionTooLongException,
  DescriptionTooLongException$,
  Diagnostics$,
  EC2TagFilter$,
  EC2TagFilterType,
  EC2TagSet$,
  ECSService$,
  ECSServiceMappingLimitExceededException,
  ECSServiceMappingLimitExceededException$,
  ECSTarget$,
  ECSTaskSet$,
  ELBInfo$,
  ErrorCode,
  ErrorInformation$,
  FileExistsBehavior,
  GenericRevisionInfo$,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationInput$,
  GetApplicationOutput$,
  GetApplicationRevision$,
  GetApplicationRevisionCommand,
  GetApplicationRevisionInput$,
  GetApplicationRevisionOutput$,
  GetDeployment$,
  GetDeploymentCommand,
  GetDeploymentConfig$,
  GetDeploymentConfigCommand,
  GetDeploymentConfigInput$,
  GetDeploymentConfigOutput$,
  GetDeploymentGroup$,
  GetDeploymentGroupCommand,
  GetDeploymentGroupInput$,
  GetDeploymentGroupOutput$,
  GetDeploymentInput$,
  GetDeploymentInstance$,
  GetDeploymentInstanceCommand,
  GetDeploymentInstanceInput$,
  GetDeploymentInstanceOutput$,
  GetDeploymentOutput$,
  GetDeploymentTarget$,
  GetDeploymentTargetCommand,
  GetDeploymentTargetInput$,
  GetDeploymentTargetOutput$,
  GetOnPremisesInstance$,
  GetOnPremisesInstanceCommand,
  GetOnPremisesInstanceInput$,
  GetOnPremisesInstanceOutput$,
  GitHubAccountTokenDoesNotExistException,
  GitHubAccountTokenDoesNotExistException$,
  GitHubAccountTokenNameRequiredException,
  GitHubAccountTokenNameRequiredException$,
  GitHubLocation$,
  GreenFleetProvisioningAction,
  GreenFleetProvisioningOption$,
  IamArnRequiredException,
  IamArnRequiredException$,
  IamSessionArnAlreadyRegisteredException,
  IamSessionArnAlreadyRegisteredException$,
  IamUserArnAlreadyRegisteredException,
  IamUserArnAlreadyRegisteredException$,
  IamUserArnRequiredException,
  IamUserArnRequiredException$,
  InstanceAction,
  InstanceDoesNotExistException,
  InstanceDoesNotExistException$,
  InstanceIdRequiredException,
  InstanceIdRequiredException$,
  InstanceInfo$,
  InstanceLimitExceededException,
  InstanceLimitExceededException$,
  InstanceNameAlreadyRegisteredException,
  InstanceNameAlreadyRegisteredException$,
  InstanceNameRequiredException,
  InstanceNameRequiredException$,
  InstanceNotRegisteredException,
  InstanceNotRegisteredException$,
  InstanceStatus,
  InstanceSummary$,
  InstanceTarget$,
  InvalidAlarmConfigException,
  InvalidAlarmConfigException$,
  InvalidApplicationNameException,
  InvalidApplicationNameException$,
  InvalidArnException,
  InvalidArnException$,
  InvalidAutoRollbackConfigException,
  InvalidAutoRollbackConfigException$,
  InvalidAutoScalingGroupException,
  InvalidAutoScalingGroupException$,
  InvalidBlueGreenDeploymentConfigurationException,
  InvalidBlueGreenDeploymentConfigurationException$,
  InvalidBucketNameFilterException,
  InvalidBucketNameFilterException$,
  InvalidComputePlatformException,
  InvalidComputePlatformException$,
  InvalidDeployedStateFilterException,
  InvalidDeployedStateFilterException$,
  InvalidDeploymentConfigNameException,
  InvalidDeploymentConfigNameException$,
  InvalidDeploymentGroupNameException,
  InvalidDeploymentGroupNameException$,
  InvalidDeploymentIdException,
  InvalidDeploymentIdException$,
  InvalidDeploymentInstanceTypeException,
  InvalidDeploymentInstanceTypeException$,
  InvalidDeploymentStatusException,
  InvalidDeploymentStatusException$,
  InvalidDeploymentStyleException,
  InvalidDeploymentStyleException$,
  InvalidDeploymentTargetIdException,
  InvalidDeploymentTargetIdException$,
  InvalidDeploymentWaitTypeException,
  InvalidDeploymentWaitTypeException$,
  InvalidEC2TagCombinationException,
  InvalidEC2TagCombinationException$,
  InvalidEC2TagException,
  InvalidEC2TagException$,
  InvalidECSServiceException,
  InvalidECSServiceException$,
  InvalidExternalIdException,
  InvalidExternalIdException$,
  InvalidFileExistsBehaviorException,
  InvalidFileExistsBehaviorException$,
  InvalidGitHubAccountTokenException,
  InvalidGitHubAccountTokenException$,
  InvalidGitHubAccountTokenNameException,
  InvalidGitHubAccountTokenNameException$,
  InvalidIamSessionArnException,
  InvalidIamSessionArnException$,
  InvalidIamUserArnException,
  InvalidIamUserArnException$,
  InvalidIgnoreApplicationStopFailuresValueException,
  InvalidIgnoreApplicationStopFailuresValueException$,
  InvalidInputException,
  InvalidInputException$,
  InvalidInstanceNameException,
  InvalidInstanceNameException$,
  InvalidInstanceStatusException,
  InvalidInstanceStatusException$,
  InvalidInstanceTypeException,
  InvalidInstanceTypeException$,
  InvalidKeyPrefixFilterException,
  InvalidKeyPrefixFilterException$,
  InvalidLifecycleEventHookExecutionIdException,
  InvalidLifecycleEventHookExecutionIdException$,
  InvalidLifecycleEventHookExecutionStatusException,
  InvalidLifecycleEventHookExecutionStatusException$,
  InvalidLoadBalancerInfoException,
  InvalidLoadBalancerInfoException$,
  InvalidMinimumHealthyHostValueException,
  InvalidMinimumHealthyHostValueException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidOnPremisesTagCombinationException,
  InvalidOnPremisesTagCombinationException$,
  InvalidOperationException,
  InvalidOperationException$,
  InvalidRegistrationStatusException,
  InvalidRegistrationStatusException$,
  InvalidRevisionException,
  InvalidRevisionException$,
  InvalidRoleException,
  InvalidRoleException$,
  InvalidSortByException,
  InvalidSortByException$,
  InvalidSortOrderException,
  InvalidSortOrderException$,
  InvalidTagException,
  InvalidTagException$,
  InvalidTagFilterException,
  InvalidTagFilterException$,
  InvalidTagsToAddException,
  InvalidTagsToAddException$,
  InvalidTargetFilterNameException,
  InvalidTargetFilterNameException$,
  InvalidTargetGroupPairException,
  InvalidTargetGroupPairException$,
  InvalidTargetInstancesException,
  InvalidTargetInstancesException$,
  InvalidTimeRangeException,
  InvalidTimeRangeException$,
  InvalidTrafficRoutingConfigurationException,
  InvalidTrafficRoutingConfigurationException$,
  InvalidTriggerConfigException,
  InvalidTriggerConfigException$,
  InvalidUpdateOutdatedInstancesOnlyValueException,
  InvalidUpdateOutdatedInstancesOnlyValueException$,
  InvalidZonalDeploymentConfigurationException,
  InvalidZonalDeploymentConfigurationException$,
  LambdaFunctionInfo$,
  LambdaTarget$,
  LastDeploymentInfo$,
  LifecycleErrorCode,
  LifecycleEvent$,
  LifecycleEventAlreadyCompletedException,
  LifecycleEventAlreadyCompletedException$,
  LifecycleEventStatus,
  LifecycleHookLimitExceededException,
  LifecycleHookLimitExceededException$,
  ListApplicationRevisions$,
  ListApplicationRevisionsCommand,
  ListApplicationRevisionsInput$,
  ListApplicationRevisionsOutput$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsInput$,
  ListApplicationsOutput$,
  ListDeploymentConfigs$,
  ListDeploymentConfigsCommand,
  ListDeploymentConfigsInput$,
  ListDeploymentConfigsOutput$,
  ListDeploymentGroups$,
  ListDeploymentGroupsCommand,
  ListDeploymentGroupsInput$,
  ListDeploymentGroupsOutput$,
  ListDeploymentInstances$,
  ListDeploymentInstancesCommand,
  ListDeploymentInstancesInput$,
  ListDeploymentInstancesOutput$,
  ListDeploymentTargets$,
  ListDeploymentTargetsCommand,
  ListDeploymentTargetsInput$,
  ListDeploymentTargetsOutput$,
  ListDeployments$,
  ListDeploymentsCommand,
  ListDeploymentsInput$,
  ListDeploymentsOutput$,
  ListGitHubAccountTokenNames$,
  ListGitHubAccountTokenNamesCommand,
  ListGitHubAccountTokenNamesInput$,
  ListGitHubAccountTokenNamesOutput$,
  ListOnPremisesInstances$,
  ListOnPremisesInstancesCommand,
  ListOnPremisesInstancesInput$,
  ListOnPremisesInstancesOutput$,
  ListStateFilterAction,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  LoadBalancerInfo$,
  MinimumHealthyHosts$,
  MinimumHealthyHostsPerZone$,
  MinimumHealthyHostsPerZoneType,
  MinimumHealthyHostsType,
  MultipleIamArnsProvidedException,
  MultipleIamArnsProvidedException$,
  OnPremisesTagSet$,
  OperationNotSupportedException,
  OperationNotSupportedException$,
  OutdatedInstancesStrategy,
  PutLifecycleEventHookExecutionStatus$,
  PutLifecycleEventHookExecutionStatusCommand,
  PutLifecycleEventHookExecutionStatusInput$,
  PutLifecycleEventHookExecutionStatusOutput$,
  RawString$,
  RegisterApplicationRevision$,
  RegisterApplicationRevisionCommand,
  RegisterApplicationRevisionInput$,
  RegisterOnPremisesInstance$,
  RegisterOnPremisesInstanceCommand,
  RegisterOnPremisesInstanceInput$,
  RegistrationStatus,
  RelatedDeployments$,
  RemoveTagsFromOnPremisesInstances$,
  RemoveTagsFromOnPremisesInstancesCommand,
  RemoveTagsFromOnPremisesInstancesInput$,
  ResourceArnRequiredException,
  ResourceArnRequiredException$,
  ResourceValidationException,
  ResourceValidationException$,
  RevisionDoesNotExistException,
  RevisionDoesNotExistException$,
  RevisionInfo$,
  RevisionLocation$,
  RevisionLocationType,
  RevisionRequiredException,
  RevisionRequiredException$,
  RoleRequiredException,
  RoleRequiredException$,
  RollbackInfo$,
  S3Location$,
  SkipWaitTimeForInstanceTermination$,
  SkipWaitTimeForInstanceTerminationCommand,
  SkipWaitTimeForInstanceTerminationInput$,
  SortOrder,
  StopDeployment$,
  StopDeploymentCommand,
  StopDeploymentInput$,
  StopDeploymentOutput$,
  StopStatus,
  Tag$,
  TagFilter$,
  TagFilterType,
  TagLimitExceededException,
  TagLimitExceededException$,
  TagRequiredException,
  TagRequiredException$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TagSetListLimitExceededException,
  TagSetListLimitExceededException$,
  TargetFilterName,
  TargetGroupInfo$,
  TargetGroupPairInfo$,
  TargetInstances$,
  TargetLabel,
  TargetStatus,
  ThrottlingException,
  ThrottlingException$,
  TimeBasedCanary$,
  TimeBasedLinear$,
  TimeRange$,
  TrafficRoute$,
  TrafficRoutingConfig$,
  TrafficRoutingType,
  TriggerConfig$,
  TriggerEventType,
  TriggerTargetsLimitExceededException,
  TriggerTargetsLimitExceededException$,
  UnsupportedActionForDeploymentTypeException,
  UnsupportedActionForDeploymentTypeException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationInput$,
  UpdateDeploymentGroup$,
  UpdateDeploymentGroupCommand,
  UpdateDeploymentGroupInput$,
  UpdateDeploymentGroupOutput$,
  ZonalConfig$,
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
assert(typeof AddTagsToOnPremisesInstances$ === "object");
assert(typeof BatchGetApplicationRevisionsCommand === "function");
assert(typeof BatchGetApplicationRevisions$ === "object");
assert(typeof BatchGetApplicationsCommand === "function");
assert(typeof BatchGetApplications$ === "object");
assert(typeof BatchGetDeploymentGroupsCommand === "function");
assert(typeof BatchGetDeploymentGroups$ === "object");
assert(typeof BatchGetDeploymentInstancesCommand === "function");
assert(typeof BatchGetDeploymentInstances$ === "object");
assert(typeof BatchGetDeploymentsCommand === "function");
assert(typeof BatchGetDeployments$ === "object");
assert(typeof BatchGetDeploymentTargetsCommand === "function");
assert(typeof BatchGetDeploymentTargets$ === "object");
assert(typeof BatchGetOnPremisesInstancesCommand === "function");
assert(typeof BatchGetOnPremisesInstances$ === "object");
assert(typeof ContinueDeploymentCommand === "function");
assert(typeof ContinueDeployment$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateDeploymentCommand === "function");
assert(typeof CreateDeployment$ === "object");
assert(typeof CreateDeploymentConfigCommand === "function");
assert(typeof CreateDeploymentConfig$ === "object");
assert(typeof CreateDeploymentGroupCommand === "function");
assert(typeof CreateDeploymentGroup$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteDeploymentConfigCommand === "function");
assert(typeof DeleteDeploymentConfig$ === "object");
assert(typeof DeleteDeploymentGroupCommand === "function");
assert(typeof DeleteDeploymentGroup$ === "object");
assert(typeof DeleteGitHubAccountTokenCommand === "function");
assert(typeof DeleteGitHubAccountToken$ === "object");
assert(typeof DeleteResourcesByExternalIdCommand === "function");
assert(typeof DeleteResourcesByExternalId$ === "object");
assert(typeof DeregisterOnPremisesInstanceCommand === "function");
assert(typeof DeregisterOnPremisesInstance$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetApplicationRevisionCommand === "function");
assert(typeof GetApplicationRevision$ === "object");
assert(typeof GetDeploymentCommand === "function");
assert(typeof GetDeployment$ === "object");
assert(typeof GetDeploymentConfigCommand === "function");
assert(typeof GetDeploymentConfig$ === "object");
assert(typeof GetDeploymentGroupCommand === "function");
assert(typeof GetDeploymentGroup$ === "object");
assert(typeof GetDeploymentInstanceCommand === "function");
assert(typeof GetDeploymentInstance$ === "object");
assert(typeof GetDeploymentTargetCommand === "function");
assert(typeof GetDeploymentTarget$ === "object");
assert(typeof GetOnPremisesInstanceCommand === "function");
assert(typeof GetOnPremisesInstance$ === "object");
assert(typeof ListApplicationRevisionsCommand === "function");
assert(typeof ListApplicationRevisions$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListDeploymentConfigsCommand === "function");
assert(typeof ListDeploymentConfigs$ === "object");
assert(typeof ListDeploymentGroupsCommand === "function");
assert(typeof ListDeploymentGroups$ === "object");
assert(typeof ListDeploymentInstancesCommand === "function");
assert(typeof ListDeploymentInstances$ === "object");
assert(typeof ListDeploymentsCommand === "function");
assert(typeof ListDeployments$ === "object");
assert(typeof ListDeploymentTargetsCommand === "function");
assert(typeof ListDeploymentTargets$ === "object");
assert(typeof ListGitHubAccountTokenNamesCommand === "function");
assert(typeof ListGitHubAccountTokenNames$ === "object");
assert(typeof ListOnPremisesInstancesCommand === "function");
assert(typeof ListOnPremisesInstances$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutLifecycleEventHookExecutionStatusCommand === "function");
assert(typeof PutLifecycleEventHookExecutionStatus$ === "object");
assert(typeof RegisterApplicationRevisionCommand === "function");
assert(typeof RegisterApplicationRevision$ === "object");
assert(typeof RegisterOnPremisesInstanceCommand === "function");
assert(typeof RegisterOnPremisesInstance$ === "object");
assert(typeof RemoveTagsFromOnPremisesInstancesCommand === "function");
assert(typeof RemoveTagsFromOnPremisesInstances$ === "object");
assert(typeof SkipWaitTimeForInstanceTerminationCommand === "function");
assert(typeof SkipWaitTimeForInstanceTermination$ === "object");
assert(typeof StopDeploymentCommand === "function");
assert(typeof StopDeployment$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateDeploymentGroupCommand === "function");
assert(typeof UpdateDeploymentGroup$ === "object");
// structural schemas
assert(typeof AddTagsToOnPremisesInstancesInput$ === "object");
assert(typeof Alarm$ === "object");
assert(typeof AlarmConfiguration$ === "object");
assert(typeof ApplicationInfo$ === "object");
assert(typeof AppSpecContent$ === "object");
assert(typeof AutoRollbackConfiguration$ === "object");
assert(typeof AutoScalingGroup$ === "object");
assert(typeof BatchGetApplicationRevisionsInput$ === "object");
assert(typeof BatchGetApplicationRevisionsOutput$ === "object");
assert(typeof BatchGetApplicationsInput$ === "object");
assert(typeof BatchGetApplicationsOutput$ === "object");
assert(typeof BatchGetDeploymentGroupsInput$ === "object");
assert(typeof BatchGetDeploymentGroupsOutput$ === "object");
assert(typeof BatchGetDeploymentInstancesInput$ === "object");
assert(typeof BatchGetDeploymentInstancesOutput$ === "object");
assert(typeof BatchGetDeploymentsInput$ === "object");
assert(typeof BatchGetDeploymentsOutput$ === "object");
assert(typeof BatchGetDeploymentTargetsInput$ === "object");
assert(typeof BatchGetDeploymentTargetsOutput$ === "object");
assert(typeof BatchGetOnPremisesInstancesInput$ === "object");
assert(typeof BatchGetOnPremisesInstancesOutput$ === "object");
assert(typeof BlueGreenDeploymentConfiguration$ === "object");
assert(typeof BlueInstanceTerminationOption$ === "object");
assert(typeof CloudFormationTarget$ === "object");
assert(typeof ContinueDeploymentInput$ === "object");
assert(typeof CreateApplicationInput$ === "object");
assert(typeof CreateApplicationOutput$ === "object");
assert(typeof CreateDeploymentConfigInput$ === "object");
assert(typeof CreateDeploymentConfigOutput$ === "object");
assert(typeof CreateDeploymentGroupInput$ === "object");
assert(typeof CreateDeploymentGroupOutput$ === "object");
assert(typeof CreateDeploymentInput$ === "object");
assert(typeof CreateDeploymentOutput$ === "object");
assert(typeof DeleteApplicationInput$ === "object");
assert(typeof DeleteDeploymentConfigInput$ === "object");
assert(typeof DeleteDeploymentGroupInput$ === "object");
assert(typeof DeleteDeploymentGroupOutput$ === "object");
assert(typeof DeleteGitHubAccountTokenInput$ === "object");
assert(typeof DeleteGitHubAccountTokenOutput$ === "object");
assert(typeof DeleteResourcesByExternalIdInput$ === "object");
assert(typeof DeleteResourcesByExternalIdOutput$ === "object");
assert(typeof DeploymentConfigInfo$ === "object");
assert(typeof DeploymentGroupInfo$ === "object");
assert(typeof DeploymentInfo$ === "object");
assert(typeof DeploymentOverview$ === "object");
assert(typeof DeploymentReadyOption$ === "object");
assert(typeof DeploymentStyle$ === "object");
assert(typeof DeploymentTarget$ === "object");
assert(typeof DeregisterOnPremisesInstanceInput$ === "object");
assert(typeof Diagnostics$ === "object");
assert(typeof EC2TagFilter$ === "object");
assert(typeof EC2TagSet$ === "object");
assert(typeof ECSService$ === "object");
assert(typeof ECSTarget$ === "object");
assert(typeof ECSTaskSet$ === "object");
assert(typeof ELBInfo$ === "object");
assert(typeof ErrorInformation$ === "object");
assert(typeof GenericRevisionInfo$ === "object");
assert(typeof GetApplicationInput$ === "object");
assert(typeof GetApplicationOutput$ === "object");
assert(typeof GetApplicationRevisionInput$ === "object");
assert(typeof GetApplicationRevisionOutput$ === "object");
assert(typeof GetDeploymentConfigInput$ === "object");
assert(typeof GetDeploymentConfigOutput$ === "object");
assert(typeof GetDeploymentGroupInput$ === "object");
assert(typeof GetDeploymentGroupOutput$ === "object");
assert(typeof GetDeploymentInput$ === "object");
assert(typeof GetDeploymentInstanceInput$ === "object");
assert(typeof GetDeploymentInstanceOutput$ === "object");
assert(typeof GetDeploymentOutput$ === "object");
assert(typeof GetDeploymentTargetInput$ === "object");
assert(typeof GetDeploymentTargetOutput$ === "object");
assert(typeof GetOnPremisesInstanceInput$ === "object");
assert(typeof GetOnPremisesInstanceOutput$ === "object");
assert(typeof GitHubLocation$ === "object");
assert(typeof GreenFleetProvisioningOption$ === "object");
assert(typeof InstanceInfo$ === "object");
assert(typeof InstanceSummary$ === "object");
assert(typeof InstanceTarget$ === "object");
assert(typeof LambdaFunctionInfo$ === "object");
assert(typeof LambdaTarget$ === "object");
assert(typeof LastDeploymentInfo$ === "object");
assert(typeof LifecycleEvent$ === "object");
assert(typeof ListApplicationRevisionsInput$ === "object");
assert(typeof ListApplicationRevisionsOutput$ === "object");
assert(typeof ListApplicationsInput$ === "object");
assert(typeof ListApplicationsOutput$ === "object");
assert(typeof ListDeploymentConfigsInput$ === "object");
assert(typeof ListDeploymentConfigsOutput$ === "object");
assert(typeof ListDeploymentGroupsInput$ === "object");
assert(typeof ListDeploymentGroupsOutput$ === "object");
assert(typeof ListDeploymentInstancesInput$ === "object");
assert(typeof ListDeploymentInstancesOutput$ === "object");
assert(typeof ListDeploymentsInput$ === "object");
assert(typeof ListDeploymentsOutput$ === "object");
assert(typeof ListDeploymentTargetsInput$ === "object");
assert(typeof ListDeploymentTargetsOutput$ === "object");
assert(typeof ListGitHubAccountTokenNamesInput$ === "object");
assert(typeof ListGitHubAccountTokenNamesOutput$ === "object");
assert(typeof ListOnPremisesInstancesInput$ === "object");
assert(typeof ListOnPremisesInstancesOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof LoadBalancerInfo$ === "object");
assert(typeof MinimumHealthyHosts$ === "object");
assert(typeof MinimumHealthyHostsPerZone$ === "object");
assert(typeof OnPremisesTagSet$ === "object");
assert(typeof PutLifecycleEventHookExecutionStatusInput$ === "object");
assert(typeof PutLifecycleEventHookExecutionStatusOutput$ === "object");
assert(typeof RawString$ === "object");
assert(typeof RegisterApplicationRevisionInput$ === "object");
assert(typeof RegisterOnPremisesInstanceInput$ === "object");
assert(typeof RelatedDeployments$ === "object");
assert(typeof RemoveTagsFromOnPremisesInstancesInput$ === "object");
assert(typeof RevisionInfo$ === "object");
assert(typeof RevisionLocation$ === "object");
assert(typeof RollbackInfo$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SkipWaitTimeForInstanceTerminationInput$ === "object");
assert(typeof StopDeploymentInput$ === "object");
assert(typeof StopDeploymentOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagFilter$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TargetGroupInfo$ === "object");
assert(typeof TargetGroupPairInfo$ === "object");
assert(typeof TargetInstances$ === "object");
assert(typeof TimeBasedCanary$ === "object");
assert(typeof TimeBasedLinear$ === "object");
assert(typeof TimeRange$ === "object");
assert(typeof TrafficRoute$ === "object");
assert(typeof TrafficRoutingConfig$ === "object");
assert(typeof TriggerConfig$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateApplicationInput$ === "object");
assert(typeof UpdateDeploymentGroupInput$ === "object");
assert(typeof UpdateDeploymentGroupOutput$ === "object");
assert(typeof ZonalConfig$ === "object");
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
assert(typeof AlarmsLimitExceededException$ === "object");
assert(ApplicationAlreadyExistsException.prototype instanceof CodeDeployServiceException);
assert(typeof ApplicationAlreadyExistsException$ === "object");
assert(ApplicationDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(typeof ApplicationDoesNotExistException$ === "object");
assert(ApplicationLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(typeof ApplicationLimitExceededException$ === "object");
assert(ApplicationNameRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof ApplicationNameRequiredException$ === "object");
assert(ArnNotSupportedException.prototype instanceof CodeDeployServiceException);
assert(typeof ArnNotSupportedException$ === "object");
assert(BatchLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(typeof BatchLimitExceededException$ === "object");
assert(BucketNameFilterRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof BucketNameFilterRequiredException$ === "object");
assert(DeploymentAlreadyCompletedException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentAlreadyCompletedException$ === "object");
assert(DeploymentConfigAlreadyExistsException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentConfigAlreadyExistsException$ === "object");
assert(DeploymentConfigDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentConfigDoesNotExistException$ === "object");
assert(DeploymentConfigInUseException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentConfigInUseException$ === "object");
assert(DeploymentConfigLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentConfigLimitExceededException$ === "object");
assert(DeploymentConfigNameRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentConfigNameRequiredException$ === "object");
assert(DeploymentDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentDoesNotExistException$ === "object");
assert(DeploymentGroupAlreadyExistsException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentGroupAlreadyExistsException$ === "object");
assert(DeploymentGroupDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentGroupDoesNotExistException$ === "object");
assert(DeploymentGroupLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentGroupLimitExceededException$ === "object");
assert(DeploymentGroupNameRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentGroupNameRequiredException$ === "object");
assert(DeploymentIdRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentIdRequiredException$ === "object");
assert(DeploymentIsNotInReadyStateException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentIsNotInReadyStateException$ === "object");
assert(DeploymentLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentLimitExceededException$ === "object");
assert(DeploymentNotStartedException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentNotStartedException$ === "object");
assert(DeploymentTargetDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentTargetDoesNotExistException$ === "object");
assert(DeploymentTargetIdRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentTargetIdRequiredException$ === "object");
assert(DeploymentTargetListSizeExceededException.prototype instanceof CodeDeployServiceException);
assert(typeof DeploymentTargetListSizeExceededException$ === "object");
assert(DescriptionTooLongException.prototype instanceof CodeDeployServiceException);
assert(typeof DescriptionTooLongException$ === "object");
assert(ECSServiceMappingLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(typeof ECSServiceMappingLimitExceededException$ === "object");
assert(GitHubAccountTokenDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(typeof GitHubAccountTokenDoesNotExistException$ === "object");
assert(GitHubAccountTokenNameRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof GitHubAccountTokenNameRequiredException$ === "object");
assert(IamArnRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof IamArnRequiredException$ === "object");
assert(IamSessionArnAlreadyRegisteredException.prototype instanceof CodeDeployServiceException);
assert(typeof IamSessionArnAlreadyRegisteredException$ === "object");
assert(IamUserArnAlreadyRegisteredException.prototype instanceof CodeDeployServiceException);
assert(typeof IamUserArnAlreadyRegisteredException$ === "object");
assert(IamUserArnRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof IamUserArnRequiredException$ === "object");
assert(InstanceDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(typeof InstanceDoesNotExistException$ === "object");
assert(InstanceIdRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof InstanceIdRequiredException$ === "object");
assert(InstanceLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(typeof InstanceLimitExceededException$ === "object");
assert(InstanceNameAlreadyRegisteredException.prototype instanceof CodeDeployServiceException);
assert(typeof InstanceNameAlreadyRegisteredException$ === "object");
assert(InstanceNameRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof InstanceNameRequiredException$ === "object");
assert(InstanceNotRegisteredException.prototype instanceof CodeDeployServiceException);
assert(typeof InstanceNotRegisteredException$ === "object");
assert(InvalidAlarmConfigException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidAlarmConfigException$ === "object");
assert(InvalidApplicationNameException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidApplicationNameException$ === "object");
assert(InvalidArnException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidArnException$ === "object");
assert(InvalidAutoRollbackConfigException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidAutoRollbackConfigException$ === "object");
assert(InvalidAutoScalingGroupException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidAutoScalingGroupException$ === "object");
assert(InvalidBlueGreenDeploymentConfigurationException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidBlueGreenDeploymentConfigurationException$ === "object");
assert(InvalidBucketNameFilterException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidBucketNameFilterException$ === "object");
assert(InvalidComputePlatformException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidComputePlatformException$ === "object");
assert(InvalidDeployedStateFilterException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidDeployedStateFilterException$ === "object");
assert(InvalidDeploymentConfigNameException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidDeploymentConfigNameException$ === "object");
assert(InvalidDeploymentGroupNameException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidDeploymentGroupNameException$ === "object");
assert(InvalidDeploymentIdException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidDeploymentIdException$ === "object");
assert(InvalidDeploymentInstanceTypeException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidDeploymentInstanceTypeException$ === "object");
assert(InvalidDeploymentStatusException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidDeploymentStatusException$ === "object");
assert(InvalidDeploymentStyleException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidDeploymentStyleException$ === "object");
assert(InvalidDeploymentTargetIdException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidDeploymentTargetIdException$ === "object");
assert(InvalidDeploymentWaitTypeException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidDeploymentWaitTypeException$ === "object");
assert(InvalidEC2TagCombinationException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidEC2TagCombinationException$ === "object");
assert(InvalidEC2TagException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidEC2TagException$ === "object");
assert(InvalidECSServiceException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidECSServiceException$ === "object");
assert(InvalidExternalIdException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidExternalIdException$ === "object");
assert(InvalidFileExistsBehaviorException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidFileExistsBehaviorException$ === "object");
assert(InvalidGitHubAccountTokenException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidGitHubAccountTokenException$ === "object");
assert(InvalidGitHubAccountTokenNameException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidGitHubAccountTokenNameException$ === "object");
assert(InvalidIamSessionArnException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidIamSessionArnException$ === "object");
assert(InvalidIamUserArnException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidIamUserArnException$ === "object");
assert(InvalidIgnoreApplicationStopFailuresValueException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidIgnoreApplicationStopFailuresValueException$ === "object");
assert(InvalidInputException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidInputException$ === "object");
assert(InvalidInstanceNameException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidInstanceNameException$ === "object");
assert(InvalidInstanceStatusException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidInstanceStatusException$ === "object");
assert(InvalidInstanceTypeException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidInstanceTypeException$ === "object");
assert(InvalidKeyPrefixFilterException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidKeyPrefixFilterException$ === "object");
assert(InvalidLifecycleEventHookExecutionIdException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidLifecycleEventHookExecutionIdException$ === "object");
assert(InvalidLifecycleEventHookExecutionStatusException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidLifecycleEventHookExecutionStatusException$ === "object");
assert(InvalidLoadBalancerInfoException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidLoadBalancerInfoException$ === "object");
assert(InvalidMinimumHealthyHostValueException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidMinimumHealthyHostValueException$ === "object");
assert(InvalidNextTokenException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidOnPremisesTagCombinationException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidOnPremisesTagCombinationException$ === "object");
assert(InvalidOperationException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidOperationException$ === "object");
assert(InvalidRegistrationStatusException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidRegistrationStatusException$ === "object");
assert(InvalidRevisionException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidRevisionException$ === "object");
assert(InvalidRoleException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidRoleException$ === "object");
assert(InvalidSortByException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidSortByException$ === "object");
assert(InvalidSortOrderException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidSortOrderException$ === "object");
assert(InvalidTagException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidTagException$ === "object");
assert(InvalidTagFilterException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidTagFilterException$ === "object");
assert(InvalidTagsToAddException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidTagsToAddException$ === "object");
assert(InvalidTargetFilterNameException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidTargetFilterNameException$ === "object");
assert(InvalidTargetGroupPairException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidTargetGroupPairException$ === "object");
assert(InvalidTargetInstancesException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidTargetInstancesException$ === "object");
assert(InvalidTimeRangeException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidTimeRangeException$ === "object");
assert(InvalidTrafficRoutingConfigurationException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidTrafficRoutingConfigurationException$ === "object");
assert(InvalidTriggerConfigException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidTriggerConfigException$ === "object");
assert(InvalidUpdateOutdatedInstancesOnlyValueException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidUpdateOutdatedInstancesOnlyValueException$ === "object");
assert(InvalidZonalDeploymentConfigurationException.prototype instanceof CodeDeployServiceException);
assert(typeof InvalidZonalDeploymentConfigurationException$ === "object");
assert(LifecycleEventAlreadyCompletedException.prototype instanceof CodeDeployServiceException);
assert(typeof LifecycleEventAlreadyCompletedException$ === "object");
assert(LifecycleHookLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(typeof LifecycleHookLimitExceededException$ === "object");
assert(MultipleIamArnsProvidedException.prototype instanceof CodeDeployServiceException);
assert(typeof MultipleIamArnsProvidedException$ === "object");
assert(OperationNotSupportedException.prototype instanceof CodeDeployServiceException);
assert(typeof OperationNotSupportedException$ === "object");
assert(ResourceArnRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof ResourceArnRequiredException$ === "object");
assert(ResourceValidationException.prototype instanceof CodeDeployServiceException);
assert(typeof ResourceValidationException$ === "object");
assert(RevisionDoesNotExistException.prototype instanceof CodeDeployServiceException);
assert(typeof RevisionDoesNotExistException$ === "object");
assert(RevisionRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof RevisionRequiredException$ === "object");
assert(RoleRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof RoleRequiredException$ === "object");
assert(TagLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(typeof TagLimitExceededException$ === "object");
assert(TagRequiredException.prototype instanceof CodeDeployServiceException);
assert(typeof TagRequiredException$ === "object");
assert(TagSetListLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(typeof TagSetListLimitExceededException$ === "object");
assert(ThrottlingException.prototype instanceof CodeDeployServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TriggerTargetsLimitExceededException.prototype instanceof CodeDeployServiceException);
assert(typeof TriggerTargetsLimitExceededException$ === "object");
assert(UnsupportedActionForDeploymentTypeException.prototype instanceof CodeDeployServiceException);
assert(typeof UnsupportedActionForDeploymentTypeException$ === "object");
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
