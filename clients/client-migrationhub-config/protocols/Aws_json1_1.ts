import {
  CreateHomeRegionControlCommandInput,
  CreateHomeRegionControlCommandOutput,
} from "../commands/CreateHomeRegionControlCommand";
import {
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput,
} from "../commands/DescribeHomeRegionControlsCommand";
import {
  GetHomeRegionCommandInput,
  GetHomeRegionCommandOutput,
} from "../commands/GetHomeRegionCommand";
import {
  AccessDeniedException,
  CreateHomeRegionControlRequest,
  CreateHomeRegionControlResult,
  DescribeHomeRegionControlsRequest,
  DescribeHomeRegionControlsResult,
  DryRunOperation,
  GetHomeRegionRequest,
  GetHomeRegionResult,
  HomeRegionControl,
  InternalServerError,
  InvalidInputException,
  ServiceUnavailableException,
  Target,
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

export async function serializeAws_json1_1CreateHomeRegionControlCommand(
  input: CreateHomeRegionControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSMigrationHubMultiAccountService.CreateHomeRegionControl";
  let body: any = {};
  const wrappedBody: any = {
    CreateHomeRegionControlRequest: serializeAws_json1_1CreateHomeRegionControlRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateHomeRegionControl",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeHomeRegionControlsCommand(
  input: DescribeHomeRegionControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls";
  let body: any = {};
  const wrappedBody: any = {
    DescribeHomeRegionControlsRequest: serializeAws_json1_1DescribeHomeRegionControlsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeHomeRegionControls",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GetHomeRegionCommand(
  input: GetHomeRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSMigrationHubMultiAccountService.GetHomeRegion";
  let body: any = {};
  const wrappedBody: any = {
    GetHomeRegionRequest: serializeAws_json1_1GetHomeRegionRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetHomeRegion",
    headers: headers,
    body: body,
  });
}

export async function deserializeAws_json1_1CreateHomeRegionControlCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHomeRegionControlCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateHomeRegionControlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHomeRegionControlResult(data, context);
  const response: CreateHomeRegionControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateHomeRegionControlResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateHomeRegionControlCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateHomeRegionControlCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsmigrationhubmultiaccount#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "DryRunOperation":
    case "com.amazonaws.awsmigrationhubmultiaccount#DryRunOperation":
      response = await deserializeAws_json1_1DryRunOperationResponse(parsedOutput, context);
      break;
    case "InternalServerError":
    case "com.amazonaws.awsmigrationhubmultiaccount#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.awsmigrationhubmultiaccount#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.awsmigrationhubmultiaccount#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsmigrationhubmultiaccount#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeHomeRegionControlsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHomeRegionControlsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeHomeRegionControlsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHomeRegionControlsResult(data, context);
  const response: DescribeHomeRegionControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeHomeRegionControlsResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeHomeRegionControlsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeHomeRegionControlsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsmigrationhubmultiaccount#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerError":
    case "com.amazonaws.awsmigrationhubmultiaccount#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.awsmigrationhubmultiaccount#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.awsmigrationhubmultiaccount#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsmigrationhubmultiaccount#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetHomeRegionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHomeRegionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetHomeRegionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetHomeRegionResult(data, context);
  const response: GetHomeRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetHomeRegionResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetHomeRegionCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetHomeRegionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.awsmigrationhubmultiaccount#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerError":
    case "com.amazonaws.awsmigrationhubmultiaccount#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.awsmigrationhubmultiaccount#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.awsmigrationhubmultiaccount#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.awsmigrationhubmultiaccount#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(output.body, context);
  const contents: AccessDeniedException = {
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DryRunOperationResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DryRunOperation> => {
  const deserialized: any = deserializeAws_json1_1DryRunOperation(output.body, context);
  const contents: DryRunOperation = {
    __type: "DryRunOperation",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const deserialized: any = deserializeAws_json1_1InternalServerError(output.body, context);
  const contents: InternalServerError = {
    __type: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const deserialized: any = deserializeAws_json1_1InvalidInputException(output.body, context);
  const contents: InvalidInputException = {
    __type: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(output.body, context);
  const contents: ServiceUnavailableException = {
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1CreateHomeRegionControlRequest = (
  input: CreateHomeRegionControlRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DryRun !== undefined) {
    bodyParams['DryRun'] = input.DryRun;
  }
  if (input.HomeRegion !== undefined) {
    bodyParams['HomeRegion'] = input.HomeRegion;
  }
  if (input.Target !== undefined) {
    bodyParams['Target'] = serializeAws_json1_1Target(input.Target, context);
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeHomeRegionControlsRequest = (
  input: DescribeHomeRegionControlsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ControlId !== undefined) {
    bodyParams['ControlId'] = input.ControlId;
  }
  if (input.HomeRegion !== undefined) {
    bodyParams['HomeRegion'] = input.HomeRegion;
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.Target !== undefined) {
    bodyParams['Target'] = serializeAws_json1_1Target(input.Target, context);
  }
  return bodyParams;
}

const serializeAws_json1_1GetHomeRegionRequest = (
  input: GetHomeRegionRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
}

const serializeAws_json1_1Target = (
  input: Target,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams['Id'] = input.Id;
  }
  if (input.Type !== undefined) {
    bodyParams['Type'] = input.Type;
  }
  return bodyParams;
}

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1CreateHomeRegionControlResult = (
  output: any,
  context: __SerdeContext
): CreateHomeRegionControlResult => {
  let contents: any = {
    __type: "CreateHomeRegionControlResult",
    HomeRegionControl: undefined,
  };
  if (output.HomeRegionControl !== undefined) {
    contents.HomeRegionControl = deserializeAws_json1_1HomeRegionControl(output.HomeRegionControl, context);
  }
  return contents;
}

const deserializeAws_json1_1DescribeHomeRegionControlsResult = (
  output: any,
  context: __SerdeContext
): DescribeHomeRegionControlsResult => {
  let contents: any = {
    __type: "DescribeHomeRegionControlsResult",
    HomeRegionControls: undefined,
    NextToken: undefined,
  };
  if (output.HomeRegionControls !== undefined) {
    contents.HomeRegionControls = deserializeAws_json1_1HomeRegionControls(output.HomeRegionControls, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
}

const deserializeAws_json1_1DryRunOperation = (
  output: any,
  context: __SerdeContext
): DryRunOperation => {
  let contents: any = {
    __type: "DryRunOperation",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1GetHomeRegionResult = (
  output: any,
  context: __SerdeContext
): GetHomeRegionResult => {
  let contents: any = {
    __type: "GetHomeRegionResult",
    HomeRegion: undefined,
  };
  if (output.HomeRegion !== undefined) {
    contents.HomeRegion = output.HomeRegion;
  }
  return contents;
}

const deserializeAws_json1_1HomeRegionControl = (
  output: any,
  context: __SerdeContext
): HomeRegionControl => {
  let contents: any = {
    __type: "HomeRegionControl",
    ControlId: undefined,
    HomeRegion: undefined,
    RequestedTime: undefined,
    Target: undefined,
  };
  if (output.ControlId !== undefined) {
    contents.ControlId = output.ControlId;
  }
  if (output.HomeRegion !== undefined) {
    contents.HomeRegion = output.HomeRegion;
  }
  if (output.RequestedTime !== undefined) {
    contents.RequestedTime = new Date(output.RequestedTime % 1 != 0 ? Math.round(output.RequestedTime * 1000) : output.RequestedTime);
  }
  if (output.Target !== undefined) {
    contents.Target = deserializeAws_json1_1Target(output.Target, context);
  }
  return contents;
}

const deserializeAws_json1_1HomeRegionControls = (
  output: any,
  context: __SerdeContext
): Array<HomeRegionControl> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HomeRegionControl(entry, context)
  );
}

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  let contents: any = {
    __type: "InternalServerError",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1Target = (
  output: any,
  context: __SerdeContext
): Target => {
  let contents: any = {
    __type: "Target",
    Id: undefined,
    Type: undefined,
  };
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
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
