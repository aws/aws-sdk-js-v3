import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * The resource specified in your request already exists.
 */
export interface AlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace AlreadyExistsException {
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * The input you provided is invalid.
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
 * An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
 */
export interface CallInstructionsMessageType {
  /**
   * The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.
   */
  Text?: string;
}

export namespace CallInstructionsMessageType {
  export const filterSensitiveLog = (obj: CallInstructionsMessageType): any => ({
    ...obj,
  });
}

/**
 * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
 */
export interface CloudWatchLogsDestination {
  /**
   * The Amazon Resource Name (ARN) of an Amazon Identity and Access Management (IAM) role that is able to write event data to an Amazon CloudWatch destination.
   */
  IamRoleArn?: string;

  /**
   * The name of the Amazon CloudWatch Log Group that you want to record events in.
   */
  LogGroupArn?: string;
}

export namespace CloudWatchLogsDestination {
  export const filterSensitiveLog = (obj: CloudWatchLogsDestination): any => ({
    ...obj,
  });
}

/**
 * A request to create a new configuration set.
 */
export interface CreateConfigurationSetRequest {
  /**
   * The name that you want to give the configuration set.
   */
  ConfigurationSetName?: string;
}

export namespace CreateConfigurationSetRequest {
  export const filterSensitiveLog = (obj: CreateConfigurationSetRequest): any => ({
    ...obj,
  });
}

/**
 * An empty object that indicates that the configuration set was successfully created.
 */
export interface CreateConfigurationSetResponse {}

export namespace CreateConfigurationSetResponse {
  export const filterSensitiveLog = (obj: CreateConfigurationSetResponse): any => ({
    ...obj,
  });
}

/**
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 */
export interface InternalServiceErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceErrorException {
  export const filterSensitiveLog = (obj: InternalServiceErrorException): any => ({
    ...obj,
  });
}

/**
 * There are too many instances of the specified resource type.
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

/**
 * You've issued too many requests to the resource. Wait a few minutes, and then try again.
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
 */
export interface KinesisFirehoseDestination {
  /**
   * The Amazon Resource Name (ARN) of an IAM role that can write data to an Amazon Kinesis Data Firehose stream.
   */
  DeliveryStreamArn?: string;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose destination that you want to use in the event destination.
   */
  IamRoleArn?: string;
}

export namespace KinesisFirehoseDestination {
  export const filterSensitiveLog = (obj: KinesisFirehoseDestination): any => ({
    ...obj,
  });
}

export enum EventType {
  ANSWERED = "ANSWERED",
  BUSY = "BUSY",
  COMPLETED_CALL = "COMPLETED_CALL",
  FAILED = "FAILED",
  INITIATED_CALL = "INITIATED_CALL",
  NO_ANSWER = "NO_ANSWER",
  RINGING = "RINGING",
}

/**
 * An object that contains information about an event destination that sends data to Amazon SNS.
 */
export interface SnsDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.
   */
  TopicArn?: string;
}

export namespace SnsDestination {
  export const filterSensitiveLog = (obj: SnsDestination): any => ({
    ...obj,
  });
}

/**
 * An object that defines a single event destination.
 */
export interface EventDestinationDefinition {
  /**
   * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * Indicates whether or not the event destination is enabled. If the event destination is enabled, then Amazon Pinpoint sends response data to the specified event destination.
   */
  Enabled?: boolean;

  /**
   * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   */
  MatchingEventTypes?: (EventType | string)[];

  /**
   * An object that contains information about an event destination that sends data to Amazon SNS.
   */
  SnsDestination?: SnsDestination;
}

export namespace EventDestinationDefinition {
  export const filterSensitiveLog = (obj: EventDestinationDefinition): any => ({
    ...obj,
  });
}

/**
 * Create a new event destination in a configuration set.
 */
export interface CreateConfigurationSetEventDestinationRequest {
  /**
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;

  /**
   * An object that defines a single event destination.
   */
  EventDestination?: EventDestinationDefinition;

  /**
   * A name that identifies the event destination.
   */
  EventDestinationName?: string;
}

export namespace CreateConfigurationSetEventDestinationRequest {
  export const filterSensitiveLog = (obj: CreateConfigurationSetEventDestinationRequest): any => ({
    ...obj,
  });
}

/**
 * An empty object that indicates that the event destination was created successfully.
 */
export interface CreateConfigurationSetEventDestinationResponse {}

export namespace CreateConfigurationSetEventDestinationResponse {
  export const filterSensitiveLog = (obj: CreateConfigurationSetEventDestinationResponse): any => ({
    ...obj,
  });
}

/**
 * The resource you attempted to access doesn't exist.
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

export interface DeleteConfigurationSetRequest {
  /**
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;
}

export namespace DeleteConfigurationSetRequest {
  export const filterSensitiveLog = (obj: DeleteConfigurationSetRequest): any => ({
    ...obj,
  });
}

/**
 * An empty object that indicates that the configuration set was deleted successfully.
 */
export interface DeleteConfigurationSetResponse {}

export namespace DeleteConfigurationSetResponse {
  export const filterSensitiveLog = (obj: DeleteConfigurationSetResponse): any => ({
    ...obj,
  });
}

export interface DeleteConfigurationSetEventDestinationRequest {
  /**
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;

  /**
   * EventDestinationName
   */
  EventDestinationName: string | undefined;
}

export namespace DeleteConfigurationSetEventDestinationRequest {
  export const filterSensitiveLog = (obj: DeleteConfigurationSetEventDestinationRequest): any => ({
    ...obj,
  });
}

/**
 * An empty object that indicates that the event destination was deleted successfully.
 */
export interface DeleteConfigurationSetEventDestinationResponse {}

export namespace DeleteConfigurationSetEventDestinationResponse {
  export const filterSensitiveLog = (obj: DeleteConfigurationSetEventDestinationResponse): any => ({
    ...obj,
  });
}

/**
 * An object that defines an event destination.
 */
export interface EventDestination {
  /**
   * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * Indicates whether or not the event destination is enabled. If the event destination is enabled, then Amazon Pinpoint sends response data to the specified event destination.
   */
  Enabled?: boolean;

  /**
   * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   */
  MatchingEventTypes?: (EventType | string)[];

  /**
   * A name that identifies the event destination configuration.
   */
  Name?: string;

  /**
   * An object that contains information about an event destination that sends data to Amazon SNS.
   */
  SnsDestination?: SnsDestination;
}

export namespace EventDestination {
  export const filterSensitiveLog = (obj: EventDestination): any => ({
    ...obj,
  });
}

export interface GetConfigurationSetEventDestinationsRequest {
  /**
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;
}

export namespace GetConfigurationSetEventDestinationsRequest {
  export const filterSensitiveLog = (obj: GetConfigurationSetEventDestinationsRequest): any => ({
    ...obj,
  });
}

/**
 * An object that contains information about an event destination.
 */
export interface GetConfigurationSetEventDestinationsResponse {
  /**
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   */
  EventDestinations?: EventDestination[];
}

export namespace GetConfigurationSetEventDestinationsResponse {
  export const filterSensitiveLog = (obj: GetConfigurationSetEventDestinationsResponse): any => ({
    ...obj,
  });
}

export interface ListConfigurationSetsRequest {
  /**
   * A token returned from a previous call to the API that indicates the position in the list of results.
   */
  NextToken?: string;

  /**
   * Used to specify the number of items that should be returned in the response.
   */
  PageSize?: string;
}

export namespace ListConfigurationSetsRequest {
  export const filterSensitiveLog = (obj: ListConfigurationSetsRequest): any => ({
    ...obj,
  });
}

/**
 * An object that contains information about the configuration sets for your account in the current region.
 */
export interface ListConfigurationSetsResponse {
  /**
   * An object that contains a list of configuration sets for your account in the current region.
   */
  ConfigurationSets?: string[];

  /**
   * A token returned from a previous call to ListConfigurationSets to indicate the position in the list of configuration sets.
   */
  NextToken?: string;
}

export namespace ListConfigurationSetsResponse {
  export const filterSensitiveLog = (obj: ListConfigurationSetsResponse): any => ({
    ...obj,
  });
}

/**
 * An object that defines a message that contains unformatted text.
 */
export interface PlainTextMessageType {
  /**
   * The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.
   */
  LanguageCode?: string;

  /**
   * The plain (not SSML-formatted) text to deliver to the recipient.
   */
  Text?: string;

  /**
   * The name of the voice that you want to use to deliver the message. For a complete list of supported voices, see the Amazon Polly Developer Guide.
   */
  VoiceId?: string;
}

export namespace PlainTextMessageType {
  export const filterSensitiveLog = (obj: PlainTextMessageType): any => ({
    ...obj,
  });
}

/**
 * An object that defines a message that contains SSML-formatted text.
 */
export interface SSMLMessageType {
  /**
   * The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.
   */
  LanguageCode?: string;

  /**
   * The SSML-formatted text to deliver to the recipient.
   */
  Text?: string;

  /**
   * The name of the voice that you want to use to deliver the message. For a complete list of supported voices, see the Amazon Polly Developer Guide.
   */
  VoiceId?: string;
}

export namespace SSMLMessageType {
  export const filterSensitiveLog = (obj: SSMLMessageType): any => ({
    ...obj,
  });
}

/**
 * An object that contains a voice message and information about the recipient that you want to send it to.
 */
export interface VoiceMessageContent {
  /**
   * An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
   */
  CallInstructionsMessage?: CallInstructionsMessageType;

  /**
   * An object that defines a message that contains unformatted text.
   */
  PlainTextMessage?: PlainTextMessageType;

  /**
   * An object that defines a message that contains SSML-formatted text.
   */
  SSMLMessage?: SSMLMessageType;
}

export namespace VoiceMessageContent {
  export const filterSensitiveLog = (obj: VoiceMessageContent): any => ({
    ...obj,
  });
}

/**
 * SendVoiceMessageRequest
 */
export interface SendVoiceMessageRequest {
  /**
   * The phone number that appears on recipients' devices when they receive the message.
   */
  CallerId?: string;

  /**
   * The name of the configuration set that you want to use to send the message.
   */
  ConfigurationSetName?: string;

  /**
   * An object that contains a voice message and information about the recipient that you want to send it to.
   */
  Content?: VoiceMessageContent;

  /**
   * The phone number that you want to send the voice message to.
   */
  DestinationPhoneNumber?: string;

  /**
   * The phone number that Amazon Pinpoint should use to send the voice message. This isn't necessarily the phone number that appears on recipients' devices when they receive the message, because you can specify a CallerId parameter in the request.
   */
  OriginationPhoneNumber?: string;
}

export namespace SendVoiceMessageRequest {
  export const filterSensitiveLog = (obj: SendVoiceMessageRequest): any => ({
    ...obj,
  });
}

/**
 * An object that that contains the Message ID of a Voice message that was sent successfully.
 */
export interface SendVoiceMessageResponse {
  /**
   * A unique identifier for the voice message.
   */
  MessageId?: string;
}

export namespace SendVoiceMessageResponse {
  export const filterSensitiveLog = (obj: SendVoiceMessageResponse): any => ({
    ...obj,
  });
}

/**
 * UpdateConfigurationSetEventDestinationRequest
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  /**
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;

  /**
   * An object that defines a single event destination.
   */
  EventDestination?: EventDestinationDefinition;

  /**
   * EventDestinationName
   */
  EventDestinationName: string | undefined;
}

export namespace UpdateConfigurationSetEventDestinationRequest {
  export const filterSensitiveLog = (obj: UpdateConfigurationSetEventDestinationRequest): any => ({
    ...obj,
  });
}

/**
 * An empty object that indicates that the event destination was updated successfully.
 */
export interface UpdateConfigurationSetEventDestinationResponse {}

export namespace UpdateConfigurationSetEventDestinationResponse {
  export const filterSensitiveLog = (obj: UpdateConfigurationSetEventDestinationResponse): any => ({
    ...obj,
  });
}
