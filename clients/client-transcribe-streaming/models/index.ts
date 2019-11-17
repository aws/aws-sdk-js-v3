import * as _smithy from "../lib/smithy";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface Alternative {
  __type?: "com.amazonaws.transcribe.streaming#Alternative";
  Items?: Array<Item>;
  Transcript?: string;
}

export namespace Alternative {
  export const ID = "com.amazonaws.transcribe.streaming#Alternative";
  export function isa(o: any): o is Alternative {
    return _smithy.isa(o, ID);
  }
}

export interface AudioEvent {
  __type?: "com.amazonaws.transcribe.streaming#AudioEvent";
  AudioChunk?: Uint8Array;
}

export namespace AudioEvent {
  export const ID = "com.amazonaws.transcribe.streaming#AudioEvent";
  export function isa(o: any): o is AudioEvent {
    return _smithy.isa(o, ID);
  }
}

export type AudioStream =
  | AudioStream.AudioEventMember
  | AudioStream.$UnknownMember;

export namespace AudioStream {
  export const ID = "com.amazonaws.transcribe.streaming#AudioStream";
  interface $Base {
    __type?: "com.amazonaws.transcribe.streaming#AudioStream";
  }
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
  export function visit<T>(value: AudioStream, visitor: Visitor<T>): T {
    if (value.AudioEvent !== undefined)
      return visitor.AudioEvent(value.AudioEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

export interface BadRequestException extends _smithy.SmithyException {
  __type: "com.amazonaws.transcribe.streaming#BadRequestException";
  $name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export const ID = "com.amazonaws.transcribe.streaming#BadRequestException";
  export function isa(o: any): o is BadRequestException {
    return _smithy.isa(o, ID);
  }
}

export interface ConflictException extends _smithy.SmithyException {
  __type: "com.amazonaws.transcribe.streaming#ConflictException";
  $name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const ID = "com.amazonaws.transcribe.streaming#ConflictException";
  export function isa(o: any): o is ConflictException {
    return _smithy.isa(o, ID);
  }
}

export interface InternalFailureException extends _smithy.SmithyException {
  __type: "com.amazonaws.transcribe.streaming#InternalFailureException";
  $name: "InternalFailureException";
  $fault: "server";
  Message?: string;
}

export namespace InternalFailureException {
  export const ID =
    "com.amazonaws.transcribe.streaming#InternalFailureException";
  export function isa(o: any): o is InternalFailureException {
    return _smithy.isa(o, ID);
  }
}

export interface Item {
  __type?: "com.amazonaws.transcribe.streaming#Item";
  Content?: string;
  StartTime?: number;
  EndTime?: number;
  Type?: ItemType | string;
}

export namespace Item {
  export const ID = "com.amazonaws.transcribe.streaming#Item";
  export function isa(o: any): o is Item {
    return _smithy.isa(o, ID);
  }
}

export enum ItemType {
  PRONUNCIATION = "pronunciation",
  PUNCTUATION = "punctuation"
}

export enum LanguageCode {
  EN_US = "en-US",
  EN_GB = "en-GB",
  ES_US = "es-US",
  FR_CA = "fr-CA",
  FR_FR = "fr-FR",
  EN_AU = "en-AU"
}

export interface LimitExceededException extends _smithy.SmithyException {
  __type: "com.amazonaws.transcribe.streaming#LimitExceededException";
  $name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const ID = "com.amazonaws.transcribe.streaming#LimitExceededException";
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, ID);
  }
}

export interface Result {
  __type?: "com.amazonaws.transcribe.streaming#Result";
  ResultId?: string;
  IsPartial?: boolean;
  StartTime?: number;
  EndTime?: number;
  Alternatives?: Array<Alternative>;
}

export namespace Result {
  export const ID = "com.amazonaws.transcribe.streaming#Result";
  export function isa(o: any): o is Result {
    return _smithy.isa(o, ID);
  }
}

export interface StartStreamTranscriptionRequest {
  __type?: "com.amazonaws.transcribe.streaming#StartStreamTranscriptionRequest";
  SessionId?: string;
  MediaEncoding: MediaEncoding | string | undefined;
  MediaSampleRateHertz: number | undefined;
  VocabularyName?: string;
  LanguageCode: LanguageCode | string | undefined;
  AudioStream?: AsyncIterable<AudioStream>;
}

export namespace StartStreamTranscriptionRequest {
  export const ID =
    "com.amazonaws.transcribe.streaming#StartStreamTranscriptionRequest";
  export function isa(o: any): o is StartStreamTranscriptionRequest {
    return _smithy.isa(o, ID);
  }
}

export interface StartStreamTranscriptionResponse extends $MetadataBearer {
  __type?: "com.amazonaws.transcribe.streaming#StartStreamTranscriptionResponse";
  RequestId?: string;
  SessionId?: string;
  MediaEncoding?: MediaEncoding | string;
  TranscriptResultStream?: TranscriptResultStream;
  VocabularyName?: string;
  LanguageCode?: LanguageCode | string;
  MediaSampleRateHertz?: number;
}

export namespace StartStreamTranscriptionResponse {
  export const ID =
    "com.amazonaws.transcribe.streaming#StartStreamTranscriptionResponse";
  export function isa(o: any): o is StartStreamTranscriptionResponse {
    return _smithy.isa(o, ID);
  }
}

export interface Transcript {
  __type?: "com.amazonaws.transcribe.streaming#Transcript";
  Results?: Array<Result>;
}

export namespace Transcript {
  export const ID = "com.amazonaws.transcribe.streaming#Transcript";
  export function isa(o: any): o is Transcript {
    return _smithy.isa(o, ID);
  }
}

export interface TranscriptEvent {
  __type?: "com.amazonaws.transcribe.streaming#TranscriptEvent";
  Transcript?: Transcript;
}

export namespace TranscriptEvent {
  export const ID = "com.amazonaws.transcribe.streaming#TranscriptEvent";
  export function isa(o: any): o is TranscriptEvent {
    return _smithy.isa(o, ID);
  }
}

export type TranscriptResultStream =
  | TranscriptResultStream.BadRequestExceptionMember
  | TranscriptResultStream.ConflictExceptionMember
  | TranscriptResultStream.InternalFailureExceptionMember
  | TranscriptResultStream.LimitExceededExceptionMember
  | TranscriptResultStream.TranscriptEventMember
  | TranscriptResultStream.$UnknownMember;

export namespace TranscriptResultStream {
  export const ID = "com.amazonaws.transcribe.streaming#TranscriptResultStream";
  interface $Base {
    __type?: "com.amazonaws.transcribe.streaming#TranscriptResultStream";
  }
  export interface LimitExceededExceptionMember extends $Base {
    LimitExceededException: LimitExceededException;
    ConflictException?: never;
    BadRequestException?: never;
    InternalFailureException?: never;
    TranscriptEvent?: never;
    $unknown?: never;
  }
  export interface ConflictExceptionMember extends $Base {
    LimitExceededException?: never;
    ConflictException: ConflictException;
    BadRequestException?: never;
    InternalFailureException?: never;
    TranscriptEvent?: never;
    $unknown?: never;
  }
  export interface BadRequestExceptionMember extends $Base {
    LimitExceededException?: never;
    ConflictException?: never;
    BadRequestException: BadRequestException;
    InternalFailureException?: never;
    TranscriptEvent?: never;
    $unknown?: never;
  }
  export interface InternalFailureExceptionMember extends $Base {
    LimitExceededException?: never;
    ConflictException?: never;
    BadRequestException?: never;
    InternalFailureException: InternalFailureException;
    TranscriptEvent?: never;
    $unknown?: never;
  }
  export interface TranscriptEventMember extends $Base {
    LimitExceededException?: never;
    ConflictException?: never;
    BadRequestException?: never;
    InternalFailureException?: never;
    TranscriptEvent: TranscriptEvent;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    LimitExceededException?: never;
    ConflictException?: never;
    BadRequestException?: never;
    InternalFailureException?: never;
    TranscriptEvent?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    LimitExceededException: (value: LimitExceededException) => T;
    ConflictException: (value: ConflictException) => T;
    BadRequestException: (value: BadRequestException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    TranscriptEvent: (value: TranscriptEvent) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(
    value: TranscriptResultStream,
    visitor: Visitor<T>
  ): T {
    if (value.LimitExceededException !== undefined)
      return visitor.LimitExceededException(value.LimitExceededException);
    if (value.ConflictException !== undefined)
      return visitor.ConflictException(value.ConflictException);
    if (value.BadRequestException !== undefined)
      return visitor.BadRequestException(value.BadRequestException);
    if (value.InternalFailureException !== undefined)
      return visitor.InternalFailureException(value.InternalFailureException);
    if (value.TranscriptEvent !== undefined)
      return visitor.TranscriptEvent(value.TranscriptEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

export enum MediaEncoding {
  PCM = "pcm"
}
