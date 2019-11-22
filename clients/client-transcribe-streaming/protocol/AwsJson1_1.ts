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
  AudioEvent,
  Result,
  Transcript,
  Alternative,
  Item
} from "../models";
import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  SerdeContext,
  HeaderBag,
  ResponseMetadata,
  RequestSigner,
  HttpRequest as IHttpRequest,
  HttpResponse as IHttpResponse
} from "@aws-sdk/types";
// TODO move to SerdeContext
import { EventStreamMarshaller } from "@aws-sdk/util-eventstream-node";
//TODO move to @aws-sdk/types
import { Message } from "@aws-sdk/eventstream-marshaller";

export async function startStreamTranscriptionAwsJson1_1Serialize(
  input: StartStreamTranscriptionRequest,
  context: SerdeContext & {
    eventStreamSerde: EventStreamMarshaller;
    signer: RequestSigner;
  }
): Promise<IHttpRequest> {
  let body: any = {};

  let headers: HeaderBag = {
    "content-type": "application/vnd.amazon.eventstream",
    "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS",
    "x-amz-target":
      "com.amazonaws.transcribe.Transcribe.StartStreamTranscription",
    ":authority": ""
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
    const signature = signed.headers["authorization"].match(
      /Signature=([\w]+)$/
    )![1];
    signed.body = audioStreamAwsJson1_1Serialize(input.AudioStream, {
      ...context,
      signature
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

/**event deserializer will be more like command deserializer */
export function transcriptEventAwsJson1_1Deserialize(
  output: any,
  context: SerdeContext
): TranscriptEvent {
  const body = JSON.parse(context.utf8Encoder(output.body));
  return {
    __type: "com.amazonaws.transcribe.streaming#TranscriptEvent",
    Transcript: transcriptAwsJson1_1Deserialize(body.Transcript, context)
  };
}

const transcriptAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Transcript => ({
  Results: resultsListtAwsJson1_1Deserialize(output.Results, context)
});

const resultsListtAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Array<Result> =>
  (output || []).map((result: any) =>
    resultAwsJson1_1Deserialize(result, context)
  );

const resultAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Result => ({
  ResultId: output.ResultId,
  StartTime: output.StartTime,
  EndTime: output.EndTime,
  IsPartial: output.IsPartial,
  Alternatives: alternativeListAwsJson1_1Deserialize(
    output.Alternatives,
    context
  )
});

const alternativeListAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Array<Alternative> =>
  (output || []).map((alternative: any) =>
    alternativeAwsJson1_1Deserialize(alternative, context)
  );

const alternativeAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Alternative => ({
  Transcript: output.Transcribe,
  Items: itemListAwsJson1_1Deserialize(output.Items, context)
});

const itemListAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Array<Item> =>
  (output || []).map((item: any) => itemAwsJson1_1Deserialize(item, context));

const itemAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext
): Item => ({
  StartTime: output.StartTime,
  EndTime: output.EndTime,
  Type: output.Type,
  Content: output.Content
});

export async function startStreamTranscriptionAwsJson1_1Deserialize(
  output: IHttpResponse,
  context: SerdeContext & { eventStreamSerde: EventStreamMarshaller }
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
  output: IHttpResponse
): Promise<StartStreamTranscriptionResponse> {
  return Promise.reject({
    __type: "com.amazonaws.transcribe.streaming#UnknownException",
    $name: "UnknownException",
    $fault: "server"
  });
}

function audioStreamAwsJson1_1Serialize(
  input: AsyncIterable<AudioStream>,
  context: SerdeContext & {
    eventStreamSerde: EventStreamMarshaller;
    signature: string;
  } //need initial signature to sign events
): any {
  return context.eventStreamSerde.serialize(
    input,
    context.signature,
    (event: any) =>
      AudioStream.visit<Message>(event, {
        AudioEvent: value => audioEventAwsJson1_1Serialize(value, context),
        _: (name, value) => ({ headers: {}, body: value })
      })
  );
}

const audioEventAwsJson1_1Serialize = (
  input: AudioEvent,
  context: SerdeContext
): Message => ({
  headers: {
    ":event-type": { type: "string", value: "AudioEvent" },
    ":content-type": { type: "string", value: "application/octet-stream" },
    ":message-type": { type: "string", value: "event" }
  },
  body: input.AudioChunk!
});

const transcriptResultStreamAwsJson1_1Deserialize = (
  output: any,
  context: SerdeContext & { eventStreamSerde: EventStreamMarshaller }
): any => {
  return context.eventStreamSerde.deserialize(output, (event: any) =>
    TranscriptResultStream.visit(event, {
      InternalFailureException: value =>
        internalFailureExceptionDeserialzie(value, context),
      TranscriptEvent: value =>
        transcriptEventAwsJson1_1Deserialize(value, context),
      ConflictException: value => conflictExceptionDeserialize(value, context),
      LimitExceededException: value =>
        limitExceededExceptionDeserialize(value, context),
      BadRequestException: value =>
        badRequestExceptionDeserialzie(value, context),
      _: value => value
    })
  );
};

const badRequestExceptionDeserialzie = (output: any, context: SerdeContext) => {
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

const conflictExceptionDeserialize = (
  output: any,
  context: SerdeContext
): ConflictException => {
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
  output: any,
  context: SerdeContext
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
  output: any,
  context: SerdeContext
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

const deserializeMetadata = (output: IHttpResponse): ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});
