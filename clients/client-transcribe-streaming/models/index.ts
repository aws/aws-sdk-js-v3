import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>A list of possible transcriptions for the audio.</p>
 */
export interface Alternative {
  __type?: "Alternative";
  /**
   * <p>One or more alternative interpretations of the input audio. </p>
   */
  Items?: Item[];

  /**
   * <p>The text that was transcribed from the audio.</p>
   */
  Transcript?: string;
}

export namespace Alternative {
  export const filterSensitiveLog = (obj: Alternative): any => ({
    ...obj
  });
  export const isa = (o: any): o is Alternative => __isa(o, "Alternative");
}

/**
 * <p>Provides a wrapper for the audio chunks that you are sending.</p>
 */
export interface AudioEvent {
  __type?: "AudioEvent";
  /**
   * <p>An audio blob that contains the next part of the audio that you want to transcribe.</p>
   */
  AudioChunk?: Uint8Array;
}

export namespace AudioEvent {
  export const filterSensitiveLog = (obj: AudioEvent): any => ({
    ...obj
  });
  export const isa = (o: any): o is AudioEvent => __isa(o, "AudioEvent");
}

/**
 * <p>Represents the audio stream from your application to Amazon Transcribe.</p>
 */
export type AudioStream =
  | AudioStream.AudioEventMember
  | AudioStream.$UnknownMember;

export namespace AudioStream {
  interface $Base {
    __type?: "AudioStream";
  }
  /**
   * <p>A blob of audio from your application. You audio stream consists of one or more audio
   *       events.</p>
   */
  export interface AudioEventMember extends $Base {
    AudioEvent: AudioEvent;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    AudioEvent?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    AudioEvent: (value: AudioEvent) => T;
    _: (name: string, value: any) => T;
  }
  export const visit = <T>(value: AudioStream, visitor: Visitor<T>): T => {
    if (value.AudioEvent !== undefined)
      return visitor.AudioEvent(value.AudioEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>One or more arguments to the <code>StartStreamTranscription</code> operation was invalid.
 *       For example, <code>MediaEncoding</code> was not set to <code>pcm</code> or
 *         <code>LanguageCode</code> was not set to a valid code. Check the parameters and try your
 *       request again.</p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BadRequestException =>
    __isa(o, "BadRequestException");
}

/**
 * <p>A new stream started with the same session ID. The current stream has been
 *       terminated.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictException =>
    __isa(o, "ConflictException");
}

/**
 * <p>A problem occurred while processing the audio. Amazon Transcribe terminated processing. Try your
 *       request again.</p>
 */
export interface InternalFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  Message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalFailureException =>
    __isa(o, "InternalFailureException");
}

/**
 * <p>A word or phrase transcribed from the input audio.</p>
 */
export interface Item {
  __type?: "Item";
  /**
   * <p>The word or punctuation that was recognized in the input audio.</p>
   */
  Content?: string;

  /**
   * <p>The offset from the beginning of the audio stream to the end of the audio that resulted in
   *       the item.</p>
   */
  EndTime?: number;

  /**
   * <p>The offset from the beginning of the audio stream to the beginning of the audio that
   *       resulted in the item.</p>
   */
  StartTime?: number;

  /**
   * <p>The type of the item. <code>PRONUNCIATION</code> indicates that the item is a word that
   *       was recognized in the input audio. <code>PUNCTUATION</code> indicates that the item was
   *       interpreted as a pause in the input audio.</p>
   */
  Type?: ItemType | string;
}

export namespace Item {
  export const filterSensitiveLog = (obj: Item): any => ({
    ...obj
  });
  export const isa = (o: any): o is Item => __isa(o, "Item");
}

export enum ItemType {
  PRONUNCIATION = "pronunciation",
  PUNCTUATION = "punctuation"
}

export enum LanguageCode {
  EN_AU = "en-AU",
  EN_GB = "en-GB",
  EN_US = "en-US",
  ES_US = "es-US",
  FR_CA = "fr-CA",
  FR_FR = "fr-FR"
}

/**
 * <p>You have exceeded the maximum number of concurrent transcription streams, are starting
 *       transcription streams too quickly, or the maximum audio length of 4 hours. Wait until a stream
 *       has finished processing, or break your audio stream into smaller chunks and try your request
 *       again.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export enum MediaEncoding {
  PCM = "pcm"
}

/**
 * <p>The result of transcribing a portion of the input audio stream. </p>
 */
export interface Result {
  __type?: "Result";
  /**
   * <p>A list of possible transcriptions for the audio. Each alternative typically contains one
   *         <code>item</code> that contains the result of the transcription.</p>
   */
  Alternatives?: Alternative[];

  /**
   * <p>The offset in seconds from the beginning of the audio stream to the end of the
   *       result.</p>
   */
  EndTime?: number;

  /**
   * <p>Amazon Transcribe divides the incoming audio stream into segments at natural points in the audio.
   *       Transcription results are returned based on these segments. </p>
   *          <p>The <code>IsPartial</code> field is <code>true</code> to indicate that Amazon Transcribe has
   *       additional transcription data to send, <code>false</code> to indicate that this is the last
   *       transcription result for the segment.</p>
   */
  IsPartial?: boolean;

  /**
   * <p>A unique identifier for the result. </p>
   */
  ResultId?: string;

  /**
   * <p>The offset in seconds from the beginning of the audio stream to the beginning of the
   *       result.</p>
   */
  StartTime?: number;
}

export namespace Result {
  export const filterSensitiveLog = (obj: Result): any => ({
    ...obj
  });
  export const isa = (o: any): o is Result => __isa(o, "Result");
}

export interface StartStreamTranscriptionRequest {
  __type?: "StartStreamTranscriptionRequest";
  /**
   * <p>PCM-encoded stream of audio blobs. The audio stream is encoded as an HTTP2 data
   *       frame.</p>
   */
  AudioStream: AsyncIterable<AudioStream> | undefined;

  /**
   * <p>Indicates the source language used in the input audio stream.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The encoding used for the input audio. </p>
   */
  MediaEncoding: MediaEncoding | string | undefined;

  /**
   * <p>The sample rate, in Hertz, of the input audio. We suggest that you use 8000 Hz for low
   *       quality audio and 16000 Hz for high quality audio.</p>
   */
  MediaSampleRateHertz: number | undefined;

  /**
   * <p>A identifier for the transcription session. Use this parameter when you want to retry a
   *       session. If you don't provide a session ID, Amazon Transcribe will generate one for you and return it in
   *       the response.</p>
   */
  SessionId?: string;

  /**
   * <p>The name of the vocabulary to use when processing the transcription job.</p>
   */
  VocabularyName?: string;
}

export namespace StartStreamTranscriptionRequest {
  export const filterSensitiveLog = (
    obj: StartStreamTranscriptionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartStreamTranscriptionRequest =>
    __isa(o, "StartStreamTranscriptionRequest");
}

export interface StartStreamTranscriptionResponse {
  __type?: "StartStreamTranscriptionResponse";
  /**
   * <p>The language code for the input audio stream.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The encoding used for the input audio stream.</p>
   */
  MediaEncoding?: MediaEncoding | string;

  /**
   * <p>The sample rate for the input audio stream. Use 8000 Hz for low quality audio and 16000 Hz
   *       for high quality audio.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>An identifier for the streaming transcription.</p>
   */
  RequestId?: string;

  /**
   * <p>An identifier for a specific transcription session.</p>
   */
  SessionId?: string;

  /**
   * <p>Represents the stream of transcription events from Amazon Transcribe to your application.</p>
   */
  TranscriptResultStream?: AsyncIterable<TranscriptResultStream>;

  /**
   * <p>The name of the vocabulary used when processing the job.</p>
   */
  VocabularyName?: string;
}

export namespace StartStreamTranscriptionResponse {
  export const filterSensitiveLog = (
    obj: StartStreamTranscriptionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartStreamTranscriptionResponse =>
    __isa(o, "StartStreamTranscriptionResponse");
}

/**
 * <p>The transcription in a <a>TranscriptEvent</a>.</p>
 */
export interface Transcript {
  __type?: "Transcript";
  /**
   * <p>
   *             <a>Result</a> objects that contain the results of transcribing a portion of the
   *       input audio stream. The array can be empty.</p>
   */
  Results?: Result[];
}

export namespace Transcript {
  export const filterSensitiveLog = (obj: Transcript): any => ({
    ...obj
  });
  export const isa = (o: any): o is Transcript => __isa(o, "Transcript");
}

/**
 * <p>Represents a set of transcription results from the server to the client. It contains one
 *       or more segments of the transcription.</p>
 */
export interface TranscriptEvent {
  __type?: "TranscriptEvent";
  /**
   * <p>The transcription of the audio stream. The transcription is composed of all of the items
   *       in the results list.</p>
   */
  Transcript?: Transcript;
}

export namespace TranscriptEvent {
  export const filterSensitiveLog = (obj: TranscriptEvent): any => ({
    ...obj
  });
  export const isa = (o: any): o is TranscriptEvent =>
    __isa(o, "TranscriptEvent");
}

/**
 * <p>Represents the transcription result stream from Amazon Transcribe to your application.</p>
 */
export type TranscriptResultStream =
  | TranscriptResultStream.BadRequestExceptionMember
  | TranscriptResultStream.ConflictExceptionMember
  | TranscriptResultStream.InternalFailureExceptionMember
  | TranscriptResultStream.LimitExceededExceptionMember
  | TranscriptResultStream.TranscriptEventMember
  | TranscriptResultStream.$UnknownMember;

export namespace TranscriptResultStream {
  interface $Base {
    __type?: "TranscriptResultStream";
  }
  /**
   * <p>A client error occurred when the stream was created. Check the parameters of the request
   *       and try your request again.</p>
   */
  export interface BadRequestExceptionMember extends $Base {
    BadRequestException: BadRequestException;
    ConflictException?: never;
    InternalFailureException?: never;
    LimitExceededException?: never;
    TranscriptEvent?: never;
    $unknown?: never;
  }
  /**
   * <p>A new stream started with the same session ID. The current stream has been
   *       terminated.</p>
   */
  export interface ConflictExceptionMember extends $Base {
    BadRequestException?: never;
    ConflictException: ConflictException;
    InternalFailureException?: never;
    LimitExceededException?: never;
    TranscriptEvent?: never;
    $unknown?: never;
  }
  /**
   * <p>A problem occurred while processing the audio. Amazon Transcribe terminated processing.</p>
   */
  export interface InternalFailureExceptionMember extends $Base {
    BadRequestException?: never;
    ConflictException?: never;
    InternalFailureException: InternalFailureException;
    LimitExceededException?: never;
    TranscriptEvent?: never;
    $unknown?: never;
  }
  /**
   * <p>Your client has exceeded one of the Amazon Transcribe limits, typically the limit on audio length.
   *       Break your audio stream into smaller chunks and try your request again.</p>
   */
  export interface LimitExceededExceptionMember extends $Base {
    BadRequestException?: never;
    ConflictException?: never;
    InternalFailureException?: never;
    LimitExceededException: LimitExceededException;
    TranscriptEvent?: never;
    $unknown?: never;
  }
  /**
   * <p>A portion of the transcription of the audio stream. Events are sent periodically from
   *       Amazon Transcribe to your application. The event can be a partial transcription of a section of the audio
   *       stream, or it can be the entire transcription of that portion of the audio stream.
   *       </p>
   */
  export interface TranscriptEventMember extends $Base {
    BadRequestException?: never;
    ConflictException?: never;
    InternalFailureException?: never;
    LimitExceededException?: never;
    TranscriptEvent: TranscriptEvent;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    BadRequestException?: never;
    ConflictException?: never;
    InternalFailureException?: never;
    LimitExceededException?: never;
    TranscriptEvent?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    BadRequestException: (value: BadRequestException) => T;
    ConflictException: (value: ConflictException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    LimitExceededException: (value: LimitExceededException) => T;
    TranscriptEvent: (value: TranscriptEvent) => T;
    _: (name: string, value: any) => T;
  }
  export const visit = <T>(
    value: TranscriptResultStream,
    visitor: Visitor<T>
  ): T => {
    if (value.BadRequestException !== undefined)
      return visitor.BadRequestException(value.BadRequestException);
    if (value.ConflictException !== undefined)
      return visitor.ConflictException(value.ConflictException);
    if (value.InternalFailureException !== undefined)
      return visitor.InternalFailureException(value.InternalFailureException);
    if (value.LimitExceededException !== undefined)
      return visitor.LimitExceededException(value.LimitExceededException);
    if (value.TranscriptEvent !== undefined)
      return visitor.TranscriptEvent(value.TranscriptEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}
