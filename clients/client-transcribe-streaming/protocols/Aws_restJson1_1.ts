import {
  StartStreamTranscriptionCommandInput,
  StartStreamTranscriptionCommandOutput
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
  Result,
  Transcript,
  TranscriptEvent,
  TranscriptResultStream
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  Message as __Message,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1StartStreamTranscriptionCommand(
  input: StartStreamTranscriptionCommandInput,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (isSerializableHeaderValue(input.LanguageCode)) {
    headers["x-amzn-transcribe-language-code"] = input.LanguageCode!;
  }
  if (isSerializableHeaderValue(input.MediaEncoding)) {
    headers["x-amzn-transcribe-media-encoding"] = input.MediaEncoding!;
  }
  if (isSerializableHeaderValue(input.MediaSampleRateHertz)) {
    headers[
      "x-amzn-transcribe-sample-rate"
    ] = input.MediaSampleRateHertz!.toString();
  }
  if (isSerializableHeaderValue(input.SessionId)) {
    headers["x-amzn-transcribe-session-id"] = input.SessionId!;
  }
  if (isSerializableHeaderValue(input.VocabularyName)) {
    headers["x-amzn-transcribe-vocabulary-name"] = input.VocabularyName!;
  }
  let resolvedPath = "/stream-transcription";
  let body: any;
  if (input.AudioStream !== undefined) {
    body = context.eventStreamMarshaller.serialize(input.AudioStream, event =>
      serializeAws_restJson1_1AudioStream_event(event, context)
    );
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
}

export async function deserializeAws_restJson1_1StartStreamTranscriptionCommand(
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartStreamTranscriptionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartStreamTranscriptionCommandError(
      output,
      context
    );
  }
  const contents: StartStreamTranscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartStreamTranscriptionResponse",
    LanguageCode: undefined,
    MediaEncoding: undefined,
    MediaSampleRateHertz: undefined,
    RequestId: undefined,
    SessionId: undefined,
    TranscriptResultStream: undefined,
    VocabularyName: undefined
  };
  if (output.headers["x-amzn-transcribe-language-code"] !== undefined) {
    contents.LanguageCode = output.headers["x-amzn-transcribe-language-code"];
  }
  if (output.headers["x-amzn-transcribe-media-encoding"] !== undefined) {
    contents.MediaEncoding = output.headers["x-amzn-transcribe-media-encoding"];
  }
  if (output.headers["x-amzn-transcribe-sample-rate"] !== undefined) {
    contents.MediaSampleRateHertz = parseInt(
      output.headers["x-amzn-transcribe-sample-rate"],
      10
    );
  }
  if (output.headers["x-amzn-request-id"] !== undefined) {
    contents.RequestId = output.headers["x-amzn-request-id"];
  }
  if (output.headers["x-amzn-transcribe-session-id"] !== undefined) {
    contents.SessionId = output.headers["x-amzn-transcribe-session-id"];
  }
  if (output.headers["x-amzn-transcribe-vocabulary-name"] !== undefined) {
    contents.VocabularyName =
      output.headers["x-amzn-transcribe-vocabulary-name"];
  }
  const data: any = context.eventStreamMarshaller.deserialize(
    output.body,
    async event => {
      const eventName = Object.keys(event)[0];
      const eventHeaders = Object.entries(event[eventName].headers).reduce(
        (accummulator, curr) => {
          accummulator[curr[0]] = curr[1].value;
          return accummulator;
        },
        {} as { [key: string]: any }
      );
      const eventMessage = {
        headers: eventHeaders,
        body: event[eventName].body
      };
      const parsedEvent = {
        [eventName]: eventMessage
      };
      return await deserializeAws_restJson1_1TranscriptResultStream_event(
        parsedEvent,
        context
      );
    }
  );
  contents.TranscriptResultStream = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartStreamTranscriptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamTranscriptionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe.streaming#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe.streaming#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe.streaming#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe.streaming#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
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
}

const serializeAws_restJson1_1AudioStream_event = (
  input: any,
  context: __SerdeContext
): __Message => {
  return AudioStream.visit(input, {
    AudioEvent: value =>
      serializeAws_restJson1_1AudioEvent_event(value, context),
    _: value => value as any
  });
};
const deserializeAws_restJson1_1TranscriptResultStream_event = async (
  output: any,
  context: __SerdeContext
): Promise<TranscriptResultStream> => {
  if (output["BadRequestException"] !== undefined) {
    return {
      BadRequestException: await deserializeAws_restJson1_1BadRequestException_event(
        output["BadRequestException"],
        context
      )
    };
  }
  if (output["ConflictException"] !== undefined) {
    return {
      ConflictException: await deserializeAws_restJson1_1ConflictException_event(
        output["ConflictException"],
        context
      )
    };
  }
  if (output["InternalFailureException"] !== undefined) {
    return {
      InternalFailureException: await deserializeAws_restJson1_1InternalFailureException_event(
        output["InternalFailureException"],
        context
      )
    };
  }
  if (output["LimitExceededException"] !== undefined) {
    return {
      LimitExceededException: await deserializeAws_restJson1_1LimitExceededException_event(
        output["LimitExceededException"],
        context
      )
    };
  }
  if (output["TranscriptEvent"] !== undefined) {
    return {
      TranscriptEvent: await deserializeAws_restJson1_1TranscriptEvent_event(
        output["TranscriptEvent"],
        context
      )
    };
  }
  return { $unknown: output };
};
const serializeAws_restJson1_1AudioEvent_event = (
  input: AudioEvent,
  context: __SerdeContext
): __Message => {
  const message: __Message = {
    headers: {
      ":event-type": { type: "string", value: "AudioEvent" },
      ":message-type": { type: "string", value: "event" }
    },
    body: new Uint8Array()
  };
  message.body = input.AudioChunk || message.body;
  return message;
};
const deserializeAws_restJson1_1BadRequestException_event = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  return deserializeAws_restJson1_1BadRequestExceptionResponse(
    parsedOutput,
    context
  );
};
const deserializeAws_restJson1_1ConflictException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  return deserializeAws_restJson1_1ConflictExceptionResponse(
    parsedOutput,
    context
  );
};
const deserializeAws_restJson1_1InternalFailureException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  return deserializeAws_restJson1_1InternalFailureExceptionResponse(
    parsedOutput,
    context
  );
};
const deserializeAws_restJson1_1LimitExceededException_event = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  return deserializeAws_restJson1_1LimitExceededExceptionResponse(
    parsedOutput,
    context
  );
};
const deserializeAws_restJson1_1TranscriptEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<TranscriptEvent> => {
  let contents: TranscriptEvent = {
    __type: "TranscriptEvent"
  } as any;
  const data: any = await parseBody(output.body, context);
  contents = {
    ...contents,
    ...deserializeAws_restJson1_1TranscriptEvent(data, context)
  } as any;
  return contents;
};
const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
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

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
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

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
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

const serializeAws_restJson1_1AudioEvent = (
  input: AudioEvent,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioChunk !== undefined) {
    bodyParams["AudioChunk"] = context.base64Encoder(input.AudioChunk);
  }
  return bodyParams;
};

const serializeAws_restJson1_1AudioStream = (
  input: AudioStream,
  context: __SerdeContext
): any => {
  return AudioStream.visit(input, {
    AudioEvent: value => serializeAws_restJson1_1AudioEvent(value, context),
    _: value => value
  });
};

const deserializeAws_restJson1_1Alternative = (
  output: any,
  context: __SerdeContext
): Alternative => {
  let contents: any = {
    __type: "Alternative",
    Items: undefined,
    Transcript: undefined
  };
  if (output.Items !== undefined && output.Items !== null) {
    contents.Items = deserializeAws_restJson1_1ItemList(output.Items, context);
  }
  if (output.Transcript !== undefined && output.Transcript !== null) {
    contents.Transcript = output.Transcript;
  }
  return contents;
};

const deserializeAws_restJson1_1AlternativeList = (
  output: any,
  context: __SerdeContext
): Alternative[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Alternative(entry, context)
  );
};

const deserializeAws_restJson1_1Item = (
  output: any,
  context: __SerdeContext
): Item => {
  let contents: any = {
    __type: "Item",
    Content: undefined,
    EndTime: undefined,
    StartTime: undefined,
    Type: undefined
  };
  if (output.Content !== undefined && output.Content !== null) {
    contents.Content = output.Content;
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = output.EndTime;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = output.StartTime;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ItemList = (
  output: any,
  context: __SerdeContext
): Item[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Item(entry, context)
  );
};

const deserializeAws_restJson1_1Result = (
  output: any,
  context: __SerdeContext
): Result => {
  let contents: any = {
    __type: "Result",
    Alternatives: undefined,
    EndTime: undefined,
    IsPartial: undefined,
    ResultId: undefined,
    StartTime: undefined
  };
  if (output.Alternatives !== undefined && output.Alternatives !== null) {
    contents.Alternatives = deserializeAws_restJson1_1AlternativeList(
      output.Alternatives,
      context
    );
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = output.EndTime;
  }
  if (output.IsPartial !== undefined && output.IsPartial !== null) {
    contents.IsPartial = output.IsPartial;
  }
  if (output.ResultId !== undefined && output.ResultId !== null) {
    contents.ResultId = output.ResultId;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = output.StartTime;
  }
  return contents;
};

const deserializeAws_restJson1_1ResultList = (
  output: any,
  context: __SerdeContext
): Result[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Result(entry, context)
  );
};

const deserializeAws_restJson1_1Transcript = (
  output: any,
  context: __SerdeContext
): Transcript => {
  let contents: any = {
    __type: "Transcript",
    Results: undefined
  };
  if (output.Results !== undefined && output.Results !== null) {
    contents.Results = deserializeAws_restJson1_1ResultList(
      output.Results,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1TranscriptEvent = (
  output: any,
  context: __SerdeContext
): TranscriptEvent => {
  let contents: any = {
    __type: "TranscriptEvent",
    Transcript: undefined
  };
  if (output.Transcript !== undefined && output.Transcript !== null) {
    contents.Transcript = deserializeAws_restJson1_1Transcript(
      output.Transcript,
      context
    );
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

function isSerializableHeaderValue(value: any): boolean {
  return (
    value !== undefined &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") ||
      value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0)
  );
}

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};

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
