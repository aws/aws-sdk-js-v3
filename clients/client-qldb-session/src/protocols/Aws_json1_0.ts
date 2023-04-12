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

/**
 * serializeAws_json1_0SendCommandCommand
 */
export const se_SendCommandCommand = async (
  input: SendCommandCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendCommand");
  let body: any;
  body = JSON.stringify(se_SendCommandRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0SendCommandCommand
 */
export const de_SendCommandCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendCommandCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendCommandCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendCommandResult(data, context);
  const response: SendCommandCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0SendCommandCommandError
 */
const de_SendCommandCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "CapacityExceededException":
    case "com.amazonaws.qldbsession#CapacityExceededException":
      throw await de_CapacityExceededExceptionRes(parsedOutput, context);
    case "InvalidSessionException":
    case "com.amazonaws.qldbsession#InvalidSessionException":
      throw await de_InvalidSessionExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.qldbsession#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OccConflictException":
    case "com.amazonaws.qldbsession#OccConflictException":
      throw await de_OccConflictExceptionRes(parsedOutput, context);
    case "RateExceededException":
    case "com.amazonaws.qldbsession#RateExceededException":
      throw await de_RateExceededExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BadRequestException(body, context);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0CapacityExceededExceptionRes
 */
const de_CapacityExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CapacityExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CapacityExceededException(body, context);
  const exception = new CapacityExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidSessionExceptionRes
 */
const de_InvalidSessionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSessionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSessionException(body, context);
  const exception = new InvalidSessionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0OccConflictExceptionRes
 */
const de_OccConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OccConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OccConflictException(body, context);
  const exception = new OccConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0RateExceededExceptionRes
 */
const de_RateExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RateExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RateExceededException(body, context);
  const exception = new RateExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0AbortTransactionRequest
 */
const se_AbortTransactionRequest = (input: AbortTransactionRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0CommitTransactionRequest
 */
const se_CommitTransactionRequest = (input: CommitTransactionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CommitDigest != null && { CommitDigest: context.base64Encoder(input.CommitDigest) }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

/**
 * serializeAws_json1_0EndSessionRequest
 */
const se_EndSessionRequest = (input: EndSessionRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0ExecuteStatementRequest
 */
const se_ExecuteStatementRequest = (input: ExecuteStatementRequest, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && { Parameters: se_StatementParameters(input.Parameters, context) }),
    ...(input.Statement != null && { Statement: input.Statement }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

/**
 * serializeAws_json1_0FetchPageRequest
 */
const se_FetchPageRequest = (input: FetchPageRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextPageToken != null && { NextPageToken: input.NextPageToken }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

/**
 * serializeAws_json1_0SendCommandRequest
 */
const se_SendCommandRequest = (input: SendCommandRequest, context: __SerdeContext): any => {
  return {
    ...(input.AbortTransaction != null && {
      AbortTransaction: se_AbortTransactionRequest(input.AbortTransaction, context),
    }),
    ...(input.CommitTransaction != null && {
      CommitTransaction: se_CommitTransactionRequest(input.CommitTransaction, context),
    }),
    ...(input.EndSession != null && { EndSession: se_EndSessionRequest(input.EndSession, context) }),
    ...(input.ExecuteStatement != null && {
      ExecuteStatement: se_ExecuteStatementRequest(input.ExecuteStatement, context),
    }),
    ...(input.FetchPage != null && { FetchPage: se_FetchPageRequest(input.FetchPage, context) }),
    ...(input.SessionToken != null && { SessionToken: input.SessionToken }),
    ...(input.StartSession != null && { StartSession: se_StartSessionRequest(input.StartSession, context) }),
    ...(input.StartTransaction != null && {
      StartTransaction: se_StartTransactionRequest(input.StartTransaction, context),
    }),
  };
};

/**
 * serializeAws_json1_0StartSessionRequest
 */
const se_StartSessionRequest = (input: StartSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.LedgerName != null && { LedgerName: input.LedgerName }),
  };
};

/**
 * serializeAws_json1_0StartTransactionRequest
 */
const se_StartTransactionRequest = (input: StartTransactionRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0StatementParameters
 */
const se_StatementParameters = (input: ValueHolder[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ValueHolder(entry, context);
    });
};

/**
 * serializeAws_json1_0ValueHolder
 */
const se_ValueHolder = (input: ValueHolder, context: __SerdeContext): any => {
  return {
    ...(input.IonBinary != null && { IonBinary: context.base64Encoder(input.IonBinary) }),
    ...(input.IonText != null && { IonText: input.IonText }),
  };
};

/**
 * deserializeAws_json1_0AbortTransactionResult
 */
const de_AbortTransactionResult = (output: any, context: __SerdeContext): AbortTransactionResult => {
  return {
    TimingInformation:
      output.TimingInformation != null ? de_TimingInformation(output.TimingInformation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0BadRequestException
 */
const de_BadRequestException = (output: any, context: __SerdeContext): BadRequestException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CapacityExceededException
 */
const de_CapacityExceededException = (output: any, context: __SerdeContext): CapacityExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CommitTransactionResult
 */
const de_CommitTransactionResult = (output: any, context: __SerdeContext): CommitTransactionResult => {
  return {
    CommitDigest: output.CommitDigest != null ? context.base64Decoder(output.CommitDigest) : undefined,
    ConsumedIOs: output.ConsumedIOs != null ? de_IOUsage(output.ConsumedIOs, context) : undefined,
    TimingInformation:
      output.TimingInformation != null ? de_TimingInformation(output.TimingInformation, context) : undefined,
    TransactionId: __expectString(output.TransactionId),
  } as any;
};

/**
 * deserializeAws_json1_0EndSessionResult
 */
const de_EndSessionResult = (output: any, context: __SerdeContext): EndSessionResult => {
  return {
    TimingInformation:
      output.TimingInformation != null ? de_TimingInformation(output.TimingInformation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExecuteStatementResult
 */
const de_ExecuteStatementResult = (output: any, context: __SerdeContext): ExecuteStatementResult => {
  return {
    ConsumedIOs: output.ConsumedIOs != null ? de_IOUsage(output.ConsumedIOs, context) : undefined,
    FirstPage: output.FirstPage != null ? de_Page(output.FirstPage, context) : undefined,
    TimingInformation:
      output.TimingInformation != null ? de_TimingInformation(output.TimingInformation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0FetchPageResult
 */
const de_FetchPageResult = (output: any, context: __SerdeContext): FetchPageResult => {
  return {
    ConsumedIOs: output.ConsumedIOs != null ? de_IOUsage(output.ConsumedIOs, context) : undefined,
    Page: output.Page != null ? de_Page(output.Page, context) : undefined,
    TimingInformation:
      output.TimingInformation != null ? de_TimingInformation(output.TimingInformation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InvalidSessionException
 */
const de_InvalidSessionException = (output: any, context: __SerdeContext): InvalidSessionException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0IOUsage
 */
const de_IOUsage = (output: any, context: __SerdeContext): IOUsage => {
  return {
    ReadIOs: __expectLong(output.ReadIOs),
    WriteIOs: __expectLong(output.WriteIOs),
  } as any;
};

/**
 * deserializeAws_json1_0LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0OccConflictException
 */
const de_OccConflictException = (output: any, context: __SerdeContext): OccConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0Page
 */
const de_Page = (output: any, context: __SerdeContext): Page => {
  return {
    NextPageToken: __expectString(output.NextPageToken),
    Values: output.Values != null ? de_ValueHolders(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RateExceededException
 */
const de_RateExceededException = (output: any, context: __SerdeContext): RateExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0SendCommandResult
 */
const de_SendCommandResult = (output: any, context: __SerdeContext): SendCommandResult => {
  return {
    AbortTransaction:
      output.AbortTransaction != null ? de_AbortTransactionResult(output.AbortTransaction, context) : undefined,
    CommitTransaction:
      output.CommitTransaction != null ? de_CommitTransactionResult(output.CommitTransaction, context) : undefined,
    EndSession: output.EndSession != null ? de_EndSessionResult(output.EndSession, context) : undefined,
    ExecuteStatement:
      output.ExecuteStatement != null ? de_ExecuteStatementResult(output.ExecuteStatement, context) : undefined,
    FetchPage: output.FetchPage != null ? de_FetchPageResult(output.FetchPage, context) : undefined,
    StartSession: output.StartSession != null ? de_StartSessionResult(output.StartSession, context) : undefined,
    StartTransaction:
      output.StartTransaction != null ? de_StartTransactionResult(output.StartTransaction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0StartSessionResult
 */
const de_StartSessionResult = (output: any, context: __SerdeContext): StartSessionResult => {
  return {
    SessionToken: __expectString(output.SessionToken),
    TimingInformation:
      output.TimingInformation != null ? de_TimingInformation(output.TimingInformation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0StartTransactionResult
 */
const de_StartTransactionResult = (output: any, context: __SerdeContext): StartTransactionResult => {
  return {
    TimingInformation:
      output.TimingInformation != null ? de_TimingInformation(output.TimingInformation, context) : undefined,
    TransactionId: __expectString(output.TransactionId),
  } as any;
};

/**
 * deserializeAws_json1_0TimingInformation
 */
const de_TimingInformation = (output: any, context: __SerdeContext): TimingInformation => {
  return {
    ProcessingTimeMilliseconds: __expectLong(output.ProcessingTimeMilliseconds),
  } as any;
};

/**
 * deserializeAws_json1_0ValueHolder
 */
const de_ValueHolder = (output: any, context: __SerdeContext): ValueHolder => {
  return {
    IonBinary: output.IonBinary != null ? context.base64Decoder(output.IonBinary) : undefined,
    IonText: __expectString(output.IonText),
  } as any;
};

/**
 * deserializeAws_json1_0ValueHolders
 */
const de_ValueHolders = (output: any, context: __SerdeContext): ValueHolder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValueHolder(entry, context);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `QLDBSession.${operation}`,
  };
}

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
