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

export async function serializeAws_restJson1_1CreateSignalingChannelCommand(
  input: CreateSignalingChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createSignalingChannel";
  let body: any;
  const bodyParams: any = {};
  if (input.ChannelName !== undefined) {
    bodyParams["ChannelName"] = input.ChannelName;
  }
  if (input.ChannelType !== undefined) {
    bodyParams["ChannelType"] = input.ChannelType;
  }
  if (input.SingleMasterConfiguration !== undefined) {
    bodyParams[
      "SingleMasterConfiguration"
    ] = serializeAws_restJson1_1SingleMasterConfiguration(
      input.SingleMasterConfiguration,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagOnCreateList(
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

export async function serializeAws_restJson1_1CreateStreamCommand(
  input: CreateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createStream";
  let body: any;
  const bodyParams: any = {};
  if (input.DataRetentionInHours !== undefined) {
    bodyParams["DataRetentionInHours"] = input.DataRetentionInHours;
  }
  if (input.DeviceName !== undefined) {
    bodyParams["DeviceName"] = input.DeviceName;
  }
  if (input.KmsKeyId !== undefined) {
    bodyParams["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.MediaType !== undefined) {
    bodyParams["MediaType"] = input.MediaType;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1ResourceTags(
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

export async function serializeAws_restJson1_1DeleteSignalingChannelCommand(
  input: DeleteSignalingChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/deleteSignalingChannel";
  let body: any;
  const bodyParams: any = {};
  if (input.ChannelARN !== undefined) {
    bodyParams["ChannelARN"] = input.ChannelARN;
  }
  if (input.CurrentVersion !== undefined) {
    bodyParams["CurrentVersion"] = input.CurrentVersion;
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

export async function serializeAws_restJson1_1DeleteStreamCommand(
  input: DeleteStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/deleteStream";
  let body: any;
  const bodyParams: any = {};
  if (input.CurrentVersion !== undefined) {
    bodyParams["CurrentVersion"] = input.CurrentVersion;
  }
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
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

export async function serializeAws_restJson1_1DescribeSignalingChannelCommand(
  input: DescribeSignalingChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeSignalingChannel";
  let body: any;
  const bodyParams: any = {};
  if (input.ChannelARN !== undefined) {
    bodyParams["ChannelARN"] = input.ChannelARN;
  }
  if (input.ChannelName !== undefined) {
    bodyParams["ChannelName"] = input.ChannelName;
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

export async function serializeAws_restJson1_1DescribeStreamCommand(
  input: DescribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeStream";
  let body: any;
  const bodyParams: any = {};
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
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

export async function serializeAws_restJson1_1GetDataEndpointCommand(
  input: GetDataEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/getDataEndpoint";
  let body: any;
  const bodyParams: any = {};
  if (input.APIName !== undefined) {
    bodyParams["APIName"] = input.APIName;
  }
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
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

export async function serializeAws_restJson1_1GetSignalingChannelEndpointCommand(
  input: GetSignalingChannelEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/getSignalingChannelEndpoint";
  let body: any;
  const bodyParams: any = {};
  if (input.ChannelARN !== undefined) {
    bodyParams["ChannelARN"] = input.ChannelARN;
  }
  if (input.SingleMasterChannelEndpointConfiguration !== undefined) {
    bodyParams[
      "SingleMasterChannelEndpointConfiguration"
    ] = serializeAws_restJson1_1SingleMasterChannelEndpointConfiguration(
      input.SingleMasterChannelEndpointConfiguration,
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

export async function serializeAws_restJson1_1ListSignalingChannelsCommand(
  input: ListSignalingChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listSignalingChannels";
  let body: any;
  const bodyParams: any = {};
  if (input.ChannelNameCondition !== undefined) {
    bodyParams[
      "ChannelNameCondition"
    ] = serializeAws_restJson1_1ChannelNameCondition(
      input.ChannelNameCondition,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListStreamsCommand(
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listStreams";
  let body: any;
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StreamNameCondition !== undefined) {
    bodyParams[
      "StreamNameCondition"
    ] = serializeAws_restJson1_1StreamNameCondition(
      input.StreamNameCondition,
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

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/ListTagsForResource";
  let body: any;
  const bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
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

export async function serializeAws_restJson1_1ListTagsForStreamCommand(
  input: ListTagsForStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listTagsForStream";
  let body: any;
  const bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
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

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/TagResource";
  let body: any;
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagList(input.Tags, context);
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

export async function serializeAws_restJson1_1TagStreamCommand(
  input: TagStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tagStream";
  let body: any;
  const bodyParams: any = {};
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1ResourceTags(
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
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/UntagResource";
  let body: any;
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.TagKeyList !== undefined) {
    bodyParams["TagKeyList"] = serializeAws_restJson1_1TagKeyList(
      input.TagKeyList,
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

export async function serializeAws_restJson1_1UntagStreamCommand(
  input: UntagStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/untagStream";
  let body: any;
  const bodyParams: any = {};
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  if (input.TagKeyList !== undefined) {
    bodyParams["TagKeyList"] = serializeAws_restJson1_1TagKeyList(
      input.TagKeyList,
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

export async function serializeAws_restJson1_1UpdateDataRetentionCommand(
  input: UpdateDataRetentionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/updateDataRetention";
  let body: any;
  const bodyParams: any = {};
  if (input.CurrentVersion !== undefined) {
    bodyParams["CurrentVersion"] = input.CurrentVersion;
  }
  if (input.DataRetentionChangeInHours !== undefined) {
    bodyParams["DataRetentionChangeInHours"] = input.DataRetentionChangeInHours;
  }
  if (input.Operation !== undefined) {
    bodyParams["Operation"] = input.Operation;
  }
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
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

export async function serializeAws_restJson1_1UpdateSignalingChannelCommand(
  input: UpdateSignalingChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/updateSignalingChannel";
  let body: any;
  const bodyParams: any = {};
  if (input.ChannelARN !== undefined) {
    bodyParams["ChannelARN"] = input.ChannelARN;
  }
  if (input.CurrentVersion !== undefined) {
    bodyParams["CurrentVersion"] = input.CurrentVersion;
  }
  if (input.SingleMasterConfiguration !== undefined) {
    bodyParams[
      "SingleMasterConfiguration"
    ] = serializeAws_restJson1_1SingleMasterConfiguration(
      input.SingleMasterConfiguration,
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

export async function serializeAws_restJson1_1UpdateStreamCommand(
  input: UpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/updateStream";
  let body: any;
  const bodyParams: any = {};
  if (input.CurrentVersion !== undefined) {
    bodyParams["CurrentVersion"] = input.CurrentVersion;
  }
  if (input.DeviceName !== undefined) {
    bodyParams["DeviceName"] = input.DeviceName;
  }
  if (input.MediaType !== undefined) {
    bodyParams["MediaType"] = input.MediaType;
  }
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
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

export async function deserializeAws_restJson1_1CreateSignalingChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSignalingChannelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateSignalingChannelCommandError(
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
}

async function deserializeAws_restJson1_1CreateSignalingChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSignalingChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.kinesis.video.v20170930#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccountChannelLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#AccountChannelLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1AccountChannelLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.kinesis.video.v20170930#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagsPerResourceExceededLimitException":
    case "com.amazon.kinesis.video.v20170930#TagsPerResourceExceededLimitException":
      response = {
        ...(await deserializeAws_restJson1_1TagsPerResourceExceededLimitExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateStreamCommandError(output, context);
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
}

async function deserializeAws_restJson1_1CreateStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccountStreamLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#AccountStreamLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1AccountStreamLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DeviceStreamLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#DeviceStreamLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1DeviceStreamLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDeviceException":
    case "com.amazon.kinesis.video.v20170930#InvalidDeviceException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidDeviceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.kinesis.video.v20170930#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagsPerResourceExceededLimitException":
    case "com.amazon.kinesis.video.v20170930#TagsPerResourceExceededLimitException":
      response = {
        ...(await deserializeAws_restJson1_1TagsPerResourceExceededLimitExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteSignalingChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSignalingChannelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteSignalingChannelCommandError(
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
}

async function deserializeAws_restJson1_1DeleteSignalingChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSignalingChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.kinesis.video.v20170930#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VersionMismatchException":
    case "com.amazon.kinesis.video.v20170930#VersionMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1VersionMismatchExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteStreamCommandError(output, context);
  }
  const contents: DeleteStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteStreamOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VersionMismatchException":
    case "com.amazon.kinesis.video.v20170930#VersionMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1VersionMismatchExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeSignalingChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSignalingChannelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSignalingChannelCommandError(
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
    contents.ChannelInfo = deserializeAws_restJson1_1ChannelInfo(
      data.ChannelInfo,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeSignalingChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSignalingChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.kinesis.video.v20170930#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeStreamCommandError(
      output,
      context
    );
  }
  const contents: DescribeStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStreamOutput",
    StreamInfo: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.StreamInfo !== undefined && data.StreamInfo !== null) {
    contents.StreamInfo = deserializeAws_restJson1_1StreamInfo(
      data.StreamInfo,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1GetDataEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataEndpointCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDataEndpointCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1GetDataEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataEndpointCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1GetSignalingChannelEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSignalingChannelEndpointCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSignalingChannelEndpointCommandError(
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
    contents.ResourceEndpointList = deserializeAws_restJson1_1ResourceEndpointList(
      data.ResourceEndpointList,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSignalingChannelEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSignalingChannelEndpointCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.kinesis.video.v20170930#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.kinesis.video.v20170930#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1ListSignalingChannelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalingChannelsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListSignalingChannelsCommandError(
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
    contents.ChannelInfoList = deserializeAws_restJson1_1ChannelInfoList(
      data.ChannelInfoList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListSignalingChannelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSignalingChannelsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.kinesis.video.v20170930#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
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

export async function deserializeAws_restJson1_1ListStreamsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListStreamsCommandError(output, context);
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
    contents.StreamInfoList = deserializeAws_restJson1_1StreamInfoList(
      data.StreamInfoList,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListStreamsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
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
    __type: "ListTagsForResourceOutput",
    NextToken: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1ResourceTags(data.Tags, context);
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
    case "AccessDeniedException":
    case "com.amazon.kinesis.video.v20170930#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1ListTagsForStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForStreamCommandError(
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
    contents.Tags = deserializeAws_restJson1_1ResourceTags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceFormatException":
    case "com.amazon.kinesis.video.v20170930#InvalidResourceFormatException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidResourceFormatExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceOutput"
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
    case "AccessDeniedException":
    case "com.amazon.kinesis.video.v20170930#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagsPerResourceExceededLimitException":
    case "com.amazon.kinesis.video.v20170930#TagsPerResourceExceededLimitException":
      response = {
        ...(await deserializeAws_restJson1_1TagsPerResourceExceededLimitExceptionResponse(
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

export async function deserializeAws_restJson1_1TagStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagStreamCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagStreamCommandError(output, context);
  }
  const contents: TagStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagStreamOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceFormatException":
    case "com.amazon.kinesis.video.v20170930#InvalidResourceFormatException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidResourceFormatExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagsPerResourceExceededLimitException":
    case "com.amazon.kinesis.video.v20170930#TagsPerResourceExceededLimitException":
      response = {
        ...(await deserializeAws_restJson1_1TagsPerResourceExceededLimitExceptionResponse(
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceOutput"
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
    case "AccessDeniedException":
    case "com.amazon.kinesis.video.v20170930#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1UntagStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagStreamCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagStreamCommandError(output, context);
  }
  const contents: UntagStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagStreamOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceFormatException":
    case "com.amazon.kinesis.video.v20170930#InvalidResourceFormatException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidResourceFormatExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateDataRetentionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataRetentionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDataRetentionCommandError(
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
}

async function deserializeAws_restJson1_1UpdateDataRetentionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataRetentionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.kinesis.video.v20170930#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VersionMismatchException":
    case "com.amazon.kinesis.video.v20170930#VersionMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1VersionMismatchExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateSignalingChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSignalingChannelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateSignalingChannelCommandError(
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
}

async function deserializeAws_restJson1_1UpdateSignalingChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSignalingChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.kinesis.video.v20170930#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.kinesis.video.v20170930#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VersionMismatchException":
    case "com.amazon.kinesis.video.v20170930#VersionMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1VersionMismatchExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateStreamCommandError(output, context);
  }
  const contents: UpdateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateStreamOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.kinesis.video.v20170930#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "VersionMismatchException":
    case "com.amazon.kinesis.video.v20170930#VersionMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1VersionMismatchExceptionResponse(
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

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
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

const deserializeAws_restJson1_1AccountChannelLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccountChannelLimitExceededException> => {
  const contents: AccountChannelLimitExceededException = {
    name: "AccountChannelLimitExceededException",
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

const deserializeAws_restJson1_1AccountStreamLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccountStreamLimitExceededException> => {
  const contents: AccountStreamLimitExceededException = {
    name: "AccountStreamLimitExceededException",
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

const deserializeAws_restJson1_1ClientLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ClientLimitExceededException> => {
  const contents: ClientLimitExceededException = {
    name: "ClientLimitExceededException",
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

const deserializeAws_restJson1_1DeviceStreamLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DeviceStreamLimitExceededException> => {
  const contents: DeviceStreamLimitExceededException = {
    name: "DeviceStreamLimitExceededException",
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

const deserializeAws_restJson1_1InvalidArgumentExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
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

const deserializeAws_restJson1_1InvalidDeviceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidDeviceException> => {
  const contents: InvalidDeviceException = {
    name: "InvalidDeviceException",
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

const deserializeAws_restJson1_1InvalidResourceFormatExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidResourceFormatException> => {
  const contents: InvalidResourceFormatException = {
    name: "InvalidResourceFormatException",
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

const deserializeAws_restJson1_1NotAuthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: NotAuthorizedException = {
    name: "NotAuthorizedException",
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

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
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

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
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

const deserializeAws_restJson1_1TagsPerResourceExceededLimitExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TagsPerResourceExceededLimitException> => {
  const contents: TagsPerResourceExceededLimitException = {
    name: "TagsPerResourceExceededLimitException",
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

const deserializeAws_restJson1_1VersionMismatchExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<VersionMismatchException> => {
  const contents: VersionMismatchException = {
    name: "VersionMismatchException",
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

const serializeAws_restJson1_1ChannelNameCondition = (
  input: ChannelNameCondition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComparisonOperator !== undefined) {
    bodyParams["ComparisonOperator"] = input.ComparisonOperator;
  }
  if (input.ComparisonValue !== undefined) {
    bodyParams["ComparisonValue"] = input.ComparisonValue;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ListOfProtocols = (
  input: Array<ChannelProtocol | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1ResourceTags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1SingleMasterChannelEndpointConfiguration = (
  input: SingleMasterChannelEndpointConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Protocols !== undefined) {
    bodyParams["Protocols"] = serializeAws_restJson1_1ListOfProtocols(
      input.Protocols,
      context
    );
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SingleMasterConfiguration = (
  input: SingleMasterConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MessageTtlSeconds !== undefined) {
    bodyParams["MessageTtlSeconds"] = input.MessageTtlSeconds;
  }
  return bodyParams;
};

const serializeAws_restJson1_1StreamNameCondition = (
  input: StreamNameCondition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ComparisonOperator !== undefined) {
    bodyParams["ComparisonOperator"] = input.ComparisonOperator;
  }
  if (input.ComparisonValue !== undefined) {
    bodyParams["ComparisonValue"] = input.ComparisonValue;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1TagOnCreateList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Tag(entry, context));
  }
  return contents;
};

const deserializeAws_restJson1_1ChannelInfo = (
  output: any,
  context: __SerdeContext
): ChannelInfo => {
  let contents: any = {
    __type: "ChannelInfo",
    ChannelARN: undefined,
    ChannelName: undefined,
    ChannelStatus: undefined,
    ChannelType: undefined,
    CreationTime: undefined,
    SingleMasterConfiguration: undefined,
    Version: undefined
  };
  if (output.ChannelARN !== undefined && output.ChannelARN !== null) {
    contents.ChannelARN = output.ChannelARN;
  }
  if (output.ChannelName !== undefined && output.ChannelName !== null) {
    contents.ChannelName = output.ChannelName;
  }
  if (output.ChannelStatus !== undefined && output.ChannelStatus !== null) {
    contents.ChannelStatus = output.ChannelStatus;
  }
  if (output.ChannelType !== undefined && output.ChannelType !== null) {
    contents.ChannelType = output.ChannelType;
  }
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (
    output.SingleMasterConfiguration !== undefined &&
    output.SingleMasterConfiguration !== null
  ) {
    contents.SingleMasterConfiguration = deserializeAws_restJson1_1SingleMasterConfiguration(
      output.SingleMasterConfiguration,
      context
    );
  }
  if (output.Version !== undefined && output.Version !== null) {
    contents.Version = output.Version;
  }
  return contents;
};

const deserializeAws_restJson1_1ChannelInfoList = (
  output: any,
  context: __SerdeContext
): Array<ChannelInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ChannelInfo(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceEndpointList = (
  output: any,
  context: __SerdeContext
): Array<ResourceEndpointListItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourceEndpointListItem(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceEndpointListItem = (
  output: any,
  context: __SerdeContext
): ResourceEndpointListItem => {
  let contents: any = {
    __type: "ResourceEndpointListItem",
    Protocol: undefined,
    ResourceEndpoint: undefined
  };
  if (output.Protocol !== undefined && output.Protocol !== null) {
    contents.Protocol = output.Protocol;
  }
  if (
    output.ResourceEndpoint !== undefined &&
    output.ResourceEndpoint !== null
  ) {
    contents.ResourceEndpoint = output.ResourceEndpoint;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceTags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1SingleMasterConfiguration = (
  output: any,
  context: __SerdeContext
): SingleMasterConfiguration => {
  let contents: any = {
    __type: "SingleMasterConfiguration",
    MessageTtlSeconds: undefined
  };
  if (
    output.MessageTtlSeconds !== undefined &&
    output.MessageTtlSeconds !== null
  ) {
    contents.MessageTtlSeconds = output.MessageTtlSeconds;
  }
  return contents;
};

const deserializeAws_restJson1_1StreamInfo = (
  output: any,
  context: __SerdeContext
): StreamInfo => {
  let contents: any = {
    __type: "StreamInfo",
    CreationTime: undefined,
    DataRetentionInHours: undefined,
    DeviceName: undefined,
    KmsKeyId: undefined,
    MediaType: undefined,
    Status: undefined,
    StreamARN: undefined,
    StreamName: undefined,
    Version: undefined
  };
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (
    output.DataRetentionInHours !== undefined &&
    output.DataRetentionInHours !== null
  ) {
    contents.DataRetentionInHours = output.DataRetentionInHours;
  }
  if (output.DeviceName !== undefined && output.DeviceName !== null) {
    contents.DeviceName = output.DeviceName;
  }
  if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  if (output.MediaType !== undefined && output.MediaType !== null) {
    contents.MediaType = output.MediaType;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StreamARN !== undefined && output.StreamARN !== null) {
    contents.StreamARN = output.StreamARN;
  }
  if (output.StreamName !== undefined && output.StreamName !== null) {
    contents.StreamName = output.StreamName;
  }
  if (output.Version !== undefined && output.Version !== null) {
    contents.Version = output.Version;
  }
  return contents;
};

const deserializeAws_restJson1_1StreamInfoList = (
  output: any,
  context: __SerdeContext
): Array<StreamInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1StreamInfo(entry, context)
  );
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
