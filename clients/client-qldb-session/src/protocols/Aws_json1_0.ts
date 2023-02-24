// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectString as __expectString,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  InvalidSessionException,
  IOUsage,
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
import { QLDBSessionServiceException as __BaseException } from "../models/QLDBSessionServiceException";

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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.qldbsession#BadRequestException":
      throw await deserializeAws_json1_0BadRequestExceptionResponse(parsedOutput, context);
    case "CapacityExceededException":
    case "com.amazonaws.qldbsession#CapacityExceededException":
      throw await deserializeAws_json1_0CapacityExceededExceptionResponse(parsedOutput, context);
    case "InvalidSessionException":
    case "com.amazonaws.qldbsession#InvalidSessionException":
      throw await deserializeAws_json1_0InvalidSessionExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.qldbsession#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "OccConflictException":
    case "com.amazonaws.qldbsession#OccConflictException":
      throw await deserializeAws_json1_0OccConflictExceptionResponse(parsedOutput, context);
    case "RateExceededException":
    case "com.amazonaws.qldbsession#RateExceededException":
      throw await deserializeAws_json1_0RateExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_json1_0BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0BadRequestException(body, context);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0CapacityExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CapacityExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0CapacityExceededException(body, context);
  const exception = new CapacityExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidSessionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSessionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidSessionException(body, context);
  const exception = new InvalidSessionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0OccConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OccConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0OccConflictException(body, context);
  const exception = new OccConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0RateExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RateExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0RateExceededException(body, context);
  const exception = new RateExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0AbortTransactionRequest = (input: AbortTransactionRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_0CommitTransactionRequest = (
  input: CommitTransactionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CommitDigest != null && { CommitDigest: context.base64Encoder(input.CommitDigest) }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_json1_0EndSessionRequest = (input: EndSessionRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_0ExecuteStatementRequest = (input: ExecuteStatementRequest, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && { Parameters: serializeAws_json1_0StatementParameters(input.Parameters, context) }),
    ...(input.Statement != null && { Statement: input.Statement }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_json1_0FetchPageRequest = (input: FetchPageRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_json1_0SendCommandRequest = (input: SendCommandRequest, context: __SerdeContext): any => {
  return {
    ...(input.AbortTransaction != null && {
      AbortTransaction: serializeAws_json1_0AbortTransactionRequest(input.AbortTransaction, context),
    }),
    ...(input.CommitTransaction != null && {
      CommitTransaction: serializeAws_json1_0CommitTransactionRequest(input.CommitTransaction, context),
    }),
    ...(input.EndSession != null && { EndSession: serializeAws_json1_0EndSessionRequest(input.EndSession, context) }),
    ...(input.ExecuteStatement != null && {
      ExecuteStatement: serializeAws_json1_0ExecuteStatementRequest(input.ExecuteStatement, context),
    }),
    ...(input.FetchPage != null && { FetchPage: serializeAws_json1_0FetchPageRequest(input.FetchPage, context) }),
    ...(input.SessionToken != null && { SessionToken: input.SessionToken }),
    ...(input.StartSession != null && {
      StartSession: serializeAws_json1_0StartSessionRequest(input.StartSession, context),
    }),
    ...(input.StartTransaction != null && {
      StartTransaction: serializeAws_json1_0StartTransactionRequest(input.StartTransaction, context),
    }),
  };
};

const serializeAws_json1_0StartSessionRequest = (input: StartSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.LedgerName != null && { LedgerName: input.LedgerName }),
  };
};

const serializeAws_json1_0StartTransactionRequest = (input: StartTransactionRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_0StatementParameters = (input: ValueHolder[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ValueHolder(entry, context);
    });
};

const serializeAws_json1_0ValueHolder = (input: ValueHolder, context: __SerdeContext): any => {
  return {
    ...(input.IonBinary != null && { IonBinary: context.base64Encoder(input.IonBinary) }),
    ...(input.IonText != null && { IonText: input.IonText }),
  };
};

const deserializeAws_json1_0AbortTransactionResult = (output: any, context: __SerdeContext): AbortTransactionResult => {
  return {
    TimingInformation:
      output.TimingInformation != null
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
    CommitDigest: output.CommitDigest != null ? context.base64Decoder(output.CommitDigest) : undefined,
    ConsumedIOs: output.ConsumedIOs != null ? deserializeAws_json1_0IOUsage(output.ConsumedIOs, context) : undefined,
    TimingInformation:
      output.TimingInformation != null
        ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
        : undefined,
    TransactionId: __expectString(output.TransactionId),
  } as any;
};

const deserializeAws_json1_0EndSessionResult = (output: any, context: __SerdeContext): EndSessionResult => {
  return {
    TimingInformation:
      output.TimingInformation != null
        ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExecuteStatementResult = (output: any, context: __SerdeContext): ExecuteStatementResult => {
  return {
    ConsumedIOs: output.ConsumedIOs != null ? deserializeAws_json1_0IOUsage(output.ConsumedIOs, context) : undefined,
    FirstPage: output.FirstPage != null ? deserializeAws_json1_0Page(output.FirstPage, context) : undefined,
    TimingInformation:
      output.TimingInformation != null
        ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0FetchPageResult = (output: any, context: __SerdeContext): FetchPageResult => {
  return {
    ConsumedIOs: output.ConsumedIOs != null ? deserializeAws_json1_0IOUsage(output.ConsumedIOs, context) : undefined,
    Page: output.Page != null ? deserializeAws_json1_0Page(output.Page, context) : undefined,
    TimingInformation:
      output.TimingInformation != null
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
    ReadIOs: __expectLong(output.ReadIOs),
    WriteIOs: __expectLong(output.WriteIOs),
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
    Values: output.Values != null ? deserializeAws_json1_0ValueHolders(output.Values, context) : undefined,
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
      output.AbortTransaction != null
        ? deserializeAws_json1_0AbortTransactionResult(output.AbortTransaction, context)
        : undefined,
    CommitTransaction:
      output.CommitTransaction != null
        ? deserializeAws_json1_0CommitTransactionResult(output.CommitTransaction, context)
        : undefined,
    EndSession:
      output.EndSession != null ? deserializeAws_json1_0EndSessionResult(output.EndSession, context) : undefined,
    ExecuteStatement:
      output.ExecuteStatement != null
        ? deserializeAws_json1_0ExecuteStatementResult(output.ExecuteStatement, context)
        : undefined,
    FetchPage: output.FetchPage != null ? deserializeAws_json1_0FetchPageResult(output.FetchPage, context) : undefined,
    StartSession:
      output.StartSession != null ? deserializeAws_json1_0StartSessionResult(output.StartSession, context) : undefined,
    StartTransaction:
      output.StartTransaction != null
        ? deserializeAws_json1_0StartTransactionResult(output.StartTransaction, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0StartSessionResult = (output: any, context: __SerdeContext): StartSessionResult => {
  return {
    SessionToken: __expectString(output.SessionToken),
    TimingInformation:
      output.TimingInformation != null
        ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0StartTransactionResult = (output: any, context: __SerdeContext): StartTransactionResult => {
  return {
    TimingInformation:
      output.TimingInformation != null
        ? deserializeAws_json1_0TimingInformation(output.TimingInformation, context)
        : undefined,
    TransactionId: __expectString(output.TransactionId),
  } as any;
};

const deserializeAws_json1_0TimingInformation = (output: any, context: __SerdeContext): TimingInformation => {
  return {
    ProcessingTimeMilliseconds: __expectLong(output.ProcessingTimeMilliseconds),
  } as any;
};

const deserializeAws_json1_0ValueHolder = (output: any, context: __SerdeContext): ValueHolder => {
  return {
    IonBinary: output.IonBinary != null ? context.base64Decoder(output.IonBinary) : undefined,
    IonText: __expectString(output.IonText),
  } as any;
};

const deserializeAws_json1_0ValueHolders = (output: any, context: __SerdeContext): ValueHolder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ValueHolder(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
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
};
