import { SendCommandCommandInput, SendCommandCommandOutput } from "../commands/SendCommandCommand";
import {
  AbortTransactionRequest,
  AbortTransactionResult,
  BadRequestException,
  CapacityExceededException,
  CommitTransactionRequest,
  CommitTransactionResult,
  EndSessionRequest,
  EndSessionResult,
  ExecuteStatementRequest,
  ExecuteStatementResult,
  FetchPageRequest,
  FetchPageResult,
  IOUsage,
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
  TimingInformation,
  ValueHolder,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { expectInt as __expectInt, expectString as __expectString } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_0SendCommandCommand = async (
  input: SendCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "QLDBSession.SendCommand",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SendCommandRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0SendCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCommandCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0SendCommandCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SendCommandResult(data, context);
  const response: SendCommandCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SendCommandCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCommandCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.qldbsession#BadRequestException":
      response = {
        ...(await deserializeAws_json1_0BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CapacityExceededException":
    case "com.amazonaws.qldbsession#CapacityExceededException":
      response = {
        ...(await deserializeAws_json1_0CapacityExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidSessionException":
    case "com.amazonaws.qldbsession#InvalidSessionException":
      response = {
        ...(await deserializeAws_json1_0InvalidSessionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.qldbsession#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OccConflictException":
    case "com.amazonaws.qldbsession#OccConflictException":
      response = {
        ...(await deserializeAws_json1_0OccConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RateExceededException":
    case "com.amazonaws.qldbsession#RateExceededException":
      response = {
        ...(await deserializeAws_json1_0RateExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
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
  const deserialized: any = deserializeAws_json1_0BadRequestException(body, context);
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0CapacityExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CapacityExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0CapacityExceededException(body, context);
  const contents: CapacityExceededException = {
    name: "CapacityExceededException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InvalidSessionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSessionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidSessionException(body, context);
  const contents: InvalidSessionException = {
    name: "InvalidSessionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0OccConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OccConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0OccConflictException(body, context);
  const contents: OccConflictException = {
    name: "OccConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0RateExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RateExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0RateExceededException(body, context);
  const contents: RateExceededException = {
    name: "RateExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_0AbortTransactionRequest = (input: AbortTransactionRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_0CommitTransactionRequest = (
  input: CommitTransactionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CommitDigest !== undefined &&
      input.CommitDigest !== null && { CommitDigest: context.base64Encoder(input.CommitDigest) }),
    ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_json1_0EndSessionRequest = (input: EndSessionRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_0ExecuteStatementRequest = (input: ExecuteStatementRequest, context: __SerdeContext): any => {
  return {
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_0StatementParameters(input.Parameters, context) }),
    ...(input.Statement !== undefined && input.Statement !== null && { Statement: input.Statement }),
    ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_json1_0FetchPageRequest = (input: FetchPageRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextPageToken !== undefined && input.NextPageToken !== null && { NextPageToken: input.NextPageToken }),
    ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_json1_0SendCommandRequest = (input: SendCommandRequest, context: __SerdeContext): any => {
  return {
    ...(input.AbortTransaction !== undefined &&
      input.AbortTransaction !== null && {
        AbortTransaction: serializeAws_json1_0AbortTransactionRequest(input.AbortTransaction, context),
      }),
    ...(input.CommitTransaction !== undefined &&
      input.CommitTransaction !== null && {
        CommitTransaction: serializeAws_json1_0CommitTransactionRequest(input.CommitTransaction, context),
      }),
    ...(input.EndSession !== undefined &&
      input.EndSession !== null && { EndSession: serializeAws_json1_0EndSessionRequest(input.EndSession, context) }),
    ...(input.ExecuteStatement !== undefined &&
      input.ExecuteStatement !== null && {
        ExecuteStatement: serializeAws_json1_0ExecuteStatementRequest(input.ExecuteStatement, context),
      }),
    ...(input.FetchPage !== undefined &&
      input.FetchPage !== null && { FetchPage: serializeAws_json1_0FetchPageRequest(input.FetchPage, context) }),
    ...(input.SessionToken !== undefined && input.SessionToken !== null && { SessionToken: input.SessionToken }),
    ...(input.StartSession !== undefined &&
      input.StartSession !== null && {
        StartSession: serializeAws_json1_0StartSessionRequest(input.StartSession, context),
      }),
    ...(input.StartTransaction !== undefined &&
      input.StartTransaction !== null && {
        StartTransaction: serializeAws_json1_0StartTransactionRequest(input.StartTransaction, context),
      }),
  };
};

const serializeAws_json1_0StartSessionRequest = (input: StartSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.LedgerName !== undefined && input.LedgerName !== null && { LedgerName: input.LedgerName }),
  };
};

const serializeAws_json1_0StartTransactionRequest = (input: StartTransactionRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_0StatementParameters = (input: ValueHolder[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0ValueHolder(entry, context);
    });
};

const serializeAws_json1_0ValueHolder = (input: ValueHolder, context: __SerdeContext): any => {
  return {
    ...(input.IonBinary !== undefined &&
      input.IonBinary !== null && { IonBinary: context.base64Encoder(input.IonBinary) }),
    ...(input.IonText !== undefined && input.IonText !== null && { IonText: input.IonText }),
  };
};

const deserializeAws_json1_0AbortTransactionResult = (output: any, context: __SerdeContext): AbortTransactionResult => {
  return {
    TimingInformation:
      output.TimingInformation !== undefined && output.TimingInformation !== null
        ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0BadRequestException = (output: any, context: __SerdeContext): BadRequestException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CapacityExceededException = (
  output: any,
  context: __SerdeContext
): CapacityExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CommitTransactionResult = (
  output: any,
  context: __SerdeContext
): CommitTransactionResult => {
  return {
    CommitDigest:
      output.CommitDigest !== undefined && output.CommitDigest !== null
        ? context.base64Decoder(output.CommitDigest)
        : undefined,
    ConsumedIOs:
      output.ConsumedIOs !== undefined && output.ConsumedIOs !== null
        ? deserializeAws_json1_0IOUsage(output.ConsumedIOs, context)
        : undefined,
    TimingInformation:
      output.TimingInformation !== undefined && output.TimingInformation !== null
        ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
        : undefined,
    TransactionId: __expectString(output.TransactionId),
  } as any;
};

const deserializeAws_json1_0EndSessionResult = (output: any, context: __SerdeContext): EndSessionResult => {
  return {
    TimingInformation:
      output.TimingInformation !== undefined && output.TimingInformation !== null
        ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExecuteStatementResult = (output: any, context: __SerdeContext): ExecuteStatementResult => {
  return {
    ConsumedIOs:
      output.ConsumedIOs !== undefined && output.ConsumedIOs !== null
        ? deserializeAws_json1_0IOUsage(output.ConsumedIOs, context)
        : undefined,
    FirstPage:
      output.FirstPage !== undefined && output.FirstPage !== null
        ? deserializeAws_json1_0Page(output.FirstPage, context)
        : undefined,
    TimingInformation:
      output.TimingInformation !== undefined && output.TimingInformation !== null
        ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0FetchPageResult = (output: any, context: __SerdeContext): FetchPageResult => {
  return {
    ConsumedIOs:
      output.ConsumedIOs !== undefined && output.ConsumedIOs !== null
        ? deserializeAws_json1_0IOUsage(output.ConsumedIOs, context)
        : undefined,
    Page:
      output.Page !== undefined && output.Page !== null ? deserializeAws_json1_0Page(output.Page, context) : undefined,
    TimingInformation:
      output.TimingInformation !== undefined && output.TimingInformation !== null
        ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0InvalidSessionException = (
  output: any,
  context: __SerdeContext
): InvalidSessionException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0IOUsage = (output: any, context: __SerdeContext): IOUsage => {
  return {
    ReadIOs: __expectInt(output.ReadIOs),
    WriteIOs: __expectInt(output.WriteIOs),
  } as any;
};

const deserializeAws_json1_0LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0OccConflictException = (output: any, context: __SerdeContext): OccConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0Page = (output: any, context: __SerdeContext): Page => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_0ValueHolders(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0RateExceededException = (output: any, context: __SerdeContext): RateExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0SendCommandResult = (output: any, context: __SerdeContext): SendCommandResult => {
  return {
    AbortTransaction:
      output.AbortTransaction !== undefined && output.AbortTransaction !== null
        ? deserializeAws_json1_0AbortTransactionResult(output.AbortTransaction, context)
        : undefined,
    CommitTransaction:
      output.CommitTransaction !== undefined && output.CommitTransaction !== null
        ? deserializeAws_json1_0CommitTransactionResult(output.CommitTransaction, context)
        : undefined,
    EndSession:
      output.EndSession !== undefined && output.EndSession !== null
        ? deserializeAws_json1_0EndSessionResult(output.EndSession, context)
        : undefined,
    ExecuteStatement:
      output.ExecuteStatement !== undefined && output.ExecuteStatement !== null
        ? deserializeAws_json1_0ExecuteStatementResult(output.ExecuteStatement, context)
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
        ? deserializeAws_json1_0StartTransactionResult(output.StartTransaction, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0StartSessionResult = (output: any, context: __SerdeContext): StartSessionResult => {
  return {
    SessionToken: __expectString(output.SessionToken),
    TimingInformation:
      output.TimingInformation !== undefined && output.TimingInformation !== null
        ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0StartTransactionResult = (output: any, context: __SerdeContext): StartTransactionResult => {
  return {
    TimingInformation:
      output.TimingInformation !== undefined && output.TimingInformation !== null
        ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
        : undefined,
    TransactionId: __expectString(output.TransactionId),
  } as any;
};

const deserializeAws_json1_0TimingInformation = (output: any, context: __SerdeContext): TimingInformation => {
  return {
    ProcessingTimeMilliseconds: __expectInt(output.ProcessingTimeMilliseconds),
  } as any;
};

const deserializeAws_json1_0ValueHolder = (output: any, context: __SerdeContext): ValueHolder => {
  return {
    IonBinary:
      output.IonBinary !== undefined && output.IonBinary !== null ? context.base64Decoder(output.IonBinary) : undefined,
    IonText: __expectString(output.IonText),
  } as any;
};

const deserializeAws_json1_0ValueHolders = (output: any, context: __SerdeContext): ValueHolder[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ValueHolder(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
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
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

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
