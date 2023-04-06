// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloseTunnelCommandInput, CloseTunnelCommandOutput } from "../commands/CloseTunnelCommand";
import { DescribeTunnelCommandInput, DescribeTunnelCommandOutput } from "../commands/DescribeTunnelCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTunnelsCommandInput, ListTunnelsCommandOutput } from "../commands/ListTunnelsCommand";
import { OpenTunnelCommandInput, OpenTunnelCommandOutput } from "../commands/OpenTunnelCommand";
import {
  RotateTunnelAccessTokenCommandInput,
  RotateTunnelAccessTokenCommandOutput,
} from "../commands/RotateTunnelAccessTokenCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { IoTSecureTunnelingServiceException as __BaseException } from "../models/IoTSecureTunnelingServiceException";
import {
  CloseTunnelRequest,
  CloseTunnelResponse,
  ConnectionState,
  DescribeTunnelRequest,
  DescribeTunnelResponse,
  DestinationConfig,
  LimitExceededException,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTunnelsRequest,
  ListTunnelsResponse,
  OpenTunnelRequest,
  OpenTunnelResponse,
  ResourceNotFoundException,
  RotateTunnelAccessTokenRequest,
  RotateTunnelAccessTokenResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TimeoutConfig,
  Tunnel,
  TunnelSummary,
  UntagResourceRequest,
  UntagResourceResponse,
} from "../models/models_0";

/**
 * serializeAws_json1_1CloseTunnelCommand
 */
export const se_CloseTunnelCommand = async (
  input: CloseTunnelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IoTSecuredTunneling.CloseTunnel",
  };
  let body: any;
  body = JSON.stringify(se_CloseTunnelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTunnelCommand
 */
export const se_DescribeTunnelCommand = async (
  input: DescribeTunnelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IoTSecuredTunneling.DescribeTunnel",
  };
  let body: any;
  body = JSON.stringify(se_DescribeTunnelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IoTSecuredTunneling.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTunnelsCommand
 */
export const se_ListTunnelsCommand = async (
  input: ListTunnelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IoTSecuredTunneling.ListTunnels",
  };
  let body: any;
  body = JSON.stringify(se_ListTunnelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1OpenTunnelCommand
 */
export const se_OpenTunnelCommand = async (
  input: OpenTunnelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IoTSecuredTunneling.OpenTunnel",
  };
  let body: any;
  body = JSON.stringify(se_OpenTunnelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RotateTunnelAccessTokenCommand
 */
export const se_RotateTunnelAccessTokenCommand = async (
  input: RotateTunnelAccessTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IoTSecuredTunneling.RotateTunnelAccessToken",
  };
  let body: any;
  body = JSON.stringify(se_RotateTunnelAccessTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IoTSecuredTunneling.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "IoTSecuredTunneling.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CloseTunnelCommand
 */
export const de_CloseTunnelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseTunnelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CloseTunnelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CloseTunnelResponse(data, context);
  const response: CloseTunnelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CloseTunnelCommandError
 */
const de_CloseTunnelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseTunnelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTunnelCommand
 */
export const de_DescribeTunnelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTunnelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTunnelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTunnelResponse(data, context);
  const response: DescribeTunnelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTunnelCommandError
 */
const de_DescribeTunnelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTunnelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTunnelsCommand
 */
export const de_ListTunnelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTunnelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTunnelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTunnelsResponse(data, context);
  const response: ListTunnelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTunnelsCommandError
 */
const de_ListTunnelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTunnelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1OpenTunnelCommand
 */
export const de_OpenTunnelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenTunnelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_OpenTunnelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_OpenTunnelResponse(data, context);
  const response: OpenTunnelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1OpenTunnelCommandError
 */
const de_OpenTunnelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OpenTunnelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iotsecuretunneling#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RotateTunnelAccessTokenCommand
 */
export const de_RotateTunnelAccessTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateTunnelAccessTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RotateTunnelAccessTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RotateTunnelAccessTokenResponse(data, context);
  const response: RotateTunnelAccessTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RotateTunnelAccessTokenCommandError
 */
const de_RotateTunnelAccessTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateTunnelAccessTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsecuretunneling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1CloseTunnelRequest
 */
const se_CloseTunnelRequest = (input: CloseTunnelRequest, context: __SerdeContext): any => {
  return {
    ...(input.delete != null && { delete: input.delete }),
    ...(input.tunnelId != null && { tunnelId: input.tunnelId }),
  };
};

/**
 * serializeAws_json1_1DescribeTunnelRequest
 */
const se_DescribeTunnelRequest = (input: DescribeTunnelRequest, context: __SerdeContext): any => {
  return {
    ...(input.tunnelId != null && { tunnelId: input.tunnelId }),
  };
};

/**
 * serializeAws_json1_1DestinationConfig
 */
const se_DestinationConfig = (input: DestinationConfig, context: __SerdeContext): any => {
  return {
    ...(input.services != null && { services: se_ServiceList(input.services, context) }),
    ...(input.thingName != null && { thingName: input.thingName }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1ListTunnelsRequest
 */
const se_ListTunnelsRequest = (input: ListTunnelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.thingName != null && { thingName: input.thingName }),
  };
};

/**
 * serializeAws_json1_1OpenTunnelRequest
 */
const se_OpenTunnelRequest = (input: OpenTunnelRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.destinationConfig != null && {
      destinationConfig: se_DestinationConfig(input.destinationConfig, context),
    }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.timeoutConfig != null && { timeoutConfig: se_TimeoutConfig(input.timeoutConfig, context) }),
  };
};

/**
 * serializeAws_json1_1RotateTunnelAccessTokenRequest
 */
const se_RotateTunnelAccessTokenRequest = (input: RotateTunnelAccessTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.clientMode != null && { clientMode: input.clientMode }),
    ...(input.destinationConfig != null && {
      destinationConfig: se_DestinationConfig(input.destinationConfig, context),
    }),
    ...(input.tunnelId != null && { tunnelId: input.tunnelId }),
  };
};

/**
 * serializeAws_json1_1ServiceList
 */
const se_ServiceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1TimeoutConfig
 */
const se_TimeoutConfig = (input: TimeoutConfig, context: __SerdeContext): any => {
  return {
    ...(input.maxLifetimeTimeoutMinutes != null && { maxLifetimeTimeoutMinutes: input.maxLifetimeTimeoutMinutes }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
  };
};

/**
 * deserializeAws_json1_1CloseTunnelResponse
 */
const de_CloseTunnelResponse = (output: any, context: __SerdeContext): CloseTunnelResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ConnectionState
 */
const de_ConnectionState = (output: any, context: __SerdeContext): ConnectionState => {
  return {
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTunnelResponse
 */
const de_DescribeTunnelResponse = (output: any, context: __SerdeContext): DescribeTunnelResponse => {
  return {
    tunnel: output.tunnel != null ? de_Tunnel(output.tunnel, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DestinationConfig
 */
const de_DestinationConfig = (output: any, context: __SerdeContext): DestinationConfig => {
  return {
    services: output.services != null ? de_ServiceList(output.services, context) : undefined,
    thingName: __expectString(output.thingName),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTunnelsResponse
 */
const de_ListTunnelsResponse = (output: any, context: __SerdeContext): ListTunnelsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    tunnelSummaries: output.tunnelSummaries != null ? de_TunnelSummaryList(output.tunnelSummaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OpenTunnelResponse
 */
const de_OpenTunnelResponse = (output: any, context: __SerdeContext): OpenTunnelResponse => {
  return {
    destinationAccessToken: __expectString(output.destinationAccessToken),
    sourceAccessToken: __expectString(output.sourceAccessToken),
    tunnelArn: __expectString(output.tunnelArn),
    tunnelId: __expectString(output.tunnelId),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RotateTunnelAccessTokenResponse
 */
const de_RotateTunnelAccessTokenResponse = (output: any, context: __SerdeContext): RotateTunnelAccessTokenResponse => {
  return {
    destinationAccessToken: __expectString(output.destinationAccessToken),
    sourceAccessToken: __expectString(output.sourceAccessToken),
    tunnelArn: __expectString(output.tunnelArn),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceList
 */
const de_ServiceList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TimeoutConfig
 */
const de_TimeoutConfig = (output: any, context: __SerdeContext): TimeoutConfig => {
  return {
    maxLifetimeTimeoutMinutes: __expectInt32(output.maxLifetimeTimeoutMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1Tunnel
 */
const de_Tunnel = (output: any, context: __SerdeContext): Tunnel => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    destinationConfig:
      output.destinationConfig != null ? de_DestinationConfig(output.destinationConfig, context) : undefined,
    destinationConnectionState:
      output.destinationConnectionState != null
        ? de_ConnectionState(output.destinationConnectionState, context)
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    sourceConnectionState:
      output.sourceConnectionState != null ? de_ConnectionState(output.sourceConnectionState, context) : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
    timeoutConfig: output.timeoutConfig != null ? de_TimeoutConfig(output.timeoutConfig, context) : undefined,
    tunnelArn: __expectString(output.tunnelArn),
    tunnelId: __expectString(output.tunnelId),
  } as any;
};

/**
 * deserializeAws_json1_1TunnelSummary
 */
const de_TunnelSummary = (output: any, context: __SerdeContext): TunnelSummary => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    status: __expectString(output.status),
    tunnelArn: __expectString(output.tunnelArn),
    tunnelId: __expectString(output.tunnelId),
  } as any;
};

/**
 * deserializeAws_json1_1TunnelSummaryList
 */
const de_TunnelSummaryList = (output: any, context: __SerdeContext): TunnelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TunnelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
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
};
