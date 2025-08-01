// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
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
  ApprovePlanExecutionStepCommandInput,
  ApprovePlanExecutionStepCommandOutput,
} from "../commands/ApprovePlanExecutionStepCommand";
import {
  CancelPlanExecutionCommandInput,
  CancelPlanExecutionCommandOutput,
} from "../commands/CancelPlanExecutionCommand";
import { CreatePlanCommandInput, CreatePlanCommandOutput } from "../commands/CreatePlanCommand";
import { DeletePlanCommandInput, DeletePlanCommandOutput } from "../commands/DeletePlanCommand";
import { GetPlanCommandInput, GetPlanCommandOutput } from "../commands/GetPlanCommand";
import {
  GetPlanEvaluationStatusCommandInput,
  GetPlanEvaluationStatusCommandOutput,
} from "../commands/GetPlanEvaluationStatusCommand";
import { GetPlanExecutionCommandInput, GetPlanExecutionCommandOutput } from "../commands/GetPlanExecutionCommand";
import { GetPlanInRegionCommandInput, GetPlanInRegionCommandOutput } from "../commands/GetPlanInRegionCommand";
import {
  ListPlanExecutionEventsCommandInput,
  ListPlanExecutionEventsCommandOutput,
} from "../commands/ListPlanExecutionEventsCommand";
import { ListPlanExecutionsCommandInput, ListPlanExecutionsCommandOutput } from "../commands/ListPlanExecutionsCommand";
import { ListPlansCommandInput, ListPlansCommandOutput } from "../commands/ListPlansCommand";
import { ListPlansInRegionCommandInput, ListPlansInRegionCommandOutput } from "../commands/ListPlansInRegionCommand";
import {
  ListRoute53HealthChecksCommandInput,
  ListRoute53HealthChecksCommandOutput,
} from "../commands/ListRoute53HealthChecksCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartPlanExecutionCommandInput, StartPlanExecutionCommandOutput } from "../commands/StartPlanExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdatePlanCommandInput, UpdatePlanCommandOutput } from "../commands/UpdatePlanCommand";
import {
  UpdatePlanExecutionCommandInput,
  UpdatePlanExecutionCommandOutput,
} from "../commands/UpdatePlanExecutionCommand";
import {
  UpdatePlanExecutionStepCommandInput,
  UpdatePlanExecutionStepCommandOutput,
} from "../commands/UpdatePlanExecutionStepCommand";
import { ARCRegionSwitchServiceException as __BaseException } from "../models/ARCRegionSwitchServiceException";
import {
  AbbreviatedExecution,
  AbbreviatedPlan,
  AccessDeniedException,
  ApprovePlanExecutionStepRequest,
  ArcRoutingControlConfiguration,
  ArcRoutingControlState,
  Asg,
  AssociatedAlarm,
  CancelPlanExecutionRequest,
  CreatePlanRequest,
  CreatePlanResponse,
  CustomActionLambdaConfiguration,
  DeletePlanRequest,
  Ec2AsgCapacityIncreaseConfiguration,
  Ec2Ungraceful,
  EcsCapacityIncreaseConfiguration,
  EcsUngraceful,
  EksCluster,
  EksResourceScalingConfiguration,
  EksResourceScalingUngraceful,
  ExecutionApprovalConfiguration,
  ExecutionBlockConfiguration,
  ExecutionEvent,
  GetPlanEvaluationStatusRequest,
  GetPlanEvaluationStatusResponse,
  GetPlanExecutionRequest,
  GetPlanExecutionResponse,
  GetPlanInRegionRequest,
  GetPlanInRegionResponse,
  GetPlanRequest,
  GetPlanResponse,
  GlobalAuroraConfiguration,
  GlobalAuroraUngraceful,
  IllegalArgumentException,
  IllegalStateException,
  InternalServerException,
  KubernetesResourceType,
  KubernetesScalingResource,
  Lambdas,
  LambdaUngraceful,
  ListPlanExecutionEventsRequest,
  ListPlanExecutionEventsResponse,
  ListPlanExecutionsRequest,
  ListPlanExecutionsResponse,
  ListPlansInRegionRequest,
  ListPlansInRegionResponse,
  ListPlansRequest,
  ListPlansResponse,
  ListRoute53HealthChecksRequest,
  ListTagsForResourceRequest,
  ParallelExecutionBlockConfiguration,
  Plan,
  RegionSwitchPlanConfiguration,
  ResourceNotFoundException,
  ResourceWarning,
  Route53HealthCheckConfiguration,
  Route53ResourceRecordSet,
  Service,
  StartPlanExecutionRequest,
  Step,
  StepState,
  TagResourceRequest,
  Trigger,
  TriggerCondition,
  UntagResourceRequest,
  UpdatePlanExecutionRequest,
  UpdatePlanExecutionStepRequest,
  UpdatePlanRequest,
  UpdatePlanResponse,
  Workflow,
} from "../models/models_0";

/**
 * serializeAws_json1_0ApprovePlanExecutionStepCommand
 */
export const se_ApprovePlanExecutionStepCommand = async (
  input: ApprovePlanExecutionStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ApprovePlanExecutionStep");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CancelPlanExecutionCommand
 */
export const se_CancelPlanExecutionCommand = async (
  input: CancelPlanExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelPlanExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreatePlanCommand
 */
export const se_CreatePlanCommand = async (
  input: CreatePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePlan");
  let body: any;
  body = JSON.stringify(se_CreatePlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeletePlanCommand
 */
export const se_DeletePlanCommand = async (
  input: DeletePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePlan");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPlanCommand
 */
export const se_GetPlanCommand = async (
  input: GetPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPlan");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPlanEvaluationStatusCommand
 */
export const se_GetPlanEvaluationStatusCommand = async (
  input: GetPlanEvaluationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPlanEvaluationStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPlanExecutionCommand
 */
export const se_GetPlanExecutionCommand = async (
  input: GetPlanExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPlanExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPlanInRegionCommand
 */
export const se_GetPlanInRegionCommand = async (
  input: GetPlanInRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPlanInRegion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListPlanExecutionEventsCommand
 */
export const se_ListPlanExecutionEventsCommand = async (
  input: ListPlanExecutionEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPlanExecutionEvents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListPlanExecutionsCommand
 */
export const se_ListPlanExecutionsCommand = async (
  input: ListPlanExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPlanExecutions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListPlansCommand
 */
export const se_ListPlansCommand = async (
  input: ListPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPlans");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListPlansInRegionCommand
 */
export const se_ListPlansInRegionCommand = async (
  input: ListPlansInRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPlansInRegion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRoute53HealthChecksCommand
 */
export const se_ListRoute53HealthChecksCommand = async (
  input: ListRoute53HealthChecksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRoute53HealthChecks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
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
 * serializeAws_json1_0StartPlanExecutionCommand
 */
export const se_StartPlanExecutionCommand = async (
  input: StartPlanExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartPlanExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
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
 * serializeAws_json1_0UntagResourceCommand
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
 * serializeAws_json1_0UpdatePlanCommand
 */
export const se_UpdatePlanCommand = async (
  input: UpdatePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePlan");
  let body: any;
  body = JSON.stringify(se_UpdatePlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdatePlanExecutionCommand
 */
export const se_UpdatePlanExecutionCommand = async (
  input: UpdatePlanExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePlanExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdatePlanExecutionStepCommand
 */
export const se_UpdatePlanExecutionStepCommand = async (
  input: UpdatePlanExecutionStepCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePlanExecutionStep");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0ApprovePlanExecutionStepCommand
 */
export const de_ApprovePlanExecutionStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ApprovePlanExecutionStepCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ApprovePlanExecutionStepCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CancelPlanExecutionCommand
 */
export const de_CancelPlanExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPlanExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelPlanExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreatePlanCommand
 */
export const de_CreatePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePlanResponse(data, context);
  const response: CreatePlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeletePlanCommand
 */
export const de_DeletePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPlanCommand
 */
export const de_GetPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPlanResponse(data, context);
  const response: GetPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPlanEvaluationStatusCommand
 */
export const de_GetPlanEvaluationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlanEvaluationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPlanEvaluationStatusResponse(data, context);
  const response: GetPlanEvaluationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPlanExecutionCommand
 */
export const de_GetPlanExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlanExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPlanExecutionResponse(data, context);
  const response: GetPlanExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPlanInRegionCommand
 */
export const de_GetPlanInRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlanInRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPlanInRegionResponse(data, context);
  const response: GetPlanInRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListPlanExecutionEventsCommand
 */
export const de_ListPlanExecutionEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlanExecutionEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPlanExecutionEventsResponse(data, context);
  const response: ListPlanExecutionEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListPlanExecutionsCommand
 */
export const de_ListPlanExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlanExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPlanExecutionsResponse(data, context);
  const response: ListPlanExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListPlansCommand
 */
export const de_ListPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlansCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPlansResponse(data, context);
  const response: ListPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListPlansInRegionCommand
 */
export const de_ListPlansInRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlansInRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPlansInRegionResponse(data, context);
  const response: ListPlansInRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListRoute53HealthChecksCommand
 */
export const de_ListRoute53HealthChecksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoute53HealthChecksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRoute53HealthChecksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0StartPlanExecutionCommand
 */
export const de_StartPlanExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPlanExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartPlanExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0UpdatePlanCommand
 */
export const de_UpdatePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePlanResponse(data, context);
  const response: UpdatePlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdatePlanExecutionCommand
 */
export const de_UpdatePlanExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlanExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdatePlanExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdatePlanExecutionStepCommand
 */
export const de_UpdatePlanExecutionStepCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlanExecutionStepCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdatePlanExecutionStepCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.arcregionswitch#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.arcregionswitch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "IllegalStateException":
    case "com.amazonaws.arcregionswitch#IllegalStateException":
      throw await de_IllegalStateExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.arcregionswitch#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "IllegalArgumentException":
    case "com.amazonaws.arcregionswitch#IllegalArgumentException":
      throw await de_IllegalArgumentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0IllegalArgumentExceptionRes
 */
const de_IllegalArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IllegalArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0IllegalStateExceptionRes
 */
const de_IllegalStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IllegalStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ApprovePlanExecutionStepRequest omitted.

// se_ArcRoutingControlConfiguration omitted.

// se_ArcRoutingControlState omitted.

// se_ArcRoutingControlStates omitted.

// se_Asg omitted.

// se_AsgList omitted.

// se_AssociatedAlarm omitted.

// se_AssociatedAlarmMap omitted.

// se_AuroraClusterArns omitted.

// se_CancelPlanExecutionRequest omitted.

/**
 * serializeAws_json1_0CreatePlanRequest
 */
const se_CreatePlanRequest = (input: CreatePlanRequest, context: __SerdeContext): any => {
  return take(input, {
    associatedAlarms: _json,
    description: [],
    executionRole: [],
    name: [],
    primaryRegion: [],
    recoveryApproach: [],
    recoveryTimeObjectiveMinutes: [],
    regions: _json,
    tags: _json,
    triggers: _json,
    workflows: (_) => se_WorkflowList(_, context),
  });
};

/**
 * serializeAws_json1_0CustomActionLambdaConfiguration
 */
const se_CustomActionLambdaConfiguration = (input: CustomActionLambdaConfiguration, context: __SerdeContext): any => {
  return take(input, {
    lambdas: _json,
    regionToRun: [],
    retryIntervalMinutes: __serializeFloat,
    timeoutMinutes: [],
    ungraceful: _json,
  });
};

// se_DeletePlanRequest omitted.

// se_Ec2AsgCapacityIncreaseConfiguration omitted.

// se_Ec2Ungraceful omitted.

// se_EcsCapacityIncreaseConfiguration omitted.

// se_EcsUngraceful omitted.

// se_EksCluster omitted.

// se_EksClusters omitted.

// se_EksResourceScalingConfiguration omitted.

// se_EksResourceScalingUngraceful omitted.

// se_ExecutionApprovalConfiguration omitted.

/**
 * serializeAws_json1_0ExecutionBlockConfiguration
 */
const se_ExecutionBlockConfiguration = (input: ExecutionBlockConfiguration, context: __SerdeContext): any => {
  return ExecutionBlockConfiguration.visit(input, {
    arcRoutingControlConfig: (value) => ({ arcRoutingControlConfig: _json(value) }),
    customActionLambdaConfig: (value) => ({
      customActionLambdaConfig: se_CustomActionLambdaConfiguration(value, context),
    }),
    ec2AsgCapacityIncreaseConfig: (value) => ({ ec2AsgCapacityIncreaseConfig: _json(value) }),
    ecsCapacityIncreaseConfig: (value) => ({ ecsCapacityIncreaseConfig: _json(value) }),
    eksResourceScalingConfig: (value) => ({ eksResourceScalingConfig: _json(value) }),
    executionApprovalConfig: (value) => ({ executionApprovalConfig: _json(value) }),
    globalAuroraConfig: (value) => ({ globalAuroraConfig: _json(value) }),
    parallelConfig: (value) => ({ parallelConfig: se_ParallelExecutionBlockConfiguration(value, context) }),
    regionSwitchPlanConfig: (value) => ({ regionSwitchPlanConfig: _json(value) }),
    route53HealthCheckConfig: (value) => ({ route53HealthCheckConfig: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_GetPlanEvaluationStatusRequest omitted.

// se_GetPlanExecutionRequest omitted.

// se_GetPlanInRegionRequest omitted.

// se_GetPlanRequest omitted.

// se_GlobalAuroraConfiguration omitted.

// se_GlobalAuroraUngraceful omitted.

// se_KubernetesResourceType omitted.

// se_KubernetesScalingApplication omitted.

// se_KubernetesScalingApps omitted.

// se_KubernetesScalingResource omitted.

// se_LambdaList omitted.

// se_Lambdas omitted.

// se_LambdaUngraceful omitted.

// se_ListPlanExecutionEventsRequest omitted.

// se_ListPlanExecutionsRequest omitted.

// se_ListPlansInRegionRequest omitted.

// se_ListPlansRequest omitted.

// se_ListRoute53HealthChecksRequest omitted.

// se_ListTagsForResourceRequest omitted.

/**
 * serializeAws_json1_0ParallelExecutionBlockConfiguration
 */
const se_ParallelExecutionBlockConfiguration = (
  input: ParallelExecutionBlockConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    steps: (_) => se_Steps(_, context),
  });
};

// se_RegionalScalingResource omitted.

// se_RegionAndRoutingControls omitted.

// se_RegionList omitted.

// se_RegionSwitchPlanConfiguration omitted.

// se_Route53HealthCheckConfiguration omitted.

// se_Route53ResourceRecordSet omitted.

// se_Route53ResourceRecordSetList omitted.

// se_Service omitted.

// se_ServiceList omitted.

// se_StartPlanExecutionRequest omitted.

/**
 * serializeAws_json1_0Step
 */
const se_Step = (input: Step, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    executionBlockConfiguration: (_) => se_ExecutionBlockConfiguration(_, context),
    executionBlockType: [],
    name: [],
  });
};

/**
 * serializeAws_json1_0Steps
 */
const se_Steps = (input: Step[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Step(entry, context);
    });
};

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_Trigger omitted.

// se_TriggerCondition omitted.

// se_TriggerConditionList omitted.

// se_TriggerList omitted.

// se_UntagResourceRequest omitted.

// se_UpdatePlanExecutionRequest omitted.

// se_UpdatePlanExecutionStepRequest omitted.

/**
 * serializeAws_json1_0UpdatePlanRequest
 */
const se_UpdatePlanRequest = (input: UpdatePlanRequest, context: __SerdeContext): any => {
  return take(input, {
    arn: [],
    associatedAlarms: _json,
    description: [],
    executionRole: [],
    recoveryTimeObjectiveMinutes: [],
    triggers: _json,
    workflows: (_) => se_WorkflowList(_, context),
  });
};

/**
 * serializeAws_json1_0Workflow
 */
const se_Workflow = (input: Workflow, context: __SerdeContext): any => {
  return take(input, {
    steps: (_) => se_Steps(_, context),
    workflowDescription: [],
    workflowTargetAction: [],
    workflowTargetRegion: [],
  });
};

/**
 * serializeAws_json1_0WorkflowList
 */
const se_WorkflowList = (input: Workflow[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Workflow(entry, context);
    });
};

/**
 * deserializeAws_json1_0AbbreviatedExecution
 */
const de_AbbreviatedExecution = (output: any, context: __SerdeContext): AbbreviatedExecution => {
  return take(output, {
    actualRecoveryTime: __expectString,
    comment: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    executionAction: __expectString,
    executionId: __expectString,
    executionRegion: __expectString,
    executionState: __expectString,
    mode: __expectString,
    planArn: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0AbbreviatedExecutionsList
 */
const de_AbbreviatedExecutionsList = (output: any, context: __SerdeContext): AbbreviatedExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AbbreviatedExecution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AbbreviatedPlan
 */
const de_AbbreviatedPlan = (output: any, context: __SerdeContext): AbbreviatedPlan => {
  return take(output, {
    activePlanExecution: __expectString,
    arn: __expectString,
    description: __expectString,
    executionRole: __expectString,
    name: __expectString,
    owner: __expectString,
    primaryRegion: __expectString,
    recoveryApproach: __expectString,
    recoveryTimeObjectiveMinutes: __expectInt32,
    regions: _json,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    version: __expectString,
  }) as any;
};

// de_AccessDeniedException omitted.

// de_ApprovePlanExecutionStepResponse omitted.

// de_ArcRoutingControlConfiguration omitted.

// de_ArcRoutingControlState omitted.

// de_ArcRoutingControlStates omitted.

// de_Asg omitted.

// de_AsgList omitted.

// de_AssociatedAlarm omitted.

// de_AssociatedAlarmMap omitted.

// de_AuroraClusterArns omitted.

// de_CancelPlanExecutionResponse omitted.

/**
 * deserializeAws_json1_0CreatePlanResponse
 */
const de_CreatePlanResponse = (output: any, context: __SerdeContext): CreatePlanResponse => {
  return take(output, {
    plan: (_: any) => de_Plan(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CustomActionLambdaConfiguration
 */
const de_CustomActionLambdaConfiguration = (output: any, context: __SerdeContext): CustomActionLambdaConfiguration => {
  return take(output, {
    lambdas: _json,
    regionToRun: __expectString,
    retryIntervalMinutes: __limitedParseFloat32,
    timeoutMinutes: __expectInt32,
    ungraceful: _json,
  }) as any;
};

// de_DeletePlanResponse omitted.

// de_Ec2AsgCapacityIncreaseConfiguration omitted.

// de_Ec2Ungraceful omitted.

// de_EcsCapacityIncreaseConfiguration omitted.

// de_EcsUngraceful omitted.

// de_EksCluster omitted.

// de_EksClusters omitted.

// de_EksResourceScalingConfiguration omitted.

// de_EksResourceScalingUngraceful omitted.

// de_ExecutionApprovalConfiguration omitted.

/**
 * deserializeAws_json1_0ExecutionBlockConfiguration
 */
const de_ExecutionBlockConfiguration = (output: any, context: __SerdeContext): ExecutionBlockConfiguration => {
  if (output.arcRoutingControlConfig != null) {
    return {
      arcRoutingControlConfig: _json(output.arcRoutingControlConfig),
    };
  }
  if (output.customActionLambdaConfig != null) {
    return {
      customActionLambdaConfig: de_CustomActionLambdaConfiguration(output.customActionLambdaConfig, context),
    };
  }
  if (output.ec2AsgCapacityIncreaseConfig != null) {
    return {
      ec2AsgCapacityIncreaseConfig: _json(output.ec2AsgCapacityIncreaseConfig),
    };
  }
  if (output.ecsCapacityIncreaseConfig != null) {
    return {
      ecsCapacityIncreaseConfig: _json(output.ecsCapacityIncreaseConfig),
    };
  }
  if (output.eksResourceScalingConfig != null) {
    return {
      eksResourceScalingConfig: _json(output.eksResourceScalingConfig),
    };
  }
  if (output.executionApprovalConfig != null) {
    return {
      executionApprovalConfig: _json(output.executionApprovalConfig),
    };
  }
  if (output.globalAuroraConfig != null) {
    return {
      globalAuroraConfig: _json(output.globalAuroraConfig),
    };
  }
  if (output.parallelConfig != null) {
    return {
      parallelConfig: de_ParallelExecutionBlockConfiguration(output.parallelConfig, context),
    };
  }
  if (output.regionSwitchPlanConfig != null) {
    return {
      regionSwitchPlanConfig: _json(output.regionSwitchPlanConfig),
    };
  }
  if (output.route53HealthCheckConfig != null) {
    return {
      route53HealthCheckConfig: _json(output.route53HealthCheckConfig),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0ExecutionEvent
 */
const de_ExecutionEvent = (output: any, context: __SerdeContext): ExecutionEvent => {
  return take(output, {
    description: __expectString,
    error: __expectString,
    eventId: __expectString,
    executionBlockType: __expectString,
    previousEventId: __expectString,
    resources: _json,
    stepName: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ExecutionEventList
 */
const de_ExecutionEventList = (output: any, context: __SerdeContext): ExecutionEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExecutionEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GetPlanEvaluationStatusResponse
 */
const de_GetPlanEvaluationStatusResponse = (output: any, context: __SerdeContext): GetPlanEvaluationStatusResponse => {
  return take(output, {
    evaluationState: __expectString,
    lastEvaluatedVersion: __expectString,
    lastEvaluationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    nextToken: __expectString,
    planArn: __expectString,
    region: __expectString,
    warnings: (_: any) => de_PlanWarnings(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetPlanExecutionResponse
 */
const de_GetPlanExecutionResponse = (output: any, context: __SerdeContext): GetPlanExecutionResponse => {
  return take(output, {
    actualRecoveryTime: __expectString,
    comment: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    executionAction: __expectString,
    executionId: __expectString,
    executionRegion: __expectString,
    executionState: __expectString,
    mode: __expectString,
    nextToken: __expectString,
    plan: (_: any) => de_Plan(_, context),
    planArn: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stepStates: (_: any) => de_StepStates(_, context),
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetPlanInRegionResponse
 */
const de_GetPlanInRegionResponse = (output: any, context: __SerdeContext): GetPlanInRegionResponse => {
  return take(output, {
    plan: (_: any) => de_Plan(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetPlanResponse
 */
const de_GetPlanResponse = (output: any, context: __SerdeContext): GetPlanResponse => {
  return take(output, {
    plan: (_: any) => de_Plan(_, context),
  }) as any;
};

// de_GlobalAuroraConfiguration omitted.

// de_GlobalAuroraUngraceful omitted.

// de_IllegalArgumentException omitted.

// de_IllegalStateException omitted.

// de_InternalServerException omitted.

// de_KubernetesResourceType omitted.

// de_KubernetesScalingApplication omitted.

// de_KubernetesScalingApps omitted.

// de_KubernetesScalingResource omitted.

// de_LambdaList omitted.

// de_Lambdas omitted.

// de_LambdaUngraceful omitted.

/**
 * deserializeAws_json1_0ListPlanExecutionEventsResponse
 */
const de_ListPlanExecutionEventsResponse = (output: any, context: __SerdeContext): ListPlanExecutionEventsResponse => {
  return take(output, {
    items: (_: any) => de_ExecutionEventList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListPlanExecutionsResponse
 */
const de_ListPlanExecutionsResponse = (output: any, context: __SerdeContext): ListPlanExecutionsResponse => {
  return take(output, {
    items: (_: any) => de_AbbreviatedExecutionsList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListPlansInRegionResponse
 */
const de_ListPlansInRegionResponse = (output: any, context: __SerdeContext): ListPlansInRegionResponse => {
  return take(output, {
    nextToken: __expectString,
    plans: (_: any) => de_PlanList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListPlansResponse
 */
const de_ListPlansResponse = (output: any, context: __SerdeContext): ListPlansResponse => {
  return take(output, {
    nextToken: __expectString,
    plans: (_: any) => de_PlanList(_, context),
  }) as any;
};

// de_ListRoute53HealthChecksResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_MinimalWorkflow omitted.

/**
 * deserializeAws_json1_0ParallelExecutionBlockConfiguration
 */
const de_ParallelExecutionBlockConfiguration = (
  output: any,
  context: __SerdeContext
): ParallelExecutionBlockConfiguration => {
  return take(output, {
    steps: (_: any) => de_Steps(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0Plan
 */
const de_Plan = (output: any, context: __SerdeContext): Plan => {
  return take(output, {
    arn: __expectString,
    associatedAlarms: _json,
    description: __expectString,
    executionRole: __expectString,
    name: __expectString,
    owner: __expectString,
    primaryRegion: __expectString,
    recoveryApproach: __expectString,
    recoveryTimeObjectiveMinutes: __expectInt32,
    regions: _json,
    triggers: _json,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    version: __expectString,
    workflows: (_: any) => de_WorkflowList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0PlanList
 */
const de_PlanList = (output: any, context: __SerdeContext): AbbreviatedPlan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AbbreviatedPlan(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PlanWarnings
 */
const de_PlanWarnings = (output: any, context: __SerdeContext): ResourceWarning[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceWarning(entry, context);
    });
  return retVal;
};

// de_RegionalScalingResource omitted.

// de_RegionAndRoutingControls omitted.

// de_RegionList omitted.

// de_RegionSwitchPlanConfiguration omitted.

// de_ResourceNotFoundException omitted.

// de_Resources omitted.

/**
 * deserializeAws_json1_0ResourceWarning
 */
const de_ResourceWarning = (output: any, context: __SerdeContext): ResourceWarning => {
  return take(output, {
    resourceArn: __expectString,
    stepName: __expectString,
    version: __expectString,
    warningMessage: __expectString,
    warningStatus: __expectString,
    warningUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    workflow: _json,
  }) as any;
};

// de_Route53HealthCheck omitted.

// de_Route53HealthCheckConfiguration omitted.

// de_Route53HealthCheckList omitted.

// de_Route53ResourceRecordSet omitted.

// de_Route53ResourceRecordSetList omitted.

// de_Service omitted.

// de_ServiceList omitted.

// de_StartPlanExecutionResponse omitted.

/**
 * deserializeAws_json1_0Step
 */
const de_Step = (output: any, context: __SerdeContext): Step => {
  return take(output, {
    description: __expectString,
    executionBlockConfiguration: (_: any) => de_ExecutionBlockConfiguration(__expectUnion(_), context),
    executionBlockType: __expectString,
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0Steps
 */
const de_Steps = (output: any, context: __SerdeContext): Step[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Step(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0StepState
 */
const de_StepState = (output: any, context: __SerdeContext): StepState => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    stepMode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0StepStates
 */
const de_StepStates = (output: any, context: __SerdeContext): StepState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StepState(entry, context);
    });
  return retVal;
};

// de_TagResourceResponse omitted.

// de_Tags omitted.

// de_Trigger omitted.

// de_TriggerCondition omitted.

// de_TriggerConditionList omitted.

// de_TriggerList omitted.

// de_UntagResourceResponse omitted.

// de_UpdatePlanExecutionResponse omitted.

// de_UpdatePlanExecutionStepResponse omitted.

/**
 * deserializeAws_json1_0UpdatePlanResponse
 */
const de_UpdatePlanResponse = (output: any, context: __SerdeContext): UpdatePlanResponse => {
  return take(output, {
    plan: (_: any) => de_Plan(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0Workflow
 */
const de_Workflow = (output: any, context: __SerdeContext): Workflow => {
  return take(output, {
    steps: (_: any) => de_Steps(_, context),
    workflowDescription: __expectString,
    workflowTargetAction: __expectString,
    workflowTargetRegion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0WorkflowList
 */
const de_WorkflowList = (output: any, context: __SerdeContext): Workflow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Workflow(entry, context);
    });
  return retVal;
};

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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `ArcRegionSwitch.${operation}`,
  };
}
