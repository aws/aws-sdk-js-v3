import { AssumeRoleCommandInput, AssumeRoleCommandOutput } from "../commands/AssumeRoleCommand";
import { AssumeRoleWithSAMLCommandInput, AssumeRoleWithSAMLCommandOutput } from "../commands/AssumeRoleWithSAMLCommand";
import {
  AssumeRoleWithWebIdentityCommandInput,
  AssumeRoleWithWebIdentityCommandOutput,
} from "../commands/AssumeRoleWithWebIdentityCommand";
import {
  DecodeAuthorizationMessageCommandInput,
  DecodeAuthorizationMessageCommandOutput,
} from "../commands/DecodeAuthorizationMessageCommand";
import { GetAccessKeyInfoCommandInput, GetAccessKeyInfoCommandOutput } from "../commands/GetAccessKeyInfoCommand";
import { GetCallerIdentityCommandInput, GetCallerIdentityCommandOutput } from "../commands/GetCallerIdentityCommand";
import { GetFederationTokenCommandInput, GetFederationTokenCommandOutput } from "../commands/GetFederationTokenCommand";
import { GetSessionTokenCommandInput, GetSessionTokenCommandOutput } from "../commands/GetSessionTokenCommand";
import {
  AssumeRoleRequest,
  AssumeRoleResponse,
  AssumeRoleWithSAMLRequest,
  AssumeRoleWithSAMLResponse,
  AssumeRoleWithWebIdentityRequest,
  AssumeRoleWithWebIdentityResponse,
  AssumedRoleUser,
  Credentials,
  DecodeAuthorizationMessageRequest,
  DecodeAuthorizationMessageResponse,
  ExpiredTokenException,
  FederatedUser,
  GetAccessKeyInfoRequest,
  GetAccessKeyInfoResponse,
  GetCallerIdentityRequest,
  GetCallerIdentityResponse,
  GetFederationTokenRequest,
  GetFederationTokenResponse,
  GetSessionTokenRequest,
  GetSessionTokenResponse,
  IDPCommunicationErrorException,
  IDPRejectedClaimException,
  InvalidAuthorizationMessageException,
  InvalidIdentityTokenException,
  MalformedPolicyDocumentException,
  PackedPolicyTooLargeException,
  PolicyDescriptorType,
  RegionDisabledException,
  Tag,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getValueFromTextNode as __getValueFromTextNode,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  strictParseInt32 as __strictParseInt32,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_queryAssumeRoleCommand = async (
  input: AssumeRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAssumeRoleRequest(input, context),
    Action: "AssumeRole",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAssumeRoleWithSAMLCommand = async (
  input: AssumeRoleWithSAMLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAssumeRoleWithSAMLRequest(input, context),
    Action: "AssumeRoleWithSAML",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAssumeRoleWithWebIdentityCommand = async (
  input: AssumeRoleWithWebIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAssumeRoleWithWebIdentityRequest(input, context),
    Action: "AssumeRoleWithWebIdentity",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDecodeAuthorizationMessageCommand = async (
  input: DecodeAuthorizationMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDecodeAuthorizationMessageRequest(input, context),
    Action: "DecodeAuthorizationMessage",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetAccessKeyInfoCommand = async (
  input: GetAccessKeyInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetAccessKeyInfoRequest(input, context),
    Action: "GetAccessKeyInfo",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetCallerIdentityCommand = async (
  input: GetCallerIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetCallerIdentityRequest(input, context),
    Action: "GetCallerIdentity",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetFederationTokenCommand = async (
  input: GetFederationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetFederationTokenRequest(input, context),
    Action: "GetFederationToken",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetSessionTokenCommand = async (
  input: GetSessionTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetSessionTokenRequest(input, context),
    Action: "GetSessionToken",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAssumeRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAssumeRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAssumeRoleResponse(data.AssumeRoleResult, context);
  const response: AssumeRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAssumeRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazonaws.sts#ExpiredTokenException":
      response = {
        ...(await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PackedPolicyTooLargeException":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      response = {
        ...(await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      response = {
        ...(await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryAssumeRoleWithSAMLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithSAMLCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAssumeRoleWithSAMLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
  const response: AssumeRoleWithSAMLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAssumeRoleWithSAMLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithSAMLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazonaws.sts#ExpiredTokenException":
      response = {
        ...(await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IDPRejectedClaimException":
    case "com.amazonaws.sts#IDPRejectedClaimException":
      response = {
        ...(await deserializeAws_queryIDPRejectedClaimExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIdentityTokenException":
    case "com.amazonaws.sts#InvalidIdentityTokenException":
      response = {
        ...(await deserializeAws_queryInvalidIdentityTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PackedPolicyTooLargeException":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      response = {
        ...(await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      response = {
        ...(await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryAssumeRoleWithWebIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithWebIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAssumeRoleWithWebIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryAssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
  const response: AssumeRoleWithWebIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAssumeRoleWithWebIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithWebIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazonaws.sts#ExpiredTokenException":
      response = {
        ...(await deserializeAws_queryExpiredTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IDPCommunicationErrorException":
    case "com.amazonaws.sts#IDPCommunicationErrorException":
      response = {
        ...(await deserializeAws_queryIDPCommunicationErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IDPRejectedClaimException":
    case "com.amazonaws.sts#IDPRejectedClaimException":
      response = {
        ...(await deserializeAws_queryIDPRejectedClaimExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIdentityTokenException":
    case "com.amazonaws.sts#InvalidIdentityTokenException":
      response = {
        ...(await deserializeAws_queryInvalidIdentityTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PackedPolicyTooLargeException":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      response = {
        ...(await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      response = {
        ...(await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDecodeAuthorizationMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecodeAuthorizationMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDecodeAuthorizationMessageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
  const response: DecodeAuthorizationMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDecodeAuthorizationMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecodeAuthorizationMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAuthorizationMessageException":
    case "com.amazonaws.sts#InvalidAuthorizationMessageException":
      response = {
        ...(await deserializeAws_queryInvalidAuthorizationMessageExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetAccessKeyInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessKeyInfoCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetAccessKeyInfoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
  const response: GetAccessKeyInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetAccessKeyInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessKeyInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetCallerIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallerIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetCallerIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetCallerIdentityResponse(data.GetCallerIdentityResult, context);
  const response: GetCallerIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetCallerIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallerIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetFederationTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFederationTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetFederationTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetFederationTokenResponse(data.GetFederationTokenResult, context);
  const response: GetFederationTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetFederationTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFederationTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PackedPolicyTooLargeException":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      response = {
        ...(await deserializeAws_queryPackedPolicyTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      response = {
        ...(await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetSessionTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetSessionTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetSessionTokenResponse(data.GetSessionTokenResult, context);
  const response: GetSessionTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetSessionTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      response = {
        ...(await deserializeAws_queryRegionDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_queryExpiredTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryExpiredTokenException(body.Error, context);
  const contents: ExpiredTokenException = {
    name: "ExpiredTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryIDPCommunicationErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IDPCommunicationErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryIDPCommunicationErrorException(body.Error, context);
  const contents: IDPCommunicationErrorException = {
    name: "IDPCommunicationErrorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryIDPRejectedClaimExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IDPRejectedClaimException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryIDPRejectedClaimException(body.Error, context);
  const contents: IDPRejectedClaimException = {
    name: "IDPRejectedClaimException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidAuthorizationMessageExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAuthorizationMessageException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidAuthorizationMessageException(body.Error, context);
  const contents: InvalidAuthorizationMessageException = {
    name: "InvalidAuthorizationMessageException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidIdentityTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIdentityTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidIdentityTokenException(body.Error, context);
  const contents: InvalidIdentityTokenException = {
    name: "InvalidIdentityTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryMalformedPolicyDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryMalformedPolicyDocumentException(body.Error, context);
  const contents: MalformedPolicyDocumentException = {
    name: "MalformedPolicyDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryPackedPolicyTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PackedPolicyTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPackedPolicyTooLargeException(body.Error, context);
  const contents: PackedPolicyTooLargeException = {
    name: "PackedPolicyTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryRegionDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RegionDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryRegionDisabledException(body.Error, context);
  const contents: RegionDisabledException = {
    name: "RegionDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_queryAssumeRoleRequest = (input: AssumeRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleArn !== undefined && input.RoleArn !== null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.RoleSessionName !== undefined && input.RoleSessionName !== null) {
    entries["RoleSessionName"] = input.RoleSessionName;
  }
  if (input.PolicyArns !== undefined && input.PolicyArns !== null) {
    const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Policy !== undefined && input.Policy !== null) {
    entries["Policy"] = input.Policy;
  }
  if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_querytagListType(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TransitiveTagKeys !== undefined && input.TransitiveTagKeys !== null) {
    const memberEntries = serializeAws_querytagKeyListType(input.TransitiveTagKeys, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TransitiveTagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExternalId !== undefined && input.ExternalId !== null) {
    entries["ExternalId"] = input.ExternalId;
  }
  if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.TokenCode !== undefined && input.TokenCode !== null) {
    entries["TokenCode"] = input.TokenCode;
  }
  if (input.SourceIdentity !== undefined && input.SourceIdentity !== null) {
    entries["SourceIdentity"] = input.SourceIdentity;
  }
  return entries;
};

const serializeAws_queryAssumeRoleWithSAMLRequest = (
  input: AssumeRoleWithSAMLRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RoleArn !== undefined && input.RoleArn !== null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.PrincipalArn !== undefined && input.PrincipalArn !== null) {
    entries["PrincipalArn"] = input.PrincipalArn;
  }
  if (input.SAMLAssertion !== undefined && input.SAMLAssertion !== null) {
    entries["SAMLAssertion"] = input.SAMLAssertion;
  }
  if (input.PolicyArns !== undefined && input.PolicyArns !== null) {
    const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Policy !== undefined && input.Policy !== null) {
    entries["Policy"] = input.Policy;
  }
  if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  return entries;
};

const serializeAws_queryAssumeRoleWithWebIdentityRequest = (
  input: AssumeRoleWithWebIdentityRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RoleArn !== undefined && input.RoleArn !== null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.RoleSessionName !== undefined && input.RoleSessionName !== null) {
    entries["RoleSessionName"] = input.RoleSessionName;
  }
  if (input.WebIdentityToken !== undefined && input.WebIdentityToken !== null) {
    entries["WebIdentityToken"] = input.WebIdentityToken;
  }
  if (input.ProviderId !== undefined && input.ProviderId !== null) {
    entries["ProviderId"] = input.ProviderId;
  }
  if (input.PolicyArns !== undefined && input.PolicyArns !== null) {
    const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Policy !== undefined && input.Policy !== null) {
    entries["Policy"] = input.Policy;
  }
  if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  return entries;
};

const serializeAws_queryDecodeAuthorizationMessageRequest = (
  input: DecodeAuthorizationMessageRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EncodedMessage !== undefined && input.EncodedMessage !== null) {
    entries["EncodedMessage"] = input.EncodedMessage;
  }
  return entries;
};

const serializeAws_queryGetAccessKeyInfoRequest = (input: GetAccessKeyInfoRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AccessKeyId !== undefined && input.AccessKeyId !== null) {
    entries["AccessKeyId"] = input.AccessKeyId;
  }
  return entries;
};

const serializeAws_queryGetCallerIdentityRequest = (input: GetCallerIdentityRequest, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

const serializeAws_queryGetFederationTokenRequest = (
  input: GetFederationTokenRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Policy !== undefined && input.Policy !== null) {
    entries["Policy"] = input.Policy;
  }
  if (input.PolicyArns !== undefined && input.PolicyArns !== null) {
    const memberEntries = serializeAws_querypolicyDescriptorListType(input.PolicyArns, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_querytagListType(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryGetSessionTokenRequest = (input: GetSessionTokenRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DurationSeconds !== undefined && input.DurationSeconds !== null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.SerialNumber !== undefined && input.SerialNumber !== null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.TokenCode !== undefined && input.TokenCode !== null) {
    entries["TokenCode"] = input.TokenCode;
  }
  return entries;
};

const serializeAws_querypolicyDescriptorListType = (input: PolicyDescriptorType[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryPolicyDescriptorType(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPolicyDescriptorType = (input: PolicyDescriptorType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.arn !== undefined && input.arn !== null) {
    entries["arn"] = input.arn;
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined && input.Key !== null) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_querytagKeyListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querytagListType = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const deserializeAws_queryAssumedRoleUser = (output: any, context: __SerdeContext): AssumedRoleUser => {
  let contents: any = {
    AssumedRoleId: undefined,
    Arn: undefined,
  };
  if (output["AssumedRoleId"] !== undefined) {
    contents.AssumedRoleId = __expectString(output["AssumedRoleId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  return contents;
};

const deserializeAws_queryAssumeRoleResponse = (output: any, context: __SerdeContext): AssumeRoleResponse => {
  let contents: any = {
    Credentials: undefined,
    AssumedRoleUser: undefined,
    PackedPolicySize: undefined,
    SourceIdentity: undefined,
  };
  if (output["Credentials"] !== undefined) {
    contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
  }
  if (output["AssumedRoleUser"] !== undefined) {
    contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
  }
  if (output["PackedPolicySize"] !== undefined) {
    contents.PackedPolicySize = __strictParseInt32(output["PackedPolicySize"]) as number;
  }
  if (output["SourceIdentity"] !== undefined) {
    contents.SourceIdentity = __expectString(output["SourceIdentity"]);
  }
  return contents;
};

const deserializeAws_queryAssumeRoleWithSAMLResponse = (
  output: any,
  context: __SerdeContext
): AssumeRoleWithSAMLResponse => {
  let contents: any = {
    Credentials: undefined,
    AssumedRoleUser: undefined,
    PackedPolicySize: undefined,
    Subject: undefined,
    SubjectType: undefined,
    Issuer: undefined,
    Audience: undefined,
    NameQualifier: undefined,
    SourceIdentity: undefined,
  };
  if (output["Credentials"] !== undefined) {
    contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
  }
  if (output["AssumedRoleUser"] !== undefined) {
    contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
  }
  if (output["PackedPolicySize"] !== undefined) {
    contents.PackedPolicySize = __strictParseInt32(output["PackedPolicySize"]) as number;
  }
  if (output["Subject"] !== undefined) {
    contents.Subject = __expectString(output["Subject"]);
  }
  if (output["SubjectType"] !== undefined) {
    contents.SubjectType = __expectString(output["SubjectType"]);
  }
  if (output["Issuer"] !== undefined) {
    contents.Issuer = __expectString(output["Issuer"]);
  }
  if (output["Audience"] !== undefined) {
    contents.Audience = __expectString(output["Audience"]);
  }
  if (output["NameQualifier"] !== undefined) {
    contents.NameQualifier = __expectString(output["NameQualifier"]);
  }
  if (output["SourceIdentity"] !== undefined) {
    contents.SourceIdentity = __expectString(output["SourceIdentity"]);
  }
  return contents;
};

const deserializeAws_queryAssumeRoleWithWebIdentityResponse = (
  output: any,
  context: __SerdeContext
): AssumeRoleWithWebIdentityResponse => {
  let contents: any = {
    Credentials: undefined,
    SubjectFromWebIdentityToken: undefined,
    AssumedRoleUser: undefined,
    PackedPolicySize: undefined,
    Provider: undefined,
    Audience: undefined,
    SourceIdentity: undefined,
  };
  if (output["Credentials"] !== undefined) {
    contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
  }
  if (output["SubjectFromWebIdentityToken"] !== undefined) {
    contents.SubjectFromWebIdentityToken = __expectString(output["SubjectFromWebIdentityToken"]);
  }
  if (output["AssumedRoleUser"] !== undefined) {
    contents.AssumedRoleUser = deserializeAws_queryAssumedRoleUser(output["AssumedRoleUser"], context);
  }
  if (output["PackedPolicySize"] !== undefined) {
    contents.PackedPolicySize = __strictParseInt32(output["PackedPolicySize"]) as number;
  }
  if (output["Provider"] !== undefined) {
    contents.Provider = __expectString(output["Provider"]);
  }
  if (output["Audience"] !== undefined) {
    contents.Audience = __expectString(output["Audience"]);
  }
  if (output["SourceIdentity"] !== undefined) {
    contents.SourceIdentity = __expectString(output["SourceIdentity"]);
  }
  return contents;
};

const deserializeAws_queryCredentials = (output: any, context: __SerdeContext): Credentials => {
  let contents: any = {
    AccessKeyId: undefined,
    SecretAccessKey: undefined,
    SessionToken: undefined,
    Expiration: undefined,
  };
  if (output["AccessKeyId"] !== undefined) {
    contents.AccessKeyId = __expectString(output["AccessKeyId"]);
  }
  if (output["SecretAccessKey"] !== undefined) {
    contents.SecretAccessKey = __expectString(output["SecretAccessKey"]);
  }
  if (output["SessionToken"] !== undefined) {
    contents.SessionToken = __expectString(output["SessionToken"]);
  }
  if (output["Expiration"] !== undefined) {
    contents.Expiration = __expectNonNull(__parseRfc3339DateTime(output["Expiration"]));
  }
  return contents;
};

const deserializeAws_queryDecodeAuthorizationMessageResponse = (
  output: any,
  context: __SerdeContext
): DecodeAuthorizationMessageResponse => {
  let contents: any = {
    DecodedMessage: undefined,
  };
  if (output["DecodedMessage"] !== undefined) {
    contents.DecodedMessage = __expectString(output["DecodedMessage"]);
  }
  return contents;
};

const deserializeAws_queryExpiredTokenException = (output: any, context: __SerdeContext): ExpiredTokenException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryFederatedUser = (output: any, context: __SerdeContext): FederatedUser => {
  let contents: any = {
    FederatedUserId: undefined,
    Arn: undefined,
  };
  if (output["FederatedUserId"] !== undefined) {
    contents.FederatedUserId = __expectString(output["FederatedUserId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  return contents;
};

const deserializeAws_queryGetAccessKeyInfoResponse = (
  output: any,
  context: __SerdeContext
): GetAccessKeyInfoResponse => {
  let contents: any = {
    Account: undefined,
  };
  if (output["Account"] !== undefined) {
    contents.Account = __expectString(output["Account"]);
  }
  return contents;
};

const deserializeAws_queryGetCallerIdentityResponse = (
  output: any,
  context: __SerdeContext
): GetCallerIdentityResponse => {
  let contents: any = {
    UserId: undefined,
    Account: undefined,
    Arn: undefined,
  };
  if (output["UserId"] !== undefined) {
    contents.UserId = __expectString(output["UserId"]);
  }
  if (output["Account"] !== undefined) {
    contents.Account = __expectString(output["Account"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  return contents;
};

const deserializeAws_queryGetFederationTokenResponse = (
  output: any,
  context: __SerdeContext
): GetFederationTokenResponse => {
  let contents: any = {
    Credentials: undefined,
    FederatedUser: undefined,
    PackedPolicySize: undefined,
  };
  if (output["Credentials"] !== undefined) {
    contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
  }
  if (output["FederatedUser"] !== undefined) {
    contents.FederatedUser = deserializeAws_queryFederatedUser(output["FederatedUser"], context);
  }
  if (output["PackedPolicySize"] !== undefined) {
    contents.PackedPolicySize = __strictParseInt32(output["PackedPolicySize"]) as number;
  }
  return contents;
};

const deserializeAws_queryGetSessionTokenResponse = (output: any, context: __SerdeContext): GetSessionTokenResponse => {
  let contents: any = {
    Credentials: undefined,
  };
  if (output["Credentials"] !== undefined) {
    contents.Credentials = deserializeAws_queryCredentials(output["Credentials"], context);
  }
  return contents;
};

const deserializeAws_queryIDPCommunicationErrorException = (
  output: any,
  context: __SerdeContext
): IDPCommunicationErrorException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryIDPRejectedClaimException = (
  output: any,
  context: __SerdeContext
): IDPRejectedClaimException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidAuthorizationMessageException = (
  output: any,
  context: __SerdeContext
): InvalidAuthorizationMessageException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidIdentityTokenException = (
  output: any,
  context: __SerdeContext
): InvalidIdentityTokenException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryMalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryPackedPolicyTooLargeException = (
  output: any,
  context: __SerdeContext
): PackedPolicyTooLargeException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryRegionDisabledException = (output: any, context: __SerdeContext): RegionDisabledException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
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
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        trimValues: false,
        tagValueProcessor: (val) => (val.trim() === "" && val.includes("\n") ? "" : decodeHTML(val)),
      });
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const buildFormUrlencodedString = (formEntries: { [key: string]: string }): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
