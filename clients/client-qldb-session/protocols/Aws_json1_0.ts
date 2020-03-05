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

export async function serializeAws_json1_0SendCommandCommand(
  input: SendCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "QLDBSession.SendCommand";
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SendCommandRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_0SendCommandCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCommandCommandOutput> {
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
}

async function deserializeAws_json1_0SendCommandCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCommandCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.qldb.session#BadRequestException":
      response = {
        ...(await deserializeAws_json1_0BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSessionException":
    case "com.amazonaws.qldb.session#InvalidSessionException":
      response = {
        ...(await deserializeAws_json1_0InvalidSessionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.qldb.session#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OccConflictException":
    case "com.amazonaws.qldb.session#OccConflictException":
      response = {
        ...(await deserializeAws_json1_0OccConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RateExceededException":
    case "com.amazonaws.qldb.session#RateExceededException":
      response = {
        ...(await deserializeAws_json1_0RateExceededExceptionResponse(
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
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_0CommitTransactionRequest = (
  input: CommitTransactionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CommitDigest !== undefined) {
    bodyParams["CommitDigest"] = context.base64Encoder(input.CommitDigest);
  }
  if (input.TransactionId !== undefined) {
    bodyParams["TransactionId"] = input.TransactionId;
  }
  return bodyParams;
};

const serializeAws_json1_0EndSessionRequest = (
  input: EndSessionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_0ExecuteStatementRequest = (
  input: ExecuteStatementRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Parameters !== undefined) {
    bodyParams["Parameters"] = serializeAws_json1_0StatementParameters(
      input.Parameters,
      context
    );
  }
  if (input.Statement !== undefined) {
    bodyParams["Statement"] = input.Statement;
  }
  if (input.TransactionId !== undefined) {
    bodyParams["TransactionId"] = input.TransactionId;
  }
  return bodyParams;
};

const serializeAws_json1_0FetchPageRequest = (
  input: FetchPageRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.NextPageToken !== undefined) {
    bodyParams["NextPageToken"] = input.NextPageToken;
  }
  if (input.TransactionId !== undefined) {
    bodyParams["TransactionId"] = input.TransactionId;
  }
  return bodyParams;
};

const serializeAws_json1_0SendCommandRequest = (
  input: SendCommandRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AbortTransaction !== undefined) {
    bodyParams[
      "AbortTransaction"
    ] = serializeAws_json1_0AbortTransactionRequest(
      input.AbortTransaction,
      context
    );
  }
  if (input.CommitTransaction !== undefined) {
    bodyParams[
      "CommitTransaction"
    ] = serializeAws_json1_0CommitTransactionRequest(
      input.CommitTransaction,
      context
    );
  }
  if (input.EndSession !== undefined) {
    bodyParams["EndSession"] = serializeAws_json1_0EndSessionRequest(
      input.EndSession,
      context
    );
  }
  if (input.ExecuteStatement !== undefined) {
    bodyParams[
      "ExecuteStatement"
    ] = serializeAws_json1_0ExecuteStatementRequest(
      input.ExecuteStatement,
      context
    );
  }
  if (input.FetchPage !== undefined) {
    bodyParams["FetchPage"] = serializeAws_json1_0FetchPageRequest(
      input.FetchPage,
      context
    );
  }
  if (input.SessionToken !== undefined) {
    bodyParams["SessionToken"] = input.SessionToken;
  }
  if (input.StartSession !== undefined) {
    bodyParams["StartSession"] = serializeAws_json1_0StartSessionRequest(
      input.StartSession,
      context
    );
  }
  if (input.StartTransaction !== undefined) {
    bodyParams[
      "StartTransaction"
    ] = serializeAws_json1_0StartTransactionRequest(
      input.StartTransaction,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0StartSessionRequest = (
  input: StartSessionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LedgerName !== undefined) {
    bodyParams["LedgerName"] = input.LedgerName;
  }
  return bodyParams;
};

const serializeAws_json1_0StartTransactionRequest = (
  input: StartTransactionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_0StatementParameters = (
  input: Array<ValueHolder>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_0ValueHolder(entry, context));
  }
  return contents;
};

const serializeAws_json1_0ValueHolder = (
  input: ValueHolder,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IonBinary !== undefined) {
    bodyParams["IonBinary"] = context.base64Encoder(input.IonBinary);
  }
  if (input.IonText !== undefined) {
    bodyParams["IonText"] = input.IonText;
  }
  return bodyParams;
};

const deserializeAws_json1_0AbortTransactionResult = (
  output: any,
  context: __SerdeContext
): AbortTransactionResult => {
  let contents: any = {
    __type: "AbortTransactionResult"
  };
  return contents;
};

const deserializeAws_json1_0BadRequestException = (
  output: any,
  context: __SerdeContext
): BadRequestException => {
  let contents: any = {
    __type: "BadRequestException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_0CommitTransactionResult = (
  output: any,
  context: __SerdeContext
): CommitTransactionResult => {
  let contents: any = {
    __type: "CommitTransactionResult",
    CommitDigest: undefined,
    TransactionId: undefined
  };
  if (output.CommitDigest !== undefined && output.CommitDigest !== null) {
    contents.CommitDigest = context.base64Decoder(output.CommitDigest);
  }
  if (output.TransactionId !== undefined && output.TransactionId !== null) {
    contents.TransactionId = output.TransactionId;
  }
  return contents;
};

const deserializeAws_json1_0EndSessionResult = (
  output: any,
  context: __SerdeContext
): EndSessionResult => {
  let contents: any = {
    __type: "EndSessionResult"
  };
  return contents;
};

const deserializeAws_json1_0ExecuteStatementResult = (
  output: any,
  context: __SerdeContext
): ExecuteStatementResult => {
  let contents: any = {
    __type: "ExecuteStatementResult",
    FirstPage: undefined
  };
  if (output.FirstPage !== undefined && output.FirstPage !== null) {
    contents.FirstPage = deserializeAws_json1_0Page(output.FirstPage, context);
  }
  return contents;
};

const deserializeAws_json1_0FetchPageResult = (
  output: any,
  context: __SerdeContext
): FetchPageResult => {
  let contents: any = {
    __type: "FetchPageResult",
    Page: undefined
  };
  if (output.Page !== undefined && output.Page !== null) {
    contents.Page = deserializeAws_json1_0Page(output.Page, context);
  }
  return contents;
};

const deserializeAws_json1_0InvalidSessionException = (
  output: any,
  context: __SerdeContext
): InvalidSessionException => {
  let contents: any = {
    __type: "InvalidSessionException",
    Code: undefined,
    Message: undefined
  };
  if (output.Code !== undefined && output.Code !== null) {
    contents.Code = output.Code;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
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
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_0OccConflictException = (
  output: any,
  context: __SerdeContext
): OccConflictException => {
  let contents: any = {
    __type: "OccConflictException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_0Page = (
  output: any,
  context: __SerdeContext
): Page => {
  let contents: any = {
    __type: "Page",
    NextPageToken: undefined,
    Values: undefined
  };
  if (output.NextPageToken !== undefined && output.NextPageToken !== null) {
    contents.NextPageToken = output.NextPageToken;
  }
  if (output.Values !== undefined && output.Values !== null) {
    contents.Values = deserializeAws_json1_0ValueHolders(
      output.Values,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0RateExceededException = (
  output: any,
  context: __SerdeContext
): RateExceededException => {
  let contents: any = {
    __type: "RateExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_0SendCommandResult = (
  output: any,
  context: __SerdeContext
): SendCommandResult => {
  let contents: any = {
    __type: "SendCommandResult",
    AbortTransaction: undefined,
    CommitTransaction: undefined,
    EndSession: undefined,
    ExecuteStatement: undefined,
    FetchPage: undefined,
    StartSession: undefined,
    StartTransaction: undefined
  };
  if (
    output.AbortTransaction !== undefined &&
    output.AbortTransaction !== null
  ) {
    contents.AbortTransaction = deserializeAws_json1_0AbortTransactionResult(
      output.AbortTransaction,
      context
    );
  }
  if (
    output.CommitTransaction !== undefined &&
    output.CommitTransaction !== null
  ) {
    contents.CommitTransaction = deserializeAws_json1_0CommitTransactionResult(
      output.CommitTransaction,
      context
    );
  }
  if (output.EndSession !== undefined && output.EndSession !== null) {
    contents.EndSession = deserializeAws_json1_0EndSessionResult(
      output.EndSession,
      context
    );
  }
  if (
    output.ExecuteStatement !== undefined &&
    output.ExecuteStatement !== null
  ) {
    contents.ExecuteStatement = deserializeAws_json1_0ExecuteStatementResult(
      output.ExecuteStatement,
      context
    );
  }
  if (output.FetchPage !== undefined && output.FetchPage !== null) {
    contents.FetchPage = deserializeAws_json1_0FetchPageResult(
      output.FetchPage,
      context
    );
  }
  if (output.StartSession !== undefined && output.StartSession !== null) {
    contents.StartSession = deserializeAws_json1_0StartSessionResult(
      output.StartSession,
      context
    );
  }
  if (
    output.StartTransaction !== undefined &&
    output.StartTransaction !== null
  ) {
    contents.StartTransaction = deserializeAws_json1_0StartTransactionResult(
      output.StartTransaction,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0StartSessionResult = (
  output: any,
  context: __SerdeContext
): StartSessionResult => {
  let contents: any = {
    __type: "StartSessionResult",
    SessionToken: undefined
  };
  if (output.SessionToken !== undefined && output.SessionToken !== null) {
    contents.SessionToken = output.SessionToken;
  }
  return contents;
};

const deserializeAws_json1_0StartTransactionResult = (
  output: any,
  context: __SerdeContext
): StartTransactionResult => {
  let contents: any = {
    __type: "StartTransactionResult",
    TransactionId: undefined
  };
  if (output.TransactionId !== undefined && output.TransactionId !== null) {
    contents.TransactionId = output.TransactionId;
  }
  return contents;
};

const deserializeAws_json1_0ValueHolder = (
  output: any,
  context: __SerdeContext
): ValueHolder => {
  let contents: any = {
    __type: "ValueHolder",
    IonBinary: undefined,
    IonText: undefined
  };
  if (output.IonBinary !== undefined && output.IonBinary !== null) {
    contents.IonBinary = context.base64Decoder(output.IonBinary);
  }
  if (output.IonText !== undefined && output.IonText !== null) {
    contents.IonText = output.IonText;
  }
  return contents;
};

const deserializeAws_json1_0ValueHolders = (
  output: any,
  context: __SerdeContext
): Array<ValueHolder> => {
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
