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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
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
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/medical-stream-transcription";
  let body: any;
  if (input.AudioStream !== undefined) {
    body = context.eventStreamMarshaller.serialize(input.AudioStream, (event) =>
      serializeAws_restJson1AudioStream_event(event, context)
    );
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
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/stream-transcription";
  let body: any;
  if (input.AudioStream !== undefined) {
    body = context.eventStreamMarshaller.serialize(input.AudioStream, (event) =>
      serializeAws_restJson1AudioStream_event(event, context)
    );
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
  const data: any = context.eventStreamMarshaller.deserialize(output.body, async (event) => {
    const eventName = Object.keys(event)[0];
    const eventHeaders = Object.entries(event[eventName].headers).reduce((accummulator, curr) => {
      accummulator[curr[0]] = curr[1].value;
      return accummulator;
    }, {} as { [key: string]: any });
    const eventMessage = {
      headers: eventHeaders,
      body: event[eventName].body,
    };
    const parsedEvent = {
      [eventName]: eventMessage,
    };
    return await deserializeAws_restJson1MedicalTranscriptResultStream_event(parsedEvent, context);
  });
  contents.TranscriptResultStream = data;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribestreaming#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribestreaming#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribestreaming#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribestreaming#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transcribestreaming#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    LanguageCode: undefined,
    MediaEncoding: undefined,
    MediaSampleRateHertz: undefined,
    NumberOfChannels: undefined,
    PartialResultsStability: undefined,
    PiiEntityTypes: undefined,
    RequestId: undefined,
    SessionId: undefined,
    ShowSpeakerLabel: undefined,
    TranscriptResultStream: undefined,
    VocabularyFilterMethod: undefined,
    VocabularyFilterName: undefined,
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
  const data: any = context.eventStreamMarshaller.deserialize(output.body, async (event) => {
    const eventName = Object.keys(event)[0];
    const eventHeaders = Object.entries(event[eventName].headers).reduce((accummulator, curr) => {
      accummulator[curr[0]] = curr[1].value;
      return accummulator;
    }, {} as { [key: string]: any });
    const eventMessage = {
      headers: eventHeaders,
      body: event[eventName].body,
    };
    const parsedEvent = {
      [eventName]: eventMessage,
    };
    return await deserializeAws_restJson1TranscriptResultStream_event(parsedEvent, context);
  });
  contents.TranscriptResultStream = data;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribestreaming#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribestreaming#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribestreaming#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribestreaming#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.transcribestreaming#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const serializeAws_restJson1AudioStream_event = (input: any, context: __SerdeContext): __Message => {
  return AudioStream.visit(input, {
    AudioEvent: (value) => serializeAws_restJson1AudioEvent_event(value, context),
    _: (value) => value as any,
  });
};
const deserializeAws_restJson1MedicalTranscriptResultStream_event = async (
  output: any,
  context: __SerdeContext
): Promise<MedicalTranscriptResultStream> => {
  if (output["TranscriptEvent"] !== undefined) {
    return {
      TranscriptEvent: await deserializeAws_restJson1MedicalTranscriptEvent_event(output["TranscriptEvent"], context),
    };
  }
  if (output["BadRequestException"] !== undefined) {
    return {
      BadRequestException: await deserializeAws_restJson1BadRequestException_event(
        output["BadRequestException"],
        context
      ),
    };
  }
  if (output["LimitExceededException"] !== undefined) {
    return {
      LimitExceededException: await deserializeAws_restJson1LimitExceededException_event(
        output["LimitExceededException"],
        context
      ),
    };
  }
  if (output["InternalFailureException"] !== undefined) {
    return {
      InternalFailureException: await deserializeAws_restJson1InternalFailureException_event(
        output["InternalFailureException"],
        context
      ),
    };
  }
  if (output["ConflictException"] !== undefined) {
    return {
      ConflictException: await deserializeAws_restJson1ConflictException_event(output["ConflictException"], context),
    };
  }
  if (output["ServiceUnavailableException"] !== undefined) {
    return {
      ServiceUnavailableException: await deserializeAws_restJson1ServiceUnavailableException_event(
        output["ServiceUnavailableException"],
        context
      ),
    };
  }
  return { $unknown: output };
};
const deserializeAws_restJson1TranscriptResultStream_event = async (
  output: any,
  context: __SerdeContext
): Promise<TranscriptResultStream> => {
  if (output["TranscriptEvent"] !== undefined) {
    return {
      TranscriptEvent: await deserializeAws_restJson1TranscriptEvent_event(output["TranscriptEvent"], context),
    };
  }
  if (output["BadRequestException"] !== undefined) {
    return {
      BadRequestException: await deserializeAws_restJson1BadRequestException_event(
        output["BadRequestException"],
        context
      ),
    };
  }
  if (output["LimitExceededException"] !== undefined) {
    return {
      LimitExceededException: await deserializeAws_restJson1LimitExceededException_event(
        output["LimitExceededException"],
        context
      ),
    };
  }
  if (output["InternalFailureException"] !== undefined) {
    return {
      InternalFailureException: await deserializeAws_restJson1InternalFailureException_event(
        output["InternalFailureException"],
        context
      ),
    };
  }
  if (output["ConflictException"] !== undefined) {
    return {
      ConflictException: await deserializeAws_restJson1ConflictException_event(output["ConflictException"], context),
    };
  }
  if (output["ServiceUnavailableException"] !== undefined) {
    return {
      ServiceUnavailableException: await deserializeAws_restJson1ServiceUnavailableException_event(
        output["ServiceUnavailableException"],
        context
      ),
    };
  }
  return { $unknown: output };
};
const serializeAws_restJson1AudioEvent_event = (input: AudioEvent, context: __SerdeContext): __Message => {
  const message: __Message = {
    headers: {
      ":event-type": { type: "string", value: "AudioEvent" },
      ":message-type": { type: "string", value: "event" },
    },
    body: new Uint8Array(),
  };
  message.body = input.AudioChunk || message.body;
  return message;
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
  let contents: MedicalTranscriptEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  contents = {
    ...contents,
    ...deserializeAws_restJson1MedicalTranscriptEvent(data, context),
  } as any;
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
  let contents: TranscriptEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  contents = {
    ...contents,
    ...deserializeAws_restJson1TranscriptEvent(data, context),
  } as any;
  return contents;
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const serializeAws_restJson1AudioEvent = (input: AudioEvent, context: __SerdeContext): any => {
  return {
    ...(input.AudioChunk !== undefined &&
      input.AudioChunk !== null && { AudioChunk: context.base64Encoder(input.AudioChunk) }),
  };
};

const serializeAws_restJson1AudioStream = (input: AudioStream, context: __SerdeContext): any => {
  return AudioStream.visit(input, {
    AudioEvent: (value) => ({ AudioEvent: serializeAws_restJson1AudioEvent(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const deserializeAws_restJson1Alternative = (output: any, context: __SerdeContext): Alternative => {
  return {
    Entities:
      output.Entities !== undefined && output.Entities !== null
        ? deserializeAws_restJson1EntityList(output.Entities, context)
        : undefined,
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_restJson1ItemList(output.Items, context)
        : undefined,
    Transcript: __expectString(output.Transcript),
  } as any;
};

const deserializeAws_restJson1AlternativeList = (output: any, context: __SerdeContext): Alternative[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Alternative(entry, context);
    });
};

const deserializeAws_restJson1BadRequestException = (output: any, context: __SerdeContext): BadRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Entity(entry, context);
    });
};

const deserializeAws_restJson1InternalFailureException = (
  output: any,
  context: __SerdeContext
): InternalFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Item(entry, context);
    });
};

const deserializeAws_restJson1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1MedicalAlternative = (output: any, context: __SerdeContext): MedicalAlternative => {
  return {
    Entities:
      output.Entities !== undefined && output.Entities !== null
        ? deserializeAws_restJson1MedicalEntityList(output.Entities, context)
        : undefined,
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_restJson1MedicalItemList(output.Items, context)
        : undefined,
    Transcript: __expectString(output.Transcript),
  } as any;
};

const deserializeAws_restJson1MedicalAlternativeList = (output: any, context: __SerdeContext): MedicalAlternative[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MedicalAlternative(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MedicalEntity(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MedicalItem(entry, context);
    });
};

const deserializeAws_restJson1MedicalResult = (output: any, context: __SerdeContext): MedicalResult => {
  return {
    Alternatives:
      output.Alternatives !== undefined && output.Alternatives !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MedicalResult(entry, context);
    });
};

const deserializeAws_restJson1MedicalTranscript = (output: any, context: __SerdeContext): MedicalTranscript => {
  return {
    Results:
      output.Results !== undefined && output.Results !== null
        ? deserializeAws_restJson1MedicalResultList(output.Results, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MedicalTranscriptEvent = (
  output: any,
  context: __SerdeContext
): MedicalTranscriptEvent => {
  return {
    Transcript:
      output.Transcript !== undefined && output.Transcript !== null
        ? deserializeAws_restJson1MedicalTranscript(output.Transcript, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MedicalTranscriptResultStream = (
  output: any,
  context: __SerdeContext
): MedicalTranscriptResultStream => {
  if (output.BadRequestException !== undefined && output.BadRequestException !== null) {
    return {
      BadRequestException: deserializeAws_restJson1BadRequestException(output.BadRequestException, context),
    };
  }
  if (output.ConflictException !== undefined && output.ConflictException !== null) {
    return {
      ConflictException: deserializeAws_restJson1ConflictException(output.ConflictException, context),
    };
  }
  if (output.InternalFailureException !== undefined && output.InternalFailureException !== null) {
    return {
      InternalFailureException: deserializeAws_restJson1InternalFailureException(
        output.InternalFailureException,
        context
      ),
    };
  }
  if (output.LimitExceededException !== undefined && output.LimitExceededException !== null) {
    return {
      LimitExceededException: deserializeAws_restJson1LimitExceededException(output.LimitExceededException, context),
    };
  }
  if (output.ServiceUnavailableException !== undefined && output.ServiceUnavailableException !== null) {
    return {
      ServiceUnavailableException: deserializeAws_restJson1ServiceUnavailableException(
        output.ServiceUnavailableException,
        context
      ),
    };
  }
  if (output.TranscriptEvent !== undefined && output.TranscriptEvent !== null) {
    return {
      TranscriptEvent: deserializeAws_restJson1MedicalTranscriptEvent(output.TranscriptEvent, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1Result = (output: any, context: __SerdeContext): Result => {
  return {
    Alternatives:
      output.Alternatives !== undefined && output.Alternatives !== null
        ? deserializeAws_restJson1AlternativeList(output.Alternatives, context)
        : undefined,
    ChannelId: __expectString(output.ChannelId),
    EndTime: __limitedParseDouble(output.EndTime),
    IsPartial: __expectBoolean(output.IsPartial),
    ResultId: __expectString(output.ResultId),
    StartTime: __limitedParseDouble(output.StartTime),
  } as any;
};

const deserializeAws_restJson1ResultList = (output: any, context: __SerdeContext): Result[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Result(entry, context);
    });
};

const deserializeAws_restJson1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1Transcript = (output: any, context: __SerdeContext): Transcript => {
  return {
    Results:
      output.Results !== undefined && output.Results !== null
        ? deserializeAws_restJson1ResultList(output.Results, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TranscriptEvent = (output: any, context: __SerdeContext): TranscriptEvent => {
  return {
    Transcript:
      output.Transcript !== undefined && output.Transcript !== null
        ? deserializeAws_restJson1Transcript(output.Transcript, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TranscriptResultStream = (
  output: any,
  context: __SerdeContext
): TranscriptResultStream => {
  if (output.BadRequestException !== undefined && output.BadRequestException !== null) {
    return {
      BadRequestException: deserializeAws_restJson1BadRequestException(output.BadRequestException, context),
    };
  }
  if (output.ConflictException !== undefined && output.ConflictException !== null) {
    return {
      ConflictException: deserializeAws_restJson1ConflictException(output.ConflictException, context),
    };
  }
  if (output.InternalFailureException !== undefined && output.InternalFailureException !== null) {
    return {
      InternalFailureException: deserializeAws_restJson1InternalFailureException(
        output.InternalFailureException,
        context
      ),
    };
  }
  if (output.LimitExceededException !== undefined && output.LimitExceededException !== null) {
    return {
      LimitExceededException: deserializeAws_restJson1LimitExceededException(output.LimitExceededException, context),
    };
  }
  if (output.ServiceUnavailableException !== undefined && output.ServiceUnavailableException !== null) {
    return {
      ServiceUnavailableException: deserializeAws_restJson1ServiceUnavailableException(
        output.ServiceUnavailableException,
        context
      ),
    };
  }
  if (output.TranscriptEvent !== undefined && output.TranscriptEvent !== null) {
    return {
      TranscriptEvent: deserializeAws_restJson1TranscriptEvent(output.TranscriptEvent, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
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
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

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
