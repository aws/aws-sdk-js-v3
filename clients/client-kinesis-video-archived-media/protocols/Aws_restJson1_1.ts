import {
  GetDASHStreamingSessionURLCommandInput,
  GetDASHStreamingSessionURLCommandOutput
} from "../commands/GetDASHStreamingSessionURLCommand";
import {
  GetHLSStreamingSessionURLCommandInput,
  GetHLSStreamingSessionURLCommandOutput
} from "../commands/GetHLSStreamingSessionURLCommand";
import {
  GetMediaForFragmentListCommandInput,
  GetMediaForFragmentListCommandOutput
} from "../commands/GetMediaForFragmentListCommand";
import {
  ListFragmentsCommandInput,
  ListFragmentsCommandOutput
} from "../commands/ListFragmentsCommand";
import {
  ClientLimitExceededException,
  DASHFragmentSelector,
  DASHTimestampRange,
  Fragment,
  FragmentSelector,
  HLSFragmentSelector,
  HLSTimestampRange,
  InvalidArgumentException,
  InvalidCodecPrivateDataException,
  MissingCodecPrivateDataException,
  NoDataRetentionException,
  NotAuthorizedException,
  ResourceNotFoundException,
  TimestampRange,
  UnsupportedStreamMediaTypeException
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

export async function serializeAws_restJson1_1GetDASHStreamingSessionURLCommand(
  input: GetDASHStreamingSessionURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/getDASHStreamingSessionURL";
  let body: any = {};
  const bodyParams: any = {};
  if (input.DASHFragmentSelector !== undefined) {
    bodyParams[
      "DASHFragmentSelector"
    ] = serializeAws_restJson1_1DASHFragmentSelector(
      input.DASHFragmentSelector,
      context
    );
  }
  if (input.DisplayFragmentNumber !== undefined) {
    bodyParams["DisplayFragmentNumber"] = input.DisplayFragmentNumber;
  }
  if (input.DisplayFragmentTimestamp !== undefined) {
    bodyParams["DisplayFragmentTimestamp"] = input.DisplayFragmentTimestamp;
  }
  if (input.Expires !== undefined) {
    bodyParams["Expires"] = input.Expires;
  }
  if (input.MaxManifestFragmentResults !== undefined) {
    bodyParams["MaxManifestFragmentResults"] = input.MaxManifestFragmentResults;
  }
  if (input.PlaybackMode !== undefined) {
    bodyParams["PlaybackMode"] = input.PlaybackMode;
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

export async function serializeAws_restJson1_1GetHLSStreamingSessionURLCommand(
  input: GetHLSStreamingSessionURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/getHLSStreamingSessionURL";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ContainerFormat !== undefined) {
    bodyParams["ContainerFormat"] = input.ContainerFormat;
  }
  if (input.DiscontinuityMode !== undefined) {
    bodyParams["DiscontinuityMode"] = input.DiscontinuityMode;
  }
  if (input.DisplayFragmentTimestamp !== undefined) {
    bodyParams["DisplayFragmentTimestamp"] = input.DisplayFragmentTimestamp;
  }
  if (input.Expires !== undefined) {
    bodyParams["Expires"] = input.Expires;
  }
  if (input.HLSFragmentSelector !== undefined) {
    bodyParams[
      "HLSFragmentSelector"
    ] = serializeAws_restJson1_1HLSFragmentSelector(
      input.HLSFragmentSelector,
      context
    );
  }
  if (input.MaxMediaPlaylistFragmentResults !== undefined) {
    bodyParams["MaxMediaPlaylistFragmentResults"] =
      input.MaxMediaPlaylistFragmentResults;
  }
  if (input.PlaybackMode !== undefined) {
    bodyParams["PlaybackMode"] = input.PlaybackMode;
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

export async function serializeAws_restJson1_1GetMediaForFragmentListCommand(
  input: GetMediaForFragmentListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/getMediaForFragmentList";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Fragments !== undefined) {
    bodyParams["Fragments"] = serializeAws_restJson1_1FragmentNumberList(
      input.Fragments,
      context
    );
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

export async function serializeAws_restJson1_1ListFragmentsCommand(
  input: ListFragmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listFragments";
  let body: any = {};
  const bodyParams: any = {};
  if (input.FragmentSelector !== undefined) {
    bodyParams["FragmentSelector"] = serializeAws_restJson1_1FragmentSelector(
      input.FragmentSelector,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
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

export async function deserializeAws_restJson1_1GetDASHStreamingSessionURLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDASHStreamingSessionURLCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetDASHStreamingSessionURLCommandError(
      output,
      context
    );
  }
  const contents: GetDASHStreamingSessionURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDASHStreamingSessionURLOutput",
    DASHStreamingSessionURL: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DASHStreamingSessionURL !== undefined) {
    contents.DASHStreamingSessionURL = data.DASHStreamingSessionURL;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDASHStreamingSessionURLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDASHStreamingSessionURLCommandOutput> {
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
    case "InvalidCodecPrivateDataException":
    case "com.amazon.kinesis.video.v20170930#InvalidCodecPrivateDataException":
      response = await deserializeAws_restJson1_1InvalidCodecPrivateDataExceptionResponse(
        output,
        context
      );
      break;
    case "MissingCodecPrivateDataException":
    case "com.amazon.kinesis.video.v20170930#MissingCodecPrivateDataException":
      response = await deserializeAws_restJson1_1MissingCodecPrivateDataExceptionResponse(
        output,
        context
      );
      break;
    case "NoDataRetentionException":
    case "com.amazon.kinesis.video.v20170930#NoDataRetentionException":
      response = await deserializeAws_restJson1_1NoDataRetentionExceptionResponse(
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
    case "UnsupportedStreamMediaTypeException":
    case "com.amazon.kinesis.video.v20170930#UnsupportedStreamMediaTypeException":
      response = await deserializeAws_restJson1_1UnsupportedStreamMediaTypeExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.AWSAcuityReader#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetHLSStreamingSessionURLCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHLSStreamingSessionURLCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetHLSStreamingSessionURLCommandError(
      output,
      context
    );
  }
  const contents: GetHLSStreamingSessionURLCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetHLSStreamingSessionURLOutput",
    HLSStreamingSessionURL: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.HLSStreamingSessionURL !== undefined) {
    contents.HLSStreamingSessionURL = data.HLSStreamingSessionURL;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetHLSStreamingSessionURLCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHLSStreamingSessionURLCommandOutput> {
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
    case "InvalidCodecPrivateDataException":
    case "com.amazon.kinesis.video.v20170930#InvalidCodecPrivateDataException":
      response = await deserializeAws_restJson1_1InvalidCodecPrivateDataExceptionResponse(
        output,
        context
      );
      break;
    case "MissingCodecPrivateDataException":
    case "com.amazon.kinesis.video.v20170930#MissingCodecPrivateDataException":
      response = await deserializeAws_restJson1_1MissingCodecPrivateDataExceptionResponse(
        output,
        context
      );
      break;
    case "NoDataRetentionException":
    case "com.amazon.kinesis.video.v20170930#NoDataRetentionException":
      response = await deserializeAws_restJson1_1NoDataRetentionExceptionResponse(
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
    case "UnsupportedStreamMediaTypeException":
    case "com.amazon.kinesis.video.v20170930#UnsupportedStreamMediaTypeException":
      response = await deserializeAws_restJson1_1UnsupportedStreamMediaTypeExceptionResponse(
        output,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazon.AWSAcuityReader#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetMediaForFragmentListCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaForFragmentListCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetMediaForFragmentListCommandError(
      output,
      context
    );
  }
  const contents: GetMediaForFragmentListCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMediaForFragmentListOutput",
    ContentType: undefined,
    Payload: undefined
  };
  if (output.headers["Content-Type"] !== undefined) {
    contents.ContentType = output.headers["Content-Type"];
  }
  const data: any = output.body;
  contents.Payload = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetMediaForFragmentListCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaForFragmentListCommandOutput> {
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
      response = {
        __type: `com.amazon.AWSAcuityReader#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListFragmentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFragmentsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListFragmentsCommandError(output, context);
  }
  const contents: ListFragmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFragmentsOutput",
    Fragments: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Fragments !== undefined) {
    contents.Fragments = deserializeAws_restJson1_1FragmentList(
      data.Fragments,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListFragmentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFragmentsCommandOutput> {
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
      response = {
        __type: `com.amazon.AWSAcuityReader#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

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

const deserializeAws_restJson1_1InvalidCodecPrivateDataExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidCodecPrivateDataException> => {
  const contents: InvalidCodecPrivateDataException = {
    name: "InvalidCodecPrivateDataException",
    __type: "InvalidCodecPrivateDataException",
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

const deserializeAws_restJson1_1MissingCodecPrivateDataExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MissingCodecPrivateDataException> => {
  const contents: MissingCodecPrivateDataException = {
    name: "MissingCodecPrivateDataException",
    __type: "MissingCodecPrivateDataException",
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

const deserializeAws_restJson1_1NoDataRetentionExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NoDataRetentionException> => {
  const contents: NoDataRetentionException = {
    name: "NoDataRetentionException",
    __type: "NoDataRetentionException",
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

const deserializeAws_restJson1_1UnsupportedStreamMediaTypeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedStreamMediaTypeException> => {
  const contents: UnsupportedStreamMediaTypeException = {
    name: "UnsupportedStreamMediaTypeException",
    __type: "UnsupportedStreamMediaTypeException",
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

const serializeAws_restJson1_1DASHFragmentSelector = (
  input: DASHFragmentSelector,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FragmentSelectorType !== undefined) {
    bodyParams["FragmentSelectorType"] = input.FragmentSelectorType;
  }
  if (input.TimestampRange !== undefined) {
    bodyParams["TimestampRange"] = serializeAws_restJson1_1DASHTimestampRange(
      input.TimestampRange,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DASHTimestampRange = (
  input: DASHTimestampRange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndTimestamp !== undefined) {
    bodyParams["EndTimestamp"] = Math.round(
      input.EndTimestamp.getTime() / 1000
    );
  }
  if (input.StartTimestamp !== undefined) {
    bodyParams["StartTimestamp"] = Math.round(
      input.StartTimestamp.getTime() / 1000
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1FragmentNumberList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1FragmentSelector = (
  input: FragmentSelector,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FragmentSelectorType !== undefined) {
    bodyParams["FragmentSelectorType"] = input.FragmentSelectorType;
  }
  if (input.TimestampRange !== undefined) {
    bodyParams["TimestampRange"] = serializeAws_restJson1_1TimestampRange(
      input.TimestampRange,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1HLSFragmentSelector = (
  input: HLSFragmentSelector,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FragmentSelectorType !== undefined) {
    bodyParams["FragmentSelectorType"] = input.FragmentSelectorType;
  }
  if (input.TimestampRange !== undefined) {
    bodyParams["TimestampRange"] = serializeAws_restJson1_1HLSTimestampRange(
      input.TimestampRange,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1HLSTimestampRange = (
  input: HLSTimestampRange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndTimestamp !== undefined) {
    bodyParams["EndTimestamp"] = Math.round(
      input.EndTimestamp.getTime() / 1000
    );
  }
  if (input.StartTimestamp !== undefined) {
    bodyParams["StartTimestamp"] = Math.round(
      input.StartTimestamp.getTime() / 1000
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1TimestampRange = (
  input: TimestampRange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndTimestamp !== undefined) {
    bodyParams["EndTimestamp"] = Math.round(
      input.EndTimestamp.getTime() / 1000
    );
  }
  if (input.StartTimestamp !== undefined) {
    bodyParams["StartTimestamp"] = Math.round(
      input.StartTimestamp.getTime() / 1000
    );
  }
  return bodyParams;
};

const deserializeAws_restJson1_1Fragment = (
  output: any,
  context: __SerdeContext
): Fragment => {
  let contents: any = {
    __type: "Fragment",
    FragmentLengthInMilliseconds: undefined,
    FragmentNumber: undefined,
    FragmentSizeInBytes: undefined,
    ProducerTimestamp: undefined,
    ServerTimestamp: undefined
  };
  if (output.FragmentLengthInMilliseconds !== undefined) {
    contents.FragmentLengthInMilliseconds = output.FragmentLengthInMilliseconds;
  }
  if (output.FragmentNumber !== undefined) {
    contents.FragmentNumber = output.FragmentNumber;
  }
  if (output.FragmentSizeInBytes !== undefined) {
    contents.FragmentSizeInBytes = output.FragmentSizeInBytes;
  }
  if (output.ProducerTimestamp !== undefined) {
    contents.ProducerTimestamp = new Date(
      output.ProducerTimestamp % 1 != 0
        ? Math.round(output.ProducerTimestamp * 1000)
        : output.ProducerTimestamp
    );
  }
  if (output.ServerTimestamp !== undefined) {
    contents.ServerTimestamp = new Date(
      output.ServerTimestamp % 1 != 0
        ? Math.round(output.ServerTimestamp * 1000)
        : output.ServerTimestamp
    );
  }
  return contents;
};

const deserializeAws_restJson1_1FragmentList = (
  output: any,
  context: __SerdeContext
): Array<Fragment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Fragment(entry, context)
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
