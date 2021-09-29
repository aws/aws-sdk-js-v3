import { CreateCanaryCommandInput, CreateCanaryCommandOutput } from "../commands/CreateCanaryCommand";
import { DeleteCanaryCommandInput, DeleteCanaryCommandOutput } from "../commands/DeleteCanaryCommand";
import { DescribeCanariesCommandInput, DescribeCanariesCommandOutput } from "../commands/DescribeCanariesCommand";
import {
  DescribeCanariesLastRunCommandInput,
  DescribeCanariesLastRunCommandOutput,
} from "../commands/DescribeCanariesLastRunCommand";
import {
  DescribeRuntimeVersionsCommandInput,
  DescribeRuntimeVersionsCommandOutput,
} from "../commands/DescribeRuntimeVersionsCommand";
import { GetCanaryCommandInput, GetCanaryCommandOutput } from "../commands/GetCanaryCommand";
import { GetCanaryRunsCommandInput, GetCanaryRunsCommandOutput } from "../commands/GetCanaryRunsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartCanaryCommandInput, StartCanaryCommandOutput } from "../commands/StartCanaryCommand";
import { StopCanaryCommandInput, StopCanaryCommandOutput } from "../commands/StopCanaryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateCanaryCommandInput, UpdateCanaryCommandOutput } from "../commands/UpdateCanaryCommand";
import {
  BaseScreenshot,
  Canary,
  CanaryCodeInput,
  CanaryCodeOutput,
  CanaryLastRun,
  CanaryRun,
  CanaryRunConfigInput,
  CanaryRunConfigOutput,
  CanaryRunStatus,
  CanaryRunTimeline,
  CanaryScheduleInput,
  CanaryScheduleOutput,
  CanaryStatus,
  CanaryTimeline,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  RuntimeVersion,
  ValidationException,
  VisualReferenceInput,
  VisualReferenceOutput,
  VpcConfigInput,
  VpcConfigOutput,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateCanaryCommand = async (
  input: CreateCanaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary";
  let body: any;
  body = JSON.stringify({
    ...(input.ArtifactS3Location !== undefined &&
      input.ArtifactS3Location !== null && { ArtifactS3Location: input.ArtifactS3Location }),
    ...(input.Code !== undefined &&
      input.Code !== null && { Code: serializeAws_restJson1CanaryCodeInput(input.Code, context) }),
    ...(input.ExecutionRoleArn !== undefined &&
      input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.FailureRetentionPeriodInDays !== undefined &&
      input.FailureRetentionPeriodInDays !== null && {
        FailureRetentionPeriodInDays: input.FailureRetentionPeriodInDays,
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RunConfig !== undefined &&
      input.RunConfig !== null && { RunConfig: serializeAws_restJson1CanaryRunConfigInput(input.RunConfig, context) }),
    ...(input.RuntimeVersion !== undefined &&
      input.RuntimeVersion !== null && { RuntimeVersion: input.RuntimeVersion }),
    ...(input.Schedule !== undefined &&
      input.Schedule !== null && { Schedule: serializeAws_restJson1CanaryScheduleInput(input.Schedule, context) }),
    ...(input.SuccessRetentionPeriodInDays !== undefined &&
      input.SuccessRetentionPeriodInDays !== null && {
        SuccessRetentionPeriodInDays: input.SuccessRetentionPeriodInDays,
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
    ...(input.VpcConfig !== undefined &&
      input.VpcConfig !== null && { VpcConfig: serializeAws_restJson1VpcConfigInput(input.VpcConfig, context) }),
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

export const serializeAws_restJson1DeleteCanaryCommand = async (
  input: DeleteCanaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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

export const serializeAws_restJson1DescribeCanariesCommand = async (
  input: DescribeCanariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canaries";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1DescribeCanariesLastRunCommand = async (
  input: DescribeCanariesLastRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canaries/last-run";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1DescribeRuntimeVersionsCommand = async (
  input: DescribeRuntimeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/runtime-versions";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1GetCanaryCommand = async (
  input: GetCanaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1GetCanaryRunsCommand = async (
  input: GetCanaryRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary/{Name}/runs";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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

export const serializeAws_restJson1StartCanaryCommand = async (
  input: StartCanaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary/{Name}/start";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
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

export const serializeAws_restJson1StopCanaryCommand = async (
  input: StopCanaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary/{Name}/stop";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
  let body: any;
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

export const serializeAws_restJson1UpdateCanaryCommand = async (
  input: UpdateCanaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/canary/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Code !== undefined &&
      input.Code !== null && { Code: serializeAws_restJson1CanaryCodeInput(input.Code, context) }),
    ...(input.ExecutionRoleArn !== undefined &&
      input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.FailureRetentionPeriodInDays !== undefined &&
      input.FailureRetentionPeriodInDays !== null && {
        FailureRetentionPeriodInDays: input.FailureRetentionPeriodInDays,
      }),
    ...(input.RunConfig !== undefined &&
      input.RunConfig !== null && { RunConfig: serializeAws_restJson1CanaryRunConfigInput(input.RunConfig, context) }),
    ...(input.RuntimeVersion !== undefined &&
      input.RuntimeVersion !== null && { RuntimeVersion: input.RuntimeVersion }),
    ...(input.Schedule !== undefined &&
      input.Schedule !== null && { Schedule: serializeAws_restJson1CanaryScheduleInput(input.Schedule, context) }),
    ...(input.SuccessRetentionPeriodInDays !== undefined &&
      input.SuccessRetentionPeriodInDays !== null && {
        SuccessRetentionPeriodInDays: input.SuccessRetentionPeriodInDays,
      }),
    ...(input.VisualReference !== undefined &&
      input.VisualReference !== null && {
        VisualReference: serializeAws_restJson1VisualReferenceInput(input.VisualReference, context),
      }),
    ...(input.VpcConfig !== undefined &&
      input.VpcConfig !== null && { VpcConfig: serializeAws_restJson1VpcConfigInput(input.VpcConfig, context) }),
  });
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

export const deserializeAws_restJson1CreateCanaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCanaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCanaryCommandError(output, context);
  }
  const contents: CreateCanaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    Canary: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Canary !== undefined && data.Canary !== null) {
    contents.Canary = deserializeAws_restJson1Canary(data.Canary, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCanaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCanaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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

export const deserializeAws_restJson1DeleteCanaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCanaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCanaryCommandError(output, context);
  }
  const contents: DeleteCanaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCanaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCanaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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

export const deserializeAws_restJson1DescribeCanariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCanariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCanariesCommandError(output, context);
  }
  const contents: DescribeCanariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Canaries: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Canaries !== undefined && data.Canaries !== null) {
    contents.Canaries = deserializeAws_restJson1Canaries(data.Canaries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeCanariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCanariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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

export const deserializeAws_restJson1DescribeCanariesLastRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCanariesLastRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCanariesLastRunCommandError(output, context);
  }
  const contents: DescribeCanariesLastRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    CanariesLastRun: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CanariesLastRun !== undefined && data.CanariesLastRun !== null) {
    contents.CanariesLastRun = deserializeAws_restJson1CanariesLastRun(data.CanariesLastRun, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeCanariesLastRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCanariesLastRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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

export const deserializeAws_restJson1DescribeRuntimeVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuntimeVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRuntimeVersionsCommandError(output, context);
  }
  const contents: DescribeRuntimeVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RuntimeVersions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RuntimeVersions !== undefined && data.RuntimeVersions !== null) {
    contents.RuntimeVersions = deserializeAws_restJson1RuntimeVersionList(data.RuntimeVersions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRuntimeVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuntimeVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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

export const deserializeAws_restJson1GetCanaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCanaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCanaryCommandError(output, context);
  }
  const contents: GetCanaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    Canary: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Canary !== undefined && data.Canary !== null) {
    contents.Canary = deserializeAws_restJson1Canary(data.Canary, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCanaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCanaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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

export const deserializeAws_restJson1GetCanaryRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCanaryRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCanaryRunsCommandError(output, context);
  }
  const contents: GetCanaryRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CanaryRuns: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CanaryRuns !== undefined && data.CanaryRuns !== null) {
    contents.CanaryRuns = deserializeAws_restJson1CanaryRuns(data.CanaryRuns, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCanaryRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCanaryRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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

export const deserializeAws_restJson1StartCanaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCanaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartCanaryCommandError(output, context);
  }
  const contents: StartCanaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartCanaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCanaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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

export const deserializeAws_restJson1StopCanaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCanaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopCanaryCommandError(output, context);
  }
  const contents: StopCanaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopCanaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCanaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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

export const deserializeAws_restJson1UpdateCanaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCanaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCanaryCommandError(output, context);
  }
  const contents: UpdateCanaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateCanaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCanaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.synthetics#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.synthetics#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.synthetics#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.synthetics#ValidationException":
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
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
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
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
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
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const serializeAws_restJson1BaseScreenshot = (input: BaseScreenshot, context: __SerdeContext): any => {
  return {
    ...(input.IgnoreCoordinates !== undefined &&
      input.IgnoreCoordinates !== null && {
        IgnoreCoordinates: serializeAws_restJson1BaseScreenshotIgnoreCoordinates(input.IgnoreCoordinates, context),
      }),
    ...(input.ScreenshotName !== undefined &&
      input.ScreenshotName !== null && { ScreenshotName: input.ScreenshotName }),
  };
};

const serializeAws_restJson1BaseScreenshotIgnoreCoordinates = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1BaseScreenshots = (input: BaseScreenshot[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1BaseScreenshot(entry, context);
    });
};

const serializeAws_restJson1CanaryCodeInput = (input: CanaryCodeInput, context: __SerdeContext): any => {
  return {
    ...(input.Handler !== undefined && input.Handler !== null && { Handler: input.Handler }),
    ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key }),
    ...(input.S3Version !== undefined && input.S3Version !== null && { S3Version: input.S3Version }),
    ...(input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  };
};

const serializeAws_restJson1CanaryRunConfigInput = (input: CanaryRunConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.ActiveTracing !== undefined && input.ActiveTracing !== null && { ActiveTracing: input.ActiveTracing }),
    ...(input.EnvironmentVariables !== undefined &&
      input.EnvironmentVariables !== null && {
        EnvironmentVariables: serializeAws_restJson1EnvironmentVariablesMap(input.EnvironmentVariables, context),
      }),
    ...(input.MemoryInMB !== undefined && input.MemoryInMB !== null && { MemoryInMB: input.MemoryInMB }),
    ...(input.TimeoutInSeconds !== undefined &&
      input.TimeoutInSeconds !== null && { TimeoutInSeconds: input.TimeoutInSeconds }),
  };
};

const serializeAws_restJson1CanaryScheduleInput = (input: CanaryScheduleInput, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds !== undefined &&
      input.DurationInSeconds !== null && { DurationInSeconds: input.DurationInSeconds }),
    ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
  };
};

const serializeAws_restJson1EnvironmentVariablesMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
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

const serializeAws_restJson1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1VisualReferenceInput = (input: VisualReferenceInput, context: __SerdeContext): any => {
  return {
    ...(input.BaseCanaryRunId !== undefined &&
      input.BaseCanaryRunId !== null && { BaseCanaryRunId: input.BaseCanaryRunId }),
    ...(input.BaseScreenshots !== undefined &&
      input.BaseScreenshots !== null && {
        BaseScreenshots: serializeAws_restJson1BaseScreenshots(input.BaseScreenshots, context),
      }),
  };
};

const serializeAws_restJson1VpcConfigInput = (input: VpcConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1SecurityGroupIds(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1SubnetIds(input.SubnetIds, context) }),
  };
};

const deserializeAws_restJson1BaseScreenshot = (output: any, context: __SerdeContext): BaseScreenshot => {
  return {
    IgnoreCoordinates:
      output.IgnoreCoordinates !== undefined && output.IgnoreCoordinates !== null
        ? deserializeAws_restJson1BaseScreenshotIgnoreCoordinates(output.IgnoreCoordinates, context)
        : undefined,
    ScreenshotName: __expectString(output.ScreenshotName),
  } as any;
};

const deserializeAws_restJson1BaseScreenshotIgnoreCoordinates = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1BaseScreenshots = (output: any, context: __SerdeContext): BaseScreenshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BaseScreenshot(entry, context);
    });
};

const deserializeAws_restJson1Canaries = (output: any, context: __SerdeContext): Canary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Canary(entry, context);
    });
};

const deserializeAws_restJson1CanariesLastRun = (output: any, context: __SerdeContext): CanaryLastRun[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CanaryLastRun(entry, context);
    });
};

const deserializeAws_restJson1Canary = (output: any, context: __SerdeContext): Canary => {
  return {
    ArtifactS3Location: __expectString(output.ArtifactS3Location),
    Code:
      output.Code !== undefined && output.Code !== null
        ? deserializeAws_restJson1CanaryCodeOutput(output.Code, context)
        : undefined,
    EngineArn: __expectString(output.EngineArn),
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    FailureRetentionPeriodInDays: __expectInt32(output.FailureRetentionPeriodInDays),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    RunConfig:
      output.RunConfig !== undefined && output.RunConfig !== null
        ? deserializeAws_restJson1CanaryRunConfigOutput(output.RunConfig, context)
        : undefined,
    RuntimeVersion: __expectString(output.RuntimeVersion),
    Schedule:
      output.Schedule !== undefined && output.Schedule !== null
        ? deserializeAws_restJson1CanaryScheduleOutput(output.Schedule, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1CanaryStatus(output.Status, context)
        : undefined,
    SuccessRetentionPeriodInDays: __expectInt32(output.SuccessRetentionPeriodInDays),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
    Timeline:
      output.Timeline !== undefined && output.Timeline !== null
        ? deserializeAws_restJson1CanaryTimeline(output.Timeline, context)
        : undefined,
    VisualReference:
      output.VisualReference !== undefined && output.VisualReference !== null
        ? deserializeAws_restJson1VisualReferenceOutput(output.VisualReference, context)
        : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_restJson1VpcConfigOutput(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CanaryCodeOutput = (output: any, context: __SerdeContext): CanaryCodeOutput => {
  return {
    Handler: __expectString(output.Handler),
    SourceLocationArn: __expectString(output.SourceLocationArn),
  } as any;
};

const deserializeAws_restJson1CanaryLastRun = (output: any, context: __SerdeContext): CanaryLastRun => {
  return {
    CanaryName: __expectString(output.CanaryName),
    LastRun:
      output.LastRun !== undefined && output.LastRun !== null
        ? deserializeAws_restJson1CanaryRun(output.LastRun, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CanaryRun = (output: any, context: __SerdeContext): CanaryRun => {
  return {
    ArtifactS3Location: __expectString(output.ArtifactS3Location),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1CanaryRunStatus(output.Status, context)
        : undefined,
    Timeline:
      output.Timeline !== undefined && output.Timeline !== null
        ? deserializeAws_restJson1CanaryRunTimeline(output.Timeline, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CanaryRunConfigOutput = (output: any, context: __SerdeContext): CanaryRunConfigOutput => {
  return {
    ActiveTracing: __expectBoolean(output.ActiveTracing),
    MemoryInMB: __expectInt32(output.MemoryInMB),
    TimeoutInSeconds: __expectInt32(output.TimeoutInSeconds),
  } as any;
};

const deserializeAws_restJson1CanaryRuns = (output: any, context: __SerdeContext): CanaryRun[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CanaryRun(entry, context);
    });
};

const deserializeAws_restJson1CanaryRunStatus = (output: any, context: __SerdeContext): CanaryRunStatus => {
  return {
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
    StateReasonCode: __expectString(output.StateReasonCode),
  } as any;
};

const deserializeAws_restJson1CanaryRunTimeline = (output: any, context: __SerdeContext): CanaryRunTimeline => {
  return {
    Completed:
      output.Completed !== undefined && output.Completed !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Completed)))
        : undefined,
    Started:
      output.Started !== undefined && output.Started !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Started)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1CanaryScheduleOutput = (output: any, context: __SerdeContext): CanaryScheduleOutput => {
  return {
    DurationInSeconds: __expectLong(output.DurationInSeconds),
    Expression: __expectString(output.Expression),
  } as any;
};

const deserializeAws_restJson1CanaryStatus = (output: any, context: __SerdeContext): CanaryStatus => {
  return {
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
    StateReasonCode: __expectString(output.StateReasonCode),
  } as any;
};

const deserializeAws_restJson1CanaryTimeline = (output: any, context: __SerdeContext): CanaryTimeline => {
  return {
    Created:
      output.Created !== undefined && output.Created !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Created)))
        : undefined,
    LastModified:
      output.LastModified !== undefined && output.LastModified !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModified)))
        : undefined,
    LastStarted:
      output.LastStarted !== undefined && output.LastStarted !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastStarted)))
        : undefined,
    LastStopped:
      output.LastStopped !== undefined && output.LastStopped !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastStopped)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1RuntimeVersion = (output: any, context: __SerdeContext): RuntimeVersion => {
  return {
    DeprecationDate:
      output.DeprecationDate !== undefined && output.DeprecationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeprecationDate)))
        : undefined,
    Description: __expectString(output.Description),
    ReleaseDate:
      output.ReleaseDate !== undefined && output.ReleaseDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReleaseDate)))
        : undefined,
    VersionName: __expectString(output.VersionName),
  } as any;
};

const deserializeAws_restJson1RuntimeVersionList = (output: any, context: __SerdeContext): RuntimeVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuntimeVersion(entry, context);
    });
};

const deserializeAws_restJson1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1SubnetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1VisualReferenceOutput = (output: any, context: __SerdeContext): VisualReferenceOutput => {
  return {
    BaseCanaryRunId: __expectString(output.BaseCanaryRunId),
    BaseScreenshots:
      output.BaseScreenshots !== undefined && output.BaseScreenshots !== null
        ? deserializeAws_restJson1BaseScreenshots(output.BaseScreenshots, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VpcConfigOutput = (output: any, context: __SerdeContext): VpcConfigOutput => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1SecurityGroupIds(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_restJson1SubnetIds(output.SubnetIds, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
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
