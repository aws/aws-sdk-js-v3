// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DeleteHumanLoopCommandInput, DeleteHumanLoopCommandOutput } from "../commands/DeleteHumanLoopCommand";
import { DescribeHumanLoopCommandInput, DescribeHumanLoopCommandOutput } from "../commands/DescribeHumanLoopCommand";
import { ListHumanLoopsCommandInput, ListHumanLoopsCommandOutput } from "../commands/ListHumanLoopsCommand";
import { StartHumanLoopCommandInput, StartHumanLoopCommandOutput } from "../commands/StartHumanLoopCommand";
import { StopHumanLoopCommandInput, StopHumanLoopCommandOutput } from "../commands/StopHumanLoopCommand";
import {
  ConflictException,
  ContentClassifier,
  HumanLoopDataAttributes,
  HumanLoopInput,
  HumanLoopOutput,
  HumanLoopSummary,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { SageMakerA2IRuntimeServiceException as __BaseException } from "../models/SageMakerA2IRuntimeServiceException";

/**
 * serializeAws_restJson1DeleteHumanLoopCommand
 */
export const se_DeleteHumanLoopCommand = async (
  input: DeleteHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/human-loops/{HumanLoopName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HumanLoopName",
    () => input.HumanLoopName!,
    "{HumanLoopName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeHumanLoopCommand
 */
export const se_DescribeHumanLoopCommand = async (
  input: DescribeHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/human-loops/{HumanLoopName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "HumanLoopName",
    () => input.HumanLoopName!,
    "{HumanLoopName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListHumanLoopsCommand
 */
export const se_ListHumanLoopsCommand = async (
  input: ListHumanLoopsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/human-loops";
  const query: any = map({
    CreationTimeAfter: [
      () => input.CreationTimeAfter !== void 0,
      () => (input.CreationTimeAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    CreationTimeBefore: [
      () => input.CreationTimeBefore !== void 0,
      () => (input.CreationTimeBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    FlowDefinitionArn: [, __expectNonNull(input.FlowDefinitionArn!, `FlowDefinitionArn`)],
    SortOrder: [, input.SortOrder!],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1StartHumanLoopCommand
 */
export const se_StartHumanLoopCommand = async (
  input: StartHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/human-loops";
  let body: any;
  body = JSON.stringify({
    ...(input.DataAttributes != null && { DataAttributes: se_HumanLoopDataAttributes(input.DataAttributes, context) }),
    ...(input.FlowDefinitionArn != null && { FlowDefinitionArn: input.FlowDefinitionArn }),
    ...(input.HumanLoopInput != null && { HumanLoopInput: se_HumanLoopInput(input.HumanLoopInput, context) }),
    ...(input.HumanLoopName != null && { HumanLoopName: input.HumanLoopName }),
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
 * serializeAws_restJson1StopHumanLoopCommand
 */
export const se_StopHumanLoopCommand = async (
  input: StopHumanLoopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/human-loops/stop";
  let body: any;
  body = JSON.stringify({
    ...(input.HumanLoopName != null && { HumanLoopName: input.HumanLoopName }),
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
 * deserializeAws_restJson1DeleteHumanLoopCommand
 */
export const de_DeleteHumanLoopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHumanLoopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteHumanLoopCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteHumanLoopCommandError
 */
const de_DeleteHumanLoopCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHumanLoopCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemakera2iruntime#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakera2iruntime#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakera2iruntime#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeHumanLoopCommand
 */
export const de_DescribeHumanLoopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHumanLoopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeHumanLoopCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreationTime));
  }
  if (data.FailureCode != null) {
    contents.FailureCode = __expectString(data.FailureCode);
  }
  if (data.FailureReason != null) {
    contents.FailureReason = __expectString(data.FailureReason);
  }
  if (data.FlowDefinitionArn != null) {
    contents.FlowDefinitionArn = __expectString(data.FlowDefinitionArn);
  }
  if (data.HumanLoopArn != null) {
    contents.HumanLoopArn = __expectString(data.HumanLoopArn);
  }
  if (data.HumanLoopName != null) {
    contents.HumanLoopName = __expectString(data.HumanLoopName);
  }
  if (data.HumanLoopOutput != null) {
    contents.HumanLoopOutput = de_HumanLoopOutput(data.HumanLoopOutput, context);
  }
  if (data.HumanLoopStatus != null) {
    contents.HumanLoopStatus = __expectString(data.HumanLoopStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeHumanLoopCommandError
 */
const de_DescribeHumanLoopCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHumanLoopCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemakera2iruntime#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakera2iruntime#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakera2iruntime#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListHumanLoopsCommand
 */
export const de_ListHumanLoopsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHumanLoopsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListHumanLoopsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HumanLoopSummaries != null) {
    contents.HumanLoopSummaries = de_HumanLoopSummaries(data.HumanLoopSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListHumanLoopsCommandError
 */
const de_ListHumanLoopsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHumanLoopsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemakera2iruntime#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakera2iruntime#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakera2iruntime#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartHumanLoopCommand
 */
export const de_StartHumanLoopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartHumanLoopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartHumanLoopCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HumanLoopArn != null) {
    contents.HumanLoopArn = __expectString(data.HumanLoopArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartHumanLoopCommandError
 */
const de_StartHumanLoopCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartHumanLoopCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemakera2iruntime#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakera2iruntime#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemakera2iruntime#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakera2iruntime#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StopHumanLoopCommand
 */
export const de_StopHumanLoopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopHumanLoopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopHumanLoopCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopHumanLoopCommandError
 */
const de_StopHumanLoopCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopHumanLoopCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.sagemakera2iruntime#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakera2iruntime#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakera2iruntime#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakera2iruntime#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictException({
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
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceQuotaExceededException({
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
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ContentClassifiers
 */
const se_ContentClassifiers = (input: (ContentClassifier | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1HumanLoopDataAttributes
 */
const se_HumanLoopDataAttributes = (input: HumanLoopDataAttributes, context: __SerdeContext): any => {
  return {
    ...(input.ContentClassifiers != null && {
      ContentClassifiers: se_ContentClassifiers(input.ContentClassifiers, context),
    }),
  };
};

/**
 * serializeAws_restJson1HumanLoopInput
 */
const se_HumanLoopInput = (input: HumanLoopInput, context: __SerdeContext): any => {
  return {
    ...(input.InputContent != null && { InputContent: input.InputContent }),
  };
};

/**
 * deserializeAws_restJson1HumanLoopOutput
 */
const de_HumanLoopOutput = (output: any, context: __SerdeContext): HumanLoopOutput => {
  return {
    OutputS3Uri: __expectString(output.OutputS3Uri),
  } as any;
};

/**
 * deserializeAws_restJson1HumanLoopSummaries
 */
const de_HumanLoopSummaries = (output: any, context: __SerdeContext): HumanLoopSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HumanLoopSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HumanLoopSummary
 */
const de_HumanLoopSummary = (output: any, context: __SerdeContext): HumanLoopSummary => {
  return {
    CreationTime:
      output.CreationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreationTime)) : undefined,
    FailureReason: __expectString(output.FailureReason),
    FlowDefinitionArn: __expectString(output.FlowDefinitionArn),
    HumanLoopName: __expectString(output.HumanLoopName),
    HumanLoopStatus: __expectString(output.HumanLoopStatus),
  } as any;
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
