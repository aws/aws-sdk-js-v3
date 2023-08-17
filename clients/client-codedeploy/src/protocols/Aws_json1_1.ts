// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  CreateDeploymentConfigInput,
  CreateDeploymentGroupInput,
  CreateDeploymentInput,
  DeleteApplicationInput,
  DeleteDeploymentConfigInput,
  DeleteDeploymentGroupInput,
  DeleteGitHubAccountTokenInput,
  DeleteResourcesByExternalIdInput,
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
  DeploymentReadyOption,
  DeploymentStatus,
  DeploymentStyle,
  DeploymentTarget,
  DeploymentTargetDoesNotExistException,
  DeploymentTargetIdRequiredException,
  DeploymentTargetListSizeExceededException,
  DeregisterOnPremisesInstanceInput,
  DescriptionTooLongException,
  EC2TagFilter,
  EC2TagSet,
  ECSService,
  ECSServiceMappingLimitExceededException,
  ECSTarget,
  ECSTaskSet,
  ELBInfo,
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
  ListApplicationsInput,
  ListDeploymentConfigsInput,
  ListDeploymentGroupsInput,
  ListDeploymentInstancesInput,
  ListDeploymentsInput,
  ListDeploymentTargetsInput,
  ListGitHubAccountTokenNamesInput,
  ListOnPremisesInstancesInput,
  ListTagsForResourceInput,
  LoadBalancerInfo,
  MinimumHealthyHosts,
  MultipleIamArnsProvidedException,
  OnPremisesTagSet,
  OperationNotSupportedException,
  PutLifecycleEventHookExecutionStatusInput,
  RawString,
  RegisterApplicationRevisionInput,
  RegisterOnPremisesInstanceInput,
  RemoveTagsFromOnPremisesInstancesInput,
  ResourceArnRequiredException,
  ResourceValidationException,
  RevisionDoesNotExistException,
  RevisionInfo,
  RevisionLocation,
  RevisionRequiredException,
  RoleRequiredException,
  S3Location,
  SkipWaitTimeForInstanceTerminationInput,
  StopDeploymentInput,
  Tag,
  TagFilter,
  TagLimitExceededException,
  TagRequiredException,
  TagResourceInput,
  TagSetListLimitExceededException,
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
  UpdateApplicationInput,
  UpdateDeploymentGroupInput,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDeploymentConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteGitHubAccountTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteResourcesByExternalIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListApplicationRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDeploymentConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDeploymentGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDeploymentInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDeploymentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListGitHubAccountTokenNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutLifecycleEventHookExecutionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnsupportedActionForDeploymentTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AddTagsToOnPremisesInstancesInput omitted.

// se_Alarm omitted.

// se_AlarmConfiguration omitted.

// se_AlarmList omitted.

// se_ApplicationsList omitted.

// se_AppSpecContent omitted.

// se_AutoRollbackConfiguration omitted.

// se_AutoRollbackEventsList omitted.

// se_AutoScalingGroupNameList omitted.

// se_BatchGetApplicationRevisionsInput omitted.

// se_BatchGetApplicationsInput omitted.

// se_BatchGetDeploymentGroupsInput omitted.

// se_BatchGetDeploymentInstancesInput omitted.

// se_BatchGetDeploymentsInput omitted.

// se_BatchGetDeploymentTargetsInput omitted.

// se_BatchGetOnPremisesInstancesInput omitted.

// se_BlueGreenDeploymentConfiguration omitted.

// se_BlueInstanceTerminationOption omitted.

// se_ContinueDeploymentInput omitted.

// se_CreateApplicationInput omitted.

// se_CreateDeploymentConfigInput omitted.

// se_CreateDeploymentGroupInput omitted.

// se_CreateDeploymentInput omitted.

// se_DeleteApplicationInput omitted.

// se_DeleteDeploymentConfigInput omitted.

// se_DeleteDeploymentGroupInput omitted.

// se_DeleteGitHubAccountTokenInput omitted.

// se_DeleteResourcesByExternalIdInput omitted.

// se_DeploymentGroupsList omitted.

// se_DeploymentReadyOption omitted.

// se_DeploymentsList omitted.

// se_DeploymentStatusList omitted.

// se_DeploymentStyle omitted.

// se_DeregisterOnPremisesInstanceInput omitted.

// se_EC2TagFilter omitted.

// se_EC2TagFilterList omitted.

// se_EC2TagSet omitted.

// se_EC2TagSetList omitted.

// se_ECSService omitted.

// se_ECSServiceList omitted.

// se_ELBInfo omitted.

// se_ELBInfoList omitted.

// se_FilterValueList omitted.

// se_GetApplicationInput omitted.

// se_GetApplicationRevisionInput omitted.

// se_GetDeploymentConfigInput omitted.

// se_GetDeploymentGroupInput omitted.

// se_GetDeploymentInput omitted.

// se_GetDeploymentInstanceInput omitted.

// se_GetDeploymentTargetInput omitted.

// se_GetOnPremisesInstanceInput omitted.

// se_GitHubLocation omitted.

// se_GreenFleetProvisioningOption omitted.

// se_InstanceNameList omitted.

// se_InstancesList omitted.

// se_InstanceStatusList omitted.

// se_InstanceTypeList omitted.

// se_ListApplicationRevisionsInput omitted.

// se_ListApplicationsInput omitted.

// se_ListDeploymentConfigsInput omitted.

// se_ListDeploymentGroupsInput omitted.

// se_ListDeploymentInstancesInput omitted.

/**
 * serializeAws_json1_1ListDeploymentsInput
 */
const se_ListDeploymentsInput = (input: ListDeploymentsInput, context: __SerdeContext): any => {
  return take(input, {
    applicationName: [],
    createTimeRange: (_) => se_TimeRange(_, context),
    deploymentGroupName: [],
    externalId: [],
    includeOnlyStatuses: _json,
    nextToken: [],
  });
};

// se_ListDeploymentTargetsInput omitted.

// se_ListenerArnList omitted.

// se_ListGitHubAccountTokenNamesInput omitted.

// se_ListOnPremisesInstancesInput omitted.

// se_ListTagsForResourceInput omitted.

// se_LoadBalancerInfo omitted.

// se_MinimumHealthyHosts omitted.

// se_OnPremisesTagSet omitted.

// se_OnPremisesTagSetList omitted.

// se_PutLifecycleEventHookExecutionStatusInput omitted.

// se_RawString omitted.

// se_RegisterApplicationRevisionInput omitted.

// se_RegisterOnPremisesInstanceInput omitted.

// se_RemoveTagsFromOnPremisesInstancesInput omitted.

// se_RevisionLocation omitted.

// se_RevisionLocationList omitted.

// se_S3Location omitted.

// se_SkipWaitTimeForInstanceTerminationInput omitted.

// se_StopDeploymentInput omitted.

// se_Tag omitted.

// se_TagFilter omitted.

// se_TagFilterList omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceInput omitted.

// se_TargetFilters omitted.

// se_TargetGroupInfo omitted.

// se_TargetGroupInfoList omitted.

// se_TargetGroupPairInfo omitted.

// se_TargetGroupPairInfoList omitted.

// se_TargetIdList omitted.

// se_TargetInstances omitted.

// se_TimeBasedCanary omitted.

// se_TimeBasedLinear omitted.

/**
 * serializeAws_json1_1TimeRange
 */
const se_TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return take(input, {
    end: (_) => Math.round(_.getTime() / 1000),
    start: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_TrafficRoute omitted.

// se_TrafficRoutingConfig omitted.

// se_TriggerConfig omitted.

// se_TriggerConfigList omitted.

// se_TriggerEventTypeList omitted.

// se_UntagResourceInput omitted.

// se_UpdateApplicationInput omitted.

// se_UpdateDeploymentGroupInput omitted.

// de_Alarm omitted.

// de_AlarmConfiguration omitted.

// de_AlarmList omitted.

// de_AlarmsLimitExceededException omitted.

// de_ApplicationAlreadyExistsException omitted.

// de_ApplicationDoesNotExistException omitted.

/**
 * deserializeAws_json1_1ApplicationInfo
 */
const de_ApplicationInfo = (output: any, context: __SerdeContext): ApplicationInfo => {
  return take(output, {
    applicationId: __expectString,
    applicationName: __expectString,
    computePlatform: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    gitHubAccountName: __expectString,
    linkedToGitHub: __expectBoolean,
  }) as any;
};

// de_ApplicationLimitExceededException omitted.

// de_ApplicationNameRequiredException omitted.

/**
 * deserializeAws_json1_1ApplicationsInfoList
 */
const de_ApplicationsInfoList = (output: any, context: __SerdeContext): ApplicationInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationInfo(entry, context);
    });
  return retVal;
};

// de_ApplicationsList omitted.

// de_AppSpecContent omitted.

// de_ArnNotSupportedException omitted.

// de_AutoRollbackConfiguration omitted.

// de_AutoRollbackEventsList omitted.

// de_AutoScalingGroup omitted.

// de_AutoScalingGroupList omitted.

// de_AutoScalingGroupNameList omitted.

/**
 * deserializeAws_json1_1BatchGetApplicationRevisionsOutput
 */
const de_BatchGetApplicationRevisionsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetApplicationRevisionsOutput => {
  return take(output, {
    applicationName: __expectString,
    errorMessage: __expectString,
    revisions: (_: any) => de_RevisionInfoList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetApplicationsOutput
 */
const de_BatchGetApplicationsOutput = (output: any, context: __SerdeContext): BatchGetApplicationsOutput => {
  return take(output, {
    applicationsInfo: (_: any) => de_ApplicationsInfoList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetDeploymentGroupsOutput
 */
const de_BatchGetDeploymentGroupsOutput = (output: any, context: __SerdeContext): BatchGetDeploymentGroupsOutput => {
  return take(output, {
    deploymentGroupsInfo: (_: any) => de_DeploymentGroupInfoList(_, context),
    errorMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetDeploymentInstancesOutput
 */
const de_BatchGetDeploymentInstancesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentInstancesOutput => {
  return take(output, {
    errorMessage: __expectString,
    instancesSummary: (_: any) => de_InstanceSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetDeploymentsOutput
 */
const de_BatchGetDeploymentsOutput = (output: any, context: __SerdeContext): BatchGetDeploymentsOutput => {
  return take(output, {
    deploymentsInfo: (_: any) => de_DeploymentsInfoList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetDeploymentTargetsOutput
 */
const de_BatchGetDeploymentTargetsOutput = (output: any, context: __SerdeContext): BatchGetDeploymentTargetsOutput => {
  return take(output, {
    deploymentTargets: (_: any) => de_DeploymentTargetList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetOnPremisesInstancesOutput
 */
const de_BatchGetOnPremisesInstancesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetOnPremisesInstancesOutput => {
  return take(output, {
    instanceInfos: (_: any) => de_InstanceInfoList(_, context),
  }) as any;
};

// de_BatchLimitExceededException omitted.

// de_BlueGreenDeploymentConfiguration omitted.

// de_BlueInstanceTerminationOption omitted.

// de_BucketNameFilterRequiredException omitted.

/**
 * deserializeAws_json1_1CloudFormationTarget
 */
const de_CloudFormationTarget = (output: any, context: __SerdeContext): CloudFormationTarget => {
  return take(output, {
    deploymentId: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lifecycleEvents: (_: any) => de_LifecycleEventList(_, context),
    resourceType: __expectString,
    status: __expectString,
    targetId: __expectString,
    targetVersionWeight: __limitedParseDouble,
  }) as any;
};

// de_CreateApplicationOutput omitted.

// de_CreateDeploymentConfigOutput omitted.

// de_CreateDeploymentGroupOutput omitted.

// de_CreateDeploymentOutput omitted.

// de_DeleteDeploymentGroupOutput omitted.

// de_DeleteGitHubAccountTokenOutput omitted.

// de_DeleteResourcesByExternalIdOutput omitted.

// de_DeploymentAlreadyCompletedException omitted.

// de_DeploymentConfigAlreadyExistsException omitted.

// de_DeploymentConfigDoesNotExistException omitted.

/**
 * deserializeAws_json1_1DeploymentConfigInfo
 */
const de_DeploymentConfigInfo = (output: any, context: __SerdeContext): DeploymentConfigInfo => {
  return take(output, {
    computePlatform: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentConfigId: __expectString,
    deploymentConfigName: __expectString,
    minimumHealthyHosts: _json,
    trafficRoutingConfig: _json,
  }) as any;
};

// de_DeploymentConfigInUseException omitted.

// de_DeploymentConfigLimitExceededException omitted.

// de_DeploymentConfigNameRequiredException omitted.

// de_DeploymentConfigsList omitted.

// de_DeploymentDoesNotExistException omitted.

// de_DeploymentGroupAlreadyExistsException omitted.

// de_DeploymentGroupDoesNotExistException omitted.

/**
 * deserializeAws_json1_1DeploymentGroupInfo
 */
const de_DeploymentGroupInfo = (output: any, context: __SerdeContext): DeploymentGroupInfo => {
  return take(output, {
    alarmConfiguration: _json,
    applicationName: __expectString,
    autoRollbackConfiguration: _json,
    autoScalingGroups: _json,
    blueGreenDeploymentConfiguration: _json,
    computePlatform: __expectString,
    deploymentConfigName: __expectString,
    deploymentGroupId: __expectString,
    deploymentGroupName: __expectString,
    deploymentStyle: _json,
    ec2TagFilters: _json,
    ec2TagSet: _json,
    ecsServices: _json,
    lastAttemptedDeployment: (_: any) => de_LastDeploymentInfo(_, context),
    lastSuccessfulDeployment: (_: any) => de_LastDeploymentInfo(_, context),
    loadBalancerInfo: _json,
    onPremisesInstanceTagFilters: _json,
    onPremisesTagSet: _json,
    outdatedInstancesStrategy: __expectString,
    serviceRoleArn: __expectString,
    targetRevision: _json,
    triggerConfigurations: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DeploymentGroupInfoList
 */
const de_DeploymentGroupInfoList = (output: any, context: __SerdeContext): DeploymentGroupInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentGroupInfo(entry, context);
    });
  return retVal;
};

// de_DeploymentGroupLimitExceededException omitted.

// de_DeploymentGroupNameRequiredException omitted.

// de_DeploymentGroupsList omitted.

// de_DeploymentIdRequiredException omitted.

/**
 * deserializeAws_json1_1DeploymentInfo
 */
const de_DeploymentInfo = (output: any, context: __SerdeContext): DeploymentInfo => {
  return take(output, {
    additionalDeploymentStatusInfo: __expectString,
    applicationName: __expectString,
    autoRollbackConfiguration: _json,
    blueGreenDeploymentConfiguration: _json,
    completeTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    computePlatform: __expectString,
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    creator: __expectString,
    deploymentConfigName: __expectString,
    deploymentGroupName: __expectString,
    deploymentId: __expectString,
    deploymentOverview: _json,
    deploymentStatusMessages: _json,
    deploymentStyle: _json,
    description: __expectString,
    errorInformation: _json,
    externalId: __expectString,
    fileExistsBehavior: __expectString,
    ignoreApplicationStopFailures: __expectBoolean,
    instanceTerminationWaitTimeStarted: __expectBoolean,
    loadBalancerInfo: _json,
    overrideAlarmConfiguration: _json,
    previousRevision: _json,
    relatedDeployments: _json,
    revision: _json,
    rollbackInfo: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    targetInstances: _json,
    updateOutdatedInstancesOnly: __expectBoolean,
  }) as any;
};

// de_DeploymentIsNotInReadyStateException omitted.

// de_DeploymentLimitExceededException omitted.

// de_DeploymentNotStartedException omitted.

// de_DeploymentOverview omitted.

// de_DeploymentReadyOption omitted.

/**
 * deserializeAws_json1_1DeploymentsInfoList
 */
const de_DeploymentsInfoList = (output: any, context: __SerdeContext): DeploymentInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentInfo(entry, context);
    });
  return retVal;
};

// de_DeploymentsList omitted.

// de_DeploymentStatusMessageList omitted.

// de_DeploymentStyle omitted.

/**
 * deserializeAws_json1_1DeploymentTarget
 */
const de_DeploymentTarget = (output: any, context: __SerdeContext): DeploymentTarget => {
  return take(output, {
    cloudFormationTarget: (_: any) => de_CloudFormationTarget(_, context),
    deploymentTargetType: __expectString,
    ecsTarget: (_: any) => de_ECSTarget(_, context),
    instanceTarget: (_: any) => de_InstanceTarget(_, context),
    lambdaTarget: (_: any) => de_LambdaTarget(_, context),
  }) as any;
};

// de_DeploymentTargetDoesNotExistException omitted.

// de_DeploymentTargetIdRequiredException omitted.

/**
 * deserializeAws_json1_1DeploymentTargetList
 */
const de_DeploymentTargetList = (output: any, context: __SerdeContext): DeploymentTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentTarget(entry, context);
    });
  return retVal;
};

// de_DeploymentTargetListSizeExceededException omitted.

// de_DescriptionTooLongException omitted.

// de_Diagnostics omitted.

// de_EC2TagFilter omitted.

// de_EC2TagFilterList omitted.

// de_EC2TagSet omitted.

// de_EC2TagSetList omitted.

// de_ECSService omitted.

// de_ECSServiceList omitted.

// de_ECSServiceMappingLimitExceededException omitted.

/**
 * deserializeAws_json1_1ECSTarget
 */
const de_ECSTarget = (output: any, context: __SerdeContext): ECSTarget => {
  return take(output, {
    deploymentId: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lifecycleEvents: (_: any) => de_LifecycleEventList(_, context),
    status: __expectString,
    targetArn: __expectString,
    targetId: __expectString,
    taskSetsInfo: (_: any) => de_ECSTaskSetList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ECSTaskSet
 */
const de_ECSTaskSet = (output: any, context: __SerdeContext): ECSTaskSet => {
  return take(output, {
    desiredCount: __expectLong,
    identifer: __expectString,
    pendingCount: __expectLong,
    runningCount: __expectLong,
    status: __expectString,
    targetGroup: _json,
    taskSetLabel: __expectString,
    trafficWeight: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1ECSTaskSetList
 */
const de_ECSTaskSetList = (output: any, context: __SerdeContext): ECSTaskSet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ECSTaskSet(entry, context);
    });
  return retVal;
};

// de_ELBInfo omitted.

// de_ELBInfoList omitted.

// de_ErrorInformation omitted.

/**
 * deserializeAws_json1_1GenericRevisionInfo
 */
const de_GenericRevisionInfo = (output: any, context: __SerdeContext): GenericRevisionInfo => {
  return take(output, {
    deploymentGroups: _json,
    description: __expectString,
    firstUsedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUsedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    registerTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1GetApplicationOutput
 */
const de_GetApplicationOutput = (output: any, context: __SerdeContext): GetApplicationOutput => {
  return take(output, {
    application: (_: any) => de_ApplicationInfo(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetApplicationRevisionOutput
 */
const de_GetApplicationRevisionOutput = (output: any, context: __SerdeContext): GetApplicationRevisionOutput => {
  return take(output, {
    applicationName: __expectString,
    revision: _json,
    revisionInfo: (_: any) => de_GenericRevisionInfo(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDeploymentConfigOutput
 */
const de_GetDeploymentConfigOutput = (output: any, context: __SerdeContext): GetDeploymentConfigOutput => {
  return take(output, {
    deploymentConfigInfo: (_: any) => de_DeploymentConfigInfo(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDeploymentGroupOutput
 */
const de_GetDeploymentGroupOutput = (output: any, context: __SerdeContext): GetDeploymentGroupOutput => {
  return take(output, {
    deploymentGroupInfo: (_: any) => de_DeploymentGroupInfo(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDeploymentInstanceOutput
 */
const de_GetDeploymentInstanceOutput = (output: any, context: __SerdeContext): GetDeploymentInstanceOutput => {
  return take(output, {
    instanceSummary: (_: any) => de_InstanceSummary(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDeploymentOutput
 */
const de_GetDeploymentOutput = (output: any, context: __SerdeContext): GetDeploymentOutput => {
  return take(output, {
    deploymentInfo: (_: any) => de_DeploymentInfo(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetDeploymentTargetOutput
 */
const de_GetDeploymentTargetOutput = (output: any, context: __SerdeContext): GetDeploymentTargetOutput => {
  return take(output, {
    deploymentTarget: (_: any) => de_DeploymentTarget(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetOnPremisesInstanceOutput
 */
const de_GetOnPremisesInstanceOutput = (output: any, context: __SerdeContext): GetOnPremisesInstanceOutput => {
  return take(output, {
    instanceInfo: (_: any) => de_InstanceInfo(_, context),
  }) as any;
};

// de_GitHubAccountTokenDoesNotExistException omitted.

// de_GitHubAccountTokenNameList omitted.

// de_GitHubAccountTokenNameRequiredException omitted.

// de_GitHubLocation omitted.

// de_GreenFleetProvisioningOption omitted.

// de_IamArnRequiredException omitted.

// de_IamSessionArnAlreadyRegisteredException omitted.

// de_IamUserArnAlreadyRegisteredException omitted.

// de_IamUserArnRequiredException omitted.

// de_InstanceDoesNotExistException omitted.

// de_InstanceIdRequiredException omitted.

/**
 * deserializeAws_json1_1InstanceInfo
 */
const de_InstanceInfo = (output: any, context: __SerdeContext): InstanceInfo => {
  return take(output, {
    deregisterTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    iamSessionArn: __expectString,
    iamUserArn: __expectString,
    instanceArn: __expectString,
    instanceName: __expectString,
    registerTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceInfoList
 */
const de_InstanceInfoList = (output: any, context: __SerdeContext): InstanceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceInfo(entry, context);
    });
  return retVal;
};

// de_InstanceLimitExceededException omitted.

// de_InstanceNameAlreadyRegisteredException omitted.

// de_InstanceNameList omitted.

// de_InstanceNameRequiredException omitted.

// de_InstanceNotRegisteredException omitted.

// de_InstancesList omitted.

/**
 * deserializeAws_json1_1InstanceSummary
 */
const de_InstanceSummary = (output: any, context: __SerdeContext): InstanceSummary => {
  return take(output, {
    deploymentId: __expectString,
    instanceId: __expectString,
    instanceType: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lifecycleEvents: (_: any) => de_LifecycleEventList(_, context),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InstanceSummaryList
 */
const de_InstanceSummaryList = (output: any, context: __SerdeContext): InstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceTarget
 */
const de_InstanceTarget = (output: any, context: __SerdeContext): InstanceTarget => {
  return take(output, {
    deploymentId: __expectString,
    instanceLabel: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lifecycleEvents: (_: any) => de_LifecycleEventList(_, context),
    status: __expectString,
    targetArn: __expectString,
    targetId: __expectString,
  }) as any;
};

// de_InvalidAlarmConfigException omitted.

// de_InvalidApplicationNameException omitted.

// de_InvalidArnException omitted.

// de_InvalidAutoRollbackConfigException omitted.

// de_InvalidAutoScalingGroupException omitted.

// de_InvalidBlueGreenDeploymentConfigurationException omitted.

// de_InvalidBucketNameFilterException omitted.

// de_InvalidComputePlatformException omitted.

// de_InvalidDeployedStateFilterException omitted.

// de_InvalidDeploymentConfigNameException omitted.

// de_InvalidDeploymentGroupNameException omitted.

// de_InvalidDeploymentIdException omitted.

// de_InvalidDeploymentInstanceTypeException omitted.

// de_InvalidDeploymentStatusException omitted.

// de_InvalidDeploymentStyleException omitted.

// de_InvalidDeploymentTargetIdException omitted.

// de_InvalidDeploymentWaitTypeException omitted.

// de_InvalidEC2TagCombinationException omitted.

// de_InvalidEC2TagException omitted.

// de_InvalidECSServiceException omitted.

// de_InvalidExternalIdException omitted.

// de_InvalidFileExistsBehaviorException omitted.

// de_InvalidGitHubAccountTokenException omitted.

// de_InvalidGitHubAccountTokenNameException omitted.

// de_InvalidIamSessionArnException omitted.

// de_InvalidIamUserArnException omitted.

// de_InvalidIgnoreApplicationStopFailuresValueException omitted.

// de_InvalidInputException omitted.

// de_InvalidInstanceNameException omitted.

// de_InvalidInstanceStatusException omitted.

// de_InvalidInstanceTypeException omitted.

// de_InvalidKeyPrefixFilterException omitted.

// de_InvalidLifecycleEventHookExecutionIdException omitted.

// de_InvalidLifecycleEventHookExecutionStatusException omitted.

// de_InvalidLoadBalancerInfoException omitted.

// de_InvalidMinimumHealthyHostValueException omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidOnPremisesTagCombinationException omitted.

// de_InvalidOperationException omitted.

// de_InvalidRegistrationStatusException omitted.

// de_InvalidRevisionException omitted.

// de_InvalidRoleException omitted.

// de_InvalidSortByException omitted.

// de_InvalidSortOrderException omitted.

// de_InvalidTagException omitted.

// de_InvalidTagFilterException omitted.

// de_InvalidTagsToAddException omitted.

// de_InvalidTargetFilterNameException omitted.

// de_InvalidTargetGroupPairException omitted.

// de_InvalidTargetInstancesException omitted.

// de_InvalidTimeRangeException omitted.

// de_InvalidTrafficRoutingConfigurationException omitted.

// de_InvalidTriggerConfigException omitted.

// de_InvalidUpdateOutdatedInstancesOnlyValueException omitted.

/**
 * deserializeAws_json1_1LambdaFunctionInfo
 */
const de_LambdaFunctionInfo = (output: any, context: __SerdeContext): LambdaFunctionInfo => {
  return take(output, {
    currentVersion: __expectString,
    functionAlias: __expectString,
    functionName: __expectString,
    targetVersion: __expectString,
    targetVersionWeight: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1LambdaTarget
 */
const de_LambdaTarget = (output: any, context: __SerdeContext): LambdaTarget => {
  return take(output, {
    deploymentId: __expectString,
    lambdaFunctionInfo: (_: any) => de_LambdaFunctionInfo(_, context),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lifecycleEvents: (_: any) => de_LifecycleEventList(_, context),
    status: __expectString,
    targetArn: __expectString,
    targetId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LastDeploymentInfo
 */
const de_LastDeploymentInfo = (output: any, context: __SerdeContext): LastDeploymentInfo => {
  return take(output, {
    createTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentId: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LifecycleEvent
 */
const de_LifecycleEvent = (output: any, context: __SerdeContext): LifecycleEvent => {
  return take(output, {
    diagnostics: _json,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lifecycleEventName: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

// de_LifecycleEventAlreadyCompletedException omitted.

/**
 * deserializeAws_json1_1LifecycleEventList
 */
const de_LifecycleEventList = (output: any, context: __SerdeContext): LifecycleEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LifecycleEvent(entry, context);
    });
  return retVal;
};

// de_LifecycleHookLimitExceededException omitted.

// de_ListApplicationRevisionsOutput omitted.

// de_ListApplicationsOutput omitted.

// de_ListDeploymentConfigsOutput omitted.

// de_ListDeploymentGroupsOutput omitted.

// de_ListDeploymentInstancesOutput omitted.

// de_ListDeploymentsOutput omitted.

// de_ListDeploymentTargetsOutput omitted.

// de_ListenerArnList omitted.

// de_ListGitHubAccountTokenNamesOutput omitted.

// de_ListOnPremisesInstancesOutput omitted.

// de_ListTagsForResourceOutput omitted.

// de_LoadBalancerInfo omitted.

// de_MinimumHealthyHosts omitted.

// de_MultipleIamArnsProvidedException omitted.

// de_OnPremisesTagSet omitted.

// de_OnPremisesTagSetList omitted.

// de_OperationNotSupportedException omitted.

// de_PutLifecycleEventHookExecutionStatusOutput omitted.

// de_RawString omitted.

// de_RelatedDeployments omitted.

// de_ResourceArnRequiredException omitted.

// de_ResourceValidationException omitted.

// de_RevisionDoesNotExistException omitted.

/**
 * deserializeAws_json1_1RevisionInfo
 */
const de_RevisionInfo = (output: any, context: __SerdeContext): RevisionInfo => {
  return take(output, {
    genericRevisionInfo: (_: any) => de_GenericRevisionInfo(_, context),
    revisionLocation: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1RevisionInfoList
 */
const de_RevisionInfoList = (output: any, context: __SerdeContext): RevisionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RevisionInfo(entry, context);
    });
  return retVal;
};

// de_RevisionLocation omitted.

// de_RevisionLocationList omitted.

// de_RevisionRequiredException omitted.

// de_RoleRequiredException omitted.

// de_RollbackInfo omitted.

// de_S3Location omitted.

// de_StopDeploymentOutput omitted.

// de_Tag omitted.

// de_TagFilter omitted.

// de_TagFilterList omitted.

// de_TagLimitExceededException omitted.

// de_TagList omitted.

// de_TagRequiredException omitted.

// de_TagResourceOutput omitted.

// de_TagSetListLimitExceededException omitted.

// de_TargetGroupInfo omitted.

// de_TargetGroupInfoList omitted.

// de_TargetGroupPairInfo omitted.

// de_TargetGroupPairInfoList omitted.

// de_TargetIdList omitted.

// de_TargetInstances omitted.

// de_ThrottlingException omitted.

// de_TimeBasedCanary omitted.

// de_TimeBasedLinear omitted.

// de_TrafficRoute omitted.

// de_TrafficRoutingConfig omitted.

// de_TriggerConfig omitted.

// de_TriggerConfigList omitted.

// de_TriggerEventTypeList omitted.

// de_TriggerTargetsLimitExceededException omitted.

// de_UnsupportedActionForDeploymentTypeException omitted.

// de_UntagResourceOutput omitted.

// de_UpdateDeploymentGroupOutput omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
