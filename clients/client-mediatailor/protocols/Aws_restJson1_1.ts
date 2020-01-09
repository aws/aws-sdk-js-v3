import {
  DeletePlaybackConfigurationCommandInput,
  DeletePlaybackConfigurationCommandOutput,
} from "../commands/DeletePlaybackConfigurationCommand";
import {
  GetPlaybackConfigurationCommandInput,
  GetPlaybackConfigurationCommandOutput,
} from "../commands/GetPlaybackConfigurationCommand";
import {
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput,
} from "../commands/ListPlaybackConfigurationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutPlaybackConfigurationCommandInput,
  PutPlaybackConfigurationCommandOutput,
} from "../commands/PutPlaybackConfigurationCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "../commands/UntagResourceCommand";
import {
  BadRequestException,
  CdnConfiguration,
  DashConfiguration,
  DashConfigurationForPut,
  HlsConfiguration,
  LivePreRollConfiguration,
  PlaybackConfiguration,
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1DeletePlaybackConfigurationCommand(
  input: DeletePlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/playbackConfiguration/{Name}";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: Name.');
    }
    resolvedPath = resolvedPath.replace('{Name}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: Name.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1GetPlaybackConfigurationCommand(
  input: GetPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/playbackConfiguration/{Name}";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: Name.');
    }
    resolvedPath = resolvedPath.replace('{Name}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: Name.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1ListPlaybackConfigurationsCommand(
  input: ListPlaybackConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/playbackConfigurations";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query['MaxResults'] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query['NextToken'] = input.NextToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: ResourceArn.');
    }
    resolvedPath = resolvedPath.replace('{ResourceArn}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: ResourceArn.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1PutPlaybackConfigurationCommand(
  input: PutPlaybackConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/playbackConfiguration";
  let body: any = {};
  const bodyParams: any = {};
  if (input.AdDecisionServerUrl !== undefined) {
    bodyParams['AdDecisionServerUrl'] = input.AdDecisionServerUrl;
  }
  if (input.CdnConfiguration !== undefined) {
    bodyParams['CdnConfiguration'] = serializeAws_restJson1_1CdnConfiguration(input.CdnConfiguration, context);
  }
  if (input.DashConfiguration !== undefined) {
    bodyParams['DashConfiguration'] = serializeAws_restJson1_1DashConfigurationForPut(input.DashConfiguration, context);
  }
  if (input.LivePreRollConfiguration !== undefined) {
    bodyParams['LivePreRollConfiguration'] = serializeAws_restJson1_1LivePreRollConfiguration(input.LivePreRollConfiguration, context);
  }
  if (input.Name !== undefined) {
    bodyParams['Name'] = input.Name;
  }
  if (input.SlateAdUrl !== undefined) {
    bodyParams['SlateAdUrl'] = input.SlateAdUrl;
  }
  if (input.Tags !== undefined) {
    bodyParams['tags'] = serializeAws_restJson1_1__mapOf__string(input.Tags, context);
  }
  if (input.TranscodeProfileName !== undefined) {
    bodyParams['TranscodeProfileName'] = input.TranscodeProfileName;
  }
  if (input.VideoContentSourceUrl !== undefined) {
    bodyParams['VideoContentSourceUrl'] = input.VideoContentSourceUrl;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: ResourceArn.');
    }
    resolvedPath = resolvedPath.replace('{ResourceArn}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: ResourceArn.');
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams['tags'] = serializeAws_restJson1_1__mapOf__string(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: ResourceArn.');
    }
    resolvedPath = resolvedPath.replace('{ResourceArn}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: ResourceArn.');
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query['tagKeys'] = input.TagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query,
  });
}

export async function deserializeAws_restJson1_1DeletePlaybackConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackConfigurationCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeletePlaybackConfigurationCommandError(output, context);
  }
  const contents: DeletePlaybackConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePlaybackConfigurationResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeletePlaybackConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeletePlaybackConfigurationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.mediatailor#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetPlaybackConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackConfigurationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetPlaybackConfigurationCommandError(output, context);
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
    VideoContentSourceUrl: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AdDecisionServerUrl !== undefined) {
    contents.AdDecisionServerUrl = data.AdDecisionServerUrl;
  }
  if (data.CdnConfiguration !== undefined) {
    contents.CdnConfiguration = deserializeAws_restJson1_1CdnConfiguration(data.CdnConfiguration, context);
  }
  if (data.DashConfiguration !== undefined) {
    contents.DashConfiguration = deserializeAws_restJson1_1DashConfiguration(data.DashConfiguration, context);
  }
  if (data.HlsConfiguration !== undefined) {
    contents.HlsConfiguration = deserializeAws_restJson1_1HlsConfiguration(data.HlsConfiguration, context);
  }
  if (data.LivePreRollConfiguration !== undefined) {
    contents.LivePreRollConfiguration = deserializeAws_restJson1_1LivePreRollConfiguration(data.LivePreRollConfiguration, context);
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.PlaybackConfigurationArn !== undefined) {
    contents.PlaybackConfigurationArn = data.PlaybackConfigurationArn;
  }
  if (data.PlaybackEndpointPrefix !== undefined) {
    contents.PlaybackEndpointPrefix = data.PlaybackEndpointPrefix;
  }
  if (data.SessionInitializationEndpointPrefix !== undefined) {
    contents.SessionInitializationEndpointPrefix = data.SessionInitializationEndpointPrefix;
  }
  if (data.SlateAdUrl !== undefined) {
    contents.SlateAdUrl = data.SlateAdUrl;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(data.tags, context);
  }
  if (data.TranscodeProfileName !== undefined) {
    contents.TranscodeProfileName = data.TranscodeProfileName;
  }
  if (data.VideoContentSourceUrl !== undefined) {
    contents.VideoContentSourceUrl = data.VideoContentSourceUrl;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetPlaybackConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetPlaybackConfigurationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.mediatailor#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListPlaybackConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackConfigurationsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListPlaybackConfigurationsCommandError(output, context);
  }
  const contents: ListPlaybackConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPlaybackConfigurationsResponse",
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Items !== undefined) {
    contents.Items = deserializeAws_restJson1_1__listOfPlaybackConfigurations(data.Items, context);
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPlaybackConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListPlaybackConfigurationsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.mediatailor#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.mediatailor#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1PutPlaybackConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPlaybackConfigurationCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1PutPlaybackConfigurationCommandError(output, context);
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
    VideoContentSourceUrl: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AdDecisionServerUrl !== undefined) {
    contents.AdDecisionServerUrl = data.AdDecisionServerUrl;
  }
  if (data.CdnConfiguration !== undefined) {
    contents.CdnConfiguration = deserializeAws_restJson1_1CdnConfiguration(data.CdnConfiguration, context);
  }
  if (data.DashConfiguration !== undefined) {
    contents.DashConfiguration = deserializeAws_restJson1_1DashConfiguration(data.DashConfiguration, context);
  }
  if (data.HlsConfiguration !== undefined) {
    contents.HlsConfiguration = deserializeAws_restJson1_1HlsConfiguration(data.HlsConfiguration, context);
  }
  if (data.LivePreRollConfiguration !== undefined) {
    contents.LivePreRollConfiguration = deserializeAws_restJson1_1LivePreRollConfiguration(data.LivePreRollConfiguration, context);
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.PlaybackConfigurationArn !== undefined) {
    contents.PlaybackConfigurationArn = data.PlaybackConfigurationArn;
  }
  if (data.PlaybackEndpointPrefix !== undefined) {
    contents.PlaybackEndpointPrefix = data.PlaybackEndpointPrefix;
  }
  if (data.SessionInitializationEndpointPrefix !== undefined) {
    contents.SessionInitializationEndpointPrefix = data.SessionInitializationEndpointPrefix;
  }
  if (data.SlateAdUrl !== undefined) {
    contents.SlateAdUrl = data.SlateAdUrl;
  }
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(data.tags, context);
  }
  if (data.TranscodeProfileName !== undefined) {
    contents.TranscodeProfileName = data.TranscodeProfileName;
  }
  if (data.VideoContentSourceUrl !== undefined) {
    contents.VideoContentSourceUrl = data.VideoContentSourceUrl;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutPlaybackConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<PutPlaybackConfigurationCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.mediatailor#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
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
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.mediatailor#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
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
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediatailor#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.mediatailor#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1CdnConfiguration = (
  input: CdnConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AdSegmentUrlPrefix !== undefined) {
    bodyParams['AdSegmentUrlPrefix'] = input.AdSegmentUrlPrefix;
  }
  if (input.ContentSegmentUrlPrefix !== undefined) {
    bodyParams['ContentSegmentUrlPrefix'] = input.ContentSegmentUrlPrefix;
  }
  return bodyParams;
}

const serializeAws_restJson1_1DashConfigurationForPut = (
  input: DashConfigurationForPut,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MpdLocation !== undefined) {
    bodyParams['MpdLocation'] = input.MpdLocation;
  }
  if (input.OriginManifestType !== undefined) {
    bodyParams['OriginManifestType'] = input.OriginManifestType;
  }
  return bodyParams;
}

const serializeAws_restJson1_1LivePreRollConfiguration = (
  input: LivePreRollConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AdDecisionServerUrl !== undefined) {
    bodyParams['AdDecisionServerUrl'] = input.AdDecisionServerUrl;
  }
  if (input.MaxDurationSeconds !== undefined) {
    bodyParams['MaxDurationSeconds'] = input.MaxDurationSeconds;
  }
  return bodyParams;
}

const serializeAws_restJson1_1__mapOf__string = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
}

const deserializeAws_restJson1_1CdnConfiguration = (
  output: any,
  context: __SerdeContext
): CdnConfiguration => {
  let contents: any = {
    __type: "CdnConfiguration",
    AdSegmentUrlPrefix: undefined,
    ContentSegmentUrlPrefix: undefined,
  };
  if (output.AdSegmentUrlPrefix !== undefined) {
    contents.AdSegmentUrlPrefix = output.AdSegmentUrlPrefix;
  }
  if (output.ContentSegmentUrlPrefix !== undefined) {
    contents.ContentSegmentUrlPrefix = output.ContentSegmentUrlPrefix;
  }
  return contents;
}

const deserializeAws_restJson1_1DashConfiguration = (
  output: any,
  context: __SerdeContext
): DashConfiguration => {
  let contents: any = {
    __type: "DashConfiguration",
    ManifestEndpointPrefix: undefined,
    MpdLocation: undefined,
    OriginManifestType: undefined,
  };
  if (output.ManifestEndpointPrefix !== undefined) {
    contents.ManifestEndpointPrefix = output.ManifestEndpointPrefix;
  }
  if (output.MpdLocation !== undefined) {
    contents.MpdLocation = output.MpdLocation;
  }
  if (output.OriginManifestType !== undefined) {
    contents.OriginManifestType = output.OriginManifestType;
  }
  return contents;
}

const deserializeAws_restJson1_1HlsConfiguration = (
  output: any,
  context: __SerdeContext
): HlsConfiguration => {
  let contents: any = {
    __type: "HlsConfiguration",
    ManifestEndpointPrefix: undefined,
  };
  if (output.ManifestEndpointPrefix !== undefined) {
    contents.ManifestEndpointPrefix = output.ManifestEndpointPrefix;
  }
  return contents;
}

const deserializeAws_restJson1_1LivePreRollConfiguration = (
  output: any,
  context: __SerdeContext
): LivePreRollConfiguration => {
  let contents: any = {
    __type: "LivePreRollConfiguration",
    AdDecisionServerUrl: undefined,
    MaxDurationSeconds: undefined,
  };
  if (output.AdDecisionServerUrl !== undefined) {
    contents.AdDecisionServerUrl = output.AdDecisionServerUrl;
  }
  if (output.MaxDurationSeconds !== undefined) {
    contents.MaxDurationSeconds = output.MaxDurationSeconds;
  }
  return contents;
}

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
    VideoContentSourceUrl: undefined,
  };
  if (output.AdDecisionServerUrl !== undefined) {
    contents.AdDecisionServerUrl = output.AdDecisionServerUrl;
  }
  if (output.CdnConfiguration !== undefined) {
    contents.CdnConfiguration = deserializeAws_restJson1_1CdnConfiguration(output.CdnConfiguration, context);
  }
  if (output.DashConfiguration !== undefined) {
    contents.DashConfiguration = deserializeAws_restJson1_1DashConfiguration(output.DashConfiguration, context);
  }
  if (output.HlsConfiguration !== undefined) {
    contents.HlsConfiguration = deserializeAws_restJson1_1HlsConfiguration(output.HlsConfiguration, context);
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.PlaybackConfigurationArn !== undefined) {
    contents.PlaybackConfigurationArn = output.PlaybackConfigurationArn;
  }
  if (output.PlaybackEndpointPrefix !== undefined) {
    contents.PlaybackEndpointPrefix = output.PlaybackEndpointPrefix;
  }
  if (output.SessionInitializationEndpointPrefix !== undefined) {
    contents.SessionInitializationEndpointPrefix = output.SessionInitializationEndpointPrefix;
  }
  if (output.SlateAdUrl !== undefined) {
    contents.SlateAdUrl = output.SlateAdUrl;
  }
  if (output.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(output.tags, context);
  }
  if (output.TranscodeProfileName !== undefined) {
    contents.TranscodeProfileName = output.TranscodeProfileName;
  }
  if (output.VideoContentSourceUrl !== undefined) {
    contents.VideoContentSourceUrl = output.VideoContentSourceUrl;
  }
  return contents;
}

const deserializeAws_restJson1_1__listOfPlaybackConfigurations = (
  output: any,
  context: __SerdeContext
): Array<PlaybackConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PlaybackConfiguration(entry, context)
  );
}

const deserializeAws_restJson1_1__mapOf__string = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
}

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
