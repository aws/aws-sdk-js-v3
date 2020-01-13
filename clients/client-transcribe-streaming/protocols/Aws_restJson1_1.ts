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
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1StartStreamTranscriptionCommand(
  input: StartStreamTranscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.LanguageCode !== undefined) {
    headers["x-amzn-transcribe-language-code"] = input.LanguageCode.toString();
  }
  if (input.MediaEncoding !== undefined) {
    headers[
      "x-amzn-transcribe-media-encoding"
    ] = input.MediaEncoding.toString();
  }
  if (input.MediaSampleRateHertz !== undefined) {
    headers[
      "x-amzn-transcribe-sample-rate"
    ] = input.MediaSampleRateHertz.toString();
  }
  if (input.SessionId !== undefined) {
    headers["x-amzn-transcribe-session-id"] = input.SessionId.toString();
  }
  if (input.VocabularyName !== undefined) {
    headers[
      "x-amzn-transcribe-vocabulary-name"
    ] = input.VocabularyName.toString();
  }
  let resolvedPath = "/stream-transcription";
  let body: any = {};
  if (input.AudioStream !== undefined) {
    body = serializeAws_restJson1_1AudioStream(input.AudioStream, context);
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1StartStreamTranscriptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamTranscriptionCommandOutput> {
  if (output.statusCode !== 200) {
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
  const data: any = await parseBody(output.body, context);
  contents.TranscriptResultStream = deserializeAws_restJson1_1TranscriptResultStream(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartStreamTranscriptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamTranscriptionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe.streaming#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe.streaming#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe.streaming#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe.streaming#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.transcribe.streaming#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    __type: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    __type: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1AudioEvent = (
  input: AudioEvent,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  if (output.Items !== undefined) {
    contents.Items = deserializeAws_restJson1_1ItemList(output.Items, context);
  }
  if (output.Transcript !== undefined) {
    contents.Transcript = output.Transcript;
  }
  return contents;
};

const deserializeAws_restJson1_1AlternativeList = (
  output: any,
  context: __SerdeContext
): Array<Alternative> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Alternative(entry, context)
  );
};

const deserializeAws_restJson1_1BadRequestException = (
  output: any,
  context: __SerdeContext
): BadRequestException => {
  let contents: any = {
    __type: "BadRequestException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictException = (
  output: any,
  context: __SerdeContext
): ConflictException => {
  let contents: any = {
    __type: "ConflictException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalFailureException = (
  output: any,
  context: __SerdeContext
): InternalFailureException => {
  let contents: any = {
    __type: "InternalFailureException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
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
  if (output.Content !== undefined) {
    contents.Content = output.Content;
  }
  if (output.EndTime !== undefined) {
    contents.EndTime = output.EndTime;
  }
  if (output.StartTime !== undefined) {
    contents.StartTime = output.StartTime;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ItemList = (
  output: any,
  context: __SerdeContext
): Array<Item> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Item(entry, context)
  );
};

const deserializeAws_restJson1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
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
  if (output.Alternatives !== undefined) {
    contents.Alternatives = deserializeAws_restJson1_1AlternativeList(
      output.Alternatives,
      context
    );
  }
  if (output.EndTime !== undefined) {
    contents.EndTime = output.EndTime;
  }
  if (output.IsPartial !== undefined) {
    contents.IsPartial = output.IsPartial;
  }
  if (output.ResultId !== undefined) {
    contents.ResultId = output.ResultId;
  }
  if (output.StartTime !== undefined) {
    contents.StartTime = output.StartTime;
  }
  return contents;
};

const deserializeAws_restJson1_1ResultList = (
  output: any,
  context: __SerdeContext
): Array<Result> => {
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
  if (output.Results !== undefined) {
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
  if (output.Transcript !== undefined) {
    contents.Transcript = deserializeAws_restJson1_1Transcript(
      output.Transcript,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1TranscriptResultStream = (
  output: any,
  context: __SerdeContext
): TranscriptResultStream => {
  if (output.BadRequestException !== undefined) {
    return {
      BadRequestException: deserializeAws_restJson1_1BadRequestException(
        output.BadRequestException,
        context
      )
    };
  }
  if (output.ConflictException !== undefined) {
    return {
      ConflictException: deserializeAws_restJson1_1ConflictException(
        output.ConflictException,
        context
      )
    };
  }
  if (output.InternalFailureException !== undefined) {
    return {
      InternalFailureException: deserializeAws_restJson1_1InternalFailureException(
        output.InternalFailureException,
        context
      )
    };
  }
  if (output.LimitExceededException !== undefined) {
    return {
      LimitExceededException: deserializeAws_restJson1_1LimitExceededException(
        output.LimitExceededException,
        context
      )
    };
  }
  if (output.TranscriptEvent !== undefined) {
    return {
      TranscriptEvent: deserializeAws_restJson1_1TranscriptEvent(
        output.TranscriptEvent,
        context
      )
    };
  }
  const key = Object.keys(output)[0];
  return { $unknown: [key, output[key]] };
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
  return context.streamCollector(streamBody) || new Uint8Array();
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
