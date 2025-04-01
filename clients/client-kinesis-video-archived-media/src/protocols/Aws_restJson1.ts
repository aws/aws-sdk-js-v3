// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GetClipCommandInput, GetClipCommandOutput } from "../commands/GetClipCommand";
import {
  GetDASHStreamingSessionURLCommandInput,
  GetDASHStreamingSessionURLCommandOutput,
} from "../commands/GetDASHStreamingSessionURLCommand";
import {
  GetHLSStreamingSessionURLCommandInput,
  GetHLSStreamingSessionURLCommandOutput,
} from "../commands/GetHLSStreamingSessionURLCommand";
import { GetImagesCommandInput, GetImagesCommandOutput } from "../commands/GetImagesCommand";
import {
  GetMediaForFragmentListCommandInput,
  GetMediaForFragmentListCommandOutput,
} from "../commands/GetMediaForFragmentListCommand";
import { ListFragmentsCommandInput, ListFragmentsCommandOutput } from "../commands/ListFragmentsCommand";
import { KinesisVideoArchivedMediaServiceException as __BaseException } from "../models/KinesisVideoArchivedMediaServiceException";
import {
  ClientLimitExceededException,
  ClipFragmentSelector,
  ClipTimestampRange,
  DASHFragmentSelector,
  DASHTimestampRange,
  FormatConfigKey,
  Fragment,
  FragmentSelector,
  HLSFragmentSelector,
  HLSTimestampRange,
  Image,
  InvalidArgumentException,
  InvalidCodecPrivateDataException,
  InvalidMediaFrameException,
  MissingCodecPrivateDataException,
  NoDataRetentionException,
  NotAuthorizedException,
  ResourceNotFoundException,
  TimestampRange,
  UnsupportedStreamMediaTypeException,
} from "../models/models_0";

/**
 * serializeAws_restJson1GetClipCommand
 */
export const se_GetClipCommand = async (
  input: GetClipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getClip");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClipFragmentSelector: (_) => se_ClipFragmentSelector(_, context),
      StreamARN: [],
      StreamName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDASHStreamingSessionURLCommand
 */
export const se_GetDASHStreamingSessionURLCommand = async (
  input: GetDASHStreamingSessionURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getDASHStreamingSessionURL");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DASHFragmentSelector: (_) => se_DASHFragmentSelector(_, context),
      DisplayFragmentNumber: [],
      DisplayFragmentTimestamp: [],
      Expires: [],
      MaxManifestFragmentResults: [],
      PlaybackMode: [],
      StreamARN: [],
      StreamName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetHLSStreamingSessionURLCommand
 */
export const se_GetHLSStreamingSessionURLCommand = async (
  input: GetHLSStreamingSessionURLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getHLSStreamingSessionURL");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ContainerFormat: [],
      DiscontinuityMode: [],
      DisplayFragmentTimestamp: [],
      Expires: [],
      HLSFragmentSelector: (_) => se_HLSFragmentSelector(_, context),
      MaxMediaPlaylistFragmentResults: [],
      PlaybackMode: [],
      StreamARN: [],
      StreamName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImagesCommand
 */
export const se_GetImagesCommand = async (
  input: GetImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getImages");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTimestamp: (_) => _.getTime() / 1_000,
      Format: [],
      FormatConfig: (_) => _json(_),
      HeightPixels: [],
      ImageSelectorType: [],
      MaxResults: [],
      NextToken: [],
      SamplingInterval: [],
      StartTimestamp: (_) => _.getTime() / 1_000,
      StreamARN: [],
      StreamName: [],
      WidthPixels: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMediaForFragmentListCommand
 */
export const se_GetMediaForFragmentListCommand = async (
  input: GetMediaForFragmentListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getMediaForFragmentList");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Fragments: (_) => _json(_),
      StreamARN: [],
      StreamName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFragmentsCommand
 */
export const se_ListFragmentsCommand = async (
  input: ListFragmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listFragments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      FragmentSelector: (_) => se_FragmentSelector(_, context),
      MaxResults: [],
      NextToken: [],
      StreamARN: [],
      StreamName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1GetClipCommand
 */
export const de_GetClipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetClipCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.Payload = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetDASHStreamingSessionURLCommand
 */
export const de_GetDASHStreamingSessionURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDASHStreamingSessionURLCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DASHStreamingSessionURL: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetHLSStreamingSessionURLCommand
 */
export const de_GetHLSStreamingSessionURLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHLSStreamingSessionURLCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    HLSStreamingSessionURL: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetImagesCommand
 */
export const de_GetImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Images: (_) => de_Images(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMediaForFragmentListCommand
 */
export const de_GetMediaForFragmentListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetMediaForFragmentListCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.Payload = data;
  return contents;
};

/**
 * deserializeAws_restJson1ListFragmentsCommand
 */
export const de_ListFragmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFragmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Fragments: (_) => de_FragmentList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientLimitExceededException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ClientLimitExceededException":
      throw await de_ClientLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidCodecPrivateDataException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidCodecPrivateDataException":
      throw await de_InvalidCodecPrivateDataExceptionRes(parsedOutput, context);
    case "InvalidMediaFrameException":
    case "com.amazonaws.kinesisvideoarchivedmedia#InvalidMediaFrameException":
      throw await de_InvalidMediaFrameExceptionRes(parsedOutput, context);
    case "MissingCodecPrivateDataException":
    case "com.amazonaws.kinesisvideoarchivedmedia#MissingCodecPrivateDataException":
      throw await de_MissingCodecPrivateDataExceptionRes(parsedOutput, context);
    case "NoDataRetentionException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NoDataRetentionException":
      throw await de_NoDataRetentionExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.kinesisvideoarchivedmedia#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisvideoarchivedmedia#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedStreamMediaTypeException":
    case "com.amazonaws.kinesisvideoarchivedmedia#UnsupportedStreamMediaTypeException":
      throw await de_UnsupportedStreamMediaTypeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1ClientLimitExceededExceptionRes
 */
const de_ClientLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ClientLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidArgumentExceptionRes
 */
const de_InvalidArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidCodecPrivateDataExceptionRes
 */
const de_InvalidCodecPrivateDataExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCodecPrivateDataException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidCodecPrivateDataException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidMediaFrameExceptionRes
 */
const de_InvalidMediaFrameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMediaFrameException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidMediaFrameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MissingCodecPrivateDataExceptionRes
 */
const de_MissingCodecPrivateDataExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingCodecPrivateDataException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MissingCodecPrivateDataException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NoDataRetentionExceptionRes
 */
const de_NoDataRetentionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoDataRetentionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NoDataRetentionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotAuthorizedExceptionRes
 */
const de_NotAuthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotAuthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedStreamMediaTypeExceptionRes
 */
const de_UnsupportedStreamMediaTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedStreamMediaTypeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedStreamMediaTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ClipFragmentSelector
 */
const se_ClipFragmentSelector = (input: ClipFragmentSelector, context: __SerdeContext): any => {
  return take(input, {
    FragmentSelectorType: [],
    TimestampRange: (_) => se_ClipTimestampRange(_, context),
  });
};

/**
 * serializeAws_restJson1ClipTimestampRange
 */
const se_ClipTimestampRange = (input: ClipTimestampRange, context: __SerdeContext): any => {
  return take(input, {
    EndTimestamp: (_) => _.getTime() / 1_000,
    StartTimestamp: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1DASHFragmentSelector
 */
const se_DASHFragmentSelector = (input: DASHFragmentSelector, context: __SerdeContext): any => {
  return take(input, {
    FragmentSelectorType: [],
    TimestampRange: (_) => se_DASHTimestampRange(_, context),
  });
};

/**
 * serializeAws_restJson1DASHTimestampRange
 */
const se_DASHTimestampRange = (input: DASHTimestampRange, context: __SerdeContext): any => {
  return take(input, {
    EndTimestamp: (_) => _.getTime() / 1_000,
    StartTimestamp: (_) => _.getTime() / 1_000,
  });
};

// se_FormatConfig omitted.

// se_FragmentNumberList omitted.

/**
 * serializeAws_restJson1FragmentSelector
 */
const se_FragmentSelector = (input: FragmentSelector, context: __SerdeContext): any => {
  return take(input, {
    FragmentSelectorType: [],
    TimestampRange: (_) => se_TimestampRange(_, context),
  });
};

/**
 * serializeAws_restJson1HLSFragmentSelector
 */
const se_HLSFragmentSelector = (input: HLSFragmentSelector, context: __SerdeContext): any => {
  return take(input, {
    FragmentSelectorType: [],
    TimestampRange: (_) => se_HLSTimestampRange(_, context),
  });
};

/**
 * serializeAws_restJson1HLSTimestampRange
 */
const se_HLSTimestampRange = (input: HLSTimestampRange, context: __SerdeContext): any => {
  return take(input, {
    EndTimestamp: (_) => _.getTime() / 1_000,
    StartTimestamp: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1TimestampRange
 */
const se_TimestampRange = (input: TimestampRange, context: __SerdeContext): any => {
  return take(input, {
    EndTimestamp: (_) => _.getTime() / 1_000,
    StartTimestamp: (_) => _.getTime() / 1_000,
  });
};

/**
 * deserializeAws_restJson1Fragment
 */
const de_Fragment = (output: any, context: __SerdeContext): Fragment => {
  return take(output, {
    FragmentLengthInMilliseconds: __expectLong,
    FragmentNumber: __expectString,
    FragmentSizeInBytes: __expectLong,
    ProducerTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ServerTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1FragmentList
 */
const de_FragmentList = (output: any, context: __SerdeContext): Fragment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Fragment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Image
 */
const de_Image = (output: any, context: __SerdeContext): Image => {
  return take(output, {
    Error: __expectString,
    ImageContent: __expectString,
    TimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1Images
 */
const de_Images = (output: any, context: __SerdeContext): Image[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Image(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _CT = "ContentType";
const _ct = "content-type";
