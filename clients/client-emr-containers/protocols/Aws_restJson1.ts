import { CancelJobRunCommandInput, CancelJobRunCommandOutput } from "../commands/CancelJobRunCommand";
import {
  CreateManagedEndpointCommandInput,
  CreateManagedEndpointCommandOutput,
} from "../commands/CreateManagedEndpointCommand";
import {
  CreateVirtualClusterCommandInput,
  CreateVirtualClusterCommandOutput,
} from "../commands/CreateVirtualClusterCommand";
import {
  DeleteManagedEndpointCommandInput,
  DeleteManagedEndpointCommandOutput,
} from "../commands/DeleteManagedEndpointCommand";
import {
  DeleteVirtualClusterCommandInput,
  DeleteVirtualClusterCommandOutput,
} from "../commands/DeleteVirtualClusterCommand";
import { DescribeJobRunCommandInput, DescribeJobRunCommandOutput } from "../commands/DescribeJobRunCommand";
import {
  DescribeManagedEndpointCommandInput,
  DescribeManagedEndpointCommandOutput,
} from "../commands/DescribeManagedEndpointCommand";
import {
  DescribeVirtualClusterCommandInput,
  DescribeVirtualClusterCommandOutput,
} from "../commands/DescribeVirtualClusterCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import {
  ListManagedEndpointsCommandInput,
  ListManagedEndpointsCommandOutput,
} from "../commands/ListManagedEndpointsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListVirtualClustersCommandInput,
  ListVirtualClustersCommandOutput,
} from "../commands/ListVirtualClustersCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "../commands/StartJobRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  CloudWatchMonitoringConfiguration,
  Configuration,
  ConfigurationOverrides,
  ContainerInfo,
  ContainerProvider,
  EksInfo,
  Endpoint,
  InternalServerException,
  JobDriver,
  JobRun,
  MonitoringConfiguration,
  ResourceNotFoundException,
  S3MonitoringConfiguration,
  SparkSubmitJobDriver,
  ValidationException,
  VirtualCluster,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
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
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1CancelJobRunCommand = async (
  input: CancelJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/jobruns/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  if (input.virtualClusterId !== undefined) {
    const labelValue: string = input.virtualClusterId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
    }
    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualClusterId.");
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

export const serializeAws_restJson1CreateManagedEndpointCommand = async (
  input: CreateManagedEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/endpoints";
  if (input.virtualClusterId !== undefined) {
    const labelValue: string = input.virtualClusterId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
    }
    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualClusterId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.certificateArn !== undefined &&
      input.certificateArn !== null && { certificateArn: input.certificateArn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.configurationOverrides !== undefined &&
      input.configurationOverrides !== null && {
        configurationOverrides: serializeAws_restJson1ConfigurationOverrides(input.configurationOverrides, context),
      }),
    ...(input.executionRoleArn !== undefined &&
      input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.releaseLabel !== undefined && input.releaseLabel !== null && { releaseLabel: input.releaseLabel }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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

export const serializeAws_restJson1CreateVirtualClusterCommand = async (
  input: CreateVirtualClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/virtualclusters";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.containerProvider !== undefined &&
      input.containerProvider !== null && {
        containerProvider: serializeAws_restJson1ContainerProvider(input.containerProvider, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1DeleteManagedEndpointCommand = async (
  input: DeleteManagedEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/endpoints/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  if (input.virtualClusterId !== undefined) {
    const labelValue: string = input.virtualClusterId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
    }
    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualClusterId.");
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

export const serializeAws_restJson1DeleteVirtualClusterCommand = async (
  input: DeleteVirtualClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/virtualclusters/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
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

export const serializeAws_restJson1DescribeJobRunCommand = async (
  input: DescribeJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/jobruns/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  if (input.virtualClusterId !== undefined) {
    const labelValue: string = input.virtualClusterId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
    }
    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualClusterId.");
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

export const serializeAws_restJson1DescribeManagedEndpointCommand = async (
  input: DescribeManagedEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/endpoints/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  if (input.virtualClusterId !== undefined) {
    const labelValue: string = input.virtualClusterId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
    }
    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualClusterId.");
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

export const serializeAws_restJson1DescribeVirtualClusterCommand = async (
  input: DescribeVirtualClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/virtualclusters/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
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

export const serializeAws_restJson1ListJobRunsCommand = async (
  input: ListJobRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/jobruns";
  if (input.virtualClusterId !== undefined) {
    const labelValue: string = input.virtualClusterId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
    }
    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualClusterId.");
  }
  const query: any = {
    ...(input.createdBefore !== undefined && {
      createdBefore: (input.createdBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.createdAfter !== undefined && {
      createdAfter: (input.createdAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.states !== undefined && { states: (input.states || []).map((_entry) => _entry as any) }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListManagedEndpointsCommand = async (
  input: ListManagedEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/endpoints";
  if (input.virtualClusterId !== undefined) {
    const labelValue: string = input.virtualClusterId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
    }
    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualClusterId.");
  }
  const query: any = {
    ...(input.createdBefore !== undefined && {
      createdBefore: (input.createdBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.createdAfter !== undefined && {
      createdAfter: (input.createdAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.types !== undefined && { types: (input.types || []).map((_entry) => _entry as any) }),
    ...(input.states !== undefined && { states: (input.states || []).map((_entry) => _entry as any) }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
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

export const serializeAws_restJson1ListVirtualClustersCommand = async (
  input: ListVirtualClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/virtualclusters";
  const query: any = {
    ...(input.containerProviderId !== undefined && { containerProviderId: input.containerProviderId }),
    ...(input.containerProviderType !== undefined && { containerProviderType: input.containerProviderType }),
    ...(input.createdAfter !== undefined && {
      createdAfter: (input.createdAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.createdBefore !== undefined && {
      createdBefore: (input.createdBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.states !== undefined && { states: (input.states || []).map((_entry) => _entry as any) }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1StartJobRunCommand = async (
  input: StartJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/virtualclusters/{virtualClusterId}/jobruns";
  if (input.virtualClusterId !== undefined) {
    const labelValue: string = input.virtualClusterId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: virtualClusterId.");
    }
    resolvedPath = resolvedPath.replace("{virtualClusterId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: virtualClusterId.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.configurationOverrides !== undefined &&
      input.configurationOverrides !== null && {
        configurationOverrides: serializeAws_restJson1ConfigurationOverrides(input.configurationOverrides, context),
      }),
    ...(input.executionRoleArn !== undefined &&
      input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn }),
    ...(input.jobDriver !== undefined &&
      input.jobDriver !== null && { jobDriver: serializeAws_restJson1JobDriver(input.jobDriver, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.releaseLabel !== undefined && input.releaseLabel !== null && { releaseLabel: input.releaseLabel }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
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
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
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

export const deserializeAws_restJson1CancelJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelJobRunCommandError(output, context);
  }
  const contents: CancelJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    virtualClusterId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  if (data.virtualClusterId !== undefined && data.virtualClusterId !== null) {
    contents.virtualClusterId = __expectString(data.virtualClusterId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1CreateManagedEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateManagedEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateManagedEndpointCommandError(output, context);
  }
  const contents: CreateManagedEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    id: undefined,
    name: undefined,
    virtualClusterId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.virtualClusterId !== undefined && data.virtualClusterId !== null) {
    contents.virtualClusterId = __expectString(data.virtualClusterId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateManagedEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateManagedEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1CreateVirtualClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVirtualClusterCommandError(output, context);
  }
  const contents: CreateVirtualClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    id: undefined,
    name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateVirtualClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1DeleteManagedEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteManagedEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteManagedEndpointCommandError(output, context);
  }
  const contents: DeleteManagedEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    id: undefined,
    virtualClusterId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  if (data.virtualClusterId !== undefined && data.virtualClusterId !== null) {
    contents.virtualClusterId = __expectString(data.virtualClusterId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteManagedEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteManagedEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1DeleteVirtualClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVirtualClusterCommandError(output, context);
  }
  const contents: DeleteVirtualClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    id: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVirtualClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1DescribeJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobRunCommandError(output, context);
  }
  const contents: DescribeJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobRun: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobRun !== undefined && data.jobRun !== null) {
    contents.jobRun = deserializeAws_restJson1JobRun(data.jobRun, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1DescribeManagedEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeManagedEndpointCommandError(output, context);
  }
  const contents: DescribeManagedEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    endpoint: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endpoint !== undefined && data.endpoint !== null) {
    contents.endpoint = deserializeAws_restJson1Endpoint(data.endpoint, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeManagedEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1DescribeVirtualClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVirtualClusterCommandError(output, context);
  }
  const contents: DescribeVirtualClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    virtualCluster: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.virtualCluster !== undefined && data.virtualCluster !== null) {
    contents.virtualCluster = deserializeAws_restJson1VirtualCluster(data.virtualCluster, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeVirtualClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1ListJobRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobRunsCommandError(output, context);
  }
  const contents: ListJobRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobRuns: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobRuns !== undefined && data.jobRuns !== null) {
    contents.jobRuns = deserializeAws_restJson1JobRuns(data.jobRuns, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1ListManagedEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListManagedEndpointsCommandError(output, context);
  }
  const contents: ListManagedEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    endpoints: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endpoints !== undefined && data.endpoints !== null) {
    contents.endpoints = deserializeAws_restJson1Endpoints(data.endpoints, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListManagedEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1ListVirtualClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualClustersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVirtualClustersCommandError(output, context);
  }
  const contents: ListVirtualClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    virtualClusters: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.virtualClusters !== undefined && data.virtualClusters !== null) {
    contents.virtualClusters = deserializeAws_restJson1VirtualClusters(data.virtualClusters, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListVirtualClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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

export const deserializeAws_restJson1StartJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartJobRunCommandError(output, context);
  }
  const contents: StartJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    id: undefined,
    name: undefined,
    virtualClusterId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.id = __expectString(data.id);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = __expectString(data.name);
  }
  if (data.virtualClusterId !== undefined && data.virtualClusterId !== null) {
    contents.virtualClusterId = __expectString(data.virtualClusterId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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
    case "com.amazonaws.emrcontainers#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.emrcontainers#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.emrcontainers#ValidationException":
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
    contents.message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1CloudWatchMonitoringConfiguration = (
  input: CloudWatchMonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName !== undefined && input.logGroupName !== null && { logGroupName: input.logGroupName }),
    ...(input.logStreamNamePrefix !== undefined &&
      input.logStreamNamePrefix !== null && { logStreamNamePrefix: input.logStreamNamePrefix }),
  };
};

const serializeAws_restJson1Configuration = (input: Configuration, context: __SerdeContext): any => {
  return {
    ...(input.classification !== undefined &&
      input.classification !== null && { classification: input.classification }),
    ...(input.configurations !== undefined &&
      input.configurations !== null && {
        configurations: serializeAws_restJson1ConfigurationList(input.configurations, context),
      }),
    ...(input.properties !== undefined &&
      input.properties !== null && {
        properties: serializeAws_restJson1SensitivePropertiesMap(input.properties, context),
      }),
  };
};

const serializeAws_restJson1ConfigurationList = (input: Configuration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Configuration(entry, context);
    });
};

const serializeAws_restJson1ConfigurationOverrides = (input: ConfigurationOverrides, context: __SerdeContext): any => {
  return {
    ...(input.applicationConfiguration !== undefined &&
      input.applicationConfiguration !== null && {
        applicationConfiguration: serializeAws_restJson1ConfigurationList(input.applicationConfiguration, context),
      }),
    ...(input.monitoringConfiguration !== undefined &&
      input.monitoringConfiguration !== null && {
        monitoringConfiguration: serializeAws_restJson1MonitoringConfiguration(input.monitoringConfiguration, context),
      }),
  };
};

const serializeAws_restJson1ContainerInfo = (input: ContainerInfo, context: __SerdeContext): any => {
  return ContainerInfo.visit(input, {
    eksInfo: (value) => ({ eksInfo: serializeAws_restJson1EksInfo(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ContainerProvider = (input: ContainerProvider, context: __SerdeContext): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.info !== undefined &&
      input.info !== null && { info: serializeAws_restJson1ContainerInfo(input.info, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1EksInfo = (input: EksInfo, context: __SerdeContext): any => {
  return {
    ...(input.namespace !== undefined && input.namespace !== null && { namespace: input.namespace }),
  };
};

const serializeAws_restJson1EntryPointArguments = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1JobDriver = (input: JobDriver, context: __SerdeContext): any => {
  return {
    ...(input.sparkSubmitJobDriver !== undefined &&
      input.sparkSubmitJobDriver !== null && {
        sparkSubmitJobDriver: serializeAws_restJson1SparkSubmitJobDriver(input.sparkSubmitJobDriver, context),
      }),
  };
};

const serializeAws_restJson1MonitoringConfiguration = (
  input: MonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchMonitoringConfiguration !== undefined &&
      input.cloudWatchMonitoringConfiguration !== null && {
        cloudWatchMonitoringConfiguration: serializeAws_restJson1CloudWatchMonitoringConfiguration(
          input.cloudWatchMonitoringConfiguration,
          context
        ),
      }),
    ...(input.persistentAppUI !== undefined &&
      input.persistentAppUI !== null && { persistentAppUI: input.persistentAppUI }),
    ...(input.s3MonitoringConfiguration !== undefined &&
      input.s3MonitoringConfiguration !== null && {
        s3MonitoringConfiguration: serializeAws_restJson1S3MonitoringConfiguration(
          input.s3MonitoringConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_restJson1S3MonitoringConfiguration = (
  input: S3MonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.logUri !== undefined && input.logUri !== null && { logUri: input.logUri }),
  };
};

const serializeAws_restJson1SensitivePropertiesMap = (
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

const serializeAws_restJson1SparkSubmitJobDriver = (input: SparkSubmitJobDriver, context: __SerdeContext): any => {
  return {
    ...(input.entryPoint !== undefined && input.entryPoint !== null && { entryPoint: input.entryPoint }),
    ...(input.entryPointArguments !== undefined &&
      input.entryPointArguments !== null && {
        entryPointArguments: serializeAws_restJson1EntryPointArguments(input.entryPointArguments, context),
      }),
    ...(input.sparkSubmitParameters !== undefined &&
      input.sparkSubmitParameters !== null && { sparkSubmitParameters: input.sparkSubmitParameters }),
  };
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

const deserializeAws_restJson1CloudWatchMonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): CloudWatchMonitoringConfiguration => {
  return {
    logGroupName: __expectString(output.logGroupName),
    logStreamNamePrefix: __expectString(output.logStreamNamePrefix),
  } as any;
};

const deserializeAws_restJson1Configuration = (output: any, context: __SerdeContext): Configuration => {
  return {
    classification: __expectString(output.classification),
    configurations:
      output.configurations !== undefined && output.configurations !== null
        ? deserializeAws_restJson1ConfigurationList(output.configurations, context)
        : undefined,
    properties:
      output.properties !== undefined && output.properties !== null
        ? deserializeAws_restJson1SensitivePropertiesMap(output.properties, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConfigurationList = (output: any, context: __SerdeContext): Configuration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Configuration(entry, context);
    });
};

const deserializeAws_restJson1ConfigurationOverrides = (
  output: any,
  context: __SerdeContext
): ConfigurationOverrides => {
  return {
    applicationConfiguration:
      output.applicationConfiguration !== undefined && output.applicationConfiguration !== null
        ? deserializeAws_restJson1ConfigurationList(output.applicationConfiguration, context)
        : undefined,
    monitoringConfiguration:
      output.monitoringConfiguration !== undefined && output.monitoringConfiguration !== null
        ? deserializeAws_restJson1MonitoringConfiguration(output.monitoringConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerInfo = (output: any, context: __SerdeContext): ContainerInfo => {
  if (output.eksInfo !== undefined && output.eksInfo !== null) {
    return {
      eksInfo: deserializeAws_restJson1EksInfo(output.eksInfo, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ContainerProvider = (output: any, context: __SerdeContext): ContainerProvider => {
  return {
    id: __expectString(output.id),
    info:
      output.info !== undefined && output.info !== null
        ? deserializeAws_restJson1ContainerInfo(output.info, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1EksInfo = (output: any, context: __SerdeContext): EksInfo => {
  return {
    namespace: __expectString(output.namespace),
  } as any;
};

const deserializeAws_restJson1Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    arn: __expectString(output.arn),
    certificateArn: __expectString(output.certificateArn),
    configurationOverrides:
      output.configurationOverrides !== undefined && output.configurationOverrides !== null
        ? deserializeAws_restJson1ConfigurationOverrides(output.configurationOverrides, context)
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    executionRoleArn: __expectString(output.executionRoleArn),
    failureReason: __expectString(output.failureReason),
    id: __expectString(output.id),
    name: __expectString(output.name),
    releaseLabel: __expectString(output.releaseLabel),
    securityGroup: __expectString(output.securityGroup),
    serverUrl: __expectString(output.serverUrl),
    state: __expectString(output.state),
    stateDetails: __expectString(output.stateDetails),
    subnetIds:
      output.subnetIds !== undefined && output.subnetIds !== null
        ? deserializeAws_restJson1SubnetIds(output.subnetIds, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    type: __expectString(output.type),
    virtualClusterId: __expectString(output.virtualClusterId),
  } as any;
};

const deserializeAws_restJson1Endpoints = (output: any, context: __SerdeContext): Endpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Endpoint(entry, context);
    });
};

const deserializeAws_restJson1EntryPointArguments = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1JobDriver = (output: any, context: __SerdeContext): JobDriver => {
  return {
    sparkSubmitJobDriver:
      output.sparkSubmitJobDriver !== undefined && output.sparkSubmitJobDriver !== null
        ? deserializeAws_restJson1SparkSubmitJobDriver(output.sparkSubmitJobDriver, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobRun = (output: any, context: __SerdeContext): JobRun => {
  return {
    arn: __expectString(output.arn),
    clientToken: __expectString(output.clientToken),
    configurationOverrides:
      output.configurationOverrides !== undefined && output.configurationOverrides !== null
        ? deserializeAws_restJson1ConfigurationOverrides(output.configurationOverrides, context)
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdBy: __expectString(output.createdBy),
    executionRoleArn: __expectString(output.executionRoleArn),
    failureReason: __expectString(output.failureReason),
    finishedAt:
      output.finishedAt !== undefined && output.finishedAt !== null
        ? new Date(Math.round(output.finishedAt * 1000))
        : undefined,
    id: __expectString(output.id),
    jobDriver:
      output.jobDriver !== undefined && output.jobDriver !== null
        ? deserializeAws_restJson1JobDriver(output.jobDriver, context)
        : undefined,
    name: __expectString(output.name),
    releaseLabel: __expectString(output.releaseLabel),
    state: __expectString(output.state),
    stateDetails: __expectString(output.stateDetails),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    virtualClusterId: __expectString(output.virtualClusterId),
  } as any;
};

const deserializeAws_restJson1JobRuns = (output: any, context: __SerdeContext): JobRun[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobRun(entry, context);
    });
};

const deserializeAws_restJson1MonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): MonitoringConfiguration => {
  return {
    cloudWatchMonitoringConfiguration:
      output.cloudWatchMonitoringConfiguration !== undefined && output.cloudWatchMonitoringConfiguration !== null
        ? deserializeAws_restJson1CloudWatchMonitoringConfiguration(output.cloudWatchMonitoringConfiguration, context)
        : undefined,
    persistentAppUI: __expectString(output.persistentAppUI),
    s3MonitoringConfiguration:
      output.s3MonitoringConfiguration !== undefined && output.s3MonitoringConfiguration !== null
        ? deserializeAws_restJson1S3MonitoringConfiguration(output.s3MonitoringConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3MonitoringConfiguration = (
  output: any,
  context: __SerdeContext
): S3MonitoringConfiguration => {
  return {
    logUri: __expectString(output.logUri),
  } as any;
};

const deserializeAws_restJson1SensitivePropertiesMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
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

const deserializeAws_restJson1SparkSubmitJobDriver = (output: any, context: __SerdeContext): SparkSubmitJobDriver => {
  return {
    entryPoint: __expectString(output.entryPoint),
    entryPointArguments:
      output.entryPointArguments !== undefined && output.entryPointArguments !== null
        ? deserializeAws_restJson1EntryPointArguments(output.entryPointArguments, context)
        : undefined,
    sparkSubmitParameters: __expectString(output.sparkSubmitParameters),
  } as any;
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

const deserializeAws_restJson1VirtualCluster = (output: any, context: __SerdeContext): VirtualCluster => {
  return {
    arn: __expectString(output.arn),
    containerProvider:
      output.containerProvider !== undefined && output.containerProvider !== null
        ? deserializeAws_restJson1ContainerProvider(output.containerProvider, context)
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    state: __expectString(output.state),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VirtualClusters = (output: any, context: __SerdeContext): VirtualCluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VirtualCluster(entry, context);
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
