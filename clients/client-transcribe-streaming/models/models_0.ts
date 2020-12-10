import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum ItemType {
  PRONUNCIATION = "pronunciation",
  PUNCTUATION = "punctuation",
}

/**
 * <p>A word or phrase transcribed from the input audio.</p>
 */
export interface Item {
  /**
   * <p>The offset from the beginning of the audio stream to the beginning of the audio that
   *       resulted in the item.</p>
   */
  StartTime?: number;

  /**
   * <p>The offset from the beginning of the audio stream to the end of the audio that resulted in
   *       the item.</p>
   */
  EndTime?: number;

  /**
   * <p>The type of the item. <code>PRONUNCIATION</code> indicates that the item is a word that
   *       was recognized in the input audio. <code>PUNCTUATION</code> indicates that the item was
   *       interpreted as a pause in the input audio.</p>
   */
  Type?: ItemType | string;

  /**
   * <p>The word or punctuation that was recognized in the input audio.</p>
   */
  Content?: string;

  /**
   * <p>Indicates whether a word in the item matches a word in the vocabulary filter you've chosen
   *       for your real-time stream. If <code>true</code> then a word in the item matches your
   *       vocabulary filter.</p>
   */
  VocabularyFilterMatch?: boolean;

  /**
   * <p>If speaker identification is enabled, shows the speakers identified in the real-time stream.</p>
   */
  Speaker?: string;
}

export namespace Item {
  export const filterSensitiveLog = (obj: Item): any => ({
    ...obj,
  });
}

/**
 * <p>A list of possible transcriptions for the audio.</p>
 */
export interface Alternative {
  /**
   * <p>The text that was transcribed from the audio.</p>
   */
  Transcript?: string;

  /**
   * <p>One or more alternative interpretations of the input audio. </p>
   */
  Items?: Item[];
}

export namespace Alternative {
  export const filterSensitiveLog = (obj: Alternative): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a wrapper for the audio chunks that you are sending.</p>
 */
export interface AudioEvent {
  /**
   * <p>An audio blob that contains the next part of the audio that you want to transcribe.</p>
   */
  AudioChunk?: Uint8Array;
}

export namespace AudioEvent {
  export const filterSensitiveLog = (obj: AudioEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the audio stream from your application to Amazon Transcribe.</p>
 */
export type AudioStream = AudioStream.AudioEventMember | AudioStream.$UnknownMember;

export namespace AudioStream {
  /**
   * <p>A blob of audio from your application. You audio stream consists of one or more audio
   *       events.</p>
   */
  export interface AudioEventMember {
    AudioEvent: AudioEvent;
    $unknown?: never;
  }

  export interface $UnknownMember {
    AudioEvent?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    AudioEvent: (value: AudioEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AudioStream, visitor: Visitor<T>): T => {
    if (value.AudioEvent !== undefined) return visitor.AudioEvent(value.AudioEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: AudioStream): any => {
    if (obj.AudioEvent !== undefined) return { AudioEvent: AudioEvent.filterSensitiveLog(obj.AudioEvent) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>One or more arguments to the <code>StartStreamTranscription</code> or <code>StartMedicalStreamTranscription</code> operation was invalid.
 *       For example, <code>MediaEncoding</code> was not set to a valid encoding, or
 *         <code>LanguageCode</code> was not set to a valid code. Check the parameters and try your
 *       request again.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
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
    ...obj,
  });
}

/**
 * <p>A problem occurred while processing the audio. Amazon Transcribe or Amazon Transcribe Medical terminated processing. Try your
 *       request again.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  Message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

export enum LanguageCode {
  DE_DE = "de-DE",
  EN_AU = "en-AU",
  EN_GB = "en-GB",
  EN_US = "en-US",
  ES_US = "es-US",
  FR_CA = "fr-CA",
  FR_FR = "fr-FR",
  IT_IT = "it-IT",
  JA_JP = "ja-JP",
  KO_KR = "ko-KR",
  PT_BR = "pt-BR",
}

/**
 * <p>You have exceeded the maximum number of concurrent transcription streams, are starting
 *       transcription streams too quickly, or the maximum audio length of 4 hours. Wait until a stream
 *       has finished processing, or break your audio stream into smaller chunks and try your request
 *       again.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export enum MediaEncoding {
  FLAC = "flac",
  OGG_OPUS = "ogg-opus",
  PCM = "pcm",
}

/**
 * <p>A word or punctuation that is transcribed from the input audio.</p>
 */
export interface MedicalItem {
  /**
   * <p>The number of seconds into an audio stream that indicates the creation time of an
   *             item.</p>
   */
  StartTime?: number;

  /**
   * <p>The number of seconds into an audio stream that indicates the creation time of an
   *             item.</p>
   */
  EndTime?: number;

  /**
   * <p>The type of the item. <code>PRONUNCIATION</code> indicates that the item is a word
   *             that was recognized in the input audio. <code>PUNCTUATION</code> indicates that the item
   *             was interpreted as a pause in the input audio, such as a period to indicate the end of a
   *             sentence.</p>
   */
  Type?: ItemType | string;

  /**
   * <p>The word or punctuation mark that was recognized in the input audio.</p>
   */
  Content?: string;

  /**
   * <p>A value between 0 and 1 for an item that is a confidence score that Amazon Transcribe Medical
   *             assigns to each word that it transcribes.</p>
   */
  Confidence?: number;

  /**
   * <p>If speaker identification is enabled, shows the integer values that correspond to the
   *             different speakers identified in the stream. For example, if the value of
   *                 <code>Speaker</code> in the stream is either a <code>0</code> or a <code>1</code>,
   *             that indicates that Amazon Transcribe Medical has identified two speakers in the stream. The value of
   *                 <code>0</code> corresponds to one speaker and the value of <code>1</code>
   *             corresponds to the other speaker.</p>
   */
  Speaker?: string;
}

export namespace MedicalItem {
  export const filterSensitiveLog = (obj: MedicalItem): any => ({
    ...obj,
  });
}

/**
 * <p>A list of possible transcriptions for the audio.</p>
 */
export interface MedicalAlternative {
  /**
   * <p>The text that was transcribed from the audio.</p>
   */
  Transcript?: string;

  /**
   * <p>A list of objects that contains words and punctuation marks that represents one or more
   *             interpretations of the input audio.</p>
   */
  Items?: MedicalItem[];
}

export namespace MedicalAlternative {
  export const filterSensitiveLog = (obj: MedicalAlternative): any => ({
    ...obj,
  });
}

/**
 * <p>The results of transcribing a portion of the input audio stream.</p>
 */
export interface MedicalResult {
  /**
   * <p>A unique identifier for the result.</p>
   */
  ResultId?: string;

  /**
   * <p>The time, in seconds, from the beginning of the audio stream to the beginning of the
   *             result.</p>
   */
  StartTime?: number;

  /**
   * <p>The time, in seconds, from the beginning of the audio stream to the end of the
   *             result.</p>
   */
  EndTime?: number;

  /**
   * <p>Amazon Transcribe Medical divides the incoming audio stream into segments at natural points in the audio.
   *             Transcription results are returned based on these segments.</p>
   *         <p>The <code>IsPartial</code> field is <code>true</code> to indicate that Amazon Transcribe Medical has
   *             additional transcription data to send. The <code>IsPartial</code> field is
   *                 <code>false</code> to indicate that this is the last transcription result for the
   *             segment.</p>
   */
  IsPartial?: boolean;

  /**
   * <p>A list of possible transcriptions of the audio. Each alternative typically contains
   *             one <code>Item</code> that contains the result of the transcription.</p>
   */
  Alternatives?: MedicalAlternative[];

  /**
   * <p>When channel identification is enabled, Amazon Transcribe Medical transcribes the speech from each audio
   *             channel separately.</p>
   *         <p>You can use <code>ChannelId</code> to retrieve the transcription results for a single
   *             channel in your audio stream.</p>
   */
  ChannelId?: string;
}

export namespace MedicalResult {
  export const filterSensitiveLog = (obj: MedicalResult): any => ({
    ...obj,
  });
}

/**
 * <p>The medical transcript in a <a>MedicalTranscriptEvent</a>.</p>
 */
export interface MedicalTranscript {
  /**
   * <p>
   *             <a>MedicalResult</a> objects that contain the results of transcribing a
   *             portion of the input audio stream. The array can be empty.</p>
   */
  Results?: MedicalResult[];
}

export namespace MedicalTranscript {
  export const filterSensitiveLog = (obj: MedicalTranscript): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a set of transcription results from the server to the client. It contains
 *             one or more segments of the transcription.</p>
 */
export interface MedicalTranscriptEvent {
  /**
   * <p>The transcription of the audio stream. The transcription is composed of all of the
   *             items in the results list.</p>
   */
  Transcript?: MedicalTranscript;
}

export namespace MedicalTranscriptEvent {
  export const filterSensitiveLog = (obj: MedicalTranscriptEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Service is currently unavailable. Try your request later.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the transcription result stream from Amazon Transcribe Medical to your application.</p>
 */
export type MedicalTranscriptResultStream =
  | MedicalTranscriptResultStream.BadRequestExceptionMember
  | MedicalTranscriptResultStream.ConflictExceptionMember
  | MedicalTranscriptResultStream.InternalFailureExceptionMember
  | MedicalTranscriptResultStream.LimitExceededExceptionMember
  | MedicalTranscriptResultStream.ServiceUnavailableExceptionMember
  | MedicalTranscriptResultStream.TranscriptEventMember
  | MedicalTranscriptResultStream.$UnknownMember;

export namespace MedicalTranscriptResultStream {
  /**
   * <p>A portion of the transcription of the audio stream. Events are sent periodically from
   *             Amazon Transcribe Medical to your application. The event can be a partial transcription of a section of the
   *             audio stream, or it can be the entire transcription of that portion of the audio
   *             stream.</p>
   */
  export interface TranscriptEventMember {
    TranscriptEvent: MedicalTranscriptEvent;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>One or more arguments to the <code>StartStreamTranscription</code> or <code>StartMedicalStreamTranscription</code> operation was invalid.
   *       For example, <code>MediaEncoding</code> was not set to a valid encoding, or
   *         <code>LanguageCode</code> was not set to a valid code. Check the parameters and try your
   *       request again.</p>
   */
  export interface BadRequestExceptionMember {
    TranscriptEvent?: never;
    BadRequestException: BadRequestException;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>You have exceeded the maximum number of concurrent transcription streams, are starting
   *       transcription streams too quickly, or the maximum audio length of 4 hours. Wait until a stream
   *       has finished processing, or break your audio stream into smaller chunks and try your request
   *       again.</p>
   */
  export interface LimitExceededExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException: LimitExceededException;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>A problem occurred while processing the audio. Amazon Transcribe or Amazon Transcribe Medical terminated processing. Try your
   *       request again.</p>
   */
  export interface InternalFailureExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException: InternalFailureException;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>A new stream started with the same session ID. The current stream has been
   *       terminated.</p>
   */
  export interface ConflictExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException: ConflictException;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Service is currently unavailable. Try your request later.</p>
   */
  export interface ServiceUnavailableExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException: ServiceUnavailableException;
    $unknown?: never;
  }

  export interface $UnknownMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    TranscriptEvent: (value: MedicalTranscriptEvent) => T;
    BadRequestException: (value: BadRequestException) => T;
    LimitExceededException: (value: LimitExceededException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    ConflictException: (value: ConflictException) => T;
    ServiceUnavailableException: (value: ServiceUnavailableException) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MedicalTranscriptResultStream, visitor: Visitor<T>): T => {
    if (value.TranscriptEvent !== undefined) return visitor.TranscriptEvent(value.TranscriptEvent);
    if (value.BadRequestException !== undefined) return visitor.BadRequestException(value.BadRequestException);
    if (value.LimitExceededException !== undefined) return visitor.LimitExceededException(value.LimitExceededException);
    if (value.InternalFailureException !== undefined)
      return visitor.InternalFailureException(value.InternalFailureException);
    if (value.ConflictException !== undefined) return visitor.ConflictException(value.ConflictException);
    if (value.ServiceUnavailableException !== undefined)
      return visitor.ServiceUnavailableException(value.ServiceUnavailableException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: MedicalTranscriptResultStream): any => {
    if (obj.TranscriptEvent !== undefined)
      return { TranscriptEvent: MedicalTranscriptEvent.filterSensitiveLog(obj.TranscriptEvent) };
    if (obj.BadRequestException !== undefined)
      return { BadRequestException: BadRequestException.filterSensitiveLog(obj.BadRequestException) };
    if (obj.LimitExceededException !== undefined)
      return { LimitExceededException: LimitExceededException.filterSensitiveLog(obj.LimitExceededException) };
    if (obj.InternalFailureException !== undefined)
      return { InternalFailureException: InternalFailureException.filterSensitiveLog(obj.InternalFailureException) };
    if (obj.ConflictException !== undefined)
      return { ConflictException: ConflictException.filterSensitiveLog(obj.ConflictException) };
    if (obj.ServiceUnavailableException !== undefined)
      return {
        ServiceUnavailableException: ServiceUnavailableException.filterSensitiveLog(obj.ServiceUnavailableException),
      };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>The result of transcribing a portion of the input audio stream. </p>
 */
export interface Result {
  /**
   * <p>A unique identifier for the result. </p>
   */
  ResultId?: string;

  /**
   * <p>The offset in seconds from the beginning of the audio stream to the beginning of the
   *       result.</p>
   */
  StartTime?: number;

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
   * <p>A list of possible transcriptions for the audio. Each alternative typically contains one
   *         <code>item</code> that contains the result of the transcription.</p>
   */
  Alternatives?: Alternative[];

  /**
   * <p>When channel identification is enabled, Amazon Transcribe transcribes the speech from each audio channel separately.</p>
   *          <p>You can use <code>ChannelId</code> to retrieve the transcription results for a single channel in your audio stream.</p>
   */
  ChannelId?: string;
}

export namespace Result {
  export const filterSensitiveLog = (obj: Result): any => ({
    ...obj,
  });
}

export enum Specialty {
  CARDIOLOGY = "CARDIOLOGY",
  NEUROLOGY = "NEUROLOGY",
  ONCOLOGY = "ONCOLOGY",
  PRIMARYCARE = "PRIMARYCARE",
  RADIOLOGY = "RADIOLOGY",
  UROLOGY = "UROLOGY",
}

export enum Type {
  CONVERSATION = "CONVERSATION",
  DICTATION = "DICTATION",
}

export interface StartMedicalStreamTranscriptionRequest {
  /**
   * <p> Indicates the source language used in the input audio stream. For Amazon Transcribe Medical,
   *             this is US English (en-US). </p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The sample rate of the input audio in Hertz. Sample rates of 16000 Hz or higher are
   *             accepted.</p>
   */
  MediaSampleRateHertz: number | undefined;

  /**
   * <p>The encoding used for the input audio.</p>
   */
  MediaEncoding: MediaEncoding | string | undefined;

  /**
   * <p>The name of the medical custom vocabulary to use when processing the real-time
   *             stream.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The medical specialty of the clinician or provider.</p>
   */
  Specialty: Specialty | string | undefined;

  /**
   * <p>The type of input audio. Choose <code>DICTATION</code> for a provider dictating patient notes. Choose <code>CONVERSATION</code> for a dialogue between a patient and one or more medical professionanls.</p>
   */
  Type: Type | string | undefined;

  /**
   * <p>When <code>true</code>, enables speaker identification in your real-time
   *             stream.</p>
   */
  ShowSpeakerLabel?: boolean;

  /**
   * <p> Optional. An identifier for the transcription session. If you don't provide a session
   *             ID, Amazon Transcribe generates one for you and returns it in the response. </p>
   */
  SessionId?: string;

  /**
   * <p>Represents the audio stream from your application to Amazon Transcribe.</p>
   */
  AudioStream: AsyncIterable<AudioStream> | undefined;

  /**
   * <p>When <code>true</code>, instructs Amazon Transcribe Medical to process each audio channel separately and
   *             then merge the transcription output of each channel into a single transcription.</p>
   *         <p>Amazon Transcribe Medical also produces a transcription of each item. An item includes the start time,
   *             end time, and any alternative transcriptions.</p>
   *         <p>You can't set both <code>ShowSpeakerLabel</code> and
   *                 <code>EnableChannelIdentification</code> in the same request. If you set both, your
   *             request returns a <code>BadRequestException</code>.</p>
   */
  EnableChannelIdentification?: boolean;

  /**
   * <p>The number of channels that are in your audio stream.</p>
   */
  NumberOfChannels?: number;
}

export namespace StartMedicalStreamTranscriptionRequest {
  export const filterSensitiveLog = (obj: StartMedicalStreamTranscriptionRequest): any => ({
    ...obj,
    ...(obj.AudioStream && { AudioStream: "STREAMING_CONTENT" }),
  });
}

export interface StartMedicalStreamTranscriptionResponse {
  /**
   * <p>An identifier for the streaming transcription.</p>
   */
  RequestId?: string;

  /**
   * <p>The language code for the response transcript. For Amazon Transcribe Medical, this is US
   *             English (en-US).</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The sample rate of the input audio in Hertz. Valid value: 16000 Hz.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The encoding used for the input audio stream.</p>
   */
  MediaEncoding?: MediaEncoding | string;

  /**
   * <p>The name of the vocabulary used when processing the stream.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The specialty in the medical domain.</p>
   */
  Specialty?: Specialty | string;

  /**
   * <p>The type of audio that was transcribed. </p>
   */
  Type?: Type | string;

  /**
   * <p>Shows whether speaker identification was enabled in the stream.</p>
   */
  ShowSpeakerLabel?: boolean;

  /**
   * <p>Optional. An identifier for the transcription session. If you don't provide a session
   *             ID, Amazon Transcribe generates one for you and returns it in the response.</p>
   */
  SessionId?: string;

  /**
   * <p>Represents the stream of transcription events from Amazon Transcribe Medical to your application. </p>
   */
  TranscriptResultStream?: AsyncIterable<MedicalTranscriptResultStream>;

  /**
   * <p>Shows whether channel identification has been enabled in the stream.</p>
   */
  EnableChannelIdentification?: boolean;

  /**
   * <p>The number of channels identified in the stream.</p>
   */
  NumberOfChannels?: number;
}

export namespace StartMedicalStreamTranscriptionResponse {
  export const filterSensitiveLog = (obj: StartMedicalStreamTranscriptionResponse): any => ({
    ...obj,
    ...(obj.TranscriptResultStream && { TranscriptResultStream: "STREAMING_CONTENT" }),
  });
}

export enum VocabularyFilterMethod {
  MASK = "mask",
  REMOVE = "remove",
  TAG = "tag",
}

export interface StartStreamTranscriptionRequest {
  /**
   * <p>Indicates the source language used in the input audio stream.</p>
   */
  LanguageCode: LanguageCode | string | undefined;

  /**
   * <p>The sample rate, in Hertz, of the input audio. We suggest that you use 8000 Hz for low
   *       quality audio and 16000 Hz for high quality audio.</p>
   */
  MediaSampleRateHertz: number | undefined;

  /**
   * <p>The encoding used for the input audio.</p>
   */
  MediaEncoding: MediaEncoding | string | undefined;

  /**
   * <p>The name of the vocabulary to use when processing the transcription job.</p>
   */
  VocabularyName?: string;

  /**
   * <p>A identifier for the transcription session. Use this parameter when you want to retry a
   *       session. If you don't provide a session ID, Amazon Transcribe will generate one for you and return it in
   *       the response.</p>
   */
  SessionId?: string;

  /**
   * <p>PCM-encoded stream of audio blobs. The audio stream is encoded as an HTTP2 data
   *       frame.</p>
   */
  AudioStream: AsyncIterable<AudioStream> | undefined;

  /**
   * <p>The name of the vocabulary filter you've created that is unique to your AWS account.
   *       Provide the name in this field to successfully use it in a stream.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The manner in which you use your vocabulary filter to filter words in your transcript.
   *         <code>Remove</code> removes filtered words from your transcription results.
   *         <code>Mask</code> masks those words with a <code>***</code> in your transcription results.
   *         <code>Tag</code> keeps the filtered words in your transcription results and tags them. The
   *       tag appears as <code>VocabularyFilterMatch</code> equal to <code>True</code>
   *          </p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | string;

  /**
   * <p>When <code>true</code>, enables speaker identification in your real-time stream.</p>
   */
  ShowSpeakerLabel?: boolean;

  /**
   * <p>When <code>true</code>, instructs Amazon Transcribe to process each audio channel separately and then merge the transcription output of each channel into a single transcription.</p>
   *          <p>Amazon Transcribe also produces a transcription of each item. An item includes the start time, end time, and any alternative transcriptions.</p>
   *          <p>You can't set both <code>ShowSpeakerLabel</code> and <code>EnableChannelIdentification</code> in the same request. If you set both, your request returns a <code>BadRequestException</code>.</p>
   */
  EnableChannelIdentification?: boolean;

  /**
   * <p>The number of channels that are in your audio stream.</p>
   */
  NumberOfChannels?: number;
}

export namespace StartStreamTranscriptionRequest {
  export const filterSensitiveLog = (obj: StartStreamTranscriptionRequest): any => ({
    ...obj,
    ...(obj.AudioStream && { AudioStream: "STREAMING_CONTENT" }),
  });
}

/**
 * <p>The transcription in a <a>TranscriptEvent</a>.</p>
 */
export interface Transcript {
  /**
   * <p>
   *             <a>Result</a> objects that contain the results of transcribing a portion of the
   *       input audio stream. The array can be empty.</p>
   */
  Results?: Result[];
}

export namespace Transcript {
  export const filterSensitiveLog = (obj: Transcript): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a set of transcription results from the server to the client. It contains one
 *       or more segments of the transcription.</p>
 */
export interface TranscriptEvent {
  /**
   * <p>The transcription of the audio stream. The transcription is composed of all of the items
   *       in the results list.</p>
   */
  Transcript?: Transcript;
}

export namespace TranscriptEvent {
  export const filterSensitiveLog = (obj: TranscriptEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the transcription result stream from Amazon Transcribe to your application.</p>
 */
export type TranscriptResultStream =
  | TranscriptResultStream.BadRequestExceptionMember
  | TranscriptResultStream.ConflictExceptionMember
  | TranscriptResultStream.InternalFailureExceptionMember
  | TranscriptResultStream.LimitExceededExceptionMember
  | TranscriptResultStream.ServiceUnavailableExceptionMember
  | TranscriptResultStream.TranscriptEventMember
  | TranscriptResultStream.$UnknownMember;

export namespace TranscriptResultStream {
  /**
   * <p>A portion of the transcription of the audio stream. Events are sent periodically from
   *       Amazon Transcribe to your application. The event can be a partial transcription of a section of the audio
   *       stream, or it can be the entire transcription of that portion of the audio stream.
   *       </p>
   */
  export interface TranscriptEventMember {
    TranscriptEvent: TranscriptEvent;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>A client error occurred when the stream was created. Check the parameters of the request
   *       and try your request again.</p>
   */
  export interface BadRequestExceptionMember {
    TranscriptEvent?: never;
    BadRequestException: BadRequestException;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Your client has exceeded one of the Amazon Transcribe limits, typically the limit on audio length.
   *       Break your audio stream into smaller chunks and try your request again.</p>
   */
  export interface LimitExceededExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException: LimitExceededException;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>A problem occurred while processing the audio. Amazon Transcribe terminated processing.</p>
   */
  export interface InternalFailureExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException: InternalFailureException;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>A new stream started with the same session ID. The current stream has been
   *       terminated.</p>
   */
  export interface ConflictExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException: ConflictException;
    ServiceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * <p>Service is currently unavailable. Try your request later.</p>
   */
  export interface ServiceUnavailableExceptionMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException: ServiceUnavailableException;
    $unknown?: never;
  }

  export interface $UnknownMember {
    TranscriptEvent?: never;
    BadRequestException?: never;
    LimitExceededException?: never;
    InternalFailureException?: never;
    ConflictException?: never;
    ServiceUnavailableException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    TranscriptEvent: (value: TranscriptEvent) => T;
    BadRequestException: (value: BadRequestException) => T;
    LimitExceededException: (value: LimitExceededException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    ConflictException: (value: ConflictException) => T;
    ServiceUnavailableException: (value: ServiceUnavailableException) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TranscriptResultStream, visitor: Visitor<T>): T => {
    if (value.TranscriptEvent !== undefined) return visitor.TranscriptEvent(value.TranscriptEvent);
    if (value.BadRequestException !== undefined) return visitor.BadRequestException(value.BadRequestException);
    if (value.LimitExceededException !== undefined) return visitor.LimitExceededException(value.LimitExceededException);
    if (value.InternalFailureException !== undefined)
      return visitor.InternalFailureException(value.InternalFailureException);
    if (value.ConflictException !== undefined) return visitor.ConflictException(value.ConflictException);
    if (value.ServiceUnavailableException !== undefined)
      return visitor.ServiceUnavailableException(value.ServiceUnavailableException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: TranscriptResultStream): any => {
    if (obj.TranscriptEvent !== undefined)
      return { TranscriptEvent: TranscriptEvent.filterSensitiveLog(obj.TranscriptEvent) };
    if (obj.BadRequestException !== undefined)
      return { BadRequestException: BadRequestException.filterSensitiveLog(obj.BadRequestException) };
    if (obj.LimitExceededException !== undefined)
      return { LimitExceededException: LimitExceededException.filterSensitiveLog(obj.LimitExceededException) };
    if (obj.InternalFailureException !== undefined)
      return { InternalFailureException: InternalFailureException.filterSensitiveLog(obj.InternalFailureException) };
    if (obj.ConflictException !== undefined)
      return { ConflictException: ConflictException.filterSensitiveLog(obj.ConflictException) };
    if (obj.ServiceUnavailableException !== undefined)
      return {
        ServiceUnavailableException: ServiceUnavailableException.filterSensitiveLog(obj.ServiceUnavailableException),
      };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface StartStreamTranscriptionResponse {
  /**
   * <p>An identifier for the streaming transcription.</p>
   */
  RequestId?: string;

  /**
   * <p>The language code for the input audio stream.</p>
   */
  LanguageCode?: LanguageCode | string;

  /**
   * <p>The sample rate for the input audio stream. Use 8000 Hz for low quality audio and 16000 Hz
   *       for high quality audio.</p>
   */
  MediaSampleRateHertz?: number;

  /**
   * <p>The encoding used for the input audio stream.</p>
   */
  MediaEncoding?: MediaEncoding | string;

  /**
   * <p>The name of the vocabulary used when processing the stream.</p>
   */
  VocabularyName?: string;

  /**
   * <p>An identifier for a specific transcription session.</p>
   */
  SessionId?: string;

  /**
   * <p>Represents the stream of transcription events from Amazon Transcribe to your application.</p>
   */
  TranscriptResultStream?: AsyncIterable<TranscriptResultStream>;

  /**
   * <p>The name of the vocabulary filter used in your real-time stream.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The vocabulary filtering method used in the real-time stream.</p>
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | string;

  /**
   * <p>Shows whether speaker identification was enabled in the stream.</p>
   */
  ShowSpeakerLabel?: boolean;

  /**
   * <p>Shows whether channel identification has been enabled in the stream.</p>
   */
  EnableChannelIdentification?: boolean;

  /**
   * <p>The number of channels identified in the stream.</p>
   */
  NumberOfChannels?: number;
}

export namespace StartStreamTranscriptionResponse {
  export const filterSensitiveLog = (obj: StartStreamTranscriptionResponse): any => ({
    ...obj,
    ...(obj.TranscriptResultStream && { TranscriptResultStream: "STREAMING_CONTENT" }),
  });
}
