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
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1AddTagsToOnPremisesInstancesCommand(
  input: AddTagsToOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.AddTagsToOnPremisesInstances";
  let body: any = {};
  const wrappedBody: any = {
    AddTagsToOnPremisesInstancesInput: serializeAws_json1_1AddTagsToOnPremisesInstancesInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AddTagsToOnPremisesInstances",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1BatchGetApplicationRevisionsCommand(
  input: BatchGetApplicationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetApplicationRevisions";
  let body: any = {};
  const wrappedBody: any = {
    BatchGetApplicationRevisionsInput: serializeAws_json1_1BatchGetApplicationRevisionsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchGetApplicationRevisions",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1BatchGetApplicationsCommand(
  input: BatchGetApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetApplications";
  let body: any = {};
  const wrappedBody: any = {
    BatchGetApplicationsInput: serializeAws_json1_1BatchGetApplicationsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchGetApplications",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1BatchGetDeploymentGroupsCommand(
  input: BatchGetDeploymentGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetDeploymentGroups";
  let body: any = {};
  const wrappedBody: any = {
    BatchGetDeploymentGroupsInput: serializeAws_json1_1BatchGetDeploymentGroupsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchGetDeploymentGroups",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1BatchGetDeploymentInstancesCommand(
  input: BatchGetDeploymentInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetDeploymentInstances";
  let body: any = {};
  const wrappedBody: any = {
    BatchGetDeploymentInstancesInput: serializeAws_json1_1BatchGetDeploymentInstancesInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchGetDeploymentInstances",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1BatchGetDeploymentTargetsCommand(
  input: BatchGetDeploymentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetDeploymentTargets";
  let body: any = {};
  const wrappedBody: any = {
    BatchGetDeploymentTargetsInput: serializeAws_json1_1BatchGetDeploymentTargetsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchGetDeploymentTargets",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1BatchGetDeploymentsCommand(
  input: BatchGetDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetDeployments";
  let body: any = {};
  const wrappedBody: any = {
    BatchGetDeploymentsInput: serializeAws_json1_1BatchGetDeploymentsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchGetDeployments",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1BatchGetOnPremisesInstancesCommand(
  input: BatchGetOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.BatchGetOnPremisesInstances";
  let body: any = {};
  const wrappedBody: any = {
    BatchGetOnPremisesInstancesInput: serializeAws_json1_1BatchGetOnPremisesInstancesInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchGetOnPremisesInstances",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ContinueDeploymentCommand(
  input: ContinueDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ContinueDeployment";
  let body: any = {};
  const wrappedBody: any = {
    ContinueDeploymentInput: serializeAws_json1_1ContinueDeploymentInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ContinueDeployment",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateApplicationCommand(
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.CreateApplication";
  let body: any = {};
  const wrappedBody: any = {
    CreateApplicationInput: serializeAws_json1_1CreateApplicationInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateApplication",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDeploymentCommand(
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.CreateDeployment";
  let body: any = {};
  const wrappedBody: any = {
    CreateDeploymentInput: serializeAws_json1_1CreateDeploymentInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDeployment",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDeploymentConfigCommand(
  input: CreateDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.CreateDeploymentConfig";
  let body: any = {};
  const wrappedBody: any = {
    CreateDeploymentConfigInput: serializeAws_json1_1CreateDeploymentConfigInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDeploymentConfig",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDeploymentGroupCommand(
  input: CreateDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.CreateDeploymentGroup";
  let body: any = {};
  const wrappedBody: any = {
    CreateDeploymentGroupInput: serializeAws_json1_1CreateDeploymentGroupInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDeploymentGroup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteApplicationCommand(
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.DeleteApplication";
  let body: any = {};
  const wrappedBody: any = {
    DeleteApplicationInput: serializeAws_json1_1DeleteApplicationInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteApplication",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteDeploymentConfigCommand(
  input: DeleteDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.DeleteDeploymentConfig";
  let body: any = {};
  const wrappedBody: any = {
    DeleteDeploymentConfigInput: serializeAws_json1_1DeleteDeploymentConfigInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteDeploymentConfig",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteDeploymentGroupCommand(
  input: DeleteDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.DeleteDeploymentGroup";
  let body: any = {};
  const wrappedBody: any = {
    DeleteDeploymentGroupInput: serializeAws_json1_1DeleteDeploymentGroupInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteDeploymentGroup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteGitHubAccountTokenCommand(
  input: DeleteGitHubAccountTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.DeleteGitHubAccountToken";
  let body: any = {};
  const wrappedBody: any = {
    DeleteGitHubAccountTokenInput: serializeAws_json1_1DeleteGitHubAccountTokenInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteGitHubAccountToken",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeregisterOnPremisesInstanceCommand(
  input: DeregisterOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.DeregisterOnPremisesInstance";
  let body: any = {};
  const wrappedBody: any = {
    DeregisterOnPremisesInstanceInput: serializeAws_json1_1DeregisterOnPremisesInstanceInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeregisterOnPremisesInstance",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetApplicationCommand(
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetApplication";
  let body: any = {};
  const wrappedBody: any = {
    GetApplicationInput: serializeAws_json1_1GetApplicationInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetApplication",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetApplicationRevisionCommand(
  input: GetApplicationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetApplicationRevision";
  let body: any = {};
  const wrappedBody: any = {
    GetApplicationRevisionInput: serializeAws_json1_1GetApplicationRevisionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetApplicationRevision",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDeploymentCommand(
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeployment";
  let body: any = {};
  const wrappedBody: any = {
    GetDeploymentInput: serializeAws_json1_1GetDeploymentInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDeployment",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDeploymentConfigCommand(
  input: GetDeploymentConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeploymentConfig";
  let body: any = {};
  const wrappedBody: any = {
    GetDeploymentConfigInput: serializeAws_json1_1GetDeploymentConfigInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDeploymentConfig",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDeploymentGroupCommand(
  input: GetDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeploymentGroup";
  let body: any = {};
  const wrappedBody: any = {
    GetDeploymentGroupInput: serializeAws_json1_1GetDeploymentGroupInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDeploymentGroup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDeploymentInstanceCommand(
  input: GetDeploymentInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeploymentInstance";
  let body: any = {};
  const wrappedBody: any = {
    GetDeploymentInstanceInput: serializeAws_json1_1GetDeploymentInstanceInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDeploymentInstance",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetDeploymentTargetCommand(
  input: GetDeploymentTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetDeploymentTarget";
  let body: any = {};
  const wrappedBody: any = {
    GetDeploymentTargetInput: serializeAws_json1_1GetDeploymentTargetInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDeploymentTarget",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetOnPremisesInstanceCommand(
  input: GetOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.GetOnPremisesInstance";
  let body: any = {};
  const wrappedBody: any = {
    GetOnPremisesInstanceInput: serializeAws_json1_1GetOnPremisesInstanceInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetOnPremisesInstance",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListApplicationRevisionsCommand(
  input: ListApplicationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListApplicationRevisions";
  let body: any = {};
  const wrappedBody: any = {
    ListApplicationRevisionsInput: serializeAws_json1_1ListApplicationRevisionsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListApplicationRevisions",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListApplicationsCommand(
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListApplications";
  let body: any = {};
  const wrappedBody: any = {
    ListApplicationsInput: serializeAws_json1_1ListApplicationsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListApplications",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListDeploymentConfigsCommand(
  input: ListDeploymentConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeploymentConfigs";
  let body: any = {};
  const wrappedBody: any = {
    ListDeploymentConfigsInput: serializeAws_json1_1ListDeploymentConfigsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListDeploymentConfigs",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListDeploymentGroupsCommand(
  input: ListDeploymentGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeploymentGroups";
  let body: any = {};
  const wrappedBody: any = {
    ListDeploymentGroupsInput: serializeAws_json1_1ListDeploymentGroupsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListDeploymentGroups",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListDeploymentInstancesCommand(
  input: ListDeploymentInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeploymentInstances";
  let body: any = {};
  const wrappedBody: any = {
    ListDeploymentInstancesInput: serializeAws_json1_1ListDeploymentInstancesInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListDeploymentInstances",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListDeploymentTargetsCommand(
  input: ListDeploymentTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeploymentTargets";
  let body: any = {};
  const wrappedBody: any = {
    ListDeploymentTargetsInput: serializeAws_json1_1ListDeploymentTargetsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListDeploymentTargets",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListDeploymentsCommand(
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListDeployments";
  let body: any = {};
  const wrappedBody: any = {
    ListDeploymentsInput: serializeAws_json1_1ListDeploymentsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListDeployments",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListGitHubAccountTokenNamesCommand(
  input: ListGitHubAccountTokenNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListGitHubAccountTokenNames";
  let body: any = {};
  const wrappedBody: any = {
    ListGitHubAccountTokenNamesInput: serializeAws_json1_1ListGitHubAccountTokenNamesInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListGitHubAccountTokenNames",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListOnPremisesInstancesCommand(
  input: ListOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListOnPremisesInstances";
  let body: any = {};
  const wrappedBody: any = {
    ListOnPremisesInstancesInput: serializeAws_json1_1ListOnPremisesInstancesInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListOnPremisesInstances",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.ListTagsForResource";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsForResourceInput: serializeAws_json1_1ListTagsForResourceInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsForResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand(
  input: PutLifecycleEventHookExecutionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus";
  let body: any = {};
  const wrappedBody: any = {
    PutLifecycleEventHookExecutionStatusInput: serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutLifecycleEventHookExecutionStatus",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RegisterApplicationRevisionCommand(
  input: RegisterApplicationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.RegisterApplicationRevision";
  let body: any = {};
  const wrappedBody: any = {
    RegisterApplicationRevisionInput: serializeAws_json1_1RegisterApplicationRevisionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RegisterApplicationRevision",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RegisterOnPremisesInstanceCommand(
  input: RegisterOnPremisesInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.RegisterOnPremisesInstance";
  let body: any = {};
  const wrappedBody: any = {
    RegisterOnPremisesInstanceInput: serializeAws_json1_1RegisterOnPremisesInstanceInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RegisterOnPremisesInstance",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand(
  input: RemoveTagsFromOnPremisesInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "CodeDeploy_20141006.RemoveTagsFromOnPremisesInstances";
  let body: any = {};
  const wrappedBody: any = {
    RemoveTagsFromOnPremisesInstancesInput: serializeAws_json1_1RemoveTagsFromOnPremisesInstancesInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RemoveTagsFromOnPremisesInstances",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand(
  input: SkipWaitTimeForInstanceTerminationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "CodeDeploy_20141006.SkipWaitTimeForInstanceTermination";
  let body: any = {};
  const wrappedBody: any = {
    SkipWaitTimeForInstanceTerminationInput: serializeAws_json1_1SkipWaitTimeForInstanceTerminationInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/SkipWaitTimeForInstanceTermination",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StopDeploymentCommand(
  input: StopDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.StopDeployment";
  let body: any = {};
  const wrappedBody: any = {
    StopDeploymentInput: serializeAws_json1_1StopDeploymentInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StopDeployment",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceInput: serializeAws_json1_1TagResourceInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceInput: serializeAws_json1_1UntagResourceInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateApplicationCommand(
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.UpdateApplication";
  let body: any = {};
  const wrappedBody: any = {
    UpdateApplicationInput: serializeAws_json1_1UpdateApplicationInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateApplication",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateDeploymentGroupCommand(
  input: UpdateDeploymentGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CodeDeploy_20141006.UpdateDeploymentGroup";
  let body: any = {};
  const wrappedBody: any = {
    UpdateDeploymentGroupInput: serializeAws_json1_1UpdateDeploymentGroupInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateDeploymentGroup",
    headers: headers,
    body: body
  });
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
  const response: AddTagsToOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AddTagsToOnPremisesInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToOnPremisesInstancesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InstanceLimitExceededException":
    case "com.amazonaws.codedeploy#InstanceLimitExceededException":
      response = await deserializeAws_json1_1InstanceLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InstanceNotRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
      response = await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.codedeploy#TagLimitExceededException":
      response = await deserializeAws_json1_1TagLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      response = await deserializeAws_json1_1TagRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = await deserializeAws_json1_1BatchLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      response = await deserializeAws_json1_1InvalidRevisionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      response = await deserializeAws_json1_1RevisionRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = await deserializeAws_json1_1BatchLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = await deserializeAws_json1_1BatchLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = await deserializeAws_json1_1BatchLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InstanceIdRequiredException":
    case "com.amazonaws.codedeploy#InstanceIdRequiredException":
      response = await deserializeAws_json1_1InstanceIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentTargetDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentTargetIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException":
      response = await deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentTargetListSizeExceededException":
    case "com.amazonaws.codedeploy#DeploymentTargetListSizeExceededException":
      response = await deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentTargetIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException":
      response = await deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = await deserializeAws_json1_1BatchLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BatchLimitExceededException":
    case "com.amazonaws.codedeploy#BatchLimitExceededException":
      response = await deserializeAws_json1_1BatchLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const response: ContinueDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ContinueDeploymentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ContinueDeploymentCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentAlreadyCompletedException":
    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
      response = await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIsNotInReadyStateException":
    case "com.amazonaws.codedeploy#DeploymentIsNotInReadyStateException":
      response = await deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentStatusException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStatusException":
      response = await deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentWaitTypeException":
    case "com.amazonaws.codedeploy#InvalidDeploymentWaitTypeException":
      response = await deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      response = await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationAlreadyExistsException":
    case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException":
      response = await deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationLimitExceededException":
    case "com.amazonaws.codedeploy#ApplicationLimitExceededException":
      response = await deserializeAws_json1_1ApplicationLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      response = await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentLimitExceededException":
    case "com.amazonaws.codedeploy#DeploymentLimitExceededException":
      response = await deserializeAws_json1_1DeploymentLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DescriptionTooLongException":
    case "com.amazonaws.codedeploy#DescriptionTooLongException":
      response = await deserializeAws_json1_1DescriptionTooLongExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAutoRollbackConfigException":
    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
      response = await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAutoScalingGroupException":
    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
      response = await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidFileExistsBehaviorException":
    case "com.amazonaws.codedeploy#InvalidFileExistsBehaviorException":
      response = await deserializeAws_json1_1InvalidFileExistsBehaviorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGitHubAccountTokenException":
    case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenException":
      response = await deserializeAws_json1_1InvalidGitHubAccountTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidIgnoreApplicationStopFailuresValueException":
    case "com.amazonaws.codedeploy#InvalidIgnoreApplicationStopFailuresValueException":
      response = await deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidLoadBalancerInfoException":
    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
      response = await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      response = await deserializeAws_json1_1InvalidRevisionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = await deserializeAws_json1_1InvalidRoleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTargetInstancesException":
    case "com.amazonaws.codedeploy#InvalidTargetInstancesException":
      response = await deserializeAws_json1_1InvalidTargetInstancesExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidUpdateOutdatedInstancesOnlyValueException":
    case "com.amazonaws.codedeploy#InvalidUpdateOutdatedInstancesOnlyValueException":
      response = await deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RevisionDoesNotExistException":
    case "com.amazonaws.codedeploy#RevisionDoesNotExistException":
      response = await deserializeAws_json1_1RevisionDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      response = await deserializeAws_json1_1RevisionRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.codedeploy#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentConfigAlreadyExistsException":
    case "com.amazonaws.codedeploy#DeploymentConfigAlreadyExistsException":
      response = await deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentConfigLimitExceededException":
    case "com.amazonaws.codedeploy#DeploymentConfigLimitExceededException":
      response = await deserializeAws_json1_1DeploymentConfigLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentConfigNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
      response = await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidMinimumHealthyHostValueException":
    case "com.amazonaws.codedeploy#InvalidMinimumHealthyHostValueException":
      response = await deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTrafficRoutingConfigurationException":
    case "com.amazonaws.codedeploy#InvalidTrafficRoutingConfigurationException":
      response = await deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AlarmsLimitExceededException":
    case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
      response = await deserializeAws_json1_1AlarmsLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupAlreadyExistsException":
    case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException":
      response = await deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupLimitExceededException":
    case "com.amazonaws.codedeploy#DeploymentGroupLimitExceededException":
      response = await deserializeAws_json1_1DeploymentGroupLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ECSServiceMappingLimitExceededException":
    case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException":
      response = await deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAlarmConfigException":
    case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
      response = await deserializeAws_json1_1InvalidAlarmConfigExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAutoRollbackConfigException":
    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
      response = await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAutoScalingGroupException":
    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
      response = await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidBlueGreenDeploymentConfigurationException":
    case "com.amazonaws.codedeploy#InvalidBlueGreenDeploymentConfigurationException":
      response = await deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentStyleException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStyleException":
      response = await deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidEC2TagCombinationException":
    case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException":
      response = await deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidEC2TagException":
    case "com.amazonaws.codedeploy#InvalidEC2TagException":
      response = await deserializeAws_json1_1InvalidEC2TagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidECSServiceException":
    case "com.amazonaws.codedeploy#InvalidECSServiceException":
      response = await deserializeAws_json1_1InvalidECSServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.codedeploy#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidLoadBalancerInfoException":
    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
      response = await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidOnPremisesTagCombinationException":
    case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException":
      response = await deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = await deserializeAws_json1_1InvalidRoleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      response = await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTargetGroupPairException":
    case "com.amazonaws.codedeploy#InvalidTargetGroupPairException":
      response = await deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTriggerConfigException":
    case "com.amazonaws.codedeploy#InvalidTriggerConfigException":
      response = await deserializeAws_json1_1InvalidTriggerConfigExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LifecycleHookLimitExceededException":
    case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException":
      response = await deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RoleRequiredException":
    case "com.amazonaws.codedeploy#RoleRequiredException":
      response = await deserializeAws_json1_1RoleRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagSetListLimitExceededException":
    case "com.amazonaws.codedeploy#TagSetListLimitExceededException":
      response = await deserializeAws_json1_1TagSetListLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.codedeploy#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TriggerTargetsLimitExceededException":
    case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException":
      response = await deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
  }
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = await deserializeAws_json1_1InvalidRoleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const response: DeleteDeploymentConfigCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDeploymentConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentConfigCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentConfigInUseException":
    case "com.amazonaws.codedeploy#DeploymentConfigInUseException":
      response = await deserializeAws_json1_1DeploymentConfigInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentConfigNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
      response = await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidOperationException":
    case "com.amazonaws.codedeploy#InvalidOperationException":
      response = await deserializeAws_json1_1InvalidOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = await deserializeAws_json1_1InvalidRoleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "GitHubAccountTokenDoesNotExistException":
    case "com.amazonaws.codedeploy#GitHubAccountTokenDoesNotExistException":
      response = await deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "GitHubAccountTokenNameRequiredException":
    case "com.amazonaws.codedeploy#GitHubAccountTokenNameRequiredException":
      response = await deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidGitHubAccountTokenNameException":
    case "com.amazonaws.codedeploy#InvalidGitHubAccountTokenNameException":
      response = await deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.codedeploy#OperationNotSupportedException":
      response = await deserializeAws_json1_1OperationNotSupportedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceValidationException":
    case "com.amazonaws.codedeploy#ResourceValidationException":
      response = await deserializeAws_json1_1ResourceValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const response: DeregisterOnPremisesInstanceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeregisterOnPremisesInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOnPremisesInstanceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      response = await deserializeAws_json1_1InvalidRevisionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RevisionDoesNotExistException":
    case "com.amazonaws.codedeploy#RevisionDoesNotExistException":
      response = await deserializeAws_json1_1RevisionDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      response = await deserializeAws_json1_1RevisionRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentConfigNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentConfigNameRequiredException":
      response = await deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InstanceDoesNotExistException":
    case "com.amazonaws.codedeploy#InstanceDoesNotExistException":
      response = await deserializeAws_json1_1InstanceDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InstanceIdRequiredException":
    case "com.amazonaws.codedeploy#InstanceIdRequiredException":
      response = await deserializeAws_json1_1InstanceIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentTargetDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentTargetDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentTargetIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentTargetIdRequiredException":
      response = await deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentTargetIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentTargetIdException":
      response = await deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InstanceNotRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
      response = await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BucketNameFilterRequiredException":
    case "com.amazonaws.codedeploy#BucketNameFilterRequiredException":
      response = await deserializeAws_json1_1BucketNameFilterRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidBucketNameFilterException":
    case "com.amazonaws.codedeploy#InvalidBucketNameFilterException":
      response = await deserializeAws_json1_1InvalidBucketNameFilterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeployedStateFilterException":
    case "com.amazonaws.codedeploy#InvalidDeployedStateFilterException":
      response = await deserializeAws_json1_1InvalidDeployedStateFilterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKeyPrefixFilterException":
    case "com.amazonaws.codedeploy#InvalidKeyPrefixFilterException":
      response = await deserializeAws_json1_1InvalidKeyPrefixFilterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidSortByException":
    case "com.amazonaws.codedeploy#InvalidSortByException":
      response = await deserializeAws_json1_1InvalidSortByExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidSortOrderException":
    case "com.amazonaws.codedeploy#InvalidSortOrderException":
      response = await deserializeAws_json1_1InvalidSortOrderExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidComputePlatformException":
    case "com.amazonaws.codedeploy#InvalidComputePlatformException":
      response = await deserializeAws_json1_1InvalidComputePlatformExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException":
      response = await deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceStatusException":
    case "com.amazonaws.codedeploy#InvalidInstanceStatusException":
      response = await deserializeAws_json1_1InvalidInstanceStatusExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidInstanceTypeException":
      response = await deserializeAws_json1_1InvalidInstanceTypeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTargetFilterNameException":
    case "com.amazonaws.codedeploy#InvalidTargetFilterNameException":
      response = await deserializeAws_json1_1InvalidTargetFilterNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidDeploymentInstanceTypeException":
      response = await deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceStatusException":
    case "com.amazonaws.codedeploy#InvalidInstanceStatusException":
      response = await deserializeAws_json1_1InvalidInstanceStatusExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceTypeException":
    case "com.amazonaws.codedeploy#InvalidInstanceTypeException":
      response = await deserializeAws_json1_1InvalidInstanceTypeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentStatusException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStatusException":
      response = await deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTimeRangeException":
    case "com.amazonaws.codedeploy#InvalidTimeRangeException":
      response = await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotSupportedException":
    case "com.amazonaws.codedeploy#OperationNotSupportedException":
      response = await deserializeAws_json1_1OperationNotSupportedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceValidationException":
    case "com.amazonaws.codedeploy#ResourceValidationException":
      response = await deserializeAws_json1_1ResourceValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codedeploy#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRegistrationStatusException":
    case "com.amazonaws.codedeploy#InvalidRegistrationStatusException":
      response = await deserializeAws_json1_1InvalidRegistrationStatusExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagFilterException":
    case "com.amazonaws.codedeploy#InvalidTagFilterException":
      response = await deserializeAws_json1_1InvalidTagFilterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArnNotSupportedException":
    case "com.amazonaws.codedeploy#ArnNotSupportedException":
      response = await deserializeAws_json1_1ArnNotSupportedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.codedeploy#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceArnRequiredException":
    case "com.amazonaws.codedeploy#ResourceArnRequiredException":
      response = await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidLifecycleEventHookExecutionIdException":
    case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionIdException":
      response = await deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidLifecycleEventHookExecutionStatusException":
    case "com.amazonaws.codedeploy#InvalidLifecycleEventHookExecutionStatusException":
      response = await deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LifecycleEventAlreadyCompletedException":
    case "com.amazonaws.codedeploy#LifecycleEventAlreadyCompletedException":
      response = await deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      response = await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const response: RegisterApplicationRevisionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterApplicationRevisionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterApplicationRevisionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DescriptionTooLongException":
    case "com.amazonaws.codedeploy#DescriptionTooLongException":
      response = await deserializeAws_json1_1DescriptionTooLongExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRevisionException":
    case "com.amazonaws.codedeploy#InvalidRevisionException":
      response = await deserializeAws_json1_1InvalidRevisionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RevisionRequiredException":
    case "com.amazonaws.codedeploy#RevisionRequiredException":
      response = await deserializeAws_json1_1RevisionRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const response: RegisterOnPremisesInstanceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterOnPremisesInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOnPremisesInstanceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IamArnRequiredException":
    case "com.amazonaws.codedeploy#IamArnRequiredException":
      response = await deserializeAws_json1_1IamArnRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IamSessionArnAlreadyRegisteredException":
    case "com.amazonaws.codedeploy#IamSessionArnAlreadyRegisteredException":
      response = await deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IamUserArnAlreadyRegisteredException":
    case "com.amazonaws.codedeploy#IamUserArnAlreadyRegisteredException":
      response = await deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IamUserArnRequiredException":
    case "com.amazonaws.codedeploy#IamUserArnRequiredException":
      response = await deserializeAws_json1_1IamUserArnRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InstanceNameAlreadyRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNameAlreadyRegisteredException":
      response = await deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidIamSessionArnException":
    case "com.amazonaws.codedeploy#InvalidIamSessionArnException":
      response = await deserializeAws_json1_1InvalidIamSessionArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidIamUserArnException":
    case "com.amazonaws.codedeploy#InvalidIamUserArnException":
      response = await deserializeAws_json1_1InvalidIamUserArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MultipleIamArnsProvidedException":
    case "com.amazonaws.codedeploy#MultipleIamArnsProvidedException":
      response = await deserializeAws_json1_1MultipleIamArnsProvidedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const response: RemoveTagsFromOnPremisesInstancesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromOnPremisesInstancesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InstanceLimitExceededException":
    case "com.amazonaws.codedeploy#InstanceLimitExceededException":
      response = await deserializeAws_json1_1InstanceLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InstanceNameRequiredException":
    case "com.amazonaws.codedeploy#InstanceNameRequiredException":
      response = await deserializeAws_json1_1InstanceNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InstanceNotRegisteredException":
    case "com.amazonaws.codedeploy#InstanceNotRegisteredException":
      response = await deserializeAws_json1_1InstanceNotRegisteredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInstanceNameException":
    case "com.amazonaws.codedeploy#InvalidInstanceNameException":
      response = await deserializeAws_json1_1InvalidInstanceNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.codedeploy#TagLimitExceededException":
      response = await deserializeAws_json1_1TagLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      response = await deserializeAws_json1_1TagRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const response: SkipWaitTimeForInstanceTerminationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SkipWaitTimeForInstanceTerminationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentAlreadyCompletedException":
    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
      response = await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentNotStartedException":
    case "com.amazonaws.codedeploy#DeploymentNotStartedException":
      response = await deserializeAws_json1_1DeploymentNotStartedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedActionForDeploymentTypeException":
    case "com.amazonaws.codedeploy#UnsupportedActionForDeploymentTypeException":
      response = await deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeploymentAlreadyCompletedException":
    case "com.amazonaws.codedeploy#DeploymentAlreadyCompletedException":
      response = await deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentIdRequiredException":
    case "com.amazonaws.codedeploy#DeploymentIdRequiredException":
      response = await deserializeAws_json1_1DeploymentIdRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentIdException":
    case "com.amazonaws.codedeploy#InvalidDeploymentIdException":
      response = await deserializeAws_json1_1InvalidDeploymentIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ArnNotSupportedException":
    case "com.amazonaws.codedeploy#ArnNotSupportedException":
      response = await deserializeAws_json1_1ArnNotSupportedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.codedeploy#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      response = await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceArnRequiredException":
    case "com.amazonaws.codedeploy#ResourceArnRequiredException":
      response = await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      response = await deserializeAws_json1_1TagRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ArnNotSupportedException":
    case "com.amazonaws.codedeploy#ArnNotSupportedException":
      response = await deserializeAws_json1_1ArnNotSupportedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidArnException":
    case "com.amazonaws.codedeploy#InvalidArnException":
      response = await deserializeAws_json1_1InvalidArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagsToAddException":
    case "com.amazonaws.codedeploy#InvalidTagsToAddException":
      response = await deserializeAws_json1_1InvalidTagsToAddExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceArnRequiredException":
    case "com.amazonaws.codedeploy#ResourceArnRequiredException":
      response = await deserializeAws_json1_1ResourceArnRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagRequiredException":
    case "com.amazonaws.codedeploy#TagRequiredException":
      response = await deserializeAws_json1_1TagRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
  }
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ApplicationAlreadyExistsException":
    case "com.amazonaws.codedeploy#ApplicationAlreadyExistsException":
      response = await deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AlarmsLimitExceededException":
    case "com.amazonaws.codedeploy#AlarmsLimitExceededException":
      response = await deserializeAws_json1_1AlarmsLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationDoesNotExistException":
    case "com.amazonaws.codedeploy#ApplicationDoesNotExistException":
      response = await deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ApplicationNameRequiredException":
    case "com.amazonaws.codedeploy#ApplicationNameRequiredException":
      response = await deserializeAws_json1_1ApplicationNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentConfigDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentConfigDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupAlreadyExistsException":
    case "com.amazonaws.codedeploy#DeploymentGroupAlreadyExistsException":
      response = await deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupDoesNotExistException":
    case "com.amazonaws.codedeploy#DeploymentGroupDoesNotExistException":
      response = await deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DeploymentGroupNameRequiredException":
    case "com.amazonaws.codedeploy#DeploymentGroupNameRequiredException":
      response = await deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ECSServiceMappingLimitExceededException":
    case "com.amazonaws.codedeploy#ECSServiceMappingLimitExceededException":
      response = await deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAlarmConfigException":
    case "com.amazonaws.codedeploy#InvalidAlarmConfigException":
      response = await deserializeAws_json1_1InvalidAlarmConfigExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidApplicationNameException":
    case "com.amazonaws.codedeploy#InvalidApplicationNameException":
      response = await deserializeAws_json1_1InvalidApplicationNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAutoRollbackConfigException":
    case "com.amazonaws.codedeploy#InvalidAutoRollbackConfigException":
      response = await deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidAutoScalingGroupException":
    case "com.amazonaws.codedeploy#InvalidAutoScalingGroupException":
      response = await deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidBlueGreenDeploymentConfigurationException":
    case "com.amazonaws.codedeploy#InvalidBlueGreenDeploymentConfigurationException":
      response = await deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentConfigNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentConfigNameException":
      response = await deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentGroupNameException":
    case "com.amazonaws.codedeploy#InvalidDeploymentGroupNameException":
      response = await deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidDeploymentStyleException":
    case "com.amazonaws.codedeploy#InvalidDeploymentStyleException":
      response = await deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidEC2TagCombinationException":
    case "com.amazonaws.codedeploy#InvalidEC2TagCombinationException":
      response = await deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidEC2TagException":
    case "com.amazonaws.codedeploy#InvalidEC2TagException":
      response = await deserializeAws_json1_1InvalidEC2TagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidECSServiceException":
    case "com.amazonaws.codedeploy#InvalidECSServiceException":
      response = await deserializeAws_json1_1InvalidECSServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazonaws.codedeploy#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidLoadBalancerInfoException":
    case "com.amazonaws.codedeploy#InvalidLoadBalancerInfoException":
      response = await deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidOnPremisesTagCombinationException":
    case "com.amazonaws.codedeploy#InvalidOnPremisesTagCombinationException":
      response = await deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRoleException":
    case "com.amazonaws.codedeploy#InvalidRoleException":
      response = await deserializeAws_json1_1InvalidRoleExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagException":
    case "com.amazonaws.codedeploy#InvalidTagException":
      response = await deserializeAws_json1_1InvalidTagExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTargetGroupPairException":
    case "com.amazonaws.codedeploy#InvalidTargetGroupPairException":
      response = await deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTriggerConfigException":
    case "com.amazonaws.codedeploy#InvalidTriggerConfigException":
      response = await deserializeAws_json1_1InvalidTriggerConfigExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LifecycleHookLimitExceededException":
    case "com.amazonaws.codedeploy#LifecycleHookLimitExceededException":
      response = await deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagSetListLimitExceededException":
    case "com.amazonaws.codedeploy#TagSetListLimitExceededException":
      response = await deserializeAws_json1_1TagSetListLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.codedeploy#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TriggerTargetsLimitExceededException":
    case "com.amazonaws.codedeploy#TriggerTargetsLimitExceededException":
      response = await deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.codedeploy#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1AlarmsLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AlarmsLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1AlarmsLimitExceededException(
    output.body,
    context
  );
  const contents: AlarmsLimitExceededException = {
    __type: "AlarmsLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ApplicationAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ApplicationAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1ApplicationAlreadyExistsException(
    output.body,
    context
  );
  const contents: ApplicationAlreadyExistsException = {
    __type: "ApplicationAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ApplicationDoesNotExistExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ApplicationDoesNotExistException> => {
  const deserialized: any = deserializeAws_json1_1ApplicationDoesNotExistException(
    output.body,
    context
  );
  const contents: ApplicationDoesNotExistException = {
    __type: "ApplicationDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ApplicationLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ApplicationLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1ApplicationLimitExceededException(
    output.body,
    context
  );
  const contents: ApplicationLimitExceededException = {
    __type: "ApplicationLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ApplicationNameRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ApplicationNameRequiredException> => {
  const deserialized: any = deserializeAws_json1_1ApplicationNameRequiredException(
    output.body,
    context
  );
  const contents: ApplicationNameRequiredException = {
    __type: "ApplicationNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ArnNotSupportedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ArnNotSupportedException> => {
  const deserialized: any = deserializeAws_json1_1ArnNotSupportedException(
    output.body,
    context
  );
  const contents: ArnNotSupportedException = {
    __type: "ArnNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1BatchLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BatchLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1BatchLimitExceededException(
    output.body,
    context
  );
  const contents: BatchLimitExceededException = {
    __type: "BatchLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1BucketNameFilterRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BucketNameFilterRequiredException> => {
  const deserialized: any = deserializeAws_json1_1BucketNameFilterRequiredException(
    output.body,
    context
  );
  const contents: BucketNameFilterRequiredException = {
    __type: "BucketNameFilterRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentAlreadyCompletedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentAlreadyCompletedException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentAlreadyCompletedException(
    output.body,
    context
  );
  const contents: DeploymentAlreadyCompletedException = {
    __type: "DeploymentAlreadyCompletedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentConfigAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentConfigAlreadyExistsException(
    output.body,
    context
  );
  const contents: DeploymentConfigAlreadyExistsException = {
    __type: "DeploymentConfigAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigDoesNotExistExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentConfigDoesNotExistException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentConfigDoesNotExistException(
    output.body,
    context
  );
  const contents: DeploymentConfigDoesNotExistException = {
    __type: "DeploymentConfigDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentConfigInUseException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentConfigInUseException(
    output.body,
    context
  );
  const contents: DeploymentConfigInUseException = {
    __type: "DeploymentConfigInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentConfigLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentConfigLimitExceededException(
    output.body,
    context
  );
  const contents: DeploymentConfigLimitExceededException = {
    __type: "DeploymentConfigLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentConfigNameRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentConfigNameRequiredException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentConfigNameRequiredException(
    output.body,
    context
  );
  const contents: DeploymentConfigNameRequiredException = {
    __type: "DeploymentConfigNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentDoesNotExistExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentDoesNotExistException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentDoesNotExistException(
    output.body,
    context
  );
  const contents: DeploymentDoesNotExistException = {
    __type: "DeploymentDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentGroupAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentGroupAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentGroupAlreadyExistsException(
    output.body,
    context
  );
  const contents: DeploymentGroupAlreadyExistsException = {
    __type: "DeploymentGroupAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentGroupDoesNotExistExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentGroupDoesNotExistException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentGroupDoesNotExistException(
    output.body,
    context
  );
  const contents: DeploymentGroupDoesNotExistException = {
    __type: "DeploymentGroupDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentGroupLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentGroupLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentGroupLimitExceededException(
    output.body,
    context
  );
  const contents: DeploymentGroupLimitExceededException = {
    __type: "DeploymentGroupLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentGroupNameRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentGroupNameRequiredException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentGroupNameRequiredException(
    output.body,
    context
  );
  const contents: DeploymentGroupNameRequiredException = {
    __type: "DeploymentGroupNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentIdRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentIdRequiredException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentIdRequiredException(
    output.body,
    context
  );
  const contents: DeploymentIdRequiredException = {
    __type: "DeploymentIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentIsNotInReadyStateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentIsNotInReadyStateException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentIsNotInReadyStateException(
    output.body,
    context
  );
  const contents: DeploymentIsNotInReadyStateException = {
    __type: "DeploymentIsNotInReadyStateException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentLimitExceededException(
    output.body,
    context
  );
  const contents: DeploymentLimitExceededException = {
    __type: "DeploymentLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentNotStartedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentNotStartedException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentNotStartedException(
    output.body,
    context
  );
  const contents: DeploymentNotStartedException = {
    __type: "DeploymentNotStartedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentTargetDoesNotExistExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentTargetDoesNotExistException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentTargetDoesNotExistException(
    output.body,
    context
  );
  const contents: DeploymentTargetDoesNotExistException = {
    __type: "DeploymentTargetDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentTargetIdRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentTargetIdRequiredException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentTargetIdRequiredException(
    output.body,
    context
  );
  const contents: DeploymentTargetIdRequiredException = {
    __type: "DeploymentTargetIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeploymentTargetListSizeExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeploymentTargetListSizeExceededException> => {
  const deserialized: any = deserializeAws_json1_1DeploymentTargetListSizeExceededException(
    output.body,
    context
  );
  const contents: DeploymentTargetListSizeExceededException = {
    __type: "DeploymentTargetListSizeExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DescriptionTooLongExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DescriptionTooLongException> => {
  const deserialized: any = deserializeAws_json1_1DescriptionTooLongException(
    output.body,
    context
  );
  const contents: DescriptionTooLongException = {
    __type: "DescriptionTooLongException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ECSServiceMappingLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ECSServiceMappingLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1ECSServiceMappingLimitExceededException(
    output.body,
    context
  );
  const contents: ECSServiceMappingLimitExceededException = {
    __type: "ECSServiceMappingLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1GitHubAccountTokenDoesNotExistExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<GitHubAccountTokenDoesNotExistException> => {
  const deserialized: any = deserializeAws_json1_1GitHubAccountTokenDoesNotExistException(
    output.body,
    context
  );
  const contents: GitHubAccountTokenDoesNotExistException = {
    __type: "GitHubAccountTokenDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1GitHubAccountTokenNameRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<GitHubAccountTokenNameRequiredException> => {
  const deserialized: any = deserializeAws_json1_1GitHubAccountTokenNameRequiredException(
    output.body,
    context
  );
  const contents: GitHubAccountTokenNameRequiredException = {
    __type: "GitHubAccountTokenNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IamArnRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IamArnRequiredException> => {
  const deserialized: any = deserializeAws_json1_1IamArnRequiredException(
    output.body,
    context
  );
  const contents: IamArnRequiredException = {
    __type: "IamArnRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IamSessionArnAlreadyRegisteredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IamSessionArnAlreadyRegisteredException> => {
  const deserialized: any = deserializeAws_json1_1IamSessionArnAlreadyRegisteredException(
    output.body,
    context
  );
  const contents: IamSessionArnAlreadyRegisteredException = {
    __type: "IamSessionArnAlreadyRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IamUserArnAlreadyRegisteredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IamUserArnAlreadyRegisteredException> => {
  const deserialized: any = deserializeAws_json1_1IamUserArnAlreadyRegisteredException(
    output.body,
    context
  );
  const contents: IamUserArnAlreadyRegisteredException = {
    __type: "IamUserArnAlreadyRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IamUserArnRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IamUserArnRequiredException> => {
  const deserialized: any = deserializeAws_json1_1IamUserArnRequiredException(
    output.body,
    context
  );
  const contents: IamUserArnRequiredException = {
    __type: "IamUserArnRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceDoesNotExistExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InstanceDoesNotExistException> => {
  const deserialized: any = deserializeAws_json1_1InstanceDoesNotExistException(
    output.body,
    context
  );
  const contents: InstanceDoesNotExistException = {
    __type: "InstanceDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceIdRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InstanceIdRequiredException> => {
  const deserialized: any = deserializeAws_json1_1InstanceIdRequiredException(
    output.body,
    context
  );
  const contents: InstanceIdRequiredException = {
    __type: "InstanceIdRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InstanceLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1InstanceLimitExceededException(
    output.body,
    context
  );
  const contents: InstanceLimitExceededException = {
    __type: "InstanceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceNameAlreadyRegisteredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InstanceNameAlreadyRegisteredException> => {
  const deserialized: any = deserializeAws_json1_1InstanceNameAlreadyRegisteredException(
    output.body,
    context
  );
  const contents: InstanceNameAlreadyRegisteredException = {
    __type: "InstanceNameAlreadyRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceNameRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InstanceNameRequiredException> => {
  const deserialized: any = deserializeAws_json1_1InstanceNameRequiredException(
    output.body,
    context
  );
  const contents: InstanceNameRequiredException = {
    __type: "InstanceNameRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InstanceNotRegisteredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InstanceNotRegisteredException> => {
  const deserialized: any = deserializeAws_json1_1InstanceNotRegisteredException(
    output.body,
    context
  );
  const contents: InstanceNotRegisteredException = {
    __type: "InstanceNotRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidAlarmConfigExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidAlarmConfigException> => {
  const deserialized: any = deserializeAws_json1_1InvalidAlarmConfigException(
    output.body,
    context
  );
  const contents: InvalidAlarmConfigException = {
    __type: "InvalidAlarmConfigException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidApplicationNameExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidApplicationNameException> => {
  const deserialized: any = deserializeAws_json1_1InvalidApplicationNameException(
    output.body,
    context
  );
  const contents: InvalidApplicationNameException = {
    __type: "InvalidApplicationNameException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const deserialized: any = deserializeAws_json1_1InvalidArnException(
    output.body,
    context
  );
  const contents: InvalidArnException = {
    __type: "InvalidArnException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidAutoRollbackConfigExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidAutoRollbackConfigException> => {
  const deserialized: any = deserializeAws_json1_1InvalidAutoRollbackConfigException(
    output.body,
    context
  );
  const contents: InvalidAutoRollbackConfigException = {
    __type: "InvalidAutoRollbackConfigException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidAutoScalingGroupExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidAutoScalingGroupException> => {
  const deserialized: any = deserializeAws_json1_1InvalidAutoScalingGroupException(
    output.body,
    context
  );
  const contents: InvalidAutoScalingGroupException = {
    __type: "InvalidAutoScalingGroupException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidBlueGreenDeploymentConfigurationException> => {
  const deserialized: any = deserializeAws_json1_1InvalidBlueGreenDeploymentConfigurationException(
    output.body,
    context
  );
  const contents: InvalidBlueGreenDeploymentConfigurationException = {
    __type: "InvalidBlueGreenDeploymentConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidBucketNameFilterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidBucketNameFilterException> => {
  const deserialized: any = deserializeAws_json1_1InvalidBucketNameFilterException(
    output.body,
    context
  );
  const contents: InvalidBucketNameFilterException = {
    __type: "InvalidBucketNameFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidComputePlatformExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidComputePlatformException> => {
  const deserialized: any = deserializeAws_json1_1InvalidComputePlatformException(
    output.body,
    context
  );
  const contents: InvalidComputePlatformException = {
    __type: "InvalidComputePlatformException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeployedStateFilterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidDeployedStateFilterException> => {
  const deserialized: any = deserializeAws_json1_1InvalidDeployedStateFilterException(
    output.body,
    context
  );
  const contents: InvalidDeployedStateFilterException = {
    __type: "InvalidDeployedStateFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentConfigNameExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidDeploymentConfigNameException> => {
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentConfigNameException(
    output.body,
    context
  );
  const contents: InvalidDeploymentConfigNameException = {
    __type: "InvalidDeploymentConfigNameException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentGroupNameExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidDeploymentGroupNameException> => {
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentGroupNameException(
    output.body,
    context
  );
  const contents: InvalidDeploymentGroupNameException = {
    __type: "InvalidDeploymentGroupNameException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentIdExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidDeploymentIdException> => {
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentIdException(
    output.body,
    context
  );
  const contents: InvalidDeploymentIdException = {
    __type: "InvalidDeploymentIdException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentInstanceTypeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidDeploymentInstanceTypeException> => {
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentInstanceTypeException(
    output.body,
    context
  );
  const contents: InvalidDeploymentInstanceTypeException = {
    __type: "InvalidDeploymentInstanceTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentStatusExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidDeploymentStatusException> => {
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentStatusException(
    output.body,
    context
  );
  const contents: InvalidDeploymentStatusException = {
    __type: "InvalidDeploymentStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentStyleExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidDeploymentStyleException> => {
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentStyleException(
    output.body,
    context
  );
  const contents: InvalidDeploymentStyleException = {
    __type: "InvalidDeploymentStyleException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentTargetIdExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidDeploymentTargetIdException> => {
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentTargetIdException(
    output.body,
    context
  );
  const contents: InvalidDeploymentTargetIdException = {
    __type: "InvalidDeploymentTargetIdException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidDeploymentWaitTypeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidDeploymentWaitTypeException> => {
  const deserialized: any = deserializeAws_json1_1InvalidDeploymentWaitTypeException(
    output.body,
    context
  );
  const contents: InvalidDeploymentWaitTypeException = {
    __type: "InvalidDeploymentWaitTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEC2TagCombinationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidEC2TagCombinationException> => {
  const deserialized: any = deserializeAws_json1_1InvalidEC2TagCombinationException(
    output.body,
    context
  );
  const contents: InvalidEC2TagCombinationException = {
    __type: "InvalidEC2TagCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEC2TagExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidEC2TagException> => {
  const deserialized: any = deserializeAws_json1_1InvalidEC2TagException(
    output.body,
    context
  );
  const contents: InvalidEC2TagException = {
    __type: "InvalidEC2TagException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidECSServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidECSServiceException> => {
  const deserialized: any = deserializeAws_json1_1InvalidECSServiceException(
    output.body,
    context
  );
  const contents: InvalidECSServiceException = {
    __type: "InvalidECSServiceException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidFileExistsBehaviorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidFileExistsBehaviorException> => {
  const deserialized: any = deserializeAws_json1_1InvalidFileExistsBehaviorException(
    output.body,
    context
  );
  const contents: InvalidFileExistsBehaviorException = {
    __type: "InvalidFileExistsBehaviorException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidGitHubAccountTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidGitHubAccountTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidGitHubAccountTokenException(
    output.body,
    context
  );
  const contents: InvalidGitHubAccountTokenException = {
    __type: "InvalidGitHubAccountTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidGitHubAccountTokenNameExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidGitHubAccountTokenNameException> => {
  const deserialized: any = deserializeAws_json1_1InvalidGitHubAccountTokenNameException(
    output.body,
    context
  );
  const contents: InvalidGitHubAccountTokenNameException = {
    __type: "InvalidGitHubAccountTokenNameException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidIamSessionArnExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidIamSessionArnException> => {
  const deserialized: any = deserializeAws_json1_1InvalidIamSessionArnException(
    output.body,
    context
  );
  const contents: InvalidIamSessionArnException = {
    __type: "InvalidIamSessionArnException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidIamUserArnExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidIamUserArnException> => {
  const deserialized: any = deserializeAws_json1_1InvalidIamUserArnException(
    output.body,
    context
  );
  const contents: InvalidIamUserArnException = {
    __type: "InvalidIamUserArnException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidIgnoreApplicationStopFailuresValueException> => {
  const deserialized: any = deserializeAws_json1_1InvalidIgnoreApplicationStopFailuresValueException(
    output.body,
    context
  );
  const contents: InvalidIgnoreApplicationStopFailuresValueException = {
    __type: "InvalidIgnoreApplicationStopFailuresValueException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    output.body,
    context
  );
  const contents: InvalidInputException = {
    __type: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInstanceNameExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInstanceNameException> => {
  const deserialized: any = deserializeAws_json1_1InvalidInstanceNameException(
    output.body,
    context
  );
  const contents: InvalidInstanceNameException = {
    __type: "InvalidInstanceNameException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInstanceStatusExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInstanceStatusException> => {
  const deserialized: any = deserializeAws_json1_1InvalidInstanceStatusException(
    output.body,
    context
  );
  const contents: InvalidInstanceStatusException = {
    __type: "InvalidInstanceStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInstanceTypeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInstanceTypeException> => {
  const deserialized: any = deserializeAws_json1_1InvalidInstanceTypeException(
    output.body,
    context
  );
  const contents: InvalidInstanceTypeException = {
    __type: "InvalidInstanceTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidKeyPrefixFilterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidKeyPrefixFilterException> => {
  const deserialized: any = deserializeAws_json1_1InvalidKeyPrefixFilterException(
    output.body,
    context
  );
  const contents: InvalidKeyPrefixFilterException = {
    __type: "InvalidKeyPrefixFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidLifecycleEventHookExecutionIdException> => {
  const deserialized: any = deserializeAws_json1_1InvalidLifecycleEventHookExecutionIdException(
    output.body,
    context
  );
  const contents: InvalidLifecycleEventHookExecutionIdException = {
    __type: "InvalidLifecycleEventHookExecutionIdException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidLifecycleEventHookExecutionStatusException> => {
  const deserialized: any = deserializeAws_json1_1InvalidLifecycleEventHookExecutionStatusException(
    output.body,
    context
  );
  const contents: InvalidLifecycleEventHookExecutionStatusException = {
    __type: "InvalidLifecycleEventHookExecutionStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidLoadBalancerInfoExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidLoadBalancerInfoException> => {
  const deserialized: any = deserializeAws_json1_1InvalidLoadBalancerInfoException(
    output.body,
    context
  );
  const contents: InvalidLoadBalancerInfoException = {
    __type: "InvalidLoadBalancerInfoException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidMinimumHealthyHostValueExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidMinimumHealthyHostValueException> => {
  const deserialized: any = deserializeAws_json1_1InvalidMinimumHealthyHostValueException(
    output.body,
    context
  );
  const contents: InvalidMinimumHealthyHostValueException = {
    __type: "InvalidMinimumHealthyHostValueException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    output.body,
    context
  );
  const contents: InvalidNextTokenException = {
    __type: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidOnPremisesTagCombinationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidOnPremisesTagCombinationException> => {
  const deserialized: any = deserializeAws_json1_1InvalidOnPremisesTagCombinationException(
    output.body,
    context
  );
  const contents: InvalidOnPremisesTagCombinationException = {
    __type: "InvalidOnPremisesTagCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidOperationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const deserialized: any = deserializeAws_json1_1InvalidOperationException(
    output.body,
    context
  );
  const contents: InvalidOperationException = {
    __type: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRegistrationStatusExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRegistrationStatusException> => {
  const deserialized: any = deserializeAws_json1_1InvalidRegistrationStatusException(
    output.body,
    context
  );
  const contents: InvalidRegistrationStatusException = {
    __type: "InvalidRegistrationStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRevisionExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRevisionException> => {
  const deserialized: any = deserializeAws_json1_1InvalidRevisionException(
    output.body,
    context
  );
  const contents: InvalidRevisionException = {
    __type: "InvalidRevisionException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRoleExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRoleException> => {
  const deserialized: any = deserializeAws_json1_1InvalidRoleException(
    output.body,
    context
  );
  const contents: InvalidRoleException = {
    __type: "InvalidRoleException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidSortByExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidSortByException> => {
  const deserialized: any = deserializeAws_json1_1InvalidSortByException(
    output.body,
    context
  );
  const contents: InvalidSortByException = {
    __type: "InvalidSortByException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidSortOrderExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidSortOrderException> => {
  const deserialized: any = deserializeAws_json1_1InvalidSortOrderException(
    output.body,
    context
  );
  const contents: InvalidSortOrderException = {
    __type: "InvalidSortOrderException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTagException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTagException(
    output.body,
    context
  );
  const contents: InvalidTagException = {
    __type: "InvalidTagException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagFilterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTagFilterException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTagFilterException(
    output.body,
    context
  );
  const contents: InvalidTagFilterException = {
    __type: "InvalidTagFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagsToAddExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTagsToAddException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTagsToAddException(
    output.body,
    context
  );
  const contents: InvalidTagsToAddException = {
    __type: "InvalidTagsToAddException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetFilterNameExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTargetFilterNameException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTargetFilterNameException(
    output.body,
    context
  );
  const contents: InvalidTargetFilterNameException = {
    __type: "InvalidTargetFilterNameException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetGroupPairExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTargetGroupPairException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTargetGroupPairException(
    output.body,
    context
  );
  const contents: InvalidTargetGroupPairException = {
    __type: "InvalidTargetGroupPairException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetInstancesExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTargetInstancesException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTargetInstancesException(
    output.body,
    context
  );
  const contents: InvalidTargetInstancesException = {
    __type: "InvalidTargetInstancesException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTimeRangeException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTimeRangeException(
    output.body,
    context
  );
  const contents: InvalidTimeRangeException = {
    __type: "InvalidTimeRangeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTrafficRoutingConfigurationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTrafficRoutingConfigurationException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTrafficRoutingConfigurationException(
    output.body,
    context
  );
  const contents: InvalidTrafficRoutingConfigurationException = {
    __type: "InvalidTrafficRoutingConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTriggerConfigExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTriggerConfigException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTriggerConfigException(
    output.body,
    context
  );
  const contents: InvalidTriggerConfigException = {
    __type: "InvalidTriggerConfigException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidUpdateOutdatedInstancesOnlyValueException> => {
  const deserialized: any = deserializeAws_json1_1InvalidUpdateOutdatedInstancesOnlyValueException(
    output.body,
    context
  );
  const contents: InvalidUpdateOutdatedInstancesOnlyValueException = {
    __type: "InvalidUpdateOutdatedInstancesOnlyValueException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LifecycleEventAlreadyCompletedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LifecycleEventAlreadyCompletedException> => {
  const deserialized: any = deserializeAws_json1_1LifecycleEventAlreadyCompletedException(
    output.body,
    context
  );
  const contents: LifecycleEventAlreadyCompletedException = {
    __type: "LifecycleEventAlreadyCompletedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LifecycleHookLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LifecycleHookLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LifecycleHookLimitExceededException(
    output.body,
    context
  );
  const contents: LifecycleHookLimitExceededException = {
    __type: "LifecycleHookLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MultipleIamArnsProvidedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MultipleIamArnsProvidedException> => {
  const deserialized: any = deserializeAws_json1_1MultipleIamArnsProvidedException(
    output.body,
    context
  );
  const contents: MultipleIamArnsProvidedException = {
    __type: "MultipleIamArnsProvidedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<OperationNotSupportedException> => {
  const deserialized: any = deserializeAws_json1_1OperationNotSupportedException(
    output.body,
    context
  );
  const contents: OperationNotSupportedException = {
    __type: "OperationNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceArnRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceArnRequiredException> => {
  const deserialized: any = deserializeAws_json1_1ResourceArnRequiredException(
    output.body,
    context
  );
  const contents: ResourceArnRequiredException = {
    __type: "ResourceArnRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceValidationException> => {
  const deserialized: any = deserializeAws_json1_1ResourceValidationException(
    output.body,
    context
  );
  const contents: ResourceValidationException = {
    __type: "ResourceValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RevisionDoesNotExistExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RevisionDoesNotExistException> => {
  const deserialized: any = deserializeAws_json1_1RevisionDoesNotExistException(
    output.body,
    context
  );
  const contents: RevisionDoesNotExistException = {
    __type: "RevisionDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RevisionRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RevisionRequiredException> => {
  const deserialized: any = deserializeAws_json1_1RevisionRequiredException(
    output.body,
    context
  );
  const contents: RevisionRequiredException = {
    __type: "RevisionRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RoleRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RoleRequiredException> => {
  const deserialized: any = deserializeAws_json1_1RoleRequiredException(
    output.body,
    context
  );
  const contents: RoleRequiredException = {
    __type: "RoleRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1TagLimitExceededException(
    output.body,
    context
  );
  const contents: TagLimitExceededException = {
    __type: "TagLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TagRequiredException> => {
  const deserialized: any = deserializeAws_json1_1TagRequiredException(
    output.body,
    context
  );
  const contents: TagRequiredException = {
    __type: "TagRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagSetListLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TagSetListLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1TagSetListLimitExceededException(
    output.body,
    context
  );
  const contents: TagSetListLimitExceededException = {
    __type: "TagSetListLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    output.body,
    context
  );
  const contents: ThrottlingException = {
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TriggerTargetsLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TriggerTargetsLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1TriggerTargetsLimitExceededException(
    output.body,
    context
  );
  const contents: TriggerTargetsLimitExceededException = {
    __type: "TriggerTargetsLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedActionForDeploymentTypeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedActionForDeploymentTypeException> => {
  const deserialized: any = deserializeAws_json1_1UnsupportedActionForDeploymentTypeException(
    output.body,
    context
  );
  const contents: UnsupportedActionForDeploymentTypeException = {
    __type: "UnsupportedActionForDeploymentTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AddTagsToOnPremisesInstancesInput = (
  input: AddTagsToOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1AlarmConfiguration = (
  input: AlarmConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry => serializeAws_json1_1Alarm(entry, context));
};

const serializeAws_json1_1AppSpecContent = (
  input: AppSpecContent,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1AutoRollbackConfiguration = (
  input: AutoRollbackConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1AutoScalingGroupNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1BatchGetApplicationRevisionsInput = (
  input: BatchGetApplicationRevisionsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDeploymentConfigInput = (
  input: DeleteDeploymentConfigInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.deploymentConfigName !== undefined) {
    bodyParams["deploymentConfigName"] = input.deploymentConfigName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDeploymentGroupInput = (
  input: DeleteDeploymentGroupInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.tokenName !== undefined) {
    bodyParams["tokenName"] = input.tokenName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeploymentGroupsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1DeploymentReadyOption = (
  input: DeploymentReadyOption,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1DeploymentStyle = (
  input: DeploymentStyle,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1DeregisterOnPremisesInstanceInput = (
  input: DeregisterOnPremisesInstanceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1EC2TagFilter = (
  input: EC2TagFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_json1_1EC2TagFilter(entry, context)
  );
};

const serializeAws_json1_1EC2TagSet = (
  input: EC2TagSet,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_json1_1EC2TagFilterList(entry, context)
  );
};

const serializeAws_json1_1ECSService = (
  input: ECSService,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_json1_1ECSService(entry, context)
  );
};

const serializeAws_json1_1ELBInfo = (
  input: ELBInfo,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1ELBInfoList = (
  input: Array<ELBInfo>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ELBInfo(entry, context)
  );
};

const serializeAws_json1_1FilterValueList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1GetApplicationInput = (
  input: GetApplicationInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.applicationName !== undefined) {
    bodyParams["applicationName"] = input.applicationName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetApplicationRevisionInput = (
  input: GetApplicationRevisionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.deploymentConfigName !== undefined) {
    bodyParams["deploymentConfigName"] = input.deploymentConfigName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDeploymentGroupInput = (
  input: GetDeploymentGroupInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDeploymentInstanceInput = (
  input: GetDeploymentInstanceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.instanceName !== undefined) {
    bodyParams["instanceName"] = input.instanceName;
  }
  return bodyParams;
};

const serializeAws_json1_1GitHubLocation = (
  input: GitHubLocation,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.action !== undefined) {
    bodyParams["action"] = input.action;
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1InstanceStatusList = (
  input: Array<InstanceStatus | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1InstanceTypeList = (
  input: Array<_InstanceType | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1InstancesList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ListApplicationRevisionsInput = (
  input: ListApplicationRevisionsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDeploymentConfigsInput = (
  input: ListDeploymentConfigsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDeploymentGroupsInput = (
  input: ListDeploymentGroupsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListOnPremisesInstancesInput = (
  input: ListOnPremisesInstancesInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1LoadBalancerInfo = (
  input: LoadBalancerInfo,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_json1_1TagFilterList(entry, context)
  );
};

const serializeAws_json1_1PutLifecycleEventHookExecutionStatusInput = (
  input: PutLifecycleEventHookExecutionStatusInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_json1_1RevisionLocation(entry, context)
  );
};

const serializeAws_json1_1S3Location = (
  input: S3Location,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  return bodyParams;
};

const serializeAws_json1_1StopDeploymentInput = (
  input: StopDeploymentInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.autoRollbackEnabled !== undefined) {
    bodyParams["autoRollbackEnabled"] = input.autoRollbackEnabled;
  }
  if (input.deploymentId !== undefined) {
    bodyParams["deploymentId"] = input.deploymentId;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_json1_1TagFilter(entry, context)
  );
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1FilterValueList(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_1TargetGroupInfo = (
  input: TargetGroupInfo,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1TargetGroupInfoList = (
  input: Array<TargetGroupInfo>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1TargetGroupInfo(entry, context)
  );
};

const serializeAws_json1_1TargetGroupPairInfo = (
  input: TargetGroupPairInfo,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_json1_1TargetGroupPairInfo(entry, context)
  );
};

const serializeAws_json1_1TargetIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TargetInstances = (
  input: TargetInstances,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_json1_1TriggerConfig(entry, context)
  );
};

const serializeAws_json1_1TriggerEventTypeList = (
  input: Array<TriggerEventType | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  if (output.name !== undefined) {
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
  if (output.alarms !== undefined) {
    contents.alarms = deserializeAws_json1_1AlarmList(output.alarms, context);
  }
  if (output.enabled !== undefined) {
    contents.enabled = output.enabled;
  }
  if (output.ignorePollAlarmFailure !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.content !== undefined) {
    contents.content = output.content;
  }
  if (output.sha256 !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.applicationId !== undefined) {
    contents.applicationId = output.applicationId;
  }
  if (output.applicationName !== undefined) {
    contents.applicationName = output.applicationName;
  }
  if (output.computePlatform !== undefined) {
    contents.computePlatform = output.computePlatform;
  }
  if (output.createTime !== undefined) {
    contents.createTime = new Date(
      output.createTime % 1 != 0
        ? Math.round(output.createTime * 1000)
        : output.createTime
    );
  }
  if (output.gitHubAccountName !== undefined) {
    contents.gitHubAccountName = output.gitHubAccountName;
  }
  if (output.linkedToGitHub !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.enabled !== undefined) {
    contents.enabled = output.enabled;
  }
  if (output.events !== undefined) {
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
  if (output.hook !== undefined) {
    contents.hook = output.hook;
  }
  if (output.name !== undefined) {
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
  if (output.applicationName !== undefined) {
    contents.applicationName = output.applicationName;
  }
  if (output.errorMessage !== undefined) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.revisions !== undefined) {
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
  if (output.applicationsInfo !== undefined) {
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
  if (output.deploymentGroupsInfo !== undefined) {
    contents.deploymentGroupsInfo = deserializeAws_json1_1DeploymentGroupInfoList(
      output.deploymentGroupsInfo,
      context
    );
  }
  if (output.errorMessage !== undefined) {
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
  if (output.errorMessage !== undefined) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.instancesSummary !== undefined) {
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
  if (output.deploymentTargets !== undefined) {
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
  if (output.deploymentsInfo !== undefined) {
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
  if (output.instanceInfos !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.deploymentReadyOption !== undefined) {
    contents.deploymentReadyOption = deserializeAws_json1_1DeploymentReadyOption(
      output.deploymentReadyOption,
      context
    );
  }
  if (output.greenFleetProvisioningOption !== undefined) {
    contents.greenFleetProvisioningOption = deserializeAws_json1_1GreenFleetProvisioningOption(
      output.greenFleetProvisioningOption,
      context
    );
  }
  if (output.terminateBlueInstancesOnDeploymentSuccess !== undefined) {
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
  if (output.action !== undefined) {
    contents.action = output.action;
  }
  if (output.terminationWaitTimeInMinutes !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.applicationId !== undefined) {
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
  if (output.deploymentConfigId !== undefined) {
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
  if (output.deploymentGroupId !== undefined) {
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
  if (output.deploymentId !== undefined) {
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
  if (output.hooksNotCleanedUp !== undefined) {
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
  if (output.tokenName !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.computePlatform !== undefined) {
    contents.computePlatform = output.computePlatform;
  }
  if (output.createTime !== undefined) {
    contents.createTime = new Date(
      output.createTime % 1 != 0
        ? Math.round(output.createTime * 1000)
        : output.createTime
    );
  }
  if (output.deploymentConfigId !== undefined) {
    contents.deploymentConfigId = output.deploymentConfigId;
  }
  if (output.deploymentConfigName !== undefined) {
    contents.deploymentConfigName = output.deploymentConfigName;
  }
  if (output.minimumHealthyHosts !== undefined) {
    contents.minimumHealthyHosts = deserializeAws_json1_1MinimumHealthyHosts(
      output.minimumHealthyHosts,
      context
    );
  }
  if (output.trafficRoutingConfig !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.alarmConfiguration !== undefined) {
    contents.alarmConfiguration = deserializeAws_json1_1AlarmConfiguration(
      output.alarmConfiguration,
      context
    );
  }
  if (output.applicationName !== undefined) {
    contents.applicationName = output.applicationName;
  }
  if (output.autoRollbackConfiguration !== undefined) {
    contents.autoRollbackConfiguration = deserializeAws_json1_1AutoRollbackConfiguration(
      output.autoRollbackConfiguration,
      context
    );
  }
  if (output.autoScalingGroups !== undefined) {
    contents.autoScalingGroups = deserializeAws_json1_1AutoScalingGroupList(
      output.autoScalingGroups,
      context
    );
  }
  if (output.blueGreenDeploymentConfiguration !== undefined) {
    contents.blueGreenDeploymentConfiguration = deserializeAws_json1_1BlueGreenDeploymentConfiguration(
      output.blueGreenDeploymentConfiguration,
      context
    );
  }
  if (output.computePlatform !== undefined) {
    contents.computePlatform = output.computePlatform;
  }
  if (output.deploymentConfigName !== undefined) {
    contents.deploymentConfigName = output.deploymentConfigName;
  }
  if (output.deploymentGroupId !== undefined) {
    contents.deploymentGroupId = output.deploymentGroupId;
  }
  if (output.deploymentGroupName !== undefined) {
    contents.deploymentGroupName = output.deploymentGroupName;
  }
  if (output.deploymentStyle !== undefined) {
    contents.deploymentStyle = deserializeAws_json1_1DeploymentStyle(
      output.deploymentStyle,
      context
    );
  }
  if (output.ec2TagFilters !== undefined) {
    contents.ec2TagFilters = deserializeAws_json1_1EC2TagFilterList(
      output.ec2TagFilters,
      context
    );
  }
  if (output.ec2TagSet !== undefined) {
    contents.ec2TagSet = deserializeAws_json1_1EC2TagSet(
      output.ec2TagSet,
      context
    );
  }
  if (output.ecsServices !== undefined) {
    contents.ecsServices = deserializeAws_json1_1ECSServiceList(
      output.ecsServices,
      context
    );
  }
  if (output.lastAttemptedDeployment !== undefined) {
    contents.lastAttemptedDeployment = deserializeAws_json1_1LastDeploymentInfo(
      output.lastAttemptedDeployment,
      context
    );
  }
  if (output.lastSuccessfulDeployment !== undefined) {
    contents.lastSuccessfulDeployment = deserializeAws_json1_1LastDeploymentInfo(
      output.lastSuccessfulDeployment,
      context
    );
  }
  if (output.loadBalancerInfo !== undefined) {
    contents.loadBalancerInfo = deserializeAws_json1_1LoadBalancerInfo(
      output.loadBalancerInfo,
      context
    );
  }
  if (output.onPremisesInstanceTagFilters !== undefined) {
    contents.onPremisesInstanceTagFilters = deserializeAws_json1_1TagFilterList(
      output.onPremisesInstanceTagFilters,
      context
    );
  }
  if (output.onPremisesTagSet !== undefined) {
    contents.onPremisesTagSet = deserializeAws_json1_1OnPremisesTagSet(
      output.onPremisesTagSet,
      context
    );
  }
  if (output.serviceRoleArn !== undefined) {
    contents.serviceRoleArn = output.serviceRoleArn;
  }
  if (output.targetRevision !== undefined) {
    contents.targetRevision = deserializeAws_json1_1RevisionLocation(
      output.targetRevision,
      context
    );
  }
  if (output.triggerConfigurations !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.additionalDeploymentStatusInfo !== undefined) {
    contents.additionalDeploymentStatusInfo =
      output.additionalDeploymentStatusInfo;
  }
  if (output.applicationName !== undefined) {
    contents.applicationName = output.applicationName;
  }
  if (output.autoRollbackConfiguration !== undefined) {
    contents.autoRollbackConfiguration = deserializeAws_json1_1AutoRollbackConfiguration(
      output.autoRollbackConfiguration,
      context
    );
  }
  if (output.blueGreenDeploymentConfiguration !== undefined) {
    contents.blueGreenDeploymentConfiguration = deserializeAws_json1_1BlueGreenDeploymentConfiguration(
      output.blueGreenDeploymentConfiguration,
      context
    );
  }
  if (output.completeTime !== undefined) {
    contents.completeTime = new Date(
      output.completeTime % 1 != 0
        ? Math.round(output.completeTime * 1000)
        : output.completeTime
    );
  }
  if (output.computePlatform !== undefined) {
    contents.computePlatform = output.computePlatform;
  }
  if (output.createTime !== undefined) {
    contents.createTime = new Date(
      output.createTime % 1 != 0
        ? Math.round(output.createTime * 1000)
        : output.createTime
    );
  }
  if (output.creator !== undefined) {
    contents.creator = output.creator;
  }
  if (output.deploymentConfigName !== undefined) {
    contents.deploymentConfigName = output.deploymentConfigName;
  }
  if (output.deploymentGroupName !== undefined) {
    contents.deploymentGroupName = output.deploymentGroupName;
  }
  if (output.deploymentId !== undefined) {
    contents.deploymentId = output.deploymentId;
  }
  if (output.deploymentOverview !== undefined) {
    contents.deploymentOverview = deserializeAws_json1_1DeploymentOverview(
      output.deploymentOverview,
      context
    );
  }
  if (output.deploymentStatusMessages !== undefined) {
    contents.deploymentStatusMessages = deserializeAws_json1_1DeploymentStatusMessageList(
      output.deploymentStatusMessages,
      context
    );
  }
  if (output.deploymentStyle !== undefined) {
    contents.deploymentStyle = deserializeAws_json1_1DeploymentStyle(
      output.deploymentStyle,
      context
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.errorInformation !== undefined) {
    contents.errorInformation = deserializeAws_json1_1ErrorInformation(
      output.errorInformation,
      context
    );
  }
  if (output.fileExistsBehavior !== undefined) {
    contents.fileExistsBehavior = output.fileExistsBehavior;
  }
  if (output.ignoreApplicationStopFailures !== undefined) {
    contents.ignoreApplicationStopFailures =
      output.ignoreApplicationStopFailures;
  }
  if (output.instanceTerminationWaitTimeStarted !== undefined) {
    contents.instanceTerminationWaitTimeStarted =
      output.instanceTerminationWaitTimeStarted;
  }
  if (output.loadBalancerInfo !== undefined) {
    contents.loadBalancerInfo = deserializeAws_json1_1LoadBalancerInfo(
      output.loadBalancerInfo,
      context
    );
  }
  if (output.previousRevision !== undefined) {
    contents.previousRevision = deserializeAws_json1_1RevisionLocation(
      output.previousRevision,
      context
    );
  }
  if (output.revision !== undefined) {
    contents.revision = deserializeAws_json1_1RevisionLocation(
      output.revision,
      context
    );
  }
  if (output.rollbackInfo !== undefined) {
    contents.rollbackInfo = deserializeAws_json1_1RollbackInfo(
      output.rollbackInfo,
      context
    );
  }
  if (output.startTime !== undefined) {
    contents.startTime = new Date(
      output.startTime % 1 != 0
        ? Math.round(output.startTime * 1000)
        : output.startTime
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.targetInstances !== undefined) {
    contents.targetInstances = deserializeAws_json1_1TargetInstances(
      output.targetInstances,
      context
    );
  }
  if (output.updateOutdatedInstancesOnly !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.Failed !== undefined) {
    contents.Failed = output.Failed;
  }
  if (output.InProgress !== undefined) {
    contents.InProgress = output.InProgress;
  }
  if (output.Pending !== undefined) {
    contents.Pending = output.Pending;
  }
  if (output.Ready !== undefined) {
    contents.Ready = output.Ready;
  }
  if (output.Skipped !== undefined) {
    contents.Skipped = output.Skipped;
  }
  if (output.Succeeded !== undefined) {
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
  if (output.actionOnTimeout !== undefined) {
    contents.actionOnTimeout = output.actionOnTimeout;
  }
  if (output.waitTimeInMinutes !== undefined) {
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
  if (output.deploymentOption !== undefined) {
    contents.deploymentOption = output.deploymentOption;
  }
  if (output.deploymentType !== undefined) {
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
  if (output.deploymentTargetType !== undefined) {
    contents.deploymentTargetType = output.deploymentTargetType;
  }
  if (output.ecsTarget !== undefined) {
    contents.ecsTarget = deserializeAws_json1_1ECSTarget(
      output.ecsTarget,
      context
    );
  }
  if (output.instanceTarget !== undefined) {
    contents.instanceTarget = deserializeAws_json1_1InstanceTarget(
      output.instanceTarget,
      context
    );
  }
  if (output.lambdaTarget !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.errorCode !== undefined) {
    contents.errorCode = output.errorCode;
  }
  if (output.logTail !== undefined) {
    contents.logTail = output.logTail;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.scriptName !== undefined) {
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
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  if (output.Value !== undefined) {
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
  if (output.ec2TagSetList !== undefined) {
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
  if (output.clusterName !== undefined) {
    contents.clusterName = output.clusterName;
  }
  if (output.serviceName !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.deploymentId !== undefined) {
    contents.deploymentId = output.deploymentId;
  }
  if (output.lastUpdatedAt !== undefined) {
    contents.lastUpdatedAt = new Date(
      output.lastUpdatedAt % 1 != 0
        ? Math.round(output.lastUpdatedAt * 1000)
        : output.lastUpdatedAt
    );
  }
  if (output.lifecycleEvents !== undefined) {
    contents.lifecycleEvents = deserializeAws_json1_1LifecycleEventList(
      output.lifecycleEvents,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.targetArn !== undefined) {
    contents.targetArn = output.targetArn;
  }
  if (output.targetId !== undefined) {
    contents.targetId = output.targetId;
  }
  if (output.taskSetsInfo !== undefined) {
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
  if (output.desiredCount !== undefined) {
    contents.desiredCount = output.desiredCount;
  }
  if (output.identifer !== undefined) {
    contents.identifer = output.identifer;
  }
  if (output.pendingCount !== undefined) {
    contents.pendingCount = output.pendingCount;
  }
  if (output.runningCount !== undefined) {
    contents.runningCount = output.runningCount;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.targetGroup !== undefined) {
    contents.targetGroup = deserializeAws_json1_1TargetGroupInfo(
      output.targetGroup,
      context
    );
  }
  if (output.taskSetLabel !== undefined) {
    contents.taskSetLabel = output.taskSetLabel;
  }
  if (output.trafficWeight !== undefined) {
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
  if (output.name !== undefined) {
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
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.message !== undefined) {
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
  if (output.deploymentGroups !== undefined) {
    contents.deploymentGroups = deserializeAws_json1_1DeploymentGroupsList(
      output.deploymentGroups,
      context
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.firstUsedTime !== undefined) {
    contents.firstUsedTime = new Date(
      output.firstUsedTime % 1 != 0
        ? Math.round(output.firstUsedTime * 1000)
        : output.firstUsedTime
    );
  }
  if (output.lastUsedTime !== undefined) {
    contents.lastUsedTime = new Date(
      output.lastUsedTime % 1 != 0
        ? Math.round(output.lastUsedTime * 1000)
        : output.lastUsedTime
    );
  }
  if (output.registerTime !== undefined) {
    contents.registerTime = new Date(
      output.registerTime % 1 != 0
        ? Math.round(output.registerTime * 1000)
        : output.registerTime
    );
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
  if (output.application !== undefined) {
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
  if (output.applicationName !== undefined) {
    contents.applicationName = output.applicationName;
  }
  if (output.revision !== undefined) {
    contents.revision = deserializeAws_json1_1RevisionLocation(
      output.revision,
      context
    );
  }
  if (output.revisionInfo !== undefined) {
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
  if (output.deploymentConfigInfo !== undefined) {
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
  if (output.deploymentGroupInfo !== undefined) {
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
  if (output.instanceSummary !== undefined) {
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
  if (output.deploymentInfo !== undefined) {
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
  if (output.deploymentTarget !== undefined) {
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
  if (output.instanceInfo !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.commitId !== undefined) {
    contents.commitId = output.commitId;
  }
  if (output.repository !== undefined) {
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
  if (output.action !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.deregisterTime !== undefined) {
    contents.deregisterTime = new Date(
      output.deregisterTime % 1 != 0
        ? Math.round(output.deregisterTime * 1000)
        : output.deregisterTime
    );
  }
  if (output.iamSessionArn !== undefined) {
    contents.iamSessionArn = output.iamSessionArn;
  }
  if (output.iamUserArn !== undefined) {
    contents.iamUserArn = output.iamUserArn;
  }
  if (output.instanceArn !== undefined) {
    contents.instanceArn = output.instanceArn;
  }
  if (output.instanceName !== undefined) {
    contents.instanceName = output.instanceName;
  }
  if (output.registerTime !== undefined) {
    contents.registerTime = new Date(
      output.registerTime % 1 != 0
        ? Math.round(output.registerTime * 1000)
        : output.registerTime
    );
  }
  if (output.tags !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.deploymentId !== undefined) {
    contents.deploymentId = output.deploymentId;
  }
  if (output.instanceId !== undefined) {
    contents.instanceId = output.instanceId;
  }
  if (output.instanceType !== undefined) {
    contents.instanceType = output.instanceType;
  }
  if (output.lastUpdatedAt !== undefined) {
    contents.lastUpdatedAt = new Date(
      output.lastUpdatedAt % 1 != 0
        ? Math.round(output.lastUpdatedAt * 1000)
        : output.lastUpdatedAt
    );
  }
  if (output.lifecycleEvents !== undefined) {
    contents.lifecycleEvents = deserializeAws_json1_1LifecycleEventList(
      output.lifecycleEvents,
      context
    );
  }
  if (output.status !== undefined) {
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
  if (output.deploymentId !== undefined) {
    contents.deploymentId = output.deploymentId;
  }
  if (output.instanceLabel !== undefined) {
    contents.instanceLabel = output.instanceLabel;
  }
  if (output.lastUpdatedAt !== undefined) {
    contents.lastUpdatedAt = new Date(
      output.lastUpdatedAt % 1 != 0
        ? Math.round(output.lastUpdatedAt * 1000)
        : output.lastUpdatedAt
    );
  }
  if (output.lifecycleEvents !== undefined) {
    contents.lifecycleEvents = deserializeAws_json1_1LifecycleEventList(
      output.lifecycleEvents,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.targetArn !== undefined) {
    contents.targetArn = output.targetArn;
  }
  if (output.targetId !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.currentVersion !== undefined) {
    contents.currentVersion = output.currentVersion;
  }
  if (output.functionAlias !== undefined) {
    contents.functionAlias = output.functionAlias;
  }
  if (output.functionName !== undefined) {
    contents.functionName = output.functionName;
  }
  if (output.targetVersion !== undefined) {
    contents.targetVersion = output.targetVersion;
  }
  if (output.targetVersionWeight !== undefined) {
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
  if (output.deploymentId !== undefined) {
    contents.deploymentId = output.deploymentId;
  }
  if (output.lambdaFunctionInfo !== undefined) {
    contents.lambdaFunctionInfo = deserializeAws_json1_1LambdaFunctionInfo(
      output.lambdaFunctionInfo,
      context
    );
  }
  if (output.lastUpdatedAt !== undefined) {
    contents.lastUpdatedAt = new Date(
      output.lastUpdatedAt % 1 != 0
        ? Math.round(output.lastUpdatedAt * 1000)
        : output.lastUpdatedAt
    );
  }
  if (output.lifecycleEvents !== undefined) {
    contents.lifecycleEvents = deserializeAws_json1_1LifecycleEventList(
      output.lifecycleEvents,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.targetArn !== undefined) {
    contents.targetArn = output.targetArn;
  }
  if (output.targetId !== undefined) {
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
  if (output.createTime !== undefined) {
    contents.createTime = new Date(
      output.createTime % 1 != 0
        ? Math.round(output.createTime * 1000)
        : output.createTime
    );
  }
  if (output.deploymentId !== undefined) {
    contents.deploymentId = output.deploymentId;
  }
  if (output.endTime !== undefined) {
    contents.endTime = new Date(
      output.endTime % 1 != 0
        ? Math.round(output.endTime * 1000)
        : output.endTime
    );
  }
  if (output.status !== undefined) {
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
  if (output.diagnostics !== undefined) {
    contents.diagnostics = deserializeAws_json1_1Diagnostics(
      output.diagnostics,
      context
    );
  }
  if (output.endTime !== undefined) {
    contents.endTime = new Date(
      output.endTime % 1 != 0
        ? Math.round(output.endTime * 1000)
        : output.endTime
    );
  }
  if (output.lifecycleEventName !== undefined) {
    contents.lifecycleEventName = output.lifecycleEventName;
  }
  if (output.startTime !== undefined) {
    contents.startTime = new Date(
      output.startTime % 1 != 0
        ? Math.round(output.startTime * 1000)
        : output.startTime
    );
  }
  if (output.status !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.revisions !== undefined) {
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
  if (output.applications !== undefined) {
    contents.applications = deserializeAws_json1_1ApplicationsList(
      output.applications,
      context
    );
  }
  if (output.nextToken !== undefined) {
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
  if (output.deploymentConfigsList !== undefined) {
    contents.deploymentConfigsList = deserializeAws_json1_1DeploymentConfigsList(
      output.deploymentConfigsList,
      context
    );
  }
  if (output.nextToken !== undefined) {
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
  if (output.applicationName !== undefined) {
    contents.applicationName = output.applicationName;
  }
  if (output.deploymentGroups !== undefined) {
    contents.deploymentGroups = deserializeAws_json1_1DeploymentGroupsList(
      output.deploymentGroups,
      context
    );
  }
  if (output.nextToken !== undefined) {
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
  if (output.instancesList !== undefined) {
    contents.instancesList = deserializeAws_json1_1InstancesList(
      output.instancesList,
      context
    );
  }
  if (output.nextToken !== undefined) {
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
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.targetIds !== undefined) {
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
  if (output.deployments !== undefined) {
    contents.deployments = deserializeAws_json1_1DeploymentsList(
      output.deployments,
      context
    );
  }
  if (output.nextToken !== undefined) {
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
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.tokenNameList !== undefined) {
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
  if (output.instanceNames !== undefined) {
    contents.instanceNames = deserializeAws_json1_1InstanceNameList(
      output.instanceNames,
      context
    );
  }
  if (output.nextToken !== undefined) {
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
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Tags !== undefined) {
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
  if (output.elbInfoList !== undefined) {
    contents.elbInfoList = deserializeAws_json1_1ELBInfoList(
      output.elbInfoList,
      context
    );
  }
  if (output.targetGroupInfoList !== undefined) {
    contents.targetGroupInfoList = deserializeAws_json1_1TargetGroupInfoList(
      output.targetGroupInfoList,
      context
    );
  }
  if (output.targetGroupPairInfoList !== undefined) {
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
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  if (output.value !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.onPremisesTagSetList !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.lifecycleEventHookExecutionId !== undefined) {
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
  if (output.content !== undefined) {
    contents.content = output.content;
  }
  if (output.sha256 !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.genericRevisionInfo !== undefined) {
    contents.genericRevisionInfo = deserializeAws_json1_1GenericRevisionInfo(
      output.genericRevisionInfo,
      context
    );
  }
  if (output.revisionLocation !== undefined) {
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
  if (output.appSpecContent !== undefined) {
    contents.appSpecContent = deserializeAws_json1_1AppSpecContent(
      output.appSpecContent,
      context
    );
  }
  if (output.gitHubLocation !== undefined) {
    contents.gitHubLocation = deserializeAws_json1_1GitHubLocation(
      output.gitHubLocation,
      context
    );
  }
  if (output.revisionType !== undefined) {
    contents.revisionType = output.revisionType;
  }
  if (output.s3Location !== undefined) {
    contents.s3Location = deserializeAws_json1_1S3Location(
      output.s3Location,
      context
    );
  }
  if (output.string !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.rollbackDeploymentId !== undefined) {
    contents.rollbackDeploymentId = output.rollbackDeploymentId;
  }
  if (output.rollbackMessage !== undefined) {
    contents.rollbackMessage = output.rollbackMessage;
  }
  if (output.rollbackTriggeringDeploymentId !== undefined) {
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
  if (output.bucket !== undefined) {
    contents.bucket = output.bucket;
  }
  if (output.bundleType !== undefined) {
    contents.bundleType = output.bundleType;
  }
  if (output.eTag !== undefined) {
    contents.eTag = output.eTag;
  }
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  if (output.version !== undefined) {
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
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.statusMessage !== undefined) {
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
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
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
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  if (output.Value !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.name !== undefined) {
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
  if (output.prodTrafficRoute !== undefined) {
    contents.prodTrafficRoute = deserializeAws_json1_1TrafficRoute(
      output.prodTrafficRoute,
      context
    );
  }
  if (output.targetGroups !== undefined) {
    contents.targetGroups = deserializeAws_json1_1TargetGroupInfoList(
      output.targetGroups,
      context
    );
  }
  if (output.testTrafficRoute !== undefined) {
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
  if (output.autoScalingGroups !== undefined) {
    contents.autoScalingGroups = deserializeAws_json1_1AutoScalingGroupNameList(
      output.autoScalingGroups,
      context
    );
  }
  if (output.ec2TagSet !== undefined) {
    contents.ec2TagSet = deserializeAws_json1_1EC2TagSet(
      output.ec2TagSet,
      context
    );
  }
  if (output.tagFilters !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.canaryInterval !== undefined) {
    contents.canaryInterval = output.canaryInterval;
  }
  if (output.canaryPercentage !== undefined) {
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
  if (output.linearInterval !== undefined) {
    contents.linearInterval = output.linearInterval;
  }
  if (output.linearPercentage !== undefined) {
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
  if (output.listenerArns !== undefined) {
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
  if (output.timeBasedCanary !== undefined) {
    contents.timeBasedCanary = deserializeAws_json1_1TimeBasedCanary(
      output.timeBasedCanary,
      context
    );
  }
  if (output.timeBasedLinear !== undefined) {
    contents.timeBasedLinear = deserializeAws_json1_1TimeBasedLinear(
      output.timeBasedLinear,
      context
    );
  }
  if (output.type !== undefined) {
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
  if (output.triggerEvents !== undefined) {
    contents.triggerEvents = deserializeAws_json1_1TriggerEventTypeList(
      output.triggerEvents,
      context
    );
  }
  if (output.triggerName !== undefined) {
    contents.triggerName = output.triggerName;
  }
  if (output.triggerTargetArn !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.hooksNotCleanedUp !== undefined) {
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
