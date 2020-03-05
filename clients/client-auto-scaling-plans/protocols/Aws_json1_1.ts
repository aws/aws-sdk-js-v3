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

export async function serializeAws_json1_1CreateScalingPlanCommand(
  input: CreateScalingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AnyScaleScalingPlannerFrontendService.CreateScalingPlan";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateScalingPlanRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteScalingPlanCommand(
  input: DeleteScalingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AnyScaleScalingPlannerFrontendService.DeleteScalingPlan";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteScalingPlanRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeScalingPlanResourcesCommand(
  input: DescribeScalingPlanResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeScalingPlanResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeScalingPlansCommand(
  input: DescribeScalingPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeScalingPlansRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetScalingPlanResourceForecastDataCommand(
  input: GetScalingPlanResourceForecastDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetScalingPlanResourceForecastDataRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateScalingPlanCommand(
  input: UpdateScalingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateScalingPlanRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateScalingPlanCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScalingPlanCommandOutput> {
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
}

async function deserializeAws_json1_1CreateScalingPlanCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScalingPlanCommandOutput> {
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
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ValidationException":
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

export async function deserializeAws_json1_1DeleteScalingPlanCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPlanCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteScalingPlanCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScalingPlanCommandOutput> {
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
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ValidationException":
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

export async function deserializeAws_json1_1DescribeScalingPlanResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlanResourcesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeScalingPlanResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlanResourcesCommandOutput> {
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
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ValidationException":
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

export async function deserializeAws_json1_1DescribeScalingPlansCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlansCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeScalingPlansCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScalingPlansCommandOutput> {
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
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ValidationException":
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

export async function deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScalingPlanResourceForecastDataCommandOutput> {
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
}

async function deserializeAws_json1_1GetScalingPlanResourceForecastDataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScalingPlanResourceForecastDataCommandOutput> {
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
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ValidationException":
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

export async function deserializeAws_json1_1UpdateScalingPlanCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingPlanCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateScalingPlanCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScalingPlanCommandOutput> {
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
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ConcurrentUpdateException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentUpdateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ObjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.autoscaling.anyscale.scaling_planner.frontend#ValidationException":
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
  const bodyParams: any = {};
  if (input.CloudFormationStackARN !== undefined) {
    bodyParams["CloudFormationStackARN"] = input.CloudFormationStackARN;
  }
  if (input.TagFilters !== undefined) {
    bodyParams["TagFilters"] = serializeAws_json1_1TagFilters(
      input.TagFilters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ApplicationSources = (
  input: Array<ApplicationSource>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ApplicationSource(entry, context));
  }
  return contents;
};

const serializeAws_json1_1CreateScalingPlanRequest = (
  input: CreateScalingPlanRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationSource !== undefined) {
    bodyParams["ApplicationSource"] = serializeAws_json1_1ApplicationSource(
      input.ApplicationSource,
      context
    );
  }
  if (input.ScalingInstructions !== undefined) {
    bodyParams["ScalingInstructions"] = serializeAws_json1_1ScalingInstructions(
      input.ScalingInstructions,
      context
    );
  }
  if (input.ScalingPlanName !== undefined) {
    bodyParams["ScalingPlanName"] = input.ScalingPlanName;
  }
  return bodyParams;
};

const serializeAws_json1_1CustomizedLoadMetricSpecification = (
  input: CustomizedLoadMetricSpecification,
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

const serializeAws_json1_1CustomizedScalingMetricSpecification = (
  input: CustomizedScalingMetricSpecification,
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

const serializeAws_json1_1DeleteScalingPlanRequest = (
  input: DeleteScalingPlanRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ScalingPlanName !== undefined) {
    bodyParams["ScalingPlanName"] = input.ScalingPlanName;
  }
  if (input.ScalingPlanVersion !== undefined) {
    bodyParams["ScalingPlanVersion"] = input.ScalingPlanVersion;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeScalingPlanResourcesRequest = (
  input: DescribeScalingPlanResourcesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ScalingPlanName !== undefined) {
    bodyParams["ScalingPlanName"] = input.ScalingPlanName;
  }
  if (input.ScalingPlanVersion !== undefined) {
    bodyParams["ScalingPlanVersion"] = input.ScalingPlanVersion;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeScalingPlansRequest = (
  input: DescribeScalingPlansRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationSources !== undefined) {
    bodyParams["ApplicationSources"] = serializeAws_json1_1ApplicationSources(
      input.ApplicationSources,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ScalingPlanNames !== undefined) {
    bodyParams["ScalingPlanNames"] = serializeAws_json1_1ScalingPlanNames(
      input.ScalingPlanNames,
      context
    );
  }
  if (input.ScalingPlanVersion !== undefined) {
    bodyParams["ScalingPlanVersion"] = input.ScalingPlanVersion;
  }
  return bodyParams;
};

const serializeAws_json1_1GetScalingPlanResourceForecastDataRequest = (
  input: GetScalingPlanResourceForecastDataRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.ForecastDataType !== undefined) {
    bodyParams["ForecastDataType"] = input.ForecastDataType;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams["ScalableDimension"] = input.ScalableDimension;
  }
  if (input.ScalingPlanName !== undefined) {
    bodyParams["ScalingPlanName"] = input.ScalingPlanName;
  }
  if (input.ScalingPlanVersion !== undefined) {
    bodyParams["ScalingPlanVersion"] = input.ScalingPlanVersion;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams["ServiceNamespace"] = input.ServiceNamespace;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
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

const serializeAws_json1_1PredefinedLoadMetricSpecification = (
  input: PredefinedLoadMetricSpecification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PredefinedLoadMetricType !== undefined) {
    bodyParams["PredefinedLoadMetricType"] = input.PredefinedLoadMetricType;
  }
  if (input.ResourceLabel !== undefined) {
    bodyParams["ResourceLabel"] = input.ResourceLabel;
  }
  return bodyParams;
};

const serializeAws_json1_1PredefinedScalingMetricSpecification = (
  input: PredefinedScalingMetricSpecification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PredefinedScalingMetricType !== undefined) {
    bodyParams["PredefinedScalingMetricType"] =
      input.PredefinedScalingMetricType;
  }
  if (input.ResourceLabel !== undefined) {
    bodyParams["ResourceLabel"] = input.ResourceLabel;
  }
  return bodyParams;
};

const serializeAws_json1_1ScalingInstruction = (
  input: ScalingInstruction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomizedLoadMetricSpecification !== undefined) {
    bodyParams[
      "CustomizedLoadMetricSpecification"
    ] = serializeAws_json1_1CustomizedLoadMetricSpecification(
      input.CustomizedLoadMetricSpecification,
      context
    );
  }
  if (input.DisableDynamicScaling !== undefined) {
    bodyParams["DisableDynamicScaling"] = input.DisableDynamicScaling;
  }
  if (input.MaxCapacity !== undefined) {
    bodyParams["MaxCapacity"] = input.MaxCapacity;
  }
  if (input.MinCapacity !== undefined) {
    bodyParams["MinCapacity"] = input.MinCapacity;
  }
  if (input.PredefinedLoadMetricSpecification !== undefined) {
    bodyParams[
      "PredefinedLoadMetricSpecification"
    ] = serializeAws_json1_1PredefinedLoadMetricSpecification(
      input.PredefinedLoadMetricSpecification,
      context
    );
  }
  if (input.PredictiveScalingMaxCapacityBehavior !== undefined) {
    bodyParams["PredictiveScalingMaxCapacityBehavior"] =
      input.PredictiveScalingMaxCapacityBehavior;
  }
  if (input.PredictiveScalingMaxCapacityBuffer !== undefined) {
    bodyParams["PredictiveScalingMaxCapacityBuffer"] =
      input.PredictiveScalingMaxCapacityBuffer;
  }
  if (input.PredictiveScalingMode !== undefined) {
    bodyParams["PredictiveScalingMode"] = input.PredictiveScalingMode;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.ScalableDimension !== undefined) {
    bodyParams["ScalableDimension"] = input.ScalableDimension;
  }
  if (input.ScalingPolicyUpdateBehavior !== undefined) {
    bodyParams["ScalingPolicyUpdateBehavior"] =
      input.ScalingPolicyUpdateBehavior;
  }
  if (input.ScheduledActionBufferTime !== undefined) {
    bodyParams["ScheduledActionBufferTime"] = input.ScheduledActionBufferTime;
  }
  if (input.ServiceNamespace !== undefined) {
    bodyParams["ServiceNamespace"] = input.ServiceNamespace;
  }
  if (input.TargetTrackingConfigurations !== undefined) {
    bodyParams[
      "TargetTrackingConfigurations"
    ] = serializeAws_json1_1TargetTrackingConfigurations(
      input.TargetTrackingConfigurations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ScalingInstructions = (
  input: Array<ScalingInstruction>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ScalingInstruction(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ScalingPlanNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagFilter = (
  input: TagFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_json1_1TagValues(input.Values, context);
  }
  return bodyParams;
};

const serializeAws_json1_1TagFilters = (
  input: Array<TagFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1TagFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TargetTrackingConfiguration = (
  input: TargetTrackingConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomizedScalingMetricSpecification !== undefined) {
    bodyParams[
      "CustomizedScalingMetricSpecification"
    ] = serializeAws_json1_1CustomizedScalingMetricSpecification(
      input.CustomizedScalingMetricSpecification,
      context
    );
  }
  if (input.DisableScaleIn !== undefined) {
    bodyParams["DisableScaleIn"] = input.DisableScaleIn;
  }
  if (input.EstimatedInstanceWarmup !== undefined) {
    bodyParams["EstimatedInstanceWarmup"] = input.EstimatedInstanceWarmup;
  }
  if (input.PredefinedScalingMetricSpecification !== undefined) {
    bodyParams[
      "PredefinedScalingMetricSpecification"
    ] = serializeAws_json1_1PredefinedScalingMetricSpecification(
      input.PredefinedScalingMetricSpecification,
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

const serializeAws_json1_1TargetTrackingConfigurations = (
  input: Array<TargetTrackingConfiguration>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_json1_1TargetTrackingConfiguration(entry, context)
    );
  }
  return contents;
};

const serializeAws_json1_1UpdateScalingPlanRequest = (
  input: UpdateScalingPlanRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationSource !== undefined) {
    bodyParams["ApplicationSource"] = serializeAws_json1_1ApplicationSource(
      input.ApplicationSource,
      context
    );
  }
  if (input.ScalingInstructions !== undefined) {
    bodyParams["ScalingInstructions"] = serializeAws_json1_1ScalingInstructions(
      input.ScalingInstructions,
      context
    );
  }
  if (input.ScalingPlanName !== undefined) {
    bodyParams["ScalingPlanName"] = input.ScalingPlanName;
  }
  if (input.ScalingPlanVersion !== undefined) {
    bodyParams["ScalingPlanVersion"] = input.ScalingPlanVersion;
  }
  return bodyParams;
};

const deserializeAws_json1_1ApplicationSource = (
  output: any,
  context: __SerdeContext
): ApplicationSource => {
  let contents: any = {
    __type: "ApplicationSource",
    CloudFormationStackARN: undefined,
    TagFilters: undefined
  };
  if (
    output.CloudFormationStackARN !== undefined &&
    output.CloudFormationStackARN !== null
  ) {
    contents.CloudFormationStackARN = output.CloudFormationStackARN;
  }
  if (output.TagFilters !== undefined && output.TagFilters !== null) {
    contents.TagFilters = deserializeAws_json1_1TagFilters(
      output.TagFilters,
      context
    );
  }
  return contents;
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

const deserializeAws_json1_1CreateScalingPlanResponse = (
  output: any,
  context: __SerdeContext
): CreateScalingPlanResponse => {
  let contents: any = {
    __type: "CreateScalingPlanResponse",
    ScalingPlanVersion: undefined
  };
  if (
    output.ScalingPlanVersion !== undefined &&
    output.ScalingPlanVersion !== null
  ) {
    contents.ScalingPlanVersion = output.ScalingPlanVersion;
  }
  return contents;
};

const deserializeAws_json1_1CustomizedLoadMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedLoadMetricSpecification => {
  let contents: any = {
    __type: "CustomizedLoadMetricSpecification",
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

const deserializeAws_json1_1CustomizedScalingMetricSpecification = (
  output: any,
  context: __SerdeContext
): CustomizedScalingMetricSpecification => {
  let contents: any = {
    __type: "CustomizedScalingMetricSpecification",
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

const deserializeAws_json1_1Datapoint = (
  output: any,
  context: __SerdeContext
): Datapoint => {
  let contents: any = {
    __type: "Datapoint",
    Timestamp: undefined,
    Value: undefined
  };
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1Datapoints = (
  output: any,
  context: __SerdeContext
): Array<Datapoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Datapoint(entry, context)
  );
};

const deserializeAws_json1_1DeleteScalingPlanResponse = (
  output: any,
  context: __SerdeContext
): DeleteScalingPlanResponse => {
  let contents: any = {
    __type: "DeleteScalingPlanResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeScalingPlanResourcesResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingPlanResourcesResponse => {
  let contents: any = {
    __type: "DescribeScalingPlanResourcesResponse",
    NextToken: undefined,
    ScalingPlanResources: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ScalingPlanResources !== undefined &&
    output.ScalingPlanResources !== null
  ) {
    contents.ScalingPlanResources = deserializeAws_json1_1ScalingPlanResources(
      output.ScalingPlanResources,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeScalingPlansResponse = (
  output: any,
  context: __SerdeContext
): DescribeScalingPlansResponse => {
  let contents: any = {
    __type: "DescribeScalingPlansResponse",
    NextToken: undefined,
    ScalingPlans: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.ScalingPlans !== undefined && output.ScalingPlans !== null) {
    contents.ScalingPlans = deserializeAws_json1_1ScalingPlans(
      output.ScalingPlans,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetScalingPlanResourceForecastDataResponse = (
  output: any,
  context: __SerdeContext
): GetScalingPlanResourceForecastDataResponse => {
  let contents: any = {
    __type: "GetScalingPlanResourceForecastDataResponse",
    Datapoints: undefined
  };
  if (output.Datapoints !== undefined && output.Datapoints !== null) {
    contents.Datapoints = deserializeAws_json1_1Datapoints(
      output.Datapoints,
      context
    );
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

const deserializeAws_json1_1PredefinedLoadMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedLoadMetricSpecification => {
  let contents: any = {
    __type: "PredefinedLoadMetricSpecification",
    PredefinedLoadMetricType: undefined,
    ResourceLabel: undefined
  };
  if (
    output.PredefinedLoadMetricType !== undefined &&
    output.PredefinedLoadMetricType !== null
  ) {
    contents.PredefinedLoadMetricType = output.PredefinedLoadMetricType;
  }
  if (output.ResourceLabel !== undefined && output.ResourceLabel !== null) {
    contents.ResourceLabel = output.ResourceLabel;
  }
  return contents;
};

const deserializeAws_json1_1PredefinedScalingMetricSpecification = (
  output: any,
  context: __SerdeContext
): PredefinedScalingMetricSpecification => {
  let contents: any = {
    __type: "PredefinedScalingMetricSpecification",
    PredefinedScalingMetricType: undefined,
    ResourceLabel: undefined
  };
  if (
    output.PredefinedScalingMetricType !== undefined &&
    output.PredefinedScalingMetricType !== null
  ) {
    contents.PredefinedScalingMetricType = output.PredefinedScalingMetricType;
  }
  if (output.ResourceLabel !== undefined && output.ResourceLabel !== null) {
    contents.ResourceLabel = output.ResourceLabel;
  }
  return contents;
};

const deserializeAws_json1_1ScalingInstruction = (
  output: any,
  context: __SerdeContext
): ScalingInstruction => {
  let contents: any = {
    __type: "ScalingInstruction",
    CustomizedLoadMetricSpecification: undefined,
    DisableDynamicScaling: undefined,
    MaxCapacity: undefined,
    MinCapacity: undefined,
    PredefinedLoadMetricSpecification: undefined,
    PredictiveScalingMaxCapacityBehavior: undefined,
    PredictiveScalingMaxCapacityBuffer: undefined,
    PredictiveScalingMode: undefined,
    ResourceId: undefined,
    ScalableDimension: undefined,
    ScalingPolicyUpdateBehavior: undefined,
    ScheduledActionBufferTime: undefined,
    ServiceNamespace: undefined,
    TargetTrackingConfigurations: undefined
  };
  if (
    output.CustomizedLoadMetricSpecification !== undefined &&
    output.CustomizedLoadMetricSpecification !== null
  ) {
    contents.CustomizedLoadMetricSpecification = deserializeAws_json1_1CustomizedLoadMetricSpecification(
      output.CustomizedLoadMetricSpecification,
      context
    );
  }
  if (
    output.DisableDynamicScaling !== undefined &&
    output.DisableDynamicScaling !== null
  ) {
    contents.DisableDynamicScaling = output.DisableDynamicScaling;
  }
  if (output.MaxCapacity !== undefined && output.MaxCapacity !== null) {
    contents.MaxCapacity = output.MaxCapacity;
  }
  if (output.MinCapacity !== undefined && output.MinCapacity !== null) {
    contents.MinCapacity = output.MinCapacity;
  }
  if (
    output.PredefinedLoadMetricSpecification !== undefined &&
    output.PredefinedLoadMetricSpecification !== null
  ) {
    contents.PredefinedLoadMetricSpecification = deserializeAws_json1_1PredefinedLoadMetricSpecification(
      output.PredefinedLoadMetricSpecification,
      context
    );
  }
  if (
    output.PredictiveScalingMaxCapacityBehavior !== undefined &&
    output.PredictiveScalingMaxCapacityBehavior !== null
  ) {
    contents.PredictiveScalingMaxCapacityBehavior =
      output.PredictiveScalingMaxCapacityBehavior;
  }
  if (
    output.PredictiveScalingMaxCapacityBuffer !== undefined &&
    output.PredictiveScalingMaxCapacityBuffer !== null
  ) {
    contents.PredictiveScalingMaxCapacityBuffer =
      output.PredictiveScalingMaxCapacityBuffer;
  }
  if (
    output.PredictiveScalingMode !== undefined &&
    output.PredictiveScalingMode !== null
  ) {
    contents.PredictiveScalingMode = output.PredictiveScalingMode;
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
    output.ScalingPolicyUpdateBehavior !== undefined &&
    output.ScalingPolicyUpdateBehavior !== null
  ) {
    contents.ScalingPolicyUpdateBehavior = output.ScalingPolicyUpdateBehavior;
  }
  if (
    output.ScheduledActionBufferTime !== undefined &&
    output.ScheduledActionBufferTime !== null
  ) {
    contents.ScheduledActionBufferTime = output.ScheduledActionBufferTime;
  }
  if (
    output.ServiceNamespace !== undefined &&
    output.ServiceNamespace !== null
  ) {
    contents.ServiceNamespace = output.ServiceNamespace;
  }
  if (
    output.TargetTrackingConfigurations !== undefined &&
    output.TargetTrackingConfigurations !== null
  ) {
    contents.TargetTrackingConfigurations = deserializeAws_json1_1TargetTrackingConfigurations(
      output.TargetTrackingConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ScalingInstructions = (
  output: any,
  context: __SerdeContext
): Array<ScalingInstruction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingInstruction(entry, context)
  );
};

const deserializeAws_json1_1ScalingPlan = (
  output: any,
  context: __SerdeContext
): ScalingPlan => {
  let contents: any = {
    __type: "ScalingPlan",
    ApplicationSource: undefined,
    CreationTime: undefined,
    ScalingInstructions: undefined,
    ScalingPlanName: undefined,
    ScalingPlanVersion: undefined,
    StatusCode: undefined,
    StatusMessage: undefined,
    StatusStartTime: undefined
  };
  if (
    output.ApplicationSource !== undefined &&
    output.ApplicationSource !== null
  ) {
    contents.ApplicationSource = deserializeAws_json1_1ApplicationSource(
      output.ApplicationSource,
      context
    );
  }
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (
    output.ScalingInstructions !== undefined &&
    output.ScalingInstructions !== null
  ) {
    contents.ScalingInstructions = deserializeAws_json1_1ScalingInstructions(
      output.ScalingInstructions,
      context
    );
  }
  if (output.ScalingPlanName !== undefined && output.ScalingPlanName !== null) {
    contents.ScalingPlanName = output.ScalingPlanName;
  }
  if (
    output.ScalingPlanVersion !== undefined &&
    output.ScalingPlanVersion !== null
  ) {
    contents.ScalingPlanVersion = output.ScalingPlanVersion;
  }
  if (output.StatusCode !== undefined && output.StatusCode !== null) {
    contents.StatusCode = output.StatusCode;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.StatusStartTime !== undefined && output.StatusStartTime !== null) {
    contents.StatusStartTime = new Date(
      Math.round(output.StatusStartTime * 1000)
    );
  }
  return contents;
};

const deserializeAws_json1_1ScalingPlanResource = (
  output: any,
  context: __SerdeContext
): ScalingPlanResource => {
  let contents: any = {
    __type: "ScalingPlanResource",
    ResourceId: undefined,
    ScalableDimension: undefined,
    ScalingPlanName: undefined,
    ScalingPlanVersion: undefined,
    ScalingPolicies: undefined,
    ScalingStatusCode: undefined,
    ScalingStatusMessage: undefined,
    ServiceNamespace: undefined
  };
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = output.ResourceId;
  }
  if (
    output.ScalableDimension !== undefined &&
    output.ScalableDimension !== null
  ) {
    contents.ScalableDimension = output.ScalableDimension;
  }
  if (output.ScalingPlanName !== undefined && output.ScalingPlanName !== null) {
    contents.ScalingPlanName = output.ScalingPlanName;
  }
  if (
    output.ScalingPlanVersion !== undefined &&
    output.ScalingPlanVersion !== null
  ) {
    contents.ScalingPlanVersion = output.ScalingPlanVersion;
  }
  if (output.ScalingPolicies !== undefined && output.ScalingPolicies !== null) {
    contents.ScalingPolicies = deserializeAws_json1_1ScalingPolicies(
      output.ScalingPolicies,
      context
    );
  }
  if (
    output.ScalingStatusCode !== undefined &&
    output.ScalingStatusCode !== null
  ) {
    contents.ScalingStatusCode = output.ScalingStatusCode;
  }
  if (
    output.ScalingStatusMessage !== undefined &&
    output.ScalingStatusMessage !== null
  ) {
    contents.ScalingStatusMessage = output.ScalingStatusMessage;
  }
  if (
    output.ServiceNamespace !== undefined &&
    output.ServiceNamespace !== null
  ) {
    contents.ServiceNamespace = output.ServiceNamespace;
  }
  return contents;
};

const deserializeAws_json1_1ScalingPlanResources = (
  output: any,
  context: __SerdeContext
): Array<ScalingPlanResource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingPlanResource(entry, context)
  );
};

const deserializeAws_json1_1ScalingPlans = (
  output: any,
  context: __SerdeContext
): Array<ScalingPlan> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ScalingPlan(entry, context)
  );
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
    PolicyName: undefined,
    PolicyType: undefined,
    TargetTrackingConfiguration: undefined
  };
  if (output.PolicyName !== undefined && output.PolicyName !== null) {
    contents.PolicyName = output.PolicyName;
  }
  if (output.PolicyType !== undefined && output.PolicyType !== null) {
    contents.PolicyType = output.PolicyType;
  }
  if (
    output.TargetTrackingConfiguration !== undefined &&
    output.TargetTrackingConfiguration !== null
  ) {
    contents.TargetTrackingConfiguration = deserializeAws_json1_1TargetTrackingConfiguration(
      output.TargetTrackingConfiguration,
      context
    );
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
    Values: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Values !== undefined && output.Values !== null) {
    contents.Values = deserializeAws_json1_1TagValues(output.Values, context);
  }
  return contents;
};

const deserializeAws_json1_1TagFilters = (
  output: any,
  context: __SerdeContext
): Array<TagFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TagFilter(entry, context)
  );
};

const deserializeAws_json1_1TagValues = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TargetTrackingConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingConfiguration => {
  let contents: any = {
    __type: "TargetTrackingConfiguration",
    CustomizedScalingMetricSpecification: undefined,
    DisableScaleIn: undefined,
    EstimatedInstanceWarmup: undefined,
    PredefinedScalingMetricSpecification: undefined,
    ScaleInCooldown: undefined,
    ScaleOutCooldown: undefined,
    TargetValue: undefined
  };
  if (
    output.CustomizedScalingMetricSpecification !== undefined &&
    output.CustomizedScalingMetricSpecification !== null
  ) {
    contents.CustomizedScalingMetricSpecification = deserializeAws_json1_1CustomizedScalingMetricSpecification(
      output.CustomizedScalingMetricSpecification,
      context
    );
  }
  if (output.DisableScaleIn !== undefined && output.DisableScaleIn !== null) {
    contents.DisableScaleIn = output.DisableScaleIn;
  }
  if (
    output.EstimatedInstanceWarmup !== undefined &&
    output.EstimatedInstanceWarmup !== null
  ) {
    contents.EstimatedInstanceWarmup = output.EstimatedInstanceWarmup;
  }
  if (
    output.PredefinedScalingMetricSpecification !== undefined &&
    output.PredefinedScalingMetricSpecification !== null
  ) {
    contents.PredefinedScalingMetricSpecification = deserializeAws_json1_1PredefinedScalingMetricSpecification(
      output.PredefinedScalingMetricSpecification,
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

const deserializeAws_json1_1TargetTrackingConfigurations = (
  output: any,
  context: __SerdeContext
): Array<TargetTrackingConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TargetTrackingConfiguration(entry, context)
  );
};

const deserializeAws_json1_1UpdateScalingPlanResponse = (
  output: any,
  context: __SerdeContext
): UpdateScalingPlanResponse => {
  let contents: any = {
    __type: "UpdateScalingPlanResponse"
  };
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
