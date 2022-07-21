// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseBoolean as __parseBoolean,
  strictParseInt32 as __strictParseInt32,
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
  Result,
  ServiceUnavailableException,
  Transcript,
  TranscriptEvent,
  TranscriptResultStream,
} from "../models/models_0";
import { TranscribeStreamingServiceException as __BaseException } from "../models/TranscribeStreamingServiceException";

export const serializeAws_restJson1StartMedicalStreamTranscriptionCommand = async (
  input: StartMedicalStreamTranscriptionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.LanguageCode) && { "x-amzn-transcribe-language-code": input.LanguageCode! }),
    ...(isSerializableHeaderValue(input.MediaSampleRateHertz) && {
      "x-amzn-transcribe-sample-rate": input.MediaSampleRateHertz!.toString(),
    }),
    ...(isSerializableHeaderValue(input.MediaEncoding) && { "x-amzn-transcribe-media-encoding": input.MediaEncoding! }),
    ...(isSerializableHeaderValue(input.VocabularyName) && {
      "x-amzn-transcribe-vocabulary-name": input.VocabularyName!,
    }),
    ...(isSerializableHeaderValue(input.Specialty) && { "x-amzn-transcribe-specialty": input.Specialty! }),
    ...(isSerializableHeaderValue(input.Type) && { "x-amzn-transcribe-type": input.Type! }),
    ...(isSerializableHeaderValue(input.ShowSpeakerLabel) && {
      "x-amzn-transcribe-show-speaker-label": input.ShowSpeakerLabel!.toString(),
    }),
    ...(isSerializableHeaderValue(input.SessionId) && { "x-amzn-transcribe-session-id": input.SessionId! }),
    ...(isSerializableHeaderValue(input.EnableChannelIdentification) && {
      "x-amzn-transcribe-enable-channel-identification": input.EnableChannelIdentification!.toString(),
    }),
    ...(isSerializableHeaderValue(input.NumberOfChannels) && {
      "x-amzn-transcribe-number-of-channels": input.NumberOfChannels!.toString(),
    }),
    ...(isSerializableHeaderValue(input.ContentIdentificationType) && {
      "x-amzn-transcribe-content-identification-type": input.ContentIdentificationType!,
    }),
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/medical-stream-transcription";
  let body: any;
  if (input.AudioStream !== undefined) {
    body = serializeAws_restJson1AudioStream(input.AudioStream, context);
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

export const serializeAws_restJson1StartStreamTranscriptionCommand = async (
  input: StartStreamTranscriptionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.LanguageCode) && { "x-amzn-transcribe-language-code": input.LanguageCode! }),
    ...(isSerializableHeaderValue(input.MediaSampleRateHertz) && {
      "x-amzn-transcribe-sample-rate": input.MediaSampleRateHertz!.toString(),
    }),
    ...(isSerializableHeaderValue(input.MediaEncoding) && { "x-amzn-transcribe-media-encoding": input.MediaEncoding! }),
    ...(isSerializableHeaderValue(input.VocabularyName) && {
      "x-amzn-transcribe-vocabulary-name": input.VocabularyName!,
    }),
    ...(isSerializableHeaderValue(input.SessionId) && { "x-amzn-transcribe-session-id": input.SessionId! }),
    ...(isSerializableHeaderValue(input.VocabularyFilterName) && {
      "x-amzn-transcribe-vocabulary-filter-name": input.VocabularyFilterName!,
    }),
    ...(isSerializableHeaderValue(input.VocabularyFilterMethod) && {
      "x-amzn-transcribe-vocabulary-filter-method": input.VocabularyFilterMethod!,
    }),
    ...(isSerializableHeaderValue(input.ShowSpeakerLabel) && {
      "x-amzn-transcribe-show-speaker-label": input.ShowSpeakerLabel!.toString(),
    }),
    ...(isSerializableHeaderValue(input.EnableChannelIdentification) && {
      "x-amzn-transcribe-enable-channel-identification": input.EnableChannelIdentification!.toString(),
    }),
    ...(isSerializableHeaderValue(input.NumberOfChannels) && {
      "x-amzn-transcribe-number-of-channels": input.NumberOfChannels!.toString(),
    }),
    ...(isSerializableHeaderValue(input.EnablePartialResultsStabilization) && {
      "x-amzn-transcribe-enable-partial-results-stabilization": input.EnablePartialResultsStabilization!.toString(),
    }),
    ...(isSerializableHeaderValue(input.PartialResultsStability) && {
      "x-amzn-transcribe-partial-results-stability": input.PartialResultsStability!,
    }),
    ...(isSerializableHeaderValue(input.ContentIdentificationType) && {
      "x-amzn-transcribe-content-identification-type": input.ContentIdentificationType!,
    }),
    ...(isSerializableHeaderValue(input.ContentRedactionType) && {
      "x-amzn-transcribe-content-redaction-type": input.ContentRedactionType!,
    }),
    ...(isSerializableHeaderValue(input.PiiEntityTypes) && {
      "x-amzn-transcribe-pii-entity-types": input.PiiEntityTypes!,
    }),
    ...(isSerializableHeaderValue(input.LanguageModelName) && {
      "x-amzn-transcribe-language-model-name": input.LanguageModelName!,
    }),
    ...(isSerializableHeaderValue(input.IdentifyLanguage) && {
      "x-amzn-transcribe-identify-language": input.IdentifyLanguage!.toString(),
    }),
    ...(isSerializableHeaderValue(input.LanguageOptions) && {
      "x-amzn-transcribe-language-options": input.LanguageOptions!,
    }),
    ...(isSerializableHeaderValue(input.PreferredLanguage) && {
      "x-amzn-transcribe-preferred-language": input.PreferredLanguage!,
    }),
    ...(isSerializableHeaderValue(input.VocabularyNames) && {
      "x-amzn-transcribe-vocabulary-names": input.VocabularyNames!,
    }),
    ...(isSerializableHeaderValue(input.VocabularyFilterNames) && {
      "x-amzn-transcribe-vocabulary-filter-names": input.VocabularyFilterNames!,
    }),
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/stream-transcription";
  let body: any;
  if (input.AudioStream !== undefined) {
    body = serializeAws_restJson1AudioStream(input.AudioStream, context);
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

export const deserializeAws_restJson1StartMedicalStreamTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartMedicalStreamTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartMedicalStreamTranscriptionCommandError(output, context);
  }
  const contents: StartMedicalStreamTranscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContentIdentificationType: undefined,
    EnableChannelIdentification: undefined,
    LanguageCode: undefined,
    MediaEncoding: undefined,
    MediaSampleRateHertz: undefined,
    NumberOfChannels: undefined,
    RequestId: undefined,
    SessionId: undefined,
    ShowSpeakerLabel: undefined,
    Specialty: undefined,
    TranscriptResultStream: undefined,
    Type: undefined,
    VocabularyName: undefined,
  };
  if (output.headers["x-amzn-request-id"] !== undefined) {
    contents.RequestId = output.headers["x-amzn-request-id"];
  }
  if (output.headers["x-amzn-transcribe-language-code"] !== undefined) {
    contents.LanguageCode = output.headers["x-amzn-transcribe-language-code"];
  }
  if (output.headers["x-amzn-transcribe-sample-rate"] !== undefined) {
    contents.MediaSampleRateHertz = __strictParseInt32(output.headers["x-amzn-transcribe-sample-rate"]);
  }
  if (output.headers["x-amzn-transcribe-media-encoding"] !== undefined) {
    contents.MediaEncoding = output.headers["x-amzn-transcribe-media-encoding"];
  }
  if (output.headers["x-amzn-transcribe-vocabulary-name"] !== undefined) {
    contents.VocabularyName = output.headers["x-amzn-transcribe-vocabulary-name"];
  }
  if (output.headers["x-amzn-transcribe-specialty"] !== undefined) {
    contents.Specialty = output.headers["x-amzn-transcribe-specialty"];
  }
  if (output.headers["x-amzn-transcribe-type"] !== undefined) {
    contents.Type = output.headers["x-amzn-transcribe-type"];
  }
  if (output.headers["x-amzn-transcribe-show-speaker-label"] !== undefined) {
    contents.ShowSpeakerLabel = __parseBoolean(output.headers["x-amzn-transcribe-show-speaker-label"]);
  }
  if (output.headers["x-amzn-transcribe-session-id"] !== undefined) {
    contents.SessionId = output.headers["x-amzn-transcribe-session-id"];
  }
  if (output.headers["x-amzn-transcribe-enable-channel-identification"] !== undefined) {
    contents.EnableChannelIdentification = __parseBoolean(
      output.headers["x-amzn-transcribe-enable-channel-identification"]
    );
  }
  if (output.headers["x-amzn-transcribe-number-of-channels"] !== undefined) {
    contents.NumberOfChannels = __strictParseInt32(output.headers["x-amzn-transcribe-number-of-channels"]);
  }
  if (output.headers["x-amzn-transcribe-content-identification-type"] !== undefined) {
    contents.ContentIdentificationType = output.headers["x-amzn-transcribe-content-identification-type"];
  }
  const data: any = output.body;
  contents.TranscriptResultStream = deserializeAws_restJson1MedicalTranscriptResultStream(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartMedicalStreamTranscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMedicalStreamTranscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribestreaming#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribestreaming#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribestreaming#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribestreaming#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transcribestreaming#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartStreamTranscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartStreamTranscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartStreamTranscriptionCommandError(output, context);
  }
  const contents: StartStreamTranscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContentIdentificationType: undefined,
    ContentRedactionType: undefined,
    EnableChannelIdentification: undefined,
    EnablePartialResultsStabilization: undefined,
    IdentifyLanguage: undefined,
    LanguageCode: undefined,
    LanguageModelName: undefined,
    LanguageOptions: undefined,
    MediaEncoding: undefined,
    MediaSampleRateHertz: undefined,
    NumberOfChannels: undefined,
    PartialResultsStability: undefined,
    PiiEntityTypes: undefined,
    PreferredLanguage: undefined,
    RequestId: undefined,
    SessionId: undefined,
    ShowSpeakerLabel: undefined,
    TranscriptResultStream: undefined,
    VocabularyFilterMethod: undefined,
    VocabularyFilterName: undefined,
    VocabularyFilterNames: undefined,
    VocabularyName: undefined,
    VocabularyNames: undefined,
  };
  if (output.headers["x-amzn-request-id"] !== undefined) {
    contents.RequestId = output.headers["x-amzn-request-id"];
  }
  if (output.headers["x-amzn-transcribe-language-code"] !== undefined) {
    contents.LanguageCode = output.headers["x-amzn-transcribe-language-code"];
  }
  if (output.headers["x-amzn-transcribe-sample-rate"] !== undefined) {
    contents.MediaSampleRateHertz = __strictParseInt32(output.headers["x-amzn-transcribe-sample-rate"]);
  }
  if (output.headers["x-amzn-transcribe-media-encoding"] !== undefined) {
    contents.MediaEncoding = output.headers["x-amzn-transcribe-media-encoding"];
  }
  if (output.headers["x-amzn-transcribe-vocabulary-name"] !== undefined) {
    contents.VocabularyName = output.headers["x-amzn-transcribe-vocabulary-name"];
  }
  if (output.headers["x-amzn-transcribe-session-id"] !== undefined) {
    contents.SessionId = output.headers["x-amzn-transcribe-session-id"];
  }
  if (output.headers["x-amzn-transcribe-vocabulary-filter-name"] !== undefined) {
    contents.VocabularyFilterName = output.headers["x-amzn-transcribe-vocabulary-filter-name"];
  }
  if (output.headers["x-amzn-transcribe-vocabulary-filter-method"] !== undefined) {
    contents.VocabularyFilterMethod = output.headers["x-amzn-transcribe-vocabulary-filter-method"];
  }
  if (output.headers["x-amzn-transcribe-show-speaker-label"] !== undefined) {
    contents.ShowSpeakerLabel = __parseBoolean(output.headers["x-amzn-transcribe-show-speaker-label"]);
  }
  if (output.headers["x-amzn-transcribe-enable-channel-identification"] !== undefined) {
    contents.EnableChannelIdentification = __parseBoolean(
      output.headers["x-amzn-transcribe-enable-channel-identification"]
    );
  }
  if (output.headers["x-amzn-transcribe-number-of-channels"] !== undefined) {
    contents.NumberOfChannels = __strictParseInt32(output.headers["x-amzn-transcribe-number-of-channels"]);
  }
  if (output.headers["x-amzn-transcribe-enable-partial-results-stabilization"] !== undefined) {
    contents.EnablePartialResultsStabilization = __parseBoolean(
      output.headers["x-amzn-transcribe-enable-partial-results-stabilization"]
    );
  }
  if (output.headers["x-amzn-transcribe-partial-results-stability"] !== undefined) {
    contents.PartialResultsStability = output.headers["x-amzn-transcribe-partial-results-stability"];
  }
  if (output.headers["x-amzn-transcribe-content-identification-type"] !== undefined) {
    contents.ContentIdentificationType = output.headers["x-amzn-transcribe-content-identification-type"];
  }
  if (output.headers["x-amzn-transcribe-content-redaction-type"] !== undefined) {
    contents.ContentRedactionType = output.headers["x-amzn-transcribe-content-redaction-type"];
  }
  if (output.headers["x-amzn-transcribe-pii-entity-types"] !== undefined) {
    contents.PiiEntityTypes = output.headers["x-amzn-transcribe-pii-entity-types"];
  }
  if (output.headers["x-amzn-transcribe-language-model-name"] !== undefined) {
    contents.LanguageModelName = output.headers["x-amzn-transcribe-language-model-name"];
  }
  if (output.headers["x-amzn-transcribe-identify-language"] !== undefined) {
    contents.IdentifyLanguage = __parseBoolean(output.headers["x-amzn-transcribe-identify-language"]);
  }
  if (output.headers["x-amzn-transcribe-language-options"] !== undefined) {
    contents.LanguageOptions = output.headers["x-amzn-transcribe-language-options"];
  }
  if (output.headers["x-amzn-transcribe-preferred-language"] !== undefined) {
    contents.PreferredLanguage = output.headers["x-amzn-transcribe-preferred-language"];
  }
  if (output.headers["x-amzn-transcribe-vocabulary-names"] !== undefined) {
    contents.VocabularyNames = output.headers["x-amzn-transcribe-vocabulary-names"];
  }
  if (output.headers["x-amzn-transcribe-vocabulary-filter-names"] !== undefined) {
    contents.VocabularyFilterNames = output.headers["x-amzn-transcribe-vocabulary-filter-names"];
  }
  const data: any = output.body;
  contents.TranscriptResultStream = deserializeAws_restJson1TranscriptResultStream(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartStreamTranscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamTranscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribestreaming#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transcribestreaming#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.transcribestreaming#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.transcribestreaming#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transcribestreaming#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AudioStream = (input: any, context: __SerdeContext & __EventStreamSerdeContext): any => {
  const eventMarshallingVisitor = (event: any): __Message =>
    AudioStream.visit(event, {
      AudioEvent: (value) => serializeAws_restJson1AudioEvent_event(value, context),
      _: (value) => value as any,
    });
  return context.eventStreamMarshaller.serialize(input, eventMarshallingVisitor);
};
const serializeAws_restJson1AudioEvent_event = (input: AudioEvent, context: __SerdeContext): __Message => {
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
const deserializeAws_restJson1MedicalTranscriptResultStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<MedicalTranscriptResultStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["TranscriptEvent"] != null) {
      return {
        TranscriptEvent: await deserializeAws_restJson1MedicalTranscriptEvent_event(event["TranscriptEvent"], context),
      };
    }
    if (event["BadRequestException"] != null) {
      return {
        BadRequestException: await deserializeAws_restJson1BadRequestException_event(
          event["BadRequestException"],
          context
        ),
      };
    }
    if (event["LimitExceededException"] != null) {
      return {
        LimitExceededException: await deserializeAws_restJson1LimitExceededException_event(
          event["LimitExceededException"],
          context
        ),
      };
    }
    if (event["InternalFailureException"] != null) {
      return {
        InternalFailureException: await deserializeAws_restJson1InternalFailureException_event(
          event["InternalFailureException"],
          context
        ),
      };
    }
    if (event["ConflictException"] != null) {
      return {
        ConflictException: await deserializeAws_restJson1ConflictException_event(event["ConflictException"], context),
      };
    }
    if (event["ServiceUnavailableException"] != null) {
      return {
        ServiceUnavailableException: await deserializeAws_restJson1ServiceUnavailableException_event(
          event["ServiceUnavailableException"],
          context
        ),
      };
    }
    return { $unknown: output };
  });
};
const deserializeAws_restJson1TranscriptResultStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<TranscriptResultStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["TranscriptEvent"] != null) {
      return {
        TranscriptEvent: await deserializeAws_restJson1TranscriptEvent_event(event["TranscriptEvent"], context),
      };
    }
    if (event["BadRequestException"] != null) {
      return {
        BadRequestException: await deserializeAws_restJson1BadRequestException_event(
          event["BadRequestException"],
          context
        ),
      };
    }
    if (event["LimitExceededException"] != null) {
      return {
        LimitExceededException: await deserializeAws_restJson1LimitExceededException_event(
          event["LimitExceededException"],
          context
        ),
      };
    }
    if (event["InternalFailureException"] != null) {
      return {
        InternalFailureException: await deserializeAws_restJson1InternalFailureException_event(
          event["InternalFailureException"],
          context
        ),
      };
    }
    if (event["ConflictException"] != null) {
      return {
        ConflictException: await deserializeAws_restJson1ConflictException_event(event["ConflictException"], context),
      };
    }
    if (event["ServiceUnavailableException"] != null) {
      return {
        ServiceUnavailableException: await deserializeAws_restJson1ServiceUnavailableException_event(
          event["ServiceUnavailableException"],
          context
        ),
      };
    }
    return { $unknown: output };
  });
};
const deserializeAws_restJson1BadRequestException_event = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1ConflictException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1InternalFailureException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1LimitExceededException_event = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1MedicalTranscriptEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<MedicalTranscriptEvent> => {
  const contents: MedicalTranscriptEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_restJson1MedicalTranscriptEvent(data, context));
  return contents;
};
const deserializeAws_restJson1ServiceUnavailableException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
};
const deserializeAws_restJson1TranscriptEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<TranscriptEvent> => {
  const contents: TranscriptEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_restJson1TranscriptEvent(data, context));
  return contents;
};
const deserializeAws_restJson1Alternative = (output: any, context: __SerdeContext): Alternative => {
  return {
    Entities: output.Entities != null ? deserializeAws_restJson1EntityList(output.Entities, context) : undefined,
    Items: output.Items != null ? deserializeAws_restJson1ItemList(output.Items, context) : undefined,
    Transcript: __expectString(output.Transcript),
  } as any;
};

const deserializeAws_restJson1AlternativeList = (output: any, context: __SerdeContext): Alternative[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Alternative(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Entity = (output: any, context: __SerdeContext): Entity => {
  return {
    Category: __expectString(output.Category),
    Confidence: __limitedParseDouble(output.Confidence),
    Content: __expectString(output.Content),
    EndTime: __limitedParseDouble(output.EndTime),
    StartTime: __limitedParseDouble(output.StartTime),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1EntityList = (output: any, context: __SerdeContext): Entity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Entity(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Item = (output: any, context: __SerdeContext): Item => {
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

const deserializeAws_restJson1ItemList = (output: any, context: __SerdeContext): Item[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Item(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LanguageIdentification = (output: any, context: __SerdeContext): LanguageWithScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LanguageWithScore(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LanguageWithScore = (output: any, context: __SerdeContext): LanguageWithScore => {
  return {
    LanguageCode: __expectString(output.LanguageCode),
    Score: __limitedParseDouble(output.Score),
  } as any;
};

const deserializeAws_restJson1MedicalAlternative = (output: any, context: __SerdeContext): MedicalAlternative => {
  return {
    Entities: output.Entities != null ? deserializeAws_restJson1MedicalEntityList(output.Entities, context) : undefined,
    Items: output.Items != null ? deserializeAws_restJson1MedicalItemList(output.Items, context) : undefined,
    Transcript: __expectString(output.Transcript),
  } as any;
};

const deserializeAws_restJson1MedicalAlternativeList = (output: any, context: __SerdeContext): MedicalAlternative[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MedicalAlternative(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MedicalEntity = (output: any, context: __SerdeContext): MedicalEntity => {
  return {
    Category: __expectString(output.Category),
    Confidence: __limitedParseDouble(output.Confidence),
    Content: __expectString(output.Content),
    EndTime: __limitedParseDouble(output.EndTime),
    StartTime: __limitedParseDouble(output.StartTime),
  } as any;
};

const deserializeAws_restJson1MedicalEntityList = (output: any, context: __SerdeContext): MedicalEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MedicalEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MedicalItem = (output: any, context: __SerdeContext): MedicalItem => {
  return {
    Confidence: __limitedParseDouble(output.Confidence),
    Content: __expectString(output.Content),
    EndTime: __limitedParseDouble(output.EndTime),
    Speaker: __expectString(output.Speaker),
    StartTime: __limitedParseDouble(output.StartTime),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1MedicalItemList = (output: any, context: __SerdeContext): MedicalItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MedicalItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MedicalResult = (output: any, context: __SerdeContext): MedicalResult => {
  return {
    Alternatives:
      output.Alternatives != null
        ? deserializeAws_restJson1MedicalAlternativeList(output.Alternatives, context)
        : undefined,
    ChannelId: __expectString(output.ChannelId),
    EndTime: __limitedParseDouble(output.EndTime),
    IsPartial: __expectBoolean(output.IsPartial),
    ResultId: __expectString(output.ResultId),
    StartTime: __limitedParseDouble(output.StartTime),
  } as any;
};

const deserializeAws_restJson1MedicalResultList = (output: any, context: __SerdeContext): MedicalResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MedicalResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MedicalTranscript = (output: any, context: __SerdeContext): MedicalTranscript => {
  return {
    Results: output.Results != null ? deserializeAws_restJson1MedicalResultList(output.Results, context) : undefined,
  } as any;
};

const deserializeAws_restJson1MedicalTranscriptEvent = (
  output: any,
  context: __SerdeContext
): MedicalTranscriptEvent => {
  return {
    Transcript:
      output.Transcript != null ? deserializeAws_restJson1MedicalTranscript(output.Transcript, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Result = (output: any, context: __SerdeContext): Result => {
  return {
    Alternatives:
      output.Alternatives != null ? deserializeAws_restJson1AlternativeList(output.Alternatives, context) : undefined,
    ChannelId: __expectString(output.ChannelId),
    EndTime: __limitedParseDouble(output.EndTime),
    IsPartial: __expectBoolean(output.IsPartial),
    LanguageCode: __expectString(output.LanguageCode),
    LanguageIdentification:
      output.LanguageIdentification != null
        ? deserializeAws_restJson1LanguageIdentification(output.LanguageIdentification, context)
        : undefined,
    ResultId: __expectString(output.ResultId),
    StartTime: __limitedParseDouble(output.StartTime),
  } as any;
};

const deserializeAws_restJson1ResultList = (output: any, context: __SerdeContext): Result[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Result(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Transcript = (output: any, context: __SerdeContext): Transcript => {
  return {
    Results: output.Results != null ? deserializeAws_restJson1ResultList(output.Results, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TranscriptEvent = (output: any, context: __SerdeContext): TranscriptEvent => {
  return {
    Transcript: output.Transcript != null ? deserializeAws_restJson1Transcript(output.Transcript, context) : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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
