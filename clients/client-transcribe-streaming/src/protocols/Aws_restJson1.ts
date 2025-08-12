// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseBoolean as __parseBoolean,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  Message as __Message,
  MessageHeaders as __MessageHeaders,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  GetMedicalScribeStreamCommandInput,
  GetMedicalScribeStreamCommandOutput,
} from "../commands/GetMedicalScribeStreamCommand";
import {
  StartCallAnalyticsStreamTranscriptionCommandInput,
  StartCallAnalyticsStreamTranscriptionCommandOutput,
} from "../commands/StartCallAnalyticsStreamTranscriptionCommand";
import {
  StartMedicalScribeStreamCommandInput,
  StartMedicalScribeStreamCommandOutput,
} from "../commands/StartMedicalScribeStreamCommand";
import {
  StartMedicalStreamTranscriptionCommandInput,
  StartMedicalStreamTranscriptionCommandOutput,
} from "../commands/StartMedicalStreamTranscriptionCommand";
import {
  StartStreamTranscriptionCommandInput,
  StartStreamTranscriptionCommandOutput,
} from "../commands/StartStreamTranscriptionCommand";
import {
  Alternative,
  AudioEvent,
  AudioStream,
  BadRequestException,
  CallAnalyticsEntity,
  CallAnalyticsItem,
  CallAnalyticsTranscriptResultStream,
  CategoryEvent,
  ChannelDefinition,
  ClinicalNoteGenerationSettings,
  ConfigurationEvent,
  ConflictException,
  Entity,
  InternalFailureException,
  Item,
  LanguageWithScore,
  LimitExceededException,
  MedicalAlternative,
  MedicalEntity,
  MedicalItem,
  MedicalResult,
  MedicalScribeAudioEvent,
  MedicalScribeChannelDefinition,
  MedicalScribeConfigurationEvent,
  MedicalScribeContext,
  MedicalScribeEncryptionSettings,
  MedicalScribeInputStream,
  MedicalScribePatientContext,
  MedicalScribePostStreamAnalyticsSettings,
  MedicalScribeResultStream,
  MedicalScribeSessionControlEvent,
  MedicalScribeStreamDetails,
  MedicalScribeTranscriptEvent,
  MedicalScribeTranscriptItem,
  MedicalScribeTranscriptSegment,
  MedicalTranscript,
  MedicalTranscriptEvent,
  MedicalTranscriptResultStream,
  PostCallAnalyticsSettings,
  ResourceNotFoundException,
  Result,
  ServiceUnavailableException,
  Transcript,
  TranscriptEvent,
  TranscriptResultStream,
  UtteranceEvent,
} from "../models/models_0";
import { TranscribeStreamingServiceException as __BaseException } from "../models/TranscribeStreamingServiceException";

/**
 * serializeAws_restJson1GetMedicalScribeStreamCommand
 */
export const se_GetMedicalScribeStreamCommand = async (
  input: GetMedicalScribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/medical-scribe-stream/{SessionId}");
  b.p("SessionId", () => input.SessionId!, "{SessionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartCallAnalyticsStreamTranscriptionCommand
 */
export const se_StartCallAnalyticsStreamTranscriptionCommand = async (
  input: StartCallAnalyticsStreamTranscriptionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xatlc]: input[_LC]!,
    [_xatsr]: [() => isSerializableHeaderValue(input[_MSRH]), () => input[_MSRH]!.toString()],
    [_xatme]: input[_ME]!,
    [_xatvn]: input[_VN]!,
    [_xatsi]: input[_SI]!,
    [_xatvfn]: input[_VFN]!,
    [_xatvfm]: input[_VFM]!,
    [_xatlmn]: input[_LMN]!,
    [_xateprs]: [() => isSerializableHeaderValue(input[_EPRS]), () => input[_EPRS]!.toString()],
    [_xatprs]: input[_PRS]!,
    [_xatcit]: input[_CIT]!,
    [_xatcrt]: input[_CRT]!,
    [_xatpet]: input[_PET]!,
  });
  b.bp("/call-analytics-stream-transcription");
  let body: any;
  if (input.AudioStream !== undefined) {
    body = se_AudioStream(input.AudioStream, context);
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartMedicalScribeStreamCommand
 */
export const se_StartMedicalScribeStreamCommand = async (
  input: StartMedicalScribeStreamCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xatsi]: input[_SI]!,
    [_xatlc]: input[_LC]!,
    [_xatsr]: [() => isSerializableHeaderValue(input[_MSRH]), () => input[_MSRH]!.toString()],
    [_xatme]: input[_ME]!,
  });
  b.bp("/medical-scribe-stream");
  let body: any;
  if (input.InputStream !== undefined) {
    body = se_MedicalScribeInputStream(input.InputStream, context);
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartMedicalStreamTranscriptionCommand
 */
export const se_StartMedicalStreamTranscriptionCommand = async (
  input: StartMedicalStreamTranscriptionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xatlc]: input[_LC]!,
    [_xatsr]: [() => isSerializableHeaderValue(input[_MSRH]), () => input[_MSRH]!.toString()],
    [_xatme]: input[_ME]!,
    [_xatvn]: input[_VN]!,
    [_xats]: input[_S]!,
    [_xatt]: input[_T]!,
    [_xatssl]: [() => isSerializableHeaderValue(input[_SSL]), () => input[_SSL]!.toString()],
    [_xatsi]: input[_SI]!,
    [_xateci]: [() => isSerializableHeaderValue(input[_ECI]), () => input[_ECI]!.toString()],
    [_xatnoc]: [() => isSerializableHeaderValue(input[_NOC]), () => input[_NOC]!.toString()],
    [_xatcit]: input[_CIT]!,
  });
  b.bp("/medical-stream-transcription");
  let body: any;
  if (input.AudioStream !== undefined) {
    body = se_AudioStream(input.AudioStream, context);
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartStreamTranscriptionCommand
 */
export const se_StartStreamTranscriptionCommand = async (
  input: StartStreamTranscriptionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_xatlc]: input[_LC]!,
    [_xatsr]: [() => isSerializableHeaderValue(input[_MSRH]), () => input[_MSRH]!.toString()],
    [_xatme]: input[_ME]!,
    [_xatvn]: input[_VN]!,
    [_xatsi]: input[_SI]!,
    [_xatvfn]: input[_VFN]!,
    [_xatvfm]: input[_VFM]!,
    [_xatssl]: [() => isSerializableHeaderValue(input[_SSL]), () => input[_SSL]!.toString()],
    [_xateci]: [() => isSerializableHeaderValue(input[_ECI]), () => input[_ECI]!.toString()],
    [_xatnoc]: [() => isSerializableHeaderValue(input[_NOC]), () => input[_NOC]!.toString()],
    [_xateprs]: [() => isSerializableHeaderValue(input[_EPRS]), () => input[_EPRS]!.toString()],
    [_xatprs]: input[_PRS]!,
    [_xatcit]: input[_CIT]!,
    [_xatcrt]: input[_CRT]!,
    [_xatpet]: input[_PET]!,
    [_xatlmn]: input[_LMN]!,
    [_xatil]: [() => isSerializableHeaderValue(input[_IL]), () => input[_IL]!.toString()],
    [_xatlo]: input[_LO]!,
    [_xatpl]: input[_PL]!,
    [_xatiml]: [() => isSerializableHeaderValue(input[_IML]), () => input[_IML]!.toString()],
    [_xatvn_]: input[_VNo]!,
    [_xatvfn_]: input[_VFNo]!,
  });
  b.bp("/stream-transcription");
  let body: any;
  if (input.AudioStream !== undefined) {
    body = se_AudioStream(input.AudioStream, context);
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1GetMedicalScribeStreamCommand
 */
export const de_GetMedicalScribeStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalScribeStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MedicalScribeStreamDetails: (_) => de_MedicalScribeStreamDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartCallAnalyticsStreamTranscriptionCommand
 */
export const de_StartCallAnalyticsStreamTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartCallAnalyticsStreamTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RI]: [, output.headers[_xari]],
    [_LC]: [, output.headers[_xatlc]],
    [_MSRH]: [() => void 0 !== output.headers[_xatsr], () => __strictParseInt32(output.headers[_xatsr])],
    [_ME]: [, output.headers[_xatme]],
    [_VN]: [, output.headers[_xatvn]],
    [_SI]: [, output.headers[_xatsi]],
    [_VFN]: [, output.headers[_xatvfn]],
    [_VFM]: [, output.headers[_xatvfm]],
    [_LMN]: [, output.headers[_xatlmn]],
    [_EPRS]: [() => void 0 !== output.headers[_xateprs], () => __parseBoolean(output.headers[_xateprs])],
    [_PRS]: [, output.headers[_xatprs]],
    [_CIT]: [, output.headers[_xatcit]],
    [_CRT]: [, output.headers[_xatcrt]],
    [_PET]: [, output.headers[_xatpet]],
  });
  const data: any = output.body;
  contents.CallAnalyticsTranscriptResultStream = de_CallAnalyticsTranscriptResultStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartMedicalScribeStreamCommand
 */
export const de_StartMedicalScribeStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartMedicalScribeStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_SI]: [, output.headers[_xatsi]],
    [_RI]: [, output.headers[_xari]],
    [_LC]: [, output.headers[_xatlc]],
    [_MSRH]: [() => void 0 !== output.headers[_xatsr], () => __strictParseInt32(output.headers[_xatsr])],
    [_ME]: [, output.headers[_xatme]],
  });
  const data: any = output.body;
  contents.ResultStream = de_MedicalScribeResultStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartMedicalStreamTranscriptionCommand
 */
export const de_StartMedicalStreamTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartMedicalStreamTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RI]: [, output.headers[_xari]],
    [_LC]: [, output.headers[_xatlc]],
    [_MSRH]: [() => void 0 !== output.headers[_xatsr], () => __strictParseInt32(output.headers[_xatsr])],
    [_ME]: [, output.headers[_xatme]],
    [_VN]: [, output.headers[_xatvn]],
    [_S]: [, output.headers[_xats]],
    [_T]: [, output.headers[_xatt]],
    [_SSL]: [() => void 0 !== output.headers[_xatssl], () => __parseBoolean(output.headers[_xatssl])],
    [_SI]: [, output.headers[_xatsi]],
    [_ECI]: [() => void 0 !== output.headers[_xateci], () => __parseBoolean(output.headers[_xateci])],
    [_NOC]: [() => void 0 !== output.headers[_xatnoc], () => __strictParseInt32(output.headers[_xatnoc])],
    [_CIT]: [, output.headers[_xatcit]],
  });
  const data: any = output.body;
  contents.TranscriptResultStream = de_MedicalTranscriptResultStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartStreamTranscriptionCommand
 */
export const de_StartStreamTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartStreamTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_RI]: [, output.headers[_xari]],
    [_LC]: [, output.headers[_xatlc]],
    [_MSRH]: [() => void 0 !== output.headers[_xatsr], () => __strictParseInt32(output.headers[_xatsr])],
    [_ME]: [, output.headers[_xatme]],
    [_VN]: [, output.headers[_xatvn]],
    [_SI]: [, output.headers[_xatsi]],
    [_VFN]: [, output.headers[_xatvfn]],
    [_VFM]: [, output.headers[_xatvfm]],
    [_SSL]: [() => void 0 !== output.headers[_xatssl], () => __parseBoolean(output.headers[_xatssl])],
    [_ECI]: [() => void 0 !== output.headers[_xateci], () => __parseBoolean(output.headers[_xateci])],
    [_NOC]: [() => void 0 !== output.headers[_xatnoc], () => __strictParseInt32(output.headers[_xatnoc])],
    [_EPRS]: [() => void 0 !== output.headers[_xateprs], () => __parseBoolean(output.headers[_xateprs])],
    [_PRS]: [, output.headers[_xatprs]],
    [_CIT]: [, output.headers[_xatcit]],
    [_CRT]: [, output.headers[_xatcrt]],
    [_PET]: [, output.headers[_xatpet]],
    [_LMN]: [, output.headers[_xatlmn]],
    [_IL]: [() => void 0 !== output.headers[_xatil], () => __parseBoolean(output.headers[_xatil])],
    [_LO]: [, output.headers[_xatlo]],
    [_PL]: [, output.headers[_xatpl]],
    [_IML]: [() => void 0 !== output.headers[_xatiml], () => __parseBoolean(output.headers[_xatiml])],
    [_VNo]: [, output.headers[_xatvn_]],
    [_VFNo]: [, output.headers[_xatvfn_]],
  });
  const data: any = output.body;
  contents.TranscriptResultStream = de_TranscriptResultStream(data, context);
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
    case "BadRequestException":
    case "com.amazonaws.transcribestreaming#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribestreaming#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribestreaming#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transcribestreaming#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribestreaming#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transcribestreaming#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
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
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AudioStream
 */
const se_AudioStream = (input: any, context: __SerdeContext & __EventStreamSerdeContext): any => {
  const eventMarshallingVisitor = (event: any): __Message =>
    AudioStream.visit(event, {
      AudioEvent: (value) => se_AudioEvent_event(value, context),
      ConfigurationEvent: (value) => se_ConfigurationEvent_event(value, context),
      _: (value) => value as any,
    });
  return context.eventStreamMarshaller.serialize(input, eventMarshallingVisitor);
};
/**
 * serializeAws_restJson1MedicalScribeInputStream
 */
const se_MedicalScribeInputStream = (input: any, context: __SerdeContext & __EventStreamSerdeContext): any => {
  const eventMarshallingVisitor = (event: any): __Message =>
    MedicalScribeInputStream.visit(event, {
      AudioEvent: (value) => se_MedicalScribeAudioEvent_event(value, context),
      SessionControlEvent: (value) => se_MedicalScribeSessionControlEvent_event(value, context),
      ConfigurationEvent: (value) => se_MedicalScribeConfigurationEvent_event(value, context),
      _: (value) => value as any,
    });
  return context.eventStreamMarshaller.serialize(input, eventMarshallingVisitor);
};
const se_AudioEvent_event = (input: AudioEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "AudioEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/octet-stream" },
  };
  let body = new Uint8Array();
  if (input.AudioChunk != null) {
    body = input.AudioChunk;
  }
  return { headers, body };
};
const se_ConfigurationEvent_event = (input: ConfigurationEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "ConfigurationEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = _json(input);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_MedicalScribeAudioEvent_event = (input: MedicalScribeAudioEvent, context: __SerdeContext): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "AudioEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/octet-stream" },
  };
  let body = new Uint8Array();
  if (input.AudioChunk != null) {
    body = input.AudioChunk;
  }
  return { headers, body };
};
const se_MedicalScribeConfigurationEvent_event = (
  input: MedicalScribeConfigurationEvent,
  context: __SerdeContext
): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "ConfigurationEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = _json(input);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
const se_MedicalScribeSessionControlEvent_event = (
  input: MedicalScribeSessionControlEvent,
  context: __SerdeContext
): __Message => {
  const headers: __MessageHeaders = {
    ":event-type": { type: "string", value: "SessionControlEvent" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" },
  };
  let body = new Uint8Array();
  body = _json(input);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
};
/**
 * deserializeAws_restJson1CallAnalyticsTranscriptResultStream
 */
const de_CallAnalyticsTranscriptResultStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<CallAnalyticsTranscriptResultStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["UtteranceEvent"] != null) {
      return {
        UtteranceEvent: await de_UtteranceEvent_event(event["UtteranceEvent"], context),
      };
    }
    if (event["CategoryEvent"] != null) {
      return {
        CategoryEvent: await de_CategoryEvent_event(event["CategoryEvent"], context),
      };
    }
    if (event["BadRequestException"] != null) {
      return {
        BadRequestException: await de_BadRequestException_event(event["BadRequestException"], context),
      };
    }
    if (event["LimitExceededException"] != null) {
      return {
        LimitExceededException: await de_LimitExceededException_event(event["LimitExceededException"], context),
      };
    }
    if (event["InternalFailureException"] != null) {
      return {
        InternalFailureException: await de_InternalFailureException_event(event["InternalFailureException"], context),
      };
    }
    if (event["ConflictException"] != null) {
      return {
        ConflictException: await de_ConflictException_event(event["ConflictException"], context),
      };
    }
    if (event["ServiceUnavailableException"] != null) {
      return {
        ServiceUnavailableException: await de_ServiceUnavailableException_event(
          event["ServiceUnavailableException"],
          context
        ),
      };
    }
    return { $unknown: event as any };
  });
};
/**
 * deserializeAws_restJson1MedicalScribeResultStream
 */
const de_MedicalScribeResultStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<MedicalScribeResultStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["TranscriptEvent"] != null) {
      return {
        TranscriptEvent: await de_MedicalScribeTranscriptEvent_event(event["TranscriptEvent"], context),
      };
    }
    if (event["BadRequestException"] != null) {
      return {
        BadRequestException: await de_BadRequestException_event(event["BadRequestException"], context),
      };
    }
    if (event["LimitExceededException"] != null) {
      return {
        LimitExceededException: await de_LimitExceededException_event(event["LimitExceededException"], context),
      };
    }
    if (event["InternalFailureException"] != null) {
      return {
        InternalFailureException: await de_InternalFailureException_event(event["InternalFailureException"], context),
      };
    }
    if (event["ConflictException"] != null) {
      return {
        ConflictException: await de_ConflictException_event(event["ConflictException"], context),
      };
    }
    if (event["ServiceUnavailableException"] != null) {
      return {
        ServiceUnavailableException: await de_ServiceUnavailableException_event(
          event["ServiceUnavailableException"],
          context
        ),
      };
    }
    return { $unknown: event as any };
  });
};
/**
 * deserializeAws_restJson1MedicalTranscriptResultStream
 */
const de_MedicalTranscriptResultStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<MedicalTranscriptResultStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["TranscriptEvent"] != null) {
      return {
        TranscriptEvent: await de_MedicalTranscriptEvent_event(event["TranscriptEvent"], context),
      };
    }
    if (event["BadRequestException"] != null) {
      return {
        BadRequestException: await de_BadRequestException_event(event["BadRequestException"], context),
      };
    }
    if (event["LimitExceededException"] != null) {
      return {
        LimitExceededException: await de_LimitExceededException_event(event["LimitExceededException"], context),
      };
    }
    if (event["InternalFailureException"] != null) {
      return {
        InternalFailureException: await de_InternalFailureException_event(event["InternalFailureException"], context),
      };
    }
    if (event["ConflictException"] != null) {
      return {
        ConflictException: await de_ConflictException_event(event["ConflictException"], context),
      };
    }
    if (event["ServiceUnavailableException"] != null) {
      return {
        ServiceUnavailableException: await de_ServiceUnavailableException_event(
          event["ServiceUnavailableException"],
          context
        ),
      };
    }
    return { $unknown: event as any };
  });
};
/**
 * deserializeAws_restJson1TranscriptResultStream
 */
const de_TranscriptResultStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<TranscriptResultStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["TranscriptEvent"] != null) {
      return {
        TranscriptEvent: await de_TranscriptEvent_event(event["TranscriptEvent"], context),
      };
    }
    if (event["BadRequestException"] != null) {
      return {
        BadRequestException: await de_BadRequestException_event(event["BadRequestException"], context),
      };
    }
    if (event["LimitExceededException"] != null) {
      return {
        LimitExceededException: await de_LimitExceededException_event(event["LimitExceededException"], context),
      };
    }
    if (event["InternalFailureException"] != null) {
      return {
        InternalFailureException: await de_InternalFailureException_event(event["InternalFailureException"], context),
      };
    }
    if (event["ConflictException"] != null) {
      return {
        ConflictException: await de_ConflictException_event(event["ConflictException"], context),
      };
    }
    if (event["ServiceUnavailableException"] != null) {
      return {
        ServiceUnavailableException: await de_ServiceUnavailableException_event(
          event["ServiceUnavailableException"],
          context
        ),
      };
    }
    return { $unknown: event as any };
  });
};
const de_BadRequestException_event = async (output: any, context: __SerdeContext): Promise<BadRequestException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_BadRequestExceptionRes(parsedOutput, context);
};
const de_CategoryEvent_event = async (output: any, context: __SerdeContext): Promise<CategoryEvent> => {
  const contents: CategoryEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_ConflictException_event = async (output: any, context: __SerdeContext): Promise<ConflictException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ConflictExceptionRes(parsedOutput, context);
};
const de_InternalFailureException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_InternalFailureExceptionRes(parsedOutput, context);
};
const de_LimitExceededException_event = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_LimitExceededExceptionRes(parsedOutput, context);
};
const de_MedicalScribeTranscriptEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<MedicalScribeTranscriptEvent> => {
  const contents: MedicalScribeTranscriptEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_MedicalScribeTranscriptEvent(data, context));
  return contents;
};
const de_MedicalTranscriptEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<MedicalTranscriptEvent> => {
  const contents: MedicalTranscriptEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_MedicalTranscriptEvent(data, context));
  return contents;
};
const de_ServiceUnavailableException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ServiceUnavailableExceptionRes(parsedOutput, context);
};
const de_TranscriptEvent_event = async (output: any, context: __SerdeContext): Promise<TranscriptEvent> => {
  const contents: TranscriptEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_TranscriptEvent(data, context));
  return contents;
};
const de_UtteranceEvent_event = async (output: any, context: __SerdeContext): Promise<UtteranceEvent> => {
  const contents: UtteranceEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_UtteranceEvent(data, context));
  return contents;
};
// se_ChannelDefinition omitted.

// se_ChannelDefinitions omitted.

// se_ClinicalNoteGenerationSettings omitted.

// se_ConfigurationEvent omitted.

// se_KMSEncryptionContextMap omitted.

// se_MedicalScribeChannelDefinition omitted.

// se_MedicalScribeChannelDefinitions omitted.

// se_MedicalScribeConfigurationEvent omitted.

// se_MedicalScribeContext omitted.

// se_MedicalScribeEncryptionSettings omitted.

// se_MedicalScribePatientContext omitted.

// se_MedicalScribePostStreamAnalyticsSettings omitted.

// se_MedicalScribeSessionControlEvent omitted.

// se_PostCallAnalyticsSettings omitted.

/**
 * deserializeAws_restJson1Alternative
 */
const de_Alternative = (output: any, context: __SerdeContext): Alternative => {
  return take(output, {
    Entities: (_: any) => de_EntityList(_, context),
    Items: (_: any) => de_ItemList(_, context),
    Transcript: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AlternativeList
 */
const de_AlternativeList = (output: any, context: __SerdeContext): Alternative[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Alternative(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CallAnalyticsEntity
 */
const de_CallAnalyticsEntity = (output: any, context: __SerdeContext): CallAnalyticsEntity => {
  return take(output, {
    BeginOffsetMillis: __expectLong,
    Category: __expectString,
    Confidence: __limitedParseDouble,
    Content: __expectString,
    EndOffsetMillis: __expectLong,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CallAnalyticsEntityList
 */
const de_CallAnalyticsEntityList = (output: any, context: __SerdeContext): CallAnalyticsEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CallAnalyticsEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CallAnalyticsItem
 */
const de_CallAnalyticsItem = (output: any, context: __SerdeContext): CallAnalyticsItem => {
  return take(output, {
    BeginOffsetMillis: __expectLong,
    Confidence: __limitedParseDouble,
    Content: __expectString,
    EndOffsetMillis: __expectLong,
    Stable: __expectBoolean,
    Type: __expectString,
    VocabularyFilterMatch: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1CallAnalyticsItemList
 */
const de_CallAnalyticsItemList = (output: any, context: __SerdeContext): CallAnalyticsItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CallAnalyticsItem(entry, context);
    });
  return retVal;
};

// de_CategoryEvent omitted.

// de_CharacterOffsets omitted.

// de_ClinicalNoteGenerationResult omitted.

// de_ClinicalNoteGenerationSettings omitted.

/**
 * deserializeAws_restJson1Entity
 */
const de_Entity = (output: any, context: __SerdeContext): Entity => {
  return take(output, {
    Category: __expectString,
    Confidence: __limitedParseDouble,
    Content: __expectString,
    EndTime: __limitedParseDouble,
    StartTime: __limitedParseDouble,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EntityList
 */
const de_EntityList = (output: any, context: __SerdeContext): Entity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Entity(entry, context);
    });
  return retVal;
};

// de_IssueDetected omitted.

// de_IssuesDetected omitted.

/**
 * deserializeAws_restJson1Item
 */
const de_Item = (output: any, context: __SerdeContext): Item => {
  return take(output, {
    Confidence: __limitedParseDouble,
    Content: __expectString,
    EndTime: __limitedParseDouble,
    Speaker: __expectString,
    Stable: __expectBoolean,
    StartTime: __limitedParseDouble,
    Type: __expectString,
    VocabularyFilterMatch: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1ItemList
 */
const de_ItemList = (output: any, context: __SerdeContext): Item[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Item(entry, context);
    });
  return retVal;
};

// de_KMSEncryptionContextMap omitted.

/**
 * deserializeAws_restJson1LanguageIdentification
 */
const de_LanguageIdentification = (output: any, context: __SerdeContext): LanguageWithScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LanguageWithScore(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LanguageWithScore
 */
const de_LanguageWithScore = (output: any, context: __SerdeContext): LanguageWithScore => {
  return take(output, {
    LanguageCode: __expectString,
    Score: __limitedParseDouble,
  }) as any;
};

// de_MatchedCategoryDetails omitted.

/**
 * deserializeAws_restJson1MedicalAlternative
 */
const de_MedicalAlternative = (output: any, context: __SerdeContext): MedicalAlternative => {
  return take(output, {
    Entities: (_: any) => de_MedicalEntityList(_, context),
    Items: (_: any) => de_MedicalItemList(_, context),
    Transcript: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MedicalAlternativeList
 */
const de_MedicalAlternativeList = (output: any, context: __SerdeContext): MedicalAlternative[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MedicalAlternative(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MedicalEntity
 */
const de_MedicalEntity = (output: any, context: __SerdeContext): MedicalEntity => {
  return take(output, {
    Category: __expectString,
    Confidence: __limitedParseDouble,
    Content: __expectString,
    EndTime: __limitedParseDouble,
    StartTime: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1MedicalEntityList
 */
const de_MedicalEntityList = (output: any, context: __SerdeContext): MedicalEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MedicalEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MedicalItem
 */
const de_MedicalItem = (output: any, context: __SerdeContext): MedicalItem => {
  return take(output, {
    Confidence: __limitedParseDouble,
    Content: __expectString,
    EndTime: __limitedParseDouble,
    Speaker: __expectString,
    StartTime: __limitedParseDouble,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MedicalItemList
 */
const de_MedicalItemList = (output: any, context: __SerdeContext): MedicalItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MedicalItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MedicalResult
 */
const de_MedicalResult = (output: any, context: __SerdeContext): MedicalResult => {
  return take(output, {
    Alternatives: (_: any) => de_MedicalAlternativeList(_, context),
    ChannelId: __expectString,
    EndTime: __limitedParseDouble,
    IsPartial: __expectBoolean,
    ResultId: __expectString,
    StartTime: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1MedicalResultList
 */
const de_MedicalResultList = (output: any, context: __SerdeContext): MedicalResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MedicalResult(entry, context);
    });
  return retVal;
};

// de_MedicalScribeChannelDefinition omitted.

// de_MedicalScribeChannelDefinitions omitted.

// de_MedicalScribeEncryptionSettings omitted.

// de_MedicalScribePostStreamAnalyticsResult omitted.

// de_MedicalScribePostStreamAnalyticsSettings omitted.

/**
 * deserializeAws_restJson1MedicalScribeStreamDetails
 */
const de_MedicalScribeStreamDetails = (output: any, context: __SerdeContext): MedicalScribeStreamDetails => {
  return take(output, {
    ChannelDefinitions: _json,
    EncryptionSettings: _json,
    LanguageCode: __expectString,
    MediaEncoding: __expectString,
    MediaSampleRateHertz: __expectInt32,
    MedicalScribeContextProvided: __expectBoolean,
    PostStreamAnalyticsResult: _json,
    PostStreamAnalyticsSettings: _json,
    ResourceAccessRoleArn: __expectString,
    SessionId: __expectString,
    StreamCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StreamEndedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StreamStatus: __expectString,
    VocabularyFilterMethod: __expectString,
    VocabularyFilterName: __expectString,
    VocabularyName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MedicalScribeTranscriptEvent
 */
const de_MedicalScribeTranscriptEvent = (output: any, context: __SerdeContext): MedicalScribeTranscriptEvent => {
  return take(output, {
    TranscriptSegment: (_: any) => de_MedicalScribeTranscriptSegment(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1MedicalScribeTranscriptItem
 */
const de_MedicalScribeTranscriptItem = (output: any, context: __SerdeContext): MedicalScribeTranscriptItem => {
  return take(output, {
    BeginAudioTime: __limitedParseDouble,
    Confidence: __limitedParseDouble,
    Content: __expectString,
    EndAudioTime: __limitedParseDouble,
    Type: __expectString,
    VocabularyFilterMatch: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1MedicalScribeTranscriptItemList
 */
const de_MedicalScribeTranscriptItemList = (output: any, context: __SerdeContext): MedicalScribeTranscriptItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MedicalScribeTranscriptItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MedicalScribeTranscriptSegment
 */
const de_MedicalScribeTranscriptSegment = (output: any, context: __SerdeContext): MedicalScribeTranscriptSegment => {
  return take(output, {
    BeginAudioTime: __limitedParseDouble,
    ChannelId: __expectString,
    Content: __expectString,
    EndAudioTime: __limitedParseDouble,
    IsPartial: __expectBoolean,
    Items: (_: any) => de_MedicalScribeTranscriptItemList(_, context),
    SegmentId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MedicalTranscript
 */
const de_MedicalTranscript = (output: any, context: __SerdeContext): MedicalTranscript => {
  return take(output, {
    Results: (_: any) => de_MedicalResultList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1MedicalTranscriptEvent
 */
const de_MedicalTranscriptEvent = (output: any, context: __SerdeContext): MedicalTranscriptEvent => {
  return take(output, {
    Transcript: (_: any) => de_MedicalTranscript(_, context),
  }) as any;
};

// de_PointsOfInterest omitted.

/**
 * deserializeAws_restJson1Result
 */
const de_Result = (output: any, context: __SerdeContext): Result => {
  return take(output, {
    Alternatives: (_: any) => de_AlternativeList(_, context),
    ChannelId: __expectString,
    EndTime: __limitedParseDouble,
    IsPartial: __expectBoolean,
    LanguageCode: __expectString,
    LanguageIdentification: (_: any) => de_LanguageIdentification(_, context),
    ResultId: __expectString,
    StartTime: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ResultList
 */
const de_ResultList = (output: any, context: __SerdeContext): Result[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Result(entry, context);
    });
  return retVal;
};

// de_StringList omitted.

// de_TimestampRange omitted.

// de_TimestampRanges omitted.

/**
 * deserializeAws_restJson1Transcript
 */
const de_Transcript = (output: any, context: __SerdeContext): Transcript => {
  return take(output, {
    Results: (_: any) => de_ResultList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TranscriptEvent
 */
const de_TranscriptEvent = (output: any, context: __SerdeContext): TranscriptEvent => {
  return take(output, {
    Transcript: (_: any) => de_Transcript(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1UtteranceEvent
 */
const de_UtteranceEvent = (output: any, context: __SerdeContext): UtteranceEvent => {
  return take(output, {
    BeginOffsetMillis: __expectLong,
    EndOffsetMillis: __expectLong,
    Entities: (_: any) => de_CallAnalyticsEntityList(_, context),
    IsPartial: __expectBoolean,
    IssuesDetected: _json,
    Items: (_: any) => de_CallAnalyticsItemList(_, context),
    ParticipantRole: __expectString,
    Sentiment: __expectString,
    Transcript: __expectString,
    UtteranceId: __expectString,
  }) as any;
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

const _CIT = "ContentIdentificationType";
const _CRT = "ContentRedactionType";
const _ECI = "EnableChannelIdentification";
const _EPRS = "EnablePartialResultsStabilization";
const _IL = "IdentifyLanguage";
const _IML = "IdentifyMultipleLanguages";
const _LC = "LanguageCode";
const _LMN = "LanguageModelName";
const _LO = "LanguageOptions";
const _ME = "MediaEncoding";
const _MSRH = "MediaSampleRateHertz";
const _NOC = "NumberOfChannels";
const _PET = "PiiEntityTypes";
const _PL = "PreferredLanguage";
const _PRS = "PartialResultsStability";
const _RI = "RequestId";
const _S = "Specialty";
const _SI = "SessionId";
const _SSL = "ShowSpeakerLabel";
const _T = "Type";
const _VFM = "VocabularyFilterMethod";
const _VFN = "VocabularyFilterName";
const _VFNo = "VocabularyFilterNames";
const _VN = "VocabularyName";
const _VNo = "VocabularyNames";
const _xari = "x-amzn-request-id";
const _xatcit = "x-amzn-transcribe-content-identification-type";
const _xatcrt = "x-amzn-transcribe-content-redaction-type";
const _xateci = "x-amzn-transcribe-enable-channel-identification";
const _xateprs = "x-amzn-transcribe-enable-partial-results-stabilization";
const _xatil = "x-amzn-transcribe-identify-language";
const _xatiml = "x-amzn-transcribe-identify-multiple-languages";
const _xatlc = "x-amzn-transcribe-language-code";
const _xatlmn = "x-amzn-transcribe-language-model-name";
const _xatlo = "x-amzn-transcribe-language-options";
const _xatme = "x-amzn-transcribe-media-encoding";
const _xatnoc = "x-amzn-transcribe-number-of-channels";
const _xatpet = "x-amzn-transcribe-pii-entity-types";
const _xatpl = "x-amzn-transcribe-preferred-language";
const _xatprs = "x-amzn-transcribe-partial-results-stability";
const _xats = "x-amzn-transcribe-specialty";
const _xatsi = "x-amzn-transcribe-session-id";
const _xatsr = "x-amzn-transcribe-sample-rate";
const _xatssl = "x-amzn-transcribe-show-speaker-label";
const _xatt = "x-amzn-transcribe-type";
const _xatvfm = "x-amzn-transcribe-vocabulary-filter-method";
const _xatvfn = "x-amzn-transcribe-vocabulary-filter-name";
const _xatvfn_ = "x-amzn-transcribe-vocabulary-filter-names";
const _xatvn = "x-amzn-transcribe-vocabulary-name";
const _xatvn_ = "x-amzn-transcribe-vocabulary-names";
