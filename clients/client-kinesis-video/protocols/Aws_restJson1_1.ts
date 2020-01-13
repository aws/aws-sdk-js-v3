import {
  CreateStreamCommandInput,
  CreateStreamCommandOutput
} from "../commands/CreateStreamCommand";
import {
  DeleteStreamCommandInput,
  DeleteStreamCommandOutput
} from "../commands/DeleteStreamCommand";
import {
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput
} from "../commands/DescribeStreamCommand";
import {
  GetDataEndpointCommandInput,
  GetDataEndpointCommandOutput
} from "../commands/GetDataEndpointCommand";
import {
  ListStreamsCommandInput,
  ListStreamsCommandOutput
} from "../commands/ListStreamsCommand";
import {
  ListTagsForStreamCommandInput,
  ListTagsForStreamCommandOutput
} from "../commands/ListTagsForStreamCommand";
import {
  TagStreamCommandInput,
  TagStreamCommandOutput
} from "../commands/TagStreamCommand";
import {
  UntagStreamCommandInput,
  UntagStreamCommandOutput
} from "../commands/UntagStreamCommand";
import {
  UpdateDataRetentionCommandInput,
  UpdateDataRetentionCommandOutput
} from "../commands/UpdateDataRetentionCommand";
import {
  UpdateStreamCommandInput,
  UpdateStreamCommandOutput
} from "../commands/UpdateStreamCommand";
import {
  AccountStreamLimitExceededException,
  ClientLimitExceededException,
  DeviceStreamLimitExceededException,
  InvalidArgumentException,
  InvalidDeviceException,
  InvalidResourceFormatException,
  NotAuthorizedException,
  ResourceInUseException,
  ResourceNotFoundException,
  StreamInfo,
  StreamNameCondition,
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

export async function serializeAws_restJson1_1CreateStreamCommand(
  input: CreateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createStream";
  let body: any = {};
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

export async function serializeAws_restJson1_1DeleteStreamCommand(
  input: DeleteStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/deleteStream";
  let body: any = {};
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

export async function serializeAws_restJson1_1DescribeStreamCommand(
  input: DescribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeStream";
  let body: any = {};
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
  let body: any = {};
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

export async function serializeAws_restJson1_1ListStreamsCommand(
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listStreams";
  let body: any = {};
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

export async function serializeAws_restJson1_1ListTagsForStreamCommand(
  input: ListTagsForStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listTagsForStream";
  let body: any = {};
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

export async function serializeAws_restJson1_1TagStreamCommand(
  input: TagStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tagStream";
  let body: any = {};
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

export async function serializeAws_restJson1_1UntagStreamCommand(
  input: UntagStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/untagStream";
  let body: any = {};
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
  let body: any = {};
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

export async function serializeAws_restJson1_1UpdateStreamCommand(
  input: UpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/updateStream";
  let body: any = {};
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
  if (data.StreamARN !== undefined) {
    contents.StreamARN = data.StreamARN;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccountStreamLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#AccountStreamLimitExceededException":
      response = await deserializeAws_restJson1_1AccountStreamLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "DeviceStreamLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#DeviceStreamLimitExceededException":
      response = await deserializeAws_restJson1_1DeviceStreamLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidDeviceException":
    case "com.amazon.kinesis.video.v20170930#InvalidDeviceException":
      response = await deserializeAws_restJson1_1InvalidDeviceExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.kinesis.video.v20170930#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        output,
        context
      );
      break;
    case "TagsPerResourceExceededLimitException":
    case "com.amazon.kinesis.video.v20170930#TagsPerResourceExceededLimitException":
      response = await deserializeAws_restJson1_1TagsPerResourceExceededLimitExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.kinesis.video.v20170930#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
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
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "VersionMismatchException":
    case "com.amazon.kinesis.video.v20170930#VersionMismatchException":
      response = await deserializeAws_restJson1_1VersionMismatchExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.kinesis.video.v20170930#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
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
  if (data.StreamInfo !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.kinesis.video.v20170930#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
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
  if (data.DataEndpoint !== undefined) {
    contents.DataEndpoint = data.DataEndpoint;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDataEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataEndpointCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.kinesis.video.v20170930#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
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
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.StreamInfoList !== undefined) {
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
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.kinesis.video.v20170930#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
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
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1ResourceTags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidResourceFormatException":
    case "com.amazon.kinesis.video.v20170930#InvalidResourceFormatException":
      response = await deserializeAws_restJson1_1InvalidResourceFormatExceptionResponse(
        output,
        context
      );
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.kinesis.video.v20170930#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
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
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidResourceFormatException":
    case "com.amazon.kinesis.video.v20170930#InvalidResourceFormatException":
      response = await deserializeAws_restJson1_1InvalidResourceFormatExceptionResponse(
        output,
        context
      );
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "TagsPerResourceExceededLimitException":
    case "com.amazon.kinesis.video.v20170930#TagsPerResourceExceededLimitException":
      response = await deserializeAws_restJson1_1TagsPerResourceExceededLimitExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.kinesis.video.v20170930#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
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
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidResourceFormatException":
    case "com.amazon.kinesis.video.v20170930#InvalidResourceFormatException":
      response = await deserializeAws_restJson1_1InvalidResourceFormatExceptionResponse(
        output,
        context
      );
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.kinesis.video.v20170930#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
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
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDataRetentionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataRetentionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.kinesis.video.v20170930#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "VersionMismatchException":
    case "com.amazon.kinesis.video.v20170930#VersionMismatchException":
      response = await deserializeAws_restJson1_1VersionMismatchExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.kinesis.video.v20170930#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
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
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazon.kinesis.video.v20170930#ClientLimitExceededException":
      response = await deserializeAws_restJson1_1ClientLimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "InvalidArgumentException":
    case "com.amazon.kinesis.video.v20170930#InvalidArgumentException":
      response = await deserializeAws_restJson1_1InvalidArgumentExceptionResponse(
        output,
        context
      );
      break;
    case "NotAuthorizedException":
    case "com.amazon.kinesis.video.v20170930#NotAuthorizedException":
      response = await deserializeAws_restJson1_1NotAuthorizedExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.kinesis.video.v20170930#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.kinesis.video.v20170930#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "VersionMismatchException":
    case "com.amazon.kinesis.video.v20170930#VersionMismatchException":
      response = await deserializeAws_restJson1_1VersionMismatchExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.kinesis.video.v20170930#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_restJson1_1AccountStreamLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccountStreamLimitExceededException> => {
  const contents: AccountStreamLimitExceededException = {
    name: "AccountStreamLimitExceededException",
    __type: "AccountStreamLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
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
    __type: "ClientLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
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
    __type: "DeviceStreamLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
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
    __type: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
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
    __type: "InvalidDeviceException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
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
    __type: "InvalidResourceFormatException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
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
    __type: "NotAuthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
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
    __type: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
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
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
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
    __type: "TagsPerResourceExceededLimitException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
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
    __type: "VersionMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1ResourceTags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1StreamNameCondition = (
  input: StreamNameCondition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ComparisonOperator !== undefined) {
    bodyParams["ComparisonOperator"] = input.ComparisonOperator;
  }
  if (input.ComparisonValue !== undefined) {
    bodyParams["ComparisonValue"] = input.ComparisonValue;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const deserializeAws_restJson1_1ResourceTags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
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
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DataRetentionInHours !== undefined) {
    contents.DataRetentionInHours = output.DataRetentionInHours;
  }
  if (output.DeviceName !== undefined) {
    contents.DeviceName = output.DeviceName;
  }
  if (output.KmsKeyId !== undefined) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  if (output.MediaType !== undefined) {
    contents.MediaType = output.MediaType;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.StreamARN !== undefined) {
    contents.StreamARN = output.StreamARN;
  }
  if (output.StreamName !== undefined) {
    contents.StreamName = output.StreamName;
  }
  if (output.Version !== undefined) {
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
  return context.streamCollector(streamBody) || new Uint8Array();
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
