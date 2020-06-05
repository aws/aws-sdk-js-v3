import {
  CreateParticipantConnectionCommandInput,
  CreateParticipantConnectionCommandOutput
} from "../commands/CreateParticipantConnectionCommand";
import {
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput
} from "../commands/DisconnectParticipantCommand";
import {
  GetTranscriptCommandInput,
  GetTranscriptCommandOutput
} from "../commands/GetTranscriptCommand";
import {
  SendEventCommandInput,
  SendEventCommandOutput
} from "../commands/SendEventCommand";
import {
  SendMessageCommandInput,
  SendMessageCommandOutput
} from "../commands/SendMessageCommand";
import {
  AccessDeniedException,
  ConnectionCredentials,
  ConnectionType,
  InternalServerException,
  Item,
  StartPosition,
  ThrottlingException,
  ValidationException,
  Websocket
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
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1CreateParticipantConnectionCommand = async (
  input: CreateParticipantConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ParticipantToken) && {
      "X-Amz-Bearer": input.ParticipantToken!
    })
  };
  let resolvedPath = "/participant/connection";
  let body: any;
  body = JSON.stringify({
    ...(input.Type !== undefined && {
      Type: serializeAws_restJson1ConnectionTypeList(input.Type, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DisconnectParticipantCommand = async (
  input: DisconnectParticipantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConnectionToken) && {
      "X-Amz-Bearer": input.ConnectionToken!
    })
  };
  let resolvedPath = "/participant/disconnect";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken()
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetTranscriptCommand = async (
  input: GetTranscriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConnectionToken) && {
      "X-Amz-Bearer": input.ConnectionToken!
    })
  };
  let resolvedPath = "/participant/transcript";
  let body: any;
  body = JSON.stringify({
    ...(input.ContactId !== undefined && { ContactId: input.ContactId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ScanDirection !== undefined && {
      ScanDirection: input.ScanDirection
    }),
    ...(input.SortOrder !== undefined && { SortOrder: input.SortOrder }),
    ...(input.StartPosition !== undefined && {
      StartPosition: serializeAws_restJson1StartPosition(
        input.StartPosition,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1SendEventCommand = async (
  input: SendEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConnectionToken) && {
      "X-Amz-Bearer": input.ConnectionToken!
    })
  };
  let resolvedPath = "/participant/event";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Content !== undefined && { Content: input.Content }),
    ...(input.ContentType !== undefined && { ContentType: input.ContentType })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1SendMessageCommand = async (
  input: SendMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
    ...(isSerializableHeaderValue(input.ConnectionToken) && {
      "X-Amz-Bearer": input.ConnectionToken!
    })
  };
  let resolvedPath = "/participant/message";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Content !== undefined && { Content: input.Content }),
    ...(input.ContentType !== undefined && { ContentType: input.ContentType })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1CreateParticipantConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParticipantConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateParticipantConnectionCommandError(
      output,
      context
    );
  }
  const contents: CreateParticipantConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateParticipantConnectionResponse",
    ConnectionCredentials: undefined,
    Websocket: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ConnectionCredentials !== undefined &&
    data.ConnectionCredentials !== null
  ) {
    contents.ConnectionCredentials = deserializeAws_restJson1ConnectionCredentials(
      data.ConnectionCredentials,
      context
    );
  }
  if (data.Websocket !== undefined && data.Websocket !== null) {
    contents.Websocket = deserializeAws_restJson1Websocket(
      data.Websocket,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateParticipantConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParticipantConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectparticipant#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.connectparticipant#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.connectparticipant#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.connectparticipant#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1DisconnectParticipantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectParticipantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DisconnectParticipantCommandError(
      output,
      context
    );
  }
  const contents: DisconnectParticipantCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisconnectParticipantResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisconnectParticipantCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectParticipantCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectparticipant#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.connectparticipant#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.connectparticipant#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.connectparticipant#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1GetTranscriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetTranscriptCommandError(output, context);
  }
  const contents: GetTranscriptCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTranscriptResponse",
    InitialContactId: undefined,
    NextToken: undefined,
    Transcript: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.InitialContactId !== undefined && data.InitialContactId !== null) {
    contents.InitialContactId = data.InitialContactId;
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Transcript !== undefined && data.Transcript !== null) {
    contents.Transcript = deserializeAws_restJson1Transcript(
      data.Transcript,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTranscriptCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectparticipant#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.connectparticipant#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.connectparticipant#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.connectparticipant#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1SendEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1SendEventCommandError(output, context);
  }
  const contents: SendEventCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendEventResponse",
    AbsoluteTime: undefined,
    Id: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AbsoluteTime !== undefined && data.AbsoluteTime !== null) {
    contents.AbsoluteTime = data.AbsoluteTime;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SendEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectparticipant#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.connectparticipant#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.connectparticipant#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.connectparticipant#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1SendMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1SendMessageCommandError(output, context);
  }
  const contents: SendMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendMessageResponse",
    AbsoluteTime: undefined,
    Id: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AbsoluteTime !== undefined && data.AbsoluteTime !== null) {
    contents.AbsoluteTime = data.AbsoluteTime;
  }
  if (data.Id !== undefined && data.Id !== null) {
    contents.Id = data.Id;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SendMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectparticipant#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.connectparticipant#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.connectparticipant#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.connectparticipant#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1ConnectionTypeList = (
  input: (ConnectionType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1StartPosition = (
  input: StartPosition,
  context: __SerdeContext
): any => {
  return {
    ...(input.AbsoluteTime !== undefined && {
      AbsoluteTime: input.AbsoluteTime
    }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.MostRecent !== undefined && { MostRecent: input.MostRecent })
  };
};

const deserializeAws_restJson1ConnectionCredentials = (
  output: any,
  context: __SerdeContext
): ConnectionCredentials => {
  return {
    __type: "ConnectionCredentials",
    ConnectionToken:
      output.ConnectionToken !== undefined && output.ConnectionToken !== null
        ? output.ConnectionToken
        : undefined,
    Expiry:
      output.Expiry !== undefined && output.Expiry !== null
        ? output.Expiry
        : undefined
  } as any;
};

const deserializeAws_restJson1Item = (
  output: any,
  context: __SerdeContext
): Item => {
  return {
    __type: "Item",
    AbsoluteTime:
      output.AbsoluteTime !== undefined && output.AbsoluteTime !== null
        ? output.AbsoluteTime
        : undefined,
    Content:
      output.Content !== undefined && output.Content !== null
        ? output.Content
        : undefined,
    ContentType:
      output.ContentType !== undefined && output.ContentType !== null
        ? output.ContentType
        : undefined,
    DisplayName:
      output.DisplayName !== undefined && output.DisplayName !== null
        ? output.DisplayName
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ParticipantId:
      output.ParticipantId !== undefined && output.ParticipantId !== null
        ? output.ParticipantId
        : undefined,
    ParticipantRole:
      output.ParticipantRole !== undefined && output.ParticipantRole !== null
        ? output.ParticipantRole
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1Transcript = (
  output: any,
  context: __SerdeContext
): Item[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Item(entry, context)
  );
};

const deserializeAws_restJson1Websocket = (
  output: any,
  context: __SerdeContext
): Websocket => {
  return {
    __type: "Websocket",
    ConnectionExpiry:
      output.ConnectionExpiry !== undefined && output.ConnectionExpiry !== null
        ? output.ConnectionExpiry
        : undefined,
    Url:
      output.Url !== undefined && output.Url !== null ? output.Url : undefined
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
