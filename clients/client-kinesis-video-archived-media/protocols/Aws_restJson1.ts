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

export const serializeAws_restJson1GetDASHStreamingSessionURLCommand = async (
  input: GetDASHStreamingSessionURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/getDASHStreamingSessionURL";
  let body: any;
  body = JSON.stringify({
    ...(input.DASHFragmentSelector !== undefined && {
      DASHFragmentSelector: serializeAws_restJson1DASHFragmentSelector(
        input.DASHFragmentSelector,
        context
      )
    }),
    ...(input.DisplayFragmentNumber !== undefined && {
      DisplayFragmentNumber: input.DisplayFragmentNumber
    }),
    ...(input.DisplayFragmentTimestamp !== undefined && {
      DisplayFragmentTimestamp: input.DisplayFragmentTimestamp
    }),
    ...(input.Expires !== undefined && { Expires: input.Expires }),
    ...(input.MaxManifestFragmentResults !== undefined && {
      MaxManifestFragmentResults: input.MaxManifestFragmentResults
    }),
    ...(input.PlaybackMode !== undefined && {
      PlaybackMode: input.PlaybackMode
    }),
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

export const serializeAws_restJson1GetHLSStreamingSessionURLCommand = async (
  input: GetHLSStreamingSessionURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/getHLSStreamingSessionURL";
  let body: any;
  body = JSON.stringify({
    ...(input.ContainerFormat !== undefined && {
      ContainerFormat: input.ContainerFormat
    }),
    ...(input.DiscontinuityMode !== undefined && {
      DiscontinuityMode: input.DiscontinuityMode
    }),
    ...(input.DisplayFragmentTimestamp !== undefined && {
      DisplayFragmentTimestamp: input.DisplayFragmentTimestamp
    }),
    ...(input.Expires !== undefined && { Expires: input.Expires }),
    ...(input.HLSFragmentSelector !== undefined && {
      HLSFragmentSelector: serializeAws_restJson1HLSFragmentSelector(
        input.HLSFragmentSelector,
        context
      )
    }),
    ...(input.MaxMediaPlaylistFragmentResults !== undefined && {
      MaxMediaPlaylistFragmentResults: input.MaxMediaPlaylistFragmentResults
    }),
    ...(input.PlaybackMode !== undefined && {
      PlaybackMode: input.PlaybackMode
    }),
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

export const serializeAws_restJson1GetMediaForFragmentListCommand = async (
  input: GetMediaForFragmentListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/getMediaForFragmentList";
  let body: any;
  body = JSON.stringify({
    ...(input.Fragments !== undefined && {
      Fragments: serializeAws_restJson1FragmentNumberList(
        input.Fragments,
        context
      )
    }),
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

export const serializeAws_restJson1ListFragmentsCommand = async (
  input: ListFragmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listFragments";
  let body: any;
  body = JSON.stringify({
    ...(input.FragmentSelector !== undefined && {
      FragmentSelector: serializeAws_restJson1FragmentSelector(
        input.FragmentSelector,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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

export const deserializeAws_restJson1GetDASHStreamingSessionURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDASHStreamingSessionURLCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetDASHStreamingSessionURLCommandError(
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
  if (
    data.DASHStreamingSessionURL !== undefined &&
    data.DASHStreamingSessionURL !== null
  ) {
    contents.DASHStreamingSessionURL = data.DASHStreamingSessionURL;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDASHStreamingSessionURLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDASHStreamingSessionURLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
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
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCodecPrivateDataException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidCodecPrivateDataException":
      response = {
        ...(await deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingCodecPrivateDataException":
    case "com.amazonaws.kinesisvideoarchivedmedia#MissingCodecPrivateDataException":
      response = {
        ...(await deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NoDataRetentionException":
      response = {
        ...(await deserializeAws_restJson1NoDataRetentionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
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
    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedStreamMediaTypeException":
    case "com.amazonaws.kinesisvideoarchivedmedia#UnsupportedStreamMediaTypeException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse(
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

export const deserializeAws_restJson1GetHLSStreamingSessionURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHLSStreamingSessionURLCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetHLSStreamingSessionURLCommandError(
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
  if (
    data.HLSStreamingSessionURL !== undefined &&
    data.HLSStreamingSessionURL !== null
  ) {
    contents.HLSStreamingSessionURL = data.HLSStreamingSessionURL;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetHLSStreamingSessionURLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHLSStreamingSessionURLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
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
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
      response = {
        ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCodecPrivateDataException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidCodecPrivateDataException":
      response = {
        ...(await deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingCodecPrivateDataException":
    case "com.amazonaws.kinesisvideoarchivedmedia#MissingCodecPrivateDataException":
      response = {
        ...(await deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NoDataRetentionException":
      response = {
        ...(await deserializeAws_restJson1NoDataRetentionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
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
    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedStreamMediaTypeException":
    case "com.amazonaws.kinesisvideoarchivedmedia#UnsupportedStreamMediaTypeException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse(
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

export const deserializeAws_restJson1GetMediaForFragmentListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaForFragmentListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetMediaForFragmentListCommandError(
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
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  const data: any = output.body;
  contents.Payload = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMediaForFragmentListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMediaForFragmentListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
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
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
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
    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
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
    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
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

export const deserializeAws_restJson1ListFragmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFragmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListFragmentsCommandError(output, context);
  }
  const contents: ListFragmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFragmentsOutput",
    Fragments: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Fragments !== undefined && data.Fragments !== null) {
    contents.Fragments = deserializeAws_restJson1FragmentList(
      data.Fragments,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFragmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFragmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
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
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
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
    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
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
    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
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

const deserializeAws_restJson1InvalidCodecPrivateDataExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCodecPrivateDataException> => {
  const contents: InvalidCodecPrivateDataException = {
    name: "InvalidCodecPrivateDataException",
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

const deserializeAws_restJson1MissingCodecPrivateDataExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingCodecPrivateDataException> => {
  const contents: MissingCodecPrivateDataException = {
    name: "MissingCodecPrivateDataException",
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

const deserializeAws_restJson1NoDataRetentionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoDataRetentionException> => {
  const contents: NoDataRetentionException = {
    name: "NoDataRetentionException",
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

const deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedStreamMediaTypeException> => {
  const contents: UnsupportedStreamMediaTypeException = {
    name: "UnsupportedStreamMediaTypeException",
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

const serializeAws_restJson1DASHFragmentSelector = (
  input: DASHFragmentSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.FragmentSelectorType !== undefined && {
      FragmentSelectorType: input.FragmentSelectorType
    }),
    ...(input.TimestampRange !== undefined && {
      TimestampRange: serializeAws_restJson1DASHTimestampRange(
        input.TimestampRange,
        context
      )
    })
  };
};

const serializeAws_restJson1DASHTimestampRange = (
  input: DASHTimestampRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTimestamp !== undefined && {
      EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000)
    }),
    ...(input.StartTimestamp !== undefined && {
      StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000)
    })
  };
};

const serializeAws_restJson1FragmentNumberList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1FragmentSelector = (
  input: FragmentSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.FragmentSelectorType !== undefined && {
      FragmentSelectorType: input.FragmentSelectorType
    }),
    ...(input.TimestampRange !== undefined && {
      TimestampRange: serializeAws_restJson1TimestampRange(
        input.TimestampRange,
        context
      )
    })
  };
};

const serializeAws_restJson1HLSFragmentSelector = (
  input: HLSFragmentSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.FragmentSelectorType !== undefined && {
      FragmentSelectorType: input.FragmentSelectorType
    }),
    ...(input.TimestampRange !== undefined && {
      TimestampRange: serializeAws_restJson1HLSTimestampRange(
        input.TimestampRange,
        context
      )
    })
  };
};

const serializeAws_restJson1HLSTimestampRange = (
  input: HLSTimestampRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTimestamp !== undefined && {
      EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000)
    }),
    ...(input.StartTimestamp !== undefined && {
      StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000)
    })
  };
};

const serializeAws_restJson1TimestampRange = (
  input: TimestampRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTimestamp !== undefined && {
      EndTimestamp: Math.round(input.EndTimestamp.getTime() / 1000)
    }),
    ...(input.StartTimestamp !== undefined && {
      StartTimestamp: Math.round(input.StartTimestamp.getTime() / 1000)
    })
  };
};

const deserializeAws_restJson1Fragment = (
  output: any,
  context: __SerdeContext
): Fragment => {
  return {
    __type: "Fragment",
    FragmentLengthInMilliseconds:
      output.FragmentLengthInMilliseconds !== undefined &&
      output.FragmentLengthInMilliseconds !== null
        ? output.FragmentLengthInMilliseconds
        : undefined,
    FragmentNumber:
      output.FragmentNumber !== undefined && output.FragmentNumber !== null
        ? output.FragmentNumber
        : undefined,
    FragmentSizeInBytes:
      output.FragmentSizeInBytes !== undefined &&
      output.FragmentSizeInBytes !== null
        ? output.FragmentSizeInBytes
        : undefined,
    ProducerTimestamp:
      output.ProducerTimestamp !== undefined &&
      output.ProducerTimestamp !== null
        ? new Date(Math.round(output.ProducerTimestamp * 1000))
        : undefined,
    ServerTimestamp:
      output.ServerTimestamp !== undefined && output.ServerTimestamp !== null
        ? new Date(Math.round(output.ServerTimestamp * 1000))
        : undefined
  } as any;
};

const deserializeAws_restJson1FragmentList = (
  output: any,
  context: __SerdeContext
): Fragment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Fragment(entry, context)
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
