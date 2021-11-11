import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>An Amazon Chime SDK meeting attendee. Includes a unique
 *            <code>AttendeeId</code> and <code>JoinToken</code>. The
 *            <code>JoinToken</code>
 *            allows a client to authenticate and join as the specified attendee. The
 *            <code>JoinToken</code>
 *            expires when the meeting ends, or when
 *            <a>DeleteAttendee</a>
 *            is called. After that, the attendee is unable to join the meeting.
 *        </p>
 *
 *          <p>We recommend securely transferring each <code>JoinToken</code> from your server application
 *            to the client so that no other client has access to the token except for the one
 *            authorized to represent the attendee.</p>
 */
export interface Attendee {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId?: string;

  /**
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   */
  JoinToken?: string;
}

export namespace Attendee {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attendee): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
    ...(obj.JoinToken && { JoinToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>The input parameters don't match the service's restrictions.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
}

export namespace BadRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action.</p>
 */
export interface CreateAttendeeRequestItem {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;
}

export namespace CreateAttendeeRequestItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAttendeeRequestItem): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
  });
}

export interface BatchCreateAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK ID of the meeting to which you're adding attendees.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The attendee information, including attendees' IDs and join tokens.</p>
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;
}

export namespace BatchCreateAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateAttendeeRequest): any => ({
    ...obj,
    ...(obj.Attendees && {
      Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItem.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.</p>
 */
export interface CreateAttendeeError {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace CreateAttendeeError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAttendeeError): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
  });
}

export interface BatchCreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendees' IDs and join tokens.</p>
   */
  Attendees?: Attendee[];

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];
}

export namespace BatchCreateAttendeeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
    ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeError.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>The client is permanently forbidden from making the request.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
}

export namespace ForbiddenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * <p>The request exceeds the resource limit.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more of the resources in the request does not exist in the system.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
}

export namespace NotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is currently unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;

  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
   */
  RetryAfterSeconds?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The user isn't authorized to request a resource.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
}

export namespace UnauthorizedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
}

export interface CreateAttendeeRequest {
  /**
   * <p>The unique ID of the meeting.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;
}

export namespace CreateAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAttendeeRequest): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
  });
}

export interface CreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   */
  Attendee?: Attendee;
}

export namespace CreateAttendeeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendee && { Attendee: Attendee.filterSensitiveLog(obj.Attendee) }),
  });
}

/**
 * <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 */
export interface UnprocessableEntityException extends __SmithyException, $MetadataBearer {
  name: "UnprocessableEntityException";
  $fault: "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request id associated with the call responsible for the exception.</p>
   */
  RequestId?: string;
}

export namespace UnprocessableEntityException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnprocessableEntityException): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
 */
export interface NotificationsConfiguration {
  /**
   * <p>The ARN of the AWS Lambda function in the notifications configuration.</p>
   */
  LambdaFunctionArn?: string;

  /**
   * <p>The ARN of the SNS topic.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The ARN of the SQS queue.</p>
   */
  SqsQueueArn?: string;
}

export namespace NotificationsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotificationsConfiguration): any => ({
    ...obj,
    ...(obj.LambdaFunctionArn && { LambdaFunctionArn: SENSITIVE_STRING }),
    ...(obj.SnsTopicArn && { SnsTopicArn: SENSITIVE_STRING }),
    ...(obj.SqsQueueArn && { SqsQueueArn: SENSITIVE_STRING }),
  });
}

export interface CreateMeetingRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Region in which to create the meeting.</p>
   *
   *          <p>
   *            Available values:
   *            <code>af-south-1</code>
   *            ,
   *            <code>ap-northeast-1</code>
   *            ,
   *            <code>ap-northeast-2</code>
   *            ,
   *            <code>ap-south-1</code>
   *            ,
   *            <code>ap-southeast-1</code>
   *            ,
   *            <code>ap-southeast-2</code>
   *            ,
   *            <code>ca-central-1</code>
   *            ,
   *            <code>eu-central-1</code>
   *            ,
   *            <code>eu-north-1</code>
   *            ,
   *            <code>eu-south-1</code>
   *            ,
   *            <code>eu-west-1</code>
   *            ,
   *            <code>eu-west-2</code>
   *            ,
   *            <code>eu-west-3</code>
   *            ,
   *            <code>sa-east-1</code>
   *            ,
   *            <code>us-east-1</code>
   *            ,
   *            <code>us-east-2</code>
   *            ,
   *            <code>us-west-1</code>
   *            ,
   *            <code>us-west-2</code>
   *            .
   *        </p>
   */
  MediaRegion: string | undefined;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId: string | undefined;

  /**
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   */
  NotificationsConfiguration?: NotificationsConfiguration;
}

export namespace CreateMeetingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingRequest): any => ({
    ...obj,
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
    ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
    ...(obj.NotificationsConfiguration && {
      NotificationsConfiguration: NotificationsConfiguration.filterSensitiveLog(obj.NotificationsConfiguration),
    }),
  });
}

/**
 * <p>A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.</p>
 */
export interface MediaPlacement {
  /**
   * <p>The audio host URL.</p>
   */
  AudioHostUrl?: string;

  /**
   * <p>The audio fallback URL.</p>
   */
  AudioFallbackUrl?: string;

  /**
   * <p>The signaling URL.</p>
   */
  SignalingUrl?: string;

  /**
   * <p>The turn control URL.</p>
   */
  TurnControlUrl?: string;

  /**
   * <p>The screen data URL.</p>
   */
  ScreenDataUrl?: string;

  /**
   * <p>The screen viewing URL.</p>
   */
  ScreenViewingUrl?: string;

  /**
   * <p>The screen sharing URL.</p>
   */
  ScreenSharingUrl?: string;

  /**
   * <p>The event ingestion URL.</p>
   */
  EventIngestionUrl?: string;
}

export namespace MediaPlacement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaPlacement): any => ({
    ...obj,
  });
}

/**
 * <p>A meeting created using the Amazon Chime SDK.</p>
 */
export interface Meeting {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId?: string;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * <p>The Region in which you create the meeting. Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>,
   *             <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>,
   *             <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>,
   *             <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>,
   *             <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>,
   *             <code>us-west-1</code>, <code>us-west-2</code>.</p>
   */
  MediaRegion?: string;

  /**
   * <p>The media placement for the meeting.</p>
   */
  MediaPlacement?: MediaPlacement;
}

export namespace Meeting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Meeting): any => ({
    ...obj,
    ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
    ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
  });
}

export interface CreateMeetingResponse {
  /**
   * <p>The meeting information, including the meeting ID and
   *            <code>MediaPlacement</code>.</p>
   */
  Meeting?: Meeting;
}

export namespace CreateMeetingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingResponse): any => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
  });
}

export interface CreateMeetingWithAttendeesRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Region in which to create the meeting.</p>
   */
  MediaRegion: string | undefined;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId: string | undefined;

  /**
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   */
  NotificationsConfiguration?: NotificationsConfiguration;

  /**
   * <p>The attendee information, including attendees' IDs and join tokens.</p>
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;
}

export namespace CreateMeetingWithAttendeesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingWithAttendeesRequest): any => ({
    ...obj,
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
    ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
    ...(obj.NotificationsConfiguration && {
      NotificationsConfiguration: NotificationsConfiguration.filterSensitiveLog(obj.NotificationsConfiguration),
    }),
    ...(obj.Attendees && {
      Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItem.filterSensitiveLog(item)),
    }),
  });
}

export interface CreateMeetingWithAttendeesResponse {
  /**
   * <p>The meeting information, including the meeting ID and
   *            <code>MediaPlacement</code>.</p>
   */
  Meeting?: Meeting;

  /**
   * <p>The attendee information, including attendees' IDs and join tokens.</p>
   */
  Attendees?: Attendee[];

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];
}

export namespace CreateMeetingWithAttendeesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingWithAttendeesResponse): any => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
    ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeError.filterSensitiveLog(item)) }),
  });
}

export interface DeleteAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}

export namespace DeleteAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAttendeeRequest): any => ({
    ...obj,
  });
}

export interface DeleteMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace DeleteMeetingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMeetingRequest): any => ({
    ...obj,
  });
}

export interface GetAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}

export namespace GetAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAttendeeRequest): any => ({
    ...obj,
  });
}

export interface GetAttendeeResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendee?: Attendee;
}

export namespace GetAttendeeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendee && { Attendee: Attendee.filterSensitiveLog(obj.Attendee) }),
  });
}

export interface GetMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace GetMeetingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMeetingRequest): any => ({
    ...obj,
  });
}

export interface GetMeetingResponse {
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meeting?: Meeting;
}

export namespace GetMeetingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMeetingResponse): any => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
  });
}

export interface ListAttendeesRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;
}

export namespace ListAttendeesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttendeesRequest): any => ({
    ...obj,
  });
}

export interface ListAttendeesResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendees?: Attendee[];

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListAttendeesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttendeesResponse): any => ({
    ...obj,
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
  });
}

export enum TranscribeMedicalLanguageCode {
  EN_US = "en-US",
}

export enum TranscribeMedicalRegion {
  AP_SOUTHEAST_2 = "ap-southeast-2",
  AUTO = "auto",
  CA_CENTRAL_1 = "ca-central-1",
  EU_WEST_1 = "eu-west-1",
  US_EAST_1 = "us-east-1",
  US_EAST_2 = "us-east-2",
  US_WEST_2 = "us-west-2",
}

export enum TranscribeMedicalSpecialty {
  CARDIOLOGY = "CARDIOLOGY",
  NEUROLOGY = "NEUROLOGY",
  ONCOLOGY = "ONCOLOGY",
  PRIMARYCARE = "PRIMARYCARE",
  RADIOLOGY = "RADIOLOGY",
  UROLOGY = "UROLOGY",
}

export enum TranscribeMedicalType {
  CONVERSATION = "CONVERSATION",
  DICTATION = "DICTATION",
}

/**
 * <p>Settings specific to the Amazon Transcribe Medical engine.</p>
 */
export interface EngineTranscribeMedicalSettings {
  /**
   * <p>The language code specified for the Amazon Transcribe Medical engine.</p>
   */
  LanguageCode: TranscribeMedicalLanguageCode | string | undefined;

  /**
   * <p>The specialty specified for the Amazon Transcribe Medical engine.</p>
   */
  Specialty: TranscribeMedicalSpecialty | string | undefined;

  /**
   * <p>The type of transcription.</p>
   */
  Type: TranscribeMedicalType | string | undefined;

  /**
   * <p>The name of the vocabulary passed to Amazon Transcribe Medical.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The AWS Region passed to Amazon Transcribe Medical. If you don't specify a Region, Amazon Chime uses the meeting's Region.</p>
   */
  Region?: TranscribeMedicalRegion | string;
}

export namespace EngineTranscribeMedicalSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EngineTranscribeMedicalSettings): any => ({
    ...obj,
  });
}

export enum TranscribeLanguageCode {
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
  ZH_CN = "zh-CN",
}

export enum TranscribeRegion {
  AP_NORTHEAST_1 = "ap-northeast-1",
  AP_NORTHEAST_2 = "ap-northeast-2",
  AP_SOUTHEAST_2 = "ap-southeast-2",
  AUTO = "auto",
  CA_CENTRAL_1 = "ca-central-1",
  EU_CENTRAL_1 = "eu-central-1",
  EU_WEST_1 = "eu-west-1",
  EU_WEST_2 = "eu-west-2",
  SA_EAST_1 = "sa-east-1",
  US_EAST_1 = "us-east-1",
  US_EAST_2 = "us-east-2",
  US_WEST_2 = "us-west-2",
}

export enum TranscribeVocabularyFilterMethod {
  MASK = "mask",
  REMOVE = "remove",
  TAG = "tag",
}

/**
 * <p>Settings specific to the Amazon Transcribe engine.</p>
 */
export interface EngineTranscribeSettings {
  /**
   * <p>The language code specified for the Amazon Transcribe engine.</p>
   */
  LanguageCode: TranscribeLanguageCode | string | undefined;

  /**
   * <p>The filtering method passed to Amazon Transcribe.</p>
   */
  VocabularyFilterMethod?: TranscribeVocabularyFilterMethod | string;

  /**
   * <p>The name of the vocabulary filter passed to Amazon Transcribe.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The name of the vocabulary passed to Amazon Transcribe.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The AWS Region passed to Amazon Transcribe. If you don't specify a Region, Amazon Chime uses the meeting's Region.</p>
   */
  Region?: TranscribeRegion | string;
}

export namespace EngineTranscribeSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EngineTranscribeSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.</p>
 */
export interface TranscriptionConfiguration {
  /**
   * <p>The transcription configuration settings passed to Amazon Transcribe.</p>
   */
  EngineTranscribeSettings?: EngineTranscribeSettings;

  /**
   * <p>The transcription configuration settings passed to Amazon Transcribe Medical.</p>
   */
  EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings;
}

export namespace TranscriptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TranscriptionConfiguration): any => ({
    ...obj,
  });
}

export interface StartMeetingTranscriptionRequest {
  /**
   * <p>The unique ID of the meeting being transcribed.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or
   *             <code>EngineTranscribeMedicalSettings</code>.</p>
   */
  TranscriptionConfiguration: TranscriptionConfiguration | undefined;
}

export namespace StartMeetingTranscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartMeetingTranscriptionRequest): any => ({
    ...obj,
  });
}

export interface StopMeetingTranscriptionRequest {
  /**
   * <p>The unique ID of the meeting for which you stop transcription.</p>
   */
  MeetingId: string | undefined;
}

export namespace StopMeetingTranscriptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopMeetingTranscriptionRequest): any => ({
    ...obj,
  });
}
