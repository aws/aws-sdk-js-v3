// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DescribeJobExecutionCommandInput,
  DescribeJobExecutionCommandOutput,
} from "../commands/DescribeJobExecutionCommand";
import {
  GetPendingJobExecutionsCommandInput,
  GetPendingJobExecutionsCommandOutput,
} from "../commands/GetPendingJobExecutionsCommand";
import {
  StartNextPendingJobExecutionCommandInput,
  StartNextPendingJobExecutionCommandOutput,
} from "../commands/StartNextPendingJobExecutionCommand";
import { UpdateJobExecutionCommandInput, UpdateJobExecutionCommandOutput } from "../commands/UpdateJobExecutionCommand";
import { IoTJobsDataPlaneServiceException as __BaseException } from "../models/IoTJobsDataPlaneServiceException";
import {
  CertificateValidationException,
  InvalidRequestException,
  InvalidStateTransitionException,
  JobExecution,
  JobExecutionState,
  JobExecutionSummary,
  ResourceNotFoundException,
  ServiceUnavailableException,
  TerminalStateException,
  ThrottlingException,
} from "../models/models_0";

export const serializeAws_restJson1DescribeJobExecutionCommand = async (
  input: DescribeJobExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/things/{thingName}/jobs/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "thingName", () => input.thingName!, "{thingName}", false);
  const query: any = map({
    includeJobDocument: [() => input.includeJobDocument !== void 0, () => input.includeJobDocument!.toString()],
    executionNumber: [() => input.executionNumber !== void 0, () => input.executionNumber!.toString()],
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

export const serializeAws_restJson1GetPendingJobExecutionsCommand = async (
  input: GetPendingJobExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/things/{thingName}/jobs";
  resolvedPath = __resolvedPath(resolvedPath, input, "thingName", () => input.thingName!, "{thingName}", false);
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

export const serializeAws_restJson1StartNextPendingJobExecutionCommand = async (
  input: StartNextPendingJobExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/things/{thingName}/jobs/$next";
  resolvedPath = __resolvedPath(resolvedPath, input, "thingName", () => input.thingName!, "{thingName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.statusDetails != null && {
      statusDetails: serializeAws_restJson1DetailsMap(input.statusDetails, context),
    }),
    ...(input.stepTimeoutInMinutes != null && { stepTimeoutInMinutes: input.stepTimeoutInMinutes }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateJobExecutionCommand = async (
  input: UpdateJobExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/things/{thingName}/jobs/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "thingName", () => input.thingName!, "{thingName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.executionNumber != null && { executionNumber: input.executionNumber }),
    ...(input.expectedVersion != null && { expectedVersion: input.expectedVersion }),
    ...(input.includeJobDocument != null && { includeJobDocument: input.includeJobDocument }),
    ...(input.includeJobExecutionState != null && { includeJobExecutionState: input.includeJobExecutionState }),
    ...(input.status != null && { status: input.status }),
    ...(input.statusDetails != null && {
      statusDetails: serializeAws_restJson1DetailsMap(input.statusDetails, context),
    }),
    ...(input.stepTimeoutInMinutes != null && { stepTimeoutInMinutes: input.stepTimeoutInMinutes }),
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

export const deserializeAws_restJson1DescribeJobExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobExecutionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.execution != null) {
    contents.execution = deserializeAws_restJson1JobExecution(data.execution, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeJobExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateValidationException":
    case "com.amazonaws.iotjobsdataplane#CertificateValidationException":
      throw await deserializeAws_restJson1CertificateValidationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotjobsdataplane#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotjobsdataplane#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotjobsdataplane#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TerminalStateException":
    case "com.amazonaws.iotjobsdataplane#TerminalStateException":
      throw await deserializeAws_restJson1TerminalStateExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotjobsdataplane#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPendingJobExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPendingJobExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPendingJobExecutionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inProgressJobs != null) {
    contents.inProgressJobs = deserializeAws_restJson1JobExecutionSummaryList(data.inProgressJobs, context);
  }
  if (data.queuedJobs != null) {
    contents.queuedJobs = deserializeAws_restJson1JobExecutionSummaryList(data.queuedJobs, context);
  }
  return contents;
};

const deserializeAws_restJson1GetPendingJobExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPendingJobExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateValidationException":
    case "com.amazonaws.iotjobsdataplane#CertificateValidationException":
      throw await deserializeAws_restJson1CertificateValidationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotjobsdataplane#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotjobsdataplane#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotjobsdataplane#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotjobsdataplane#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartNextPendingJobExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNextPendingJobExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartNextPendingJobExecutionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.execution != null) {
    contents.execution = deserializeAws_restJson1JobExecution(data.execution, context);
  }
  return contents;
};

const deserializeAws_restJson1StartNextPendingJobExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNextPendingJobExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateValidationException":
    case "com.amazonaws.iotjobsdataplane#CertificateValidationException":
      throw await deserializeAws_restJson1CertificateValidationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotjobsdataplane#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotjobsdataplane#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotjobsdataplane#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotjobsdataplane#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateJobExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateJobExecutionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.executionState != null) {
    contents.executionState = deserializeAws_restJson1JobExecutionState(data.executionState, context);
  }
  if (data.jobDocument != null) {
    contents.jobDocument = __expectString(data.jobDocument);
  }
  return contents;
};

const deserializeAws_restJson1UpdateJobExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateValidationException":
    case "com.amazonaws.iotjobsdataplane#CertificateValidationException":
      throw await deserializeAws_restJson1CertificateValidationExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotjobsdataplane#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidStateTransitionException":
    case "com.amazonaws.iotjobsdataplane#InvalidStateTransitionException":
      throw await deserializeAws_restJson1InvalidStateTransitionExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotjobsdataplane#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotjobsdataplane#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotjobsdataplane#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1CertificateValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new CertificateValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidStateTransitionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateTransitionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidStateTransitionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TerminalStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TerminalStateException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TerminalStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.payload != null) {
    contents.payload = context.base64Decoder(data.payload);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1DetailsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_restJson1DetailsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1JobExecution = (output: any, context: __SerdeContext): JobExecution => {
  return {
    approximateSecondsBeforeTimedOut: __expectLong(output.approximateSecondsBeforeTimedOut),
    executionNumber: __expectLong(output.executionNumber),
    jobDocument: __expectString(output.jobDocument),
    jobId: __expectString(output.jobId),
    lastUpdatedAt: __expectLong(output.lastUpdatedAt),
    queuedAt: __expectLong(output.queuedAt),
    startedAt: __expectLong(output.startedAt),
    status: __expectString(output.status),
    statusDetails:
      output.statusDetails != null ? deserializeAws_restJson1DetailsMap(output.statusDetails, context) : undefined,
    thingName: __expectString(output.thingName),
    versionNumber: __expectLong(output.versionNumber),
  } as any;
};

const deserializeAws_restJson1JobExecutionState = (output: any, context: __SerdeContext): JobExecutionState => {
  return {
    status: __expectString(output.status),
    statusDetails:
      output.statusDetails != null ? deserializeAws_restJson1DetailsMap(output.statusDetails, context) : undefined,
    versionNumber: __expectLong(output.versionNumber),
  } as any;
};

const deserializeAws_restJson1JobExecutionSummary = (output: any, context: __SerdeContext): JobExecutionSummary => {
  return {
    executionNumber: __expectLong(output.executionNumber),
    jobId: __expectString(output.jobId),
    lastUpdatedAt: __expectLong(output.lastUpdatedAt),
    queuedAt: __expectLong(output.queuedAt),
    startedAt: __expectLong(output.startedAt),
    versionNumber: __expectLong(output.versionNumber),
  } as any;
};

const deserializeAws_restJson1JobExecutionSummaryList = (
  output: any,
  context: __SerdeContext
): JobExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobExecutionSummary(entry, context);
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
