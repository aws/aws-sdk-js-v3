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
import {
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput,
} from "../commands/PutScalingPolicyCommand";
import {
  PutScheduledActionCommandInput,
  PutScheduledActionCommandOutput,
} from "../commands/PutScheduledActionCommand";
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
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export async function serializeAws_json1_1DeleteScalingPolicyCommand(
  input: DeleteScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AnyScaleFrontendService.DeleteScalingPolicy";
  let body: any = {};
  const wrappedBody: any = {
    DeleteScalingPolicyRequest: serializeAws_json1_1DeleteScalingPolicyRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteScalingPolicy",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DeleteScheduledActionCommand(
  input: DeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AnyScaleFrontendService.DeleteScheduledAction";
  let body: any = {};
  const wrappedBody: any = {
    DeleteScheduledActionRequest: serializeAws_json1_1DeleteScheduledActionRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteScheduledAction",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DeregisterScalableTargetCommand(
  input: DeregisterScalableTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AnyScaleFrontendService.DeregisterScalableTarget";
  let body: any = {};
  const wrappedBody: any = {
    DeregisterScalableTargetRequest: serializeAws_json1_1DeregisterScalableTargetRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeregisterScalableTarget",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeScalableTargetsCommand(
  input: DescribeScalableTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AnyScaleFrontendService.DescribeScalableTargets";
  let body: any = {};
  const wrappedBody: any = {
    DescribeScalableTargetsRequest: serializeAws_json1_1DescribeScalableTargetsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeScalableTargets",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeScalingActivitiesCommand(
  input: DescribeScalingActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AnyScaleFrontendService.DescribeScalingActivities";
  let body: any = {};
  const wrappedBody: any = {
    DescribeScalingActivitiesRequest: serializeAws_json1_1DescribeScalingActivitiesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeScalingActivities",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeScalingPoliciesCommand(
  input: DescribeScalingPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AnyScaleFrontendService.DescribeScalingPolicies";
  let body: any = {};
  const wrappedBody: any = {
    DescribeScalingPoliciesRequest: serializeAws_json1_1DescribeScalingPoliciesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeScalingPolicies",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeScheduledActionsCommand(
  input: DescribeScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AnyScaleFrontendService.DescribeScheduledActions";
  let body: any = {};
  const wrappedBody: any = {
    DescribeScheduledActionsRequest: serializeAws_json1_1DescribeScheduledActionsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeScheduledActions",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1PutScalingPolicyCommand(
  input: PutScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AnyScaleFrontendService.PutScalingPolicy";
  let body: any = {};
  const wrappedBody: any = {
    PutScalingPolicyRequest: serializeAws_json1_1PutScalingPolicyRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutScalingPolicy",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1PutScheduledActionCommand(
  input: PutScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AnyScaleFrontendService.PutScheduledAction";
  let body: any = {};
  const wrappedBody: any = {
    PutScheduledActionRequest: serializeAws_json1_1PutScheduledActionRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutScheduledAction",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1RegisterScalableTargetCommand(
  input: RegisterScalableTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AnyScaleFrontendService.RegisterScalableTarget";
  let body: any = {};
  const wrappedBody: any = {
    RegisterScalableTargetRequest: serializeAws_json1_1RegisterScalableTargetRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RegisterScalableTarget",
    headers: headers,
    body: body,
  });
}

export async function deserializeAws_json1_1DeleteScalingPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteScalingPolicyResponse(data, context);
  const response: DeleteScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteScalingPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteScalingPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteScalingPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
      response = await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.autoscaling.anyscale.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteScheduledActionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteScheduledActionResponse(data, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteScheduledActionResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteScheduledActionCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteScheduledActionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
      response = await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.autoscaling.anyscale.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeregisterScalableTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterScalableTargetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterScalableTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterScalableTargetResponse(data, context);
  const response: DeregisterScalableTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterScalableTargetResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeregisterScalableTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeregisterScalableTargetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
      response = await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.autoscaling.anyscale.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeScalableTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalableTargetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeScalableTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalableTargetsResponse(data, context);
  const response: DescribeScalableTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeScalableTargetsResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeScalableTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeScalableTargetsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.autoscaling.anyscale.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeScalingActivitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeScalingActivitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingActivitiesResponse(data, context);
  const response: DescribeScalingActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeScalingActivitiesResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeScalingActivitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeScalingActivitiesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.autoscaling.anyscale.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeScalingPoliciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPoliciesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeScalingPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingPoliciesResponse(data, context);
  const response: DescribeScalingPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeScalingPoliciesResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeScalingPoliciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeScalingPoliciesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
      break;
    case "FailedResourceAccessException":
    case "com.amazonaws.autoscaling.anyscale.frontend#FailedResourceAccessException":
      response = await deserializeAws_json1_1FailedResourceAccessExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.autoscaling.anyscale.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeScheduledActionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeScheduledActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScheduledActionsResponse(data, context);
  const response: DescribeScheduledActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeScheduledActionsResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeScheduledActionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeScheduledActionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.autoscaling.anyscale.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutScalingPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1PutScalingPolicyResponse(data, context);
  const response: PutScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutScalingPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutScalingPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<PutScalingPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
      break;
    case "FailedResourceAccessException":
    case "com.amazonaws.autoscaling.anyscale.frontend#FailedResourceAccessException":
      response = await deserializeAws_json1_1FailedResourceAccessExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.autoscaling.anyscale.frontend#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
      response = await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.autoscaling.anyscale.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutScheduledActionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledActionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutScheduledActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1PutScheduledActionResponse(data, context);
  const response: PutScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutScheduledActionResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutScheduledActionCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<PutScheduledActionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.autoscaling.anyscale.frontend#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
      response = await deserializeAws_json1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.autoscaling.anyscale.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RegisterScalableTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterScalableTargetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterScalableTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterScalableTargetResponse(data, context);
  const response: RegisterScalableTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterScalableTargetResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterScalableTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<RegisterScalableTargetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.autoscaling.anyscale.frontend#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.autoscaling.anyscale.frontend#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1ConcurrentUpdateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConcurrentUpdateException> => {
  const deserialized: any = deserializeAws_json1_1ConcurrentUpdateException(output.body, context);
  const contents: ConcurrentUpdateException = {
    __type: "ConcurrentUpdateException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1FailedResourceAccessExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FailedResourceAccessException> => {
  const deserialized: any = deserializeAws_json1_1FailedResourceAccessException(output.body, context);
  const contents: FailedResourceAccessException = {
    __type: "FailedResourceAccessException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const deserialized: any = deserializeAws_json1_1InternalServiceException(output.body, context);
  const contents: InternalServiceException = {
    __type: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(output.body, context);
  const contents: InvalidNextTokenException = {
    __type: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(output.body, context);
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ObjectNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ObjectNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ObjectNotFoundException(output.body, context);
  const contents: ObjectNotFoundException = {
    __type: "ObjectNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const deserialized: any = deserializeAws_json1_1ValidationException(output.body, context);
  const contents: ValidationException = {
    __type: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1CustomizedMetricSpecification = (
  input: CustomizedMetricSpecification,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Dimensions !== undefined) {
    bodyParams['Dimensions'] = serializeAws_json1_1MetricDimensions(input.Dimensions, context);
  }
  if (input.MetricName !== undefined) {
    bodyParams['MetricName'] = input.MetricName;
  }
  if (input.Namespace !== undefined) {
    bodyParams['Namespace'] = input.Namespace;
  }
  if (input.Statistic !== undefined) {
    bodyParams['Statistic'] = input.Statistic;
  }
  if (input.Unit !== undefined) {
    bodyParams['Unit'] = input.Unit;
  }
  return bodyParams;
}

const serializeAws_json1_1DeleteScalingPolicyRequest = (
  input: DeleteScalingPolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PolicyName !== undefined) {
    bodyParams['PolicyName'] = input.PolicyName;
  }
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams['ScalableDimension'] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams['ServiceNamespace'] = input.ServiceNamespace;
  }
  return bodyParams;
}

const serializeAws_json1_1DeleteScheduledActionRequest = (
  input: DeleteScheduledActionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams['ScalableDimension'] = input.ScalableDimension;
  }
  if (input.ScheduledActionName !== undefined) {
    bodyParams['ScheduledActionName'] = input.ScheduledActionName;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams['ServiceNamespace'] = input.ServiceNamespace;
  }
  return bodyParams;
}

const serializeAws_json1_1DeregisterScalableTargetRequest = (
  input: DeregisterScalableTargetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams['ScalableDimension'] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams['ServiceNamespace'] = input.ServiceNamespace;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeScalableTargetsRequest = (
  input: DescribeScalableTargetsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.ResourceIds !== undefined) {
    bodyParams['ResourceIds'] = serializeAws_json1_1ResourceIdsMaxLen1600(input.ResourceIds, context);
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams['ScalableDimension'] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams['ServiceNamespace'] = input.ServiceNamespace;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeScalingActivitiesRequest = (
  input: DescribeScalingActivitiesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams['ScalableDimension'] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams['ServiceNamespace'] = input.ServiceNamespace;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeScalingPoliciesRequest = (
  input: DescribeScalingPoliciesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.PolicyNames !== undefined) {
    bodyParams['PolicyNames'] = serializeAws_json1_1ResourceIdsMaxLen1600(input.PolicyNames, context);
  }
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams['ScalableDimension'] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams['ServiceNamespace'] = input.ServiceNamespace;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeScheduledActionsRequest = (
  input: DescribeScheduledActionsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams['ScalableDimension'] = input.ScalableDimension;
  }
  if (input.ScheduledActionNames !== undefined) {
    bodyParams['ScheduledActionNames'] = serializeAws_json1_1ResourceIdsMaxLen1600(input.ScheduledActionNames, context);
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams['ServiceNamespace'] = input.ServiceNamespace;
  }
  return bodyParams;
}

const serializeAws_json1_1MetricDimension = (
  input: MetricDimension,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams['Name'] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams['Value'] = input.Value;
  }
  return bodyParams;
}

const serializeAws_json1_1MetricDimensions = (
  input: Array<MetricDimension>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1MetricDimension(entry, context)
  );
}

const serializeAws_json1_1PredefinedMetricSpecification = (
  input: PredefinedMetricSpecification,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PredefinedMetricType !== undefined) {
    bodyParams['PredefinedMetricType'] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel !== undefined) {
    bodyParams['ResourceLabel'] = input.ResourceLabel;
  }
  return bodyParams;
}

const serializeAws_json1_1PutScalingPolicyRequest = (
  input: PutScalingPolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PolicyName !== undefined) {
    bodyParams['PolicyName'] = input.PolicyName;
  }
  if (input.PolicyType !== undefined) {
    bodyParams['PolicyType'] = input.PolicyType;
  }
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams['ScalableDimension'] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams['ServiceNamespace'] = input.ServiceNamespace;
  }
  if (input.StepScalingPolicyConfiguration !== undefined) {
    bodyParams['StepScalingPolicyConfiguration'] = serializeAws_json1_1StepScalingPolicyConfiguration(input.StepScalingPolicyConfiguration, context);
  }
  if (input.TargetTrackingScalingPolicyConfiguration !== undefined) {
    bodyParams['TargetTrackingScalingPolicyConfiguration'] = serializeAws_json1_1TargetTrackingScalingPolicyConfiguration(input.TargetTrackingScalingPolicyConfiguration, context);
  }
  return bodyParams;
}

const serializeAws_json1_1PutScheduledActionRequest = (
  input: PutScheduledActionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams['EndTime'] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams['ScalableDimension'] = input.ScalableDimension;
  }
  if (input.ScalableTargetAction !== undefined) {
    bodyParams['ScalableTargetAction'] = serializeAws_json1_1ScalableTargetAction(input.ScalableTargetAction, context);
  }
  if (input.Schedule !== undefined) {
    bodyParams['Schedule'] = input.Schedule;
  }
  if (input.ScheduledActionName !== undefined) {
    bodyParams['ScheduledActionName'] = input.ScheduledActionName;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams['ServiceNamespace'] = input.ServiceNamespace;
  }
  if (input.StartTime !== undefined) {
    bodyParams['StartTime'] = Math.round(input.StartTime.getTime() / 1000);
  }
  return bodyParams;
}

const serializeAws_json1_1RegisterScalableTargetRequest = (
  input: RegisterScalableTargetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxCapacity !== undefined) {
    bodyParams['MaxCapacity'] = input.MaxCapacity;
  }
  if (input.MinCapacity !== undefined) {
    bodyParams['MinCapacity'] = input.MinCapacity;
  }
  if (input.ResourceId !== undefined) {
    bodyParams['ResourceId'] = input.ResourceId;
  }
  if (input.RoleARN !== undefined) {
    bodyParams['RoleARN'] = input.RoleARN;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams['ScalableDimension'] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams['ServiceNamespace'] = input.ServiceNamespace;
  }
  if (input.SuspendedState !== undefined) {
    bodyParams['SuspendedState'] = serializeAws_json1_1SuspendedState(input.SuspendedState, context);
  }
  return bodyParams;
}

const serializeAws_json1_1ResourceIdsMaxLen1600 = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1ScalableTargetAction = (
  input: ScalableTargetAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxCapacity !== undefined) {
    bodyParams['MaxCapacity'] = input.MaxCapacity;
  }
  if (input.MinCapacity !== undefined) {
    bodyParams['MinCapacity'] = input.MinCapacity;
  }
  return bodyParams;
}

const serializeAws_json1_1StepAdjustment = (
  input: StepAdjustment,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MetricIntervalLowerBound !== undefined) {
    bodyParams['MetricIntervalLowerBound'] = input.MetricIntervalLowerBound;
  }
  if (input.MetricIntervalUpperBound !== undefined) {
    bodyParams['MetricIntervalUpperBound'] = input.MetricIntervalUpperBound;
  }
  if (input.ScalingAdjustment !== undefined) {
    bodyParams['ScalingAdjustment'] = input.ScalingAdjustment;
  }
  return bodyParams;
}

const serializeAws_json1_1StepAdjustments = (
  input: Array<StepAdjustment>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1StepAdjustment(entry, context)
  );
}

const serializeAws_json1_1StepScalingPolicyConfiguration = (
  input: StepScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AdjustmentType !== undefined) {
    bodyParams['AdjustmentType'] = input.AdjustmentType;
  }
  if (input.Cooldown !== undefined) {
    bodyParams['Cooldown'] = input.Cooldown;
  }
  if (input.MetricAggregationType !== undefined) {
    bodyParams['MetricAggregationType'] = input.MetricAggregationType;
  }
  if (input.MinAdjustmentMagnitude !== undefined) {
    bodyParams['MinAdjustmentMagnitude'] = input.MinAdjustmentMagnitude;
  }
  if (input.StepAdjustments !== undefined) {
    bodyParams['StepAdjustments'] = serializeAws_json1_1StepAdjustments(input.StepAdjustments, context);
  }
  return bodyParams;
}

const serializeAws_json1_1SuspendedState = (
  input: SuspendedState,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DynamicScalingInSuspended !== undefined) {
    bodyParams['DynamicScalingInSuspended'] = input.DynamicScalingInSuspended;
  }
  if (input.DynamicScalingOutSuspended !== undefined) {
    bodyParams['DynamicScalingOutSuspended'] = input.DynamicScalingOutSuspended;
  }
  if (input.ScheduledScalingSuspended !== undefined) {
    bodyParams['ScheduledScalingSuspended'] = input.ScheduledScalingSuspended;
  }
  return bodyParams;
}

const serializeAws_json1_1TargetTrackingScalingPolicyConfiguration = (
  input: TargetTrackingScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CustomizedMetricSpecification !== undefined) {
    bodyParams['CustomizedMetricSpecification'] = serializeAws_json1_1CustomizedMetricSpecification(input.CustomizedMetricSpecification, context);
  }
  if (input.DisableScaleIn !== undefined) {
    bodyParams['DisableScaleIn'] = input.DisableScaleIn;
  }
  if (input.PredefinedMetricSpecification !== undefined) {
    bodyParams['PredefinedMetricSpecification'] = serializeAws_json1_1PredefinedMetricSpecification(input.PredefinedMetricSpecification, context);
  }
  if (input.ScaleInCooldown !== undefined) {
    bodyParams['ScaleInCooldown'] = input.ScaleInCooldown;
  }
  if (input.ScaleOutCooldown !== undefined) {
    bodyParams['ScaleOutCooldown'] = input.ScaleOutCooldown;
  }
  if (input.TargetValue !== undefined) {
    bodyParams['TargetValue'] = input.TargetValue;
  }
  return bodyParams;
}

const deserializeAws_json1_1Alarm = (
  output: any,
  context: __SerdeContext
): Alarm => {
  let contents: any = {
    __type: "Alarm",
    AlarmARN: undefined,
    AlarmName: undefined,
  };
  if (output.AlarmARN !== undefined) {
    contents.AlarmARN = output.AlarmARN;
  }
  if (output.AlarmName !== undefined) {
    contents.AlarmName = output.AlarmName;
  }
  return contents;
}

const deserializeAws_json1_1Alarms = (
  output: any,
  context: __SerdeContext
): Array<Alarm> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Alarm(entry, context)
  );
}

const deserializeAws_json1_1ConcurrentUpdateException = (
  output: any,
  context: __SerdeContext
): ConcurrentUpdateException => {
  let contents: any = {
    __type: "ConcurrentUpdateException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1CustomizedMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedMetricSpecification => {
  let contents: any = {
    __type: "CustomizedMetricSpecification",
    Dimensions: undefined,
    MetricName: undefined,
    Namespace: undefined,
    Statistic: undefined,
    Unit: undefined,
  };
  if (output.Dimensions !== undefined) {
    contents.Dimensions = deserializeAws_json1_1MetricDimensions(output.Dimensions, context);
  }
  if (output.MetricName !== undefined) {
    contents.MetricName = output.MetricName;
  }
  if (output.Namespace !== undefined) {
    contents.Namespace = output.Namespace;
  }
  if (output.Statistic !== undefined) {
    contents.Statistic = output.Statistic;
  }
  if (output.Unit !== undefined) {
    contents.Unit = output.Unit;
  }
  return contents;
}

const deserializeAws_json1_1DeleteScalingPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteScalingPolicyResponse => {
  let contents: any = {
    __type: "DeleteScalingPolicyResponse",
  };
  return contents;
}

const deserializeAws_json1_1DeleteScheduledActionResponse = (
  output: any,
  context: __SerdeContext
): DeleteScheduledActionResponse => {
  let contents: any = {
    __type: "DeleteScheduledActionResponse",
  };
  return contents;
}

const deserializeAws_json1_1DeregisterScalableTargetResponse = (
  output: any,
  context: __SerdeContext
): DeregisterScalableTargetResponse => {
  let contents: any = {
    __type: "DeregisterScalableTargetResponse",
  };
  return contents;
}

const deserializeAws_json1_1DescribeScalableTargetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalableTargetsResponse => {
  let contents: any = {
    __type: "DescribeScalableTargetsResponse",
    NextToken: undefined,
    ScalableTargets: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.ScalableTargets !== undefined) {
    contents.ScalableTargets = deserializeAws_json1_1ScalableTargets(output.ScalableTargets, context);
  }
  return contents;
}

const deserializeAws_json1_1DescribeScalingActivitiesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingActivitiesResponse => {
  let contents: any = {
    __type: "DescribeScalingActivitiesResponse",
    NextToken: undefined,
    ScalingActivities: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.ScalingActivities !== undefined) {
    contents.ScalingActivities = deserializeAws_json1_1ScalingActivities(output.ScalingActivities, context);
  }
  return contents;
}

const deserializeAws_json1_1DescribeScalingPoliciesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingPoliciesResponse => {
  let contents: any = {
    __type: "DescribeScalingPoliciesResponse",
    NextToken: undefined,
    ScalingPolicies: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.ScalingPolicies !== undefined) {
    contents.ScalingPolicies = deserializeAws_json1_1ScalingPolicies(output.ScalingPolicies, context);
  }
  return contents;
}

const deserializeAws_json1_1DescribeScheduledActionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeScheduledActionsResponse => {
  let contents: any = {
    __type: "DescribeScheduledActionsResponse",
    NextToken: undefined,
    ScheduledActions: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.ScheduledActions !== undefined) {
    contents.ScheduledActions = deserializeAws_json1_1ScheduledActions(output.ScheduledActions, context);
  }
  return contents;
}

const deserializeAws_json1_1FailedResourceAccessException = (
  output: any,
  context: __SerdeContext
): FailedResourceAccessException => {
  let contents: any = {
    __type: "FailedResourceAccessException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  let contents: any = {
    __type: "InternalServiceException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1MetricDimension = (
  output: any,
  context: __SerdeContext
): MetricDimension => {
  let contents: any = {
    __type: "MetricDimension",
    Name: undefined,
    Value: undefined,
  };
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
}

const deserializeAws_json1_1MetricDimensions = (
  output: any,
  context: __SerdeContext
): Array<MetricDimension> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricDimension(entry, context)
  );
}

const deserializeAws_json1_1ObjectNotFoundException = (
  output: any,
  context: __SerdeContext
): ObjectNotFoundException => {
  let contents: any = {
    __type: "ObjectNotFoundException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1PredefinedMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedMetricSpecification => {
  let contents: any = {
    __type: "PredefinedMetricSpecification",
    PredefinedMetricType: undefined,
    ResourceLabel: undefined,
  };
  if (output.PredefinedMetricType !== undefined) {
    contents.PredefinedMetricType = output.PredefinedMetricType;
  }
  if (output.ResourceLabel !== undefined) {
    contents.ResourceLabel = output.ResourceLabel;
  }
  return contents;
}

const deserializeAws_json1_1PutScalingPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutScalingPolicyResponse => {
  let contents: any = {
    __type: "PutScalingPolicyResponse",
    Alarms: undefined,
    PolicyARN: undefined,
  };
  if (output.Alarms !== undefined) {
    contents.Alarms = deserializeAws_json1_1Alarms(output.Alarms, context);
  }
  if (output.PolicyARN !== undefined) {
    contents.PolicyARN = output.PolicyARN;
  }
  return contents;
}

const deserializeAws_json1_1PutScheduledActionResponse = (
  output: any,
  context: __SerdeContext
): PutScheduledActionResponse => {
  let contents: any = {
    __type: "PutScheduledActionResponse",
  };
  return contents;
}

const deserializeAws_json1_1RegisterScalableTargetResponse = (
  output: any,
  context: __SerdeContext
): RegisterScalableTargetResponse => {
  let contents: any = {
    __type: "RegisterScalableTargetResponse",
  };
  return contents;
}

const deserializeAws_json1_1ScalableTarget = (
  output: any,
  context: __SerdeContext
): ScalableTarget => {
  let contents: any = {
    __type: "ScalableTarget",
    CreationTime: undefined,
    MaxCapacity: undefined,
    MinCapacity: undefined,
    ResourceId: undefined,
    RoleARN: undefined,
    ScalableDimension: undefined,
    ServiceNamespace: undefined,
    SuspendedState: undefined,
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(output.CreationTime % 1 != 0 ? Math.round(output.CreationTime * 1000) : output.CreationTime);
  }
  if (output.MaxCapacity !== undefined) {
    contents.MaxCapacity = output.MaxCapacity;
  }
  if (output.MinCapacity !== undefined) {
    contents.MinCapacity = output.MinCapacity;
  }
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.RoleARN !== undefined) {
    contents.RoleARN = output.RoleARN;
  }
  if (output.ScalableDimension !== undefined) {
    contents.ScalableDimension = output.ScalableDimension;
  }
  if (output.ServiceNamespace !== undefined) {
    contents.ServiceNamespace = output.ServiceNamespace;
  }
  if (output.SuspendedState !== undefined) {
    contents.SuspendedState = deserializeAws_json1_1SuspendedState(output.SuspendedState, context);
  }
  return contents;
}

const deserializeAws_json1_1ScalableTargetAction = (
  output: any,
  context: __SerdeContext
): ScalableTargetAction => {
  let contents: any = {
    __type: "ScalableTargetAction",
    MaxCapacity: undefined,
    MinCapacity: undefined,
  };
  if (output.MaxCapacity !== undefined) {
    contents.MaxCapacity = output.MaxCapacity;
  }
  if (output.MinCapacity !== undefined) {
    contents.MinCapacity = output.MinCapacity;
  }
  return contents;
}

const deserializeAws_json1_1ScalableTargets = (
  output: any,
  context: __SerdeContext
): Array<ScalableTarget> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalableTarget(entry, context)
  );
}

const deserializeAws_json1_1ScalingActivities = (
  output: any,
  context: __SerdeContext
): Array<ScalingActivity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingActivity(entry, context)
  );
}

const deserializeAws_json1_1ScalingActivity = (
  output: any,
  context: __SerdeContext
): ScalingActivity => {
  let contents: any = {
    __type: "ScalingActivity",
    ActivityId: undefined,
    Cause: undefined,
    Description: undefined,
    Details: undefined,
    EndTime: undefined,
    ResourceId: undefined,
    ScalableDimension: undefined,
    ServiceNamespace: undefined,
    StartTime: undefined,
    StatusCode: undefined,
    StatusMessage: undefined,
  };
  if (output.ActivityId !== undefined) {
    contents.ActivityId = output.ActivityId;
  }
  if (output.Cause !== undefined) {
    contents.Cause = output.Cause;
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.Details !== undefined) {
    contents.Details = output.Details;
  }
  if (output.EndTime !== undefined) {
    contents.EndTime = new Date(output.EndTime % 1 != 0 ? Math.round(output.EndTime * 1000) : output.EndTime);
  }
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.ScalableDimension !== undefined) {
    contents.ScalableDimension = output.ScalableDimension;
  }
  if (output.ServiceNamespace !== undefined) {
    contents.ServiceNamespace = output.ServiceNamespace;
  }
  if (output.StartTime !== undefined) {
    contents.StartTime = new Date(output.StartTime % 1 != 0 ? Math.round(output.StartTime * 1000) : output.StartTime);
  }
  if (output.StatusCode !== undefined) {
    contents.StatusCode = output.StatusCode;
  }
  if (output.StatusMessage !== undefined) {
    contents.StatusMessage = output.StatusMessage;
  }
  return contents;
}

const deserializeAws_json1_1ScalingPolicies = (
  output: any,
  context: __SerdeContext
): Array<ScalingPolicy> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingPolicy(entry, context)
  );
}

const deserializeAws_json1_1ScalingPolicy = (
  output: any,
  context: __SerdeContext
): ScalingPolicy => {
  let contents: any = {
    __type: "ScalingPolicy",
    Alarms: undefined,
    CreationTime: undefined,
    PolicyARN: undefined,
    PolicyName: undefined,
    PolicyType: undefined,
    ResourceId: undefined,
    ScalableDimension: undefined,
    ServiceNamespace: undefined,
    StepScalingPolicyConfiguration: undefined,
    TargetTrackingScalingPolicyConfiguration: undefined,
  };
  if (output.Alarms !== undefined) {
    contents.Alarms = deserializeAws_json1_1Alarms(output.Alarms, context);
  }
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(output.CreationTime % 1 != 0 ? Math.round(output.CreationTime * 1000) : output.CreationTime);
  }
  if (output.PolicyARN !== undefined) {
    contents.PolicyARN = output.PolicyARN;
  }
  if (output.PolicyName !== undefined) {
    contents.PolicyName = output.PolicyName;
  }
  if (output.PolicyType !== undefined) {
    contents.PolicyType = output.PolicyType;
  }
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.ScalableDimension !== undefined) {
    contents.ScalableDimension = output.ScalableDimension;
  }
  if (output.ServiceNamespace !== undefined) {
    contents.ServiceNamespace = output.ServiceNamespace;
  }
  if (output.StepScalingPolicyConfiguration !== undefined) {
    contents.StepScalingPolicyConfiguration = deserializeAws_json1_1StepScalingPolicyConfiguration(output.StepScalingPolicyConfiguration, context);
  }
  if (output.TargetTrackingScalingPolicyConfiguration !== undefined) {
    contents.TargetTrackingScalingPolicyConfiguration = deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration(output.TargetTrackingScalingPolicyConfiguration, context);
  }
  return contents;
}

const deserializeAws_json1_1ScheduledAction = (
  output: any,
  context: __SerdeContext
): ScheduledAction => {
  let contents: any = {
    __type: "ScheduledAction",
    CreationTime: undefined,
    EndTime: undefined,
    ResourceId: undefined,
    ScalableDimension: undefined,
    ScalableTargetAction: undefined,
    Schedule: undefined,
    ScheduledActionARN: undefined,
    ScheduledActionName: undefined,
    ServiceNamespace: undefined,
    StartTime: undefined,
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(output.CreationTime % 1 != 0 ? Math.round(output.CreationTime * 1000) : output.CreationTime);
  }
  if (output.EndTime !== undefined) {
    contents.EndTime = new Date(output.EndTime % 1 != 0 ? Math.round(output.EndTime * 1000) : output.EndTime);
  }
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.ScalableDimension !== undefined) {
    contents.ScalableDimension = output.ScalableDimension;
  }
  if (output.ScalableTargetAction !== undefined) {
    contents.ScalableTargetAction = deserializeAws_json1_1ScalableTargetAction(output.ScalableTargetAction, context);
  }
  if (output.Schedule !== undefined) {
    contents.Schedule = output.Schedule;
  }
  if (output.ScheduledActionARN !== undefined) {
    contents.ScheduledActionARN = output.ScheduledActionARN;
  }
  if (output.ScheduledActionName !== undefined) {
    contents.ScheduledActionName = output.ScheduledActionName;
  }
  if (output.ServiceNamespace !== undefined) {
    contents.ServiceNamespace = output.ServiceNamespace;
  }
  if (output.StartTime !== undefined) {
    contents.StartTime = new Date(output.StartTime % 1 != 0 ? Math.round(output.StartTime * 1000) : output.StartTime);
  }
  return contents;
}

const deserializeAws_json1_1ScheduledActions = (
  output: any,
  context: __SerdeContext
): Array<ScheduledAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScheduledAction(entry, context)
  );
}

const deserializeAws_json1_1StepAdjustment = (
  output: any,
  context: __SerdeContext
): StepAdjustment => {
  let contents: any = {
    __type: "StepAdjustment",
    MetricIntervalLowerBound: undefined,
    MetricIntervalUpperBound: undefined,
    ScalingAdjustment: undefined,
  };
  if (output.MetricIntervalLowerBound !== undefined) {
    contents.MetricIntervalLowerBound = output.MetricIntervalLowerBound;
  }
  if (output.MetricIntervalUpperBound !== undefined) {
    contents.MetricIntervalUpperBound = output.MetricIntervalUpperBound;
  }
  if (output.ScalingAdjustment !== undefined) {
    contents.ScalingAdjustment = output.ScalingAdjustment;
  }
  return contents;
}

const deserializeAws_json1_1StepAdjustments = (
  output: any,
  context: __SerdeContext
): Array<StepAdjustment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StepAdjustment(entry, context)
  );
}

const deserializeAws_json1_1StepScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): StepScalingPolicyConfiguration => {
  let contents: any = {
    __type: "StepScalingPolicyConfiguration",
    AdjustmentType: undefined,
    Cooldown: undefined,
    MetricAggregationType: undefined,
    MinAdjustmentMagnitude: undefined,
    StepAdjustments: undefined,
  };
  if (output.AdjustmentType !== undefined) {
    contents.AdjustmentType = output.AdjustmentType;
  }
  if (output.Cooldown !== undefined) {
    contents.Cooldown = output.Cooldown;
  }
  if (output.MetricAggregationType !== undefined) {
    contents.MetricAggregationType = output.MetricAggregationType;
  }
  if (output.MinAdjustmentMagnitude !== undefined) {
    contents.MinAdjustmentMagnitude = output.MinAdjustmentMagnitude;
  }
  if (output.StepAdjustments !== undefined) {
    contents.StepAdjustments = deserializeAws_json1_1StepAdjustments(output.StepAdjustments, context);
  }
  return contents;
}

const deserializeAws_json1_1SuspendedState = (
  output: any,
  context: __SerdeContext
): SuspendedState => {
  let contents: any = {
    __type: "SuspendedState",
    DynamicScalingInSuspended: undefined,
    DynamicScalingOutSuspended: undefined,
    ScheduledScalingSuspended: undefined,
  };
  if (output.DynamicScalingInSuspended !== undefined) {
    contents.DynamicScalingInSuspended = output.DynamicScalingInSuspended;
  }
  if (output.DynamicScalingOutSuspended !== undefined) {
    contents.DynamicScalingOutSuspended = output.DynamicScalingOutSuspended;
  }
  if (output.ScheduledScalingSuspended !== undefined) {
    contents.ScheduledScalingSuspended = output.ScheduledScalingSuspended;
  }
  return contents;
}

const deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingScalingPolicyConfiguration => {
  let contents: any = {
    __type: "TargetTrackingScalingPolicyConfiguration",
    CustomizedMetricSpecification: undefined,
    DisableScaleIn: undefined,
    PredefinedMetricSpecification: undefined,
    ScaleInCooldown: undefined,
    ScaleOutCooldown: undefined,
    TargetValue: undefined,
  };
  if (output.CustomizedMetricSpecification !== undefined) {
    contents.CustomizedMetricSpecification = deserializeAws_json1_1CustomizedMetricSpecification(output.CustomizedMetricSpecification, context);
  }
  if (output.DisableScaleIn !== undefined) {
    contents.DisableScaleIn = output.DisableScaleIn;
  }
  if (output.PredefinedMetricSpecification !== undefined) {
    contents.PredefinedMetricSpecification = deserializeAws_json1_1PredefinedMetricSpecification(output.PredefinedMetricSpecification, context);
  }
  if (output.ScaleInCooldown !== undefined) {
    contents.ScaleInCooldown = output.ScaleInCooldown;
  }
  if (output.ScaleOutCooldown !== undefined) {
    contents.ScaleOutCooldown = output.ScaleOutCooldown;
  }
  if (output.TargetValue !== undefined) {
    contents.TargetValue = output.TargetValue;
  }
  return contents;
}

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  let contents: any = {
    __type: "ValidationException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

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
