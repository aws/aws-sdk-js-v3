import {
  AddTagsToOnPremisesInstancesCommandInput,
  AddTagsToOnPremisesInstancesCommandOutput
} from "../commands/AddTagsToOnPremisesInstancesCommand";
import {
  BatchGetApplicationRevisionsCommandInput,
  BatchGetApplicationRevisionsCommandOutput
} from "../commands/BatchGetApplicationRevisionsCommand";
import {
  BatchGetApplicationsCommandInput,
  BatchGetApplicationsCommandOutput
} from "../commands/BatchGetApplicationsCommand";
import {
  BatchGetDeploymentGroupsCommandInput,
  BatchGetDeploymentGroupsCommandOutput
} from "../commands/BatchGetDeploymentGroupsCommand";
import {
  BatchGetDeploymentInstancesCommandInput,
  BatchGetDeploymentInstancesCommandOutput
} from "../commands/BatchGetDeploymentInstancesCommand";
import {
  BatchGetDeploymentTargetsCommandInput,
  BatchGetDeploymentTargetsCommandOutput
} from "../commands/BatchGetDeploymentTargetsCommand";
import {
  BatchGetDeploymentsCommandInput,
  BatchGetDeploymentsCommandOutput
} from "../commands/BatchGetDeploymentsCommand";
import {
  BatchGetOnPremisesInstancesCommandInput,
  BatchGetOnPremisesInstancesCommandOutput
} from "../commands/BatchGetOnPremisesInstancesCommand";
import {
  ContinueDeploymentCommandInput,
  ContinueDeploymentCommandOutput
} from "../commands/ContinueDeploymentCommand";
import {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput
} from "../commands/CreateApplicationCommand";
import {
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput
} from "../commands/CreateDeploymentCommand";
import {
  CreateDeploymentConfigCommandInput,
  CreateDeploymentConfigCommandOutput
} from "../commands/CreateDeploymentConfigCommand";
import {
  CreateDeploymentGroupCommandInput,
  CreateDeploymentGroupCommandOutput
} from "../commands/CreateDeploymentGroupCommand";
import {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput
} from "../commands/DeleteApplicationCommand";
import {
  DeleteDeploymentConfigCommandInput,
  DeleteDeploymentConfigCommandOutput
} from "../commands/DeleteDeploymentConfigCommand";
import {
  DeleteDeploymentGroupCommandInput,
  DeleteDeploymentGroupCommandOutput
} from "../commands/DeleteDeploymentGroupCommand";
import {
  DeleteGitHubAccountTokenCommandInput,
  DeleteGitHubAccountTokenCommandOutput
} from "../commands/DeleteGitHubAccountTokenCommand";
import {
  DeregisterOnPremisesInstanceCommandInput,
  DeregisterOnPremisesInstanceCommandOutput
} from "../commands/DeregisterOnPremisesInstanceCommand";
import {
  GetApplicationCommandInput,
  GetApplicationCommandOutput
} from "../commands/GetApplicationCommand";
import {
  GetApplicationRevisionCommandInput,
  GetApplicationRevisionCommandOutput
} from "../commands/GetApplicationRevisionCommand";
import {
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput
} from "../commands/GetDeploymentCommand";
import {
  GetDeploymentConfigCommandInput,
  GetDeploymentConfigCommandOutput
} from "../commands/GetDeploymentConfigCommand";
import {
  GetDeploymentGroupCommandInput,
  GetDeploymentGroupCommandOutput
} from "../commands/GetDeploymentGroupCommand";
import {
  GetDeploymentInstanceCommandInput,
  GetDeploymentInstanceCommandOutput
} from "../commands/GetDeploymentInstanceCommand";
import {
  GetDeploymentTargetCommandInput,
  GetDeploymentTargetCommandOutput
} from "../commands/GetDeploymentTargetCommand";
import {
  GetOnPremisesInstanceCommandInput,
  GetOnPremisesInstanceCommandOutput
} from "../commands/GetOnPremisesInstanceCommand";
import {
  ListApplicationRevisionsCommandInput,
  ListApplicationRevisionsCommandOutput
} from "../commands/ListApplicationRevisionsCommand";
import {
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
} from "../commands/ListApplicationsCommand";
import {
  ListDeploymentConfigsCommandInput,
  ListDeploymentConfigsCommandOutput
} from "../commands/ListDeploymentConfigsCommand";
import {
  ListDeploymentGroupsCommandInput,
  ListDeploymentGroupsCommandOutput
} from "../commands/ListDeploymentGroupsCommand";
import {
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput
} from "../commands/ListDeploymentInstancesCommand";
import {
  ListDeploymentTargetsCommandInput,
  ListDeploymentTargetsCommandOutput
} from "../commands/ListDeploymentTargetsCommand";
import {
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput
} from "../commands/ListDeploymentsCommand";
import {
  ListGitHubAccountTokenNamesCommandInput,
  ListGitHubAccountTokenNamesCommandOutput
} from "../commands/ListGitHubAccountTokenNamesCommand";
import {
  ListOnPremisesInstancesCommandInput,
  ListOnPremisesInstancesCommandOutput
} from "../commands/ListOnPremisesInstancesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PutLifecycleEventHookExecutionStatusCommandInput,
  PutLifecycleEventHookExecutionStatusCommandOutput
} from "../commands/PutLifecycleEventHookExecutionStatusCommand";
import {
  RegisterApplicationRevisionCommandInput,
  RegisterApplicationRevisionCommandOutput
} from "../commands/RegisterApplicationRevisionCommand";
import {
  RegisterOnPremisesInstanceCommandInput,
  RegisterOnPremisesInstanceCommandOutput
} from "../commands/RegisterOnPremisesInstanceCommand";
import {
  RemoveTagsFromOnPremisesInstancesCommandInput,
  RemoveTagsFromOnPremisesInstancesCommandOutput
} from "../commands/RemoveTagsFromOnPremisesInstancesCommand";
import {
  SkipWaitTimeForInstanceTerminationCommandInput,
  SkipWaitTimeForInstanceTerminationCommandOutput
} from "../commands/SkipWaitTimeForInstanceTerminationCommand";
import {
  StopDeploymentCommandInput,
  StopDeploymentCommandOutput
} from "../commands/StopDeploymentCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput
} from "../commands/UpdateApplicationCommand";
import {
  UpdateDeploymentGroupCommandInput,
  UpdateDeploymentGroupCommandOutput
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
  _InstanceType
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1AddTagsToOnPremisesInstancesCommand = async (
  input: AddTagsToOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.AddTagsToOnPremisesInstances"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddTagsToOnPremisesInstancesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetApplicationRevisionsCommand = async (
  input: BatchGetApplicationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.BatchGetApplicationRevisions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetApplicationRevisionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetApplicationsCommand = async (
  input: BatchGetApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.BatchGetApplications"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetApplicationsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetDeploymentGroupsCommand = async (
  input: BatchGetDeploymentGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.BatchGetDeploymentGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetDeploymentGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetDeploymentInstancesCommand = async (
  input: BatchGetDeploymentInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.BatchGetDeploymentInstances"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetDeploymentInstancesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetDeploymentsCommand = async (
  input: BatchGetDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.BatchGetDeployments"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetDeploymentsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetDeploymentTargetsCommand = async (
  input: BatchGetDeploymentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.BatchGetDeploymentTargets"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetDeploymentTargetsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetOnPremisesInstancesCommand = async (
  input: BatchGetOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.BatchGetOnPremisesInstances"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetOnPremisesInstancesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ContinueDeploymentCommand = async (
  input: ContinueDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.ContinueDeployment"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ContinueDeploymentInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.CreateApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateApplicationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.CreateDeployment"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDeploymentInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDeploymentConfigCommand = async (
  input: CreateDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.CreateDeploymentConfig"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDeploymentConfigInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDeploymentGroupCommand = async (
  input: CreateDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.CreateDeploymentGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDeploymentGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.DeleteApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDeploymentConfigCommand = async (
  input: DeleteDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.DeleteDeploymentConfig"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDeploymentConfigInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDeploymentGroupCommand = async (
  input: DeleteDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.DeleteDeploymentGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDeploymentGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGitHubAccountTokenCommand = async (
  input: DeleteGitHubAccountTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.DeleteGitHubAccountToken"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteGitHubAccountTokenInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterOnPremisesInstanceCommand = async (
  input: DeregisterOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.DeregisterOnPremisesInstance"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterOnPremisesInstanceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.GetApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetApplicationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetApplicationRevisionCommand = async (
  input: GetApplicationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.GetApplicationRevision"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetApplicationRevisionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeploymentCommand = async (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.GetDeployment"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.GetDeploymentConfig"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDeploymentConfigInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeploymentGroupCommand = async (
  input: GetDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.GetDeploymentGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDeploymentGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeploymentInstanceCommand = async (
  input: GetDeploymentInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.GetDeploymentInstance"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDeploymentInstanceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeploymentTargetCommand = async (
  input: GetDeploymentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.GetDeploymentTarget"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDeploymentTargetInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOnPremisesInstanceCommand = async (
  input: GetOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.GetOnPremisesInstance"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetOnPremisesInstanceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationRevisionsCommand = async (
  input: ListApplicationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.ListApplicationRevisions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListApplicationRevisionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.ListApplications"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListApplicationsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeploymentConfigsCommand = async (
  input: ListDeploymentConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.ListDeploymentConfigs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDeploymentConfigsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeploymentGroupsCommand = async (
  input: ListDeploymentGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.ListDeploymentGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDeploymentGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeploymentInstancesCommand = async (
  input: ListDeploymentInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.ListDeploymentInstances"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDeploymentInstancesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeploymentsCommand = async (
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.ListDeployments"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDeploymentsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeploymentTargetsCommand = async (
  input: ListDeploymentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.ListDeploymentTargets"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDeploymentTargetsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGitHubAccountTokenNamesCommand = async (
  input: ListGitHubAccountTokenNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.ListGitHubAccountTokenNames"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListGitHubAccountTokenNamesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOnPremisesInstancesCommand = async (
  input: ListOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.ListOnPremisesInstances"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListOnPremisesInstancesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand = async (
  input: PutLifecycleEventHookExecutionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterApplicationRevisionCommand = async (
  input: RegisterApplicationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.RegisterApplicationRevision"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterApplicationRevisionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterOnPremisesInstanceCommand = async (
  input: RegisterOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.RegisterOnPremisesInstance"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterOnPremisesInstanceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand = async (
  input: RemoveTagsFromOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand = async (
  input: SkipWaitTimeForInstanceTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.SkipWaitTimeForInstanceTermination"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopDeploymentCommand = async (
  input: StopDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.StopDeployment"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopDeploymentInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.TagResource"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.UntagResource"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.UpdateApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateApplicationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDeploymentGroupCommand = async (
  input: UpdateDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CodeDeploy_20141006.UpdateDeploymentGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDeploymentGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToOnPremisesInstancesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: AddTagsToOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToOnPremisesInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InstanceLimitExceededException":
    case "com.amazonaws.codedeploy#InstanceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1InstanceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceNotRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.codedeploy#TagLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TagLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      response = {
        ...(await deserializeAws_json1_1TagRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetApplicationRevisionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetApplicationRevisionsOutput(
    data,
    context
  );
  const response: BatchGetApplicationRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetApplicationRevisionsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetApplicationRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetApplicationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetApplicationsOutput(data, context);
  const response: BatchGetApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetApplicationsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetDeploymentGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetDeploymentGroupsOutput(
    data,
    context
  );
  const response: BatchGetDeploymentGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetDeploymentGroupsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetDeploymentGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetDeploymentInstancesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetDeploymentInstancesOutput(
    data,
    context
  );
  const response: BatchGetDeploymentInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetDeploymentInstancesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetDeploymentInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceIdRequiredException":
    case "com.amazonaws.codedeploy#InstanceIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = {
        ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetDeploymentsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetDeploymentsOutput(data, context);
  const response: BatchGetDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetDeploymentsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetDeploymentTargetsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetDeploymentTargetsOutput(
    data,
    context
  );
  const response: BatchGetDeploymentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetDeploymentTargetsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetDeploymentTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentTargetDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentTargetIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentTargetListSizeExceededException":
    case "com.amazonaws.codedeploy#DeploymentTargetListSizeExceededException":
      response = {
        ...(await deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentTargetIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetOnPremisesInstancesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetOnPremisesInstancesOutput(
    data,
    context
  );
  const response: BatchGetOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetOnPremisesInstancesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetOnPremisesInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetOnPremisesInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1BatchLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ContinueDeploymentCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: ContinueDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ContinueDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentAlreadyCompletedException":
    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIsNotInReadyStateException":
    case "com.amazonaws.codedeploy#DeploymentIsNotInReadyStateException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentStatusException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentWaitTypeException":
    case "com.amazonaws.codedeploy#InvalidDeploymentWaitTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApplicationOutput(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateApplicationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationAlreadyExistsException":
    case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationLimitExceededException":
    case "com.amazonaws.codedeploy#ApplicationLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ApplicationLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = {
        ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDeploymentOutput(data, context);
  const response: CreateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDeploymentOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentLimitExceededException":
    case "com.amazonaws.codedeploy#DeploymentLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1DeploymentLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DescriptionTooLongException":
    case "com.amazonaws.codedeploy#DescriptionTooLongException":
      response = {
        ...(await deserializeAws_json1_1DescriptionTooLongExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAutoRollbackConfigException":
    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAutoScalingGroupException":
    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
      response = {
        ...(await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidFileExistsBehaviorException":
    case "com.amazonaws.codedeploy#InvalidFileExistsBehaviorException":
      response = {
        ...(await deserializeAws_json1_1InvalidFileExistsBehaviorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGitHubAccountTokenException":
    case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidGitHubAccountTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLoadBalancerInfoException":
    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
      response = {
        ...(await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTargetInstancesException":
    case "com.amazonaws.codedeploy#InvalidTargetInstancesException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetInstancesExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RevisionDoesNotExistException":
    case "com.amazonaws.codedeploy#RevisionDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RevisionDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codedeploy#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDeploymentConfigCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDeploymentConfigOutput(data, context);
  const response: CreateDeploymentConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDeploymentConfigOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDeploymentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentConfigAlreadyExistsException":
    case "com.amazonaws.codedeploy#DeploymentConfigAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentConfigLimitExceededException":
    case "com.amazonaws.codedeploy#DeploymentConfigLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentConfigNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = {
        ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidMinimumHealthyHostValueException":
    case "com.amazonaws.codedeploy#InvalidMinimumHealthyHostValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTrafficRoutingConfigurationException":
    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDeploymentGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDeploymentGroupOutput(data, context);
  const response: CreateDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDeploymentGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDeploymentGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AlarmsLimitExceededException":
    case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1AlarmsLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupAlreadyExistsException":
    case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupLimitExceededException":
    case "com.amazonaws.codedeploy#DeploymentGroupLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ECSServiceMappingLimitExceededException":
    case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAlarmConfigException":
    case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidAlarmConfigExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAutoRollbackConfigException":
    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAutoScalingGroupException":
    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
      response = {
        ...(await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentStyleException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStyleException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEC2TagCombinationException":
    case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEC2TagException":
    case "com.amazonaws.codedeploy#InvalidEC2TagException":
      response = {
        ...(await deserializeAws_json1_1InvalidEC2TagExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidECSServiceException":
    case "com.amazonaws.codedeploy#InvalidECSServiceException":
      response = {
        ...(await deserializeAws_json1_1InvalidECSServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.codedeploy#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLoadBalancerInfoException":
    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
      response = {
        ...(await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOnPremisesTagCombinationException":
    case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTargetGroupPairException":
    case "com.amazonaws.codedeploy#InvalidTargetGroupPairException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTriggerConfigException":
    case "com.amazonaws.codedeploy#InvalidTriggerConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidTriggerConfigExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LifecycleHookLimitExceededException":
    case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RoleRequiredException":
    case "com.amazonaws.codedeploy#RoleRequiredException":
      response = {
        ...(await deserializeAws_json1_1RoleRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagSetListLimitExceededException":
    case "com.amazonaws.codedeploy#TagSetListLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TagSetListLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codedeploy#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TriggerTargetsLimitExceededException":
    case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDeploymentConfigCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteDeploymentConfigCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDeploymentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentConfigInUseException":
    case "com.amazonaws.codedeploy#DeploymentConfigInUseException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentConfigNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.codedeploy#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDeploymentGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDeploymentGroupOutput(data, context);
  const response: DeleteDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDeploymentGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDeploymentGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteGitHubAccountTokenCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGitHubAccountTokenOutput(
    data,
    context
  );
  const response: DeleteGitHubAccountTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteGitHubAccountTokenOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGitHubAccountTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGitHubAccountTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "GitHubAccountTokenDoesNotExistException":
    case "com.amazonaws.codedeploy#GitHubAccountTokenDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GitHubAccountTokenNameRequiredException":
    case "com.amazonaws.codedeploy#GitHubAccountTokenNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidGitHubAccountTokenNameException":
    case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.codedeploy#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceValidationException":
    case "com.amazonaws.codedeploy#ResourceValidationException":
      response = {
        ...(await deserializeAws_json1_1ResourceValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeregisterOnPremisesInstanceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOnPremisesInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetApplicationOutput(data, context);
  const response: GetApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApplicationOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetApplicationRevisionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetApplicationRevisionOutput(data, context);
  const response: GetApplicationRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApplicationRevisionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetApplicationRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RevisionDoesNotExistException":
    case "com.amazonaws.codedeploy#RevisionDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1RevisionDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeploymentOutput(data, context);
  const response: GetDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDeploymentOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDeploymentConfigCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeploymentConfigOutput(data, context);
  const response: GetDeploymentConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDeploymentConfigOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeploymentConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentConfigNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = {
        ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDeploymentGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeploymentGroupOutput(data, context);
  const response: GetDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDeploymentGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeploymentGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDeploymentInstanceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeploymentInstanceOutput(data, context);
  const response: GetDeploymentInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDeploymentInstanceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeploymentInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceDoesNotExistException":
    case "com.amazonaws.codedeploy#InstanceDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1InstanceDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceIdRequiredException":
    case "com.amazonaws.codedeploy#InstanceIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = {
        ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDeploymentTargetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeploymentTargetOutput(data, context);
  const response: GetDeploymentTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDeploymentTargetOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeploymentTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentTargetDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentTargetIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentTargetIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOnPremisesInstanceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOnPremisesInstanceOutput(data, context);
  const response: GetOnPremisesInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOnPremisesInstanceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOnPremisesInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOnPremisesInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceNotRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListApplicationRevisionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationRevisionsOutput(
    data,
    context
  );
  const response: ListApplicationRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListApplicationRevisionsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BucketNameFilterRequiredException":
    case "com.amazonaws.codedeploy#BucketNameFilterRequiredException":
      response = {
        ...(await deserializeAws_json1_1BucketNameFilterRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidBucketNameFilterException":
    case "com.amazonaws.codedeploy#InvalidBucketNameFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidBucketNameFilterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeployedStateFilterException":
    case "com.amazonaws.codedeploy#InvalidDeployedStateFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeployedStateFilterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKeyPrefixFilterException":
    case "com.amazonaws.codedeploy#InvalidKeyPrefixFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidKeyPrefixFilterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSortByException":
    case "com.amazonaws.codedeploy#InvalidSortByException":
      response = {
        ...(await deserializeAws_json1_1InvalidSortByExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSortOrderException":
    case "com.amazonaws.codedeploy#InvalidSortOrderException":
      response = {
        ...(await deserializeAws_json1_1InvalidSortOrderExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationsOutput(data, context);
  const response: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListApplicationsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDeploymentConfigsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeploymentConfigsOutput(data, context);
  const response: ListDeploymentConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeploymentConfigsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeploymentConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDeploymentGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeploymentGroupsOutput(data, context);
  const response: ListDeploymentGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeploymentGroupsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeploymentGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDeploymentInstancesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeploymentInstancesOutput(data, context);
  const response: ListDeploymentInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeploymentInstancesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeploymentInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = {
        ...(await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceStatusException":
    case "com.amazonaws.codedeploy#InvalidInstanceStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidInstanceTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTargetFilterNameException":
    case "com.amazonaws.codedeploy#InvalidTargetFilterNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetFilterNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDeploymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeploymentsOutput(data, context);
  const response: ListDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeploymentsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentStatusException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTimeRangeException":
    case "com.amazonaws.codedeploy#InvalidTimeRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDeploymentTargetsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeploymentTargetsOutput(data, context);
  const response: ListDeploymentTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeploymentTargetsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeploymentTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceStatusException":
    case "com.amazonaws.codedeploy#InvalidInstanceStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidInstanceTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListGitHubAccountTokenNamesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGitHubAccountTokenNamesOutput(
    data,
    context
  );
  const response: ListGitHubAccountTokenNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGitHubAccountTokenNamesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGitHubAccountTokenNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGitHubAccountTokenNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.codedeploy#OperationNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceValidationException":
    case "com.amazonaws.codedeploy#ResourceValidationException":
      response = {
        ...(await deserializeAws_json1_1ResourceValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListOnPremisesInstancesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOnPremisesInstancesOutput(data, context);
  const response: ListOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOnPremisesInstancesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOnPremisesInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOnPremisesInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRegistrationStatusException":
    case "com.amazonaws.codedeploy#InvalidRegistrationStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidRegistrationStatusExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagFilterException":
    case "com.amazonaws.codedeploy#InvalidTagFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagFilterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArnNotSupportedException":
    case "com.amazonaws.codedeploy#ArnNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1ArnNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.codedeploy#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceArnRequiredException":
    case "com.amazonaws.codedeploy#ResourceArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutLifecycleEventHookExecutionStatusOutput(
    data,
    context
  );
  const response: PutLifecycleEventHookExecutionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutLifecycleEventHookExecutionStatusOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleEventHookExecutionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLifecycleEventHookExecutionIdException":
    case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LifecycleEventAlreadyCompletedException":
    case "com.amazonaws.codedeploy#LifecycleEventAlreadyCompletedException":
      response = {
        ...(await deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterApplicationRevisionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RegisterApplicationRevisionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterApplicationRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterApplicationRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DescriptionTooLongException":
    case "com.amazonaws.codedeploy#DescriptionTooLongException":
      response = {
        ...(await deserializeAws_json1_1DescriptionTooLongExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      response = {
        ...(await deserializeAws_json1_1InvalidRevisionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      response = {
        ...(await deserializeAws_json1_1RevisionRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterOnPremisesInstanceCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RegisterOnPremisesInstanceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterOnPremisesInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOnPremisesInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IamArnRequiredException":
    case "com.amazonaws.codedeploy#IamArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1IamArnRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IamSessionArnAlreadyRegisteredException":
    case "com.amazonaws.codedeploy#IamSessionArnAlreadyRegisteredException":
      response = {
        ...(await deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IamUserArnAlreadyRegisteredException":
    case "com.amazonaws.codedeploy#IamUserArnAlreadyRegisteredException":
      response = {
        ...(await deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IamUserArnRequiredException":
    case "com.amazonaws.codedeploy#IamUserArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1IamUserArnRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceNameAlreadyRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNameAlreadyRegisteredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidIamSessionArnException":
    case "com.amazonaws.codedeploy#InvalidIamSessionArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidIamSessionArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidIamUserArnException":
    case "com.amazonaws.codedeploy#InvalidIamUserArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidIamUserArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MultipleIamArnsProvidedException":
    case "com.amazonaws.codedeploy#MultipleIamArnsProvidedException":
      response = {
        ...(await deserializeAws_json1_1MultipleIamArnsProvidedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RemoveTagsFromOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InstanceLimitExceededException":
    case "com.amazonaws.codedeploy#InstanceLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1InstanceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InstanceNotRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
      response = {
        ...(await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.codedeploy#TagLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TagLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      response = {
        ...(await deserializeAws_json1_1TagRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: SkipWaitTimeForInstanceTerminationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SkipWaitTimeForInstanceTerminationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentAlreadyCompletedException":
    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopDeploymentOutput(data, context);
  const response: StopDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopDeploymentOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentAlreadyCompletedException":
    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
      response = {
        ...(await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ArnNotSupportedException":
    case "com.amazonaws.codedeploy#ArnNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1ArnNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.codedeploy#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceArnRequiredException":
    case "com.amazonaws.codedeploy#ResourceArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      response = {
        ...(await deserializeAws_json1_1TagRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ArnNotSupportedException":
    case "com.amazonaws.codedeploy#ArnNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1ArnNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.codedeploy#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceArnRequiredException":
    case "com.amazonaws.codedeploy#ResourceArnRequiredException":
      response = {
        ...(await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      response = {
        ...(await deserializeAws_json1_1TagRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationAlreadyExistsException":
    case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDeploymentGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDeploymentGroupOutput(data, context);
  const response: UpdateDeploymentGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDeploymentGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDeploymentGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AlarmsLimitExceededException":
    case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1AlarmsLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupAlreadyExistsException":
    case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = {
        ...(await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ECSServiceMappingLimitExceededException":
    case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAlarmConfigException":
    case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidAlarmConfigExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAutoRollbackConfigException":
    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidAutoScalingGroupException":
    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
      response = {
        ...(await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeploymentStyleException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStyleException":
      response = {
        ...(await deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEC2TagCombinationException":
    case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEC2TagException":
    case "com.amazonaws.codedeploy#InvalidEC2TagException":
      response = {
        ...(await deserializeAws_json1_1InvalidEC2TagExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidECSServiceException":
    case "com.amazonaws.codedeploy#InvalidECSServiceException":
      response = {
        ...(await deserializeAws_json1_1InvalidECSServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.codedeploy#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLoadBalancerInfoException":
    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
      response = {
        ...(await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOnPremisesTagCombinationException":
    case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = {
        ...(await deserializeAws_json1_1InvalidRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTargetGroupPairException":
    case "com.amazonaws.codedeploy#InvalidTargetGroupPairException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTriggerConfigException":
    case "com.amazonaws.codedeploy#InvalidTriggerConfigException":
      response = {
        ...(await deserializeAws_json1_1InvalidTriggerConfigExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LifecycleHookLimitExceededException":
    case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagSetListLimitExceededException":
    case "com.amazonaws.codedeploy#TagSetListLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TagSetListLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codedeploy#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TriggerTargetsLimitExceededException":
    case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_json1_1AlarmsLimitExceededException(
    body,
    context
  );
  const contents: AlarmsLimitExceededException = {
    name: "AlarmsLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApplicationAlreadyExistsException(
    body,
    context
  );
  const contents: ApplicationAlreadyExistsException = {
    name: "ApplicationAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApplicationDoesNotExistException(
    body,
    context
  );
  const contents: ApplicationDoesNotExistException = {
    name: "ApplicationDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ApplicationLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApplicationLimitExceededException(
    body,
    context
  );
  const contents: ApplicationLimitExceededException = {
    name: "ApplicationLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ApplicationNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApplicationNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ApplicationNameRequiredException(
    body,
    context
  );
  const contents: ApplicationNameRequiredException = {
    name: "ApplicationNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ArnNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ArnNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ArnNotSupportedException(
    body,
    context
  );
  const contents: ArnNotSupportedException = {
    name: "ArnNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1BatchLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BatchLimitExceededException(
    body,
    context
  );
  const contents: BatchLimitExceededException = {
    name: "BatchLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1BucketNameFilterRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BucketNameFilterRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BucketNameFilterRequiredException(
    body,
    context
  );
  const contents: BucketNameFilterRequiredException = {
    name: "BucketNameFilterRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentAlreadyCompletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentAlreadyCompletedException(
    body,
    context
  );
  const contents: DeploymentAlreadyCompletedException = {
    name: "DeploymentAlreadyCompletedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentConfigAlreadyExistsException(
    body,
    context
  );
  const contents: DeploymentConfigAlreadyExistsException = {
    name: "DeploymentConfigAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentConfigDoesNotExistException(
    body,
    context
  );
  const contents: DeploymentConfigDoesNotExistException = {
    name: "DeploymentConfigDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentConfigInUseException(
    body,
    context
  );
  const contents: DeploymentConfigInUseException = {
    name: "DeploymentConfigInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentConfigLimitExceededException(
    body,
    context
  );
  const contents: DeploymentConfigLimitExceededException = {
    name: "DeploymentConfigLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentConfigNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentConfigNameRequiredException(
    body,
    context
  );
  const contents: DeploymentConfigNameRequiredException = {
    name: "DeploymentConfigNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentDoesNotExistException(
    body,
    context
  );
  const contents: DeploymentDoesNotExistException = {
    name: "DeploymentDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentGroupAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentGroupAlreadyExistsException(
    body,
    context
  );
  const contents: DeploymentGroupAlreadyExistsException = {
    name: "DeploymentGroupAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentGroupDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentGroupDoesNotExistException(
    body,
    context
  );
  const contents: DeploymentGroupDoesNotExistException = {
    name: "DeploymentGroupDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentGroupLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentGroupLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentGroupLimitExceededException(
    body,
    context
  );
  const contents: DeploymentGroupLimitExceededException = {
    name: "DeploymentGroupLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentGroupNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentGroupNameRequiredException(
    body,
    context
  );
  const contents: DeploymentGroupNameRequiredException = {
    name: "DeploymentGroupNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentIdRequiredException(
    body,
    context
  );
  const contents: DeploymentIdRequiredException = {
    name: "DeploymentIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentIsNotInReadyStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentIsNotInReadyStateException(
    body,
    context
  );
  const contents: DeploymentIsNotInReadyStateException = {
    name: "DeploymentIsNotInReadyStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentLimitExceededException(
    body,
    context
  );
  const contents: DeploymentLimitExceededException = {
    name: "DeploymentLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentNotStartedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentNotStartedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentNotStartedException(
    body,
    context
  );
  const contents: DeploymentNotStartedException = {
    name: "DeploymentNotStartedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentTargetDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentTargetDoesNotExistException(
    body,
    context
  );
  const contents: DeploymentTargetDoesNotExistException = {
    name: "DeploymentTargetDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentTargetIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentTargetIdRequiredException(
    body,
    context
  );
  const contents: DeploymentTargetIdRequiredException = {
    name: "DeploymentTargetIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeploymentTargetListSizeExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeploymentTargetListSizeExceededException(
    body,
    context
  );
  const contents: DeploymentTargetListSizeExceededException = {
    name: "DeploymentTargetListSizeExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DescriptionTooLongExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DescriptionTooLongException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DescriptionTooLongException(
    body,
    context
  );
  const contents: DescriptionTooLongException = {
    name: "DescriptionTooLongException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ECSServiceMappingLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ECSServiceMappingLimitExceededException(
    body,
    context
  );
  const contents: ECSServiceMappingLimitExceededException = {
    name: "ECSServiceMappingLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GitHubAccountTokenDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1GitHubAccountTokenDoesNotExistException(
    body,
    context
  );
  const contents: GitHubAccountTokenDoesNotExistException = {
    name: "GitHubAccountTokenDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GitHubAccountTokenNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1GitHubAccountTokenNameRequiredException(
    body,
    context
  );
  const contents: GitHubAccountTokenNameRequiredException = {
    name: "GitHubAccountTokenNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IamArnRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IamArnRequiredException(
    body,
    context
  );
  const contents: IamArnRequiredException = {
    name: "IamArnRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamSessionArnAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IamSessionArnAlreadyRegisteredException(
    body,
    context
  );
  const contents: IamSessionArnAlreadyRegisteredException = {
    name: "IamSessionArnAlreadyRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamUserArnAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IamUserArnAlreadyRegisteredException(
    body,
    context
  );
  const contents: IamUserArnAlreadyRegisteredException = {
    name: "IamUserArnAlreadyRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IamUserArnRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IamUserArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IamUserArnRequiredException(
    body,
    context
  );
  const contents: IamUserArnRequiredException = {
    name: "IamUserArnRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceDoesNotExistException(
    body,
    context
  );
  const contents: InstanceDoesNotExistException = {
    name: "InstanceDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceIdRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceIdRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceIdRequiredException(
    body,
    context
  );
  const contents: InstanceIdRequiredException = {
    name: "InstanceIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceLimitExceededException(
    body,
    context
  );
  const contents: InstanceLimitExceededException = {
    name: "InstanceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceNameAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceNameAlreadyRegisteredException(
    body,
    context
  );
  const contents: InstanceNameAlreadyRegisteredException = {
    name: "InstanceNameAlreadyRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceNameRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceNameRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceNameRequiredException(
    body,
    context
  );
  const contents: InstanceNameRequiredException = {
    name: "InstanceNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceNotRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceNotRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceNotRegisteredException(
    body,
    context
  );
  const contents: InstanceNotRegisteredException = {
    name: "InstanceNotRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidAlarmConfigExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAlarmConfigException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAlarmConfigException(
    body,
    context
  );
  const contents: InvalidAlarmConfigException = {
    name: "InvalidAlarmConfigException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidApplicationNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApplicationNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApplicationNameException(
    body,
    context
  );
  const contents: InvalidApplicationNameException = {
    name: "InvalidApplicationNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArnException(
    body,
    context
  );
  const contents: InvalidArnException = {
    name: "InvalidArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAutoRollbackConfigException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAutoRollbackConfigException(
    body,
    context
  );
  const contents: InvalidAutoRollbackConfigException = {
    name: "InvalidAutoRollbackConfigException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAutoScalingGroupException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAutoScalingGroupException(
    body,
    context
  );
  const contents: InvalidAutoScalingGroupException = {
    name: "InvalidAutoScalingGroupException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBlueGreenDeploymentConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException(
    body,
    context
  );
  const contents: InvalidBlueGreenDeploymentConfigurationException = {
    name: "InvalidBlueGreenDeploymentConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidBucketNameFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBucketNameFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidBucketNameFilterException(
    body,
    context
  );
  const contents: InvalidBucketNameFilterException = {
    name: "InvalidBucketNameFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidComputePlatformExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidComputePlatformException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidComputePlatformException(
    body,
    context
  );
  const contents: InvalidComputePlatformException = {
    name: "InvalidComputePlatformException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeployedStateFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeployedStateFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeployedStateFilterException(
    body,
    context
  );
  const contents: InvalidDeployedStateFilterException = {
    name: "InvalidDeployedStateFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentConfigNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentConfigNameException(
    body,
    context
  );
  const contents: InvalidDeploymentConfigNameException = {
    name: "InvalidDeploymentConfigNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentGroupNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentGroupNameException(
    body,
    context
  );
  const contents: InvalidDeploymentGroupNameException = {
    name: "InvalidDeploymentGroupNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentIdException(
    body,
    context
  );
  const contents: InvalidDeploymentIdException = {
    name: "InvalidDeploymentIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentInstanceTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentInstanceTypeException(
    body,
    context
  );
  const contents: InvalidDeploymentInstanceTypeException = {
    name: "InvalidDeploymentInstanceTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentStatusException(
    body,
    context
  );
  const contents: InvalidDeploymentStatusException = {
    name: "InvalidDeploymentStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentStyleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentStyleException(
    body,
    context
  );
  const contents: InvalidDeploymentStyleException = {
    name: "InvalidDeploymentStyleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentTargetIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentTargetIdException(
    body,
    context
  );
  const contents: InvalidDeploymentTargetIdException = {
    name: "InvalidDeploymentTargetIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeploymentWaitTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentWaitTypeException(
    body,
    context
  );
  const contents: InvalidDeploymentWaitTypeException = {
    name: "InvalidDeploymentWaitTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEC2TagCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEC2TagCombinationException(
    body,
    context
  );
  const contents: InvalidEC2TagCombinationException = {
    name: "InvalidEC2TagCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEC2TagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEC2TagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEC2TagException(
    body,
    context
  );
  const contents: InvalidEC2TagException = {
    name: "InvalidEC2TagException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidECSServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidECSServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidECSServiceException(
    body,
    context
  );
  const contents: InvalidECSServiceException = {
    name: "InvalidECSServiceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidFileExistsBehaviorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFileExistsBehaviorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFileExistsBehaviorException(
    body,
    context
  );
  const contents: InvalidFileExistsBehaviorException = {
    name: "InvalidFileExistsBehaviorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidGitHubAccountTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGitHubAccountTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGitHubAccountTokenException(
    body,
    context
  );
  const contents: InvalidGitHubAccountTokenException = {
    name: "InvalidGitHubAccountTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidGitHubAccountTokenNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidGitHubAccountTokenNameException(
    body,
    context
  );
  const contents: InvalidGitHubAccountTokenNameException = {
    name: "InvalidGitHubAccountTokenNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidIamSessionArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIamSessionArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidIamSessionArnException(
    body,
    context
  );
  const contents: InvalidIamSessionArnException = {
    name: "InvalidIamSessionArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidIamUserArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIamUserArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidIamUserArnException(
    body,
    context
  );
  const contents: InvalidIamUserArnException = {
    name: "InvalidIamUserArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIgnoreApplicationStopFailuresValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException(
    body,
    context
  );
  const contents: InvalidIgnoreApplicationStopFailuresValueException = {
    name: "InvalidIgnoreApplicationStopFailuresValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    body,
    context
  );
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInstanceNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInstanceNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInstanceNameException(
    body,
    context
  );
  const contents: InvalidInstanceNameException = {
    name: "InvalidInstanceNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInstanceStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInstanceStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInstanceStatusException(
    body,
    context
  );
  const contents: InvalidInstanceStatusException = {
    name: "InvalidInstanceStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInstanceTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInstanceTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInstanceTypeException(
    body,
    context
  );
  const contents: InvalidInstanceTypeException = {
    name: "InvalidInstanceTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidKeyPrefixFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKeyPrefixFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKeyPrefixFilterException(
    body,
    context
  );
  const contents: InvalidKeyPrefixFilterException = {
    name: "InvalidKeyPrefixFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLifecycleEventHookExecutionIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException(
    body,
    context
  );
  const contents: InvalidLifecycleEventHookExecutionIdException = {
    name: "InvalidLifecycleEventHookExecutionIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLifecycleEventHookExecutionStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException(
    body,
    context
  );
  const contents: InvalidLifecycleEventHookExecutionStatusException = {
    name: "InvalidLifecycleEventHookExecutionStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLoadBalancerInfoException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLoadBalancerInfoException(
    body,
    context
  );
  const contents: InvalidLoadBalancerInfoException = {
    name: "InvalidLoadBalancerInfoException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMinimumHealthyHostValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMinimumHealthyHostValueException(
    body,
    context
  );
  const contents: InvalidMinimumHealthyHostValueException = {
    name: "InvalidMinimumHealthyHostValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    body,
    context
  );
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOnPremisesTagCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOnPremisesTagCombinationException(
    body,
    context
  );
  const contents: InvalidOnPremisesTagCombinationException = {
    name: "InvalidOnPremisesTagCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOperationException(
    body,
    context
  );
  const contents: InvalidOperationException = {
    name: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRegistrationStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRegistrationStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRegistrationStatusException(
    body,
    context
  );
  const contents: InvalidRegistrationStatusException = {
    name: "InvalidRegistrationStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRevisionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRevisionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRevisionException(
    body,
    context
  );
  const contents: InvalidRevisionException = {
    name: "InvalidRevisionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRoleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRoleException(
    body,
    context
  );
  const contents: InvalidRoleException = {
    name: "InvalidRoleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidSortByExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSortByException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSortByException(
    body,
    context
  );
  const contents: InvalidSortByException = {
    name: "InvalidSortByException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidSortOrderExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSortOrderException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSortOrderException(
    body,
    context
  );
  const contents: InvalidSortOrderException = {
    name: "InvalidSortOrderException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagException(
    body,
    context
  );
  const contents: InvalidTagException = {
    name: "InvalidTagException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagFilterException(
    body,
    context
  );
  const contents: InvalidTagFilterException = {
    name: "InvalidTagFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagsToAddExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagsToAddException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagsToAddException(
    body,
    context
  );
  const contents: InvalidTagsToAddException = {
    name: "InvalidTagsToAddException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetFilterNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetFilterNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetFilterNameException(
    body,
    context
  );
  const contents: InvalidTargetFilterNameException = {
    name: "InvalidTargetFilterNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetGroupPairException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetGroupPairException(
    body,
    context
  );
  const contents: InvalidTargetGroupPairException = {
    name: "InvalidTargetGroupPairException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetInstancesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetInstancesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetInstancesException(
    body,
    context
  );
  const contents: InvalidTargetInstancesException = {
    name: "InvalidTargetInstancesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTimeRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTimeRangeException(
    body,
    context
  );
  const contents: InvalidTimeRangeException = {
    name: "InvalidTimeRangeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTrafficRoutingConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTrafficRoutingConfigurationException(
    body,
    context
  );
  const contents: InvalidTrafficRoutingConfigurationException = {
    name: "InvalidTrafficRoutingConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTriggerConfigExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTriggerConfigException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTriggerConfigException(
    body,
    context
  );
  const contents: InvalidTriggerConfigException = {
    name: "InvalidTriggerConfigException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUpdateOutdatedInstancesOnlyValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException(
    body,
    context
  );
  const contents: InvalidUpdateOutdatedInstancesOnlyValueException = {
    name: "InvalidUpdateOutdatedInstancesOnlyValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecycleEventAlreadyCompletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecycleEventAlreadyCompletedException(
    body,
    context
  );
  const contents: LifecycleEventAlreadyCompletedException = {
    name: "LifecycleEventAlreadyCompletedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LifecycleHookLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LifecycleHookLimitExceededException(
    body,
    context
  );
  const contents: LifecycleHookLimitExceededException = {
    name: "LifecycleHookLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MultipleIamArnsProvidedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MultipleIamArnsProvidedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MultipleIamArnsProvidedException(
    body,
    context
  );
  const contents: MultipleIamArnsProvidedException = {
    name: "MultipleIamArnsProvidedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotSupportedException(
    body,
    context
  );
  const contents: OperationNotSupportedException = {
    name: "OperationNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceArnRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceArnRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceArnRequiredException(
    body,
    context
  );
  const contents: ResourceArnRequiredException = {
    name: "ResourceArnRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceValidationException(
    body,
    context
  );
  const contents: ResourceValidationException = {
    name: "ResourceValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RevisionDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevisionDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RevisionDoesNotExistException(
    body,
    context
  );
  const contents: RevisionDoesNotExistException = {
    name: "RevisionDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RevisionRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RevisionRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RevisionRequiredException(
    body,
    context
  );
  const contents: RevisionRequiredException = {
    name: "RevisionRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RoleRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RoleRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RoleRequiredException(
    body,
    context
  );
  const contents: RoleRequiredException = {
    name: "RoleRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagLimitExceededException(
    body,
    context
  );
  const contents: TagLimitExceededException = {
    name: "TagLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagRequiredException(
    body,
    context
  );
  const contents: TagRequiredException = {
    name: "TagRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagSetListLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagSetListLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagSetListLimitExceededException(
    body,
    context
  );
  const contents: TagSetListLimitExceededException = {
    name: "TagSetListLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    body,
    context
  );
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TriggerTargetsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TriggerTargetsLimitExceededException(
    body,
    context
  );
  const contents: TriggerTargetsLimitExceededException = {
    name: "TriggerTargetsLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedActionForDeploymentTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedActionForDeploymentTypeException(
    body,
    context
  );
  const contents: UnsupportedActionForDeploymentTypeException = {
    name: "UnsupportedActionForDeploymentTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AddTagsToOnPremisesInstancesInput = (
  input: AddTagsToOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames !== undefined && {
      instanceNames: serializeAws_json1_1InstanceNameList(
        input.instanceNames,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    })
  };
};

const serializeAws_json1_1Alarm = (
  input: Alarm,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1AlarmConfiguration = (
  input: AlarmConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.alarms !== undefined && {
      alarms: serializeAws_json1_1AlarmList(input.alarms, context)
    }),
    ...(input.enabled !== undefined && { enabled: input.enabled }),
    ...(input.ignorePollAlarmFailure !== undefined && {
      ignorePollAlarmFailure: input.ignorePollAlarmFailure
    })
  };
};

const serializeAws_json1_1AlarmList = (
  input: Alarm[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Alarm(entry, context));
};

const serializeAws_json1_1ApplicationsList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1AppSpecContent = (
  input: AppSpecContent,
  context: __SerdeContext
): any => {
  return {
    ...(input.content !== undefined && { content: input.content }),
    ...(input.sha256 !== undefined && { sha256: input.sha256 })
  };
};

const serializeAws_json1_1AutoRollbackConfiguration = (
  input: AutoRollbackConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.enabled !== undefined && { enabled: input.enabled }),
    ...(input.events !== undefined && {
      events: serializeAws_json1_1AutoRollbackEventsList(input.events, context)
    })
  };
};

const serializeAws_json1_1AutoRollbackEventsList = (
  input: (AutoRollbackEvent | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1AutoScalingGroupNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1BatchGetApplicationRevisionsInput = (
  input: BatchGetApplicationRevisionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.revisions !== undefined && {
      revisions: serializeAws_json1_1RevisionLocationList(
        input.revisions,
        context
      )
    })
  };
};

const serializeAws_json1_1BatchGetApplicationsInput = (
  input: BatchGetApplicationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationNames !== undefined && {
      applicationNames: serializeAws_json1_1ApplicationsList(
        input.applicationNames,
        context
      )
    })
  };
};

const serializeAws_json1_1BatchGetDeploymentGroupsInput = (
  input: BatchGetDeploymentGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.deploymentGroupNames !== undefined && {
      deploymentGroupNames: serializeAws_json1_1DeploymentGroupsList(
        input.deploymentGroupNames,
        context
      )
    })
  };
};

const serializeAws_json1_1BatchGetDeploymentInstancesInput = (
  input: BatchGetDeploymentInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && {
      deploymentId: input.deploymentId
    }),
    ...(input.instanceIds !== undefined && {
      instanceIds: serializeAws_json1_1InstancesList(input.instanceIds, context)
    })
  };
};

const serializeAws_json1_1BatchGetDeploymentsInput = (
  input: BatchGetDeploymentsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentIds !== undefined && {
      deploymentIds: serializeAws_json1_1DeploymentsList(
        input.deploymentIds,
        context
      )
    })
  };
};

const serializeAws_json1_1BatchGetDeploymentTargetsInput = (
  input: BatchGetDeploymentTargetsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && {
      deploymentId: input.deploymentId
    }),
    ...(input.targetIds !== undefined && {
      targetIds: serializeAws_json1_1TargetIdList(input.targetIds, context)
    })
  };
};

const serializeAws_json1_1BatchGetOnPremisesInstancesInput = (
  input: BatchGetOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames !== undefined && {
      instanceNames: serializeAws_json1_1InstanceNameList(
        input.instanceNames,
        context
      )
    })
  };
};

const serializeAws_json1_1BlueGreenDeploymentConfiguration = (
  input: BlueGreenDeploymentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentReadyOption !== undefined && {
      deploymentReadyOption: serializeAws_json1_1DeploymentReadyOption(
        input.deploymentReadyOption,
        context
      )
    }),
    ...(input.greenFleetProvisioningOption !== undefined && {
      greenFleetProvisioningOption: serializeAws_json1_1GreenFleetProvisioningOption(
        input.greenFleetProvisioningOption,
        context
      )
    }),
    ...(input.terminateBlueInstancesOnDeploymentSuccess !== undefined && {
      terminateBlueInstancesOnDeploymentSuccess: serializeAws_json1_1BlueInstanceTerminationOption(
        input.terminateBlueInstancesOnDeploymentSuccess,
        context
      )
    })
  };
};

const serializeAws_json1_1BlueInstanceTerminationOption = (
  input: BlueInstanceTerminationOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.action !== undefined && { action: input.action }),
    ...(input.terminationWaitTimeInMinutes !== undefined && {
      terminationWaitTimeInMinutes: input.terminationWaitTimeInMinutes
    })
  };
};

const serializeAws_json1_1ContinueDeploymentInput = (
  input: ContinueDeploymentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && {
      deploymentId: input.deploymentId
    }),
    ...(input.deploymentWaitType !== undefined && {
      deploymentWaitType: input.deploymentWaitType
    })
  };
};

const serializeAws_json1_1CreateApplicationInput = (
  input: CreateApplicationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.computePlatform !== undefined && {
      computePlatform: input.computePlatform
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    })
  };
};

const serializeAws_json1_1CreateDeploymentConfigInput = (
  input: CreateDeploymentConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.computePlatform !== undefined && {
      computePlatform: input.computePlatform
    }),
    ...(input.deploymentConfigName !== undefined && {
      deploymentConfigName: input.deploymentConfigName
    }),
    ...(input.minimumHealthyHosts !== undefined && {
      minimumHealthyHosts: serializeAws_json1_1MinimumHealthyHosts(
        input.minimumHealthyHosts,
        context
      )
    }),
    ...(input.trafficRoutingConfig !== undefined && {
      trafficRoutingConfig: serializeAws_json1_1TrafficRoutingConfig(
        input.trafficRoutingConfig,
        context
      )
    })
  };
};

const serializeAws_json1_1CreateDeploymentGroupInput = (
  input: CreateDeploymentGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.alarmConfiguration !== undefined && {
      alarmConfiguration: serializeAws_json1_1AlarmConfiguration(
        input.alarmConfiguration,
        context
      )
    }),
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.autoRollbackConfiguration !== undefined && {
      autoRollbackConfiguration: serializeAws_json1_1AutoRollbackConfiguration(
        input.autoRollbackConfiguration,
        context
      )
    }),
    ...(input.autoScalingGroups !== undefined && {
      autoScalingGroups: serializeAws_json1_1AutoScalingGroupNameList(
        input.autoScalingGroups,
        context
      )
    }),
    ...(input.blueGreenDeploymentConfiguration !== undefined && {
      blueGreenDeploymentConfiguration: serializeAws_json1_1BlueGreenDeploymentConfiguration(
        input.blueGreenDeploymentConfiguration,
        context
      )
    }),
    ...(input.deploymentConfigName !== undefined && {
      deploymentConfigName: input.deploymentConfigName
    }),
    ...(input.deploymentGroupName !== undefined && {
      deploymentGroupName: input.deploymentGroupName
    }),
    ...(input.deploymentStyle !== undefined && {
      deploymentStyle: serializeAws_json1_1DeploymentStyle(
        input.deploymentStyle,
        context
      )
    }),
    ...(input.ec2TagFilters !== undefined && {
      ec2TagFilters: serializeAws_json1_1EC2TagFilterList(
        input.ec2TagFilters,
        context
      )
    }),
    ...(input.ec2TagSet !== undefined && {
      ec2TagSet: serializeAws_json1_1EC2TagSet(input.ec2TagSet, context)
    }),
    ...(input.ecsServices !== undefined && {
      ecsServices: serializeAws_json1_1ECSServiceList(
        input.ecsServices,
        context
      )
    }),
    ...(input.loadBalancerInfo !== undefined && {
      loadBalancerInfo: serializeAws_json1_1LoadBalancerInfo(
        input.loadBalancerInfo,
        context
      )
    }),
    ...(input.onPremisesInstanceTagFilters !== undefined && {
      onPremisesInstanceTagFilters: serializeAws_json1_1TagFilterList(
        input.onPremisesInstanceTagFilters,
        context
      )
    }),
    ...(input.onPremisesTagSet !== undefined && {
      onPremisesTagSet: serializeAws_json1_1OnPremisesTagSet(
        input.onPremisesTagSet,
        context
      )
    }),
    ...(input.serviceRoleArn !== undefined && {
      serviceRoleArn: input.serviceRoleArn
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    }),
    ...(input.triggerConfigurations !== undefined && {
      triggerConfigurations: serializeAws_json1_1TriggerConfigList(
        input.triggerConfigurations,
        context
      )
    })
  };
};

const serializeAws_json1_1CreateDeploymentInput = (
  input: CreateDeploymentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.autoRollbackConfiguration !== undefined && {
      autoRollbackConfiguration: serializeAws_json1_1AutoRollbackConfiguration(
        input.autoRollbackConfiguration,
        context
      )
    }),
    ...(input.deploymentConfigName !== undefined && {
      deploymentConfigName: input.deploymentConfigName
    }),
    ...(input.deploymentGroupName !== undefined && {
      deploymentGroupName: input.deploymentGroupName
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.fileExistsBehavior !== undefined && {
      fileExistsBehavior: input.fileExistsBehavior
    }),
    ...(input.ignoreApplicationStopFailures !== undefined && {
      ignoreApplicationStopFailures: input.ignoreApplicationStopFailures
    }),
    ...(input.revision !== undefined && {
      revision: serializeAws_json1_1RevisionLocation(input.revision, context)
    }),
    ...(input.targetInstances !== undefined && {
      targetInstances: serializeAws_json1_1TargetInstances(
        input.targetInstances,
        context
      )
    }),
    ...(input.updateOutdatedInstancesOnly !== undefined && {
      updateOutdatedInstancesOnly: input.updateOutdatedInstancesOnly
    })
  };
};

const serializeAws_json1_1DeleteApplicationInput = (
  input: DeleteApplicationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    })
  };
};

const serializeAws_json1_1DeleteDeploymentConfigInput = (
  input: DeleteDeploymentConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentConfigName !== undefined && {
      deploymentConfigName: input.deploymentConfigName
    })
  };
};

const serializeAws_json1_1DeleteDeploymentGroupInput = (
  input: DeleteDeploymentGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.deploymentGroupName !== undefined && {
      deploymentGroupName: input.deploymentGroupName
    })
  };
};

const serializeAws_json1_1DeleteGitHubAccountTokenInput = (
  input: DeleteGitHubAccountTokenInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.tokenName !== undefined && { tokenName: input.tokenName })
  };
};

const serializeAws_json1_1DeploymentGroupsList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1DeploymentReadyOption = (
  input: DeploymentReadyOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionOnTimeout !== undefined && {
      actionOnTimeout: input.actionOnTimeout
    }),
    ...(input.waitTimeInMinutes !== undefined && {
      waitTimeInMinutes: input.waitTimeInMinutes
    })
  };
};

const serializeAws_json1_1DeploymentsList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1DeploymentStatusList = (
  input: (DeploymentStatus | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1DeploymentStyle = (
  input: DeploymentStyle,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentOption !== undefined && {
      deploymentOption: input.deploymentOption
    }),
    ...(input.deploymentType !== undefined && {
      deploymentType: input.deploymentType
    })
  };
};

const serializeAws_json1_1DeregisterOnPremisesInstanceInput = (
  input: DeregisterOnPremisesInstanceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName !== undefined && {
      instanceName: input.instanceName
    })
  };
};

const serializeAws_json1_1EC2TagFilter = (
  input: EC2TagFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1EC2TagFilterList = (
  input: EC2TagFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1EC2TagFilter(entry, context));
};

const serializeAws_json1_1EC2TagSet = (
  input: EC2TagSet,
  context: __SerdeContext
): any => {
  return {
    ...(input.ec2TagSetList !== undefined && {
      ec2TagSetList: serializeAws_json1_1EC2TagSetList(
        input.ec2TagSetList,
        context
      )
    })
  };
};

const serializeAws_json1_1EC2TagSetList = (
  input: EC2TagFilter[][],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1EC2TagFilterList(entry, context)
  );
};

const serializeAws_json1_1ECSService = (
  input: ECSService,
  context: __SerdeContext
): any => {
  return {
    ...(input.clusterName !== undefined && { clusterName: input.clusterName }),
    ...(input.serviceName !== undefined && { serviceName: input.serviceName })
  };
};

const serializeAws_json1_1ECSServiceList = (
  input: ECSService[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1ECSService(entry, context));
};

const serializeAws_json1_1ELBInfo = (
  input: ELBInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1ELBInfoList = (
  input: ELBInfo[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1ELBInfo(entry, context));
};

const serializeAws_json1_1FilterValueList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1GetApplicationInput = (
  input: GetApplicationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    })
  };
};

const serializeAws_json1_1GetApplicationRevisionInput = (
  input: GetApplicationRevisionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.revision !== undefined && {
      revision: serializeAws_json1_1RevisionLocation(input.revision, context)
    })
  };
};

const serializeAws_json1_1GetDeploymentConfigInput = (
  input: GetDeploymentConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentConfigName !== undefined && {
      deploymentConfigName: input.deploymentConfigName
    })
  };
};

const serializeAws_json1_1GetDeploymentGroupInput = (
  input: GetDeploymentGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.deploymentGroupName !== undefined && {
      deploymentGroupName: input.deploymentGroupName
    })
  };
};

const serializeAws_json1_1GetDeploymentInput = (
  input: GetDeploymentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && {
      deploymentId: input.deploymentId
    })
  };
};

const serializeAws_json1_1GetDeploymentInstanceInput = (
  input: GetDeploymentInstanceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && {
      deploymentId: input.deploymentId
    }),
    ...(input.instanceId !== undefined && { instanceId: input.instanceId })
  };
};

const serializeAws_json1_1GetDeploymentTargetInput = (
  input: GetDeploymentTargetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && {
      deploymentId: input.deploymentId
    }),
    ...(input.targetId !== undefined && { targetId: input.targetId })
  };
};

const serializeAws_json1_1GetOnPremisesInstanceInput = (
  input: GetOnPremisesInstanceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceName !== undefined && {
      instanceName: input.instanceName
    })
  };
};

const serializeAws_json1_1GitHubLocation = (
  input: GitHubLocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.commitId !== undefined && { commitId: input.commitId }),
    ...(input.repository !== undefined && { repository: input.repository })
  };
};

const serializeAws_json1_1GreenFleetProvisioningOption = (
  input: GreenFleetProvisioningOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.action !== undefined && { action: input.action })
  };
};

const serializeAws_json1_1InstanceNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1InstancesList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1InstanceStatusList = (
  input: (InstanceStatus | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1InstanceTypeList = (
  input: (_InstanceType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ListApplicationRevisionsInput = (
  input: ListApplicationRevisionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.deployed !== undefined && { deployed: input.deployed }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.s3Bucket !== undefined && { s3Bucket: input.s3Bucket }),
    ...(input.s3KeyPrefix !== undefined && { s3KeyPrefix: input.s3KeyPrefix }),
    ...(input.sortBy !== undefined && { sortBy: input.sortBy }),
    ...(input.sortOrder !== undefined && { sortOrder: input.sortOrder })
  };
};

const serializeAws_json1_1ListApplicationsInput = (
  input: ListApplicationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListDeploymentConfigsInput = (
  input: ListDeploymentConfigsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListDeploymentGroupsInput = (
  input: ListDeploymentGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListDeploymentInstancesInput = (
  input: ListDeploymentInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && {
      deploymentId: input.deploymentId
    }),
    ...(input.instanceStatusFilter !== undefined && {
      instanceStatusFilter: serializeAws_json1_1InstanceStatusList(
        input.instanceStatusFilter,
        context
      )
    }),
    ...(input.instanceTypeFilter !== undefined && {
      instanceTypeFilter: serializeAws_json1_1InstanceTypeList(
        input.instanceTypeFilter,
        context
      )
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListDeploymentsInput = (
  input: ListDeploymentsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.createTimeRange !== undefined && {
      createTimeRange: serializeAws_json1_1TimeRange(
        input.createTimeRange,
        context
      )
    }),
    ...(input.deploymentGroupName !== undefined && {
      deploymentGroupName: input.deploymentGroupName
    }),
    ...(input.includeOnlyStatuses !== undefined && {
      includeOnlyStatuses: serializeAws_json1_1DeploymentStatusList(
        input.includeOnlyStatuses,
        context
      )
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListDeploymentTargetsInput = (
  input: ListDeploymentTargetsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && {
      deploymentId: input.deploymentId
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.targetFilters !== undefined && {
      targetFilters: serializeAws_json1_1TargetFilters(
        input.targetFilters,
        context
      )
    })
  };
};

const serializeAws_json1_1ListenerArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ListGitHubAccountTokenNamesInput = (
  input: ListGitHubAccountTokenNamesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListOnPremisesInstancesInput = (
  input: ListOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.registrationStatus !== undefined && {
      registrationStatus: input.registrationStatus
    }),
    ...(input.tagFilters !== undefined && {
      tagFilters: serializeAws_json1_1TagFilterList(input.tagFilters, context)
    })
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1LoadBalancerInfo = (
  input: LoadBalancerInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.elbInfoList !== undefined && {
      elbInfoList: serializeAws_json1_1ELBInfoList(input.elbInfoList, context)
    }),
    ...(input.targetGroupInfoList !== undefined && {
      targetGroupInfoList: serializeAws_json1_1TargetGroupInfoList(
        input.targetGroupInfoList,
        context
      )
    }),
    ...(input.targetGroupPairInfoList !== undefined && {
      targetGroupPairInfoList: serializeAws_json1_1TargetGroupPairInfoList(
        input.targetGroupPairInfoList,
        context
      )
    })
  };
};

const serializeAws_json1_1MinimumHealthyHosts = (
  input: MinimumHealthyHosts,
  context: __SerdeContext
): any => {
  return {
    ...(input.type !== undefined && { type: input.type }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1OnPremisesTagSet = (
  input: OnPremisesTagSet,
  context: __SerdeContext
): any => {
  return {
    ...(input.onPremisesTagSetList !== undefined && {
      onPremisesTagSetList: serializeAws_json1_1OnPremisesTagSetList(
        input.onPremisesTagSetList,
        context
      )
    })
  };
};

const serializeAws_json1_1OnPremisesTagSetList = (
  input: TagFilter[][],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1TagFilterList(entry, context));
};

const serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput = (
  input: PutLifecycleEventHookExecutionStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && {
      deploymentId: input.deploymentId
    }),
    ...(input.lifecycleEventHookExecutionId !== undefined && {
      lifecycleEventHookExecutionId: input.lifecycleEventHookExecutionId
    }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1RawString = (
  input: RawString,
  context: __SerdeContext
): any => {
  return {
    ...(input.content !== undefined && { content: input.content }),
    ...(input.sha256 !== undefined && { sha256: input.sha256 })
  };
};

const serializeAws_json1_1RegisterApplicationRevisionInput = (
  input: RegisterApplicationRevisionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.revision !== undefined && {
      revision: serializeAws_json1_1RevisionLocation(input.revision, context)
    })
  };
};

const serializeAws_json1_1RegisterOnPremisesInstanceInput = (
  input: RegisterOnPremisesInstanceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.iamSessionArn !== undefined && {
      iamSessionArn: input.iamSessionArn
    }),
    ...(input.iamUserArn !== undefined && { iamUserArn: input.iamUserArn }),
    ...(input.instanceName !== undefined && {
      instanceName: input.instanceName
    })
  };
};

const serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput = (
  input: RemoveTagsFromOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.instanceNames !== undefined && {
      instanceNames: serializeAws_json1_1InstanceNameList(
        input.instanceNames,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    })
  };
};

const serializeAws_json1_1RevisionLocation = (
  input: RevisionLocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.appSpecContent !== undefined && {
      appSpecContent: serializeAws_json1_1AppSpecContent(
        input.appSpecContent,
        context
      )
    }),
    ...(input.gitHubLocation !== undefined && {
      gitHubLocation: serializeAws_json1_1GitHubLocation(
        input.gitHubLocation,
        context
      )
    }),
    ...(input.revisionType !== undefined && {
      revisionType: input.revisionType
    }),
    ...(input.s3Location !== undefined && {
      s3Location: serializeAws_json1_1S3Location(input.s3Location, context)
    }),
    ...(input.string !== undefined && {
      string: serializeAws_json1_1RawString(input.string, context)
    })
  };
};

const serializeAws_json1_1RevisionLocationList = (
  input: RevisionLocation[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1RevisionLocation(entry, context)
  );
};

const serializeAws_json1_1S3Location = (
  input: S3Location,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket !== undefined && { bucket: input.bucket }),
    ...(input.bundleType !== undefined && { bundleType: input.bundleType }),
    ...(input.eTag !== undefined && { eTag: input.eTag }),
    ...(input.key !== undefined && { key: input.key }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput = (
  input: SkipWaitTimeForInstanceTerminationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId !== undefined && {
      deploymentId: input.deploymentId
    })
  };
};

const serializeAws_json1_1StopDeploymentInput = (
  input: StopDeploymentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.autoRollbackEnabled !== undefined && {
      autoRollbackEnabled: input.autoRollbackEnabled
    }),
    ...(input.deploymentId !== undefined && {
      deploymentId: input.deploymentId
    })
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagFilter = (
  input: TagFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagFilterList = (
  input: TagFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1TagFilter(entry, context));
};

const serializeAws_json1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1TargetFilters = (
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (
      acc: { [key: string]: string[] },
      [key, value]: [TargetFilterName | string, any]
    ) => ({
      ...acc,
      [key]: serializeAws_json1_1FilterValueList(value, context)
    }),
    {}
  );
};

const serializeAws_json1_1TargetGroupInfo = (
  input: TargetGroupInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1TargetGroupInfoList = (
  input: TargetGroupInfo[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1TargetGroupInfo(entry, context)
  );
};

const serializeAws_json1_1TargetGroupPairInfo = (
  input: TargetGroupPairInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.prodTrafficRoute !== undefined && {
      prodTrafficRoute: serializeAws_json1_1TrafficRoute(
        input.prodTrafficRoute,
        context
      )
    }),
    ...(input.targetGroups !== undefined && {
      targetGroups: serializeAws_json1_1TargetGroupInfoList(
        input.targetGroups,
        context
      )
    }),
    ...(input.testTrafficRoute !== undefined && {
      testTrafficRoute: serializeAws_json1_1TrafficRoute(
        input.testTrafficRoute,
        context
      )
    })
  };
};

const serializeAws_json1_1TargetGroupPairInfoList = (
  input: TargetGroupPairInfo[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1TargetGroupPairInfo(entry, context)
  );
};

const serializeAws_json1_1TargetIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TargetInstances = (
  input: TargetInstances,
  context: __SerdeContext
): any => {
  return {
    ...(input.autoScalingGroups !== undefined && {
      autoScalingGroups: serializeAws_json1_1AutoScalingGroupNameList(
        input.autoScalingGroups,
        context
      )
    }),
    ...(input.ec2TagSet !== undefined && {
      ec2TagSet: serializeAws_json1_1EC2TagSet(input.ec2TagSet, context)
    }),
    ...(input.tagFilters !== undefined && {
      tagFilters: serializeAws_json1_1EC2TagFilterList(
        input.tagFilters,
        context
      )
    })
  };
};

const serializeAws_json1_1TimeBasedCanary = (
  input: TimeBasedCanary,
  context: __SerdeContext
): any => {
  return {
    ...(input.canaryInterval !== undefined && {
      canaryInterval: input.canaryInterval
    }),
    ...(input.canaryPercentage !== undefined && {
      canaryPercentage: input.canaryPercentage
    })
  };
};

const serializeAws_json1_1TimeBasedLinear = (
  input: TimeBasedLinear,
  context: __SerdeContext
): any => {
  return {
    ...(input.linearInterval !== undefined && {
      linearInterval: input.linearInterval
    }),
    ...(input.linearPercentage !== undefined && {
      linearPercentage: input.linearPercentage
    })
  };
};

const serializeAws_json1_1TimeRange = (
  input: TimeRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.end !== undefined && {
      end: Math.round(input.end.getTime() / 1000)
    }),
    ...(input.start !== undefined && {
      start: Math.round(input.start.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1TrafficRoute = (
  input: TrafficRoute,
  context: __SerdeContext
): any => {
  return {
    ...(input.listenerArns !== undefined && {
      listenerArns: serializeAws_json1_1ListenerArnList(
        input.listenerArns,
        context
      )
    })
  };
};

const serializeAws_json1_1TrafficRoutingConfig = (
  input: TrafficRoutingConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.timeBasedCanary !== undefined && {
      timeBasedCanary: serializeAws_json1_1TimeBasedCanary(
        input.timeBasedCanary,
        context
      )
    }),
    ...(input.timeBasedLinear !== undefined && {
      timeBasedLinear: serializeAws_json1_1TimeBasedLinear(
        input.timeBasedLinear,
        context
      )
    }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1TriggerConfig = (
  input: TriggerConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.triggerEvents !== undefined && {
      triggerEvents: serializeAws_json1_1TriggerEventTypeList(
        input.triggerEvents,
        context
      )
    }),
    ...(input.triggerName !== undefined && { triggerName: input.triggerName }),
    ...(input.triggerTargetArn !== undefined && {
      triggerTargetArn: input.triggerTargetArn
    })
  };
};

const serializeAws_json1_1TriggerConfigList = (
  input: TriggerConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1TriggerConfig(entry, context));
};

const serializeAws_json1_1TriggerEventTypeList = (
  input: (TriggerEventType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context)
    })
  };
};

const serializeAws_json1_1UpdateApplicationInput = (
  input: UpdateApplicationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.newApplicationName !== undefined && {
      newApplicationName: input.newApplicationName
    })
  };
};

const serializeAws_json1_1UpdateDeploymentGroupInput = (
  input: UpdateDeploymentGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.alarmConfiguration !== undefined && {
      alarmConfiguration: serializeAws_json1_1AlarmConfiguration(
        input.alarmConfiguration,
        context
      )
    }),
    ...(input.applicationName !== undefined && {
      applicationName: input.applicationName
    }),
    ...(input.autoRollbackConfiguration !== undefined && {
      autoRollbackConfiguration: serializeAws_json1_1AutoRollbackConfiguration(
        input.autoRollbackConfiguration,
        context
      )
    }),
    ...(input.autoScalingGroups !== undefined && {
      autoScalingGroups: serializeAws_json1_1AutoScalingGroupNameList(
        input.autoScalingGroups,
        context
      )
    }),
    ...(input.blueGreenDeploymentConfiguration !== undefined && {
      blueGreenDeploymentConfiguration: serializeAws_json1_1BlueGreenDeploymentConfiguration(
        input.blueGreenDeploymentConfiguration,
        context
      )
    }),
    ...(input.currentDeploymentGroupName !== undefined && {
      currentDeploymentGroupName: input.currentDeploymentGroupName
    }),
    ...(input.deploymentConfigName !== undefined && {
      deploymentConfigName: input.deploymentConfigName
    }),
    ...(input.deploymentStyle !== undefined && {
      deploymentStyle: serializeAws_json1_1DeploymentStyle(
        input.deploymentStyle,
        context
      )
    }),
    ...(input.ec2TagFilters !== undefined && {
      ec2TagFilters: serializeAws_json1_1EC2TagFilterList(
        input.ec2TagFilters,
        context
      )
    }),
    ...(input.ec2TagSet !== undefined && {
      ec2TagSet: serializeAws_json1_1EC2TagSet(input.ec2TagSet, context)
    }),
    ...(input.ecsServices !== undefined && {
      ecsServices: serializeAws_json1_1ECSServiceList(
        input.ecsServices,
        context
      )
    }),
    ...(input.loadBalancerInfo !== undefined && {
      loadBalancerInfo: serializeAws_json1_1LoadBalancerInfo(
        input.loadBalancerInfo,
        context
      )
    }),
    ...(input.newDeploymentGroupName !== undefined && {
      newDeploymentGroupName: input.newDeploymentGroupName
    }),
    ...(input.onPremisesInstanceTagFilters !== undefined && {
      onPremisesInstanceTagFilters: serializeAws_json1_1TagFilterList(
        input.onPremisesInstanceTagFilters,
        context
      )
    }),
    ...(input.onPremisesTagSet !== undefined && {
      onPremisesTagSet: serializeAws_json1_1OnPremisesTagSet(
        input.onPremisesTagSet,
        context
      )
    }),
    ...(input.serviceRoleArn !== undefined && {
      serviceRoleArn: input.serviceRoleArn
    }),
    ...(input.triggerConfigurations !== undefined && {
      triggerConfigurations: serializeAws_json1_1TriggerConfigList(
        input.triggerConfigurations,
        context
      )
    })
  };
};

const deserializeAws_json1_1Alarm = (
  output: any,
  context: __SerdeContext
): Alarm => {
  return {
    __type: "Alarm",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1AlarmConfiguration = (
  output: any,
  context: __SerdeContext
): AlarmConfiguration => {
  return {
    __type: "AlarmConfiguration",
    alarms:
      output.alarms !== undefined && output.alarms !== null
        ? deserializeAws_json1_1AlarmList(output.alarms, context)
        : undefined,
    enabled:
      output.enabled !== undefined && output.enabled !== null
        ? output.enabled
        : undefined,
    ignorePollAlarmFailure:
      output.ignorePollAlarmFailure !== undefined &&
      output.ignorePollAlarmFailure !== null
        ? output.ignorePollAlarmFailure
        : undefined
  } as any;
};

const deserializeAws_json1_1AlarmList = (
  output: any,
  context: __SerdeContext
): Alarm[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Alarm(entry, context)
  );
};

const deserializeAws_json1_1AlarmsLimitExceededException = (
  output: any,
  context: __SerdeContext
): AlarmsLimitExceededException => {
  return {
    __type: "AlarmsLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ApplicationAlreadyExistsException => {
  return {
    __type: "ApplicationAlreadyExistsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ApplicationDoesNotExistException => {
  return {
    __type: "ApplicationDoesNotExistException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationInfo = (
  output: any,
  context: __SerdeContext
): ApplicationInfo => {
  return {
    __type: "ApplicationInfo",
    applicationId:
      output.applicationId !== undefined && output.applicationId !== null
        ? output.applicationId
        : undefined,
    applicationName:
      output.applicationName !== undefined && output.applicationName !== null
        ? output.applicationName
        : undefined,
    computePlatform:
      output.computePlatform !== undefined && output.computePlatform !== null
        ? output.computePlatform
        : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    gitHubAccountName:
      output.gitHubAccountName !== undefined &&
      output.gitHubAccountName !== null
        ? output.gitHubAccountName
        : undefined,
    linkedToGitHub:
      output.linkedToGitHub !== undefined && output.linkedToGitHub !== null
        ? output.linkedToGitHub
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationLimitExceededException = (
  output: any,
  context: __SerdeContext
): ApplicationLimitExceededException => {
  return {
    __type: "ApplicationLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationNameRequiredException = (
  output: any,
  context: __SerdeContext
): ApplicationNameRequiredException => {
  return {
    __type: "ApplicationNameRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationsInfoList = (
  output: any,
  context: __SerdeContext
): ApplicationInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ApplicationInfo(entry, context)
  );
};

const deserializeAws_json1_1ApplicationsList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AppSpecContent = (
  output: any,
  context: __SerdeContext
): AppSpecContent => {
  return {
    __type: "AppSpecContent",
    content:
      output.content !== undefined && output.content !== null
        ? output.content
        : undefined,
    sha256:
      output.sha256 !== undefined && output.sha256 !== null
        ? output.sha256
        : undefined
  } as any;
};

const deserializeAws_json1_1ArnNotSupportedException = (
  output: any,
  context: __SerdeContext
): ArnNotSupportedException => {
  return {
    __type: "ArnNotSupportedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1AutoRollbackConfiguration = (
  output: any,
  context: __SerdeContext
): AutoRollbackConfiguration => {
  return {
    __type: "AutoRollbackConfiguration",
    enabled:
      output.enabled !== undefined && output.enabled !== null
        ? output.enabled
        : undefined,
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_1AutoRollbackEventsList(output.events, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1AutoRollbackEventsList = (
  output: any,
  context: __SerdeContext
): (AutoRollbackEvent | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AutoScalingGroup = (
  output: any,
  context: __SerdeContext
): AutoScalingGroup => {
  return {
    __type: "AutoScalingGroup",
    hook:
      output.hook !== undefined && output.hook !== null
        ? output.hook
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1AutoScalingGroupList = (
  output: any,
  context: __SerdeContext
): AutoScalingGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AutoScalingGroup(entry, context)
  );
};

const deserializeAws_json1_1AutoScalingGroupNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1BatchGetApplicationRevisionsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetApplicationRevisionsOutput => {
  return {
    __type: "BatchGetApplicationRevisionsOutput",
    applicationName:
      output.applicationName !== undefined && output.applicationName !== null
        ? output.applicationName
        : undefined,
    errorMessage:
      output.errorMessage !== undefined && output.errorMessage !== null
        ? output.errorMessage
        : undefined,
    revisions:
      output.revisions !== undefined && output.revisions !== null
        ? deserializeAws_json1_1RevisionInfoList(output.revisions, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetApplicationsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetApplicationsOutput => {
  return {
    __type: "BatchGetApplicationsOutput",
    applicationsInfo:
      output.applicationsInfo !== undefined && output.applicationsInfo !== null
        ? deserializeAws_json1_1ApplicationsInfoList(
            output.applicationsInfo,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetDeploymentGroupsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentGroupsOutput => {
  return {
    __type: "BatchGetDeploymentGroupsOutput",
    deploymentGroupsInfo:
      output.deploymentGroupsInfo !== undefined &&
      output.deploymentGroupsInfo !== null
        ? deserializeAws_json1_1DeploymentGroupInfoList(
            output.deploymentGroupsInfo,
            context
          )
        : undefined,
    errorMessage:
      output.errorMessage !== undefined && output.errorMessage !== null
        ? output.errorMessage
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetDeploymentInstancesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentInstancesOutput => {
  return {
    __type: "BatchGetDeploymentInstancesOutput",
    errorMessage:
      output.errorMessage !== undefined && output.errorMessage !== null
        ? output.errorMessage
        : undefined,
    instancesSummary:
      output.instancesSummary !== undefined && output.instancesSummary !== null
        ? deserializeAws_json1_1InstanceSummaryList(
            output.instancesSummary,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetDeploymentsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentsOutput => {
  return {
    __type: "BatchGetDeploymentsOutput",
    deploymentsInfo:
      output.deploymentsInfo !== undefined && output.deploymentsInfo !== null
        ? deserializeAws_json1_1DeploymentsInfoList(
            output.deploymentsInfo,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetDeploymentTargetsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentTargetsOutput => {
  return {
    __type: "BatchGetDeploymentTargetsOutput",
    deploymentTargets:
      output.deploymentTargets !== undefined &&
      output.deploymentTargets !== null
        ? deserializeAws_json1_1DeploymentTargetList(
            output.deploymentTargets,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetOnPremisesInstancesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetOnPremisesInstancesOutput => {
  return {
    __type: "BatchGetOnPremisesInstancesOutput",
    instanceInfos:
      output.instanceInfos !== undefined && output.instanceInfos !== null
        ? deserializeAws_json1_1InstanceInfoList(output.instanceInfos, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchLimitExceededException = (
  output: any,
  context: __SerdeContext
): BatchLimitExceededException => {
  return {
    __type: "BatchLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1BlueGreenDeploymentConfiguration = (
  output: any,
  context: __SerdeContext
): BlueGreenDeploymentConfiguration => {
  return {
    __type: "BlueGreenDeploymentConfiguration",
    deploymentReadyOption:
      output.deploymentReadyOption !== undefined &&
      output.deploymentReadyOption !== null
        ? deserializeAws_json1_1DeploymentReadyOption(
            output.deploymentReadyOption,
            context
          )
        : undefined,
    greenFleetProvisioningOption:
      output.greenFleetProvisioningOption !== undefined &&
      output.greenFleetProvisioningOption !== null
        ? deserializeAws_json1_1GreenFleetProvisioningOption(
            output.greenFleetProvisioningOption,
            context
          )
        : undefined,
    terminateBlueInstancesOnDeploymentSuccess:
      output.terminateBlueInstancesOnDeploymentSuccess !== undefined &&
      output.terminateBlueInstancesOnDeploymentSuccess !== null
        ? deserializeAws_json1_1BlueInstanceTerminationOption(
            output.terminateBlueInstancesOnDeploymentSuccess,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BlueInstanceTerminationOption = (
  output: any,
  context: __SerdeContext
): BlueInstanceTerminationOption => {
  return {
    __type: "BlueInstanceTerminationOption",
    action:
      output.action !== undefined && output.action !== null
        ? output.action
        : undefined,
    terminationWaitTimeInMinutes:
      output.terminationWaitTimeInMinutes !== undefined &&
      output.terminationWaitTimeInMinutes !== null
        ? output.terminationWaitTimeInMinutes
        : undefined
  } as any;
};

const deserializeAws_json1_1BucketNameFilterRequiredException = (
  output: any,
  context: __SerdeContext
): BucketNameFilterRequiredException => {
  return {
    __type: "BucketNameFilterRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateApplicationOutput = (
  output: any,
  context: __SerdeContext
): CreateApplicationOutput => {
  return {
    __type: "CreateApplicationOutput",
    applicationId:
      output.applicationId !== undefined && output.applicationId !== null
        ? output.applicationId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateDeploymentConfigOutput = (
  output: any,
  context: __SerdeContext
): CreateDeploymentConfigOutput => {
  return {
    __type: "CreateDeploymentConfigOutput",
    deploymentConfigId:
      output.deploymentConfigId !== undefined &&
      output.deploymentConfigId !== null
        ? output.deploymentConfigId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateDeploymentGroupOutput = (
  output: any,
  context: __SerdeContext
): CreateDeploymentGroupOutput => {
  return {
    __type: "CreateDeploymentGroupOutput",
    deploymentGroupId:
      output.deploymentGroupId !== undefined &&
      output.deploymentGroupId !== null
        ? output.deploymentGroupId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateDeploymentOutput = (
  output: any,
  context: __SerdeContext
): CreateDeploymentOutput => {
  return {
    __type: "CreateDeploymentOutput",
    deploymentId:
      output.deploymentId !== undefined && output.deploymentId !== null
        ? output.deploymentId
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteDeploymentGroupOutput = (
  output: any,
  context: __SerdeContext
): DeleteDeploymentGroupOutput => {
  return {
    __type: "DeleteDeploymentGroupOutput",
    hooksNotCleanedUp:
      output.hooksNotCleanedUp !== undefined &&
      output.hooksNotCleanedUp !== null
        ? deserializeAws_json1_1AutoScalingGroupList(
            output.hooksNotCleanedUp,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteGitHubAccountTokenOutput = (
  output: any,
  context: __SerdeContext
): DeleteGitHubAccountTokenOutput => {
  return {
    __type: "DeleteGitHubAccountTokenOutput",
    tokenName:
      output.tokenName !== undefined && output.tokenName !== null
        ? output.tokenName
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentAlreadyCompletedException = (
  output: any,
  context: __SerdeContext
): DeploymentAlreadyCompletedException => {
  return {
    __type: "DeploymentAlreadyCompletedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentConfigAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigAlreadyExistsException => {
  return {
    __type: "DeploymentConfigAlreadyExistsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentConfigDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigDoesNotExistException => {
  return {
    __type: "DeploymentConfigDoesNotExistException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentConfigInfo = (
  output: any,
  context: __SerdeContext
): DeploymentConfigInfo => {
  return {
    __type: "DeploymentConfigInfo",
    computePlatform:
      output.computePlatform !== undefined && output.computePlatform !== null
        ? output.computePlatform
        : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    deploymentConfigId:
      output.deploymentConfigId !== undefined &&
      output.deploymentConfigId !== null
        ? output.deploymentConfigId
        : undefined,
    deploymentConfigName:
      output.deploymentConfigName !== undefined &&
      output.deploymentConfigName !== null
        ? output.deploymentConfigName
        : undefined,
    minimumHealthyHosts:
      output.minimumHealthyHosts !== undefined &&
      output.minimumHealthyHosts !== null
        ? deserializeAws_json1_1MinimumHealthyHosts(
            output.minimumHealthyHosts,
            context
          )
        : undefined,
    trafficRoutingConfig:
      output.trafficRoutingConfig !== undefined &&
      output.trafficRoutingConfig !== null
        ? deserializeAws_json1_1TrafficRoutingConfig(
            output.trafficRoutingConfig,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentConfigInUseException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigInUseException => {
  return {
    __type: "DeploymentConfigInUseException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentConfigLimitExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigLimitExceededException => {
  return {
    __type: "DeploymentConfigLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentConfigNameRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigNameRequiredException => {
  return {
    __type: "DeploymentConfigNameRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentConfigsList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DeploymentDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentDoesNotExistException => {
  return {
    __type: "DeploymentDoesNotExistException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentGroupAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupAlreadyExistsException => {
  return {
    __type: "DeploymentGroupAlreadyExistsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentGroupDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupDoesNotExistException => {
  return {
    __type: "DeploymentGroupDoesNotExistException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentGroupInfo = (
  output: any,
  context: __SerdeContext
): DeploymentGroupInfo => {
  return {
    __type: "DeploymentGroupInfo",
    alarmConfiguration:
      output.alarmConfiguration !== undefined &&
      output.alarmConfiguration !== null
        ? deserializeAws_json1_1AlarmConfiguration(
            output.alarmConfiguration,
            context
          )
        : undefined,
    applicationName:
      output.applicationName !== undefined && output.applicationName !== null
        ? output.applicationName
        : undefined,
    autoRollbackConfiguration:
      output.autoRollbackConfiguration !== undefined &&
      output.autoRollbackConfiguration !== null
        ? deserializeAws_json1_1AutoRollbackConfiguration(
            output.autoRollbackConfiguration,
            context
          )
        : undefined,
    autoScalingGroups:
      output.autoScalingGroups !== undefined &&
      output.autoScalingGroups !== null
        ? deserializeAws_json1_1AutoScalingGroupList(
            output.autoScalingGroups,
            context
          )
        : undefined,
    blueGreenDeploymentConfiguration:
      output.blueGreenDeploymentConfiguration !== undefined &&
      output.blueGreenDeploymentConfiguration !== null
        ? deserializeAws_json1_1BlueGreenDeploymentConfiguration(
            output.blueGreenDeploymentConfiguration,
            context
          )
        : undefined,
    computePlatform:
      output.computePlatform !== undefined && output.computePlatform !== null
        ? output.computePlatform
        : undefined,
    deploymentConfigName:
      output.deploymentConfigName !== undefined &&
      output.deploymentConfigName !== null
        ? output.deploymentConfigName
        : undefined,
    deploymentGroupId:
      output.deploymentGroupId !== undefined &&
      output.deploymentGroupId !== null
        ? output.deploymentGroupId
        : undefined,
    deploymentGroupName:
      output.deploymentGroupName !== undefined &&
      output.deploymentGroupName !== null
        ? output.deploymentGroupName
        : undefined,
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
      output.lastAttemptedDeployment !== undefined &&
      output.lastAttemptedDeployment !== null
        ? deserializeAws_json1_1LastDeploymentInfo(
            output.lastAttemptedDeployment,
            context
          )
        : undefined,
    lastSuccessfulDeployment:
      output.lastSuccessfulDeployment !== undefined &&
      output.lastSuccessfulDeployment !== null
        ? deserializeAws_json1_1LastDeploymentInfo(
            output.lastSuccessfulDeployment,
            context
          )
        : undefined,
    loadBalancerInfo:
      output.loadBalancerInfo !== undefined && output.loadBalancerInfo !== null
        ? deserializeAws_json1_1LoadBalancerInfo(
            output.loadBalancerInfo,
            context
          )
        : undefined,
    onPremisesInstanceTagFilters:
      output.onPremisesInstanceTagFilters !== undefined &&
      output.onPremisesInstanceTagFilters !== null
        ? deserializeAws_json1_1TagFilterList(
            output.onPremisesInstanceTagFilters,
            context
          )
        : undefined,
    onPremisesTagSet:
      output.onPremisesTagSet !== undefined && output.onPremisesTagSet !== null
        ? deserializeAws_json1_1OnPremisesTagSet(
            output.onPremisesTagSet,
            context
          )
        : undefined,
    serviceRoleArn:
      output.serviceRoleArn !== undefined && output.serviceRoleArn !== null
        ? output.serviceRoleArn
        : undefined,
    targetRevision:
      output.targetRevision !== undefined && output.targetRevision !== null
        ? deserializeAws_json1_1RevisionLocation(output.targetRevision, context)
        : undefined,
    triggerConfigurations:
      output.triggerConfigurations !== undefined &&
      output.triggerConfigurations !== null
        ? deserializeAws_json1_1TriggerConfigList(
            output.triggerConfigurations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentGroupInfoList = (
  output: any,
  context: __SerdeContext
): DeploymentGroupInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DeploymentGroupInfo(entry, context)
  );
};

const deserializeAws_json1_1DeploymentGroupLimitExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupLimitExceededException => {
  return {
    __type: "DeploymentGroupLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentGroupNameRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupNameRequiredException => {
  return {
    __type: "DeploymentGroupNameRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentGroupsList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DeploymentIdRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentIdRequiredException => {
  return {
    __type: "DeploymentIdRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentInfo = (
  output: any,
  context: __SerdeContext
): DeploymentInfo => {
  return {
    __type: "DeploymentInfo",
    additionalDeploymentStatusInfo:
      output.additionalDeploymentStatusInfo !== undefined &&
      output.additionalDeploymentStatusInfo !== null
        ? output.additionalDeploymentStatusInfo
        : undefined,
    applicationName:
      output.applicationName !== undefined && output.applicationName !== null
        ? output.applicationName
        : undefined,
    autoRollbackConfiguration:
      output.autoRollbackConfiguration !== undefined &&
      output.autoRollbackConfiguration !== null
        ? deserializeAws_json1_1AutoRollbackConfiguration(
            output.autoRollbackConfiguration,
            context
          )
        : undefined,
    blueGreenDeploymentConfiguration:
      output.blueGreenDeploymentConfiguration !== undefined &&
      output.blueGreenDeploymentConfiguration !== null
        ? deserializeAws_json1_1BlueGreenDeploymentConfiguration(
            output.blueGreenDeploymentConfiguration,
            context
          )
        : undefined,
    completeTime:
      output.completeTime !== undefined && output.completeTime !== null
        ? new Date(Math.round(output.completeTime * 1000))
        : undefined,
    computePlatform:
      output.computePlatform !== undefined && output.computePlatform !== null
        ? output.computePlatform
        : undefined,
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    creator:
      output.creator !== undefined && output.creator !== null
        ? output.creator
        : undefined,
    deploymentConfigName:
      output.deploymentConfigName !== undefined &&
      output.deploymentConfigName !== null
        ? output.deploymentConfigName
        : undefined,
    deploymentGroupName:
      output.deploymentGroupName !== undefined &&
      output.deploymentGroupName !== null
        ? output.deploymentGroupName
        : undefined,
    deploymentId:
      output.deploymentId !== undefined && output.deploymentId !== null
        ? output.deploymentId
        : undefined,
    deploymentOverview:
      output.deploymentOverview !== undefined &&
      output.deploymentOverview !== null
        ? deserializeAws_json1_1DeploymentOverview(
            output.deploymentOverview,
            context
          )
        : undefined,
    deploymentStatusMessages:
      output.deploymentStatusMessages !== undefined &&
      output.deploymentStatusMessages !== null
        ? deserializeAws_json1_1DeploymentStatusMessageList(
            output.deploymentStatusMessages,
            context
          )
        : undefined,
    deploymentStyle:
      output.deploymentStyle !== undefined && output.deploymentStyle !== null
        ? deserializeAws_json1_1DeploymentStyle(output.deploymentStyle, context)
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    errorInformation:
      output.errorInformation !== undefined && output.errorInformation !== null
        ? deserializeAws_json1_1ErrorInformation(
            output.errorInformation,
            context
          )
        : undefined,
    fileExistsBehavior:
      output.fileExistsBehavior !== undefined &&
      output.fileExistsBehavior !== null
        ? output.fileExistsBehavior
        : undefined,
    ignoreApplicationStopFailures:
      output.ignoreApplicationStopFailures !== undefined &&
      output.ignoreApplicationStopFailures !== null
        ? output.ignoreApplicationStopFailures
        : undefined,
    instanceTerminationWaitTimeStarted:
      output.instanceTerminationWaitTimeStarted !== undefined &&
      output.instanceTerminationWaitTimeStarted !== null
        ? output.instanceTerminationWaitTimeStarted
        : undefined,
    loadBalancerInfo:
      output.loadBalancerInfo !== undefined && output.loadBalancerInfo !== null
        ? deserializeAws_json1_1LoadBalancerInfo(
            output.loadBalancerInfo,
            context
          )
        : undefined,
    previousRevision:
      output.previousRevision !== undefined && output.previousRevision !== null
        ? deserializeAws_json1_1RevisionLocation(
            output.previousRevision,
            context
          )
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
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    targetInstances:
      output.targetInstances !== undefined && output.targetInstances !== null
        ? deserializeAws_json1_1TargetInstances(output.targetInstances, context)
        : undefined,
    updateOutdatedInstancesOnly:
      output.updateOutdatedInstancesOnly !== undefined &&
      output.updateOutdatedInstancesOnly !== null
        ? output.updateOutdatedInstancesOnly
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentIsNotInReadyStateException = (
  output: any,
  context: __SerdeContext
): DeploymentIsNotInReadyStateException => {
  return {
    __type: "DeploymentIsNotInReadyStateException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentLimitExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentLimitExceededException => {
  return {
    __type: "DeploymentLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentNotStartedException = (
  output: any,
  context: __SerdeContext
): DeploymentNotStartedException => {
  return {
    __type: "DeploymentNotStartedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentOverview = (
  output: any,
  context: __SerdeContext
): DeploymentOverview => {
  return {
    __type: "DeploymentOverview",
    Failed:
      output.Failed !== undefined && output.Failed !== null
        ? output.Failed
        : undefined,
    InProgress:
      output.InProgress !== undefined && output.InProgress !== null
        ? output.InProgress
        : undefined,
    Pending:
      output.Pending !== undefined && output.Pending !== null
        ? output.Pending
        : undefined,
    Ready:
      output.Ready !== undefined && output.Ready !== null
        ? output.Ready
        : undefined,
    Skipped:
      output.Skipped !== undefined && output.Skipped !== null
        ? output.Skipped
        : undefined,
    Succeeded:
      output.Succeeded !== undefined && output.Succeeded !== null
        ? output.Succeeded
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentReadyOption = (
  output: any,
  context: __SerdeContext
): DeploymentReadyOption => {
  return {
    __type: "DeploymentReadyOption",
    actionOnTimeout:
      output.actionOnTimeout !== undefined && output.actionOnTimeout !== null
        ? output.actionOnTimeout
        : undefined,
    waitTimeInMinutes:
      output.waitTimeInMinutes !== undefined &&
      output.waitTimeInMinutes !== null
        ? output.waitTimeInMinutes
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentsInfoList = (
  output: any,
  context: __SerdeContext
): DeploymentInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DeploymentInfo(entry, context)
  );
};

const deserializeAws_json1_1DeploymentsList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DeploymentStatusMessageList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DeploymentStyle = (
  output: any,
  context: __SerdeContext
): DeploymentStyle => {
  return {
    __type: "DeploymentStyle",
    deploymentOption:
      output.deploymentOption !== undefined && output.deploymentOption !== null
        ? output.deploymentOption
        : undefined,
    deploymentType:
      output.deploymentType !== undefined && output.deploymentType !== null
        ? output.deploymentType
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentTarget = (
  output: any,
  context: __SerdeContext
): DeploymentTarget => {
  return {
    __type: "DeploymentTarget",
    deploymentTargetType:
      output.deploymentTargetType !== undefined &&
      output.deploymentTargetType !== null
        ? output.deploymentTargetType
        : undefined,
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
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentTargetDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentTargetDoesNotExistException => {
  return {
    __type: "DeploymentTargetDoesNotExistException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentTargetIdRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentTargetIdRequiredException => {
  return {
    __type: "DeploymentTargetIdRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeploymentTargetList = (
  output: any,
  context: __SerdeContext
): DeploymentTarget[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DeploymentTarget(entry, context)
  );
};

const deserializeAws_json1_1DeploymentTargetListSizeExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentTargetListSizeExceededException => {
  return {
    __type: "DeploymentTargetListSizeExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DescriptionTooLongException = (
  output: any,
  context: __SerdeContext
): DescriptionTooLongException => {
  return {
    __type: "DescriptionTooLongException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Diagnostics = (
  output: any,
  context: __SerdeContext
): Diagnostics => {
  return {
    __type: "Diagnostics",
    errorCode:
      output.errorCode !== undefined && output.errorCode !== null
        ? output.errorCode
        : undefined,
    logTail:
      output.logTail !== undefined && output.logTail !== null
        ? output.logTail
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    scriptName:
      output.scriptName !== undefined && output.scriptName !== null
        ? output.scriptName
        : undefined
  } as any;
};

const deserializeAws_json1_1EC2TagFilter = (
  output: any,
  context: __SerdeContext
): EC2TagFilter => {
  return {
    __type: "EC2TagFilter",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1EC2TagFilterList = (
  output: any,
  context: __SerdeContext
): EC2TagFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EC2TagFilter(entry, context)
  );
};

const deserializeAws_json1_1EC2TagSet = (
  output: any,
  context: __SerdeContext
): EC2TagSet => {
  return {
    __type: "EC2TagSet",
    ec2TagSetList:
      output.ec2TagSetList !== undefined && output.ec2TagSetList !== null
        ? deserializeAws_json1_1EC2TagSetList(output.ec2TagSetList, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1EC2TagSetList = (
  output: any,
  context: __SerdeContext
): EC2TagFilter[][] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EC2TagFilterList(entry, context)
  );
};

const deserializeAws_json1_1ECSService = (
  output: any,
  context: __SerdeContext
): ECSService => {
  return {
    __type: "ECSService",
    clusterName:
      output.clusterName !== undefined && output.clusterName !== null
        ? output.clusterName
        : undefined,
    serviceName:
      output.serviceName !== undefined && output.serviceName !== null
        ? output.serviceName
        : undefined
  } as any;
};

const deserializeAws_json1_1ECSServiceList = (
  output: any,
  context: __SerdeContext
): ECSService[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ECSService(entry, context)
  );
};

const deserializeAws_json1_1ECSServiceMappingLimitExceededException = (
  output: any,
  context: __SerdeContext
): ECSServiceMappingLimitExceededException => {
  return {
    __type: "ECSServiceMappingLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ECSTarget = (
  output: any,
  context: __SerdeContext
): ECSTarget => {
  return {
    __type: "ECSTarget",
    deploymentId:
      output.deploymentId !== undefined && output.deploymentId !== null
        ? output.deploymentId
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
        ? deserializeAws_json1_1LifecycleEventList(
            output.lifecycleEvents,
            context
          )
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    targetArn:
      output.targetArn !== undefined && output.targetArn !== null
        ? output.targetArn
        : undefined,
    targetId:
      output.targetId !== undefined && output.targetId !== null
        ? output.targetId
        : undefined,
    taskSetsInfo:
      output.taskSetsInfo !== undefined && output.taskSetsInfo !== null
        ? deserializeAws_json1_1ECSTaskSetList(output.taskSetsInfo, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ECSTaskSet = (
  output: any,
  context: __SerdeContext
): ECSTaskSet => {
  return {
    __type: "ECSTaskSet",
    desiredCount:
      output.desiredCount !== undefined && output.desiredCount !== null
        ? output.desiredCount
        : undefined,
    identifer:
      output.identifer !== undefined && output.identifer !== null
        ? output.identifer
        : undefined,
    pendingCount:
      output.pendingCount !== undefined && output.pendingCount !== null
        ? output.pendingCount
        : undefined,
    runningCount:
      output.runningCount !== undefined && output.runningCount !== null
        ? output.runningCount
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    targetGroup:
      output.targetGroup !== undefined && output.targetGroup !== null
        ? deserializeAws_json1_1TargetGroupInfo(output.targetGroup, context)
        : undefined,
    taskSetLabel:
      output.taskSetLabel !== undefined && output.taskSetLabel !== null
        ? output.taskSetLabel
        : undefined,
    trafficWeight:
      output.trafficWeight !== undefined && output.trafficWeight !== null
        ? output.trafficWeight
        : undefined
  } as any;
};

const deserializeAws_json1_1ECSTaskSetList = (
  output: any,
  context: __SerdeContext
): ECSTaskSet[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ECSTaskSet(entry, context)
  );
};

const deserializeAws_json1_1ELBInfo = (
  output: any,
  context: __SerdeContext
): ELBInfo => {
  return {
    __type: "ELBInfo",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1ELBInfoList = (
  output: any,
  context: __SerdeContext
): ELBInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ELBInfo(entry, context)
  );
};

const deserializeAws_json1_1ErrorInformation = (
  output: any,
  context: __SerdeContext
): ErrorInformation => {
  return {
    __type: "ErrorInformation",
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1GenericRevisionInfo = (
  output: any,
  context: __SerdeContext
): GenericRevisionInfo => {
  return {
    __type: "GenericRevisionInfo",
    deploymentGroups:
      output.deploymentGroups !== undefined && output.deploymentGroups !== null
        ? deserializeAws_json1_1DeploymentGroupsList(
            output.deploymentGroups,
            context
          )
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    firstUsedTime:
      output.firstUsedTime !== undefined && output.firstUsedTime !== null
        ? new Date(Math.round(output.firstUsedTime * 1000))
        : undefined,
    lastUsedTime:
      output.lastUsedTime !== undefined && output.lastUsedTime !== null
        ? new Date(Math.round(output.lastUsedTime * 1000))
        : undefined,
    registerTime:
      output.registerTime !== undefined && output.registerTime !== null
        ? new Date(Math.round(output.registerTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1GetApplicationOutput = (
  output: any,
  context: __SerdeContext
): GetApplicationOutput => {
  return {
    __type: "GetApplicationOutput",
    application:
      output.application !== undefined && output.application !== null
        ? deserializeAws_json1_1ApplicationInfo(output.application, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetApplicationRevisionOutput = (
  output: any,
  context: __SerdeContext
): GetApplicationRevisionOutput => {
  return {
    __type: "GetApplicationRevisionOutput",
    applicationName:
      output.applicationName !== undefined && output.applicationName !== null
        ? output.applicationName
        : undefined,
    revision:
      output.revision !== undefined && output.revision !== null
        ? deserializeAws_json1_1RevisionLocation(output.revision, context)
        : undefined,
    revisionInfo:
      output.revisionInfo !== undefined && output.revisionInfo !== null
        ? deserializeAws_json1_1GenericRevisionInfo(
            output.revisionInfo,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetDeploymentConfigOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentConfigOutput => {
  return {
    __type: "GetDeploymentConfigOutput",
    deploymentConfigInfo:
      output.deploymentConfigInfo !== undefined &&
      output.deploymentConfigInfo !== null
        ? deserializeAws_json1_1DeploymentConfigInfo(
            output.deploymentConfigInfo,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetDeploymentGroupOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentGroupOutput => {
  return {
    __type: "GetDeploymentGroupOutput",
    deploymentGroupInfo:
      output.deploymentGroupInfo !== undefined &&
      output.deploymentGroupInfo !== null
        ? deserializeAws_json1_1DeploymentGroupInfo(
            output.deploymentGroupInfo,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetDeploymentInstanceOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentInstanceOutput => {
  return {
    __type: "GetDeploymentInstanceOutput",
    instanceSummary:
      output.instanceSummary !== undefined && output.instanceSummary !== null
        ? deserializeAws_json1_1InstanceSummary(output.instanceSummary, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetDeploymentOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentOutput => {
  return {
    __type: "GetDeploymentOutput",
    deploymentInfo:
      output.deploymentInfo !== undefined && output.deploymentInfo !== null
        ? deserializeAws_json1_1DeploymentInfo(output.deploymentInfo, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetDeploymentTargetOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentTargetOutput => {
  return {
    __type: "GetDeploymentTargetOutput",
    deploymentTarget:
      output.deploymentTarget !== undefined && output.deploymentTarget !== null
        ? deserializeAws_json1_1DeploymentTarget(
            output.deploymentTarget,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetOnPremisesInstanceOutput = (
  output: any,
  context: __SerdeContext
): GetOnPremisesInstanceOutput => {
  return {
    __type: "GetOnPremisesInstanceOutput",
    instanceInfo:
      output.instanceInfo !== undefined && output.instanceInfo !== null
        ? deserializeAws_json1_1InstanceInfo(output.instanceInfo, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GitHubAccountTokenDoesNotExistException = (
  output: any,
  context: __SerdeContext
): GitHubAccountTokenDoesNotExistException => {
  return {
    __type: "GitHubAccountTokenDoesNotExistException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1GitHubAccountTokenNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1GitHubAccountTokenNameRequiredException = (
  output: any,
  context: __SerdeContext
): GitHubAccountTokenNameRequiredException => {
  return {
    __type: "GitHubAccountTokenNameRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1GitHubLocation = (
  output: any,
  context: __SerdeContext
): GitHubLocation => {
  return {
    __type: "GitHubLocation",
    commitId:
      output.commitId !== undefined && output.commitId !== null
        ? output.commitId
        : undefined,
    repository:
      output.repository !== undefined && output.repository !== null
        ? output.repository
        : undefined
  } as any;
};

const deserializeAws_json1_1GreenFleetProvisioningOption = (
  output: any,
  context: __SerdeContext
): GreenFleetProvisioningOption => {
  return {
    __type: "GreenFleetProvisioningOption",
    action:
      output.action !== undefined && output.action !== null
        ? output.action
        : undefined
  } as any;
};

const deserializeAws_json1_1IamArnRequiredException = (
  output: any,
  context: __SerdeContext
): IamArnRequiredException => {
  return {
    __type: "IamArnRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1IamSessionArnAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): IamSessionArnAlreadyRegisteredException => {
  return {
    __type: "IamSessionArnAlreadyRegisteredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1IamUserArnAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): IamUserArnAlreadyRegisteredException => {
  return {
    __type: "IamUserArnAlreadyRegisteredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1IamUserArnRequiredException = (
  output: any,
  context: __SerdeContext
): IamUserArnRequiredException => {
  return {
    __type: "IamUserArnRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceDoesNotExistException = (
  output: any,
  context: __SerdeContext
): InstanceDoesNotExistException => {
  return {
    __type: "InstanceDoesNotExistException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceIdRequiredException = (
  output: any,
  context: __SerdeContext
): InstanceIdRequiredException => {
  return {
    __type: "InstanceIdRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceInfo = (
  output: any,
  context: __SerdeContext
): InstanceInfo => {
  return {
    __type: "InstanceInfo",
    deregisterTime:
      output.deregisterTime !== undefined && output.deregisterTime !== null
        ? new Date(Math.round(output.deregisterTime * 1000))
        : undefined,
    iamSessionArn:
      output.iamSessionArn !== undefined && output.iamSessionArn !== null
        ? output.iamSessionArn
        : undefined,
    iamUserArn:
      output.iamUserArn !== undefined && output.iamUserArn !== null
        ? output.iamUserArn
        : undefined,
    instanceArn:
      output.instanceArn !== undefined && output.instanceArn !== null
        ? output.instanceArn
        : undefined,
    instanceName:
      output.instanceName !== undefined && output.instanceName !== null
        ? output.instanceName
        : undefined,
    registerTime:
      output.registerTime !== undefined && output.registerTime !== null
        ? new Date(Math.round(output.registerTime * 1000))
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceInfoList = (
  output: any,
  context: __SerdeContext
): InstanceInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceInfo(entry, context)
  );
};

const deserializeAws_json1_1InstanceLimitExceededException = (
  output: any,
  context: __SerdeContext
): InstanceLimitExceededException => {
  return {
    __type: "InstanceLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceNameAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): InstanceNameAlreadyRegisteredException => {
  return {
    __type: "InstanceNameAlreadyRegisteredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InstanceNameRequiredException = (
  output: any,
  context: __SerdeContext
): InstanceNameRequiredException => {
  return {
    __type: "InstanceNameRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceNotRegisteredException = (
  output: any,
  context: __SerdeContext
): InstanceNotRegisteredException => {
  return {
    __type: "InstanceNotRegisteredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InstancesList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InstanceSummary = (
  output: any,
  context: __SerdeContext
): InstanceSummary => {
  return {
    __type: "InstanceSummary",
    deploymentId:
      output.deploymentId !== undefined && output.deploymentId !== null
        ? output.deploymentId
        : undefined,
    instanceId:
      output.instanceId !== undefined && output.instanceId !== null
        ? output.instanceId
        : undefined,
    instanceType:
      output.instanceType !== undefined && output.instanceType !== null
        ? output.instanceType
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
        ? deserializeAws_json1_1LifecycleEventList(
            output.lifecycleEvents,
            context
          )
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1InstanceSummaryList = (
  output: any,
  context: __SerdeContext
): InstanceSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceSummary(entry, context)
  );
};

const deserializeAws_json1_1InstanceTarget = (
  output: any,
  context: __SerdeContext
): InstanceTarget => {
  return {
    __type: "InstanceTarget",
    deploymentId:
      output.deploymentId !== undefined && output.deploymentId !== null
        ? output.deploymentId
        : undefined,
    instanceLabel:
      output.instanceLabel !== undefined && output.instanceLabel !== null
        ? output.instanceLabel
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
        ? deserializeAws_json1_1LifecycleEventList(
            output.lifecycleEvents,
            context
          )
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    targetArn:
      output.targetArn !== undefined && output.targetArn !== null
        ? output.targetArn
        : undefined,
    targetId:
      output.targetId !== undefined && output.targetId !== null
        ? output.targetId
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidAlarmConfigException = (
  output: any,
  context: __SerdeContext
): InvalidAlarmConfigException => {
  return {
    __type: "InvalidAlarmConfigException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidApplicationNameException = (
  output: any,
  context: __SerdeContext
): InvalidApplicationNameException => {
  return {
    __type: "InvalidApplicationNameException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidArnException = (
  output: any,
  context: __SerdeContext
): InvalidArnException => {
  return {
    __type: "InvalidArnException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidAutoRollbackConfigException = (
  output: any,
  context: __SerdeContext
): InvalidAutoRollbackConfigException => {
  return {
    __type: "InvalidAutoRollbackConfigException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidAutoScalingGroupException = (
  output: any,
  context: __SerdeContext
): InvalidAutoScalingGroupException => {
  return {
    __type: "InvalidAutoScalingGroupException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidBlueGreenDeploymentConfigurationException => {
  return {
    __type: "InvalidBlueGreenDeploymentConfigurationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidBucketNameFilterException = (
  output: any,
  context: __SerdeContext
): InvalidBucketNameFilterException => {
  return {
    __type: "InvalidBucketNameFilterException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidComputePlatformException = (
  output: any,
  context: __SerdeContext
): InvalidComputePlatformException => {
  return {
    __type: "InvalidComputePlatformException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidDeployedStateFilterException = (
  output: any,
  context: __SerdeContext
): InvalidDeployedStateFilterException => {
  return {
    __type: "InvalidDeployedStateFilterException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentConfigNameException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentConfigNameException => {
  return {
    __type: "InvalidDeploymentConfigNameException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentGroupNameException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentGroupNameException => {
  return {
    __type: "InvalidDeploymentGroupNameException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentIdException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentIdException => {
  return {
    __type: "InvalidDeploymentIdException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentInstanceTypeException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentInstanceTypeException => {
  return {
    __type: "InvalidDeploymentInstanceTypeException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentStatusException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentStatusException => {
  return {
    __type: "InvalidDeploymentStatusException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentStyleException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentStyleException => {
  return {
    __type: "InvalidDeploymentStyleException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentTargetIdException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentTargetIdException => {
  return {
    __type: "InvalidDeploymentTargetIdException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidDeploymentWaitTypeException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentWaitTypeException => {
  return {
    __type: "InvalidDeploymentWaitTypeException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidEC2TagCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidEC2TagCombinationException => {
  return {
    __type: "InvalidEC2TagCombinationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidEC2TagException = (
  output: any,
  context: __SerdeContext
): InvalidEC2TagException => {
  return {
    __type: "InvalidEC2TagException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidECSServiceException = (
  output: any,
  context: __SerdeContext
): InvalidECSServiceException => {
  return {
    __type: "InvalidECSServiceException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidFileExistsBehaviorException = (
  output: any,
  context: __SerdeContext
): InvalidFileExistsBehaviorException => {
  return {
    __type: "InvalidFileExistsBehaviorException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidGitHubAccountTokenException = (
  output: any,
  context: __SerdeContext
): InvalidGitHubAccountTokenException => {
  return {
    __type: "InvalidGitHubAccountTokenException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidGitHubAccountTokenNameException = (
  output: any,
  context: __SerdeContext
): InvalidGitHubAccountTokenNameException => {
  return {
    __type: "InvalidGitHubAccountTokenNameException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidIamSessionArnException = (
  output: any,
  context: __SerdeContext
): InvalidIamSessionArnException => {
  return {
    __type: "InvalidIamSessionArnException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidIamUserArnException = (
  output: any,
  context: __SerdeContext
): InvalidIamUserArnException => {
  return {
    __type: "InvalidIamUserArnException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException = (
  output: any,
  context: __SerdeContext
): InvalidIgnoreApplicationStopFailuresValueException => {
  return {
    __type: "InvalidIgnoreApplicationStopFailuresValueException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  return {
    __type: "InvalidInputException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidInstanceNameException = (
  output: any,
  context: __SerdeContext
): InvalidInstanceNameException => {
  return {
    __type: "InvalidInstanceNameException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidInstanceStatusException = (
  output: any,
  context: __SerdeContext
): InvalidInstanceStatusException => {
  return {
    __type: "InvalidInstanceStatusException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidInstanceTypeException = (
  output: any,
  context: __SerdeContext
): InvalidInstanceTypeException => {
  return {
    __type: "InvalidInstanceTypeException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidKeyPrefixFilterException = (
  output: any,
  context: __SerdeContext
): InvalidKeyPrefixFilterException => {
  return {
    __type: "InvalidKeyPrefixFilterException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException = (
  output: any,
  context: __SerdeContext
): InvalidLifecycleEventHookExecutionIdException => {
  return {
    __type: "InvalidLifecycleEventHookExecutionIdException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException = (
  output: any,
  context: __SerdeContext
): InvalidLifecycleEventHookExecutionStatusException => {
  return {
    __type: "InvalidLifecycleEventHookExecutionStatusException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidLoadBalancerInfoException = (
  output: any,
  context: __SerdeContext
): InvalidLoadBalancerInfoException => {
  return {
    __type: "InvalidLoadBalancerInfoException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidMinimumHealthyHostValueException = (
  output: any,
  context: __SerdeContext
): InvalidMinimumHealthyHostValueException => {
  return {
    __type: "InvalidMinimumHealthyHostValueException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    __type: "InvalidNextTokenException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidOnPremisesTagCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidOnPremisesTagCombinationException => {
  return {
    __type: "InvalidOnPremisesTagCombinationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  return {
    __type: "InvalidOperationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRegistrationStatusException = (
  output: any,
  context: __SerdeContext
): InvalidRegistrationStatusException => {
  return {
    __type: "InvalidRegistrationStatusException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRevisionException = (
  output: any,
  context: __SerdeContext
): InvalidRevisionException => {
  return {
    __type: "InvalidRevisionException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRoleException = (
  output: any,
  context: __SerdeContext
): InvalidRoleException => {
  return {
    __type: "InvalidRoleException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidSortByException = (
  output: any,
  context: __SerdeContext
): InvalidSortByException => {
  return {
    __type: "InvalidSortByException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidSortOrderException = (
  output: any,
  context: __SerdeContext
): InvalidSortOrderException => {
  return {
    __type: "InvalidSortOrderException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTagException = (
  output: any,
  context: __SerdeContext
): InvalidTagException => {
  return {
    __type: "InvalidTagException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTagFilterException = (
  output: any,
  context: __SerdeContext
): InvalidTagFilterException => {
  return {
    __type: "InvalidTagFilterException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTagsToAddException = (
  output: any,
  context: __SerdeContext
): InvalidTagsToAddException => {
  return {
    __type: "InvalidTagsToAddException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTargetFilterNameException = (
  output: any,
  context: __SerdeContext
): InvalidTargetFilterNameException => {
  return {
    __type: "InvalidTargetFilterNameException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTargetGroupPairException = (
  output: any,
  context: __SerdeContext
): InvalidTargetGroupPairException => {
  return {
    __type: "InvalidTargetGroupPairException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTargetInstancesException = (
  output: any,
  context: __SerdeContext
): InvalidTargetInstancesException => {
  return {
    __type: "InvalidTargetInstancesException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTimeRangeException = (
  output: any,
  context: __SerdeContext
): InvalidTimeRangeException => {
  return {
    __type: "InvalidTimeRangeException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTrafficRoutingConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidTrafficRoutingConfigurationException => {
  return {
    __type: "InvalidTrafficRoutingConfigurationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTriggerConfigException = (
  output: any,
  context: __SerdeContext
): InvalidTriggerConfigException => {
  return {
    __type: "InvalidTriggerConfigException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException = (
  output: any,
  context: __SerdeContext
): InvalidUpdateOutdatedInstancesOnlyValueException => {
  return {
    __type: "InvalidUpdateOutdatedInstancesOnlyValueException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1LambdaFunctionInfo = (
  output: any,
  context: __SerdeContext
): LambdaFunctionInfo => {
  return {
    __type: "LambdaFunctionInfo",
    currentVersion:
      output.currentVersion !== undefined && output.currentVersion !== null
        ? output.currentVersion
        : undefined,
    functionAlias:
      output.functionAlias !== undefined && output.functionAlias !== null
        ? output.functionAlias
        : undefined,
    functionName:
      output.functionName !== undefined && output.functionName !== null
        ? output.functionName
        : undefined,
    targetVersion:
      output.targetVersion !== undefined && output.targetVersion !== null
        ? output.targetVersion
        : undefined,
    targetVersionWeight:
      output.targetVersionWeight !== undefined &&
      output.targetVersionWeight !== null
        ? output.targetVersionWeight
        : undefined
  } as any;
};

const deserializeAws_json1_1LambdaTarget = (
  output: any,
  context: __SerdeContext
): LambdaTarget => {
  return {
    __type: "LambdaTarget",
    deploymentId:
      output.deploymentId !== undefined && output.deploymentId !== null
        ? output.deploymentId
        : undefined,
    lambdaFunctionInfo:
      output.lambdaFunctionInfo !== undefined &&
      output.lambdaFunctionInfo !== null
        ? deserializeAws_json1_1LambdaFunctionInfo(
            output.lambdaFunctionInfo,
            context
          )
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    lifecycleEvents:
      output.lifecycleEvents !== undefined && output.lifecycleEvents !== null
        ? deserializeAws_json1_1LifecycleEventList(
            output.lifecycleEvents,
            context
          )
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    targetArn:
      output.targetArn !== undefined && output.targetArn !== null
        ? output.targetArn
        : undefined,
    targetId:
      output.targetId !== undefined && output.targetId !== null
        ? output.targetId
        : undefined
  } as any;
};

const deserializeAws_json1_1LastDeploymentInfo = (
  output: any,
  context: __SerdeContext
): LastDeploymentInfo => {
  return {
    __type: "LastDeploymentInfo",
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? new Date(Math.round(output.createTime * 1000))
        : undefined,
    deploymentId:
      output.deploymentId !== undefined && output.deploymentId !== null
        ? output.deploymentId
        : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null
        ? new Date(Math.round(output.endTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1LifecycleEvent = (
  output: any,
  context: __SerdeContext
): LifecycleEvent => {
  return {
    __type: "LifecycleEvent",
    diagnostics:
      output.diagnostics !== undefined && output.diagnostics !== null
        ? deserializeAws_json1_1Diagnostics(output.diagnostics, context)
        : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null
        ? new Date(Math.round(output.endTime * 1000))
        : undefined,
    lifecycleEventName:
      output.lifecycleEventName !== undefined &&
      output.lifecycleEventName !== null
        ? output.lifecycleEventName
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1LifecycleEventAlreadyCompletedException = (
  output: any,
  context: __SerdeContext
): LifecycleEventAlreadyCompletedException => {
  return {
    __type: "LifecycleEventAlreadyCompletedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1LifecycleEventList = (
  output: any,
  context: __SerdeContext
): LifecycleEvent[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LifecycleEvent(entry, context)
  );
};

const deserializeAws_json1_1LifecycleHookLimitExceededException = (
  output: any,
  context: __SerdeContext
): LifecycleHookLimitExceededException => {
  return {
    __type: "LifecycleHookLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListApplicationRevisionsOutput = (
  output: any,
  context: __SerdeContext
): ListApplicationRevisionsOutput => {
  return {
    __type: "ListApplicationRevisionsOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    revisions:
      output.revisions !== undefined && output.revisions !== null
        ? deserializeAws_json1_1RevisionLocationList(output.revisions, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListApplicationsOutput = (
  output: any,
  context: __SerdeContext
): ListApplicationsOutput => {
  return {
    __type: "ListApplicationsOutput",
    applications:
      output.applications !== undefined && output.applications !== null
        ? deserializeAws_json1_1ApplicationsList(output.applications, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListDeploymentConfigsOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentConfigsOutput => {
  return {
    __type: "ListDeploymentConfigsOutput",
    deploymentConfigsList:
      output.deploymentConfigsList !== undefined &&
      output.deploymentConfigsList !== null
        ? deserializeAws_json1_1DeploymentConfigsList(
            output.deploymentConfigsList,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListDeploymentGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentGroupsOutput => {
  return {
    __type: "ListDeploymentGroupsOutput",
    applicationName:
      output.applicationName !== undefined && output.applicationName !== null
        ? output.applicationName
        : undefined,
    deploymentGroups:
      output.deploymentGroups !== undefined && output.deploymentGroups !== null
        ? deserializeAws_json1_1DeploymentGroupsList(
            output.deploymentGroups,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListDeploymentInstancesOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentInstancesOutput => {
  return {
    __type: "ListDeploymentInstancesOutput",
    instancesList:
      output.instancesList !== undefined && output.instancesList !== null
        ? deserializeAws_json1_1InstancesList(output.instancesList, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListDeploymentsOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentsOutput => {
  return {
    __type: "ListDeploymentsOutput",
    deployments:
      output.deployments !== undefined && output.deployments !== null
        ? deserializeAws_json1_1DeploymentsList(output.deployments, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListDeploymentTargetsOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentTargetsOutput => {
  return {
    __type: "ListDeploymentTargetsOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    targetIds:
      output.targetIds !== undefined && output.targetIds !== null
        ? deserializeAws_json1_1TargetIdList(output.targetIds, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListenerArnList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ListGitHubAccountTokenNamesOutput = (
  output: any,
  context: __SerdeContext
): ListGitHubAccountTokenNamesOutput => {
  return {
    __type: "ListGitHubAccountTokenNamesOutput",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    tokenNameList:
      output.tokenNameList !== undefined && output.tokenNameList !== null
        ? deserializeAws_json1_1GitHubAccountTokenNameList(
            output.tokenNameList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListOnPremisesInstancesOutput = (
  output: any,
  context: __SerdeContext
): ListOnPremisesInstancesOutput => {
  return {
    __type: "ListOnPremisesInstancesOutput",
    instanceNames:
      output.instanceNames !== undefined && output.instanceNames !== null
        ? deserializeAws_json1_1InstanceNameList(output.instanceNames, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    __type: "ListTagsForResourceOutput",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1LoadBalancerInfo = (
  output: any,
  context: __SerdeContext
): LoadBalancerInfo => {
  return {
    __type: "LoadBalancerInfo",
    elbInfoList:
      output.elbInfoList !== undefined && output.elbInfoList !== null
        ? deserializeAws_json1_1ELBInfoList(output.elbInfoList, context)
        : undefined,
    targetGroupInfoList:
      output.targetGroupInfoList !== undefined &&
      output.targetGroupInfoList !== null
        ? deserializeAws_json1_1TargetGroupInfoList(
            output.targetGroupInfoList,
            context
          )
        : undefined,
    targetGroupPairInfoList:
      output.targetGroupPairInfoList !== undefined &&
      output.targetGroupPairInfoList !== null
        ? deserializeAws_json1_1TargetGroupPairInfoList(
            output.targetGroupPairInfoList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1MinimumHealthyHosts = (
  output: any,
  context: __SerdeContext
): MinimumHealthyHosts => {
  return {
    __type: "MinimumHealthyHosts",
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1MultipleIamArnsProvidedException = (
  output: any,
  context: __SerdeContext
): MultipleIamArnsProvidedException => {
  return {
    __type: "MultipleIamArnsProvidedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1OnPremisesTagSet = (
  output: any,
  context: __SerdeContext
): OnPremisesTagSet => {
  return {
    __type: "OnPremisesTagSet",
    onPremisesTagSetList:
      output.onPremisesTagSetList !== undefined &&
      output.onPremisesTagSetList !== null
        ? deserializeAws_json1_1OnPremisesTagSetList(
            output.onPremisesTagSetList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1OnPremisesTagSetList = (
  output: any,
  context: __SerdeContext
): TagFilter[][] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TagFilterList(entry, context)
  );
};

const deserializeAws_json1_1OperationNotSupportedException = (
  output: any,
  context: __SerdeContext
): OperationNotSupportedException => {
  return {
    __type: "OperationNotSupportedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PutLifecycleEventHookExecutionStatusOutput = (
  output: any,
  context: __SerdeContext
): PutLifecycleEventHookExecutionStatusOutput => {
  return {
    __type: "PutLifecycleEventHookExecutionStatusOutput",
    lifecycleEventHookExecutionId:
      output.lifecycleEventHookExecutionId !== undefined &&
      output.lifecycleEventHookExecutionId !== null
        ? output.lifecycleEventHookExecutionId
        : undefined
  } as any;
};

const deserializeAws_json1_1RawString = (
  output: any,
  context: __SerdeContext
): RawString => {
  return {
    __type: "RawString",
    content:
      output.content !== undefined && output.content !== null
        ? output.content
        : undefined,
    sha256:
      output.sha256 !== undefined && output.sha256 !== null
        ? output.sha256
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceArnRequiredException = (
  output: any,
  context: __SerdeContext
): ResourceArnRequiredException => {
  return {
    __type: "ResourceArnRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceValidationException = (
  output: any,
  context: __SerdeContext
): ResourceValidationException => {
  return {
    __type: "ResourceValidationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1RevisionDoesNotExistException = (
  output: any,
  context: __SerdeContext
): RevisionDoesNotExistException => {
  return {
    __type: "RevisionDoesNotExistException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1RevisionInfo = (
  output: any,
  context: __SerdeContext
): RevisionInfo => {
  return {
    __type: "RevisionInfo",
    genericRevisionInfo:
      output.genericRevisionInfo !== undefined &&
      output.genericRevisionInfo !== null
        ? deserializeAws_json1_1GenericRevisionInfo(
            output.genericRevisionInfo,
            context
          )
        : undefined,
    revisionLocation:
      output.revisionLocation !== undefined && output.revisionLocation !== null
        ? deserializeAws_json1_1RevisionLocation(
            output.revisionLocation,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1RevisionInfoList = (
  output: any,
  context: __SerdeContext
): RevisionInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RevisionInfo(entry, context)
  );
};

const deserializeAws_json1_1RevisionLocation = (
  output: any,
  context: __SerdeContext
): RevisionLocation => {
  return {
    __type: "RevisionLocation",
    appSpecContent:
      output.appSpecContent !== undefined && output.appSpecContent !== null
        ? deserializeAws_json1_1AppSpecContent(output.appSpecContent, context)
        : undefined,
    gitHubLocation:
      output.gitHubLocation !== undefined && output.gitHubLocation !== null
        ? deserializeAws_json1_1GitHubLocation(output.gitHubLocation, context)
        : undefined,
    revisionType:
      output.revisionType !== undefined && output.revisionType !== null
        ? output.revisionType
        : undefined,
    s3Location:
      output.s3Location !== undefined && output.s3Location !== null
        ? deserializeAws_json1_1S3Location(output.s3Location, context)
        : undefined,
    string:
      output.string !== undefined && output.string !== null
        ? deserializeAws_json1_1RawString(output.string, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1RevisionLocationList = (
  output: any,
  context: __SerdeContext
): RevisionLocation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RevisionLocation(entry, context)
  );
};

const deserializeAws_json1_1RevisionRequiredException = (
  output: any,
  context: __SerdeContext
): RevisionRequiredException => {
  return {
    __type: "RevisionRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1RoleRequiredException = (
  output: any,
  context: __SerdeContext
): RoleRequiredException => {
  return {
    __type: "RoleRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1RollbackInfo = (
  output: any,
  context: __SerdeContext
): RollbackInfo => {
  return {
    __type: "RollbackInfo",
    rollbackDeploymentId:
      output.rollbackDeploymentId !== undefined &&
      output.rollbackDeploymentId !== null
        ? output.rollbackDeploymentId
        : undefined,
    rollbackMessage:
      output.rollbackMessage !== undefined && output.rollbackMessage !== null
        ? output.rollbackMessage
        : undefined,
    rollbackTriggeringDeploymentId:
      output.rollbackTriggeringDeploymentId !== undefined &&
      output.rollbackTriggeringDeploymentId !== null
        ? output.rollbackTriggeringDeploymentId
        : undefined
  } as any;
};

const deserializeAws_json1_1S3Location = (
  output: any,
  context: __SerdeContext
): S3Location => {
  return {
    __type: "S3Location",
    bucket:
      output.bucket !== undefined && output.bucket !== null
        ? output.bucket
        : undefined,
    bundleType:
      output.bundleType !== undefined && output.bundleType !== null
        ? output.bundleType
        : undefined,
    eTag:
      output.eTag !== undefined && output.eTag !== null
        ? output.eTag
        : undefined,
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_json1_1StopDeploymentOutput = (
  output: any,
  context: __SerdeContext
): StopDeploymentOutput => {
  return {
    __type: "StopDeploymentOutput",
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusMessage:
      output.statusMessage !== undefined && output.statusMessage !== null
        ? output.statusMessage
        : undefined
  } as any;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagFilter = (
  output: any,
  context: __SerdeContext
): TagFilter => {
  return {
    __type: "TagFilter",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagFilterList = (
  output: any,
  context: __SerdeContext
): TagFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TagFilter(entry, context)
  );
};

const deserializeAws_json1_1TagLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagLimitExceededException => {
  return {
    __type: "TagLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagRequiredException = (
  output: any,
  context: __SerdeContext
): TagRequiredException => {
  return {
    __type: "TagRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TagResourceOutput = (
  output: any,
  context: __SerdeContext
): TagResourceOutput => {
  return {
    __type: "TagResourceOutput"
  } as any;
};

const deserializeAws_json1_1TagSetListLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagSetListLimitExceededException => {
  return {
    __type: "TagSetListLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TargetGroupInfo = (
  output: any,
  context: __SerdeContext
): TargetGroupInfo => {
  return {
    __type: "TargetGroupInfo",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1TargetGroupInfoList = (
  output: any,
  context: __SerdeContext
): TargetGroupInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TargetGroupInfo(entry, context)
  );
};

const deserializeAws_json1_1TargetGroupPairInfo = (
  output: any,
  context: __SerdeContext
): TargetGroupPairInfo => {
  return {
    __type: "TargetGroupPairInfo",
    prodTrafficRoute:
      output.prodTrafficRoute !== undefined && output.prodTrafficRoute !== null
        ? deserializeAws_json1_1TrafficRoute(output.prodTrafficRoute, context)
        : undefined,
    targetGroups:
      output.targetGroups !== undefined && output.targetGroups !== null
        ? deserializeAws_json1_1TargetGroupInfoList(
            output.targetGroups,
            context
          )
        : undefined,
    testTrafficRoute:
      output.testTrafficRoute !== undefined && output.testTrafficRoute !== null
        ? deserializeAws_json1_1TrafficRoute(output.testTrafficRoute, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1TargetGroupPairInfoList = (
  output: any,
  context: __SerdeContext
): TargetGroupPairInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TargetGroupPairInfo(entry, context)
  );
};

const deserializeAws_json1_1TargetIdList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TargetInstances = (
  output: any,
  context: __SerdeContext
): TargetInstances => {
  return {
    __type: "TargetInstances",
    autoScalingGroups:
      output.autoScalingGroups !== undefined &&
      output.autoScalingGroups !== null
        ? deserializeAws_json1_1AutoScalingGroupNameList(
            output.autoScalingGroups,
            context
          )
        : undefined,
    ec2TagSet:
      output.ec2TagSet !== undefined && output.ec2TagSet !== null
        ? deserializeAws_json1_1EC2TagSet(output.ec2TagSet, context)
        : undefined,
    tagFilters:
      output.tagFilters !== undefined && output.tagFilters !== null
        ? deserializeAws_json1_1EC2TagFilterList(output.tagFilters, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  return {
    __type: "ThrottlingException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TimeBasedCanary = (
  output: any,
  context: __SerdeContext
): TimeBasedCanary => {
  return {
    __type: "TimeBasedCanary",
    canaryInterval:
      output.canaryInterval !== undefined && output.canaryInterval !== null
        ? output.canaryInterval
        : undefined,
    canaryPercentage:
      output.canaryPercentage !== undefined && output.canaryPercentage !== null
        ? output.canaryPercentage
        : undefined
  } as any;
};

const deserializeAws_json1_1TimeBasedLinear = (
  output: any,
  context: __SerdeContext
): TimeBasedLinear => {
  return {
    __type: "TimeBasedLinear",
    linearInterval:
      output.linearInterval !== undefined && output.linearInterval !== null
        ? output.linearInterval
        : undefined,
    linearPercentage:
      output.linearPercentage !== undefined && output.linearPercentage !== null
        ? output.linearPercentage
        : undefined
  } as any;
};

const deserializeAws_json1_1TrafficRoute = (
  output: any,
  context: __SerdeContext
): TrafficRoute => {
  return {
    __type: "TrafficRoute",
    listenerArns:
      output.listenerArns !== undefined && output.listenerArns !== null
        ? deserializeAws_json1_1ListenerArnList(output.listenerArns, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1TrafficRoutingConfig = (
  output: any,
  context: __SerdeContext
): TrafficRoutingConfig => {
  return {
    __type: "TrafficRoutingConfig",
    timeBasedCanary:
      output.timeBasedCanary !== undefined && output.timeBasedCanary !== null
        ? deserializeAws_json1_1TimeBasedCanary(output.timeBasedCanary, context)
        : undefined,
    timeBasedLinear:
      output.timeBasedLinear !== undefined && output.timeBasedLinear !== null
        ? deserializeAws_json1_1TimeBasedLinear(output.timeBasedLinear, context)
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1TriggerConfig = (
  output: any,
  context: __SerdeContext
): TriggerConfig => {
  return {
    __type: "TriggerConfig",
    triggerEvents:
      output.triggerEvents !== undefined && output.triggerEvents !== null
        ? deserializeAws_json1_1TriggerEventTypeList(
            output.triggerEvents,
            context
          )
        : undefined,
    triggerName:
      output.triggerName !== undefined && output.triggerName !== null
        ? output.triggerName
        : undefined,
    triggerTargetArn:
      output.triggerTargetArn !== undefined && output.triggerTargetArn !== null
        ? output.triggerTargetArn
        : undefined
  } as any;
};

const deserializeAws_json1_1TriggerConfigList = (
  output: any,
  context: __SerdeContext
): TriggerConfig[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TriggerConfig(entry, context)
  );
};

const deserializeAws_json1_1TriggerEventTypeList = (
  output: any,
  context: __SerdeContext
): (TriggerEventType | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TriggerTargetsLimitExceededException = (
  output: any,
  context: __SerdeContext
): TriggerTargetsLimitExceededException => {
  return {
    __type: "TriggerTargetsLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1UnsupportedActionForDeploymentTypeException = (
  output: any,
  context: __SerdeContext
): UnsupportedActionForDeploymentTypeException => {
  return {
    __type: "UnsupportedActionForDeploymentTypeException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1UntagResourceOutput = (
  output: any,
  context: __SerdeContext
): UntagResourceOutput => {
  return {
    __type: "UntagResourceOutput"
  } as any;
};

const deserializeAws_json1_1UpdateDeploymentGroupOutput = (
  output: any,
  context: __SerdeContext
): UpdateDeploymentGroupOutput => {
  return {
    __type: "UpdateDeploymentGroupOutput",
    hooksNotCleanedUp:
      output.hooksNotCleanedUp !== undefined &&
      output.hooksNotCleanedUp !== null
        ? deserializeAws_json1_1AutoScalingGroupList(
            output.hooksNotCleanedUp,
            context
          )
        : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
