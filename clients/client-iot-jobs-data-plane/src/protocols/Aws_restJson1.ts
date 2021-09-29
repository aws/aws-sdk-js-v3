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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1DescribeJobExecutionCommand = async (
  input: DescribeJobExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/things/{thingName}/jobs/{jobId}";
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  if (input.thingName !== undefined) {
    const labelValue: string = input.thingName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: thingName.");
    }
    resolvedPath = resolvedPath.replace("{thingName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: thingName.");
  }
  const query: any = {
    ...(input.includeJobDocument !== undefined && { includeJobDocument: input.includeJobDocument.toString() }),
    ...(input.executionNumber !== undefined && { executionNumber: input.executionNumber.toString() }),
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

export const serializeAws_restJson1GetPendingJobExecutionsCommand = async (
  input: GetPendingJobExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/things/{thingName}/jobs";
  if (input.thingName !== undefined) {
    const labelValue: string = input.thingName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: thingName.");
    }
    resolvedPath = resolvedPath.replace("{thingName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: thingName.");
  }
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
  if (input.thingName !== undefined) {
    const labelValue: string = input.thingName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: thingName.");
    }
    resolvedPath = resolvedPath.replace("{thingName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: thingName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.statusDetails !== undefined &&
      input.statusDetails !== null && {
        statusDetails: serializeAws_restJson1DetailsMap(input.statusDetails, context),
      }),
    ...(input.stepTimeoutInMinutes !== undefined &&
      input.stepTimeoutInMinutes !== null && { stepTimeoutInMinutes: input.stepTimeoutInMinutes }),
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
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  if (input.thingName !== undefined) {
    const labelValue: string = input.thingName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: thingName.");
    }
    resolvedPath = resolvedPath.replace("{thingName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: thingName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.executionNumber !== undefined &&
      input.executionNumber !== null && { executionNumber: input.executionNumber }),
    ...(input.expectedVersion !== undefined &&
      input.expectedVersion !== null && { expectedVersion: input.expectedVersion }),
    ...(input.includeJobDocument !== undefined &&
      input.includeJobDocument !== null && { includeJobDocument: input.includeJobDocument }),
    ...(input.includeJobExecutionState !== undefined &&
      input.includeJobExecutionState !== null && { includeJobExecutionState: input.includeJobExecutionState }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
    ...(input.statusDetails !== undefined &&
      input.statusDetails !== null && {
        statusDetails: serializeAws_restJson1DetailsMap(input.statusDetails, context),
      }),
    ...(input.stepTimeoutInMinutes !== undefined &&
      input.stepTimeoutInMinutes !== null && { stepTimeoutInMinutes: input.stepTimeoutInMinutes }),
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
  const contents: DescribeJobExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    execution: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.execution !== undefined && data.execution !== null) {
    contents.execution = deserializeAws_restJson1JobExecution(data.execution, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJobExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateValidationException":
    case "com.amazonaws.iotjobsdataplane#CertificateValidationException":
      response = {
        ...(await deserializeAws_restJson1CertificateValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotjobsdataplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotjobsdataplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotjobsdataplane#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TerminalStateException":
    case "com.amazonaws.iotjobsdataplane#TerminalStateException":
      response = {
        ...(await deserializeAws_restJson1TerminalStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotjobsdataplane#ThrottlingException":
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

export const deserializeAws_restJson1GetPendingJobExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPendingJobExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPendingJobExecutionsCommandError(output, context);
  }
  const contents: GetPendingJobExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    inProgressJobs: undefined,
    queuedJobs: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inProgressJobs !== undefined && data.inProgressJobs !== null) {
    contents.inProgressJobs = deserializeAws_restJson1JobExecutionSummaryList(data.inProgressJobs, context);
  }
  if (data.queuedJobs !== undefined && data.queuedJobs !== null) {
    contents.queuedJobs = deserializeAws_restJson1JobExecutionSummaryList(data.queuedJobs, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPendingJobExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPendingJobExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateValidationException":
    case "com.amazonaws.iotjobsdataplane#CertificateValidationException":
      response = {
        ...(await deserializeAws_restJson1CertificateValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotjobsdataplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotjobsdataplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotjobsdataplane#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotjobsdataplane#ThrottlingException":
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

export const deserializeAws_restJson1StartNextPendingJobExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNextPendingJobExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartNextPendingJobExecutionCommandError(output, context);
  }
  const contents: StartNextPendingJobExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    execution: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.execution !== undefined && data.execution !== null) {
    contents.execution = deserializeAws_restJson1JobExecution(data.execution, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartNextPendingJobExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNextPendingJobExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateValidationException":
    case "com.amazonaws.iotjobsdataplane#CertificateValidationException":
      response = {
        ...(await deserializeAws_restJson1CertificateValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotjobsdataplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotjobsdataplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotjobsdataplane#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotjobsdataplane#ThrottlingException":
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

export const deserializeAws_restJson1UpdateJobExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateJobExecutionCommandError(output, context);
  }
  const contents: UpdateJobExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    executionState: undefined,
    jobDocument: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.executionState !== undefined && data.executionState !== null) {
    contents.executionState = deserializeAws_restJson1JobExecutionState(data.executionState, context);
  }
  if (data.jobDocument !== undefined && data.jobDocument !== null) {
    contents.jobDocument = __expectString(data.jobDocument);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateJobExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateValidationException":
    case "com.amazonaws.iotjobsdataplane#CertificateValidationException":
      response = {
        ...(await deserializeAws_restJson1CertificateValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotjobsdataplane#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateTransitionException":
    case "com.amazonaws.iotjobsdataplane#InvalidStateTransitionException":
      response = {
        ...(await deserializeAws_restJson1InvalidStateTransitionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotjobsdataplane#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotjobsdataplane#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotjobsdataplane#ThrottlingException":
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

const deserializeAws_restJson1CertificateValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateValidationException> => {
  const contents: CertificateValidationException = {
    name: "CertificateValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidStateTransitionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateTransitionException> => {
  const contents: InvalidStateTransitionException = {
    name: "InvalidStateTransitionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
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
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1TerminalStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TerminalStateException> => {
  const contents: TerminalStateException = {
    name: "TerminalStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
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
    message: undefined,
    payload: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.payload !== undefined && data.payload !== null) {
    contents.payload = context.base64Decoder(data.payload);
  }
  return contents;
};

const serializeAws_restJson1DetailsMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1DetailsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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
      output.statusDetails !== undefined && output.statusDetails !== null
        ? deserializeAws_restJson1DetailsMap(output.statusDetails, context)
        : undefined,
    thingName: __expectString(output.thingName),
    versionNumber: __expectLong(output.versionNumber),
  } as any;
};

const deserializeAws_restJson1JobExecutionState = (output: any, context: __SerdeContext): JobExecutionState => {
  return {
    status: __expectString(output.status),
    statusDetails:
      output.statusDetails !== undefined && output.statusDetails !== null
        ? deserializeAws_restJson1DetailsMap(output.statusDetails, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobExecutionSummary(entry, context);
    });
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
