import {
  CreateHomeRegionControlCommandInput,
  CreateHomeRegionControlCommandOutput
} from "../commands/CreateHomeRegionControlCommand";
import {
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput
} from "../commands/DescribeHomeRegionControlsCommand";
import {
  GetHomeRegionCommandInput,
  GetHomeRegionCommandOutput
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
  Target
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

export async function serializeAws_json1_1CreateHomeRegionControlCommand(
  input: CreateHomeRegionControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSMigrationHubMultiAccountService.CreateHomeRegionControl";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateHomeRegionControlRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeHomeRegionControlsCommand(
  input: DescribeHomeRegionControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSMigrationHubMultiAccountService.DescribeHomeRegionControls";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeHomeRegionControlsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetHomeRegionCommand(
  input: GetHomeRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHubMultiAccountService.GetHomeRegion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetHomeRegionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateHomeRegionControlCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHomeRegionControlCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateHomeRegionControlCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHomeRegionControlResult(data, context);
  const response: CreateHomeRegionControlCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateHomeRegionControlResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateHomeRegionControlCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHomeRegionControlCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.awsmigrationhubmultiaccount#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazonaws.awsmigrationhubmultiaccount#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.awsmigrationhubmultiaccount#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.awsmigrationhubmultiaccount#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.awsmigrationhubmultiaccount#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1DescribeHomeRegionControlsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHomeRegionControlsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeHomeRegionControlsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHomeRegionControlsResult(
    data,
    context
  );
  const response: DescribeHomeRegionControlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeHomeRegionControlsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeHomeRegionControlsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHomeRegionControlsCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.awsmigrationhubmultiaccount#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.awsmigrationhubmultiaccount#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.awsmigrationhubmultiaccount#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.awsmigrationhubmultiaccount#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1GetHomeRegionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHomeRegionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetHomeRegionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetHomeRegionResult(data, context);
  const response: GetHomeRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetHomeRegionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetHomeRegionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHomeRegionCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.awsmigrationhubmultiaccount#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.awsmigrationhubmultiaccount#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.awsmigrationhubmultiaccount#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.awsmigrationhubmultiaccount#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
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

const deserializeAws_json1_1DryRunOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DryRunOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DryRunOperation(
    body,
    context
  );
  const contents: DryRunOperation = {
    name: "DryRunOperation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(
    body,
    context
  );
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    body,
    context
  );
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(
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

const serializeAws_json1_1CreateHomeRegionControlRequest = (
  input: CreateHomeRegionControlRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.HomeRegion !== undefined) {
    bodyParams["HomeRegion"] = input.HomeRegion;
  }
  if (input.Target !== undefined) {
    bodyParams["Target"] = serializeAws_json1_1Target(input.Target, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeHomeRegionControlsRequest = (
  input: DescribeHomeRegionControlsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ControlId !== undefined) {
    bodyParams["ControlId"] = input.ControlId;
  }
  if (input.HomeRegion !== undefined) {
    bodyParams["HomeRegion"] = input.HomeRegion;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Target !== undefined) {
    bodyParams["Target"] = serializeAws_json1_1Target(input.Target, context);
  }
  return bodyParams;
};

const serializeAws_json1_1GetHomeRegionRequest = (
  input: GetHomeRegionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1Target = (
  input: Target,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CreateHomeRegionControlResult = (
  output: any,
  context: __SerdeContext
): CreateHomeRegionControlResult => {
  let contents: any = {
    __type: "CreateHomeRegionControlResult",
    HomeRegionControl: undefined
  };
  if (
    output.HomeRegionControl !== undefined &&
    output.HomeRegionControl !== null
  ) {
    contents.HomeRegionControl = deserializeAws_json1_1HomeRegionControl(
      output.HomeRegionControl,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeHomeRegionControlsResult = (
  output: any,
  context: __SerdeContext
): DescribeHomeRegionControlsResult => {
  let contents: any = {
    __type: "DescribeHomeRegionControlsResult",
    HomeRegionControls: undefined,
    NextToken: undefined
  };
  if (
    output.HomeRegionControls !== undefined &&
    output.HomeRegionControls !== null
  ) {
    contents.HomeRegionControls = deserializeAws_json1_1HomeRegionControls(
      output.HomeRegionControls,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DryRunOperation = (
  output: any,
  context: __SerdeContext
): DryRunOperation => {
  let contents: any = {
    __type: "DryRunOperation",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1GetHomeRegionResult = (
  output: any,
  context: __SerdeContext
): GetHomeRegionResult => {
  let contents: any = {
    __type: "GetHomeRegionResult",
    HomeRegion: undefined
  };
  if (output.HomeRegion !== undefined && output.HomeRegion !== null) {
    contents.HomeRegion = output.HomeRegion;
  }
  return contents;
};

const deserializeAws_json1_1HomeRegionControl = (
  output: any,
  context: __SerdeContext
): HomeRegionControl => {
  let contents: any = {
    __type: "HomeRegionControl",
    ControlId: undefined,
    HomeRegion: undefined,
    RequestedTime: undefined,
    Target: undefined
  };
  if (output.ControlId !== undefined && output.ControlId !== null) {
    contents.ControlId = output.ControlId;
  }
  if (output.HomeRegion !== undefined && output.HomeRegion !== null) {
    contents.HomeRegion = output.HomeRegion;
  }
  if (output.RequestedTime !== undefined && output.RequestedTime !== null) {
    contents.RequestedTime = new Date(Math.round(output.RequestedTime * 1000));
  }
  if (output.Target !== undefined && output.Target !== null) {
    contents.Target = deserializeAws_json1_1Target(output.Target, context);
  }
  return contents;
};

const deserializeAws_json1_1HomeRegionControls = (
  output: any,
  context: __SerdeContext
): Array<HomeRegionControl> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HomeRegionControl(entry, context)
  );
};

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  let contents: any = {
    __type: "InternalServerError",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Target = (
  output: any,
  context: __SerdeContext
): Target => {
  let contents: any = {
    __type: "Target",
    Id: undefined,
    Type: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
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
