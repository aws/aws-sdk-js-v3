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
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateChannelCommand(
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/channels";
  let body: any = {};
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateHarvestJobCommand(
  input: CreateHarvestJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/harvest_jobs";
  let body: any = {};
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateOriginEndpointCommand(
  input: CreateOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/origin_endpoints";
  let body: any = {};
  const bodyParams: any = {};
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteChannelCommand(
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/channels/{Id}";
  if (input.Id !== undefined) {
    const labelValue: any = input.Id.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteOriginEndpointCommand(
  input: DeleteOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/origin_endpoints/{Id}";
  if (input.Id !== undefined) {
    const labelValue: any = input.Id.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeChannelCommand(
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/channels/{Id}";
  if (input.Id !== undefined) {
    const labelValue: any = input.Id.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeHarvestJobCommand(
  input: DescribeHarvestJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/harvest_jobs/{Id}";
  if (input.Id !== undefined) {
    const labelValue: any = input.Id.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeOriginEndpointCommand(
  input: DescribeOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/origin_endpoints/{Id}";
  if (input.Id !== undefined) {
    const labelValue: any = input.Id.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListChannelsCommand(
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/channels";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListHarvestJobsCommand(
  input: ListHarvestJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/harvest_jobs";
  const query: any = {};
  if (input.IncludeChannelId !== undefined) {
    query["includeChannelId"] = input.IncludeChannelId.toString();
  }
  if (input.IncludeStatus !== undefined) {
    query["includeStatus"] = input.IncludeStatus.toString();
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListOriginEndpointsCommand(
  input: ListOriginEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/origin_endpoints";
  const query: any = {};
  if (input.ChannelId !== undefined) {
    query["channelId"] = input.ChannelId.toString();
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1RotateChannelCredentialsCommand(
  input: RotateChannelCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/channels/{Id}/credentials";
  if (input.Id !== undefined) {
    const labelValue: any = input.Id.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1RotateIngestEndpointCredentialsCommand(
  input: RotateIngestEndpointCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/channels/{Id}/ingest_endpoints/{IngestEndpointId}/credentials";
  if (input.Id !== undefined) {
    const labelValue: any = input.Id.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  if (input.IngestEndpointId !== undefined) {
    const labelValue: any = input.IngestEndpointId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: IngestEndpointId."
      );
    }
    resolvedPath = resolvedPath.replace("{IngestEndpointId}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: IngestEndpointId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
      context
    );
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

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query["tagKeys"] = input.TagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateChannelCommand(
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/channels/{Id}";
  if (input.Id !== undefined) {
    const labelValue: any = input.Id.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
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

export async function serializeAws_restJson1_1UpdateOriginEndpointCommand(
  input: UpdateOriginEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/origin_endpoints/{Id}";
  if (input.Id !== undefined) {
    const labelValue: any = input.Id.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
  let body: any = {};
  const bodyParams: any = {};
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.hlsIngest !== undefined) {
    contents.HlsIngest = deserializeAws_restJson1_1HlsIngest(
      data.hlsIngest,
      context
    );
  }
  if (data.id !== undefined) {
    contents.Id = data.id;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateHarvestJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHarvestJobCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.channelId !== undefined) {
    contents.ChannelId = data.channelId;
  }
  if (data.createdAt !== undefined) {
    contents.CreatedAt = data.createdAt;
  }
  if (data.endTime !== undefined) {
    contents.EndTime = data.endTime;
  }
  if (data.id !== undefined) {
    contents.Id = data.id;
  }
  if (data.originEndpointId !== undefined) {
    contents.OriginEndpointId = data.originEndpointId;
  }
  if (data.s3Destination !== undefined) {
    contents.S3Destination = deserializeAws_restJson1_1S3Destination(
      data.s3Destination,
      context
    );
  }
  if (data.startTime !== undefined) {
    contents.StartTime = data.startTime;
  }
  if (data.status !== undefined) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateHarvestJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHarvestJobCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateOriginEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginEndpointCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateOriginEndpointCommandError(
      output,
      context
    );
  }
  const contents: CreateOriginEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateOriginEndpointResponse",
    Arn: undefined,
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
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.channelId !== undefined) {
    contents.ChannelId = data.channelId;
  }
  if (data.cmafPackage !== undefined) {
    contents.CmafPackage = deserializeAws_restJson1_1CmafPackage(
      data.cmafPackage,
      context
    );
  }
  if (data.dashPackage !== undefined) {
    contents.DashPackage = deserializeAws_restJson1_1DashPackage(
      data.dashPackage,
      context
    );
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.hlsPackage !== undefined) {
    contents.HlsPackage = deserializeAws_restJson1_1HlsPackage(
      data.hlsPackage,
      context
    );
  }
  if (data.id !== undefined) {
    contents.Id = data.id;
  }
  if (data.manifestName !== undefined) {
    contents.ManifestName = data.manifestName;
  }
  if (data.mssPackage !== undefined) {
    contents.MssPackage = deserializeAws_restJson1_1MssPackage(
      data.mssPackage,
      context
    );
  }
  if (data.origination !== undefined) {
    contents.Origination = data.origination;
  }
  if (data.startoverWindowSeconds !== undefined) {
    contents.StartoverWindowSeconds = data.startoverWindowSeconds;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.timeDelaySeconds !== undefined) {
    contents.TimeDelaySeconds = data.timeDelaySeconds;
  }
  if (data.url !== undefined) {
    contents.Url = data.url;
  }
  if (data.whitelist !== undefined) {
    contents.Whitelist = deserializeAws_restJson1_1__listOf__string(
      data.whitelist,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateOriginEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginEndpointCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> {
  if (output.statusCode !== 202) {
    return deserializeAws_restJson1_1DeleteChannelCommandError(output, context);
  }
  const contents: DeleteChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteChannelResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteOriginEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointCommandOutput> {
  if (output.statusCode !== 202) {
    return deserializeAws_restJson1_1DeleteOriginEndpointCommandError(
      output,
      context
    );
  }
  const contents: DeleteOriginEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteOriginEndpointResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteOriginEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.hlsIngest !== undefined) {
    contents.HlsIngest = deserializeAws_restJson1_1HlsIngest(
      data.hlsIngest,
      context
    );
  }
  if (data.id !== undefined) {
    contents.Id = data.id;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeHarvestJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHarvestJobCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.channelId !== undefined) {
    contents.ChannelId = data.channelId;
  }
  if (data.createdAt !== undefined) {
    contents.CreatedAt = data.createdAt;
  }
  if (data.endTime !== undefined) {
    contents.EndTime = data.endTime;
  }
  if (data.id !== undefined) {
    contents.Id = data.id;
  }
  if (data.originEndpointId !== undefined) {
    contents.OriginEndpointId = data.originEndpointId;
  }
  if (data.s3Destination !== undefined) {
    contents.S3Destination = deserializeAws_restJson1_1S3Destination(
      data.s3Destination,
      context
    );
  }
  if (data.startTime !== undefined) {
    contents.StartTime = data.startTime;
  }
  if (data.status !== undefined) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeHarvestJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHarvestJobCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeOriginEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOriginEndpointCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeOriginEndpointCommandError(
      output,
      context
    );
  }
  const contents: DescribeOriginEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeOriginEndpointResponse",
    Arn: undefined,
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
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.channelId !== undefined) {
    contents.ChannelId = data.channelId;
  }
  if (data.cmafPackage !== undefined) {
    contents.CmafPackage = deserializeAws_restJson1_1CmafPackage(
      data.cmafPackage,
      context
    );
  }
  if (data.dashPackage !== undefined) {
    contents.DashPackage = deserializeAws_restJson1_1DashPackage(
      data.dashPackage,
      context
    );
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.hlsPackage !== undefined) {
    contents.HlsPackage = deserializeAws_restJson1_1HlsPackage(
      data.hlsPackage,
      context
    );
  }
  if (data.id !== undefined) {
    contents.Id = data.id;
  }
  if (data.manifestName !== undefined) {
    contents.ManifestName = data.manifestName;
  }
  if (data.mssPackage !== undefined) {
    contents.MssPackage = deserializeAws_restJson1_1MssPackage(
      data.mssPackage,
      context
    );
  }
  if (data.origination !== undefined) {
    contents.Origination = data.origination;
  }
  if (data.startoverWindowSeconds !== undefined) {
    contents.StartoverWindowSeconds = data.startoverWindowSeconds;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.timeDelaySeconds !== undefined) {
    contents.TimeDelaySeconds = data.timeDelaySeconds;
  }
  if (data.url !== undefined) {
    contents.Url = data.url;
  }
  if (data.whitelist !== undefined) {
    contents.Whitelist = deserializeAws_restJson1_1__listOf__string(
      data.whitelist,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeOriginEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOriginEndpointCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListChannelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListChannelsCommandError(output, context);
  }
  const contents: ListChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListChannelsResponse",
    Channels: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channels !== undefined) {
    contents.Channels = deserializeAws_restJson1_1__listOfChannel(
      data.channels,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListChannelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListHarvestJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHarvestJobsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.harvestJobs !== undefined) {
    contents.HarvestJobs = deserializeAws_restJson1_1__listOfHarvestJob(
      data.harvestJobs,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListHarvestJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHarvestJobsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListOriginEndpointsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginEndpointsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  if (data.originEndpoints !== undefined) {
    contents.OriginEndpoints = deserializeAws_restJson1_1__listOfOriginEndpoint(
      data.originEndpoints,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListOriginEndpointsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginEndpointsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      data.tags,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1RotateChannelCredentialsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateChannelCredentialsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.hlsIngest !== undefined) {
    contents.HlsIngest = deserializeAws_restJson1_1HlsIngest(
      data.hlsIngest,
      context
    );
  }
  if (data.id !== undefined) {
    contents.Id = data.id;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RotateChannelCredentialsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateChannelCredentialsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1RotateIngestEndpointCredentialsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateIngestEndpointCredentialsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.hlsIngest !== undefined) {
    contents.HlsIngest = deserializeAws_restJson1_1HlsIngest(
      data.hlsIngest,
      context
    );
  }
  if (data.id !== undefined) {
    contents.Id = data.id;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RotateIngestEndpointCredentialsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateIngestEndpointCredentialsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.hlsIngest !== undefined) {
    contents.HlsIngest = deserializeAws_restJson1_1HlsIngest(
      data.hlsIngest,
      context
    );
  }
  if (data.id !== undefined) {
    contents.Id = data.id;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateOriginEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginEndpointCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateOriginEndpointCommandError(
      output,
      context
    );
  }
  const contents: UpdateOriginEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateOriginEndpointResponse",
    Arn: undefined,
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
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.channelId !== undefined) {
    contents.ChannelId = data.channelId;
  }
  if (data.cmafPackage !== undefined) {
    contents.CmafPackage = deserializeAws_restJson1_1CmafPackage(
      data.cmafPackage,
      context
    );
  }
  if (data.dashPackage !== undefined) {
    contents.DashPackage = deserializeAws_restJson1_1DashPackage(
      data.dashPackage,
      context
    );
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.hlsPackage !== undefined) {
    contents.HlsPackage = deserializeAws_restJson1_1HlsPackage(
      data.hlsPackage,
      context
    );
  }
  if (data.id !== undefined) {
    contents.Id = data.id;
  }
  if (data.manifestName !== undefined) {
    contents.ManifestName = data.manifestName;
  }
  if (data.mssPackage !== undefined) {
    contents.MssPackage = deserializeAws_restJson1_1MssPackage(
      data.mssPackage,
      context
    );
  }
  if (data.origination !== undefined) {
    contents.Origination = data.origination;
  }
  if (data.startoverWindowSeconds !== undefined) {
    contents.StartoverWindowSeconds = data.startoverWindowSeconds;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.timeDelaySeconds !== undefined) {
    contents.TimeDelaySeconds = data.timeDelaySeconds;
  }
  if (data.url !== undefined) {
    contents.Url = data.url;
  }
  if (data.whitelist !== undefined) {
    contents.Whitelist = deserializeAws_restJson1_1__listOf__string(
      data.whitelist,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateOriginEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginEndpointCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.mediapackage#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    __type: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    __type: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    __type: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnprocessableEntityExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: UnprocessableEntityException = {
    __type: "UnprocessableEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AdTriggers = (
  input: Array<__AdTriggersElement | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1CmafEncryption = (
  input: CmafEncryption,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1__listOfHlsManifestCreateOrUpdateParameters = (
  input: Array<HlsManifestCreateOrUpdateParameters>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1HlsManifestCreateOrUpdateParameters(entry, context)
  );
};

const serializeAws_restJson1_1__listOf__PeriodTriggersElement = (
  input: Array<__PeriodTriggersElement | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1__listOf__string = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1__mapOf__string = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1AdTriggers = (
  output: any,
  context: __SerdeContext
): Array<__AdTriggersElement | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Channel = (
  output: any,
  context: __SerdeContext
): Channel => {
  let contents: any = {
    __type: "Channel",
    Arn: undefined,
    Description: undefined,
    HlsIngest: undefined,
    Id: undefined,
    Tags: undefined
  };
  if (output.arn !== undefined) {
    contents.Arn = output.arn;
  }
  if (output.description !== undefined) {
    contents.Description = output.description;
  }
  if (output.hlsIngest !== undefined) {
    contents.HlsIngest = deserializeAws_restJson1_1HlsIngest(
      output.hlsIngest,
      context
    );
  }
  if (output.id !== undefined) {
    contents.Id = output.id;
  }
  if (output.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1CmafEncryption = (
  output: any,
  context: __SerdeContext
): CmafEncryption => {
  let contents: any = {
    __type: "CmafEncryption",
    KeyRotationIntervalSeconds: undefined,
    SpekeKeyProvider: undefined
  };
  if (output.keyRotationIntervalSeconds !== undefined) {
    contents.KeyRotationIntervalSeconds = output.keyRotationIntervalSeconds;
  }
  if (output.spekeKeyProvider !== undefined) {
    contents.SpekeKeyProvider = deserializeAws_restJson1_1SpekeKeyProvider(
      output.spekeKeyProvider,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CmafPackage = (
  output: any,
  context: __SerdeContext
): CmafPackage => {
  let contents: any = {
    __type: "CmafPackage",
    Encryption: undefined,
    HlsManifests: undefined,
    SegmentDurationSeconds: undefined,
    SegmentPrefix: undefined,
    StreamSelection: undefined
  };
  if (output.encryption !== undefined) {
    contents.Encryption = deserializeAws_restJson1_1CmafEncryption(
      output.encryption,
      context
    );
  }
  if (output.hlsManifests !== undefined) {
    contents.HlsManifests = deserializeAws_restJson1_1__listOfHlsManifest(
      output.hlsManifests,
      context
    );
  }
  if (output.segmentDurationSeconds !== undefined) {
    contents.SegmentDurationSeconds = output.segmentDurationSeconds;
  }
  if (output.segmentPrefix !== undefined) {
    contents.SegmentPrefix = output.segmentPrefix;
  }
  if (output.streamSelection !== undefined) {
    contents.StreamSelection = deserializeAws_restJson1_1StreamSelection(
      output.streamSelection,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DashEncryption = (
  output: any,
  context: __SerdeContext
): DashEncryption => {
  let contents: any = {
    __type: "DashEncryption",
    KeyRotationIntervalSeconds: undefined,
    SpekeKeyProvider: undefined
  };
  if (output.keyRotationIntervalSeconds !== undefined) {
    contents.KeyRotationIntervalSeconds = output.keyRotationIntervalSeconds;
  }
  if (output.spekeKeyProvider !== undefined) {
    contents.SpekeKeyProvider = deserializeAws_restJson1_1SpekeKeyProvider(
      output.spekeKeyProvider,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DashPackage = (
  output: any,
  context: __SerdeContext
): DashPackage => {
  let contents: any = {
    __type: "DashPackage",
    AdTriggers: undefined,
    AdsOnDeliveryRestrictions: undefined,
    Encryption: undefined,
    ManifestLayout: undefined,
    ManifestWindowSeconds: undefined,
    MinBufferTimeSeconds: undefined,
    MinUpdatePeriodSeconds: undefined,
    PeriodTriggers: undefined,
    Profile: undefined,
    SegmentDurationSeconds: undefined,
    SegmentTemplateFormat: undefined,
    StreamSelection: undefined,
    SuggestedPresentationDelaySeconds: undefined
  };
  if (output.adTriggers !== undefined) {
    contents.AdTriggers = deserializeAws_restJson1_1AdTriggers(
      output.adTriggers,
      context
    );
  }
  if (output.adsOnDeliveryRestrictions !== undefined) {
    contents.AdsOnDeliveryRestrictions = output.adsOnDeliveryRestrictions;
  }
  if (output.encryption !== undefined) {
    contents.Encryption = deserializeAws_restJson1_1DashEncryption(
      output.encryption,
      context
    );
  }
  if (output.manifestLayout !== undefined) {
    contents.ManifestLayout = output.manifestLayout;
  }
  if (output.manifestWindowSeconds !== undefined) {
    contents.ManifestWindowSeconds = output.manifestWindowSeconds;
  }
  if (output.minBufferTimeSeconds !== undefined) {
    contents.MinBufferTimeSeconds = output.minBufferTimeSeconds;
  }
  if (output.minUpdatePeriodSeconds !== undefined) {
    contents.MinUpdatePeriodSeconds = output.minUpdatePeriodSeconds;
  }
  if (output.periodTriggers !== undefined) {
    contents.PeriodTriggers = deserializeAws_restJson1_1__listOf__PeriodTriggersElement(
      output.periodTriggers,
      context
    );
  }
  if (output.profile !== undefined) {
    contents.Profile = output.profile;
  }
  if (output.segmentDurationSeconds !== undefined) {
    contents.SegmentDurationSeconds = output.segmentDurationSeconds;
  }
  if (output.segmentTemplateFormat !== undefined) {
    contents.SegmentTemplateFormat = output.segmentTemplateFormat;
  }
  if (output.streamSelection !== undefined) {
    contents.StreamSelection = deserializeAws_restJson1_1StreamSelection(
      output.streamSelection,
      context
    );
  }
  if (output.suggestedPresentationDelaySeconds !== undefined) {
    contents.SuggestedPresentationDelaySeconds =
      output.suggestedPresentationDelaySeconds;
  }
  return contents;
};

const deserializeAws_restJson1_1HarvestJob = (
  output: any,
  context: __SerdeContext
): HarvestJob => {
  let contents: any = {
    __type: "HarvestJob",
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
  if (output.arn !== undefined) {
    contents.Arn = output.arn;
  }
  if (output.channelId !== undefined) {
    contents.ChannelId = output.channelId;
  }
  if (output.createdAt !== undefined) {
    contents.CreatedAt = output.createdAt;
  }
  if (output.endTime !== undefined) {
    contents.EndTime = output.endTime;
  }
  if (output.id !== undefined) {
    contents.Id = output.id;
  }
  if (output.originEndpointId !== undefined) {
    contents.OriginEndpointId = output.originEndpointId;
  }
  if (output.s3Destination !== undefined) {
    contents.S3Destination = deserializeAws_restJson1_1S3Destination(
      output.s3Destination,
      context
    );
  }
  if (output.startTime !== undefined) {
    contents.StartTime = output.startTime;
  }
  if (output.status !== undefined) {
    contents.Status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsEncryption = (
  output: any,
  context: __SerdeContext
): HlsEncryption => {
  let contents: any = {
    __type: "HlsEncryption",
    ConstantInitializationVector: undefined,
    EncryptionMethod: undefined,
    KeyRotationIntervalSeconds: undefined,
    RepeatExtXKey: undefined,
    SpekeKeyProvider: undefined
  };
  if (output.constantInitializationVector !== undefined) {
    contents.ConstantInitializationVector = output.constantInitializationVector;
  }
  if (output.encryptionMethod !== undefined) {
    contents.EncryptionMethod = output.encryptionMethod;
  }
  if (output.keyRotationIntervalSeconds !== undefined) {
    contents.KeyRotationIntervalSeconds = output.keyRotationIntervalSeconds;
  }
  if (output.repeatExtXKey !== undefined) {
    contents.RepeatExtXKey = output.repeatExtXKey;
  }
  if (output.spekeKeyProvider !== undefined) {
    contents.SpekeKeyProvider = deserializeAws_restJson1_1SpekeKeyProvider(
      output.spekeKeyProvider,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HlsIngest = (
  output: any,
  context: __SerdeContext
): HlsIngest => {
  let contents: any = {
    __type: "HlsIngest",
    IngestEndpoints: undefined
  };
  if (output.ingestEndpoints !== undefined) {
    contents.IngestEndpoints = deserializeAws_restJson1_1__listOfIngestEndpoint(
      output.ingestEndpoints,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HlsManifest = (
  output: any,
  context: __SerdeContext
): HlsManifest => {
  let contents: any = {
    __type: "HlsManifest",
    AdMarkers: undefined,
    Id: undefined,
    IncludeIframeOnlyStream: undefined,
    ManifestName: undefined,
    PlaylistType: undefined,
    PlaylistWindowSeconds: undefined,
    ProgramDateTimeIntervalSeconds: undefined,
    Url: undefined
  };
  if (output.adMarkers !== undefined) {
    contents.AdMarkers = output.adMarkers;
  }
  if (output.id !== undefined) {
    contents.Id = output.id;
  }
  if (output.includeIframeOnlyStream !== undefined) {
    contents.IncludeIframeOnlyStream = output.includeIframeOnlyStream;
  }
  if (output.manifestName !== undefined) {
    contents.ManifestName = output.manifestName;
  }
  if (output.playlistType !== undefined) {
    contents.PlaylistType = output.playlistType;
  }
  if (output.playlistWindowSeconds !== undefined) {
    contents.PlaylistWindowSeconds = output.playlistWindowSeconds;
  }
  if (output.programDateTimeIntervalSeconds !== undefined) {
    contents.ProgramDateTimeIntervalSeconds =
      output.programDateTimeIntervalSeconds;
  }
  if (output.url !== undefined) {
    contents.Url = output.url;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsPackage = (
  output: any,
  context: __SerdeContext
): HlsPackage => {
  let contents: any = {
    __type: "HlsPackage",
    AdMarkers: undefined,
    AdTriggers: undefined,
    AdsOnDeliveryRestrictions: undefined,
    Encryption: undefined,
    IncludeIframeOnlyStream: undefined,
    PlaylistType: undefined,
    PlaylistWindowSeconds: undefined,
    ProgramDateTimeIntervalSeconds: undefined,
    SegmentDurationSeconds: undefined,
    StreamSelection: undefined,
    UseAudioRenditionGroup: undefined
  };
  if (output.adMarkers !== undefined) {
    contents.AdMarkers = output.adMarkers;
  }
  if (output.adTriggers !== undefined) {
    contents.AdTriggers = deserializeAws_restJson1_1AdTriggers(
      output.adTriggers,
      context
    );
  }
  if (output.adsOnDeliveryRestrictions !== undefined) {
    contents.AdsOnDeliveryRestrictions = output.adsOnDeliveryRestrictions;
  }
  if (output.encryption !== undefined) {
    contents.Encryption = deserializeAws_restJson1_1HlsEncryption(
      output.encryption,
      context
    );
  }
  if (output.includeIframeOnlyStream !== undefined) {
    contents.IncludeIframeOnlyStream = output.includeIframeOnlyStream;
  }
  if (output.playlistType !== undefined) {
    contents.PlaylistType = output.playlistType;
  }
  if (output.playlistWindowSeconds !== undefined) {
    contents.PlaylistWindowSeconds = output.playlistWindowSeconds;
  }
  if (output.programDateTimeIntervalSeconds !== undefined) {
    contents.ProgramDateTimeIntervalSeconds =
      output.programDateTimeIntervalSeconds;
  }
  if (output.segmentDurationSeconds !== undefined) {
    contents.SegmentDurationSeconds = output.segmentDurationSeconds;
  }
  if (output.streamSelection !== undefined) {
    contents.StreamSelection = deserializeAws_restJson1_1StreamSelection(
      output.streamSelection,
      context
    );
  }
  if (output.useAudioRenditionGroup !== undefined) {
    contents.UseAudioRenditionGroup = output.useAudioRenditionGroup;
  }
  return contents;
};

const deserializeAws_restJson1_1IngestEndpoint = (
  output: any,
  context: __SerdeContext
): IngestEndpoint => {
  let contents: any = {
    __type: "IngestEndpoint",
    Id: undefined,
    Password: undefined,
    Url: undefined,
    Username: undefined
  };
  if (output.id !== undefined) {
    contents.Id = output.id;
  }
  if (output.password !== undefined) {
    contents.Password = output.password;
  }
  if (output.url !== undefined) {
    contents.Url = output.url;
  }
  if (output.username !== undefined) {
    contents.Username = output.username;
  }
  return contents;
};

const deserializeAws_restJson1_1MssEncryption = (
  output: any,
  context: __SerdeContext
): MssEncryption => {
  let contents: any = {
    __type: "MssEncryption",
    SpekeKeyProvider: undefined
  };
  if (output.spekeKeyProvider !== undefined) {
    contents.SpekeKeyProvider = deserializeAws_restJson1_1SpekeKeyProvider(
      output.spekeKeyProvider,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MssPackage = (
  output: any,
  context: __SerdeContext
): MssPackage => {
  let contents: any = {
    __type: "MssPackage",
    Encryption: undefined,
    ManifestWindowSeconds: undefined,
    SegmentDurationSeconds: undefined,
    StreamSelection: undefined
  };
  if (output.encryption !== undefined) {
    contents.Encryption = deserializeAws_restJson1_1MssEncryption(
      output.encryption,
      context
    );
  }
  if (output.manifestWindowSeconds !== undefined) {
    contents.ManifestWindowSeconds = output.manifestWindowSeconds;
  }
  if (output.segmentDurationSeconds !== undefined) {
    contents.SegmentDurationSeconds = output.segmentDurationSeconds;
  }
  if (output.streamSelection !== undefined) {
    contents.StreamSelection = deserializeAws_restJson1_1StreamSelection(
      output.streamSelection,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1OriginEndpoint = (
  output: any,
  context: __SerdeContext
): OriginEndpoint => {
  let contents: any = {
    __type: "OriginEndpoint",
    Arn: undefined,
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
  if (output.arn !== undefined) {
    contents.Arn = output.arn;
  }
  if (output.channelId !== undefined) {
    contents.ChannelId = output.channelId;
  }
  if (output.cmafPackage !== undefined) {
    contents.CmafPackage = deserializeAws_restJson1_1CmafPackage(
      output.cmafPackage,
      context
    );
  }
  if (output.dashPackage !== undefined) {
    contents.DashPackage = deserializeAws_restJson1_1DashPackage(
      output.dashPackage,
      context
    );
  }
  if (output.description !== undefined) {
    contents.Description = output.description;
  }
  if (output.hlsPackage !== undefined) {
    contents.HlsPackage = deserializeAws_restJson1_1HlsPackage(
      output.hlsPackage,
      context
    );
  }
  if (output.id !== undefined) {
    contents.Id = output.id;
  }
  if (output.manifestName !== undefined) {
    contents.ManifestName = output.manifestName;
  }
  if (output.mssPackage !== undefined) {
    contents.MssPackage = deserializeAws_restJson1_1MssPackage(
      output.mssPackage,
      context
    );
  }
  if (output.origination !== undefined) {
    contents.Origination = output.origination;
  }
  if (output.startoverWindowSeconds !== undefined) {
    contents.StartoverWindowSeconds = output.startoverWindowSeconds;
  }
  if (output.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  if (output.timeDelaySeconds !== undefined) {
    contents.TimeDelaySeconds = output.timeDelaySeconds;
  }
  if (output.url !== undefined) {
    contents.Url = output.url;
  }
  if (output.whitelist !== undefined) {
    contents.Whitelist = deserializeAws_restJson1_1__listOf__string(
      output.whitelist,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1S3Destination = (
  output: any,
  context: __SerdeContext
): S3Destination => {
  let contents: any = {
    __type: "S3Destination",
    BucketName: undefined,
    ManifestKey: undefined,
    RoleArn: undefined
  };
  if (output.bucketName !== undefined) {
    contents.BucketName = output.bucketName;
  }
  if (output.manifestKey !== undefined) {
    contents.ManifestKey = output.manifestKey;
  }
  if (output.roleArn !== undefined) {
    contents.RoleArn = output.roleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1SpekeKeyProvider = (
  output: any,
  context: __SerdeContext
): SpekeKeyProvider => {
  let contents: any = {
    __type: "SpekeKeyProvider",
    CertificateArn: undefined,
    ResourceId: undefined,
    RoleArn: undefined,
    SystemIds: undefined,
    Url: undefined
  };
  if (output.certificateArn !== undefined) {
    contents.CertificateArn = output.certificateArn;
  }
  if (output.resourceId !== undefined) {
    contents.ResourceId = output.resourceId;
  }
  if (output.roleArn !== undefined) {
    contents.RoleArn = output.roleArn;
  }
  if (output.systemIds !== undefined) {
    contents.SystemIds = deserializeAws_restJson1_1__listOf__string(
      output.systemIds,
      context
    );
  }
  if (output.url !== undefined) {
    contents.Url = output.url;
  }
  return contents;
};

const deserializeAws_restJson1_1StreamSelection = (
  output: any,
  context: __SerdeContext
): StreamSelection => {
  let contents: any = {
    __type: "StreamSelection",
    MaxVideoBitsPerSecond: undefined,
    MinVideoBitsPerSecond: undefined,
    StreamOrder: undefined
  };
  if (output.maxVideoBitsPerSecond !== undefined) {
    contents.MaxVideoBitsPerSecond = output.maxVideoBitsPerSecond;
  }
  if (output.minVideoBitsPerSecond !== undefined) {
    contents.MinVideoBitsPerSecond = output.minVideoBitsPerSecond;
  }
  if (output.streamOrder !== undefined) {
    contents.StreamOrder = output.streamOrder;
  }
  return contents;
};

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1__listOfChannel = (
  output: any,
  context: __SerdeContext
): Array<Channel> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Channel(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfHarvestJob = (
  output: any,
  context: __SerdeContext
): Array<HarvestJob> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HarvestJob(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfHlsManifest = (
  output: any,
  context: __SerdeContext
): Array<HlsManifest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HlsManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfIngestEndpoint = (
  output: any,
  context: __SerdeContext
): Array<IngestEndpoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IngestEndpoint(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOriginEndpoint = (
  output: any,
  context: __SerdeContext
): Array<OriginEndpoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OriginEndpoint(entry, context)
  );
};

const deserializeAws_restJson1_1__listOf__PeriodTriggersElement = (
  output: any,
  context: __SerdeContext
): Array<__PeriodTriggersElement | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__string = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__mapOf__string = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
