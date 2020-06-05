import {
  SendCommandCommandInput,
  SendCommandCommandOutput
} from "../commands/SendCommandCommand";
import {
  AbortTransactionRequest,
  AbortTransactionResult,
  BadRequestException,
  CommitTransactionRequest,
  CommitTransactionResult,
  EndSessionRequest,
  EndSessionResult,
  ExecuteStatementRequest,
  ExecuteStatementResult,
  FetchPageRequest,
  FetchPageResult,
  InvalidSessionException,
  LimitExceededException,
  OccConflictException,
  Page,
  RateExceededException,
  SendCommandRequest,
  SendCommandResult,
  StartSessionRequest,
  StartSessionResult,
  StartTransactionRequest,
  StartTransactionResult,
  ValueHolder
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

export const serializeAws_json1_0SendCommandCommand = async (
  input: SendCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "QLDBSession.SendCommand"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SendCommandRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0SendCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCommandCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0SendCommandCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SendCommandResult(data, context);
  const response: SendCommandCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendCommandResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SendCommandCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCommandCommandOutput> => {
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
    case "BadRequestException":
    case "com.amazonaws.qldbsession#BadRequestException":
      response = {
        ...(await deserializeAws_json1_0BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSessionException":
    case "com.amazonaws.qldbsession#InvalidSessionException":
      response = {
        ...(await deserializeAws_json1_0InvalidSessionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.qldbsession#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OccConflictException":
    case "com.amazonaws.qldbsession#OccConflictException":
      response = {
        ...(await deserializeAws_json1_0OccConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateExceededException":
    case "com.amazonaws.qldbsession#RateExceededException":
      response = {
        ...(await deserializeAws_json1_0RateExceededExceptionResponse(
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

const deserializeAws_json1_0BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0BadRequestException(
    body,
    context
  );
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidSessionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSessionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidSessionException(
    body,
    context
  );
  const contents: InvalidSessionException = {
    name: "InvalidSessionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

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

const deserializeAws_json1_0OccConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OccConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0OccConflictException(
    body,
    context
  );
  const contents: OccConflictException = {
    name: "OccConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0RateExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RateExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0RateExceededException(
    body,
    context
  );
  const contents: RateExceededException = {
    name: "RateExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_0AbortTransactionRequest = (
  input: AbortTransactionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0CommitTransactionRequest = (
  input: CommitTransactionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CommitDigest !== undefined && {
      CommitDigest: context.base64Encoder(input.CommitDigest)
    }),
    ...(input.TransactionId !== undefined && {
      TransactionId: input.TransactionId
    })
  };
};

const serializeAws_json1_0EndSessionRequest = (
  input: EndSessionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0ExecuteStatementRequest = (
  input: ExecuteStatementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Parameters !== undefined && {
      Parameters: serializeAws_json1_0StatementParameters(
        input.Parameters,
        context
      )
    }),
    ...(input.Statement !== undefined && { Statement: input.Statement }),
    ...(input.TransactionId !== undefined && {
      TransactionId: input.TransactionId
    })
  };
};

const serializeAws_json1_0FetchPageRequest = (
  input: FetchPageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextPageToken !== undefined && {
      NextPageToken: input.NextPageToken
    }),
    ...(input.TransactionId !== undefined && {
      TransactionId: input.TransactionId
    })
  };
};

const serializeAws_json1_0SendCommandRequest = (
  input: SendCommandRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AbortTransaction !== undefined && {
      AbortTransaction: serializeAws_json1_0AbortTransactionRequest(
        input.AbortTransaction,
        context
      )
    }),
    ...(input.CommitTransaction !== undefined && {
      CommitTransaction: serializeAws_json1_0CommitTransactionRequest(
        input.CommitTransaction,
        context
      )
    }),
    ...(input.EndSession !== undefined && {
      EndSession: serializeAws_json1_0EndSessionRequest(
        input.EndSession,
        context
      )
    }),
    ...(input.ExecuteStatement !== undefined && {
      ExecuteStatement: serializeAws_json1_0ExecuteStatementRequest(
        input.ExecuteStatement,
        context
      )
    }),
    ...(input.FetchPage !== undefined && {
      FetchPage: serializeAws_json1_0FetchPageRequest(input.FetchPage, context)
    }),
    ...(input.SessionToken !== undefined && {
      SessionToken: input.SessionToken
    }),
    ...(input.StartSession !== undefined && {
      StartSession: serializeAws_json1_0StartSessionRequest(
        input.StartSession,
        context
      )
    }),
    ...(input.StartTransaction !== undefined && {
      StartTransaction: serializeAws_json1_0StartTransactionRequest(
        input.StartTransaction,
        context
      )
    })
  };
};

const serializeAws_json1_0StartSessionRequest = (
  input: StartSessionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LedgerName !== undefined && { LedgerName: input.LedgerName })
  };
};

const serializeAws_json1_0StartTransactionRequest = (
  input: StartTransactionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0StatementParameters = (
  input: ValueHolder[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_0ValueHolder(entry, context));
};

const serializeAws_json1_0ValueHolder = (
  input: ValueHolder,
  context: __SerdeContext
): any => {
  return {
    ...(input.IonBinary !== undefined && {
      IonBinary: context.base64Encoder(input.IonBinary)
    }),
    ...(input.IonText !== undefined && { IonText: input.IonText })
  };
};

const deserializeAws_json1_0AbortTransactionResult = (
  output: any,
  context: __SerdeContext
): AbortTransactionResult => {
  return {
    __type: "AbortTransactionResult"
  } as any;
};

const deserializeAws_json1_0BadRequestException = (
  output: any,
  context: __SerdeContext
): BadRequestException => {
  return {
    __type: "BadRequestException",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_0CommitTransactionResult = (
  output: any,
  context: __SerdeContext
): CommitTransactionResult => {
  return {
    __type: "CommitTransactionResult",
    CommitDigest:
      output.CommitDigest !== undefined && output.CommitDigest !== null
        ? context.base64Decoder(output.CommitDigest)
        : undefined,
    TransactionId:
      output.TransactionId !== undefined && output.TransactionId !== null
        ? output.TransactionId
        : undefined
  } as any;
};

const deserializeAws_json1_0EndSessionResult = (
  output: any,
  context: __SerdeContext
): EndSessionResult => {
  return {
    __type: "EndSessionResult"
  } as any;
};

const deserializeAws_json1_0ExecuteStatementResult = (
  output: any,
  context: __SerdeContext
): ExecuteStatementResult => {
  return {
    __type: "ExecuteStatementResult",
    FirstPage:
      output.FirstPage !== undefined && output.FirstPage !== null
        ? deserializeAws_json1_0Page(output.FirstPage, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0FetchPageResult = (
  output: any,
  context: __SerdeContext
): FetchPageResult => {
  return {
    __type: "FetchPageResult",
    Page:
      output.Page !== undefined && output.Page !== null
        ? deserializeAws_json1_0Page(output.Page, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0InvalidSessionException = (
  output: any,
  context: __SerdeContext
): InvalidSessionException => {
  return {
    __type: "InvalidSessionException",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_0LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_0OccConflictException = (
  output: any,
  context: __SerdeContext
): OccConflictException => {
  return {
    __type: "OccConflictException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_0Page = (
  output: any,
  context: __SerdeContext
): Page => {
  return {
    __type: "Page",
    NextPageToken:
      output.NextPageToken !== undefined && output.NextPageToken !== null
        ? output.NextPageToken
        : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_0ValueHolders(output.Values, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0RateExceededException = (
  output: any,
  context: __SerdeContext
): RateExceededException => {
  return {
    __type: "RateExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_0SendCommandResult = (
  output: any,
  context: __SerdeContext
): SendCommandResult => {
  return {
    __type: "SendCommandResult",
    AbortTransaction:
      output.AbortTransaction !== undefined && output.AbortTransaction !== null
        ? deserializeAws_json1_0AbortTransactionResult(
            output.AbortTransaction,
            context
          )
        : undefined,
    CommitTransaction:
      output.CommitTransaction !== undefined &&
      output.CommitTransaction !== null
        ? deserializeAws_json1_0CommitTransactionResult(
            output.CommitTransaction,
            context
          )
        : undefined,
    EndSession:
      output.EndSession !== undefined && output.EndSession !== null
        ? deserializeAws_json1_0EndSessionResult(output.EndSession, context)
        : undefined,
    ExecuteStatement:
      output.ExecuteStatement !== undefined && output.ExecuteStatement !== null
        ? deserializeAws_json1_0ExecuteStatementResult(
            output.ExecuteStatement,
            context
          )
        : undefined,
    FetchPage:
      output.FetchPage !== undefined && output.FetchPage !== null
        ? deserializeAws_json1_0FetchPageResult(output.FetchPage, context)
        : undefined,
    StartSession:
      output.StartSession !== undefined && output.StartSession !== null
        ? deserializeAws_json1_0StartSessionResult(output.StartSession, context)
        : undefined,
    StartTransaction:
      output.StartTransaction !== undefined && output.StartTransaction !== null
        ? deserializeAws_json1_0StartTransactionResult(
            output.StartTransaction,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0StartSessionResult = (
  output: any,
  context: __SerdeContext
): StartSessionResult => {
  return {
    __type: "StartSessionResult",
    SessionToken:
      output.SessionToken !== undefined && output.SessionToken !== null
        ? output.SessionToken
        : undefined
  } as any;
};

const deserializeAws_json1_0StartTransactionResult = (
  output: any,
  context: __SerdeContext
): StartTransactionResult => {
  return {
    __type: "StartTransactionResult",
    TransactionId:
      output.TransactionId !== undefined && output.TransactionId !== null
        ? output.TransactionId
        : undefined
  } as any;
};

const deserializeAws_json1_0ValueHolder = (
  output: any,
  context: __SerdeContext
): ValueHolder => {
  return {
    __type: "ValueHolder",
    IonBinary:
      output.IonBinary !== undefined && output.IonBinary !== null
        ? context.base64Decoder(output.IonBinary)
        : undefined,
    IonText:
      output.IonText !== undefined && output.IonText !== null
        ? output.IonText
        : undefined
  } as any;
};

const deserializeAws_json1_0ValueHolders = (
  output: any,
  context: __SerdeContext
): ValueHolder[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ValueHolder(entry, context)
  );
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
