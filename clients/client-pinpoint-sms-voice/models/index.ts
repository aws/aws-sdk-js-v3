import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * The resource specified in your request already exists.
 */
export interface AlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace AlreadyExistsException {
  export function isa(o: any): o is AlreadyExistsException {
    return __isa(o, "AlreadyExistsException");
  }
}

/**
 * The input you provided is invalid.
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

/**
 * An object that defines a message that contains text formatted using Amazon Pinpoint Voice Instructions markup.
 */
export interface CallInstructionsMessageType {
  __type?: "CallInstructionsMessageType";
  /**
   * The language to use when delivering the message. For a complete list of supported languages, see the Amazon Polly Developer Guide.
   */
  Text?: string;
}

export namespace CallInstructionsMessageType {
  export function isa(o: any): o is CallInstructionsMessageType {
    return __isa(o, "CallInstructionsMessageType");
  }
}

/**
 * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
 */
export interface CloudWatchLogsDestination {
  __type?: "CloudWatchLogsDestination";
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
  export function isa(o: any): o is CloudWatchLogsDestination {
    return __isa(o, "CloudWatchLogsDestination");
  }
}

/**
 * Create a new event destination in a configuration set.
 */
export interface CreateConfigurationSetEventDestinationRequest {
  __type?: "CreateConfigurationSetEventDestinationRequest";
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
  export function isa(
    o: any
  ): o is CreateConfigurationSetEventDestinationRequest {
    return __isa(o, "CreateConfigurationSetEventDestinationRequest");
  }
}

/**
 * An empty object that indicates that the event destination was created successfully.
 */
export interface CreateConfigurationSetEventDestinationResponse {
  __type?: "CreateConfigurationSetEventDestinationResponse";
}

export namespace CreateConfigurationSetEventDestinationResponse {
  export function isa(
    o: any
  ): o is CreateConfigurationSetEventDestinationResponse {
    return __isa(o, "CreateConfigurationSetEventDestinationResponse");
  }
}

/**
 * A request to create a new configuration set.
 */
export interface CreateConfigurationSetRequest {
  __type?: "CreateConfigurationSetRequest";
  /**
   * The name that you want to give the configuration set.
   */
  ConfigurationSetName?: string;
}

export namespace CreateConfigurationSetRequest {
  export function isa(o: any): o is CreateConfigurationSetRequest {
    return __isa(o, "CreateConfigurationSetRequest");
  }
}

/**
 * An empty object that indicates that the configuration set was successfully created.
 */
export interface CreateConfigurationSetResponse {
  __type?: "CreateConfigurationSetResponse";
}

export namespace CreateConfigurationSetResponse {
  export function isa(o: any): o is CreateConfigurationSetResponse {
    return __isa(o, "CreateConfigurationSetResponse");
  }
}

export interface DeleteConfigurationSetEventDestinationRequest {
  __type?: "DeleteConfigurationSetEventDestinationRequest";
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
  export function isa(
    o: any
  ): o is DeleteConfigurationSetEventDestinationRequest {
    return __isa(o, "DeleteConfigurationSetEventDestinationRequest");
  }
}

/**
 * An empty object that indicates that the event destination was deleted successfully.
 */
export interface DeleteConfigurationSetEventDestinationResponse {
  __type?: "DeleteConfigurationSetEventDestinationResponse";
}

export namespace DeleteConfigurationSetEventDestinationResponse {
  export function isa(
    o: any
  ): o is DeleteConfigurationSetEventDestinationResponse {
    return __isa(o, "DeleteConfigurationSetEventDestinationResponse");
  }
}

export interface DeleteConfigurationSetRequest {
  __type?: "DeleteConfigurationSetRequest";
  /**
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;
}

export namespace DeleteConfigurationSetRequest {
  export function isa(o: any): o is DeleteConfigurationSetRequest {
    return __isa(o, "DeleteConfigurationSetRequest");
  }
}

/**
 * An empty object that indicates that the configuration set was deleted successfully.
 */
export interface DeleteConfigurationSetResponse {
  __type?: "DeleteConfigurationSetResponse";
}

export namespace DeleteConfigurationSetResponse {
  export function isa(o: any): o is DeleteConfigurationSetResponse {
    return __isa(o, "DeleteConfigurationSetResponse");
  }
}

/**
 * An object that defines an event destination.
 */
export interface EventDestination {
  __type?: "EventDestination";
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
  MatchingEventTypes?: Array<EventType | string>;

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
  export function isa(o: any): o is EventDestination {
    return __isa(o, "EventDestination");
  }
}

/**
 * An object that defines a single event destination.
 */
export interface EventDestinationDefinition {
  __type?: "EventDestinationDefinition";
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
  MatchingEventTypes?: Array<EventType | string>;

  /**
   * An object that contains information about an event destination that sends data to Amazon SNS.
   */
  SnsDestination?: SnsDestination;
}

export namespace EventDestinationDefinition {
  export function isa(o: any): o is EventDestinationDefinition {
    return __isa(o, "EventDestinationDefinition");
  }
}

export enum EventType {
  ANSWERED = "ANSWERED",
  BUSY = "BUSY",
  COMPLETED_CALL = "COMPLETED_CALL",
  FAILED = "FAILED",
  INITIATED_CALL = "INITIATED_CALL",
  NO_ANSWER = "NO_ANSWER",
  RINGING = "RINGING"
}

export interface GetConfigurationSetEventDestinationsRequest {
  __type?: "GetConfigurationSetEventDestinationsRequest";
  /**
   * ConfigurationSetName
   */
  ConfigurationSetName: string | undefined;
}

export namespace GetConfigurationSetEventDestinationsRequest {
  export function isa(
    o: any
  ): o is GetConfigurationSetEventDestinationsRequest {
    return __isa(o, "GetConfigurationSetEventDestinationsRequest");
  }
}

/**
 * An object that contains information about an event destination.
 */
export interface GetConfigurationSetEventDestinationsResponse {
  __type?: "GetConfigurationSetEventDestinationsResponse";
  /**
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   */
  EventDestinations?: Array<EventDestination>;
}

export namespace GetConfigurationSetEventDestinationsResponse {
  export function isa(
    o: any
  ): o is GetConfigurationSetEventDestinationsResponse {
    return __isa(o, "GetConfigurationSetEventDestinationsResponse");
  }
}

/**
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 */
export interface InternalServiceErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceErrorException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceErrorException {
  export function isa(o: any): o is InternalServiceErrorException {
    return __isa(o, "InternalServiceErrorException");
  }
}

/**
 * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
 */
export interface KinesisFirehoseDestination {
  __type?: "KinesisFirehoseDestination";
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
  export function isa(o: any): o is KinesisFirehoseDestination {
    return __isa(o, "KinesisFirehoseDestination");
  }
}

/**
 * There are too many instances of the specified resource type.
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export interface ListConfigurationSetsRequest {
  __type?: "ListConfigurationSetsRequest";
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
  export function isa(o: any): o is ListConfigurationSetsRequest {
    return __isa(o, "ListConfigurationSetsRequest");
  }
}

/**
 * An object that contains information about the configuration sets for your account in the current region.
 */
export interface ListConfigurationSetsResponse {
  __type?: "ListConfigurationSetsResponse";
  /**
   * An object that contains a list of configuration sets for your account in the current region.
   */
  ConfigurationSets?: Array<string>;

  /**
   * A token returned from a previous call to ListConfigurationSets to indicate the position in the list of configuration sets.
   */
  NextToken?: string;
}

export namespace ListConfigurationSetsResponse {
  export function isa(o: any): o is ListConfigurationSetsResponse {
    return __isa(o, "ListConfigurationSetsResponse");
  }
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
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

/**
 * An object that defines a message that contains unformatted text.
 */
export interface PlainTextMessageType {
  __type?: "PlainTextMessageType";
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
  export function isa(o: any): o is PlainTextMessageType {
    return __isa(o, "PlainTextMessageType");
  }
}

/**
 * An object that defines a message that contains SSML-formatted text.
 */
export interface SSMLMessageType {
  __type?: "SSMLMessageType";
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
  export function isa(o: any): o is SSMLMessageType {
    return __isa(o, "SSMLMessageType");
  }
}

/**
 * SendVoiceMessageRequest
 */
export interface SendVoiceMessageRequest {
  __type?: "SendVoiceMessageRequest";
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
  export function isa(o: any): o is SendVoiceMessageRequest {
    return __isa(o, "SendVoiceMessageRequest");
  }
}

/**
 * An object that that contains the Message ID of a Voice message that was sent successfully.
 */
export interface SendVoiceMessageResponse {
  __type?: "SendVoiceMessageResponse";
  /**
   * A unique identifier for the voice message.
   */
  MessageId?: string;
}

export namespace SendVoiceMessageResponse {
  export function isa(o: any): o is SendVoiceMessageResponse {
    return __isa(o, "SendVoiceMessageResponse");
  }
}

/**
 * An object that contains information about an event destination that sends data to Amazon SNS.
 */
export interface SnsDestination {
  __type?: "SnsDestination";
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.
   */
  TopicArn?: string;
}

export namespace SnsDestination {
  export function isa(o: any): o is SnsDestination {
    return __isa(o, "SnsDestination");
  }
}

/**
 * You've issued too many requests to the resource. Wait a few minutes, and then try again.
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyRequestsException {
  export function isa(o: any): o is TooManyRequestsException {
    return __isa(o, "TooManyRequestsException");
  }
}

/**
 * UpdateConfigurationSetEventDestinationRequest
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  __type?: "UpdateConfigurationSetEventDestinationRequest";
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
  export function isa(
    o: any
  ): o is UpdateConfigurationSetEventDestinationRequest {
    return __isa(o, "UpdateConfigurationSetEventDestinationRequest");
  }
}

/**
 * An empty object that indicates that the event destination was updated successfully.
 */
export interface UpdateConfigurationSetEventDestinationResponse {
  __type?: "UpdateConfigurationSetEventDestinationResponse";
}

export namespace UpdateConfigurationSetEventDestinationResponse {
  export function isa(
    o: any
  ): o is UpdateConfigurationSetEventDestinationResponse {
    return __isa(o, "UpdateConfigurationSetEventDestinationResponse");
  }
}

/**
 * An object that contains a voice message and information about the recipient that you want to send it to.
 */
export interface VoiceMessageContent {
  __type?: "VoiceMessageContent";
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
  export function isa(o: any): o is VoiceMessageContent {
    return __isa(o, "VoiceMessageContent");
  }
}
