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

export async function serializeAws_restJson1_1CreateParticipantConnectionCommand(
  input: CreateParticipantConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ParticipantToken !== undefined) {
    headers["X-Amz-Bearer"] = input.ParticipantToken;
  }
  let resolvedPath = "/participant/connection";
  let body: any;
  const bodyParams: any = {};
  if (input.Type !== undefined) {
    bodyParams["Type"] = serializeAws_restJson1_1ConnectionTypeList(
      input.Type,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DisconnectParticipantCommand(
  input: DisconnectParticipantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConnectionToken !== undefined) {
    headers["X-Amz-Bearer"] = input.ConnectionToken;
  }
  let resolvedPath = "/participant/disconnect";
  let body: any;
  const bodyParams: any = {};
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    bodyParams["ClientToken"] = input.ClientToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetTranscriptCommand(
  input: GetTranscriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConnectionToken !== undefined) {
    headers["X-Amz-Bearer"] = input.ConnectionToken;
  }
  let resolvedPath = "/participant/transcript";
  let body: any;
  const bodyParams: any = {};
  if (input.ContactId !== undefined) {
    bodyParams["ContactId"] = input.ContactId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ScanDirection !== undefined) {
    bodyParams["ScanDirection"] = input.ScanDirection;
  }
  if (input.SortOrder !== undefined) {
    bodyParams["SortOrder"] = input.SortOrder;
  }
  if (input.StartPosition !== undefined) {
    bodyParams["StartPosition"] = serializeAws_restJson1_1StartPosition(
      input.StartPosition,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1SendEventCommand(
  input: SendEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConnectionToken !== undefined) {
    headers["X-Amz-Bearer"] = input.ConnectionToken;
  }
  let resolvedPath = "/participant/event";
  let body: any;
  const bodyParams: any = {};
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    bodyParams["ClientToken"] = input.ClientToken;
  }
  if (input.Content !== undefined) {
    bodyParams["Content"] = input.Content;
  }
  if (input.ContentType !== undefined) {
    bodyParams["ContentType"] = input.ContentType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1SendMessageCommand(
  input: SendMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.ConnectionToken !== undefined) {
    headers["X-Amz-Bearer"] = input.ConnectionToken;
  }
  let resolvedPath = "/participant/message";
  let body: any;
  const bodyParams: any = {};
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    bodyParams["ClientToken"] = input.ClientToken;
  }
  if (input.Content !== undefined) {
    bodyParams["Content"] = input.Content;
  }
  if (input.ContentType !== undefined) {
    bodyParams["ContentType"] = input.ContentType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateParticipantConnectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParticipantConnectionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateParticipantConnectionCommandError(
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
    contents.ConnectionCredentials = deserializeAws_restJson1_1ConnectionCredentials(
      data.ConnectionCredentials,
      context
    );
  }
  if (data.Websocket !== undefined && data.Websocket !== null) {
    contents.Websocket = deserializeAws_restJson1_1Websocket(
      data.Websocket,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateParticipantConnectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParticipantConnectionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DisconnectParticipantCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectParticipantCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisconnectParticipantCommandError(
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
}

async function deserializeAws_restJson1_1DisconnectParticipantCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectParticipantCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1GetTranscriptCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetTranscriptCommandError(output, context);
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
    contents.Transcript = deserializeAws_restJson1_1Transcript(
      data.Transcript,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetTranscriptCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1SendEventCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEventCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SendEventCommandError(output, context);
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
}

async function deserializeAws_restJson1_1SendEventCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEventCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1SendMessageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SendMessageCommandError(output, context);
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
}

async function deserializeAws_restJson1_1SendMessageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.amazonconnectparticipantservice.v20180907#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1ConnectionTypeList = (
  input: Array<ConnectionType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1StartPosition = (
  input: StartPosition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AbsoluteTime !== undefined) {
    bodyParams["AbsoluteTime"] = input.AbsoluteTime;
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.MostRecent !== undefined) {
    bodyParams["MostRecent"] = input.MostRecent;
  }
  return bodyParams;
};

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
    Type: undefined
  };
  if (output.AbsoluteTime !== undefined && output.AbsoluteTime !== null) {
    contents.AbsoluteTime = output.AbsoluteTime;
  }
  if (output.Content !== undefined && output.Content !== null) {
    contents.Content = output.Content;
  }
  if (output.ContentType !== undefined && output.ContentType !== null) {
    contents.ContentType = output.ContentType;
  }
  if (output.DisplayName !== undefined && output.DisplayName !== null) {
    contents.DisplayName = output.DisplayName;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.ParticipantId !== undefined && output.ParticipantId !== null) {
    contents.ParticipantId = output.ParticipantId;
  }
  if (output.ParticipantRole !== undefined && output.ParticipantRole !== null) {
    contents.ParticipantRole = output.ParticipantRole;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1Transcript = (
  output: any,
  context: __SerdeContext
): Array<Item> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Item(entry, context)
  );
};

const deserializeAws_restJson1_1ConnectionCredentials = (
  output: any,
  context: __SerdeContext
): ConnectionCredentials => {
  let contents: any = {
    __type: "ConnectionCredentials",
    ConnectionToken: undefined,
    Expiry: undefined
  };
  if (output.ConnectionToken !== undefined && output.ConnectionToken !== null) {
    contents.ConnectionToken = output.ConnectionToken;
  }
  if (output.Expiry !== undefined && output.Expiry !== null) {
    contents.Expiry = output.Expiry;
  }
  return contents;
};

const deserializeAws_restJson1_1Websocket = (
  output: any,
  context: __SerdeContext
): Websocket => {
  let contents: any = {
    __type: "Websocket",
    ConnectionExpiry: undefined,
    Url: undefined
  };
  if (
    output.ConnectionExpiry !== undefined &&
    output.ConnectionExpiry !== null
  ) {
    contents.ConnectionExpiry = output.ConnectionExpiry;
  }
  if (output.Url !== undefined && output.Url !== null) {
    contents.Url = output.Url;
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
