import { ConfigureLogsCommandInput, ConfigureLogsCommandOutput } from "../commands/ConfigureLogsCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
import { CreateHarvestJobCommandInput, CreateHarvestJobCommandOutput } from "../commands/CreateHarvestJobCommand";
import {
  CreateOriginEndpointCommandInput,
  CreateOriginEndpointCommandOutput,
} from "../commands/CreateOriginEndpointCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "../commands/DeleteChannelCommand";
import {
  DeleteOriginEndpointCommandInput,
  DeleteOriginEndpointCommandOutput,
} from "../commands/DeleteOriginEndpointCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "../commands/DescribeChannelCommand";
import { DescribeHarvestJobCommandInput, DescribeHarvestJobCommandOutput } from "../commands/DescribeHarvestJobCommand";
import {
  DescribeOriginEndpointCommandInput,
  DescribeOriginEndpointCommandOutput,
} from "../commands/DescribeOriginEndpointCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import { ListHarvestJobsCommandInput, ListHarvestJobsCommandOutput } from "../commands/ListHarvestJobsCommand";
import {
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput,
} from "../commands/ListOriginEndpointsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RotateChannelCredentialsCommandInput,
  RotateChannelCredentialsCommandOutput,
} from "../commands/RotateChannelCredentialsCommand";
import {
  RotateIngestEndpointCredentialsCommandInput,
  RotateIngestEndpointCredentialsCommandOutput,
} from "../commands/RotateIngestEndpointCredentialsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "../commands/UpdateChannelCommand";
import {
  UpdateOriginEndpointCommandInput,
  UpdateOriginEndpointCommandOutput,
} from "../commands/UpdateOriginEndpointCommand";
import {
  Authorization,
  Channel,
  CmafEncryption,
  CmafPackage,
  CmafPackageCreateOrUpdateParameters,
  DashEncryption,
  DashPackage,
  EgressAccessLogs,
  EncryptionContractConfiguration,
  ForbiddenException,
  HarvestJob,
  HlsEncryption,
  HlsIngest,
  HlsManifest,
  HlsManifestCreateOrUpdateParameters,
  HlsPackage,
  IngestEndpoint,
  IngressAccessLogs,
  InternalServerErrorException,
  MssEncryption,
  MssPackage,
  NotFoundException,
  OriginEndpoint,
  S3Destination,
  ServiceUnavailableException,
  SpekeKeyProvider,
  StreamSelection,
  TooManyRequestsException,
  UnprocessableEntityException,
  __AdTriggersElement,
  __PeriodTriggersElement,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
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

export const serializeAws_restJson1ConfigureLogsCommand = async (
  input: ConfigureLogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{Id}/configure_logs";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.EgressAccessLogs !== undefined &&
      input.EgressAccessLogs !== null && {
        egressAccessLogs: serializeAws_restJson1EgressAccessLogs(input.EgressAccessLogs, context),
      }),
    ...(input.IngressAccessLogs !== undefined &&
      input.IngressAccessLogs !== null && {
        ingressAccessLogs: serializeAws_restJson1IngressAccessLogs(input.IngressAccessLogs, context),
      }),
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

export const serializeAws_restJson1CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.Id !== undefined && input.Id !== null && { id: input.Id }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1CreateHarvestJobCommand = async (
  input: CreateHarvestJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/harvest_jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime !== undefined && input.EndTime !== null && { endTime: input.EndTime }),
    ...(input.Id !== undefined && input.Id !== null && { id: input.Id }),
    ...(input.OriginEndpointId !== undefined &&
      input.OriginEndpointId !== null && { originEndpointId: input.OriginEndpointId }),
    ...(input.S3Destination !== undefined &&
      input.S3Destination !== null && {
        s3Destination: serializeAws_restJson1S3Destination(input.S3Destination, context),
      }),
    ...(input.StartTime !== undefined && input.StartTime !== null && { startTime: input.StartTime }),
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

export const serializeAws_restJson1CreateOriginEndpointCommand = async (
  input: CreateOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/origin_endpoints";
  let body: any;
  body = JSON.stringify({
    ...(input.Authorization !== undefined &&
      input.Authorization !== null && {
        authorization: serializeAws_restJson1Authorization(input.Authorization, context),
      }),
    ...(input.ChannelId !== undefined && input.ChannelId !== null && { channelId: input.ChannelId }),
    ...(input.CmafPackage !== undefined &&
      input.CmafPackage !== null && {
        cmafPackage: serializeAws_restJson1CmafPackageCreateOrUpdateParameters(input.CmafPackage, context),
      }),
    ...(input.DashPackage !== undefined &&
      input.DashPackage !== null && { dashPackage: serializeAws_restJson1DashPackage(input.DashPackage, context) }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.HlsPackage !== undefined &&
      input.HlsPackage !== null && { hlsPackage: serializeAws_restJson1HlsPackage(input.HlsPackage, context) }),
    ...(input.Id !== undefined && input.Id !== null && { id: input.Id }),
    ...(input.ManifestName !== undefined && input.ManifestName !== null && { manifestName: input.ManifestName }),
    ...(input.MssPackage !== undefined &&
      input.MssPackage !== null && { mssPackage: serializeAws_restJson1MssPackage(input.MssPackage, context) }),
    ...(input.Origination !== undefined && input.Origination !== null && { origination: input.Origination }),
    ...(input.StartoverWindowSeconds !== undefined &&
      input.StartoverWindowSeconds !== null && { startoverWindowSeconds: input.StartoverWindowSeconds }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
    ...(input.TimeDelaySeconds !== undefined &&
      input.TimeDelaySeconds !== null && { timeDelaySeconds: input.TimeDelaySeconds }),
    ...(input.Whitelist !== undefined &&
      input.Whitelist !== null && { whitelist: serializeAws_restJson1__listOf__string(input.Whitelist, context) }),
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

export const serializeAws_restJson1DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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

export const serializeAws_restJson1DeleteOriginEndpointCommand = async (
  input: DeleteOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/origin_endpoints/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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

export const serializeAws_restJson1DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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

export const serializeAws_restJson1DescribeHarvestJobCommand = async (
  input: DescribeHarvestJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/harvest_jobs/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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

export const serializeAws_restJson1DescribeOriginEndpointCommand = async (
  input: DescribeOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/origin_endpoints/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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

export const serializeAws_restJson1ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListHarvestJobsCommand = async (
  input: ListHarvestJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/harvest_jobs";
  const query: any = {
    ...(input.IncludeChannelId !== undefined && { includeChannelId: input.IncludeChannelId }),
    ...(input.IncludeStatus !== undefined && { includeStatus: input.IncludeStatus }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListOriginEndpointsCommand = async (
  input: ListOriginEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/origin_endpoints";
  const query: any = {
    ...(input.ChannelId !== undefined && { channelId: input.ChannelId }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1RotateChannelCredentialsCommand = async (
  input: RotateChannelCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{Id}/credentials";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
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

export const serializeAws_restJson1RotateIngestEndpointCredentialsCommand = async (
  input: RotateIngestEndpointCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/channels/{Id}/ingest_endpoints/{IngestEndpointId}/credentials";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  if (input.IngestEndpointId !== undefined) {
    const labelValue: string = input.IngestEndpointId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IngestEndpointId.");
    }
    resolvedPath = resolvedPath.replace("{IngestEndpointId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IngestEndpointId.");
  }
  let body: any;
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
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/channels/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
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

export const serializeAws_restJson1UpdateOriginEndpointCommand = async (
  input: UpdateOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/origin_endpoints/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Authorization !== undefined &&
      input.Authorization !== null && {
        authorization: serializeAws_restJson1Authorization(input.Authorization, context),
      }),
    ...(input.CmafPackage !== undefined &&
      input.CmafPackage !== null && {
        cmafPackage: serializeAws_restJson1CmafPackageCreateOrUpdateParameters(input.CmafPackage, context),
      }),
    ...(input.DashPackage !== undefined &&
      input.DashPackage !== null && { dashPackage: serializeAws_restJson1DashPackage(input.DashPackage, context) }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.HlsPackage !== undefined &&
      input.HlsPackage !== null && { hlsPackage: serializeAws_restJson1HlsPackage(input.HlsPackage, context) }),
    ...(input.ManifestName !== undefined && input.ManifestName !== null && { manifestName: input.ManifestName }),
    ...(input.MssPackage !== undefined &&
      input.MssPackage !== null && { mssPackage: serializeAws_restJson1MssPackage(input.MssPackage, context) }),
    ...(input.Origination !== undefined && input.Origination !== null && { origination: input.Origination }),
    ...(input.StartoverWindowSeconds !== undefined &&
      input.StartoverWindowSeconds !== null && { startoverWindowSeconds: input.StartoverWindowSeconds }),
    ...(input.TimeDelaySeconds !== undefined &&
      input.TimeDelaySeconds !== null && { timeDelaySeconds: input.TimeDelaySeconds }),
    ...(input.Whitelist !== undefined &&
      input.Whitelist !== null && { whitelist: serializeAws_restJson1__listOf__string(input.Whitelist, context) }),
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

export const deserializeAws_restJson1ConfigureLogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ConfigureLogsCommandError(output, context);
  }
  const contents: ConfigureLogsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Description: undefined,
    EgressAccessLogs: undefined,
    HlsIngest: undefined,
    Id: undefined,
    IngressAccessLogs: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs !== undefined && data.ingressAccessLogs !== null) {
    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ConfigureLogsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureLogsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChannelCommandError(output, context);
  }
  const contents: CreateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Description: undefined,
    EgressAccessLogs: undefined,
    HlsIngest: undefined,
    Id: undefined,
    IngressAccessLogs: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs !== undefined && data.ingressAccessLogs !== null) {
    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateHarvestJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHarvestJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateHarvestJobCommandError(output, context);
  }
  const contents: CreateHarvestJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    ChannelId: undefined,
    CreatedAt: undefined,
    EndTime: undefined,
    Id: undefined,
    OriginEndpointId: undefined,
    S3Destination: undefined,
    StartTime: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.channelId !== undefined && data.channelId !== null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.endTime !== undefined && data.endTime !== null) {
    contents.EndTime = __expectString(data.endTime);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.originEndpointId !== undefined && data.originEndpointId !== null) {
    contents.OriginEndpointId = __expectString(data.originEndpointId);
  }
  if (data.s3Destination !== undefined && data.s3Destination !== null) {
    contents.S3Destination = deserializeAws_restJson1S3Destination(data.s3Destination, context);
  }
  if (data.startTime !== undefined && data.startTime !== null) {
    contents.StartTime = __expectString(data.startTime);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateHarvestJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHarvestJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateOriginEndpointCommandError(output, context);
  }
  const contents: CreateOriginEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Authorization: undefined,
    ChannelId: undefined,
    CmafPackage: undefined,
    DashPackage: undefined,
    Description: undefined,
    HlsPackage: undefined,
    Id: undefined,
    ManifestName: undefined,
    MssPackage: undefined,
    Origination: undefined,
    StartoverWindowSeconds: undefined,
    Tags: undefined,
    TimeDelaySeconds: undefined,
    Url: undefined,
    Whitelist: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authorization !== undefined && data.authorization !== null) {
    contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
  }
  if (data.channelId !== undefined && data.channelId !== null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
    contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
  }
  if (data.dashPackage !== undefined && data.dashPackage !== null) {
    contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
    contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.manifestName !== undefined && data.manifestName !== null) {
    contents.ManifestName = __expectString(data.manifestName);
  }
  if (data.mssPackage !== undefined && data.mssPackage !== null) {
    contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
  }
  if (data.origination !== undefined && data.origination !== null) {
    contents.Origination = __expectString(data.origination);
  }
  if (data.startoverWindowSeconds !== undefined && data.startoverWindowSeconds !== null) {
    contents.StartoverWindowSeconds = __expectInt(data.startoverWindowSeconds);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.timeDelaySeconds !== undefined && data.timeDelaySeconds !== null) {
    contents.TimeDelaySeconds = __expectInt(data.timeDelaySeconds);
  }
  if (data.url !== undefined && data.url !== null) {
    contents.Url = __expectString(data.url);
  }
  if (data.whitelist !== undefined && data.whitelist !== null) {
    contents.Whitelist = deserializeAws_restJson1__listOf__string(data.whitelist, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateOriginEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteChannelCommandError(output, context);
  }
  const contents: DeleteChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteOriginEndpointCommandError(output, context);
  }
  const contents: DeleteOriginEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteOriginEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeChannelCommandError(output, context);
  }
  const contents: DescribeChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Description: undefined,
    EgressAccessLogs: undefined,
    HlsIngest: undefined,
    Id: undefined,
    IngressAccessLogs: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs !== undefined && data.ingressAccessLogs !== null) {
    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeHarvestJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHarvestJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeHarvestJobCommandError(output, context);
  }
  const contents: DescribeHarvestJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    ChannelId: undefined,
    CreatedAt: undefined,
    EndTime: undefined,
    Id: undefined,
    OriginEndpointId: undefined,
    S3Destination: undefined,
    StartTime: undefined,
    Status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.channelId !== undefined && data.channelId !== null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.CreatedAt = __expectString(data.createdAt);
  }
  if (data.endTime !== undefined && data.endTime !== null) {
    contents.EndTime = __expectString(data.endTime);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.originEndpointId !== undefined && data.originEndpointId !== null) {
    contents.OriginEndpointId = __expectString(data.originEndpointId);
  }
  if (data.s3Destination !== undefined && data.s3Destination !== null) {
    contents.S3Destination = deserializeAws_restJson1S3Destination(data.s3Destination, context);
  }
  if (data.startTime !== undefined && data.startTime !== null) {
    contents.StartTime = __expectString(data.startTime);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeHarvestJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHarvestJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOriginEndpointCommandError(output, context);
  }
  const contents: DescribeOriginEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Authorization: undefined,
    ChannelId: undefined,
    CmafPackage: undefined,
    DashPackage: undefined,
    Description: undefined,
    HlsPackage: undefined,
    Id: undefined,
    ManifestName: undefined,
    MssPackage: undefined,
    Origination: undefined,
    StartoverWindowSeconds: undefined,
    Tags: undefined,
    TimeDelaySeconds: undefined,
    Url: undefined,
    Whitelist: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authorization !== undefined && data.authorization !== null) {
    contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
  }
  if (data.channelId !== undefined && data.channelId !== null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
    contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
  }
  if (data.dashPackage !== undefined && data.dashPackage !== null) {
    contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
    contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.manifestName !== undefined && data.manifestName !== null) {
    contents.ManifestName = __expectString(data.manifestName);
  }
  if (data.mssPackage !== undefined && data.mssPackage !== null) {
    contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
  }
  if (data.origination !== undefined && data.origination !== null) {
    contents.Origination = __expectString(data.origination);
  }
  if (data.startoverWindowSeconds !== undefined && data.startoverWindowSeconds !== null) {
    contents.StartoverWindowSeconds = __expectInt(data.startoverWindowSeconds);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.timeDelaySeconds !== undefined && data.timeDelaySeconds !== null) {
    contents.TimeDelaySeconds = __expectInt(data.timeDelaySeconds);
  }
  if (data.url !== undefined && data.url !== null) {
    contents.Url = __expectString(data.url);
  }
  if (data.whitelist !== undefined && data.whitelist !== null) {
    contents.Whitelist = deserializeAws_restJson1__listOf__string(data.whitelist, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeOriginEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOriginEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChannelsCommandError(output, context);
  }
  const contents: ListChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Channels: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.channels !== undefined && data.channels !== null) {
    contents.Channels = deserializeAws_restJson1__listOfChannel(data.channels, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListHarvestJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHarvestJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListHarvestJobsCommandError(output, context);
  }
  const contents: ListHarvestJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    HarvestJobs: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.harvestJobs !== undefined && data.harvestJobs !== null) {
    contents.HarvestJobs = deserializeAws_restJson1__listOfHarvestJob(data.harvestJobs, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListHarvestJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHarvestJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListOriginEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOriginEndpointsCommandError(output, context);
  }
  const contents: ListOriginEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    OriginEndpoints: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.originEndpoints !== undefined && data.originEndpoints !== null) {
    contents.OriginEndpoints = deserializeAws_restJson1__listOfOriginEndpoint(data.originEndpoints, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListOriginEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
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

export const deserializeAws_restJson1RotateChannelCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateChannelCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RotateChannelCredentialsCommandError(output, context);
  }
  const contents: RotateChannelCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Description: undefined,
    EgressAccessLogs: undefined,
    HlsIngest: undefined,
    Id: undefined,
    IngressAccessLogs: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs !== undefined && data.ingressAccessLogs !== null) {
    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RotateChannelCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateChannelCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1RotateIngestEndpointCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateIngestEndpointCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RotateIngestEndpointCredentialsCommandError(output, context);
  }
  const contents: RotateIngestEndpointCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Description: undefined,
    EgressAccessLogs: undefined,
    HlsIngest: undefined,
    Id: undefined,
    IngressAccessLogs: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs !== undefined && data.ingressAccessLogs !== null) {
    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RotateIngestEndpointCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateIngestEndpointCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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

export const deserializeAws_restJson1UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChannelCommandError(output, context);
  }
  const contents: UpdateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Description: undefined,
    EgressAccessLogs: undefined,
    HlsIngest: undefined,
    Id: undefined,
    IngressAccessLogs: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.egressAccessLogs !== undefined && data.egressAccessLogs !== null) {
    contents.EgressAccessLogs = deserializeAws_restJson1EgressAccessLogs(data.egressAccessLogs, context);
  }
  if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
    contents.HlsIngest = deserializeAws_restJson1HlsIngest(data.hlsIngest, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.ingressAccessLogs !== undefined && data.ingressAccessLogs !== null) {
    contents.IngressAccessLogs = deserializeAws_restJson1IngressAccessLogs(data.ingressAccessLogs, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateOriginEndpointCommandError(output, context);
  }
  const contents: UpdateOriginEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Authorization: undefined,
    ChannelId: undefined,
    CmafPackage: undefined,
    DashPackage: undefined,
    Description: undefined,
    HlsPackage: undefined,
    Id: undefined,
    ManifestName: undefined,
    MssPackage: undefined,
    Origination: undefined,
    StartoverWindowSeconds: undefined,
    Tags: undefined,
    TimeDelaySeconds: undefined,
    Url: undefined,
    Whitelist: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authorization !== undefined && data.authorization !== null) {
    contents.Authorization = deserializeAws_restJson1Authorization(data.authorization, context);
  }
  if (data.channelId !== undefined && data.channelId !== null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
    contents.CmafPackage = deserializeAws_restJson1CmafPackage(data.cmafPackage, context);
  }
  if (data.dashPackage !== undefined && data.dashPackage !== null) {
    contents.DashPackage = deserializeAws_restJson1DashPackage(data.dashPackage, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
    contents.HlsPackage = deserializeAws_restJson1HlsPackage(data.hlsPackage, context);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.manifestName !== undefined && data.manifestName !== null) {
    contents.ManifestName = __expectString(data.manifestName);
  }
  if (data.mssPackage !== undefined && data.mssPackage !== null) {
    contents.MssPackage = deserializeAws_restJson1MssPackage(data.mssPackage, context);
  }
  if (data.origination !== undefined && data.origination !== null) {
    contents.Origination = __expectString(data.origination);
  }
  if (data.startoverWindowSeconds !== undefined && data.startoverWindowSeconds !== null) {
    contents.StartoverWindowSeconds = __expectInt(data.startoverWindowSeconds);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.timeDelaySeconds !== undefined && data.timeDelaySeconds !== null) {
    contents.TimeDelaySeconds = __expectInt(data.timeDelaySeconds);
  }
  if (data.url !== undefined && data.url !== null) {
    contents.Url = __expectString(data.url);
  }
  if (data.whitelist !== undefined && data.whitelist !== null) {
    contents.Whitelist = deserializeAws_restJson1__listOf__string(data.whitelist, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateOriginEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1UnprocessableEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: UnprocessableEntityException = {
    name: "UnprocessableEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1__listOf__PeriodTriggersElement = (
  input: (__PeriodTriggersElement | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOfHlsManifestCreateOrUpdateParameters = (
  input: HlsManifestCreateOrUpdateParameters[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1HlsManifestCreateOrUpdateParameters(entry, context);
    });
};

const serializeAws_restJson1__mapOf__string = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1AdTriggers = (input: (__AdTriggersElement | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Authorization = (input: Authorization, context: __SerdeContext): any => {
  return {
    ...(input.CdnIdentifierSecret !== undefined &&
      input.CdnIdentifierSecret !== null && { cdnIdentifierSecret: input.CdnIdentifierSecret }),
    ...(input.SecretsRoleArn !== undefined &&
      input.SecretsRoleArn !== null && { secretsRoleArn: input.SecretsRoleArn }),
  };
};

const serializeAws_restJson1CmafEncryption = (input: CmafEncryption, context: __SerdeContext): any => {
  return {
    ...(input.ConstantInitializationVector !== undefined &&
      input.ConstantInitializationVector !== null && {
        constantInitializationVector: input.ConstantInitializationVector,
      }),
    ...(input.KeyRotationIntervalSeconds !== undefined &&
      input.KeyRotationIntervalSeconds !== null && { keyRotationIntervalSeconds: input.KeyRotationIntervalSeconds }),
    ...(input.SpekeKeyProvider !== undefined &&
      input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
      }),
  };
};

const serializeAws_restJson1CmafPackageCreateOrUpdateParameters = (
  input: CmafPackageCreateOrUpdateParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && { encryption: serializeAws_restJson1CmafEncryption(input.Encryption, context) }),
    ...(input.HlsManifests !== undefined &&
      input.HlsManifests !== null && {
        hlsManifests: serializeAws_restJson1__listOfHlsManifestCreateOrUpdateParameters(input.HlsManifests, context),
      }),
    ...(input.SegmentDurationSeconds !== undefined &&
      input.SegmentDurationSeconds !== null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.SegmentPrefix !== undefined && input.SegmentPrefix !== null && { segmentPrefix: input.SegmentPrefix }),
    ...(input.StreamSelection !== undefined &&
      input.StreamSelection !== null && {
        streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
      }),
  };
};

const serializeAws_restJson1DashEncryption = (input: DashEncryption, context: __SerdeContext): any => {
  return {
    ...(input.KeyRotationIntervalSeconds !== undefined &&
      input.KeyRotationIntervalSeconds !== null && { keyRotationIntervalSeconds: input.KeyRotationIntervalSeconds }),
    ...(input.SpekeKeyProvider !== undefined &&
      input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
      }),
  };
};

const serializeAws_restJson1DashPackage = (input: DashPackage, context: __SerdeContext): any => {
  return {
    ...(input.AdTriggers !== undefined &&
      input.AdTriggers !== null && { adTriggers: serializeAws_restJson1AdTriggers(input.AdTriggers, context) }),
    ...(input.AdsOnDeliveryRestrictions !== undefined &&
      input.AdsOnDeliveryRestrictions !== null && { adsOnDeliveryRestrictions: input.AdsOnDeliveryRestrictions }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && { encryption: serializeAws_restJson1DashEncryption(input.Encryption, context) }),
    ...(input.ManifestLayout !== undefined &&
      input.ManifestLayout !== null && { manifestLayout: input.ManifestLayout }),
    ...(input.ManifestWindowSeconds !== undefined &&
      input.ManifestWindowSeconds !== null && { manifestWindowSeconds: input.ManifestWindowSeconds }),
    ...(input.MinBufferTimeSeconds !== undefined &&
      input.MinBufferTimeSeconds !== null && { minBufferTimeSeconds: input.MinBufferTimeSeconds }),
    ...(input.MinUpdatePeriodSeconds !== undefined &&
      input.MinUpdatePeriodSeconds !== null && { minUpdatePeriodSeconds: input.MinUpdatePeriodSeconds }),
    ...(input.PeriodTriggers !== undefined &&
      input.PeriodTriggers !== null && {
        periodTriggers: serializeAws_restJson1__listOf__PeriodTriggersElement(input.PeriodTriggers, context),
      }),
    ...(input.Profile !== undefined && input.Profile !== null && { profile: input.Profile }),
    ...(input.SegmentDurationSeconds !== undefined &&
      input.SegmentDurationSeconds !== null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.SegmentTemplateFormat !== undefined &&
      input.SegmentTemplateFormat !== null && { segmentTemplateFormat: input.SegmentTemplateFormat }),
    ...(input.StreamSelection !== undefined &&
      input.StreamSelection !== null && {
        streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
      }),
    ...(input.SuggestedPresentationDelaySeconds !== undefined &&
      input.SuggestedPresentationDelaySeconds !== null && {
        suggestedPresentationDelaySeconds: input.SuggestedPresentationDelaySeconds,
      }),
    ...(input.UtcTiming !== undefined && input.UtcTiming !== null && { utcTiming: input.UtcTiming }),
    ...(input.UtcTimingUri !== undefined && input.UtcTimingUri !== null && { utcTimingUri: input.UtcTimingUri }),
  };
};

const serializeAws_restJson1EgressAccessLogs = (input: EgressAccessLogs, context: __SerdeContext): any => {
  return {
    ...(input.LogGroupName !== undefined && input.LogGroupName !== null && { logGroupName: input.LogGroupName }),
  };
};

const serializeAws_restJson1EncryptionContractConfiguration = (
  input: EncryptionContractConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.PresetSpeke20Audio !== undefined &&
      input.PresetSpeke20Audio !== null && { presetSpeke20Audio: input.PresetSpeke20Audio }),
    ...(input.PresetSpeke20Video !== undefined &&
      input.PresetSpeke20Video !== null && { presetSpeke20Video: input.PresetSpeke20Video }),
  };
};

const serializeAws_restJson1HlsEncryption = (input: HlsEncryption, context: __SerdeContext): any => {
  return {
    ...(input.ConstantInitializationVector !== undefined &&
      input.ConstantInitializationVector !== null && {
        constantInitializationVector: input.ConstantInitializationVector,
      }),
    ...(input.EncryptionMethod !== undefined &&
      input.EncryptionMethod !== null && { encryptionMethod: input.EncryptionMethod }),
    ...(input.KeyRotationIntervalSeconds !== undefined &&
      input.KeyRotationIntervalSeconds !== null && { keyRotationIntervalSeconds: input.KeyRotationIntervalSeconds }),
    ...(input.RepeatExtXKey !== undefined && input.RepeatExtXKey !== null && { repeatExtXKey: input.RepeatExtXKey }),
    ...(input.SpekeKeyProvider !== undefined &&
      input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
      }),
  };
};

const serializeAws_restJson1HlsManifestCreateOrUpdateParameters = (
  input: HlsManifestCreateOrUpdateParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdMarkers !== undefined && input.AdMarkers !== null && { adMarkers: input.AdMarkers }),
    ...(input.AdTriggers !== undefined &&
      input.AdTriggers !== null && { adTriggers: serializeAws_restJson1AdTriggers(input.AdTriggers, context) }),
    ...(input.AdsOnDeliveryRestrictions !== undefined &&
      input.AdsOnDeliveryRestrictions !== null && { adsOnDeliveryRestrictions: input.AdsOnDeliveryRestrictions }),
    ...(input.Id !== undefined && input.Id !== null && { id: input.Id }),
    ...(input.IncludeIframeOnlyStream !== undefined &&
      input.IncludeIframeOnlyStream !== null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream }),
    ...(input.ManifestName !== undefined && input.ManifestName !== null && { manifestName: input.ManifestName }),
    ...(input.PlaylistType !== undefined && input.PlaylistType !== null && { playlistType: input.PlaylistType }),
    ...(input.PlaylistWindowSeconds !== undefined &&
      input.PlaylistWindowSeconds !== null && { playlistWindowSeconds: input.PlaylistWindowSeconds }),
    ...(input.ProgramDateTimeIntervalSeconds !== undefined &&
      input.ProgramDateTimeIntervalSeconds !== null && {
        programDateTimeIntervalSeconds: input.ProgramDateTimeIntervalSeconds,
      }),
  };
};

const serializeAws_restJson1HlsPackage = (input: HlsPackage, context: __SerdeContext): any => {
  return {
    ...(input.AdMarkers !== undefined && input.AdMarkers !== null && { adMarkers: input.AdMarkers }),
    ...(input.AdTriggers !== undefined &&
      input.AdTriggers !== null && { adTriggers: serializeAws_restJson1AdTriggers(input.AdTriggers, context) }),
    ...(input.AdsOnDeliveryRestrictions !== undefined &&
      input.AdsOnDeliveryRestrictions !== null && { adsOnDeliveryRestrictions: input.AdsOnDeliveryRestrictions }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && { encryption: serializeAws_restJson1HlsEncryption(input.Encryption, context) }),
    ...(input.IncludeIframeOnlyStream !== undefined &&
      input.IncludeIframeOnlyStream !== null && { includeIframeOnlyStream: input.IncludeIframeOnlyStream }),
    ...(input.PlaylistType !== undefined && input.PlaylistType !== null && { playlistType: input.PlaylistType }),
    ...(input.PlaylistWindowSeconds !== undefined &&
      input.PlaylistWindowSeconds !== null && { playlistWindowSeconds: input.PlaylistWindowSeconds }),
    ...(input.ProgramDateTimeIntervalSeconds !== undefined &&
      input.ProgramDateTimeIntervalSeconds !== null && {
        programDateTimeIntervalSeconds: input.ProgramDateTimeIntervalSeconds,
      }),
    ...(input.SegmentDurationSeconds !== undefined &&
      input.SegmentDurationSeconds !== null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.StreamSelection !== undefined &&
      input.StreamSelection !== null && {
        streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
      }),
    ...(input.UseAudioRenditionGroup !== undefined &&
      input.UseAudioRenditionGroup !== null && { useAudioRenditionGroup: input.UseAudioRenditionGroup }),
  };
};

const serializeAws_restJson1IngressAccessLogs = (input: IngressAccessLogs, context: __SerdeContext): any => {
  return {
    ...(input.LogGroupName !== undefined && input.LogGroupName !== null && { logGroupName: input.LogGroupName }),
  };
};

const serializeAws_restJson1MssEncryption = (input: MssEncryption, context: __SerdeContext): any => {
  return {
    ...(input.SpekeKeyProvider !== undefined &&
      input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
      }),
  };
};

const serializeAws_restJson1MssPackage = (input: MssPackage, context: __SerdeContext): any => {
  return {
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && { encryption: serializeAws_restJson1MssEncryption(input.Encryption, context) }),
    ...(input.ManifestWindowSeconds !== undefined &&
      input.ManifestWindowSeconds !== null && { manifestWindowSeconds: input.ManifestWindowSeconds }),
    ...(input.SegmentDurationSeconds !== undefined &&
      input.SegmentDurationSeconds !== null && { segmentDurationSeconds: input.SegmentDurationSeconds }),
    ...(input.StreamSelection !== undefined &&
      input.StreamSelection !== null && {
        streamSelection: serializeAws_restJson1StreamSelection(input.StreamSelection, context),
      }),
  };
};

const serializeAws_restJson1S3Destination = (input: S3Destination, context: __SerdeContext): any => {
  return {
    ...(input.BucketName !== undefined && input.BucketName !== null && { bucketName: input.BucketName }),
    ...(input.ManifestKey !== undefined && input.ManifestKey !== null && { manifestKey: input.ManifestKey }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
  };
};

const serializeAws_restJson1SpekeKeyProvider = (input: SpekeKeyProvider, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { certificateArn: input.CertificateArn }),
    ...(input.EncryptionContractConfiguration !== undefined &&
      input.EncryptionContractConfiguration !== null && {
        encryptionContractConfiguration: serializeAws_restJson1EncryptionContractConfiguration(
          input.EncryptionContractConfiguration,
          context
        ),
      }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn }),
    ...(input.SystemIds !== undefined &&
      input.SystemIds !== null && { systemIds: serializeAws_restJson1__listOf__string(input.SystemIds, context) }),
    ...(input.Url !== undefined && input.Url !== null && { url: input.Url }),
  };
};

const serializeAws_restJson1StreamSelection = (input: StreamSelection, context: __SerdeContext): any => {
  return {
    ...(input.MaxVideoBitsPerSecond !== undefined &&
      input.MaxVideoBitsPerSecond !== null && { maxVideoBitsPerSecond: input.MaxVideoBitsPerSecond }),
    ...(input.MinVideoBitsPerSecond !== undefined &&
      input.MinVideoBitsPerSecond !== null && { minVideoBitsPerSecond: input.MinVideoBitsPerSecond }),
    ...(input.StreamOrder !== undefined && input.StreamOrder !== null && { streamOrder: input.StreamOrder }),
  };
};

const serializeAws_restJson1Tags = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const deserializeAws_restJson1__listOf__PeriodTriggersElement = (
  output: any,
  context: __SerdeContext
): (__PeriodTriggersElement | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfChannel = (output: any, context: __SerdeContext): Channel[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Channel(entry, context);
    });
};

const deserializeAws_restJson1__listOfHarvestJob = (output: any, context: __SerdeContext): HarvestJob[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HarvestJob(entry, context);
    });
};

const deserializeAws_restJson1__listOfHlsManifest = (output: any, context: __SerdeContext): HlsManifest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HlsManifest(entry, context);
    });
};

const deserializeAws_restJson1__listOfIngestEndpoint = (output: any, context: __SerdeContext): IngestEndpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IngestEndpoint(entry, context);
    });
};

const deserializeAws_restJson1__listOfOriginEndpoint = (output: any, context: __SerdeContext): OriginEndpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OriginEndpoint(entry, context);
    });
};

const deserializeAws_restJson1__mapOf__string = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1AdTriggers = (output: any, context: __SerdeContext): (__AdTriggersElement | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Authorization = (output: any, context: __SerdeContext): Authorization => {
  return {
    CdnIdentifierSecret: __expectString(output.cdnIdentifierSecret),
    SecretsRoleArn: __expectString(output.secretsRoleArn),
  } as any;
};

const deserializeAws_restJson1Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    Arn: __expectString(output.arn),
    Description: __expectString(output.description),
    EgressAccessLogs:
      output.egressAccessLogs !== undefined && output.egressAccessLogs !== null
        ? deserializeAws_restJson1EgressAccessLogs(output.egressAccessLogs, context)
        : undefined,
    HlsIngest:
      output.hlsIngest !== undefined && output.hlsIngest !== null
        ? deserializeAws_restJson1HlsIngest(output.hlsIngest, context)
        : undefined,
    Id: __expectString(output.id),
    IngressAccessLogs:
      output.ingressAccessLogs !== undefined && output.ingressAccessLogs !== null
        ? deserializeAws_restJson1IngressAccessLogs(output.ingressAccessLogs, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CmafEncryption = (output: any, context: __SerdeContext): CmafEncryption => {
  return {
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
    KeyRotationIntervalSeconds: __expectInt(output.keyRotationIntervalSeconds),
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CmafPackage = (output: any, context: __SerdeContext): CmafPackage => {
  return {
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1CmafEncryption(output.encryption, context)
        : undefined,
    HlsManifests:
      output.hlsManifests !== undefined && output.hlsManifests !== null
        ? deserializeAws_restJson1__listOfHlsManifest(output.hlsManifests, context)
        : undefined,
    SegmentDurationSeconds: __expectInt(output.segmentDurationSeconds),
    SegmentPrefix: __expectString(output.segmentPrefix),
    StreamSelection:
      output.streamSelection !== undefined && output.streamSelection !== null
        ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DashEncryption = (output: any, context: __SerdeContext): DashEncryption => {
  return {
    KeyRotationIntervalSeconds: __expectInt(output.keyRotationIntervalSeconds),
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DashPackage = (output: any, context: __SerdeContext): DashPackage => {
  return {
    AdTriggers:
      output.adTriggers !== undefined && output.adTriggers !== null
        ? deserializeAws_restJson1AdTriggers(output.adTriggers, context)
        : undefined,
    AdsOnDeliveryRestrictions: __expectString(output.adsOnDeliveryRestrictions),
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1DashEncryption(output.encryption, context)
        : undefined,
    ManifestLayout: __expectString(output.manifestLayout),
    ManifestWindowSeconds: __expectInt(output.manifestWindowSeconds),
    MinBufferTimeSeconds: __expectInt(output.minBufferTimeSeconds),
    MinUpdatePeriodSeconds: __expectInt(output.minUpdatePeriodSeconds),
    PeriodTriggers:
      output.periodTriggers !== undefined && output.periodTriggers !== null
        ? deserializeAws_restJson1__listOf__PeriodTriggersElement(output.periodTriggers, context)
        : undefined,
    Profile: __expectString(output.profile),
    SegmentDurationSeconds: __expectInt(output.segmentDurationSeconds),
    SegmentTemplateFormat: __expectString(output.segmentTemplateFormat),
    StreamSelection:
      output.streamSelection !== undefined && output.streamSelection !== null
        ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
        : undefined,
    SuggestedPresentationDelaySeconds: __expectInt(output.suggestedPresentationDelaySeconds),
    UtcTiming: __expectString(output.utcTiming),
    UtcTimingUri: __expectString(output.utcTimingUri),
  } as any;
};

const deserializeAws_restJson1EgressAccessLogs = (output: any, context: __SerdeContext): EgressAccessLogs => {
  return {
    LogGroupName: __expectString(output.logGroupName),
  } as any;
};

const deserializeAws_restJson1EncryptionContractConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionContractConfiguration => {
  return {
    PresetSpeke20Audio: __expectString(output.presetSpeke20Audio),
    PresetSpeke20Video: __expectString(output.presetSpeke20Video),
  } as any;
};

const deserializeAws_restJson1HarvestJob = (output: any, context: __SerdeContext): HarvestJob => {
  return {
    Arn: __expectString(output.arn),
    ChannelId: __expectString(output.channelId),
    CreatedAt: __expectString(output.createdAt),
    EndTime: __expectString(output.endTime),
    Id: __expectString(output.id),
    OriginEndpointId: __expectString(output.originEndpointId),
    S3Destination:
      output.s3Destination !== undefined && output.s3Destination !== null
        ? deserializeAws_restJson1S3Destination(output.s3Destination, context)
        : undefined,
    StartTime: __expectString(output.startTime),
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1HlsEncryption = (output: any, context: __SerdeContext): HlsEncryption => {
  return {
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
    EncryptionMethod: __expectString(output.encryptionMethod),
    KeyRotationIntervalSeconds: __expectInt(output.keyRotationIntervalSeconds),
    RepeatExtXKey: __expectBoolean(output.repeatExtXKey),
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HlsIngest = (output: any, context: __SerdeContext): HlsIngest => {
  return {
    IngestEndpoints:
      output.ingestEndpoints !== undefined && output.ingestEndpoints !== null
        ? deserializeAws_restJson1__listOfIngestEndpoint(output.ingestEndpoints, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HlsManifest = (output: any, context: __SerdeContext): HlsManifest => {
  return {
    AdMarkers: __expectString(output.adMarkers),
    Id: __expectString(output.id),
    IncludeIframeOnlyStream: __expectBoolean(output.includeIframeOnlyStream),
    ManifestName: __expectString(output.manifestName),
    PlaylistType: __expectString(output.playlistType),
    PlaylistWindowSeconds: __expectInt(output.playlistWindowSeconds),
    ProgramDateTimeIntervalSeconds: __expectInt(output.programDateTimeIntervalSeconds),
    Url: __expectString(output.url),
  } as any;
};

const deserializeAws_restJson1HlsPackage = (output: any, context: __SerdeContext): HlsPackage => {
  return {
    AdMarkers: __expectString(output.adMarkers),
    AdTriggers:
      output.adTriggers !== undefined && output.adTriggers !== null
        ? deserializeAws_restJson1AdTriggers(output.adTriggers, context)
        : undefined,
    AdsOnDeliveryRestrictions: __expectString(output.adsOnDeliveryRestrictions),
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1HlsEncryption(output.encryption, context)
        : undefined,
    IncludeIframeOnlyStream: __expectBoolean(output.includeIframeOnlyStream),
    PlaylistType: __expectString(output.playlistType),
    PlaylistWindowSeconds: __expectInt(output.playlistWindowSeconds),
    ProgramDateTimeIntervalSeconds: __expectInt(output.programDateTimeIntervalSeconds),
    SegmentDurationSeconds: __expectInt(output.segmentDurationSeconds),
    StreamSelection:
      output.streamSelection !== undefined && output.streamSelection !== null
        ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
        : undefined,
    UseAudioRenditionGroup: __expectBoolean(output.useAudioRenditionGroup),
  } as any;
};

const deserializeAws_restJson1IngestEndpoint = (output: any, context: __SerdeContext): IngestEndpoint => {
  return {
    Id: __expectString(output.id),
    Password: __expectString(output.password),
    Url: __expectString(output.url),
    Username: __expectString(output.username),
  } as any;
};

const deserializeAws_restJson1IngressAccessLogs = (output: any, context: __SerdeContext): IngressAccessLogs => {
  return {
    LogGroupName: __expectString(output.logGroupName),
  } as any;
};

const deserializeAws_restJson1MssEncryption = (output: any, context: __SerdeContext): MssEncryption => {
  return {
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MssPackage = (output: any, context: __SerdeContext): MssPackage => {
  return {
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1MssEncryption(output.encryption, context)
        : undefined,
    ManifestWindowSeconds: __expectInt(output.manifestWindowSeconds),
    SegmentDurationSeconds: __expectInt(output.segmentDurationSeconds),
    StreamSelection:
      output.streamSelection !== undefined && output.streamSelection !== null
        ? deserializeAws_restJson1StreamSelection(output.streamSelection, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OriginEndpoint = (output: any, context: __SerdeContext): OriginEndpoint => {
  return {
    Arn: __expectString(output.arn),
    Authorization:
      output.authorization !== undefined && output.authorization !== null
        ? deserializeAws_restJson1Authorization(output.authorization, context)
        : undefined,
    ChannelId: __expectString(output.channelId),
    CmafPackage:
      output.cmafPackage !== undefined && output.cmafPackage !== null
        ? deserializeAws_restJson1CmafPackage(output.cmafPackage, context)
        : undefined,
    DashPackage:
      output.dashPackage !== undefined && output.dashPackage !== null
        ? deserializeAws_restJson1DashPackage(output.dashPackage, context)
        : undefined,
    Description: __expectString(output.description),
    HlsPackage:
      output.hlsPackage !== undefined && output.hlsPackage !== null
        ? deserializeAws_restJson1HlsPackage(output.hlsPackage, context)
        : undefined,
    Id: __expectString(output.id),
    ManifestName: __expectString(output.manifestName),
    MssPackage:
      output.mssPackage !== undefined && output.mssPackage !== null
        ? deserializeAws_restJson1MssPackage(output.mssPackage, context)
        : undefined,
    Origination: __expectString(output.origination),
    StartoverWindowSeconds: __expectInt(output.startoverWindowSeconds),
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    TimeDelaySeconds: __expectInt(output.timeDelaySeconds),
    Url: __expectString(output.url),
    Whitelist:
      output.whitelist !== undefined && output.whitelist !== null
        ? deserializeAws_restJson1__listOf__string(output.whitelist, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3Destination = (output: any, context: __SerdeContext): S3Destination => {
  return {
    BucketName: __expectString(output.bucketName),
    ManifestKey: __expectString(output.manifestKey),
    RoleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1SpekeKeyProvider = (output: any, context: __SerdeContext): SpekeKeyProvider => {
  return {
    CertificateArn: __expectString(output.certificateArn),
    EncryptionContractConfiguration:
      output.encryptionContractConfiguration !== undefined && output.encryptionContractConfiguration !== null
        ? deserializeAws_restJson1EncryptionContractConfiguration(output.encryptionContractConfiguration, context)
        : undefined,
    ResourceId: __expectString(output.resourceId),
    RoleArn: __expectString(output.roleArn),
    SystemIds:
      output.systemIds !== undefined && output.systemIds !== null
        ? deserializeAws_restJson1__listOf__string(output.systemIds, context)
        : undefined,
    Url: __expectString(output.url),
  } as any;
};

const deserializeAws_restJson1StreamSelection = (output: any, context: __SerdeContext): StreamSelection => {
  return {
    MaxVideoBitsPerSecond: __expectInt(output.maxVideoBitsPerSecond),
    MinVideoBitsPerSecond: __expectInt(output.minVideoBitsPerSecond),
    StreamOrder: __expectString(output.streamOrder),
  } as any;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): { [key: string]: string } => {
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
