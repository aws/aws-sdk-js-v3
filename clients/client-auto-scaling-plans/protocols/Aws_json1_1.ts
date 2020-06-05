import {
  CreateScalingPlanCommandInput,
  CreateScalingPlanCommandOutput
} from "../commands/CreateScalingPlanCommand";
import {
  DeleteScalingPlanCommandInput,
  DeleteScalingPlanCommandOutput
} from "../commands/DeleteScalingPlanCommand";
import {
  DescribeScalingPlanResourcesCommandInput,
  DescribeScalingPlanResourcesCommandOutput
} from "../commands/DescribeScalingPlanResourcesCommand";
import {
  DescribeScalingPlansCommandInput,
  DescribeScalingPlansCommandOutput
} from "../commands/DescribeScalingPlansCommand";
import {
  GetScalingPlanResourceForecastDataCommandInput,
  GetScalingPlanResourceForecastDataCommandOutput
} from "../commands/GetScalingPlanResourceForecastDataCommand";
import {
  UpdateScalingPlanCommandInput,
  UpdateScalingPlanCommandOutput
} from "../commands/UpdateScalingPlanCommand";
import {
  ApplicationSource,
  ConcurrentUpdateException,
  CreateScalingPlanRequest,
  CreateScalingPlanResponse,
  CustomizedLoadMetricSpecification,
  CustomizedScalingMetricSpecification,
  Datapoint,
  DeleteScalingPlanRequest,
  DeleteScalingPlanResponse,
  DescribeScalingPlanResourcesRequest,
  DescribeScalingPlanResourcesResponse,
  DescribeScalingPlansRequest,
  DescribeScalingPlansResponse,
  GetScalingPlanResourceForecastDataRequest,
  GetScalingPlanResourceForecastDataResponse,
  InternalServiceException,
  InvalidNextTokenException,
  LimitExceededException,
  MetricDimension,
  ObjectNotFoundException,
  PredefinedLoadMetricSpecification,
  PredefinedScalingMetricSpecification,
  ScalingInstruction,
  ScalingPlan,
  ScalingPlanResource,
  ScalingPolicy,
  TagFilter,
  TargetTrackingConfiguration,
  UpdateScalingPlanRequest,
  UpdateScalingPlanResponse,
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

export const serializeAws_json1_1CreateScalingPlanCommand = async (
  input: CreateScalingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleScalingPlannerFrontendService.CreateScalingPlan"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateScalingPlanRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteScalingPlanCommand = async (
  input: DeleteScalingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleScalingPlannerFrontendService.DeleteScalingPlan"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteScalingPlanRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScalingPlanResourcesCommand = async (
  input: DescribeScalingPlanResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeScalingPlanResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeScalingPlansCommand = async (
  input: DescribeScalingPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeScalingPlansRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetScalingPlanResourceForecastDataCommand = async (
  input: GetScalingPlanResourceForecastDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetScalingPlanResourceForecastDataRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateScalingPlanCommand = async (
  input: UpdateScalingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateScalingPlanRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateScalingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScalingPlanCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateScalingPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateScalingPlanResponse(data, context);
  const response: CreateScalingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateScalingPlanResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateScalingPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScalingPlanCommandOutput> => {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.autoscalingplans#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1DeleteScalingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPlanCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteScalingPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteScalingPlanResponse(data, context);
  const response: DeleteScalingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteScalingPlanResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteScalingPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPlanCommandOutput> => {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscalingplans#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1DescribeScalingPlanResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlanResourcesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeScalingPlanResourcesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingPlanResourcesResponse(
    data,
    context
  );
  const response: DescribeScalingPlanResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeScalingPlanResourcesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScalingPlanResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlanResourcesCommandOutput> => {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscalingplans#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1DescribeScalingPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlansCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeScalingPlansCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeScalingPlansResponse(data, context);
  const response: DescribeScalingPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeScalingPlansResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeScalingPlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlansCommandOutput> => {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscalingplans#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScalingPlanResourceForecastDataCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetScalingPlanResourceForecastDataCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetScalingPlanResourceForecastDataResponse(
    data,
    context
  );
  const response: GetScalingPlanResourceForecastDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetScalingPlanResourceForecastDataResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetScalingPlanResourceForecastDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScalingPlanResourceForecastDataCommandOutput> => {
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
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1UpdateScalingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingPlanCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateScalingPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateScalingPlanResponse(data, context);
  const response: UpdateScalingPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateScalingPlanResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateScalingPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingPlanCommandOutput> => {
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
    case "ConcurrentUpdateException":
    case "com.amazonaws.autoscalingplans#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscalingplans#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscalingplans#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscalingplans#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

const serializeAws_json1_1ApplicationSource = (
  input: ApplicationSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudFormationStackARN !== undefined && {
      CloudFormationStackARN: input.CloudFormationStackARN
    }),
    ...(input.TagFilters !== undefined && {
      TagFilters: serializeAws_json1_1TagFilters(input.TagFilters, context)
    })
  };
};

const serializeAws_json1_1ApplicationSources = (
  input: ApplicationSource[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ApplicationSource(entry, context)
  );
};

const serializeAws_json1_1CreateScalingPlanRequest = (
  input: CreateScalingPlanRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationSource !== undefined && {
      ApplicationSource: serializeAws_json1_1ApplicationSource(
        input.ApplicationSource,
        context
      )
    }),
    ...(input.ScalingInstructions !== undefined && {
      ScalingInstructions: serializeAws_json1_1ScalingInstructions(
        input.ScalingInstructions,
        context
      )
    }),
    ...(input.ScalingPlanName !== undefined && {
      ScalingPlanName: input.ScalingPlanName
    })
  };
};

const serializeAws_json1_1CustomizedLoadMetricSpecification = (
  input: CustomizedLoadMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.Dimensions !== undefined && {
      Dimensions: serializeAws_json1_1MetricDimensions(
        input.Dimensions,
        context
      )
    }),
    ...(input.MetricName !== undefined && { MetricName: input.MetricName }),
    ...(input.Namespace !== undefined && { Namespace: input.Namespace }),
    ...(input.Statistic !== undefined && { Statistic: input.Statistic }),
    ...(input.Unit !== undefined && { Unit: input.Unit })
  };
};

const serializeAws_json1_1CustomizedScalingMetricSpecification = (
  input: CustomizedScalingMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.Dimensions !== undefined && {
      Dimensions: serializeAws_json1_1MetricDimensions(
        input.Dimensions,
        context
      )
    }),
    ...(input.MetricName !== undefined && { MetricName: input.MetricName }),
    ...(input.Namespace !== undefined && { Namespace: input.Namespace }),
    ...(input.Statistic !== undefined && { Statistic: input.Statistic }),
    ...(input.Unit !== undefined && { Unit: input.Unit })
  };
};

const serializeAws_json1_1DeleteScalingPlanRequest = (
  input: DeleteScalingPlanRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScalingPlanName !== undefined && {
      ScalingPlanName: input.ScalingPlanName
    }),
    ...(input.ScalingPlanVersion !== undefined && {
      ScalingPlanVersion: input.ScalingPlanVersion
    })
  };
};

const serializeAws_json1_1DescribeScalingPlanResourcesRequest = (
  input: DescribeScalingPlanResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ScalingPlanName !== undefined && {
      ScalingPlanName: input.ScalingPlanName
    }),
    ...(input.ScalingPlanVersion !== undefined && {
      ScalingPlanVersion: input.ScalingPlanVersion
    })
  };
};

const serializeAws_json1_1DescribeScalingPlansRequest = (
  input: DescribeScalingPlansRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationSources !== undefined && {
      ApplicationSources: serializeAws_json1_1ApplicationSources(
        input.ApplicationSources,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ScalingPlanNames !== undefined && {
      ScalingPlanNames: serializeAws_json1_1ScalingPlanNames(
        input.ScalingPlanNames,
        context
      )
    }),
    ...(input.ScalingPlanVersion !== undefined && {
      ScalingPlanVersion: input.ScalingPlanVersion
    })
  };
};

const serializeAws_json1_1GetScalingPlanResourceForecastDataRequest = (
  input: GetScalingPlanResourceForecastDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime !== undefined && {
      EndTime: Math.round(input.EndTime.getTime() / 1000)
    }),
    ...(input.ForecastDataType !== undefined && {
      ForecastDataType: input.ForecastDataType
    }),
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined && {
      ScalableDimension: input.ScalableDimension
    }),
    ...(input.ScalingPlanName !== undefined && {
      ScalingPlanName: input.ScalingPlanName
    }),
    ...(input.ScalingPlanVersion !== undefined && {
      ScalingPlanVersion: input.ScalingPlanVersion
    }),
    ...(input.ServiceNamespace !== undefined && {
      ServiceNamespace: input.ServiceNamespace
    }),
    ...(input.StartTime !== undefined && {
      StartTime: Math.round(input.StartTime.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1MetricDimension = (
  input: MetricDimension,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1MetricDimensions = (
  input: MetricDimension[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1MetricDimension(entry, context)
  );
};

const serializeAws_json1_1PredefinedLoadMetricSpecification = (
  input: PredefinedLoadMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredefinedLoadMetricType !== undefined && {
      PredefinedLoadMetricType: input.PredefinedLoadMetricType
    }),
    ...(input.ResourceLabel !== undefined && {
      ResourceLabel: input.ResourceLabel
    })
  };
};

const serializeAws_json1_1PredefinedScalingMetricSpecification = (
  input: PredefinedScalingMetricSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredefinedScalingMetricType !== undefined && {
      PredefinedScalingMetricType: input.PredefinedScalingMetricType
    }),
    ...(input.ResourceLabel !== undefined && {
      ResourceLabel: input.ResourceLabel
    })
  };
};

const serializeAws_json1_1ScalingInstruction = (
  input: ScalingInstruction,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomizedLoadMetricSpecification !== undefined && {
      CustomizedLoadMetricSpecification: serializeAws_json1_1CustomizedLoadMetricSpecification(
        input.CustomizedLoadMetricSpecification,
        context
      )
    }),
    ...(input.DisableDynamicScaling !== undefined && {
      DisableDynamicScaling: input.DisableDynamicScaling
    }),
    ...(input.MaxCapacity !== undefined && { MaxCapacity: input.MaxCapacity }),
    ...(input.MinCapacity !== undefined && { MinCapacity: input.MinCapacity }),
    ...(input.PredefinedLoadMetricSpecification !== undefined && {
      PredefinedLoadMetricSpecification: serializeAws_json1_1PredefinedLoadMetricSpecification(
        input.PredefinedLoadMetricSpecification,
        context
      )
    }),
    ...(input.PredictiveScalingMaxCapacityBehavior !== undefined && {
      PredictiveScalingMaxCapacityBehavior:
        input.PredictiveScalingMaxCapacityBehavior
    }),
    ...(input.PredictiveScalingMaxCapacityBuffer !== undefined && {
      PredictiveScalingMaxCapacityBuffer:
        input.PredictiveScalingMaxCapacityBuffer
    }),
    ...(input.PredictiveScalingMode !== undefined && {
      PredictiveScalingMode: input.PredictiveScalingMode
    }),
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
    ...(input.ScalableDimension !== undefined && {
      ScalableDimension: input.ScalableDimension
    }),
    ...(input.ScalingPolicyUpdateBehavior !== undefined && {
      ScalingPolicyUpdateBehavior: input.ScalingPolicyUpdateBehavior
    }),
    ...(input.ScheduledActionBufferTime !== undefined && {
      ScheduledActionBufferTime: input.ScheduledActionBufferTime
    }),
    ...(input.ServiceNamespace !== undefined && {
      ServiceNamespace: input.ServiceNamespace
    }),
    ...(input.TargetTrackingConfigurations !== undefined && {
      TargetTrackingConfigurations: serializeAws_json1_1TargetTrackingConfigurations(
        input.TargetTrackingConfigurations,
        context
      )
    })
  };
};

const serializeAws_json1_1ScalingInstructions = (
  input: ScalingInstruction[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ScalingInstruction(entry, context)
  );
};

const serializeAws_json1_1ScalingPlanNames = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagFilter = (
  input: TagFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Values !== undefined && {
      Values: serializeAws_json1_1TagValues(input.Values, context)
    })
  };
};

const serializeAws_json1_1TagFilters = (
  input: TagFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1TagFilter(entry, context));
};

const serializeAws_json1_1TagValues = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TargetTrackingConfiguration = (
  input: TargetTrackingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomizedScalingMetricSpecification !== undefined && {
      CustomizedScalingMetricSpecification: serializeAws_json1_1CustomizedScalingMetricSpecification(
        input.CustomizedScalingMetricSpecification,
        context
      )
    }),
    ...(input.DisableScaleIn !== undefined && {
      DisableScaleIn: input.DisableScaleIn
    }),
    ...(input.EstimatedInstanceWarmup !== undefined && {
      EstimatedInstanceWarmup: input.EstimatedInstanceWarmup
    }),
    ...(input.PredefinedScalingMetricSpecification !== undefined && {
      PredefinedScalingMetricSpecification: serializeAws_json1_1PredefinedScalingMetricSpecification(
        input.PredefinedScalingMetricSpecification,
        context
      )
    }),
    ...(input.ScaleInCooldown !== undefined && {
      ScaleInCooldown: input.ScaleInCooldown
    }),
    ...(input.ScaleOutCooldown !== undefined && {
      ScaleOutCooldown: input.ScaleOutCooldown
    }),
    ...(input.TargetValue !== undefined && { TargetValue: input.TargetValue })
  };
};

const serializeAws_json1_1TargetTrackingConfigurations = (
  input: TargetTrackingConfiguration[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1TargetTrackingConfiguration(entry, context)
  );
};

const serializeAws_json1_1UpdateScalingPlanRequest = (
  input: UpdateScalingPlanRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationSource !== undefined && {
      ApplicationSource: serializeAws_json1_1ApplicationSource(
        input.ApplicationSource,
        context
      )
    }),
    ...(input.ScalingInstructions !== undefined && {
      ScalingInstructions: serializeAws_json1_1ScalingInstructions(
        input.ScalingInstructions,
        context
      )
    }),
    ...(input.ScalingPlanName !== undefined && {
      ScalingPlanName: input.ScalingPlanName
    }),
    ...(input.ScalingPlanVersion !== undefined && {
      ScalingPlanVersion: input.ScalingPlanVersion
    })
  };
};

const deserializeAws_json1_1ApplicationSource = (
  output: any,
  context: __SerdeContext
): ApplicationSource => {
  return {
    __type: "ApplicationSource",
    CloudFormationStackARN:
      output.CloudFormationStackARN !== undefined &&
      output.CloudFormationStackARN !== null
        ? output.CloudFormationStackARN
        : undefined,
    TagFilters:
      output.TagFilters !== undefined && output.TagFilters !== null
        ? deserializeAws_json1_1TagFilters(output.TagFilters, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ConcurrentUpdateException = (
  output: any,
  context: __SerdeContext
): ConcurrentUpdateException => {
  return {
    __type: "ConcurrentUpdateException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateScalingPlanResponse = (
  output: any,
  context: __SerdeContext
): CreateScalingPlanResponse => {
  return {
    __type: "CreateScalingPlanResponse",
    ScalingPlanVersion:
      output.ScalingPlanVersion !== undefined &&
      output.ScalingPlanVersion !== null
        ? output.ScalingPlanVersion
        : undefined
  } as any;
};

const deserializeAws_json1_1CustomizedLoadMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedLoadMetricSpecification => {
  return {
    __type: "CustomizedLoadMetricSpecification",
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1MetricDimensions(output.Dimensions, context)
        : undefined,
    MetricName:
      output.MetricName !== undefined && output.MetricName !== null
        ? output.MetricName
        : undefined,
    Namespace:
      output.Namespace !== undefined && output.Namespace !== null
        ? output.Namespace
        : undefined,
    Statistic:
      output.Statistic !== undefined && output.Statistic !== null
        ? output.Statistic
        : undefined,
    Unit:
      output.Unit !== undefined && output.Unit !== null
        ? output.Unit
        : undefined
  } as any;
};

const deserializeAws_json1_1CustomizedScalingMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedScalingMetricSpecification => {
  return {
    __type: "CustomizedScalingMetricSpecification",
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_json1_1MetricDimensions(output.Dimensions, context)
        : undefined,
    MetricName:
      output.MetricName !== undefined && output.MetricName !== null
        ? output.MetricName
        : undefined,
    Namespace:
      output.Namespace !== undefined && output.Namespace !== null
        ? output.Namespace
        : undefined,
    Statistic:
      output.Statistic !== undefined && output.Statistic !== null
        ? output.Statistic
        : undefined,
    Unit:
      output.Unit !== undefined && output.Unit !== null
        ? output.Unit
        : undefined
  } as any;
};

const deserializeAws_json1_1Datapoint = (
  output: any,
  context: __SerdeContext
): Datapoint => {
  return {
    __type: "Datapoint",
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1Datapoints = (
  output: any,
  context: __SerdeContext
): Datapoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Datapoint(entry, context)
  );
};

const deserializeAws_json1_1DeleteScalingPlanResponse = (
  output: any,
  context: __SerdeContext
): DeleteScalingPlanResponse => {
  return {
    __type: "DeleteScalingPlanResponse"
  } as any;
};

const deserializeAws_json1_1DescribeScalingPlanResourcesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingPlanResourcesResponse => {
  return {
    __type: "DescribeScalingPlanResourcesResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ScalingPlanResources:
      output.ScalingPlanResources !== undefined &&
      output.ScalingPlanResources !== null
        ? deserializeAws_json1_1ScalingPlanResources(
            output.ScalingPlanResources,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeScalingPlansResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingPlansResponse => {
  return {
    __type: "DescribeScalingPlansResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ScalingPlans:
      output.ScalingPlans !== undefined && output.ScalingPlans !== null
        ? deserializeAws_json1_1ScalingPlans(output.ScalingPlans, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetScalingPlanResourceForecastDataResponse = (
  output: any,
  context: __SerdeContext
): GetScalingPlanResourceForecastDataResponse => {
  return {
    __type: "GetScalingPlanResourceForecastDataResponse",
    Datapoints:
      output.Datapoints !== undefined && output.Datapoints !== null
        ? deserializeAws_json1_1Datapoints(output.Datapoints, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  return {
    __type: "InternalServiceException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    __type: "InvalidNextTokenException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1MetricDimension = (
  output: any,
  context: __SerdeContext
): MetricDimension => {
  return {
    __type: "MetricDimension",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1MetricDimensions = (
  output: any,
  context: __SerdeContext
): MetricDimension[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricDimension(entry, context)
  );
};

const deserializeAws_json1_1ObjectNotFoundException = (
  output: any,
  context: __SerdeContext
): ObjectNotFoundException => {
  return {
    __type: "ObjectNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1PredefinedLoadMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedLoadMetricSpecification => {
  return {
    __type: "PredefinedLoadMetricSpecification",
    PredefinedLoadMetricType:
      output.PredefinedLoadMetricType !== undefined &&
      output.PredefinedLoadMetricType !== null
        ? output.PredefinedLoadMetricType
        : undefined,
    ResourceLabel:
      output.ResourceLabel !== undefined && output.ResourceLabel !== null
        ? output.ResourceLabel
        : undefined
  } as any;
};

const deserializeAws_json1_1PredefinedScalingMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedScalingMetricSpecification => {
  return {
    __type: "PredefinedScalingMetricSpecification",
    PredefinedScalingMetricType:
      output.PredefinedScalingMetricType !== undefined &&
      output.PredefinedScalingMetricType !== null
        ? output.PredefinedScalingMetricType
        : undefined,
    ResourceLabel:
      output.ResourceLabel !== undefined && output.ResourceLabel !== null
        ? output.ResourceLabel
        : undefined
  } as any;
};

const deserializeAws_json1_1ScalingInstruction = (
  output: any,
  context: __SerdeContext
): ScalingInstruction => {
  return {
    __type: "ScalingInstruction",
    CustomizedLoadMetricSpecification:
      output.CustomizedLoadMetricSpecification !== undefined &&
      output.CustomizedLoadMetricSpecification !== null
        ? deserializeAws_json1_1CustomizedLoadMetricSpecification(
            output.CustomizedLoadMetricSpecification,
            context
          )
        : undefined,
    DisableDynamicScaling:
      output.DisableDynamicScaling !== undefined &&
      output.DisableDynamicScaling !== null
        ? output.DisableDynamicScaling
        : undefined,
    MaxCapacity:
      output.MaxCapacity !== undefined && output.MaxCapacity !== null
        ? output.MaxCapacity
        : undefined,
    MinCapacity:
      output.MinCapacity !== undefined && output.MinCapacity !== null
        ? output.MinCapacity
        : undefined,
    PredefinedLoadMetricSpecification:
      output.PredefinedLoadMetricSpecification !== undefined &&
      output.PredefinedLoadMetricSpecification !== null
        ? deserializeAws_json1_1PredefinedLoadMetricSpecification(
            output.PredefinedLoadMetricSpecification,
            context
          )
        : undefined,
    PredictiveScalingMaxCapacityBehavior:
      output.PredictiveScalingMaxCapacityBehavior !== undefined &&
      output.PredictiveScalingMaxCapacityBehavior !== null
        ? output.PredictiveScalingMaxCapacityBehavior
        : undefined,
    PredictiveScalingMaxCapacityBuffer:
      output.PredictiveScalingMaxCapacityBuffer !== undefined &&
      output.PredictiveScalingMaxCapacityBuffer !== null
        ? output.PredictiveScalingMaxCapacityBuffer
        : undefined,
    PredictiveScalingMode:
      output.PredictiveScalingMode !== undefined &&
      output.PredictiveScalingMode !== null
        ? output.PredictiveScalingMode
        : undefined,
    ResourceId:
      output.ResourceId !== undefined && output.ResourceId !== null
        ? output.ResourceId
        : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined &&
      output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ScalingPolicyUpdateBehavior:
      output.ScalingPolicyUpdateBehavior !== undefined &&
      output.ScalingPolicyUpdateBehavior !== null
        ? output.ScalingPolicyUpdateBehavior
        : undefined,
    ScheduledActionBufferTime:
      output.ScheduledActionBufferTime !== undefined &&
      output.ScheduledActionBufferTime !== null
        ? output.ScheduledActionBufferTime
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null
        ? output.ServiceNamespace
        : undefined,
    TargetTrackingConfigurations:
      output.TargetTrackingConfigurations !== undefined &&
      output.TargetTrackingConfigurations !== null
        ? deserializeAws_json1_1TargetTrackingConfigurations(
            output.TargetTrackingConfigurations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ScalingInstructions = (
  output: any,
  context: __SerdeContext
): ScalingInstruction[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingInstruction(entry, context)
  );
};

const deserializeAws_json1_1ScalingPlan = (
  output: any,
  context: __SerdeContext
): ScalingPlan => {
  return {
    __type: "ScalingPlan",
    ApplicationSource:
      output.ApplicationSource !== undefined &&
      output.ApplicationSource !== null
        ? deserializeAws_json1_1ApplicationSource(
            output.ApplicationSource,
            context
          )
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    ScalingInstructions:
      output.ScalingInstructions !== undefined &&
      output.ScalingInstructions !== null
        ? deserializeAws_json1_1ScalingInstructions(
            output.ScalingInstructions,
            context
          )
        : undefined,
    ScalingPlanName:
      output.ScalingPlanName !== undefined && output.ScalingPlanName !== null
        ? output.ScalingPlanName
        : undefined,
    ScalingPlanVersion:
      output.ScalingPlanVersion !== undefined &&
      output.ScalingPlanVersion !== null
        ? output.ScalingPlanVersion
        : undefined,
    StatusCode:
      output.StatusCode !== undefined && output.StatusCode !== null
        ? output.StatusCode
        : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null
        ? output.StatusMessage
        : undefined,
    StatusStartTime:
      output.StatusStartTime !== undefined && output.StatusStartTime !== null
        ? new Date(Math.round(output.StatusStartTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1ScalingPlanResource = (
  output: any,
  context: __SerdeContext
): ScalingPlanResource => {
  return {
    __type: "ScalingPlanResource",
    ResourceId:
      output.ResourceId !== undefined && output.ResourceId !== null
        ? output.ResourceId
        : undefined,
    ScalableDimension:
      output.ScalableDimension !== undefined &&
      output.ScalableDimension !== null
        ? output.ScalableDimension
        : undefined,
    ScalingPlanName:
      output.ScalingPlanName !== undefined && output.ScalingPlanName !== null
        ? output.ScalingPlanName
        : undefined,
    ScalingPlanVersion:
      output.ScalingPlanVersion !== undefined &&
      output.ScalingPlanVersion !== null
        ? output.ScalingPlanVersion
        : undefined,
    ScalingPolicies:
      output.ScalingPolicies !== undefined && output.ScalingPolicies !== null
        ? deserializeAws_json1_1ScalingPolicies(output.ScalingPolicies, context)
        : undefined,
    ScalingStatusCode:
      output.ScalingStatusCode !== undefined &&
      output.ScalingStatusCode !== null
        ? output.ScalingStatusCode
        : undefined,
    ScalingStatusMessage:
      output.ScalingStatusMessage !== undefined &&
      output.ScalingStatusMessage !== null
        ? output.ScalingStatusMessage
        : undefined,
    ServiceNamespace:
      output.ServiceNamespace !== undefined && output.ServiceNamespace !== null
        ? output.ServiceNamespace
        : undefined
  } as any;
};

const deserializeAws_json1_1ScalingPlanResources = (
  output: any,
  context: __SerdeContext
): ScalingPlanResource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingPlanResource(entry, context)
  );
};

const deserializeAws_json1_1ScalingPlans = (
  output: any,
  context: __SerdeContext
): ScalingPlan[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingPlan(entry, context)
  );
};

const deserializeAws_json1_1ScalingPolicies = (
  output: any,
  context: __SerdeContext
): ScalingPolicy[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingPolicy(entry, context)
  );
};

const deserializeAws_json1_1ScalingPolicy = (
  output: any,
  context: __SerdeContext
): ScalingPolicy => {
  return {
    __type: "ScalingPolicy",
    PolicyName:
      output.PolicyName !== undefined && output.PolicyName !== null
        ? output.PolicyName
        : undefined,
    PolicyType:
      output.PolicyType !== undefined && output.PolicyType !== null
        ? output.PolicyType
        : undefined,
    TargetTrackingConfiguration:
      output.TargetTrackingConfiguration !== undefined &&
      output.TargetTrackingConfiguration !== null
        ? deserializeAws_json1_1TargetTrackingConfiguration(
            output.TargetTrackingConfiguration,
            context
          )
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
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1TagValues(output.Values, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1TagFilters = (
  output: any,
  context: __SerdeContext
): TagFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TagFilter(entry, context)
  );
};

const deserializeAws_json1_1TagValues = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TargetTrackingConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingConfiguration => {
  return {
    __type: "TargetTrackingConfiguration",
    CustomizedScalingMetricSpecification:
      output.CustomizedScalingMetricSpecification !== undefined &&
      output.CustomizedScalingMetricSpecification !== null
        ? deserializeAws_json1_1CustomizedScalingMetricSpecification(
            output.CustomizedScalingMetricSpecification,
            context
          )
        : undefined,
    DisableScaleIn:
      output.DisableScaleIn !== undefined && output.DisableScaleIn !== null
        ? output.DisableScaleIn
        : undefined,
    EstimatedInstanceWarmup:
      output.EstimatedInstanceWarmup !== undefined &&
      output.EstimatedInstanceWarmup !== null
        ? output.EstimatedInstanceWarmup
        : undefined,
    PredefinedScalingMetricSpecification:
      output.PredefinedScalingMetricSpecification !== undefined &&
      output.PredefinedScalingMetricSpecification !== null
        ? deserializeAws_json1_1PredefinedScalingMetricSpecification(
            output.PredefinedScalingMetricSpecification,
            context
          )
        : undefined,
    ScaleInCooldown:
      output.ScaleInCooldown !== undefined && output.ScaleInCooldown !== null
        ? output.ScaleInCooldown
        : undefined,
    ScaleOutCooldown:
      output.ScaleOutCooldown !== undefined && output.ScaleOutCooldown !== null
        ? output.ScaleOutCooldown
        : undefined,
    TargetValue:
      output.TargetValue !== undefined && output.TargetValue !== null
        ? output.TargetValue
        : undefined
  } as any;
};

const deserializeAws_json1_1TargetTrackingConfigurations = (
  output: any,
  context: __SerdeContext
): TargetTrackingConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TargetTrackingConfiguration(entry, context)
  );
};

const deserializeAws_json1_1UpdateScalingPlanResponse = (
  output: any,
  context: __SerdeContext
): UpdateScalingPlanResponse => {
  return {
    __type: "UpdateScalingPlanResponse"
  } as any;
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  return {
    __type: "ValidationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
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
