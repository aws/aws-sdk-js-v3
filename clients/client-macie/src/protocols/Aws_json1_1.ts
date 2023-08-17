// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociateMemberAccountCommandInput,
  AssociateMemberAccountCommandOutput,
} from "../commands/AssociateMemberAccountCommand";
import {
  AssociateS3ResourcesCommandInput,
  AssociateS3ResourcesCommandOutput,
} from "../commands/AssociateS3ResourcesCommand";
import {
  DisassociateMemberAccountCommandInput,
  DisassociateMemberAccountCommandOutput,
} from "../commands/DisassociateMemberAccountCommand";
import {
  DisassociateS3ResourcesCommandInput,
  DisassociateS3ResourcesCommandOutput,
} from "../commands/DisassociateS3ResourcesCommand";
import { ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput } from "../commands/ListMemberAccountsCommand";
import { ListS3ResourcesCommandInput, ListS3ResourcesCommandOutput } from "../commands/ListS3ResourcesCommand";
import { UpdateS3ResourcesCommandInput, UpdateS3ResourcesCommandOutput } from "../commands/UpdateS3ResourcesCommand";
import { MacieServiceException as __BaseException } from "../models/MacieServiceException";
import {
  AccessDeniedException,
  AssociateMemberAccountRequest,
  AssociateS3ResourcesRequest,
  ClassificationType,
  ClassificationTypeUpdate,
  DisassociateMemberAccountRequest,
  DisassociateS3ResourcesRequest,
  InternalException,
  InvalidInputException,
  LimitExceededException,
  ListMemberAccountsRequest,
  ListS3ResourcesRequest,
  S3Resource,
  S3ResourceClassification,
  S3ResourceClassificationUpdate,
  UpdateS3ResourcesRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1AssociateMemberAccountCommand
 */
export const se_AssociateMemberAccountCommand = async (
  input: AssociateMemberAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateMemberAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateS3ResourcesCommand
 */
export const se_AssociateS3ResourcesCommand = async (
  input: AssociateS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateS3Resources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateMemberAccountCommand
 */
export const se_DisassociateMemberAccountCommand = async (
  input: DisassociateMemberAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateMemberAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateS3ResourcesCommand
 */
export const se_DisassociateS3ResourcesCommand = async (
  input: DisassociateS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateS3Resources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMemberAccountsCommand
 */
export const se_ListMemberAccountsCommand = async (
  input: ListMemberAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMemberAccounts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListS3ResourcesCommand
 */
export const se_ListS3ResourcesCommand = async (
  input: ListS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListS3Resources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateS3ResourcesCommand
 */
export const se_UpdateS3ResourcesCommand = async (
  input: UpdateS3ResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateS3Resources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateMemberAccountCommand
 */
export const de_AssociateMemberAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateMemberAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateMemberAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateMemberAccountCommandError
 */
const de_AssociateMemberAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.macie#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AssociateS3ResourcesCommand
 */
export const de_AssociateS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateS3ResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateS3ResourcesCommandError
 */
const de_AssociateS3ResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateS3ResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.macie#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateMemberAccountCommand
 */
export const de_DisassociateMemberAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateMemberAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateMemberAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateMemberAccountCommandError
 */
const de_DisassociateMemberAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateS3ResourcesCommand
 */
export const de_DisassociateS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateS3ResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateS3ResourcesCommandError
 */
const de_DisassociateS3ResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateS3ResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListMemberAccountsCommand
 */
export const de_ListMemberAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMemberAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListMemberAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMemberAccountsCommandError
 */
const de_ListMemberAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListS3ResourcesCommand
 */
export const de_ListS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListS3ResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListS3ResourcesCommandError
 */
const de_ListS3ResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListS3ResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateS3ResourcesCommand
 */
export const de_UpdateS3ResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateS3ResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateS3ResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateS3ResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateS3ResourcesCommandError
 */
const de_UpdateS3ResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateS3ResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.macie#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.macie#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.macie#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalExceptionRes
 */
const de_InternalExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
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

// se_AssociateMemberAccountRequest omitted.

// se_AssociateS3ResourcesRequest omitted.

// se_ClassificationType omitted.

// se_ClassificationTypeUpdate omitted.

// se_DisassociateMemberAccountRequest omitted.

// se_DisassociateS3ResourcesRequest omitted.

// se_ListMemberAccountsRequest omitted.

// se_ListS3ResourcesRequest omitted.

// se_S3Resource omitted.

// se_S3ResourceClassification omitted.

// se_S3ResourceClassificationUpdate omitted.

// se_S3Resources omitted.

// se_S3ResourcesClassification omitted.

// se_S3ResourcesClassificationUpdate omitted.

// se_UpdateS3ResourcesRequest omitted.

// de_AccessDeniedException omitted.

// de_AssociateS3ResourcesResult omitted.

// de_ClassificationType omitted.

// de_DisassociateS3ResourcesResult omitted.

// de_FailedS3Resource omitted.

// de_FailedS3Resources omitted.

// de_InternalException omitted.

// de_InvalidInputException omitted.

// de_LimitExceededException omitted.

// de_ListMemberAccountsResult omitted.

// de_ListS3ResourcesResult omitted.

// de_MemberAccount omitted.

// de_MemberAccounts omitted.

// de_S3Resource omitted.

// de_S3ResourceClassification omitted.

// de_S3ResourcesClassification omitted.

// de_UpdateS3ResourcesResult omitted.

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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `MacieService.${operation}`,
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
