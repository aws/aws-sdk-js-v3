import {
  CreateParticipantConnectionCommandInput,
  CreateParticipantConnectionCommandOutput,
} from "../commands/CreateParticipantConnectionCommand";
import {
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput,
} from "../commands/DisconnectParticipantCommand";
import {
  GetTranscriptCommandInput,
  GetTranscriptCommandOutput,
} from "../commands/GetTranscriptCommand";
import {
  SendEventCommandInput,
  SendEventCommandOutput,
} from "../commands/SendEventCommand";
import {
  SendMessageCommandInput,
  SendMessageCommandOutput,
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
  Websocket,
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

export async function serializeAws_restJson1_1CreateParticipantConnectionCommand(
  input: CreateParticipantConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  if (input.ParticipantToken !== undefined) {
    headers["X-Amz-Bearer"] = input.ParticipantToken.toString();
  }
  let resolvedPath = "/participant/connection";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Type !== undefined) {
    bodyParams['Type'] = serializeAws_restJson1_1ConnectionTypeList(input.Type, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1DisconnectParticipantCommand(
  input: DisconnectParticipantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  if (input.ConnectionToken !== undefined) {
    headers["X-Amz-Bearer"] = input.ConnectionToken.toString();
  }
  let resolvedPath = "/participant/disconnect";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ClientToken !== undefined) {
    bodyParams['ClientToken'] = input.ClientToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1GetTranscriptCommand(
  input: GetTranscriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  if (input.ConnectionToken !== undefined) {
    headers["X-Amz-Bearer"] = input.ConnectionToken.toString();
  }
  let resolvedPath = "/participant/transcript";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ContactId !== undefined) {
    bodyParams['ContactId'] = input.ContactId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.ScanDirection !== undefined) {
    bodyParams['ScanDirection'] = input.ScanDirection;
  }
  if (input.SortOrder !== undefined) {
    bodyParams['SortOrder'] = input.SortOrder;
  }
  if (input.StartPosition !== undefined) {
    bodyParams['StartPosition'] = serializeAws_restJson1_1StartPosition(input.StartPosition, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1SendEventCommand(
  input: SendEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  if (input.ConnectionToken !== undefined) {
    headers["X-Amz-Bearer"] = input.ConnectionToken.toString();
  }
  let resolvedPath = "/participant/event";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ClientToken !== undefined) {
    bodyParams['ClientToken'] = input.ClientToken;
  }
  if (input.Content !== undefined) {
    bodyParams['Content'] = input.Content;
  }
  if (input.ContentType !== undefined) {
    bodyParams['ContentType'] = input.ContentType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1SendMessageCommand(
  input: SendMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  if (input.ConnectionToken !== undefined) {
    headers["X-Amz-Bearer"] = input.ConnectionToken.toString();
  }
  let resolvedPath = "/participant/message";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ClientToken !== undefined) {
    bodyParams['ClientToken'] = input.ClientToken;
  }
  if (input.Content !== undefined) {
    bodyParams['Content'] = input.Content;
  }
  if (input.ContentType !== undefined) {
    bodyParams['ContentType'] = input.ContentType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function deserializeAws_restJson1_1CreateParticipantConnectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParticipantConnectionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateParticipantConnectionCommandError(output, context);
  }
  const contents: CreateParticipantConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateParticipantConnectionResponse",
    ConnectionCredentials: undefined,
    Websocket: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ConnectionCredentials !== undefined) {
    contents.ConnectionCredentials = deserializeAws_restJson1_1ConnectionCredentials(data.ConnectionCredentials, context);
  }
  if (data.Websocket !== undefined) {
    contents.Websocket = deserializeAws_restJson1_1Websocket(data.Websocket, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateParticipantConnectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateParticipantConnectionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context);
      break;
    case "ThrottlingException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazon.amazonconnectparticipantservice.v20180907#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DisconnectParticipantCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectParticipantCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DisconnectParticipantCommandError(output, context);
  }
  const contents: DisconnectParticipantCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisconnectParticipantResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisconnectParticipantCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DisconnectParticipantCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context);
      break;
    case "ThrottlingException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazon.amazonconnectparticipantservice.v20180907#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetTranscriptCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetTranscriptCommandError(output, context);
  }
  const contents: GetTranscriptCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTranscriptResponse",
    InitialContactId: undefined,
    NextToken: undefined,
    Transcript: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.InitialContactId !== undefined) {
    contents.InitialContactId = data.InitialContactId;
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.Transcript !== undefined) {
    contents.Transcript = deserializeAws_restJson1_1Transcript(data.Transcript, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetTranscriptCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetTranscriptCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context);
      break;
    case "ThrottlingException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazon.amazonconnectparticipantservice.v20180907#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1SendEventCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEventCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1SendEventCommandError(output, context);
  }
  const contents: SendEventCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendEventResponse",
    AbsoluteTime: undefined,
    Id: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AbsoluteTime !== undefined) {
    contents.AbsoluteTime = data.AbsoluteTime;
  }
  if (data.Id !== undefined) {
    contents.Id = data.Id;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SendEventCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<SendEventCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context);
      break;
    case "ThrottlingException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazon.amazonconnectparticipantservice.v20180907#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1SendMessageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1SendMessageCommandError(output, context);
  }
  const contents: SendMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendMessageResponse",
    AbsoluteTime: undefined,
    Id: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AbsoluteTime !== undefined) {
    contents.AbsoluteTime = data.AbsoluteTime;
  }
  if (data.Id !== undefined) {
    contents.Id = data.Id;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SendMessageCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<SendMessageCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(parsedOutput, context);
      break;
    case "ThrottlingException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazon.amazonconnectparticipantservice.v20180907#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    __type: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    __type: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1ConnectionTypeList = (
  input: Array<ConnectionType | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1StartPosition = (
  input: StartPosition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AbsoluteTime !== undefined) {
    bodyParams['AbsoluteTime'] = input.AbsoluteTime;
  }
  if (input.Id !== undefined) {
    bodyParams['Id'] = input.Id;
  }
  if (input.MostRecent !== undefined) {
    bodyParams['MostRecent'] = input.MostRecent;
  }
  return bodyParams;
}

const deserializeAws_restJson1_1Item = (
  output: any,
  context: __SerdeContext
): Item => {
  let contents: any = {
    __type: "Item",
    AbsoluteTime: undefined,
    Content: undefined,
    ContentType: undefined,
    DisplayName: undefined,
    Id: undefined,
    ParticipantId: undefined,
    ParticipantRole: undefined,
    Type: undefined,
  };
  if (output.AbsoluteTime !== undefined) {
    contents.AbsoluteTime = output.AbsoluteTime;
  }
  if (output.Content !== undefined) {
    contents.Content = output.Content;
  }
  if (output.ContentType !== undefined) {
    contents.ContentType = output.ContentType;
  }
  if (output.DisplayName !== undefined) {
    contents.DisplayName = output.DisplayName;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.ParticipantId !== undefined) {
    contents.ParticipantId = output.ParticipantId;
  }
  if (output.ParticipantRole !== undefined) {
    contents.ParticipantRole = output.ParticipantRole;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
}

const deserializeAws_restJson1_1Transcript = (
  output: any,
  context: __SerdeContext
): Array<Item> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Item(entry, context)
  );
}

const deserializeAws_restJson1_1ConnectionCredentials = (
  output: any,
  context: __SerdeContext
): ConnectionCredentials => {
  let contents: any = {
    __type: "ConnectionCredentials",
    ConnectionToken: undefined,
    Expiry: undefined,
  };
  if (output.ConnectionToken !== undefined) {
    contents.ConnectionToken = output.ConnectionToken;
  }
  if (output.Expiry !== undefined) {
    contents.Expiry = output.Expiry;
  }
  return contents;
}

const deserializeAws_restJson1_1Websocket = (
  output: any,
  context: __SerdeContext
): Websocket => {
  let contents: any = {
    __type: "Websocket",
    ConnectionExpiry: undefined,
    Url: undefined,
  };
  if (output.ConnectionExpiry !== undefined) {
    contents.ConnectionExpiry = output.ConnectionExpiry;
  }
  if (output.Url !== undefined) {
    contents.Url = output.Url;
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
