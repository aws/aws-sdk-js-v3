// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { PinpointSMSVoiceServiceException as __BaseException } from "./PinpointSMSVoiceServiceException";

/**
 * The resource specified in your request already exists.
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The input you provided is invalid.
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
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

/**
 * A request to create a new configuration set.
 */
export interface CreateConfigurationSetRequest {
  /**
   * The name that you want to give the configuration set.
   */
  ConfigurationSetName?: string;
}

/**
 * An empty object that indicates that the configuration set was successfully created.
 */
export interface CreateConfigurationSetResponse {}

/**
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * There are too many instances of the specified resource type.
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You've issued too many requests to the resource. Wait a few minutes, and then try again.
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
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

/**
 * An empty object that indicates that the event destination was created successfully.
 */
export interface CreateConfigurationSetEventDestinationResponse {}

/**
 * The resource you attempted to access doesn't exist.
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteConfigurationSetRequest {
  /**
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;
}

/**
 * An empty object that indicates that the configuration set was deleted successfully.
 */
export interface DeleteConfigurationSetResponse {}

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

/**
 * An empty object that indicates that the event destination was deleted successfully.
 */
export interface DeleteConfigurationSetEventDestinationResponse {}

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

export interface GetConfigurationSetEventDestinationsRequest {
  /**
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;
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

/**
 * An object that that contains the Message ID of a Voice message that was sent successfully.
 */
export interface SendVoiceMessageResponse {
  /**
   * A unique identifier for the voice message.
   */
  MessageId?: string;
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

/**
 * An empty object that indicates that the event destination was updated successfully.
 */
export interface UpdateConfigurationSetEventDestinationResponse {}

/**
 * @internal
 */
export const CallInstructionsMessageTypeFilterSensitiveLog = (obj: CallInstructionsMessageType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsDestinationFilterSensitiveLog = (obj: CloudWatchLogsDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationSetRequestFilterSensitiveLog = (obj: CreateConfigurationSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationSetResponseFilterSensitiveLog = (obj: CreateConfigurationSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisFirehoseDestinationFilterSensitiveLog = (obj: KinesisFirehoseDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnsDestinationFilterSensitiveLog = (obj: SnsDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventDestinationDefinitionFilterSensitiveLog = (obj: EventDestinationDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationSetEventDestinationRequestFilterSensitiveLog = (
  obj: CreateConfigurationSetEventDestinationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationSetEventDestinationResponseFilterSensitiveLog = (
  obj: CreateConfigurationSetEventDestinationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationSetRequestFilterSensitiveLog = (obj: DeleteConfigurationSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationSetResponseFilterSensitiveLog = (obj: DeleteConfigurationSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationSetEventDestinationRequestFilterSensitiveLog = (
  obj: DeleteConfigurationSetEventDestinationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationSetEventDestinationResponseFilterSensitiveLog = (
  obj: DeleteConfigurationSetEventDestinationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventDestinationFilterSensitiveLog = (obj: EventDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConfigurationSetEventDestinationsRequestFilterSensitiveLog = (
  obj: GetConfigurationSetEventDestinationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConfigurationSetEventDestinationsResponseFilterSensitiveLog = (
  obj: GetConfigurationSetEventDestinationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConfigurationSetsRequestFilterSensitiveLog = (obj: ListConfigurationSetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConfigurationSetsResponseFilterSensitiveLog = (obj: ListConfigurationSetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlainTextMessageTypeFilterSensitiveLog = (obj: PlainTextMessageType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SSMLMessageTypeFilterSensitiveLog = (obj: SSMLMessageType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoiceMessageContentFilterSensitiveLog = (obj: VoiceMessageContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendVoiceMessageRequestFilterSensitiveLog = (obj: SendVoiceMessageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendVoiceMessageResponseFilterSensitiveLog = (obj: SendVoiceMessageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConfigurationSetEventDestinationRequestFilterSensitiveLog = (
  obj: UpdateConfigurationSetEventDestinationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConfigurationSetEventDestinationResponseFilterSensitiveLog = (
  obj: UpdateConfigurationSetEventDestinationResponse
): any => ({
  ...obj,
});
