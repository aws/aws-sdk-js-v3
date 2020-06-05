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
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = async (
  input: GetAutoScalingGroupRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "ComputeOptimizerService.GetAutoScalingGroupRecommendations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEC2InstanceRecommendationsCommand = async (
  input: GetEC2InstanceRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "ComputeOptimizerService.GetEC2InstanceRecommendations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0GetEC2InstanceRecommendationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = async (
  input: GetEC2RecommendationProjectedMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target":
      "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEnrollmentStatusCommand = async (
  input: GetEnrollmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "ComputeOptimizerService.GetEnrollmentStatus"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0GetEnrollmentStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetRecommendationSummariesCommand = async (
  input: GetRecommendationSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "ComputeOptimizerService.GetRecommendationSummaries"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0GetRecommendationSummariesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateEnrollmentStatusCommand = async (
  input: UpdateEnrollmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "ComputeOptimizerService.UpdateEnrollmentStatus"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0UpdateEnrollmentStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoScalingGroupRecommendationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse(
    data,
    context
  );
  const response: GetAutoScalingGroupRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAutoScalingGroupRecommendationsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetAutoScalingGroupRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoScalingGroupRecommendationsCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      response = {
        ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      response = {
        ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(
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

export const deserializeAws_json1_0GetEC2InstanceRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2InstanceRecommendationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEC2InstanceRecommendationsResponse(
    data,
    context
  );
  const response: GetEC2InstanceRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEC2InstanceRecommendationsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEC2InstanceRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2InstanceRecommendationsCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      response = {
        ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      response = {
        ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(
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

export const deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2RecommendationProjectedMetricsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse(
    data,
    context
  );
  const response: GetEC2RecommendationProjectedMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEC2RecommendationProjectedMetricsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEC2RecommendationProjectedMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEC2RecommendationProjectedMetricsCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      response = {
        ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      response = {
        ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.computeoptimizer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(
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

export const deserializeAws_json1_0GetEnrollmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnrollmentStatusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetEnrollmentStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEnrollmentStatusResponse(data, context);
  const response: GetEnrollmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEnrollmentStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEnrollmentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnrollmentStatusCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      response = {
        ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(
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

export const deserializeAws_json1_0GetRecommendationSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationSummariesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetRecommendationSummariesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetRecommendationSummariesResponse(
    data,
    context
  );
  const response: GetRecommendationSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRecommendationSummariesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetRecommendationSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationSummariesCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      response = {
        ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptInRequiredException":
    case "com.amazonaws.computeoptimizer#OptInRequiredException":
      response = {
        ...(await deserializeAws_json1_0OptInRequiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(
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

export const deserializeAws_json1_0UpdateEnrollmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnrollmentStatusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UpdateEnrollmentStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateEnrollmentStatusResponse(
    data,
    context
  );
  const response: UpdateEnrollmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEnrollmentStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateEnrollmentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnrollmentStatusCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.computeoptimizer#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.computeoptimizer#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.computeoptimizer#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_0InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingAuthenticationToken":
    case "com.amazonaws.computeoptimizer#MissingAuthenticationToken":
      response = {
        ...(await deserializeAws_json1_0MissingAuthenticationTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.computeoptimizer#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.computeoptimizer#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(
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

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(
    body,
    context
  );
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidParameterValueException(
    body,
    context
  );
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0MissingAuthenticationTokenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingAuthenticationToken> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0MissingAuthenticationToken(
    body,
    context
  );
  const contents: MissingAuthenticationToken = {
    name: "MissingAuthenticationToken",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0OptInRequiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptInRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0OptInRequiredException(
    body,
    context
  );
  const contents: OptInRequiredException = {
    name: "OptInRequiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ServiceUnavailableException(
    body,
    context
  );
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(
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

const serializeAws_json1_0AccountIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_0AutoScalingGroupArns = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_0Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.values !== undefined && {
      values: serializeAws_json1_0FilterValues(input.values, context)
    })
  };
};

const serializeAws_json1_0Filters = (
  input: Filter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_0Filter(entry, context));
};

const serializeAws_json1_0FilterValues = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_0GetAutoScalingGroupRecommendationsRequest = (
  input: GetAutoScalingGroupRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds !== undefined && {
      accountIds: serializeAws_json1_0AccountIds(input.accountIds, context)
    }),
    ...(input.autoScalingGroupArns !== undefined && {
      autoScalingGroupArns: serializeAws_json1_0AutoScalingGroupArns(
        input.autoScalingGroupArns,
        context
      )
    }),
    ...(input.filters !== undefined && {
      filters: serializeAws_json1_0Filters(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_0GetEC2InstanceRecommendationsRequest = (
  input: GetEC2InstanceRecommendationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds !== undefined && {
      accountIds: serializeAws_json1_0AccountIds(input.accountIds, context)
    }),
    ...(input.filters !== undefined && {
      filters: serializeAws_json1_0Filters(input.filters, context)
    }),
    ...(input.instanceArns !== undefined && {
      instanceArns: serializeAws_json1_0InstanceArns(
        input.instanceArns,
        context
      )
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_0GetEC2RecommendationProjectedMetricsRequest = (
  input: GetEC2RecommendationProjectedMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime !== undefined && {
      endTime: Math.round(input.endTime.getTime() / 1000)
    }),
    ...(input.instanceArn !== undefined && { instanceArn: input.instanceArn }),
    ...(input.period !== undefined && { period: input.period }),
    ...(input.startTime !== undefined && {
      startTime: Math.round(input.startTime.getTime() / 1000)
    }),
    ...(input.stat !== undefined && { stat: input.stat })
  };
};

const serializeAws_json1_0GetEnrollmentStatusRequest = (
  input: GetEnrollmentStatusRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0GetRecommendationSummariesRequest = (
  input: GetRecommendationSummariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIds !== undefined && {
      accountIds: serializeAws_json1_0AccountIds(input.accountIds, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_0InstanceArns = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_0UpdateEnrollmentStatusRequest = (
  input: UpdateEnrollmentStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.includeMemberAccounts !== undefined && {
      includeMemberAccounts: input.includeMemberAccounts
    }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const deserializeAws_json1_0AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  return {
    __type: "AccessDeniedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0AutoScalingGroupConfiguration = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupConfiguration => {
  return {
    __type: "AutoScalingGroupConfiguration",
    desiredCapacity:
      output.desiredCapacity !== undefined && output.desiredCapacity !== null
        ? output.desiredCapacity
        : undefined,
    instanceType:
      output.instanceType !== undefined && output.instanceType !== null
        ? output.instanceType
        : undefined,
    maxSize:
      output.maxSize !== undefined && output.maxSize !== null
        ? output.maxSize
        : undefined,
    minSize:
      output.minSize !== undefined && output.minSize !== null
        ? output.minSize
        : undefined
  } as any;
};

const deserializeAws_json1_0AutoScalingGroupRecommendation = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendation => {
  return {
    __type: "AutoScalingGroupRecommendation",
    accountId:
      output.accountId !== undefined && output.accountId !== null
        ? output.accountId
        : undefined,
    autoScalingGroupArn:
      output.autoScalingGroupArn !== undefined &&
      output.autoScalingGroupArn !== null
        ? output.autoScalingGroupArn
        : undefined,
    autoScalingGroupName:
      output.autoScalingGroupName !== undefined &&
      output.autoScalingGroupName !== null
        ? output.autoScalingGroupName
        : undefined,
    currentConfiguration:
      output.currentConfiguration !== undefined &&
      output.currentConfiguration !== null
        ? deserializeAws_json1_0AutoScalingGroupConfiguration(
            output.currentConfiguration,
            context
          )
        : undefined,
    finding:
      output.finding !== undefined && output.finding !== null
        ? output.finding
        : undefined,
    lastRefreshTimestamp:
      output.lastRefreshTimestamp !== undefined &&
      output.lastRefreshTimestamp !== null
        ? new Date(Math.round(output.lastRefreshTimestamp * 1000))
        : undefined,
    lookBackPeriodInDays:
      output.lookBackPeriodInDays !== undefined &&
      output.lookBackPeriodInDays !== null
        ? output.lookBackPeriodInDays
        : undefined,
    recommendationOptions:
      output.recommendationOptions !== undefined &&
      output.recommendationOptions !== null
        ? deserializeAws_json1_0AutoScalingGroupRecommendationOptions(
            output.recommendationOptions,
            context
          )
        : undefined,
    utilizationMetrics:
      output.utilizationMetrics !== undefined &&
      output.utilizationMetrics !== null
        ? deserializeAws_json1_0UtilizationMetrics(
            output.utilizationMetrics,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0AutoScalingGroupRecommendationOption = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendationOption => {
  return {
    __type: "AutoScalingGroupRecommendationOption",
    configuration:
      output.configuration !== undefined && output.configuration !== null
        ? deserializeAws_json1_0AutoScalingGroupConfiguration(
            output.configuration,
            context
          )
        : undefined,
    performanceRisk:
      output.performanceRisk !== undefined && output.performanceRisk !== null
        ? output.performanceRisk
        : undefined,
    projectedUtilizationMetrics:
      output.projectedUtilizationMetrics !== undefined &&
      output.projectedUtilizationMetrics !== null
        ? deserializeAws_json1_0ProjectedUtilizationMetrics(
            output.projectedUtilizationMetrics,
            context
          )
        : undefined,
    rank:
      output.rank !== undefined && output.rank !== null
        ? output.rank
        : undefined
  } as any;
};

const deserializeAws_json1_0AutoScalingGroupRecommendationOptions = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendationOption[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AutoScalingGroupRecommendationOption(entry, context)
  );
};

const deserializeAws_json1_0AutoScalingGroupRecommendations = (
  output: any,
  context: __SerdeContext
): AutoScalingGroupRecommendation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AutoScalingGroupRecommendation(entry, context)
  );
};

const deserializeAws_json1_0GetAutoScalingGroupRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetAutoScalingGroupRecommendationsResponse => {
  return {
    __type: "GetAutoScalingGroupRecommendationsResponse",
    autoScalingGroupRecommendations:
      output.autoScalingGroupRecommendations !== undefined &&
      output.autoScalingGroupRecommendations !== null
        ? deserializeAws_json1_0AutoScalingGroupRecommendations(
            output.autoScalingGroupRecommendations,
            context
          )
        : undefined,
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_0GetRecommendationErrors(output.errors, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_0GetEC2InstanceRecommendationsResponse = (
  output: any,
  context: __SerdeContext
): GetEC2InstanceRecommendationsResponse => {
  return {
    __type: "GetEC2InstanceRecommendationsResponse",
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_0GetRecommendationErrors(output.errors, context)
        : undefined,
    instanceRecommendations:
      output.instanceRecommendations !== undefined &&
      output.instanceRecommendations !== null
        ? deserializeAws_json1_0InstanceRecommendations(
            output.instanceRecommendations,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_0GetEC2RecommendationProjectedMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetEC2RecommendationProjectedMetricsResponse => {
  return {
    __type: "GetEC2RecommendationProjectedMetricsResponse",
    recommendedOptionProjectedMetrics:
      output.recommendedOptionProjectedMetrics !== undefined &&
      output.recommendedOptionProjectedMetrics !== null
        ? deserializeAws_json1_0RecommendedOptionProjectedMetrics(
            output.recommendedOptionProjectedMetrics,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0GetEnrollmentStatusResponse = (
  output: any,
  context: __SerdeContext
): GetEnrollmentStatusResponse => {
  return {
    __type: "GetEnrollmentStatusResponse",
    memberAccountsEnrolled:
      output.memberAccountsEnrolled !== undefined &&
      output.memberAccountsEnrolled !== null
        ? output.memberAccountsEnrolled
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? output.statusReason
        : undefined
  } as any;
};

const deserializeAws_json1_0GetRecommendationError = (
  output: any,
  context: __SerdeContext
): GetRecommendationError => {
  return {
    __type: "GetRecommendationError",
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    identifier:
      output.identifier !== undefined && output.identifier !== null
        ? output.identifier
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0GetRecommendationErrors = (
  output: any,
  context: __SerdeContext
): GetRecommendationError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0GetRecommendationError(entry, context)
  );
};

const deserializeAws_json1_0GetRecommendationSummariesResponse = (
  output: any,
  context: __SerdeContext
): GetRecommendationSummariesResponse => {
  return {
    __type: "GetRecommendationSummariesResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    recommendationSummaries:
      output.recommendationSummaries !== undefined &&
      output.recommendationSummaries !== null
        ? deserializeAws_json1_0RecommendationSummaries(
            output.recommendationSummaries,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0InstanceRecommendation = (
  output: any,
  context: __SerdeContext
): InstanceRecommendation => {
  return {
    __type: "InstanceRecommendation",
    accountId:
      output.accountId !== undefined && output.accountId !== null
        ? output.accountId
        : undefined,
    currentInstanceType:
      output.currentInstanceType !== undefined &&
      output.currentInstanceType !== null
        ? output.currentInstanceType
        : undefined,
    finding:
      output.finding !== undefined && output.finding !== null
        ? output.finding
        : undefined,
    instanceArn:
      output.instanceArn !== undefined && output.instanceArn !== null
        ? output.instanceArn
        : undefined,
    instanceName:
      output.instanceName !== undefined && output.instanceName !== null
        ? output.instanceName
        : undefined,
    lastRefreshTimestamp:
      output.lastRefreshTimestamp !== undefined &&
      output.lastRefreshTimestamp !== null
        ? new Date(Math.round(output.lastRefreshTimestamp * 1000))
        : undefined,
    lookBackPeriodInDays:
      output.lookBackPeriodInDays !== undefined &&
      output.lookBackPeriodInDays !== null
        ? output.lookBackPeriodInDays
        : undefined,
    recommendationOptions:
      output.recommendationOptions !== undefined &&
      output.recommendationOptions !== null
        ? deserializeAws_json1_0RecommendationOptions(
            output.recommendationOptions,
            context
          )
        : undefined,
    recommendationSources:
      output.recommendationSources !== undefined &&
      output.recommendationSources !== null
        ? deserializeAws_json1_0RecommendationSources(
            output.recommendationSources,
            context
          )
        : undefined,
    utilizationMetrics:
      output.utilizationMetrics !== undefined &&
      output.utilizationMetrics !== null
        ? deserializeAws_json1_0UtilizationMetrics(
            output.utilizationMetrics,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0InstanceRecommendationOption = (
  output: any,
  context: __SerdeContext
): InstanceRecommendationOption => {
  return {
    __type: "InstanceRecommendationOption",
    instanceType:
      output.instanceType !== undefined && output.instanceType !== null
        ? output.instanceType
        : undefined,
    performanceRisk:
      output.performanceRisk !== undefined && output.performanceRisk !== null
        ? output.performanceRisk
        : undefined,
    projectedUtilizationMetrics:
      output.projectedUtilizationMetrics !== undefined &&
      output.projectedUtilizationMetrics !== null
        ? deserializeAws_json1_0ProjectedUtilizationMetrics(
            output.projectedUtilizationMetrics,
            context
          )
        : undefined,
    rank:
      output.rank !== undefined && output.rank !== null
        ? output.rank
        : undefined
  } as any;
};

const deserializeAws_json1_0InstanceRecommendations = (
  output: any,
  context: __SerdeContext
): InstanceRecommendation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0InstanceRecommendation(entry, context)
  );
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    __type: "InternalServerException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  return {
    __type: "InvalidParameterValueException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0MetricValues = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0MissingAuthenticationToken = (
  output: any,
  context: __SerdeContext
): MissingAuthenticationToken => {
  return {
    __type: "MissingAuthenticationToken",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0OptInRequiredException = (
  output: any,
  context: __SerdeContext
): OptInRequiredException => {
  return {
    __type: "OptInRequiredException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ProjectedMetric = (
  output: any,
  context: __SerdeContext
): ProjectedMetric => {
  return {
    __type: "ProjectedMetric",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    timestamps:
      output.timestamps !== undefined && output.timestamps !== null
        ? deserializeAws_json1_0Timestamps(output.timestamps, context)
        : undefined,
    values:
      output.values !== undefined && output.values !== null
        ? deserializeAws_json1_0MetricValues(output.values, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0ProjectedMetrics = (
  output: any,
  context: __SerdeContext
): ProjectedMetric[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ProjectedMetric(entry, context)
  );
};

const deserializeAws_json1_0ProjectedUtilizationMetrics = (
  output: any,
  context: __SerdeContext
): UtilizationMetric[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0UtilizationMetric(entry, context)
  );
};

const deserializeAws_json1_0RecommendationOptions = (
  output: any,
  context: __SerdeContext
): InstanceRecommendationOption[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0InstanceRecommendationOption(entry, context)
  );
};

const deserializeAws_json1_0RecommendationSource = (
  output: any,
  context: __SerdeContext
): RecommendationSource => {
  return {
    __type: "RecommendationSource",
    recommendationSourceArn:
      output.recommendationSourceArn !== undefined &&
      output.recommendationSourceArn !== null
        ? output.recommendationSourceArn
        : undefined,
    recommendationSourceType:
      output.recommendationSourceType !== undefined &&
      output.recommendationSourceType !== null
        ? output.recommendationSourceType
        : undefined
  } as any;
};

const deserializeAws_json1_0RecommendationSources = (
  output: any,
  context: __SerdeContext
): RecommendationSource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0RecommendationSource(entry, context)
  );
};

const deserializeAws_json1_0RecommendationSummaries = (
  output: any,
  context: __SerdeContext
): RecommendationSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0RecommendationSummary(entry, context)
  );
};

const deserializeAws_json1_0RecommendationSummary = (
  output: any,
  context: __SerdeContext
): RecommendationSummary => {
  return {
    __type: "RecommendationSummary",
    accountId:
      output.accountId !== undefined && output.accountId !== null
        ? output.accountId
        : undefined,
    recommendationResourceType:
      output.recommendationResourceType !== undefined &&
      output.recommendationResourceType !== null
        ? output.recommendationResourceType
        : undefined,
    summaries:
      output.summaries !== undefined && output.summaries !== null
        ? deserializeAws_json1_0Summaries(output.summaries, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0RecommendedOptionProjectedMetric = (
  output: any,
  context: __SerdeContext
): RecommendedOptionProjectedMetric => {
  return {
    __type: "RecommendedOptionProjectedMetric",
    projectedMetrics:
      output.projectedMetrics !== undefined && output.projectedMetrics !== null
        ? deserializeAws_json1_0ProjectedMetrics(
            output.projectedMetrics,
            context
          )
        : undefined,
    rank:
      output.rank !== undefined && output.rank !== null
        ? output.rank
        : undefined,
    recommendedInstanceType:
      output.recommendedInstanceType !== undefined &&
      output.recommendedInstanceType !== null
        ? output.recommendedInstanceType
        : undefined
  } as any;
};

const deserializeAws_json1_0RecommendedOptionProjectedMetrics = (
  output: any,
  context: __SerdeContext
): RecommendedOptionProjectedMetric[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0RecommendedOptionProjectedMetric(entry, context)
  );
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    __type: "ServiceUnavailableException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0Summaries = (
  output: any,
  context: __SerdeContext
): Summary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Summary(entry, context)
  );
};

const deserializeAws_json1_0Summary = (
  output: any,
  context: __SerdeContext
): Summary => {
  return {
    __type: "Summary",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_0ThrottlingException = (
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

const deserializeAws_json1_0Timestamps = (
  output: any,
  context: __SerdeContext
): Date[] => {
  return (output || []).map((entry: any) => new Date(Math.round(entry * 1000)));
};

const deserializeAws_json1_0UpdateEnrollmentStatusResponse = (
  output: any,
  context: __SerdeContext
): UpdateEnrollmentStatusResponse => {
  return {
    __type: "UpdateEnrollmentStatusResponse",
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusReason:
      output.statusReason !== undefined && output.statusReason !== null
        ? output.statusReason
        : undefined
  } as any;
};

const deserializeAws_json1_0UtilizationMetric = (
  output: any,
  context: __SerdeContext
): UtilizationMetric => {
  return {
    __type: "UtilizationMetric",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    statistic:
      output.statistic !== undefined && output.statistic !== null
        ? output.statistic
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_0UtilizationMetrics = (
  output: any,
  context: __SerdeContext
): UtilizationMetric[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0UtilizationMetric(entry, context)
  );
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
