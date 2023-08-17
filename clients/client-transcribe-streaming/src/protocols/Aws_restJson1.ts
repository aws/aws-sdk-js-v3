// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseBoolean as __parseBoolean,
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
  StartCallAnalyticsStreamTranscriptionCommandInput,
  StartCallAnalyticsStreamTranscriptionCommandOutput,
} from "../commands/StartCallAnalyticsStreamTranscriptionCommand";
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
  MedicalTranscript,
  MedicalTranscriptEvent,
  MedicalTranscriptResultStream,
  PostCallAnalyticsSettings,
  Result,
  ServiceUnavailableException,
  Transcript,
  TranscriptEvent,
  TranscriptResultStream,
  UtteranceEvent,
} from "../models/models_0";
import { TranscribeStreamingServiceException as __BaseException } from "../models/TranscribeStreamingServiceException";

/**
 * serializeAws_restJson1StartCallAnalyticsStreamTranscriptionCommand
 */
export const se_StartCallAnalyticsStreamTranscriptionCommand = async (
  input: StartCallAnalyticsStreamTranscriptionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-transcribe-language-code": input.LanguageCode!,
    "x-amzn-transcribe-sample-rate": [
      () => isSerializableHeaderValue(input.MediaSampleRateHertz),
      () => input.MediaSampleRateHertz!.toString(),
    ],
    "x-amzn-transcribe-media-encoding": input.MediaEncoding!,
    "x-amzn-transcribe-vocabulary-name": input.VocabularyName!,
    "x-amzn-transcribe-session-id": input.SessionId!,
    "x-amzn-transcribe-vocabulary-filter-name": input.VocabularyFilterName!,
    "x-amzn-transcribe-vocabulary-filter-method": input.VocabularyFilterMethod!,
    "x-amzn-transcribe-language-model-name": input.LanguageModelName!,
    "x-amzn-transcribe-enable-partial-results-stabilization": [
      () => isSerializableHeaderValue(input.EnablePartialResultsStabilization),
      () => input.EnablePartialResultsStabilization!.toString(),
    ],
    "x-amzn-transcribe-partial-results-stability": input.PartialResultsStability!,
    "x-amzn-transcribe-content-identification-type": input.ContentIdentificationType!,
    "x-amzn-transcribe-content-redaction-type": input.ContentRedactionType!,
    "x-amzn-transcribe-pii-entity-types": input.PiiEntityTypes!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/call-analytics-stream-transcription";
  let body: any;
  if (input.AudioStream !== undefined) {
    body = se_AudioStream(input.AudioStream, context);
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartMedicalStreamTranscriptionCommand
 */
export const se_StartMedicalStreamTranscriptionCommand = async (
  input: StartMedicalStreamTranscriptionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-transcribe-language-code": input.LanguageCode!,
    "x-amzn-transcribe-sample-rate": [
      () => isSerializableHeaderValue(input.MediaSampleRateHertz),
      () => input.MediaSampleRateHertz!.toString(),
    ],
    "x-amzn-transcribe-media-encoding": input.MediaEncoding!,
    "x-amzn-transcribe-vocabulary-name": input.VocabularyName!,
    "x-amzn-transcribe-specialty": input.Specialty!,
    "x-amzn-transcribe-type": input.Type!,
    "x-amzn-transcribe-show-speaker-label": [
      () => isSerializableHeaderValue(input.ShowSpeakerLabel),
      () => input.ShowSpeakerLabel!.toString(),
    ],
    "x-amzn-transcribe-session-id": input.SessionId!,
    "x-amzn-transcribe-enable-channel-identification": [
      () => isSerializableHeaderValue(input.EnableChannelIdentification),
      () => input.EnableChannelIdentification!.toString(),
    ],
    "x-amzn-transcribe-number-of-channels": [
      () => isSerializableHeaderValue(input.NumberOfChannels),
      () => input.NumberOfChannels!.toString(),
    ],
    "x-amzn-transcribe-content-identification-type": input.ContentIdentificationType!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/medical-stream-transcription";
  let body: any;
  if (input.AudioStream !== undefined) {
    body = se_AudioStream(input.AudioStream, context);
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartStreamTranscriptionCommand
 */
export const se_StartStreamTranscriptionCommand = async (
  input: StartStreamTranscriptionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-transcribe-language-code": input.LanguageCode!,
    "x-amzn-transcribe-sample-rate": [
      () => isSerializableHeaderValue(input.MediaSampleRateHertz),
      () => input.MediaSampleRateHertz!.toString(),
    ],
    "x-amzn-transcribe-media-encoding": input.MediaEncoding!,
    "x-amzn-transcribe-vocabulary-name": input.VocabularyName!,
    "x-amzn-transcribe-session-id": input.SessionId!,
    "x-amzn-transcribe-vocabulary-filter-name": input.VocabularyFilterName!,
    "x-amzn-transcribe-vocabulary-filter-method": input.VocabularyFilterMethod!,
    "x-amzn-transcribe-show-speaker-label": [
      () => isSerializableHeaderValue(input.ShowSpeakerLabel),
      () => input.ShowSpeakerLabel!.toString(),
    ],
    "x-amzn-transcribe-enable-channel-identification": [
      () => isSerializableHeaderValue(input.EnableChannelIdentification),
      () => input.EnableChannelIdentification!.toString(),
    ],
    "x-amzn-transcribe-number-of-channels": [
      () => isSerializableHeaderValue(input.NumberOfChannels),
      () => input.NumberOfChannels!.toString(),
    ],
    "x-amzn-transcribe-enable-partial-results-stabilization": [
      () => isSerializableHeaderValue(input.EnablePartialResultsStabilization),
      () => input.EnablePartialResultsStabilization!.toString(),
    ],
    "x-amzn-transcribe-partial-results-stability": input.PartialResultsStability!,
    "x-amzn-transcribe-content-identification-type": input.ContentIdentificationType!,
    "x-amzn-transcribe-content-redaction-type": input.ContentRedactionType!,
    "x-amzn-transcribe-pii-entity-types": input.PiiEntityTypes!,
    "x-amzn-transcribe-language-model-name": input.LanguageModelName!,
    "x-amzn-transcribe-identify-language": [
      () => isSerializableHeaderValue(input.IdentifyLanguage),
      () => input.IdentifyLanguage!.toString(),
    ],
    "x-amzn-transcribe-language-options": input.LanguageOptions!,
    "x-amzn-transcribe-preferred-language": input.PreferredLanguage!,
    "x-amzn-transcribe-vocabulary-names": input.VocabularyNames!,
    "x-amzn-transcribe-vocabulary-filter-names": input.VocabularyFilterNames!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/stream-transcription";
  let body: any;
  if (input.AudioStream !== undefined) {
    body = se_AudioStream(input.AudioStream, context);
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1StartCallAnalyticsStreamTranscriptionCommand
 */
export const de_StartCallAnalyticsStreamTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartCallAnalyticsStreamTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartCallAnalyticsStreamTranscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestId: [, output.headers["x-amzn-request-id"]],
    LanguageCode: [, output.headers["x-amzn-transcribe-language-code"]],
    MediaSampleRateHertz: [
      () => void 0 !== output.headers["x-amzn-transcribe-sample-rate"],
      () => __strictParseInt32(output.headers["x-amzn-transcribe-sample-rate"]),
    ],
    MediaEncoding: [, output.headers["x-amzn-transcribe-media-encoding"]],
    VocabularyName: [, output.headers["x-amzn-transcribe-vocabulary-name"]],
    SessionId: [, output.headers["x-amzn-transcribe-session-id"]],
    VocabularyFilterName: [, output.headers["x-amzn-transcribe-vocabulary-filter-name"]],
    VocabularyFilterMethod: [, output.headers["x-amzn-transcribe-vocabulary-filter-method"]],
    LanguageModelName: [, output.headers["x-amzn-transcribe-language-model-name"]],
    EnablePartialResultsStabilization: [
      () => void 0 !== output.headers["x-amzn-transcribe-enable-partial-results-stabilization"],
      () => __parseBoolean(output.headers["x-amzn-transcribe-enable-partial-results-stabilization"]),
    ],
    PartialResultsStability: [, output.headers["x-amzn-transcribe-partial-results-stability"]],
    ContentIdentificationType: [, output.headers["x-amzn-transcribe-content-identification-type"]],
    ContentRedactionType: [, output.headers["x-amzn-transcribe-content-redaction-type"]],
    PiiEntityTypes: [, output.headers["x-amzn-transcribe-pii-entity-types"]],
  });
  const data: any = output.body;
  contents.CallAnalyticsTranscriptResultStream = de_CallAnalyticsTranscriptResultStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartCallAnalyticsStreamTranscriptionCommandError
 */
const de_StartCallAnalyticsStreamTranscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCallAnalyticsStreamTranscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribestreaming#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribestreaming#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribestreaming#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribestreaming#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transcribestreaming#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartMedicalStreamTranscriptionCommand
 */
export const de_StartMedicalStreamTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartMedicalStreamTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartMedicalStreamTranscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestId: [, output.headers["x-amzn-request-id"]],
    LanguageCode: [, output.headers["x-amzn-transcribe-language-code"]],
    MediaSampleRateHertz: [
      () => void 0 !== output.headers["x-amzn-transcribe-sample-rate"],
      () => __strictParseInt32(output.headers["x-amzn-transcribe-sample-rate"]),
    ],
    MediaEncoding: [, output.headers["x-amzn-transcribe-media-encoding"]],
    VocabularyName: [, output.headers["x-amzn-transcribe-vocabulary-name"]],
    Specialty: [, output.headers["x-amzn-transcribe-specialty"]],
    Type: [, output.headers["x-amzn-transcribe-type"]],
    ShowSpeakerLabel: [
      () => void 0 !== output.headers["x-amzn-transcribe-show-speaker-label"],
      () => __parseBoolean(output.headers["x-amzn-transcribe-show-speaker-label"]),
    ],
    SessionId: [, output.headers["x-amzn-transcribe-session-id"]],
    EnableChannelIdentification: [
      () => void 0 !== output.headers["x-amzn-transcribe-enable-channel-identification"],
      () => __parseBoolean(output.headers["x-amzn-transcribe-enable-channel-identification"]),
    ],
    NumberOfChannels: [
      () => void 0 !== output.headers["x-amzn-transcribe-number-of-channels"],
      () => __strictParseInt32(output.headers["x-amzn-transcribe-number-of-channels"]),
    ],
    ContentIdentificationType: [, output.headers["x-amzn-transcribe-content-identification-type"]],
  });
  const data: any = output.body;
  contents.TranscriptResultStream = de_MedicalTranscriptResultStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartMedicalStreamTranscriptionCommandError
 */
const de_StartMedicalStreamTranscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMedicalStreamTranscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribestreaming#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribestreaming#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribestreaming#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribestreaming#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transcribestreaming#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartStreamTranscriptionCommand
 */
export const de_StartStreamTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartStreamTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartStreamTranscriptionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    RequestId: [, output.headers["x-amzn-request-id"]],
    LanguageCode: [, output.headers["x-amzn-transcribe-language-code"]],
    MediaSampleRateHertz: [
      () => void 0 !== output.headers["x-amzn-transcribe-sample-rate"],
      () => __strictParseInt32(output.headers["x-amzn-transcribe-sample-rate"]),
    ],
    MediaEncoding: [, output.headers["x-amzn-transcribe-media-encoding"]],
    VocabularyName: [, output.headers["x-amzn-transcribe-vocabulary-name"]],
    SessionId: [, output.headers["x-amzn-transcribe-session-id"]],
    VocabularyFilterName: [, output.headers["x-amzn-transcribe-vocabulary-filter-name"]],
    VocabularyFilterMethod: [, output.headers["x-amzn-transcribe-vocabulary-filter-method"]],
    ShowSpeakerLabel: [
      () => void 0 !== output.headers["x-amzn-transcribe-show-speaker-label"],
      () => __parseBoolean(output.headers["x-amzn-transcribe-show-speaker-label"]),
    ],
    EnableChannelIdentification: [
      () => void 0 !== output.headers["x-amzn-transcribe-enable-channel-identification"],
      () => __parseBoolean(output.headers["x-amzn-transcribe-enable-channel-identification"]),
    ],
    NumberOfChannels: [
      () => void 0 !== output.headers["x-amzn-transcribe-number-of-channels"],
      () => __strictParseInt32(output.headers["x-amzn-transcribe-number-of-channels"]),
    ],
    EnablePartialResultsStabilization: [
      () => void 0 !== output.headers["x-amzn-transcribe-enable-partial-results-stabilization"],
      () => __parseBoolean(output.headers["x-amzn-transcribe-enable-partial-results-stabilization"]),
    ],
    PartialResultsStability: [, output.headers["x-amzn-transcribe-partial-results-stability"]],
    ContentIdentificationType: [, output.headers["x-amzn-transcribe-content-identification-type"]],
    ContentRedactionType: [, output.headers["x-amzn-transcribe-content-redaction-type"]],
    PiiEntityTypes: [, output.headers["x-amzn-transcribe-pii-entity-types"]],
    LanguageModelName: [, output.headers["x-amzn-transcribe-language-model-name"]],
    IdentifyLanguage: [
      () => void 0 !== output.headers["x-amzn-transcribe-identify-language"],
      () => __parseBoolean(output.headers["x-amzn-transcribe-identify-language"]),
    ],
    LanguageOptions: [, output.headers["x-amzn-transcribe-language-options"]],
    PreferredLanguage: [, output.headers["x-amzn-transcribe-preferred-language"]],
    VocabularyNames: [, output.headers["x-amzn-transcribe-vocabulary-names"]],
    VocabularyFilterNames: [, output.headers["x-amzn-transcribe-vocabulary-filter-names"]],
  });
  const data: any = output.body;
  contents.TranscriptResultStream = de_TranscriptResultStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartStreamTranscriptionCommandError
 */
const de_StartStreamTranscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamTranscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribestreaming#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribestreaming#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribestreaming#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribestreaming#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transcribestreaming#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
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
    return { $unknown: output };
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
    return { $unknown: output };
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
    return { $unknown: output };
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

// se_ConfigurationEvent omitted.

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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
