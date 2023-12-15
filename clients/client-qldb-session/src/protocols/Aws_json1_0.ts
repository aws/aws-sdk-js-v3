// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { SendCommandCommandInput, SendCommandCommandOutput } from "../commands/SendCommandCommand";
import {
  AbortTransactionRequest,
  BadRequestException,
  CapacityExceededException,
  CommitTransactionRequest,
  CommitTransactionResult,
  EndSessionRequest,
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
  StartTransactionRequest,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new RateExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AbortTransactionRequest omitted.

/**
 * serializeAws_json1_0CommitTransactionRequest
 */
const se_CommitTransactionRequest = (input: CommitTransactionRequest, context: __SerdeContext): any => {
  return take(input, {
    CommitDigest: context.base64Encoder,
    TransactionId: [],
  });
};

// se_EndSessionRequest omitted.

/**
 * serializeAws_json1_0ExecuteStatementRequest
 */
const se_ExecuteStatementRequest = (input: ExecuteStatementRequest, context: __SerdeContext): any => {
  return take(input, {
    Parameters: (_) => se_StatementParameters(_, context),
    Statement: [],
    TransactionId: [],
  });
};

// se_FetchPageRequest omitted.

/**
 * serializeAws_json1_0SendCommandRequest
 */
const se_SendCommandRequest = (input: SendCommandRequest, context: __SerdeContext): any => {
  return take(input, {
    AbortTransaction: _json,
    CommitTransaction: (_) => se_CommitTransactionRequest(_, context),
    EndSession: _json,
    ExecuteStatement: (_) => se_ExecuteStatementRequest(_, context),
    FetchPage: _json,
    SessionToken: [],
    StartSession: _json,
    StartTransaction: _json,
  });
};

// se_StartSessionRequest omitted.

// se_StartTransactionRequest omitted.

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
  return take(input, {
    IonBinary: context.base64Encoder,
    IonText: [],
  });
};

// de_AbortTransactionResult omitted.

// de_BadRequestException omitted.

// de_CapacityExceededException omitted.

/**
 * deserializeAws_json1_0CommitTransactionResult
 */
const de_CommitTransactionResult = (output: any, context: __SerdeContext): CommitTransactionResult => {
  return take(output, {
    CommitDigest: context.base64Decoder,
    ConsumedIOs: _json,
    TimingInformation: _json,
    TransactionId: __expectString,
  }) as any;
};

// de_EndSessionResult omitted.

/**
 * deserializeAws_json1_0ExecuteStatementResult
 */
const de_ExecuteStatementResult = (output: any, context: __SerdeContext): ExecuteStatementResult => {
  return take(output, {
    ConsumedIOs: _json,
    FirstPage: (_: any) => de_Page(_, context),
    TimingInformation: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0FetchPageResult
 */
const de_FetchPageResult = (output: any, context: __SerdeContext): FetchPageResult => {
  return take(output, {
    ConsumedIOs: _json,
    Page: (_: any) => de_Page(_, context),
    TimingInformation: _json,
  }) as any;
};

// de_InvalidSessionException omitted.

// de_IOUsage omitted.

// de_LimitExceededException omitted.

// de_OccConflictException omitted.

/**
 * deserializeAws_json1_0Page
 */
const de_Page = (output: any, context: __SerdeContext): Page => {
  return take(output, {
    NextPageToken: __expectString,
    Values: (_: any) => de_ValueHolders(_, context),
  }) as any;
};

// de_RateExceededException omitted.

/**
 * deserializeAws_json1_0SendCommandResult
 */
const de_SendCommandResult = (output: any, context: __SerdeContext): SendCommandResult => {
  return take(output, {
    AbortTransaction: _json,
    CommitTransaction: (_: any) => de_CommitTransactionResult(_, context),
    EndSession: _json,
    ExecuteStatement: (_: any) => de_ExecuteStatementResult(_, context),
    FetchPage: (_: any) => de_FetchPageResult(_, context),
    StartSession: _json,
    StartTransaction: _json,
  }) as any;
};

// de_StartSessionResult omitted.

// de_StartTransactionResult omitted.

// de_TimingInformation omitted.

/**
 * deserializeAws_json1_0ValueHolder
 */
const de_ValueHolder = (output: any, context: __SerdeContext): ValueHolder => {
  return take(output, {
    IonBinary: context.base64Decoder,
    IonText: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ValueHolders
 */
const de_ValueHolders = (output: any, context: __SerdeContext): ValueHolder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
