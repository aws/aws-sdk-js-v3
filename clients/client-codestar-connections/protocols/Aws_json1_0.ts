import {
  CreateConnectionCommandInput,
  CreateConnectionCommandOutput
} from "../commands/CreateConnectionCommand";
import {
  DeleteConnectionCommandInput,
  DeleteConnectionCommandOutput
} from "../commands/DeleteConnectionCommand";
import {
  GetConnectionCommandInput,
  GetConnectionCommandOutput
} from "../commands/GetConnectionCommand";
import {
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput
} from "../commands/ListConnectionsCommand";
import {
  Connection,
  CreateConnectionInput,
  CreateConnectionOutput,
  DeleteConnectionInput,
  DeleteConnectionOutput,
  GetConnectionInput,
  GetConnectionOutput,
  LimitExceededException,
  ListConnectionsInput,
  ListConnectionsOutput,
  ResourceNotFoundException
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

export async function serializeAws_json1_0CreateConnectionCommand(
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "CodeStar_connections_20191201.CreateConnection";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_0CreateConnectionInput(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateConnection",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DeleteConnectionCommand(
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "CodeStar_connections_20191201.DeleteConnection";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_0DeleteConnectionInput(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteConnection",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0GetConnectionCommand(
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "CodeStar_connections_20191201.GetConnection";
  let body: any = {};
  body = JSON.stringify(serializeAws_json1_0GetConnectionInput(input, context));
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetConnection",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ListConnectionsCommand(
  input: ListConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "CodeStar_connections_20191201.ListConnections";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_0ListConnectionsInput(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListConnections",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_0CreateConnectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateConnectionOutput(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateConnectionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0CreateConnectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.codestar.connections#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_0DeleteConnectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteConnectionOutput(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteConnectionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0DeleteConnectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestar.connections#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_0GetConnectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetConnectionOutput(data, context);
  const response: GetConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetConnectionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0GetConnectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestar.connections#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_0ListConnectionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListConnectionsOutput(data, context);
  const response: ListConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConnectionsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0ListConnectionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededException(
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

const serializeAws_json1_0CreateConnectionInput = (
  input: CreateConnectionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ConnectionName !== undefined) {
    bodyParams["ConnectionName"] = input.ConnectionName;
  }
  if (input.ProviderType !== undefined) {
    bodyParams["ProviderType"] = input.ProviderType;
  }
  return bodyParams;
};

const serializeAws_json1_0DeleteConnectionInput = (
  input: DeleteConnectionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ConnectionArn !== undefined) {
    bodyParams["ConnectionArn"] = input.ConnectionArn;
  }
  return bodyParams;
};

const serializeAws_json1_0GetConnectionInput = (
  input: GetConnectionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ConnectionArn !== undefined) {
    bodyParams["ConnectionArn"] = input.ConnectionArn;
  }
  return bodyParams;
};

const serializeAws_json1_0ListConnectionsInput = (
  input: ListConnectionsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ProviderTypeFilter !== undefined) {
    bodyParams["ProviderTypeFilter"] = input.ProviderTypeFilter;
  }
  return bodyParams;
};

const deserializeAws_json1_0Connection = (
  output: any,
  context: __SerdeContext
): Connection => {
  let contents: any = {
    __type: "Connection",
    ConnectionArn: undefined,
    ConnectionName: undefined,
    ConnectionStatus: undefined,
    OwnerAccountId: undefined,
    ProviderType: undefined
  };
  if (output.ConnectionArn !== undefined) {
    contents.ConnectionArn = output.ConnectionArn;
  }
  if (output.ConnectionName !== undefined) {
    contents.ConnectionName = output.ConnectionName;
  }
  if (output.ConnectionStatus !== undefined) {
    contents.ConnectionStatus = output.ConnectionStatus;
  }
  if (output.OwnerAccountId !== undefined) {
    contents.OwnerAccountId = output.OwnerAccountId;
  }
  if (output.ProviderType !== undefined) {
    contents.ProviderType = output.ProviderType;
  }
  return contents;
};

const deserializeAws_json1_0ConnectionList = (
  output: any,
  context: __SerdeContext
): Array<Connection> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Connection(entry, context)
  );
};

const deserializeAws_json1_0CreateConnectionOutput = (
  output: any,
  context: __SerdeContext
): CreateConnectionOutput => {
  let contents: any = {
    __type: "CreateConnectionOutput",
    ConnectionArn: undefined
  };
  if (output.ConnectionArn !== undefined) {
    contents.ConnectionArn = output.ConnectionArn;
  }
  return contents;
};

const deserializeAws_json1_0DeleteConnectionOutput = (
  output: any,
  context: __SerdeContext
): DeleteConnectionOutput => {
  let contents: any = {
    __type: "DeleteConnectionOutput"
  };
  return contents;
};

const deserializeAws_json1_0GetConnectionOutput = (
  output: any,
  context: __SerdeContext
): GetConnectionOutput => {
  let contents: any = {
    __type: "GetConnectionOutput",
    Connection: undefined
  };
  if (output.Connection !== undefined) {
    contents.Connection = deserializeAws_json1_0Connection(
      output.Connection,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_0ListConnectionsOutput = (
  output: any,
  context: __SerdeContext
): ListConnectionsOutput => {
  let contents: any = {
    __type: "ListConnectionsOutput",
    Connections: undefined,
    NextToken: undefined
  };
  if (output.Connections !== undefined) {
    contents.Connections = deserializeAws_json1_0ConnectionList(
      output.Connections,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
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
