import {
  DeleteSessionCommandInput,
  DeleteSessionCommandOutput
} from "../commands/DeleteSessionCommand";
import {
  GetSessionCommandInput,
  GetSessionCommandOutput
} from "../commands/GetSessionCommand";
import {
  PostContentCommandInput,
  PostContentCommandOutput
} from "../commands/PostContentCommand";
import {
  PostTextCommandInput,
  PostTextCommandOutput
} from "../commands/PostTextCommand";
import {
  PutSessionCommandInput,
  PutSessionCommandOutput
} from "../commands/PutSessionCommand";
import {
  BadGatewayException,
  BadRequestException,
  Button,
  ConflictException,
  DependencyFailedException,
  DialogAction,
  GenericAttachment,
  IntentSummary,
  InternalFailureException,
  LimitExceededException,
  LoopDetectedException,
  NotAcceptableException,
  NotFoundException,
  RequestTimeoutException,
  ResponseCard,
  SentimentResponse,
  UnsupportedMediaTypeException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1DeleteSessionCommand(
  input: DeleteSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
  if (input.botAlias !== undefined) {
    const labelValue: string = input.botAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace(
      "{botAlias}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace(
      "{userId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetSessionCommand(
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
  if (input.botAlias !== undefined) {
    const labelValue: string = input.botAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace(
      "{botAlias}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace(
      "{userId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  const query: any = {};
  if (input.checkpointLabelFilter !== undefined) {
    query["checkpointLabelFilter"] = input.checkpointLabelFilter;
  }
  let body: any;
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1PostContentCommand(
  input: PostContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  headers["x-amz-content-sha256"] = "UNSIGNED_PAYLOAD";
  if (input.accept !== undefined) {
    headers["Accept"] = input.accept;
  }
  if (input.contentType !== undefined) {
    headers["Content-Type"] = input.contentType;
  }
  if (input.requestAttributes !== undefined) {
    headers["x-amz-lex-request-attributes"] = __LazyJsonString.fromObject(
      input.requestAttributes
    );
  }
  if (input.sessionAttributes !== undefined) {
    headers["x-amz-lex-session-attributes"] = __LazyJsonString.fromObject(
      input.sessionAttributes
    );
  }
  let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/content";
  if (input.botAlias !== undefined) {
    const labelValue: string = input.botAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace(
      "{botAlias}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace(
      "{userId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  let body: any;
  if (input.inputStream !== undefined) {
    body = input.inputStream;
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

export async function serializeAws_restJson1_1PostTextCommand(
  input: PostTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/text";
  if (input.botAlias !== undefined) {
    const labelValue: string = input.botAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace(
      "{botAlias}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace(
      "{userId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.inputText !== undefined) {
    bodyParams["inputText"] = input.inputText;
  }
  if (input.requestAttributes !== undefined) {
    bodyParams["requestAttributes"] = serializeAws_restJson1_1StringMap(
      input.requestAttributes,
      context
    );
  }
  if (input.sessionAttributes !== undefined) {
    bodyParams["sessionAttributes"] = serializeAws_restJson1_1StringMap(
      input.sessionAttributes,
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

export async function serializeAws_restJson1_1PutSessionCommand(
  input: PutSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  if (input.accept !== undefined) {
    headers["Accept"] = input.accept;
  }
  let resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";
  if (input.botAlias !== undefined) {
    const labelValue: string = input.botAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace(
      "{botAlias}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace(
      "{userId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.dialogAction !== undefined) {
    bodyParams["dialogAction"] = serializeAws_restJson1_1DialogAction(
      input.dialogAction,
      context
    );
  }
  if (input.recentIntentSummaryView !== undefined) {
    bodyParams[
      "recentIntentSummaryView"
    ] = serializeAws_restJson1_1IntentSummaryList(
      input.recentIntentSummaryView,
      context
    );
  }
  if (input.sessionAttributes !== undefined) {
    bodyParams["sessionAttributes"] = serializeAws_restJson1_1StringMap(
      input.sessionAttributes,
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

export async function deserializeAws_restJson1_1DeleteSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteSessionCommandError(output, context);
  }
  const contents: DeleteSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSessionResponse",
    botAlias: undefined,
    botName: undefined,
    sessionId: undefined,
    userId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.botAlias !== undefined && data.botAlias !== null) {
    contents.botAlias = data.botAlias;
  }
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = data.botName;
  }
  if (data.sessionId !== undefined && data.sessionId !== null) {
    contents.sessionId = data.sessionId;
  }
  if (data.userId !== undefined && data.userId !== null) {
    contents.userId = data.userId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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
}

export async function deserializeAws_restJson1_1GetSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSessionCommandError(output, context);
  }
  const contents: GetSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSessionResponse",
    dialogAction: undefined,
    recentIntentSummaryView: undefined,
    sessionAttributes: undefined,
    sessionId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.dialogAction !== undefined && data.dialogAction !== null) {
    contents.dialogAction = deserializeAws_restJson1_1DialogAction(
      data.dialogAction,
      context
    );
  }
  if (
    data.recentIntentSummaryView !== undefined &&
    data.recentIntentSummaryView !== null
  ) {
    contents.recentIntentSummaryView = deserializeAws_restJson1_1IntentSummaryList(
      data.recentIntentSummaryView,
      context
    );
  }
  if (data.sessionAttributes !== undefined && data.sessionAttributes !== null) {
    contents.sessionAttributes = deserializeAws_restJson1_1StringMap(
      data.sessionAttributes,
      context
    );
  }
  if (data.sessionId !== undefined && data.sessionId !== null) {
    contents.sessionId = data.sessionId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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
}

export async function deserializeAws_restJson1_1PostContentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostContentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PostContentCommandError(output, context);
  }
  const contents: PostContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PostContentResponse",
    audioStream: undefined,
    contentType: undefined,
    dialogState: undefined,
    inputTranscript: undefined,
    intentName: undefined,
    message: undefined,
    messageFormat: undefined,
    sentimentResponse: undefined,
    sessionAttributes: undefined,
    sessionId: undefined,
    slotToElicit: undefined,
    slots: undefined
  };
  if (output.headers["content-type"] !== undefined) {
    contents.contentType = output.headers["content-type"];
  }
  if (output.headers["x-amz-lex-dialog-state"] !== undefined) {
    contents.dialogState = output.headers["x-amz-lex-dialog-state"];
  }
  if (output.headers["x-amz-lex-input-transcript"] !== undefined) {
    contents.inputTranscript = output.headers["x-amz-lex-input-transcript"];
  }
  if (output.headers["x-amz-lex-intent-name"] !== undefined) {
    contents.intentName = output.headers["x-amz-lex-intent-name"];
  }
  if (output.headers["x-amz-lex-message"] !== undefined) {
    contents.message = output.headers["x-amz-lex-message"];
  }
  if (output.headers["x-amz-lex-message-format"] !== undefined) {
    contents.messageFormat = output.headers["x-amz-lex-message-format"];
  }
  if (output.headers["x-amz-lex-sentiment"] !== undefined) {
    contents.sentimentResponse = output.headers["x-amz-lex-sentiment"];
  }
  if (output.headers["x-amz-lex-session-attributes"] !== undefined) {
    contents.sessionAttributes = new __LazyJsonString(
      output.headers["x-amz-lex-session-attributes"]
    );
  }
  if (output.headers["x-amz-lex-session-id"] !== undefined) {
    contents.sessionId = output.headers["x-amz-lex-session-id"];
  }
  if (output.headers["x-amz-lex-slot-to-elicit"] !== undefined) {
    contents.slotToElicit = output.headers["x-amz-lex-slot-to-elicit"];
  }
  if (output.headers["x-amz-lex-slots"] !== undefined) {
    contents.slots = new __LazyJsonString(output.headers["x-amz-lex-slots"]);
  }
  const data: any = output.body;
  contents.audioStream = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PostContentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostContentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAcceptableException":
    case "com.amazonaws.commonapi.exceptions#NotAcceptableException":
      response = {
        ...(await deserializeAws_restJson1_1NotAcceptableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.commonapi.exceptions#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1RequestTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedMediaTypeException":
    case "com.amazonaws.commonapi.exceptions#UnsupportedMediaTypeException":
      response = {
        ...(await deserializeAws_restJson1_1UnsupportedMediaTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadGatewayException":
    case "com.amazonaws.deepsense.runtimeservice#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyFailedException":
    case "com.amazonaws.deepsense.runtimeservice#DependencyFailedException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoopDetectedException":
    case "com.amazonaws.deepsense.runtimeservice#LoopDetectedException":
      response = {
        ...(await deserializeAws_restJson1_1LoopDetectedExceptionResponse(
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
}

export async function deserializeAws_restJson1_1PostTextCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostTextCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PostTextCommandError(output, context);
  }
  const contents: PostTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PostTextResponse",
    dialogState: undefined,
    intentName: undefined,
    message: undefined,
    messageFormat: undefined,
    responseCard: undefined,
    sentimentResponse: undefined,
    sessionAttributes: undefined,
    sessionId: undefined,
    slotToElicit: undefined,
    slots: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.dialogState !== undefined && data.dialogState !== null) {
    contents.dialogState = data.dialogState;
  }
  if (data.intentName !== undefined && data.intentName !== null) {
    contents.intentName = data.intentName;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.messageFormat !== undefined && data.messageFormat !== null) {
    contents.messageFormat = data.messageFormat;
  }
  if (data.responseCard !== undefined && data.responseCard !== null) {
    contents.responseCard = deserializeAws_restJson1_1ResponseCard(
      data.responseCard,
      context
    );
  }
  if (data.sentimentResponse !== undefined && data.sentimentResponse !== null) {
    contents.sentimentResponse = deserializeAws_restJson1_1SentimentResponse(
      data.sentimentResponse,
      context
    );
  }
  if (data.sessionAttributes !== undefined && data.sessionAttributes !== null) {
    contents.sessionAttributes = deserializeAws_restJson1_1StringMap(
      data.sessionAttributes,
      context
    );
  }
  if (data.sessionId !== undefined && data.sessionId !== null) {
    contents.sessionId = data.sessionId;
  }
  if (data.slotToElicit !== undefined && data.slotToElicit !== null) {
    contents.slotToElicit = data.slotToElicit;
  }
  if (data.slots !== undefined && data.slots !== null) {
    contents.slots = deserializeAws_restJson1_1StringMap(data.slots, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PostTextCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostTextCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadGatewayException":
    case "com.amazonaws.deepsense.runtimeservice#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyFailedException":
    case "com.amazonaws.deepsense.runtimeservice#DependencyFailedException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LoopDetectedException":
    case "com.amazonaws.deepsense.runtimeservice#LoopDetectedException":
      response = {
        ...(await deserializeAws_restJson1_1LoopDetectedExceptionResponse(
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
}

export async function deserializeAws_restJson1_1PutSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSessionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutSessionCommandError(output, context);
  }
  const contents: PutSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutSessionResponse",
    audioStream: undefined,
    contentType: undefined,
    dialogState: undefined,
    intentName: undefined,
    message: undefined,
    messageFormat: undefined,
    sessionAttributes: undefined,
    sessionId: undefined,
    slotToElicit: undefined,
    slots: undefined
  };
  if (output.headers["content-type"] !== undefined) {
    contents.contentType = output.headers["content-type"];
  }
  if (output.headers["x-amz-lex-dialog-state"] !== undefined) {
    contents.dialogState = output.headers["x-amz-lex-dialog-state"];
  }
  if (output.headers["x-amz-lex-intent-name"] !== undefined) {
    contents.intentName = output.headers["x-amz-lex-intent-name"];
  }
  if (output.headers["x-amz-lex-message"] !== undefined) {
    contents.message = output.headers["x-amz-lex-message"];
  }
  if (output.headers["x-amz-lex-message-format"] !== undefined) {
    contents.messageFormat = output.headers["x-amz-lex-message-format"];
  }
  if (output.headers["x-amz-lex-session-attributes"] !== undefined) {
    contents.sessionAttributes = new __LazyJsonString(
      output.headers["x-amz-lex-session-attributes"]
    );
  }
  if (output.headers["x-amz-lex-session-id"] !== undefined) {
    contents.sessionId = output.headers["x-amz-lex-session-id"];
  }
  if (output.headers["x-amz-lex-slot-to-elicit"] !== undefined) {
    contents.slotToElicit = output.headers["x-amz-lex-slot-to-elicit"];
  }
  if (output.headers["x-amz-lex-slots"] !== undefined) {
    contents.slots = new __LazyJsonString(output.headers["x-amz-lex-slots"]);
  }
  const data: any = output.body;
  contents.audioStream = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSessionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAcceptableException":
    case "com.amazonaws.commonapi.exceptions#NotAcceptableException":
      response = {
        ...(await deserializeAws_restJson1_1NotAcceptableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadGatewayException":
    case "com.amazonaws.deepsense.runtimeservice#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyFailedException":
    case "com.amazonaws.deepsense.runtimeservice#DependencyFailedException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyFailedExceptionResponse(
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
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    retryAfterSeconds: undefined
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotAcceptableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAcceptableException> => {
  const contents: NotAcceptableException = {
    name: "NotAcceptableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1RequestTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTimeoutException> => {
  const contents: RequestTimeoutException = {
    name: "RequestTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnsupportedMediaTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedMediaTypeException> => {
  const contents: UnsupportedMediaTypeException = {
    name: "UnsupportedMediaTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1BadGatewayExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadGatewayException> => {
  const contents: BadGatewayException = {
    name: "BadGatewayException",
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

const deserializeAws_restJson1_1DependencyFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyFailedException> => {
  const contents: DependencyFailedException = {
    name: "DependencyFailedException",
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

const deserializeAws_restJson1_1LoopDetectedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LoopDetectedException> => {
  const contents: LoopDetectedException = {
    name: "LoopDetectedException",
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

const serializeAws_restJson1_1DialogAction = (
  input: DialogAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.fulfillmentState !== undefined) {
    bodyParams["fulfillmentState"] = input.fulfillmentState;
  }
  if (input.intentName !== undefined) {
    bodyParams["intentName"] = input.intentName;
  }
  if (input.message !== undefined) {
    bodyParams["message"] = input.message;
  }
  if (input.messageFormat !== undefined) {
    bodyParams["messageFormat"] = input.messageFormat;
  }
  if (input.slotToElicit !== undefined) {
    bodyParams["slotToElicit"] = input.slotToElicit;
  }
  if (input.slots !== undefined) {
    bodyParams["slots"] = serializeAws_restJson1_1StringMap(
      input.slots,
      context
    );
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1IntentSummary = (
  input: IntentSummary,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.checkpointLabel !== undefined) {
    bodyParams["checkpointLabel"] = input.checkpointLabel;
  }
  if (input.confirmationStatus !== undefined) {
    bodyParams["confirmationStatus"] = input.confirmationStatus;
  }
  if (input.dialogActionType !== undefined) {
    bodyParams["dialogActionType"] = input.dialogActionType;
  }
  if (input.fulfillmentState !== undefined) {
    bodyParams["fulfillmentState"] = input.fulfillmentState;
  }
  if (input.intentName !== undefined) {
    bodyParams["intentName"] = input.intentName;
  }
  if (input.slotToElicit !== undefined) {
    bodyParams["slotToElicit"] = input.slotToElicit;
  }
  if (input.slots !== undefined) {
    bodyParams["slots"] = serializeAws_restJson1_1StringMap(
      input.slots,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1IntentSummaryList = (
  input: Array<IntentSummary>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1IntentSummary(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1StringMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1DialogAction = (
  output: any,
  context: __SerdeContext
): DialogAction => {
  let contents: any = {
    __type: "DialogAction",
    fulfillmentState: undefined,
    intentName: undefined,
    message: undefined,
    messageFormat: undefined,
    slotToElicit: undefined,
    slots: undefined,
    type: undefined
  };
  if (
    output.fulfillmentState !== undefined &&
    output.fulfillmentState !== null
  ) {
    contents.fulfillmentState = output.fulfillmentState;
  }
  if (output.intentName !== undefined && output.intentName !== null) {
    contents.intentName = output.intentName;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.messageFormat !== undefined && output.messageFormat !== null) {
    contents.messageFormat = output.messageFormat;
  }
  if (output.slotToElicit !== undefined && output.slotToElicit !== null) {
    contents.slotToElicit = output.slotToElicit;
  }
  if (output.slots !== undefined && output.slots !== null) {
    contents.slots = deserializeAws_restJson1_1StringMap(output.slots, context);
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1IntentSummary = (
  output: any,
  context: __SerdeContext
): IntentSummary => {
  let contents: any = {
    __type: "IntentSummary",
    checkpointLabel: undefined,
    confirmationStatus: undefined,
    dialogActionType: undefined,
    fulfillmentState: undefined,
    intentName: undefined,
    slotToElicit: undefined,
    slots: undefined
  };
  if (output.checkpointLabel !== undefined && output.checkpointLabel !== null) {
    contents.checkpointLabel = output.checkpointLabel;
  }
  if (
    output.confirmationStatus !== undefined &&
    output.confirmationStatus !== null
  ) {
    contents.confirmationStatus = output.confirmationStatus;
  }
  if (
    output.dialogActionType !== undefined &&
    output.dialogActionType !== null
  ) {
    contents.dialogActionType = output.dialogActionType;
  }
  if (
    output.fulfillmentState !== undefined &&
    output.fulfillmentState !== null
  ) {
    contents.fulfillmentState = output.fulfillmentState;
  }
  if (output.intentName !== undefined && output.intentName !== null) {
    contents.intentName = output.intentName;
  }
  if (output.slotToElicit !== undefined && output.slotToElicit !== null) {
    contents.slotToElicit = output.slotToElicit;
  }
  if (output.slots !== undefined && output.slots !== null) {
    contents.slots = deserializeAws_restJson1_1StringMap(output.slots, context);
  }
  return contents;
};

const deserializeAws_restJson1_1IntentSummaryList = (
  output: any,
  context: __SerdeContext
): Array<IntentSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IntentSummary(entry, context)
  );
};

const deserializeAws_restJson1_1SentimentResponse = (
  output: any,
  context: __SerdeContext
): SentimentResponse => {
  let contents: any = {
    __type: "SentimentResponse",
    sentimentLabel: undefined,
    sentimentScore: undefined
  };
  if (output.sentimentLabel !== undefined && output.sentimentLabel !== null) {
    contents.sentimentLabel = output.sentimentLabel;
  }
  if (output.sentimentScore !== undefined && output.sentimentScore !== null) {
    contents.sentimentScore = output.sentimentScore;
  }
  return contents;
};

const deserializeAws_restJson1_1StringMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Button = (
  output: any,
  context: __SerdeContext
): Button => {
  let contents: any = {
    __type: "Button",
    text: undefined,
    value: undefined
  };
  if (output.text !== undefined && output.text !== null) {
    contents.text = output.text;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1GenericAttachment = (
  output: any,
  context: __SerdeContext
): GenericAttachment => {
  let contents: any = {
    __type: "GenericAttachment",
    attachmentLinkUrl: undefined,
    buttons: undefined,
    imageUrl: undefined,
    subTitle: undefined,
    title: undefined
  };
  if (
    output.attachmentLinkUrl !== undefined &&
    output.attachmentLinkUrl !== null
  ) {
    contents.attachmentLinkUrl = output.attachmentLinkUrl;
  }
  if (output.buttons !== undefined && output.buttons !== null) {
    contents.buttons = deserializeAws_restJson1_1listOfButtons(
      output.buttons,
      context
    );
  }
  if (output.imageUrl !== undefined && output.imageUrl !== null) {
    contents.imageUrl = output.imageUrl;
  }
  if (output.subTitle !== undefined && output.subTitle !== null) {
    contents.subTitle = output.subTitle;
  }
  if (output.title !== undefined && output.title !== null) {
    contents.title = output.title;
  }
  return contents;
};

const deserializeAws_restJson1_1ResponseCard = (
  output: any,
  context: __SerdeContext
): ResponseCard => {
  let contents: any = {
    __type: "ResponseCard",
    contentType: undefined,
    genericAttachments: undefined,
    version: undefined
  };
  if (output.contentType !== undefined && output.contentType !== null) {
    contents.contentType = output.contentType;
  }
  if (
    output.genericAttachments !== undefined &&
    output.genericAttachments !== null
  ) {
    contents.genericAttachments = deserializeAws_restJson1_1genericAttachmentList(
      output.genericAttachments,
      context
    );
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1genericAttachmentList = (
  output: any,
  context: __SerdeContext
): Array<GenericAttachment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GenericAttachment(entry, context)
  );
};

const deserializeAws_restJson1_1listOfButtons = (
  output: any,
  context: __SerdeContext
): Array<Button> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Button(entry, context)
  );
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
