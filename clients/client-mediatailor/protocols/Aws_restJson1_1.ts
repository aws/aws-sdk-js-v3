import {
  DeletePlaybackConfigurationCommandInput,
  DeletePlaybackConfigurationCommandOutput
} from "../commands/DeletePlaybackConfigurationCommand";
import {
  GetPlaybackConfigurationCommandInput,
  GetPlaybackConfigurationCommandOutput
} from "../commands/GetPlaybackConfigurationCommand";
import {
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput
} from "../commands/ListPlaybackConfigurationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PutPlaybackConfigurationCommandInput,
  PutPlaybackConfigurationCommandOutput
} from "../commands/PutPlaybackConfigurationCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  BadRequestException,
  CdnConfiguration,
  DashConfiguration,
  DashConfigurationForPut,
  HlsConfiguration,
  LivePreRollConfiguration,
  PlaybackConfiguration
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

export async function serializeAws_restJson1_1DeletePlaybackConfigurationCommand(
  input: DeletePlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/playbackConfiguration/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetPlaybackConfigurationCommand(
  input: GetPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/playbackConfiguration/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListPlaybackConfigurationsCommand(
  input: ListPlaybackConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/playbackConfigurations";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1PutPlaybackConfigurationCommand(
  input: PutPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/playbackConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.AdDecisionServerUrl !== undefined) {
    bodyParams["AdDecisionServerUrl"] = input.AdDecisionServerUrl;
  }
  if (input.CdnConfiguration !== undefined) {
    bodyParams["CdnConfiguration"] = serializeAws_restJson1_1CdnConfiguration(
      input.CdnConfiguration,
      context
    );
  }
  if (input.DashConfiguration !== undefined) {
    bodyParams[
      "DashConfiguration"
    ] = serializeAws_restJson1_1DashConfigurationForPut(
      input.DashConfiguration,
      context
    );
  }
  if (input.LivePreRollConfiguration !== undefined) {
    bodyParams[
      "LivePreRollConfiguration"
    ] = serializeAws_restJson1_1LivePreRollConfiguration(
      input.LivePreRollConfiguration,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.SlateAdUrl !== undefined) {
    bodyParams["SlateAdUrl"] = input.SlateAdUrl;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
      context
    );
  }
  if (input.TranscodeProfileName !== undefined) {
    bodyParams["TranscodeProfileName"] = input.TranscodeProfileName;
  }
  if (input.VideoContentSourceUrl !== undefined) {
    bodyParams["VideoContentSourceUrl"] = input.VideoContentSourceUrl;
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

export async function deserializeAws_restJson1_1DeletePlaybackConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackConfigurationCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeletePlaybackConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DeletePlaybackConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePlaybackConfigurationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeletePlaybackConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackConfigurationCommandOutput> {
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

export async function deserializeAws_restJson1_1GetPlaybackConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetPlaybackConfigurationCommandError(
      output,
      context
    );
  }
  const contents: GetPlaybackConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPlaybackConfigurationResponse",
    AdDecisionServerUrl: undefined,
    CdnConfiguration: undefined,
    DashConfiguration: undefined,
    HlsConfiguration: undefined,
    LivePreRollConfiguration: undefined,
    Name: undefined,
    PlaybackConfigurationArn: undefined,
    PlaybackEndpointPrefix: undefined,
    SessionInitializationEndpointPrefix: undefined,
    SlateAdUrl: undefined,
    Tags: undefined,
    TranscodeProfileName: undefined,
    VideoContentSourceUrl: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.AdDecisionServerUrl !== undefined &&
    data.AdDecisionServerUrl !== null
  ) {
    contents.AdDecisionServerUrl = data.AdDecisionServerUrl;
  }
  if (data.CdnConfiguration !== undefined && data.CdnConfiguration !== null) {
    contents.CdnConfiguration = deserializeAws_restJson1_1CdnConfiguration(
      data.CdnConfiguration,
      context
    );
  }
  if (data.DashConfiguration !== undefined && data.DashConfiguration !== null) {
    contents.DashConfiguration = deserializeAws_restJson1_1DashConfiguration(
      data.DashConfiguration,
      context
    );
  }
  if (data.HlsConfiguration !== undefined && data.HlsConfiguration !== null) {
    contents.HlsConfiguration = deserializeAws_restJson1_1HlsConfiguration(
      data.HlsConfiguration,
      context
    );
  }
  if (
    data.LivePreRollConfiguration !== undefined &&
    data.LivePreRollConfiguration !== null
  ) {
    contents.LivePreRollConfiguration = deserializeAws_restJson1_1LivePreRollConfiguration(
      data.LivePreRollConfiguration,
      context
    );
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (
    data.PlaybackConfigurationArn !== undefined &&
    data.PlaybackConfigurationArn !== null
  ) {
    contents.PlaybackConfigurationArn = data.PlaybackConfigurationArn;
  }
  if (
    data.PlaybackEndpointPrefix !== undefined &&
    data.PlaybackEndpointPrefix !== null
  ) {
    contents.PlaybackEndpointPrefix = data.PlaybackEndpointPrefix;
  }
  if (
    data.SessionInitializationEndpointPrefix !== undefined &&
    data.SessionInitializationEndpointPrefix !== null
  ) {
    contents.SessionInitializationEndpointPrefix =
      data.SessionInitializationEndpointPrefix;
  }
  if (data.SlateAdUrl !== undefined && data.SlateAdUrl !== null) {
    contents.SlateAdUrl = data.SlateAdUrl;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      data.tags,
      context
    );
  }
  if (
    data.TranscodeProfileName !== undefined &&
    data.TranscodeProfileName !== null
  ) {
    contents.TranscodeProfileName = data.TranscodeProfileName;
  }
  if (
    data.VideoContentSourceUrl !== undefined &&
    data.VideoContentSourceUrl !== null
  ) {
    contents.VideoContentSourceUrl = data.VideoContentSourceUrl;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetPlaybackConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackConfigurationCommandOutput> {
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

export async function deserializeAws_restJson1_1ListPlaybackConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackConfigurationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPlaybackConfigurationsCommandError(
      output,
      context
    );
  }
  const contents: ListPlaybackConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPlaybackConfigurationsResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1_1__listOfPlaybackConfigurations(
      data.Items,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPlaybackConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackConfigurationsCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
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

export async function deserializeAws_restJson1_1PutPlaybackConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPlaybackConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutPlaybackConfigurationCommandError(
      output,
      context
    );
  }
  const contents: PutPlaybackConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutPlaybackConfigurationResponse",
    AdDecisionServerUrl: undefined,
    CdnConfiguration: undefined,
    DashConfiguration: undefined,
    HlsConfiguration: undefined,
    LivePreRollConfiguration: undefined,
    Name: undefined,
    PlaybackConfigurationArn: undefined,
    PlaybackEndpointPrefix: undefined,
    SessionInitializationEndpointPrefix: undefined,
    SlateAdUrl: undefined,
    Tags: undefined,
    TranscodeProfileName: undefined,
    VideoContentSourceUrl: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.AdDecisionServerUrl !== undefined &&
    data.AdDecisionServerUrl !== null
  ) {
    contents.AdDecisionServerUrl = data.AdDecisionServerUrl;
  }
  if (data.CdnConfiguration !== undefined && data.CdnConfiguration !== null) {
    contents.CdnConfiguration = deserializeAws_restJson1_1CdnConfiguration(
      data.CdnConfiguration,
      context
    );
  }
  if (data.DashConfiguration !== undefined && data.DashConfiguration !== null) {
    contents.DashConfiguration = deserializeAws_restJson1_1DashConfiguration(
      data.DashConfiguration,
      context
    );
  }
  if (data.HlsConfiguration !== undefined && data.HlsConfiguration !== null) {
    contents.HlsConfiguration = deserializeAws_restJson1_1HlsConfiguration(
      data.HlsConfiguration,
      context
    );
  }
  if (
    data.LivePreRollConfiguration !== undefined &&
    data.LivePreRollConfiguration !== null
  ) {
    contents.LivePreRollConfiguration = deserializeAws_restJson1_1LivePreRollConfiguration(
      data.LivePreRollConfiguration,
      context
    );
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (
    data.PlaybackConfigurationArn !== undefined &&
    data.PlaybackConfigurationArn !== null
  ) {
    contents.PlaybackConfigurationArn = data.PlaybackConfigurationArn;
  }
  if (
    data.PlaybackEndpointPrefix !== undefined &&
    data.PlaybackEndpointPrefix !== null
  ) {
    contents.PlaybackEndpointPrefix = data.PlaybackEndpointPrefix;
  }
  if (
    data.SessionInitializationEndpointPrefix !== undefined &&
    data.SessionInitializationEndpointPrefix !== null
  ) {
    contents.SessionInitializationEndpointPrefix =
      data.SessionInitializationEndpointPrefix;
  }
  if (data.SlateAdUrl !== undefined && data.SlateAdUrl !== null) {
    contents.SlateAdUrl = data.SlateAdUrl;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      data.tags,
      context
    );
  }
  if (
    data.TranscodeProfileName !== undefined &&
    data.TranscodeProfileName !== null
  ) {
    contents.TranscodeProfileName = data.TranscodeProfileName;
  }
  if (
    data.VideoContentSourceUrl !== undefined &&
    data.VideoContentSourceUrl !== null
  ) {
    contents.VideoContentSourceUrl = data.VideoContentSourceUrl;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutPlaybackConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPlaybackConfigurationCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
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
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
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

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1CdnConfiguration = (
  input: CdnConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdSegmentUrlPrefix !== undefined) {
    bodyParams["AdSegmentUrlPrefix"] = input.AdSegmentUrlPrefix;
  }
  if (input.ContentSegmentUrlPrefix !== undefined) {
    bodyParams["ContentSegmentUrlPrefix"] = input.ContentSegmentUrlPrefix;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DashConfigurationForPut = (
  input: DashConfigurationForPut,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MpdLocation !== undefined) {
    bodyParams["MpdLocation"] = input.MpdLocation;
  }
  if (input.OriginManifestType !== undefined) {
    bodyParams["OriginManifestType"] = input.OriginManifestType;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LivePreRollConfiguration = (
  input: LivePreRollConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdDecisionServerUrl !== undefined) {
    bodyParams["AdDecisionServerUrl"] = input.AdDecisionServerUrl;
  }
  if (input.MaxDurationSeconds !== undefined) {
    bodyParams["MaxDurationSeconds"] = input.MaxDurationSeconds;
  }
  return bodyParams;
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

const deserializeAws_restJson1_1CdnConfiguration = (
  output: any,
  context: __SerdeContext
): CdnConfiguration => {
  let contents: any = {
    __type: "CdnConfiguration",
    AdSegmentUrlPrefix: undefined,
    ContentSegmentUrlPrefix: undefined
  };
  if (
    output.AdSegmentUrlPrefix !== undefined &&
    output.AdSegmentUrlPrefix !== null
  ) {
    contents.AdSegmentUrlPrefix = output.AdSegmentUrlPrefix;
  }
  if (
    output.ContentSegmentUrlPrefix !== undefined &&
    output.ContentSegmentUrlPrefix !== null
  ) {
    contents.ContentSegmentUrlPrefix = output.ContentSegmentUrlPrefix;
  }
  return contents;
};

const deserializeAws_restJson1_1DashConfiguration = (
  output: any,
  context: __SerdeContext
): DashConfiguration => {
  let contents: any = {
    __type: "DashConfiguration",
    ManifestEndpointPrefix: undefined,
    MpdLocation: undefined,
    OriginManifestType: undefined
  };
  if (
    output.ManifestEndpointPrefix !== undefined &&
    output.ManifestEndpointPrefix !== null
  ) {
    contents.ManifestEndpointPrefix = output.ManifestEndpointPrefix;
  }
  if (output.MpdLocation !== undefined && output.MpdLocation !== null) {
    contents.MpdLocation = output.MpdLocation;
  }
  if (
    output.OriginManifestType !== undefined &&
    output.OriginManifestType !== null
  ) {
    contents.OriginManifestType = output.OriginManifestType;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsConfiguration = (
  output: any,
  context: __SerdeContext
): HlsConfiguration => {
  let contents: any = {
    __type: "HlsConfiguration",
    ManifestEndpointPrefix: undefined
  };
  if (
    output.ManifestEndpointPrefix !== undefined &&
    output.ManifestEndpointPrefix !== null
  ) {
    contents.ManifestEndpointPrefix = output.ManifestEndpointPrefix;
  }
  return contents;
};

const deserializeAws_restJson1_1LivePreRollConfiguration = (
  output: any,
  context: __SerdeContext
): LivePreRollConfiguration => {
  let contents: any = {
    __type: "LivePreRollConfiguration",
    AdDecisionServerUrl: undefined,
    MaxDurationSeconds: undefined
  };
  if (
    output.AdDecisionServerUrl !== undefined &&
    output.AdDecisionServerUrl !== null
  ) {
    contents.AdDecisionServerUrl = output.AdDecisionServerUrl;
  }
  if (
    output.MaxDurationSeconds !== undefined &&
    output.MaxDurationSeconds !== null
  ) {
    contents.MaxDurationSeconds = output.MaxDurationSeconds;
  }
  return contents;
};

const deserializeAws_restJson1_1PlaybackConfiguration = (
  output: any,
  context: __SerdeContext
): PlaybackConfiguration => {
  let contents: any = {
    __type: "PlaybackConfiguration",
    AdDecisionServerUrl: undefined,
    CdnConfiguration: undefined,
    DashConfiguration: undefined,
    HlsConfiguration: undefined,
    Name: undefined,
    PlaybackConfigurationArn: undefined,
    PlaybackEndpointPrefix: undefined,
    SessionInitializationEndpointPrefix: undefined,
    SlateAdUrl: undefined,
    Tags: undefined,
    TranscodeProfileName: undefined,
    VideoContentSourceUrl: undefined
  };
  if (
    output.AdDecisionServerUrl !== undefined &&
    output.AdDecisionServerUrl !== null
  ) {
    contents.AdDecisionServerUrl = output.AdDecisionServerUrl;
  }
  if (
    output.CdnConfiguration !== undefined &&
    output.CdnConfiguration !== null
  ) {
    contents.CdnConfiguration = deserializeAws_restJson1_1CdnConfiguration(
      output.CdnConfiguration,
      context
    );
  }
  if (
    output.DashConfiguration !== undefined &&
    output.DashConfiguration !== null
  ) {
    contents.DashConfiguration = deserializeAws_restJson1_1DashConfiguration(
      output.DashConfiguration,
      context
    );
  }
  if (
    output.HlsConfiguration !== undefined &&
    output.HlsConfiguration !== null
  ) {
    contents.HlsConfiguration = deserializeAws_restJson1_1HlsConfiguration(
      output.HlsConfiguration,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.PlaybackConfigurationArn !== undefined &&
    output.PlaybackConfigurationArn !== null
  ) {
    contents.PlaybackConfigurationArn = output.PlaybackConfigurationArn;
  }
  if (
    output.PlaybackEndpointPrefix !== undefined &&
    output.PlaybackEndpointPrefix !== null
  ) {
    contents.PlaybackEndpointPrefix = output.PlaybackEndpointPrefix;
  }
  if (
    output.SessionInitializationEndpointPrefix !== undefined &&
    output.SessionInitializationEndpointPrefix !== null
  ) {
    contents.SessionInitializationEndpointPrefix =
      output.SessionInitializationEndpointPrefix;
  }
  if (output.SlateAdUrl !== undefined && output.SlateAdUrl !== null) {
    contents.SlateAdUrl = output.SlateAdUrl;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      output.tags,
      context
    );
  }
  if (
    output.TranscodeProfileName !== undefined &&
    output.TranscodeProfileName !== null
  ) {
    contents.TranscodeProfileName = output.TranscodeProfileName;
  }
  if (
    output.VideoContentSourceUrl !== undefined &&
    output.VideoContentSourceUrl !== null
  ) {
    contents.VideoContentSourceUrl = output.VideoContentSourceUrl;
  }
  return contents;
};

const deserializeAws_restJson1_1__listOfPlaybackConfigurations = (
  output: any,
  context: __SerdeContext
): Array<PlaybackConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PlaybackConfiguration(entry, context)
  );
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
