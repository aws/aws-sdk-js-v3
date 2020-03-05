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

export async function serializeAws_restJson1_1CreateChannelCommand(
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
    query["nextToken"] = input.NextToken;
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
    query["includeChannelId"] = input.IncludeChannelId;
  }
  if (input.IncludeStatus !== undefined) {
    query["includeStatus"] = input.IncludeStatus;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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
    query["channelId"] = input.ChannelId;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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
}

async function deserializeAws_restJson1_1CreateChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateHarvestJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHarvestJobCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateHarvestJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHarvestJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateOriginEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginEndpointCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateOriginEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOriginEndpointCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteChannelCommandError(output, context);
  }
  const contents: DeleteChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteChannelResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteOriginEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointCommandOutput> {
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
}

async function deserializeAws_restJson1_1DeleteOriginEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOriginEndpointCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> {
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
}

async function deserializeAws_restJson1_1DescribeChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeHarvestJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHarvestJobCommandOutput> {
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
}

async function deserializeAws_restJson1_1DescribeHarvestJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHarvestJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeOriginEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOriginEndpointCommandOutput> {
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
}

async function deserializeAws_restJson1_1DescribeOriginEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOriginEndpointCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListChannelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListChannelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListHarvestJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHarvestJobsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListHarvestJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHarvestJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListOriginEndpointsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginEndpointsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListOriginEndpointsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginEndpointsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1RotateChannelCredentialsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateChannelCredentialsCommandOutput> {
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
}

async function deserializeAws_restJson1_1RotateChannelCredentialsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateChannelCredentialsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1RotateIngestEndpointCredentialsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateIngestEndpointCredentialsCommandOutput> {
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
}

async function deserializeAws_restJson1_1RotateIngestEndpointCredentialsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateIngestEndpointCredentialsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> {
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
}

async function deserializeAws_restJson1_1UpdateChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateOriginEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginEndpointCommandOutput> {
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
}

async function deserializeAws_restJson1_1UpdateOriginEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOriginEndpointCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnprocessableEntityExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: UnprocessableEntityException = {
    name: "UnprocessableEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AdTriggers = (
  input: Array<__AdTriggersElement | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
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
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1__listOfHlsManifestCreateOrUpdateParameters = (
  input: Array<HlsManifestCreateOrUpdateParameters>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1HlsManifestCreateOrUpdateParameters(
        entry,
        context
      )
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__PeriodTriggersElement = (
  input: Array<__PeriodTriggersElement | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__string = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__mapOf__string = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
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

const deserializeAws_restJson1_1Authorization = (
  output: any,
  context: __SerdeContext
): Authorization => {
  let contents: any = {
    __type: "Authorization",
    CdnIdentifierSecret: undefined,
    SecretsRoleArn: undefined
  };
  if (
    output.cdnIdentifierSecret !== undefined &&
    output.cdnIdentifierSecret !== null
  ) {
    contents.CdnIdentifierSecret = output.cdnIdentifierSecret;
  }
  if (output.secretsRoleArn !== undefined && output.secretsRoleArn !== null) {
    contents.SecretsRoleArn = output.secretsRoleArn;
  }
  return contents;
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
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.hlsIngest !== undefined && output.hlsIngest !== null) {
    contents.HlsIngest = deserializeAws_restJson1_1HlsIngest(
      output.hlsIngest,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (output.tags !== undefined && output.tags !== null) {
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
  if (
    output.keyRotationIntervalSeconds !== undefined &&
    output.keyRotationIntervalSeconds !== null
  ) {
    contents.KeyRotationIntervalSeconds = output.keyRotationIntervalSeconds;
  }
  if (
    output.spekeKeyProvider !== undefined &&
    output.spekeKeyProvider !== null
  ) {
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
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1CmafEncryption(
      output.encryption,
      context
    );
  }
  if (output.hlsManifests !== undefined && output.hlsManifests !== null) {
    contents.HlsManifests = deserializeAws_restJson1_1__listOfHlsManifest(
      output.hlsManifests,
      context
    );
  }
  if (
    output.segmentDurationSeconds !== undefined &&
    output.segmentDurationSeconds !== null
  ) {
    contents.SegmentDurationSeconds = output.segmentDurationSeconds;
  }
  if (output.segmentPrefix !== undefined && output.segmentPrefix !== null) {
    contents.SegmentPrefix = output.segmentPrefix;
  }
  if (output.streamSelection !== undefined && output.streamSelection !== null) {
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
  if (
    output.keyRotationIntervalSeconds !== undefined &&
    output.keyRotationIntervalSeconds !== null
  ) {
    contents.KeyRotationIntervalSeconds = output.keyRotationIntervalSeconds;
  }
  if (
    output.spekeKeyProvider !== undefined &&
    output.spekeKeyProvider !== null
  ) {
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
  if (output.adTriggers !== undefined && output.adTriggers !== null) {
    contents.AdTriggers = deserializeAws_restJson1_1AdTriggers(
      output.adTriggers,
      context
    );
  }
  if (
    output.adsOnDeliveryRestrictions !== undefined &&
    output.adsOnDeliveryRestrictions !== null
  ) {
    contents.AdsOnDeliveryRestrictions = output.adsOnDeliveryRestrictions;
  }
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1DashEncryption(
      output.encryption,
      context
    );
  }
  if (output.manifestLayout !== undefined && output.manifestLayout !== null) {
    contents.ManifestLayout = output.manifestLayout;
  }
  if (
    output.manifestWindowSeconds !== undefined &&
    output.manifestWindowSeconds !== null
  ) {
    contents.ManifestWindowSeconds = output.manifestWindowSeconds;
  }
  if (
    output.minBufferTimeSeconds !== undefined &&
    output.minBufferTimeSeconds !== null
  ) {
    contents.MinBufferTimeSeconds = output.minBufferTimeSeconds;
  }
  if (
    output.minUpdatePeriodSeconds !== undefined &&
    output.minUpdatePeriodSeconds !== null
  ) {
    contents.MinUpdatePeriodSeconds = output.minUpdatePeriodSeconds;
  }
  if (output.periodTriggers !== undefined && output.periodTriggers !== null) {
    contents.PeriodTriggers = deserializeAws_restJson1_1__listOf__PeriodTriggersElement(
      output.periodTriggers,
      context
    );
  }
  if (output.profile !== undefined && output.profile !== null) {
    contents.Profile = output.profile;
  }
  if (
    output.segmentDurationSeconds !== undefined &&
    output.segmentDurationSeconds !== null
  ) {
    contents.SegmentDurationSeconds = output.segmentDurationSeconds;
  }
  if (
    output.segmentTemplateFormat !== undefined &&
    output.segmentTemplateFormat !== null
  ) {
    contents.SegmentTemplateFormat = output.segmentTemplateFormat;
  }
  if (output.streamSelection !== undefined && output.streamSelection !== null) {
    contents.StreamSelection = deserializeAws_restJson1_1StreamSelection(
      output.streamSelection,
      context
    );
  }
  if (
    output.suggestedPresentationDelaySeconds !== undefined &&
    output.suggestedPresentationDelaySeconds !== null
  ) {
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
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.channelId !== undefined && output.channelId !== null) {
    contents.ChannelId = output.channelId;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.CreatedAt = output.createdAt;
  }
  if (output.endTime !== undefined && output.endTime !== null) {
    contents.EndTime = output.endTime;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (
    output.originEndpointId !== undefined &&
    output.originEndpointId !== null
  ) {
    contents.OriginEndpointId = output.originEndpointId;
  }
  if (output.s3Destination !== undefined && output.s3Destination !== null) {
    contents.S3Destination = deserializeAws_restJson1_1S3Destination(
      output.s3Destination,
      context
    );
  }
  if (output.startTime !== undefined && output.startTime !== null) {
    contents.StartTime = output.startTime;
  }
  if (output.status !== undefined && output.status !== null) {
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
  if (
    output.constantInitializationVector !== undefined &&
    output.constantInitializationVector !== null
  ) {
    contents.ConstantInitializationVector = output.constantInitializationVector;
  }
  if (
    output.encryptionMethod !== undefined &&
    output.encryptionMethod !== null
  ) {
    contents.EncryptionMethod = output.encryptionMethod;
  }
  if (
    output.keyRotationIntervalSeconds !== undefined &&
    output.keyRotationIntervalSeconds !== null
  ) {
    contents.KeyRotationIntervalSeconds = output.keyRotationIntervalSeconds;
  }
  if (output.repeatExtXKey !== undefined && output.repeatExtXKey !== null) {
    contents.RepeatExtXKey = output.repeatExtXKey;
  }
  if (
    output.spekeKeyProvider !== undefined &&
    output.spekeKeyProvider !== null
  ) {
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
  if (output.ingestEndpoints !== undefined && output.ingestEndpoints !== null) {
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
  if (output.adMarkers !== undefined && output.adMarkers !== null) {
    contents.AdMarkers = output.adMarkers;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (
    output.includeIframeOnlyStream !== undefined &&
    output.includeIframeOnlyStream !== null
  ) {
    contents.IncludeIframeOnlyStream = output.includeIframeOnlyStream;
  }
  if (output.manifestName !== undefined && output.manifestName !== null) {
    contents.ManifestName = output.manifestName;
  }
  if (output.playlistType !== undefined && output.playlistType !== null) {
    contents.PlaylistType = output.playlistType;
  }
  if (
    output.playlistWindowSeconds !== undefined &&
    output.playlistWindowSeconds !== null
  ) {
    contents.PlaylistWindowSeconds = output.playlistWindowSeconds;
  }
  if (
    output.programDateTimeIntervalSeconds !== undefined &&
    output.programDateTimeIntervalSeconds !== null
  ) {
    contents.ProgramDateTimeIntervalSeconds =
      output.programDateTimeIntervalSeconds;
  }
  if (output.url !== undefined && output.url !== null) {
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
  if (output.adMarkers !== undefined && output.adMarkers !== null) {
    contents.AdMarkers = output.adMarkers;
  }
  if (output.adTriggers !== undefined && output.adTriggers !== null) {
    contents.AdTriggers = deserializeAws_restJson1_1AdTriggers(
      output.adTriggers,
      context
    );
  }
  if (
    output.adsOnDeliveryRestrictions !== undefined &&
    output.adsOnDeliveryRestrictions !== null
  ) {
    contents.AdsOnDeliveryRestrictions = output.adsOnDeliveryRestrictions;
  }
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1HlsEncryption(
      output.encryption,
      context
    );
  }
  if (
    output.includeIframeOnlyStream !== undefined &&
    output.includeIframeOnlyStream !== null
  ) {
    contents.IncludeIframeOnlyStream = output.includeIframeOnlyStream;
  }
  if (output.playlistType !== undefined && output.playlistType !== null) {
    contents.PlaylistType = output.playlistType;
  }
  if (
    output.playlistWindowSeconds !== undefined &&
    output.playlistWindowSeconds !== null
  ) {
    contents.PlaylistWindowSeconds = output.playlistWindowSeconds;
  }
  if (
    output.programDateTimeIntervalSeconds !== undefined &&
    output.programDateTimeIntervalSeconds !== null
  ) {
    contents.ProgramDateTimeIntervalSeconds =
      output.programDateTimeIntervalSeconds;
  }
  if (
    output.segmentDurationSeconds !== undefined &&
    output.segmentDurationSeconds !== null
  ) {
    contents.SegmentDurationSeconds = output.segmentDurationSeconds;
  }
  if (output.streamSelection !== undefined && output.streamSelection !== null) {
    contents.StreamSelection = deserializeAws_restJson1_1StreamSelection(
      output.streamSelection,
      context
    );
  }
  if (
    output.useAudioRenditionGroup !== undefined &&
    output.useAudioRenditionGroup !== null
  ) {
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
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (output.password !== undefined && output.password !== null) {
    contents.Password = output.password;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.Url = output.url;
  }
  if (output.username !== undefined && output.username !== null) {
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
  if (
    output.spekeKeyProvider !== undefined &&
    output.spekeKeyProvider !== null
  ) {
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
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1MssEncryption(
      output.encryption,
      context
    );
  }
  if (
    output.manifestWindowSeconds !== undefined &&
    output.manifestWindowSeconds !== null
  ) {
    contents.ManifestWindowSeconds = output.manifestWindowSeconds;
  }
  if (
    output.segmentDurationSeconds !== undefined &&
    output.segmentDurationSeconds !== null
  ) {
    contents.SegmentDurationSeconds = output.segmentDurationSeconds;
  }
  if (output.streamSelection !== undefined && output.streamSelection !== null) {
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
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.authorization !== undefined && output.authorization !== null) {
    contents.Authorization = deserializeAws_restJson1_1Authorization(
      output.authorization,
      context
    );
  }
  if (output.channelId !== undefined && output.channelId !== null) {
    contents.ChannelId = output.channelId;
  }
  if (output.cmafPackage !== undefined && output.cmafPackage !== null) {
    contents.CmafPackage = deserializeAws_restJson1_1CmafPackage(
      output.cmafPackage,
      context
    );
  }
  if (output.dashPackage !== undefined && output.dashPackage !== null) {
    contents.DashPackage = deserializeAws_restJson1_1DashPackage(
      output.dashPackage,
      context
    );
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.hlsPackage !== undefined && output.hlsPackage !== null) {
    contents.HlsPackage = deserializeAws_restJson1_1HlsPackage(
      output.hlsPackage,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (output.manifestName !== undefined && output.manifestName !== null) {
    contents.ManifestName = output.manifestName;
  }
  if (output.mssPackage !== undefined && output.mssPackage !== null) {
    contents.MssPackage = deserializeAws_restJson1_1MssPackage(
      output.mssPackage,
      context
    );
  }
  if (output.origination !== undefined && output.origination !== null) {
    contents.Origination = output.origination;
  }
  if (
    output.startoverWindowSeconds !== undefined &&
    output.startoverWindowSeconds !== null
  ) {
    contents.StartoverWindowSeconds = output.startoverWindowSeconds;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  if (
    output.timeDelaySeconds !== undefined &&
    output.timeDelaySeconds !== null
  ) {
    contents.TimeDelaySeconds = output.timeDelaySeconds;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.Url = output.url;
  }
  if (output.whitelist !== undefined && output.whitelist !== null) {
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
  if (output.bucketName !== undefined && output.bucketName !== null) {
    contents.BucketName = output.bucketName;
  }
  if (output.manifestKey !== undefined && output.manifestKey !== null) {
    contents.ManifestKey = output.manifestKey;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
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
  if (output.certificateArn !== undefined && output.certificateArn !== null) {
    contents.CertificateArn = output.certificateArn;
  }
  if (output.resourceId !== undefined && output.resourceId !== null) {
    contents.ResourceId = output.resourceId;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.RoleArn = output.roleArn;
  }
  if (output.systemIds !== undefined && output.systemIds !== null) {
    contents.SystemIds = deserializeAws_restJson1_1__listOf__string(
      output.systemIds,
      context
    );
  }
  if (output.url !== undefined && output.url !== null) {
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
  if (
    output.maxVideoBitsPerSecond !== undefined &&
    output.maxVideoBitsPerSecond !== null
  ) {
    contents.MaxVideoBitsPerSecond = output.maxVideoBitsPerSecond;
  }
  if (
    output.minVideoBitsPerSecond !== undefined &&
    output.minVideoBitsPerSecond !== null
  ) {
    contents.MinVideoBitsPerSecond = output.minVideoBitsPerSecond;
  }
  if (output.streamOrder !== undefined && output.streamOrder !== null) {
    contents.StreamOrder = output.streamOrder;
  }
  return contents;
};

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
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
  const mapParams: any = {};
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

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
