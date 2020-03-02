import {
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput
} from "../commands/DeleteConnectionCommand";
import {
  GetConnectionCommandInput,
  GetConnectionCommandOutput
} from "../commands/GetConnectionCommand";
import {
  PostToConnectionCommandInput,
  PostToConnectionCommandOutput
} from "../commands/PostToConnectionCommand";
import {
  ForbiddenException,
  GoneException,
  Identity,
  LimitExceededException,
  PayloadTooLargeException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1DeleteConnectionCommand(
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/@connections/{ConnectionId}";
  if (input.ConnectionId !== undefined) {
    const labelValue: string = input.ConnectionId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConnectionId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConnectionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ConnectionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetConnectionCommand(
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/@connections/{ConnectionId}";
  if (input.ConnectionId !== undefined) {
    const labelValue: string = input.ConnectionId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConnectionId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConnectionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ConnectionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1PostToConnectionCommand(
  input: PostToConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  let resolvedPath = "/@connections/{ConnectionId}";
  if (input.ConnectionId !== undefined) {
    const labelValue: string = input.ConnectionId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConnectionId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConnectionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ConnectionId.");
  }
  let body: any;
  if (input.Data !== undefined) {
    body = input.Data;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1DeleteConnectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteConnectionCommandError(
      output,
      context
    );
  }
  const contents: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteConnectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GoneException":
    case "com.amazonaws.apigatewaymanagementapi#GoneException":
      response = {
        ...(await deserializeAws_restJson1_1GoneExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetConnectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetConnectionCommandError(output, context);
  }
  const contents: GetConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetConnectionResponse",
    ConnectedAt: undefined,
    Identity: undefined,
    LastActiveAt: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.connectedAt !== undefined && data.connectedAt !== null) {
    contents.ConnectedAt = new Date(data.connectedAt);
  }
  if (data.identity !== undefined && data.identity !== null) {
    contents.Identity = deserializeAws_restJson1_1Identity(
      data.identity,
      context
    );
  }
  if (data.lastActiveAt !== undefined && data.lastActiveAt !== null) {
    contents.LastActiveAt = new Date(data.lastActiveAt);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetConnectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GoneException":
    case "com.amazonaws.apigatewaymanagementapi#GoneException":
      response = {
        ...(await deserializeAws_restJson1_1GoneExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1PostToConnectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostToConnectionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PostToConnectionCommandError(
      output,
      context
    );
  }
  const contents: PostToConnectionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PostToConnectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostToConnectionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.apigatewaymanagementapi#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GoneException":
    case "com.amazonaws.apigatewaymanagementapi#GoneException":
      response = {
        ...(await deserializeAws_restJson1_1GoneExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.apigatewaymanagementapi#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.apigatewaymanagementapi#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1_1PayloadTooLargeExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1_1GoneExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<GoneException> => {
  const contents: GoneException = {
    name: "GoneException",
    $fault: "client",
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1_1PayloadTooLargeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<PayloadTooLargeException> => {
  const contents: PayloadTooLargeException = {
    name: "PayloadTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1Identity = (
  output: any,
  context: __SerdeContext
): Identity => {
  let contents: any = {
    __type: "Identity",
    SourceIp: undefined,
    UserAgent: undefined
  };
  if (output.sourceIp !== undefined && output.sourceIp !== null) {
    contents.SourceIp = output.sourceIp;
  }
  if (output.userAgent !== undefined && output.userAgent !== null) {
    contents.UserAgent = output.userAgent;
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
