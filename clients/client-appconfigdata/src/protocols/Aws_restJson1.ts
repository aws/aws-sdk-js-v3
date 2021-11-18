import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  strictParseInt32 as __strictParseInt32,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

import {
  GetLatestConfigurationCommandInput,
  GetLatestConfigurationCommandOutput,
} from "../commands/GetLatestConfigurationCommand";
import {
  StartConfigurationSessionCommandInput,
  StartConfigurationSessionCommandOutput,
} from "../commands/StartConfigurationSessionCommand";
import {
  BadRequestDetails,
  BadRequestException,
  InternalServerException,
  InvalidParameterDetail,
  ResourceNotFoundException,
  ThrottlingException,
} from "../models/models_0";

export const serializeAws_restJson1GetLatestConfigurationCommand = async (
  input: GetLatestConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configuration";
  const query: any = {
    ...(input.ConfigurationToken !== undefined && { configuration_token: input.ConfigurationToken }),
  };
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

export const serializeAws_restJson1StartConfigurationSessionCommand = async (
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
    ...(input.ApplicationIdentifier !== undefined &&
      input.ApplicationIdentifier !== null && { ApplicationIdentifier: input.ApplicationIdentifier }),
    ...(input.ConfigurationProfileIdentifier !== undefined &&
      input.ConfigurationProfileIdentifier !== null && {
        ConfigurationProfileIdentifier: input.ConfigurationProfileIdentifier,
      }),
    ...(input.EnvironmentIdentifier !== undefined &&
      input.EnvironmentIdentifier !== null && { EnvironmentIdentifier: input.EnvironmentIdentifier }),
    ...(input.RequiredMinimumPollIntervalInSeconds !== undefined &&
      input.RequiredMinimumPollIntervalInSeconds !== null && {
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

export const deserializeAws_restJson1GetLatestConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLatestConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLatestConfigurationCommandError(output, context);
  }
  const contents: GetLatestConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Configuration: undefined,
    ContentType: undefined,
    NextPollConfigurationToken: undefined,
    NextPollIntervalInSeconds: undefined,
  };
  if (output.headers["next-poll-configuration-token"] !== undefined) {
    contents.NextPollConfigurationToken = output.headers["next-poll-configuration-token"];
  }
  if (output.headers["next-poll-interval-in-seconds"] !== undefined) {
    contents.NextPollIntervalInSeconds = __strictParseInt32(output.headers["next-poll-interval-in-seconds"]);
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Configuration = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLatestConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLatestConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfigdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfigdata#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfigdata#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.appconfigdata#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1StartConfigurationSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConfigurationSessionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartConfigurationSessionCommandError(output, context);
  }
  const contents: StartConfigurationSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    InitialConfigurationToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InitialConfigurationToken !== undefined && data.InitialConfigurationToken !== null) {
    contents.InitialConfigurationToken = __expectString(data.InitialConfigurationToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartConfigurationSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConfigurationSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appconfigdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.appconfigdata#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.appconfigdata#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.appconfigdata#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Details: undefined,
    Message: undefined,
    Reason: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Details !== undefined && data.Details !== null) {
    contents.Details = deserializeAws_restJson1BadRequestDetails(__expectUnion(data.Details), context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = __expectString(data.Reason);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ReferencedBy: undefined,
    ResourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ReferencedBy !== undefined && data.ReferencedBy !== null) {
    contents.ReferencedBy = deserializeAws_restJson1StringMap(data.ReferencedBy, context);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1BadRequestDetails = (output: any, context: __SerdeContext): BadRequestDetails => {
  if (output.InvalidParameters !== undefined && output.InvalidParameters !== null) {
    return {
      InvalidParameters: deserializeAws_restJson1InvalidParameterMap(output.InvalidParameters, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1InvalidParameterDetail = (
  output: any,
  context: __SerdeContext
): InvalidParameterDetail => {
  return {
    Problem: __expectString(output.Problem),
  } as any;
};

const deserializeAws_restJson1InvalidParameterMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: InvalidParameterDetail } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: InvalidParameterDetail }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1InvalidParameterDetail(value, context),
      };
    },
    {}
  );
};

const deserializeAws_restJson1StringMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
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
