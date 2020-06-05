import {
  CloseTunnelCommandInput,
  CloseTunnelCommandOutput
} from "../commands/CloseTunnelCommand";
import {
  DescribeTunnelCommandInput,
  DescribeTunnelCommandOutput
} from "../commands/DescribeTunnelCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTunnelsCommandInput,
  ListTunnelsCommandOutput
} from "../commands/ListTunnelsCommand";
import {
  OpenTunnelCommandInput,
  OpenTunnelCommandOutput
} from "../commands/OpenTunnelCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  CloseTunnelRequest,
  CloseTunnelResponse,
  ConnectionState,
  DescribeTunnelRequest,
  DescribeTunnelResponse,
  DestinationConfig,
  LimitExceededException,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTunnelsRequest,
  ListTunnelsResponse,
  OpenTunnelRequest,
  OpenTunnelResponse,
  ResourceNotFoundException,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TimeoutConfig,
  Tunnel,
  TunnelSummary,
  UntagResourceRequest,
  UntagResourceResponse
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

export const serializeAws_json1_1CloseTunnelCommand = async (
  input: CloseTunnelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IoTSecuredTunneling.CloseTunnel"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CloseTunnelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTunnelCommand = async (
  input: DescribeTunnelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IoTSecuredTunneling.DescribeTunnel"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTunnelRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IoTSecuredTunneling.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTunnelsCommand = async (
  input: ListTunnelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IoTSecuredTunneling.ListTunnels"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTunnelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1OpenTunnelCommand = async (
  input: OpenTunnelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IoTSecuredTunneling.OpenTunnel"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1OpenTunnelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IoTSecuredTunneling.TagResource"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IoTSecuredTunneling.UntagResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CloseTunnelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseTunnelCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CloseTunnelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CloseTunnelResponse(data, context);
  const response: CloseTunnelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CloseTunnelResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CloseTunnelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseTunnelCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DescribeTunnelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTunnelCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTunnelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTunnelResponse(data, context);
  const response: DescribeTunnelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTunnelResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTunnelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTunnelCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ListTunnelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTunnelsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTunnelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTunnelsResponse(data, context);
  const response: ListTunnelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTunnelsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTunnelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTunnelsCommandOutput> => {
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

export const deserializeAws_json1_1OpenTunnelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenTunnelCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1OpenTunnelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1OpenTunnelResponse(data, context);
  const response: OpenTunnelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "OpenTunnelResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1OpenTunnelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenTunnelCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.iotsecuretunneling#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
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

const serializeAws_json1_1CloseTunnelRequest = (
  input: CloseTunnelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.delete !== undefined && { delete: input.delete }),
    ...(input.tunnelId !== undefined && { tunnelId: input.tunnelId })
  };
};

const serializeAws_json1_1DescribeTunnelRequest = (
  input: DescribeTunnelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.tunnelId !== undefined && { tunnelId: input.tunnelId })
  };
};

const serializeAws_json1_1DestinationConfig = (
  input: DestinationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.services !== undefined && {
      services: serializeAws_json1_1ServiceList(input.services, context)
    }),
    ...(input.thingName !== undefined && { thingName: input.thingName })
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
};

const serializeAws_json1_1ListTunnelsRequest = (
  input: ListTunnelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.thingName !== undefined && { thingName: input.thingName })
  };
};

const serializeAws_json1_1OpenTunnelRequest = (
  input: OpenTunnelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.destinationConfig !== undefined && {
      destinationConfig: serializeAws_json1_1DestinationConfig(
        input.destinationConfig,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    }),
    ...(input.timeoutConfig !== undefined && {
      timeoutConfig: serializeAws_json1_1TimeoutConfig(
        input.timeoutConfig,
        context
      )
    })
  };
};

const serializeAws_json1_1ServiceList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    })
  };
};

const serializeAws_json1_1TimeoutConfig = (
  input: TimeoutConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxLifetimeTimeoutMinutes !== undefined && {
      maxLifetimeTimeoutMinutes: input.maxLifetimeTimeoutMinutes
    })
  };
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined && {
      tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context)
    })
  };
};

const deserializeAws_json1_1CloseTunnelResponse = (
  output: any,
  context: __SerdeContext
): CloseTunnelResponse => {
  return {
    __type: "CloseTunnelResponse"
  } as any;
};

const deserializeAws_json1_1ConnectionState = (
  output: any,
  context: __SerdeContext
): ConnectionState => {
  return {
    __type: "ConnectionState",
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeTunnelResponse = (
  output: any,
  context: __SerdeContext
): DescribeTunnelResponse => {
  return {
    __type: "DescribeTunnelResponse",
    tunnel:
      output.tunnel !== undefined && output.tunnel !== null
        ? deserializeAws_json1_1Tunnel(output.tunnel, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DestinationConfig = (
  output: any,
  context: __SerdeContext
): DestinationConfig => {
  return {
    __type: "DestinationConfig",
    services:
      output.services !== undefined && output.services !== null
        ? deserializeAws_json1_1ServiceList(output.services, context)
        : undefined,
    thingName:
      output.thingName !== undefined && output.thingName !== null
        ? output.thingName
        : undefined
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    __type: "ListTagsForResourceResponse",
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTunnelsResponse = (
  output: any,
  context: __SerdeContext
): ListTunnelsResponse => {
  return {
    __type: "ListTunnelsResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    tunnelSummaries:
      output.tunnelSummaries !== undefined && output.tunnelSummaries !== null
        ? deserializeAws_json1_1TunnelSummaryList(
            output.tunnelSummaries,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1OpenTunnelResponse = (
  output: any,
  context: __SerdeContext
): OpenTunnelResponse => {
  return {
    __type: "OpenTunnelResponse",
    destinationAccessToken:
      output.destinationAccessToken !== undefined &&
      output.destinationAccessToken !== null
        ? output.destinationAccessToken
        : undefined,
    sourceAccessToken:
      output.sourceAccessToken !== undefined &&
      output.sourceAccessToken !== null
        ? output.sourceAccessToken
        : undefined,
    tunnelArn:
      output.tunnelArn !== undefined && output.tunnelArn !== null
        ? output.tunnelArn
        : undefined,
    tunnelId:
      output.tunnelId !== undefined && output.tunnelId !== null
        ? output.tunnelId
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
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

const deserializeAws_json1_1ServiceList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  return {
    __type: "TagResourceResponse"
  } as any;
};

const deserializeAws_json1_1TimeoutConfig = (
  output: any,
  context: __SerdeContext
): TimeoutConfig => {
  return {
    __type: "TimeoutConfig",
    maxLifetimeTimeoutMinutes:
      output.maxLifetimeTimeoutMinutes !== undefined &&
      output.maxLifetimeTimeoutMinutes !== null
        ? output.maxLifetimeTimeoutMinutes
        : undefined
  } as any;
};

const deserializeAws_json1_1Tunnel = (
  output: any,
  context: __SerdeContext
): Tunnel => {
  return {
    __type: "Tunnel",
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    destinationConfig:
      output.destinationConfig !== undefined &&
      output.destinationConfig !== null
        ? deserializeAws_json1_1DestinationConfig(
            output.destinationConfig,
            context
          )
        : undefined,
    destinationConnectionState:
      output.destinationConnectionState !== undefined &&
      output.destinationConnectionState !== null
        ? deserializeAws_json1_1ConnectionState(
            output.destinationConnectionState,
            context
          )
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    sourceConnectionState:
      output.sourceConnectionState !== undefined &&
      output.sourceConnectionState !== null
        ? deserializeAws_json1_1ConnectionState(
            output.sourceConnectionState,
            context
          )
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
    timeoutConfig:
      output.timeoutConfig !== undefined && output.timeoutConfig !== null
        ? deserializeAws_json1_1TimeoutConfig(output.timeoutConfig, context)
        : undefined,
    tunnelArn:
      output.tunnelArn !== undefined && output.tunnelArn !== null
        ? output.tunnelArn
        : undefined,
    tunnelId:
      output.tunnelId !== undefined && output.tunnelId !== null
        ? output.tunnelId
        : undefined
  } as any;
};

const deserializeAws_json1_1TunnelSummary = (
  output: any,
  context: __SerdeContext
): TunnelSummary => {
  return {
    __type: "TunnelSummary",
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    tunnelArn:
      output.tunnelArn !== undefined && output.tunnelArn !== null
        ? output.tunnelArn
        : undefined,
    tunnelId:
      output.tunnelId !== undefined && output.tunnelId !== null
        ? output.tunnelId
        : undefined
  } as any;
};

const deserializeAws_json1_1TunnelSummaryList = (
  output: any,
  context: __SerdeContext
): TunnelSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TunnelSummary(entry, context)
  );
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse"
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
