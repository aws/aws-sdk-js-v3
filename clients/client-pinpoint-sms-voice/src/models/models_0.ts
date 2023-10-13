// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { PinpointSMSVoiceServiceException as __BaseException } from "./PinpointSMSVoiceServiceException";

/**
 * @public
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
 * @public
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
 * @public
 * An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
 */
export interface CallInstructionsMessageType {
  /**
   * @public
   * The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.
   */
  Text?: string;
}

/**
 * @public
 * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
 */
export interface CloudWatchLogsDestination {
  /**
   * @public
   * The Amazon Resource Name (ARN) of an Amazon Identity and Access Management (IAM) role that is able to write event data to an Amazon CloudWatch destination.
   */
  IamRoleArn?: string;

  /**
   * @public
   * The name of the Amazon CloudWatch Log Group that you want to record events in.
   */
  LogGroupArn?: string;
}

/**
 * @public
 * A request to create a new configuration set.
 */
export interface CreateConfigurationSetRequest {
  /**
   * @public
   * The name that you want to give the configuration set.
   */
  ConfigurationSetName?: string;
}

/**
 * @public
 * An empty object that indicates that the configuration set was successfully created.
 */
export interface CreateConfigurationSetResponse {}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
 * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
 */
export interface KinesisFirehoseDestination {
  /**
   * @public
   * The Amazon Resource Name (ARN) of an IAM role that can write data to an Amazon Kinesis Data Firehose stream.
   */
  DeliveryStreamArn?: string;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose destination that you want to use in the event destination.
   */
  IamRoleArn?: string;
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
 * @public
 * An object that contains information about an event destination that sends data to Amazon SNS.
 */
export interface SnsDestination {
  /**
   * @public
   * The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.
   */
  TopicArn?: string;
}

/**
 * @public
 * An object that defines a single event destination.
 */
export interface EventDestinationDefinition {
  /**
   * @public
   * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * @public
   * Indicates whether or not the event destination is enabled. If the event destination is enabled, then Amazon Pinpoint sends response data to the specified event destination.
   */
  Enabled?: boolean;

  /**
   * @public
   * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * @public
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   */
  MatchingEventTypes?: EventType[];

  /**
   * @public
   * An object that contains information about an event destination that sends data to Amazon SNS.
   */
  SnsDestination?: SnsDestination;
}

/**
 * @public
 * Create a new event destination in a configuration set.
 */
export interface CreateConfigurationSetEventDestinationRequest {
  /**
   * @public
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * An object that defines a single event destination.
   */
  EventDestination?: EventDestinationDefinition;

  /**
   * @public
   * A name that identifies the event destination.
   */
  EventDestinationName?: string;
}

/**
 * @public
 * An empty object that indicates that the event destination was created successfully.
 */
export interface CreateConfigurationSetEventDestinationResponse {}

/**
 * @public
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

/**
 * @public
 */
export interface DeleteConfigurationSetRequest {
  /**
   * @public
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 * An empty object that indicates that the configuration set was deleted successfully.
 */
export interface DeleteConfigurationSetResponse {}

/**
 * @public
 */
export interface DeleteConfigurationSetEventDestinationRequest {
  /**
   * @public
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * EventDestinationName
   */
  EventDestinationName: string | undefined;
}

/**
 * @public
 * An empty object that indicates that the event destination was deleted successfully.
 */
export interface DeleteConfigurationSetEventDestinationResponse {}

/**
 * @public
 * An object that defines an event destination.
 */
export interface EventDestination {
  /**
   * @public
   * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
   */
  CloudWatchLogsDestination?: CloudWatchLogsDestination;

  /**
   * @public
   * Indicates whether or not the event destination is enabled. If the event destination is enabled, then Amazon Pinpoint sends response data to the specified event destination.
   */
  Enabled?: boolean;

  /**
   * @public
   * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * @public
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   */
  MatchingEventTypes?: EventType[];

  /**
   * @public
   * A name that identifies the event destination configuration.
   */
  Name?: string;

  /**
   * @public
   * An object that contains information about an event destination that sends data to Amazon SNS.
   */
  SnsDestination?: SnsDestination;
}

/**
 * @public
 */
export interface GetConfigurationSetEventDestinationsRequest {
  /**
   * @public
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 * An object that contains information about an event destination.
 */
export interface GetConfigurationSetEventDestinationsResponse {
  /**
   * @public
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   */
  EventDestinations?: EventDestination[];
}

/**
 * @public
 */
export interface ListConfigurationSetsRequest {
  /**
   * @public
   * A token returned from a previous call to the API that indicates the position in the list of results.
   */
  NextToken?: string;

  /**
   * @public
   * Used to specify the number of items that should be returned in the response.
   */
  PageSize?: string;
}

/**
 * @public
 * An object that contains information about the configuration sets for your account in the current region.
 */
export interface ListConfigurationSetsResponse {
  /**
   * @public
   * An object that contains a list of configuration sets for your account in the current region.
   */
  ConfigurationSets?: string[];

  /**
   * @public
   * A token returned from a previous call to ListConfigurationSets to indicate the position in the list of configuration sets.
   */
  NextToken?: string;
}

/**
 * @public
 * An object that defines a message that contains unformatted text.
 */
export interface PlainTextMessageType {
  /**
   * @public
   * The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.
   */
  LanguageCode?: string;

  /**
   * @public
   * The plain (not SSML-formatted) text to deliver to the recipient.
   */
  Text?: string;

  /**
   * @public
   * The name of the voice that you want to use to deliver the message. For a complete list of supported voices, see the Amazon Polly Developer Guide.
   */
  VoiceId?: string;
}

/**
 * @public
 * An object that defines a message that contains SSML-formatted text.
 */
export interface SSMLMessageType {
  /**
   * @public
   * The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.
   */
  LanguageCode?: string;

  /**
   * @public
   * The SSML-formatted text to deliver to the recipient.
   */
  Text?: string;

  /**
   * @public
   * The name of the voice that you want to use to deliver the message. For a complete list of supported voices, see the Amazon Polly Developer Guide.
   */
  VoiceId?: string;
}

/**
 * @public
 * An object that contains a voice message and information about the recipient that you want to send it to.
 */
export interface VoiceMessageContent {
  /**
   * @public
   * An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
   */
  CallInstructionsMessage?: CallInstructionsMessageType;

  /**
   * @public
   * An object that defines a message that contains unformatted text.
   */
  PlainTextMessage?: PlainTextMessageType;

  /**
   * @public
   * An object that defines a message that contains SSML-formatted text.
   */
  SSMLMessage?: SSMLMessageType;
}

/**
 * @public
 * SendVoiceMessageRequest
 */
export interface SendVoiceMessageRequest {
  /**
   * @public
   * The phone number that appears on recipients' devices when they receive the message.
   */
  CallerId?: string;

  /**
   * @public
   * The name of the configuration set that you want to use to send the message.
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * An object that contains a voice message and information about the recipient that you want to send it to.
   */
  Content?: VoiceMessageContent;

  /**
   * @public
   * The phone number that you want to send the voice message to.
   */
  DestinationPhoneNumber?: string;

  /**
   * @public
   * The phone number that Amazon Pinpoint should use to send the voice message. This isn't necessarily the phone number that appears on recipients' devices when they receive the message, because you can specify a CallerId parameter in the request.
   */
  OriginationPhoneNumber?: string;
}

/**
 * @public
 * An object that that contains the Message ID of a Voice message that was sent successfully.
 */
export interface SendVoiceMessageResponse {
  /**
   * @public
   * A unique identifier for the voice message.
   */
  MessageId?: string;
}

/**
 * @public
 * UpdateConfigurationSetEventDestinationRequest
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  /**
   * @public
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * An object that defines a single event destination.
   */
  EventDestination?: EventDestinationDefinition;

  /**
   * @public
   * EventDestinationName
   */
  EventDestinationName: string | undefined;
}

/**
 * @public
 * An empty object that indicates that the event destination was updated successfully.
 */
export interface UpdateConfigurationSetEventDestinationResponse {}
