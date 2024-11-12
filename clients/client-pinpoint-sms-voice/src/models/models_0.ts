// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { PinpointSMSVoiceServiceException as __BaseException } from "./PinpointSMSVoiceServiceException";

/**
 * The resource specified in your request already exists.
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface CallInstructionsMessageType {
  /**
   * The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.
   * @public
   */
  Text?: string | undefined;
}

/**
 * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
 * @public
 */
export interface CloudWatchLogsDestination {
  /**
   * The Amazon Resource Name (ARN) of an Amazon Identity and Access Management (IAM) role that is able to write event data to an Amazon CloudWatch destination.
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * The name of the Amazon CloudWatch Log Group that you want to record events in.
   * @public
   */
  LogGroupArn?: string | undefined;
}

/**
 * A request to create a new configuration set.
 * @public
 */
export interface CreateConfigurationSetRequest {
  /**
   * The name that you want to give the configuration set.
   * @public
   */
  ConfigurationSetName?: string | undefined;
}

/**
 * An empty object that indicates that the configuration set was successfully created.
 * @public
 */
export interface CreateConfigurationSetResponse {}

/**
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 * @public
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @public
 */
export interface KinesisFirehoseDestination {
  /**
   * The Amazon Resource Name (ARN) of an IAM role that can write data to an Amazon Kinesis Data Firehose stream.
   * @public
   */
  DeliveryStreamArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose destination that you want to use in the event destination.
   * @public
   */
  IamRoleArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EventType = {
  ANSWERED: "ANSWERED",
  BUSY: "BUSY",
  COMPLETED_CALL: "COMPLETED_CALL",
  FAILED: "FAILED",
  INITIATED_CALL: "INITIATED_CALL",
  NO_ANSWER: "NO_ANSWER",
  RINGING: "RINGING",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * An object that contains information about an event destination that sends data to Amazon SNS.
 * @public
 */
export interface SnsDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.
   * @public
   */
  TopicArn?: string | undefined;
}

/**
 * An object that defines a single event destination.
 * @public
 */
export interface EventDestinationDefinition {
  /**
   * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
   * @public
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined;

  /**
   * Indicates whether or not the event destination is enabled. If the event destination is enabled, then Amazon Pinpoint sends response data to the specified event destination.
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined;

  /**
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   * @public
   */
  MatchingEventTypes?: EventType[] | undefined;

  /**
   * An object that contains information about an event destination that sends data to Amazon SNS.
   * @public
   */
  SnsDestination?: SnsDestination | undefined;
}

/**
 * Create a new event destination in a configuration set.
 * @public
 */
export interface CreateConfigurationSetEventDestinationRequest {
  /**
   * ConfigurationSetName
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * An object that defines a single event destination.
   * @public
   */
  EventDestination?: EventDestinationDefinition | undefined;

  /**
   * A name that identifies the event destination.
   * @public
   */
  EventDestinationName?: string | undefined;
}

/**
 * An empty object that indicates that the event destination was created successfully.
 * @public
 */
export interface CreateConfigurationSetEventDestinationResponse {}

/**
 * The resource you attempted to access doesn't exist.
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 */
export interface DeleteConfigurationSetRequest {
  /**
   * ConfigurationSetName
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * An empty object that indicates that the configuration set was deleted successfully.
 * @public
 */
export interface DeleteConfigurationSetResponse {}

/**
 * @public
 */
export interface DeleteConfigurationSetEventDestinationRequest {
  /**
   * ConfigurationSetName
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * EventDestinationName
   * @public
   */
  EventDestinationName: string | undefined;
}

/**
 * An empty object that indicates that the event destination was deleted successfully.
 * @public
 */
export interface DeleteConfigurationSetEventDestinationResponse {}

/**
 * An object that defines an event destination.
 * @public
 */
export interface EventDestination {
  /**
   * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
   * @public
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination | undefined;

  /**
   * Indicates whether or not the event destination is enabled. If the event destination is enabled, then Amazon Pinpoint sends response data to the specified event destination.
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined;

  /**
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   * @public
   */
  MatchingEventTypes?: EventType[] | undefined;

  /**
   * A name that identifies the event destination configuration.
   * @public
   */
  Name?: string | undefined;

  /**
   * An object that contains information about an event destination that sends data to Amazon SNS.
   * @public
   */
  SnsDestination?: SnsDestination | undefined;
}

/**
 * @public
 */
export interface GetConfigurationSetEventDestinationsRequest {
  /**
   * ConfigurationSetName
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * An object that contains information about an event destination.
 * @public
 */
export interface GetConfigurationSetEventDestinationsResponse {
  /**
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   * @public
   */
  EventDestinations?: EventDestination[] | undefined;
}

/**
 * @public
 */
export interface ListConfigurationSetsRequest {
  /**
   * A token returned from a previous call to the API that indicates the position in the list of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Used to specify the number of items that should be returned in the response.
   * @public
   */
  PageSize?: string | undefined;
}

/**
 * An object that contains information about the configuration sets for your account in the current region.
 * @public
 */
export interface ListConfigurationSetsResponse {
  /**
   * An object that contains a list of configuration sets for your account in the current region.
   * @public
   */
  ConfigurationSets?: string[] | undefined;

  /**
   * A token returned from a previous call to ListConfigurationSets to indicate the position in the list of configuration sets.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An object that defines a message that contains unformatted text.
 * @public
 */
export interface PlainTextMessageType {
  /**
   * The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * The plain (not SSML-formatted) text to deliver to the recipient.
   * @public
   */
  Text?: string | undefined;

  /**
   * The name of the voice that you want to use to deliver the message. For a complete list of supported voices, see the Amazon Polly Developer Guide.
   * @public
   */
  VoiceId?: string | undefined;
}

/**
 * An object that defines a message that contains SSML-formatted text.
 * @public
 */
export interface SSMLMessageType {
  /**
   * The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * The SSML-formatted text to deliver to the recipient.
   * @public
   */
  Text?: string | undefined;

  /**
   * The name of the voice that you want to use to deliver the message. For a complete list of supported voices, see the Amazon Polly Developer Guide.
   * @public
   */
  VoiceId?: string | undefined;
}

/**
 * An object that contains a voice message and information about the recipient that you want to send it to.
 * @public
 */
export interface VoiceMessageContent {
  /**
   * An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
   * @public
   */
  CallInstructionsMessage?: CallInstructionsMessageType | undefined;

  /**
   * An object that defines a message that contains unformatted text.
   * @public
   */
  PlainTextMessage?: PlainTextMessageType | undefined;

  /**
   * An object that defines a message that contains SSML-formatted text.
   * @public
   */
  SSMLMessage?: SSMLMessageType | undefined;
}

/**
 * SendVoiceMessageRequest
 * @public
 */
export interface SendVoiceMessageRequest {
  /**
   * The phone number that appears on recipients' devices when they receive the message.
   * @public
   */
  CallerId?: string | undefined;

  /**
   * The name of the configuration set that you want to use to send the message.
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * An object that contains a voice message and information about the recipient that you want to send it to.
   * @public
   */
  Content?: VoiceMessageContent | undefined;

  /**
   * The phone number that you want to send the voice message to.
   * @public
   */
  DestinationPhoneNumber?: string | undefined;

  /**
   * The phone number that Amazon Pinpoint should use to send the voice message. This isn't necessarily the phone number that appears on recipients' devices when they receive the message, because you can specify a CallerId parameter in the request.
   * @public
   */
  OriginationPhoneNumber?: string | undefined;
}

/**
 * An object that that contains the Message ID of a Voice message that was sent successfully.
 * @public
 */
export interface SendVoiceMessageResponse {
  /**
   * A unique identifier for the voice message.
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * UpdateConfigurationSetEventDestinationRequest
 * @public
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  /**
   * ConfigurationSetName
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * An object that defines a single event destination.
   * @public
   */
  EventDestination?: EventDestinationDefinition | undefined;

  /**
   * EventDestinationName
   * @public
   */
  EventDestinationName: string | undefined;
}

/**
 * An empty object that indicates that the event destination was updated successfully.
 * @public
 */
export interface UpdateConfigurationSetEventDestinationResponse {}
