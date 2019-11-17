import {
  StartStreamTranscriptionRequest,
  StartStreamTranscriptionResponse,
  AudioStream,
  TranscriptEvent,
  TranscriptResultStream,
  BadRequestException,
  ConflictException,
  InternalFailureException,
  LimitExceededException,
  AudioEvent
} from "../models";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import {
  SerdeContext,
  HeaderBag,
  ResponseMetadata,
  RequestSigner
} from "@aws-sdk/types";
// TODO move to SerdeContext
import { EventStreamMarshaller } from "@aws-sdk/util-eventstream-node";
//TODO move to @aws-sdk/types
import { Message } from "@aws-sdk/eventstream-marshaller";

export async function startStreamTranscriptionAwsJson1_1Serialize(
  input: StartStreamTranscriptionRequest,
  context: SerdeContext & { signer: RequestSigner }
): Promise<HttpRequest> {
  let body: any = {};

  let headers: HeaderBag = {
    "Content-Type": "application/json"
  };

  if (input.MediaEncoding !== undefined) {
    headers["x-amzn-transcribe-media-encoding"] = input.MediaEncoding;
  }

  if (input.VocabularyName !== undefined) {
    headers["x-amzn-transcribe-vocabulary-name"] = input.VocabularyName;
  }

  if (input.SessionId !== undefined) {
    headers["x-amzn-transcribe-session-id"] = input.SessionId;
  }

  if (input.LanguageCode !== undefined) {
    headers["x-amzn-transcribe-language-code"] = input.LanguageCode;
  }

  if (input.MediaSampleRateHertz !== undefined) {
    headers[
      "x-amzn-transcribe-sample-rate"
    ] = input.MediaSampleRateHertz.toString();
  }

  if (input.AudioStream !== undefined) {
    const request = new HttpRequest({
      ...context.endpoint,
      path: "/stream-transcription",
      method: "POST",
      protocol: "https:",
      headers: headers
    });
    const signed = await context.signer.sign(request);
    signed.body = audioStreamAwsJson1_1Serialize(input.AudioStream, {
      ...context,
      signature: signed.headers["authorization"]
    });
    return signed;
  }

  return new HttpRequest({
    ...context.endpoint,
    body: body,
    path: "/stream-transcription",
    method: "POST",
    protocol: "https:",
    headers: headers
  });
}

export async function transcriptEventAwsJson1_1Deserialize(
  output: any
): Promise<TranscriptEvent> {
  return Promise.resolve({
    __type: "com.amazonaws.transcribe.streaming#TranscriptEvent"
    //fake deserializing
  });
}

export async function startStreamTranscriptionAwsJson1_1Deserialize(
  output: HttpResponse,
  context: SerdeContext
): Promise<StartStreamTranscriptionResponse> {
  if (output.statusCode !== 200) {
    return startStreamTranscriptionAwsJson1_1DeserializeError(output);
  }
  return Promise.resolve({
    $metadata: deserializeMetadata(output),
    __type:
      "com.amazonaws.transcribe.streaming#StartStreamTranscriptionResponse",
    TranscriptResultStream: transcriptResultStreamAwsJson1_1Deserialize(
      output.body,
      context
    ),
    LanguageCode: output.headers["x-amzn-transcribe-language-code"],
    SessionId: output.headers["x-amzn-transcribe-session-id"],
    MediaSampleRateHertz: parseInt(
      output.headers["x-amzn-transcribe-sample-rate"]
    ),
    MediaEncoding: output.headers["x-amzn-transcribe-media-encoding"],
    RequestId: output.headers["x-amzn-request-id"],
    VocabularyName: output.headers["x-amzn-transcribe-vocabulary-name"]
  });
}

async function startStreamTranscriptionAwsJson1_1DeserializeError(
  output: HttpResponse
): Promise<StartStreamTranscriptionResponse> {
  return Promise.reject({
    __type: "com.amazonaws.transcribe.streaming#UnknownException",
    $name: "UnknownException",
    $fault: "server"
  });
}

async function audioStreamAwsJson1_1Serialize(
  input: AsyncIterable<AudioStream>,
  context: SerdeContext & { signature: string } //need initial signature to sign events
): Promise<any> {
  const marshaller = new EventStreamMarshaller(
    context.utf8Encoder,
    context.utf8Decoder
  );
  return marshaller.serialize(input, (event: any) =>
    AudioStream.visit(event, {
      AudioEvent: value => audioEventAwsJson1_1Serialize(value, context),
      _: value => {
        value;
      }
    })
  );
}

const audioEventAwsJson1_1Serialize = (
  input: any,
  context: SerdeContext
): any => ({
  AudioChunk: input.AudioChunk
});

const transcriptResultStreamAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): any => {
  const marshaller = new EventStreamMarshaller(
    context.utf8Encoder,
    context.utf8Decoder
  );
  return marshaller.deserialize<TranscriptResultStream>(output, (event: any) =>
    TranscriptResultStream.visit(event, {
      InternalFailureException: value =>
        internalFailureExceptionDeserialzie(value),
      TranscriptEvent: value => transcriptEventAwsJson1_1Deserialize(value),
      ConflictException: value => conflictExceptionDeserialize(value),
      LimitExceededException: value => limitExceededExceptionDeserialize(value),
      BadRequestException: value => badRequestExceptionDeserialzie(value),
      _: value => value
    })
  );
};

const badRequestExceptionDeserialzie = (output: any) => {
  let exception: any = {
    __type: "com.amazonaws.transcribe.streaming#BadRequestException",
    $name: "BadRequestException",
    $fault: "client"
  };

  if (output.Message !== undefined) {
    exception.Message = output.Message;
  }

  return exception;
};

const conflictExceptionDeserialize = (output: any): ConflictException => {
  let exception: ConflictException = {
    __type: "com.amazonaws.transcribe.streaming#ConflictException",
    $name: "ConflictException",
    $fault: "client"
  };

  if (output.Message !== undefined) {
    exception.Message = output.Message;
  }

  return exception;
};

const internalFailureExceptionDeserialzie = (
  output: any
): InternalFailureException => {
  let exception: InternalFailureException = {
    __type: "com.amazonaws.transcribe.streaming#InternalFailureException",
    $name: "InternalFailureException",
    $fault: "server"
  };
  if (output.Message !== undefined) {
    exception.Message = output.Message;
  }
  return exception;
};

const limitExceededExceptionDeserialize = (
  output: any
): LimitExceededException => {
  let exception: LimitExceededException = {
    __type: "com.amazonaws.transcribe.streaming#LimitExceededException",
    $name: "LimitExceededException",
    $fault: "client"
  };

  if (output.Message !== undefined) {
    exception.Message = output.Message;
  }
  return exception;
};

const deserializeMetadata = (output: HttpResponse): ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});
