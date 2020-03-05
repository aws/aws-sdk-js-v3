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

export async function serializeAws_json1_1AddTagsToOnPremisesInstancesCommand(
  input: AddTagsToOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.AddTagsToOnPremisesInstances";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddTagsToOnPremisesInstancesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchGetApplicationRevisionsCommand(
  input: BatchGetApplicationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetApplicationRevisions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetApplicationRevisionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchGetApplicationsCommand(
  input: BatchGetApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetApplications";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetApplicationsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchGetDeploymentGroupsCommand(
  input: BatchGetDeploymentGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetDeploymentGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetDeploymentGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchGetDeploymentInstancesCommand(
  input: BatchGetDeploymentInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetDeploymentInstances";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetDeploymentInstancesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchGetDeploymentTargetsCommand(
  input: BatchGetDeploymentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetDeploymentTargets";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetDeploymentTargetsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchGetDeploymentsCommand(
  input: BatchGetDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetDeployments";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetDeploymentsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchGetOnPremisesInstancesCommand(
  input: BatchGetOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetOnPremisesInstances";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetOnPremisesInstancesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ContinueDeploymentCommand(
  input: ContinueDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ContinueDeployment";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ContinueDeploymentInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateApplicationCommand(
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.CreateApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateApplicationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateDeploymentCommand(
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.CreateDeployment";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDeploymentInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateDeploymentConfigCommand(
  input: CreateDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.CreateDeploymentConfig";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDeploymentConfigInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateDeploymentGroupCommand(
  input: CreateDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.CreateDeploymentGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDeploymentGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteApplicationCommand(
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.DeleteApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteDeploymentConfigCommand(
  input: DeleteDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.DeleteDeploymentConfig";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDeploymentConfigInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteDeploymentGroupCommand(
  input: DeleteDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.DeleteDeploymentGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDeploymentGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteGitHubAccountTokenCommand(
  input: DeleteGitHubAccountTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.DeleteGitHubAccountToken";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteGitHubAccountTokenInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeregisterOnPremisesInstanceCommand(
  input: DeregisterOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.DeregisterOnPremisesInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterOnPremisesInstanceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetApplicationCommand(
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetApplicationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetApplicationRevisionCommand(
  input: GetApplicationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetApplicationRevision";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetApplicationRevisionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDeploymentCommand(
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeployment";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDeploymentConfigCommand(
  input: GetDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeploymentConfig";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDeploymentConfigInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDeploymentGroupCommand(
  input: GetDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeploymentGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDeploymentGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDeploymentInstanceCommand(
  input: GetDeploymentInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeploymentInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDeploymentInstanceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDeploymentTargetCommand(
  input: GetDeploymentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeploymentTarget";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDeploymentTargetInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetOnPremisesInstanceCommand(
  input: GetOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetOnPremisesInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetOnPremisesInstanceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListApplicationRevisionsCommand(
  input: ListApplicationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListApplicationRevisions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListApplicationRevisionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListApplicationsCommand(
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListApplications";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListApplicationsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDeploymentConfigsCommand(
  input: ListDeploymentConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeploymentConfigs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDeploymentConfigsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDeploymentGroupsCommand(
  input: ListDeploymentGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeploymentGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDeploymentGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDeploymentInstancesCommand(
  input: ListDeploymentInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeploymentInstances";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDeploymentInstancesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDeploymentTargetsCommand(
  input: ListDeploymentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeploymentTargets";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDeploymentTargetsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDeploymentsCommand(
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeployments";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDeploymentsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListGitHubAccountTokenNamesCommand(
  input: ListGitHubAccountTokenNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListGitHubAccountTokenNames";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListGitHubAccountTokenNamesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListOnPremisesInstancesCommand(
  input: ListOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListOnPremisesInstances";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListOnPremisesInstancesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand(
  input: PutLifecycleEventHookExecutionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RegisterApplicationRevisionCommand(
  input: RegisterApplicationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.RegisterApplicationRevision";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterApplicationRevisionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RegisterOnPremisesInstanceCommand(
  input: RegisterOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.RegisterOnPremisesInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterOnPremisesInstanceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand(
  input: RemoveTagsFromOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand(
  input: SkipWaitTimeForInstanceTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "CodeDeploy_20141006.SkipWaitTimeForInstanceTermination";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopDeploymentCommand(
  input: StopDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.StopDeployment";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopDeploymentInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.UntagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateApplicationCommand(
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.UpdateApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateApplicationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDeploymentGroupCommand(
  input: UpdateDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.UpdateDeploymentGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDeploymentGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToOnPremisesInstancesCommandOutput> {
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
}

async function deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToOnPremisesInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1BatchGetApplicationRevisionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationRevisionsCommandOutput> {
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
}

async function deserializeAws_json1_1BatchGetApplicationRevisionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationRevisionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1BatchGetApplicationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationsCommandOutput> {
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
}

async function deserializeAws_json1_1BatchGetApplicationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetApplicationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1BatchGetDeploymentGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1BatchGetDeploymentGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1BatchGetDeploymentInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentInstancesCommandOutput> {
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
}

async function deserializeAws_json1_1BatchGetDeploymentInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1BatchGetDeploymentTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentTargetsCommandOutput> {
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
}

async function deserializeAws_json1_1BatchGetDeploymentTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentTargetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1BatchGetDeploymentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentsCommandOutput> {
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
}

async function deserializeAws_json1_1BatchGetDeploymentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDeploymentsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1BatchGetOnPremisesInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetOnPremisesInstancesCommandOutput> {
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
}

async function deserializeAws_json1_1BatchGetOnPremisesInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetOnPremisesInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ContinueDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueDeploymentCommandOutput> {
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
}

async function deserializeAws_json1_1ContinueDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueDeploymentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1CreateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
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
}

async function deserializeAws_json1_1CreateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1CreateDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> {
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
}

async function deserializeAws_json1_1CreateDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1CreateDeploymentConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentConfigCommandOutput> {
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
}

async function deserializeAws_json1_1CreateDeploymentConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentConfigCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1CreateDeploymentGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentGroupCommandOutput> {
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
}

async function deserializeAws_json1_1CreateDeploymentGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1DeleteApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1DeleteDeploymentConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentConfigCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteDeploymentConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentConfigCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1DeleteDeploymentGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentGroupCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteDeploymentGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1DeleteGitHubAccountTokenCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGitHubAccountTokenCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteGitHubAccountTokenCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGitHubAccountTokenCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1DeregisterOnPremisesInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOnPremisesInstanceCommandOutput> {
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
}

async function deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOnPremisesInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1GetApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> {
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
}

async function deserializeAws_json1_1GetApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1GetApplicationRevisionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationRevisionCommandOutput> {
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
}

async function deserializeAws_json1_1GetApplicationRevisionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationRevisionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1GetDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> {
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
}

async function deserializeAws_json1_1GetDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1GetDeploymentConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentConfigCommandOutput> {
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
}

async function deserializeAws_json1_1GetDeploymentConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentConfigCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1GetDeploymentGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentGroupCommandOutput> {
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
}

async function deserializeAws_json1_1GetDeploymentGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1GetDeploymentInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentInstanceCommandOutput> {
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
}

async function deserializeAws_json1_1GetDeploymentInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1GetDeploymentTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentTargetCommandOutput> {
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
}

async function deserializeAws_json1_1GetDeploymentTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentTargetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1GetOnPremisesInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOnPremisesInstanceCommandOutput> {
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
}

async function deserializeAws_json1_1GetOnPremisesInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOnPremisesInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListApplicationRevisionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationRevisionsCommandOutput> {
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
}

async function deserializeAws_json1_1ListApplicationRevisionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationRevisionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListApplicationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> {
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
}

async function deserializeAws_json1_1ListApplicationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListDeploymentConfigsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentConfigsCommandOutput> {
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
}

async function deserializeAws_json1_1ListDeploymentConfigsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentConfigsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListDeploymentGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1ListDeploymentGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListDeploymentInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentInstancesCommandOutput> {
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
}

async function deserializeAws_json1_1ListDeploymentInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListDeploymentTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentTargetsCommandOutput> {
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
}

async function deserializeAws_json1_1ListDeploymentTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentTargetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListDeploymentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> {
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
}

async function deserializeAws_json1_1ListDeploymentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListGitHubAccountTokenNamesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGitHubAccountTokenNamesCommandOutput> {
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
}

async function deserializeAws_json1_1ListGitHubAccountTokenNamesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGitHubAccountTokenNamesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListOnPremisesInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOnPremisesInstancesCommandOutput> {
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
}

async function deserializeAws_json1_1ListOnPremisesInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOnPremisesInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleEventHookExecutionStatusCommandOutput> {
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
}

async function deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleEventHookExecutionStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1RegisterApplicationRevisionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterApplicationRevisionCommandOutput> {
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
}

async function deserializeAws_json1_1RegisterApplicationRevisionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterApplicationRevisionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1RegisterOnPremisesInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOnPremisesInstanceCommandOutput> {
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
}

async function deserializeAws_json1_1RegisterOnPremisesInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOnPremisesInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput> {
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
}

async function deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SkipWaitTimeForInstanceTerminationCommandOutput> {
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
}

async function deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SkipWaitTimeForInstanceTerminationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1StopDeploymentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> {
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
}

async function deserializeAws_json1_1StopDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeploymentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1UpdateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1UpdateDeploymentGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentGroupCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateDeploymentGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeploymentGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

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
  const bodyParams: any = {};
  if (input.instanceNames !== undefined) {
    bodyParams["instanceNames"] = serializeAws_json1_1InstanceNameList(
      input.instanceNames,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Alarm = (
  input: Alarm,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1AlarmConfiguration = (
  input: AlarmConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.alarms !== undefined) {
    bodyParams["alarms"] = serializeAws_json1_1AlarmList(input.alarms, context);
  }
  if (input.enabled !== undefined) {
    bodyParams["enabled"] = input.enabled;
  }
  if (input.ignorePollAlarmFailure !== undefined) {
    bodyParams["ignorePollAlarmFailure"] = input.ignorePollAlarmFailure;
  }
  return bodyParams;
};

const serializeAws_json1_1AlarmList = (
  input: Array<Alarm>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Alarm(entry, context));
  }
  return contents;
};

const serializeAws_json1_1AppSpecContent = (
  input: AppSpecContent,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.content !== undefined) {
    bodyParams["content"] = input.content;
  }
  if (input.sha256 !== undefined) {
    bodyParams["sha256"] = input.sha256;
  }
  return bodyParams;
};

const serializeAws_json1_1ApplicationsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AutoRollbackConfiguration = (
  input: AutoRollbackConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.enabled !== undefined) {
    bodyParams["enabled"] = input.enabled;
  }
  if (input.events !== undefined) {
    bodyParams["events"] = serializeAws_json1_1AutoRollbackEventsList(
      input.events,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AutoRollbackEventsList = (
  input: Array<AutoRollbackEvent | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AutoScalingGroupNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1BatchGetApplicationRevisionsInput = (
  input: BatchGetApplicationRevisionsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.revisions !== undefined) {
    bodyParams["revisions"] = serializeAws_json1_1RevisionLocationList(
      input.revisions,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchGetApplicationsInput = (
  input: BatchGetApplicationsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationNames !== undefined) {
    bodyParams["applicationNames"] = serializeAws_json1_1ApplicationsList(
      input.applicationNames,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchGetDeploymentGroupsInput = (
  input: BatchGetDeploymentGroupsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.deploymentGroupNames !== undefined) {
    bodyParams[
      "deploymentGroupNames"
    ] = serializeAws_json1_1DeploymentGroupsList(
      input.deploymentGroupNames,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchGetDeploymentInstancesInput = (
  input: BatchGetDeploymentInstancesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  if (input.instanceIds !== undefined) {
    bodyParams["instanceIds"] = serializeAws_json1_1InstancesList(
      input.instanceIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchGetDeploymentTargetsInput = (
  input: BatchGetDeploymentTargetsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  if (input.targetIds !== undefined) {
    bodyParams["targetIds"] = serializeAws_json1_1TargetIdList(
      input.targetIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchGetDeploymentsInput = (
  input: BatchGetDeploymentsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentIds !== undefined) {
    bodyParams["deploymentIds"] = serializeAws_json1_1DeploymentsList(
      input.deploymentIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchGetOnPremisesInstancesInput = (
  input: BatchGetOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.instanceNames !== undefined) {
    bodyParams["instanceNames"] = serializeAws_json1_1InstanceNameList(
      input.instanceNames,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BlueGreenDeploymentConfiguration = (
  input: BlueGreenDeploymentConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentReadyOption !== undefined) {
    bodyParams[
      "deploymentReadyOption"
    ] = serializeAws_json1_1DeploymentReadyOption(
      input.deploymentReadyOption,
      context
    );
  }
  if (input.greenFleetProvisioningOption !== undefined) {
    bodyParams[
      "greenFleetProvisioningOption"
    ] = serializeAws_json1_1GreenFleetProvisioningOption(
      input.greenFleetProvisioningOption,
      context
    );
  }
  if (input.terminateBlueInstancesOnDeploymentSuccess !== undefined) {
    bodyParams[
      "terminateBlueInstancesOnDeploymentSuccess"
    ] = serializeAws_json1_1BlueInstanceTerminationOption(
      input.terminateBlueInstancesOnDeploymentSuccess,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BlueInstanceTerminationOption = (
  input: BlueInstanceTerminationOption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.action !== undefined) {
    bodyParams["action"] = input.action;
  }
  if (input.terminationWaitTimeInMinutes !== undefined) {
    bodyParams["terminationWaitTimeInMinutes"] =
      input.terminationWaitTimeInMinutes;
  }
  return bodyParams;
};

const serializeAws_json1_1ContinueDeploymentInput = (
  input: ContinueDeploymentInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  if (input.deploymentWaitType !== undefined) {
    bodyParams["deploymentWaitType"] = input.deploymentWaitType;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateApplicationInput = (
  input: CreateApplicationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.computePlatform !== undefined) {
    bodyParams["computePlatform"] = input.computePlatform;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDeploymentConfigInput = (
  input: CreateDeploymentConfigInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.computePlatform !== undefined) {
    bodyParams["computePlatform"] = input.computePlatform;
  }
  if (input.deploymentConfigName !== undefined) {
    bodyParams["deploymentConfigName"] = input.deploymentConfigName;
  }
  if (input.minimumHealthyHosts !== undefined) {
    bodyParams["minimumHealthyHosts"] = serializeAws_json1_1MinimumHealthyHosts(
      input.minimumHealthyHosts,
      context
    );
  }
  if (input.trafficRoutingConfig !== undefined) {
    bodyParams[
      "trafficRoutingConfig"
    ] = serializeAws_json1_1TrafficRoutingConfig(
      input.trafficRoutingConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDeploymentGroupInput = (
  input: CreateDeploymentGroupInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.alarmConfiguration !== undefined) {
    bodyParams["alarmConfiguration"] = serializeAws_json1_1AlarmConfiguration(
      input.alarmConfiguration,
      context
    );
  }
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.autoRollbackConfiguration !== undefined) {
    bodyParams[
      "autoRollbackConfiguration"
    ] = serializeAws_json1_1AutoRollbackConfiguration(
      input.autoRollbackConfiguration,
      context
    );
  }
  if (input.autoScalingGroups !== undefined) {
    bodyParams[
      "autoScalingGroups"
    ] = serializeAws_json1_1AutoScalingGroupNameList(
      input.autoScalingGroups,
      context
    );
  }
  if (input.blueGreenDeploymentConfiguration !== undefined) {
    bodyParams[
      "blueGreenDeploymentConfiguration"
    ] = serializeAws_json1_1BlueGreenDeploymentConfiguration(
      input.blueGreenDeploymentConfiguration,
      context
    );
  }
  if (input.deploymentConfigName !== undefined) {
    bodyParams["deploymentConfigName"] = input.deploymentConfigName;
  }
  if (input.deploymentGroupName !== undefined) {
    bodyParams["deploymentGroupName"] = input.deploymentGroupName;
  }
  if (input.deploymentStyle !== undefined) {
    bodyParams["deploymentStyle"] = serializeAws_json1_1DeploymentStyle(
      input.deploymentStyle,
      context
    );
  }
  if (input.ec2TagFilters !== undefined) {
    bodyParams["ec2TagFilters"] = serializeAws_json1_1EC2TagFilterList(
      input.ec2TagFilters,
      context
    );
  }
  if (input.ec2TagSet !== undefined) {
    bodyParams["ec2TagSet"] = serializeAws_json1_1EC2TagSet(
      input.ec2TagSet,
      context
    );
  }
  if (input.ecsServices !== undefined) {
    bodyParams["ecsServices"] = serializeAws_json1_1ECSServiceList(
      input.ecsServices,
      context
    );
  }
  if (input.loadBalancerInfo !== undefined) {
    bodyParams["loadBalancerInfo"] = serializeAws_json1_1LoadBalancerInfo(
      input.loadBalancerInfo,
      context
    );
  }
  if (input.onPremisesInstanceTagFilters !== undefined) {
    bodyParams[
      "onPremisesInstanceTagFilters"
    ] = serializeAws_json1_1TagFilterList(
      input.onPremisesInstanceTagFilters,
      context
    );
  }
  if (input.onPremisesTagSet !== undefined) {
    bodyParams["onPremisesTagSet"] = serializeAws_json1_1OnPremisesTagSet(
      input.onPremisesTagSet,
      context
    );
  }
  if (input.serviceRoleArn !== undefined) {
    bodyParams["serviceRoleArn"] = input.serviceRoleArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  if (input.triggerConfigurations !== undefined) {
    bodyParams["triggerConfigurations"] = serializeAws_json1_1TriggerConfigList(
      input.triggerConfigurations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDeploymentInput = (
  input: CreateDeploymentInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.autoRollbackConfiguration !== undefined) {
    bodyParams[
      "autoRollbackConfiguration"
    ] = serializeAws_json1_1AutoRollbackConfiguration(
      input.autoRollbackConfiguration,
      context
    );
  }
  if (input.deploymentConfigName !== undefined) {
    bodyParams["deploymentConfigName"] = input.deploymentConfigName;
  }
  if (input.deploymentGroupName !== undefined) {
    bodyParams["deploymentGroupName"] = input.deploymentGroupName;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.fileExistsBehavior !== undefined) {
    bodyParams["fileExistsBehavior"] = input.fileExistsBehavior;
  }
  if (input.ignoreApplicationStopFailures !== undefined) {
    bodyParams["ignoreApplicationStopFailures"] =
      input.ignoreApplicationStopFailures;
  }
  if (input.revision !== undefined) {
    bodyParams["revision"] = serializeAws_json1_1RevisionLocation(
      input.revision,
      context
    );
  }
  if (input.targetInstances !== undefined) {
    bodyParams["targetInstances"] = serializeAws_json1_1TargetInstances(
      input.targetInstances,
      context
    );
  }
  if (input.updateOutdatedInstancesOnly !== undefined) {
    bodyParams["updateOutdatedInstancesOnly"] =
      input.updateOutdatedInstancesOnly;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteApplicationInput = (
  input: DeleteApplicationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDeploymentConfigInput = (
  input: DeleteDeploymentConfigInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentConfigName !== undefined) {
    bodyParams["deploymentConfigName"] = input.deploymentConfigName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDeploymentGroupInput = (
  input: DeleteDeploymentGroupInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.deploymentGroupName !== undefined) {
    bodyParams["deploymentGroupName"] = input.deploymentGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteGitHubAccountTokenInput = (
  input: DeleteGitHubAccountTokenInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.tokenName !== undefined) {
    bodyParams["tokenName"] = input.tokenName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeploymentGroupsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DeploymentReadyOption = (
  input: DeploymentReadyOption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.actionOnTimeout !== undefined) {
    bodyParams["actionOnTimeout"] = input.actionOnTimeout;
  }
  if (input.waitTimeInMinutes !== undefined) {
    bodyParams["waitTimeInMinutes"] = input.waitTimeInMinutes;
  }
  return bodyParams;
};

const serializeAws_json1_1DeploymentStatusList = (
  input: Array<DeploymentStatus | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DeploymentStyle = (
  input: DeploymentStyle,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentOption !== undefined) {
    bodyParams["deploymentOption"] = input.deploymentOption;
  }
  if (input.deploymentType !== undefined) {
    bodyParams["deploymentType"] = input.deploymentType;
  }
  return bodyParams;
};

const serializeAws_json1_1DeploymentsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DeregisterOnPremisesInstanceInput = (
  input: DeregisterOnPremisesInstanceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1EC2TagFilter = (
  input: EC2TagFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1EC2TagFilterList = (
  input: Array<EC2TagFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1EC2TagFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1EC2TagSet = (
  input: EC2TagSet,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ec2TagSetList !== undefined) {
    bodyParams["ec2TagSetList"] = serializeAws_json1_1EC2TagSetList(
      input.ec2TagSetList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1EC2TagSetList = (
  input: Array<Array<EC2TagFilter>>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1EC2TagFilterList(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ECSService = (
  input: ECSService,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.clusterName !== undefined) {
    bodyParams["clusterName"] = input.clusterName;
  }
  if (input.serviceName !== undefined) {
    bodyParams["serviceName"] = input.serviceName;
  }
  return bodyParams;
};

const serializeAws_json1_1ECSServiceList = (
  input: Array<ECSService>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ECSService(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ELBInfo = (
  input: ELBInfo,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1ELBInfoList = (
  input: Array<ELBInfo>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ELBInfo(entry, context));
  }
  return contents;
};

const serializeAws_json1_1FilterValueList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1GetApplicationInput = (
  input: GetApplicationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetApplicationRevisionInput = (
  input: GetApplicationRevisionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.revision !== undefined) {
    bodyParams["revision"] = serializeAws_json1_1RevisionLocation(
      input.revision,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1GetDeploymentConfigInput = (
  input: GetDeploymentConfigInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentConfigName !== undefined) {
    bodyParams["deploymentConfigName"] = input.deploymentConfigName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDeploymentGroupInput = (
  input: GetDeploymentGroupInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.deploymentGroupName !== undefined) {
    bodyParams["deploymentGroupName"] = input.deploymentGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDeploymentInput = (
  input: GetDeploymentInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDeploymentInstanceInput = (
  input: GetDeploymentInstanceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  if (input.instanceId !== undefined) {
    bodyParams["instanceId"] = input.instanceId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDeploymentTargetInput = (
  input: GetDeploymentTargetInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  if (input.targetId !== undefined) {
    bodyParams["targetId"] = input.targetId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetOnPremisesInstanceInput = (
  input: GetOnPremisesInstanceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1GitHubLocation = (
  input: GitHubLocation,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.commitId !== undefined) {
    bodyParams["commitId"] = input.commitId;
  }
  if (input.repository !== undefined) {
    bodyParams["repository"] = input.repository;
  }
  return bodyParams;
};

const serializeAws_json1_1GreenFleetProvisioningOption = (
  input: GreenFleetProvisioningOption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.action !== undefined) {
    bodyParams["action"] = input.action;
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1InstanceStatusList = (
  input: Array<InstanceStatus | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1InstanceTypeList = (
  input: Array<_InstanceType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1InstancesList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ListApplicationRevisionsInput = (
  input: ListApplicationRevisionsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.deployed !== undefined) {
    bodyParams["deployed"] = input.deployed;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.s3Bucket !== undefined) {
    bodyParams["s3Bucket"] = input.s3Bucket;
  }
  if (input.s3KeyPrefix !== undefined) {
    bodyParams["s3KeyPrefix"] = input.s3KeyPrefix;
  }
  if (input.sortBy !== undefined) {
    bodyParams["sortBy"] = input.sortBy;
  }
  if (input.sortOrder !== undefined) {
    bodyParams["sortOrder"] = input.sortOrder;
  }
  return bodyParams;
};

const serializeAws_json1_1ListApplicationsInput = (
  input: ListApplicationsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDeploymentConfigsInput = (
  input: ListDeploymentConfigsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDeploymentGroupsInput = (
  input: ListDeploymentGroupsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDeploymentInstancesInput = (
  input: ListDeploymentInstancesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  if (input.instanceStatusFilter !== undefined) {
    bodyParams["instanceStatusFilter"] = serializeAws_json1_1InstanceStatusList(
      input.instanceStatusFilter,
      context
    );
  }
  if (input.instanceTypeFilter !== undefined) {
    bodyParams["instanceTypeFilter"] = serializeAws_json1_1InstanceTypeList(
      input.instanceTypeFilter,
      context
    );
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDeploymentTargetsInput = (
  input: ListDeploymentTargetsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.targetFilters !== undefined) {
    bodyParams["targetFilters"] = serializeAws_json1_1TargetFilters(
      input.targetFilters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListDeploymentsInput = (
  input: ListDeploymentsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.createTimeRange !== undefined) {
    bodyParams["createTimeRange"] = serializeAws_json1_1TimeRange(
      input.createTimeRange,
      context
    );
  }
  if (input.deploymentGroupName !== undefined) {
    bodyParams["deploymentGroupName"] = input.deploymentGroupName;
  }
  if (input.includeOnlyStatuses !== undefined) {
    bodyParams[
      "includeOnlyStatuses"
    ] = serializeAws_json1_1DeploymentStatusList(
      input.includeOnlyStatuses,
      context
    );
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListGitHubAccountTokenNamesInput = (
  input: ListGitHubAccountTokenNamesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListOnPremisesInstancesInput = (
  input: ListOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.registrationStatus !== undefined) {
    bodyParams["registrationStatus"] = input.registrationStatus;
  }
  if (input.tagFilters !== undefined) {
    bodyParams["tagFilters"] = serializeAws_json1_1TagFilterList(
      input.tagFilters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListenerArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1LoadBalancerInfo = (
  input: LoadBalancerInfo,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.elbInfoList !== undefined) {
    bodyParams["elbInfoList"] = serializeAws_json1_1ELBInfoList(
      input.elbInfoList,
      context
    );
  }
  if (input.targetGroupInfoList !== undefined) {
    bodyParams["targetGroupInfoList"] = serializeAws_json1_1TargetGroupInfoList(
      input.targetGroupInfoList,
      context
    );
  }
  if (input.targetGroupPairInfoList !== undefined) {
    bodyParams[
      "targetGroupPairInfoList"
    ] = serializeAws_json1_1TargetGroupPairInfoList(
      input.targetGroupPairInfoList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1MinimumHealthyHosts = (
  input: MinimumHealthyHosts,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1OnPremisesTagSet = (
  input: OnPremisesTagSet,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.onPremisesTagSetList !== undefined) {
    bodyParams[
      "onPremisesTagSetList"
    ] = serializeAws_json1_1OnPremisesTagSetList(
      input.onPremisesTagSetList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1OnPremisesTagSetList = (
  input: Array<Array<TagFilter>>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1TagFilterList(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput = (
  input: PutLifecycleEventHookExecutionStatusInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  if (input.lifecycleEventHookExecutionId !== undefined) {
    bodyParams["lifecycleEventHookExecutionId"] =
      input.lifecycleEventHookExecutionId;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  return bodyParams;
};

const serializeAws_json1_1RawString = (
  input: RawString,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.content !== undefined) {
    bodyParams["content"] = input.content;
  }
  if (input.sha256 !== undefined) {
    bodyParams["sha256"] = input.sha256;
  }
  return bodyParams;
};

const serializeAws_json1_1RegisterApplicationRevisionInput = (
  input: RegisterApplicationRevisionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.revision !== undefined) {
    bodyParams["revision"] = serializeAws_json1_1RevisionLocation(
      input.revision,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RegisterOnPremisesInstanceInput = (
  input: RegisterOnPremisesInstanceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.iamSessionArn !== undefined) {
    bodyParams["iamSessionArn"] = input.iamSessionArn;
  }
  if (input.iamUserArn !== undefined) {
    bodyParams["iamUserArn"] = input.iamUserArn;
  }
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput = (
  input: RemoveTagsFromOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.instanceNames !== undefined) {
    bodyParams["instanceNames"] = serializeAws_json1_1InstanceNameList(
      input.instanceNames,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1RevisionLocation = (
  input: RevisionLocation,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.appSpecContent !== undefined) {
    bodyParams["appSpecContent"] = serializeAws_json1_1AppSpecContent(
      input.appSpecContent,
      context
    );
  }
  if (input.gitHubLocation !== undefined) {
    bodyParams["gitHubLocation"] = serializeAws_json1_1GitHubLocation(
      input.gitHubLocation,
      context
    );
  }
  if (input.revisionType !== undefined) {
    bodyParams["revisionType"] = input.revisionType;
  }
  if (input.s3Location !== undefined) {
    bodyParams["s3Location"] = serializeAws_json1_1S3Location(
      input.s3Location,
      context
    );
  }
  if (input.string !== undefined) {
    bodyParams["string"] = serializeAws_json1_1RawString(input.string, context);
  }
  return bodyParams;
};

const serializeAws_json1_1RevisionLocationList = (
  input: Array<RevisionLocation>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1RevisionLocation(entry, context));
  }
  return contents;
};

const serializeAws_json1_1S3Location = (
  input: S3Location,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.bucket !== undefined) {
    bodyParams["bucket"] = input.bucket;
  }
  if (input.bundleType !== undefined) {
    bodyParams["bundleType"] = input.bundleType;
  }
  if (input.eTag !== undefined) {
    bodyParams["eTag"] = input.eTag;
  }
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput = (
  input: SkipWaitTimeForInstanceTerminationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  return bodyParams;
};

const serializeAws_json1_1StopDeploymentInput = (
  input: StopDeploymentInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.autoRollbackEnabled !== undefined) {
    bodyParams["autoRollbackEnabled"] = input.autoRollbackEnabled;
  }
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagFilter = (
  input: TagFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagFilterList = (
  input: Array<TagFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1TagFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1TargetFilters = (
  input: { [key: string]: Array<string> },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1FilterValueList(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_1TargetGroupInfo = (
  input: TargetGroupInfo,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1TargetGroupInfoList = (
  input: Array<TargetGroupInfo>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1TargetGroupInfo(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TargetGroupPairInfo = (
  input: TargetGroupPairInfo,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.prodTrafficRoute !== undefined) {
    bodyParams["prodTrafficRoute"] = serializeAws_json1_1TrafficRoute(
      input.prodTrafficRoute,
      context
    );
  }
  if (input.targetGroups !== undefined) {
    bodyParams["targetGroups"] = serializeAws_json1_1TargetGroupInfoList(
      input.targetGroups,
      context
    );
  }
  if (input.testTrafficRoute !== undefined) {
    bodyParams["testTrafficRoute"] = serializeAws_json1_1TrafficRoute(
      input.testTrafficRoute,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1TargetGroupPairInfoList = (
  input: Array<TargetGroupPairInfo>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1TargetGroupPairInfo(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TargetIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TargetInstances = (
  input: TargetInstances,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.autoScalingGroups !== undefined) {
    bodyParams[
      "autoScalingGroups"
    ] = serializeAws_json1_1AutoScalingGroupNameList(
      input.autoScalingGroups,
      context
    );
  }
  if (input.ec2TagSet !== undefined) {
    bodyParams["ec2TagSet"] = serializeAws_json1_1EC2TagSet(
      input.ec2TagSet,
      context
    );
  }
  if (input.tagFilters !== undefined) {
    bodyParams["tagFilters"] = serializeAws_json1_1EC2TagFilterList(
      input.tagFilters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1TimeBasedCanary = (
  input: TimeBasedCanary,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.canaryInterval !== undefined) {
    bodyParams["canaryInterval"] = input.canaryInterval;
  }
  if (input.canaryPercentage !== undefined) {
    bodyParams["canaryPercentage"] = input.canaryPercentage;
  }
  return bodyParams;
};

const serializeAws_json1_1TimeBasedLinear = (
  input: TimeBasedLinear,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.linearInterval !== undefined) {
    bodyParams["linearInterval"] = input.linearInterval;
  }
  if (input.linearPercentage !== undefined) {
    bodyParams["linearPercentage"] = input.linearPercentage;
  }
  return bodyParams;
};

const serializeAws_json1_1TimeRange = (
  input: TimeRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.end !== undefined) {
    bodyParams["end"] = Math.round(input.end.getTime() / 1000);
  }
  if (input.start !== undefined) {
    bodyParams["start"] = Math.round(input.start.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1TrafficRoute = (
  input: TrafficRoute,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.listenerArns !== undefined) {
    bodyParams["listenerArns"] = serializeAws_json1_1ListenerArnList(
      input.listenerArns,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1TrafficRoutingConfig = (
  input: TrafficRoutingConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.timeBasedCanary !== undefined) {
    bodyParams["timeBasedCanary"] = serializeAws_json1_1TimeBasedCanary(
      input.timeBasedCanary,
      context
    );
  }
  if (input.timeBasedLinear !== undefined) {
    bodyParams["timeBasedLinear"] = serializeAws_json1_1TimeBasedLinear(
      input.timeBasedLinear,
      context
    );
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1TriggerConfig = (
  input: TriggerConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.triggerEvents !== undefined) {
    bodyParams["triggerEvents"] = serializeAws_json1_1TriggerEventTypeList(
      input.triggerEvents,
      context
    );
  }
  if (input.triggerName !== undefined) {
    bodyParams["triggerName"] = input.triggerName;
  }
  if (input.triggerTargetArn !== undefined) {
    bodyParams["triggerTargetArn"] = input.triggerTargetArn;
  }
  return bodyParams;
};

const serializeAws_json1_1TriggerConfigList = (
  input: Array<TriggerConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1TriggerConfig(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TriggerEventTypeList = (
  input: Array<TriggerEventType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateApplicationInput = (
  input: UpdateApplicationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.newApplicationName !== undefined) {
    bodyParams["newApplicationName"] = input.newApplicationName;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDeploymentGroupInput = (
  input: UpdateDeploymentGroupInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.alarmConfiguration !== undefined) {
    bodyParams["alarmConfiguration"] = serializeAws_json1_1AlarmConfiguration(
      input.alarmConfiguration,
      context
    );
  }
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  if (input.autoRollbackConfiguration !== undefined) {
    bodyParams[
      "autoRollbackConfiguration"
    ] = serializeAws_json1_1AutoRollbackConfiguration(
      input.autoRollbackConfiguration,
      context
    );
  }
  if (input.autoScalingGroups !== undefined) {
    bodyParams[
      "autoScalingGroups"
    ] = serializeAws_json1_1AutoScalingGroupNameList(
      input.autoScalingGroups,
      context
    );
  }
  if (input.blueGreenDeploymentConfiguration !== undefined) {
    bodyParams[
      "blueGreenDeploymentConfiguration"
    ] = serializeAws_json1_1BlueGreenDeploymentConfiguration(
      input.blueGreenDeploymentConfiguration,
      context
    );
  }
  if (input.currentDeploymentGroupName !== undefined) {
    bodyParams["currentDeploymentGroupName"] = input.currentDeploymentGroupName;
  }
  if (input.deploymentConfigName !== undefined) {
    bodyParams["deploymentConfigName"] = input.deploymentConfigName;
  }
  if (input.deploymentStyle !== undefined) {
    bodyParams["deploymentStyle"] = serializeAws_json1_1DeploymentStyle(
      input.deploymentStyle,
      context
    );
  }
  if (input.ec2TagFilters !== undefined) {
    bodyParams["ec2TagFilters"] = serializeAws_json1_1EC2TagFilterList(
      input.ec2TagFilters,
      context
    );
  }
  if (input.ec2TagSet !== undefined) {
    bodyParams["ec2TagSet"] = serializeAws_json1_1EC2TagSet(
      input.ec2TagSet,
      context
    );
  }
  if (input.ecsServices !== undefined) {
    bodyParams["ecsServices"] = serializeAws_json1_1ECSServiceList(
      input.ecsServices,
      context
    );
  }
  if (input.loadBalancerInfo !== undefined) {
    bodyParams["loadBalancerInfo"] = serializeAws_json1_1LoadBalancerInfo(
      input.loadBalancerInfo,
      context
    );
  }
  if (input.newDeploymentGroupName !== undefined) {
    bodyParams["newDeploymentGroupName"] = input.newDeploymentGroupName;
  }
  if (input.onPremisesInstanceTagFilters !== undefined) {
    bodyParams[
      "onPremisesInstanceTagFilters"
    ] = serializeAws_json1_1TagFilterList(
      input.onPremisesInstanceTagFilters,
      context
    );
  }
  if (input.onPremisesTagSet !== undefined) {
    bodyParams["onPremisesTagSet"] = serializeAws_json1_1OnPremisesTagSet(
      input.onPremisesTagSet,
      context
    );
  }
  if (input.serviceRoleArn !== undefined) {
    bodyParams["serviceRoleArn"] = input.serviceRoleArn;
  }
  if (input.triggerConfigurations !== undefined) {
    bodyParams["triggerConfigurations"] = serializeAws_json1_1TriggerConfigList(
      input.triggerConfigurations,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1Alarm = (
  output: any,
  context: __SerdeContext
): Alarm => {
  let contents: any = {
    __type: "Alarm",
    name: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1AlarmConfiguration = (
  output: any,
  context: __SerdeContext
): AlarmConfiguration => {
  let contents: any = {
    __type: "AlarmConfiguration",
    alarms: undefined,
    enabled: undefined,
    ignorePollAlarmFailure: undefined
  };
  if (output.alarms !== undefined && output.alarms !== null) {
    contents.alarms = deserializeAws_json1_1AlarmList(output.alarms, context);
  }
  if (output.enabled !== undefined && output.enabled !== null) {
    contents.enabled = output.enabled;
  }
  if (
    output.ignorePollAlarmFailure !== undefined &&
    output.ignorePollAlarmFailure !== null
  ) {
    contents.ignorePollAlarmFailure = output.ignorePollAlarmFailure;
  }
  return contents;
};

const deserializeAws_json1_1AlarmList = (
  output: any,
  context: __SerdeContext
): Array<Alarm> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Alarm(entry, context)
  );
};

const deserializeAws_json1_1AlarmsLimitExceededException = (
  output: any,
  context: __SerdeContext
): AlarmsLimitExceededException => {
  let contents: any = {
    __type: "AlarmsLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1AppSpecContent = (
  output: any,
  context: __SerdeContext
): AppSpecContent => {
  let contents: any = {
    __type: "AppSpecContent",
    content: undefined,
    sha256: undefined
  };
  if (output.content !== undefined && output.content !== null) {
    contents.content = output.content;
  }
  if (output.sha256 !== undefined && output.sha256 !== null) {
    contents.sha256 = output.sha256;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ApplicationAlreadyExistsException => {
  let contents: any = {
    __type: "ApplicationAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationDoesNotExistException = (
  output: any,
  context: __SerdeContext
): ApplicationDoesNotExistException => {
  let contents: any = {
    __type: "ApplicationDoesNotExistException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationInfo = (
  output: any,
  context: __SerdeContext
): ApplicationInfo => {
  let contents: any = {
    __type: "ApplicationInfo",
    applicationId: undefined,
    applicationName: undefined,
    computePlatform: undefined,
    createTime: undefined,
    gitHubAccountName: undefined,
    linkedToGitHub: undefined
  };
  if (output.applicationId !== undefined && output.applicationId !== null) {
    contents.applicationId = output.applicationId;
  }
  if (output.applicationName !== undefined && output.applicationName !== null) {
    contents.applicationName = output.applicationName;
  }
  if (output.computePlatform !== undefined && output.computePlatform !== null) {
    contents.computePlatform = output.computePlatform;
  }
  if (output.createTime !== undefined && output.createTime !== null) {
    contents.createTime = new Date(Math.round(output.createTime * 1000));
  }
  if (
    output.gitHubAccountName !== undefined &&
    output.gitHubAccountName !== null
  ) {
    contents.gitHubAccountName = output.gitHubAccountName;
  }
  if (output.linkedToGitHub !== undefined && output.linkedToGitHub !== null) {
    contents.linkedToGitHub = output.linkedToGitHub;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationLimitExceededException = (
  output: any,
  context: __SerdeContext
): ApplicationLimitExceededException => {
  let contents: any = {
    __type: "ApplicationLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationNameRequiredException = (
  output: any,
  context: __SerdeContext
): ApplicationNameRequiredException => {
  let contents: any = {
    __type: "ApplicationNameRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationsInfoList = (
  output: any,
  context: __SerdeContext
): Array<ApplicationInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ApplicationInfo(entry, context)
  );
};

const deserializeAws_json1_1ApplicationsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ArnNotSupportedException = (
  output: any,
  context: __SerdeContext
): ArnNotSupportedException => {
  let contents: any = {
    __type: "ArnNotSupportedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1AutoRollbackConfiguration = (
  output: any,
  context: __SerdeContext
): AutoRollbackConfiguration => {
  let contents: any = {
    __type: "AutoRollbackConfiguration",
    enabled: undefined,
    events: undefined
  };
  if (output.enabled !== undefined && output.enabled !== null) {
    contents.enabled = output.enabled;
  }
  if (output.events !== undefined && output.events !== null) {
    contents.events = deserializeAws_json1_1AutoRollbackEventsList(
      output.events,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AutoRollbackEventsList = (
  output: any,
  context: __SerdeContext
): Array<AutoRollbackEvent | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AutoScalingGroup = (
  output: any,
  context: __SerdeContext
): AutoScalingGroup => {
  let contents: any = {
    __type: "AutoScalingGroup",
    hook: undefined,
    name: undefined
  };
  if (output.hook !== undefined && output.hook !== null) {
    contents.hook = output.hook;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1AutoScalingGroupList = (
  output: any,
  context: __SerdeContext
): Array<AutoScalingGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AutoScalingGroup(entry, context)
  );
};

const deserializeAws_json1_1AutoScalingGroupNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1BatchGetApplicationRevisionsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetApplicationRevisionsOutput => {
  let contents: any = {
    __type: "BatchGetApplicationRevisionsOutput",
    applicationName: undefined,
    errorMessage: undefined,
    revisions: undefined
  };
  if (output.applicationName !== undefined && output.applicationName !== null) {
    contents.applicationName = output.applicationName;
  }
  if (output.errorMessage !== undefined && output.errorMessage !== null) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.revisions !== undefined && output.revisions !== null) {
    contents.revisions = deserializeAws_json1_1RevisionInfoList(
      output.revisions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchGetApplicationsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetApplicationsOutput => {
  let contents: any = {
    __type: "BatchGetApplicationsOutput",
    applicationsInfo: undefined
  };
  if (
    output.applicationsInfo !== undefined &&
    output.applicationsInfo !== null
  ) {
    contents.applicationsInfo = deserializeAws_json1_1ApplicationsInfoList(
      output.applicationsInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchGetDeploymentGroupsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentGroupsOutput => {
  let contents: any = {
    __type: "BatchGetDeploymentGroupsOutput",
    deploymentGroupsInfo: undefined,
    errorMessage: undefined
  };
  if (
    output.deploymentGroupsInfo !== undefined &&
    output.deploymentGroupsInfo !== null
  ) {
    contents.deploymentGroupsInfo = deserializeAws_json1_1DeploymentGroupInfoList(
      output.deploymentGroupsInfo,
      context
    );
  }
  if (output.errorMessage !== undefined && output.errorMessage !== null) {
    contents.errorMessage = output.errorMessage;
  }
  return contents;
};

const deserializeAws_json1_1BatchGetDeploymentInstancesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentInstancesOutput => {
  let contents: any = {
    __type: "BatchGetDeploymentInstancesOutput",
    errorMessage: undefined,
    instancesSummary: undefined
  };
  if (output.errorMessage !== undefined && output.errorMessage !== null) {
    contents.errorMessage = output.errorMessage;
  }
  if (
    output.instancesSummary !== undefined &&
    output.instancesSummary !== null
  ) {
    contents.instancesSummary = deserializeAws_json1_1InstanceSummaryList(
      output.instancesSummary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchGetDeploymentTargetsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentTargetsOutput => {
  let contents: any = {
    __type: "BatchGetDeploymentTargetsOutput",
    deploymentTargets: undefined
  };
  if (
    output.deploymentTargets !== undefined &&
    output.deploymentTargets !== null
  ) {
    contents.deploymentTargets = deserializeAws_json1_1DeploymentTargetList(
      output.deploymentTargets,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchGetDeploymentsOutput = (
  output: any,
  context: __SerdeContext
): BatchGetDeploymentsOutput => {
  let contents: any = {
    __type: "BatchGetDeploymentsOutput",
    deploymentsInfo: undefined
  };
  if (output.deploymentsInfo !== undefined && output.deploymentsInfo !== null) {
    contents.deploymentsInfo = deserializeAws_json1_1DeploymentsInfoList(
      output.deploymentsInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchGetOnPremisesInstancesOutput = (
  output: any,
  context: __SerdeContext
): BatchGetOnPremisesInstancesOutput => {
  let contents: any = {
    __type: "BatchGetOnPremisesInstancesOutput",
    instanceInfos: undefined
  };
  if (output.instanceInfos !== undefined && output.instanceInfos !== null) {
    contents.instanceInfos = deserializeAws_json1_1InstanceInfoList(
      output.instanceInfos,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchLimitExceededException = (
  output: any,
  context: __SerdeContext
): BatchLimitExceededException => {
  let contents: any = {
    __type: "BatchLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1BlueGreenDeploymentConfiguration = (
  output: any,
  context: __SerdeContext
): BlueGreenDeploymentConfiguration => {
  let contents: any = {
    __type: "BlueGreenDeploymentConfiguration",
    deploymentReadyOption: undefined,
    greenFleetProvisioningOption: undefined,
    terminateBlueInstancesOnDeploymentSuccess: undefined
  };
  if (
    output.deploymentReadyOption !== undefined &&
    output.deploymentReadyOption !== null
  ) {
    contents.deploymentReadyOption = deserializeAws_json1_1DeploymentReadyOption(
      output.deploymentReadyOption,
      context
    );
  }
  if (
    output.greenFleetProvisioningOption !== undefined &&
    output.greenFleetProvisioningOption !== null
  ) {
    contents.greenFleetProvisioningOption = deserializeAws_json1_1GreenFleetProvisioningOption(
      output.greenFleetProvisioningOption,
      context
    );
  }
  if (
    output.terminateBlueInstancesOnDeploymentSuccess !== undefined &&
    output.terminateBlueInstancesOnDeploymentSuccess !== null
  ) {
    contents.terminateBlueInstancesOnDeploymentSuccess = deserializeAws_json1_1BlueInstanceTerminationOption(
      output.terminateBlueInstancesOnDeploymentSuccess,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BlueInstanceTerminationOption = (
  output: any,
  context: __SerdeContext
): BlueInstanceTerminationOption => {
  let contents: any = {
    __type: "BlueInstanceTerminationOption",
    action: undefined,
    terminationWaitTimeInMinutes: undefined
  };
  if (output.action !== undefined && output.action !== null) {
    contents.action = output.action;
  }
  if (
    output.terminationWaitTimeInMinutes !== undefined &&
    output.terminationWaitTimeInMinutes !== null
  ) {
    contents.terminationWaitTimeInMinutes = output.terminationWaitTimeInMinutes;
  }
  return contents;
};

const deserializeAws_json1_1BucketNameFilterRequiredException = (
  output: any,
  context: __SerdeContext
): BucketNameFilterRequiredException => {
  let contents: any = {
    __type: "BucketNameFilterRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CreateApplicationOutput = (
  output: any,
  context: __SerdeContext
): CreateApplicationOutput => {
  let contents: any = {
    __type: "CreateApplicationOutput",
    applicationId: undefined
  };
  if (output.applicationId !== undefined && output.applicationId !== null) {
    contents.applicationId = output.applicationId;
  }
  return contents;
};

const deserializeAws_json1_1CreateDeploymentConfigOutput = (
  output: any,
  context: __SerdeContext
): CreateDeploymentConfigOutput => {
  let contents: any = {
    __type: "CreateDeploymentConfigOutput",
    deploymentConfigId: undefined
  };
  if (
    output.deploymentConfigId !== undefined &&
    output.deploymentConfigId !== null
  ) {
    contents.deploymentConfigId = output.deploymentConfigId;
  }
  return contents;
};

const deserializeAws_json1_1CreateDeploymentGroupOutput = (
  output: any,
  context: __SerdeContext
): CreateDeploymentGroupOutput => {
  let contents: any = {
    __type: "CreateDeploymentGroupOutput",
    deploymentGroupId: undefined
  };
  if (
    output.deploymentGroupId !== undefined &&
    output.deploymentGroupId !== null
  ) {
    contents.deploymentGroupId = output.deploymentGroupId;
  }
  return contents;
};

const deserializeAws_json1_1CreateDeploymentOutput = (
  output: any,
  context: __SerdeContext
): CreateDeploymentOutput => {
  let contents: any = {
    __type: "CreateDeploymentOutput",
    deploymentId: undefined
  };
  if (output.deploymentId !== undefined && output.deploymentId !== null) {
    contents.deploymentId = output.deploymentId;
  }
  return contents;
};

const deserializeAws_json1_1DeleteDeploymentGroupOutput = (
  output: any,
  context: __SerdeContext
): DeleteDeploymentGroupOutput => {
  let contents: any = {
    __type: "DeleteDeploymentGroupOutput",
    hooksNotCleanedUp: undefined
  };
  if (
    output.hooksNotCleanedUp !== undefined &&
    output.hooksNotCleanedUp !== null
  ) {
    contents.hooksNotCleanedUp = deserializeAws_json1_1AutoScalingGroupList(
      output.hooksNotCleanedUp,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteGitHubAccountTokenOutput = (
  output: any,
  context: __SerdeContext
): DeleteGitHubAccountTokenOutput => {
  let contents: any = {
    __type: "DeleteGitHubAccountTokenOutput",
    tokenName: undefined
  };
  if (output.tokenName !== undefined && output.tokenName !== null) {
    contents.tokenName = output.tokenName;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentAlreadyCompletedException = (
  output: any,
  context: __SerdeContext
): DeploymentAlreadyCompletedException => {
  let contents: any = {
    __type: "DeploymentAlreadyCompletedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentConfigAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigAlreadyExistsException => {
  let contents: any = {
    __type: "DeploymentConfigAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentConfigDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigDoesNotExistException => {
  let contents: any = {
    __type: "DeploymentConfigDoesNotExistException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentConfigInUseException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigInUseException => {
  let contents: any = {
    __type: "DeploymentConfigInUseException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentConfigInfo = (
  output: any,
  context: __SerdeContext
): DeploymentConfigInfo => {
  let contents: any = {
    __type: "DeploymentConfigInfo",
    computePlatform: undefined,
    createTime: undefined,
    deploymentConfigId: undefined,
    deploymentConfigName: undefined,
    minimumHealthyHosts: undefined,
    trafficRoutingConfig: undefined
  };
  if (output.computePlatform !== undefined && output.computePlatform !== null) {
    contents.computePlatform = output.computePlatform;
  }
  if (output.createTime !== undefined && output.createTime !== null) {
    contents.createTime = new Date(Math.round(output.createTime * 1000));
  }
  if (
    output.deploymentConfigId !== undefined &&
    output.deploymentConfigId !== null
  ) {
    contents.deploymentConfigId = output.deploymentConfigId;
  }
  if (
    output.deploymentConfigName !== undefined &&
    output.deploymentConfigName !== null
  ) {
    contents.deploymentConfigName = output.deploymentConfigName;
  }
  if (
    output.minimumHealthyHosts !== undefined &&
    output.minimumHealthyHosts !== null
  ) {
    contents.minimumHealthyHosts = deserializeAws_json1_1MinimumHealthyHosts(
      output.minimumHealthyHosts,
      context
    );
  }
  if (
    output.trafficRoutingConfig !== undefined &&
    output.trafficRoutingConfig !== null
  ) {
    contents.trafficRoutingConfig = deserializeAws_json1_1TrafficRoutingConfig(
      output.trafficRoutingConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeploymentConfigLimitExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigLimitExceededException => {
  let contents: any = {
    __type: "DeploymentConfigLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentConfigNameRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentConfigNameRequiredException => {
  let contents: any = {
    __type: "DeploymentConfigNameRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentConfigsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DeploymentDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentDoesNotExistException => {
  let contents: any = {
    __type: "DeploymentDoesNotExistException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentGroupAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupAlreadyExistsException => {
  let contents: any = {
    __type: "DeploymentGroupAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentGroupDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupDoesNotExistException => {
  let contents: any = {
    __type: "DeploymentGroupDoesNotExistException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentGroupInfo = (
  output: any,
  context: __SerdeContext
): DeploymentGroupInfo => {
  let contents: any = {
    __type: "DeploymentGroupInfo",
    alarmConfiguration: undefined,
    applicationName: undefined,
    autoRollbackConfiguration: undefined,
    autoScalingGroups: undefined,
    blueGreenDeploymentConfiguration: undefined,
    computePlatform: undefined,
    deploymentConfigName: undefined,
    deploymentGroupId: undefined,
    deploymentGroupName: undefined,
    deploymentStyle: undefined,
    ec2TagFilters: undefined,
    ec2TagSet: undefined,
    ecsServices: undefined,
    lastAttemptedDeployment: undefined,
    lastSuccessfulDeployment: undefined,
    loadBalancerInfo: undefined,
    onPremisesInstanceTagFilters: undefined,
    onPremisesTagSet: undefined,
    serviceRoleArn: undefined,
    targetRevision: undefined,
    triggerConfigurations: undefined
  };
  if (
    output.alarmConfiguration !== undefined &&
    output.alarmConfiguration !== null
  ) {
    contents.alarmConfiguration = deserializeAws_json1_1AlarmConfiguration(
      output.alarmConfiguration,
      context
    );
  }
  if (output.applicationName !== undefined && output.applicationName !== null) {
    contents.applicationName = output.applicationName;
  }
  if (
    output.autoRollbackConfiguration !== undefined &&
    output.autoRollbackConfiguration !== null
  ) {
    contents.autoRollbackConfiguration = deserializeAws_json1_1AutoRollbackConfiguration(
      output.autoRollbackConfiguration,
      context
    );
  }
  if (
    output.autoScalingGroups !== undefined &&
    output.autoScalingGroups !== null
  ) {
    contents.autoScalingGroups = deserializeAws_json1_1AutoScalingGroupList(
      output.autoScalingGroups,
      context
    );
  }
  if (
    output.blueGreenDeploymentConfiguration !== undefined &&
    output.blueGreenDeploymentConfiguration !== null
  ) {
    contents.blueGreenDeploymentConfiguration = deserializeAws_json1_1BlueGreenDeploymentConfiguration(
      output.blueGreenDeploymentConfiguration,
      context
    );
  }
  if (output.computePlatform !== undefined && output.computePlatform !== null) {
    contents.computePlatform = output.computePlatform;
  }
  if (
    output.deploymentConfigName !== undefined &&
    output.deploymentConfigName !== null
  ) {
    contents.deploymentConfigName = output.deploymentConfigName;
  }
  if (
    output.deploymentGroupId !== undefined &&
    output.deploymentGroupId !== null
  ) {
    contents.deploymentGroupId = output.deploymentGroupId;
  }
  if (
    output.deploymentGroupName !== undefined &&
    output.deploymentGroupName !== null
  ) {
    contents.deploymentGroupName = output.deploymentGroupName;
  }
  if (output.deploymentStyle !== undefined && output.deploymentStyle !== null) {
    contents.deploymentStyle = deserializeAws_json1_1DeploymentStyle(
      output.deploymentStyle,
      context
    );
  }
  if (output.ec2TagFilters !== undefined && output.ec2TagFilters !== null) {
    contents.ec2TagFilters = deserializeAws_json1_1EC2TagFilterList(
      output.ec2TagFilters,
      context
    );
  }
  if (output.ec2TagSet !== undefined && output.ec2TagSet !== null) {
    contents.ec2TagSet = deserializeAws_json1_1EC2TagSet(
      output.ec2TagSet,
      context
    );
  }
  if (output.ecsServices !== undefined && output.ecsServices !== null) {
    contents.ecsServices = deserializeAws_json1_1ECSServiceList(
      output.ecsServices,
      context
    );
  }
  if (
    output.lastAttemptedDeployment !== undefined &&
    output.lastAttemptedDeployment !== null
  ) {
    contents.lastAttemptedDeployment = deserializeAws_json1_1LastDeploymentInfo(
      output.lastAttemptedDeployment,
      context
    );
  }
  if (
    output.lastSuccessfulDeployment !== undefined &&
    output.lastSuccessfulDeployment !== null
  ) {
    contents.lastSuccessfulDeployment = deserializeAws_json1_1LastDeploymentInfo(
      output.lastSuccessfulDeployment,
      context
    );
  }
  if (
    output.loadBalancerInfo !== undefined &&
    output.loadBalancerInfo !== null
  ) {
    contents.loadBalancerInfo = deserializeAws_json1_1LoadBalancerInfo(
      output.loadBalancerInfo,
      context
    );
  }
  if (
    output.onPremisesInstanceTagFilters !== undefined &&
    output.onPremisesInstanceTagFilters !== null
  ) {
    contents.onPremisesInstanceTagFilters = deserializeAws_json1_1TagFilterList(
      output.onPremisesInstanceTagFilters,
      context
    );
  }
  if (
    output.onPremisesTagSet !== undefined &&
    output.onPremisesTagSet !== null
  ) {
    contents.onPremisesTagSet = deserializeAws_json1_1OnPremisesTagSet(
      output.onPremisesTagSet,
      context
    );
  }
  if (output.serviceRoleArn !== undefined && output.serviceRoleArn !== null) {
    contents.serviceRoleArn = output.serviceRoleArn;
  }
  if (output.targetRevision !== undefined && output.targetRevision !== null) {
    contents.targetRevision = deserializeAws_json1_1RevisionLocation(
      output.targetRevision,
      context
    );
  }
  if (
    output.triggerConfigurations !== undefined &&
    output.triggerConfigurations !== null
  ) {
    contents.triggerConfigurations = deserializeAws_json1_1TriggerConfigList(
      output.triggerConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeploymentGroupInfoList = (
  output: any,
  context: __SerdeContext
): Array<DeploymentGroupInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DeploymentGroupInfo(entry, context)
  );
};

const deserializeAws_json1_1DeploymentGroupLimitExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupLimitExceededException => {
  let contents: any = {
    __type: "DeploymentGroupLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentGroupNameRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentGroupNameRequiredException => {
  let contents: any = {
    __type: "DeploymentGroupNameRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentGroupsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DeploymentIdRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentIdRequiredException => {
  let contents: any = {
    __type: "DeploymentIdRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentInfo = (
  output: any,
  context: __SerdeContext
): DeploymentInfo => {
  let contents: any = {
    __type: "DeploymentInfo",
    additionalDeploymentStatusInfo: undefined,
    applicationName: undefined,
    autoRollbackConfiguration: undefined,
    blueGreenDeploymentConfiguration: undefined,
    completeTime: undefined,
    computePlatform: undefined,
    createTime: undefined,
    creator: undefined,
    deploymentConfigName: undefined,
    deploymentGroupName: undefined,
    deploymentId: undefined,
    deploymentOverview: undefined,
    deploymentStatusMessages: undefined,
    deploymentStyle: undefined,
    description: undefined,
    errorInformation: undefined,
    fileExistsBehavior: undefined,
    ignoreApplicationStopFailures: undefined,
    instanceTerminationWaitTimeStarted: undefined,
    loadBalancerInfo: undefined,
    previousRevision: undefined,
    revision: undefined,
    rollbackInfo: undefined,
    startTime: undefined,
    status: undefined,
    targetInstances: undefined,
    updateOutdatedInstancesOnly: undefined
  };
  if (
    output.additionalDeploymentStatusInfo !== undefined &&
    output.additionalDeploymentStatusInfo !== null
  ) {
    contents.additionalDeploymentStatusInfo =
      output.additionalDeploymentStatusInfo;
  }
  if (output.applicationName !== undefined && output.applicationName !== null) {
    contents.applicationName = output.applicationName;
  }
  if (
    output.autoRollbackConfiguration !== undefined &&
    output.autoRollbackConfiguration !== null
  ) {
    contents.autoRollbackConfiguration = deserializeAws_json1_1AutoRollbackConfiguration(
      output.autoRollbackConfiguration,
      context
    );
  }
  if (
    output.blueGreenDeploymentConfiguration !== undefined &&
    output.blueGreenDeploymentConfiguration !== null
  ) {
    contents.blueGreenDeploymentConfiguration = deserializeAws_json1_1BlueGreenDeploymentConfiguration(
      output.blueGreenDeploymentConfiguration,
      context
    );
  }
  if (output.completeTime !== undefined && output.completeTime !== null) {
    contents.completeTime = new Date(Math.round(output.completeTime * 1000));
  }
  if (output.computePlatform !== undefined && output.computePlatform !== null) {
    contents.computePlatform = output.computePlatform;
  }
  if (output.createTime !== undefined && output.createTime !== null) {
    contents.createTime = new Date(Math.round(output.createTime * 1000));
  }
  if (output.creator !== undefined && output.creator !== null) {
    contents.creator = output.creator;
  }
  if (
    output.deploymentConfigName !== undefined &&
    output.deploymentConfigName !== null
  ) {
    contents.deploymentConfigName = output.deploymentConfigName;
  }
  if (
    output.deploymentGroupName !== undefined &&
    output.deploymentGroupName !== null
  ) {
    contents.deploymentGroupName = output.deploymentGroupName;
  }
  if (output.deploymentId !== undefined && output.deploymentId !== null) {
    contents.deploymentId = output.deploymentId;
  }
  if (
    output.deploymentOverview !== undefined &&
    output.deploymentOverview !== null
  ) {
    contents.deploymentOverview = deserializeAws_json1_1DeploymentOverview(
      output.deploymentOverview,
      context
    );
  }
  if (
    output.deploymentStatusMessages !== undefined &&
    output.deploymentStatusMessages !== null
  ) {
    contents.deploymentStatusMessages = deserializeAws_json1_1DeploymentStatusMessageList(
      output.deploymentStatusMessages,
      context
    );
  }
  if (output.deploymentStyle !== undefined && output.deploymentStyle !== null) {
    contents.deploymentStyle = deserializeAws_json1_1DeploymentStyle(
      output.deploymentStyle,
      context
    );
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (
    output.errorInformation !== undefined &&
    output.errorInformation !== null
  ) {
    contents.errorInformation = deserializeAws_json1_1ErrorInformation(
      output.errorInformation,
      context
    );
  }
  if (
    output.fileExistsBehavior !== undefined &&
    output.fileExistsBehavior !== null
  ) {
    contents.fileExistsBehavior = output.fileExistsBehavior;
  }
  if (
    output.ignoreApplicationStopFailures !== undefined &&
    output.ignoreApplicationStopFailures !== null
  ) {
    contents.ignoreApplicationStopFailures =
      output.ignoreApplicationStopFailures;
  }
  if (
    output.instanceTerminationWaitTimeStarted !== undefined &&
    output.instanceTerminationWaitTimeStarted !== null
  ) {
    contents.instanceTerminationWaitTimeStarted =
      output.instanceTerminationWaitTimeStarted;
  }
  if (
    output.loadBalancerInfo !== undefined &&
    output.loadBalancerInfo !== null
  ) {
    contents.loadBalancerInfo = deserializeAws_json1_1LoadBalancerInfo(
      output.loadBalancerInfo,
      context
    );
  }
  if (
    output.previousRevision !== undefined &&
    output.previousRevision !== null
  ) {
    contents.previousRevision = deserializeAws_json1_1RevisionLocation(
      output.previousRevision,
      context
    );
  }
  if (output.revision !== undefined && output.revision !== null) {
    contents.revision = deserializeAws_json1_1RevisionLocation(
      output.revision,
      context
    );
  }
  if (output.rollbackInfo !== undefined && output.rollbackInfo !== null) {
    contents.rollbackInfo = deserializeAws_json1_1RollbackInfo(
      output.rollbackInfo,
      context
    );
  }
  if (output.startTime !== undefined && output.startTime !== null) {
    contents.startTime = new Date(Math.round(output.startTime * 1000));
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.targetInstances !== undefined && output.targetInstances !== null) {
    contents.targetInstances = deserializeAws_json1_1TargetInstances(
      output.targetInstances,
      context
    );
  }
  if (
    output.updateOutdatedInstancesOnly !== undefined &&
    output.updateOutdatedInstancesOnly !== null
  ) {
    contents.updateOutdatedInstancesOnly = output.updateOutdatedInstancesOnly;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentIsNotInReadyStateException = (
  output: any,
  context: __SerdeContext
): DeploymentIsNotInReadyStateException => {
  let contents: any = {
    __type: "DeploymentIsNotInReadyStateException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentLimitExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentLimitExceededException => {
  let contents: any = {
    __type: "DeploymentLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentNotStartedException = (
  output: any,
  context: __SerdeContext
): DeploymentNotStartedException => {
  let contents: any = {
    __type: "DeploymentNotStartedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentOverview = (
  output: any,
  context: __SerdeContext
): DeploymentOverview => {
  let contents: any = {
    __type: "DeploymentOverview",
    Failed: undefined,
    InProgress: undefined,
    Pending: undefined,
    Ready: undefined,
    Skipped: undefined,
    Succeeded: undefined
  };
  if (output.Failed !== undefined && output.Failed !== null) {
    contents.Failed = output.Failed;
  }
  if (output.InProgress !== undefined && output.InProgress !== null) {
    contents.InProgress = output.InProgress;
  }
  if (output.Pending !== undefined && output.Pending !== null) {
    contents.Pending = output.Pending;
  }
  if (output.Ready !== undefined && output.Ready !== null) {
    contents.Ready = output.Ready;
  }
  if (output.Skipped !== undefined && output.Skipped !== null) {
    contents.Skipped = output.Skipped;
  }
  if (output.Succeeded !== undefined && output.Succeeded !== null) {
    contents.Succeeded = output.Succeeded;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentReadyOption = (
  output: any,
  context: __SerdeContext
): DeploymentReadyOption => {
  let contents: any = {
    __type: "DeploymentReadyOption",
    actionOnTimeout: undefined,
    waitTimeInMinutes: undefined
  };
  if (output.actionOnTimeout !== undefined && output.actionOnTimeout !== null) {
    contents.actionOnTimeout = output.actionOnTimeout;
  }
  if (
    output.waitTimeInMinutes !== undefined &&
    output.waitTimeInMinutes !== null
  ) {
    contents.waitTimeInMinutes = output.waitTimeInMinutes;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentStatusMessageList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DeploymentStyle = (
  output: any,
  context: __SerdeContext
): DeploymentStyle => {
  let contents: any = {
    __type: "DeploymentStyle",
    deploymentOption: undefined,
    deploymentType: undefined
  };
  if (
    output.deploymentOption !== undefined &&
    output.deploymentOption !== null
  ) {
    contents.deploymentOption = output.deploymentOption;
  }
  if (output.deploymentType !== undefined && output.deploymentType !== null) {
    contents.deploymentType = output.deploymentType;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentTarget = (
  output: any,
  context: __SerdeContext
): DeploymentTarget => {
  let contents: any = {
    __type: "DeploymentTarget",
    deploymentTargetType: undefined,
    ecsTarget: undefined,
    instanceTarget: undefined,
    lambdaTarget: undefined
  };
  if (
    output.deploymentTargetType !== undefined &&
    output.deploymentTargetType !== null
  ) {
    contents.deploymentTargetType = output.deploymentTargetType;
  }
  if (output.ecsTarget !== undefined && output.ecsTarget !== null) {
    contents.ecsTarget = deserializeAws_json1_1ECSTarget(
      output.ecsTarget,
      context
    );
  }
  if (output.instanceTarget !== undefined && output.instanceTarget !== null) {
    contents.instanceTarget = deserializeAws_json1_1InstanceTarget(
      output.instanceTarget,
      context
    );
  }
  if (output.lambdaTarget !== undefined && output.lambdaTarget !== null) {
    contents.lambdaTarget = deserializeAws_json1_1LambdaTarget(
      output.lambdaTarget,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeploymentTargetDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DeploymentTargetDoesNotExistException => {
  let contents: any = {
    __type: "DeploymentTargetDoesNotExistException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentTargetIdRequiredException = (
  output: any,
  context: __SerdeContext
): DeploymentTargetIdRequiredException => {
  let contents: any = {
    __type: "DeploymentTargetIdRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentTargetList = (
  output: any,
  context: __SerdeContext
): Array<DeploymentTarget> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DeploymentTarget(entry, context)
  );
};

const deserializeAws_json1_1DeploymentTargetListSizeExceededException = (
  output: any,
  context: __SerdeContext
): DeploymentTargetListSizeExceededException => {
  let contents: any = {
    __type: "DeploymentTargetListSizeExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeploymentsInfoList = (
  output: any,
  context: __SerdeContext
): Array<DeploymentInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DeploymentInfo(entry, context)
  );
};

const deserializeAws_json1_1DeploymentsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DescriptionTooLongException = (
  output: any,
  context: __SerdeContext
): DescriptionTooLongException => {
  let contents: any = {
    __type: "DescriptionTooLongException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Diagnostics = (
  output: any,
  context: __SerdeContext
): Diagnostics => {
  let contents: any = {
    __type: "Diagnostics",
    errorCode: undefined,
    logTail: undefined,
    message: undefined,
    scriptName: undefined
  };
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.errorCode = output.errorCode;
  }
  if (output.logTail !== undefined && output.logTail !== null) {
    contents.logTail = output.logTail;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.scriptName !== undefined && output.scriptName !== null) {
    contents.scriptName = output.scriptName;
  }
  return contents;
};

const deserializeAws_json1_1EC2TagFilter = (
  output: any,
  context: __SerdeContext
): EC2TagFilter => {
  let contents: any = {
    __type: "EC2TagFilter",
    Key: undefined,
    Type: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1EC2TagFilterList = (
  output: any,
  context: __SerdeContext
): Array<EC2TagFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EC2TagFilter(entry, context)
  );
};

const deserializeAws_json1_1EC2TagSet = (
  output: any,
  context: __SerdeContext
): EC2TagSet => {
  let contents: any = {
    __type: "EC2TagSet",
    ec2TagSetList: undefined
  };
  if (output.ec2TagSetList !== undefined && output.ec2TagSetList !== null) {
    contents.ec2TagSetList = deserializeAws_json1_1EC2TagSetList(
      output.ec2TagSetList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EC2TagSetList = (
  output: any,
  context: __SerdeContext
): Array<Array<EC2TagFilter>> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EC2TagFilterList(entry, context)
  );
};

const deserializeAws_json1_1ECSService = (
  output: any,
  context: __SerdeContext
): ECSService => {
  let contents: any = {
    __type: "ECSService",
    clusterName: undefined,
    serviceName: undefined
  };
  if (output.clusterName !== undefined && output.clusterName !== null) {
    contents.clusterName = output.clusterName;
  }
  if (output.serviceName !== undefined && output.serviceName !== null) {
    contents.serviceName = output.serviceName;
  }
  return contents;
};

const deserializeAws_json1_1ECSServiceList = (
  output: any,
  context: __SerdeContext
): Array<ECSService> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ECSService(entry, context)
  );
};

const deserializeAws_json1_1ECSServiceMappingLimitExceededException = (
  output: any,
  context: __SerdeContext
): ECSServiceMappingLimitExceededException => {
  let contents: any = {
    __type: "ECSServiceMappingLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ECSTarget = (
  output: any,
  context: __SerdeContext
): ECSTarget => {
  let contents: any = {
    __type: "ECSTarget",
    deploymentId: undefined,
    lastUpdatedAt: undefined,
    lifecycleEvents: undefined,
    status: undefined,
    targetArn: undefined,
    targetId: undefined,
    taskSetsInfo: undefined
  };
  if (output.deploymentId !== undefined && output.deploymentId !== null) {
    contents.deploymentId = output.deploymentId;
  }
  if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
  }
  if (output.lifecycleEvents !== undefined && output.lifecycleEvents !== null) {
    contents.lifecycleEvents = deserializeAws_json1_1LifecycleEventList(
      output.lifecycleEvents,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.targetArn !== undefined && output.targetArn !== null) {
    contents.targetArn = output.targetArn;
  }
  if (output.targetId !== undefined && output.targetId !== null) {
    contents.targetId = output.targetId;
  }
  if (output.taskSetsInfo !== undefined && output.taskSetsInfo !== null) {
    contents.taskSetsInfo = deserializeAws_json1_1ECSTaskSetList(
      output.taskSetsInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ECSTaskSet = (
  output: any,
  context: __SerdeContext
): ECSTaskSet => {
  let contents: any = {
    __type: "ECSTaskSet",
    desiredCount: undefined,
    identifer: undefined,
    pendingCount: undefined,
    runningCount: undefined,
    status: undefined,
    targetGroup: undefined,
    taskSetLabel: undefined,
    trafficWeight: undefined
  };
  if (output.desiredCount !== undefined && output.desiredCount !== null) {
    contents.desiredCount = output.desiredCount;
  }
  if (output.identifer !== undefined && output.identifer !== null) {
    contents.identifer = output.identifer;
  }
  if (output.pendingCount !== undefined && output.pendingCount !== null) {
    contents.pendingCount = output.pendingCount;
  }
  if (output.runningCount !== undefined && output.runningCount !== null) {
    contents.runningCount = output.runningCount;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.targetGroup !== undefined && output.targetGroup !== null) {
    contents.targetGroup = deserializeAws_json1_1TargetGroupInfo(
      output.targetGroup,
      context
    );
  }
  if (output.taskSetLabel !== undefined && output.taskSetLabel !== null) {
    contents.taskSetLabel = output.taskSetLabel;
  }
  if (output.trafficWeight !== undefined && output.trafficWeight !== null) {
    contents.trafficWeight = output.trafficWeight;
  }
  return contents;
};

const deserializeAws_json1_1ECSTaskSetList = (
  output: any,
  context: __SerdeContext
): Array<ECSTaskSet> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ECSTaskSet(entry, context)
  );
};

const deserializeAws_json1_1ELBInfo = (
  output: any,
  context: __SerdeContext
): ELBInfo => {
  let contents: any = {
    __type: "ELBInfo",
    name: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1ELBInfoList = (
  output: any,
  context: __SerdeContext
): Array<ELBInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ELBInfo(entry, context)
  );
};

const deserializeAws_json1_1ErrorInformation = (
  output: any,
  context: __SerdeContext
): ErrorInformation => {
  let contents: any = {
    __type: "ErrorInformation",
    code: undefined,
    message: undefined
  };
  if (output.code !== undefined && output.code !== null) {
    contents.code = output.code;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1GenericRevisionInfo = (
  output: any,
  context: __SerdeContext
): GenericRevisionInfo => {
  let contents: any = {
    __type: "GenericRevisionInfo",
    deploymentGroups: undefined,
    description: undefined,
    firstUsedTime: undefined,
    lastUsedTime: undefined,
    registerTime: undefined
  };
  if (
    output.deploymentGroups !== undefined &&
    output.deploymentGroups !== null
  ) {
    contents.deploymentGroups = deserializeAws_json1_1DeploymentGroupsList(
      output.deploymentGroups,
      context
    );
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.firstUsedTime !== undefined && output.firstUsedTime !== null) {
    contents.firstUsedTime = new Date(Math.round(output.firstUsedTime * 1000));
  }
  if (output.lastUsedTime !== undefined && output.lastUsedTime !== null) {
    contents.lastUsedTime = new Date(Math.round(output.lastUsedTime * 1000));
  }
  if (output.registerTime !== undefined && output.registerTime !== null) {
    contents.registerTime = new Date(Math.round(output.registerTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1GetApplicationOutput = (
  output: any,
  context: __SerdeContext
): GetApplicationOutput => {
  let contents: any = {
    __type: "GetApplicationOutput",
    application: undefined
  };
  if (output.application !== undefined && output.application !== null) {
    contents.application = deserializeAws_json1_1ApplicationInfo(
      output.application,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetApplicationRevisionOutput = (
  output: any,
  context: __SerdeContext
): GetApplicationRevisionOutput => {
  let contents: any = {
    __type: "GetApplicationRevisionOutput",
    applicationName: undefined,
    revision: undefined,
    revisionInfo: undefined
  };
  if (output.applicationName !== undefined && output.applicationName !== null) {
    contents.applicationName = output.applicationName;
  }
  if (output.revision !== undefined && output.revision !== null) {
    contents.revision = deserializeAws_json1_1RevisionLocation(
      output.revision,
      context
    );
  }
  if (output.revisionInfo !== undefined && output.revisionInfo !== null) {
    contents.revisionInfo = deserializeAws_json1_1GenericRevisionInfo(
      output.revisionInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDeploymentConfigOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentConfigOutput => {
  let contents: any = {
    __type: "GetDeploymentConfigOutput",
    deploymentConfigInfo: undefined
  };
  if (
    output.deploymentConfigInfo !== undefined &&
    output.deploymentConfigInfo !== null
  ) {
    contents.deploymentConfigInfo = deserializeAws_json1_1DeploymentConfigInfo(
      output.deploymentConfigInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDeploymentGroupOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentGroupOutput => {
  let contents: any = {
    __type: "GetDeploymentGroupOutput",
    deploymentGroupInfo: undefined
  };
  if (
    output.deploymentGroupInfo !== undefined &&
    output.deploymentGroupInfo !== null
  ) {
    contents.deploymentGroupInfo = deserializeAws_json1_1DeploymentGroupInfo(
      output.deploymentGroupInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDeploymentInstanceOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentInstanceOutput => {
  let contents: any = {
    __type: "GetDeploymentInstanceOutput",
    instanceSummary: undefined
  };
  if (output.instanceSummary !== undefined && output.instanceSummary !== null) {
    contents.instanceSummary = deserializeAws_json1_1InstanceSummary(
      output.instanceSummary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDeploymentOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentOutput => {
  let contents: any = {
    __type: "GetDeploymentOutput",
    deploymentInfo: undefined
  };
  if (output.deploymentInfo !== undefined && output.deploymentInfo !== null) {
    contents.deploymentInfo = deserializeAws_json1_1DeploymentInfo(
      output.deploymentInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDeploymentTargetOutput = (
  output: any,
  context: __SerdeContext
): GetDeploymentTargetOutput => {
  let contents: any = {
    __type: "GetDeploymentTargetOutput",
    deploymentTarget: undefined
  };
  if (
    output.deploymentTarget !== undefined &&
    output.deploymentTarget !== null
  ) {
    contents.deploymentTarget = deserializeAws_json1_1DeploymentTarget(
      output.deploymentTarget,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetOnPremisesInstanceOutput = (
  output: any,
  context: __SerdeContext
): GetOnPremisesInstanceOutput => {
  let contents: any = {
    __type: "GetOnPremisesInstanceOutput",
    instanceInfo: undefined
  };
  if (output.instanceInfo !== undefined && output.instanceInfo !== null) {
    contents.instanceInfo = deserializeAws_json1_1InstanceInfo(
      output.instanceInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GitHubAccountTokenDoesNotExistException = (
  output: any,
  context: __SerdeContext
): GitHubAccountTokenDoesNotExistException => {
  let contents: any = {
    __type: "GitHubAccountTokenDoesNotExistException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1GitHubAccountTokenNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1GitHubAccountTokenNameRequiredException = (
  output: any,
  context: __SerdeContext
): GitHubAccountTokenNameRequiredException => {
  let contents: any = {
    __type: "GitHubAccountTokenNameRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1GitHubLocation = (
  output: any,
  context: __SerdeContext
): GitHubLocation => {
  let contents: any = {
    __type: "GitHubLocation",
    commitId: undefined,
    repository: undefined
  };
  if (output.commitId !== undefined && output.commitId !== null) {
    contents.commitId = output.commitId;
  }
  if (output.repository !== undefined && output.repository !== null) {
    contents.repository = output.repository;
  }
  return contents;
};

const deserializeAws_json1_1GreenFleetProvisioningOption = (
  output: any,
  context: __SerdeContext
): GreenFleetProvisioningOption => {
  let contents: any = {
    __type: "GreenFleetProvisioningOption",
    action: undefined
  };
  if (output.action !== undefined && output.action !== null) {
    contents.action = output.action;
  }
  return contents;
};

const deserializeAws_json1_1IamArnRequiredException = (
  output: any,
  context: __SerdeContext
): IamArnRequiredException => {
  let contents: any = {
    __type: "IamArnRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1IamSessionArnAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): IamSessionArnAlreadyRegisteredException => {
  let contents: any = {
    __type: "IamSessionArnAlreadyRegisteredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1IamUserArnAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): IamUserArnAlreadyRegisteredException => {
  let contents: any = {
    __type: "IamUserArnAlreadyRegisteredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1IamUserArnRequiredException = (
  output: any,
  context: __SerdeContext
): IamUserArnRequiredException => {
  let contents: any = {
    __type: "IamUserArnRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InstanceDoesNotExistException = (
  output: any,
  context: __SerdeContext
): InstanceDoesNotExistException => {
  let contents: any = {
    __type: "InstanceDoesNotExistException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InstanceIdRequiredException = (
  output: any,
  context: __SerdeContext
): InstanceIdRequiredException => {
  let contents: any = {
    __type: "InstanceIdRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InstanceInfo = (
  output: any,
  context: __SerdeContext
): InstanceInfo => {
  let contents: any = {
    __type: "InstanceInfo",
    deregisterTime: undefined,
    iamSessionArn: undefined,
    iamUserArn: undefined,
    instanceArn: undefined,
    instanceName: undefined,
    registerTime: undefined,
    tags: undefined
  };
  if (output.deregisterTime !== undefined && output.deregisterTime !== null) {
    contents.deregisterTime = new Date(
      Math.round(output.deregisterTime * 1000)
    );
  }
  if (output.iamSessionArn !== undefined && output.iamSessionArn !== null) {
    contents.iamSessionArn = output.iamSessionArn;
  }
  if (output.iamUserArn !== undefined && output.iamUserArn !== null) {
    contents.iamUserArn = output.iamUserArn;
  }
  if (output.instanceArn !== undefined && output.instanceArn !== null) {
    contents.instanceArn = output.instanceArn;
  }
  if (output.instanceName !== undefined && output.instanceName !== null) {
    contents.instanceName = output.instanceName;
  }
  if (output.registerTime !== undefined && output.registerTime !== null) {
    contents.registerTime = new Date(Math.round(output.registerTime * 1000));
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1InstanceInfoList = (
  output: any,
  context: __SerdeContext
): Array<InstanceInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceInfo(entry, context)
  );
};

const deserializeAws_json1_1InstanceLimitExceededException = (
  output: any,
  context: __SerdeContext
): InstanceLimitExceededException => {
  let contents: any = {
    __type: "InstanceLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InstanceNameAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): InstanceNameAlreadyRegisteredException => {
  let contents: any = {
    __type: "InstanceNameAlreadyRegisteredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InstanceNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InstanceNameRequiredException = (
  output: any,
  context: __SerdeContext
): InstanceNameRequiredException => {
  let contents: any = {
    __type: "InstanceNameRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InstanceNotRegisteredException = (
  output: any,
  context: __SerdeContext
): InstanceNotRegisteredException => {
  let contents: any = {
    __type: "InstanceNotRegisteredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InstanceSummary = (
  output: any,
  context: __SerdeContext
): InstanceSummary => {
  let contents: any = {
    __type: "InstanceSummary",
    deploymentId: undefined,
    instanceId: undefined,
    instanceType: undefined,
    lastUpdatedAt: undefined,
    lifecycleEvents: undefined,
    status: undefined
  };
  if (output.deploymentId !== undefined && output.deploymentId !== null) {
    contents.deploymentId = output.deploymentId;
  }
  if (output.instanceId !== undefined && output.instanceId !== null) {
    contents.instanceId = output.instanceId;
  }
  if (output.instanceType !== undefined && output.instanceType !== null) {
    contents.instanceType = output.instanceType;
  }
  if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
  }
  if (output.lifecycleEvents !== undefined && output.lifecycleEvents !== null) {
    contents.lifecycleEvents = deserializeAws_json1_1LifecycleEventList(
      output.lifecycleEvents,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1InstanceSummaryList = (
  output: any,
  context: __SerdeContext
): Array<InstanceSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceSummary(entry, context)
  );
};

const deserializeAws_json1_1InstanceTarget = (
  output: any,
  context: __SerdeContext
): InstanceTarget => {
  let contents: any = {
    __type: "InstanceTarget",
    deploymentId: undefined,
    instanceLabel: undefined,
    lastUpdatedAt: undefined,
    lifecycleEvents: undefined,
    status: undefined,
    targetArn: undefined,
    targetId: undefined
  };
  if (output.deploymentId !== undefined && output.deploymentId !== null) {
    contents.deploymentId = output.deploymentId;
  }
  if (output.instanceLabel !== undefined && output.instanceLabel !== null) {
    contents.instanceLabel = output.instanceLabel;
  }
  if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
  }
  if (output.lifecycleEvents !== undefined && output.lifecycleEvents !== null) {
    contents.lifecycleEvents = deserializeAws_json1_1LifecycleEventList(
      output.lifecycleEvents,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.targetArn !== undefined && output.targetArn !== null) {
    contents.targetArn = output.targetArn;
  }
  if (output.targetId !== undefined && output.targetId !== null) {
    contents.targetId = output.targetId;
  }
  return contents;
};

const deserializeAws_json1_1InstancesList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InvalidAlarmConfigException = (
  output: any,
  context: __SerdeContext
): InvalidAlarmConfigException => {
  let contents: any = {
    __type: "InvalidAlarmConfigException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidApplicationNameException = (
  output: any,
  context: __SerdeContext
): InvalidApplicationNameException => {
  let contents: any = {
    __type: "InvalidApplicationNameException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArnException = (
  output: any,
  context: __SerdeContext
): InvalidArnException => {
  let contents: any = {
    __type: "InvalidArnException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidAutoRollbackConfigException = (
  output: any,
  context: __SerdeContext
): InvalidAutoRollbackConfigException => {
  let contents: any = {
    __type: "InvalidAutoRollbackConfigException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidAutoScalingGroupException = (
  output: any,
  context: __SerdeContext
): InvalidAutoScalingGroupException => {
  let contents: any = {
    __type: "InvalidAutoScalingGroupException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidBlueGreenDeploymentConfigurationException => {
  let contents: any = {
    __type: "InvalidBlueGreenDeploymentConfigurationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidBucketNameFilterException = (
  output: any,
  context: __SerdeContext
): InvalidBucketNameFilterException => {
  let contents: any = {
    __type: "InvalidBucketNameFilterException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidComputePlatformException = (
  output: any,
  context: __SerdeContext
): InvalidComputePlatformException => {
  let contents: any = {
    __type: "InvalidComputePlatformException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidDeployedStateFilterException = (
  output: any,
  context: __SerdeContext
): InvalidDeployedStateFilterException => {
  let contents: any = {
    __type: "InvalidDeployedStateFilterException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentConfigNameException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentConfigNameException => {
  let contents: any = {
    __type: "InvalidDeploymentConfigNameException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentGroupNameException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentGroupNameException => {
  let contents: any = {
    __type: "InvalidDeploymentGroupNameException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentIdException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentIdException => {
  let contents: any = {
    __type: "InvalidDeploymentIdException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentInstanceTypeException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentInstanceTypeException => {
  let contents: any = {
    __type: "InvalidDeploymentInstanceTypeException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentStatusException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentStatusException => {
  let contents: any = {
    __type: "InvalidDeploymentStatusException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentStyleException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentStyleException => {
  let contents: any = {
    __type: "InvalidDeploymentStyleException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentTargetIdException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentTargetIdException => {
  let contents: any = {
    __type: "InvalidDeploymentTargetIdException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentWaitTypeException = (
  output: any,
  context: __SerdeContext
): InvalidDeploymentWaitTypeException => {
  let contents: any = {
    __type: "InvalidDeploymentWaitTypeException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidEC2TagCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidEC2TagCombinationException => {
  let contents: any = {
    __type: "InvalidEC2TagCombinationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidEC2TagException = (
  output: any,
  context: __SerdeContext
): InvalidEC2TagException => {
  let contents: any = {
    __type: "InvalidEC2TagException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidECSServiceException = (
  output: any,
  context: __SerdeContext
): InvalidECSServiceException => {
  let contents: any = {
    __type: "InvalidECSServiceException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidFileExistsBehaviorException = (
  output: any,
  context: __SerdeContext
): InvalidFileExistsBehaviorException => {
  let contents: any = {
    __type: "InvalidFileExistsBehaviorException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidGitHubAccountTokenException = (
  output: any,
  context: __SerdeContext
): InvalidGitHubAccountTokenException => {
  let contents: any = {
    __type: "InvalidGitHubAccountTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidGitHubAccountTokenNameException = (
  output: any,
  context: __SerdeContext
): InvalidGitHubAccountTokenNameException => {
  let contents: any = {
    __type: "InvalidGitHubAccountTokenNameException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidIamSessionArnException = (
  output: any,
  context: __SerdeContext
): InvalidIamSessionArnException => {
  let contents: any = {
    __type: "InvalidIamSessionArnException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidIamUserArnException = (
  output: any,
  context: __SerdeContext
): InvalidIamUserArnException => {
  let contents: any = {
    __type: "InvalidIamUserArnException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException = (
  output: any,
  context: __SerdeContext
): InvalidIgnoreApplicationStopFailuresValueException => {
  let contents: any = {
    __type: "InvalidIgnoreApplicationStopFailuresValueException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInstanceNameException = (
  output: any,
  context: __SerdeContext
): InvalidInstanceNameException => {
  let contents: any = {
    __type: "InvalidInstanceNameException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInstanceStatusException = (
  output: any,
  context: __SerdeContext
): InvalidInstanceStatusException => {
  let contents: any = {
    __type: "InvalidInstanceStatusException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInstanceTypeException = (
  output: any,
  context: __SerdeContext
): InvalidInstanceTypeException => {
  let contents: any = {
    __type: "InvalidInstanceTypeException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidKeyPrefixFilterException = (
  output: any,
  context: __SerdeContext
): InvalidKeyPrefixFilterException => {
  let contents: any = {
    __type: "InvalidKeyPrefixFilterException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException = (
  output: any,
  context: __SerdeContext
): InvalidLifecycleEventHookExecutionIdException => {
  let contents: any = {
    __type: "InvalidLifecycleEventHookExecutionIdException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException = (
  output: any,
  context: __SerdeContext
): InvalidLifecycleEventHookExecutionStatusException => {
  let contents: any = {
    __type: "InvalidLifecycleEventHookExecutionStatusException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidLoadBalancerInfoException = (
  output: any,
  context: __SerdeContext
): InvalidLoadBalancerInfoException => {
  let contents: any = {
    __type: "InvalidLoadBalancerInfoException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidMinimumHealthyHostValueException = (
  output: any,
  context: __SerdeContext
): InvalidMinimumHealthyHostValueException => {
  let contents: any = {
    __type: "InvalidMinimumHealthyHostValueException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidOnPremisesTagCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidOnPremisesTagCombinationException => {
  let contents: any = {
    __type: "InvalidOnPremisesTagCombinationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  let contents: any = {
    __type: "InvalidOperationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRegistrationStatusException = (
  output: any,
  context: __SerdeContext
): InvalidRegistrationStatusException => {
  let contents: any = {
    __type: "InvalidRegistrationStatusException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRevisionException = (
  output: any,
  context: __SerdeContext
): InvalidRevisionException => {
  let contents: any = {
    __type: "InvalidRevisionException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRoleException = (
  output: any,
  context: __SerdeContext
): InvalidRoleException => {
  let contents: any = {
    __type: "InvalidRoleException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidSortByException = (
  output: any,
  context: __SerdeContext
): InvalidSortByException => {
  let contents: any = {
    __type: "InvalidSortByException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidSortOrderException = (
  output: any,
  context: __SerdeContext
): InvalidSortOrderException => {
  let contents: any = {
    __type: "InvalidSortOrderException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTagException = (
  output: any,
  context: __SerdeContext
): InvalidTagException => {
  let contents: any = {
    __type: "InvalidTagException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTagFilterException = (
  output: any,
  context: __SerdeContext
): InvalidTagFilterException => {
  let contents: any = {
    __type: "InvalidTagFilterException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTagsToAddException = (
  output: any,
  context: __SerdeContext
): InvalidTagsToAddException => {
  let contents: any = {
    __type: "InvalidTagsToAddException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTargetFilterNameException = (
  output: any,
  context: __SerdeContext
): InvalidTargetFilterNameException => {
  let contents: any = {
    __type: "InvalidTargetFilterNameException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTargetGroupPairException = (
  output: any,
  context: __SerdeContext
): InvalidTargetGroupPairException => {
  let contents: any = {
    __type: "InvalidTargetGroupPairException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTargetInstancesException = (
  output: any,
  context: __SerdeContext
): InvalidTargetInstancesException => {
  let contents: any = {
    __type: "InvalidTargetInstancesException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTimeRangeException = (
  output: any,
  context: __SerdeContext
): InvalidTimeRangeException => {
  let contents: any = {
    __type: "InvalidTimeRangeException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTrafficRoutingConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidTrafficRoutingConfigurationException => {
  let contents: any = {
    __type: "InvalidTrafficRoutingConfigurationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTriggerConfigException = (
  output: any,
  context: __SerdeContext
): InvalidTriggerConfigException => {
  let contents: any = {
    __type: "InvalidTriggerConfigException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException = (
  output: any,
  context: __SerdeContext
): InvalidUpdateOutdatedInstancesOnlyValueException => {
  let contents: any = {
    __type: "InvalidUpdateOutdatedInstancesOnlyValueException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LambdaFunctionInfo = (
  output: any,
  context: __SerdeContext
): LambdaFunctionInfo => {
  let contents: any = {
    __type: "LambdaFunctionInfo",
    currentVersion: undefined,
    functionAlias: undefined,
    functionName: undefined,
    targetVersion: undefined,
    targetVersionWeight: undefined
  };
  if (output.currentVersion !== undefined && output.currentVersion !== null) {
    contents.currentVersion = output.currentVersion;
  }
  if (output.functionAlias !== undefined && output.functionAlias !== null) {
    contents.functionAlias = output.functionAlias;
  }
  if (output.functionName !== undefined && output.functionName !== null) {
    contents.functionName = output.functionName;
  }
  if (output.targetVersion !== undefined && output.targetVersion !== null) {
    contents.targetVersion = output.targetVersion;
  }
  if (
    output.targetVersionWeight !== undefined &&
    output.targetVersionWeight !== null
  ) {
    contents.targetVersionWeight = output.targetVersionWeight;
  }
  return contents;
};

const deserializeAws_json1_1LambdaTarget = (
  output: any,
  context: __SerdeContext
): LambdaTarget => {
  let contents: any = {
    __type: "LambdaTarget",
    deploymentId: undefined,
    lambdaFunctionInfo: undefined,
    lastUpdatedAt: undefined,
    lifecycleEvents: undefined,
    status: undefined,
    targetArn: undefined,
    targetId: undefined
  };
  if (output.deploymentId !== undefined && output.deploymentId !== null) {
    contents.deploymentId = output.deploymentId;
  }
  if (
    output.lambdaFunctionInfo !== undefined &&
    output.lambdaFunctionInfo !== null
  ) {
    contents.lambdaFunctionInfo = deserializeAws_json1_1LambdaFunctionInfo(
      output.lambdaFunctionInfo,
      context
    );
  }
  if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
  }
  if (output.lifecycleEvents !== undefined && output.lifecycleEvents !== null) {
    contents.lifecycleEvents = deserializeAws_json1_1LifecycleEventList(
      output.lifecycleEvents,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.targetArn !== undefined && output.targetArn !== null) {
    contents.targetArn = output.targetArn;
  }
  if (output.targetId !== undefined && output.targetId !== null) {
    contents.targetId = output.targetId;
  }
  return contents;
};

const deserializeAws_json1_1LastDeploymentInfo = (
  output: any,
  context: __SerdeContext
): LastDeploymentInfo => {
  let contents: any = {
    __type: "LastDeploymentInfo",
    createTime: undefined,
    deploymentId: undefined,
    endTime: undefined,
    status: undefined
  };
  if (output.createTime !== undefined && output.createTime !== null) {
    contents.createTime = new Date(Math.round(output.createTime * 1000));
  }
  if (output.deploymentId !== undefined && output.deploymentId !== null) {
    contents.deploymentId = output.deploymentId;
  }
  if (output.endTime !== undefined && output.endTime !== null) {
    contents.endTime = new Date(Math.round(output.endTime * 1000));
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1LifecycleEvent = (
  output: any,
  context: __SerdeContext
): LifecycleEvent => {
  let contents: any = {
    __type: "LifecycleEvent",
    diagnostics: undefined,
    endTime: undefined,
    lifecycleEventName: undefined,
    startTime: undefined,
    status: undefined
  };
  if (output.diagnostics !== undefined && output.diagnostics !== null) {
    contents.diagnostics = deserializeAws_json1_1Diagnostics(
      output.diagnostics,
      context
    );
  }
  if (output.endTime !== undefined && output.endTime !== null) {
    contents.endTime = new Date(Math.round(output.endTime * 1000));
  }
  if (
    output.lifecycleEventName !== undefined &&
    output.lifecycleEventName !== null
  ) {
    contents.lifecycleEventName = output.lifecycleEventName;
  }
  if (output.startTime !== undefined && output.startTime !== null) {
    contents.startTime = new Date(Math.round(output.startTime * 1000));
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1LifecycleEventAlreadyCompletedException = (
  output: any,
  context: __SerdeContext
): LifecycleEventAlreadyCompletedException => {
  let contents: any = {
    __type: "LifecycleEventAlreadyCompletedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LifecycleEventList = (
  output: any,
  context: __SerdeContext
): Array<LifecycleEvent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LifecycleEvent(entry, context)
  );
};

const deserializeAws_json1_1LifecycleHookLimitExceededException = (
  output: any,
  context: __SerdeContext
): LifecycleHookLimitExceededException => {
  let contents: any = {
    __type: "LifecycleHookLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListApplicationRevisionsOutput = (
  output: any,
  context: __SerdeContext
): ListApplicationRevisionsOutput => {
  let contents: any = {
    __type: "ListApplicationRevisionsOutput",
    nextToken: undefined,
    revisions: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.revisions !== undefined && output.revisions !== null) {
    contents.revisions = deserializeAws_json1_1RevisionLocationList(
      output.revisions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListApplicationsOutput = (
  output: any,
  context: __SerdeContext
): ListApplicationsOutput => {
  let contents: any = {
    __type: "ListApplicationsOutput",
    applications: undefined,
    nextToken: undefined
  };
  if (output.applications !== undefined && output.applications !== null) {
    contents.applications = deserializeAws_json1_1ApplicationsList(
      output.applications,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDeploymentConfigsOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentConfigsOutput => {
  let contents: any = {
    __type: "ListDeploymentConfigsOutput",
    deploymentConfigsList: undefined,
    nextToken: undefined
  };
  if (
    output.deploymentConfigsList !== undefined &&
    output.deploymentConfigsList !== null
  ) {
    contents.deploymentConfigsList = deserializeAws_json1_1DeploymentConfigsList(
      output.deploymentConfigsList,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDeploymentGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentGroupsOutput => {
  let contents: any = {
    __type: "ListDeploymentGroupsOutput",
    applicationName: undefined,
    deploymentGroups: undefined,
    nextToken: undefined
  };
  if (output.applicationName !== undefined && output.applicationName !== null) {
    contents.applicationName = output.applicationName;
  }
  if (
    output.deploymentGroups !== undefined &&
    output.deploymentGroups !== null
  ) {
    contents.deploymentGroups = deserializeAws_json1_1DeploymentGroupsList(
      output.deploymentGroups,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDeploymentInstancesOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentInstancesOutput => {
  let contents: any = {
    __type: "ListDeploymentInstancesOutput",
    instancesList: undefined,
    nextToken: undefined
  };
  if (output.instancesList !== undefined && output.instancesList !== null) {
    contents.instancesList = deserializeAws_json1_1InstancesList(
      output.instancesList,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDeploymentTargetsOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentTargetsOutput => {
  let contents: any = {
    __type: "ListDeploymentTargetsOutput",
    nextToken: undefined,
    targetIds: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.targetIds !== undefined && output.targetIds !== null) {
    contents.targetIds = deserializeAws_json1_1TargetIdList(
      output.targetIds,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListDeploymentsOutput = (
  output: any,
  context: __SerdeContext
): ListDeploymentsOutput => {
  let contents: any = {
    __type: "ListDeploymentsOutput",
    deployments: undefined,
    nextToken: undefined
  };
  if (output.deployments !== undefined && output.deployments !== null) {
    contents.deployments = deserializeAws_json1_1DeploymentsList(
      output.deployments,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListGitHubAccountTokenNamesOutput = (
  output: any,
  context: __SerdeContext
): ListGitHubAccountTokenNamesOutput => {
  let contents: any = {
    __type: "ListGitHubAccountTokenNamesOutput",
    nextToken: undefined,
    tokenNameList: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.tokenNameList !== undefined && output.tokenNameList !== null) {
    contents.tokenNameList = deserializeAws_json1_1GitHubAccountTokenNameList(
      output.tokenNameList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListOnPremisesInstancesOutput = (
  output: any,
  context: __SerdeContext
): ListOnPremisesInstancesOutput => {
  let contents: any = {
    __type: "ListOnPremisesInstancesOutput",
    instanceNames: undefined,
    nextToken: undefined
  };
  if (output.instanceNames !== undefined && output.instanceNames !== null) {
    contents.instanceNames = deserializeAws_json1_1InstanceNameList(
      output.instanceNames,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  let contents: any = {
    __type: "ListTagsForResourceOutput",
    NextToken: undefined,
    Tags: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListenerArnList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1LoadBalancerInfo = (
  output: any,
  context: __SerdeContext
): LoadBalancerInfo => {
  let contents: any = {
    __type: "LoadBalancerInfo",
    elbInfoList: undefined,
    targetGroupInfoList: undefined,
    targetGroupPairInfoList: undefined
  };
  if (output.elbInfoList !== undefined && output.elbInfoList !== null) {
    contents.elbInfoList = deserializeAws_json1_1ELBInfoList(
      output.elbInfoList,
      context
    );
  }
  if (
    output.targetGroupInfoList !== undefined &&
    output.targetGroupInfoList !== null
  ) {
    contents.targetGroupInfoList = deserializeAws_json1_1TargetGroupInfoList(
      output.targetGroupInfoList,
      context
    );
  }
  if (
    output.targetGroupPairInfoList !== undefined &&
    output.targetGroupPairInfoList !== null
  ) {
    contents.targetGroupPairInfoList = deserializeAws_json1_1TargetGroupPairInfoList(
      output.targetGroupPairInfoList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1MinimumHealthyHosts = (
  output: any,
  context: __SerdeContext
): MinimumHealthyHosts => {
  let contents: any = {
    __type: "MinimumHealthyHosts",
    type: undefined,
    value: undefined
  };
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1MultipleIamArnsProvidedException = (
  output: any,
  context: __SerdeContext
): MultipleIamArnsProvidedException => {
  let contents: any = {
    __type: "MultipleIamArnsProvidedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1OnPremisesTagSet = (
  output: any,
  context: __SerdeContext
): OnPremisesTagSet => {
  let contents: any = {
    __type: "OnPremisesTagSet",
    onPremisesTagSetList: undefined
  };
  if (
    output.onPremisesTagSetList !== undefined &&
    output.onPremisesTagSetList !== null
  ) {
    contents.onPremisesTagSetList = deserializeAws_json1_1OnPremisesTagSetList(
      output.onPremisesTagSetList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1OnPremisesTagSetList = (
  output: any,
  context: __SerdeContext
): Array<Array<TagFilter>> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TagFilterList(entry, context)
  );
};

const deserializeAws_json1_1OperationNotSupportedException = (
  output: any,
  context: __SerdeContext
): OperationNotSupportedException => {
  let contents: any = {
    __type: "OperationNotSupportedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PutLifecycleEventHookExecutionStatusOutput = (
  output: any,
  context: __SerdeContext
): PutLifecycleEventHookExecutionStatusOutput => {
  let contents: any = {
    __type: "PutLifecycleEventHookExecutionStatusOutput",
    lifecycleEventHookExecutionId: undefined
  };
  if (
    output.lifecycleEventHookExecutionId !== undefined &&
    output.lifecycleEventHookExecutionId !== null
  ) {
    contents.lifecycleEventHookExecutionId =
      output.lifecycleEventHookExecutionId;
  }
  return contents;
};

const deserializeAws_json1_1RawString = (
  output: any,
  context: __SerdeContext
): RawString => {
  let contents: any = {
    __type: "RawString",
    content: undefined,
    sha256: undefined
  };
  if (output.content !== undefined && output.content !== null) {
    contents.content = output.content;
  }
  if (output.sha256 !== undefined && output.sha256 !== null) {
    contents.sha256 = output.sha256;
  }
  return contents;
};

const deserializeAws_json1_1ResourceArnRequiredException = (
  output: any,
  context: __SerdeContext
): ResourceArnRequiredException => {
  let contents: any = {
    __type: "ResourceArnRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceValidationException = (
  output: any,
  context: __SerdeContext
): ResourceValidationException => {
  let contents: any = {
    __type: "ResourceValidationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RevisionDoesNotExistException = (
  output: any,
  context: __SerdeContext
): RevisionDoesNotExistException => {
  let contents: any = {
    __type: "RevisionDoesNotExistException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RevisionInfo = (
  output: any,
  context: __SerdeContext
): RevisionInfo => {
  let contents: any = {
    __type: "RevisionInfo",
    genericRevisionInfo: undefined,
    revisionLocation: undefined
  };
  if (
    output.genericRevisionInfo !== undefined &&
    output.genericRevisionInfo !== null
  ) {
    contents.genericRevisionInfo = deserializeAws_json1_1GenericRevisionInfo(
      output.genericRevisionInfo,
      context
    );
  }
  if (
    output.revisionLocation !== undefined &&
    output.revisionLocation !== null
  ) {
    contents.revisionLocation = deserializeAws_json1_1RevisionLocation(
      output.revisionLocation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RevisionInfoList = (
  output: any,
  context: __SerdeContext
): Array<RevisionInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RevisionInfo(entry, context)
  );
};

const deserializeAws_json1_1RevisionLocation = (
  output: any,
  context: __SerdeContext
): RevisionLocation => {
  let contents: any = {
    __type: "RevisionLocation",
    appSpecContent: undefined,
    gitHubLocation: undefined,
    revisionType: undefined,
    s3Location: undefined,
    string: undefined
  };
  if (output.appSpecContent !== undefined && output.appSpecContent !== null) {
    contents.appSpecContent = deserializeAws_json1_1AppSpecContent(
      output.appSpecContent,
      context
    );
  }
  if (output.gitHubLocation !== undefined && output.gitHubLocation !== null) {
    contents.gitHubLocation = deserializeAws_json1_1GitHubLocation(
      output.gitHubLocation,
      context
    );
  }
  if (output.revisionType !== undefined && output.revisionType !== null) {
    contents.revisionType = output.revisionType;
  }
  if (output.s3Location !== undefined && output.s3Location !== null) {
    contents.s3Location = deserializeAws_json1_1S3Location(
      output.s3Location,
      context
    );
  }
  if (output.string !== undefined && output.string !== null) {
    contents.string = deserializeAws_json1_1RawString(output.string, context);
  }
  return contents;
};

const deserializeAws_json1_1RevisionLocationList = (
  output: any,
  context: __SerdeContext
): Array<RevisionLocation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RevisionLocation(entry, context)
  );
};

const deserializeAws_json1_1RevisionRequiredException = (
  output: any,
  context: __SerdeContext
): RevisionRequiredException => {
  let contents: any = {
    __type: "RevisionRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RoleRequiredException = (
  output: any,
  context: __SerdeContext
): RoleRequiredException => {
  let contents: any = {
    __type: "RoleRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RollbackInfo = (
  output: any,
  context: __SerdeContext
): RollbackInfo => {
  let contents: any = {
    __type: "RollbackInfo",
    rollbackDeploymentId: undefined,
    rollbackMessage: undefined,
    rollbackTriggeringDeploymentId: undefined
  };
  if (
    output.rollbackDeploymentId !== undefined &&
    output.rollbackDeploymentId !== null
  ) {
    contents.rollbackDeploymentId = output.rollbackDeploymentId;
  }
  if (output.rollbackMessage !== undefined && output.rollbackMessage !== null) {
    contents.rollbackMessage = output.rollbackMessage;
  }
  if (
    output.rollbackTriggeringDeploymentId !== undefined &&
    output.rollbackTriggeringDeploymentId !== null
  ) {
    contents.rollbackTriggeringDeploymentId =
      output.rollbackTriggeringDeploymentId;
  }
  return contents;
};

const deserializeAws_json1_1S3Location = (
  output: any,
  context: __SerdeContext
): S3Location => {
  let contents: any = {
    __type: "S3Location",
    bucket: undefined,
    bundleType: undefined,
    eTag: undefined,
    key: undefined,
    version: undefined
  };
  if (output.bucket !== undefined && output.bucket !== null) {
    contents.bucket = output.bucket;
  }
  if (output.bundleType !== undefined && output.bundleType !== null) {
    contents.bundleType = output.bundleType;
  }
  if (output.eTag !== undefined && output.eTag !== null) {
    contents.eTag = output.eTag;
  }
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_json1_1StopDeploymentOutput = (
  output: any,
  context: __SerdeContext
): StopDeploymentOutput => {
  let contents: any = {
    __type: "StopDeploymentOutput",
    status: undefined,
    statusMessage: undefined
  };
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.statusMessage !== undefined && output.statusMessage !== null) {
    contents.statusMessage = output.statusMessage;
  }
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagFilter = (
  output: any,
  context: __SerdeContext
): TagFilter => {
  let contents: any = {
    __type: "TagFilter",
    Key: undefined,
    Type: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagFilterList = (
  output: any,
  context: __SerdeContext
): Array<TagFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TagFilter(entry, context)
  );
};

const deserializeAws_json1_1TagLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagLimitExceededException => {
  let contents: any = {
    __type: "TagLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagRequiredException = (
  output: any,
  context: __SerdeContext
): TagRequiredException => {
  let contents: any = {
    __type: "TagRequiredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TagResourceOutput = (
  output: any,
  context: __SerdeContext
): TagResourceOutput => {
  let contents: any = {
    __type: "TagResourceOutput"
  };
  return contents;
};

const deserializeAws_json1_1TagSetListLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagSetListLimitExceededException => {
  let contents: any = {
    __type: "TagSetListLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TargetGroupInfo = (
  output: any,
  context: __SerdeContext
): TargetGroupInfo => {
  let contents: any = {
    __type: "TargetGroupInfo",
    name: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1TargetGroupInfoList = (
  output: any,
  context: __SerdeContext
): Array<TargetGroupInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TargetGroupInfo(entry, context)
  );
};

const deserializeAws_json1_1TargetGroupPairInfo = (
  output: any,
  context: __SerdeContext
): TargetGroupPairInfo => {
  let contents: any = {
    __type: "TargetGroupPairInfo",
    prodTrafficRoute: undefined,
    targetGroups: undefined,
    testTrafficRoute: undefined
  };
  if (
    output.prodTrafficRoute !== undefined &&
    output.prodTrafficRoute !== null
  ) {
    contents.prodTrafficRoute = deserializeAws_json1_1TrafficRoute(
      output.prodTrafficRoute,
      context
    );
  }
  if (output.targetGroups !== undefined && output.targetGroups !== null) {
    contents.targetGroups = deserializeAws_json1_1TargetGroupInfoList(
      output.targetGroups,
      context
    );
  }
  if (
    output.testTrafficRoute !== undefined &&
    output.testTrafficRoute !== null
  ) {
    contents.testTrafficRoute = deserializeAws_json1_1TrafficRoute(
      output.testTrafficRoute,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1TargetGroupPairInfoList = (
  output: any,
  context: __SerdeContext
): Array<TargetGroupPairInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TargetGroupPairInfo(entry, context)
  );
};

const deserializeAws_json1_1TargetIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TargetInstances = (
  output: any,
  context: __SerdeContext
): TargetInstances => {
  let contents: any = {
    __type: "TargetInstances",
    autoScalingGroups: undefined,
    ec2TagSet: undefined,
    tagFilters: undefined
  };
  if (
    output.autoScalingGroups !== undefined &&
    output.autoScalingGroups !== null
  ) {
    contents.autoScalingGroups = deserializeAws_json1_1AutoScalingGroupNameList(
      output.autoScalingGroups,
      context
    );
  }
  if (output.ec2TagSet !== undefined && output.ec2TagSet !== null) {
    contents.ec2TagSet = deserializeAws_json1_1EC2TagSet(
      output.ec2TagSet,
      context
    );
  }
  if (output.tagFilters !== undefined && output.tagFilters !== null) {
    contents.tagFilters = deserializeAws_json1_1EC2TagFilterList(
      output.tagFilters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TimeBasedCanary = (
  output: any,
  context: __SerdeContext
): TimeBasedCanary => {
  let contents: any = {
    __type: "TimeBasedCanary",
    canaryInterval: undefined,
    canaryPercentage: undefined
  };
  if (output.canaryInterval !== undefined && output.canaryInterval !== null) {
    contents.canaryInterval = output.canaryInterval;
  }
  if (
    output.canaryPercentage !== undefined &&
    output.canaryPercentage !== null
  ) {
    contents.canaryPercentage = output.canaryPercentage;
  }
  return contents;
};

const deserializeAws_json1_1TimeBasedLinear = (
  output: any,
  context: __SerdeContext
): TimeBasedLinear => {
  let contents: any = {
    __type: "TimeBasedLinear",
    linearInterval: undefined,
    linearPercentage: undefined
  };
  if (output.linearInterval !== undefined && output.linearInterval !== null) {
    contents.linearInterval = output.linearInterval;
  }
  if (
    output.linearPercentage !== undefined &&
    output.linearPercentage !== null
  ) {
    contents.linearPercentage = output.linearPercentage;
  }
  return contents;
};

const deserializeAws_json1_1TrafficRoute = (
  output: any,
  context: __SerdeContext
): TrafficRoute => {
  let contents: any = {
    __type: "TrafficRoute",
    listenerArns: undefined
  };
  if (output.listenerArns !== undefined && output.listenerArns !== null) {
    contents.listenerArns = deserializeAws_json1_1ListenerArnList(
      output.listenerArns,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1TrafficRoutingConfig = (
  output: any,
  context: __SerdeContext
): TrafficRoutingConfig => {
  let contents: any = {
    __type: "TrafficRoutingConfig",
    timeBasedCanary: undefined,
    timeBasedLinear: undefined,
    type: undefined
  };
  if (output.timeBasedCanary !== undefined && output.timeBasedCanary !== null) {
    contents.timeBasedCanary = deserializeAws_json1_1TimeBasedCanary(
      output.timeBasedCanary,
      context
    );
  }
  if (output.timeBasedLinear !== undefined && output.timeBasedLinear !== null) {
    contents.timeBasedLinear = deserializeAws_json1_1TimeBasedLinear(
      output.timeBasedLinear,
      context
    );
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1TriggerConfig = (
  output: any,
  context: __SerdeContext
): TriggerConfig => {
  let contents: any = {
    __type: "TriggerConfig",
    triggerEvents: undefined,
    triggerName: undefined,
    triggerTargetArn: undefined
  };
  if (output.triggerEvents !== undefined && output.triggerEvents !== null) {
    contents.triggerEvents = deserializeAws_json1_1TriggerEventTypeList(
      output.triggerEvents,
      context
    );
  }
  if (output.triggerName !== undefined && output.triggerName !== null) {
    contents.triggerName = output.triggerName;
  }
  if (
    output.triggerTargetArn !== undefined &&
    output.triggerTargetArn !== null
  ) {
    contents.triggerTargetArn = output.triggerTargetArn;
  }
  return contents;
};

const deserializeAws_json1_1TriggerConfigList = (
  output: any,
  context: __SerdeContext
): Array<TriggerConfig> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TriggerConfig(entry, context)
  );
};

const deserializeAws_json1_1TriggerEventTypeList = (
  output: any,
  context: __SerdeContext
): Array<TriggerEventType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TriggerTargetsLimitExceededException = (
  output: any,
  context: __SerdeContext
): TriggerTargetsLimitExceededException => {
  let contents: any = {
    __type: "TriggerTargetsLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UnsupportedActionForDeploymentTypeException = (
  output: any,
  context: __SerdeContext
): UnsupportedActionForDeploymentTypeException => {
  let contents: any = {
    __type: "UnsupportedActionForDeploymentTypeException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UntagResourceOutput = (
  output: any,
  context: __SerdeContext
): UntagResourceOutput => {
  let contents: any = {
    __type: "UntagResourceOutput"
  };
  return contents;
};

const deserializeAws_json1_1UpdateDeploymentGroupOutput = (
  output: any,
  context: __SerdeContext
): UpdateDeploymentGroupOutput => {
  let contents: any = {
    __type: "UpdateDeploymentGroupOutput",
    hooksNotCleanedUp: undefined
  };
  if (
    output.hooksNotCleanedUp !== undefined &&
    output.hooksNotCleanedUp !== null
  ) {
    contents.hooksNotCleanedUp = deserializeAws_json1_1AutoScalingGroupList(
      output.hooksNotCleanedUp,
      context
    );
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
