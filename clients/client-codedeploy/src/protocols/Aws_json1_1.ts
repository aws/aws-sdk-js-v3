// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AddTagsToOnPremisesInstancesCommandInput,
  AddTagsToOnPremisesInstancesCommandOutput,
} from "../commands/AddTagsToOnPremisesInstancesCommand";
import {
  BatchGetApplicationRevisionsCommandInput,
  BatchGetApplicationRevisionsCommandOutput,
} from "../commands/BatchGetApplicationRevisionsCommand";
import {
  BatchGetApplicationsCommandInput,
  BatchGetApplicationsCommandOutput,
} from "../commands/BatchGetApplicationsCommand";
import {
  BatchGetDeploymentGroupsCommandInput,
  BatchGetDeploymentGroupsCommandOutput,
} from "../commands/BatchGetDeploymentGroupsCommand";
import {
  BatchGetDeploymentInstancesCommandInput,
  BatchGetDeploymentInstancesCommandOutput,
} from "../commands/BatchGetDeploymentInstancesCommand";
import {
  BatchGetDeploymentsCommandInput,
  BatchGetDeploymentsCommandOutput,
} from "../commands/BatchGetDeploymentsCommand";
import {
  BatchGetDeploymentTargetsCommandInput,
  BatchGetDeploymentTargetsCommandOutput,
} from "../commands/BatchGetDeploymentTargetsCommand";
import {
  BatchGetOnPremisesInstancesCommandInput,
  BatchGetOnPremisesInstancesCommandOutput,
} from "../commands/BatchGetOnPremisesInstancesCommand";
import { ContinueDeploymentCommandInput, ContinueDeploymentCommandOutput } from "../commands/ContinueDeploymentCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import {
  CreateDeploymentConfigCommandInput,
  CreateDeploymentConfigCommandOutput,
} from "../commands/CreateDeploymentConfigCommand";
import {
  CreateDeploymentGroupCommandInput,
  CreateDeploymentGroupCommandOutput,
} from "../commands/CreateDeploymentGroupCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import {
  DeleteDeploymentConfigCommandInput,
  DeleteDeploymentConfigCommandOutput,
} from "../commands/DeleteDeploymentConfigCommand";
import {
  DeleteDeploymentGroupCommandInput,
  DeleteDeploymentGroupCommandOutput,
} from "../commands/DeleteDeploymentGroupCommand";
import {
  DeleteGitHubAccountTokenCommandInput,
  DeleteGitHubAccountTokenCommandOutput,
} from "../commands/DeleteGitHubAccountTokenCommand";
import {
  DeleteResourcesByExternalIdCommandInput,
  DeleteResourcesByExternalIdCommandOutput,
} from "../commands/DeleteResourcesByExternalIdCommand";
import {
  DeregisterOnPremisesInstanceCommandInput,
  DeregisterOnPremisesInstanceCommandOutput,
} from "../commands/DeregisterOnPremisesInstanceCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import {
  GetApplicationRevisionCommandInput,
  GetApplicationRevisionCommandOutput,
} from "../commands/GetApplicationRevisionCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import {
  GetDeploymentConfigCommandInput,
  GetDeploymentConfigCommandOutput,
} from "../commands/GetDeploymentConfigCommand";
import { GetDeploymentGroupCommandInput, GetDeploymentGroupCommandOutput } from "../commands/GetDeploymentGroupCommand";
import {
  GetDeploymentInstanceCommandInput,
  GetDeploymentInstanceCommandOutput,
} from "../commands/GetDeploymentInstanceCommand";
import {
  GetDeploymentTargetCommandInput,
  GetDeploymentTargetCommandOutput,
} from "../commands/GetDeploymentTargetCommand";
import {
  GetOnPremisesInstanceCommandInput,
  GetOnPremisesInstanceCommandOutput,
} from "../commands/GetOnPremisesInstanceCommand";
import {
  ListApplicationRevisionsCommandInput,
  ListApplicationRevisionsCommandOutput,
} from "../commands/ListApplicationRevisionsCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import {
  ListDeploymentConfigsCommandInput,
  ListDeploymentConfigsCommandOutput,
} from "../commands/ListDeploymentConfigsCommand";
import {
  ListDeploymentGroupsCommandInput,
  ListDeploymentGroupsCommandOutput,
} from "../commands/ListDeploymentGroupsCommand";
import {
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput,
} from "../commands/ListDeploymentInstancesCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import {
  ListDeploymentTargetsCommandInput,
  ListDeploymentTargetsCommandOutput,
} from "../commands/ListDeploymentTargetsCommand";
import {
  ListGitHubAccountTokenNamesCommandInput,
  ListGitHubAccountTokenNamesCommandOutput,
} from "../commands/ListGitHubAccountTokenNamesCommand";
import {
  ListOnPremisesInstancesCommandInput,
  ListOnPremisesInstancesCommandOutput,
} from "../commands/ListOnPremisesInstancesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutLifecycleEventHookExecutionStatusCommandInput,
  PutLifecycleEventHookExecutionStatusCommandOutput,
} from "../commands/PutLifecycleEventHookExecutionStatusCommand";
import {
  RegisterApplicationRevisionCommandInput,
  RegisterApplicationRevisionCommandOutput,
} from "../commands/RegisterApplicationRevisionCommand";
import {
  RegisterOnPremisesInstanceCommandInput,
  RegisterOnPremisesInstanceCommandOutput,
} from "../commands/RegisterOnPremisesInstanceCommand";
import {
  RemoveTagsFromOnPremisesInstancesCommandInput,
  RemoveTagsFromOnPremisesInstancesCommandOutput,
} from "../commands/RemoveTagsFromOnPremisesInstancesCommand";
import {
  SkipWaitTimeForInstanceTerminationCommandInput,
  SkipWaitTimeForInstanceTerminationCommandOutput,
} from "../commands/SkipWaitTimeForInstanceTerminationCommand";
import { StopDeploymentCommandInput, StopDeploymentCommandOutput } from "../commands/StopDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  UpdateDeploymentGroupCommandInput,
  UpdateDeploymentGroupCommandOutput,
} from "../commands/UpdateDeploymentGroupCommand";
import { CodeDeployServiceException as __BaseException } from "../models/CodeDeployServiceException";
import {
  _InstanceType,
  AddTagsToOnPremisesInstancesInput,
  Alarm,
  AlarmConfiguration,
  AlarmsLimitExceededException,
  ApplicationAlreadyExistsException,
  ApplicationDoesNotExistException,
  ApplicationInfo,
  ApplicationLimitExceededException,
  ApplicationNameRequiredException,
  AppSpecContent,
  ArnNotSupportedException,
  AutoRollbackConfiguration,
  AutoRollbackEvent,
  AutoScalingGroup,
  BatchGetApplicationRevisionsInput,
  BatchGetApplicationRevisionsOutput,
  BatchGetApplicationsInput,
  BatchGetApplicationsOutput,
  BatchGetDeploymentGroupsInput,
  BatchGetDeploymentGroupsOutput,
  BatchGetDeploymentInstancesInput,
  BatchGetDeploymentInstancesOutput,
  BatchGetDeploymentsInput,
  BatchGetDeploymentsOutput,
  BatchGetDeploymentTargetsInput,
  BatchGetDeploymentTargetsOutput,
  BatchGetOnPremisesInstancesInput,
  BatchGetOnPremisesInstancesOutput,
  BatchLimitExceededException,
  BlueGreenDeploymentConfiguration,
  BlueInstanceTerminationOption,
  BucketNameFilterRequiredException,
  CloudFormationTarget,
  ContinueDeploymentInput,
  CreateApplicationInput,
  CreateApplicationOutput,
  CreateDeploymentConfigInput,
  CreateDeploymentConfigOutput,
  CreateDeploymentGroupInput,
  CreateDeploymentGroupOutput,
  CreateDeploymentInput,
  CreateDeploymentOutput,
  DeleteApplicationInput,
  DeleteDeploymentConfigInput,
  DeleteDeploymentGroupInput,
  DeleteDeploymentGroupOutput,
  DeleteGitHubAccountTokenInput,
  DeleteGitHubAccountTokenOutput,
  DeleteResourcesByExternalIdInput,
  DeleteResourcesByExternalIdOutput,
  DeploymentAlreadyCompletedException,
  DeploymentConfigAlreadyExistsException,
  DeploymentConfigDoesNotExistException,
  DeploymentConfigInfo,
  DeploymentConfigInUseException,
  DeploymentConfigLimitExceededException,
  DeploymentConfigNameRequiredException,
  DeploymentDoesNotExistException,
  DeploymentGroupAlreadyExistsException,
  DeploymentGroupDoesNotExistException,
  DeploymentGroupInfo,
  DeploymentGroupLimitExceededException,
  DeploymentGroupNameRequiredException,
  DeploymentIdRequiredException,
  DeploymentInfo,
  DeploymentIsNotInReadyStateException,
  DeploymentLimitExceededException,
  DeploymentNotStartedException,
  DeploymentOverview,
  DeploymentReadyOption,
  DeploymentStatus,
  DeploymentStyle,
  DeploymentTarget,
  DeploymentTargetDoesNotExistException,
  DeploymentTargetIdRequiredException,
  DeploymentTargetListSizeExceededException,
  DeregisterOnPremisesInstanceInput,
  DescriptionTooLongException,
  Diagnostics,
  EC2TagFilter,
  EC2TagSet,
  ECSService,
  ECSServiceMappingLimitExceededException,
  ECSTarget,
  ECSTaskSet,
  ELBInfo,
  ErrorInformation,
  GenericRevisionInfo,
  GetApplicationInput,
  GetApplicationOutput,
  GetApplicationRevisionInput,
  GetApplicationRevisionOutput,
  GetDeploymentConfigInput,
  GetDeploymentConfigOutput,
  GetDeploymentGroupInput,
  GetDeploymentGroupOutput,
  GetDeploymentInput,
  GetDeploymentInstanceInput,
  GetDeploymentInstanceOutput,
  GetDeploymentOutput,
  GetDeploymentTargetInput,
  GetDeploymentTargetOutput,
  GetOnPremisesInstanceInput,
  GetOnPremisesInstanceOutput,
  GitHubAccountTokenDoesNotExistException,
  GitHubAccountTokenNameRequiredException,
  GitHubLocation,
  GreenFleetProvisioningOption,
  IamArnRequiredException,
  IamSessionArnAlreadyRegisteredException,
  IamUserArnAlreadyRegisteredException,
  IamUserArnRequiredException,
  InstanceDoesNotExistException,
  InstanceIdRequiredException,
  InstanceInfo,
  InstanceLimitExceededException,
  InstanceNameAlreadyRegisteredException,
  InstanceNameRequiredException,
  InstanceNotRegisteredException,
  InstanceStatus,
  InstanceSummary,
  InstanceTarget,
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
  LambdaFunctionInfo,
  LambdaTarget,
  LastDeploymentInfo,
  LifecycleEvent,
  LifecycleEventAlreadyCompletedException,
  LifecycleHookLimitExceededException,
  ListApplicationRevisionsInput,
  ListApplicationRevisionsOutput,
  ListApplicationsInput,
  ListApplicationsOutput,
  ListDeploymentConfigsInput,
  ListDeploymentConfigsOutput,
  ListDeploymentGroupsInput,
  ListDeploymentGroupsOutput,
  ListDeploymentInstancesInput,
  ListDeploymentInstancesOutput,
  ListDeploymentsInput,
  ListDeploymentsOutput,
  ListDeploymentTargetsInput,
  ListDeploymentTargetsOutput,
  ListGitHubAccountTokenNamesInput,
  ListGitHubAccountTokenNamesOutput,
  ListOnPremisesInstancesInput,
  ListOnPremisesInstancesOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  LoadBalancerInfo,
  MinimumHealthyHosts,
  MultipleIamArnsProvidedException,
  OnPremisesTagSet,
  OperationNotSupportedException,
  PutLifecycleEventHookExecutionStatusInput,
  PutLifecycleEventHookExecutionStatusOutput,
  RawString,
  RegisterApplicationRevisionInput,
  RegisterOnPremisesInstanceInput,
  RelatedDeployments,
  RemoveTagsFromOnPremisesInstancesInput,
  ResourceArnRequiredException,
  ResourceValidationException,
  RevisionDoesNotExistException,
  RevisionInfo,
  RevisionLocation,
  RevisionRequiredException,
  RoleRequiredException,
  RollbackInfo,
  S3Location,
  SkipWaitTimeForInstanceTerminationInput,
  StopDeploymentInput,
  StopDeploymentOutput,
  Tag,
  TagFilter,
  TagLimitExceededException,
  TagRequiredException,
  TagResourceInput,
  TagResourceOutput,
  TagSetListLimitExceededException,
  TargetFilterName,
  TargetGroupInfo,
  TargetGroupPairInfo,
  TargetInstances,
  ThrottlingException,
  TimeBasedCanary,
  TimeBasedLinear,
  TimeRange,
  TrafficRoute,
  TrafficRoutingConfig,
  TriggerConfig,
  TriggerEventType,
  TriggerTargetsLimitExceededException,
  UnsupportedActionForDeploymentTypeException,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateApplicationInput,
  UpdateDeploymentGroupInput,
  UpdateDeploymentGroupOutput,
} from "../models/models_0";

/**
 * serializeAws_json1_1AddTagsToOnPremisesInstancesCommand
 */
export const se_AddTagsToOnPremisesInstancesCommand = async (
  input: AddTagsToOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTagsToOnPremisesInstances");
  let body: any;
  body = JSON.stringify(se_AddTagsToOnPremisesInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetApplicationRevisionsCommand
 */
export const se_BatchGetApplicationRevisionsCommand = async (
  input: BatchGetApplicationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetApplicationRevisions");
  let body: any;
  body = JSON.stringify(se_BatchGetApplicationRevisionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetApplicationsCommand
 */
export const se_BatchGetApplicationsCommand = async (
  input: BatchGetApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetApplications");
  let body: any;
  body = JSON.stringify(se_BatchGetApplicationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetDeploymentGroupsCommand
 */
export const se_BatchGetDeploymentGroupsCommand = async (
  input: BatchGetDeploymentGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetDeploymentGroups");
  let body: any;
  body = JSON.stringify(se_BatchGetDeploymentGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetDeploymentInstancesCommand
 */
export const se_BatchGetDeploymentInstancesCommand = async (
  input: BatchGetDeploymentInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetDeploymentInstances");
  let body: any;
  body = JSON.stringify(se_BatchGetDeploymentInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetDeploymentsCommand
 */
export const se_BatchGetDeploymentsCommand = async (
  input: BatchGetDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetDeployments");
  let body: any;
  body = JSON.stringify(se_BatchGetDeploymentsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetDeploymentTargetsCommand
 */
export const se_BatchGetDeploymentTargetsCommand = async (
  input: BatchGetDeploymentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetDeploymentTargets");
  let body: any;
  body = JSON.stringify(se_BatchGetDeploymentTargetsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetOnPremisesInstancesCommand
 */
export const se_BatchGetOnPremisesInstancesCommand = async (
  input: BatchGetOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetOnPremisesInstances");
  let body: any;
  body = JSON.stringify(se_BatchGetOnPremisesInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ContinueDeploymentCommand
 */
export const se_ContinueDeploymentCommand = async (
  input: ContinueDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ContinueDeployment");
  let body: any;
  body = JSON.stringify(se_ContinueDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApplication");
  let body: any;
  body = JSON.stringify(se_CreateApplicationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDeploymentCommand
 */
export const se_CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDeployment");
  let body: any;
  body = JSON.stringify(se_CreateDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDeploymentConfigCommand
 */
export const se_CreateDeploymentConfigCommand = async (
  input: CreateDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDeploymentConfig");
  let body: any;
  body = JSON.stringify(se_CreateDeploymentConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDeploymentGroupCommand
 */
export const se_CreateDeploymentGroupCommand = async (
  input: CreateDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDeploymentGroup");
  let body: any;
  body = JSON.stringify(se_CreateDeploymentGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplication");
  let body: any;
  body = JSON.stringify(se_DeleteApplicationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDeploymentConfigCommand
 */
export const se_DeleteDeploymentConfigCommand = async (
  input: DeleteDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDeploymentConfig");
  let body: any;
  body = JSON.stringify(se_DeleteDeploymentConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDeploymentGroupCommand
 */
export const se_DeleteDeploymentGroupCommand = async (
  input: DeleteDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDeploymentGroup");
  let body: any;
  body = JSON.stringify(se_DeleteDeploymentGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGitHubAccountTokenCommand
 */
export const se_DeleteGitHubAccountTokenCommand = async (
  input: DeleteGitHubAccountTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteGitHubAccountToken");
  let body: any;
  body = JSON.stringify(se_DeleteGitHubAccountTokenInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcesByExternalIdCommand
 */
export const se_DeleteResourcesByExternalIdCommand = async (
  input: DeleteResourcesByExternalIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourcesByExternalId");
  let body: any;
  body = JSON.stringify(se_DeleteResourcesByExternalIdInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterOnPremisesInstanceCommand
 */
export const se_DeregisterOnPremisesInstanceCommand = async (
  input: DeregisterOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterOnPremisesInstance");
  let body: any;
  body = JSON.stringify(se_DeregisterOnPremisesInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetApplicationCommand
 */
export const se_GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetApplication");
  let body: any;
  body = JSON.stringify(se_GetApplicationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetApplicationRevisionCommand
 */
export const se_GetApplicationRevisionCommand = async (
  input: GetApplicationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetApplicationRevision");
  let body: any;
  body = JSON.stringify(se_GetApplicationRevisionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeploymentCommand
 */
export const se_GetDeploymentCommand = async (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeployment");
  let body: any;
  body = JSON.stringify(se_GetDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeploymentConfigCommand
 */
export const se_GetDeploymentConfigCommand = async (
  input: GetDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeploymentConfig");
  let body: any;
  body = JSON.stringify(se_GetDeploymentConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeploymentGroupCommand
 */
export const se_GetDeploymentGroupCommand = async (
  input: GetDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeploymentGroup");
  let body: any;
  body = JSON.stringify(se_GetDeploymentGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeploymentInstanceCommand
 */
export const se_GetDeploymentInstanceCommand = async (
  input: GetDeploymentInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeploymentInstance");
  let body: any;
  body = JSON.stringify(se_GetDeploymentInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeploymentTargetCommand
 */
export const se_GetDeploymentTargetCommand = async (
  input: GetDeploymentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeploymentTarget");
  let body: any;
  body = JSON.stringify(se_GetDeploymentTargetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOnPremisesInstanceCommand
 */
export const se_GetOnPremisesInstanceCommand = async (
  input: GetOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOnPremisesInstance");
  let body: any;
  body = JSON.stringify(se_GetOnPremisesInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationRevisionsCommand
 */
export const se_ListApplicationRevisionsCommand = async (
  input: ListApplicationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplicationRevisions");
  let body: any;
  body = JSON.stringify(se_ListApplicationRevisionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplications");
  let body: any;
  body = JSON.stringify(se_ListApplicationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDeploymentConfigsCommand
 */
export const se_ListDeploymentConfigsCommand = async (
  input: ListDeploymentConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeploymentConfigs");
  let body: any;
  body = JSON.stringify(se_ListDeploymentConfigsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDeploymentGroupsCommand
 */
export const se_ListDeploymentGroupsCommand = async (
  input: ListDeploymentGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeploymentGroups");
  let body: any;
  body = JSON.stringify(se_ListDeploymentGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDeploymentInstancesCommand
 */
export const se_ListDeploymentInstancesCommand = async (
  input: ListDeploymentInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeploymentInstances");
  let body: any;
  body = JSON.stringify(se_ListDeploymentInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDeploymentsCommand
 */
export const se_ListDeploymentsCommand = async (
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeployments");
  let body: any;
  body = JSON.stringify(se_ListDeploymentsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDeploymentTargetsCommand
 */
export const se_ListDeploymentTargetsCommand = async (
  input: ListDeploymentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeploymentTargets");
  let body: any;
  body = JSON.stringify(se_ListDeploymentTargetsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGitHubAccountTokenNamesCommand
 */
export const se_ListGitHubAccountTokenNamesCommand = async (
  input: ListGitHubAccountTokenNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGitHubAccountTokenNames");
  let body: any;
  body = JSON.stringify(se_ListGitHubAccountTokenNamesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOnPremisesInstancesCommand
 */
export const se_ListOnPremisesInstancesCommand = async (
  input: ListOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOnPremisesInstances");
  let body: any;
  body = JSON.stringify(se_ListOnPremisesInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand
 */
export const se_PutLifecycleEventHookExecutionStatusCommand = async (
  input: PutLifecycleEventHookExecutionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutLifecycleEventHookExecutionStatus");
  let body: any;
  body = JSON.stringify(se_PutLifecycleEventHookExecutionStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterApplicationRevisionCommand
 */
export const se_RegisterApplicationRevisionCommand = async (
  input: RegisterApplicationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterApplicationRevision");
  let body: any;
  body = JSON.stringify(se_RegisterApplicationRevisionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterOnPremisesInstanceCommand
 */
export const se_RegisterOnPremisesInstanceCommand = async (
  input: RegisterOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterOnPremisesInstance");
  let body: any;
  body = JSON.stringify(se_RegisterOnPremisesInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand
 */
export const se_RemoveTagsFromOnPremisesInstancesCommand = async (
  input: RemoveTagsFromOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveTagsFromOnPremisesInstances");
  let body: any;
  body = JSON.stringify(se_RemoveTagsFromOnPremisesInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand
 */
export const se_SkipWaitTimeForInstanceTerminationCommand = async (
  input: SkipWaitTimeForInstanceTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SkipWaitTimeForInstanceTermination");
  let body: any;
  body = JSON.stringify(se_SkipWaitTimeForInstanceTerminationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopDeploymentCommand
 */
export const se_StopDeploymentCommand = async (
  input: StopDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopDeployment");
  let body: any;
  body = JSON.stringify(se_StopDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApplication");
  let body: any;
  body = JSON.stringify(se_UpdateApplicationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDeploymentGroupCommand
 */
export const se_UpdateDeploymentGroupCommand = async (
  input: UpdateDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDeploymentGroup");
  let body: any;
  body = JSON.stringify(se_UpdateDeploymentGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand
 */
export const de_AddTagsToOnPremisesInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToOnPremisesInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsToOnPremisesInstancesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddTagsToOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError
 */
const de_AddTagsToOnPremisesInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToOnPremisesInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceLimitExceededException":
    case "com.amazonaws.codedeploy#InstanceLimitExceededException":
      throw await de_InstanceLimitExceededExceptionRes(parsedOutput, context);
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      throw await de_InstanceNameRequiredExceptionRes(parsedOutput, context);
    case "InstanceNotRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
      throw await de_InstanceNotRegisteredExceptionRes(parsedOutput, context);
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      throw await de_InvalidInstanceNameExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "TagLimitExceededException":
    case "com.amazonaws.codedeploy#TagLimitExceededException":
      throw await de_TagLimitExceededExceptionRes(parsedOutput, context);
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      throw await de_TagRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetApplicationRevisionsCommand
 */
export const de_BatchGetApplicationRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationRevisionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetApplicationRevisionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetApplicationRevisionsOutput(data, context);
  const response: BatchGetApplicationRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetApplicationRevisionsCommandError
 */
const de_BatchGetApplicationRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      throw await de_BatchLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      throw await de_InvalidRevisionExceptionRes(parsedOutput, context);
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      throw await de_RevisionRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetApplicationsCommand
 */
export const de_BatchGetApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetApplicationsOutput(data, context);
  const response: BatchGetApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetApplicationsCommandError
 */
const de_BatchGetApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      throw await de_BatchLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetDeploymentGroupsCommand
 */
export const de_BatchGetDeploymentGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetDeploymentGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetDeploymentGroupsOutput(data, context);
  const response: BatchGetDeploymentGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetDeploymentGroupsCommandError
 */
const de_BatchGetDeploymentGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      throw await de_BatchLimitExceededExceptionRes(parsedOutput, context);
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      throw await de_DeploymentConfigDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      throw await de_DeploymentGroupNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      throw await de_InvalidDeploymentGroupNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetDeploymentInstancesCommand
 */
export const de_BatchGetDeploymentInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetDeploymentInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetDeploymentInstancesOutput(data, context);
  const response: BatchGetDeploymentInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetDeploymentInstancesCommandError
 */
const de_BatchGetDeploymentInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      throw await de_BatchLimitExceededExceptionRes(parsedOutput, context);
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      throw await de_DeploymentDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      throw await de_DeploymentIdRequiredExceptionRes(parsedOutput, context);
    case "InstanceIdRequiredException":
    case "com.amazonaws.codedeploy#InstanceIdRequiredException":
      throw await de_InstanceIdRequiredExceptionRes(parsedOutput, context);
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      throw await de_InvalidComputePlatformExceptionRes(parsedOutput, context);
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      throw await de_InvalidDeploymentIdExceptionRes(parsedOutput, context);
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      throw await de_InvalidInstanceNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetDeploymentsCommand
 */
export const de_BatchGetDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetDeploymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetDeploymentsOutput(data, context);
  const response: BatchGetDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetDeploymentsCommandError
 */
const de_BatchGetDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      throw await de_BatchLimitExceededExceptionRes(parsedOutput, context);
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      throw await de_DeploymentIdRequiredExceptionRes(parsedOutput, context);
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      throw await de_InvalidDeploymentIdExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetDeploymentTargetsCommand
 */
export const de_BatchGetDeploymentTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetDeploymentTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetDeploymentTargetsOutput(data, context);
  const response: BatchGetDeploymentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetDeploymentTargetsCommandError
 */
const de_BatchGetDeploymentTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      throw await de_DeploymentDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      throw await de_DeploymentIdRequiredExceptionRes(parsedOutput, context);
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      throw await de_DeploymentNotStartedExceptionRes(parsedOutput, context);
    case "DeploymentTargetDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException":
      throw await de_DeploymentTargetDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentTargetIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException":
      throw await de_DeploymentTargetIdRequiredExceptionRes(parsedOutput, context);
    case "DeploymentTargetListSizeExceededException":
    case "com.amazonaws.codedeploy#DeploymentTargetListSizeExceededException":
      throw await de_DeploymentTargetListSizeExceededExceptionRes(parsedOutput, context);
    case "InstanceDoesNotExistException":
    case "com.amazonaws.codedeploy#InstanceDoesNotExistException":
      throw await de_InstanceDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      throw await de_InvalidDeploymentIdExceptionRes(parsedOutput, context);
    case "InvalidDeploymentTargetIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException":
      throw await de_InvalidDeploymentTargetIdExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetOnPremisesInstancesCommand
 */
export const de_BatchGetOnPremisesInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetOnPremisesInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetOnPremisesInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetOnPremisesInstancesOutput(data, context);
  const response: BatchGetOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetOnPremisesInstancesCommandError
 */
const de_BatchGetOnPremisesInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetOnPremisesInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      throw await de_BatchLimitExceededExceptionRes(parsedOutput, context);
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      throw await de_InstanceNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      throw await de_InvalidInstanceNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ContinueDeploymentCommand
 */
export const de_ContinueDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ContinueDeploymentCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ContinueDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ContinueDeploymentCommandError
 */
const de_ContinueDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentAlreadyCompletedException":
    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
      throw await de_DeploymentAlreadyCompletedExceptionRes(parsedOutput, context);
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      throw await de_DeploymentDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      throw await de_DeploymentIdRequiredExceptionRes(parsedOutput, context);
    case "DeploymentIsNotInReadyStateException":
    case "com.amazonaws.codedeploy#DeploymentIsNotInReadyStateException":
      throw await de_DeploymentIsNotInReadyStateExceptionRes(parsedOutput, context);
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      throw await de_InvalidDeploymentIdExceptionRes(parsedOutput, context);
    case "InvalidDeploymentStatusException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStatusException":
      throw await de_InvalidDeploymentStatusExceptionRes(parsedOutput, context);
    case "InvalidDeploymentWaitTypeException":
    case "com.amazonaws.codedeploy#InvalidDeploymentWaitTypeException":
      throw await de_InvalidDeploymentWaitTypeExceptionRes(parsedOutput, context);
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      throw await de_UnsupportedActionForDeploymentTypeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateApplicationOutput(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateApplicationCommandError
 */
const de_CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationAlreadyExistsException":
    case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException":
      throw await de_ApplicationAlreadyExistsExceptionRes(parsedOutput, context);
    case "ApplicationLimitExceededException":
    case "com.amazonaws.codedeploy#ApplicationLimitExceededException":
      throw await de_ApplicationLimitExceededExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      throw await de_InvalidComputePlatformExceptionRes(parsedOutput, context);
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      throw await de_InvalidTagsToAddExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDeploymentCommand
 */
export const de_CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDeploymentOutput(data, context);
  const response: CreateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDeploymentCommandError
 */
const de_CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlarmsLimitExceededException":
    case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
      throw await de_AlarmsLimitExceededExceptionRes(parsedOutput, context);
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      throw await de_DeploymentConfigDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      throw await de_DeploymentGroupDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      throw await de_DeploymentGroupNameRequiredExceptionRes(parsedOutput, context);
    case "DeploymentLimitExceededException":
    case "com.amazonaws.codedeploy#DeploymentLimitExceededException":
      throw await de_DeploymentLimitExceededExceptionRes(parsedOutput, context);
    case "DescriptionTooLongException":
    case "com.amazonaws.codedeploy#DescriptionTooLongException":
      throw await de_DescriptionTooLongExceptionRes(parsedOutput, context);
    case "InvalidAlarmConfigException":
    case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
      throw await de_InvalidAlarmConfigExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidAutoRollbackConfigException":
    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
      throw await de_InvalidAutoRollbackConfigExceptionRes(parsedOutput, context);
    case "InvalidAutoScalingGroupException":
    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
      throw await de_InvalidAutoScalingGroupExceptionRes(parsedOutput, context);
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      throw await de_InvalidDeploymentConfigNameExceptionRes(parsedOutput, context);
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      throw await de_InvalidDeploymentGroupNameExceptionRes(parsedOutput, context);
    case "InvalidFileExistsBehaviorException":
    case "com.amazonaws.codedeploy#InvalidFileExistsBehaviorException":
      throw await de_InvalidFileExistsBehaviorExceptionRes(parsedOutput, context);
    case "InvalidGitHubAccountTokenException":
    case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenException":
      throw await de_InvalidGitHubAccountTokenExceptionRes(parsedOutput, context);
    case "InvalidIgnoreApplicationStopFailuresValueException":
    case "com.amazonaws.codedeploy#InvalidIgnoreApplicationStopFailuresValueException":
      throw await de_InvalidIgnoreApplicationStopFailuresValueExceptionRes(parsedOutput, context);
    case "InvalidLoadBalancerInfoException":
    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
      throw await de_InvalidLoadBalancerInfoExceptionRes(parsedOutput, context);
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      throw await de_InvalidRevisionExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "InvalidTargetInstancesException":
    case "com.amazonaws.codedeploy#InvalidTargetInstancesException":
      throw await de_InvalidTargetInstancesExceptionRes(parsedOutput, context);
    case "InvalidTrafficRoutingConfigurationException":
    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
      throw await de_InvalidTrafficRoutingConfigurationExceptionRes(parsedOutput, context);
    case "InvalidUpdateOutdatedInstancesOnlyValueException":
    case "com.amazonaws.codedeploy#InvalidUpdateOutdatedInstancesOnlyValueException":
      throw await de_InvalidUpdateOutdatedInstancesOnlyValueExceptionRes(parsedOutput, context);
    case "RevisionDoesNotExistException":
    case "com.amazonaws.codedeploy#RevisionDoesNotExistException":
      throw await de_RevisionDoesNotExistExceptionRes(parsedOutput, context);
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      throw await de_RevisionRequiredExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codedeploy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDeploymentConfigCommand
 */
export const de_CreateDeploymentConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDeploymentConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDeploymentConfigOutput(data, context);
  const response: CreateDeploymentConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDeploymentConfigCommandError
 */
const de_CreateDeploymentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentConfigAlreadyExistsException":
    case "com.amazonaws.codedeploy#DeploymentConfigAlreadyExistsException":
      throw await de_DeploymentConfigAlreadyExistsExceptionRes(parsedOutput, context);
    case "DeploymentConfigLimitExceededException":
    case "com.amazonaws.codedeploy#DeploymentConfigLimitExceededException":
      throw await de_DeploymentConfigLimitExceededExceptionRes(parsedOutput, context);
    case "DeploymentConfigNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
      throw await de_DeploymentConfigNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      throw await de_InvalidComputePlatformExceptionRes(parsedOutput, context);
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      throw await de_InvalidDeploymentConfigNameExceptionRes(parsedOutput, context);
    case "InvalidMinimumHealthyHostValueException":
    case "com.amazonaws.codedeploy#InvalidMinimumHealthyHostValueException":
      throw await de_InvalidMinimumHealthyHostValueExceptionRes(parsedOutput, context);
    case "InvalidTrafficRoutingConfigurationException":
    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
      throw await de_InvalidTrafficRoutingConfigurationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDeploymentGroupCommand
 */
export const de_CreateDeploymentGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDeploymentGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDeploymentGroupOutput(data, context);
  const response: CreateDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDeploymentGroupCommandError
 */
const de_CreateDeploymentGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlarmsLimitExceededException":
    case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
      throw await de_AlarmsLimitExceededExceptionRes(parsedOutput, context);
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      throw await de_DeploymentConfigDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentGroupAlreadyExistsException":
    case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException":
      throw await de_DeploymentGroupAlreadyExistsExceptionRes(parsedOutput, context);
    case "DeploymentGroupLimitExceededException":
    case "com.amazonaws.codedeploy#DeploymentGroupLimitExceededException":
      throw await de_DeploymentGroupLimitExceededExceptionRes(parsedOutput, context);
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      throw await de_DeploymentGroupNameRequiredExceptionRes(parsedOutput, context);
    case "ECSServiceMappingLimitExceededException":
    case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException":
      throw await de_ECSServiceMappingLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidAlarmConfigException":
    case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
      throw await de_InvalidAlarmConfigExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidAutoRollbackConfigException":
    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
      throw await de_InvalidAutoRollbackConfigExceptionRes(parsedOutput, context);
    case "InvalidAutoScalingGroupException":
    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
      throw await de_InvalidAutoScalingGroupExceptionRes(parsedOutput, context);
    case "InvalidBlueGreenDeploymentConfigurationException":
    case "com.amazonaws.codedeploy#InvalidBlueGreenDeploymentConfigurationException":
      throw await de_InvalidBlueGreenDeploymentConfigurationExceptionRes(parsedOutput, context);
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      throw await de_InvalidDeploymentConfigNameExceptionRes(parsedOutput, context);
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      throw await de_InvalidDeploymentGroupNameExceptionRes(parsedOutput, context);
    case "InvalidDeploymentStyleException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStyleException":
      throw await de_InvalidDeploymentStyleExceptionRes(parsedOutput, context);
    case "InvalidEC2TagCombinationException":
    case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException":
      throw await de_InvalidEC2TagCombinationExceptionRes(parsedOutput, context);
    case "InvalidEC2TagException":
    case "com.amazonaws.codedeploy#InvalidEC2TagException":
      throw await de_InvalidEC2TagExceptionRes(parsedOutput, context);
    case "InvalidECSServiceException":
    case "com.amazonaws.codedeploy#InvalidECSServiceException":
      throw await de_InvalidECSServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codedeploy#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidLoadBalancerInfoException":
    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
      throw await de_InvalidLoadBalancerInfoExceptionRes(parsedOutput, context);
    case "InvalidOnPremisesTagCombinationException":
    case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException":
      throw await de_InvalidOnPremisesTagCombinationExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      throw await de_InvalidTagsToAddExceptionRes(parsedOutput, context);
    case "InvalidTargetGroupPairException":
    case "com.amazonaws.codedeploy#InvalidTargetGroupPairException":
      throw await de_InvalidTargetGroupPairExceptionRes(parsedOutput, context);
    case "InvalidTrafficRoutingConfigurationException":
    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
      throw await de_InvalidTrafficRoutingConfigurationExceptionRes(parsedOutput, context);
    case "InvalidTriggerConfigException":
    case "com.amazonaws.codedeploy#InvalidTriggerConfigException":
      throw await de_InvalidTriggerConfigExceptionRes(parsedOutput, context);
    case "LifecycleHookLimitExceededException":
    case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException":
      throw await de_LifecycleHookLimitExceededExceptionRes(parsedOutput, context);
    case "RoleRequiredException":
    case "com.amazonaws.codedeploy#RoleRequiredException":
      throw await de_RoleRequiredExceptionRes(parsedOutput, context);
    case "TagSetListLimitExceededException":
    case "com.amazonaws.codedeploy#TagSetListLimitExceededException":
      throw await de_TagSetListLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codedeploy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TriggerTargetsLimitExceededException":
    case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException":
      throw await de_TriggerTargetsLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteApplicationCommandError
 */
const de_DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDeploymentConfigCommand
 */
export const de_DeleteDeploymentConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDeploymentConfigCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDeploymentConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDeploymentConfigCommandError
 */
const de_DeleteDeploymentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentConfigInUseException":
    case "com.amazonaws.codedeploy#DeploymentConfigInUseException":
      throw await de_DeploymentConfigInUseExceptionRes(parsedOutput, context);
    case "DeploymentConfigNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
      throw await de_DeploymentConfigNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      throw await de_InvalidDeploymentConfigNameExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.codedeploy#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDeploymentGroupCommand
 */
export const de_DeleteDeploymentGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDeploymentGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDeploymentGroupOutput(data, context);
  const response: DeleteDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDeploymentGroupCommandError
 */
const de_DeleteDeploymentGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      throw await de_DeploymentGroupNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      throw await de_InvalidDeploymentGroupNameExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteGitHubAccountTokenCommand
 */
export const de_DeleteGitHubAccountTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGitHubAccountTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGitHubAccountTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteGitHubAccountTokenOutput(data, context);
  const response: DeleteGitHubAccountTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteGitHubAccountTokenCommandError
 */
const de_DeleteGitHubAccountTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGitHubAccountTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GitHubAccountTokenDoesNotExistException":
    case "com.amazonaws.codedeploy#GitHubAccountTokenDoesNotExistException":
      throw await de_GitHubAccountTokenDoesNotExistExceptionRes(parsedOutput, context);
    case "GitHubAccountTokenNameRequiredException":
    case "com.amazonaws.codedeploy#GitHubAccountTokenNameRequiredException":
      throw await de_GitHubAccountTokenNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidGitHubAccountTokenNameException":
    case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenNameException":
      throw await de_InvalidGitHubAccountTokenNameExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.codedeploy#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceValidationException":
    case "com.amazonaws.codedeploy#ResourceValidationException":
      throw await de_ResourceValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteResourcesByExternalIdCommand
 */
export const de_DeleteResourcesByExternalIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcesByExternalIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourcesByExternalIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResourcesByExternalIdOutput(data, context);
  const response: DeleteResourcesByExternalIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResourcesByExternalIdCommandError
 */
const de_DeleteResourcesByExternalIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcesByExternalIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DeregisterOnPremisesInstanceCommand
 */
export const de_DeregisterOnPremisesInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOnPremisesInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterOnPremisesInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterOnPremisesInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError
 */
const de_DeregisterOnPremisesInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOnPremisesInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      throw await de_InstanceNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      throw await de_InvalidInstanceNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetApplicationCommand
 */
export const de_GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetApplicationOutput(data, context);
  const response: GetApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetApplicationCommandError
 */
const de_GetApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetApplicationRevisionCommand
 */
export const de_GetApplicationRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationRevisionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetApplicationRevisionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetApplicationRevisionOutput(data, context);
  const response: GetApplicationRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetApplicationRevisionCommandError
 */
const de_GetApplicationRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      throw await de_InvalidRevisionExceptionRes(parsedOutput, context);
    case "RevisionDoesNotExistException":
    case "com.amazonaws.codedeploy#RevisionDoesNotExistException":
      throw await de_RevisionDoesNotExistExceptionRes(parsedOutput, context);
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      throw await de_RevisionRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDeploymentCommand
 */
export const de_GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeploymentOutput(data, context);
  const response: GetDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDeploymentCommandError
 */
const de_GetDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      throw await de_DeploymentDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      throw await de_DeploymentIdRequiredExceptionRes(parsedOutput, context);
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      throw await de_InvalidDeploymentIdExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDeploymentConfigCommand
 */
export const de_GetDeploymentConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeploymentConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeploymentConfigOutput(data, context);
  const response: GetDeploymentConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDeploymentConfigCommandError
 */
const de_GetDeploymentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      throw await de_DeploymentConfigDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentConfigNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
      throw await de_DeploymentConfigNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      throw await de_InvalidComputePlatformExceptionRes(parsedOutput, context);
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      throw await de_InvalidDeploymentConfigNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDeploymentGroupCommand
 */
export const de_GetDeploymentGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeploymentGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeploymentGroupOutput(data, context);
  const response: GetDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDeploymentGroupCommandError
 */
const de_GetDeploymentGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      throw await de_DeploymentConfigDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      throw await de_DeploymentGroupDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      throw await de_DeploymentGroupNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      throw await de_InvalidDeploymentGroupNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDeploymentInstanceCommand
 */
export const de_GetDeploymentInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeploymentInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeploymentInstanceOutput(data, context);
  const response: GetDeploymentInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDeploymentInstanceCommandError
 */
const de_GetDeploymentInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      throw await de_DeploymentDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      throw await de_DeploymentIdRequiredExceptionRes(parsedOutput, context);
    case "InstanceDoesNotExistException":
    case "com.amazonaws.codedeploy#InstanceDoesNotExistException":
      throw await de_InstanceDoesNotExistExceptionRes(parsedOutput, context);
    case "InstanceIdRequiredException":
    case "com.amazonaws.codedeploy#InstanceIdRequiredException":
      throw await de_InstanceIdRequiredExceptionRes(parsedOutput, context);
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      throw await de_InvalidComputePlatformExceptionRes(parsedOutput, context);
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      throw await de_InvalidDeploymentIdExceptionRes(parsedOutput, context);
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      throw await de_InvalidInstanceNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDeploymentTargetCommand
 */
export const de_GetDeploymentTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeploymentTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeploymentTargetOutput(data, context);
  const response: GetDeploymentTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDeploymentTargetCommandError
 */
const de_GetDeploymentTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      throw await de_DeploymentDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      throw await de_DeploymentIdRequiredExceptionRes(parsedOutput, context);
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      throw await de_DeploymentNotStartedExceptionRes(parsedOutput, context);
    case "DeploymentTargetDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException":
      throw await de_DeploymentTargetDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentTargetIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException":
      throw await de_DeploymentTargetIdRequiredExceptionRes(parsedOutput, context);
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      throw await de_InvalidDeploymentIdExceptionRes(parsedOutput, context);
    case "InvalidDeploymentTargetIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException":
      throw await de_InvalidDeploymentTargetIdExceptionRes(parsedOutput, context);
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      throw await de_InvalidInstanceNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOnPremisesInstanceCommand
 */
export const de_GetOnPremisesInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOnPremisesInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOnPremisesInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOnPremisesInstanceOutput(data, context);
  const response: GetOnPremisesInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOnPremisesInstanceCommandError
 */
const de_GetOnPremisesInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOnPremisesInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      throw await de_InstanceNameRequiredExceptionRes(parsedOutput, context);
    case "InstanceNotRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
      throw await de_InstanceNotRegisteredExceptionRes(parsedOutput, context);
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      throw await de_InvalidInstanceNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListApplicationRevisionsCommand
 */
export const de_ListApplicationRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationRevisionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListApplicationRevisionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListApplicationRevisionsOutput(data, context);
  const response: ListApplicationRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListApplicationRevisionsCommandError
 */
const de_ListApplicationRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "BucketNameFilterRequiredException":
    case "com.amazonaws.codedeploy#BucketNameFilterRequiredException":
      throw await de_BucketNameFilterRequiredExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidBucketNameFilterException":
    case "com.amazonaws.codedeploy#InvalidBucketNameFilterException":
      throw await de_InvalidBucketNameFilterExceptionRes(parsedOutput, context);
    case "InvalidDeployedStateFilterException":
    case "com.amazonaws.codedeploy#InvalidDeployedStateFilterException":
      throw await de_InvalidDeployedStateFilterExceptionRes(parsedOutput, context);
    case "InvalidKeyPrefixFilterException":
    case "com.amazonaws.codedeploy#InvalidKeyPrefixFilterException":
      throw await de_InvalidKeyPrefixFilterExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidSortByException":
    case "com.amazonaws.codedeploy#InvalidSortByException":
      throw await de_InvalidSortByExceptionRes(parsedOutput, context);
    case "InvalidSortOrderException":
    case "com.amazonaws.codedeploy#InvalidSortOrderException":
      throw await de_InvalidSortOrderExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListApplicationsOutput(data, context);
  const response: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListApplicationsCommandError
 */
const de_ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDeploymentConfigsCommand
 */
export const de_ListDeploymentConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDeploymentConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDeploymentConfigsOutput(data, context);
  const response: ListDeploymentConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDeploymentConfigsCommandError
 */
const de_ListDeploymentConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDeploymentGroupsCommand
 */
export const de_ListDeploymentGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDeploymentGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDeploymentGroupsOutput(data, context);
  const response: ListDeploymentGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDeploymentGroupsCommandError
 */
const de_ListDeploymentGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDeploymentInstancesCommand
 */
export const de_ListDeploymentInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDeploymentInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDeploymentInstancesOutput(data, context);
  const response: ListDeploymentInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDeploymentInstancesCommandError
 */
const de_ListDeploymentInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      throw await de_DeploymentDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      throw await de_DeploymentIdRequiredExceptionRes(parsedOutput, context);
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      throw await de_DeploymentNotStartedExceptionRes(parsedOutput, context);
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      throw await de_InvalidComputePlatformExceptionRes(parsedOutput, context);
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      throw await de_InvalidDeploymentIdExceptionRes(parsedOutput, context);
    case "InvalidDeploymentInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException":
      throw await de_InvalidDeploymentInstanceTypeExceptionRes(parsedOutput, context);
    case "InvalidInstanceStatusException":
    case "com.amazonaws.codedeploy#InvalidInstanceStatusException":
      throw await de_InvalidInstanceStatusExceptionRes(parsedOutput, context);
    case "InvalidInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidInstanceTypeException":
      throw await de_InvalidInstanceTypeExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidTargetFilterNameException":
    case "com.amazonaws.codedeploy#InvalidTargetFilterNameException":
      throw await de_InvalidTargetFilterNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDeploymentsCommand
 */
export const de_ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDeploymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDeploymentsOutput(data, context);
  const response: ListDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDeploymentsCommandError
 */
const de_ListDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      throw await de_DeploymentGroupDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      throw await de_DeploymentGroupNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      throw await de_InvalidDeploymentGroupNameExceptionRes(parsedOutput, context);
    case "InvalidDeploymentStatusException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStatusException":
      throw await de_InvalidDeploymentStatusExceptionRes(parsedOutput, context);
    case "InvalidExternalIdException":
    case "com.amazonaws.codedeploy#InvalidExternalIdException":
      throw await de_InvalidExternalIdExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codedeploy#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidTimeRangeException":
    case "com.amazonaws.codedeploy#InvalidTimeRangeException":
      throw await de_InvalidTimeRangeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDeploymentTargetsCommand
 */
export const de_ListDeploymentTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDeploymentTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDeploymentTargetsOutput(data, context);
  const response: ListDeploymentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDeploymentTargetsCommandError
 */
const de_ListDeploymentTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      throw await de_DeploymentDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      throw await de_DeploymentIdRequiredExceptionRes(parsedOutput, context);
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      throw await de_DeploymentNotStartedExceptionRes(parsedOutput, context);
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      throw await de_InvalidDeploymentIdExceptionRes(parsedOutput, context);
    case "InvalidDeploymentInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException":
      throw await de_InvalidDeploymentInstanceTypeExceptionRes(parsedOutput, context);
    case "InvalidInstanceStatusException":
    case "com.amazonaws.codedeploy#InvalidInstanceStatusException":
      throw await de_InvalidInstanceStatusExceptionRes(parsedOutput, context);
    case "InvalidInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidInstanceTypeException":
      throw await de_InvalidInstanceTypeExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListGitHubAccountTokenNamesCommand
 */
export const de_ListGitHubAccountTokenNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGitHubAccountTokenNamesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGitHubAccountTokenNamesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGitHubAccountTokenNamesOutput(data, context);
  const response: ListGitHubAccountTokenNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListGitHubAccountTokenNamesCommandError
 */
const de_ListGitHubAccountTokenNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGitHubAccountTokenNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "OperationNotSupportedException":
    case "com.amazonaws.codedeploy#OperationNotSupportedException":
      throw await de_OperationNotSupportedExceptionRes(parsedOutput, context);
    case "ResourceValidationException":
    case "com.amazonaws.codedeploy#ResourceValidationException":
      throw await de_ResourceValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListOnPremisesInstancesCommand
 */
export const de_ListOnPremisesInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOnPremisesInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOnPremisesInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOnPremisesInstancesOutput(data, context);
  const response: ListOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListOnPremisesInstancesCommandError
 */
const de_ListOnPremisesInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOnPremisesInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRegistrationStatusException":
    case "com.amazonaws.codedeploy#InvalidRegistrationStatusException":
      throw await de_InvalidRegistrationStatusExceptionRes(parsedOutput, context);
    case "InvalidTagFilterException":
    case "com.amazonaws.codedeploy#InvalidTagFilterException":
      throw await de_InvalidTagFilterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArnNotSupportedException":
    case "com.amazonaws.codedeploy#ArnNotSupportedException":
      throw await de_ArnNotSupportedExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.codedeploy#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "ResourceArnRequiredException":
    case "com.amazonaws.codedeploy#ResourceArnRequiredException":
      throw await de_ResourceArnRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand
 */
export const de_PutLifecycleEventHookExecutionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleEventHookExecutionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutLifecycleEventHookExecutionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutLifecycleEventHookExecutionStatusOutput(data, context);
  const response: PutLifecycleEventHookExecutionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommandError
 */
const de_PutLifecycleEventHookExecutionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleEventHookExecutionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      throw await de_DeploymentDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      throw await de_DeploymentIdRequiredExceptionRes(parsedOutput, context);
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      throw await de_InvalidDeploymentIdExceptionRes(parsedOutput, context);
    case "InvalidLifecycleEventHookExecutionIdException":
    case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionIdException":
      throw await de_InvalidLifecycleEventHookExecutionIdExceptionRes(parsedOutput, context);
    case "InvalidLifecycleEventHookExecutionStatusException":
    case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionStatusException":
      throw await de_InvalidLifecycleEventHookExecutionStatusExceptionRes(parsedOutput, context);
    case "LifecycleEventAlreadyCompletedException":
    case "com.amazonaws.codedeploy#LifecycleEventAlreadyCompletedException":
      throw await de_LifecycleEventAlreadyCompletedExceptionRes(parsedOutput, context);
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      throw await de_UnsupportedActionForDeploymentTypeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterApplicationRevisionCommand
 */
export const de_RegisterApplicationRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterApplicationRevisionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterApplicationRevisionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterApplicationRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterApplicationRevisionCommandError
 */
const de_RegisterApplicationRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterApplicationRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "DescriptionTooLongException":
    case "com.amazonaws.codedeploy#DescriptionTooLongException":
      throw await de_DescriptionTooLongExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      throw await de_InvalidRevisionExceptionRes(parsedOutput, context);
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      throw await de_RevisionRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterOnPremisesInstanceCommand
 */
export const de_RegisterOnPremisesInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOnPremisesInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterOnPremisesInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterOnPremisesInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterOnPremisesInstanceCommandError
 */
const de_RegisterOnPremisesInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOnPremisesInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IamArnRequiredException":
    case "com.amazonaws.codedeploy#IamArnRequiredException":
      throw await de_IamArnRequiredExceptionRes(parsedOutput, context);
    case "IamSessionArnAlreadyRegisteredException":
    case "com.amazonaws.codedeploy#IamSessionArnAlreadyRegisteredException":
      throw await de_IamSessionArnAlreadyRegisteredExceptionRes(parsedOutput, context);
    case "IamUserArnAlreadyRegisteredException":
    case "com.amazonaws.codedeploy#IamUserArnAlreadyRegisteredException":
      throw await de_IamUserArnAlreadyRegisteredExceptionRes(parsedOutput, context);
    case "IamUserArnRequiredException":
    case "com.amazonaws.codedeploy#IamUserArnRequiredException":
      throw await de_IamUserArnRequiredExceptionRes(parsedOutput, context);
    case "InstanceNameAlreadyRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNameAlreadyRegisteredException":
      throw await de_InstanceNameAlreadyRegisteredExceptionRes(parsedOutput, context);
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      throw await de_InstanceNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidIamSessionArnException":
    case "com.amazonaws.codedeploy#InvalidIamSessionArnException":
      throw await de_InvalidIamSessionArnExceptionRes(parsedOutput, context);
    case "InvalidIamUserArnException":
    case "com.amazonaws.codedeploy#InvalidIamUserArnException":
      throw await de_InvalidIamUserArnExceptionRes(parsedOutput, context);
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      throw await de_InvalidInstanceNameExceptionRes(parsedOutput, context);
    case "MultipleIamArnsProvidedException":
    case "com.amazonaws.codedeploy#MultipleIamArnsProvidedException":
      throw await de_MultipleIamArnsProvidedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand
 */
export const de_RemoveTagsFromOnPremisesInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsFromOnPremisesInstancesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveTagsFromOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError
 */
const de_RemoveTagsFromOnPremisesInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceLimitExceededException":
    case "com.amazonaws.codedeploy#InstanceLimitExceededException":
      throw await de_InstanceLimitExceededExceptionRes(parsedOutput, context);
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      throw await de_InstanceNameRequiredExceptionRes(parsedOutput, context);
    case "InstanceNotRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
      throw await de_InstanceNotRegisteredExceptionRes(parsedOutput, context);
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      throw await de_InvalidInstanceNameExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "TagLimitExceededException":
    case "com.amazonaws.codedeploy#TagLimitExceededException":
      throw await de_TagLimitExceededExceptionRes(parsedOutput, context);
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      throw await de_TagRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand
 */
export const de_SkipWaitTimeForInstanceTerminationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SkipWaitTimeForInstanceTerminationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SkipWaitTimeForInstanceTerminationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SkipWaitTimeForInstanceTerminationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError
 */
const de_SkipWaitTimeForInstanceTerminationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SkipWaitTimeForInstanceTerminationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentAlreadyCompletedException":
    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
      throw await de_DeploymentAlreadyCompletedExceptionRes(parsedOutput, context);
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      throw await de_DeploymentDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      throw await de_DeploymentIdRequiredExceptionRes(parsedOutput, context);
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      throw await de_DeploymentNotStartedExceptionRes(parsedOutput, context);
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      throw await de_InvalidDeploymentIdExceptionRes(parsedOutput, context);
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      throw await de_UnsupportedActionForDeploymentTypeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopDeploymentCommand
 */
export const de_StopDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopDeploymentOutput(data, context);
  const response: StopDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopDeploymentCommandError
 */
const de_StopDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentAlreadyCompletedException":
    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
      throw await de_DeploymentAlreadyCompletedExceptionRes(parsedOutput, context);
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      throw await de_DeploymentDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      throw await de_DeploymentGroupDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      throw await de_DeploymentIdRequiredExceptionRes(parsedOutput, context);
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      throw await de_InvalidDeploymentIdExceptionRes(parsedOutput, context);
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      throw await de_UnsupportedActionForDeploymentTypeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ArnNotSupportedException":
    case "com.amazonaws.codedeploy#ArnNotSupportedException":
      throw await de_ArnNotSupportedExceptionRes(parsedOutput, context);
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      throw await de_DeploymentConfigDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      throw await de_DeploymentGroupDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.codedeploy#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      throw await de_InvalidTagsToAddExceptionRes(parsedOutput, context);
    case "ResourceArnRequiredException":
    case "com.amazonaws.codedeploy#ResourceArnRequiredException":
      throw await de_ResourceArnRequiredExceptionRes(parsedOutput, context);
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      throw await de_TagRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ArnNotSupportedException":
    case "com.amazonaws.codedeploy#ArnNotSupportedException":
      throw await de_ArnNotSupportedExceptionRes(parsedOutput, context);
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      throw await de_DeploymentConfigDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      throw await de_DeploymentGroupDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidArnException":
    case "com.amazonaws.codedeploy#InvalidArnException":
      throw await de_InvalidArnExceptionRes(parsedOutput, context);
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      throw await de_InvalidTagsToAddExceptionRes(parsedOutput, context);
    case "ResourceArnRequiredException":
    case "com.amazonaws.codedeploy#ResourceArnRequiredException":
      throw await de_ResourceArnRequiredExceptionRes(parsedOutput, context);
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      throw await de_TagRequiredExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateApplicationCommandError
 */
const de_UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationAlreadyExistsException":
    case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException":
      throw await de_ApplicationAlreadyExistsExceptionRes(parsedOutput, context);
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDeploymentGroupCommand
 */
export const de_UpdateDeploymentGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDeploymentGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDeploymentGroupOutput(data, context);
  const response: UpdateDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDeploymentGroupCommandError
 */
const de_UpdateDeploymentGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlarmsLimitExceededException":
    case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
      throw await de_AlarmsLimitExceededExceptionRes(parsedOutput, context);
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      throw await de_ApplicationDoesNotExistExceptionRes(parsedOutput, context);
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      throw await de_ApplicationNameRequiredExceptionRes(parsedOutput, context);
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      throw await de_DeploymentConfigDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentGroupAlreadyExistsException":
    case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException":
      throw await de_DeploymentGroupAlreadyExistsExceptionRes(parsedOutput, context);
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      throw await de_DeploymentGroupDoesNotExistExceptionRes(parsedOutput, context);
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      throw await de_DeploymentGroupNameRequiredExceptionRes(parsedOutput, context);
    case "ECSServiceMappingLimitExceededException":
    case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException":
      throw await de_ECSServiceMappingLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidAlarmConfigException":
    case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
      throw await de_InvalidAlarmConfigExceptionRes(parsedOutput, context);
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      throw await de_InvalidApplicationNameExceptionRes(parsedOutput, context);
    case "InvalidAutoRollbackConfigException":
    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
      throw await de_InvalidAutoRollbackConfigExceptionRes(parsedOutput, context);
    case "InvalidAutoScalingGroupException":
    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
      throw await de_InvalidAutoScalingGroupExceptionRes(parsedOutput, context);
    case "InvalidBlueGreenDeploymentConfigurationException":
    case "com.amazonaws.codedeploy#InvalidBlueGreenDeploymentConfigurationException":
      throw await de_InvalidBlueGreenDeploymentConfigurationExceptionRes(parsedOutput, context);
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      throw await de_InvalidDeploymentConfigNameExceptionRes(parsedOutput, context);
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      throw await de_InvalidDeploymentGroupNameExceptionRes(parsedOutput, context);
    case "InvalidDeploymentStyleException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStyleException":
      throw await de_InvalidDeploymentStyleExceptionRes(parsedOutput, context);
    case "InvalidEC2TagCombinationException":
    case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException":
      throw await de_InvalidEC2TagCombinationExceptionRes(parsedOutput, context);
    case "InvalidEC2TagException":
    case "com.amazonaws.codedeploy#InvalidEC2TagException":
      throw await de_InvalidEC2TagExceptionRes(parsedOutput, context);
    case "InvalidECSServiceException":
    case "com.amazonaws.codedeploy#InvalidECSServiceException":
      throw await de_InvalidECSServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.codedeploy#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidLoadBalancerInfoException":
    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
      throw await de_InvalidLoadBalancerInfoExceptionRes(parsedOutput, context);
    case "InvalidOnPremisesTagCombinationException":
    case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException":
      throw await de_InvalidOnPremisesTagCombinationExceptionRes(parsedOutput, context);
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      throw await de_InvalidRoleExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "InvalidTargetGroupPairException":
    case "com.amazonaws.codedeploy#InvalidTargetGroupPairException":
      throw await de_InvalidTargetGroupPairExceptionRes(parsedOutput, context);
    case "InvalidTrafficRoutingConfigurationException":
    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
      throw await de_InvalidTrafficRoutingConfigurationExceptionRes(parsedOutput, context);
    case "InvalidTriggerConfigException":
    case "com.amazonaws.codedeploy#InvalidTriggerConfigException":
      throw await de_InvalidTriggerConfigExceptionRes(parsedOutput, context);
    case "LifecycleHookLimitExceededException":
    case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException":
      throw await de_LifecycleHookLimitExceededExceptionRes(parsedOutput, context);
    case "TagSetListLimitExceededException":
    case "com.amazonaws.codedeploy#TagSetListLimitExceededException":
      throw await de_TagSetListLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codedeploy#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TriggerTargetsLimitExceededException":
    case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException":
      throw await de_TriggerTargetsLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AlarmsLimitExceededExceptionRes
 */
const de_AlarmsLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlarmsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AlarmsLimitExceededException(body, context);
  const exception = new AlarmsLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApplicationAlreadyExistsExceptionRes
 */
const de_ApplicationAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ApplicationAlreadyExistsException(body, context);
  const exception = new ApplicationAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApplicationDoesNotExistExceptionRes
 */
const de_ApplicationDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ApplicationDoesNotExistException(body, context);
  const exception = new ApplicationDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApplicationLimitExceededExceptionRes
 */
const de_ApplicationLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ApplicationLimitExceededException(body, context);
  const exception = new ApplicationLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ApplicationNameRequiredExceptionRes
 */
const de_ApplicationNameRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ApplicationNameRequiredException(body, context);
  const exception = new ApplicationNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ArnNotSupportedExceptionRes
 */
const de_ArnNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ArnNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ArnNotSupportedException(body, context);
  const exception = new ArnNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BatchLimitExceededExceptionRes
 */
const de_BatchLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BatchLimitExceededException(body, context);
  const exception = new BatchLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BucketNameFilterRequiredExceptionRes
 */
const de_BucketNameFilterRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketNameFilterRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BucketNameFilterRequiredException(body, context);
  const exception = new BucketNameFilterRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentAlreadyCompletedExceptionRes
 */
const de_DeploymentAlreadyCompletedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentAlreadyCompletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentAlreadyCompletedException(body, context);
  const exception = new DeploymentAlreadyCompletedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionRes
 */
const de_DeploymentConfigAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentConfigAlreadyExistsException(body, context);
  const exception = new DeploymentConfigAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionRes
 */
const de_DeploymentConfigDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentConfigDoesNotExistException(body, context);
  const exception = new DeploymentConfigDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentConfigInUseExceptionRes
 */
const de_DeploymentConfigInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentConfigInUseException(body, context);
  const exception = new DeploymentConfigInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentConfigLimitExceededExceptionRes
 */
const de_DeploymentConfigLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentConfigLimitExceededException(body, context);
  const exception = new DeploymentConfigLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentConfigNameRequiredExceptionRes
 */
const de_DeploymentConfigNameRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentConfigNameRequiredException(body, context);
  const exception = new DeploymentConfigNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentDoesNotExistExceptionRes
 */
const de_DeploymentDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentDoesNotExistException(body, context);
  const exception = new DeploymentDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionRes
 */
const de_DeploymentGroupAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentGroupAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentGroupAlreadyExistsException(body, context);
  const exception = new DeploymentGroupAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionRes
 */
const de_DeploymentGroupDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentGroupDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentGroupDoesNotExistException(body, context);
  const exception = new DeploymentGroupDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentGroupLimitExceededExceptionRes
 */
const de_DeploymentGroupLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentGroupLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentGroupLimitExceededException(body, context);
  const exception = new DeploymentGroupLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentGroupNameRequiredExceptionRes
 */
const de_DeploymentGroupNameRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentGroupNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentGroupNameRequiredException(body, context);
  const exception = new DeploymentGroupNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentIdRequiredExceptionRes
 */
const de_DeploymentIdRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentIdRequiredException(body, context);
  const exception = new DeploymentIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionRes
 */
const de_DeploymentIsNotInReadyStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentIsNotInReadyStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentIsNotInReadyStateException(body, context);
  const exception = new DeploymentIsNotInReadyStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentLimitExceededExceptionRes
 */
const de_DeploymentLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentLimitExceededException(body, context);
  const exception = new DeploymentLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentNotStartedExceptionRes
 */
const de_DeploymentNotStartedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentNotStartedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentNotStartedException(body, context);
  const exception = new DeploymentNotStartedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionRes
 */
const de_DeploymentTargetDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentTargetDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentTargetDoesNotExistException(body, context);
  const exception = new DeploymentTargetDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentTargetIdRequiredExceptionRes
 */
const de_DeploymentTargetIdRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentTargetIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentTargetIdRequiredException(body, context);
  const exception = new DeploymentTargetIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionRes
 */
const de_DeploymentTargetListSizeExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentTargetListSizeExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeploymentTargetListSizeExceededException(body, context);
  const exception = new DeploymentTargetListSizeExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DescriptionTooLongExceptionRes
 */
const de_DescriptionTooLongExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DescriptionTooLongException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DescriptionTooLongException(body, context);
  const exception = new DescriptionTooLongException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionRes
 */
const de_ECSServiceMappingLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ECSServiceMappingLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ECSServiceMappingLimitExceededException(body, context);
  const exception = new ECSServiceMappingLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionRes
 */
const de_GitHubAccountTokenDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GitHubAccountTokenDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_GitHubAccountTokenDoesNotExistException(body, context);
  const exception = new GitHubAccountTokenDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionRes
 */
const de_GitHubAccountTokenNameRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GitHubAccountTokenNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_GitHubAccountTokenNameRequiredException(body, context);
  const exception = new GitHubAccountTokenNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IamArnRequiredExceptionRes
 */
const de_IamArnRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IamArnRequiredException(body, context);
  const exception = new IamArnRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionRes
 */
const de_IamSessionArnAlreadyRegisteredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamSessionArnAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IamSessionArnAlreadyRegisteredException(body, context);
  const exception = new IamSessionArnAlreadyRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionRes
 */
const de_IamUserArnAlreadyRegisteredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamUserArnAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IamUserArnAlreadyRegisteredException(body, context);
  const exception = new IamUserArnAlreadyRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IamUserArnRequiredExceptionRes
 */
const de_IamUserArnRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamUserArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IamUserArnRequiredException(body, context);
  const exception = new IamUserArnRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InstanceDoesNotExistExceptionRes
 */
const de_InstanceDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InstanceDoesNotExistException(body, context);
  const exception = new InstanceDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InstanceIdRequiredExceptionRes
 */
const de_InstanceIdRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InstanceIdRequiredException(body, context);
  const exception = new InstanceIdRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InstanceLimitExceededExceptionRes
 */
const de_InstanceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InstanceLimitExceededException(body, context);
  const exception = new InstanceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionRes
 */
const de_InstanceNameAlreadyRegisteredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceNameAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InstanceNameAlreadyRegisteredException(body, context);
  const exception = new InstanceNameAlreadyRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InstanceNameRequiredExceptionRes
 */
const de_InstanceNameRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InstanceNameRequiredException(body, context);
  const exception = new InstanceNameRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InstanceNotRegisteredExceptionRes
 */
const de_InstanceNotRegisteredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceNotRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InstanceNotRegisteredException(body, context);
  const exception = new InstanceNotRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAlarmConfigExceptionRes
 */
const de_InvalidAlarmConfigExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAlarmConfigException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAlarmConfigException(body, context);
  const exception = new InvalidAlarmConfigException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidApplicationNameExceptionRes
 */
const de_InvalidApplicationNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApplicationNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidApplicationNameException(body, context);
  const exception = new InvalidApplicationNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidArnExceptionRes
 */
const de_InvalidArnExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidArnException(body, context);
  const exception = new InvalidArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAutoRollbackConfigExceptionRes
 */
const de_InvalidAutoRollbackConfigExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAutoRollbackConfigException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAutoRollbackConfigException(body, context);
  const exception = new InvalidAutoRollbackConfigException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAutoScalingGroupExceptionRes
 */
const de_InvalidAutoScalingGroupExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAutoScalingGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAutoScalingGroupException(body, context);
  const exception = new InvalidAutoScalingGroupException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionRes
 */
const de_InvalidBlueGreenDeploymentConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBlueGreenDeploymentConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidBlueGreenDeploymentConfigurationException(body, context);
  const exception = new InvalidBlueGreenDeploymentConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidBucketNameFilterExceptionRes
 */
const de_InvalidBucketNameFilterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBucketNameFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidBucketNameFilterException(body, context);
  const exception = new InvalidBucketNameFilterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidComputePlatformExceptionRes
 */
const de_InvalidComputePlatformExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidComputePlatformException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidComputePlatformException(body, context);
  const exception = new InvalidComputePlatformException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeployedStateFilterExceptionRes
 */
const de_InvalidDeployedStateFilterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeployedStateFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeployedStateFilterException(body, context);
  const exception = new InvalidDeployedStateFilterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeploymentConfigNameExceptionRes
 */
const de_InvalidDeploymentConfigNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentConfigNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeploymentConfigNameException(body, context);
  const exception = new InvalidDeploymentConfigNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeploymentGroupNameExceptionRes
 */
const de_InvalidDeploymentGroupNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentGroupNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeploymentGroupNameException(body, context);
  const exception = new InvalidDeploymentGroupNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeploymentIdExceptionRes
 */
const de_InvalidDeploymentIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeploymentIdException(body, context);
  const exception = new InvalidDeploymentIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionRes
 */
const de_InvalidDeploymentInstanceTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentInstanceTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeploymentInstanceTypeException(body, context);
  const exception = new InvalidDeploymentInstanceTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeploymentStatusExceptionRes
 */
const de_InvalidDeploymentStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeploymentStatusException(body, context);
  const exception = new InvalidDeploymentStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeploymentStyleExceptionRes
 */
const de_InvalidDeploymentStyleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentStyleException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeploymentStyleException(body, context);
  const exception = new InvalidDeploymentStyleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeploymentTargetIdExceptionRes
 */
const de_InvalidDeploymentTargetIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentTargetIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeploymentTargetIdException(body, context);
  const exception = new InvalidDeploymentTargetIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionRes
 */
const de_InvalidDeploymentWaitTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentWaitTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDeploymentWaitTypeException(body, context);
  const exception = new InvalidDeploymentWaitTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidEC2TagCombinationExceptionRes
 */
const de_InvalidEC2TagCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEC2TagCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidEC2TagCombinationException(body, context);
  const exception = new InvalidEC2TagCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidEC2TagExceptionRes
 */
const de_InvalidEC2TagExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEC2TagException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidEC2TagException(body, context);
  const exception = new InvalidEC2TagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidECSServiceExceptionRes
 */
const de_InvalidECSServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidECSServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidECSServiceException(body, context);
  const exception = new InvalidECSServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidExternalIdExceptionRes
 */
const de_InvalidExternalIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExternalIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidExternalIdException(body, context);
  const exception = new InvalidExternalIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidFileExistsBehaviorExceptionRes
 */
const de_InvalidFileExistsBehaviorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFileExistsBehaviorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidFileExistsBehaviorException(body, context);
  const exception = new InvalidFileExistsBehaviorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidGitHubAccountTokenExceptionRes
 */
const de_InvalidGitHubAccountTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGitHubAccountTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidGitHubAccountTokenException(body, context);
  const exception = new InvalidGitHubAccountTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionRes
 */
const de_InvalidGitHubAccountTokenNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGitHubAccountTokenNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidGitHubAccountTokenNameException(body, context);
  const exception = new InvalidGitHubAccountTokenNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidIamSessionArnExceptionRes
 */
const de_InvalidIamSessionArnExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIamSessionArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidIamSessionArnException(body, context);
  const exception = new InvalidIamSessionArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidIamUserArnExceptionRes
 */
const de_InvalidIamUserArnExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIamUserArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidIamUserArnException(body, context);
  const exception = new InvalidIamUserArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueExceptionRes
 */
const de_InvalidIgnoreApplicationStopFailuresValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIgnoreApplicationStopFailuresValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidIgnoreApplicationStopFailuresValueException(body, context);
  const exception = new InvalidIgnoreApplicationStopFailuresValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInstanceNameExceptionRes
 */
const de_InvalidInstanceNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInstanceNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInstanceNameException(body, context);
  const exception = new InvalidInstanceNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInstanceStatusExceptionRes
 */
const de_InvalidInstanceStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInstanceStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInstanceStatusException(body, context);
  const exception = new InvalidInstanceStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInstanceTypeExceptionRes
 */
const de_InvalidInstanceTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInstanceTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInstanceTypeException(body, context);
  const exception = new InvalidInstanceTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidKeyPrefixFilterExceptionRes
 */
const de_InvalidKeyPrefixFilterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKeyPrefixFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidKeyPrefixFilterException(body, context);
  const exception = new InvalidKeyPrefixFilterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionRes
 */
const de_InvalidLifecycleEventHookExecutionIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLifecycleEventHookExecutionIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidLifecycleEventHookExecutionIdException(body, context);
  const exception = new InvalidLifecycleEventHookExecutionIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusExceptionRes
 */
const de_InvalidLifecycleEventHookExecutionStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLifecycleEventHookExecutionStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidLifecycleEventHookExecutionStatusException(body, context);
  const exception = new InvalidLifecycleEventHookExecutionStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidLoadBalancerInfoExceptionRes
 */
const de_InvalidLoadBalancerInfoExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLoadBalancerInfoException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidLoadBalancerInfoException(body, context);
  const exception = new InvalidLoadBalancerInfoException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionRes
 */
const de_InvalidMinimumHealthyHostValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMinimumHealthyHostValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidMinimumHealthyHostValueException(body, context);
  const exception = new InvalidMinimumHealthyHostValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionRes
 */
const de_InvalidOnPremisesTagCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOnPremisesTagCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidOnPremisesTagCombinationException(body, context);
  const exception = new InvalidOnPremisesTagCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOperationExceptionRes
 */
const de_InvalidOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidOperationException(body, context);
  const exception = new InvalidOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRegistrationStatusExceptionRes
 */
const de_InvalidRegistrationStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRegistrationStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRegistrationStatusException(body, context);
  const exception = new InvalidRegistrationStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRevisionExceptionRes
 */
const de_InvalidRevisionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRevisionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRevisionException(body, context);
  const exception = new InvalidRevisionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRoleExceptionRes
 */
const de_InvalidRoleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRoleException(body, context);
  const exception = new InvalidRoleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSortByExceptionRes
 */
const de_InvalidSortByExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSortByException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSortByException(body, context);
  const exception = new InvalidSortByException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSortOrderExceptionRes
 */
const de_InvalidSortOrderExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSortOrderException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSortOrderException(body, context);
  const exception = new InvalidSortOrderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTagExceptionRes
 */
const de_InvalidTagExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTagException(body, context);
  const exception = new InvalidTagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTagFilterExceptionRes
 */
const de_InvalidTagFilterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTagFilterException(body, context);
  const exception = new InvalidTagFilterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTagsToAddExceptionRes
 */
const de_InvalidTagsToAddExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagsToAddException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTagsToAddException(body, context);
  const exception = new InvalidTagsToAddException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTargetFilterNameExceptionRes
 */
const de_InvalidTargetFilterNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetFilterNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTargetFilterNameException(body, context);
  const exception = new InvalidTargetFilterNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTargetGroupPairExceptionRes
 */
const de_InvalidTargetGroupPairExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetGroupPairException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTargetGroupPairException(body, context);
  const exception = new InvalidTargetGroupPairException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTargetInstancesExceptionRes
 */
const de_InvalidTargetInstancesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetInstancesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTargetInstancesException(body, context);
  const exception = new InvalidTargetInstancesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTimeRangeExceptionRes
 */
const de_InvalidTimeRangeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTimeRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTimeRangeException(body, context);
  const exception = new InvalidTimeRangeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionRes
 */
const de_InvalidTrafficRoutingConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTrafficRoutingConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTrafficRoutingConfigurationException(body, context);
  const exception = new InvalidTrafficRoutingConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTriggerConfigExceptionRes
 */
const de_InvalidTriggerConfigExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTriggerConfigException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTriggerConfigException(body, context);
  const exception = new InvalidTriggerConfigException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueExceptionRes
 */
const de_InvalidUpdateOutdatedInstancesOnlyValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUpdateOutdatedInstancesOnlyValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidUpdateOutdatedInstancesOnlyValueException(body, context);
  const exception = new InvalidUpdateOutdatedInstancesOnlyValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionRes
 */
const de_LifecycleEventAlreadyCompletedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecycleEventAlreadyCompletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LifecycleEventAlreadyCompletedException(body, context);
  const exception = new LifecycleEventAlreadyCompletedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LifecycleHookLimitExceededExceptionRes
 */
const de_LifecycleHookLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecycleHookLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LifecycleHookLimitExceededException(body, context);
  const exception = new LifecycleHookLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MultipleIamArnsProvidedExceptionRes
 */
const de_MultipleIamArnsProvidedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MultipleIamArnsProvidedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MultipleIamArnsProvidedException(body, context);
  const exception = new MultipleIamArnsProvidedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationNotSupportedExceptionRes
 */
const de_OperationNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationNotSupportedException(body, context);
  const exception = new OperationNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceArnRequiredExceptionRes
 */
const de_ResourceArnRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceArnRequiredException(body, context);
  const exception = new ResourceArnRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceValidationExceptionRes
 */
const de_ResourceValidationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceValidationException(body, context);
  const exception = new ResourceValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RevisionDoesNotExistExceptionRes
 */
const de_RevisionDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevisionDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RevisionDoesNotExistException(body, context);
  const exception = new RevisionDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RevisionRequiredExceptionRes
 */
const de_RevisionRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevisionRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RevisionRequiredException(body, context);
  const exception = new RevisionRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RoleRequiredExceptionRes
 */
const de_RoleRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RoleRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RoleRequiredException(body, context);
  const exception = new RoleRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagLimitExceededExceptionRes
 */
const de_TagLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagLimitExceededException(body, context);
  const exception = new TagLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagRequiredExceptionRes
 */
const de_TagRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagRequiredException(body, context);
  const exception = new TagRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagSetListLimitExceededExceptionRes
 */
const de_TagSetListLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagSetListLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagSetListLimitExceededException(body, context);
  const exception = new TagSetListLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TriggerTargetsLimitExceededExceptionRes
 */
const de_TriggerTargetsLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TriggerTargetsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TriggerTargetsLimitExceededException(body, context);
  const exception = new TriggerTargetsLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionRes
 */
const de_UnsupportedActionForDeploymentTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedActionForDeploymentTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedActionForDeploymentTypeException(body, context);
  const exception = new UnsupportedActionForDeploymentTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddTagsToOnPremisesInstancesInput
 */
const se_AddTagsToOnPremisesInstancesInput = (
  input: AddTagsToOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames != null && { instanceNames: se_InstanceNameList(input.instanceNames, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1Alarm
 */
const se_Alarm = (input: Alarm, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1AlarmConfiguration
 */
const se_AlarmConfiguration = (input: AlarmConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.alarms != null && { alarms: se_AlarmList(input.alarms, context) }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.ignorePollAlarmFailure != null && { ignorePollAlarmFailure: input.ignorePollAlarmFailure }),
  };
};

/**
 * serializeAws_json1_1AlarmList
 */
const se_AlarmList = (input: Alarm[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Alarm(entry, context);
    });
};

/**
 * serializeAws_json1_1ApplicationsList
 */
const se_ApplicationsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AppSpecContent
 */
const se_AppSpecContent = (input: AppSpecContent, context: __SerdeContext): any => {
  return {
    ...(input.content != null && { content: input.content }),
    ...(input.sha256 != null && { sha256: input.sha256 }),
  };
};

/**
 * serializeAws_json1_1AutoRollbackConfiguration
 */
const se_AutoRollbackConfiguration = (input: AutoRollbackConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.events != null && { events: se_AutoRollbackEventsList(input.events, context) }),
  };
};

/**
 * serializeAws_json1_1AutoRollbackEventsList
 */
const se_AutoRollbackEventsList = (input: (AutoRollbackEvent | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AutoScalingGroupNameList
 */
const se_AutoScalingGroupNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BatchGetApplicationRevisionsInput
 */
const se_BatchGetApplicationRevisionsInput = (
  input: BatchGetApplicationRevisionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.revisions != null && { revisions: se_RevisionLocationList(input.revisions, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetApplicationsInput
 */
const se_BatchGetApplicationsInput = (input: BatchGetApplicationsInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationNames != null && { applicationNames: se_ApplicationsList(input.applicationNames, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetDeploymentGroupsInput
 */
const se_BatchGetDeploymentGroupsInput = (input: BatchGetDeploymentGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.deploymentGroupNames != null && {
      deploymentGroupNames: se_DeploymentGroupsList(input.deploymentGroupNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1BatchGetDeploymentInstancesInput
 */
const se_BatchGetDeploymentInstancesInput = (input: BatchGetDeploymentInstancesInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
    ...(input.instanceIds != null && { instanceIds: se_InstancesList(input.instanceIds, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetDeploymentsInput
 */
const se_BatchGetDeploymentsInput = (input: BatchGetDeploymentsInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentIds != null && { deploymentIds: se_DeploymentsList(input.deploymentIds, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetDeploymentTargetsInput
 */
const se_BatchGetDeploymentTargetsInput = (input: BatchGetDeploymentTargetsInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
    ...(input.targetIds != null && { targetIds: se_TargetIdList(input.targetIds, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetOnPremisesInstancesInput
 */
const se_BatchGetOnPremisesInstancesInput = (input: BatchGetOnPremisesInstancesInput, context: __SerdeContext): any => {
  return {
    ...(input.instanceNames != null && { instanceNames: se_InstanceNameList(input.instanceNames, context) }),
  };
};

/**
 * serializeAws_json1_1BlueGreenDeploymentConfiguration
 */
const se_BlueGreenDeploymentConfiguration = (input: BlueGreenDeploymentConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.deploymentReadyOption != null && {
      deploymentReadyOption: se_DeploymentReadyOption(input.deploymentReadyOption, context),
    }),
    ...(input.greenFleetProvisioningOption != null && {
      greenFleetProvisioningOption: se_GreenFleetProvisioningOption(input.greenFleetProvisioningOption, context),
    }),
    ...(input.terminateBlueInstancesOnDeploymentSuccess != null && {
      terminateBlueInstancesOnDeploymentSuccess: se_BlueInstanceTerminationOption(
        input.terminateBlueInstancesOnDeploymentSuccess,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1BlueInstanceTerminationOption
 */
const se_BlueInstanceTerminationOption = (input: BlueInstanceTerminationOption, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: input.action }),
    ...(input.terminationWaitTimeInMinutes != null && {
      terminationWaitTimeInMinutes: input.terminationWaitTimeInMinutes,
    }),
  };
};

/**
 * serializeAws_json1_1ContinueDeploymentInput
 */
const se_ContinueDeploymentInput = (input: ContinueDeploymentInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
    ...(input.deploymentWaitType != null && { deploymentWaitType: input.deploymentWaitType }),
  };
};

/**
 * serializeAws_json1_1CreateApplicationInput
 */
const se_CreateApplicationInput = (input: CreateApplicationInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.computePlatform != null && { computePlatform: input.computePlatform }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDeploymentConfigInput
 */
const se_CreateDeploymentConfigInput = (input: CreateDeploymentConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.computePlatform != null && { computePlatform: input.computePlatform }),
    ...(input.deploymentConfigName != null && { deploymentConfigName: input.deploymentConfigName }),
    ...(input.minimumHealthyHosts != null && {
      minimumHealthyHosts: se_MinimumHealthyHosts(input.minimumHealthyHosts, context),
    }),
    ...(input.trafficRoutingConfig != null && {
      trafficRoutingConfig: se_TrafficRoutingConfig(input.trafficRoutingConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateDeploymentGroupInput
 */
const se_CreateDeploymentGroupInput = (input: CreateDeploymentGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.alarmConfiguration != null && {
      alarmConfiguration: se_AlarmConfiguration(input.alarmConfiguration, context),
    }),
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.autoRollbackConfiguration != null && {
      autoRollbackConfiguration: se_AutoRollbackConfiguration(input.autoRollbackConfiguration, context),
    }),
    ...(input.autoScalingGroups != null && {
      autoScalingGroups: se_AutoScalingGroupNameList(input.autoScalingGroups, context),
    }),
    ...(input.blueGreenDeploymentConfiguration != null && {
      blueGreenDeploymentConfiguration: se_BlueGreenDeploymentConfiguration(
        input.blueGreenDeploymentConfiguration,
        context
      ),
    }),
    ...(input.deploymentConfigName != null && { deploymentConfigName: input.deploymentConfigName }),
    ...(input.deploymentGroupName != null && { deploymentGroupName: input.deploymentGroupName }),
    ...(input.deploymentStyle != null && { deploymentStyle: se_DeploymentStyle(input.deploymentStyle, context) }),
    ...(input.ec2TagFilters != null && { ec2TagFilters: se_EC2TagFilterList(input.ec2TagFilters, context) }),
    ...(input.ec2TagSet != null && { ec2TagSet: se_EC2TagSet(input.ec2TagSet, context) }),
    ...(input.ecsServices != null && { ecsServices: se_ECSServiceList(input.ecsServices, context) }),
    ...(input.loadBalancerInfo != null && { loadBalancerInfo: se_LoadBalancerInfo(input.loadBalancerInfo, context) }),
    ...(input.onPremisesInstanceTagFilters != null && {
      onPremisesInstanceTagFilters: se_TagFilterList(input.onPremisesInstanceTagFilters, context),
    }),
    ...(input.onPremisesTagSet != null && { onPremisesTagSet: se_OnPremisesTagSet(input.onPremisesTagSet, context) }),
    ...(input.outdatedInstancesStrategy != null && { outdatedInstancesStrategy: input.outdatedInstancesStrategy }),
    ...(input.serviceRoleArn != null && { serviceRoleArn: input.serviceRoleArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.triggerConfigurations != null && {
      triggerConfigurations: se_TriggerConfigList(input.triggerConfigurations, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateDeploymentInput
 */
const se_CreateDeploymentInput = (input: CreateDeploymentInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.autoRollbackConfiguration != null && {
      autoRollbackConfiguration: se_AutoRollbackConfiguration(input.autoRollbackConfiguration, context),
    }),
    ...(input.deploymentConfigName != null && { deploymentConfigName: input.deploymentConfigName }),
    ...(input.deploymentGroupName != null && { deploymentGroupName: input.deploymentGroupName }),
    ...(input.description != null && { description: input.description }),
    ...(input.fileExistsBehavior != null && { fileExistsBehavior: input.fileExistsBehavior }),
    ...(input.ignoreApplicationStopFailures != null && {
      ignoreApplicationStopFailures: input.ignoreApplicationStopFailures,
    }),
    ...(input.overrideAlarmConfiguration != null && {
      overrideAlarmConfiguration: se_AlarmConfiguration(input.overrideAlarmConfiguration, context),
    }),
    ...(input.revision != null && { revision: se_RevisionLocation(input.revision, context) }),
    ...(input.targetInstances != null && { targetInstances: se_TargetInstances(input.targetInstances, context) }),
    ...(input.updateOutdatedInstancesOnly != null && {
      updateOutdatedInstancesOnly: input.updateOutdatedInstancesOnly,
    }),
  };
};

/**
 * serializeAws_json1_1DeleteApplicationInput
 */
const se_DeleteApplicationInput = (input: DeleteApplicationInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
  };
};

/**
 * serializeAws_json1_1DeleteDeploymentConfigInput
 */
const se_DeleteDeploymentConfigInput = (input: DeleteDeploymentConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentConfigName != null && { deploymentConfigName: input.deploymentConfigName }),
  };
};

/**
 * serializeAws_json1_1DeleteDeploymentGroupInput
 */
const se_DeleteDeploymentGroupInput = (input: DeleteDeploymentGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.deploymentGroupName != null && { deploymentGroupName: input.deploymentGroupName }),
  };
};

/**
 * serializeAws_json1_1DeleteGitHubAccountTokenInput
 */
const se_DeleteGitHubAccountTokenInput = (input: DeleteGitHubAccountTokenInput, context: __SerdeContext): any => {
  return {
    ...(input.tokenName != null && { tokenName: input.tokenName }),
  };
};

/**
 * serializeAws_json1_1DeleteResourcesByExternalIdInput
 */
const se_DeleteResourcesByExternalIdInput = (input: DeleteResourcesByExternalIdInput, context: __SerdeContext): any => {
  return {
    ...(input.externalId != null && { externalId: input.externalId }),
  };
};

/**
 * serializeAws_json1_1DeploymentGroupsList
 */
const se_DeploymentGroupsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeploymentReadyOption
 */
const se_DeploymentReadyOption = (input: DeploymentReadyOption, context: __SerdeContext): any => {
  return {
    ...(input.actionOnTimeout != null && { actionOnTimeout: input.actionOnTimeout }),
    ...(input.waitTimeInMinutes != null && { waitTimeInMinutes: input.waitTimeInMinutes }),
  };
};

/**
 * serializeAws_json1_1DeploymentsList
 */
const se_DeploymentsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeploymentStatusList
 */
const se_DeploymentStatusList = (input: (DeploymentStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeploymentStyle
 */
const se_DeploymentStyle = (input: DeploymentStyle, context: __SerdeContext): any => {
  return {
    ...(input.deploymentOption != null && { deploymentOption: input.deploymentOption }),
    ...(input.deploymentType != null && { deploymentType: input.deploymentType }),
  };
};

/**
 * serializeAws_json1_1DeregisterOnPremisesInstanceInput
 */
const se_DeregisterOnPremisesInstanceInput = (
  input: DeregisterOnPremisesInstanceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1EC2TagFilter
 */
const se_EC2TagFilter = (input: EC2TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1EC2TagFilterList
 */
const se_EC2TagFilterList = (input: EC2TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EC2TagFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1EC2TagSet
 */
const se_EC2TagSet = (input: EC2TagSet, context: __SerdeContext): any => {
  return {
    ...(input.ec2TagSetList != null && { ec2TagSetList: se_EC2TagSetList(input.ec2TagSetList, context) }),
  };
};

/**
 * serializeAws_json1_1EC2TagSetList
 */
const se_EC2TagSetList = (input: EC2TagFilter[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EC2TagFilterList(entry, context);
    });
};

/**
 * serializeAws_json1_1ECSService
 */
const se_ECSService = (input: ECSService, context: __SerdeContext): any => {
  return {
    ...(input.clusterName != null && { clusterName: input.clusterName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_1ECSServiceList
 */
const se_ECSServiceList = (input: ECSService[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ECSService(entry, context);
    });
};

/**
 * serializeAws_json1_1ELBInfo
 */
const se_ELBInfo = (input: ELBInfo, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1ELBInfoList
 */
const se_ELBInfoList = (input: ELBInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ELBInfo(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterValueList
 */
const se_FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetApplicationInput
 */
const se_GetApplicationInput = (input: GetApplicationInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
  };
};

/**
 * serializeAws_json1_1GetApplicationRevisionInput
 */
const se_GetApplicationRevisionInput = (input: GetApplicationRevisionInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.revision != null && { revision: se_RevisionLocation(input.revision, context) }),
  };
};

/**
 * serializeAws_json1_1GetDeploymentConfigInput
 */
const se_GetDeploymentConfigInput = (input: GetDeploymentConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentConfigName != null && { deploymentConfigName: input.deploymentConfigName }),
  };
};

/**
 * serializeAws_json1_1GetDeploymentGroupInput
 */
const se_GetDeploymentGroupInput = (input: GetDeploymentGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.deploymentGroupName != null && { deploymentGroupName: input.deploymentGroupName }),
  };
};

/**
 * serializeAws_json1_1GetDeploymentInput
 */
const se_GetDeploymentInput = (input: GetDeploymentInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
  };
};

/**
 * serializeAws_json1_1GetDeploymentInstanceInput
 */
const se_GetDeploymentInstanceInput = (input: GetDeploymentInstanceInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
    ...(input.instanceId != null && { instanceId: input.instanceId }),
  };
};

/**
 * serializeAws_json1_1GetDeploymentTargetInput
 */
const se_GetDeploymentTargetInput = (input: GetDeploymentTargetInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
    ...(input.targetId != null && { targetId: input.targetId }),
  };
};

/**
 * serializeAws_json1_1GetOnPremisesInstanceInput
 */
const se_GetOnPremisesInstanceInput = (input: GetOnPremisesInstanceInput, context: __SerdeContext): any => {
  return {
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1GitHubLocation
 */
const se_GitHubLocation = (input: GitHubLocation, context: __SerdeContext): any => {
  return {
    ...(input.commitId != null && { commitId: input.commitId }),
    ...(input.repository != null && { repository: input.repository }),
  };
};

/**
 * serializeAws_json1_1GreenFleetProvisioningOption
 */
const se_GreenFleetProvisioningOption = (input: GreenFleetProvisioningOption, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: input.action }),
  };
};

/**
 * serializeAws_json1_1InstanceNameList
 */
const se_InstanceNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1InstancesList
 */
const se_InstancesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1InstanceStatusList
 */
const se_InstanceStatusList = (input: (InstanceStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1InstanceTypeList
 */
const se_InstanceTypeList = (input: (_InstanceType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListApplicationRevisionsInput
 */
const se_ListApplicationRevisionsInput = (input: ListApplicationRevisionsInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.deployed != null && { deployed: input.deployed }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.s3Bucket != null && { s3Bucket: input.s3Bucket }),
    ...(input.s3KeyPrefix != null && { s3KeyPrefix: input.s3KeyPrefix }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_1ListApplicationsInput
 */
const se_ListApplicationsInput = (input: ListApplicationsInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListDeploymentConfigsInput
 */
const se_ListDeploymentConfigsInput = (input: ListDeploymentConfigsInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListDeploymentGroupsInput
 */
const se_ListDeploymentGroupsInput = (input: ListDeploymentGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListDeploymentInstancesInput
 */
const se_ListDeploymentInstancesInput = (input: ListDeploymentInstancesInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
    ...(input.instanceStatusFilter != null && {
      instanceStatusFilter: se_InstanceStatusList(input.instanceStatusFilter, context),
    }),
    ...(input.instanceTypeFilter != null && {
      instanceTypeFilter: se_InstanceTypeList(input.instanceTypeFilter, context),
    }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListDeploymentsInput
 */
const se_ListDeploymentsInput = (input: ListDeploymentsInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.createTimeRange != null && { createTimeRange: se_TimeRange(input.createTimeRange, context) }),
    ...(input.deploymentGroupName != null && { deploymentGroupName: input.deploymentGroupName }),
    ...(input.externalId != null && { externalId: input.externalId }),
    ...(input.includeOnlyStatuses != null && {
      includeOnlyStatuses: se_DeploymentStatusList(input.includeOnlyStatuses, context),
    }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListDeploymentTargetsInput
 */
const se_ListDeploymentTargetsInput = (input: ListDeploymentTargetsInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.targetFilters != null && { targetFilters: se_TargetFilters(input.targetFilters, context) }),
  };
};

/**
 * serializeAws_json1_1ListenerArnList
 */
const se_ListenerArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListGitHubAccountTokenNamesInput
 */
const se_ListGitHubAccountTokenNamesInput = (input: ListGitHubAccountTokenNamesInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListOnPremisesInstancesInput
 */
const se_ListOnPremisesInstancesInput = (input: ListOnPremisesInstancesInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.registrationStatus != null && { registrationStatus: input.registrationStatus }),
    ...(input.tagFilters != null && { tagFilters: se_TagFilterList(input.tagFilters, context) }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1LoadBalancerInfo
 */
const se_LoadBalancerInfo = (input: LoadBalancerInfo, context: __SerdeContext): any => {
  return {
    ...(input.elbInfoList != null && { elbInfoList: se_ELBInfoList(input.elbInfoList, context) }),
    ...(input.targetGroupInfoList != null && {
      targetGroupInfoList: se_TargetGroupInfoList(input.targetGroupInfoList, context),
    }),
    ...(input.targetGroupPairInfoList != null && {
      targetGroupPairInfoList: se_TargetGroupPairInfoList(input.targetGroupPairInfoList, context),
    }),
  };
};

/**
 * serializeAws_json1_1MinimumHealthyHosts
 */
const se_MinimumHealthyHosts = (input: MinimumHealthyHosts, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1OnPremisesTagSet
 */
const se_OnPremisesTagSet = (input: OnPremisesTagSet, context: __SerdeContext): any => {
  return {
    ...(input.onPremisesTagSetList != null && {
      onPremisesTagSetList: se_OnPremisesTagSetList(input.onPremisesTagSetList, context),
    }),
  };
};

/**
 * serializeAws_json1_1OnPremisesTagSetList
 */
const se_OnPremisesTagSetList = (input: TagFilter[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagFilterList(entry, context);
    });
};

/**
 * serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput
 */
const se_PutLifecycleEventHookExecutionStatusInput = (
  input: PutLifecycleEventHookExecutionStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
    ...(input.lifecycleEventHookExecutionId != null && {
      lifecycleEventHookExecutionId: input.lifecycleEventHookExecutionId,
    }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1RawString
 */
const se_RawString = (input: RawString, context: __SerdeContext): any => {
  return {
    ...(input.content != null && { content: input.content }),
    ...(input.sha256 != null && { sha256: input.sha256 }),
  };
};

/**
 * serializeAws_json1_1RegisterApplicationRevisionInput
 */
const se_RegisterApplicationRevisionInput = (input: RegisterApplicationRevisionInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.description != null && { description: input.description }),
    ...(input.revision != null && { revision: se_RevisionLocation(input.revision, context) }),
  };
};

/**
 * serializeAws_json1_1RegisterOnPremisesInstanceInput
 */
const se_RegisterOnPremisesInstanceInput = (input: RegisterOnPremisesInstanceInput, context: __SerdeContext): any => {
  return {
    ...(input.iamSessionArn != null && { iamSessionArn: input.iamSessionArn }),
    ...(input.iamUserArn != null && { iamUserArn: input.iamUserArn }),
    ...(input.instanceName != null && { instanceName: input.instanceName }),
  };
};

/**
 * serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput
 */
const se_RemoveTagsFromOnPremisesInstancesInput = (
  input: RemoveTagsFromOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames != null && { instanceNames: se_InstanceNameList(input.instanceNames, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1RevisionLocation
 */
const se_RevisionLocation = (input: RevisionLocation, context: __SerdeContext): any => {
  return {
    ...(input.appSpecContent != null && { appSpecContent: se_AppSpecContent(input.appSpecContent, context) }),
    ...(input.gitHubLocation != null && { gitHubLocation: se_GitHubLocation(input.gitHubLocation, context) }),
    ...(input.revisionType != null && { revisionType: input.revisionType }),
    ...(input.s3Location != null && { s3Location: se_S3Location(input.s3Location, context) }),
    ...(input.string != null && { string: se_RawString(input.string, context) }),
  };
};

/**
 * serializeAws_json1_1RevisionLocationList
 */
const se_RevisionLocationList = (input: RevisionLocation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RevisionLocation(entry, context);
    });
};

/**
 * serializeAws_json1_1S3Location
 */
const se_S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.bundleType != null && { bundleType: input.bundleType }),
    ...(input.eTag != null && { eTag: input.eTag }),
    ...(input.key != null && { key: input.key }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput
 */
const se_SkipWaitTimeForInstanceTerminationInput = (
  input: SkipWaitTimeForInstanceTerminationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
  };
};

/**
 * serializeAws_json1_1StopDeploymentInput
 */
const se_StopDeploymentInput = (input: StopDeploymentInput, context: __SerdeContext): any => {
  return {
    ...(input.autoRollbackEnabled != null && { autoRollbackEnabled: input.autoRollbackEnabled }),
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagFilter
 */
const se_TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagFilterList
 */
const se_TagFilterList = (input: TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TargetFilters
 */
const se_TargetFilters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [TargetFilterName | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_FilterValueList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1TargetGroupInfo
 */
const se_TargetGroupInfo = (input: TargetGroupInfo, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1TargetGroupInfoList
 */
const se_TargetGroupInfoList = (input: TargetGroupInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TargetGroupInfo(entry, context);
    });
};

/**
 * serializeAws_json1_1TargetGroupPairInfo
 */
const se_TargetGroupPairInfo = (input: TargetGroupPairInfo, context: __SerdeContext): any => {
  return {
    ...(input.prodTrafficRoute != null && { prodTrafficRoute: se_TrafficRoute(input.prodTrafficRoute, context) }),
    ...(input.targetGroups != null && { targetGroups: se_TargetGroupInfoList(input.targetGroups, context) }),
    ...(input.testTrafficRoute != null && { testTrafficRoute: se_TrafficRoute(input.testTrafficRoute, context) }),
  };
};

/**
 * serializeAws_json1_1TargetGroupPairInfoList
 */
const se_TargetGroupPairInfoList = (input: TargetGroupPairInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TargetGroupPairInfo(entry, context);
    });
};

/**
 * serializeAws_json1_1TargetIdList
 */
const se_TargetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TargetInstances
 */
const se_TargetInstances = (input: TargetInstances, context: __SerdeContext): any => {
  return {
    ...(input.autoScalingGroups != null && {
      autoScalingGroups: se_AutoScalingGroupNameList(input.autoScalingGroups, context),
    }),
    ...(input.ec2TagSet != null && { ec2TagSet: se_EC2TagSet(input.ec2TagSet, context) }),
    ...(input.tagFilters != null && { tagFilters: se_EC2TagFilterList(input.tagFilters, context) }),
  };
};

/**
 * serializeAws_json1_1TimeBasedCanary
 */
const se_TimeBasedCanary = (input: TimeBasedCanary, context: __SerdeContext): any => {
  return {
    ...(input.canaryInterval != null && { canaryInterval: input.canaryInterval }),
    ...(input.canaryPercentage != null && { canaryPercentage: input.canaryPercentage }),
  };
};

/**
 * serializeAws_json1_1TimeBasedLinear
 */
const se_TimeBasedLinear = (input: TimeBasedLinear, context: __SerdeContext): any => {
  return {
    ...(input.linearInterval != null && { linearInterval: input.linearInterval }),
    ...(input.linearPercentage != null && { linearPercentage: input.linearPercentage }),
  };
};

/**
 * serializeAws_json1_1TimeRange
 */
const se_TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.end != null && { end: Math.round(input.end.getTime() / 1000) }),
    ...(input.start != null && { start: Math.round(input.start.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1TrafficRoute
 */
const se_TrafficRoute = (input: TrafficRoute, context: __SerdeContext): any => {
  return {
    ...(input.listenerArns != null && { listenerArns: se_ListenerArnList(input.listenerArns, context) }),
  };
};

/**
 * serializeAws_json1_1TrafficRoutingConfig
 */
const se_TrafficRoutingConfig = (input: TrafficRoutingConfig, context: __SerdeContext): any => {
  return {
    ...(input.timeBasedCanary != null && { timeBasedCanary: se_TimeBasedCanary(input.timeBasedCanary, context) }),
    ...(input.timeBasedLinear != null && { timeBasedLinear: se_TimeBasedLinear(input.timeBasedLinear, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1TriggerConfig
 */
const se_TriggerConfig = (input: TriggerConfig, context: __SerdeContext): any => {
  return {
    ...(input.triggerEvents != null && { triggerEvents: se_TriggerEventTypeList(input.triggerEvents, context) }),
    ...(input.triggerName != null && { triggerName: input.triggerName }),
    ...(input.triggerTargetArn != null && { triggerTargetArn: input.triggerTargetArn }),
  };
};

/**
 * serializeAws_json1_1TriggerConfigList
 */
const se_TriggerConfigList = (input: TriggerConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TriggerConfig(entry, context);
    });
};

/**
 * serializeAws_json1_1TriggerEventTypeList
 */
const se_TriggerEventTypeList = (input: (TriggerEventType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateApplicationInput
 */
const se_UpdateApplicationInput = (input: UpdateApplicationInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.newApplicationName != null && { newApplicationName: input.newApplicationName }),
  };
};

/**
 * serializeAws_json1_1UpdateDeploymentGroupInput
 */
const se_UpdateDeploymentGroupInput = (input: UpdateDeploymentGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.alarmConfiguration != null && {
      alarmConfiguration: se_AlarmConfiguration(input.alarmConfiguration, context),
    }),
    ...(input.applicationName != null && { applicationName: input.applicationName }),
    ...(input.autoRollbackConfiguration != null && {
      autoRollbackConfiguration: se_AutoRollbackConfiguration(input.autoRollbackConfiguration, context),
    }),
    ...(input.autoScalingGroups != null && {
      autoScalingGroups: se_AutoScalingGroupNameList(input.autoScalingGroups, context),
    }),
    ...(input.blueGreenDeploymentConfiguration != null && {
      blueGreenDeploymentConfiguration: se_BlueGreenDeploymentConfiguration(
        input.blueGreenDeploymentConfiguration,
        context
      ),
    }),
    ...(input.currentDeploymentGroupName != null && { currentDeploymentGroupName: input.currentDeploymentGroupName }),
    ...(input.deploymentConfigName != null && { deploymentConfigName: input.deploymentConfigName }),
    ...(input.deploymentStyle != null && { deploymentStyle: se_DeploymentStyle(input.deploymentStyle, context) }),
    ...(input.ec2TagFilters != null && { ec2TagFilters: se_EC2TagFilterList(input.ec2TagFilters, context) }),
    ...(input.ec2TagSet != null && { ec2TagSet: se_EC2TagSet(input.ec2TagSet, context) }),
    ...(input.ecsServices != null && { ecsServices: se_ECSServiceList(input.ecsServices, context) }),
    ...(input.loadBalancerInfo != null && { loadBalancerInfo: se_LoadBalancerInfo(input.loadBalancerInfo, context) }),
    ...(input.newDeploymentGroupName != null && { newDeploymentGroupName: input.newDeploymentGroupName }),
    ...(input.onPremisesInstanceTagFilters != null && {
      onPremisesInstanceTagFilters: se_TagFilterList(input.onPremisesInstanceTagFilters, context),
    }),
    ...(input.onPremisesTagSet != null && { onPremisesTagSet: se_OnPremisesTagSet(input.onPremisesTagSet, context) }),
    ...(input.outdatedInstancesStrategy != null && { outdatedInstancesStrategy: input.outdatedInstancesStrategy }),
    ...(input.serviceRoleArn != null && { serviceRoleArn: input.serviceRoleArn }),
    ...(input.triggerConfigurations != null && {
      triggerConfigurations: se_TriggerConfigList(input.triggerConfigurations, context),
    }),
  };
};

/**
 * deserializeAws_json1_1Alarm
 */
const de_Alarm = (output: any, context: __SerdeContext): Alarm => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1AlarmConfiguration
 */
const de_AlarmConfiguration = (output: any, context: __SerdeContext): AlarmConfiguration => {
  return {
    alarms: output.alarms != null ? de_AlarmList(output.alarms, context) : undefined,
    enabled: __expectBoolean(output.enabled),
    ignorePollAlarmFailure: __expectBoolean(output.ignorePollAlarmFailure),
  } as any;
};

/**
 * deserializeAws_json1_1AlarmList
 */
const de_AlarmList = (output: any, context: __SerdeContext): Alarm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Alarm(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AlarmsLimitExceededException
 */
const de_AlarmsLimitExceededException = (output: any, context: __SerdeContext): AlarmsLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationAlreadyExistsException
 */
const de_ApplicationAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ApplicationAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationDoesNotExistException
 */
const de_ApplicationDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ApplicationDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationInfo
 */
const de_ApplicationInfo = (output: any, context: __SerdeContext): ApplicationInfo => {
  return {
    applicationId: __expectString(output.applicationId),
    applicationName: __expectString(output.applicationName),
    computePlatform: __expectString(output.computePlatform),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    gitHubAccountName: __expectString(output.gitHubAccountName),
    linkedToGitHub: __expectBoolean(output.linkedToGitHub),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationLimitExceededException
 */
const de_ApplicationLimitExceededException = (
  output: any,
  context: __SerdeContext
): ApplicationLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationNameRequiredException
 */
const de_ApplicationNameRequiredException = (
  output: any,
  context: __SerdeContext
): ApplicationNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationsInfoList
 */
const de_ApplicationsInfoList = (output: any, context: __SerdeContext): ApplicationInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApplicationInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ApplicationsList
 */
const de_ApplicationsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AppSpecContent
 */
const de_AppSpecContent = (output: any, context: __SerdeContext): AppSpecContent => {
  return {
    content: __expectString(output.content),
    sha256: __expectString(output.sha256),
  } as any;
};

/**
 * deserializeAws_json1_1ArnNotSupportedException
 */
const de_ArnNotSupportedException = (output: any, context: __SerdeContext): ArnNotSupportedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AutoRollbackConfiguration
 */
const de_AutoRollbackConfiguration = (output: any, context: __SerdeContext): AutoRollbackConfiguration => {
  return {
    enabled: __expectBoolean(output.enabled),
    events: output.events != null ? de_AutoRollbackEventsList(output.events, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AutoRollbackEventsList
 */
const de_AutoRollbackEventsList = (output: any, context: __SerdeContext): (AutoRollbackEvent | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoScalingGroup
 */
const de_AutoScalingGroup = (output: any, context: __SerdeContext): AutoScalingGroup => {
  return {
    hook: __expectString(output.hook),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1AutoScalingGroupList
 */
const de_AutoScalingGroupList = (output: any, context: __SerdeContext): AutoScalingGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AutoScalingGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoScalingGroupNameList
 */
const de_AutoScalingGroupNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchGetApplicationRevisionsOutput
 */
const de_BatchGetApplicationRevisionsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetApplicationRevisionsOutput => {
  return {
    applicationName: __expectString(output.applicationName),
    errorMessage: __expectString(output.errorMessage),
    revisions: output.revisions != null ? de_RevisionInfoList(output.revisions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetApplicationsOutput
 */
const de_BatchGetApplicationsOutput = (output: any, context: __SerdeContext): BatchGetApplicationsOutput => {
  return {
    applicationsInfo:
      output.applicationsInfo != null ? de_ApplicationsInfoList(output.applicationsInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetDeploymentGroupsOutput
 */
const de_BatchGetDeploymentGroupsOutput = (output: any, context: __SerdeContext): BatchGetDeploymentGroupsOutput => {
  return {
    deploymentGroupsInfo:
      output.deploymentGroupsInfo != null
        ? de_DeploymentGroupInfoList(output.deploymentGroupsInfo, context)
        : undefined,
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetDeploymentInstancesOutput
 */
const de_BatchGetDeploymentInstancesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentInstancesOutput => {
  return {
    errorMessage: __expectString(output.errorMessage),
    instancesSummary:
      output.instancesSummary != null ? de_InstanceSummaryList(output.instancesSummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetDeploymentsOutput
 */
const de_BatchGetDeploymentsOutput = (output: any, context: __SerdeContext): BatchGetDeploymentsOutput => {
  return {
    deploymentsInfo:
      output.deploymentsInfo != null ? de_DeploymentsInfoList(output.deploymentsInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetDeploymentTargetsOutput
 */
const de_BatchGetDeploymentTargetsOutput = (output: any, context: __SerdeContext): BatchGetDeploymentTargetsOutput => {
  return {
    deploymentTargets:
      output.deploymentTargets != null ? de_DeploymentTargetList(output.deploymentTargets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetOnPremisesInstancesOutput
 */
const de_BatchGetOnPremisesInstancesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetOnPremisesInstancesOutput => {
  return {
    instanceInfos: output.instanceInfos != null ? de_InstanceInfoList(output.instanceInfos, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchLimitExceededException
 */
const de_BatchLimitExceededException = (output: any, context: __SerdeContext): BatchLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1BlueGreenDeploymentConfiguration
 */
const de_BlueGreenDeploymentConfiguration = (
  output: any,
  context: __SerdeContext
): BlueGreenDeploymentConfiguration => {
  return {
    deploymentReadyOption:
      output.deploymentReadyOption != null
        ? de_DeploymentReadyOption(output.deploymentReadyOption, context)
        : undefined,
    greenFleetProvisioningOption:
      output.greenFleetProvisioningOption != null
        ? de_GreenFleetProvisioningOption(output.greenFleetProvisioningOption, context)
        : undefined,
    terminateBlueInstancesOnDeploymentSuccess:
      output.terminateBlueInstancesOnDeploymentSuccess != null
        ? de_BlueInstanceTerminationOption(output.terminateBlueInstancesOnDeploymentSuccess, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BlueInstanceTerminationOption
 */
const de_BlueInstanceTerminationOption = (output: any, context: __SerdeContext): BlueInstanceTerminationOption => {
  return {
    action: __expectString(output.action),
    terminationWaitTimeInMinutes: __expectInt32(output.terminationWaitTimeInMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1BucketNameFilterRequiredException
 */
const de_BucketNameFilterRequiredException = (
  output: any,
  context: __SerdeContext
): BucketNameFilterRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudFormationTarget
 */
const de_CloudFormationTarget = (output: any, context: __SerdeContext): CloudFormationTarget => {
  return {
    deploymentId: __expectString(output.deploymentId),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents != null ? de_LifecycleEventList(output.lifecycleEvents, context) : undefined,
    resourceType: __expectString(output.resourceType),
    status: __expectString(output.status),
    targetId: __expectString(output.targetId),
    targetVersionWeight: __limitedParseDouble(output.targetVersionWeight),
  } as any;
};

/**
 * deserializeAws_json1_1CreateApplicationOutput
 */
const de_CreateApplicationOutput = (output: any, context: __SerdeContext): CreateApplicationOutput => {
  return {
    applicationId: __expectString(output.applicationId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDeploymentConfigOutput
 */
const de_CreateDeploymentConfigOutput = (output: any, context: __SerdeContext): CreateDeploymentConfigOutput => {
  return {
    deploymentConfigId: __expectString(output.deploymentConfigId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDeploymentGroupOutput
 */
const de_CreateDeploymentGroupOutput = (output: any, context: __SerdeContext): CreateDeploymentGroupOutput => {
  return {
    deploymentGroupId: __expectString(output.deploymentGroupId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDeploymentOutput
 */
const de_CreateDeploymentOutput = (output: any, context: __SerdeContext): CreateDeploymentOutput => {
  return {
    deploymentId: __expectString(output.deploymentId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDeploymentGroupOutput
 */
const de_DeleteDeploymentGroupOutput = (output: any, context: __SerdeContext): DeleteDeploymentGroupOutput => {
  return {
    hooksNotCleanedUp:
      output.hooksNotCleanedUp != null ? de_AutoScalingGroupList(output.hooksNotCleanedUp, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteGitHubAccountTokenOutput
 */
const de_DeleteGitHubAccountTokenOutput = (output: any, context: __SerdeContext): DeleteGitHubAccountTokenOutput => {
  return {
    tokenName: __expectString(output.tokenName),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteResourcesByExternalIdOutput
 */
const de_DeleteResourcesByExternalIdOutput = (
  output: any,
  context: __SerdeContext
): DeleteResourcesByExternalIdOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeploymentAlreadyCompletedException
 */
const de_DeploymentAlreadyCompletedException = (
  output: any,
  context: __SerdeContext
): DeploymentAlreadyCompletedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentConfigAlreadyExistsException
 */
const de_DeploymentConfigAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentConfigDoesNotExistException
 */
const de_DeploymentConfigDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentConfigInfo
 */
const de_DeploymentConfigInfo = (output: any, context: __SerdeContext): DeploymentConfigInfo => {
  return {
    computePlatform: __expectString(output.computePlatform),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    deploymentConfigId: __expectString(output.deploymentConfigId),
    deploymentConfigName: __expectString(output.deploymentConfigName),
    minimumHealthyHosts:
      output.minimumHealthyHosts != null ? de_MinimumHealthyHosts(output.minimumHealthyHosts, context) : undefined,
    trafficRoutingConfig:
      output.trafficRoutingConfig != null ? de_TrafficRoutingConfig(output.trafficRoutingConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentConfigInUseException
 */
const de_DeploymentConfigInUseException = (output: any, context: __SerdeContext): DeploymentConfigInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentConfigLimitExceededException
 */
const de_DeploymentConfigLimitExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentConfigNameRequiredException
 */
const de_DeploymentConfigNameRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentConfigsList
 */
const de_DeploymentConfigsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeploymentDoesNotExistException
 */
const de_DeploymentDoesNotExistException = (output: any, context: __SerdeContext): DeploymentDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentGroupAlreadyExistsException
 */
const de_DeploymentGroupAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentGroupDoesNotExistException
 */
const de_DeploymentGroupDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentGroupInfo
 */
const de_DeploymentGroupInfo = (output: any, context: __SerdeContext): DeploymentGroupInfo => {
  return {
    alarmConfiguration:
      output.alarmConfiguration != null ? de_AlarmConfiguration(output.alarmConfiguration, context) : undefined,
    applicationName: __expectString(output.applicationName),
    autoRollbackConfiguration:
      output.autoRollbackConfiguration != null
        ? de_AutoRollbackConfiguration(output.autoRollbackConfiguration, context)
        : undefined,
    autoScalingGroups:
      output.autoScalingGroups != null ? de_AutoScalingGroupList(output.autoScalingGroups, context) : undefined,
    blueGreenDeploymentConfiguration:
      output.blueGreenDeploymentConfiguration != null
        ? de_BlueGreenDeploymentConfiguration(output.blueGreenDeploymentConfiguration, context)
        : undefined,
    computePlatform: __expectString(output.computePlatform),
    deploymentConfigName: __expectString(output.deploymentConfigName),
    deploymentGroupId: __expectString(output.deploymentGroupId),
    deploymentGroupName: __expectString(output.deploymentGroupName),
    deploymentStyle: output.deploymentStyle != null ? de_DeploymentStyle(output.deploymentStyle, context) : undefined,
    ec2TagFilters: output.ec2TagFilters != null ? de_EC2TagFilterList(output.ec2TagFilters, context) : undefined,
    ec2TagSet: output.ec2TagSet != null ? de_EC2TagSet(output.ec2TagSet, context) : undefined,
    ecsServices: output.ecsServices != null ? de_ECSServiceList(output.ecsServices, context) : undefined,
    lastAttemptedDeployment:
      output.lastAttemptedDeployment != null
        ? de_LastDeploymentInfo(output.lastAttemptedDeployment, context)
        : undefined,
    lastSuccessfulDeployment:
      output.lastSuccessfulDeployment != null
        ? de_LastDeploymentInfo(output.lastSuccessfulDeployment, context)
        : undefined,
    loadBalancerInfo:
      output.loadBalancerInfo != null ? de_LoadBalancerInfo(output.loadBalancerInfo, context) : undefined,
    onPremisesInstanceTagFilters:
      output.onPremisesInstanceTagFilters != null
        ? de_TagFilterList(output.onPremisesInstanceTagFilters, context)
        : undefined,
    onPremisesTagSet:
      output.onPremisesTagSet != null ? de_OnPremisesTagSet(output.onPremisesTagSet, context) : undefined,
    outdatedInstancesStrategy: __expectString(output.outdatedInstancesStrategy),
    serviceRoleArn: __expectString(output.serviceRoleArn),
    targetRevision: output.targetRevision != null ? de_RevisionLocation(output.targetRevision, context) : undefined,
    triggerConfigurations:
      output.triggerConfigurations != null ? de_TriggerConfigList(output.triggerConfigurations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentGroupInfoList
 */
const de_DeploymentGroupInfoList = (output: any, context: __SerdeContext): DeploymentGroupInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeploymentGroupInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeploymentGroupLimitExceededException
 */
const de_DeploymentGroupLimitExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentGroupNameRequiredException
 */
const de_DeploymentGroupNameRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentGroupsList
 */
const de_DeploymentGroupsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeploymentIdRequiredException
 */
const de_DeploymentIdRequiredException = (output: any, context: __SerdeContext): DeploymentIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentInfo
 */
const de_DeploymentInfo = (output: any, context: __SerdeContext): DeploymentInfo => {
  return {
    additionalDeploymentStatusInfo: __expectString(output.additionalDeploymentStatusInfo),
    applicationName: __expectString(output.applicationName),
    autoRollbackConfiguration:
      output.autoRollbackConfiguration != null
        ? de_AutoRollbackConfiguration(output.autoRollbackConfiguration, context)
        : undefined,
    blueGreenDeploymentConfiguration:
      output.blueGreenDeploymentConfiguration != null
        ? de_BlueGreenDeploymentConfiguration(output.blueGreenDeploymentConfiguration, context)
        : undefined,
    completeTime:
      output.completeTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.completeTime)))
        : undefined,
    computePlatform: __expectString(output.computePlatform),
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    creator: __expectString(output.creator),
    deploymentConfigName: __expectString(output.deploymentConfigName),
    deploymentGroupName: __expectString(output.deploymentGroupName),
    deploymentId: __expectString(output.deploymentId),
    deploymentOverview:
      output.deploymentOverview != null ? de_DeploymentOverview(output.deploymentOverview, context) : undefined,
    deploymentStatusMessages:
      output.deploymentStatusMessages != null
        ? de_DeploymentStatusMessageList(output.deploymentStatusMessages, context)
        : undefined,
    deploymentStyle: output.deploymentStyle != null ? de_DeploymentStyle(output.deploymentStyle, context) : undefined,
    description: __expectString(output.description),
    errorInformation:
      output.errorInformation != null ? de_ErrorInformation(output.errorInformation, context) : undefined,
    externalId: __expectString(output.externalId),
    fileExistsBehavior: __expectString(output.fileExistsBehavior),
    ignoreApplicationStopFailures: __expectBoolean(output.ignoreApplicationStopFailures),
    instanceTerminationWaitTimeStarted: __expectBoolean(output.instanceTerminationWaitTimeStarted),
    loadBalancerInfo:
      output.loadBalancerInfo != null ? de_LoadBalancerInfo(output.loadBalancerInfo, context) : undefined,
    overrideAlarmConfiguration:
      output.overrideAlarmConfiguration != null
        ? de_AlarmConfiguration(output.overrideAlarmConfiguration, context)
        : undefined,
    previousRevision:
      output.previousRevision != null ? de_RevisionLocation(output.previousRevision, context) : undefined,
    relatedDeployments:
      output.relatedDeployments != null ? de_RelatedDeployments(output.relatedDeployments, context) : undefined,
    revision: output.revision != null ? de_RevisionLocation(output.revision, context) : undefined,
    rollbackInfo: output.rollbackInfo != null ? de_RollbackInfo(output.rollbackInfo, context) : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    targetInstances: output.targetInstances != null ? de_TargetInstances(output.targetInstances, context) : undefined,
    updateOutdatedInstancesOnly: __expectBoolean(output.updateOutdatedInstancesOnly),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentIsNotInReadyStateException
 */
const de_DeploymentIsNotInReadyStateException = (
  output: any,
  context: __SerdeContext
): DeploymentIsNotInReadyStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentLimitExceededException
 */
const de_DeploymentLimitExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentNotStartedException
 */
const de_DeploymentNotStartedException = (output: any, context: __SerdeContext): DeploymentNotStartedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentOverview
 */
const de_DeploymentOverview = (output: any, context: __SerdeContext): DeploymentOverview => {
  return {
    Failed: __expectLong(output.Failed),
    InProgress: __expectLong(output.InProgress),
    Pending: __expectLong(output.Pending),
    Ready: __expectLong(output.Ready),
    Skipped: __expectLong(output.Skipped),
    Succeeded: __expectLong(output.Succeeded),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentReadyOption
 */
const de_DeploymentReadyOption = (output: any, context: __SerdeContext): DeploymentReadyOption => {
  return {
    actionOnTimeout: __expectString(output.actionOnTimeout),
    waitTimeInMinutes: __expectInt32(output.waitTimeInMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentsInfoList
 */
const de_DeploymentsInfoList = (output: any, context: __SerdeContext): DeploymentInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeploymentInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeploymentsList
 */
const de_DeploymentsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeploymentStatusMessageList
 */
const de_DeploymentStatusMessageList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeploymentStyle
 */
const de_DeploymentStyle = (output: any, context: __SerdeContext): DeploymentStyle => {
  return {
    deploymentOption: __expectString(output.deploymentOption),
    deploymentType: __expectString(output.deploymentType),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentTarget
 */
const de_DeploymentTarget = (output: any, context: __SerdeContext): DeploymentTarget => {
  return {
    cloudFormationTarget:
      output.cloudFormationTarget != null ? de_CloudFormationTarget(output.cloudFormationTarget, context) : undefined,
    deploymentTargetType: __expectString(output.deploymentTargetType),
    ecsTarget: output.ecsTarget != null ? de_ECSTarget(output.ecsTarget, context) : undefined,
    instanceTarget: output.instanceTarget != null ? de_InstanceTarget(output.instanceTarget, context) : undefined,
    lambdaTarget: output.lambdaTarget != null ? de_LambdaTarget(output.lambdaTarget, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentTargetDoesNotExistException
 */
const de_DeploymentTargetDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentTargetDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentTargetIdRequiredException
 */
const de_DeploymentTargetIdRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentTargetIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeploymentTargetList
 */
const de_DeploymentTargetList = (output: any, context: __SerdeContext): DeploymentTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeploymentTarget(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeploymentTargetListSizeExceededException
 */
const de_DeploymentTargetListSizeExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentTargetListSizeExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DescriptionTooLongException
 */
const de_DescriptionTooLongException = (output: any, context: __SerdeContext): DescriptionTooLongException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Diagnostics
 */
const de_Diagnostics = (output: any, context: __SerdeContext): Diagnostics => {
  return {
    errorCode: __expectString(output.errorCode),
    logTail: __expectString(output.logTail),
    message: __expectString(output.message),
    scriptName: __expectString(output.scriptName),
  } as any;
};

/**
 * deserializeAws_json1_1EC2TagFilter
 */
const de_EC2TagFilter = (output: any, context: __SerdeContext): EC2TagFilter => {
  return {
    Key: __expectString(output.Key),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1EC2TagFilterList
 */
const de_EC2TagFilterList = (output: any, context: __SerdeContext): EC2TagFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EC2TagFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EC2TagSet
 */
const de_EC2TagSet = (output: any, context: __SerdeContext): EC2TagSet => {
  return {
    ec2TagSetList: output.ec2TagSetList != null ? de_EC2TagSetList(output.ec2TagSetList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EC2TagSetList
 */
const de_EC2TagSetList = (output: any, context: __SerdeContext): EC2TagFilter[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EC2TagFilterList(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ECSService
 */
const de_ECSService = (output: any, context: __SerdeContext): ECSService => {
  return {
    clusterName: __expectString(output.clusterName),
    serviceName: __expectString(output.serviceName),
  } as any;
};

/**
 * deserializeAws_json1_1ECSServiceList
 */
const de_ECSServiceList = (output: any, context: __SerdeContext): ECSService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ECSService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ECSServiceMappingLimitExceededException
 */
const de_ECSServiceMappingLimitExceededException = (
  output: any,
  context: __SerdeContext
): ECSServiceMappingLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ECSTarget
 */
const de_ECSTarget = (output: any, context: __SerdeContext): ECSTarget => {
  return {
    deploymentId: __expectString(output.deploymentId),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents != null ? de_LifecycleEventList(output.lifecycleEvents, context) : undefined,
    status: __expectString(output.status),
    targetArn: __expectString(output.targetArn),
    targetId: __expectString(output.targetId),
    taskSetsInfo: output.taskSetsInfo != null ? de_ECSTaskSetList(output.taskSetsInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ECSTaskSet
 */
const de_ECSTaskSet = (output: any, context: __SerdeContext): ECSTaskSet => {
  return {
    desiredCount: __expectLong(output.desiredCount),
    identifer: __expectString(output.identifer),
    pendingCount: __expectLong(output.pendingCount),
    runningCount: __expectLong(output.runningCount),
    status: __expectString(output.status),
    targetGroup: output.targetGroup != null ? de_TargetGroupInfo(output.targetGroup, context) : undefined,
    taskSetLabel: __expectString(output.taskSetLabel),
    trafficWeight: __limitedParseDouble(output.trafficWeight),
  } as any;
};

/**
 * deserializeAws_json1_1ECSTaskSetList
 */
const de_ECSTaskSetList = (output: any, context: __SerdeContext): ECSTaskSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ECSTaskSet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ELBInfo
 */
const de_ELBInfo = (output: any, context: __SerdeContext): ELBInfo => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1ELBInfoList
 */
const de_ELBInfoList = (output: any, context: __SerdeContext): ELBInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ELBInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ErrorInformation
 */
const de_ErrorInformation = (output: any, context: __SerdeContext): ErrorInformation => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1GenericRevisionInfo
 */
const de_GenericRevisionInfo = (output: any, context: __SerdeContext): GenericRevisionInfo => {
  return {
    deploymentGroups:
      output.deploymentGroups != null ? de_DeploymentGroupsList(output.deploymentGroups, context) : undefined,
    description: __expectString(output.description),
    firstUsedTime:
      output.firstUsedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.firstUsedTime)))
        : undefined,
    lastUsedTime:
      output.lastUsedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUsedTime)))
        : undefined,
    registerTime:
      output.registerTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.registerTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetApplicationOutput
 */
const de_GetApplicationOutput = (output: any, context: __SerdeContext): GetApplicationOutput => {
  return {
    application: output.application != null ? de_ApplicationInfo(output.application, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetApplicationRevisionOutput
 */
const de_GetApplicationRevisionOutput = (output: any, context: __SerdeContext): GetApplicationRevisionOutput => {
  return {
    applicationName: __expectString(output.applicationName),
    revision: output.revision != null ? de_RevisionLocation(output.revision, context) : undefined,
    revisionInfo: output.revisionInfo != null ? de_GenericRevisionInfo(output.revisionInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDeploymentConfigOutput
 */
const de_GetDeploymentConfigOutput = (output: any, context: __SerdeContext): GetDeploymentConfigOutput => {
  return {
    deploymentConfigInfo:
      output.deploymentConfigInfo != null ? de_DeploymentConfigInfo(output.deploymentConfigInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDeploymentGroupOutput
 */
const de_GetDeploymentGroupOutput = (output: any, context: __SerdeContext): GetDeploymentGroupOutput => {
  return {
    deploymentGroupInfo:
      output.deploymentGroupInfo != null ? de_DeploymentGroupInfo(output.deploymentGroupInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDeploymentInstanceOutput
 */
const de_GetDeploymentInstanceOutput = (output: any, context: __SerdeContext): GetDeploymentInstanceOutput => {
  return {
    instanceSummary: output.instanceSummary != null ? de_InstanceSummary(output.instanceSummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDeploymentOutput
 */
const de_GetDeploymentOutput = (output: any, context: __SerdeContext): GetDeploymentOutput => {
  return {
    deploymentInfo: output.deploymentInfo != null ? de_DeploymentInfo(output.deploymentInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDeploymentTargetOutput
 */
const de_GetDeploymentTargetOutput = (output: any, context: __SerdeContext): GetDeploymentTargetOutput => {
  return {
    deploymentTarget:
      output.deploymentTarget != null ? de_DeploymentTarget(output.deploymentTarget, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetOnPremisesInstanceOutput
 */
const de_GetOnPremisesInstanceOutput = (output: any, context: __SerdeContext): GetOnPremisesInstanceOutput => {
  return {
    instanceInfo: output.instanceInfo != null ? de_InstanceInfo(output.instanceInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GitHubAccountTokenDoesNotExistException
 */
const de_GitHubAccountTokenDoesNotExistException = (
  output: any,
  context: __SerdeContext
): GitHubAccountTokenDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1GitHubAccountTokenNameList
 */
const de_GitHubAccountTokenNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GitHubAccountTokenNameRequiredException
 */
const de_GitHubAccountTokenNameRequiredException = (
  output: any,
  context: __SerdeContext
): GitHubAccountTokenNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1GitHubLocation
 */
const de_GitHubLocation = (output: any, context: __SerdeContext): GitHubLocation => {
  return {
    commitId: __expectString(output.commitId),
    repository: __expectString(output.repository),
  } as any;
};

/**
 * deserializeAws_json1_1GreenFleetProvisioningOption
 */
const de_GreenFleetProvisioningOption = (output: any, context: __SerdeContext): GreenFleetProvisioningOption => {
  return {
    action: __expectString(output.action),
  } as any;
};

/**
 * deserializeAws_json1_1IamArnRequiredException
 */
const de_IamArnRequiredException = (output: any, context: __SerdeContext): IamArnRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1IamSessionArnAlreadyRegisteredException
 */
const de_IamSessionArnAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): IamSessionArnAlreadyRegisteredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1IamUserArnAlreadyRegisteredException
 */
const de_IamUserArnAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): IamUserArnAlreadyRegisteredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1IamUserArnRequiredException
 */
const de_IamUserArnRequiredException = (output: any, context: __SerdeContext): IamUserArnRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceDoesNotExistException
 */
const de_InstanceDoesNotExistException = (output: any, context: __SerdeContext): InstanceDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceIdRequiredException
 */
const de_InstanceIdRequiredException = (output: any, context: __SerdeContext): InstanceIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceInfo
 */
const de_InstanceInfo = (output: any, context: __SerdeContext): InstanceInfo => {
  return {
    deregisterTime:
      output.deregisterTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.deregisterTime)))
        : undefined,
    iamSessionArn: __expectString(output.iamSessionArn),
    iamUserArn: __expectString(output.iamUserArn),
    instanceArn: __expectString(output.instanceArn),
    instanceName: __expectString(output.instanceName),
    registerTime:
      output.registerTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.registerTime)))
        : undefined,
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceInfoList
 */
const de_InstanceInfoList = (output: any, context: __SerdeContext): InstanceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceLimitExceededException
 */
const de_InstanceLimitExceededException = (output: any, context: __SerdeContext): InstanceLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceNameAlreadyRegisteredException
 */
const de_InstanceNameAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): InstanceNameAlreadyRegisteredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceNameList
 */
const de_InstanceNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceNameRequiredException
 */
const de_InstanceNameRequiredException = (output: any, context: __SerdeContext): InstanceNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceNotRegisteredException
 */
const de_InstanceNotRegisteredException = (output: any, context: __SerdeContext): InstanceNotRegisteredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InstancesList
 */
const de_InstancesList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceSummary
 */
const de_InstanceSummary = (output: any, context: __SerdeContext): InstanceSummary => {
  return {
    deploymentId: __expectString(output.deploymentId),
    instanceId: __expectString(output.instanceId),
    instanceType: __expectString(output.instanceType),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents != null ? de_LifecycleEventList(output.lifecycleEvents, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceSummaryList
 */
const de_InstanceSummaryList = (output: any, context: __SerdeContext): InstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceTarget
 */
const de_InstanceTarget = (output: any, context: __SerdeContext): InstanceTarget => {
  return {
    deploymentId: __expectString(output.deploymentId),
    instanceLabel: __expectString(output.instanceLabel),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents != null ? de_LifecycleEventList(output.lifecycleEvents, context) : undefined,
    status: __expectString(output.status),
    targetArn: __expectString(output.targetArn),
    targetId: __expectString(output.targetId),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAlarmConfigException
 */
const de_InvalidAlarmConfigException = (output: any, context: __SerdeContext): InvalidAlarmConfigException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidApplicationNameException
 */
const de_InvalidApplicationNameException = (output: any, context: __SerdeContext): InvalidApplicationNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidArnException
 */
const de_InvalidArnException = (output: any, context: __SerdeContext): InvalidArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAutoRollbackConfigException
 */
const de_InvalidAutoRollbackConfigException = (
  output: any,
  context: __SerdeContext
): InvalidAutoRollbackConfigException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAutoScalingGroupException
 */
const de_InvalidAutoScalingGroupException = (
  output: any,
  context: __SerdeContext
): InvalidAutoScalingGroupException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException
 */
const de_InvalidBlueGreenDeploymentConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidBlueGreenDeploymentConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidBucketNameFilterException
 */
const de_InvalidBucketNameFilterException = (
  output: any,
  context: __SerdeContext
): InvalidBucketNameFilterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidComputePlatformException
 */
const de_InvalidComputePlatformException = (output: any, context: __SerdeContext): InvalidComputePlatformException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeployedStateFilterException
 */
const de_InvalidDeployedStateFilterException = (
  output: any,
  context: __SerdeContext
): InvalidDeployedStateFilterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeploymentConfigNameException
 */
const de_InvalidDeploymentConfigNameException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentConfigNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeploymentGroupNameException
 */
const de_InvalidDeploymentGroupNameException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentGroupNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeploymentIdException
 */
const de_InvalidDeploymentIdException = (output: any, context: __SerdeContext): InvalidDeploymentIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeploymentInstanceTypeException
 */
const de_InvalidDeploymentInstanceTypeException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentInstanceTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeploymentStatusException
 */
const de_InvalidDeploymentStatusException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeploymentStyleException
 */
const de_InvalidDeploymentStyleException = (output: any, context: __SerdeContext): InvalidDeploymentStyleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeploymentTargetIdException
 */
const de_InvalidDeploymentTargetIdException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentTargetIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDeploymentWaitTypeException
 */
const de_InvalidDeploymentWaitTypeException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentWaitTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidEC2TagCombinationException
 */
const de_InvalidEC2TagCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidEC2TagCombinationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidEC2TagException
 */
const de_InvalidEC2TagException = (output: any, context: __SerdeContext): InvalidEC2TagException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidECSServiceException
 */
const de_InvalidECSServiceException = (output: any, context: __SerdeContext): InvalidECSServiceException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidExternalIdException
 */
const de_InvalidExternalIdException = (output: any, context: __SerdeContext): InvalidExternalIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidFileExistsBehaviorException
 */
const de_InvalidFileExistsBehaviorException = (
  output: any,
  context: __SerdeContext
): InvalidFileExistsBehaviorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidGitHubAccountTokenException
 */
const de_InvalidGitHubAccountTokenException = (
  output: any,
  context: __SerdeContext
): InvalidGitHubAccountTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidGitHubAccountTokenNameException
 */
const de_InvalidGitHubAccountTokenNameException = (
  output: any,
  context: __SerdeContext
): InvalidGitHubAccountTokenNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidIamSessionArnException
 */
const de_InvalidIamSessionArnException = (output: any, context: __SerdeContext): InvalidIamSessionArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidIamUserArnException
 */
const de_InvalidIamUserArnException = (output: any, context: __SerdeContext): InvalidIamUserArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException
 */
const de_InvalidIgnoreApplicationStopFailuresValueException = (
  output: any,
  context: __SerdeContext
): InvalidIgnoreApplicationStopFailuresValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInstanceNameException
 */
const de_InvalidInstanceNameException = (output: any, context: __SerdeContext): InvalidInstanceNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInstanceStatusException
 */
const de_InvalidInstanceStatusException = (output: any, context: __SerdeContext): InvalidInstanceStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInstanceTypeException
 */
const de_InvalidInstanceTypeException = (output: any, context: __SerdeContext): InvalidInstanceTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidKeyPrefixFilterException
 */
const de_InvalidKeyPrefixFilterException = (output: any, context: __SerdeContext): InvalidKeyPrefixFilterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException
 */
const de_InvalidLifecycleEventHookExecutionIdException = (
  output: any,
  context: __SerdeContext
): InvalidLifecycleEventHookExecutionIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException
 */
const de_InvalidLifecycleEventHookExecutionStatusException = (
  output: any,
  context: __SerdeContext
): InvalidLifecycleEventHookExecutionStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidLoadBalancerInfoException
 */
const de_InvalidLoadBalancerInfoException = (
  output: any,
  context: __SerdeContext
): InvalidLoadBalancerInfoException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidMinimumHealthyHostValueException
 */
const de_InvalidMinimumHealthyHostValueException = (
  output: any,
  context: __SerdeContext
): InvalidMinimumHealthyHostValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidOnPremisesTagCombinationException
 */
const de_InvalidOnPremisesTagCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidOnPremisesTagCombinationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidOperationException
 */
const de_InvalidOperationException = (output: any, context: __SerdeContext): InvalidOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRegistrationStatusException
 */
const de_InvalidRegistrationStatusException = (
  output: any,
  context: __SerdeContext
): InvalidRegistrationStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRevisionException
 */
const de_InvalidRevisionException = (output: any, context: __SerdeContext): InvalidRevisionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRoleException
 */
const de_InvalidRoleException = (output: any, context: __SerdeContext): InvalidRoleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSortByException
 */
const de_InvalidSortByException = (output: any, context: __SerdeContext): InvalidSortByException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSortOrderException
 */
const de_InvalidSortOrderException = (output: any, context: __SerdeContext): InvalidSortOrderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTagException
 */
const de_InvalidTagException = (output: any, context: __SerdeContext): InvalidTagException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTagFilterException
 */
const de_InvalidTagFilterException = (output: any, context: __SerdeContext): InvalidTagFilterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTagsToAddException
 */
const de_InvalidTagsToAddException = (output: any, context: __SerdeContext): InvalidTagsToAddException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTargetFilterNameException
 */
const de_InvalidTargetFilterNameException = (
  output: any,
  context: __SerdeContext
): InvalidTargetFilterNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTargetGroupPairException
 */
const de_InvalidTargetGroupPairException = (output: any, context: __SerdeContext): InvalidTargetGroupPairException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTargetInstancesException
 */
const de_InvalidTargetInstancesException = (output: any, context: __SerdeContext): InvalidTargetInstancesException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTimeRangeException
 */
const de_InvalidTimeRangeException = (output: any, context: __SerdeContext): InvalidTimeRangeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTrafficRoutingConfigurationException
 */
const de_InvalidTrafficRoutingConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidTrafficRoutingConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTriggerConfigException
 */
const de_InvalidTriggerConfigException = (output: any, context: __SerdeContext): InvalidTriggerConfigException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException
 */
const de_InvalidUpdateOutdatedInstancesOnlyValueException = (
  output: any,
  context: __SerdeContext
): InvalidUpdateOutdatedInstancesOnlyValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LambdaFunctionInfo
 */
const de_LambdaFunctionInfo = (output: any, context: __SerdeContext): LambdaFunctionInfo => {
  return {
    currentVersion: __expectString(output.currentVersion),
    functionAlias: __expectString(output.functionAlias),
    functionName: __expectString(output.functionName),
    targetVersion: __expectString(output.targetVersion),
    targetVersionWeight: __limitedParseDouble(output.targetVersionWeight),
  } as any;
};

/**
 * deserializeAws_json1_1LambdaTarget
 */
const de_LambdaTarget = (output: any, context: __SerdeContext): LambdaTarget => {
  return {
    deploymentId: __expectString(output.deploymentId),
    lambdaFunctionInfo:
      output.lambdaFunctionInfo != null ? de_LambdaFunctionInfo(output.lambdaFunctionInfo, context) : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents != null ? de_LifecycleEventList(output.lifecycleEvents, context) : undefined,
    status: __expectString(output.status),
    targetArn: __expectString(output.targetArn),
    targetId: __expectString(output.targetId),
  } as any;
};

/**
 * deserializeAws_json1_1LastDeploymentInfo
 */
const de_LastDeploymentInfo = (output: any, context: __SerdeContext): LastDeploymentInfo => {
  return {
    createTime:
      output.createTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime))) : undefined,
    deploymentId: __expectString(output.deploymentId),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1LifecycleEvent
 */
const de_LifecycleEvent = (output: any, context: __SerdeContext): LifecycleEvent => {
  return {
    diagnostics: output.diagnostics != null ? de_Diagnostics(output.diagnostics, context) : undefined,
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    lifecycleEventName: __expectString(output.lifecycleEventName),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1LifecycleEventAlreadyCompletedException
 */
const de_LifecycleEventAlreadyCompletedException = (
  output: any,
  context: __SerdeContext
): LifecycleEventAlreadyCompletedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LifecycleEventList
 */
const de_LifecycleEventList = (output: any, context: __SerdeContext): LifecycleEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LifecycleEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LifecycleHookLimitExceededException
 */
const de_LifecycleHookLimitExceededException = (
  output: any,
  context: __SerdeContext
): LifecycleHookLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListApplicationRevisionsOutput
 */
const de_ListApplicationRevisionsOutput = (output: any, context: __SerdeContext): ListApplicationRevisionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    revisions: output.revisions != null ? de_RevisionLocationList(output.revisions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListApplicationsOutput
 */
const de_ListApplicationsOutput = (output: any, context: __SerdeContext): ListApplicationsOutput => {
  return {
    applications: output.applications != null ? de_ApplicationsList(output.applications, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDeploymentConfigsOutput
 */
const de_ListDeploymentConfigsOutput = (output: any, context: __SerdeContext): ListDeploymentConfigsOutput => {
  return {
    deploymentConfigsList:
      output.deploymentConfigsList != null
        ? de_DeploymentConfigsList(output.deploymentConfigsList, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDeploymentGroupsOutput
 */
const de_ListDeploymentGroupsOutput = (output: any, context: __SerdeContext): ListDeploymentGroupsOutput => {
  return {
    applicationName: __expectString(output.applicationName),
    deploymentGroups:
      output.deploymentGroups != null ? de_DeploymentGroupsList(output.deploymentGroups, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDeploymentInstancesOutput
 */
const de_ListDeploymentInstancesOutput = (output: any, context: __SerdeContext): ListDeploymentInstancesOutput => {
  return {
    instancesList: output.instancesList != null ? de_InstancesList(output.instancesList, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDeploymentsOutput
 */
const de_ListDeploymentsOutput = (output: any, context: __SerdeContext): ListDeploymentsOutput => {
  return {
    deployments: output.deployments != null ? de_DeploymentsList(output.deployments, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDeploymentTargetsOutput
 */
const de_ListDeploymentTargetsOutput = (output: any, context: __SerdeContext): ListDeploymentTargetsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    targetIds: output.targetIds != null ? de_TargetIdList(output.targetIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListenerArnList
 */
const de_ListenerArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListGitHubAccountTokenNamesOutput
 */
const de_ListGitHubAccountTokenNamesOutput = (
  output: any,
  context: __SerdeContext
): ListGitHubAccountTokenNamesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    tokenNameList:
      output.tokenNameList != null ? de_GitHubAccountTokenNameList(output.tokenNameList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListOnPremisesInstancesOutput
 */
const de_ListOnPremisesInstancesOutput = (output: any, context: __SerdeContext): ListOnPremisesInstancesOutput => {
  return {
    instanceNames: output.instanceNames != null ? de_InstanceNameList(output.instanceNames, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LoadBalancerInfo
 */
const de_LoadBalancerInfo = (output: any, context: __SerdeContext): LoadBalancerInfo => {
  return {
    elbInfoList: output.elbInfoList != null ? de_ELBInfoList(output.elbInfoList, context) : undefined,
    targetGroupInfoList:
      output.targetGroupInfoList != null ? de_TargetGroupInfoList(output.targetGroupInfoList, context) : undefined,
    targetGroupPairInfoList:
      output.targetGroupPairInfoList != null
        ? de_TargetGroupPairInfoList(output.targetGroupPairInfoList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MinimumHealthyHosts
 */
const de_MinimumHealthyHosts = (output: any, context: __SerdeContext): MinimumHealthyHosts => {
  return {
    type: __expectString(output.type),
    value: __expectInt32(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1MultipleIamArnsProvidedException
 */
const de_MultipleIamArnsProvidedException = (
  output: any,
  context: __SerdeContext
): MultipleIamArnsProvidedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OnPremisesTagSet
 */
const de_OnPremisesTagSet = (output: any, context: __SerdeContext): OnPremisesTagSet => {
  return {
    onPremisesTagSetList:
      output.onPremisesTagSetList != null ? de_OnPremisesTagSetList(output.onPremisesTagSetList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OnPremisesTagSetList
 */
const de_OnPremisesTagSetList = (output: any, context: __SerdeContext): TagFilter[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagFilterList(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OperationNotSupportedException
 */
const de_OperationNotSupportedException = (output: any, context: __SerdeContext): OperationNotSupportedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PutLifecycleEventHookExecutionStatusOutput
 */
const de_PutLifecycleEventHookExecutionStatusOutput = (
  output: any,
  context: __SerdeContext
): PutLifecycleEventHookExecutionStatusOutput => {
  return {
    lifecycleEventHookExecutionId: __expectString(output.lifecycleEventHookExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1RawString
 */
const de_RawString = (output: any, context: __SerdeContext): RawString => {
  return {
    content: __expectString(output.content),
    sha256: __expectString(output.sha256),
  } as any;
};

/**
 * deserializeAws_json1_1RelatedDeployments
 */
const de_RelatedDeployments = (output: any, context: __SerdeContext): RelatedDeployments => {
  return {
    autoUpdateOutdatedInstancesDeploymentIds:
      output.autoUpdateOutdatedInstancesDeploymentIds != null
        ? de_DeploymentsList(output.autoUpdateOutdatedInstancesDeploymentIds, context)
        : undefined,
    autoUpdateOutdatedInstancesRootDeploymentId: __expectString(output.autoUpdateOutdatedInstancesRootDeploymentId),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceArnRequiredException
 */
const de_ResourceArnRequiredException = (output: any, context: __SerdeContext): ResourceArnRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceValidationException
 */
const de_ResourceValidationException = (output: any, context: __SerdeContext): ResourceValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RevisionDoesNotExistException
 */
const de_RevisionDoesNotExistException = (output: any, context: __SerdeContext): RevisionDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RevisionInfo
 */
const de_RevisionInfo = (output: any, context: __SerdeContext): RevisionInfo => {
  return {
    genericRevisionInfo:
      output.genericRevisionInfo != null ? de_GenericRevisionInfo(output.genericRevisionInfo, context) : undefined,
    revisionLocation:
      output.revisionLocation != null ? de_RevisionLocation(output.revisionLocation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RevisionInfoList
 */
const de_RevisionInfoList = (output: any, context: __SerdeContext): RevisionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RevisionInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RevisionLocation
 */
const de_RevisionLocation = (output: any, context: __SerdeContext): RevisionLocation => {
  return {
    appSpecContent: output.appSpecContent != null ? de_AppSpecContent(output.appSpecContent, context) : undefined,
    gitHubLocation: output.gitHubLocation != null ? de_GitHubLocation(output.gitHubLocation, context) : undefined,
    revisionType: __expectString(output.revisionType),
    s3Location: output.s3Location != null ? de_S3Location(output.s3Location, context) : undefined,
    string: output.string != null ? de_RawString(output.string, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RevisionLocationList
 */
const de_RevisionLocationList = (output: any, context: __SerdeContext): RevisionLocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RevisionLocation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RevisionRequiredException
 */
const de_RevisionRequiredException = (output: any, context: __SerdeContext): RevisionRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RoleRequiredException
 */
const de_RoleRequiredException = (output: any, context: __SerdeContext): RoleRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RollbackInfo
 */
const de_RollbackInfo = (output: any, context: __SerdeContext): RollbackInfo => {
  return {
    rollbackDeploymentId: __expectString(output.rollbackDeploymentId),
    rollbackMessage: __expectString(output.rollbackMessage),
    rollbackTriggeringDeploymentId: __expectString(output.rollbackTriggeringDeploymentId),
  } as any;
};

/**
 * deserializeAws_json1_1S3Location
 */
const de_S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    bucket: __expectString(output.bucket),
    bundleType: __expectString(output.bundleType),
    eTag: __expectString(output.eTag),
    key: __expectString(output.key),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_json1_1StopDeploymentOutput
 */
const de_StopDeploymentOutput = (output: any, context: __SerdeContext): StopDeploymentOutput => {
  return {
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagFilter
 */
const de_TagFilter = (output: any, context: __SerdeContext): TagFilter => {
  return {
    Key: __expectString(output.Key),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagFilterList
 */
const de_TagFilterList = (output: any, context: __SerdeContext): TagFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TagFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagLimitExceededException
 */
const de_TagLimitExceededException = (output: any, context: __SerdeContext): TagLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagRequiredException
 */
const de_TagRequiredException = (output: any, context: __SerdeContext): TagRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceOutput
 */
const de_TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TagSetListLimitExceededException
 */
const de_TagSetListLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagSetListLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TargetGroupInfo
 */
const de_TargetGroupInfo = (output: any, context: __SerdeContext): TargetGroupInfo => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1TargetGroupInfoList
 */
const de_TargetGroupInfoList = (output: any, context: __SerdeContext): TargetGroupInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetGroupInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetGroupPairInfo
 */
const de_TargetGroupPairInfo = (output: any, context: __SerdeContext): TargetGroupPairInfo => {
  return {
    prodTrafficRoute: output.prodTrafficRoute != null ? de_TrafficRoute(output.prodTrafficRoute, context) : undefined,
    targetGroups: output.targetGroups != null ? de_TargetGroupInfoList(output.targetGroups, context) : undefined,
    testTrafficRoute: output.testTrafficRoute != null ? de_TrafficRoute(output.testTrafficRoute, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TargetGroupPairInfoList
 */
const de_TargetGroupPairInfoList = (output: any, context: __SerdeContext): TargetGroupPairInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetGroupPairInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetIdList
 */
const de_TargetIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TargetInstances
 */
const de_TargetInstances = (output: any, context: __SerdeContext): TargetInstances => {
  return {
    autoScalingGroups:
      output.autoScalingGroups != null ? de_AutoScalingGroupNameList(output.autoScalingGroups, context) : undefined,
    ec2TagSet: output.ec2TagSet != null ? de_EC2TagSet(output.ec2TagSet, context) : undefined,
    tagFilters: output.tagFilters != null ? de_EC2TagFilterList(output.tagFilters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TimeBasedCanary
 */
const de_TimeBasedCanary = (output: any, context: __SerdeContext): TimeBasedCanary => {
  return {
    canaryInterval: __expectInt32(output.canaryInterval),
    canaryPercentage: __expectInt32(output.canaryPercentage),
  } as any;
};

/**
 * deserializeAws_json1_1TimeBasedLinear
 */
const de_TimeBasedLinear = (output: any, context: __SerdeContext): TimeBasedLinear => {
  return {
    linearInterval: __expectInt32(output.linearInterval),
    linearPercentage: __expectInt32(output.linearPercentage),
  } as any;
};

/**
 * deserializeAws_json1_1TrafficRoute
 */
const de_TrafficRoute = (output: any, context: __SerdeContext): TrafficRoute => {
  return {
    listenerArns: output.listenerArns != null ? de_ListenerArnList(output.listenerArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TrafficRoutingConfig
 */
const de_TrafficRoutingConfig = (output: any, context: __SerdeContext): TrafficRoutingConfig => {
  return {
    timeBasedCanary: output.timeBasedCanary != null ? de_TimeBasedCanary(output.timeBasedCanary, context) : undefined,
    timeBasedLinear: output.timeBasedLinear != null ? de_TimeBasedLinear(output.timeBasedLinear, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1TriggerConfig
 */
const de_TriggerConfig = (output: any, context: __SerdeContext): TriggerConfig => {
  return {
    triggerEvents: output.triggerEvents != null ? de_TriggerEventTypeList(output.triggerEvents, context) : undefined,
    triggerName: __expectString(output.triggerName),
    triggerTargetArn: __expectString(output.triggerTargetArn),
  } as any;
};

/**
 * deserializeAws_json1_1TriggerConfigList
 */
const de_TriggerConfigList = (output: any, context: __SerdeContext): TriggerConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TriggerConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TriggerEventTypeList
 */
const de_TriggerEventTypeList = (output: any, context: __SerdeContext): (TriggerEventType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TriggerTargetsLimitExceededException
 */
const de_TriggerTargetsLimitExceededException = (
  output: any,
  context: __SerdeContext
): TriggerTargetsLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedActionForDeploymentTypeException
 */
const de_UnsupportedActionForDeploymentTypeException = (
  output: any,
  context: __SerdeContext
): UnsupportedActionForDeploymentTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceOutput
 */
const de_UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDeploymentGroupOutput
 */
const de_UpdateDeploymentGroupOutput = (output: any, context: __SerdeContext): UpdateDeploymentGroupOutput => {
  return {
    hooksNotCleanedUp:
      output.hooksNotCleanedUp != null ? de_AutoScalingGroupList(output.hooksNotCleanedUp, context) : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `CodeDeploy_20141006.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
