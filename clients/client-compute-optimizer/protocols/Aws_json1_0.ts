import {
  GetAutoScalingGroupRecommendationsCommandInput,
  GetAutoScalingGroupRecommendationsCommandOutput
} from "../commands/GetAutoScalingGroupRecommendationsCommand";
import {
  GetEC2InstanceRecommendationsCommandInput,
  GetEC2InstanceRecommendationsCommandOutput
} from "../commands/GetEC2InstanceRecommendationsCommand";
import {
  GetEC2RecommendationProjectedMetricsCommandInput,
  GetEC2RecommendationProjectedMetricsCommandOutput
} from "../commands/GetEC2RecommendationProjectedMetricsCommand";
import {
  GetEnrollmentStatusCommandInput,
  GetEnrollmentStatusCommandOutput
} from "../commands/GetEnrollmentStatusCommand";
import {
  GetRecommendationSummariesCommandInput,
  GetRecommendationSummariesCommandOutput
} from "../commands/GetRecommendationSummariesCommand";
import {
  UpdateEnrollmentStatusCommandInput,
  UpdateEnrollmentStatusCommandOutput
} from "../commands/UpdateEnrollmentStatusCommand";
import {
  AccessDeniedException,
  AutoScalingGroupConfiguration,
  AutoScalingGroupRecommendation,
  AutoScalingGroupRecommendationOption,
  Filter,
  GetAutoScalingGroupRecommendationsRequest,
  GetAutoScalingGroupRecommendationsResponse,
  GetEC2InstanceRecommendationsRequest,
  GetEC2InstanceRecommendationsResponse,
  GetEC2RecommendationProjectedMetricsRequest,
  GetEC2RecommendationProjectedMetricsResponse,
  GetEnrollmentStatusRequest,
  GetEnrollmentStatusResponse,
  GetRecommendationError,
  GetRecommendationSummariesRequest,
  GetRecommendationSummariesResponse,
  InstanceRecommendation,
  InstanceRecommendationOption,
  InternalServerException,
  InvalidParameterValueException,
  MissingAuthenticationToken,
  OptInRequiredException,
  ProjectedMetric,
  RecommendationSource,
  RecommendationSummary,
  RecommendedOptionProjectedMetric,
  ResourceNotFoundException,
  ServiceUnavailableException,
  Summary,
  ThrottlingException,
  UpdateEnrollmentStatusRequest,
  UpdateEnrollmentStatusResponse,
  UtilizationMetric
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

export async function serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand(
  input: GetAutoScalingGroupRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] =
    "ComputeOptimizerService.GetAutoScalingGroupRecommendations";
  let body: any = {};
  const wrappedBody: any = {
    GetAutoScalingGroupRecommendationsRequest: serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetAutoScalingGroupRecommendations",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0GetEC2InstanceRecommendationsCommand(
  input: GetEC2InstanceRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] =
    "ComputeOptimizerService.GetEC2InstanceRecommendations";
  let body: any = {};
  const wrappedBody: any = {
    GetEC2InstanceRecommendationsRequest: serializeAws_json1_0GetEC2InstanceRecommendationsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetEC2InstanceRecommendations",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand(
  input: GetEC2RecommendationProjectedMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] =
    "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics";
  let body: any = {};
  const wrappedBody: any = {
    GetEC2RecommendationProjectedMetricsRequest: serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetEC2RecommendationProjectedMetrics",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0GetEnrollmentStatusCommand(
  input: GetEnrollmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "ComputeOptimizerService.GetEnrollmentStatus";
  let body: any = {};
  const wrappedBody: any = {
    GetEnrollmentStatusRequest: serializeAws_json1_0GetEnrollmentStatusRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetEnrollmentStatus",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0GetRecommendationSummariesCommand(
  input: GetRecommendationSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] =
    "ComputeOptimizerService.GetRecommendationSummaries";
  let body: any = {};
  const wrappedBody: any = {
    GetRecommendationSummariesRequest: serializeAws_json1_0GetRecommendationSummariesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetRecommendationSummaries",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UpdateEnrollmentStatusCommand(
  input: UpdateEnrollmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "ComputeOptimizerService.UpdateEnrollmentStatus";
  let body: any = {};
  const wrappedBody: any = {
    UpdateEnrollmentStatusRequest: serializeAws_json1_0UpdateEnrollmentStatusRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateEnrollmentStatus",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoScalingGroupRecommendationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse(
    data.GetAutoScalingGroupRecommendationsResponse,
    context
  );
  const response: GetAutoScalingGroupRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAutoScalingGroupRecommendationsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoScalingGroupRecommendationsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#AccessDeniedException":
      response = await deserializeAws_json1_0AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#InternalServerException":
      response = await deserializeAws_json1_0InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_0InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#MissingAuthenticationToken":
      response = await deserializeAws_json1_0MissingAuthenticationTokenResponse(
        parsedOutput,
        context
      );
      break;
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#OptInRequiredException":
      response = await deserializeAws_json1_0OptInRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ServiceUnavailableException":
      response = await deserializeAws_json1_0ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ThrottlingException":
      response = await deserializeAws_json1_0ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.computeoptimizer.version_2019_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0GetEC2InstanceRecommendationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2InstanceRecommendationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEC2InstanceRecommendationsResponse(
    data.GetEC2InstanceRecommendationsResponse,
    context
  );
  const response: GetEC2InstanceRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEC2InstanceRecommendationsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2InstanceRecommendationsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#AccessDeniedException":
      response = await deserializeAws_json1_0AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#InternalServerException":
      response = await deserializeAws_json1_0InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_0InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#MissingAuthenticationToken":
      response = await deserializeAws_json1_0MissingAuthenticationTokenResponse(
        parsedOutput,
        context
      );
      break;
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#OptInRequiredException":
      response = await deserializeAws_json1_0OptInRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ServiceUnavailableException":
      response = await deserializeAws_json1_0ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ThrottlingException":
      response = await deserializeAws_json1_0ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.computeoptimizer.version_2019_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2RecommendationProjectedMetricsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse(
    data.GetEC2RecommendationProjectedMetricsResponse,
    context
  );
  const response: GetEC2RecommendationProjectedMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEC2RecommendationProjectedMetricsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2RecommendationProjectedMetricsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#AccessDeniedException":
      response = await deserializeAws_json1_0AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#InternalServerException":
      response = await deserializeAws_json1_0InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_0InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#MissingAuthenticationToken":
      response = await deserializeAws_json1_0MissingAuthenticationTokenResponse(
        parsedOutput,
        context
      );
      break;
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#OptInRequiredException":
      response = await deserializeAws_json1_0OptInRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ServiceUnavailableException":
      response = await deserializeAws_json1_0ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ThrottlingException":
      response = await deserializeAws_json1_0ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.computeoptimizer.version_2019_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0GetEnrollmentStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnrollmentStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetEnrollmentStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEnrollmentStatusResponse(
    data.GetEnrollmentStatusResponse,
    context
  );
  const response: GetEnrollmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEnrollmentStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0GetEnrollmentStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnrollmentStatusCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#AccessDeniedException":
      response = await deserializeAws_json1_0AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#InternalServerException":
      response = await deserializeAws_json1_0InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_0InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#MissingAuthenticationToken":
      response = await deserializeAws_json1_0MissingAuthenticationTokenResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ServiceUnavailableException":
      response = await deserializeAws_json1_0ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ThrottlingException":
      response = await deserializeAws_json1_0ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.computeoptimizer.version_2019_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0GetRecommendationSummariesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationSummariesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetRecommendationSummariesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetRecommendationSummariesResponse(
    data.GetRecommendationSummariesResponse,
    context
  );
  const response: GetRecommendationSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRecommendationSummariesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0GetRecommendationSummariesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationSummariesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#AccessDeniedException":
      response = await deserializeAws_json1_0AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#InternalServerException":
      response = await deserializeAws_json1_0InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_0InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#MissingAuthenticationToken":
      response = await deserializeAws_json1_0MissingAuthenticationTokenResponse(
        parsedOutput,
        context
      );
      break;
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#OptInRequiredException":
      response = await deserializeAws_json1_0OptInRequiredExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ServiceUnavailableException":
      response = await deserializeAws_json1_0ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ThrottlingException":
      response = await deserializeAws_json1_0ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.computeoptimizer.version_2019_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UpdateEnrollmentStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnrollmentStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UpdateEnrollmentStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateEnrollmentStatusResponse(
    data.UpdateEnrollmentStatusResponse,
    context
  );
  const response: UpdateEnrollmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEnrollmentStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0UpdateEnrollmentStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnrollmentStatusCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#AccessDeniedException":
      response = await deserializeAws_json1_0AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#InternalServerException":
      response = await deserializeAws_json1_0InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#InvalidParameterValueException":
      response = await deserializeAws_json1_0InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#MissingAuthenticationToken":
      response = await deserializeAws_json1_0MissingAuthenticationTokenResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ServiceUnavailableException":
      response = await deserializeAws_json1_0ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer.version_2019_11_01#ThrottlingException":
      response = await deserializeAws_json1_0ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.computeoptimizer.version_2019_11_01#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(
    output.body,
    context
  );
  const contents: AccessDeniedException = {
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const deserialized: any = deserializeAws_json1_0InternalServerException(
    output.body,
    context
  );
  const contents: InternalServerException = {
    __type: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidParameterValueExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const deserialized: any = deserializeAws_json1_0InvalidParameterValueException(
    output.body,
    context
  );
  const contents: InvalidParameterValueException = {
    __type: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0MissingAuthenticationTokenResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MissingAuthenticationToken> => {
  const deserialized: any = deserializeAws_json1_0MissingAuthenticationToken(
    output.body,
    context
  );
  const contents: MissingAuthenticationToken = {
    __type: "MissingAuthenticationToken",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0OptInRequiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<OptInRequiredException> => {
  const deserialized: any = deserializeAws_json1_0OptInRequiredException(
    output.body,
    context
  );
  const contents: OptInRequiredException = {
    __type: "OptInRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(
    output.body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const deserialized: any = deserializeAws_json1_0ServiceUnavailableException(
    output.body,
    context
  );
  const contents: ServiceUnavailableException = {
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const deserialized: any = deserializeAws_json1_0ThrottlingException(
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

const serializeAws_json1_0AccountIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_0AutoScalingGroupArns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_0Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_json1_0FilterValues(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0FilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_0Filters = (
  input: Array<Filter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_0Filter(entry, context));
};

const serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest = (
  input: GetAutoScalingGroupRecommendationsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.accountIds !== undefined) {
    bodyParams["accountIds"] = serializeAws_json1_0AccountIds(
      input.accountIds,
      context
    );
  }
  if (input.autoScalingGroupArns !== undefined) {
    bodyParams[
      "autoScalingGroupArns"
    ] = serializeAws_json1_0AutoScalingGroupArns(
      input.autoScalingGroupArns,
      context
    );
  }
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_0Filters(input.filters, context);
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_0GetEC2InstanceRecommendationsRequest = (
  input: GetEC2InstanceRecommendationsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.accountIds !== undefined) {
    bodyParams["accountIds"] = serializeAws_json1_0AccountIds(
      input.accountIds,
      context
    );
  }
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_0Filters(input.filters, context);
  }
  if (input.instanceArns !== undefined) {
    bodyParams["instanceArns"] = serializeAws_json1_0InstanceArns(
      input.instanceArns,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest = (
  input: GetEC2RecommendationProjectedMetricsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
  }
  if (input.instanceArn !== undefined) {
    bodyParams["instanceArn"] = input.instanceArn;
  }
  if (input.period !== undefined) {
    bodyParams["period"] = input.period;
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
  }
  if (input.stat !== undefined) {
    bodyParams["stat"] = input.stat;
  }
  return bodyParams;
};

const serializeAws_json1_0GetEnrollmentStatusRequest = (
  input: GetEnrollmentStatusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_0GetRecommendationSummariesRequest = (
  input: GetRecommendationSummariesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.accountIds !== undefined) {
    bodyParams["accountIds"] = serializeAws_json1_0AccountIds(
      input.accountIds,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_0InstanceArns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_0UpdateEnrollmentStatusRequest = (
  input: UpdateEnrollmentStatusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.includeMemberAccounts !== undefined) {
    bodyParams["includeMemberAccounts"] = input.includeMemberAccounts;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  return bodyParams;
};

const deserializeAws_json1_0AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0AutoScalingGroupConfiguration = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupConfiguration => {
  let contents: any = {
    __type: "AutoScalingGroupConfiguration",
    desiredCapacity: undefined,
    instanceType: undefined,
    maxSize: undefined,
    minSize: undefined
  };
  if (output.desiredCapacity !== undefined) {
    contents.desiredCapacity = output.desiredCapacity;
  }
  if (output.instanceType !== undefined) {
    contents.instanceType = output.instanceType;
  }
  if (output.maxSize !== undefined) {
    contents.maxSize = output.maxSize;
  }
  if (output.minSize !== undefined) {
    contents.minSize = output.minSize;
  }
  return contents;
};

const deserializeAws_json1_0AutoScalingGroupRecommendation = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendation => {
  let contents: any = {
    __type: "AutoScalingGroupRecommendation",
    accountId: undefined,
    autoScalingGroupArn: undefined,
    autoScalingGroupName: undefined,
    currentConfiguration: undefined,
    finding: undefined,
    lastRefreshTimestamp: undefined,
    lookBackPeriodInDays: undefined,
    recommendationOptions: undefined,
    utilizationMetrics: undefined
  };
  if (output.accountId !== undefined) {
    contents.accountId = output.accountId;
  }
  if (output.autoScalingGroupArn !== undefined) {
    contents.autoScalingGroupArn = output.autoScalingGroupArn;
  }
  if (output.autoScalingGroupName !== undefined) {
    contents.autoScalingGroupName = output.autoScalingGroupName;
  }
  if (output.currentConfiguration !== undefined) {
    contents.currentConfiguration = deserializeAws_json1_0AutoScalingGroupConfiguration(
      output.currentConfiguration,
      context
    );
  }
  if (output.finding !== undefined) {
    contents.finding = output.finding;
  }
  if (output.lastRefreshTimestamp !== undefined) {
    contents.lastRefreshTimestamp = new Date(
      output.lastRefreshTimestamp % 1 != 0
        ? Math.round(output.lastRefreshTimestamp * 1000)
        : output.lastRefreshTimestamp
    );
  }
  if (output.lookBackPeriodInDays !== undefined) {
    contents.lookBackPeriodInDays = output.lookBackPeriodInDays;
  }
  if (output.recommendationOptions !== undefined) {
    contents.recommendationOptions = deserializeAws_json1_0AutoScalingGroupRecommendationOptions(
      output.recommendationOptions,
      context
    );
  }
  if (output.utilizationMetrics !== undefined) {
    contents.utilizationMetrics = deserializeAws_json1_0UtilizationMetrics(
      output.utilizationMetrics,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0AutoScalingGroupRecommendationOption = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendationOption => {
  let contents: any = {
    __type: "AutoScalingGroupRecommendationOption",
    configuration: undefined,
    performanceRisk: undefined,
    projectedUtilizationMetrics: undefined,
    rank: undefined
  };
  if (output.configuration !== undefined) {
    contents.configuration = deserializeAws_json1_0AutoScalingGroupConfiguration(
      output.configuration,
      context
    );
  }
  if (output.performanceRisk !== undefined) {
    contents.performanceRisk = output.performanceRisk;
  }
  if (output.projectedUtilizationMetrics !== undefined) {
    contents.projectedUtilizationMetrics = deserializeAws_json1_0ProjectedUtilizationMetrics(
      output.projectedUtilizationMetrics,
      context
    );
  }
  if (output.rank !== undefined) {
    contents.rank = output.rank;
  }
  return contents;
};

const deserializeAws_json1_0AutoScalingGroupRecommendationOptions = (
  output: any,
  context: __SerdeContext
): Array<AutoScalingGroupRecommendationOption> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AutoScalingGroupRecommendationOption(entry, context)
  );
};

const deserializeAws_json1_0AutoScalingGroupRecommendations = (
  output: any,
  context: __SerdeContext
): Array<AutoScalingGroupRecommendation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AutoScalingGroupRecommendation(entry, context)
  );
};

const deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetAutoScalingGroupRecommendationsResponse => {
  let contents: any = {
    __type: "GetAutoScalingGroupRecommendationsResponse",
    autoScalingGroupRecommendations: undefined,
    errors: undefined,
    nextToken: undefined
  };
  if (output.autoScalingGroupRecommendations !== undefined) {
    contents.autoScalingGroupRecommendations = deserializeAws_json1_0AutoScalingGroupRecommendations(
      output.autoScalingGroupRecommendations,
      context
    );
  }
  if (output.errors !== undefined) {
    contents.errors = deserializeAws_json1_0GetRecommendationErrors(
      output.errors,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_0GetEC2InstanceRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetEC2InstanceRecommendationsResponse => {
  let contents: any = {
    __type: "GetEC2InstanceRecommendationsResponse",
    errors: undefined,
    instanceRecommendations: undefined,
    nextToken: undefined
  };
  if (output.errors !== undefined) {
    contents.errors = deserializeAws_json1_0GetRecommendationErrors(
      output.errors,
      context
    );
  }
  if (output.instanceRecommendations !== undefined) {
    contents.instanceRecommendations = deserializeAws_json1_0InstanceRecommendations(
      output.instanceRecommendations,
      context
    );
  }
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetEC2RecommendationProjectedMetricsResponse => {
  let contents: any = {
    __type: "GetEC2RecommendationProjectedMetricsResponse",
    recommendedOptionProjectedMetrics: undefined
  };
  if (output.recommendedOptionProjectedMetrics !== undefined) {
    contents.recommendedOptionProjectedMetrics = deserializeAws_json1_0RecommendedOptionProjectedMetrics(
      output.recommendedOptionProjectedMetrics,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0GetEnrollmentStatusResponse = (
  output: any,
  context: __SerdeContext
): GetEnrollmentStatusResponse => {
  let contents: any = {
    __type: "GetEnrollmentStatusResponse",
    memberAccountsEnrolled: undefined,
    status: undefined,
    statusReason: undefined
  };
  if (output.memberAccountsEnrolled !== undefined) {
    contents.memberAccountsEnrolled = output.memberAccountsEnrolled;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.statusReason !== undefined) {
    contents.statusReason = output.statusReason;
  }
  return contents;
};

const deserializeAws_json1_0GetRecommendationError = (
  output: any,
  context: __SerdeContext
): GetRecommendationError => {
  let contents: any = {
    __type: "GetRecommendationError",
    code: undefined,
    identifier: undefined,
    message: undefined
  };
  if (output.code !== undefined) {
    contents.code = output.code;
  }
  if (output.identifier !== undefined) {
    contents.identifier = output.identifier;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0GetRecommendationErrors = (
  output: any,
  context: __SerdeContext
): Array<GetRecommendationError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0GetRecommendationError(entry, context)
  );
};

const deserializeAws_json1_0GetRecommendationSummariesResponse = (
  output: any,
  context: __SerdeContext
): GetRecommendationSummariesResponse => {
  let contents: any = {
    __type: "GetRecommendationSummariesResponse",
    nextToken: undefined,
    recommendationSummaries: undefined
  };
  if (output.nextToken !== undefined) {
    contents.nextToken = output.nextToken;
  }
  if (output.recommendationSummaries !== undefined) {
    contents.recommendationSummaries = deserializeAws_json1_0RecommendationSummaries(
      output.recommendationSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0InstanceRecommendation = (
  output: any,
  context: __SerdeContext
): InstanceRecommendation => {
  let contents: any = {
    __type: "InstanceRecommendation",
    accountId: undefined,
    currentInstanceType: undefined,
    finding: undefined,
    instanceArn: undefined,
    instanceName: undefined,
    lastRefreshTimestamp: undefined,
    lookBackPeriodInDays: undefined,
    recommendationOptions: undefined,
    recommendationSources: undefined,
    utilizationMetrics: undefined
  };
  if (output.accountId !== undefined) {
    contents.accountId = output.accountId;
  }
  if (output.currentInstanceType !== undefined) {
    contents.currentInstanceType = output.currentInstanceType;
  }
  if (output.finding !== undefined) {
    contents.finding = output.finding;
  }
  if (output.instanceArn !== undefined) {
    contents.instanceArn = output.instanceArn;
  }
  if (output.instanceName !== undefined) {
    contents.instanceName = output.instanceName;
  }
  if (output.lastRefreshTimestamp !== undefined) {
    contents.lastRefreshTimestamp = new Date(
      output.lastRefreshTimestamp % 1 != 0
        ? Math.round(output.lastRefreshTimestamp * 1000)
        : output.lastRefreshTimestamp
    );
  }
  if (output.lookBackPeriodInDays !== undefined) {
    contents.lookBackPeriodInDays = output.lookBackPeriodInDays;
  }
  if (output.recommendationOptions !== undefined) {
    contents.recommendationOptions = deserializeAws_json1_0RecommendationOptions(
      output.recommendationOptions,
      context
    );
  }
  if (output.recommendationSources !== undefined) {
    contents.recommendationSources = deserializeAws_json1_0RecommendationSources(
      output.recommendationSources,
      context
    );
  }
  if (output.utilizationMetrics !== undefined) {
    contents.utilizationMetrics = deserializeAws_json1_0UtilizationMetrics(
      output.utilizationMetrics,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0InstanceRecommendationOption = (
  output: any,
  context: __SerdeContext
): InstanceRecommendationOption => {
  let contents: any = {
    __type: "InstanceRecommendationOption",
    instanceType: undefined,
    performanceRisk: undefined,
    projectedUtilizationMetrics: undefined,
    rank: undefined
  };
  if (output.instanceType !== undefined) {
    contents.instanceType = output.instanceType;
  }
  if (output.performanceRisk !== undefined) {
    contents.performanceRisk = output.performanceRisk;
  }
  if (output.projectedUtilizationMetrics !== undefined) {
    contents.projectedUtilizationMetrics = deserializeAws_json1_0ProjectedUtilizationMetrics(
      output.projectedUtilizationMetrics,
      context
    );
  }
  if (output.rank !== undefined) {
    contents.rank = output.rank;
  }
  return contents;
};

const deserializeAws_json1_0InstanceRecommendations = (
  output: any,
  context: __SerdeContext
): Array<InstanceRecommendation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0InstanceRecommendation(entry, context)
  );
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  let contents: any = {
    __type: "InternalServerException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  let contents: any = {
    __type: "InvalidParameterValueException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0MetricValues = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0MissingAuthenticationToken = (
  output: any,
  context: __SerdeContext
): MissingAuthenticationToken => {
  let contents: any = {
    __type: "MissingAuthenticationToken",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0OptInRequiredException = (
  output: any,
  context: __SerdeContext
): OptInRequiredException => {
  let contents: any = {
    __type: "OptInRequiredException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ProjectedMetric = (
  output: any,
  context: __SerdeContext
): ProjectedMetric => {
  let contents: any = {
    __type: "ProjectedMetric",
    name: undefined,
    timestamps: undefined,
    values: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.timestamps !== undefined) {
    contents.timestamps = deserializeAws_json1_0Timestamps(
      output.timestamps,
      context
    );
  }
  if (output.values !== undefined) {
    contents.values = deserializeAws_json1_0MetricValues(
      output.values,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ProjectedMetrics = (
  output: any,
  context: __SerdeContext
): Array<ProjectedMetric> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ProjectedMetric(entry, context)
  );
};

const deserializeAws_json1_0ProjectedUtilizationMetrics = (
  output: any,
  context: __SerdeContext
): Array<UtilizationMetric> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0UtilizationMetric(entry, context)
  );
};

const deserializeAws_json1_0RecommendationOptions = (
  output: any,
  context: __SerdeContext
): Array<InstanceRecommendationOption> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0InstanceRecommendationOption(entry, context)
  );
};

const deserializeAws_json1_0RecommendationSource = (
  output: any,
  context: __SerdeContext
): RecommendationSource => {
  let contents: any = {
    __type: "RecommendationSource",
    recommendationSourceArn: undefined,
    recommendationSourceType: undefined
  };
  if (output.recommendationSourceArn !== undefined) {
    contents.recommendationSourceArn = output.recommendationSourceArn;
  }
  if (output.recommendationSourceType !== undefined) {
    contents.recommendationSourceType = output.recommendationSourceType;
  }
  return contents;
};

const deserializeAws_json1_0RecommendationSources = (
  output: any,
  context: __SerdeContext
): Array<RecommendationSource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0RecommendationSource(entry, context)
  );
};

const deserializeAws_json1_0RecommendationSummaries = (
  output: any,
  context: __SerdeContext
): Array<RecommendationSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0RecommendationSummary(entry, context)
  );
};

const deserializeAws_json1_0RecommendationSummary = (
  output: any,
  context: __SerdeContext
): RecommendationSummary => {
  let contents: any = {
    __type: "RecommendationSummary",
    accountId: undefined,
    recommendationResourceType: undefined,
    summaries: undefined
  };
  if (output.accountId !== undefined) {
    contents.accountId = output.accountId;
  }
  if (output.recommendationResourceType !== undefined) {
    contents.recommendationResourceType = output.recommendationResourceType;
  }
  if (output.summaries !== undefined) {
    contents.summaries = deserializeAws_json1_0Summaries(
      output.summaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0RecommendedOptionProjectedMetric = (
  output: any,
  context: __SerdeContext
): RecommendedOptionProjectedMetric => {
  let contents: any = {
    __type: "RecommendedOptionProjectedMetric",
    projectedMetrics: undefined,
    rank: undefined,
    recommendedInstanceType: undefined
  };
  if (output.projectedMetrics !== undefined) {
    contents.projectedMetrics = deserializeAws_json1_0ProjectedMetrics(
      output.projectedMetrics,
      context
    );
  }
  if (output.rank !== undefined) {
    contents.rank = output.rank;
  }
  if (output.recommendedInstanceType !== undefined) {
    contents.recommendedInstanceType = output.recommendedInstanceType;
  }
  return contents;
};

const deserializeAws_json1_0RecommendedOptionProjectedMetrics = (
  output: any,
  context: __SerdeContext
): Array<RecommendedOptionProjectedMetric> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0RecommendedOptionProjectedMetric(entry, context)
  );
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0Summaries = (
  output: any,
  context: __SerdeContext
): Array<Summary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Summary(entry, context)
  );
};

const deserializeAws_json1_0Summary = (
  output: any,
  context: __SerdeContext
): Summary => {
  let contents: any = {
    __type: "Summary",
    name: undefined,
    value: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_0ThrottlingException = (
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

const deserializeAws_json1_0Timestamps = (
  output: any,
  context: __SerdeContext
): Array<Date> => {
  return (output || []).map(
    (entry: any) => new Date(entry % 1 != 0 ? Math.round(entry * 1000) : entry)
  );
};

const deserializeAws_json1_0UpdateEnrollmentStatusResponse = (
  output: any,
  context: __SerdeContext
): UpdateEnrollmentStatusResponse => {
  let contents: any = {
    __type: "UpdateEnrollmentStatusResponse",
    status: undefined,
    statusReason: undefined
  };
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.statusReason !== undefined) {
    contents.statusReason = output.statusReason;
  }
  return contents;
};

const deserializeAws_json1_0UtilizationMetric = (
  output: any,
  context: __SerdeContext
): UtilizationMetric => {
  let contents: any = {
    __type: "UtilizationMetric",
    name: undefined,
    statistic: undefined,
    value: undefined
  };
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.statistic !== undefined) {
    contents.statistic = output.statistic;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_0UtilizationMetrics = (
  output: any,
  context: __SerdeContext
): Array<UtilizationMetric> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0UtilizationMetric(entry, context)
  );
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
