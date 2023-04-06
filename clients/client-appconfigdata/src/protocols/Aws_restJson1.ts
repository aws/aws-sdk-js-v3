// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  BadRequestDetails,
  BadRequestException,
  InternalServerException,
  InvalidParameterDetail,
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configuration";
  const query: any = map({
    configuration_token: [, __expectNonNull(input.ConfigurationToken!, `ConfigurationToken`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1StartConfigurationSessionCommand
 */
export const se_StartConfigurationSessionCommand = async (
  input: StartConfigurationSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configurationsessions";
  let body: any;
  body = JSON.stringify({
    ...(input.ApplicationIdentifier != null && { ApplicationIdentifier: input.ApplicationIdentifier }),
    ...(input.ConfigurationProfileIdentifier != null && {
      ConfigurationProfileIdentifier: input.ConfigurationProfileIdentifier,
    }),
    ...(input.EnvironmentIdentifier != null && { EnvironmentIdentifier: input.EnvironmentIdentifier }),
    ...(input.RequiredMinimumPollIntervalInSeconds != null && {
      RequiredMinimumPollIntervalInSeconds: input.RequiredMinimumPollIntervalInSeconds,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
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
    NextPollConfigurationToken: [, output.headers["next-poll-configuration-token"]],
    NextPollIntervalInSeconds: [
      () => void 0 !== output.headers["next-poll-interval-in-seconds"],
      () => __strictParseInt32(output.headers["next-poll-interval-in-seconds"]),
    ],
    ContentType: [, output.headers["content-type"]],
    VersionLabel: [, output.headers["version-label"]],
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.InitialConfigurationToken != null) {
    contents.InitialConfigurationToken = __expectString(data.InitialConfigurationToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Details != null) {
    contents.Details = de_BadRequestDetails(__expectUnion(data.Details), context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason != null) {
    contents.Reason = __expectString(data.Reason);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ReferencedBy != null) {
    contents.ReferencedBy = de_StringMap(data.ReferencedBy, context);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestDetails
 */
const de_BadRequestDetails = (output: any, context: __SerdeContext): BadRequestDetails => {
  if (output.InvalidParameters != null) {
    return {
      InvalidParameters: de_InvalidParameterMap(output.InvalidParameters, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1InvalidParameterDetail
 */
const de_InvalidParameterDetail = (output: any, context: __SerdeContext): InvalidParameterDetail => {
  return {
    Problem: __expectString(output.Problem),
  } as any;
};

/**
 * deserializeAws_restJson1InvalidParameterMap
 */
const de_InvalidParameterMap = (output: any, context: __SerdeContext): Record<string, InvalidParameterDetail> => {
  return Object.entries(output).reduce((acc: Record<string, InvalidParameterDetail>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_InvalidParameterDetail(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1StringMap
 */
const de_StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
