import {
  CreateSignalingChannelCommandInput,
  CreateSignalingChannelCommandOutput
} from "../commands/CreateSignalingChannelCommand";
import {
  CreateStreamCommandInput,
  CreateStreamCommandOutput
} from "../commands/CreateStreamCommand";
import {
  DeleteSignalingChannelCommandInput,
  DeleteSignalingChannelCommandOutput
} from "../commands/DeleteSignalingChannelCommand";
import {
  DeleteStreamCommandInput,
  DeleteStreamCommandOutput
} from "../commands/DeleteStreamCommand";
import {
  DescribeSignalingChannelCommandInput,
  DescribeSignalingChannelCommandOutput
} from "../commands/DescribeSignalingChannelCommand";
import {
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput
} from "../commands/DescribeStreamCommand";
import {
  GetDataEndpointCommandInput,
  GetDataEndpointCommandOutput
} from "../commands/GetDataEndpointCommand";
import {
  GetSignalingChannelEndpointCommandInput,
  GetSignalingChannelEndpointCommandOutput
} from "../commands/GetSignalingChannelEndpointCommand";
import {
  ListSignalingChannelsCommandInput,
  ListSignalingChannelsCommandOutput
} from "../commands/ListSignalingChannelsCommand";
import {
  ListStreamsCommandInput,
  ListStreamsCommandOutput
} from "../commands/ListStreamsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTagsForStreamCommandInput,
  ListTagsForStreamCommandOutput
} from "../commands/ListTagsForStreamCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  TagStreamCommandInput,
  TagStreamCommandOutput
} from "../commands/TagStreamCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UntagStreamCommandInput,
  UntagStreamCommandOutput
} from "../commands/UntagStreamCommand";
import {
  UpdateDataRetentionCommandInput,
  UpdateDataRetentionCommandOutput
} from "../commands/UpdateDataRetentionCommand";
import {
  UpdateSignalingChannelCommandInput,
  UpdateSignalingChannelCommandOutput
} from "../commands/UpdateSignalingChannelCommand";
import {
  UpdateStreamCommandInput,
  UpdateStreamCommandOutput
} from "../commands/UpdateStreamCommand";
import {
  AccessDeniedException,
  AccountChannelLimitExceededException,
  AccountStreamLimitExceededException,
  ChannelInfo,
  ChannelNameCondition,
  ChannelProtocol,
  ClientLimitExceededException,
  DeviceStreamLimitExceededException,
  InvalidArgumentException,
  InvalidDeviceException,
  InvalidResourceFormatException,
  NotAuthorizedException,
  ResourceEndpointListItem,
  ResourceInUseException,
  ResourceNotFoundException,
  SingleMasterChannelEndpointConfiguration,
  SingleMasterConfiguration,
  StreamInfo,
  StreamNameCondition,
  Tag,
  TagsPerResourceExceededLimitException,
  VersionMismatchException
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

export const serializeAws_restJson1CreateSignalingChannelCommand = async (
  input: CreateSignalingChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/createSignalingChannel";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelName !== undefined && { ChannelName: input.ChannelName }),
    ...(input.ChannelType !== undefined && { ChannelType: input.ChannelType }),
    ...(input.SingleMasterConfiguration !== undefined && {
      SingleMasterConfiguration: serializeAws_restJson1SingleMasterConfiguration(
        input.SingleMasterConfiguration,
        context
      )
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1TagOnCreateList(input.Tags, context)
    })
  });
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

export const serializeAws_restJson1CreateStreamCommand = async (
  input: CreateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/createStream";
  let body: any;
  body = JSON.stringify({
    ...(input.DataRetentionInHours !== undefined && {
      DataRetentionInHours: input.DataRetentionInHours
    }),
    ...(input.DeviceName !== undefined && { DeviceName: input.DeviceName }),
    ...(input.KmsKeyId !== undefined && { KmsKeyId: input.KmsKeyId }),
    ...(input.MediaType !== undefined && { MediaType: input.MediaType }),
    ...(input.StreamName !== undefined && { StreamName: input.StreamName }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1ResourceTags(input.Tags, context)
    })
  });
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

export const serializeAws_restJson1DeleteSignalingChannelCommand = async (
  input: DeleteSignalingChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/deleteSignalingChannel";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN !== undefined && { ChannelARN: input.ChannelARN }),
    ...(input.CurrentVersion !== undefined && {
      CurrentVersion: input.CurrentVersion
    })
  });
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

export const serializeAws_restJson1DeleteStreamCommand = async (
  input: DeleteStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/deleteStream";
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion !== undefined && {
      CurrentVersion: input.CurrentVersion
    }),
    ...(input.StreamARN !== undefined && { StreamARN: input.StreamARN })
  });
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

export const serializeAws_restJson1DescribeSignalingChannelCommand = async (
  input: DescribeSignalingChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/describeSignalingChannel";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN !== undefined && { ChannelARN: input.ChannelARN }),
    ...(input.ChannelName !== undefined && { ChannelName: input.ChannelName })
  });
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

export const serializeAws_restJson1DescribeStreamCommand = async (
  input: DescribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/describeStream";
  let body: any;
  body = JSON.stringify({
    ...(input.StreamARN !== undefined && { StreamARN: input.StreamARN }),
    ...(input.StreamName !== undefined && { StreamName: input.StreamName })
  });
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

export const serializeAws_restJson1GetDataEndpointCommand = async (
  input: GetDataEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/getDataEndpoint";
  let body: any;
  body = JSON.stringify({
    ...(input.APIName !== undefined && { APIName: input.APIName }),
    ...(input.StreamARN !== undefined && { StreamARN: input.StreamARN }),
    ...(input.StreamName !== undefined && { StreamName: input.StreamName })
  });
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

export const serializeAws_restJson1GetSignalingChannelEndpointCommand = async (
  input: GetSignalingChannelEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/getSignalingChannelEndpoint";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN !== undefined && { ChannelARN: input.ChannelARN }),
    ...(input.SingleMasterChannelEndpointConfiguration !== undefined && {
      SingleMasterChannelEndpointConfiguration: serializeAws_restJson1SingleMasterChannelEndpointConfiguration(
        input.SingleMasterChannelEndpointConfiguration,
        context
      )
    })
  });
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

export const serializeAws_restJson1ListSignalingChannelsCommand = async (
  input: ListSignalingChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listSignalingChannels";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelNameCondition !== undefined && {
      ChannelNameCondition: serializeAws_restJson1ChannelNameCondition(
        input.ChannelNameCondition,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  });
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

export const serializeAws_restJson1ListStreamsCommand = async (
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listStreams";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.StreamNameCondition !== undefined && {
      StreamNameCondition: serializeAws_restJson1StreamNameCondition(
        input.StreamNameCondition,
        context
      )
    })
  });
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ListTagsForResource";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN })
  });
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

export const serializeAws_restJson1ListTagsForStreamCommand = async (
  input: ListTagsForStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listTagsForStream";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.StreamARN !== undefined && { StreamARN: input.StreamARN }),
    ...(input.StreamName !== undefined && { StreamName: input.StreamName })
  });
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/TagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1TagList(input.Tags, context)
    })
  });
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

export const serializeAws_restJson1TagStreamCommand = async (
  input: TagStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/tagStream";
  let body: any;
  body = JSON.stringify({
    ...(input.StreamARN !== undefined && { StreamARN: input.StreamARN }),
    ...(input.StreamName !== undefined && { StreamName: input.StreamName }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1ResourceTags(input.Tags, context)
    })
  });
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/UntagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeyList !== undefined && {
      TagKeyList: serializeAws_restJson1TagKeyList(input.TagKeyList, context)
    })
  });
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

export const serializeAws_restJson1UntagStreamCommand = async (
  input: UntagStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/untagStream";
  let body: any;
  body = JSON.stringify({
    ...(input.StreamARN !== undefined && { StreamARN: input.StreamARN }),
    ...(input.StreamName !== undefined && { StreamName: input.StreamName }),
    ...(input.TagKeyList !== undefined && {
      TagKeyList: serializeAws_restJson1TagKeyList(input.TagKeyList, context)
    })
  });
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

export const serializeAws_restJson1UpdateDataRetentionCommand = async (
  input: UpdateDataRetentionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/updateDataRetention";
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion !== undefined && {
      CurrentVersion: input.CurrentVersion
    }),
    ...(input.DataRetentionChangeInHours !== undefined && {
      DataRetentionChangeInHours: input.DataRetentionChangeInHours
    }),
    ...(input.Operation !== undefined && { Operation: input.Operation }),
    ...(input.StreamARN !== undefined && { StreamARN: input.StreamARN }),
    ...(input.StreamName !== undefined && { StreamName: input.StreamName })
  });
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

export const serializeAws_restJson1UpdateSignalingChannelCommand = async (
  input: UpdateSignalingChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/updateSignalingChannel";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelARN !== undefined && { ChannelARN: input.ChannelARN }),
    ...(input.CurrentVersion !== undefined && {
      CurrentVersion: input.CurrentVersion
    }),
    ...(input.SingleMasterConfiguration !== undefined && {
      SingleMasterConfiguration: serializeAws_restJson1SingleMasterConfiguration(
        input.SingleMasterConfiguration,
        context
      )
    })
  });
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

export const serializeAws_restJson1UpdateStreamCommand = async (
  input: UpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/updateStream";
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion !== undefined && {
      CurrentVersion: input.CurrentVersion
    }),
    ...(input.DeviceName !== undefined && { DeviceName: input.DeviceName }),
    ...(input.MediaType !== undefined && { MediaType: input.MediaType }),
    ...(input.StreamARN !== undefined && { StreamARN: input.StreamARN }),
    ...(input.StreamName !== undefined && { StreamName: input.StreamName })
  });
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

export const deserializeAws_restJson1CreateSignalingChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSignalingChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateSignalingChannelCommandError(
      output,
      context
    );
  }
  const contents: CreateSignalingChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSignalingChannelOutput",
    ChannelARN: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ChannelARN !== undefined && data.ChannelARN !== null) {
    contents.ChannelARN = data.ChannelARN;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSignalingChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSignalingChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccountChannelLimitExceededException":
    case "com.amazonaws.kinesisvideo#AccountChannelLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1AccountChannelLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagsPerResourceExceededLimitException":
    case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
      response = {
        ...(await deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse(
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

export const deserializeAws_restJson1CreateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateStreamCommandError(output, context);
  }
  const contents: CreateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateStreamOutput",
    StreamARN: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.StreamARN !== undefined && data.StreamARN !== null) {
    contents.StreamARN = data.StreamARN;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountStreamLimitExceededException":
    case "com.amazonaws.kinesisvideo#AccountStreamLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1AccountStreamLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeviceStreamLimitExceededException":
    case "com.amazonaws.kinesisvideo#DeviceStreamLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1DeviceStreamLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeviceException":
    case "com.amazonaws.kinesisvideo#InvalidDeviceException":
      response = {
        ...(await deserializeAws_restJson1InvalidDeviceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagsPerResourceExceededLimitException":
    case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
      response = {
        ...(await deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse(
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

export const deserializeAws_restJson1DeleteSignalingChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSignalingChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteSignalingChannelCommandError(
      output,
      context
    );
  }
  const contents: DeleteSignalingChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSignalingChannelOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSignalingChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSignalingChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      response = {
        ...(await deserializeAws_restJson1VersionMismatchExceptionResponse(
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

export const deserializeAws_restJson1DeleteStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteStreamCommandError(output, context);
  }
  const contents: DeleteStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteStreamOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      response = {
        ...(await deserializeAws_restJson1VersionMismatchExceptionResponse(
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

export const deserializeAws_restJson1DescribeSignalingChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSignalingChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeSignalingChannelCommandError(
      output,
      context
    );
  }
  const contents: DescribeSignalingChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSignalingChannelOutput",
    ChannelInfo: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ChannelInfo !== undefined && data.ChannelInfo !== null) {
    contents.ChannelInfo = deserializeAws_restJson1ChannelInfo(
      data.ChannelInfo,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeSignalingChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSignalingChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1DescribeStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeStreamCommandError(output, context);
  }
  const contents: DescribeStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStreamOutput",
    StreamInfo: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.StreamInfo !== undefined && data.StreamInfo !== null) {
    contents.StreamInfo = deserializeAws_restJson1StreamInfo(
      data.StreamInfo,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1GetDataEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetDataEndpointCommandError(output, context);
  }
  const contents: GetDataEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDataEndpointOutput",
    DataEndpoint: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DataEndpoint !== undefined && data.DataEndpoint !== null) {
    contents.DataEndpoint = data.DataEndpoint;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDataEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1GetSignalingChannelEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSignalingChannelEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSignalingChannelEndpointCommandError(
      output,
      context
    );
  }
  const contents: GetSignalingChannelEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSignalingChannelEndpointOutput",
    ResourceEndpointList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ResourceEndpointList !== undefined &&
    data.ResourceEndpointList !== null
  ) {
    contents.ResourceEndpointList = deserializeAws_restJson1ResourceEndpointList(
      data.ResourceEndpointList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSignalingChannelEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSignalingChannelEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1ListSignalingChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalingChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListSignalingChannelsCommandError(
      output,
      context
    );
  }
  const contents: ListSignalingChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSignalingChannelsOutput",
    ChannelInfoList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ChannelInfoList !== undefined && data.ChannelInfoList !== null) {
    contents.ChannelInfoList = deserializeAws_restJson1ChannelInfoList(
      data.ChannelInfoList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSignalingChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalingChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
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

export const deserializeAws_restJson1ListStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListStreamsCommandError(output, context);
  }
  const contents: ListStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStreamsOutput",
    NextToken: undefined,
    StreamInfoList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.StreamInfoList !== undefined && data.StreamInfoList !== null) {
    contents.StreamInfoList = deserializeAws_restJson1StreamInfoList(
      data.StreamInfoList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceOutput",
    NextToken: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1ResourceTags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1ListTagsForStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsForStreamCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForStreamOutput",
    NextToken: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1ResourceTags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceFormatException":
    case "com.amazonaws.kinesisvideo#InvalidResourceFormatException":
      response = {
        ...(await deserializeAws_restJson1InvalidResourceFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceOutput"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagsPerResourceExceededLimitException":
    case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
      response = {
        ...(await deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse(
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

export const deserializeAws_restJson1TagStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagStreamCommandError(output, context);
  }
  const contents: TagStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagStreamOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceFormatException":
    case "com.amazonaws.kinesisvideo#InvalidResourceFormatException":
      response = {
        ...(await deserializeAws_restJson1InvalidResourceFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagsPerResourceExceededLimitException":
    case "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException":
      response = {
        ...(await deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse(
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceOutput"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1UntagStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagStreamCommandError(output, context);
  }
  const contents: UntagStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagStreamOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceFormatException":
    case "com.amazonaws.kinesisvideo#InvalidResourceFormatException":
      response = {
        ...(await deserializeAws_restJson1InvalidResourceFormatExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1UpdateDataRetentionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataRetentionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateDataRetentionCommandError(
      output,
      context
    );
  }
  const contents: UpdateDataRetentionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDataRetentionOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDataRetentionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataRetentionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      response = {
        ...(await deserializeAws_restJson1VersionMismatchExceptionResponse(
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

export const deserializeAws_restJson1UpdateSignalingChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSignalingChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateSignalingChannelCommandError(
      output,
      context
    );
  }
  const contents: UpdateSignalingChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSignalingChannelOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSignalingChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSignalingChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesisvideo#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      response = {
        ...(await deserializeAws_restJson1VersionMismatchExceptionResponse(
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

export const deserializeAws_restJson1UpdateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateStreamCommandError(output, context);
  }
  const contents: UpdateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateStreamOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideo#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ClientLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideo#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideo#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisvideo#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VersionMismatchException":
    case "com.amazonaws.kinesisvideo#VersionMismatchException":
      response = {
        ...(await deserializeAws_restJson1VersionMismatchExceptionResponse(
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1AccountChannelLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountChannelLimitExceededException> => {
  const contents: AccountChannelLimitExceededException = {
    name: "AccountChannelLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1AccountStreamLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountStreamLimitExceededException> => {
  const contents: AccountStreamLimitExceededException = {
    name: "AccountStreamLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ClientLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientLimitExceededException> => {
  const contents: ClientLimitExceededException = {
    name: "ClientLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1DeviceStreamLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeviceStreamLimitExceededException> => {
  const contents: DeviceStreamLimitExceededException = {
    name: "DeviceStreamLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidDeviceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDeviceException> => {
  const contents: InvalidDeviceException = {
    name: "InvalidDeviceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidResourceFormatExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceFormatException> => {
  const contents: InvalidResourceFormatException = {
    name: "InvalidResourceFormatException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1NotAuthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: NotAuthorizedException = {
    name: "NotAuthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1TagsPerResourceExceededLimitExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagsPerResourceExceededLimitException> => {
  const contents: TagsPerResourceExceededLimitException = {
    name: "TagsPerResourceExceededLimitException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1VersionMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VersionMismatchException> => {
  const contents: VersionMismatchException = {
    name: "VersionMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1ChannelNameCondition = (
  input: ChannelNameCondition,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComparisonOperator !== undefined && {
      ComparisonOperator: input.ComparisonOperator
    }),
    ...(input.ComparisonValue !== undefined && {
      ComparisonValue: input.ComparisonValue
    })
  };
};

const serializeAws_restJson1ListOfProtocols = (
  input: (ChannelProtocol | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1ResourceTags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1SingleMasterChannelEndpointConfiguration = (
  input: SingleMasterChannelEndpointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Protocols !== undefined && {
      Protocols: serializeAws_restJson1ListOfProtocols(input.Protocols, context)
    }),
    ...(input.Role !== undefined && { Role: input.Role })
  };
};

const serializeAws_restJson1SingleMasterConfiguration = (
  input: SingleMasterConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.MessageTtlSeconds !== undefined && {
      MessageTtlSeconds: input.MessageTtlSeconds
    })
  };
};

const serializeAws_restJson1StreamNameCondition = (
  input: StreamNameCondition,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComparisonOperator !== undefined && {
      ComparisonOperator: input.ComparisonOperator
    }),
    ...(input.ComparisonValue !== undefined && {
      ComparisonValue: input.ComparisonValue
    })
  };
};

const serializeAws_restJson1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_restJson1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Tag(entry, context));
};

const serializeAws_restJson1TagOnCreateList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Tag(entry, context));
};

const deserializeAws_restJson1ChannelInfo = (
  output: any,
  context: __SerdeContext
): ChannelInfo => {
  return {
    __type: "ChannelInfo",
    ChannelARN:
      output.ChannelARN !== undefined && output.ChannelARN !== null
        ? output.ChannelARN
        : undefined,
    ChannelName:
      output.ChannelName !== undefined && output.ChannelName !== null
        ? output.ChannelName
        : undefined,
    ChannelStatus:
      output.ChannelStatus !== undefined && output.ChannelStatus !== null
        ? output.ChannelStatus
        : undefined,
    ChannelType:
      output.ChannelType !== undefined && output.ChannelType !== null
        ? output.ChannelType
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    SingleMasterConfiguration:
      output.SingleMasterConfiguration !== undefined &&
      output.SingleMasterConfiguration !== null
        ? deserializeAws_restJson1SingleMasterConfiguration(
            output.SingleMasterConfiguration,
            context
          )
        : undefined,
    Version:
      output.Version !== undefined && output.Version !== null
        ? output.Version
        : undefined
  } as any;
};

const deserializeAws_restJson1ChannelInfoList = (
  output: any,
  context: __SerdeContext
): ChannelInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ChannelInfo(entry, context)
  );
};

const deserializeAws_restJson1ResourceEndpointList = (
  output: any,
  context: __SerdeContext
): ResourceEndpointListItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ResourceEndpointListItem(entry, context)
  );
};

const deserializeAws_restJson1ResourceEndpointListItem = (
  output: any,
  context: __SerdeContext
): ResourceEndpointListItem => {
  return {
    __type: "ResourceEndpointListItem",
    Protocol:
      output.Protocol !== undefined && output.Protocol !== null
        ? output.Protocol
        : undefined,
    ResourceEndpoint:
      output.ResourceEndpoint !== undefined && output.ResourceEndpoint !== null
        ? output.ResourceEndpoint
        : undefined
  } as any;
};

const deserializeAws_restJson1ResourceTags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1SingleMasterConfiguration = (
  output: any,
  context: __SerdeContext
): SingleMasterConfiguration => {
  return {
    __type: "SingleMasterConfiguration",
    MessageTtlSeconds:
      output.MessageTtlSeconds !== undefined &&
      output.MessageTtlSeconds !== null
        ? output.MessageTtlSeconds
        : undefined
  } as any;
};

const deserializeAws_restJson1StreamInfo = (
  output: any,
  context: __SerdeContext
): StreamInfo => {
  return {
    __type: "StreamInfo",
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    DataRetentionInHours:
      output.DataRetentionInHours !== undefined &&
      output.DataRetentionInHours !== null
        ? output.DataRetentionInHours
        : undefined,
    DeviceName:
      output.DeviceName !== undefined && output.DeviceName !== null
        ? output.DeviceName
        : undefined,
    KmsKeyId:
      output.KmsKeyId !== undefined && output.KmsKeyId !== null
        ? output.KmsKeyId
        : undefined,
    MediaType:
      output.MediaType !== undefined && output.MediaType !== null
        ? output.MediaType
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    StreamARN:
      output.StreamARN !== undefined && output.StreamARN !== null
        ? output.StreamARN
        : undefined,
    StreamName:
      output.StreamName !== undefined && output.StreamName !== null
        ? output.StreamName
        : undefined,
    Version:
      output.Version !== undefined && output.Version !== null
        ? output.Version
        : undefined
  } as any;
};

const deserializeAws_restJson1StreamInfoList = (
  output: any,
  context: __SerdeContext
): StreamInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1StreamInfo(entry, context)
  );
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
