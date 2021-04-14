import {
  CreateSuiteDefinitionCommandInput,
  CreateSuiteDefinitionCommandOutput,
} from "../commands/CreateSuiteDefinitionCommand";
import {
  DeleteSuiteDefinitionCommandInput,
  DeleteSuiteDefinitionCommandOutput,
} from "../commands/DeleteSuiteDefinitionCommand";
import { GetSuiteDefinitionCommandInput, GetSuiteDefinitionCommandOutput } from "../commands/GetSuiteDefinitionCommand";
import { GetSuiteRunCommandInput, GetSuiteRunCommandOutput } from "../commands/GetSuiteRunCommand";
import { GetSuiteRunReportCommandInput, GetSuiteRunReportCommandOutput } from "../commands/GetSuiteRunReportCommand";
import {
  ListSuiteDefinitionsCommandInput,
  ListSuiteDefinitionsCommandOutput,
} from "../commands/ListSuiteDefinitionsCommand";
import { ListSuiteRunsCommandInput, ListSuiteRunsCommandOutput } from "../commands/ListSuiteRunsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTestCasesCommandInput, ListTestCasesCommandOutput } from "../commands/ListTestCasesCommand";
import { StartSuiteRunCommandInput, StartSuiteRunCommandOutput } from "../commands/StartSuiteRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateSuiteDefinitionCommandInput,
  UpdateSuiteDefinitionCommandOutput,
} from "../commands/UpdateSuiteDefinitionCommand";
import {
  ConflictException,
  DeviceUnderTest,
  GroupResult,
  InternalServerException,
  ResourceNotFoundException,
  SuiteDefinitionConfiguration,
  SuiteDefinitionInformation,
  SuiteRunConfiguration,
  SuiteRunInformation,
  TestCase,
  TestCaseCategory,
  TestCaseDefinition,
  TestCaseRun,
  TestResult,
  ValidationException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateSuiteDefinitionCommand = async (
  input: CreateSuiteDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/suiteDefinitions";
  let body: any;
  body = JSON.stringify({
    ...(input.suiteDefinitionConfiguration !== undefined &&
      input.suiteDefinitionConfiguration !== null && {
        suiteDefinitionConfiguration: serializeAws_restJson1SuiteDefinitionConfiguration(
          input.suiteDefinitionConfiguration,
          context
        ),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DeleteSuiteDefinitionCommand = async (
  input: DeleteSuiteDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}";
  if (input.suiteDefinitionId !== undefined) {
    const labelValue: string = input.suiteDefinitionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
    }
    resolvedPath = resolvedPath.replace("{suiteDefinitionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetSuiteDefinitionCommand = async (
  input: GetSuiteDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}";
  if (input.suiteDefinitionId !== undefined) {
    const labelValue: string = input.suiteDefinitionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
    }
    resolvedPath = resolvedPath.replace("{suiteDefinitionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
  }
  const query: any = {
    ...(input.suiteDefinitionVersion !== undefined && { suiteDefinitionVersion: input.suiteDefinitionVersion }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetSuiteRunCommand = async (
  input: GetSuiteRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}";
  if (input.suiteDefinitionId !== undefined) {
    const labelValue: string = input.suiteDefinitionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
    }
    resolvedPath = resolvedPath.replace("{suiteDefinitionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
  }
  if (input.suiteRunId !== undefined) {
    const labelValue: string = input.suiteRunId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: suiteRunId.");
    }
    resolvedPath = resolvedPath.replace("{suiteRunId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: suiteRunId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetSuiteRunReportCommand = async (
  input: GetSuiteRunReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report";
  if (input.suiteDefinitionId !== undefined) {
    const labelValue: string = input.suiteDefinitionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
    }
    resolvedPath = resolvedPath.replace("{suiteDefinitionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
  }
  if (input.suiteRunId !== undefined) {
    const labelValue: string = input.suiteRunId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: suiteRunId.");
    }
    resolvedPath = resolvedPath.replace("{suiteRunId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: suiteRunId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListSuiteDefinitionsCommand = async (
  input: ListSuiteDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/suiteDefinitions";
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListSuiteRunsCommand = async (
  input: ListSuiteRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/suiteRuns";
  const query: any = {
    ...(input.suiteDefinitionId !== undefined && { suiteDefinitionId: input.suiteDefinitionId }),
    ...(input.suiteDefinitionVersion !== undefined && { suiteDefinitionVersion: input.suiteDefinitionVersion }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListTestCasesCommand = async (
  input: ListTestCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/testCases";
  const query: any = {
    ...(input.intendedForQualification !== undefined && {
      intendedForQualification: input.intendedForQualification.toString(),
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1StartSuiteRunCommand = async (
  input: StartSuiteRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}/suiteRuns";
  if (input.suiteDefinitionId !== undefined) {
    const labelValue: string = input.suiteDefinitionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
    }
    resolvedPath = resolvedPath.replace("{suiteDefinitionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.suiteDefinitionVersion !== undefined &&
      input.suiteDefinitionVersion !== null && { suiteDefinitionVersion: input.suiteDefinitionVersion }),
    ...(input.suiteRunConfiguration !== undefined &&
      input.suiteRunConfiguration !== null && {
        suiteRunConfiguration: serializeAws_restJson1SuiteRunConfiguration(input.suiteRunConfiguration, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateSuiteDefinitionCommand = async (
  input: UpdateSuiteDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/suiteDefinitions/{suiteDefinitionId}";
  if (input.suiteDefinitionId !== undefined) {
    const labelValue: string = input.suiteDefinitionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: suiteDefinitionId.");
    }
    resolvedPath = resolvedPath.replace("{suiteDefinitionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: suiteDefinitionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.suiteDefinitionConfiguration !== undefined &&
      input.suiteDefinitionConfiguration !== null && {
        suiteDefinitionConfiguration: serializeAws_restJson1SuiteDefinitionConfiguration(
          input.suiteDefinitionConfiguration,
          context
        ),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateSuiteDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSuiteDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSuiteDefinitionCommandError(output, context);
  }
  const contents: CreateSuiteDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    createdAt: undefined,
    suiteDefinitionArn: undefined,
    suiteDefinitionId: undefined,
    suiteDefinitionName: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.suiteDefinitionArn !== undefined && data.suiteDefinitionArn !== null) {
    contents.suiteDefinitionArn = data.suiteDefinitionArn;
  }
  if (data.suiteDefinitionId !== undefined && data.suiteDefinitionId !== null) {
    contents.suiteDefinitionId = data.suiteDefinitionId;
  }
  if (data.suiteDefinitionName !== undefined && data.suiteDefinitionName !== null) {
    contents.suiteDefinitionName = data.suiteDefinitionName;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSuiteDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSuiteDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteSuiteDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuiteDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSuiteDefinitionCommandError(output, context);
  }
  const contents: DeleteSuiteDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSuiteDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSuiteDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetSuiteDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSuiteDefinitionCommandError(output, context);
  }
  const contents: GetSuiteDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    createdAt: undefined,
    lastModifiedAt: undefined,
    latestVersion: undefined,
    suiteDefinitionArn: undefined,
    suiteDefinitionConfiguration: undefined,
    suiteDefinitionId: undefined,
    suiteDefinitionVersion: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.lastModifiedAt !== undefined && data.lastModifiedAt !== null) {
    contents.lastModifiedAt = new Date(Math.round(data.lastModifiedAt * 1000));
  }
  if (data.latestVersion !== undefined && data.latestVersion !== null) {
    contents.latestVersion = data.latestVersion;
  }
  if (data.suiteDefinitionArn !== undefined && data.suiteDefinitionArn !== null) {
    contents.suiteDefinitionArn = data.suiteDefinitionArn;
  }
  if (data.suiteDefinitionConfiguration !== undefined && data.suiteDefinitionConfiguration !== null) {
    contents.suiteDefinitionConfiguration = deserializeAws_restJson1SuiteDefinitionConfiguration(
      data.suiteDefinitionConfiguration,
      context
    );
  }
  if (data.suiteDefinitionId !== undefined && data.suiteDefinitionId !== null) {
    contents.suiteDefinitionId = data.suiteDefinitionId;
  }
  if (data.suiteDefinitionVersion !== undefined && data.suiteDefinitionVersion !== null) {
    contents.suiteDefinitionVersion = data.suiteDefinitionVersion;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSuiteDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetSuiteRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSuiteRunCommandError(output, context);
  }
  const contents: GetSuiteRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    endTime: undefined,
    errorReason: undefined,
    startTime: undefined,
    status: undefined,
    suiteDefinitionId: undefined,
    suiteDefinitionVersion: undefined,
    suiteRunArn: undefined,
    suiteRunConfiguration: undefined,
    suiteRunId: undefined,
    tags: undefined,
    testResult: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.endTime !== undefined && data.endTime !== null) {
    contents.endTime = new Date(Math.round(data.endTime * 1000));
  }
  if (data.errorReason !== undefined && data.errorReason !== null) {
    contents.errorReason = data.errorReason;
  }
  if (data.startTime !== undefined && data.startTime !== null) {
    contents.startTime = new Date(Math.round(data.startTime * 1000));
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.suiteDefinitionId !== undefined && data.suiteDefinitionId !== null) {
    contents.suiteDefinitionId = data.suiteDefinitionId;
  }
  if (data.suiteDefinitionVersion !== undefined && data.suiteDefinitionVersion !== null) {
    contents.suiteDefinitionVersion = data.suiteDefinitionVersion;
  }
  if (data.suiteRunArn !== undefined && data.suiteRunArn !== null) {
    contents.suiteRunArn = data.suiteRunArn;
  }
  if (data.suiteRunConfiguration !== undefined && data.suiteRunConfiguration !== null) {
    contents.suiteRunConfiguration = deserializeAws_restJson1SuiteRunConfiguration(data.suiteRunConfiguration, context);
  }
  if (data.suiteRunId !== undefined && data.suiteRunId !== null) {
    contents.suiteRunId = data.suiteRunId;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.testResult !== undefined && data.testResult !== null) {
    contents.testResult = deserializeAws_restJson1TestResult(data.testResult, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSuiteRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetSuiteRunReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteRunReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSuiteRunReportCommandError(output, context);
  }
  const contents: GetSuiteRunReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    qualificationReportDownloadUrl: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.qualificationReportDownloadUrl !== undefined && data.qualificationReportDownloadUrl !== null) {
    contents.qualificationReportDownloadUrl = data.qualificationReportDownloadUrl;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSuiteRunReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteRunReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListSuiteDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuiteDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSuiteDefinitionsCommandError(output, context);
  }
  const contents: ListSuiteDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    suiteDefinitionInformationList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.suiteDefinitionInformationList !== undefined && data.suiteDefinitionInformationList !== null) {
    contents.suiteDefinitionInformationList = deserializeAws_restJson1SuiteDefinitionInformationList(
      data.suiteDefinitionInformationList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSuiteDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuiteDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListSuiteRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuiteRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSuiteRunsCommandError(output, context);
  }
  const contents: ListSuiteRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    suiteRunsList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.suiteRunsList !== undefined && data.suiteRunsList !== null) {
    contents.suiteRunsList = deserializeAws_restJson1SuiteRunsList(data.suiteRunsList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSuiteRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuiteRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListTestCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestCasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTestCasesCommandError(output, context);
  }
  const contents: ListTestCasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    categories: undefined,
    groupConfiguration: undefined,
    nextToken: undefined,
    rootGroupConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.categories !== undefined && data.categories !== null) {
    contents.categories = deserializeAws_restJson1TestCategory(data.categories, context);
  }
  if (data.groupConfiguration !== undefined && data.groupConfiguration !== null) {
    contents.groupConfiguration = deserializeAws_restJson1TestConfiguration(data.groupConfiguration, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.rootGroupConfiguration !== undefined && data.rootGroupConfiguration !== null) {
    contents.rootGroupConfiguration = deserializeAws_restJson1TestConfiguration(data.rootGroupConfiguration, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTestCasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestCasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1StartSuiteRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSuiteRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartSuiteRunCommandError(output, context);
  }
  const contents: StartSuiteRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    createdAt: undefined,
    suiteRunArn: undefined,
    suiteRunId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.suiteRunArn !== undefined && data.suiteRunArn !== null) {
    contents.suiteRunArn = data.suiteRunArn;
  }
  if (data.suiteRunId !== undefined && data.suiteRunId !== null) {
    contents.suiteRunId = data.suiteRunId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartSuiteRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSuiteRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.iotdeviceadvisor#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotdeviceadvisor#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateSuiteDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSuiteDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSuiteDefinitionCommandError(output, context);
  }
  const contents: UpdateSuiteDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    createdAt: undefined,
    lastUpdatedAt: undefined,
    suiteDefinitionArn: undefined,
    suiteDefinitionId: undefined,
    suiteDefinitionName: undefined,
    suiteDefinitionVersion: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.suiteDefinitionArn !== undefined && data.suiteDefinitionArn !== null) {
    contents.suiteDefinitionArn = data.suiteDefinitionArn;
  }
  if (data.suiteDefinitionId !== undefined && data.suiteDefinitionId !== null) {
    contents.suiteDefinitionId = data.suiteDefinitionId;
  }
  if (data.suiteDefinitionName !== undefined && data.suiteDefinitionName !== null) {
    contents.suiteDefinitionName = data.suiteDefinitionName;
  }
  if (data.suiteDefinitionVersion !== undefined && data.suiteDefinitionVersion !== null) {
    contents.suiteDefinitionVersion = data.suiteDefinitionVersion;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSuiteDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSuiteDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotdeviceadvisor#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.iotdeviceadvisor#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1DeviceUnderTest = (input: DeviceUnderTest, context: __SerdeContext): any => {
  return {
    ...(input.certificateArn !== undefined &&
      input.certificateArn !== null && { certificateArn: input.certificateArn }),
    ...(input.thingArn !== undefined && input.thingArn !== null && { thingArn: input.thingArn }),
  };
};

const serializeAws_restJson1DeviceUnderTestList = (input: DeviceUnderTest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DeviceUnderTest(entry, context);
    });
};

const serializeAws_restJson1SelectedTestList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SuiteDefinitionConfiguration = (
  input: SuiteDefinitionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.devicePermissionRoleArn !== undefined &&
      input.devicePermissionRoleArn !== null && { devicePermissionRoleArn: input.devicePermissionRoleArn }),
    ...(input.devices !== undefined &&
      input.devices !== null && { devices: serializeAws_restJson1DeviceUnderTestList(input.devices, context) }),
    ...(input.intendedForQualification !== undefined &&
      input.intendedForQualification !== null && { intendedForQualification: input.intendedForQualification }),
    ...(input.rootGroup !== undefined && input.rootGroup !== null && { rootGroup: input.rootGroup }),
    ...(input.suiteDefinitionName !== undefined &&
      input.suiteDefinitionName !== null && { suiteDefinitionName: input.suiteDefinitionName }),
  };
};

const serializeAws_restJson1SuiteRunConfiguration = (input: SuiteRunConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.primaryDevice !== undefined &&
      input.primaryDevice !== null && {
        primaryDevice: serializeAws_restJson1DeviceUnderTest(input.primaryDevice, context),
      }),
    ...(input.secondaryDevice !== undefined &&
      input.secondaryDevice !== null && {
        secondaryDevice: serializeAws_restJson1DeviceUnderTest(input.secondaryDevice, context),
      }),
    ...(input.selectedTestList !== undefined &&
      input.selectedTestList !== null && {
        selectedTestList: serializeAws_restJson1SelectedTestList(input.selectedTestList, context),
      }),
  };
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1DeviceUnderTest = (output: any, context: __SerdeContext): DeviceUnderTest => {
  return {
    certificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
    thingArn: output.thingArn !== undefined && output.thingArn !== null ? output.thingArn : undefined,
  } as any;
};

const deserializeAws_restJson1DeviceUnderTestList = (output: any, context: __SerdeContext): DeviceUnderTest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeviceUnderTest(entry, context);
    });
};

const deserializeAws_restJson1GroupResult = (output: any, context: __SerdeContext): GroupResult => {
  return {
    groupId: output.groupId !== undefined && output.groupId !== null ? output.groupId : undefined,
    groupName: output.groupName !== undefined && output.groupName !== null ? output.groupName : undefined,
    tests:
      output.tests !== undefined && output.tests !== null
        ? deserializeAws_restJson1TestCaseRuns(output.tests, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GroupResultList = (output: any, context: __SerdeContext): GroupResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupResult(entry, context);
    });
};

const deserializeAws_restJson1SelectedTestList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1SuiteDefinitionConfiguration = (
  output: any,
  context: __SerdeContext
): SuiteDefinitionConfiguration => {
  return {
    devicePermissionRoleArn:
      output.devicePermissionRoleArn !== undefined && output.devicePermissionRoleArn !== null
        ? output.devicePermissionRoleArn
        : undefined,
    devices:
      output.devices !== undefined && output.devices !== null
        ? deserializeAws_restJson1DeviceUnderTestList(output.devices, context)
        : undefined,
    intendedForQualification:
      output.intendedForQualification !== undefined && output.intendedForQualification !== null
        ? output.intendedForQualification
        : undefined,
    rootGroup: output.rootGroup !== undefined && output.rootGroup !== null ? output.rootGroup : undefined,
    suiteDefinitionName:
      output.suiteDefinitionName !== undefined && output.suiteDefinitionName !== null
        ? output.suiteDefinitionName
        : undefined,
  } as any;
};

const deserializeAws_restJson1SuiteDefinitionInformation = (
  output: any,
  context: __SerdeContext
): SuiteDefinitionInformation => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    defaultDevices:
      output.defaultDevices !== undefined && output.defaultDevices !== null
        ? deserializeAws_restJson1DeviceUnderTestList(output.defaultDevices, context)
        : undefined,
    intendedForQualification:
      output.intendedForQualification !== undefined && output.intendedForQualification !== null
        ? output.intendedForQualification
        : undefined,
    suiteDefinitionId:
      output.suiteDefinitionId !== undefined && output.suiteDefinitionId !== null
        ? output.suiteDefinitionId
        : undefined,
    suiteDefinitionName:
      output.suiteDefinitionName !== undefined && output.suiteDefinitionName !== null
        ? output.suiteDefinitionName
        : undefined,
  } as any;
};

const deserializeAws_restJson1SuiteDefinitionInformationList = (
  output: any,
  context: __SerdeContext
): SuiteDefinitionInformation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SuiteDefinitionInformation(entry, context);
    });
};

const deserializeAws_restJson1SuiteRunConfiguration = (output: any, context: __SerdeContext): SuiteRunConfiguration => {
  return {
    primaryDevice:
      output.primaryDevice !== undefined && output.primaryDevice !== null
        ? deserializeAws_restJson1DeviceUnderTest(output.primaryDevice, context)
        : undefined,
    secondaryDevice:
      output.secondaryDevice !== undefined && output.secondaryDevice !== null
        ? deserializeAws_restJson1DeviceUnderTest(output.secondaryDevice, context)
        : undefined,
    selectedTestList:
      output.selectedTestList !== undefined && output.selectedTestList !== null
        ? deserializeAws_restJson1SelectedTestList(output.selectedTestList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SuiteRunInformation = (output: any, context: __SerdeContext): SuiteRunInformation => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    endAt: output.endAt !== undefined && output.endAt !== null ? new Date(Math.round(output.endAt * 1000)) : undefined,
    failed: output.failed !== undefined && output.failed !== null ? output.failed : undefined,
    passed: output.passed !== undefined && output.passed !== null ? output.passed : undefined,
    startedAt:
      output.startedAt !== undefined && output.startedAt !== null
        ? new Date(Math.round(output.startedAt * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    suiteDefinitionId:
      output.suiteDefinitionId !== undefined && output.suiteDefinitionId !== null
        ? output.suiteDefinitionId
        : undefined,
    suiteDefinitionName:
      output.suiteDefinitionName !== undefined && output.suiteDefinitionName !== null
        ? output.suiteDefinitionName
        : undefined,
    suiteDefinitionVersion:
      output.suiteDefinitionVersion !== undefined && output.suiteDefinitionVersion !== null
        ? output.suiteDefinitionVersion
        : undefined,
    suiteRunId: output.suiteRunId !== undefined && output.suiteRunId !== null ? output.suiteRunId : undefined,
  } as any;
};

const deserializeAws_restJson1SuiteRunsList = (output: any, context: __SerdeContext): SuiteRunInformation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SuiteRunInformation(entry, context);
    });
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1TestCase = (output: any, context: __SerdeContext): TestCase => {
  return {
    configuration:
      output.configuration !== undefined && output.configuration !== null
        ? deserializeAws_restJson1TestConfiguration(output.configuration, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    test:
      output.test !== undefined && output.test !== null
        ? deserializeAws_restJson1TestCaseDefinition(output.test, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TestCaseCategory = (output: any, context: __SerdeContext): TestCaseCategory => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    tests:
      output.tests !== undefined && output.tests !== null
        ? deserializeAws_restJson1TestCaseList(output.tests, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TestCaseDefinition = (output: any, context: __SerdeContext): TestCaseDefinition => {
  return {
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    testCaseVersion:
      output.testCaseVersion !== undefined && output.testCaseVersion !== null ? output.testCaseVersion : undefined,
  } as any;
};

const deserializeAws_restJson1TestCaseList = (output: any, context: __SerdeContext): TestCase[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TestCase(entry, context);
    });
};

const deserializeAws_restJson1TestCaseRun = (output: any, context: __SerdeContext): TestCaseRun => {
  return {
    endTime:
      output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
    failure: output.failure !== undefined && output.failure !== null ? output.failure : undefined,
    logUrl: output.logUrl !== undefined && output.logUrl !== null ? output.logUrl : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    testCaseDefinitionId:
      output.testCaseDefinitionId !== undefined && output.testCaseDefinitionId !== null
        ? output.testCaseDefinitionId
        : undefined,
    testCaseDefinitionName:
      output.testCaseDefinitionName !== undefined && output.testCaseDefinitionName !== null
        ? output.testCaseDefinitionName
        : undefined,
    testCaseRunId:
      output.testCaseRunId !== undefined && output.testCaseRunId !== null ? output.testCaseRunId : undefined,
    warnings: output.warnings !== undefined && output.warnings !== null ? output.warnings : undefined,
  } as any;
};

const deserializeAws_restJson1TestCaseRuns = (output: any, context: __SerdeContext): TestCaseRun[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TestCaseRun(entry, context);
    });
};

const deserializeAws_restJson1TestCategory = (output: any, context: __SerdeContext): TestCaseCategory[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TestCaseCategory(entry, context);
    });
};

const deserializeAws_restJson1TestConfiguration = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1TestResult = (output: any, context: __SerdeContext): TestResult => {
  return {
    groups:
      output.groups !== undefined && output.groups !== null
        ? deserializeAws_restJson1GroupResultList(output.groups, context)
        : undefined,
  } as any;
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
