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
  BatchGetDeploymentTargetsCommandInput,
  BatchGetDeploymentTargetsCommandOutput,
} from "../commands/BatchGetDeploymentTargetsCommand";
import {
  BatchGetDeploymentsCommandInput,
  BatchGetDeploymentsCommandOutput,
} from "../commands/BatchGetDeploymentsCommand";
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
import {
  ListDeploymentTargetsCommandInput,
  ListDeploymentTargetsCommandOutput,
} from "../commands/ListDeploymentTargetsCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
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
import {
  AddTagsToOnPremisesInstancesInput,
  Alarm,
  AlarmConfiguration,
  AlarmsLimitExceededException,
  AppSpecContent,
  ApplicationAlreadyExistsException,
  ApplicationDoesNotExistException,
  ApplicationInfo,
  ApplicationLimitExceededException,
  ApplicationNameRequiredException,
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
  BatchGetDeploymentTargetsInput,
  BatchGetDeploymentTargetsOutput,
  BatchGetDeploymentsInput,
  BatchGetDeploymentsOutput,
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
  DeploymentConfigInUseException,
  DeploymentConfigInfo,
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
  ListDeploymentTargetsInput,
  ListDeploymentTargetsOutput,
  ListDeploymentsInput,
  ListDeploymentsOutput,
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
  _InstanceType,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1AddTagsToOnPremisesInstancesCommand = async (
  input: AddTagsToOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.AddTagsToOnPremisesInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsToOnPremisesInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetApplicationRevisionsCommand = async (
  input: BatchGetApplicationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.BatchGetApplicationRevisions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetApplicationRevisionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetApplicationsCommand = async (
  input: BatchGetApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.BatchGetApplications",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetApplicationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetDeploymentGroupsCommand = async (
  input: BatchGetDeploymentGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.BatchGetDeploymentGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetDeploymentInstancesCommand = async (
  input: BatchGetDeploymentInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.BatchGetDeploymentInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetDeploymentsCommand = async (
  input: BatchGetDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.BatchGetDeployments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetDeploymentTargetsCommand = async (
  input: BatchGetDeploymentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.BatchGetDeploymentTargets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetDeploymentTargetsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetOnPremisesInstancesCommand = async (
  input: BatchGetOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.BatchGetOnPremisesInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetOnPremisesInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ContinueDeploymentCommand = async (
  input: ContinueDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.ContinueDeployment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ContinueDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.CreateApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateApplicationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.CreateDeployment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDeploymentConfigCommand = async (
  input: CreateDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.CreateDeploymentConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDeploymentConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDeploymentGroupCommand = async (
  input: CreateDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.CreateDeploymentGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDeploymentGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.DeleteApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDeploymentConfigCommand = async (
  input: DeleteDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.DeleteDeploymentConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDeploymentConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDeploymentGroupCommand = async (
  input: DeleteDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.DeleteDeploymentGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDeploymentGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGitHubAccountTokenCommand = async (
  input: DeleteGitHubAccountTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.DeleteGitHubAccountToken",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGitHubAccountTokenInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcesByExternalIdCommand = async (
  input: DeleteResourcesByExternalIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.DeleteResourcesByExternalId",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourcesByExternalIdInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterOnPremisesInstanceCommand = async (
  input: DeregisterOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.DeregisterOnPremisesInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterOnPremisesInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.GetApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetApplicationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetApplicationRevisionCommand = async (
  input: GetApplicationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.GetApplicationRevision",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetApplicationRevisionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeploymentCommand = async (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.GetDeployment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeploymentConfigCommand = async (
  input: GetDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.GetDeploymentConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDeploymentConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeploymentGroupCommand = async (
  input: GetDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.GetDeploymentGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDeploymentGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeploymentInstanceCommand = async (
  input: GetDeploymentInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.GetDeploymentInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDeploymentInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeploymentTargetCommand = async (
  input: GetDeploymentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.GetDeploymentTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDeploymentTargetInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOnPremisesInstanceCommand = async (
  input: GetOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.GetOnPremisesInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOnPremisesInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationRevisionsCommand = async (
  input: ListApplicationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.ListApplicationRevisions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListApplicationRevisionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.ListApplications",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListApplicationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeploymentConfigsCommand = async (
  input: ListDeploymentConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.ListDeploymentConfigs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDeploymentConfigsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeploymentGroupsCommand = async (
  input: ListDeploymentGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.ListDeploymentGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDeploymentGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeploymentInstancesCommand = async (
  input: ListDeploymentInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.ListDeploymentInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDeploymentInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeploymentsCommand = async (
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.ListDeployments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDeploymentsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeploymentTargetsCommand = async (
  input: ListDeploymentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.ListDeploymentTargets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDeploymentTargetsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGitHubAccountTokenNamesCommand = async (
  input: ListGitHubAccountTokenNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.ListGitHubAccountTokenNames",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGitHubAccountTokenNamesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOnPremisesInstancesCommand = async (
  input: ListOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.ListOnPremisesInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListOnPremisesInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = async (
  input: PutLifecycleEventHookExecutionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterApplicationRevisionCommand = async (
  input: RegisterApplicationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.RegisterApplicationRevision",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterApplicationRevisionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterOnPremisesInstanceCommand = async (
  input: RegisterOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.RegisterOnPremisesInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterOnPremisesInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = async (
  input: RemoveTagsFromOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = async (
  input: SkipWaitTimeForInstanceTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.SkipWaitTimeForInstanceTermination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopDeploymentCommand = async (
  input: StopDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.StopDeployment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.UpdateApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateApplicationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDeploymentGroupCommand = async (
  input: UpdateDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CodeDeploy_20141006.UpdateDeploymentGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDeploymentGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToOnPremisesInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddTagsToOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToOnPremisesInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceLimitExceededException":
    case "com.amazonaws.codedeploy#InstanceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1InstanceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceNotRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.codedeploy#TagLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      response = {
        ...(await deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchGetApplicationRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationRevisionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetApplicationRevisionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetApplicationRevisionsOutput(data, context);
  const response: BatchGetApplicationRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetApplicationRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchGetApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetApplicationsOutput(data, context);
  const response: BatchGetApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchGetDeploymentGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetDeploymentGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetDeploymentGroupsOutput(data, context);
  const response: BatchGetDeploymentGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetDeploymentGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchGetDeploymentInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetDeploymentInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetDeploymentInstancesOutput(data, context);
  const response: BatchGetDeploymentInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetDeploymentInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceIdRequiredException":
    case "com.amazonaws.codedeploy#InstanceIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = {
        ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchGetDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetDeploymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetDeploymentsOutput(data, context);
  const response: BatchGetDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchGetDeploymentTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetDeploymentTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetDeploymentTargetsOutput(data, context);
  const response: BatchGetDeploymentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetDeploymentTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentTargetDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentTargetIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentTargetListSizeExceededException":
    case "com.amazonaws.codedeploy#DeploymentTargetListSizeExceededException":
      response = {
        ...(await deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceDoesNotExistException":
    case "com.amazonaws.codedeploy#InstanceDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1InstanceDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentTargetIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1BatchGetOnPremisesInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetOnPremisesInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetOnPremisesInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetOnPremisesInstancesOutput(data, context);
  const response: BatchGetOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetOnPremisesInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetOnPremisesInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ContinueDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ContinueDeploymentCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ContinueDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ContinueDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentAlreadyCompletedException":
    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIsNotInReadyStateException":
    case "com.amazonaws.codedeploy#DeploymentIsNotInReadyStateException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentStatusException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentWaitTypeException":
    case "com.amazonaws.codedeploy#InvalidDeploymentWaitTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApplicationOutput(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationAlreadyExistsException":
    case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationLimitExceededException":
    case "com.amazonaws.codedeploy#ApplicationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ApplicationLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = {
        ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDeploymentOutput(data, context);
  const response: CreateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentLimitExceededException":
    case "com.amazonaws.codedeploy#DeploymentLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1DeploymentLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DescriptionTooLongException":
    case "com.amazonaws.codedeploy#DescriptionTooLongException":
      response = {
        ...(await deserializeAws_json1_1DescriptionTooLongExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAutoRollbackConfigException":
    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAutoScalingGroupException":
    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
      response = {
        ...(await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFileExistsBehaviorException":
    case "com.amazonaws.codedeploy#InvalidFileExistsBehaviorException":
      response = {
        ...(await deserializeAws_json1_1InvalidFileExistsBehaviorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGitHubAccountTokenException":
    case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGitHubAccountTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIgnoreApplicationStopFailuresValueException":
    case "com.amazonaws.codedeploy#InvalidIgnoreApplicationStopFailuresValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLoadBalancerInfoException":
    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
      response = {
        ...(await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTargetInstancesException":
    case "com.amazonaws.codedeploy#InvalidTargetInstancesException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetInstancesExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTrafficRoutingConfigurationException":
    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidUpdateOutdatedInstancesOnlyValueException":
    case "com.amazonaws.codedeploy#InvalidUpdateOutdatedInstancesOnlyValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionDoesNotExistException":
    case "com.amazonaws.codedeploy#RevisionDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RevisionDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codedeploy#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateDeploymentConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDeploymentConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDeploymentConfigOutput(data, context);
  const response: CreateDeploymentConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDeploymentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentConfigAlreadyExistsException":
    case "com.amazonaws.codedeploy#DeploymentConfigAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentConfigLimitExceededException":
    case "com.amazonaws.codedeploy#DeploymentConfigLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentConfigNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = {
        ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidMinimumHealthyHostValueException":
    case "com.amazonaws.codedeploy#InvalidMinimumHealthyHostValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTrafficRoutingConfigurationException":
    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateDeploymentGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDeploymentGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDeploymentGroupOutput(data, context);
  const response: CreateDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDeploymentGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlarmsLimitExceededException":
    case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1AlarmsLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupAlreadyExistsException":
    case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupLimitExceededException":
    case "com.amazonaws.codedeploy#DeploymentGroupLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ECSServiceMappingLimitExceededException":
    case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAlarmConfigException":
    case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidAlarmConfigExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAutoRollbackConfigException":
    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAutoScalingGroupException":
    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
      response = {
        ...(await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBlueGreenDeploymentConfigurationException":
    case "com.amazonaws.codedeploy#InvalidBlueGreenDeploymentConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentStyleException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStyleException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEC2TagCombinationException":
    case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEC2TagException":
    case "com.amazonaws.codedeploy#InvalidEC2TagException":
      response = {
        ...(await deserializeAws_json1_1InvalidEC2TagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidECSServiceException":
    case "com.amazonaws.codedeploy#InvalidECSServiceException":
      response = {
        ...(await deserializeAws_json1_1InvalidECSServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.codedeploy#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLoadBalancerInfoException":
    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
      response = {
        ...(await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOnPremisesTagCombinationException":
    case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTargetGroupPairException":
    case "com.amazonaws.codedeploy#InvalidTargetGroupPairException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTrafficRoutingConfigurationException":
    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTriggerConfigException":
    case "com.amazonaws.codedeploy#InvalidTriggerConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidTriggerConfigExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LifecycleHookLimitExceededException":
    case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RoleRequiredException":
    case "com.amazonaws.codedeploy#RoleRequiredException":
      response = {
        ...(await deserializeAws_json1_1RoleRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagSetListLimitExceededException":
    case "com.amazonaws.codedeploy#TagSetListLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TagSetListLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codedeploy#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TriggerTargetsLimitExceededException":
    case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteDeploymentConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDeploymentConfigCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDeploymentConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDeploymentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentConfigInUseException":
    case "com.amazonaws.codedeploy#DeploymentConfigInUseException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentConfigNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.codedeploy#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteDeploymentGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDeploymentGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDeploymentGroupOutput(data, context);
  const response: DeleteDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDeploymentGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteGitHubAccountTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGitHubAccountTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteGitHubAccountTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGitHubAccountTokenOutput(data, context);
  const response: DeleteGitHubAccountTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGitHubAccountTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGitHubAccountTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GitHubAccountTokenDoesNotExistException":
    case "com.amazonaws.codedeploy#GitHubAccountTokenDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GitHubAccountTokenNameRequiredException":
    case "com.amazonaws.codedeploy#GitHubAccountTokenNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidGitHubAccountTokenNameException":
    case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.codedeploy#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceValidationException":
    case "com.amazonaws.codedeploy#ResourceValidationException":
      response = {
        ...(await deserializeAws_json1_1ResourceValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteResourcesByExternalIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcesByExternalIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourcesByExternalIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourcesByExternalIdOutput(data, context);
  const response: DeleteResourcesByExternalIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcesByExternalIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcesByExternalIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeregisterOnPremisesInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOnPremisesInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterOnPremisesInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOnPremisesInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetApplicationOutput(data, context);
  const response: GetApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetApplicationRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationRevisionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetApplicationRevisionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetApplicationRevisionOutput(data, context);
  const response: GetApplicationRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetApplicationRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionDoesNotExistException":
    case "com.amazonaws.codedeploy#RevisionDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RevisionDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeploymentOutput(data, context);
  const response: GetDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetDeploymentConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDeploymentConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeploymentConfigOutput(data, context);
  const response: GetDeploymentConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeploymentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentConfigNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = {
        ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetDeploymentGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDeploymentGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeploymentGroupOutput(data, context);
  const response: GetDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeploymentGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetDeploymentInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDeploymentInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeploymentInstanceOutput(data, context);
  const response: GetDeploymentInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeploymentInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceDoesNotExistException":
    case "com.amazonaws.codedeploy#InstanceDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1InstanceDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceIdRequiredException":
    case "com.amazonaws.codedeploy#InstanceIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = {
        ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetDeploymentTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDeploymentTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeploymentTargetOutput(data, context);
  const response: GetDeploymentTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeploymentTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentTargetDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentTargetIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentTargetIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetOnPremisesInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOnPremisesInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOnPremisesInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOnPremisesInstanceOutput(data, context);
  const response: GetOnPremisesInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOnPremisesInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOnPremisesInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceNotRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListApplicationRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationRevisionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListApplicationRevisionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationRevisionsOutput(data, context);
  const response: ListApplicationRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BucketNameFilterRequiredException":
    case "com.amazonaws.codedeploy#BucketNameFilterRequiredException":
      response = {
        ...(await deserializeAws_json1_1BucketNameFilterRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBucketNameFilterException":
    case "com.amazonaws.codedeploy#InvalidBucketNameFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidBucketNameFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeployedStateFilterException":
    case "com.amazonaws.codedeploy#InvalidDeployedStateFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeployedStateFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKeyPrefixFilterException":
    case "com.amazonaws.codedeploy#InvalidKeyPrefixFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyPrefixFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSortByException":
    case "com.amazonaws.codedeploy#InvalidSortByException":
      response = {
        ...(await deserializeAws_json1_1InvalidSortByExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSortOrderException":
    case "com.amazonaws.codedeploy#InvalidSortOrderException":
      response = {
        ...(await deserializeAws_json1_1InvalidSortOrderExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationsOutput(data, context);
  const response: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListDeploymentConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDeploymentConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeploymentConfigsOutput(data, context);
  const response: ListDeploymentConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeploymentConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListDeploymentGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDeploymentGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeploymentGroupsOutput(data, context);
  const response: ListDeploymentGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeploymentGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListDeploymentInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDeploymentInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeploymentInstancesOutput(data, context);
  const response: ListDeploymentInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeploymentInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = {
        ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceStatusException":
    case "com.amazonaws.codedeploy#InvalidInstanceStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidInstanceTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTargetFilterNameException":
    case "com.amazonaws.codedeploy#InvalidTargetFilterNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetFilterNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDeploymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeploymentsOutput(data, context);
  const response: ListDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentStatusException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidExternalIdException":
    case "com.amazonaws.codedeploy#InvalidExternalIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidExternalIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.codedeploy#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTimeRangeException":
    case "com.amazonaws.codedeploy#InvalidTimeRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListDeploymentTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDeploymentTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeploymentTargetsOutput(data, context);
  const response: ListDeploymentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeploymentTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceStatusException":
    case "com.amazonaws.codedeploy#InvalidInstanceStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidInstanceTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListGitHubAccountTokenNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGitHubAccountTokenNamesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGitHubAccountTokenNamesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGitHubAccountTokenNamesOutput(data, context);
  const response: ListGitHubAccountTokenNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGitHubAccountTokenNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGitHubAccountTokenNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.codedeploy#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceValidationException":
    case "com.amazonaws.codedeploy#ResourceValidationException":
      response = {
        ...(await deserializeAws_json1_1ResourceValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListOnPremisesInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOnPremisesInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListOnPremisesInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOnPremisesInstancesOutput(data, context);
  const response: ListOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOnPremisesInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOnPremisesInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRegistrationStatusException":
    case "com.amazonaws.codedeploy#InvalidRegistrationStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidRegistrationStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagFilterException":
    case "com.amazonaws.codedeploy#InvalidTagFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArnNotSupportedException":
    case "com.amazonaws.codedeploy#ArnNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1ArnNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.codedeploy#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceArnRequiredException":
    case "com.amazonaws.codedeploy#ResourceArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleEventHookExecutionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutLifecycleEventHookExecutionStatusOutput(data, context);
  const response: PutLifecycleEventHookExecutionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleEventHookExecutionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLifecycleEventHookExecutionIdException":
    case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLifecycleEventHookExecutionStatusException":
    case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LifecycleEventAlreadyCompletedException":
    case "com.amazonaws.codedeploy#LifecycleEventAlreadyCompletedException":
      response = {
        ...(await deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RegisterApplicationRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterApplicationRevisionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterApplicationRevisionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterApplicationRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterApplicationRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterApplicationRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DescriptionTooLongException":
    case "com.amazonaws.codedeploy#DescriptionTooLongException":
      response = {
        ...(await deserializeAws_json1_1DescriptionTooLongExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RegisterOnPremisesInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOnPremisesInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterOnPremisesInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterOnPremisesInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterOnPremisesInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOnPremisesInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IamArnRequiredException":
    case "com.amazonaws.codedeploy#IamArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1IamArnRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IamSessionArnAlreadyRegisteredException":
    case "com.amazonaws.codedeploy#IamSessionArnAlreadyRegisteredException":
      response = {
        ...(await deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IamUserArnAlreadyRegisteredException":
    case "com.amazonaws.codedeploy#IamUserArnAlreadyRegisteredException":
      response = {
        ...(await deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IamUserArnRequiredException":
    case "com.amazonaws.codedeploy#IamUserArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1IamUserArnRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceNameAlreadyRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNameAlreadyRegisteredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIamSessionArnException":
    case "com.amazonaws.codedeploy#InvalidIamSessionArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidIamSessionArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIamUserArnException":
    case "com.amazonaws.codedeploy#InvalidIamUserArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidIamUserArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MultipleIamArnsProvidedException":
    case "com.amazonaws.codedeploy#MultipleIamArnsProvidedException":
      response = {
        ...(await deserializeAws_json1_1MultipleIamArnsProvidedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveTagsFromOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceLimitExceededException":
    case "com.amazonaws.codedeploy#InstanceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1InstanceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceNotRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.codedeploy#TagLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      response = {
        ...(await deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SkipWaitTimeForInstanceTerminationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SkipWaitTimeForInstanceTerminationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SkipWaitTimeForInstanceTerminationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentAlreadyCompletedException":
    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopDeploymentOutput(data, context);
  const response: StopDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeploymentAlreadyCompletedException":
    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ArnNotSupportedException":
    case "com.amazonaws.codedeploy#ArnNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1ArnNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.codedeploy#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceArnRequiredException":
    case "com.amazonaws.codedeploy#ResourceArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      response = {
        ...(await deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ArnNotSupportedException":
    case "com.amazonaws.codedeploy#ArnNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1ArnNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.codedeploy#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceArnRequiredException":
    case "com.amazonaws.codedeploy#ResourceArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      response = {
        ...(await deserializeAws_json1_1TagRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApplicationAlreadyExistsException":
    case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateDeploymentGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDeploymentGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDeploymentGroupOutput(data, context);
  const response: UpdateDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDeploymentGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlarmsLimitExceededException":
    case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1AlarmsLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupAlreadyExistsException":
    case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ECSServiceMappingLimitExceededException":
    case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAlarmConfigException":
    case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidAlarmConfigExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAutoRollbackConfigException":
    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAutoScalingGroupException":
    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
      response = {
        ...(await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBlueGreenDeploymentConfigurationException":
    case "com.amazonaws.codedeploy#InvalidBlueGreenDeploymentConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDeploymentStyleException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStyleException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEC2TagCombinationException":
    case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEC2TagException":
    case "com.amazonaws.codedeploy#InvalidEC2TagException":
      response = {
        ...(await deserializeAws_json1_1InvalidEC2TagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidECSServiceException":
    case "com.amazonaws.codedeploy#InvalidECSServiceException":
      response = {
        ...(await deserializeAws_json1_1InvalidECSServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.codedeploy#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLoadBalancerInfoException":
    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
      response = {
        ...(await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOnPremisesTagCombinationException":
    case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTargetGroupPairException":
    case "com.amazonaws.codedeploy#InvalidTargetGroupPairException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTrafficRoutingConfigurationException":
    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTriggerConfigException":
    case "com.amazonaws.codedeploy#InvalidTriggerConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidTriggerConfigExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LifecycleHookLimitExceededException":
    case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagSetListLimitExceededException":
    case "com.amazonaws.codedeploy#TagSetListLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TagSetListLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codedeploy#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TriggerTargetsLimitExceededException":
    case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1AlarmsLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlarmsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlarmsLimitExceededException(body, context);
  const contents: AlarmsLimitExceededException = {
    name: "AlarmsLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApplicationAlreadyExistsException(body, context);
  const contents: ApplicationAlreadyExistsException = {
    name: "ApplicationAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApplicationDoesNotExistException(body, context);
  const contents: ApplicationDoesNotExistException = {
    name: "ApplicationDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApplicationLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApplicationLimitExceededException(body, context);
  const contents: ApplicationLimitExceededException = {
    name: "ApplicationLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ApplicationNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApplicationNameRequiredException(body, context);
  const contents: ApplicationNameRequiredException = {
    name: "ApplicationNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ArnNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ArnNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ArnNotSupportedException(body, context);
  const contents: ArnNotSupportedException = {
    name: "ArnNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BatchLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BatchLimitExceededException(body, context);
  const contents: BatchLimitExceededException = {
    name: "BatchLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BucketNameFilterRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketNameFilterRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BucketNameFilterRequiredException(body, context);
  const contents: BucketNameFilterRequiredException = {
    name: "BucketNameFilterRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentAlreadyCompletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentAlreadyCompletedException(body, context);
  const contents: DeploymentAlreadyCompletedException = {
    name: "DeploymentAlreadyCompletedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentConfigAlreadyExistsException(body, context);
  const contents: DeploymentConfigAlreadyExistsException = {
    name: "DeploymentConfigAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentConfigDoesNotExistException(body, context);
  const contents: DeploymentConfigDoesNotExistException = {
    name: "DeploymentConfigDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentConfigInUseException(body, context);
  const contents: DeploymentConfigInUseException = {
    name: "DeploymentConfigInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentConfigLimitExceededException(body, context);
  const contents: DeploymentConfigLimitExceededException = {
    name: "DeploymentConfigLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentConfigNameRequiredException(body, context);
  const contents: DeploymentConfigNameRequiredException = {
    name: "DeploymentConfigNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentDoesNotExistException(body, context);
  const contents: DeploymentDoesNotExistException = {
    name: "DeploymentDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentGroupAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentGroupAlreadyExistsException(body, context);
  const contents: DeploymentGroupAlreadyExistsException = {
    name: "DeploymentGroupAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentGroupDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentGroupDoesNotExistException(body, context);
  const contents: DeploymentGroupDoesNotExistException = {
    name: "DeploymentGroupDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentGroupLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentGroupLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentGroupLimitExceededException(body, context);
  const contents: DeploymentGroupLimitExceededException = {
    name: "DeploymentGroupLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentGroupNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentGroupNameRequiredException(body, context);
  const contents: DeploymentGroupNameRequiredException = {
    name: "DeploymentGroupNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentIdRequiredException(body, context);
  const contents: DeploymentIdRequiredException = {
    name: "DeploymentIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentIsNotInReadyStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentIsNotInReadyStateException(body, context);
  const contents: DeploymentIsNotInReadyStateException = {
    name: "DeploymentIsNotInReadyStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentLimitExceededException(body, context);
  const contents: DeploymentLimitExceededException = {
    name: "DeploymentLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentNotStartedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentNotStartedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentNotStartedException(body, context);
  const contents: DeploymentNotStartedException = {
    name: "DeploymentNotStartedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentTargetDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentTargetDoesNotExistException(body, context);
  const contents: DeploymentTargetDoesNotExistException = {
    name: "DeploymentTargetDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentTargetIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentTargetIdRequiredException(body, context);
  const contents: DeploymentTargetIdRequiredException = {
    name: "DeploymentTargetIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentTargetListSizeExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentTargetListSizeExceededException(body, context);
  const contents: DeploymentTargetListSizeExceededException = {
    name: "DeploymentTargetListSizeExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DescriptionTooLongExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DescriptionTooLongException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DescriptionTooLongException(body, context);
  const contents: DescriptionTooLongException = {
    name: "DescriptionTooLongException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ECSServiceMappingLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ECSServiceMappingLimitExceededException(body, context);
  const contents: ECSServiceMappingLimitExceededException = {
    name: "ECSServiceMappingLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GitHubAccountTokenDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1GitHubAccountTokenDoesNotExistException(body, context);
  const contents: GitHubAccountTokenDoesNotExistException = {
    name: "GitHubAccountTokenDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GitHubAccountTokenNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1GitHubAccountTokenNameRequiredException(body, context);
  const contents: GitHubAccountTokenNameRequiredException = {
    name: "GitHubAccountTokenNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IamArnRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IamArnRequiredException(body, context);
  const contents: IamArnRequiredException = {
    name: "IamArnRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamSessionArnAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IamSessionArnAlreadyRegisteredException(body, context);
  const contents: IamSessionArnAlreadyRegisteredException = {
    name: "IamSessionArnAlreadyRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamUserArnAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IamUserArnAlreadyRegisteredException(body, context);
  const contents: IamUserArnAlreadyRegisteredException = {
    name: "IamUserArnAlreadyRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IamUserArnRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamUserArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IamUserArnRequiredException(body, context);
  const contents: IamUserArnRequiredException = {
    name: "IamUserArnRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InstanceDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceDoesNotExistException(body, context);
  const contents: InstanceDoesNotExistException = {
    name: "InstanceDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InstanceIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceIdRequiredException(body, context);
  const contents: InstanceIdRequiredException = {
    name: "InstanceIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InstanceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceLimitExceededException(body, context);
  const contents: InstanceLimitExceededException = {
    name: "InstanceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceNameAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceNameAlreadyRegisteredException(body, context);
  const contents: InstanceNameAlreadyRegisteredException = {
    name: "InstanceNameAlreadyRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InstanceNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceNameRequiredException(body, context);
  const contents: InstanceNameRequiredException = {
    name: "InstanceNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InstanceNotRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceNotRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceNotRegisteredException(body, context);
  const contents: InstanceNotRegisteredException = {
    name: "InstanceNotRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidAlarmConfigExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAlarmConfigException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAlarmConfigException(body, context);
  const contents: InvalidAlarmConfigException = {
    name: "InvalidAlarmConfigException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidApplicationNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApplicationNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApplicationNameException(body, context);
  const contents: InvalidApplicationNameException = {
    name: "InvalidApplicationNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArnException(body, context);
  const contents: InvalidArnException = {
    name: "InvalidArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAutoRollbackConfigException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAutoRollbackConfigException(body, context);
  const contents: InvalidAutoRollbackConfigException = {
    name: "InvalidAutoRollbackConfigException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAutoScalingGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAutoScalingGroupException(body, context);
  const contents: InvalidAutoScalingGroupException = {
    name: "InvalidAutoScalingGroupException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBlueGreenDeploymentConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException(body, context);
  const contents: InvalidBlueGreenDeploymentConfigurationException = {
    name: "InvalidBlueGreenDeploymentConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidBucketNameFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBucketNameFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidBucketNameFilterException(body, context);
  const contents: InvalidBucketNameFilterException = {
    name: "InvalidBucketNameFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidComputePlatformExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidComputePlatformException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidComputePlatformException(body, context);
  const contents: InvalidComputePlatformException = {
    name: "InvalidComputePlatformException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeployedStateFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeployedStateFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeployedStateFilterException(body, context);
  const contents: InvalidDeployedStateFilterException = {
    name: "InvalidDeployedStateFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentConfigNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentConfigNameException(body, context);
  const contents: InvalidDeploymentConfigNameException = {
    name: "InvalidDeploymentConfigNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentGroupNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentGroupNameException(body, context);
  const contents: InvalidDeploymentGroupNameException = {
    name: "InvalidDeploymentGroupNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentIdException(body, context);
  const contents: InvalidDeploymentIdException = {
    name: "InvalidDeploymentIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentInstanceTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentInstanceTypeException(body, context);
  const contents: InvalidDeploymentInstanceTypeException = {
    name: "InvalidDeploymentInstanceTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentStatusException(body, context);
  const contents: InvalidDeploymentStatusException = {
    name: "InvalidDeploymentStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentStyleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentStyleException(body, context);
  const contents: InvalidDeploymentStyleException = {
    name: "InvalidDeploymentStyleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentTargetIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentTargetIdException(body, context);
  const contents: InvalidDeploymentTargetIdException = {
    name: "InvalidDeploymentTargetIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentWaitTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentWaitTypeException(body, context);
  const contents: InvalidDeploymentWaitTypeException = {
    name: "InvalidDeploymentWaitTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEC2TagCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEC2TagCombinationException(body, context);
  const contents: InvalidEC2TagCombinationException = {
    name: "InvalidEC2TagCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidEC2TagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEC2TagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEC2TagException(body, context);
  const contents: InvalidEC2TagException = {
    name: "InvalidEC2TagException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidECSServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidECSServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidECSServiceException(body, context);
  const contents: InvalidECSServiceException = {
    name: "InvalidECSServiceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidExternalIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExternalIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidExternalIdException(body, context);
  const contents: InvalidExternalIdException = {
    name: "InvalidExternalIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidFileExistsBehaviorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFileExistsBehaviorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFileExistsBehaviorException(body, context);
  const contents: InvalidFileExistsBehaviorException = {
    name: "InvalidFileExistsBehaviorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidGitHubAccountTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGitHubAccountTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGitHubAccountTokenException(body, context);
  const contents: InvalidGitHubAccountTokenException = {
    name: "InvalidGitHubAccountTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGitHubAccountTokenNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGitHubAccountTokenNameException(body, context);
  const contents: InvalidGitHubAccountTokenNameException = {
    name: "InvalidGitHubAccountTokenNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidIamSessionArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIamSessionArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidIamSessionArnException(body, context);
  const contents: InvalidIamSessionArnException = {
    name: "InvalidIamSessionArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidIamUserArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIamUserArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidIamUserArnException(body, context);
  const contents: InvalidIamUserArnException = {
    name: "InvalidIamUserArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIgnoreApplicationStopFailuresValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException(body, context);
  const contents: InvalidIgnoreApplicationStopFailuresValueException = {
    name: "InvalidIgnoreApplicationStopFailuresValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInstanceNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInstanceNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInstanceNameException(body, context);
  const contents: InvalidInstanceNameException = {
    name: "InvalidInstanceNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInstanceStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInstanceStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInstanceStatusException(body, context);
  const contents: InvalidInstanceStatusException = {
    name: "InvalidInstanceStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInstanceTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInstanceTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInstanceTypeException(body, context);
  const contents: InvalidInstanceTypeException = {
    name: "InvalidInstanceTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidKeyPrefixFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKeyPrefixFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKeyPrefixFilterException(body, context);
  const contents: InvalidKeyPrefixFilterException = {
    name: "InvalidKeyPrefixFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLifecycleEventHookExecutionIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException(body, context);
  const contents: InvalidLifecycleEventHookExecutionIdException = {
    name: "InvalidLifecycleEventHookExecutionIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLifecycleEventHookExecutionStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException(body, context);
  const contents: InvalidLifecycleEventHookExecutionStatusException = {
    name: "InvalidLifecycleEventHookExecutionStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLoadBalancerInfoException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLoadBalancerInfoException(body, context);
  const contents: InvalidLoadBalancerInfoException = {
    name: "InvalidLoadBalancerInfoException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMinimumHealthyHostValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMinimumHealthyHostValueException(body, context);
  const contents: InvalidMinimumHealthyHostValueException = {
    name: "InvalidMinimumHealthyHostValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOnPremisesTagCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOnPremisesTagCombinationException(body, context);
  const contents: InvalidOnPremisesTagCombinationException = {
    name: "InvalidOnPremisesTagCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOperationException(body, context);
  const contents: InvalidOperationException = {
    name: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRegistrationStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRegistrationStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRegistrationStatusException(body, context);
  const contents: InvalidRegistrationStatusException = {
    name: "InvalidRegistrationStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRevisionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRevisionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRevisionException(body, context);
  const contents: InvalidRevisionException = {
    name: "InvalidRevisionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRoleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRoleException(body, context);
  const contents: InvalidRoleException = {
    name: "InvalidRoleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidSortByExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSortByException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSortByException(body, context);
  const contents: InvalidSortByException = {
    name: "InvalidSortByException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidSortOrderExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSortOrderException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSortOrderException(body, context);
  const contents: InvalidSortOrderException = {
    name: "InvalidSortOrderException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagException(body, context);
  const contents: InvalidTagException = {
    name: "InvalidTagException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagFilterException(body, context);
  const contents: InvalidTagFilterException = {
    name: "InvalidTagFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagsToAddExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagsToAddException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagsToAddException(body, context);
  const contents: InvalidTagsToAddException = {
    name: "InvalidTagsToAddException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetFilterNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetFilterNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetFilterNameException(body, context);
  const contents: InvalidTargetFilterNameException = {
    name: "InvalidTargetFilterNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetGroupPairException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetGroupPairException(body, context);
  const contents: InvalidTargetGroupPairException = {
    name: "InvalidTargetGroupPairException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetInstancesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetInstancesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetInstancesException(body, context);
  const contents: InvalidTargetInstancesException = {
    name: "InvalidTargetInstancesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTimeRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTimeRangeException(body, context);
  const contents: InvalidTimeRangeException = {
    name: "InvalidTimeRangeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTrafficRoutingConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTrafficRoutingConfigurationException(body, context);
  const contents: InvalidTrafficRoutingConfigurationException = {
    name: "InvalidTrafficRoutingConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTriggerConfigExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTriggerConfigException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTriggerConfigException(body, context);
  const contents: InvalidTriggerConfigException = {
    name: "InvalidTriggerConfigException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUpdateOutdatedInstancesOnlyValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException(body, context);
  const contents: InvalidUpdateOutdatedInstancesOnlyValueException = {
    name: "InvalidUpdateOutdatedInstancesOnlyValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecycleEventAlreadyCompletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecycleEventAlreadyCompletedException(body, context);
  const contents: LifecycleEventAlreadyCompletedException = {
    name: "LifecycleEventAlreadyCompletedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecycleHookLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecycleHookLimitExceededException(body, context);
  const contents: LifecycleHookLimitExceededException = {
    name: "LifecycleHookLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MultipleIamArnsProvidedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MultipleIamArnsProvidedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MultipleIamArnsProvidedException(body, context);
  const contents: MultipleIamArnsProvidedException = {
    name: "MultipleIamArnsProvidedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotSupportedException(body, context);
  const contents: OperationNotSupportedException = {
    name: "OperationNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceArnRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceArnRequiredException(body, context);
  const contents: ResourceArnRequiredException = {
    name: "ResourceArnRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceValidationException(body, context);
  const contents: ResourceValidationException = {
    name: "ResourceValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RevisionDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevisionDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RevisionDoesNotExistException(body, context);
  const contents: RevisionDoesNotExistException = {
    name: "RevisionDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RevisionRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevisionRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RevisionRequiredException(body, context);
  const contents: RevisionRequiredException = {
    name: "RevisionRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RoleRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RoleRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RoleRequiredException(body, context);
  const contents: RoleRequiredException = {
    name: "RoleRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagLimitExceededException(body, context);
  const contents: TagLimitExceededException = {
    name: "TagLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TagRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagRequiredException(body, context);
  const contents: TagRequiredException = {
    name: "TagRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TagSetListLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagSetListLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagSetListLimitExceededException(body, context);
  const contents: TagSetListLimitExceededException = {
    name: "TagSetListLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TriggerTargetsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TriggerTargetsLimitExceededException(body, context);
  const contents: TriggerTargetsLimitExceededException = {
    name: "TriggerTargetsLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedActionForDeploymentTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedActionForDeploymentTypeException(body, context);
  const contents: UnsupportedActionForDeploymentTypeException = {
    name: "UnsupportedActionForDeploymentTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AddTagsToOnPremisesInstancesInput = (
  input: AddTagsToOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames !== undefined &&
      input.instanceNames !== null && {
        instanceNames: serializeAws_json1_1InstanceNameList(input.instanceNames, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1Alarm = (input: Alarm, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1AlarmConfiguration = (input: AlarmConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.alarms !== undefined &&
      input.alarms !== null && { alarms: serializeAws_json1_1AlarmList(input.alarms, context) }),
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    ...(input.ignorePollAlarmFailure !== undefined &&
      input.ignorePollAlarmFailure !== null && { ignorePollAlarmFailure: input.ignorePollAlarmFailure }),
  };
};

const serializeAws_json1_1AlarmList = (input: Alarm[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Alarm(entry, context);
    });
};

const serializeAws_json1_1ApplicationsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AppSpecContent = (input: AppSpecContent, context: __SerdeContext): any => {
  return {
    ...(input.content !== undefined && input.content !== null && { content: input.content }),
    ...(input.sha256 !== undefined && input.sha256 !== null && { sha256: input.sha256 }),
  };
};

const serializeAws_json1_1AutoRollbackConfiguration = (
  input: AutoRollbackConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    ...(input.events !== undefined &&
      input.events !== null && { events: serializeAws_json1_1AutoRollbackEventsList(input.events, context) }),
  };
};

const serializeAws_json1_1AutoRollbackEventsList = (
  input: (AutoRollbackEvent | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AutoScalingGroupNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1BatchGetApplicationRevisionsInput = (
  input: BatchGetApplicationRevisionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.revisions !== undefined &&
      input.revisions !== null && { revisions: serializeAws_json1_1RevisionLocationList(input.revisions, context) }),
  };
};

const serializeAws_json1_1BatchGetApplicationsInput = (
  input: BatchGetApplicationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationNames !== undefined &&
      input.applicationNames !== null && {
        applicationNames: serializeAws_json1_1ApplicationsList(input.applicationNames, context),
      }),
  };
};

const serializeAws_json1_1BatchGetDeploymentGroupsInput = (
  input: BatchGetDeploymentGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.deploymentGroupNames !== undefined &&
      input.deploymentGroupNames !== null && {
        deploymentGroupNames: serializeAws_json1_1DeploymentGroupsList(input.deploymentGroupNames, context),
      }),
  };
};

const serializeAws_json1_1BatchGetDeploymentInstancesInput = (
  input: BatchGetDeploymentInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    ...(input.instanceIds !== undefined &&
      input.instanceIds !== null && { instanceIds: serializeAws_json1_1InstancesList(input.instanceIds, context) }),
  };
};

const serializeAws_json1_1BatchGetDeploymentsInput = (
  input: BatchGetDeploymentsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentIds !== undefined &&
      input.deploymentIds !== null && {
        deploymentIds: serializeAws_json1_1DeploymentsList(input.deploymentIds, context),
      }),
  };
};

const serializeAws_json1_1BatchGetDeploymentTargetsInput = (
  input: BatchGetDeploymentTargetsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    ...(input.targetIds !== undefined &&
      input.targetIds !== null && { targetIds: serializeAws_json1_1TargetIdList(input.targetIds, context) }),
  };
};

const serializeAws_json1_1BatchGetOnPremisesInstancesInput = (
  input: BatchGetOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames !== undefined &&
      input.instanceNames !== null && {
        instanceNames: serializeAws_json1_1InstanceNameList(input.instanceNames, context),
      }),
  };
};

const serializeAws_json1_1BlueGreenDeploymentConfiguration = (
  input: BlueGreenDeploymentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentReadyOption !== undefined &&
      input.deploymentReadyOption !== null && {
        deploymentReadyOption: serializeAws_json1_1DeploymentReadyOption(input.deploymentReadyOption, context),
      }),
    ...(input.greenFleetProvisioningOption !== undefined &&
      input.greenFleetProvisioningOption !== null && {
        greenFleetProvisioningOption: serializeAws_json1_1GreenFleetProvisioningOption(
          input.greenFleetProvisioningOption,
          context
        ),
      }),
    ...(input.terminateBlueInstancesOnDeploymentSuccess !== undefined &&
      input.terminateBlueInstancesOnDeploymentSuccess !== null && {
        terminateBlueInstancesOnDeploymentSuccess: serializeAws_json1_1BlueInstanceTerminationOption(
          input.terminateBlueInstancesOnDeploymentSuccess,
          context
        ),
      }),
  };
};

const serializeAws_json1_1BlueInstanceTerminationOption = (
  input: BlueInstanceTerminationOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.action !== undefined && input.action !== null && { action: input.action }),
    ...(input.terminationWaitTimeInMinutes !== undefined &&
      input.terminationWaitTimeInMinutes !== null && {
        terminationWaitTimeInMinutes: input.terminationWaitTimeInMinutes,
      }),
  };
};

const serializeAws_json1_1ContinueDeploymentInput = (input: ContinueDeploymentInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    ...(input.deploymentWaitType !== undefined &&
      input.deploymentWaitType !== null && { deploymentWaitType: input.deploymentWaitType }),
  };
};

const serializeAws_json1_1CreateApplicationInput = (input: CreateApplicationInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.computePlatform !== undefined &&
      input.computePlatform !== null && { computePlatform: input.computePlatform }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDeploymentConfigInput = (
  input: CreateDeploymentConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.computePlatform !== undefined &&
      input.computePlatform !== null && { computePlatform: input.computePlatform }),
    ...(input.deploymentConfigName !== undefined &&
      input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }),
    ...(input.minimumHealthyHosts !== undefined &&
      input.minimumHealthyHosts !== null && {
        minimumHealthyHosts: serializeAws_json1_1MinimumHealthyHosts(input.minimumHealthyHosts, context),
      }),
    ...(input.trafficRoutingConfig !== undefined &&
      input.trafficRoutingConfig !== null && {
        trafficRoutingConfig: serializeAws_json1_1TrafficRoutingConfig(input.trafficRoutingConfig, context),
      }),
  };
};

const serializeAws_json1_1CreateDeploymentGroupInput = (
  input: CreateDeploymentGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.alarmConfiguration !== undefined &&
      input.alarmConfiguration !== null && {
        alarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.alarmConfiguration, context),
      }),
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.autoRollbackConfiguration !== undefined &&
      input.autoRollbackConfiguration !== null && {
        autoRollbackConfiguration: serializeAws_json1_1AutoRollbackConfiguration(
          input.autoRollbackConfiguration,
          context
        ),
      }),
    ...(input.autoScalingGroups !== undefined &&
      input.autoScalingGroups !== null && {
        autoScalingGroups: serializeAws_json1_1AutoScalingGroupNameList(input.autoScalingGroups, context),
      }),
    ...(input.blueGreenDeploymentConfiguration !== undefined &&
      input.blueGreenDeploymentConfiguration !== null && {
        blueGreenDeploymentConfiguration: serializeAws_json1_1BlueGreenDeploymentConfiguration(
          input.blueGreenDeploymentConfiguration,
          context
        ),
      }),
    ...(input.deploymentConfigName !== undefined &&
      input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }),
    ...(input.deploymentGroupName !== undefined &&
      input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName }),
    ...(input.deploymentStyle !== undefined &&
      input.deploymentStyle !== null && {
        deploymentStyle: serializeAws_json1_1DeploymentStyle(input.deploymentStyle, context),
      }),
    ...(input.ec2TagFilters !== undefined &&
      input.ec2TagFilters !== null && {
        ec2TagFilters: serializeAws_json1_1EC2TagFilterList(input.ec2TagFilters, context),
      }),
    ...(input.ec2TagSet !== undefined &&
      input.ec2TagSet !== null && { ec2TagSet: serializeAws_json1_1EC2TagSet(input.ec2TagSet, context) }),
    ...(input.ecsServices !== undefined &&
      input.ecsServices !== null && { ecsServices: serializeAws_json1_1ECSServiceList(input.ecsServices, context) }),
    ...(input.loadBalancerInfo !== undefined &&
      input.loadBalancerInfo !== null && {
        loadBalancerInfo: serializeAws_json1_1LoadBalancerInfo(input.loadBalancerInfo, context),
      }),
    ...(input.onPremisesInstanceTagFilters !== undefined &&
      input.onPremisesInstanceTagFilters !== null && {
        onPremisesInstanceTagFilters: serializeAws_json1_1TagFilterList(input.onPremisesInstanceTagFilters, context),
      }),
    ...(input.onPremisesTagSet !== undefined &&
      input.onPremisesTagSet !== null && {
        onPremisesTagSet: serializeAws_json1_1OnPremisesTagSet(input.onPremisesTagSet, context),
      }),
    ...(input.outdatedInstancesStrategy !== undefined &&
      input.outdatedInstancesStrategy !== null && { outdatedInstancesStrategy: input.outdatedInstancesStrategy }),
    ...(input.serviceRoleArn !== undefined &&
      input.serviceRoleArn !== null && { serviceRoleArn: input.serviceRoleArn }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.triggerConfigurations !== undefined &&
      input.triggerConfigurations !== null && {
        triggerConfigurations: serializeAws_json1_1TriggerConfigList(input.triggerConfigurations, context),
      }),
  };
};

const serializeAws_json1_1CreateDeploymentInput = (input: CreateDeploymentInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.autoRollbackConfiguration !== undefined &&
      input.autoRollbackConfiguration !== null && {
        autoRollbackConfiguration: serializeAws_json1_1AutoRollbackConfiguration(
          input.autoRollbackConfiguration,
          context
        ),
      }),
    ...(input.deploymentConfigName !== undefined &&
      input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }),
    ...(input.deploymentGroupName !== undefined &&
      input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.fileExistsBehavior !== undefined &&
      input.fileExistsBehavior !== null && { fileExistsBehavior: input.fileExistsBehavior }),
    ...(input.ignoreApplicationStopFailures !== undefined &&
      input.ignoreApplicationStopFailures !== null && {
        ignoreApplicationStopFailures: input.ignoreApplicationStopFailures,
      }),
    ...(input.revision !== undefined &&
      input.revision !== null && { revision: serializeAws_json1_1RevisionLocation(input.revision, context) }),
    ...(input.targetInstances !== undefined &&
      input.targetInstances !== null && {
        targetInstances: serializeAws_json1_1TargetInstances(input.targetInstances, context),
      }),
    ...(input.updateOutdatedInstancesOnly !== undefined &&
      input.updateOutdatedInstancesOnly !== null && { updateOutdatedInstancesOnly: input.updateOutdatedInstancesOnly }),
  };
};

const serializeAws_json1_1DeleteApplicationInput = (input: DeleteApplicationInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
  };
};

const serializeAws_json1_1DeleteDeploymentConfigInput = (
  input: DeleteDeploymentConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentConfigName !== undefined &&
      input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }),
  };
};

const serializeAws_json1_1DeleteDeploymentGroupInput = (
  input: DeleteDeploymentGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.deploymentGroupName !== undefined &&
      input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName }),
  };
};

const serializeAws_json1_1DeleteGitHubAccountTokenInput = (
  input: DeleteGitHubAccountTokenInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.tokenName !== undefined && input.tokenName !== null && { tokenName: input.tokenName }),
  };
};

const serializeAws_json1_1DeleteResourcesByExternalIdInput = (
  input: DeleteResourcesByExternalIdInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.externalId !== undefined && input.externalId !== null && { externalId: input.externalId }),
  };
};

const serializeAws_json1_1DeploymentGroupsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DeploymentReadyOption = (input: DeploymentReadyOption, context: __SerdeContext): any => {
  return {
    ...(input.actionOnTimeout !== undefined &&
      input.actionOnTimeout !== null && { actionOnTimeout: input.actionOnTimeout }),
    ...(input.waitTimeInMinutes !== undefined &&
      input.waitTimeInMinutes !== null && { waitTimeInMinutes: input.waitTimeInMinutes }),
  };
};

const serializeAws_json1_1DeploymentsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DeploymentStatusList = (
  input: (DeploymentStatus | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DeploymentStyle = (input: DeploymentStyle, context: __SerdeContext): any => {
  return {
    ...(input.deploymentOption !== undefined &&
      input.deploymentOption !== null && { deploymentOption: input.deploymentOption }),
    ...(input.deploymentType !== undefined &&
      input.deploymentType !== null && { deploymentType: input.deploymentType }),
  };
};

const serializeAws_json1_1DeregisterOnPremisesInstanceInput = (
  input: DeregisterOnPremisesInstanceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1EC2TagFilter = (input: EC2TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1EC2TagFilterList = (input: EC2TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EC2TagFilter(entry, context);
    });
};

const serializeAws_json1_1EC2TagSet = (input: EC2TagSet, context: __SerdeContext): any => {
  return {
    ...(input.ec2TagSetList !== undefined &&
      input.ec2TagSetList !== null && {
        ec2TagSetList: serializeAws_json1_1EC2TagSetList(input.ec2TagSetList, context),
      }),
  };
};

const serializeAws_json1_1EC2TagSetList = (input: EC2TagFilter[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EC2TagFilterList(entry, context);
    });
};

const serializeAws_json1_1ECSService = (input: ECSService, context: __SerdeContext): any => {
  return {
    ...(input.clusterName !== undefined && input.clusterName !== null && { clusterName: input.clusterName }),
    ...(input.serviceName !== undefined && input.serviceName !== null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_1ECSServiceList = (input: ECSService[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ECSService(entry, context);
    });
};

const serializeAws_json1_1ELBInfo = (input: ELBInfo, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1ELBInfoList = (input: ELBInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ELBInfo(entry, context);
    });
};

const serializeAws_json1_1FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GetApplicationInput = (input: GetApplicationInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
  };
};

const serializeAws_json1_1GetApplicationRevisionInput = (
  input: GetApplicationRevisionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.revision !== undefined &&
      input.revision !== null && { revision: serializeAws_json1_1RevisionLocation(input.revision, context) }),
  };
};

const serializeAws_json1_1GetDeploymentConfigInput = (
  input: GetDeploymentConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentConfigName !== undefined &&
      input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }),
  };
};

const serializeAws_json1_1GetDeploymentGroupInput = (input: GetDeploymentGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.deploymentGroupName !== undefined &&
      input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName }),
  };
};

const serializeAws_json1_1GetDeploymentInput = (input: GetDeploymentInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
  };
};

const serializeAws_json1_1GetDeploymentInstanceInput = (
  input: GetDeploymentInstanceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    ...(input.instanceId !== undefined && input.instanceId !== null && { instanceId: input.instanceId }),
  };
};

const serializeAws_json1_1GetDeploymentTargetInput = (
  input: GetDeploymentTargetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    ...(input.targetId !== undefined && input.targetId !== null && { targetId: input.targetId }),
  };
};

const serializeAws_json1_1GetOnPremisesInstanceInput = (
  input: GetOnPremisesInstanceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1GitHubLocation = (input: GitHubLocation, context: __SerdeContext): any => {
  return {
    ...(input.commitId !== undefined && input.commitId !== null && { commitId: input.commitId }),
    ...(input.repository !== undefined && input.repository !== null && { repository: input.repository }),
  };
};

const serializeAws_json1_1GreenFleetProvisioningOption = (
  input: GreenFleetProvisioningOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.action !== undefined && input.action !== null && { action: input.action }),
  };
};

const serializeAws_json1_1InstanceNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1InstancesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1InstanceStatusList = (input: (InstanceStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1InstanceTypeList = (input: (_InstanceType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ListApplicationRevisionsInput = (
  input: ListApplicationRevisionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.deployed !== undefined && input.deployed !== null && { deployed: input.deployed }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket }),
    ...(input.s3KeyPrefix !== undefined && input.s3KeyPrefix !== null && { s3KeyPrefix: input.s3KeyPrefix }),
    ...(input.sortBy !== undefined && input.sortBy !== null && { sortBy: input.sortBy }),
    ...(input.sortOrder !== undefined && input.sortOrder !== null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_1ListApplicationsInput = (input: ListApplicationsInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListDeploymentConfigsInput = (
  input: ListDeploymentConfigsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListDeploymentGroupsInput = (
  input: ListDeploymentGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListDeploymentInstancesInput = (
  input: ListDeploymentInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    ...(input.instanceStatusFilter !== undefined &&
      input.instanceStatusFilter !== null && {
        instanceStatusFilter: serializeAws_json1_1InstanceStatusList(input.instanceStatusFilter, context),
      }),
    ...(input.instanceTypeFilter !== undefined &&
      input.instanceTypeFilter !== null && {
        instanceTypeFilter: serializeAws_json1_1InstanceTypeList(input.instanceTypeFilter, context),
      }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListDeploymentsInput = (input: ListDeploymentsInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.createTimeRange !== undefined &&
      input.createTimeRange !== null && {
        createTimeRange: serializeAws_json1_1TimeRange(input.createTimeRange, context),
      }),
    ...(input.deploymentGroupName !== undefined &&
      input.deploymentGroupName !== null && { deploymentGroupName: input.deploymentGroupName }),
    ...(input.externalId !== undefined && input.externalId !== null && { externalId: input.externalId }),
    ...(input.includeOnlyStatuses !== undefined &&
      input.includeOnlyStatuses !== null && {
        includeOnlyStatuses: serializeAws_json1_1DeploymentStatusList(input.includeOnlyStatuses, context),
      }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListDeploymentTargetsInput = (
  input: ListDeploymentTargetsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.targetFilters !== undefined &&
      input.targetFilters !== null && {
        targetFilters: serializeAws_json1_1TargetFilters(input.targetFilters, context),
      }),
  };
};

const serializeAws_json1_1ListenerArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ListGitHubAccountTokenNamesInput = (
  input: ListGitHubAccountTokenNamesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListOnPremisesInstancesInput = (
  input: ListOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.registrationStatus !== undefined &&
      input.registrationStatus !== null && { registrationStatus: input.registrationStatus }),
    ...(input.tagFilters !== undefined &&
      input.tagFilters !== null && { tagFilters: serializeAws_json1_1TagFilterList(input.tagFilters, context) }),
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1LoadBalancerInfo = (input: LoadBalancerInfo, context: __SerdeContext): any => {
  return {
    ...(input.elbInfoList !== undefined &&
      input.elbInfoList !== null && { elbInfoList: serializeAws_json1_1ELBInfoList(input.elbInfoList, context) }),
    ...(input.targetGroupInfoList !== undefined &&
      input.targetGroupInfoList !== null && {
        targetGroupInfoList: serializeAws_json1_1TargetGroupInfoList(input.targetGroupInfoList, context),
      }),
    ...(input.targetGroupPairInfoList !== undefined &&
      input.targetGroupPairInfoList !== null && {
        targetGroupPairInfoList: serializeAws_json1_1TargetGroupPairInfoList(input.targetGroupPairInfoList, context),
      }),
  };
};

const serializeAws_json1_1MinimumHealthyHosts = (input: MinimumHealthyHosts, context: __SerdeContext): any => {
  return {
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1OnPremisesTagSet = (input: OnPremisesTagSet, context: __SerdeContext): any => {
  return {
    ...(input.onPremisesTagSetList !== undefined &&
      input.onPremisesTagSetList !== null && {
        onPremisesTagSetList: serializeAws_json1_1OnPremisesTagSetList(input.onPremisesTagSetList, context),
      }),
  };
};

const serializeAws_json1_1OnPremisesTagSetList = (input: TagFilter[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1TagFilterList(entry, context);
    });
};

const serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput = (
  input: PutLifecycleEventHookExecutionStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
    ...(input.lifecycleEventHookExecutionId !== undefined &&
      input.lifecycleEventHookExecutionId !== null && {
        lifecycleEventHookExecutionId: input.lifecycleEventHookExecutionId,
      }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
  };
};

const serializeAws_json1_1RawString = (input: RawString, context: __SerdeContext): any => {
  return {
    ...(input.content !== undefined && input.content !== null && { content: input.content }),
    ...(input.sha256 !== undefined && input.sha256 !== null && { sha256: input.sha256 }),
  };
};

const serializeAws_json1_1RegisterApplicationRevisionInput = (
  input: RegisterApplicationRevisionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.revision !== undefined &&
      input.revision !== null && { revision: serializeAws_json1_1RevisionLocation(input.revision, context) }),
  };
};

const serializeAws_json1_1RegisterOnPremisesInstanceInput = (
  input: RegisterOnPremisesInstanceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.iamSessionArn !== undefined && input.iamSessionArn !== null && { iamSessionArn: input.iamSessionArn }),
    ...(input.iamUserArn !== undefined && input.iamUserArn !== null && { iamUserArn: input.iamUserArn }),
    ...(input.instanceName !== undefined && input.instanceName !== null && { instanceName: input.instanceName }),
  };
};

const serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput = (
  input: RemoveTagsFromOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames !== undefined &&
      input.instanceNames !== null && {
        instanceNames: serializeAws_json1_1InstanceNameList(input.instanceNames, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1RevisionLocation = (input: RevisionLocation, context: __SerdeContext): any => {
  return {
    ...(input.appSpecContent !== undefined &&
      input.appSpecContent !== null && {
        appSpecContent: serializeAws_json1_1AppSpecContent(input.appSpecContent, context),
      }),
    ...(input.gitHubLocation !== undefined &&
      input.gitHubLocation !== null && {
        gitHubLocation: serializeAws_json1_1GitHubLocation(input.gitHubLocation, context),
      }),
    ...(input.revisionType !== undefined && input.revisionType !== null && { revisionType: input.revisionType }),
    ...(input.s3Location !== undefined &&
      input.s3Location !== null && { s3Location: serializeAws_json1_1S3Location(input.s3Location, context) }),
    ...(input.string !== undefined &&
      input.string !== null && { string: serializeAws_json1_1RawString(input.string, context) }),
  };
};

const serializeAws_json1_1RevisionLocationList = (input: RevisionLocation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1RevisionLocation(entry, context);
    });
};

const serializeAws_json1_1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
    ...(input.bundleType !== undefined && input.bundleType !== null && { bundleType: input.bundleType }),
    ...(input.eTag !== undefined && input.eTag !== null && { eTag: input.eTag }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput = (
  input: SkipWaitTimeForInstanceTerminationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
  };
};

const serializeAws_json1_1StopDeploymentInput = (input: StopDeploymentInput, context: __SerdeContext): any => {
  return {
    ...(input.autoRollbackEnabled !== undefined &&
      input.autoRollbackEnabled !== null && { autoRollbackEnabled: input.autoRollbackEnabled }),
    ...(input.deploymentId !== undefined && input.deploymentId !== null && { deploymentId: input.deploymentId }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagFilterList = (input: TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1TagFilter(entry, context);
    });
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TargetFilters = (input: { [key: string]: string[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [TargetFilterName | string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1FilterValueList(value, context),
    };
  }, {});
};

const serializeAws_json1_1TargetGroupInfo = (input: TargetGroupInfo, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1TargetGroupInfoList = (input: TargetGroupInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1TargetGroupInfo(entry, context);
    });
};

const serializeAws_json1_1TargetGroupPairInfo = (input: TargetGroupPairInfo, context: __SerdeContext): any => {
  return {
    ...(input.prodTrafficRoute !== undefined &&
      input.prodTrafficRoute !== null && {
        prodTrafficRoute: serializeAws_json1_1TrafficRoute(input.prodTrafficRoute, context),
      }),
    ...(input.targetGroups !== undefined &&
      input.targetGroups !== null && {
        targetGroups: serializeAws_json1_1TargetGroupInfoList(input.targetGroups, context),
      }),
    ...(input.testTrafficRoute !== undefined &&
      input.testTrafficRoute !== null && {
        testTrafficRoute: serializeAws_json1_1TrafficRoute(input.testTrafficRoute, context),
      }),
  };
};

const serializeAws_json1_1TargetGroupPairInfoList = (input: TargetGroupPairInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1TargetGroupPairInfo(entry, context);
    });
};

const serializeAws_json1_1TargetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TargetInstances = (input: TargetInstances, context: __SerdeContext): any => {
  return {
    ...(input.autoScalingGroups !== undefined &&
      input.autoScalingGroups !== null && {
        autoScalingGroups: serializeAws_json1_1AutoScalingGroupNameList(input.autoScalingGroups, context),
      }),
    ...(input.ec2TagSet !== undefined &&
      input.ec2TagSet !== null && { ec2TagSet: serializeAws_json1_1EC2TagSet(input.ec2TagSet, context) }),
    ...(input.tagFilters !== undefined &&
      input.tagFilters !== null && { tagFilters: serializeAws_json1_1EC2TagFilterList(input.tagFilters, context) }),
  };
};

const serializeAws_json1_1TimeBasedCanary = (input: TimeBasedCanary, context: __SerdeContext): any => {
  return {
    ...(input.canaryInterval !== undefined &&
      input.canaryInterval !== null && { canaryInterval: input.canaryInterval }),
    ...(input.canaryPercentage !== undefined &&
      input.canaryPercentage !== null && { canaryPercentage: input.canaryPercentage }),
  };
};

const serializeAws_json1_1TimeBasedLinear = (input: TimeBasedLinear, context: __SerdeContext): any => {
  return {
    ...(input.linearInterval !== undefined &&
      input.linearInterval !== null && { linearInterval: input.linearInterval }),
    ...(input.linearPercentage !== undefined &&
      input.linearPercentage !== null && { linearPercentage: input.linearPercentage }),
  };
};

const serializeAws_json1_1TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.end !== undefined && input.end !== null && { end: Math.round(input.end.getTime() / 1000) }),
    ...(input.start !== undefined && input.start !== null && { start: Math.round(input.start.getTime() / 1000) }),
  };
};

const serializeAws_json1_1TrafficRoute = (input: TrafficRoute, context: __SerdeContext): any => {
  return {
    ...(input.listenerArns !== undefined &&
      input.listenerArns !== null && {
        listenerArns: serializeAws_json1_1ListenerArnList(input.listenerArns, context),
      }),
  };
};

const serializeAws_json1_1TrafficRoutingConfig = (input: TrafficRoutingConfig, context: __SerdeContext): any => {
  return {
    ...(input.timeBasedCanary !== undefined &&
      input.timeBasedCanary !== null && {
        timeBasedCanary: serializeAws_json1_1TimeBasedCanary(input.timeBasedCanary, context),
      }),
    ...(input.timeBasedLinear !== undefined &&
      input.timeBasedLinear !== null && {
        timeBasedLinear: serializeAws_json1_1TimeBasedLinear(input.timeBasedLinear, context),
      }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1TriggerConfig = (input: TriggerConfig, context: __SerdeContext): any => {
  return {
    ...(input.triggerEvents !== undefined &&
      input.triggerEvents !== null && {
        triggerEvents: serializeAws_json1_1TriggerEventTypeList(input.triggerEvents, context),
      }),
    ...(input.triggerName !== undefined && input.triggerName !== null && { triggerName: input.triggerName }),
    ...(input.triggerTargetArn !== undefined &&
      input.triggerTargetArn !== null && { triggerTargetArn: input.triggerTargetArn }),
  };
};

const serializeAws_json1_1TriggerConfigList = (input: TriggerConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1TriggerConfig(entry, context);
    });
};

const serializeAws_json1_1TriggerEventTypeList = (
  input: (TriggerEventType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateApplicationInput = (input: UpdateApplicationInput, context: __SerdeContext): any => {
  return {
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.newApplicationName !== undefined &&
      input.newApplicationName !== null && { newApplicationName: input.newApplicationName }),
  };
};

const serializeAws_json1_1UpdateDeploymentGroupInput = (
  input: UpdateDeploymentGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.alarmConfiguration !== undefined &&
      input.alarmConfiguration !== null && {
        alarmConfiguration: serializeAws_json1_1AlarmConfiguration(input.alarmConfiguration, context),
      }),
    ...(input.applicationName !== undefined &&
      input.applicationName !== null && { applicationName: input.applicationName }),
    ...(input.autoRollbackConfiguration !== undefined &&
      input.autoRollbackConfiguration !== null && {
        autoRollbackConfiguration: serializeAws_json1_1AutoRollbackConfiguration(
          input.autoRollbackConfiguration,
          context
        ),
      }),
    ...(input.autoScalingGroups !== undefined &&
      input.autoScalingGroups !== null && {
        autoScalingGroups: serializeAws_json1_1AutoScalingGroupNameList(input.autoScalingGroups, context),
      }),
    ...(input.blueGreenDeploymentConfiguration !== undefined &&
      input.blueGreenDeploymentConfiguration !== null && {
        blueGreenDeploymentConfiguration: serializeAws_json1_1BlueGreenDeploymentConfiguration(
          input.blueGreenDeploymentConfiguration,
          context
        ),
      }),
    ...(input.currentDeploymentGroupName !== undefined &&
      input.currentDeploymentGroupName !== null && { currentDeploymentGroupName: input.currentDeploymentGroupName }),
    ...(input.deploymentConfigName !== undefined &&
      input.deploymentConfigName !== null && { deploymentConfigName: input.deploymentConfigName }),
    ...(input.deploymentStyle !== undefined &&
      input.deploymentStyle !== null && {
        deploymentStyle: serializeAws_json1_1DeploymentStyle(input.deploymentStyle, context),
      }),
    ...(input.ec2TagFilters !== undefined &&
      input.ec2TagFilters !== null && {
        ec2TagFilters: serializeAws_json1_1EC2TagFilterList(input.ec2TagFilters, context),
      }),
    ...(input.ec2TagSet !== undefined &&
      input.ec2TagSet !== null && { ec2TagSet: serializeAws_json1_1EC2TagSet(input.ec2TagSet, context) }),
    ...(input.ecsServices !== undefined &&
      input.ecsServices !== null && { ecsServices: serializeAws_json1_1ECSServiceList(input.ecsServices, context) }),
    ...(input.loadBalancerInfo !== undefined &&
      input.loadBalancerInfo !== null && {
        loadBalancerInfo: serializeAws_json1_1LoadBalancerInfo(input.loadBalancerInfo, context),
      }),
    ...(input.newDeploymentGroupName !== undefined &&
      input.newDeploymentGroupName !== null && { newDeploymentGroupName: input.newDeploymentGroupName }),
    ...(input.onPremisesInstanceTagFilters !== undefined &&
      input.onPremisesInstanceTagFilters !== null && {
        onPremisesInstanceTagFilters: serializeAws_json1_1TagFilterList(input.onPremisesInstanceTagFilters, context),
      }),
    ...(input.onPremisesTagSet !== undefined &&
      input.onPremisesTagSet !== null && {
        onPremisesTagSet: serializeAws_json1_1OnPremisesTagSet(input.onPremisesTagSet, context),
      }),
    ...(input.outdatedInstancesStrategy !== undefined &&
      input.outdatedInstancesStrategy !== null && { outdatedInstancesStrategy: input.outdatedInstancesStrategy }),
    ...(input.serviceRoleArn !== undefined &&
      input.serviceRoleArn !== null && { serviceRoleArn: input.serviceRoleArn }),
    ...(input.triggerConfigurations !== undefined &&
      input.triggerConfigurations !== null && {
        triggerConfigurations: serializeAws_json1_1TriggerConfigList(input.triggerConfigurations, context),
      }),
  };
};

const deserializeAws_json1_1Alarm = (output: any, context: __SerdeContext): Alarm => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1AlarmConfiguration = (output: any, context: __SerdeContext): AlarmConfiguration => {
  return {
    alarms:
      output.alarms !== undefined && output.alarms !== null
        ? deserializeAws_json1_1AlarmList(output.alarms, context)
        : undefined,
    enabled: __expectBoolean(output.enabled),
    ignorePollAlarmFailure: __expectBoolean(output.ignorePollAlarmFailure),
  } as any;
};

const deserializeAws_json1_1AlarmList = (output: any, context: __SerdeContext): Alarm[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Alarm(entry, context);
    });
};

const deserializeAws_json1_1AlarmsLimitExceededException = (
  output: any,
  context: __SerdeContext
): AlarmsLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApplicationAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ApplicationAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApplicationDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ApplicationDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApplicationInfo = (output: any, context: __SerdeContext): ApplicationInfo => {
  return {
    applicationId: __expectString(output.applicationId),
    applicationName: __expectString(output.applicationName),
    computePlatform: __expectString(output.computePlatform),
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime)))
        : undefined,
    gitHubAccountName: __expectString(output.gitHubAccountName),
    linkedToGitHub: __expectBoolean(output.linkedToGitHub),
  } as any;
};

const deserializeAws_json1_1ApplicationLimitExceededException = (
  output: any,
  context: __SerdeContext
): ApplicationLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApplicationNameRequiredException = (
  output: any,
  context: __SerdeContext
): ApplicationNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ApplicationsInfoList = (output: any, context: __SerdeContext): ApplicationInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ApplicationInfo(entry, context);
    });
};

const deserializeAws_json1_1ApplicationsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1AppSpecContent = (output: any, context: __SerdeContext): AppSpecContent => {
  return {
    content: __expectString(output.content),
    sha256: __expectString(output.sha256),
  } as any;
};

const deserializeAws_json1_1ArnNotSupportedException = (
  output: any,
  context: __SerdeContext
): ArnNotSupportedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AutoRollbackConfiguration = (
  output: any,
  context: __SerdeContext
): AutoRollbackConfiguration => {
  return {
    enabled: __expectBoolean(output.enabled),
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_1AutoRollbackEventsList(output.events, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AutoRollbackEventsList = (
  output: any,
  context: __SerdeContext
): (AutoRollbackEvent | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1AutoScalingGroup = (output: any, context: __SerdeContext): AutoScalingGroup => {
  return {
    hook: __expectString(output.hook),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1AutoScalingGroupList = (output: any, context: __SerdeContext): AutoScalingGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AutoScalingGroup(entry, context);
    });
};

const deserializeAws_json1_1AutoScalingGroupNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1BatchGetApplicationRevisionsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetApplicationRevisionsOutput => {
  return {
    applicationName: __expectString(output.applicationName),
    errorMessage: __expectString(output.errorMessage),
    revisions:
      output.revisions !== undefined && output.revisions !== null
        ? deserializeAws_json1_1RevisionInfoList(output.revisions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetApplicationsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetApplicationsOutput => {
  return {
    applicationsInfo:
      output.applicationsInfo !== undefined && output.applicationsInfo !== null
        ? deserializeAws_json1_1ApplicationsInfoList(output.applicationsInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetDeploymentGroupsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentGroupsOutput => {
  return {
    deploymentGroupsInfo:
      output.deploymentGroupsInfo !== undefined && output.deploymentGroupsInfo !== null
        ? deserializeAws_json1_1DeploymentGroupInfoList(output.deploymentGroupsInfo, context)
        : undefined,
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

const deserializeAws_json1_1BatchGetDeploymentInstancesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentInstancesOutput => {
  return {
    errorMessage: __expectString(output.errorMessage),
    instancesSummary:
      output.instancesSummary !== undefined && output.instancesSummary !== null
        ? deserializeAws_json1_1InstanceSummaryList(output.instancesSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetDeploymentsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentsOutput => {
  return {
    deploymentsInfo:
      output.deploymentsInfo !== undefined && output.deploymentsInfo !== null
        ? deserializeAws_json1_1DeploymentsInfoList(output.deploymentsInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetDeploymentTargetsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentTargetsOutput => {
  return {
    deploymentTargets:
      output.deploymentTargets !== undefined && output.deploymentTargets !== null
        ? deserializeAws_json1_1DeploymentTargetList(output.deploymentTargets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetOnPremisesInstancesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetOnPremisesInstancesOutput => {
  return {
    instanceInfos:
      output.instanceInfos !== undefined && output.instanceInfos !== null
        ? deserializeAws_json1_1InstanceInfoList(output.instanceInfos, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchLimitExceededException = (
  output: any,
  context: __SerdeContext
): BatchLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1BlueGreenDeploymentConfiguration = (
  output: any,
  context: __SerdeContext
): BlueGreenDeploymentConfiguration => {
  return {
    deploymentReadyOption:
      output.deploymentReadyOption !== undefined && output.deploymentReadyOption !== null
        ? deserializeAws_json1_1DeploymentReadyOption(output.deploymentReadyOption, context)
        : undefined,
    greenFleetProvisioningOption:
      output.greenFleetProvisioningOption !== undefined && output.greenFleetProvisioningOption !== null
        ? deserializeAws_json1_1GreenFleetProvisioningOption(output.greenFleetProvisioningOption, context)
        : undefined,
    terminateBlueInstancesOnDeploymentSuccess:
      output.terminateBlueInstancesOnDeploymentSuccess !== undefined &&
      output.terminateBlueInstancesOnDeploymentSuccess !== null
        ? deserializeAws_json1_1BlueInstanceTerminationOption(output.terminateBlueInstancesOnDeploymentSuccess, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BlueInstanceTerminationOption = (
  output: any,
  context: __SerdeContext
): BlueInstanceTerminationOption => {
  return {
    action: __expectString(output.action),
    terminationWaitTimeInMinutes: __expectInt32(output.terminationWaitTimeInMinutes),
  } as any;
};

const deserializeAws_json1_1BucketNameFilterRequiredException = (
  output: any,
  context: __SerdeContext
): BucketNameFilterRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CloudFormationTarget = (output: any, context: __SerdeContext): CloudFormationTarget => {
  return {
    deploymentId: __expectString(output.deploymentId),
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
        ? deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context)
        : undefined,
    resourceType: __expectString(output.resourceType),
    status: __expectString(output.status),
    targetId: __expectString(output.targetId),
    targetVersionWeight: __limitedParseDouble(output.targetVersionWeight),
  } as any;
};

const deserializeAws_json1_1CreateApplicationOutput = (
  output: any,
  context: __SerdeContext
): CreateApplicationOutput => {
  return {
    applicationId: __expectString(output.applicationId),
  } as any;
};

const deserializeAws_json1_1CreateDeploymentConfigOutput = (
  output: any,
  context: __SerdeContext
): CreateDeploymentConfigOutput => {
  return {
    deploymentConfigId: __expectString(output.deploymentConfigId),
  } as any;
};

const deserializeAws_json1_1CreateDeploymentGroupOutput = (
  output: any,
  context: __SerdeContext
): CreateDeploymentGroupOutput => {
  return {
    deploymentGroupId: __expectString(output.deploymentGroupId),
  } as any;
};

const deserializeAws_json1_1CreateDeploymentOutput = (output: any, context: __SerdeContext): CreateDeploymentOutput => {
  return {
    deploymentId: __expectString(output.deploymentId),
  } as any;
};

const deserializeAws_json1_1DeleteDeploymentGroupOutput = (
  output: any,
  context: __SerdeContext
): DeleteDeploymentGroupOutput => {
  return {
    hooksNotCleanedUp:
      output.hooksNotCleanedUp !== undefined && output.hooksNotCleanedUp !== null
        ? deserializeAws_json1_1AutoScalingGroupList(output.hooksNotCleanedUp, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteGitHubAccountTokenOutput = (
  output: any,
  context: __SerdeContext
): DeleteGitHubAccountTokenOutput => {
  return {
    tokenName: __expectString(output.tokenName),
  } as any;
};

const deserializeAws_json1_1DeleteResourcesByExternalIdOutput = (
  output: any,
  context: __SerdeContext
): DeleteResourcesByExternalIdOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeploymentAlreadyCompletedException = (
  output: any,
  context: __SerdeContext
): DeploymentAlreadyCompletedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentConfigAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentConfigDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentConfigInfo = (output: any, context: __SerdeContext): DeploymentConfigInfo => {
  return {
    computePlatform: __expectString(output.computePlatform),
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime)))
        : undefined,
    deploymentConfigId: __expectString(output.deploymentConfigId),
    deploymentConfigName: __expectString(output.deploymentConfigName),
    minimumHealthyHosts:
      output.minimumHealthyHosts !== undefined && output.minimumHealthyHosts !== null
        ? deserializeAws_json1_1MinimumHealthyHosts(output.minimumHealthyHosts, context)
        : undefined,
    trafficRoutingConfig:
      output.trafficRoutingConfig !== undefined && output.trafficRoutingConfig !== null
        ? deserializeAws_json1_1TrafficRoutingConfig(output.trafficRoutingConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeploymentConfigInUseException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentConfigLimitExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentConfigNameRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentConfigsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DeploymentDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentGroupAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentGroupDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentGroupInfo = (output: any, context: __SerdeContext): DeploymentGroupInfo => {
  return {
    alarmConfiguration:
      output.alarmConfiguration !== undefined && output.alarmConfiguration !== null
        ? deserializeAws_json1_1AlarmConfiguration(output.alarmConfiguration, context)
        : undefined,
    applicationName: __expectString(output.applicationName),
    autoRollbackConfiguration:
      output.autoRollbackConfiguration !== undefined && output.autoRollbackConfiguration !== null
        ? deserializeAws_json1_1AutoRollbackConfiguration(output.autoRollbackConfiguration, context)
        : undefined,
    autoScalingGroups:
      output.autoScalingGroups !== undefined && output.autoScalingGroups !== null
        ? deserializeAws_json1_1AutoScalingGroupList(output.autoScalingGroups, context)
        : undefined,
    blueGreenDeploymentConfiguration:
      output.blueGreenDeploymentConfiguration !== undefined && output.blueGreenDeploymentConfiguration !== null
        ? deserializeAws_json1_1BlueGreenDeploymentConfiguration(output.blueGreenDeploymentConfiguration, context)
        : undefined,
    computePlatform: __expectString(output.computePlatform),
    deploymentConfigName: __expectString(output.deploymentConfigName),
    deploymentGroupId: __expectString(output.deploymentGroupId),
    deploymentGroupName: __expectString(output.deploymentGroupName),
    deploymentStyle:
      output.deploymentStyle !== undefined && output.deploymentStyle !== null
        ? deserializeAws_json1_1DeploymentStyle(output.deploymentStyle, context)
        : undefined,
    ec2TagFilters:
      output.ec2TagFilters !== undefined && output.ec2TagFilters !== null
        ? deserializeAws_json1_1EC2TagFilterList(output.ec2TagFilters, context)
        : undefined,
    ec2TagSet:
      output.ec2TagSet !== undefined && output.ec2TagSet !== null
        ? deserializeAws_json1_1EC2TagSet(output.ec2TagSet, context)
        : undefined,
    ecsServices:
      output.ecsServices !== undefined && output.ecsServices !== null
        ? deserializeAws_json1_1ECSServiceList(output.ecsServices, context)
        : undefined,
    lastAttemptedDeployment:
      output.lastAttemptedDeployment !== undefined && output.lastAttemptedDeployment !== null
        ? deserializeAws_json1_1LastDeploymentInfo(output.lastAttemptedDeployment, context)
        : undefined,
    lastSuccessfulDeployment:
      output.lastSuccessfulDeployment !== undefined && output.lastSuccessfulDeployment !== null
        ? deserializeAws_json1_1LastDeploymentInfo(output.lastSuccessfulDeployment, context)
        : undefined,
    loadBalancerInfo:
      output.loadBalancerInfo !== undefined && output.loadBalancerInfo !== null
        ? deserializeAws_json1_1LoadBalancerInfo(output.loadBalancerInfo, context)
        : undefined,
    onPremisesInstanceTagFilters:
      output.onPremisesInstanceTagFilters !== undefined && output.onPremisesInstanceTagFilters !== null
        ? deserializeAws_json1_1TagFilterList(output.onPremisesInstanceTagFilters, context)
        : undefined,
    onPremisesTagSet:
      output.onPremisesTagSet !== undefined && output.onPremisesTagSet !== null
        ? deserializeAws_json1_1OnPremisesTagSet(output.onPremisesTagSet, context)
        : undefined,
    outdatedInstancesStrategy: __expectString(output.outdatedInstancesStrategy),
    serviceRoleArn: __expectString(output.serviceRoleArn),
    targetRevision:
      output.targetRevision !== undefined && output.targetRevision !== null
        ? deserializeAws_json1_1RevisionLocation(output.targetRevision, context)
        : undefined,
    triggerConfigurations:
      output.triggerConfigurations !== undefined && output.triggerConfigurations !== null
        ? deserializeAws_json1_1TriggerConfigList(output.triggerConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeploymentGroupInfoList = (output: any, context: __SerdeContext): DeploymentGroupInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DeploymentGroupInfo(entry, context);
    });
};

const deserializeAws_json1_1DeploymentGroupLimitExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentGroupNameRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentGroupsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DeploymentIdRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentInfo = (output: any, context: __SerdeContext): DeploymentInfo => {
  return {
    additionalDeploymentStatusInfo: __expectString(output.additionalDeploymentStatusInfo),
    applicationName: __expectString(output.applicationName),
    autoRollbackConfiguration:
      output.autoRollbackConfiguration !== undefined && output.autoRollbackConfiguration !== null
        ? deserializeAws_json1_1AutoRollbackConfiguration(output.autoRollbackConfiguration, context)
        : undefined,
    blueGreenDeploymentConfiguration:
      output.blueGreenDeploymentConfiguration !== undefined && output.blueGreenDeploymentConfiguration !== null
        ? deserializeAws_json1_1BlueGreenDeploymentConfiguration(output.blueGreenDeploymentConfiguration, context)
        : undefined,
    completeTime:
      output.completeTime !== undefined && output.completeTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.completeTime)))
        : undefined,
    computePlatform: __expectString(output.computePlatform),
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime)))
        : undefined,
    creator: __expectString(output.creator),
    deploymentConfigName: __expectString(output.deploymentConfigName),
    deploymentGroupName: __expectString(output.deploymentGroupName),
    deploymentId: __expectString(output.deploymentId),
    deploymentOverview:
      output.deploymentOverview !== undefined && output.deploymentOverview !== null
        ? deserializeAws_json1_1DeploymentOverview(output.deploymentOverview, context)
        : undefined,
    deploymentStatusMessages:
      output.deploymentStatusMessages !== undefined && output.deploymentStatusMessages !== null
        ? deserializeAws_json1_1DeploymentStatusMessageList(output.deploymentStatusMessages, context)
        : undefined,
    deploymentStyle:
      output.deploymentStyle !== undefined && output.deploymentStyle !== null
        ? deserializeAws_json1_1DeploymentStyle(output.deploymentStyle, context)
        : undefined,
    description: __expectString(output.description),
    errorInformation:
      output.errorInformation !== undefined && output.errorInformation !== null
        ? deserializeAws_json1_1ErrorInformation(output.errorInformation, context)
        : undefined,
    externalId: __expectString(output.externalId),
    fileExistsBehavior: __expectString(output.fileExistsBehavior),
    ignoreApplicationStopFailures: __expectBoolean(output.ignoreApplicationStopFailures),
    instanceTerminationWaitTimeStarted: __expectBoolean(output.instanceTerminationWaitTimeStarted),
    loadBalancerInfo:
      output.loadBalancerInfo !== undefined && output.loadBalancerInfo !== null
        ? deserializeAws_json1_1LoadBalancerInfo(output.loadBalancerInfo, context)
        : undefined,
    previousRevision:
      output.previousRevision !== undefined && output.previousRevision !== null
        ? deserializeAws_json1_1RevisionLocation(output.previousRevision, context)
        : undefined,
    relatedDeployments:
      output.relatedDeployments !== undefined && output.relatedDeployments !== null
        ? deserializeAws_json1_1RelatedDeployments(output.relatedDeployments, context)
        : undefined,
    revision:
      output.revision !== undefined && output.revision !== null
        ? deserializeAws_json1_1RevisionLocation(output.revision, context)
        : undefined,
    rollbackInfo:
      output.rollbackInfo !== undefined && output.rollbackInfo !== null
        ? deserializeAws_json1_1RollbackInfo(output.rollbackInfo, context)
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime)))
        : undefined,
    status: __expectString(output.status),
    targetInstances:
      output.targetInstances !== undefined && output.targetInstances !== null
        ? deserializeAws_json1_1TargetInstances(output.targetInstances, context)
        : undefined,
    updateOutdatedInstancesOnly: __expectBoolean(output.updateOutdatedInstancesOnly),
  } as any;
};

const deserializeAws_json1_1DeploymentIsNotInReadyStateException = (
  output: any,
  context: __SerdeContext
): DeploymentIsNotInReadyStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentLimitExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentNotStartedException = (
  output: any,
  context: __SerdeContext
): DeploymentNotStartedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentOverview = (output: any, context: __SerdeContext): DeploymentOverview => {
  return {
    Failed: __expectLong(output.Failed),
    InProgress: __expectLong(output.InProgress),
    Pending: __expectLong(output.Pending),
    Ready: __expectLong(output.Ready),
    Skipped: __expectLong(output.Skipped),
    Succeeded: __expectLong(output.Succeeded),
  } as any;
};

const deserializeAws_json1_1DeploymentReadyOption = (output: any, context: __SerdeContext): DeploymentReadyOption => {
  return {
    actionOnTimeout: __expectString(output.actionOnTimeout),
    waitTimeInMinutes: __expectInt32(output.waitTimeInMinutes),
  } as any;
};

const deserializeAws_json1_1DeploymentsInfoList = (output: any, context: __SerdeContext): DeploymentInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DeploymentInfo(entry, context);
    });
};

const deserializeAws_json1_1DeploymentsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DeploymentStatusMessageList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DeploymentStyle = (output: any, context: __SerdeContext): DeploymentStyle => {
  return {
    deploymentOption: __expectString(output.deploymentOption),
    deploymentType: __expectString(output.deploymentType),
  } as any;
};

const deserializeAws_json1_1DeploymentTarget = (output: any, context: __SerdeContext): DeploymentTarget => {
  return {
    cloudFormationTarget:
      output.cloudFormationTarget !== undefined && output.cloudFormationTarget !== null
        ? deserializeAws_json1_1CloudFormationTarget(output.cloudFormationTarget, context)
        : undefined,
    deploymentTargetType: __expectString(output.deploymentTargetType),
    ecsTarget:
      output.ecsTarget !== undefined && output.ecsTarget !== null
        ? deserializeAws_json1_1ECSTarget(output.ecsTarget, context)
        : undefined,
    instanceTarget:
      output.instanceTarget !== undefined && output.instanceTarget !== null
        ? deserializeAws_json1_1InstanceTarget(output.instanceTarget, context)
        : undefined,
    lambdaTarget:
      output.lambdaTarget !== undefined && output.lambdaTarget !== null
        ? deserializeAws_json1_1LambdaTarget(output.lambdaTarget, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeploymentTargetDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentTargetDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentTargetIdRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentTargetIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeploymentTargetList = (output: any, context: __SerdeContext): DeploymentTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DeploymentTarget(entry, context);
    });
};

const deserializeAws_json1_1DeploymentTargetListSizeExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentTargetListSizeExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DescriptionTooLongException = (
  output: any,
  context: __SerdeContext
): DescriptionTooLongException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Diagnostics = (output: any, context: __SerdeContext): Diagnostics => {
  return {
    errorCode: __expectString(output.errorCode),
    logTail: __expectString(output.logTail),
    message: __expectString(output.message),
    scriptName: __expectString(output.scriptName),
  } as any;
};

const deserializeAws_json1_1EC2TagFilter = (output: any, context: __SerdeContext): EC2TagFilter => {
  return {
    Key: __expectString(output.Key),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1EC2TagFilterList = (output: any, context: __SerdeContext): EC2TagFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EC2TagFilter(entry, context);
    });
};

const deserializeAws_json1_1EC2TagSet = (output: any, context: __SerdeContext): EC2TagSet => {
  return {
    ec2TagSetList:
      output.ec2TagSetList !== undefined && output.ec2TagSetList !== null
        ? deserializeAws_json1_1EC2TagSetList(output.ec2TagSetList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EC2TagSetList = (output: any, context: __SerdeContext): EC2TagFilter[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EC2TagFilterList(entry, context);
    });
};

const deserializeAws_json1_1ECSService = (output: any, context: __SerdeContext): ECSService => {
  return {
    clusterName: __expectString(output.clusterName),
    serviceName: __expectString(output.serviceName),
  } as any;
};

const deserializeAws_json1_1ECSServiceList = (output: any, context: __SerdeContext): ECSService[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ECSService(entry, context);
    });
};

const deserializeAws_json1_1ECSServiceMappingLimitExceededException = (
  output: any,
  context: __SerdeContext
): ECSServiceMappingLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ECSTarget = (output: any, context: __SerdeContext): ECSTarget => {
  return {
    deploymentId: __expectString(output.deploymentId),
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
        ? deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context)
        : undefined,
    status: __expectString(output.status),
    targetArn: __expectString(output.targetArn),
    targetId: __expectString(output.targetId),
    taskSetsInfo:
      output.taskSetsInfo !== undefined && output.taskSetsInfo !== null
        ? deserializeAws_json1_1ECSTaskSetList(output.taskSetsInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ECSTaskSet = (output: any, context: __SerdeContext): ECSTaskSet => {
  return {
    desiredCount: __expectLong(output.desiredCount),
    identifer: __expectString(output.identifer),
    pendingCount: __expectLong(output.pendingCount),
    runningCount: __expectLong(output.runningCount),
    status: __expectString(output.status),
    targetGroup:
      output.targetGroup !== undefined && output.targetGroup !== null
        ? deserializeAws_json1_1TargetGroupInfo(output.targetGroup, context)
        : undefined,
    taskSetLabel: __expectString(output.taskSetLabel),
    trafficWeight: __limitedParseDouble(output.trafficWeight),
  } as any;
};

const deserializeAws_json1_1ECSTaskSetList = (output: any, context: __SerdeContext): ECSTaskSet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ECSTaskSet(entry, context);
    });
};

const deserializeAws_json1_1ELBInfo = (output: any, context: __SerdeContext): ELBInfo => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1ELBInfoList = (output: any, context: __SerdeContext): ELBInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ELBInfo(entry, context);
    });
};

const deserializeAws_json1_1ErrorInformation = (output: any, context: __SerdeContext): ErrorInformation => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1GenericRevisionInfo = (output: any, context: __SerdeContext): GenericRevisionInfo => {
  return {
    deploymentGroups:
      output.deploymentGroups !== undefined && output.deploymentGroups !== null
        ? deserializeAws_json1_1DeploymentGroupsList(output.deploymentGroups, context)
        : undefined,
    description: __expectString(output.description),
    firstUsedTime:
      output.firstUsedTime !== undefined && output.firstUsedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.firstUsedTime)))
        : undefined,
    lastUsedTime:
      output.lastUsedTime !== undefined && output.lastUsedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUsedTime)))
        : undefined,
    registerTime:
      output.registerTime !== undefined && output.registerTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.registerTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetApplicationOutput = (output: any, context: __SerdeContext): GetApplicationOutput => {
  return {
    application:
      output.application !== undefined && output.application !== null
        ? deserializeAws_json1_1ApplicationInfo(output.application, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetApplicationRevisionOutput = (
  output: any,
  context: __SerdeContext
): GetApplicationRevisionOutput => {
  return {
    applicationName: __expectString(output.applicationName),
    revision:
      output.revision !== undefined && output.revision !== null
        ? deserializeAws_json1_1RevisionLocation(output.revision, context)
        : undefined,
    revisionInfo:
      output.revisionInfo !== undefined && output.revisionInfo !== null
        ? deserializeAws_json1_1GenericRevisionInfo(output.revisionInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDeploymentConfigOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentConfigOutput => {
  return {
    deploymentConfigInfo:
      output.deploymentConfigInfo !== undefined && output.deploymentConfigInfo !== null
        ? deserializeAws_json1_1DeploymentConfigInfo(output.deploymentConfigInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDeploymentGroupOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentGroupOutput => {
  return {
    deploymentGroupInfo:
      output.deploymentGroupInfo !== undefined && output.deploymentGroupInfo !== null
        ? deserializeAws_json1_1DeploymentGroupInfo(output.deploymentGroupInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDeploymentInstanceOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentInstanceOutput => {
  return {
    instanceSummary:
      output.instanceSummary !== undefined && output.instanceSummary !== null
        ? deserializeAws_json1_1InstanceSummary(output.instanceSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDeploymentOutput = (output: any, context: __SerdeContext): GetDeploymentOutput => {
  return {
    deploymentInfo:
      output.deploymentInfo !== undefined && output.deploymentInfo !== null
        ? deserializeAws_json1_1DeploymentInfo(output.deploymentInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDeploymentTargetOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentTargetOutput => {
  return {
    deploymentTarget:
      output.deploymentTarget !== undefined && output.deploymentTarget !== null
        ? deserializeAws_json1_1DeploymentTarget(output.deploymentTarget, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetOnPremisesInstanceOutput = (
  output: any,
  context: __SerdeContext
): GetOnPremisesInstanceOutput => {
  return {
    instanceInfo:
      output.instanceInfo !== undefined && output.instanceInfo !== null
        ? deserializeAws_json1_1InstanceInfo(output.instanceInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GitHubAccountTokenDoesNotExistException = (
  output: any,
  context: __SerdeContext
): GitHubAccountTokenDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1GitHubAccountTokenNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1GitHubAccountTokenNameRequiredException = (
  output: any,
  context: __SerdeContext
): GitHubAccountTokenNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1GitHubLocation = (output: any, context: __SerdeContext): GitHubLocation => {
  return {
    commitId: __expectString(output.commitId),
    repository: __expectString(output.repository),
  } as any;
};

const deserializeAws_json1_1GreenFleetProvisioningOption = (
  output: any,
  context: __SerdeContext
): GreenFleetProvisioningOption => {
  return {
    action: __expectString(output.action),
  } as any;
};

const deserializeAws_json1_1IamArnRequiredException = (
  output: any,
  context: __SerdeContext
): IamArnRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1IamSessionArnAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): IamSessionArnAlreadyRegisteredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1IamUserArnAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): IamUserArnAlreadyRegisteredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1IamUserArnRequiredException = (
  output: any,
  context: __SerdeContext
): IamUserArnRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InstanceDoesNotExistException = (
  output: any,
  context: __SerdeContext
): InstanceDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InstanceIdRequiredException = (
  output: any,
  context: __SerdeContext
): InstanceIdRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InstanceInfo = (output: any, context: __SerdeContext): InstanceInfo => {
  return {
    deregisterTime:
      output.deregisterTime !== undefined && output.deregisterTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.deregisterTime)))
        : undefined,
    iamSessionArn: __expectString(output.iamSessionArn),
    iamUserArn: __expectString(output.iamUserArn),
    instanceArn: __expectString(output.instanceArn),
    instanceName: __expectString(output.instanceName),
    registerTime:
      output.registerTime !== undefined && output.registerTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.registerTime)))
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceInfoList = (output: any, context: __SerdeContext): InstanceInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceInfo(entry, context);
    });
};

const deserializeAws_json1_1InstanceLimitExceededException = (
  output: any,
  context: __SerdeContext
): InstanceLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InstanceNameAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): InstanceNameAlreadyRegisteredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InstanceNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1InstanceNameRequiredException = (
  output: any,
  context: __SerdeContext
): InstanceNameRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InstanceNotRegisteredException = (
  output: any,
  context: __SerdeContext
): InstanceNotRegisteredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InstancesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1InstanceSummary = (output: any, context: __SerdeContext): InstanceSummary => {
  return {
    deploymentId: __expectString(output.deploymentId),
    instanceId: __expectString(output.instanceId),
    instanceType: __expectString(output.instanceType),
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
        ? deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1InstanceSummaryList = (output: any, context: __SerdeContext): InstanceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceSummary(entry, context);
    });
};

const deserializeAws_json1_1InstanceTarget = (output: any, context: __SerdeContext): InstanceTarget => {
  return {
    deploymentId: __expectString(output.deploymentId),
    instanceLabel: __expectString(output.instanceLabel),
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
        ? deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context)
        : undefined,
    status: __expectString(output.status),
    targetArn: __expectString(output.targetArn),
    targetId: __expectString(output.targetId),
  } as any;
};

const deserializeAws_json1_1InvalidAlarmConfigException = (
  output: any,
  context: __SerdeContext
): InvalidAlarmConfigException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidApplicationNameException = (
  output: any,
  context: __SerdeContext
): InvalidApplicationNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidArnException = (output: any, context: __SerdeContext): InvalidArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidAutoRollbackConfigException = (
  output: any,
  context: __SerdeContext
): InvalidAutoRollbackConfigException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidAutoScalingGroupException = (
  output: any,
  context: __SerdeContext
): InvalidAutoScalingGroupException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidBlueGreenDeploymentConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidBucketNameFilterException = (
  output: any,
  context: __SerdeContext
): InvalidBucketNameFilterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidComputePlatformException = (
  output: any,
  context: __SerdeContext
): InvalidComputePlatformException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDeployedStateFilterException = (
  output: any,
  context: __SerdeContext
): InvalidDeployedStateFilterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentConfigNameException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentConfigNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentGroupNameException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentGroupNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentIdException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentInstanceTypeException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentInstanceTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentStatusException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentStyleException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentStyleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentTargetIdException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentTargetIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentWaitTypeException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentWaitTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidEC2TagCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidEC2TagCombinationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidEC2TagException = (output: any, context: __SerdeContext): InvalidEC2TagException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidECSServiceException = (
  output: any,
  context: __SerdeContext
): InvalidECSServiceException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidExternalIdException = (
  output: any,
  context: __SerdeContext
): InvalidExternalIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidFileExistsBehaviorException = (
  output: any,
  context: __SerdeContext
): InvalidFileExistsBehaviorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidGitHubAccountTokenException = (
  output: any,
  context: __SerdeContext
): InvalidGitHubAccountTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidGitHubAccountTokenNameException = (
  output: any,
  context: __SerdeContext
): InvalidGitHubAccountTokenNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidIamSessionArnException = (
  output: any,
  context: __SerdeContext
): InvalidIamSessionArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidIamUserArnException = (
  output: any,
  context: __SerdeContext
): InvalidIamUserArnException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException = (
  output: any,
  context: __SerdeContext
): InvalidIgnoreApplicationStopFailuresValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidInstanceNameException = (
  output: any,
  context: __SerdeContext
): InvalidInstanceNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidInstanceStatusException = (
  output: any,
  context: __SerdeContext
): InvalidInstanceStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidInstanceTypeException = (
  output: any,
  context: __SerdeContext
): InvalidInstanceTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidKeyPrefixFilterException = (
  output: any,
  context: __SerdeContext
): InvalidKeyPrefixFilterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException = (
  output: any,
  context: __SerdeContext
): InvalidLifecycleEventHookExecutionIdException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException = (
  output: any,
  context: __SerdeContext
): InvalidLifecycleEventHookExecutionStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidLoadBalancerInfoException = (
  output: any,
  context: __SerdeContext
): InvalidLoadBalancerInfoException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidMinimumHealthyHostValueException = (
  output: any,
  context: __SerdeContext
): InvalidMinimumHealthyHostValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidOnPremisesTagCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidOnPremisesTagCombinationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRegistrationStatusException = (
  output: any,
  context: __SerdeContext
): InvalidRegistrationStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRevisionException = (
  output: any,
  context: __SerdeContext
): InvalidRevisionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRoleException = (output: any, context: __SerdeContext): InvalidRoleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidSortByException = (output: any, context: __SerdeContext): InvalidSortByException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidSortOrderException = (
  output: any,
  context: __SerdeContext
): InvalidSortOrderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTagException = (output: any, context: __SerdeContext): InvalidTagException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTagFilterException = (
  output: any,
  context: __SerdeContext
): InvalidTagFilterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTagsToAddException = (
  output: any,
  context: __SerdeContext
): InvalidTagsToAddException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTargetFilterNameException = (
  output: any,
  context: __SerdeContext
): InvalidTargetFilterNameException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTargetGroupPairException = (
  output: any,
  context: __SerdeContext
): InvalidTargetGroupPairException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTargetInstancesException = (
  output: any,
  context: __SerdeContext
): InvalidTargetInstancesException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTimeRangeException = (
  output: any,
  context: __SerdeContext
): InvalidTimeRangeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTrafficRoutingConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidTrafficRoutingConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTriggerConfigException = (
  output: any,
  context: __SerdeContext
): InvalidTriggerConfigException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException = (
  output: any,
  context: __SerdeContext
): InvalidUpdateOutdatedInstancesOnlyValueException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LambdaFunctionInfo = (output: any, context: __SerdeContext): LambdaFunctionInfo => {
  return {
    currentVersion: __expectString(output.currentVersion),
    functionAlias: __expectString(output.functionAlias),
    functionName: __expectString(output.functionName),
    targetVersion: __expectString(output.targetVersion),
    targetVersionWeight: __limitedParseDouble(output.targetVersionWeight),
  } as any;
};

const deserializeAws_json1_1LambdaTarget = (output: any, context: __SerdeContext): LambdaTarget => {
  return {
    deploymentId: __expectString(output.deploymentId),
    lambdaFunctionInfo:
      output.lambdaFunctionInfo !== undefined && output.lambdaFunctionInfo !== null
        ? deserializeAws_json1_1LambdaFunctionInfo(output.lambdaFunctionInfo, context)
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
        ? deserializeAws_json1_1LifecycleEventList(output.lifecycleEvents, context)
        : undefined,
    status: __expectString(output.status),
    targetArn: __expectString(output.targetArn),
    targetId: __expectString(output.targetId),
  } as any;
};

const deserializeAws_json1_1LastDeploymentInfo = (output: any, context: __SerdeContext): LastDeploymentInfo => {
  return {
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createTime)))
        : undefined,
    deploymentId: __expectString(output.deploymentId),
    endTime:
      output.endTime !== undefined && output.endTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1LifecycleEvent = (output: any, context: __SerdeContext): LifecycleEvent => {
  return {
    diagnostics:
      output.diagnostics !== undefined && output.diagnostics !== null
        ? deserializeAws_json1_1Diagnostics(output.diagnostics, context)
        : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime)))
        : undefined,
    lifecycleEventName: __expectString(output.lifecycleEventName),
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1LifecycleEventAlreadyCompletedException = (
  output: any,
  context: __SerdeContext
): LifecycleEventAlreadyCompletedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LifecycleEventList = (output: any, context: __SerdeContext): LifecycleEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LifecycleEvent(entry, context);
    });
};

const deserializeAws_json1_1LifecycleHookLimitExceededException = (
  output: any,
  context: __SerdeContext
): LifecycleHookLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListApplicationRevisionsOutput = (
  output: any,
  context: __SerdeContext
): ListApplicationRevisionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    revisions:
      output.revisions !== undefined && output.revisions !== null
        ? deserializeAws_json1_1RevisionLocationList(output.revisions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListApplicationsOutput = (output: any, context: __SerdeContext): ListApplicationsOutput => {
  return {
    applications:
      output.applications !== undefined && output.applications !== null
        ? deserializeAws_json1_1ApplicationsList(output.applications, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDeploymentConfigsOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentConfigsOutput => {
  return {
    deploymentConfigsList:
      output.deploymentConfigsList !== undefined && output.deploymentConfigsList !== null
        ? deserializeAws_json1_1DeploymentConfigsList(output.deploymentConfigsList, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDeploymentGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentGroupsOutput => {
  return {
    applicationName: __expectString(output.applicationName),
    deploymentGroups:
      output.deploymentGroups !== undefined && output.deploymentGroups !== null
        ? deserializeAws_json1_1DeploymentGroupsList(output.deploymentGroups, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDeploymentInstancesOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentInstancesOutput => {
  return {
    instancesList:
      output.instancesList !== undefined && output.instancesList !== null
        ? deserializeAws_json1_1InstancesList(output.instancesList, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDeploymentsOutput = (output: any, context: __SerdeContext): ListDeploymentsOutput => {
  return {
    deployments:
      output.deployments !== undefined && output.deployments !== null
        ? deserializeAws_json1_1DeploymentsList(output.deployments, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDeploymentTargetsOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentTargetsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    targetIds:
      output.targetIds !== undefined && output.targetIds !== null
        ? deserializeAws_json1_1TargetIdList(output.targetIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListenerArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ListGitHubAccountTokenNamesOutput = (
  output: any,
  context: __SerdeContext
): ListGitHubAccountTokenNamesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    tokenNameList:
      output.tokenNameList !== undefined && output.tokenNameList !== null
        ? deserializeAws_json1_1GitHubAccountTokenNameList(output.tokenNameList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListOnPremisesInstancesOutput = (
  output: any,
  context: __SerdeContext
): ListOnPremisesInstancesOutput => {
  return {
    instanceNames:
      output.instanceNames !== undefined && output.instanceNames !== null
        ? deserializeAws_json1_1InstanceNameList(output.instanceNames, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LoadBalancerInfo = (output: any, context: __SerdeContext): LoadBalancerInfo => {
  return {
    elbInfoList:
      output.elbInfoList !== undefined && output.elbInfoList !== null
        ? deserializeAws_json1_1ELBInfoList(output.elbInfoList, context)
        : undefined,
    targetGroupInfoList:
      output.targetGroupInfoList !== undefined && output.targetGroupInfoList !== null
        ? deserializeAws_json1_1TargetGroupInfoList(output.targetGroupInfoList, context)
        : undefined,
    targetGroupPairInfoList:
      output.targetGroupPairInfoList !== undefined && output.targetGroupPairInfoList !== null
        ? deserializeAws_json1_1TargetGroupPairInfoList(output.targetGroupPairInfoList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MinimumHealthyHosts = (output: any, context: __SerdeContext): MinimumHealthyHosts => {
  return {
    type: __expectString(output.type),
    value: __expectInt32(output.value),
  } as any;
};

const deserializeAws_json1_1MultipleIamArnsProvidedException = (
  output: any,
  context: __SerdeContext
): MultipleIamArnsProvidedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OnPremisesTagSet = (output: any, context: __SerdeContext): OnPremisesTagSet => {
  return {
    onPremisesTagSetList:
      output.onPremisesTagSetList !== undefined && output.onPremisesTagSetList !== null
        ? deserializeAws_json1_1OnPremisesTagSetList(output.onPremisesTagSetList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OnPremisesTagSetList = (output: any, context: __SerdeContext): TagFilter[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TagFilterList(entry, context);
    });
};

const deserializeAws_json1_1OperationNotSupportedException = (
  output: any,
  context: __SerdeContext
): OperationNotSupportedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PutLifecycleEventHookExecutionStatusOutput = (
  output: any,
  context: __SerdeContext
): PutLifecycleEventHookExecutionStatusOutput => {
  return {
    lifecycleEventHookExecutionId: __expectString(output.lifecycleEventHookExecutionId),
  } as any;
};

const deserializeAws_json1_1RawString = (output: any, context: __SerdeContext): RawString => {
  return {
    content: __expectString(output.content),
    sha256: __expectString(output.sha256),
  } as any;
};

const deserializeAws_json1_1RelatedDeployments = (output: any, context: __SerdeContext): RelatedDeployments => {
  return {
    autoUpdateOutdatedInstancesDeploymentIds:
      output.autoUpdateOutdatedInstancesDeploymentIds !== undefined &&
      output.autoUpdateOutdatedInstancesDeploymentIds !== null
        ? deserializeAws_json1_1DeploymentsList(output.autoUpdateOutdatedInstancesDeploymentIds, context)
        : undefined,
    autoUpdateOutdatedInstancesRootDeploymentId: __expectString(output.autoUpdateOutdatedInstancesRootDeploymentId),
  } as any;
};

const deserializeAws_json1_1ResourceArnRequiredException = (
  output: any,
  context: __SerdeContext
): ResourceArnRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceValidationException = (
  output: any,
  context: __SerdeContext
): ResourceValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RevisionDoesNotExistException = (
  output: any,
  context: __SerdeContext
): RevisionDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RevisionInfo = (output: any, context: __SerdeContext): RevisionInfo => {
  return {
    genericRevisionInfo:
      output.genericRevisionInfo !== undefined && output.genericRevisionInfo !== null
        ? deserializeAws_json1_1GenericRevisionInfo(output.genericRevisionInfo, context)
        : undefined,
    revisionLocation:
      output.revisionLocation !== undefined && output.revisionLocation !== null
        ? deserializeAws_json1_1RevisionLocation(output.revisionLocation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RevisionInfoList = (output: any, context: __SerdeContext): RevisionInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RevisionInfo(entry, context);
    });
};

const deserializeAws_json1_1RevisionLocation = (output: any, context: __SerdeContext): RevisionLocation => {
  return {
    appSpecContent:
      output.appSpecContent !== undefined && output.appSpecContent !== null
        ? deserializeAws_json1_1AppSpecContent(output.appSpecContent, context)
        : undefined,
    gitHubLocation:
      output.gitHubLocation !== undefined && output.gitHubLocation !== null
        ? deserializeAws_json1_1GitHubLocation(output.gitHubLocation, context)
        : undefined,
    revisionType: __expectString(output.revisionType),
    s3Location:
      output.s3Location !== undefined && output.s3Location !== null
        ? deserializeAws_json1_1S3Location(output.s3Location, context)
        : undefined,
    string:
      output.string !== undefined && output.string !== null
        ? deserializeAws_json1_1RawString(output.string, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RevisionLocationList = (output: any, context: __SerdeContext): RevisionLocation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RevisionLocation(entry, context);
    });
};

const deserializeAws_json1_1RevisionRequiredException = (
  output: any,
  context: __SerdeContext
): RevisionRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RoleRequiredException = (output: any, context: __SerdeContext): RoleRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RollbackInfo = (output: any, context: __SerdeContext): RollbackInfo => {
  return {
    rollbackDeploymentId: __expectString(output.rollbackDeploymentId),
    rollbackMessage: __expectString(output.rollbackMessage),
    rollbackTriggeringDeploymentId: __expectString(output.rollbackTriggeringDeploymentId),
  } as any;
};

const deserializeAws_json1_1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    bucket: __expectString(output.bucket),
    bundleType: __expectString(output.bundleType),
    eTag: __expectString(output.eTag),
    key: __expectString(output.key),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_json1_1StopDeploymentOutput = (output: any, context: __SerdeContext): StopDeploymentOutput => {
  return {
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagFilter = (output: any, context: __SerdeContext): TagFilter => {
  return {
    Key: __expectString(output.Key),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagFilterList = (output: any, context: __SerdeContext): TagFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TagFilter(entry, context);
    });
};

const deserializeAws_json1_1TagLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagRequiredException = (output: any, context: __SerdeContext): TagRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_1TagSetListLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagSetListLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TargetGroupInfo = (output: any, context: __SerdeContext): TargetGroupInfo => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1TargetGroupInfoList = (output: any, context: __SerdeContext): TargetGroupInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TargetGroupInfo(entry, context);
    });
};

const deserializeAws_json1_1TargetGroupPairInfo = (output: any, context: __SerdeContext): TargetGroupPairInfo => {
  return {
    prodTrafficRoute:
      output.prodTrafficRoute !== undefined && output.prodTrafficRoute !== null
        ? deserializeAws_json1_1TrafficRoute(output.prodTrafficRoute, context)
        : undefined,
    targetGroups:
      output.targetGroups !== undefined && output.targetGroups !== null
        ? deserializeAws_json1_1TargetGroupInfoList(output.targetGroups, context)
        : undefined,
    testTrafficRoute:
      output.testTrafficRoute !== undefined && output.testTrafficRoute !== null
        ? deserializeAws_json1_1TrafficRoute(output.testTrafficRoute, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TargetGroupPairInfoList = (output: any, context: __SerdeContext): TargetGroupPairInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TargetGroupPairInfo(entry, context);
    });
};

const deserializeAws_json1_1TargetIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1TargetInstances = (output: any, context: __SerdeContext): TargetInstances => {
  return {
    autoScalingGroups:
      output.autoScalingGroups !== undefined && output.autoScalingGroups !== null
        ? deserializeAws_json1_1AutoScalingGroupNameList(output.autoScalingGroups, context)
        : undefined,
    ec2TagSet:
      output.ec2TagSet !== undefined && output.ec2TagSet !== null
        ? deserializeAws_json1_1EC2TagSet(output.ec2TagSet, context)
        : undefined,
    tagFilters:
      output.tagFilters !== undefined && output.tagFilters !== null
        ? deserializeAws_json1_1EC2TagFilterList(output.tagFilters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TimeBasedCanary = (output: any, context: __SerdeContext): TimeBasedCanary => {
  return {
    canaryInterval: __expectInt32(output.canaryInterval),
    canaryPercentage: __expectInt32(output.canaryPercentage),
  } as any;
};

const deserializeAws_json1_1TimeBasedLinear = (output: any, context: __SerdeContext): TimeBasedLinear => {
  return {
    linearInterval: __expectInt32(output.linearInterval),
    linearPercentage: __expectInt32(output.linearPercentage),
  } as any;
};

const deserializeAws_json1_1TrafficRoute = (output: any, context: __SerdeContext): TrafficRoute => {
  return {
    listenerArns:
      output.listenerArns !== undefined && output.listenerArns !== null
        ? deserializeAws_json1_1ListenerArnList(output.listenerArns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TrafficRoutingConfig = (output: any, context: __SerdeContext): TrafficRoutingConfig => {
  return {
    timeBasedCanary:
      output.timeBasedCanary !== undefined && output.timeBasedCanary !== null
        ? deserializeAws_json1_1TimeBasedCanary(output.timeBasedCanary, context)
        : undefined,
    timeBasedLinear:
      output.timeBasedLinear !== undefined && output.timeBasedLinear !== null
        ? deserializeAws_json1_1TimeBasedLinear(output.timeBasedLinear, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1TriggerConfig = (output: any, context: __SerdeContext): TriggerConfig => {
  return {
    triggerEvents:
      output.triggerEvents !== undefined && output.triggerEvents !== null
        ? deserializeAws_json1_1TriggerEventTypeList(output.triggerEvents, context)
        : undefined,
    triggerName: __expectString(output.triggerName),
    triggerTargetArn: __expectString(output.triggerTargetArn),
  } as any;
};

const deserializeAws_json1_1TriggerConfigList = (output: any, context: __SerdeContext): TriggerConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TriggerConfig(entry, context);
    });
};

const deserializeAws_json1_1TriggerEventTypeList = (
  output: any,
  context: __SerdeContext
): (TriggerEventType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1TriggerTargetsLimitExceededException = (
  output: any,
  context: __SerdeContext
): TriggerTargetsLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UnsupportedActionForDeploymentTypeException = (
  output: any,
  context: __SerdeContext
): UnsupportedActionForDeploymentTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDeploymentGroupOutput = (
  output: any,
  context: __SerdeContext
): UpdateDeploymentGroupOutput => {
  return {
    hooksNotCleanedUp:
      output.hooksNotCleanedUp !== undefined && output.hooksNotCleanedUp !== null
        ? deserializeAws_json1_1AutoScalingGroupList(output.hooksNotCleanedUp, context)
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
