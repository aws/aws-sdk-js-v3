// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  GetLatestConfigurationCommandInput,
  GetLatestConfigurationCommandOutput,
} from "../commands/GetLatestConfigurationCommand";
import {
  StartConfigurationSessionCommandInput,
  StartConfigurationSessionCommandOutput,
} from "../commands/StartConfigurationSessionCommand";
import { AppConfigDataServiceException as __BaseException } from "../models/AppConfigDataServiceException";
import {
  BadRequestException,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
} from "../models/models_0";

/**
 * serializeAws_restJson1GetLatestConfigurationCommand
 */
export const se_GetLatestConfigurationCommand = async (
  input: GetLatestConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configuration");
  const query: any = map({
    [_ct]: [, __expectNonNull(input[_CT]!, `ConfigurationToken`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartConfigurationSessionCommand
 */
export const se_StartConfigurationSessionCommand = async (
  input: StartConfigurationSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configurationsessions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApplicationIdentifier: [],
      ConfigurationProfileIdentifier: [],
      EnvironmentIdentifier: [],
      RequiredMinimumPollIntervalInSeconds: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1GetLatestConfigurationCommand
 */
export const de_GetLatestConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLatestConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLatestConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_NPCT]: [, output.headers[_npct]],
    [_NPIIS]: [() => void 0 !== output.headers[_npiis], () => __strictParseInt32(output.headers[_npiis])],
    [_CTo]: [, output.headers[_ct_]],
    [_VL]: [, output.headers[_vl]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Configuration = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetLatestConfigurationCommandError
 */
const de_GetLatestConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLatestConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfigdata#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfigdata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfigdata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appconfigdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartConfigurationSessionCommand
 */
export const de_StartConfigurationSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConfigurationSessionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_StartConfigurationSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InitialConfigurationToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartConfigurationSessionCommandError
 */
const de_StartConfigurationSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConfigurationSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfigdata#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.appconfigdata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfigdata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.appconfigdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Details: (_) => _json(__expectUnion(_)),
    Message: __expectString,
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    ReferencedBy: _json,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// de_BadRequestDetails omitted.

// de_InvalidParameterDetail omitted.

// de_InvalidParameterMap omitted.

// de_StringMap omitted.

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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

// HttpBindingProtocolGenerator
const _CT = "ConfigurationToken";
const _CTo = "ContentType";
const _NPCT = "NextPollConfigurationToken";
const _NPIIS = "NextPollIntervalInSeconds";
const _VL = "VersionLabel";
const _ct = "configuration_token";
const _ct_ = "content-type";
const _npct = "next-poll-configuration-token";
const _npiis = "next-poll-interval-in-seconds";
const _vl = "version-label";

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

// RestJsonProtocolGenerator
