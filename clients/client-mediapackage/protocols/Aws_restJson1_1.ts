import {
  CreateChannelCommandInput,
  CreateChannelCommandOutput
} from "../commands/CreateChannelCommand";
import {
  CreateHarvestJobCommandInput,
  CreateHarvestJobCommandOutput
} from "../commands/CreateHarvestJobCommand";
import {
  CreateOriginEndpointCommandInput,
  CreateOriginEndpointCommandOutput
} from "../commands/CreateOriginEndpointCommand";
import {
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput
} from "../commands/DeleteChannelCommand";
import {
  DeleteOriginEndpointCommandInput,
  DeleteOriginEndpointCommandOutput
} from "../commands/DeleteOriginEndpointCommand";
import {
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput
} from "../commands/DescribeChannelCommand";
import {
  DescribeHarvestJobCommandInput,
  DescribeHarvestJobCommandOutput
} from "../commands/DescribeHarvestJobCommand";
import {
  DescribeOriginEndpointCommandInput,
  DescribeOriginEndpointCommandOutput
} from "../commands/DescribeOriginEndpointCommand";
import {
  ListChannelsCommandInput,
  ListChannelsCommandOutput
} from "../commands/ListChannelsCommand";
import {
  ListHarvestJobsCommandInput,
  ListHarvestJobsCommandOutput
} from "../commands/ListHarvestJobsCommand";
import {
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput
} from "../commands/ListOriginEndpointsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  RotateChannelCredentialsCommandInput,
  RotateChannelCredentialsCommandOutput
} from "../commands/RotateChannelCredentialsCommand";
import {
  RotateIngestEndpointCredentialsCommandInput,
  RotateIngestEndpointCredentialsCommandOutput
} from "../commands/RotateIngestEndpointCredentialsCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput
} from "../commands/UpdateChannelCommand";
import {
  UpdateOriginEndpointCommandInput,
  UpdateOriginEndpointCommandOutput
} from "../commands/UpdateOriginEndpointCommand";
import {
  Authorization,
  Channel,
  CmafEncryption,
  CmafPackage,
  CmafPackageCreateOrUpdateParameters,
  DashEncryption,
  DashPackage,
  ForbiddenException,
  HarvestJob,
  HlsEncryption,
  HlsIngest,
  HlsManifest,
  HlsManifestCreateOrUpdateParameters,
  HlsPackage,
  IngestEndpoint,
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
  __PeriodTriggersElement
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_restJson1_1CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/channels";
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.Id !== undefined) {
    bodyParams["id"] = input.Id;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateHarvestJobCommand = async (
  input: CreateHarvestJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/harvest_jobs";
  let body: any;
  const bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["endTime"] = input.EndTime;
  }
  if (input.Id !== undefined) {
    bodyParams["id"] = input.Id;
  }
  if (input.OriginEndpointId !== undefined) {
    bodyParams["originEndpointId"] = input.OriginEndpointId;
  }
  if (input.S3Destination !== undefined) {
    bodyParams["s3Destination"] = serializeAws_restJson1_1S3Destination(
      input.S3Destination,
      context
    );
  }
  if (input.StartTime !== undefined) {
    bodyParams["startTime"] = input.StartTime;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateOriginEndpointCommand = async (
  input: CreateOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/origin_endpoints";
  let body: any;
  const bodyParams: any = {};
  if (input.Authorization !== undefined) {
    bodyParams["authorization"] = serializeAws_restJson1_1Authorization(
      input.Authorization,
      context
    );
  }
  if (input.ChannelId !== undefined) {
    bodyParams["channelId"] = input.ChannelId;
  }
  if (input.CmafPackage !== undefined) {
    bodyParams[
      "cmafPackage"
    ] = serializeAws_restJson1_1CmafPackageCreateOrUpdateParameters(
      input.CmafPackage,
      context
    );
  }
  if (input.DashPackage !== undefined) {
    bodyParams["dashPackage"] = serializeAws_restJson1_1DashPackage(
      input.DashPackage,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.HlsPackage !== undefined) {
    bodyParams["hlsPackage"] = serializeAws_restJson1_1HlsPackage(
      input.HlsPackage,
      context
    );
  }
  if (input.Id !== undefined) {
    bodyParams["id"] = input.Id;
  }
  if (input.ManifestName !== undefined) {
    bodyParams["manifestName"] = input.ManifestName;
  }
  if (input.MssPackage !== undefined) {
    bodyParams["mssPackage"] = serializeAws_restJson1_1MssPackage(
      input.MssPackage,
      context
    );
  }
  if (input.Origination !== undefined) {
    bodyParams["origination"] = input.Origination;
  }
  if (input.StartoverWindowSeconds !== undefined) {
    bodyParams["startoverWindowSeconds"] = input.StartoverWindowSeconds;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  if (input.TimeDelaySeconds !== undefined) {
    bodyParams["timeDelaySeconds"] = input.TimeDelaySeconds;
  }
  if (input.Whitelist !== undefined) {
    bodyParams["whitelist"] = serializeAws_restJson1_1__listOf__string(
      input.Whitelist,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/channels/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
    body
  });
};

export const serializeAws_restJson1_1DeleteOriginEndpointCommand = async (
  input: DeleteOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/origin_endpoints/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
    body
  });
};

export const serializeAws_restJson1_1DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/channels/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
    body
  });
};

export const serializeAws_restJson1_1DescribeHarvestJobCommand = async (
  input: DescribeHarvestJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/harvest_jobs/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
    body
  });
};

export const serializeAws_restJson1_1DescribeOriginEndpointCommand = async (
  input: DescribeOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/origin_endpoints/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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
    body
  });
};

export const serializeAws_restJson1_1ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/channels";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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
    body
  });
};

export const serializeAws_restJson1_1ListHarvestJobsCommand = async (
  input: ListHarvestJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/harvest_jobs";
  const query: any = {
    ...(input.IncludeChannelId !== undefined && {
      includeChannelId: input.IncludeChannelId
    }),
    ...(input.IncludeStatus !== undefined && {
      includeStatus: input.IncludeStatus
    }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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
    body
  });
};

export const serializeAws_restJson1_1ListOriginEndpointsCommand = async (
  input: ListOriginEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/origin_endpoints";
  const query: any = {
    ...(input.ChannelId !== undefined && { channelId: input.ChannelId }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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
    body
  });
};

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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
    body
  });
};

export const serializeAws_restJson1_1RotateChannelCredentialsCommand = async (
  input: RotateChannelCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/channels/{Id}/credentials";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1RotateIngestEndpointCredentialsCommand = async (
  input: RotateIngestEndpointCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/channels/{Id}/ingest_endpoints/{IngestEndpointId}/credentials";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  if (input.IngestEndpointId !== undefined) {
    const labelValue: string = input.IngestEndpointId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IngestEndpointId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{IngestEndpointId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: IngestEndpointId."
    );
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && {
      tagKeys: (input.TagKeys || []).map(_entry => _entry)
    })
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
    body
  });
};

export const serializeAws_restJson1_1UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/channels/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateOriginEndpointCommand = async (
  input: UpdateOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/origin_endpoints/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Authorization !== undefined) {
    bodyParams["authorization"] = serializeAws_restJson1_1Authorization(
      input.Authorization,
      context
    );
  }
  if (input.CmafPackage !== undefined) {
    bodyParams[
      "cmafPackage"
    ] = serializeAws_restJson1_1CmafPackageCreateOrUpdateParameters(
      input.CmafPackage,
      context
    );
  }
  if (input.DashPackage !== undefined) {
    bodyParams["dashPackage"] = serializeAws_restJson1_1DashPackage(
      input.DashPackage,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.HlsPackage !== undefined) {
    bodyParams["hlsPackage"] = serializeAws_restJson1_1HlsPackage(
      input.HlsPackage,
      context
    );
  }
  if (input.ManifestName !== undefined) {
    bodyParams["manifestName"] = input.ManifestName;
  }
  if (input.MssPackage !== undefined) {
    bodyParams["mssPackage"] = serializeAws_restJson1_1MssPackage(
      input.MssPackage,
      context
    );
  }
  if (input.Origination !== undefined) {
    bodyParams["origination"] = input.Origination;
  }
  if (input.StartoverWindowSeconds !== undefined) {
    bodyParams["startoverWindowSeconds"] = input.StartoverWindowSeconds;
  }
  if (input.TimeDelaySeconds !== undefined) {
    bodyParams["timeDelaySeconds"] = input.TimeDelaySeconds;
  }
  if (input.Whitelist !== undefined) {
    bodyParams["whitelist"] = serializeAws_restJson1_1__listOf__string(
      input.Whitelist,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1_1CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateChannelCommandError(output, context);
  }
  const contents: CreateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateChannelResponse",
    Arn: undefined,
    Description: undefined,
    HlsIngest: undefined,
    Id: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
    contents.HlsIngest = deserializeAws_restJson1_1HlsIngest(
      data.hlsIngest,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateHarvestJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHarvestJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateHarvestJobCommandError(
      output,
      context
    );
  }
  const contents: CreateHarvestJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateHarvestJobResponse",
    Arn: undefined,
    ChannelId: undefined,
    CreatedAt: undefined,
    EndTime: undefined,
    Id: undefined,
    OriginEndpointId: undefined,
    S3Destination: undefined,
    StartTime: undefined,
    Status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.channelId !== undefined && data.channelId !== null) {
    contents.ChannelId = data.channelId;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.CreatedAt = data.createdAt;
  }
  if (data.endTime !== undefined && data.endTime !== null) {
    contents.EndTime = data.endTime;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.originEndpointId !== undefined && data.originEndpointId !== null) {
    contents.OriginEndpointId = data.originEndpointId;
  }
  if (data.s3Destination !== undefined && data.s3Destination !== null) {
    contents.S3Destination = deserializeAws_restJson1_1S3Destination(
      data.s3Destination,
      context
    );
  }
  if (data.startTime !== undefined && data.startTime !== null) {
    contents.StartTime = data.startTime;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateHarvestJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHarvestJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateOriginEndpointCommandError(
      output,
      context
    );
  }
  const contents: CreateOriginEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateOriginEndpointResponse",
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
    Whitelist: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.authorization !== undefined && data.authorization !== null) {
    contents.Authorization = deserializeAws_restJson1_1Authorization(
      data.authorization,
      context
    );
  }
  if (data.channelId !== undefined && data.channelId !== null) {
    contents.ChannelId = data.channelId;
  }
  if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
    contents.CmafPackage = deserializeAws_restJson1_1CmafPackage(
      data.cmafPackage,
      context
    );
  }
  if (data.dashPackage !== undefined && data.dashPackage !== null) {
    contents.DashPackage = deserializeAws_restJson1_1DashPackage(
      data.dashPackage,
      context
    );
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
    contents.HlsPackage = deserializeAws_restJson1_1HlsPackage(
      data.hlsPackage,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.manifestName !== undefined && data.manifestName !== null) {
    contents.ManifestName = data.manifestName;
  }
  if (data.mssPackage !== undefined && data.mssPackage !== null) {
    contents.MssPackage = deserializeAws_restJson1_1MssPackage(
      data.mssPackage,
      context
    );
  }
  if (data.origination !== undefined && data.origination !== null) {
    contents.Origination = data.origination;
  }
  if (
    data.startoverWindowSeconds !== undefined &&
    data.startoverWindowSeconds !== null
  ) {
    contents.StartoverWindowSeconds = data.startoverWindowSeconds;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.timeDelaySeconds !== undefined && data.timeDelaySeconds !== null) {
    contents.TimeDelaySeconds = data.timeDelaySeconds;
  }
  if (data.url !== undefined && data.url !== null) {
    contents.Url = data.url;
  }
  if (data.whitelist !== undefined && data.whitelist !== null) {
    contents.Whitelist = deserializeAws_restJson1_1__listOf__string(
      data.whitelist,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateOriginEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteChannelCommandError(output, context);
  }
  const contents: DeleteChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteChannelResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteOriginEndpointCommandError(
      output,
      context
    );
  }
  const contents: DeleteOriginEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteOriginEndpointResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteOriginEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeChannelCommandError(
      output,
      context
    );
  }
  const contents: DescribeChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeChannelResponse",
    Arn: undefined,
    Description: undefined,
    HlsIngest: undefined,
    Id: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
    contents.HlsIngest = deserializeAws_restJson1_1HlsIngest(
      data.hlsIngest,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeHarvestJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHarvestJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeHarvestJobCommandError(
      output,
      context
    );
  }
  const contents: DescribeHarvestJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeHarvestJobResponse",
    Arn: undefined,
    ChannelId: undefined,
    CreatedAt: undefined,
    EndTime: undefined,
    Id: undefined,
    OriginEndpointId: undefined,
    S3Destination: undefined,
    StartTime: undefined,
    Status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.channelId !== undefined && data.channelId !== null) {
    contents.ChannelId = data.channelId;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.CreatedAt = data.createdAt;
  }
  if (data.endTime !== undefined && data.endTime !== null) {
    contents.EndTime = data.endTime;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.originEndpointId !== undefined && data.originEndpointId !== null) {
    contents.OriginEndpointId = data.originEndpointId;
  }
  if (data.s3Destination !== undefined && data.s3Destination !== null) {
    contents.S3Destination = deserializeAws_restJson1_1S3Destination(
      data.s3Destination,
      context
    );
  }
  if (data.startTime !== undefined && data.startTime !== null) {
    contents.StartTime = data.startTime;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeHarvestJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHarvestJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeOriginEndpointCommandError(
      output,
      context
    );
  }
  const contents: DescribeOriginEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeOriginEndpointResponse",
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
    Whitelist: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.authorization !== undefined && data.authorization !== null) {
    contents.Authorization = deserializeAws_restJson1_1Authorization(
      data.authorization,
      context
    );
  }
  if (data.channelId !== undefined && data.channelId !== null) {
    contents.ChannelId = data.channelId;
  }
  if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
    contents.CmafPackage = deserializeAws_restJson1_1CmafPackage(
      data.cmafPackage,
      context
    );
  }
  if (data.dashPackage !== undefined && data.dashPackage !== null) {
    contents.DashPackage = deserializeAws_restJson1_1DashPackage(
      data.dashPackage,
      context
    );
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
    contents.HlsPackage = deserializeAws_restJson1_1HlsPackage(
      data.hlsPackage,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.manifestName !== undefined && data.manifestName !== null) {
    contents.ManifestName = data.manifestName;
  }
  if (data.mssPackage !== undefined && data.mssPackage !== null) {
    contents.MssPackage = deserializeAws_restJson1_1MssPackage(
      data.mssPackage,
      context
    );
  }
  if (data.origination !== undefined && data.origination !== null) {
    contents.Origination = data.origination;
  }
  if (
    data.startoverWindowSeconds !== undefined &&
    data.startoverWindowSeconds !== null
  ) {
    contents.StartoverWindowSeconds = data.startoverWindowSeconds;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.timeDelaySeconds !== undefined && data.timeDelaySeconds !== null) {
    contents.TimeDelaySeconds = data.timeDelaySeconds;
  }
  if (data.url !== undefined && data.url !== null) {
    contents.Url = data.url;
  }
  if (data.whitelist !== undefined && data.whitelist !== null) {
    contents.Whitelist = deserializeAws_restJson1_1__listOf__string(
      data.whitelist,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeOriginEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOriginEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListChannelsCommandError(output, context);
  }
  const contents: ListChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListChannelsResponse",
    Channels: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channels !== undefined && data.channels !== null) {
    contents.Channels = deserializeAws_restJson1_1__listOfChannel(
      data.channels,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListHarvestJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHarvestJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListHarvestJobsCommandError(
      output,
      context
    );
  }
  const contents: ListHarvestJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListHarvestJobsResponse",
    HarvestJobs: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.harvestJobs !== undefined && data.harvestJobs !== null) {
    contents.HarvestJobs = deserializeAws_restJson1_1__listOfHarvestJob(
      data.harvestJobs,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListHarvestJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHarvestJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListOriginEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListOriginEndpointsCommandError(
      output,
      context
    );
  }
  const contents: ListOriginEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOriginEndpointsResponse",
    NextToken: undefined,
    OriginEndpoints: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.originEndpoints !== undefined && data.originEndpoints !== null) {
    contents.OriginEndpoints = deserializeAws_restJson1_1__listOfOriginEndpoint(
      data.originEndpoints,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListOriginEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      data.tags,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1RotateChannelCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateChannelCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RotateChannelCredentialsCommandError(
      output,
      context
    );
  }
  const contents: RotateChannelCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RotateChannelCredentialsResponse",
    Arn: undefined,
    Description: undefined,
    HlsIngest: undefined,
    Id: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
    contents.HlsIngest = deserializeAws_restJson1_1HlsIngest(
      data.hlsIngest,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1RotateChannelCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateChannelCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1RotateIngestEndpointCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateIngestEndpointCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RotateIngestEndpointCredentialsCommandError(
      output,
      context
    );
  }
  const contents: RotateIngestEndpointCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RotateIngestEndpointCredentialsResponse",
    Arn: undefined,
    Description: undefined,
    HlsIngest: undefined,
    Id: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
    contents.HlsIngest = deserializeAws_restJson1_1HlsIngest(
      data.hlsIngest,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1RotateIngestEndpointCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateIngestEndpointCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateChannelCommandError(output, context);
  }
  const contents: UpdateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateChannelResponse",
    Arn: undefined,
    Description: undefined,
    HlsIngest: undefined,
    Id: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.hlsIngest !== undefined && data.hlsIngest !== null) {
    contents.HlsIngest = deserializeAws_restJson1_1HlsIngest(
      data.hlsIngest,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateOriginEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateOriginEndpointCommandError(
      output,
      context
    );
  }
  const contents: UpdateOriginEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateOriginEndpointResponse",
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
    Whitelist: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.authorization !== undefined && data.authorization !== null) {
    contents.Authorization = deserializeAws_restJson1_1Authorization(
      data.authorization,
      context
    );
  }
  if (data.channelId !== undefined && data.channelId !== null) {
    contents.ChannelId = data.channelId;
  }
  if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
    contents.CmafPackage = deserializeAws_restJson1_1CmafPackage(
      data.cmafPackage,
      context
    );
  }
  if (data.dashPackage !== undefined && data.dashPackage !== null) {
    contents.DashPackage = deserializeAws_restJson1_1DashPackage(
      data.dashPackage,
      context
    );
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
    contents.HlsPackage = deserializeAws_restJson1_1HlsPackage(
      data.hlsPackage,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.manifestName !== undefined && data.manifestName !== null) {
    contents.ManifestName = data.manifestName;
  }
  if (data.mssPackage !== undefined && data.mssPackage !== null) {
    contents.MssPackage = deserializeAws_restJson1_1MssPackage(
      data.mssPackage,
      context
    );
  }
  if (data.origination !== undefined && data.origination !== null) {
    contents.Origination = data.origination;
  }
  if (
    data.startoverWindowSeconds !== undefined &&
    data.startoverWindowSeconds !== null
  ) {
    contents.StartoverWindowSeconds = data.startoverWindowSeconds;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.timeDelaySeconds !== undefined && data.timeDelaySeconds !== null) {
    contents.TimeDelaySeconds = data.timeDelaySeconds;
  }
  if (data.url !== undefined && data.url !== null) {
    contents.Url = data.url;
  }
  if (data.whitelist !== undefined && data.whitelist !== null) {
    contents.Whitelist = deserializeAws_restJson1_1__listOf__string(
      data.whitelist,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateOriginEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnprocessableEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: UnprocessableEntityException = {
    name: "UnprocessableEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AdTriggers = (
  input: (__AdTriggersElement | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1Authorization = (
  input: Authorization,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CdnIdentifierSecret !== undefined) {
    bodyParams["cdnIdentifierSecret"] = input.CdnIdentifierSecret;
  }
  if (input.SecretsRoleArn !== undefined) {
    bodyParams["secretsRoleArn"] = input.SecretsRoleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CmafEncryption = (
  input: CmafEncryption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyRotationIntervalSeconds !== undefined) {
    bodyParams["keyRotationIntervalSeconds"] = input.KeyRotationIntervalSeconds;
  }
  if (input.SpekeKeyProvider !== undefined) {
    bodyParams["spekeKeyProvider"] = serializeAws_restJson1_1SpekeKeyProvider(
      input.SpekeKeyProvider,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CmafPackageCreateOrUpdateParameters = (
  input: CmafPackageCreateOrUpdateParameters,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1CmafEncryption(
      input.Encryption,
      context
    );
  }
  if (input.HlsManifests !== undefined) {
    bodyParams[
      "hlsManifests"
    ] = serializeAws_restJson1_1__listOfHlsManifestCreateOrUpdateParameters(
      input.HlsManifests,
      context
    );
  }
  if (input.SegmentDurationSeconds !== undefined) {
    bodyParams["segmentDurationSeconds"] = input.SegmentDurationSeconds;
  }
  if (input.SegmentPrefix !== undefined) {
    bodyParams["segmentPrefix"] = input.SegmentPrefix;
  }
  if (input.StreamSelection !== undefined) {
    bodyParams["streamSelection"] = serializeAws_restJson1_1StreamSelection(
      input.StreamSelection,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DashEncryption = (
  input: DashEncryption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyRotationIntervalSeconds !== undefined) {
    bodyParams["keyRotationIntervalSeconds"] = input.KeyRotationIntervalSeconds;
  }
  if (input.SpekeKeyProvider !== undefined) {
    bodyParams["spekeKeyProvider"] = serializeAws_restJson1_1SpekeKeyProvider(
      input.SpekeKeyProvider,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DashPackage = (
  input: DashPackage,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdTriggers !== undefined) {
    bodyParams["adTriggers"] = serializeAws_restJson1_1AdTriggers(
      input.AdTriggers,
      context
    );
  }
  if (input.AdsOnDeliveryRestrictions !== undefined) {
    bodyParams["adsOnDeliveryRestrictions"] = input.AdsOnDeliveryRestrictions;
  }
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1DashEncryption(
      input.Encryption,
      context
    );
  }
  if (input.ManifestLayout !== undefined) {
    bodyParams["manifestLayout"] = input.ManifestLayout;
  }
  if (input.ManifestWindowSeconds !== undefined) {
    bodyParams["manifestWindowSeconds"] = input.ManifestWindowSeconds;
  }
  if (input.MinBufferTimeSeconds !== undefined) {
    bodyParams["minBufferTimeSeconds"] = input.MinBufferTimeSeconds;
  }
  if (input.MinUpdatePeriodSeconds !== undefined) {
    bodyParams["minUpdatePeriodSeconds"] = input.MinUpdatePeriodSeconds;
  }
  if (input.PeriodTriggers !== undefined) {
    bodyParams[
      "periodTriggers"
    ] = serializeAws_restJson1_1__listOf__PeriodTriggersElement(
      input.PeriodTriggers,
      context
    );
  }
  if (input.Profile !== undefined) {
    bodyParams["profile"] = input.Profile;
  }
  if (input.SegmentDurationSeconds !== undefined) {
    bodyParams["segmentDurationSeconds"] = input.SegmentDurationSeconds;
  }
  if (input.SegmentTemplateFormat !== undefined) {
    bodyParams["segmentTemplateFormat"] = input.SegmentTemplateFormat;
  }
  if (input.StreamSelection !== undefined) {
    bodyParams["streamSelection"] = serializeAws_restJson1_1StreamSelection(
      input.StreamSelection,
      context
    );
  }
  if (input.SuggestedPresentationDelaySeconds !== undefined) {
    bodyParams["suggestedPresentationDelaySeconds"] =
      input.SuggestedPresentationDelaySeconds;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsEncryption = (
  input: HlsEncryption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConstantInitializationVector !== undefined) {
    bodyParams["constantInitializationVector"] =
      input.ConstantInitializationVector;
  }
  if (input.EncryptionMethod !== undefined) {
    bodyParams["encryptionMethod"] = input.EncryptionMethod;
  }
  if (input.KeyRotationIntervalSeconds !== undefined) {
    bodyParams["keyRotationIntervalSeconds"] = input.KeyRotationIntervalSeconds;
  }
  if (input.RepeatExtXKey !== undefined) {
    bodyParams["repeatExtXKey"] = input.RepeatExtXKey;
  }
  if (input.SpekeKeyProvider !== undefined) {
    bodyParams["spekeKeyProvider"] = serializeAws_restJson1_1SpekeKeyProvider(
      input.SpekeKeyProvider,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsManifestCreateOrUpdateParameters = (
  input: HlsManifestCreateOrUpdateParameters,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdMarkers !== undefined) {
    bodyParams["adMarkers"] = input.AdMarkers;
  }
  if (input.AdTriggers !== undefined) {
    bodyParams["adTriggers"] = serializeAws_restJson1_1AdTriggers(
      input.AdTriggers,
      context
    );
  }
  if (input.AdsOnDeliveryRestrictions !== undefined) {
    bodyParams["adsOnDeliveryRestrictions"] = input.AdsOnDeliveryRestrictions;
  }
  if (input.Id !== undefined) {
    bodyParams["id"] = input.Id;
  }
  if (input.IncludeIframeOnlyStream !== undefined) {
    bodyParams["includeIframeOnlyStream"] = input.IncludeIframeOnlyStream;
  }
  if (input.ManifestName !== undefined) {
    bodyParams["manifestName"] = input.ManifestName;
  }
  if (input.PlaylistType !== undefined) {
    bodyParams["playlistType"] = input.PlaylistType;
  }
  if (input.PlaylistWindowSeconds !== undefined) {
    bodyParams["playlistWindowSeconds"] = input.PlaylistWindowSeconds;
  }
  if (input.ProgramDateTimeIntervalSeconds !== undefined) {
    bodyParams["programDateTimeIntervalSeconds"] =
      input.ProgramDateTimeIntervalSeconds;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsPackage = (
  input: HlsPackage,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdMarkers !== undefined) {
    bodyParams["adMarkers"] = input.AdMarkers;
  }
  if (input.AdTriggers !== undefined) {
    bodyParams["adTriggers"] = serializeAws_restJson1_1AdTriggers(
      input.AdTriggers,
      context
    );
  }
  if (input.AdsOnDeliveryRestrictions !== undefined) {
    bodyParams["adsOnDeliveryRestrictions"] = input.AdsOnDeliveryRestrictions;
  }
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1HlsEncryption(
      input.Encryption,
      context
    );
  }
  if (input.IncludeIframeOnlyStream !== undefined) {
    bodyParams["includeIframeOnlyStream"] = input.IncludeIframeOnlyStream;
  }
  if (input.PlaylistType !== undefined) {
    bodyParams["playlistType"] = input.PlaylistType;
  }
  if (input.PlaylistWindowSeconds !== undefined) {
    bodyParams["playlistWindowSeconds"] = input.PlaylistWindowSeconds;
  }
  if (input.ProgramDateTimeIntervalSeconds !== undefined) {
    bodyParams["programDateTimeIntervalSeconds"] =
      input.ProgramDateTimeIntervalSeconds;
  }
  if (input.SegmentDurationSeconds !== undefined) {
    bodyParams["segmentDurationSeconds"] = input.SegmentDurationSeconds;
  }
  if (input.StreamSelection !== undefined) {
    bodyParams["streamSelection"] = serializeAws_restJson1_1StreamSelection(
      input.StreamSelection,
      context
    );
  }
  if (input.UseAudioRenditionGroup !== undefined) {
    bodyParams["useAudioRenditionGroup"] = input.UseAudioRenditionGroup;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MssEncryption = (
  input: MssEncryption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SpekeKeyProvider !== undefined) {
    bodyParams["spekeKeyProvider"] = serializeAws_restJson1_1SpekeKeyProvider(
      input.SpekeKeyProvider,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1MssPackage = (
  input: MssPackage,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1MssEncryption(
      input.Encryption,
      context
    );
  }
  if (input.ManifestWindowSeconds !== undefined) {
    bodyParams["manifestWindowSeconds"] = input.ManifestWindowSeconds;
  }
  if (input.SegmentDurationSeconds !== undefined) {
    bodyParams["segmentDurationSeconds"] = input.SegmentDurationSeconds;
  }
  if (input.StreamSelection !== undefined) {
    bodyParams["streamSelection"] = serializeAws_restJson1_1StreamSelection(
      input.StreamSelection,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1S3Destination = (
  input: S3Destination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BucketName !== undefined) {
    bodyParams["bucketName"] = input.BucketName;
  }
  if (input.ManifestKey !== undefined) {
    bodyParams["manifestKey"] = input.ManifestKey;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["roleArn"] = input.RoleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SpekeKeyProvider = (
  input: SpekeKeyProvider,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["certificateArn"] = input.CertificateArn;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["resourceId"] = input.ResourceId;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["roleArn"] = input.RoleArn;
  }
  if (input.SystemIds !== undefined) {
    bodyParams["systemIds"] = serializeAws_restJson1_1__listOf__string(
      input.SystemIds,
      context
    );
  }
  if (input.Url !== undefined) {
    bodyParams["url"] = input.Url;
  }
  return bodyParams;
};

const serializeAws_restJson1_1StreamSelection = (
  input: StreamSelection,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxVideoBitsPerSecond !== undefined) {
    bodyParams["maxVideoBitsPerSecond"] = input.MaxVideoBitsPerSecond;
  }
  if (input.MinVideoBitsPerSecond !== undefined) {
    bodyParams["minVideoBitsPerSecond"] = input.MinVideoBitsPerSecond;
  }
  if (input.StreamOrder !== undefined) {
    bodyParams["streamOrder"] = input.StreamOrder;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const serializeAws_restJson1_1__listOfHlsManifestCreateOrUpdateParameters = (
  input: HlsManifestCreateOrUpdateParameters[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1HlsManifestCreateOrUpdateParameters(entry, context)
  );
};

const serializeAws_restJson1_1__listOf__PeriodTriggersElement = (
  input: (__PeriodTriggersElement | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__listOf__string = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__mapOf__string = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1AdTriggers = (
  output: any,
  context: __SerdeContext
): (__AdTriggersElement | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Authorization = (
  output: any,
  context: __SerdeContext
): Authorization => {
  return {
    __type: "Authorization",
    CdnIdentifierSecret:
      output.cdnIdentifierSecret !== undefined &&
      output.cdnIdentifierSecret !== null
        ? output.cdnIdentifierSecret
        : undefined,
    SecretsRoleArn:
      output.secretsRoleArn !== undefined && output.secretsRoleArn !== null
        ? output.secretsRoleArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Channel = (
  output: any,
  context: __SerdeContext
): Channel => {
  return {
    __type: "Channel",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    Description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    HlsIngest:
      output.hlsIngest !== undefined && output.hlsIngest !== null
        ? deserializeAws_restJson1_1HlsIngest(output.hlsIngest, context)
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CmafEncryption = (
  output: any,
  context: __SerdeContext
): CmafEncryption => {
  return {
    __type: "CmafEncryption",
    KeyRotationIntervalSeconds:
      output.keyRotationIntervalSeconds !== undefined &&
      output.keyRotationIntervalSeconds !== null
        ? output.keyRotationIntervalSeconds
        : undefined,
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1_1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CmafPackage = (
  output: any,
  context: __SerdeContext
): CmafPackage => {
  return {
    __type: "CmafPackage",
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1_1CmafEncryption(output.encryption, context)
        : undefined,
    HlsManifests:
      output.hlsManifests !== undefined && output.hlsManifests !== null
        ? deserializeAws_restJson1_1__listOfHlsManifest(
            output.hlsManifests,
            context
          )
        : undefined,
    SegmentDurationSeconds:
      output.segmentDurationSeconds !== undefined &&
      output.segmentDurationSeconds !== null
        ? output.segmentDurationSeconds
        : undefined,
    SegmentPrefix:
      output.segmentPrefix !== undefined && output.segmentPrefix !== null
        ? output.segmentPrefix
        : undefined,
    StreamSelection:
      output.streamSelection !== undefined && output.streamSelection !== null
        ? deserializeAws_restJson1_1StreamSelection(
            output.streamSelection,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DashEncryption = (
  output: any,
  context: __SerdeContext
): DashEncryption => {
  return {
    __type: "DashEncryption",
    KeyRotationIntervalSeconds:
      output.keyRotationIntervalSeconds !== undefined &&
      output.keyRotationIntervalSeconds !== null
        ? output.keyRotationIntervalSeconds
        : undefined,
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1_1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DashPackage = (
  output: any,
  context: __SerdeContext
): DashPackage => {
  return {
    __type: "DashPackage",
    AdTriggers:
      output.adTriggers !== undefined && output.adTriggers !== null
        ? deserializeAws_restJson1_1AdTriggers(output.adTriggers, context)
        : undefined,
    AdsOnDeliveryRestrictions:
      output.adsOnDeliveryRestrictions !== undefined &&
      output.adsOnDeliveryRestrictions !== null
        ? output.adsOnDeliveryRestrictions
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1_1DashEncryption(output.encryption, context)
        : undefined,
    ManifestLayout:
      output.manifestLayout !== undefined && output.manifestLayout !== null
        ? output.manifestLayout
        : undefined,
    ManifestWindowSeconds:
      output.manifestWindowSeconds !== undefined &&
      output.manifestWindowSeconds !== null
        ? output.manifestWindowSeconds
        : undefined,
    MinBufferTimeSeconds:
      output.minBufferTimeSeconds !== undefined &&
      output.minBufferTimeSeconds !== null
        ? output.minBufferTimeSeconds
        : undefined,
    MinUpdatePeriodSeconds:
      output.minUpdatePeriodSeconds !== undefined &&
      output.minUpdatePeriodSeconds !== null
        ? output.minUpdatePeriodSeconds
        : undefined,
    PeriodTriggers:
      output.periodTriggers !== undefined && output.periodTriggers !== null
        ? deserializeAws_restJson1_1__listOf__PeriodTriggersElement(
            output.periodTriggers,
            context
          )
        : undefined,
    Profile:
      output.profile !== undefined && output.profile !== null
        ? output.profile
        : undefined,
    SegmentDurationSeconds:
      output.segmentDurationSeconds !== undefined &&
      output.segmentDurationSeconds !== null
        ? output.segmentDurationSeconds
        : undefined,
    SegmentTemplateFormat:
      output.segmentTemplateFormat !== undefined &&
      output.segmentTemplateFormat !== null
        ? output.segmentTemplateFormat
        : undefined,
    StreamSelection:
      output.streamSelection !== undefined && output.streamSelection !== null
        ? deserializeAws_restJson1_1StreamSelection(
            output.streamSelection,
            context
          )
        : undefined,
    SuggestedPresentationDelaySeconds:
      output.suggestedPresentationDelaySeconds !== undefined &&
      output.suggestedPresentationDelaySeconds !== null
        ? output.suggestedPresentationDelaySeconds
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HarvestJob = (
  output: any,
  context: __SerdeContext
): HarvestJob => {
  return {
    __type: "HarvestJob",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    ChannelId:
      output.channelId !== undefined && output.channelId !== null
        ? output.channelId
        : undefined,
    CreatedAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? output.createdAt
        : undefined,
    EndTime:
      output.endTime !== undefined && output.endTime !== null
        ? output.endTime
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    OriginEndpointId:
      output.originEndpointId !== undefined && output.originEndpointId !== null
        ? output.originEndpointId
        : undefined,
    S3Destination:
      output.s3Destination !== undefined && output.s3Destination !== null
        ? deserializeAws_restJson1_1S3Destination(output.s3Destination, context)
        : undefined,
    StartTime:
      output.startTime !== undefined && output.startTime !== null
        ? output.startTime
        : undefined,
    Status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsEncryption = (
  output: any,
  context: __SerdeContext
): HlsEncryption => {
  return {
    __type: "HlsEncryption",
    ConstantInitializationVector:
      output.constantInitializationVector !== undefined &&
      output.constantInitializationVector !== null
        ? output.constantInitializationVector
        : undefined,
    EncryptionMethod:
      output.encryptionMethod !== undefined && output.encryptionMethod !== null
        ? output.encryptionMethod
        : undefined,
    KeyRotationIntervalSeconds:
      output.keyRotationIntervalSeconds !== undefined &&
      output.keyRotationIntervalSeconds !== null
        ? output.keyRotationIntervalSeconds
        : undefined,
    RepeatExtXKey:
      output.repeatExtXKey !== undefined && output.repeatExtXKey !== null
        ? output.repeatExtXKey
        : undefined,
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1_1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsIngest = (
  output: any,
  context: __SerdeContext
): HlsIngest => {
  return {
    __type: "HlsIngest",
    IngestEndpoints:
      output.ingestEndpoints !== undefined && output.ingestEndpoints !== null
        ? deserializeAws_restJson1_1__listOfIngestEndpoint(
            output.ingestEndpoints,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsManifest = (
  output: any,
  context: __SerdeContext
): HlsManifest => {
  return {
    __type: "HlsManifest",
    AdMarkers:
      output.adMarkers !== undefined && output.adMarkers !== null
        ? output.adMarkers
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    IncludeIframeOnlyStream:
      output.includeIframeOnlyStream !== undefined &&
      output.includeIframeOnlyStream !== null
        ? output.includeIframeOnlyStream
        : undefined,
    ManifestName:
      output.manifestName !== undefined && output.manifestName !== null
        ? output.manifestName
        : undefined,
    PlaylistType:
      output.playlistType !== undefined && output.playlistType !== null
        ? output.playlistType
        : undefined,
    PlaylistWindowSeconds:
      output.playlistWindowSeconds !== undefined &&
      output.playlistWindowSeconds !== null
        ? output.playlistWindowSeconds
        : undefined,
    ProgramDateTimeIntervalSeconds:
      output.programDateTimeIntervalSeconds !== undefined &&
      output.programDateTimeIntervalSeconds !== null
        ? output.programDateTimeIntervalSeconds
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsPackage = (
  output: any,
  context: __SerdeContext
): HlsPackage => {
  return {
    __type: "HlsPackage",
    AdMarkers:
      output.adMarkers !== undefined && output.adMarkers !== null
        ? output.adMarkers
        : undefined,
    AdTriggers:
      output.adTriggers !== undefined && output.adTriggers !== null
        ? deserializeAws_restJson1_1AdTriggers(output.adTriggers, context)
        : undefined,
    AdsOnDeliveryRestrictions:
      output.adsOnDeliveryRestrictions !== undefined &&
      output.adsOnDeliveryRestrictions !== null
        ? output.adsOnDeliveryRestrictions
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1_1HlsEncryption(output.encryption, context)
        : undefined,
    IncludeIframeOnlyStream:
      output.includeIframeOnlyStream !== undefined &&
      output.includeIframeOnlyStream !== null
        ? output.includeIframeOnlyStream
        : undefined,
    PlaylistType:
      output.playlistType !== undefined && output.playlistType !== null
        ? output.playlistType
        : undefined,
    PlaylistWindowSeconds:
      output.playlistWindowSeconds !== undefined &&
      output.playlistWindowSeconds !== null
        ? output.playlistWindowSeconds
        : undefined,
    ProgramDateTimeIntervalSeconds:
      output.programDateTimeIntervalSeconds !== undefined &&
      output.programDateTimeIntervalSeconds !== null
        ? output.programDateTimeIntervalSeconds
        : undefined,
    SegmentDurationSeconds:
      output.segmentDurationSeconds !== undefined &&
      output.segmentDurationSeconds !== null
        ? output.segmentDurationSeconds
        : undefined,
    StreamSelection:
      output.streamSelection !== undefined && output.streamSelection !== null
        ? deserializeAws_restJson1_1StreamSelection(
            output.streamSelection,
            context
          )
        : undefined,
    UseAudioRenditionGroup:
      output.useAudioRenditionGroup !== undefined &&
      output.useAudioRenditionGroup !== null
        ? output.useAudioRenditionGroup
        : undefined
  } as any;
};

const deserializeAws_restJson1_1IngestEndpoint = (
  output: any,
  context: __SerdeContext
): IngestEndpoint => {
  return {
    __type: "IngestEndpoint",
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    Password:
      output.password !== undefined && output.password !== null
        ? output.password
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined,
    Username:
      output.username !== undefined && output.username !== null
        ? output.username
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MssEncryption = (
  output: any,
  context: __SerdeContext
): MssEncryption => {
  return {
    __type: "MssEncryption",
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1_1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MssPackage = (
  output: any,
  context: __SerdeContext
): MssPackage => {
  return {
    __type: "MssPackage",
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1_1MssEncryption(output.encryption, context)
        : undefined,
    ManifestWindowSeconds:
      output.manifestWindowSeconds !== undefined &&
      output.manifestWindowSeconds !== null
        ? output.manifestWindowSeconds
        : undefined,
    SegmentDurationSeconds:
      output.segmentDurationSeconds !== undefined &&
      output.segmentDurationSeconds !== null
        ? output.segmentDurationSeconds
        : undefined,
    StreamSelection:
      output.streamSelection !== undefined && output.streamSelection !== null
        ? deserializeAws_restJson1_1StreamSelection(
            output.streamSelection,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OriginEndpoint = (
  output: any,
  context: __SerdeContext
): OriginEndpoint => {
  return {
    __type: "OriginEndpoint",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    Authorization:
      output.authorization !== undefined && output.authorization !== null
        ? deserializeAws_restJson1_1Authorization(output.authorization, context)
        : undefined,
    ChannelId:
      output.channelId !== undefined && output.channelId !== null
        ? output.channelId
        : undefined,
    CmafPackage:
      output.cmafPackage !== undefined && output.cmafPackage !== null
        ? deserializeAws_restJson1_1CmafPackage(output.cmafPackage, context)
        : undefined,
    DashPackage:
      output.dashPackage !== undefined && output.dashPackage !== null
        ? deserializeAws_restJson1_1DashPackage(output.dashPackage, context)
        : undefined,
    Description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    HlsPackage:
      output.hlsPackage !== undefined && output.hlsPackage !== null
        ? deserializeAws_restJson1_1HlsPackage(output.hlsPackage, context)
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    ManifestName:
      output.manifestName !== undefined && output.manifestName !== null
        ? output.manifestName
        : undefined,
    MssPackage:
      output.mssPackage !== undefined && output.mssPackage !== null
        ? deserializeAws_restJson1_1MssPackage(output.mssPackage, context)
        : undefined,
    Origination:
      output.origination !== undefined && output.origination !== null
        ? output.origination
        : undefined,
    StartoverWindowSeconds:
      output.startoverWindowSeconds !== undefined &&
      output.startoverWindowSeconds !== null
        ? output.startoverWindowSeconds
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1Tags(output.tags, context)
        : undefined,
    TimeDelaySeconds:
      output.timeDelaySeconds !== undefined && output.timeDelaySeconds !== null
        ? output.timeDelaySeconds
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined,
    Whitelist:
      output.whitelist !== undefined && output.whitelist !== null
        ? deserializeAws_restJson1_1__listOf__string(output.whitelist, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1S3Destination = (
  output: any,
  context: __SerdeContext
): S3Destination => {
  return {
    __type: "S3Destination",
    BucketName:
      output.bucketName !== undefined && output.bucketName !== null
        ? output.bucketName
        : undefined,
    ManifestKey:
      output.manifestKey !== undefined && output.manifestKey !== null
        ? output.manifestKey
        : undefined,
    RoleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SpekeKeyProvider = (
  output: any,
  context: __SerdeContext
): SpekeKeyProvider => {
  return {
    __type: "SpekeKeyProvider",
    CertificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null
        ? output.certificateArn
        : undefined,
    ResourceId:
      output.resourceId !== undefined && output.resourceId !== null
        ? output.resourceId
        : undefined,
    RoleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    SystemIds:
      output.systemIds !== undefined && output.systemIds !== null
        ? deserializeAws_restJson1_1__listOf__string(output.systemIds, context)
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined
  } as any;
};

const deserializeAws_restJson1_1StreamSelection = (
  output: any,
  context: __SerdeContext
): StreamSelection => {
  return {
    __type: "StreamSelection",
    MaxVideoBitsPerSecond:
      output.maxVideoBitsPerSecond !== undefined &&
      output.maxVideoBitsPerSecond !== null
        ? output.maxVideoBitsPerSecond
        : undefined,
    MinVideoBitsPerSecond:
      output.minVideoBitsPerSecond !== undefined &&
      output.minVideoBitsPerSecond !== null
        ? output.minVideoBitsPerSecond
        : undefined,
    StreamOrder:
      output.streamOrder !== undefined && output.streamOrder !== null
        ? output.streamOrder
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1__listOfChannel = (
  output: any,
  context: __SerdeContext
): Channel[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Channel(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfHarvestJob = (
  output: any,
  context: __SerdeContext
): HarvestJob[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HarvestJob(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfHlsManifest = (
  output: any,
  context: __SerdeContext
): HlsManifest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HlsManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfIngestEndpoint = (
  output: any,
  context: __SerdeContext
): IngestEndpoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IngestEndpoint(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOriginEndpoint = (
  output: any,
  context: __SerdeContext
): OriginEndpoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OriginEndpoint(entry, context)
  );
};

const deserializeAws_restJson1_1__listOf__PeriodTriggersElement = (
  output: any,
  context: __SerdeContext
): (__PeriodTriggersElement | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__string = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__mapOf__string = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
