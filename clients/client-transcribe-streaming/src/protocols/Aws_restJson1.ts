// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseBoolean as __parseBoolean,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  Message as __Message,
  MessageHeaders as __MessageHeaders,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  CharacterOffsets,
  ConfigurationEvent,
  ConflictException,
  Entity,
  InternalFailureException,
  IssueDetected,
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
  PointsOfInterest,
  PostCallAnalyticsSettings,
  Result,
  ServiceUnavailableException,
  TimestampRange,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  body = se_ConfigurationEvent(input, context);
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
  Object.assign(contents, de_CategoryEvent(data, context));
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
/**
 * serializeAws_restJson1ChannelDefinition
 */
const se_ChannelDefinition = (input: ChannelDefinition, context: __SerdeContext): any => {
  return {
    ...(input.ChannelId != null && { ChannelId: input.ChannelId }),
    ...(input.ParticipantRole != null && { ParticipantRole: input.ParticipantRole }),
  };
};

/**
 * serializeAws_restJson1ChannelDefinitions
 */
const se_ChannelDefinitions = (input: ChannelDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ChannelDefinition(entry, context);
    });
};

/**
 * serializeAws_restJson1ConfigurationEvent
 */
const se_ConfigurationEvent = (input: ConfigurationEvent, context: __SerdeContext): any => {
  return {
    ...(input.ChannelDefinitions != null && {
      ChannelDefinitions: se_ChannelDefinitions(input.ChannelDefinitions, context),
    }),
    ...(input.PostCallAnalyticsSettings != null && {
      PostCallAnalyticsSettings: se_PostCallAnalyticsSettings(input.PostCallAnalyticsSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1PostCallAnalyticsSettings
 */
const se_PostCallAnalyticsSettings = (input: PostCallAnalyticsSettings, context: __SerdeContext): any => {
  return {
    ...(input.ContentRedactionOutput != null && { ContentRedactionOutput: input.ContentRedactionOutput }),
    ...(input.DataAccessRoleArn != null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.OutputEncryptionKMSKeyId != null && { OutputEncryptionKMSKeyId: input.OutputEncryptionKMSKeyId }),
    ...(input.OutputLocation != null && { OutputLocation: input.OutputLocation }),
  };
};

/**
 * deserializeAws_restJson1Alternative
 */
const de_Alternative = (output: any, context: __SerdeContext): Alternative => {
  return {
    Entities: output.Entities != null ? de_EntityList(output.Entities, context) : undefined,
    Items: output.Items != null ? de_ItemList(output.Items, context) : undefined,
    Transcript: __expectString(output.Transcript),
  } as any;
};

/**
 * deserializeAws_restJson1AlternativeList
 */
const de_AlternativeList = (output: any, context: __SerdeContext): Alternative[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Alternative(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CallAnalyticsEntity
 */
const de_CallAnalyticsEntity = (output: any, context: __SerdeContext): CallAnalyticsEntity => {
  return {
    BeginOffsetMillis: __expectLong(output.BeginOffsetMillis),
    Category: __expectString(output.Category),
    Confidence: __limitedParseDouble(output.Confidence),
    Content: __expectString(output.Content),
    EndOffsetMillis: __expectLong(output.EndOffsetMillis),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1CallAnalyticsEntityList
 */
const de_CallAnalyticsEntityList = (output: any, context: __SerdeContext): CallAnalyticsEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CallAnalyticsEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CallAnalyticsItem
 */
const de_CallAnalyticsItem = (output: any, context: __SerdeContext): CallAnalyticsItem => {
  return {
    BeginOffsetMillis: __expectLong(output.BeginOffsetMillis),
    Confidence: __limitedParseDouble(output.Confidence),
    Content: __expectString(output.Content),
    EndOffsetMillis: __expectLong(output.EndOffsetMillis),
    Stable: __expectBoolean(output.Stable),
    Type: __expectString(output.Type),
    VocabularyFilterMatch: __expectBoolean(output.VocabularyFilterMatch),
  } as any;
};

/**
 * deserializeAws_restJson1CallAnalyticsItemList
 */
const de_CallAnalyticsItemList = (output: any, context: __SerdeContext): CallAnalyticsItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CallAnalyticsItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CategoryEvent
 */
const de_CategoryEvent = (output: any, context: __SerdeContext): CategoryEvent => {
  return {
    MatchedCategories: output.MatchedCategories != null ? de_StringList(output.MatchedCategories, context) : undefined,
    MatchedDetails:
      output.MatchedDetails != null ? de_MatchedCategoryDetails(output.MatchedDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CharacterOffsets
 */
const de_CharacterOffsets = (output: any, context: __SerdeContext): CharacterOffsets => {
  return {
    Begin: __expectInt32(output.Begin),
    End: __expectInt32(output.End),
  } as any;
};

/**
 * deserializeAws_restJson1Entity
 */
const de_Entity = (output: any, context: __SerdeContext): Entity => {
  return {
    Category: __expectString(output.Category),
    Confidence: __limitedParseDouble(output.Confidence),
    Content: __expectString(output.Content),
    EndTime: __limitedParseDouble(output.EndTime),
    StartTime: __limitedParseDouble(output.StartTime),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1EntityList
 */
const de_EntityList = (output: any, context: __SerdeContext): Entity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Entity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IssueDetected
 */
const de_IssueDetected = (output: any, context: __SerdeContext): IssueDetected => {
  return {
    CharacterOffsets:
      output.CharacterOffsets != null ? de_CharacterOffsets(output.CharacterOffsets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IssuesDetected
 */
const de_IssuesDetected = (output: any, context: __SerdeContext): IssueDetected[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IssueDetected(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Item
 */
const de_Item = (output: any, context: __SerdeContext): Item => {
  return {
    Confidence: __limitedParseDouble(output.Confidence),
    Content: __expectString(output.Content),
    EndTime: __limitedParseDouble(output.EndTime),
    Speaker: __expectString(output.Speaker),
    Stable: __expectBoolean(output.Stable),
    StartTime: __limitedParseDouble(output.StartTime),
    Type: __expectString(output.Type),
    VocabularyFilterMatch: __expectBoolean(output.VocabularyFilterMatch),
  } as any;
};

/**
 * deserializeAws_restJson1ItemList
 */
const de_ItemList = (output: any, context: __SerdeContext): Item[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_LanguageWithScore(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LanguageWithScore
 */
const de_LanguageWithScore = (output: any, context: __SerdeContext): LanguageWithScore => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    Score: __limitedParseDouble(output.Score),
  } as any;
};

/**
 * deserializeAws_restJson1MatchedCategoryDetails
 */
const de_MatchedCategoryDetails = (output: any, context: __SerdeContext): Record<string, PointsOfInterest> => {
  return Object.entries(output).reduce((acc: Record<string, PointsOfInterest>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_PointsOfInterest(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1MedicalAlternative
 */
const de_MedicalAlternative = (output: any, context: __SerdeContext): MedicalAlternative => {
  return {
    Entities: output.Entities != null ? de_MedicalEntityList(output.Entities, context) : undefined,
    Items: output.Items != null ? de_MedicalItemList(output.Items, context) : undefined,
    Transcript: __expectString(output.Transcript),
  } as any;
};

/**
 * deserializeAws_restJson1MedicalAlternativeList
 */
const de_MedicalAlternativeList = (output: any, context: __SerdeContext): MedicalAlternative[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MedicalAlternative(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MedicalEntity
 */
const de_MedicalEntity = (output: any, context: __SerdeContext): MedicalEntity => {
  return {
    Category: __expectString(output.Category),
    Confidence: __limitedParseDouble(output.Confidence),
    Content: __expectString(output.Content),
    EndTime: __limitedParseDouble(output.EndTime),
    StartTime: __limitedParseDouble(output.StartTime),
  } as any;
};

/**
 * deserializeAws_restJson1MedicalEntityList
 */
const de_MedicalEntityList = (output: any, context: __SerdeContext): MedicalEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MedicalEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MedicalItem
 */
const de_MedicalItem = (output: any, context: __SerdeContext): MedicalItem => {
  return {
    Confidence: __limitedParseDouble(output.Confidence),
    Content: __expectString(output.Content),
    EndTime: __limitedParseDouble(output.EndTime),
    Speaker: __expectString(output.Speaker),
    StartTime: __limitedParseDouble(output.StartTime),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1MedicalItemList
 */
const de_MedicalItemList = (output: any, context: __SerdeContext): MedicalItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MedicalItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MedicalResult
 */
const de_MedicalResult = (output: any, context: __SerdeContext): MedicalResult => {
  return {
    Alternatives: output.Alternatives != null ? de_MedicalAlternativeList(output.Alternatives, context) : undefined,
    ChannelId: __expectString(output.ChannelId),
    EndTime: __limitedParseDouble(output.EndTime),
    IsPartial: __expectBoolean(output.IsPartial),
    ResultId: __expectString(output.ResultId),
    StartTime: __limitedParseDouble(output.StartTime),
  } as any;
};

/**
 * deserializeAws_restJson1MedicalResultList
 */
const de_MedicalResultList = (output: any, context: __SerdeContext): MedicalResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MedicalResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MedicalTranscript
 */
const de_MedicalTranscript = (output: any, context: __SerdeContext): MedicalTranscript => {
  return {
    Results: output.Results != null ? de_MedicalResultList(output.Results, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MedicalTranscriptEvent
 */
const de_MedicalTranscriptEvent = (output: any, context: __SerdeContext): MedicalTranscriptEvent => {
  return {
    Transcript: output.Transcript != null ? de_MedicalTranscript(output.Transcript, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PointsOfInterest
 */
const de_PointsOfInterest = (output: any, context: __SerdeContext): PointsOfInterest => {
  return {
    TimestampRanges: output.TimestampRanges != null ? de_TimestampRanges(output.TimestampRanges, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Result
 */
const de_Result = (output: any, context: __SerdeContext): Result => {
  return {
    Alternatives: output.Alternatives != null ? de_AlternativeList(output.Alternatives, context) : undefined,
    ChannelId: __expectString(output.ChannelId),
    EndTime: __limitedParseDouble(output.EndTime),
    IsPartial: __expectBoolean(output.IsPartial),
    LanguageCode: __expectString(output.LanguageCode),
    LanguageIdentification:
      output.LanguageIdentification != null
        ? de_LanguageIdentification(output.LanguageIdentification, context)
        : undefined,
    ResultId: __expectString(output.ResultId),
    StartTime: __limitedParseDouble(output.StartTime),
  } as any;
};

/**
 * deserializeAws_restJson1ResultList
 */
const de_ResultList = (output: any, context: __SerdeContext): Result[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Result(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TimestampRange
 */
const de_TimestampRange = (output: any, context: __SerdeContext): TimestampRange => {
  return {
    BeginOffsetMillis: __expectLong(output.BeginOffsetMillis),
    EndOffsetMillis: __expectLong(output.EndOffsetMillis),
  } as any;
};

/**
 * deserializeAws_restJson1TimestampRanges
 */
const de_TimestampRanges = (output: any, context: __SerdeContext): TimestampRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TimestampRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Transcript
 */
const de_Transcript = (output: any, context: __SerdeContext): Transcript => {
  return {
    Results: output.Results != null ? de_ResultList(output.Results, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TranscriptEvent
 */
const de_TranscriptEvent = (output: any, context: __SerdeContext): TranscriptEvent => {
  return {
    Transcript: output.Transcript != null ? de_Transcript(output.Transcript, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UtteranceEvent
 */
const de_UtteranceEvent = (output: any, context: __SerdeContext): UtteranceEvent => {
  return {
    BeginOffsetMillis: __expectLong(output.BeginOffsetMillis),
    EndOffsetMillis: __expectLong(output.EndOffsetMillis),
    Entities: output.Entities != null ? de_CallAnalyticsEntityList(output.Entities, context) : undefined,
    IsPartial: __expectBoolean(output.IsPartial),
    IssuesDetected: output.IssuesDetected != null ? de_IssuesDetected(output.IssuesDetected, context) : undefined,
    Items: output.Items != null ? de_CallAnalyticsItemList(output.Items, context) : undefined,
    ParticipantRole: __expectString(output.ParticipantRole),
    Sentiment: __expectString(output.Sentiment),
    Transcript: __expectString(output.Transcript),
    UtteranceId: __expectString(output.UtteranceId),
  } as any;
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
