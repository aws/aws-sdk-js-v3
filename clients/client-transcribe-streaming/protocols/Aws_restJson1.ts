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
  InternalFailureException,
  Item,
  LimitExceededException,
  MedicalAlternative,
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
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  Message as __Message,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1StartMedicalStreamTranscriptionCommand = async (
  input: StartMedicalStreamTranscriptionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> => {
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
  };
  let resolvedPath = "/medical-stream-transcription";
  let body: any;
  if (input.AudioStream !== undefined) {
    body = context.eventStreamMarshaller.serialize(input.AudioStream, (event) =>
      serializeAws_restJson1AudioStream_event(event, context)
    );
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  };
  let resolvedPath = "/stream-transcription";
  let body: any;
  if (input.AudioStream !== undefined) {
    body = context.eventStreamMarshaller.serialize(input.AudioStream, (event) =>
      serializeAws_restJson1AudioStream_event(event, context)
    );
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
    contents.MediaSampleRateHertz = parseInt(output.headers["x-amzn-transcribe-sample-rate"], 10);
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
    contents.ShowSpeakerLabel = output.headers["x-amzn-transcribe-show-speaker-label"] === "true";
  }
  if (output.headers["x-amzn-transcribe-session-id"] !== undefined) {
    contents.SessionId = output.headers["x-amzn-transcribe-session-id"];
  }
  if (output.headers["x-amzn-transcribe-enable-channel-identification"] !== undefined) {
    contents.EnableChannelIdentification = output.headers["x-amzn-transcribe-enable-channel-identification"] === "true";
  }
  if (output.headers["x-amzn-transcribe-number-of-channels"] !== undefined) {
    contents.NumberOfChannels = parseInt(output.headers["x-amzn-transcribe-number-of-channels"], 10);
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
    EnableChannelIdentification: undefined,
    LanguageCode: undefined,
    MediaEncoding: undefined,
    MediaSampleRateHertz: undefined,
    NumberOfChannels: undefined,
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
    contents.MediaSampleRateHertz = parseInt(output.headers["x-amzn-transcribe-sample-rate"], 10);
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
    contents.ShowSpeakerLabel = output.headers["x-amzn-transcribe-show-speaker-label"] === "true";
  }
  if (output.headers["x-amzn-transcribe-enable-channel-identification"] !== undefined) {
    contents.EnableChannelIdentification = output.headers["x-amzn-transcribe-enable-channel-identification"] === "true";
  }
  if (output.headers["x-amzn-transcribe-number-of-channels"] !== undefined) {
    contents.NumberOfChannels = parseInt(output.headers["x-amzn-transcribe-number-of-channels"], 10);
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
    contents.Message = data.Message;
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
    contents.Message = data.Message;
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
    contents.Message = data.Message;
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
    contents.Message = data.Message;
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
    contents.Message = data.Message;
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
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_restJson1ItemList(output.Items, context)
        : undefined,
    Transcript: output.Transcript !== undefined && output.Transcript !== null ? output.Transcript : undefined,
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

const deserializeAws_restJson1Item = (output: any, context: __SerdeContext): Item => {
  return {
    Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
    Speaker: output.Speaker !== undefined && output.Speaker !== null ? output.Speaker : undefined,
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    VocabularyFilterMatch:
      output.VocabularyFilterMatch !== undefined && output.VocabularyFilterMatch !== null
        ? output.VocabularyFilterMatch
        : undefined,
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

const deserializeAws_restJson1MedicalAlternative = (output: any, context: __SerdeContext): MedicalAlternative => {
  return {
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_restJson1MedicalItemList(output.Items, context)
        : undefined,
    Transcript: output.Transcript !== undefined && output.Transcript !== null ? output.Transcript : undefined,
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

const deserializeAws_restJson1MedicalItem = (output: any, context: __SerdeContext): MedicalItem => {
  return {
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
    Speaker: output.Speaker !== undefined && output.Speaker !== null ? output.Speaker : undefined,
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
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
    ChannelId: output.ChannelId !== undefined && output.ChannelId !== null ? output.ChannelId : undefined,
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
    IsPartial: output.IsPartial !== undefined && output.IsPartial !== null ? output.IsPartial : undefined,
    ResultId: output.ResultId !== undefined && output.ResultId !== null ? output.ResultId : undefined,
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
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

const deserializeAws_restJson1Result = (output: any, context: __SerdeContext): Result => {
  return {
    Alternatives:
      output.Alternatives !== undefined && output.Alternatives !== null
        ? deserializeAws_restJson1AlternativeList(output.Alternatives, context)
        : undefined,
    ChannelId: output.ChannelId !== undefined && output.ChannelId !== null ? output.ChannelId : undefined,
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
    IsPartial: output.IsPartial !== undefined && output.IsPartial !== null ? output.IsPartial : undefined,
    ResultId: output.ResultId !== undefined && output.ResultId !== null ? output.ResultId : undefined,
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
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
