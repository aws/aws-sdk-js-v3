import {
  DescribeJobExecutionCommandInput,
  DescribeJobExecutionCommandOutput
} from "../commands/DescribeJobExecutionCommand";
import {
  GetPendingJobExecutionsCommandInput,
  GetPendingJobExecutionsCommandOutput
} from "../commands/GetPendingJobExecutionsCommand";
import {
  StartNextPendingJobExecutionCommandInput,
  StartNextPendingJobExecutionCommandOutput
} from "../commands/StartNextPendingJobExecutionCommand";
import {
  UpdateJobExecutionCommandInput,
  UpdateJobExecutionCommandOutput
} from "../commands/UpdateJobExecutionCommand";
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
  ThrottlingException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1DescribeJobExecutionCommand(
  input: DescribeJobExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/things/{thingName}/jobs/{jobId}";
  if (input.jobId !== undefined) {
    const labelValue: any = input.jobId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  if (input.thingName !== undefined) {
    const labelValue: any = input.thingName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: thingName.");
    }
    resolvedPath = resolvedPath.replace("{thingName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: thingName.");
  }
  const query: any = {};
  if (input.executionNumber !== undefined) {
    query["executionNumber"] = input.executionNumber.toString();
  }
  if (input.includeJobDocument !== undefined) {
    query["includeJobDocument"] = input.includeJobDocument.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetPendingJobExecutionsCommand(
  input: GetPendingJobExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/things/{thingName}/jobs";
  if (input.thingName !== undefined) {
    const labelValue: any = input.thingName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: thingName.");
    }
    resolvedPath = resolvedPath.replace("{thingName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: thingName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1StartNextPendingJobExecutionCommand(
  input: StartNextPendingJobExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/things/{thingName}/jobs/$next";
  if (input.thingName !== undefined) {
    const labelValue: any = input.thingName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: thingName.");
    }
    resolvedPath = resolvedPath.replace("{thingName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: thingName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.statusDetails !== undefined) {
    bodyParams["statusDetails"] = serializeAws_restJson1_1DetailsMap(
      input.statusDetails,
      context
    );
  }
  if (input.stepTimeoutInMinutes !== undefined) {
    bodyParams["stepTimeoutInMinutes"] = input.stepTimeoutInMinutes;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateJobExecutionCommand(
  input: UpdateJobExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/things/{thingName}/jobs/{jobId}";
  if (input.jobId !== undefined) {
    const labelValue: any = input.jobId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  if (input.thingName !== undefined) {
    const labelValue: any = input.thingName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: thingName.");
    }
    resolvedPath = resolvedPath.replace("{thingName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: thingName.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.executionNumber !== undefined) {
    bodyParams["executionNumber"] = input.executionNumber;
  }
  if (input.expectedVersion !== undefined) {
    bodyParams["expectedVersion"] = input.expectedVersion;
  }
  if (input.includeJobDocument !== undefined) {
    bodyParams["includeJobDocument"] = input.includeJobDocument;
  }
  if (input.includeJobExecutionState !== undefined) {
    bodyParams["includeJobExecutionState"] = input.includeJobExecutionState;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  if (input.statusDetails !== undefined) {
    bodyParams["statusDetails"] = serializeAws_restJson1_1DetailsMap(
      input.statusDetails,
      context
    );
  }
  if (input.stepTimeoutInMinutes !== undefined) {
    bodyParams["stepTimeoutInMinutes"] = input.stepTimeoutInMinutes;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1DescribeJobExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobExecutionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeJobExecutionCommandError(
      output,
      context
    );
  }
  const contents: DescribeJobExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeJobExecutionResponse",
    execution: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.execution !== undefined) {
    contents.execution = deserializeAws_restJson1_1JobExecution(
      data.execution,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeJobExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobExecutionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CertificateValidationException":
    case "com.amazonaws.iot.common.types#CertificateValidationException":
      response = await deserializeAws_restJson1_1CertificateValidationExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TerminalStateException":
    case "com.amazonaws.iot.common.types#TerminalStateException":
      response = await deserializeAws_restJson1_1TerminalStateExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.laser.thingjobmanagerservice#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.iot.laser.thingjobmanagerservice.external#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetPendingJobExecutionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPendingJobExecutionsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetPendingJobExecutionsCommandError(
      output,
      context
    );
  }
  const contents: GetPendingJobExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPendingJobExecutionsResponse",
    inProgressJobs: undefined,
    queuedJobs: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.inProgressJobs !== undefined) {
    contents.inProgressJobs = deserializeAws_restJson1_1JobExecutionSummaryList(
      data.inProgressJobs,
      context
    );
  }
  if (data.queuedJobs !== undefined) {
    contents.queuedJobs = deserializeAws_restJson1_1JobExecutionSummaryList(
      data.queuedJobs,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetPendingJobExecutionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPendingJobExecutionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CertificateValidationException":
    case "com.amazonaws.iot.common.types#CertificateValidationException":
      response = await deserializeAws_restJson1_1CertificateValidationExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.laser.thingjobmanagerservice#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.iot.laser.thingjobmanagerservice.external#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1StartNextPendingJobExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNextPendingJobExecutionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1StartNextPendingJobExecutionCommandError(
      output,
      context
    );
  }
  const contents: StartNextPendingJobExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartNextPendingJobExecutionResponse",
    execution: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.execution !== undefined) {
    contents.execution = deserializeAws_restJson1_1JobExecution(
      data.execution,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartNextPendingJobExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNextPendingJobExecutionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CertificateValidationException":
    case "com.amazonaws.iot.common.types#CertificateValidationException":
      response = await deserializeAws_restJson1_1CertificateValidationExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.laser.thingjobmanagerservice#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.iot.laser.thingjobmanagerservice.external#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateJobExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobExecutionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateJobExecutionCommandError(
      output,
      context
    );
  }
  const contents: UpdateJobExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateJobExecutionResponse",
    executionState: undefined,
    jobDocument: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.executionState !== undefined) {
    contents.executionState = deserializeAws_restJson1_1JobExecutionState(
      data.executionState,
      context
    );
  }
  if (data.jobDocument !== undefined) {
    contents.jobDocument = data.jobDocument;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateJobExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobExecutionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CertificateValidationException":
    case "com.amazonaws.iot.common.types#CertificateValidationException":
      response = await deserializeAws_restJson1_1CertificateValidationExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot.common.types#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidStateTransitionException":
    case "com.amazonaws.iot.common.types#InvalidStateTransitionException":
      response = await deserializeAws_restJson1_1InvalidStateTransitionExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot.common.types#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iot.common.types#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazonaws.iot.laser.thingjobmanagerservice#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.iot.laser.thingjobmanagerservice.external#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1CertificateValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CertificateValidationException> => {
  const contents: CertificateValidationException = {
    name: "CertificateValidationException",
    __type: "CertificateValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    __type: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidStateTransitionExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidStateTransitionException> => {
  const contents: InvalidStateTransitionException = {
    name: "InvalidStateTransitionException",
    __type: "InvalidStateTransitionException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TerminalStateExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TerminalStateException> => {
  const contents: TerminalStateException = {
    name: "TerminalStateException",
    __type: "TerminalStateException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    payload: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.payload !== undefined) {
    contents.payload = context.base64Decoder(data.payload);
  }
  return contents;
};

const serializeAws_restJson1_1DetailsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1DetailsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1JobExecution = (
  output: any,
  context: __SerdeContext
): JobExecution => {
  let contents: any = {
    __type: "JobExecution",
    approximateSecondsBeforeTimedOut: undefined,
    executionNumber: undefined,
    jobDocument: undefined,
    jobId: undefined,
    lastUpdatedAt: undefined,
    queuedAt: undefined,
    startedAt: undefined,
    status: undefined,
    statusDetails: undefined,
    thingName: undefined,
    versionNumber: undefined
  };
  if (output.approximateSecondsBeforeTimedOut !== undefined) {
    contents.approximateSecondsBeforeTimedOut =
      output.approximateSecondsBeforeTimedOut;
  }
  if (output.executionNumber !== undefined) {
    contents.executionNumber = output.executionNumber;
  }
  if (output.jobDocument !== undefined) {
    contents.jobDocument = output.jobDocument;
  }
  if (output.jobId !== undefined) {
    contents.jobId = output.jobId;
  }
  if (output.lastUpdatedAt !== undefined) {
    contents.lastUpdatedAt = output.lastUpdatedAt;
  }
  if (output.queuedAt !== undefined) {
    contents.queuedAt = output.queuedAt;
  }
  if (output.startedAt !== undefined) {
    contents.startedAt = output.startedAt;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.statusDetails !== undefined) {
    contents.statusDetails = deserializeAws_restJson1_1DetailsMap(
      output.statusDetails,
      context
    );
  }
  if (output.thingName !== undefined) {
    contents.thingName = output.thingName;
  }
  if (output.versionNumber !== undefined) {
    contents.versionNumber = output.versionNumber;
  }
  return contents;
};

const deserializeAws_restJson1_1JobExecutionState = (
  output: any,
  context: __SerdeContext
): JobExecutionState => {
  let contents: any = {
    __type: "JobExecutionState",
    status: undefined,
    statusDetails: undefined,
    versionNumber: undefined
  };
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.statusDetails !== undefined) {
    contents.statusDetails = deserializeAws_restJson1_1DetailsMap(
      output.statusDetails,
      context
    );
  }
  if (output.versionNumber !== undefined) {
    contents.versionNumber = output.versionNumber;
  }
  return contents;
};

const deserializeAws_restJson1_1JobExecutionSummary = (
  output: any,
  context: __SerdeContext
): JobExecutionSummary => {
  let contents: any = {
    __type: "JobExecutionSummary",
    executionNumber: undefined,
    jobId: undefined,
    lastUpdatedAt: undefined,
    queuedAt: undefined,
    startedAt: undefined,
    versionNumber: undefined
  };
  if (output.executionNumber !== undefined) {
    contents.executionNumber = output.executionNumber;
  }
  if (output.jobId !== undefined) {
    contents.jobId = output.jobId;
  }
  if (output.lastUpdatedAt !== undefined) {
    contents.lastUpdatedAt = output.lastUpdatedAt;
  }
  if (output.queuedAt !== undefined) {
    contents.queuedAt = output.queuedAt;
  }
  if (output.startedAt !== undefined) {
    contents.startedAt = output.startedAt;
  }
  if (output.versionNumber !== undefined) {
    contents.versionNumber = output.versionNumber;
  }
  return contents;
};

const deserializeAws_restJson1_1JobExecutionSummaryList = (
  output: any,
  context: __SerdeContext
): Array<JobExecutionSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobExecutionSummary(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  return context.streamCollector(streamBody) || new Uint8Array();
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
