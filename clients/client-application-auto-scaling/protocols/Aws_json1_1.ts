import {
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput
} from "../commands/DeleteScalingPolicyCommand";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput
} from "../commands/DeleteScheduledActionCommand";
import {
  DeregisterScalableTargetCommandInput,
  DeregisterScalableTargetCommandOutput
} from "../commands/DeregisterScalableTargetCommand";
import {
  DescribeScalableTargetsCommandInput,
  DescribeScalableTargetsCommandOutput
} from "../commands/DescribeScalableTargetsCommand";
import {
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput
} from "../commands/DescribeScalingActivitiesCommand";
import {
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput
} from "../commands/DescribeScalingPoliciesCommand";
import {
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput
} from "../commands/DescribeScheduledActionsCommand";
import {
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput
} from "../commands/PutScalingPolicyCommand";
import {
  PutScheduledActionCommandInput,
  PutScheduledActionCommandOutput
} from "../commands/PutScheduledActionCommand";
import {
  RegisterScalableTargetCommandInput,
  RegisterScalableTargetCommandOutput
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
  ValidationException
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

export async function serializeAws_json1_1DeleteScalingPolicyCommand(
  input: DeleteScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AnyScaleFrontendService.DeleteScalingPolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteScalingPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteScheduledActionCommand(
  input: DeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AnyScaleFrontendService.DeleteScheduledAction";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteScheduledActionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeregisterScalableTargetCommand(
  input: DeregisterScalableTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AnyScaleFrontendService.DeregisterScalableTarget";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterScalableTargetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeScalableTargetsCommand(
  input: DescribeScalableTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AnyScaleFrontendService.DescribeScalableTargets";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeScalableTargetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeScalingActivitiesCommand(
  input: DescribeScalingActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AnyScaleFrontendService.DescribeScalingActivities";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeScalingActivitiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeScalingPoliciesCommand(
  input: DescribeScalingPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AnyScaleFrontendService.DescribeScalingPolicies";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeScalingPoliciesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeScheduledActionsCommand(
  input: DescribeScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AnyScaleFrontendService.DescribeScheduledActions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeScheduledActionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutScalingPolicyCommand(
  input: PutScalingPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AnyScaleFrontendService.PutScalingPolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutScalingPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutScheduledActionCommand(
  input: PutScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AnyScaleFrontendService.PutScheduledAction";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutScheduledActionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RegisterScalableTargetCommand(
  input: RegisterScalableTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AnyScaleFrontendService.RegisterScalableTarget";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterScalableTargetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1DeleteScalingPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteScalingPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteScalingPolicyResponse(data, context);
  const response: DeleteScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteScalingPolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteScalingPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPolicyCommandOutput> {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1DeleteScheduledActionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteScheduledActionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteScheduledActionResponse(data, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteScheduledActionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteScheduledActionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1DeregisterScalableTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterScalableTargetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterScalableTargetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterScalableTargetResponse(
    data,
    context
  );
  const response: DeregisterScalableTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterScalableTargetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeregisterScalableTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterScalableTargetCommandOutput> {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1DescribeScalableTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalableTargetsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeScalableTargetsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalableTargetsResponse(
    data,
    context
  );
  const response: DescribeScalableTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeScalableTargetsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeScalableTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalableTargetsCommandOutput> {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1DescribeScalingActivitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeScalingActivitiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingActivitiesResponse(
    data,
    context
  );
  const response: DescribeScalingActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeScalingActivitiesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeScalingActivitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingActivitiesCommandOutput> {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1DescribeScalingPoliciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPoliciesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeScalingPoliciesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingPoliciesResponse(
    data,
    context
  );
  const response: DescribeScalingPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeScalingPoliciesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeScalingPoliciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPoliciesCommandOutput> {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedResourceAccessException":
    case "com.amazonaws.autoscaling.anyscale.frontend#FailedResourceAccessException":
      response = {
        ...(await deserializeAws_json1_1FailedResourceAccessExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1DescribeScheduledActionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeScheduledActionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScheduledActionsResponse(
    data,
    context
  );
  const response: DescribeScheduledActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeScheduledActionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeScheduledActionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledActionsCommandOutput> {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1PutScalingPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutScalingPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutScalingPolicyResponse(data, context);
  const response: PutScalingPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutScalingPolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutScalingPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScalingPolicyCommandOutput> {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FailedResourceAccessException":
    case "com.amazonaws.autoscaling.anyscale.frontend#FailedResourceAccessException":
      response = {
        ...(await deserializeAws_json1_1FailedResourceAccessExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.autoscaling.anyscale.frontend#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1PutScheduledActionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledActionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutScheduledActionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutScheduledActionResponse(data, context);
  const response: PutScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutScheduledActionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutScheduledActionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutScheduledActionCommandOutput> {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.autoscaling.anyscale.frontend#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export async function deserializeAws_json1_1RegisterScalableTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterScalableTargetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterScalableTargetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterScalableTargetResponse(
    data,
    context
  );
  const response: RegisterScalableTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterScalableTargetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterScalableTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterScalableTargetCommandOutput> {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.autoscaling.anyscale.frontend#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.frontend#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

const deserializeAws_json1_1ConcurrentUpdateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentUpdateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentUpdateException(
    body,
    context
  );
  const contents: ConcurrentUpdateException = {
    name: "ConcurrentUpdateException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1FailedResourceAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FailedResourceAccessException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FailedResourceAccessException(
    body,
    context
  );
  const contents: FailedResourceAccessException = {
    name: "FailedResourceAccessException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(
    body,
    context
  );
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
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

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ObjectNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ObjectNotFoundException(
    body,
    context
  );
  const contents: ObjectNotFoundException = {
    name: "ObjectNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(
    body,
    context
  );
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CustomizedMetricSpecification = (
  input: CustomizedMetricSpecification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Dimensions !== undefined) {
    bodyParams["Dimensions"] = serializeAws_json1_1MetricDimensions(
      input.Dimensions,
      context
    );
  }
  if (input.MetricName !== undefined) {
    bodyParams["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined) {
    bodyParams["Namespace"] = input.Namespace;
  }
  if (input.Statistic !== undefined) {
    bodyParams["Statistic"] = input.Statistic;
  }
  if (input.Unit !== undefined) {
    bodyParams["Unit"] = input.Unit;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteScalingPolicyRequest = (
  input: DeleteScalingPolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PolicyName !== undefined) {
    bodyParams["PolicyName"] = input.PolicyName;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams["ScalableDimension"] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams["ServiceNamespace"] = input.ServiceNamespace;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteScheduledActionRequest = (
  input: DeleteScheduledActionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams["ScalableDimension"] = input.ScalableDimension;
  }
  if (input.ScheduledActionName !== undefined) {
    bodyParams["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams["ServiceNamespace"] = input.ServiceNamespace;
  }
  return bodyParams;
};

const serializeAws_json1_1DeregisterScalableTargetRequest = (
  input: DeregisterScalableTargetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams["ScalableDimension"] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams["ServiceNamespace"] = input.ServiceNamespace;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeScalableTargetsRequest = (
  input: DescribeScalableTargetsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceIds !== undefined) {
    bodyParams["ResourceIds"] = serializeAws_json1_1ResourceIdsMaxLen1600(
      input.ResourceIds,
      context
    );
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams["ScalableDimension"] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams["ServiceNamespace"] = input.ServiceNamespace;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeScalingActivitiesRequest = (
  input: DescribeScalingActivitiesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams["ScalableDimension"] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams["ServiceNamespace"] = input.ServiceNamespace;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeScalingPoliciesRequest = (
  input: DescribeScalingPoliciesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.PolicyNames !== undefined) {
    bodyParams["PolicyNames"] = serializeAws_json1_1ResourceIdsMaxLen1600(
      input.PolicyNames,
      context
    );
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams["ScalableDimension"] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams["ServiceNamespace"] = input.ServiceNamespace;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeScheduledActionsRequest = (
  input: DescribeScheduledActionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams["ScalableDimension"] = input.ScalableDimension;
  }
  if (input.ScheduledActionNames !== undefined) {
    bodyParams[
      "ScheduledActionNames"
    ] = serializeAws_json1_1ResourceIdsMaxLen1600(
      input.ScheduledActionNames,
      context
    );
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams["ServiceNamespace"] = input.ServiceNamespace;
  }
  return bodyParams;
};

const serializeAws_json1_1MetricDimension = (
  input: MetricDimension,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1MetricDimensions = (
  input: Array<MetricDimension>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1MetricDimension(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PredefinedMetricSpecification = (
  input: PredefinedMetricSpecification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PredefinedMetricType !== undefined) {
    bodyParams["PredefinedMetricType"] = input.PredefinedMetricType;
  }
  if (input.ResourceLabel !== undefined) {
    bodyParams["ResourceLabel"] = input.ResourceLabel;
  }
  return bodyParams;
};

const serializeAws_json1_1PutScalingPolicyRequest = (
  input: PutScalingPolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PolicyName !== undefined) {
    bodyParams["PolicyName"] = input.PolicyName;
  }
  if (input.PolicyType !== undefined) {
    bodyParams["PolicyType"] = input.PolicyType;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams["ScalableDimension"] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams["ServiceNamespace"] = input.ServiceNamespace;
  }
  if (input.StepScalingPolicyConfiguration !== undefined) {
    bodyParams[
      "StepScalingPolicyConfiguration"
    ] = serializeAws_json1_1StepScalingPolicyConfiguration(
      input.StepScalingPolicyConfiguration,
      context
    );
  }
  if (input.TargetTrackingScalingPolicyConfiguration !== undefined) {
    bodyParams[
      "TargetTrackingScalingPolicyConfiguration"
    ] = serializeAws_json1_1TargetTrackingScalingPolicyConfiguration(
      input.TargetTrackingScalingPolicyConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PutScheduledActionRequest = (
  input: PutScheduledActionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams["ScalableDimension"] = input.ScalableDimension;
  }
  if (input.ScalableTargetAction !== undefined) {
    bodyParams[
      "ScalableTargetAction"
    ] = serializeAws_json1_1ScalableTargetAction(
      input.ScalableTargetAction,
      context
    );
  }
  if (input.Schedule !== undefined) {
    bodyParams["Schedule"] = input.Schedule;
  }
  if (input.ScheduledActionName !== undefined) {
    bodyParams["ScheduledActionName"] = input.ScheduledActionName;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams["ServiceNamespace"] = input.ServiceNamespace;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1RegisterScalableTargetRequest = (
  input: RegisterScalableTargetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxCapacity !== undefined) {
    bodyParams["MaxCapacity"] = input.MaxCapacity;
  }
  if (input.MinCapacity !== undefined) {
    bodyParams["MinCapacity"] = input.MinCapacity;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams["ScalableDimension"] = input.ScalableDimension;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams["ServiceNamespace"] = input.ServiceNamespace;
  }
  if (input.SuspendedState !== undefined) {
    bodyParams["SuspendedState"] = serializeAws_json1_1SuspendedState(
      input.SuspendedState,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceIdsMaxLen1600 = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ScalableTargetAction = (
  input: ScalableTargetAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxCapacity !== undefined) {
    bodyParams["MaxCapacity"] = input.MaxCapacity;
  }
  if (input.MinCapacity !== undefined) {
    bodyParams["MinCapacity"] = input.MinCapacity;
  }
  return bodyParams;
};

const serializeAws_json1_1StepAdjustment = (
  input: StepAdjustment,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MetricIntervalLowerBound !== undefined) {
    bodyParams["MetricIntervalLowerBound"] = input.MetricIntervalLowerBound;
  }
  if (input.MetricIntervalUpperBound !== undefined) {
    bodyParams["MetricIntervalUpperBound"] = input.MetricIntervalUpperBound;
  }
  if (input.ScalingAdjustment !== undefined) {
    bodyParams["ScalingAdjustment"] = input.ScalingAdjustment;
  }
  return bodyParams;
};

const serializeAws_json1_1StepAdjustments = (
  input: Array<StepAdjustment>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1StepAdjustment(entry, context));
  }
  return contents;
};

const serializeAws_json1_1StepScalingPolicyConfiguration = (
  input: StepScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdjustmentType !== undefined) {
    bodyParams["AdjustmentType"] = input.AdjustmentType;
  }
  if (input.Cooldown !== undefined) {
    bodyParams["Cooldown"] = input.Cooldown;
  }
  if (input.MetricAggregationType !== undefined) {
    bodyParams["MetricAggregationType"] = input.MetricAggregationType;
  }
  if (input.MinAdjustmentMagnitude !== undefined) {
    bodyParams["MinAdjustmentMagnitude"] = input.MinAdjustmentMagnitude;
  }
  if (input.StepAdjustments !== undefined) {
    bodyParams["StepAdjustments"] = serializeAws_json1_1StepAdjustments(
      input.StepAdjustments,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SuspendedState = (
  input: SuspendedState,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DynamicScalingInSuspended !== undefined) {
    bodyParams["DynamicScalingInSuspended"] = input.DynamicScalingInSuspended;
  }
  if (input.DynamicScalingOutSuspended !== undefined) {
    bodyParams["DynamicScalingOutSuspended"] = input.DynamicScalingOutSuspended;
  }
  if (input.ScheduledScalingSuspended !== undefined) {
    bodyParams["ScheduledScalingSuspended"] = input.ScheduledScalingSuspended;
  }
  return bodyParams;
};

const serializeAws_json1_1TargetTrackingScalingPolicyConfiguration = (
  input: TargetTrackingScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomizedMetricSpecification !== undefined) {
    bodyParams[
      "CustomizedMetricSpecification"
    ] = serializeAws_json1_1CustomizedMetricSpecification(
      input.CustomizedMetricSpecification,
      context
    );
  }
  if (input.DisableScaleIn !== undefined) {
    bodyParams["DisableScaleIn"] = input.DisableScaleIn;
  }
  if (input.PredefinedMetricSpecification !== undefined) {
    bodyParams[
      "PredefinedMetricSpecification"
    ] = serializeAws_json1_1PredefinedMetricSpecification(
      input.PredefinedMetricSpecification,
      context
    );
  }
  if (input.ScaleInCooldown !== undefined) {
    bodyParams["ScaleInCooldown"] = input.ScaleInCooldown;
  }
  if (input.ScaleOutCooldown !== undefined) {
    bodyParams["ScaleOutCooldown"] = input.ScaleOutCooldown;
  }
  if (input.TargetValue !== undefined) {
    bodyParams["TargetValue"] = input.TargetValue;
  }
  return bodyParams;
};

const deserializeAws_json1_1Alarm = (
  output: any,
  context: __SerdeContext
): Alarm => {
  let contents: any = {
    __type: "Alarm",
    AlarmARN: undefined,
    AlarmName: undefined
  };
  if (output.AlarmARN !== undefined && output.AlarmARN !== null) {
    contents.AlarmARN = output.AlarmARN;
  }
  if (output.AlarmName !== undefined && output.AlarmName !== null) {
    contents.AlarmName = output.AlarmName;
  }
  return contents;
};

const deserializeAws_json1_1Alarms = (
  output: any,
  context: __SerdeContext
): Array<Alarm> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Alarm(entry, context)
  );
};

const deserializeAws_json1_1ConcurrentUpdateException = (
  output: any,
  context: __SerdeContext
): ConcurrentUpdateException => {
  let contents: any = {
    __type: "ConcurrentUpdateException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

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
    Unit: undefined
  };
  if (output.Dimensions !== undefined && output.Dimensions !== null) {
    contents.Dimensions = deserializeAws_json1_1MetricDimensions(
      output.Dimensions,
      context
    );
  }
  if (output.MetricName !== undefined && output.MetricName !== null) {
    contents.MetricName = output.MetricName;
  }
  if (output.Namespace !== undefined && output.Namespace !== null) {
    contents.Namespace = output.Namespace;
  }
  if (output.Statistic !== undefined && output.Statistic !== null) {
    contents.Statistic = output.Statistic;
  }
  if (output.Unit !== undefined && output.Unit !== null) {
    contents.Unit = output.Unit;
  }
  return contents;
};

const deserializeAws_json1_1DeleteScalingPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteScalingPolicyResponse => {
  let contents: any = {
    __type: "DeleteScalingPolicyResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteScheduledActionResponse = (
  output: any,
  context: __SerdeContext
): DeleteScheduledActionResponse => {
  let contents: any = {
    __type: "DeleteScheduledActionResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeregisterScalableTargetResponse = (
  output: any,
  context: __SerdeContext
): DeregisterScalableTargetResponse => {
  let contents: any = {
    __type: "DeregisterScalableTargetResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeScalableTargetsResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalableTargetsResponse => {
  let contents: any = {
    __type: "DescribeScalableTargetsResponse",
    NextToken: undefined,
    ScalableTargets: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.ScalableTargets !== undefined && output.ScalableTargets !== null) {
    contents.ScalableTargets = deserializeAws_json1_1ScalableTargets(
      output.ScalableTargets,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeScalingActivitiesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingActivitiesResponse => {
  let contents: any = {
    __type: "DescribeScalingActivitiesResponse",
    NextToken: undefined,
    ScalingActivities: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ScalingActivities !== undefined &&
    output.ScalingActivities !== null
  ) {
    contents.ScalingActivities = deserializeAws_json1_1ScalingActivities(
      output.ScalingActivities,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeScalingPoliciesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingPoliciesResponse => {
  let contents: any = {
    __type: "DescribeScalingPoliciesResponse",
    NextToken: undefined,
    ScalingPolicies: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.ScalingPolicies !== undefined && output.ScalingPolicies !== null) {
    contents.ScalingPolicies = deserializeAws_json1_1ScalingPolicies(
      output.ScalingPolicies,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeScheduledActionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeScheduledActionsResponse => {
  let contents: any = {
    __type: "DescribeScheduledActionsResponse",
    NextToken: undefined,
    ScheduledActions: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ScheduledActions !== undefined &&
    output.ScheduledActions !== null
  ) {
    contents.ScheduledActions = deserializeAws_json1_1ScheduledActions(
      output.ScheduledActions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FailedResourceAccessException = (
  output: any,
  context: __SerdeContext
): FailedResourceAccessException => {
  let contents: any = {
    __type: "FailedResourceAccessException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  let contents: any = {
    __type: "InternalServiceException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1MetricDimension = (
  output: any,
  context: __SerdeContext
): MetricDimension => {
  let contents: any = {
    __type: "MetricDimension",
    Name: undefined,
    Value: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1MetricDimensions = (
  output: any,
  context: __SerdeContext
): Array<MetricDimension> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricDimension(entry, context)
  );
};

const deserializeAws_json1_1ObjectNotFoundException = (
  output: any,
  context: __SerdeContext
): ObjectNotFoundException => {
  let contents: any = {
    __type: "ObjectNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PredefinedMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedMetricSpecification => {
  let contents: any = {
    __type: "PredefinedMetricSpecification",
    PredefinedMetricType: undefined,
    ResourceLabel: undefined
  };
  if (
    output.PredefinedMetricType !== undefined &&
    output.PredefinedMetricType !== null
  ) {
    contents.PredefinedMetricType = output.PredefinedMetricType;
  }
  if (output.ResourceLabel !== undefined && output.ResourceLabel !== null) {
    contents.ResourceLabel = output.ResourceLabel;
  }
  return contents;
};

const deserializeAws_json1_1PutScalingPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutScalingPolicyResponse => {
  let contents: any = {
    __type: "PutScalingPolicyResponse",
    Alarms: undefined,
    PolicyARN: undefined
  };
  if (output.Alarms !== undefined && output.Alarms !== null) {
    contents.Alarms = deserializeAws_json1_1Alarms(output.Alarms, context);
  }
  if (output.PolicyARN !== undefined && output.PolicyARN !== null) {
    contents.PolicyARN = output.PolicyARN;
  }
  return contents;
};

const deserializeAws_json1_1PutScheduledActionResponse = (
  output: any,
  context: __SerdeContext
): PutScheduledActionResponse => {
  let contents: any = {
    __type: "PutScheduledActionResponse"
  };
  return contents;
};

const deserializeAws_json1_1RegisterScalableTargetResponse = (
  output: any,
  context: __SerdeContext
): RegisterScalableTargetResponse => {
  let contents: any = {
    __type: "RegisterScalableTargetResponse"
  };
  return contents;
};

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
    SuspendedState: undefined
  };
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.MaxCapacity !== undefined && output.MaxCapacity !== null) {
    contents.MaxCapacity = output.MaxCapacity;
  }
  if (output.MinCapacity !== undefined && output.MinCapacity !== null) {
    contents.MinCapacity = output.MinCapacity;
  }
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  if (
    output.ScalableDimension !== undefined &&
    output.ScalableDimension !== null
  ) {
    contents.ScalableDimension = output.ScalableDimension;
  }
  if (
    output.ServiceNamespace !== undefined &&
    output.ServiceNamespace !== null
  ) {
    contents.ServiceNamespace = output.ServiceNamespace;
  }
  if (output.SuspendedState !== undefined && output.SuspendedState !== null) {
    contents.SuspendedState = deserializeAws_json1_1SuspendedState(
      output.SuspendedState,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ScalableTargetAction = (
  output: any,
  context: __SerdeContext
): ScalableTargetAction => {
  let contents: any = {
    __type: "ScalableTargetAction",
    MaxCapacity: undefined,
    MinCapacity: undefined
  };
  if (output.MaxCapacity !== undefined && output.MaxCapacity !== null) {
    contents.MaxCapacity = output.MaxCapacity;
  }
  if (output.MinCapacity !== undefined && output.MinCapacity !== null) {
    contents.MinCapacity = output.MinCapacity;
  }
  return contents;
};

const deserializeAws_json1_1ScalableTargets = (
  output: any,
  context: __SerdeContext
): Array<ScalableTarget> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalableTarget(entry, context)
  );
};

const deserializeAws_json1_1ScalingActivities = (
  output: any,
  context: __SerdeContext
): Array<ScalingActivity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingActivity(entry, context)
  );
};

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
    StatusMessage: undefined
  };
  if (output.ActivityId !== undefined && output.ActivityId !== null) {
    contents.ActivityId = output.ActivityId;
  }
  if (output.Cause !== undefined && output.Cause !== null) {
    contents.Cause = output.Cause;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Details !== undefined && output.Details !== null) {
    contents.Details = output.Details;
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = output.ResourceId;
  }
  if (
    output.ScalableDimension !== undefined &&
    output.ScalableDimension !== null
  ) {
    contents.ScalableDimension = output.ScalableDimension;
  }
  if (
    output.ServiceNamespace !== undefined &&
    output.ServiceNamespace !== null
  ) {
    contents.ServiceNamespace = output.ServiceNamespace;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (output.StatusCode !== undefined && output.StatusCode !== null) {
    contents.StatusCode = output.StatusCode;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  return contents;
};

const deserializeAws_json1_1ScalingPolicies = (
  output: any,
  context: __SerdeContext
): Array<ScalingPolicy> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingPolicy(entry, context)
  );
};

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
    TargetTrackingScalingPolicyConfiguration: undefined
  };
  if (output.Alarms !== undefined && output.Alarms !== null) {
    contents.Alarms = deserializeAws_json1_1Alarms(output.Alarms, context);
  }
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.PolicyARN !== undefined && output.PolicyARN !== null) {
    contents.PolicyARN = output.PolicyARN;
  }
  if (output.PolicyName !== undefined && output.PolicyName !== null) {
    contents.PolicyName = output.PolicyName;
  }
  if (output.PolicyType !== undefined && output.PolicyType !== null) {
    contents.PolicyType = output.PolicyType;
  }
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = output.ResourceId;
  }
  if (
    output.ScalableDimension !== undefined &&
    output.ScalableDimension !== null
  ) {
    contents.ScalableDimension = output.ScalableDimension;
  }
  if (
    output.ServiceNamespace !== undefined &&
    output.ServiceNamespace !== null
  ) {
    contents.ServiceNamespace = output.ServiceNamespace;
  }
  if (
    output.StepScalingPolicyConfiguration !== undefined &&
    output.StepScalingPolicyConfiguration !== null
  ) {
    contents.StepScalingPolicyConfiguration = deserializeAws_json1_1StepScalingPolicyConfiguration(
      output.StepScalingPolicyConfiguration,
      context
    );
  }
  if (
    output.TargetTrackingScalingPolicyConfiguration !== undefined &&
    output.TargetTrackingScalingPolicyConfiguration !== null
  ) {
    contents.TargetTrackingScalingPolicyConfiguration = deserializeAws_json1_1TargetTrackingScalingPolicyConfiguration(
      output.TargetTrackingScalingPolicyConfiguration,
      context
    );
  }
  return contents;
};

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
    StartTime: undefined
  };
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = output.ResourceId;
  }
  if (
    output.ScalableDimension !== undefined &&
    output.ScalableDimension !== null
  ) {
    contents.ScalableDimension = output.ScalableDimension;
  }
  if (
    output.ScalableTargetAction !== undefined &&
    output.ScalableTargetAction !== null
  ) {
    contents.ScalableTargetAction = deserializeAws_json1_1ScalableTargetAction(
      output.ScalableTargetAction,
      context
    );
  }
  if (output.Schedule !== undefined && output.Schedule !== null) {
    contents.Schedule = output.Schedule;
  }
  if (
    output.ScheduledActionARN !== undefined &&
    output.ScheduledActionARN !== null
  ) {
    contents.ScheduledActionARN = output.ScheduledActionARN;
  }
  if (
    output.ScheduledActionName !== undefined &&
    output.ScheduledActionName !== null
  ) {
    contents.ScheduledActionName = output.ScheduledActionName;
  }
  if (
    output.ServiceNamespace !== undefined &&
    output.ServiceNamespace !== null
  ) {
    contents.ServiceNamespace = output.ServiceNamespace;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1ScheduledActions = (
  output: any,
  context: __SerdeContext
): Array<ScheduledAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScheduledAction(entry, context)
  );
};

const deserializeAws_json1_1StepAdjustment = (
  output: any,
  context: __SerdeContext
): StepAdjustment => {
  let contents: any = {
    __type: "StepAdjustment",
    MetricIntervalLowerBound: undefined,
    MetricIntervalUpperBound: undefined,
    ScalingAdjustment: undefined
  };
  if (
    output.MetricIntervalLowerBound !== undefined &&
    output.MetricIntervalLowerBound !== null
  ) {
    contents.MetricIntervalLowerBound = output.MetricIntervalLowerBound;
  }
  if (
    output.MetricIntervalUpperBound !== undefined &&
    output.MetricIntervalUpperBound !== null
  ) {
    contents.MetricIntervalUpperBound = output.MetricIntervalUpperBound;
  }
  if (
    output.ScalingAdjustment !== undefined &&
    output.ScalingAdjustment !== null
  ) {
    contents.ScalingAdjustment = output.ScalingAdjustment;
  }
  return contents;
};

const deserializeAws_json1_1StepAdjustments = (
  output: any,
  context: __SerdeContext
): Array<StepAdjustment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1StepAdjustment(entry, context)
  );
};

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
    StepAdjustments: undefined
  };
  if (output.AdjustmentType !== undefined && output.AdjustmentType !== null) {
    contents.AdjustmentType = output.AdjustmentType;
  }
  if (output.Cooldown !== undefined && output.Cooldown !== null) {
    contents.Cooldown = output.Cooldown;
  }
  if (
    output.MetricAggregationType !== undefined &&
    output.MetricAggregationType !== null
  ) {
    contents.MetricAggregationType = output.MetricAggregationType;
  }
  if (
    output.MinAdjustmentMagnitude !== undefined &&
    output.MinAdjustmentMagnitude !== null
  ) {
    contents.MinAdjustmentMagnitude = output.MinAdjustmentMagnitude;
  }
  if (output.StepAdjustments !== undefined && output.StepAdjustments !== null) {
    contents.StepAdjustments = deserializeAws_json1_1StepAdjustments(
      output.StepAdjustments,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SuspendedState = (
  output: any,
  context: __SerdeContext
): SuspendedState => {
  let contents: any = {
    __type: "SuspendedState",
    DynamicScalingInSuspended: undefined,
    DynamicScalingOutSuspended: undefined,
    ScheduledScalingSuspended: undefined
  };
  if (
    output.DynamicScalingInSuspended !== undefined &&
    output.DynamicScalingInSuspended !== null
  ) {
    contents.DynamicScalingInSuspended = output.DynamicScalingInSuspended;
  }
  if (
    output.DynamicScalingOutSuspended !== undefined &&
    output.DynamicScalingOutSuspended !== null
  ) {
    contents.DynamicScalingOutSuspended = output.DynamicScalingOutSuspended;
  }
  if (
    output.ScheduledScalingSuspended !== undefined &&
    output.ScheduledScalingSuspended !== null
  ) {
    contents.ScheduledScalingSuspended = output.ScheduledScalingSuspended;
  }
  return contents;
};

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
    TargetValue: undefined
  };
  if (
    output.CustomizedMetricSpecification !== undefined &&
    output.CustomizedMetricSpecification !== null
  ) {
    contents.CustomizedMetricSpecification = deserializeAws_json1_1CustomizedMetricSpecification(
      output.CustomizedMetricSpecification,
      context
    );
  }
  if (output.DisableScaleIn !== undefined && output.DisableScaleIn !== null) {
    contents.DisableScaleIn = output.DisableScaleIn;
  }
  if (
    output.PredefinedMetricSpecification !== undefined &&
    output.PredefinedMetricSpecification !== null
  ) {
    contents.PredefinedMetricSpecification = deserializeAws_json1_1PredefinedMetricSpecification(
      output.PredefinedMetricSpecification,
      context
    );
  }
  if (output.ScaleInCooldown !== undefined && output.ScaleInCooldown !== null) {
    contents.ScaleInCooldown = output.ScaleInCooldown;
  }
  if (
    output.ScaleOutCooldown !== undefined &&
    output.ScaleOutCooldown !== null
  ) {
    contents.ScaleOutCooldown = output.ScaleOutCooldown;
  }
  if (output.TargetValue !== undefined && output.TargetValue !== null) {
    contents.TargetValue = output.TargetValue;
  }
  return contents;
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  let contents: any = {
    __type: "ValidationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
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
