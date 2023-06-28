// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getValueFromTextNode as __getValueFromTextNode,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  strictParseInt32 as __strictParseInt32,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { XMLParser } from "fast-xml-parser";

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
  AssumedRoleUser,
  AssumeRoleRequest,
  AssumeRoleResponse,
  AssumeRoleWithSAMLRequest,
  AssumeRoleWithSAMLResponse,
  AssumeRoleWithWebIdentityRequest,
  AssumeRoleWithWebIdentityResponse,
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
import { STSServiceException as __BaseException } from "../models/STSServiceException";

/**
 * serializeAws_queryAssumeRoleCommand
 */
export const se_AssumeRoleCommand = async (
  input: AssumeRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AssumeRoleRequest(input, context),
    Action: "AssumeRole",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAssumeRoleWithSAMLCommand
 */
export const se_AssumeRoleWithSAMLCommand = async (
  input: AssumeRoleWithSAMLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AssumeRoleWithSAMLRequest(input, context),
    Action: "AssumeRoleWithSAML",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAssumeRoleWithWebIdentityCommand
 */
export const se_AssumeRoleWithWebIdentityCommand = async (
  input: AssumeRoleWithWebIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AssumeRoleWithWebIdentityRequest(input, context),
    Action: "AssumeRoleWithWebIdentity",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDecodeAuthorizationMessageCommand
 */
export const se_DecodeAuthorizationMessageCommand = async (
  input: DecodeAuthorizationMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DecodeAuthorizationMessageRequest(input, context),
    Action: "DecodeAuthorizationMessage",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetAccessKeyInfoCommand
 */
export const se_GetAccessKeyInfoCommand = async (
  input: GetAccessKeyInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetAccessKeyInfoRequest(input, context),
    Action: "GetAccessKeyInfo",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetCallerIdentityCommand
 */
export const se_GetCallerIdentityCommand = async (
  input: GetCallerIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetCallerIdentityRequest(input, context),
    Action: "GetCallerIdentity",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetFederationTokenCommand
 */
export const se_GetFederationTokenCommand = async (
  input: GetFederationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetFederationTokenRequest(input, context),
    Action: "GetFederationToken",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetSessionTokenCommand
 */
export const se_GetSessionTokenCommand = async (
  input: GetSessionTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetSessionTokenRequest(input, context),
    Action: "GetSessionToken",
    Version: "2011-06-15",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryAssumeRoleCommand
 */
export const de_AssumeRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssumeRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
  const response: AssumeRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAssumeRoleCommandError
 */
const de_AssumeRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazonaws.sts#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PackedPolicyTooLarge":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      throw await de_RegionDisabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAssumeRoleWithSAMLCommand
 */
export const de_AssumeRoleWithSAMLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithSAMLCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssumeRoleWithSAMLCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
  const response: AssumeRoleWithSAMLCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAssumeRoleWithSAMLCommandError
 */
const de_AssumeRoleWithSAMLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithSAMLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazonaws.sts#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
    case "IDPRejectedClaim":
    case "com.amazonaws.sts#IDPRejectedClaimException":
      throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
    case "InvalidIdentityToken":
    case "com.amazonaws.sts#InvalidIdentityTokenException":
      throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PackedPolicyTooLarge":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      throw await de_RegionDisabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAssumeRoleWithWebIdentityCommand
 */
export const de_AssumeRoleWithWebIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithWebIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssumeRoleWithWebIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
  const response: AssumeRoleWithWebIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryAssumeRoleWithWebIdentityCommandError
 */
const de_AssumeRoleWithWebIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithWebIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredTokenException":
    case "com.amazonaws.sts#ExpiredTokenException":
      throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
    case "IDPCommunicationError":
    case "com.amazonaws.sts#IDPCommunicationErrorException":
      throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
    case "IDPRejectedClaim":
    case "com.amazonaws.sts#IDPRejectedClaimException":
      throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
    case "InvalidIdentityToken":
    case "com.amazonaws.sts#InvalidIdentityTokenException":
      throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PackedPolicyTooLarge":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      throw await de_RegionDisabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDecodeAuthorizationMessageCommand
 */
export const de_DecodeAuthorizationMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecodeAuthorizationMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DecodeAuthorizationMessageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
  const response: DecodeAuthorizationMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDecodeAuthorizationMessageCommandError
 */
const de_DecodeAuthorizationMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecodeAuthorizationMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAuthorizationMessageException":
    case "com.amazonaws.sts#InvalidAuthorizationMessageException":
      throw await de_InvalidAuthorizationMessageExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetAccessKeyInfoCommand
 */
export const de_GetAccessKeyInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessKeyInfoCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccessKeyInfoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
  const response: GetAccessKeyInfoCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetAccessKeyInfoCommandError
 */
const de_GetAccessKeyInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessKeyInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryGetCallerIdentityCommand
 */
export const de_GetCallerIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallerIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCallerIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCallerIdentityResponse(data.GetCallerIdentityResult, context);
  const response: GetCallerIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetCallerIdentityCommandError
 */
const de_GetCallerIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallerIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryGetFederationTokenCommand
 */
export const de_GetFederationTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFederationTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetFederationTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetFederationTokenResponse(data.GetFederationTokenResult, context);
  const response: GetFederationTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetFederationTokenCommandError
 */
const de_GetFederationTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFederationTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "MalformedPolicyDocument":
    case "com.amazonaws.sts#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PackedPolicyTooLarge":
    case "com.amazonaws.sts#PackedPolicyTooLargeException":
      throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      throw await de_RegionDisabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetSessionTokenCommand
 */
export const de_GetSessionTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSessionTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSessionTokenResponse(data.GetSessionTokenResult, context);
  const response: GetSessionTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetSessionTokenCommandError
 */
const de_GetSessionTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RegionDisabledException":
    case "com.amazonaws.sts#RegionDisabledException":
      throw await de_RegionDisabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryExpiredTokenExceptionRes
 */
const de_ExpiredTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ExpiredTokenException(body.Error, context);
  const exception = new ExpiredTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIDPCommunicationErrorExceptionRes
 */
const de_IDPCommunicationErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IDPCommunicationErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IDPCommunicationErrorException(body.Error, context);
  const exception = new IDPCommunicationErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryIDPRejectedClaimExceptionRes
 */
const de_IDPRejectedClaimExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IDPRejectedClaimException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IDPRejectedClaimException(body.Error, context);
  const exception = new IDPRejectedClaimException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidAuthorizationMessageExceptionRes
 */
const de_InvalidAuthorizationMessageExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAuthorizationMessageException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAuthorizationMessageException(body.Error, context);
  const exception = new InvalidAuthorizationMessageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidIdentityTokenExceptionRes
 */
const de_InvalidIdentityTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIdentityTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidIdentityTokenException(body.Error, context);
  const exception = new InvalidIdentityTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryMalformedPolicyDocumentExceptionRes
 */
const de_MalformedPolicyDocumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MalformedPolicyDocumentException(body.Error, context);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryPackedPolicyTooLargeExceptionRes
 */
const de_PackedPolicyTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PackedPolicyTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PackedPolicyTooLargeException(body.Error, context);
  const exception = new PackedPolicyTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryRegionDisabledExceptionRes
 */
const de_RegionDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RegionDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RegionDisabledException(body.Error, context);
  const exception = new RegionDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryAssumeRoleRequest
 */
const se_AssumeRoleRequest = (input: AssumeRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleArn != null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.RoleSessionName != null) {
    entries["RoleSessionName"] = input.RoleSessionName;
  }
  if (input.PolicyArns != null) {
    const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
    if (input.PolicyArns?.length === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Policy != null) {
    entries["Policy"] = input.Policy;
  }
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.TransitiveTagKeys != null) {
    const memberEntries = se_tagKeyListType(input.TransitiveTagKeys, context);
    if (input.TransitiveTagKeys?.length === 0) {
      entries.TransitiveTagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TransitiveTagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExternalId != null) {
    entries["ExternalId"] = input.ExternalId;
  }
  if (input.SerialNumber != null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.TokenCode != null) {
    entries["TokenCode"] = input.TokenCode;
  }
  if (input.SourceIdentity != null) {
    entries["SourceIdentity"] = input.SourceIdentity;
  }
  return entries;
};

/**
 * serializeAws_queryAssumeRoleWithSAMLRequest
 */
const se_AssumeRoleWithSAMLRequest = (input: AssumeRoleWithSAMLRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleArn != null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.PrincipalArn != null) {
    entries["PrincipalArn"] = input.PrincipalArn;
  }
  if (input.SAMLAssertion != null) {
    entries["SAMLAssertion"] = input.SAMLAssertion;
  }
  if (input.PolicyArns != null) {
    const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
    if (input.PolicyArns?.length === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Policy != null) {
    entries["Policy"] = input.Policy;
  }
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  return entries;
};

/**
 * serializeAws_queryAssumeRoleWithWebIdentityRequest
 */
const se_AssumeRoleWithWebIdentityRequest = (input: AssumeRoleWithWebIdentityRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleArn != null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.RoleSessionName != null) {
    entries["RoleSessionName"] = input.RoleSessionName;
  }
  if (input.WebIdentityToken != null) {
    entries["WebIdentityToken"] = input.WebIdentityToken;
  }
  if (input.ProviderId != null) {
    entries["ProviderId"] = input.ProviderId;
  }
  if (input.PolicyArns != null) {
    const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
    if (input.PolicyArns?.length === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Policy != null) {
    entries["Policy"] = input.Policy;
  }
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  return entries;
};

/**
 * serializeAws_queryDecodeAuthorizationMessageRequest
 */
const se_DecodeAuthorizationMessageRequest = (
  input: DecodeAuthorizationMessageRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EncodedMessage != null) {
    entries["EncodedMessage"] = input.EncodedMessage;
  }
  return entries;
};

/**
 * serializeAws_queryGetAccessKeyInfoRequest
 */
const se_GetAccessKeyInfoRequest = (input: GetAccessKeyInfoRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AccessKeyId != null) {
    entries["AccessKeyId"] = input.AccessKeyId;
  }
  return entries;
};

/**
 * serializeAws_queryGetCallerIdentityRequest
 */
const se_GetCallerIdentityRequest = (input: GetCallerIdentityRequest, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryGetFederationTokenRequest
 */
const se_GetFederationTokenRequest = (input: GetFederationTokenRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Policy != null) {
    entries["Policy"] = input.Policy;
  }
  if (input.PolicyArns != null) {
    const memberEntries = se_policyDescriptorListType(input.PolicyArns, context);
    if (input.PolicyArns?.length === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryGetSessionTokenRequest
 */
const se_GetSessionTokenRequest = (input: GetSessionTokenRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DurationSeconds != null) {
    entries["DurationSeconds"] = input.DurationSeconds;
  }
  if (input.SerialNumber != null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.TokenCode != null) {
    entries["TokenCode"] = input.TokenCode;
  }
  return entries;
};

/**
 * serializeAws_querypolicyDescriptorListType
 */
const se_policyDescriptorListType = (input: PolicyDescriptorType[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_PolicyDescriptorType(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPolicyDescriptorType
 */
const se_PolicyDescriptorType = (input: PolicyDescriptorType, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.arn != null) {
    entries["arn"] = input.arn;
  }
  return entries;
};

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

/**
 * serializeAws_querytagKeyListType
 */
const se_tagKeyListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querytagListType
 */
const se_tagListType = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * deserializeAws_queryAssumedRoleUser
 */
const de_AssumedRoleUser = (output: any, context: __SerdeContext): AssumedRoleUser => {
  const contents: any = {};
  if (output["AssumedRoleId"] !== undefined) {
    contents.AssumedRoleId = __expectString(output["AssumedRoleId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAssumeRoleResponse
 */
const de_AssumeRoleResponse = (output: any, context: __SerdeContext): AssumeRoleResponse => {
  const contents: any = {};
  if (output["Credentials"] !== undefined) {
    contents.Credentials = de_Credentials(output["Credentials"], context);
  }
  if (output["AssumedRoleUser"] !== undefined) {
    contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
  }
  if (output["PackedPolicySize"] !== undefined) {
    contents.PackedPolicySize = __strictParseInt32(output["PackedPolicySize"]) as number;
  }
  if (output["SourceIdentity"] !== undefined) {
    contents.SourceIdentity = __expectString(output["SourceIdentity"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAssumeRoleWithSAMLResponse
 */
const de_AssumeRoleWithSAMLResponse = (output: any, context: __SerdeContext): AssumeRoleWithSAMLResponse => {
  const contents: any = {};
  if (output["Credentials"] !== undefined) {
    contents.Credentials = de_Credentials(output["Credentials"], context);
  }
  if (output["AssumedRoleUser"] !== undefined) {
    contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
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

/**
 * deserializeAws_queryAssumeRoleWithWebIdentityResponse
 */
const de_AssumeRoleWithWebIdentityResponse = (
  output: any,
  context: __SerdeContext
): AssumeRoleWithWebIdentityResponse => {
  const contents: any = {};
  if (output["Credentials"] !== undefined) {
    contents.Credentials = de_Credentials(output["Credentials"], context);
  }
  if (output["SubjectFromWebIdentityToken"] !== undefined) {
    contents.SubjectFromWebIdentityToken = __expectString(output["SubjectFromWebIdentityToken"]);
  }
  if (output["AssumedRoleUser"] !== undefined) {
    contents.AssumedRoleUser = de_AssumedRoleUser(output["AssumedRoleUser"], context);
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

/**
 * deserializeAws_queryCredentials
 */
const de_Credentials = (output: any, context: __SerdeContext): Credentials => {
  const contents: any = {};
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
    contents.Expiration = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Expiration"]));
  }
  return contents;
};

/**
 * deserializeAws_queryDecodeAuthorizationMessageResponse
 */
const de_DecodeAuthorizationMessageResponse = (
  output: any,
  context: __SerdeContext
): DecodeAuthorizationMessageResponse => {
  const contents: any = {};
  if (output["DecodedMessage"] !== undefined) {
    contents.DecodedMessage = __expectString(output["DecodedMessage"]);
  }
  return contents;
};

/**
 * deserializeAws_queryExpiredTokenException
 */
const de_ExpiredTokenException = (output: any, context: __SerdeContext): ExpiredTokenException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryFederatedUser
 */
const de_FederatedUser = (output: any, context: __SerdeContext): FederatedUser => {
  const contents: any = {};
  if (output["FederatedUserId"] !== undefined) {
    contents.FederatedUserId = __expectString(output["FederatedUserId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetAccessKeyInfoResponse
 */
const de_GetAccessKeyInfoResponse = (output: any, context: __SerdeContext): GetAccessKeyInfoResponse => {
  const contents: any = {};
  if (output["Account"] !== undefined) {
    contents.Account = __expectString(output["Account"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetCallerIdentityResponse
 */
const de_GetCallerIdentityResponse = (output: any, context: __SerdeContext): GetCallerIdentityResponse => {
  const contents: any = {};
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

/**
 * deserializeAws_queryGetFederationTokenResponse
 */
const de_GetFederationTokenResponse = (output: any, context: __SerdeContext): GetFederationTokenResponse => {
  const contents: any = {};
  if (output["Credentials"] !== undefined) {
    contents.Credentials = de_Credentials(output["Credentials"], context);
  }
  if (output["FederatedUser"] !== undefined) {
    contents.FederatedUser = de_FederatedUser(output["FederatedUser"], context);
  }
  if (output["PackedPolicySize"] !== undefined) {
    contents.PackedPolicySize = __strictParseInt32(output["PackedPolicySize"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryGetSessionTokenResponse
 */
const de_GetSessionTokenResponse = (output: any, context: __SerdeContext): GetSessionTokenResponse => {
  const contents: any = {};
  if (output["Credentials"] !== undefined) {
    contents.Credentials = de_Credentials(output["Credentials"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryIDPCommunicationErrorException
 */
const de_IDPCommunicationErrorException = (output: any, context: __SerdeContext): IDPCommunicationErrorException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryIDPRejectedClaimException
 */
const de_IDPRejectedClaimException = (output: any, context: __SerdeContext): IDPRejectedClaimException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidAuthorizationMessageException
 */
const de_InvalidAuthorizationMessageException = (
  output: any,
  context: __SerdeContext
): InvalidAuthorizationMessageException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidIdentityTokenException
 */
const de_InvalidIdentityTokenException = (output: any, context: __SerdeContext): InvalidIdentityTokenException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMalformedPolicyDocumentException
 */
const de_MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPackedPolicyTooLargeException
 */
const de_PackedPolicyTooLargeException = (output: any, context: __SerdeContext): PackedPolicyTooLargeException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRegionDisabledException
 */
const de_RegionDisabledException = (output: any, context: __SerdeContext): RegionDisabledException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
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
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
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

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
