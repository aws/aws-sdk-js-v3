// smithy-typescript generated code
import { AssumeRoleCommandInput, AssumeRoleCommandOutput } from "../commands/AssumeRoleCommand";
import {
  AssumeRoleWithWebIdentityCommandInput,
  AssumeRoleWithWebIdentityCommandOutput,
} from "../commands/AssumeRoleWithWebIdentityCommand";
import { STSServiceException as __BaseException } from "../models/STSServiceException";
import {
  AssumeRoleRequest,
  AssumeRoleResponse,
  AssumeRoleWithWebIdentityRequest,
  AssumeRoleWithWebIdentityResponse,
  AssumedRoleUser,
  Credentials,
  ExpiredTokenException,
  IDPCommunicationErrorException,
  IDPRejectedClaimException,
  InvalidIdentityTokenException,
  MalformedPolicyDocumentException,
  PackedPolicyTooLargeException,
  PolicyDescriptorType,
  ProvidedContext,
  RegionDisabledException,
  Tag,
} from "../models/models_0";
import { parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  strictParseInt32 as __strictParseInt32,
  collectBody,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
    [_A]: _AR,
    [_V]: _,
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
    [_A]: _ARWWI,
    [_V]: _,
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
    return de_CommandError(output, context);
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
 * deserializeAws_queryAssumeRoleWithWebIdentityCommand
 */
export const de_AssumeRoleWithWebIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeRoleWithWebIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_queryCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "IDPCommunicationError":
    case "com.amazonaws.sts#IDPCommunicationErrorException":
      throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
    case "IDPRejectedClaim":
    case "com.amazonaws.sts#IDPRejectedClaimException":
      throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
    case "InvalidIdentityToken":
    case "com.amazonaws.sts#InvalidIdentityTokenException":
      throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      }) as never;
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
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_PA] != null) {
    const memberEntries = se_policyDescriptorListType(input[_PA], context);
    if (input[_PA]?.length === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_DS] != null) {
    entries[_DS] = input[_DS];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TTK] != null) {
    const memberEntries = se_tagKeyListType(input[_TTK], context);
    if (input[_TTK]?.length === 0) {
      entries.TransitiveTagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TransitiveTagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EI] != null) {
    entries[_EI] = input[_EI];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_TC] != null) {
    entries[_TC] = input[_TC];
  }
  if (input[_SI] != null) {
    entries[_SI] = input[_SI];
  }
  if (input[_PC] != null) {
    const memberEntries = se_ProvidedContextsListType(input[_PC], context);
    if (input[_PC]?.length === 0) {
      entries.ProvidedContexts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ProvidedContexts.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAssumeRoleWithWebIdentityRequest
 */
const se_AssumeRoleWithWebIdentityRequest = (input: AssumeRoleWithWebIdentityRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_RSN] != null) {
    entries[_RSN] = input[_RSN];
  }
  if (input[_WIT] != null) {
    entries[_WIT] = input[_WIT];
  }
  if (input[_PI] != null) {
    entries[_PI] = input[_PI];
  }
  if (input[_PA] != null) {
    const memberEntries = se_policyDescriptorListType(input[_PA], context);
    if (input[_PA]?.length === 0) {
      entries.PolicyArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_DS] != null) {
    entries[_DS] = input[_DS];
  }
  return entries;
};

/**
 * serializeAws_querypolicyDescriptorListType
 */
const se_policyDescriptorListType = (input: PolicyDescriptorType[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input[_a] != null) {
    entries[_a] = input[_a];
  }
  return entries;
};

/**
 * serializeAws_queryProvidedContext
 */
const se_ProvidedContext = (input: ProvidedContext, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PAr] != null) {
    entries[_PAr] = input[_PAr];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  return entries;
};

/**
 * serializeAws_queryProvidedContextsListType
 */
const se_ProvidedContextsListType = (input: ProvidedContext[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ProvidedContext(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
  }
  return entries;
};

/**
 * serializeAws_querytagKeyListType
 */
const se_tagKeyListType = (input: string[], context: __SerdeContext): any => {
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

/**
 * serializeAws_querytagListType
 */
const se_tagListType = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  let contents: any = {};
  if (output[_ARI] != null) {
    contents[_ARI] = __expectString(output[_ARI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  return contents;
};

/**
 * deserializeAws_queryAssumeRoleResponse
 */
const de_AssumeRoleResponse = (output: any, context: __SerdeContext): AssumeRoleResponse => {
  let contents: any = {};
  if (output[_C] != null) {
    contents[_C] = de_Credentials(output[_C], context);
  }
  if (output[_ARU] != null) {
    contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
  }
  if (output[_PPS] != null) {
    contents[_PPS] = __strictParseInt32(output[_PPS]) as number;
  }
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
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
  let contents: any = {};
  if (output[_C] != null) {
    contents[_C] = de_Credentials(output[_C], context);
  }
  if (output[_SFWIT] != null) {
    contents[_SFWIT] = __expectString(output[_SFWIT]);
  }
  if (output[_ARU] != null) {
    contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
  }
  if (output[_PPS] != null) {
    contents[_PPS] = __strictParseInt32(output[_PPS]) as number;
  }
  if (output[_Pr] != null) {
    contents[_Pr] = __expectString(output[_Pr]);
  }
  if (output[_Au] != null) {
    contents[_Au] = __expectString(output[_Au]);
  }
  if (output[_SI] != null) {
    contents[_SI] = __expectString(output[_SI]);
  }
  return contents;
};

/**
 * deserializeAws_queryCredentials
 */
const de_Credentials = (output: any, context: __SerdeContext): Credentials => {
  let contents: any = {};
  if (output[_AKI] != null) {
    contents[_AKI] = __expectString(output[_AKI]);
  }
  if (output[_SAK] != null) {
    contents[_SAK] = __expectString(output[_SAK]);
  }
  if (output[_ST] != null) {
    contents[_ST] = __expectString(output[_ST]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_E]));
  }
  return contents;
};

/**
 * deserializeAws_queryExpiredTokenException
 */
const de_ExpiredTokenException = (output: any, context: __SerdeContext): ExpiredTokenException => {
  let contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIDPCommunicationErrorException
 */
const de_IDPCommunicationErrorException = (output: any, context: __SerdeContext): IDPCommunicationErrorException => {
  let contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryIDPRejectedClaimException
 */
const de_IDPRejectedClaimException = (output: any, context: __SerdeContext): IDPRejectedClaimException => {
  let contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidIdentityTokenException
 */
const de_InvalidIdentityTokenException = (output: any, context: __SerdeContext): InvalidIdentityTokenException => {
  let contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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
  let contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryPackedPolicyTooLargeException
 */
const de_PackedPolicyTooLargeException = (output: any, context: __SerdeContext): PackedPolicyTooLargeException => {
  let contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryRegionDisabledException
 */
const de_RegionDisabledException = (output: any, context: __SerdeContext): RegionDisabledException => {
  let contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
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

const _ = "2011-06-15";
const _A = "Action";
const _AKI = "AccessKeyId";
const _AR = "AssumeRole";
const _ARI = "AssumedRoleId";
const _ARU = "AssumedRoleUser";
const _ARWWI = "AssumeRoleWithWebIdentity";
const _Ar = "Arn";
const _Au = "Audience";
const _C = "Credentials";
const _CA = "ContextAssertion";
const _DS = "DurationSeconds";
const _E = "Expiration";
const _EI = "ExternalId";
const _K = "Key";
const _P = "Policy";
const _PA = "PolicyArns";
const _PAr = "ProviderArn";
const _PC = "ProvidedContexts";
const _PI = "ProviderId";
const _PPS = "PackedPolicySize";
const _Pr = "Provider";
const _RA = "RoleArn";
const _RSN = "RoleSessionName";
const _SAK = "SecretAccessKey";
const _SFWIT = "SubjectFromWebIdentityToken";
const _SI = "SourceIdentity";
const _SN = "SerialNumber";
const _ST = "SessionToken";
const _T = "Tags";
const _TC = "TokenCode";
const _TTK = "TransitiveTagKeys";
const _V = "Version";
const _Va = "Value";
const _WIT = "WebIdentityToken";
const _a = "arn";
const _m = "message";

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
