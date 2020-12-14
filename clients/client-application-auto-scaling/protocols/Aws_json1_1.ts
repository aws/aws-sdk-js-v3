import {
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
} from "../commands/DeleteScalingPolicyCommand";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "../commands/DeleteScheduledActionCommand";
import {
  DeregisterScalableTargetCommandInput,
  DeregisterScalableTargetCommandOutput,
} from "../commands/DeregisterScalableTargetCommand";
import {
  DescribeScalableTargetsCommandInput,
  DescribeScalableTargetsCommandOutput,
} from "../commands/DescribeScalableTargetsCommand";
import {
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "../commands/DescribeScalingActivitiesCommand";
import {
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "../commands/DescribeScalingPoliciesCommand";
import {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "../commands/DescribeScheduledActionsCommand";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "../commands/PutScalingPolicyCommand";
import { PutScheduledActionCommandInput, PutScheduledActionCommandOutput } from "../commands/PutScheduledActionCommand";
import {
  RegisterScalableTargetCommandInput,
  RegisterScalableTargetCommandOutput,
} from "../commands/RegisterScalableTargetCommand";
import {
  Alarm,
  ConcurrentUpdateException,
  CustomizedMetricSpecification,
  DeleteScalingPolicyRequest,
  DeleteScalingPolicyResponse,
  DeleteScheduledActionRequest,
  DeleteScheduledActionResponse,
  DeregisterScalableTargetRequest,
  DeregisterScalableTargetResponse,
  DescribeScalableTargetsRequest,
  DescribeScalableTargetsResponse,
  DescribeScalingActivitiesRequest,
  DescribeScalingActivitiesResponse,
  DescribeScalingPoliciesRequest,
  DescribeScalingPoliciesResponse,
  DescribeScheduledActionsRequest,
  DescribeScheduledActionsResponse,
  FailedResourceAccessException,
  InternalServiceException,
  InvalidNextTokenException,
  LimitExceededException,
  MetricDimension,
  ObjectNotFoundException,
  PredefinedMetricSpecification,
  PutScalingPolicyRequest,
  PutScalingPolicyResponse,
  PutScheduledActionRequest,
  PutScheduledActionResponse,
  RegisterScalableTargetRequest,
  RegisterScalableTargetResponse,
  ScalableTarget,
  ScalableTargetAction,
  ScalingActivity,
  ScalingPolicy,
  ScheduledAction,
  StepAdjustment,
  StepScalingPolicyConfiguration,
  SuspendedState,
  TargetTrackingScalingPolicyConfiguration,
  ValidationException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1DeleteScalingPolicyCommand = async (
  input: DeleteScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleFrontendService.DeleteScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteScalingPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteScheduledActionCommand = async (
  input: DeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleFrontendService.DeleteScheduledAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteScheduledActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterScalableTargetCommand = async (
  input: DeregisterScalableTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleFrontendService.DeregisterScalableTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterScalableTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScalableTargetsCommand = async (
  input: DescribeScalableTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleFrontendService.DescribeScalableTargets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeScalableTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScalingActivitiesCommand = async (
  input: DescribeScalingActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleFrontendService.DescribeScalingActivities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeScalingActivitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScalingPoliciesCommand = async (
  input: DescribeScalingPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleFrontendService.DescribeScalingPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeScalingPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScheduledActionsCommand = async (
  input: DescribeScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleFrontendService.DescribeScheduledActions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeScheduledActionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutScalingPolicyCommand = async (
  input: PutScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleFrontendService.PutScalingPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutScalingPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutScheduledActionCommand = async (
  input: PutScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleFrontendService.PutScheduledAction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutScheduledActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterScalableTargetCommand = async (
  input: RegisterScalableTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleFrontendService.RegisterScalableTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterScalableTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1DeleteScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteScalingPolicyResponse(data, context);
  const response: DeleteScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteScheduledActionResponse(data, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteScheduledActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeregisterScalableTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterScalableTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterScalableTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterScalableTargetResponse(data, context);
  const response: DeregisterScalableTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterScalableTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterScalableTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeScalableTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalableTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalableTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalableTargetsResponse(data, context);
  const response: DescribeScalableTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScalableTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalableTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeScalingActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalingActivitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingActivitiesResponse(data, context);
  const response: DescribeScalingActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScalingActivitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeScalingPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScalingPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingPoliciesResponse(data, context);
  const response: DescribeScalingPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScalingPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FailedResourceAccessException":
    case "com.amazonaws.applicationautoscaling#FailedResourceAccessException":
      response = {
        ...(await deserializeAws_json1_1FailedResourceAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeScheduledActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScheduledActionsResponse(data, context);
  const response: DescribeScheduledActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScheduledActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.applicationautoscaling#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutScalingPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutScalingPolicyResponse(data, context);
  const response: PutScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutScalingPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "FailedResourceAccessException":
    case "com.amazonaws.applicationautoscaling#FailedResourceAccessException":
      response = {
        ...(await deserializeAws_json1_1FailedResourceAccessExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutScheduledActionResponse(data, context);
  const response: PutScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutScheduledActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.applicationautoscaling#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RegisterScalableTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterScalableTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterScalableTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterScalableTargetResponse(data, context);
  const response: RegisterScalableTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterScalableTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterScalableTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.applicationautoscaling#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.applicationautoscaling#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.applicationautoscaling#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.applicationautoscaling#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1ConcurrentUpdateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentUpdateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentUpdateException(body, context);
  const contents: ConcurrentUpdateException = {
    name: "ConcurrentUpdateException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FailedResourceAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FailedResourceAccessException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FailedResourceAccessException(body, context);
  const contents: FailedResourceAccessException = {
    name: "FailedResourceAccessException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(body, context);
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
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

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ObjectNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ObjectNotFoundException(body, context);
  const contents: ObjectNotFoundException = {
    name: "ObjectNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1CustomizedMetricSpecification = (
  input: CustomizedMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.Dimensions !== undefined &&
      input.Dimensions !== null && { Dimensions: serializeAws_json1_1MetricDimensions(input.Dimensions, context) }),
    ...(input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName }),
    ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
    ...(input.Statistic !== undefined && input.Statistic !== null && { Statistic: input.Statistic }),
    ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
  };
};

const serializeAws_json1_1DeleteScalingPolicyRequest = (
  input: DeleteScalingPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1DeleteScheduledActionRequest = (
  input: DeleteScheduledActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScheduledActionName !== undefined &&
      input.ScheduledActionName !== null && { ScheduledActionName: input.ScheduledActionName }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1DeregisterScalableTargetRequest = (
  input: DeregisterScalableTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1DescribeScalableTargetsRequest = (
  input: DescribeScalableTargetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceIds !== undefined &&
      input.ResourceIds !== null && {
        ResourceIds: serializeAws_json1_1ResourceIdsMaxLen1600(input.ResourceIds, context),
      }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1DescribeScalingActivitiesRequest = (
  input: DescribeScalingActivitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1DescribeScalingPoliciesRequest = (
  input: DescribeScalingPoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PolicyNames !== undefined &&
      input.PolicyNames !== null && {
        PolicyNames: serializeAws_json1_1ResourceIdsMaxLen1600(input.PolicyNames, context),
      }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1DescribeScheduledActionsRequest = (
  input: DescribeScheduledActionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScheduledActionNames !== undefined &&
      input.ScheduledActionNames !== null && {
        ScheduledActionNames: serializeAws_json1_1ResourceIdsMaxLen1600(input.ScheduledActionNames, context),
      }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
  };
};

const serializeAws_json1_1MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1MetricDimensions = (input: MetricDimension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MetricDimension(entry, context);
    });
};

const serializeAws_json1_1PredefinedMetricSpecification = (
  input: PredefinedMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredefinedMetricType !== undefined &&
      input.PredefinedMetricType !== null && { PredefinedMetricType: input.PredefinedMetricType }),
    ...(input.ResourceLabel !== undefined && input.ResourceLabel !== null && { ResourceLabel: input.ResourceLabel }),
  };
};

const serializeAws_json1_1PutScalingPolicyRequest = (input: PutScalingPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
    ...(input.PolicyType !== undefined && input.PolicyType !== null && { PolicyType: input.PolicyType }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.StepScalingPolicyConfiguration !== undefined &&
      input.StepScalingPolicyConfiguration !== null && {
        StepScalingPolicyConfiguration: serializeAws_json1_1StepScalingPolicyConfiguration(
          input.StepScalingPolicyConfiguration,
          context
        ),
      }),
    ...(input.TargetTrackingScalingPolicyConfiguration !== undefined &&
      input.TargetTrackingScalingPolicyConfiguration !== null && {
        TargetTrackingScalingPolicyConfiguration: serializeAws_json1_1TargetTrackingScalingPolicyConfiguration(
          input.TargetTrackingScalingPolicyConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1PutScheduledActionRequest = (
  input: PutScheduledActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ScalableTargetAction !== undefined &&
      input.ScalableTargetAction !== null && {
        ScalableTargetAction: serializeAws_json1_1ScalableTargetAction(input.ScalableTargetAction, context),
      }),
    ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
    ...(input.ScheduledActionName !== undefined &&
      input.ScheduledActionName !== null && { ScheduledActionName: input.ScheduledActionName }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1RegisterScalableTargetRequest = (
  input: RegisterScalableTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity !== undefined && input.MinCapacity !== null && { MinCapacity: input.MinCapacity }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    ...(input.ScalableDimension !== undefined &&
      input.ScalableDimension !== null && { ScalableDimension: input.ScalableDimension }),
    ...(input.ServiceNamespace !== undefined &&
      input.ServiceNamespace !== null && { ServiceNamespace: input.ServiceNamespace }),
    ...(input.SuspendedState !== undefined &&
      input.SuspendedState !== null && {
        SuspendedState: serializeAws_json1_1SuspendedState(input.SuspendedState, context),
      }),
  };
};

const serializeAws_json1_1ResourceIdsMaxLen1600 = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ScalableTargetAction = (input: ScalableTargetAction, context: __SerdeContext): any => {
  return {
    ...(input.MaxCapacity !== undefined && input.MaxCapacity !== null && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity !== undefined && input.MinCapacity !== null && { MinCapacity: input.MinCapacity }),
  };
};

const serializeAws_json1_1StepAdjustment = (input: StepAdjustment, context: __SerdeContext): any => {
  return {
    ...(input.MetricIntervalLowerBound !== undefined &&
      input.MetricIntervalLowerBound !== null && { MetricIntervalLowerBound: input.MetricIntervalLowerBound }),
    ...(input.MetricIntervalUpperBound !== undefined &&
      input.MetricIntervalUpperBound !== null && { MetricIntervalUpperBound: input.MetricIntervalUpperBound }),
    ...(input.ScalingAdjustment !== undefined &&
      input.ScalingAdjustment !== null && { ScalingAdjustment: input.ScalingAdjustment }),
  };
};

const serializeAws_json1_1StepAdjustments = (input: StepAdjustment[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1StepAdjustment(entry, context);
    });
};

const serializeAws_json1_1StepScalingPolicyConfiguration = (
  input: StepScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdjustmentType !== undefined &&
      input.AdjustmentType !== null && { AdjustmentType: input.AdjustmentType }),
    ...(input.Cooldown !== undefined && input.Cooldown !== null && { Cooldown: input.Cooldown }),
    ...(input.MetricAggregationType !== undefined &&
      input.MetricAggregationType !== null && { MetricAggregationType: input.MetricAggregationType }),
    ...(input.MinAdjustmentMagnitude !== undefined &&
      input.MinAdjustmentMagnitude !== null && { MinAdjustmentMagnitude: input.MinAdjustmentMagnitude }),
    ...(input.StepAdjustments !== undefined &&
      input.StepAdjustments !== null && {
        StepAdjustments: serializeAws_json1_1StepAdjustments(input.StepAdjustments, context),
      }),
  };
};

const serializeAws_json1_1SuspendedState = (input: SuspendedState, context: __SerdeContext): any => {
  return {
    ...(input.DynamicScalingInSuspended !== undefined &&
      input.DynamicScalingInSuspended !== null && { DynamicScalingInSuspended: input.DynamicScalingInSuspended }),
    ...(input.DynamicScalingOutSuspended !== undefined &&
      input.DynamicScalingOutSuspended !== null && { DynamicScalingOutSuspended: input.DynamicScalingOutSuspended }),
    ...(input.ScheduledScalingSuspended !== undefined &&
      input.ScheduledScalingSuspended !== null && { ScheduledScalingSuspended: input.ScheduledScalingSuspended }),
  };
};

const serializeAws_json1_1TargetTrackingScalingPolicyConfiguration = (
  input: TargetTrackingScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomizedMetricSpecification !== undefined &&
      input.CustomizedMetricSpecification !== null && {
        CustomizedMetricSpecification: serializeAws_json1_1CustomizedMetricSpecification(
          input.CustomizedMetricSpecification,
          context
        ),
      }),
    ...(input.DisableScaleIn !== undefined &&
      input.DisableScaleIn !== null && { DisableScaleIn: input.DisableScaleIn }),
    ...(input.PredefinedMetricSpecification !== undefined &&
      input.PredefinedMetricSpecification !== null && {
        PredefinedMetricSpecification: serializeAws_json1_1PredefinedMetricSpecification(
          input.PredefinedMetricSpecification,
          context
        ),
      }),
    ...(input.ScaleInCooldown !== undefined &&
      input.ScaleInCooldown !== null && { ScaleInCooldown: input.ScaleInCooldown }),
    ...(input.ScaleOutCooldown !== undefined &&
      input.ScaleOutCooldown !== null && { ScaleOutCooldown: input.ScaleOutCooldown }),
    ...(input.TargetValue !== undefined && input.TargetValue !== null && { TargetValue: input.TargetValue }),
  };
};

const deserializeAws_json1_1Alarm = (output: any, context: __SerdeContext): Alarm => {
  return {
    AlarmARN: output.AlarmARN !== undefined && output.AlarmARN !== null ? output.AlarmARN : undefined,
    AlarmName: output.AlarmName !== undefined && output.AlarmName !== null ? output.AlarmName : undefined,
  } as any;
};

const deserializeAws_json1_1Alarms = (output: any, context: __SerdeContext): Alarm[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Alarm(entry, context);
    });
};

const deserializeAws_json1_1ConcurrentUpdateException = (
  output: any,
  context: __SerdeContext
): ConcurrentUpdateException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1CustomizedMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedMetricSpecification => {
  return {
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1MetricDimensions(output.Dimensions, context)
        : undefined,
    MetricName: output.MetricName !== undefined && output.MetricName !== null ? output.MetricName : undefined,
    Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
    Statistic: output.Statistic !== undefined && output.Statistic !== null ? output.Statistic : undefined,
    Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteScalingPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteScalingPolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteScheduledActionResponse = (
  output: any,
  context: __SerdeContext
): DeleteScheduledActionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeregisterScalableTargetResponse = (
  output: any,
  context: __SerdeContext
): DeregisterScalableTargetResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeScalableTargetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalableTargetsResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalableTargets:
      output.ScalableTargets !== undefined && output.ScalableTargets !== null
        ? deserializeAws_json1_1ScalableTargets(output.ScalableTargets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeScalingActivitiesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingActivitiesResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalingActivities:
      output.ScalingActivities !== undefined && output.ScalingActivities !== null
        ? deserializeAws_json1_1ScalingActivities(output.ScalingActivities, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeScalingPoliciesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingPoliciesResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScalingPolicies:
      output.ScalingPolicies !== undefined && output.ScalingPolicies !== null
        ? deserializeAws_json1_1ScalingPolicies(output.ScalingPolicies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeScheduledActionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeScheduledActionsResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ScheduledActions:
      output.ScheduledActions !== undefined && output.ScheduledActions !== null
        ? deserializeAws_json1_1ScheduledActions(output.ScheduledActions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FailedResourceAccessException = (
  output: any,
  context: __SerdeContext
): FailedResourceAccessException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1MetricDimensions = (output: any, context: __SerdeContext): MetricDimension[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricDimension(entry, context);
    });
};

const deserializeAws_json1_1ObjectNotFoundException = (
  output: any,
  context: __SerdeContext
): ObjectNotFoundException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1PredefinedMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedMetricSpecification => {
  return {
    PredefinedMetricType:
      output.PredefinedMetricType !== undefined && output.PredefinedMetricType !== null
        ? output.PredefinedMetricType
        : undefined,
    ResourceLabel:
      output.ResourceLabel !== undefined && output.ResourceLabel !== null ? output.ResourceLabel : undefined,
  } as any;
};

const deserializeAws_json1_1PutScalingPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutScalingPolicyResponse => {
  return {
    Alarms:
      output.Alarms !== undefined && output.Alarms !== null
        ? deserializeAws_json1_1Alarms(output.Alarms, context)
        : undefined,
    PolicyARN: output.PolicyARN !== undefined && output.PolicyARN !== null ? output.PolicyARN : undefined,
  } as any;
};

const deserializeAws_json1_1PutScheduledActionResponse = (
  output: any,
  context: __SerdeContext
): PutScheduledActionResponse => {
  return {} as any;
};

const deserializeAws_json1_1RegisterScalableTargetResponse = (
  output: any,
  context: __SerdeContext
): RegisterScalableTargetResponse => {
  return {} as any;
};

const deserializeAws_json1_1ScalableTarget = (output: any, context: __SerdeContext): ScalableTarget => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
    MinCapacity: output.MinCapacity !== undefined && output.MinCapacity !== null ? output.MinCapacity : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    SuspendedState:
      output.SuspendedState !== undefined && output.SuspendedState !== null
        ? deserializeAws_json1_1SuspendedState(output.SuspendedState, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ScalableTargetAction = (output: any, context: __SerdeContext): ScalableTargetAction => {
  return {
    MaxCapacity: output.MaxCapacity !== undefined && output.MaxCapacity !== null ? output.MaxCapacity : undefined,
    MinCapacity: output.MinCapacity !== undefined && output.MinCapacity !== null ? output.MinCapacity : undefined,
  } as any;
};

const deserializeAws_json1_1ScalableTargets = (output: any, context: __SerdeContext): ScalableTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalableTarget(entry, context);
    });
};

const deserializeAws_json1_1ScalingActivities = (output: any, context: __SerdeContext): ScalingActivity[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalingActivity(entry, context);
    });
};

const deserializeAws_json1_1ScalingActivity = (output: any, context: __SerdeContext): ScalingActivity => {
  return {
    ActivityId: output.ActivityId !== undefined && output.ActivityId !== null ? output.ActivityId : undefined,
    Cause: output.Cause !== undefined && output.Cause !== null ? output.Cause : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Details: output.Details !== undefined && output.Details !== null ? output.Details : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
  } as any;
};

const deserializeAws_json1_1ScalingPolicies = (output: any, context: __SerdeContext): ScalingPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScalingPolicy(entry, context);
    });
};

const deserializeAws_json1_1ScalingPolicy = (output: any, context: __SerdeContext): ScalingPolicy => {
  return {
    Alarms:
      output.Alarms !== undefined && output.Alarms !== null
        ? deserializeAws_json1_1Alarms(output.Alarms, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    PolicyARN: output.PolicyARN !== undefined && output.PolicyARN !== null ? output.PolicyARN : undefined,
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    StepScalingPolicyConfiguration:
      output.StepScalingPolicyConfiguration !== undefined && output.StepScalingPolicyConfiguration !== null
        ? deserializeAws_json1_1StepScalingPolicyConfiguration(output.StepScalingPolicyConfiguration, context)
        : undefined,
    TargetTrackingScalingPolicyConfiguration:
      output.TargetTrackingScalingPolicyConfiguration !== undefined &&
      output.TargetTrackingScalingPolicyConfiguration !== null
        ? deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration(
            output.TargetTrackingScalingPolicyConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1ScheduledAction = (output: any, context: __SerdeContext): ScheduledAction => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined && output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ScalableTargetAction:
      output.ScalableTargetAction !== undefined && output.ScalableTargetAction !== null
        ? deserializeAws_json1_1ScalableTargetAction(output.ScalableTargetAction, context)
        : undefined,
    Schedule: output.Schedule !== undefined && output.Schedule !== null ? output.Schedule : undefined,
    ScheduledActionARN:
      output.ScheduledActionARN !== undefined && output.ScheduledActionARN !== null
        ? output.ScheduledActionARN
        : undefined,
    ScheduledActionName:
      output.ScheduledActionName !== undefined && output.ScheduledActionName !== null
        ? output.ScheduledActionName
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null ? output.ServiceNamespace : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ScheduledActions = (output: any, context: __SerdeContext): ScheduledAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ScheduledAction(entry, context);
    });
};

const deserializeAws_json1_1StepAdjustment = (output: any, context: __SerdeContext): StepAdjustment => {
  return {
    MetricIntervalLowerBound:
      output.MetricIntervalLowerBound !== undefined && output.MetricIntervalLowerBound !== null
        ? output.MetricIntervalLowerBound
        : undefined,
    MetricIntervalUpperBound:
      output.MetricIntervalUpperBound !== undefined && output.MetricIntervalUpperBound !== null
        ? output.MetricIntervalUpperBound
        : undefined,
    ScalingAdjustment:
      output.ScalingAdjustment !== undefined && output.ScalingAdjustment !== null
        ? output.ScalingAdjustment
        : undefined,
  } as any;
};

const deserializeAws_json1_1StepAdjustments = (output: any, context: __SerdeContext): StepAdjustment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StepAdjustment(entry, context);
    });
};

const deserializeAws_json1_1StepScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): StepScalingPolicyConfiguration => {
  return {
    AdjustmentType:
      output.AdjustmentType !== undefined && output.AdjustmentType !== null ? output.AdjustmentType : undefined,
    Cooldown: output.Cooldown !== undefined && output.Cooldown !== null ? output.Cooldown : undefined,
    MetricAggregationType:
      output.MetricAggregationType !== undefined && output.MetricAggregationType !== null
        ? output.MetricAggregationType
        : undefined,
    MinAdjustmentMagnitude:
      output.MinAdjustmentMagnitude !== undefined && output.MinAdjustmentMagnitude !== null
        ? output.MinAdjustmentMagnitude
        : undefined,
    StepAdjustments:
      output.StepAdjustments !== undefined && output.StepAdjustments !== null
        ? deserializeAws_json1_1StepAdjustments(output.StepAdjustments, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SuspendedState = (output: any, context: __SerdeContext): SuspendedState => {
  return {
    DynamicScalingInSuspended:
      output.DynamicScalingInSuspended !== undefined && output.DynamicScalingInSuspended !== null
        ? output.DynamicScalingInSuspended
        : undefined,
    DynamicScalingOutSuspended:
      output.DynamicScalingOutSuspended !== undefined && output.DynamicScalingOutSuspended !== null
        ? output.DynamicScalingOutSuspended
        : undefined,
    ScheduledScalingSuspended:
      output.ScheduledScalingSuspended !== undefined && output.ScheduledScalingSuspended !== null
        ? output.ScheduledScalingSuspended
        : undefined,
  } as any;
};

const deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingScalingPolicyConfiguration => {
  return {
    CustomizedMetricSpecification:
      output.CustomizedMetricSpecification !== undefined && output.CustomizedMetricSpecification !== null
        ? deserializeAws_json1_1CustomizedMetricSpecification(output.CustomizedMetricSpecification, context)
        : undefined,
    DisableScaleIn:
      output.DisableScaleIn !== undefined && output.DisableScaleIn !== null ? output.DisableScaleIn : undefined,
    PredefinedMetricSpecification:
      output.PredefinedMetricSpecification !== undefined && output.PredefinedMetricSpecification !== null
        ? deserializeAws_json1_1PredefinedMetricSpecification(output.PredefinedMetricSpecification, context)
        : undefined,
    ScaleInCooldown:
      output.ScaleInCooldown !== undefined && output.ScaleInCooldown !== null ? output.ScaleInCooldown : undefined,
    ScaleOutCooldown:
      output.ScaleOutCooldown !== undefined && output.ScaleOutCooldown !== null ? output.ScaleOutCooldown : undefined,
    TargetValue: output.TargetValue !== undefined && output.TargetValue !== null ? output.TargetValue : undefined,
  } as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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
