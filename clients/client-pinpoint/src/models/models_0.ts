// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { PinpointServiceException as __BaseException } from "./PinpointServiceException";

/**
 * @public
 * @enum
 */
export const __EndpointTypesElement = {
  ADM: "ADM",
  APNS: "APNS",
  APNS_SANDBOX: "APNS_SANDBOX",
  APNS_VOIP: "APNS_VOIP",
  APNS_VOIP_SANDBOX: "APNS_VOIP_SANDBOX",
  BAIDU: "BAIDU",
  CUSTOM: "CUSTOM",
  EMAIL: "EMAIL",
  GCM: "GCM",
  IN_APP: "IN_APP",
  PUSH: "PUSH",
  SMS: "SMS",
  VOICE: "VOICE",
} as const;

/**
 * @public
 */
export type __EndpointTypesElement = (typeof __EndpointTypesElement)[keyof typeof __EndpointTypesElement];

/**
 * @public
 * @enum
 */
export const __TimezoneEstimationMethodsElement = {
  PHONE_NUMBER: "PHONE_NUMBER",
  POSTAL_CODE: "POSTAL_CODE",
} as const;

/**
 * @public
 */
export type __TimezoneEstimationMethodsElement =
  (typeof __TimezoneEstimationMethodsElement)[keyof typeof __TimezoneEstimationMethodsElement];

/**
 * @public
 * @enum
 */
export const Action = {
  DEEP_LINK: "DEEP_LINK",
  OPEN_APP: "OPEN_APP",
  URL: "URL",
} as const;

/**
 * @public
 */
export type Action = (typeof Action)[keyof typeof Action];

/**
 * @public
 * <p>Provides information about an activity that was performed by a campaign.</p>
 */
export interface ActivityResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the campaign applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the campaign that the activity applies to.</p>
   */
  CampaignId: string | undefined;

  /**
   * @public
   * <p>The actual time, in ISO 8601 format, when the activity was marked CANCELLED or COMPLETED.</p>
   */
  End?: string;

  /**
   * @public
   * <p>The unique identifier for the activity.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Specifies whether the activity succeeded. Possible values are SUCCESS and FAIL.</p>
   */
  Result?: string;

  /**
   * @public
   * <p>The scheduled start time, in ISO 8601 format, for the activity.</p>
   */
  ScheduledStart?: string;

  /**
   * @public
   * <p>The actual start time, in ISO 8601 format, of the activity.</p>
   */
  Start?: string;

  /**
   * @public
   * <p>The current status of the activity. Possible values are: PENDING, INITIALIZING, RUNNING, PAUSED, CANCELLED, and COMPLETED.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The total number of endpoints that the campaign successfully delivered messages to.</p>
   */
  SuccessfulEndpointCount?: number;

  /**
   * @public
   * <p>The total number of time zones that were completed.</p>
   */
  TimezonesCompletedCount?: number;

  /**
   * @public
   * <p>The total number of unique time zones that are in the segment for the campaign.</p>
   */
  TimezonesTotalCount?: number;

  /**
   * @public
   * <p>The total number of endpoints that the campaign attempted to deliver messages to.</p>
   */
  TotalEndpointCount?: number;

  /**
   * @public
   * <p>The unique identifier for the campaign treatment that the activity applies to. A treatment is a variation of a campaign that's used for A/B testing of a campaign.</p>
   */
  TreatmentId?: string;

  /**
   * @public
   * <p>A JSON object that contains metrics relating to the campaign execution for this campaign activity. For information about the structure and contents of the results, see <a href="https://docs.aws.amazon.com//pinpoint/latest/developerguide/analytics-standard-metrics.html">Standard Amazon Pinpoint analytics metrics</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>
   */
  ExecutionMetrics?: Record<string, string>;
}

/**
 * @public
 * <p>Provides information about the activities that were performed by a campaign.</p>
 */
export interface ActivitiesResponse {
  /**
   * @public
   * <p>An array of responses, one for each activity that was performed by the campaign.</p>
   */
  Item: ActivityResponse[] | undefined;

  /**
   * @public
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const AttributeType = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  EXCLUSIVE: "EXCLUSIVE",
  INCLUSIVE: "INCLUSIVE",
  ON: "ON",
} as const;

/**
 * @public
 */
export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];

/**
 * @public
 * <p>Specifies attribute-based criteria for including or excluding endpoints from a segment.</p>
 */
export interface AttributeDimension {
  /**
   * @public
   * <p>The type of segment dimension to use. Valid values are: <ul><li>INCLUSIVE - endpoints that have attributes matching the values are included in the segment.</li><li>EXCLUSIVE - endpoints that have attributes matching the values are excluded in the segment.</li><li>CONTAINS - endpoints that have attributes' substrings match the values are included in the segment.</li><li>BEFORE - endpoints with attributes read as ISO_INSTANT datetimes before the value are included in the segment.</li><li>AFTER - endpoints with attributes read as ISO_INSTANT datetimes after the value are included in the segment.</li><li>ON - endpoints with attributes read as ISO_INSTANT dates on the value are included in the segment. Time is ignored in this comparison.</li><li>BETWEEN - endpoints with attributes read as ISO_INSTANT datetimes between the values are included in the segment.</li></p>
   */
  AttributeType?: AttributeType;

  /**
   * @public
   * <p>The criteria values to use for the segment dimension. Depending on the value of the AttributeType property, endpoints are included or excluded from the segment if their attribute values match the criteria values.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DimensionType = {
  EXCLUSIVE: "EXCLUSIVE",
  INCLUSIVE: "INCLUSIVE",
} as const;

/**
 * @public
 */
export type DimensionType = (typeof DimensionType)[keyof typeof DimensionType];

/**
 * @public
 * <p>Specifies the dimension type and values for a segment dimension.</p>
 */
export interface SetDimension {
  /**
   * @public
   * <p>The type of segment dimension to use. Valid values are: INCLUSIVE, endpoints that match the criteria are included in the segment; and, EXCLUSIVE, endpoints that match the criteria are excluded from the segment.</p>
   */
  DimensionType?: DimensionType;

  /**
   * @public
   * <p>The criteria values to use for the segment dimension. Depending on the value of the DimensionType property, endpoints are included or excluded from the segment if their values match the criteria values.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 * <p>Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.</p>
 */
export interface MetricDimension {
  /**
   * @public
   * <p>The operator to use when comparing metric values. Valid values are: GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, and EQUAL.</p>
   */
  ComparisonOperator: string | undefined;

  /**
   * @public
   * <p>The value to compare.</p>
   */
  Value: number | undefined;
}

/**
 * @public
 * <p>Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.</p>
 */
export interface EventDimensions {
  /**
   * @public
   * <p>One or more custom attributes that your application reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create an event filter.</p>
   */
  Attributes?: Record<string, AttributeDimension>;

  /**
   * @public
   * <p>The name of the event that causes the campaign to be sent or the journey activity to be performed. This can be a standard event that Amazon Pinpoint generates, such as _email.delivered. For campaigns, this can also be a custom event that's specific to your application. For information about standard events, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/event-streams.html">Streaming Amazon Pinpoint Events</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>
   */
  EventType?: SetDimension;

  /**
   * @public
   * <p>One or more custom metrics that your application reports to Amazon Pinpoint. You can use these metrics as selection criteria when you create an event filter.</p>
   */
  Metrics?: Record<string, MetricDimension>;
}

/**
 * @public
 * <p>Specifies the conditions to evaluate for an event that applies to an activity in a journey.</p>
 */
export interface EventCondition {
  /**
   * @public
   * <p>The dimensions for the event filter to use for the activity.</p>
   */
  Dimensions?: EventDimensions;

  /**
   * @public
   * <p>The message identifier (message_id) for the message to use when determining whether message events meet the condition.</p>
   */
  MessageActivity?: string;
}

/**
 * @public
 * <p>Specifies a segment to associate with an activity in a journey.</p>
 */
export interface SegmentCondition {
  /**
   * @public
   * <p>The unique identifier for the segment to associate with the activity.</p>
   */
  SegmentId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Duration = {
  DAY_14: "DAY_14",
  DAY_30: "DAY_30",
  DAY_7: "DAY_7",
  HR_24: "HR_24",
} as const;

/**
 * @public
 */
export type Duration = (typeof Duration)[keyof typeof Duration];

/**
 * @public
 * @enum
 */
export const RecencyType = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type RecencyType = (typeof RecencyType)[keyof typeof RecencyType];

/**
 * @public
 * <p>Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.</p>
 */
export interface RecencyDimension {
  /**
   * @public
   * <p>The duration to use when determining whether an endpoint is active or inactive.</p>
   */
  Duration: Duration | undefined;

  /**
   * @public
   * <p>The type of recency dimension to use for the segment. Valid values are: ACTIVE, endpoints that were active within the specified duration are included in the segment; and, INACTIVE, endpoints that weren't active within the specified duration are included in the segment.</p>
   */
  RecencyType: RecencyType | undefined;
}

/**
 * @public
 * <p>Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active.</p>
 */
export interface SegmentBehaviors {
  /**
   * @public
   * <p>The dimension settings that are based on how recently an endpoint was active.</p>
   */
  Recency?: RecencyDimension;
}

/**
 * @public
 * <p>Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.</p>
 */
export interface SegmentDemographics {
  /**
   * @public
   * <p>The app version criteria for the segment.</p>
   */
  AppVersion?: SetDimension;

  /**
   * @public
   * <p>The channel criteria for the segment.</p>
   */
  Channel?: SetDimension;

  /**
   * @public
   * <p>The device type criteria for the segment.</p>
   */
  DeviceType?: SetDimension;

  /**
   * @public
   * <p>The device make criteria for the segment.</p>
   */
  Make?: SetDimension;

  /**
   * @public
   * <p>The device model criteria for the segment.</p>
   */
  Model?: SetDimension;

  /**
   * @public
   * <p>The device platform criteria for the segment.</p>
   */
  Platform?: SetDimension;
}

/**
 * @public
 * <p>Specifies the GPS coordinates of a location.</p>
 */
export interface GPSCoordinates {
  /**
   * @public
   * <p>The latitude coordinate of the location.</p>
   */
  Latitude: number | undefined;

  /**
   * @public
   * <p>The longitude coordinate of the location.</p>
   */
  Longitude: number | undefined;
}

/**
 * @public
 * <p>Specifies GPS-based criteria for including or excluding endpoints from a segment.</p>
 */
export interface GPSPointDimension {
  /**
   * @public
   * <p>The GPS coordinates to measure distance from.</p>
   */
  Coordinates: GPSCoordinates | undefined;

  /**
   * @public
   * <p>The range, in kilometers, from the GPS coordinates.</p>
   */
  RangeInKilometers?: number;
}

/**
 * @public
 * <p>Specifies geographical dimension settings for a segment.</p>
 */
export interface SegmentLocation {
  /**
   * @public
   * <p>The country or region code, in ISO 3166-1 alpha-2 format, for the segment.</p>
   */
  Country?: SetDimension;

  /**
   * @public
   * <p>The GPS location and range for the segment.</p>
   */
  GPSPoint?: GPSPointDimension;
}

/**
 * @public
 * <p>Specifies the dimension settings for a segment.</p>
 */
export interface SegmentDimensions {
  /**
   * @public
   * <p>One or more custom attributes to use as criteria for the segment.</p>
   */
  Attributes?: Record<string, AttributeDimension>;

  /**
   * @public
   * <p>The behavior-based criteria, such as how recently users have used your app, for the segment.</p>
   */
  Behavior?: SegmentBehaviors;

  /**
   * @public
   * <p>The demographic-based criteria, such as device platform, for the segment.</p>
   */
  Demographic?: SegmentDemographics;

  /**
   * @public
   * <p>The location-based criteria, such as region or GPS coordinates, for the segment.</p>
   */
  Location?: SegmentLocation;

  /**
   * @public
   * <p>One or more custom metrics to use as criteria for the segment.</p>
   */
  Metrics?: Record<string, MetricDimension>;

  /**
   * @public
   * <p>One or more custom user attributes to use as criteria for the segment.</p>
   */
  UserAttributes?: Record<string, AttributeDimension>;
}

/**
 * @public
 * <p>Specifies a condition to evaluate for an activity in a journey.</p>
 */
export interface SimpleCondition {
  /**
   * @public
   * <p>The dimension settings for the event that's associated with the activity.</p>
   */
  EventCondition?: EventCondition;

  /**
   * @public
   * <p>The segment that's associated with the activity.</p>
   */
  SegmentCondition?: SegmentCondition;

  /**
   * @public
   * <p>The dimension settings for the segment that's associated with the activity.</p>
   */
  SegmentDimensions?: SegmentDimensions;
}

/**
 * @public
 * @enum
 */
export const Operator = {
  ALL: "ALL",
  ANY: "ANY",
} as const;

/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * <p>Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.</p>
 */
export interface Condition {
  /**
   * @public
   * <p>The conditions to evaluate for the activity.</p>
   */
  Conditions?: SimpleCondition[];

  /**
   * @public
   * <p>Specifies how to handle multiple conditions for the activity. For example, if you specify two conditions for an activity, whether both or only one of the conditions must be met for the activity to be performed.</p>
   */
  Operator?: Operator;
}

/**
 * @public
 * <p>Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey.</p>
 */
export interface WaitTime {
  /**
   * @public
   * <p>The amount of time to wait, as a duration in ISO 8601 format, before determining whether the activity's conditions have been met or moving participants to the next activity in the journey.</p>
   */
  WaitFor?: string;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when Amazon Pinpoint determines whether the activity's conditions have been met or the activity moves participants to the next activity in the journey.</p>
   */
  WaitUntil?: string;
}

/**
 * @public
 * <p>Specifies the settings for a yes/no split activity in a journey. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.</p> <note><p>To create yes/no split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note>
 */
export interface ConditionalSplitActivity {
  /**
   * @public
   * <p>The conditions that define the paths for the activity, and the relationship between the conditions.</p>
   */
  Condition?: Condition;

  /**
   * @public
   * <p>The amount of time to wait before determining whether the conditions are met, or the date and time when Amazon Pinpoint determines whether the conditions are met.</p>
   */
  EvaluationWaitTime?: WaitTime;

  /**
   * @public
   * <p>The unique identifier for the activity to perform if the conditions aren't met.</p>
   */
  FalseActivity?: string;

  /**
   * @public
   * <p>The unique identifier for the activity to perform if the conditions are met.</p>
   */
  TrueActivity?: string;
}

/**
 * @public
 */
export interface ContactCenterActivity {
  /**
   * @public
   * <p>The unique identifier for the next activity to perform after the this activity.</p>
   */
  NextActivity?: string;
}

/**
 * @public
 * <p>Specifies the message content for a custom channel message that's sent to participants in a journey.</p>
 */
export interface JourneyCustomMessage {
  /**
   * @public
   * <p>The message content that's passed to an AWS Lambda function or to a web hook.</p>
   */
  Data?: string;
}

/**
 * @public
 * <p>The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.</p>
 */
export interface CustomMessageActivity {
  /**
   * @public
   * <p>The destination to send the campaign or treatment to. This value can be one of the following:</p> <ul><li><p>The name or Amazon Resource Name (ARN) of an AWS Lambda function to invoke to handle delivery of the campaign or treatment.</p></li> <li><p>The URL for a web application or service that supports HTTPS and can receive the message. The URL has to be a full URL, including the HTTPS protocol.</p></li></ul>
   */
  DeliveryUri?: string;

  /**
   * @public
   * <p>The types of endpoints to send the custom message to. Each valid value maps to a type of channel that you can associate with an endpoint by using the ChannelType property of an endpoint.</p>
   */
  EndpointTypes?: __EndpointTypesElement[];

  /**
   * @public
   * <p>Specifies the message data included in a custom channel message that's sent to participants in a journey.</p>
   */
  MessageConfig?: JourneyCustomMessage;

  /**
   * @public
   * <p>The unique identifier for the next activity to perform, after Amazon Pinpoint calls the AWS Lambda function or web hook.</p>
   */
  NextActivity?: string;

  /**
   * @public
   * <p>The name of the custom message template to use for the message. If specified, this value must match the name of an existing message template.</p>
   */
  TemplateName?: string;

  /**
   * @public
   * <p>The unique identifier for the version of the message template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>
   */
  TemplateVersion?: string;
}

/**
 * @public
 * <p>Specifies the "From" address for an email message that's sent to participants in a journey.</p>
 */
export interface JourneyEmailMessage {
  /**
   * @public
   * <p>The verified email address to send the email message from. The default address is the FromAddress specified for the email channel for the application.</p>
   */
  FromAddress?: string;
}

/**
 * @public
 * <p>Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants.</p>
 */
export interface EmailMessageActivity {
  /**
   * @public
   * <p>Specifies the sender address for an email message that's sent to participants in the journey.</p>
   */
  MessageConfig?: JourneyEmailMessage;

  /**
   * @public
   * <p>The unique identifier for the next activity to perform, after the message is sent.</p>
   */
  NextActivity?: string;

  /**
   * @public
   * <p>The name of the email message template to use for the message. If specified, this value must match the name of an existing message template.</p>
   */
  TemplateName?: string;

  /**
   * @public
   * <p>The unique identifier for the version of the email template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>
   */
  TemplateVersion?: string;
}

/**
 * @public
 * <p>Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants.</p>
 */
export interface HoldoutActivity {
  /**
   * @public
   * <p>The unique identifier for the next activity to perform, after performing the holdout activity.</p>
   */
  NextActivity?: string;

  /**
   * @public
   * <p>The percentage of participants who shouldn't continue the journey.</p> <p>To determine which participants are held out, Amazon Pinpoint applies a probability-based algorithm to the percentage that you specify. Therefore, the actual percentage of participants who are held out may not be equal to the percentage that you specify.</p>
   */
  Percentage: number | undefined;
}

/**
 * @public
 * <p>Specifies a condition to evaluate for an activity path in a journey.</p>
 */
export interface MultiConditionalBranch {
  /**
   * @public
   * <p>The condition to evaluate for the activity path.</p>
   */
  Condition?: SimpleCondition;

  /**
   * @public
   * <p>The unique identifier for the next activity to perform, after completing the activity for the path.</p>
   */
  NextActivity?: string;
}

/**
 * @public
 * <p>Specifies the settings for a multivariate split activity in a journey. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.</p> <note><p>To create multivariate split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note>
 */
export interface MultiConditionalSplitActivity {
  /**
   * @public
   * <p>The paths for the activity, including the conditions for entering each path and the activity to perform for each path.</p>
   */
  Branches?: MultiConditionalBranch[];

  /**
   * @public
   * <p>The unique identifier for the activity to perform for participants who don't meet any of the conditions specified for other paths in the activity.</p>
   */
  DefaultActivity?: string;

  /**
   * @public
   * <p>The amount of time to wait or the date and time when Amazon Pinpoint determines whether the conditions are met.</p>
   */
  EvaluationWaitTime?: WaitTime;
}

/**
 * @public
 * <p>Specifies the message configuration for a push notification that's sent to participants in a journey.</p>
 */
export interface JourneyPushMessage {
  /**
   * @public
   * <p>The number of seconds that the push notification service should keep the message, if the service is unable to deliver the notification the first time. This value is converted to an expiration value when it's sent to a push-notification service. If this value is 0, the service treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.</p> <p>This value doesn't apply to messages that are sent through the Amazon Device Messaging (ADM) service.</p>
   */
  TimeToLive?: string;
}

/**
 * @public
 * <p>Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants.</p>
 */
export interface PushMessageActivity {
  /**
   * @public
   * <p>Specifies the time to live (TTL) value for push notifications that are sent to participants in a journey.</p>
   */
  MessageConfig?: JourneyPushMessage;

  /**
   * @public
   * <p>The unique identifier for the next activity to perform, after the message is sent.</p>
   */
  NextActivity?: string;

  /**
   * @public
   * <p>The name of the push notification template to use for the message. If specified, this value must match the name of an existing message template.</p>
   */
  TemplateName?: string;

  /**
   * @public
   * <p>The unique identifier for the version of the push notification template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>
   */
  TemplateVersion?: string;
}

/**
 * @public
 * <p>Specifies the settings for a path in a random split activity in a journey.</p>
 */
export interface RandomSplitEntry {
  /**
   * @public
   * <p>The unique identifier for the next activity to perform, after completing the activity for the path.</p>
   */
  NextActivity?: string;

  /**
   * @public
   * <p>The percentage of participants to send down the activity path.</p> <p>To determine which participants are sent down each path, Amazon Pinpoint applies a probability-based algorithm to the percentages that you specify for the paths. Therefore, the actual percentage of participants who are sent down a path may not be equal to the percentage that you specify.</p>
   */
  Percentage?: number;
}

/**
 * @public
 * <p>Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.</p>
 */
export interface RandomSplitActivity {
  /**
   * @public
   * <p>The paths for the activity, including the percentage of participants to enter each path and the activity to perform for each path.</p>
   */
  Branches?: RandomSplitEntry[];
}

/**
 * @public
 * @enum
 */
export const MessageType = {
  PROMOTIONAL: "PROMOTIONAL",
  TRANSACTIONAL: "TRANSACTIONAL",
} as const;

/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * @public
 * <p>Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.</p>
 */
export interface JourneySMSMessage {
  /**
   * @public
   * <p>The SMS message type. Valid values are TRANSACTIONAL (for messages that are critical or time-sensitive, such as a one-time passwords) and PROMOTIONAL (for messsages that aren't critical or time-sensitive, such as marketing messages).</p>
   */
  MessageType?: MessageType;

  /**
   * @public
   * <p>The long code to send the SMS message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code using an E.164 format to ensure prompt and accurate delivery of the message. For example, +12065550100.</p>
   */
  OriginationNumber?: string;

  /**
   * @public
   * <p>The sender ID to display as the sender of the message on a recipient's device. Support for sender IDs varies by country or region. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-countries.html">Supported Countries and Regions</a> in the Amazon Pinpoint User Guide.</p>
   */
  SenderId?: string;

  /**
   * @public
   * <p>The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.</p>
   */
  EntityId?: string;

  /**
   * @public
   * <p>The template ID received from the regulatory body for sending SMS in your country.</p>
   */
  TemplateId?: string;
}

/**
 * @public
 * <p>Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants.</p>
 */
export interface SMSMessageActivity {
  /**
   * @public
   * <p>Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.</p>
   */
  MessageConfig?: JourneySMSMessage;

  /**
   * @public
   * <p>The unique identifier for the next activity to perform, after the message is sent.</p>
   */
  NextActivity?: string;

  /**
   * @public
   * <p>The name of the SMS message template to use for the message. If specified, this value must match the name of an existing message template.</p>
   */
  TemplateName?: string;

  /**
   * @public
   * <p>The unique identifier for the version of the SMS template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>
   */
  TemplateVersion?: string;
}

/**
 * @public
 * <p>Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.</p>
 */
export interface WaitActivity {
  /**
   * @public
   * <p>The unique identifier for the next activity to perform, after performing the wait activity.</p>
   */
  NextActivity?: string;

  /**
   * @public
   * <p>The amount of time to wait or the date and time when the activity moves participants to the next activity in the journey.</p>
   */
  WaitTime?: WaitTime;
}

/**
 * @public
 * <p>Specifies the configuration and other settings for an activity in a journey.</p>
 */
export interface Activity {
  /**
   * @public
   * <p>The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.</p>
   */
  CUSTOM?: CustomMessageActivity;

  /**
   * @public
   * <p>The settings for a yes/no split activity. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.</p>
   */
  ConditionalSplit?: ConditionalSplitActivity;

  /**
   * @public
   * <p>The custom description of the activity.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The settings for an email activity. This type of activity sends an email message to participants.</p>
   */
  EMAIL?: EmailMessageActivity;

  /**
   * @public
   * <p>The settings for a holdout activity. This type of activity stops a journey for a specified percentage of participants.</p>
   */
  Holdout?: HoldoutActivity;

  /**
   * @public
   * <p>The settings for a multivariate split activity. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.</p>
   */
  MultiCondition?: MultiConditionalSplitActivity;

  /**
   * @public
   * <p>The settings for a push notification activity. This type of activity sends a push notification to participants.</p>
   */
  PUSH?: PushMessageActivity;

  /**
   * @public
   * <p>The settings for a random split activity. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.</p>
   */
  RandomSplit?: RandomSplitActivity;

  /**
   * @public
   * <p>The settings for an SMS activity. This type of activity sends a text message to participants.</p>
   */
  SMS?: SMSMessageActivity;

  /**
   * @public
   * <p>The settings for a wait activity. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.</p>
   */
  Wait?: WaitActivity;

  /**
   * @public
   * <p>The settings for a connect activity. This type of activity initiates a contact center call to participants.</p>
   */
  ContactCenter?: ContactCenterActivity;
}

/**
 * @public
 * @enum
 */
export const ChannelType = {
  ADM: "ADM",
  APNS: "APNS",
  APNS_SANDBOX: "APNS_SANDBOX",
  APNS_VOIP: "APNS_VOIP",
  APNS_VOIP_SANDBOX: "APNS_VOIP_SANDBOX",
  BAIDU: "BAIDU",
  CUSTOM: "CUSTOM",
  EMAIL: "EMAIL",
  GCM: "GCM",
  IN_APP: "IN_APP",
  PUSH: "PUSH",
  SMS: "SMS",
  VOICE: "VOICE",
} as const;

/**
 * @public
 */
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

/**
 * @public
 * <p>Specifies address-based configuration settings for a message that's sent directly to an endpoint.</p>
 */
export interface AddressConfiguration {
  /**
   * @public
   * <p>The message body to use instead of the default message body. This value overrides the default message body.</p>
   */
  BodyOverride?: string;

  /**
   * @public
   * <p>The channel to use when sending the message.</p>
   */
  ChannelType?: ChannelType;

  /**
   * @public
   * <p>An object that maps custom attributes to attributes for the address and is attached to the message. Attribute names are case sensitive.</p> <p>For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: Record<string, string>;

  /**
   * @public
   * <p>The raw, JSON-formatted string to use as the payload for the message. If specified, this value overrides all other values for the message.</p>
   */
  RawContent?: string;

  /**
   * @public
   * <p>A map of the message variables to merge with the variables specified by properties of the DefaultMessage object. The variables specified in this map take precedence over all other variables.</p>
   */
  Substitutions?: Record<string, string[]>;

  /**
   * @public
   * <p>The message title to use instead of the default message title. This value overrides the default message title.</p>
   */
  TitleOverride?: string;
}

/**
 * @public
 * <p>Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
 */
export interface ADMChannelRequest {
  /**
   * @public
   * <p>The Client ID that you received from Amazon to send messages by using ADM.</p>
   */
  ClientId: string | undefined;

  /**
   * @public
   * <p>The Client Secret that you received from Amazon to send messages by using ADM.</p>
   */
  ClientSecret: string | undefined;

  /**
   * @public
   * <p>Specifies whether to enable the ADM channel for the application.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
 */
export interface ADMChannelResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the ADM channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The date and time when the ADM channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>Specifies whether the ADM channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * @public
   * <p>(Deprecated) An identifier for the ADM channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Specifies whether the ADM channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * @public
   * <p>The user who last modified the ADM channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time when the ADM channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The type of messaging or notification platform for the channel. For the ADM channel, this value is ADM.</p>
   */
  Platform: string | undefined;

  /**
   * @public
   * <p>The current version of the ADM channel.</p>
   */
  Version?: number;
}

/**
 * @public
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel.</p>
 */
export interface ADMMessage {
  /**
   * @public
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action;

  /**
   * @public
   * <p>The body of the notification message.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>An arbitrary string that indicates that multiple messages are logically the same and that Amazon Device Messaging (ADM) can drop previously enqueued messages in favor of this message.</p>
   */
  ConsolidationKey?: string;

  /**
   * @public
   * <p>The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: Record<string, string>;

  /**
   * @public
   * <p>The amount of time, in seconds, that ADM should store the message if the recipient's device is offline. Amazon Pinpoint specifies this value in the expiresAfter parameter when it sends the notification message to ADM.</p>
   */
  ExpiresAfter?: string;

  /**
   * @public
   * <p>The icon image name of the asset saved in your app.</p>
   */
  IconReference?: string;

  /**
   * @public
   * <p>The URL of the large icon image to display in the content view of the push notification.</p>
   */
  ImageIconUrl?: string;

  /**
   * @public
   * <p>The URL of an image to display in the push notification.</p>
   */
  ImageUrl?: string;

  /**
   * @public
   * <p>The base64-encoded, MD5 checksum of the value specified by the Data property. ADM uses the MD5 value to verify the integrity of the data.</p>
   */
  MD5?: string;

  /**
   * @public
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p>
   */
  RawContent?: string;

  /**
   * @public
   * <p>Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.</p>
   */
  SilentPush?: boolean;

  /**
   * @public
   * <p>The URL of the small icon image to display in the status bar and the content view of the push notification.</p>
   */
  SmallImageIconUrl?: string;

  /**
   * @public
   * <p>The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p>
   */
  Sound?: string;

  /**
   * @public
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: Record<string, string[]>;

  /**
   * @public
   * <p>The title to display above the notification message on the recipient's device.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   */
  Url?: string;
}

/**
 * @public
 * @enum
 */
export const Alignment = {
  CENTER: "CENTER",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
} as const;

/**
 * @public
 */
export type Alignment = (typeof Alignment)[keyof typeof Alignment];

/**
 * @public
 * <p>Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel.</p>
 */
export interface AndroidPushNotificationTemplate {
  /**
   * @public
   * <p>The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action;

  /**
   * @public
   * <p>The message body to use in a push notification that's based on the message template.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The URL of the large icon image to display in the content view of a push notification that's based on the message template.</p>
   */
  ImageIconUrl?: string;

  /**
   * @public
   * <p>The URL of an image to display in a push notification that's based on the message template.</p>
   */
  ImageUrl?: string;

  /**
   * @public
   * <p>The raw, JSON-formatted string to use as the payload for a push notification that's based on the message template. If specified, this value overrides all other content for the message template.</p>
   */
  RawContent?: string;

  /**
   * @public
   * <p>The URL of the small icon image to display in the status bar and the content view of a push notification that's based on the message template.</p>
   */
  SmallImageIconUrl?: string;

  /**
   * @public
   * <p>The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p>
   */
  Sound?: string;

  /**
   * @public
   * <p>The title to use in a push notification that's based on the message template. This title appears above the notification message on a recipient's device.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
 */
export interface APNSChannelRequest {
  /**
   * @public
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   */
  BundleId?: string;

  /**
   * @public
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.</p>
   */
  Certificate?: string;

  /**
   * @public
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * @public
   * <p>Specifies whether to enable the APNs channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.</p>
   */
  PrivateKey?: string;

  /**
   * @public
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   */
  TeamId?: string;

  /**
   * @public
   * <p>The authentication key to use for APNs tokens.</p>
   */
  TokenKey?: string;

  /**
   * @public
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.</p>
   */
  TokenKeyId?: string;
}

/**
 * @public
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
 */
export interface APNSChannelResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the APNs channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The date and time when the APNs channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * @public
   * <p>Specifies whether the APNs channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * @public
   * <p>Specifies whether the APNs channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * @public
   * <p>(Deprecated) An identifier for the APNs channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Specifies whether the APNs channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * @public
   * <p>The user who last modified the APNs channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time when the APNs channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The type of messaging or notification platform for the channel. For the APNs channel, this value is APNS.</p>
   */
  Platform: string | undefined;

  /**
   * @public
   * <p>The current version of the APNs channel.</p>
   */
  Version?: number;
}

/**
 * @public
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel.</p>
 */
export interface APNSMessage {
  /**
   * @public
   * <p>The type of push notification to send. Valid values are:</p> <ul><li><p>alert - For a standard notification that's displayed on recipients' devices and prompts a recipient to interact with the notification.</p></li> <li><p>background - For a silent notification that delivers content in the background and isn't displayed on recipients' devices.</p></li> <li><p>complication - For a notification that contains update information for an app’s complication timeline.</p></li> <li><p>fileprovider - For a notification that signals changes to a File Provider extension.</p></li> <li><p>mdm - For a notification that tells managed devices to contact the MDM server.</p></li> <li><p>voip - For a notification that provides information about an incoming VoIP call.</p></li></ul> <p>Amazon Pinpoint specifies this value in the apns-push-type request header when it sends the notification message to APNs. If you don't specify a value for this property, Amazon Pinpoint sets the value to alert or background automatically, based on the value that you specify for the SilentPush or RawContent property of the message.</p> <p>For more information about the apns-push-type request header, see <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns">Sending Notification Requests to APNs</a> on the Apple Developer website.</p>
   */
  APNSPushType?: string;

  /**
   * @public
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action;

  /**
   * @public
   * <p>The key that indicates whether and how to modify the badge of your app's icon when the recipient receives the push notification. If this key isn't included in the dictionary, the badge doesn't change. To remove the badge, set this value to 0.</p>
   */
  Badge?: number;

  /**
   * @public
   * <p>The body of the notification message.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The key that indicates the notification type for the push notification. This key is a value that's defined by the identifier property of one of your app's registered categories.</p>
   */
  Category?: string;

  /**
   * @public
   * <p>An arbitrary identifier that, if assigned to multiple messages, APNs uses to coalesce the messages into a single push notification instead of delivering each message individually. This value can't exceed 64 bytes.</p> <p>Amazon Pinpoint specifies this value in the apns-collapse-id request header when it sends the notification message to APNs.</p>
   */
  CollapseId?: string;

  /**
   * @public
   * <p>The JSON payload to use for a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: Record<string, string>;

  /**
   * @public
   * <p>The URL of an image or video to display in the push notification.</p>
   */
  MediaUrl?: string;

  /**
   * @public
   * <p>The authentication method that you want Amazon Pinpoint to use when authenticating with APNs, CERTIFICATE or TOKEN.</p>
   */
  PreferredAuthenticationMethod?: string;

  /**
   * @public
   * <p>para>5 - Low priority, the notification might be delayed, delivered as part of a group, or throttled.</p>/listitem> <li><p>10 - High priority, the notification is sent immediately. This is the default value. A high priority notification should trigger an alert, play a sound, or badge your app's icon on the recipient's device.</p></li>/para> <p>Amazon Pinpoint specifies this value in the apns-priority request header when it sends the notification message to APNs.</p> <p>The equivalent values for Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), are normal, for 5, and high, for 10. If you specify an FCM value for this property, Amazon Pinpoint accepts and converts the value to the corresponding APNs value.</p>
   */
  Priority?: string;

  /**
   * @public
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p> <note><p>If you specify the raw content of an APNs push notification, the message payload has to include the content-available key. The value of the content-available key has to be an integer, and can only be 0 or 1. If you're sending a standard notification, set the value of content-available to 0. If you're sending a silent (background) notification, set the value of content-available to 1. Additionally, silent notification payloads can't include the alert, badge, or sound keys. For more information, see <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification">Generating a Remote Notification</a> and <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app">Pushing Background Updates to Your App</a> on the Apple Developer website.</p></note>
   */
  RawContent?: string;

  /**
   * @public
   * <p>Specifies whether the notification is a silent push notification. A silent (or background) push notification isn't displayed on recipients' devices. You can use silent push notifications to make small updates to your app, or to display messages in an in-app message center.</p> <p>Amazon Pinpoint uses this property to determine the correct value for the apns-push-type request header when it sends the notification message to APNs. If you specify a value of true for this property, Amazon Pinpoint sets the value for the apns-push-type header field to background.</p> <note><p>If you specify the raw content of an APNs push notification, the message payload has to include the content-available key. For silent (background) notifications, set the value of content-available to 1. Additionally, the message payload for a silent notification can't include the alert, badge, or sound keys. For more information, see <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification">Generating a Remote Notification</a> and <a href="https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/pushing_background_updates_to_your_app">Pushing Background Updates to Your App</a> on the Apple Developer website.</p> <p>Apple has indicated that they will throttle "excessive" background notifications based on current traffic volumes. To prevent your notifications being throttled, Apple recommends that you send no more than 3 silent push notifications to each recipient per hour.</p></note>
   */
  SilentPush?: boolean;

  /**
   * @public
   * <p>The key for the sound to play when the recipient receives the push notification. The value for this key is the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.</p>
   */
  Sound?: string;

  /**
   * @public
   * <p>The default message variables to use in the notification message. You can override these default variables with individual address variables.</p>
   */
  Substitutions?: Record<string, string[]>;

  /**
   * @public
   * <p>The key that represents your app-specific identifier for grouping notifications. If you provide a Notification Content app extension, you can use this value to group your notifications together.</p>
   */
  ThreadId?: string;

  /**
   * @public
   * <p>The amount of time, in seconds, that APNs should store and attempt to deliver the push notification, if the service is unable to deliver the notification the first time. If this value is 0, APNs treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.</p> <p>Amazon Pinpoint specifies this value in the apns-expiration request header when it sends the notification message to APNs.</p>
   */
  TimeToLive?: number;

  /**
   * @public
   * <p>The title to display above the notification message on the recipient's device.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.</p>
 */
export interface APNSPushNotificationTemplate {
  /**
   * @public
   * <p>The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action;

  /**
   * @public
   * <p>The message body to use in push notifications that are based on the message template.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The URL of an image or video to display in push notifications that are based on the message template.</p>
   */
  MediaUrl?: string;

  /**
   * @public
   * <p>The raw, JSON-formatted string to use as the payload for push notifications that are based on the message template. If specified, this value overrides all other content for the message template.</p>
   */
  RawContent?: string;

  /**
   * @public
   * <p>The key for the sound to play when the recipient receives a push notification that's based on the message template. The value for this key is the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.</p>
   */
  Sound?: string;

  /**
   * @public
   * <p>The title to use in push notifications that are based on the message template. This title appears above the notification message on a recipient's device.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
 */
export interface APNSSandboxChannelRequest {
  /**
   * @public
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   */
  BundleId?: string;

  /**
   * @public
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.</p>
   */
  Certificate?: string;

  /**
   * @public
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * @public
   * <p>Specifies whether to enable the APNs sandbox channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.</p>
   */
  PrivateKey?: string;

  /**
   * @public
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   */
  TeamId?: string;

  /**
   * @public
   * <p>The authentication key to use for APNs tokens.</p>
   */
  TokenKey?: string;

  /**
   * @public
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.</p>
   */
  TokenKeyId?: string;
}

/**
 * @public
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
 */
export interface APNSSandboxChannelResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the APNs sandbox channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The date and time when the APNs sandbox channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * @public
   * <p>Specifies whether the APNs sandbox channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * @public
   * <p>Specifies whether the APNs sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * @public
   * <p>(Deprecated) An identifier for the APNs sandbox channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Specifies whether the APNs sandbox channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * @public
   * <p>The user who last modified the APNs sandbox channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time when the APNs sandbox channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The type of messaging or notification platform for the channel. For the APNs sandbox channel, this value is APNS_SANDBOX.</p>
   */
  Platform: string | undefined;

  /**
   * @public
   * <p>The current version of the APNs sandbox channel.</p>
   */
  Version?: number;
}

/**
 * @public
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
 */
export interface APNSVoipChannelRequest {
  /**
   * @public
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   */
  BundleId?: string;

  /**
   * @public
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.</p>
   */
  Certificate?: string;

  /**
   * @public
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * @public
   * <p>Specifies whether to enable the APNs VoIP channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.</p>
   */
  PrivateKey?: string;

  /**
   * @public
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   */
  TeamId?: string;

  /**
   * @public
   * <p>The authentication key to use for APNs tokens.</p>
   */
  TokenKey?: string;

  /**
   * @public
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.</p>
   */
  TokenKeyId?: string;
}

/**
 * @public
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
 */
export interface APNSVoipChannelResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the APNs VoIP channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The date and time when the APNs VoIP channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * @public
   * <p>Specifies whether the APNs VoIP channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * @public
   * <p>Specifies whether the APNs VoIP channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * @public
   * <p>(Deprecated) An identifier for the APNs VoIP channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Specifies whether the APNs VoIP channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * @public
   * <p>The user who last modified the APNs VoIP channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time when the APNs VoIP channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The type of messaging or notification platform for the channel. For the APNs VoIP channel, this value is APNS_VOIP.</p>
   */
  Platform: string | undefined;

  /**
   * @public
   * <p>The current version of the APNs VoIP channel.</p>
   */
  Version?: number;
}

/**
 * @public
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
 */
export interface APNSVoipSandboxChannelRequest {
  /**
   * @public
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   */
  BundleId?: string;

  /**
   * @public
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.</p>
   */
  Certificate?: string;

  /**
   * @public
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * @public
   * <p>Specifies whether the APNs VoIP sandbox channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.</p>
   */
  PrivateKey?: string;

  /**
   * @public
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   */
  TeamId?: string;

  /**
   * @public
   * <p>The authentication key to use for APNs tokens.</p>
   */
  TokenKey?: string;

  /**
   * @public
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.</p>
   */
  TokenKeyId?: string;
}

/**
 * @public
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
 */
export interface APNSVoipSandboxChannelResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the APNs VoIP sandbox channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The date and time when the APNs VoIP sandbox channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * @public
   * <p>Specifies whether the APNs VoIP sandbox channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * @public
   * <p>Specifies whether the APNs VoIP sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * @public
   * <p>(Deprecated) An identifier for the APNs VoIP sandbox channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Specifies whether the APNs VoIP sandbox channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * @public
   * <p>The user who last modified the APNs VoIP sandbox channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time when the APNs VoIP sandbox channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The type of messaging or notification platform for the channel. For the APNs VoIP sandbox channel, this value is APNS_VOIP_SANDBOX.</p>
   */
  Platform: string | undefined;

  /**
   * @public
   * <p>The current version of the APNs VoIP sandbox channel.</p>
   */
  Version?: number;
}

/**
 * @public
 * <p>Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey.</p>
 */
export interface ResultRowValue {
  /**
   * @public
   * <p>The friendly name of the metric whose value is specified by the Value property.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The data type of the value specified by the Value property.</p>
   */
  Type: string | undefined;

  /**
   * @public
   * <p>In a Values object, the value for the metric that the query retrieved data for. In a GroupedBys object, the value for the field that was used to group data in a result set that contains multiple results (Values objects).</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.</p>
 */
export interface ResultRow {
  /**
   * @public
   * <p>An array of objects that defines the field and field values that were used to group data in a result set that contains multiple results. This value is null if the data in a result set isn’t grouped.</p>
   */
  GroupedBys: ResultRowValue[] | undefined;

  /**
   * @public
   * <p>An array of objects that provides pre-aggregated values for a standard metric that applies to an application, campaign, or journey.</p>
   */
  Values: ResultRowValue[] | undefined;
}

/**
 * @public
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.</p>
 */
export interface BaseKpiResult {
  /**
   * @public
   * <p>An array of objects that provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.</p>
   */
  Rows: ResultRow[] | undefined;
}

/**
 * @public
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.</p>
 */
export interface ApplicationDateRangeKpiResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the metric applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * @public
   * <p>An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.</p>
   */
  KpiResult: BaseKpiResult | undefined;

  /**
   * @public
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Application Metrics resource because the resource returns all results in a single page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   */
  StartTime: Date | undefined;
}

/**
 * @public
 * <p>Provides information about an application.</p>
 */
export interface ApplicationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The display name of the application. This name is displayed as the <b>Project name</b> on the Amazon Pinpoint console.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the application. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The date and time when the Application was created.</p>
   */
  CreationDate?: string;
}

/**
 * @public
 * <p>The number of messages that can be sent to an endpoint during the specified timeframe for all journeys.</p>
 */
export interface JourneyTimeframeCap {
  /**
   * @public
   * <p>The maximum number of messages that all journeys can send to an endpoint during the specified timeframe. The maximum value is 100. If set to 0, this limit will not apply.</p>
   */
  Cap?: number;

  /**
   * @public
   * <p>The length of the timeframe in days. The maximum value is 30. If set to 0, this limit will not apply.</p>
   */
  Days?: number;
}

/**
 * @public
 * <p>The default sending limits for journeys in the application. To override these limits and define custom limits for a specific journey, use the Journey resource.</p>
 */
export interface ApplicationSettingsJourneyLimits {
  /**
   * @public
   * <p>The daily number of messages that an endpoint can receive from all journeys. The maximum value is 100. If set to 0, this limit will not apply.</p>
   */
  DailyCap?: number;

  /**
   * @public
   * <p>The default maximum number of messages that can be sent to an endpoint during the specified timeframe for all journeys.</p>
   */
  TimeframeCap?: JourneyTimeframeCap;

  /**
   * @public
   * <p>The default maximum number of messages that a single journey can sent to a single endpoint. The maximum value is 100. If set to 0, this limit will not apply.</p>
   */
  TotalCap?: number;
}

/**
 * @public
 * @enum
 */
export const Mode = {
  DELIVERY: "DELIVERY",
  FILTER: "FILTER",
} as const;

/**
 * @public
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

/**
 * @public
 * <p>Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign.</p>
 */
export interface CampaignHook {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to customize a segment for a campaign.</p>
   */
  LambdaFunctionName?: string;

  /**
   * @public
   * <p>The mode that Amazon Pinpoint uses to invoke the AWS Lambda function. Possible values are:</p> <ul><li><p>FILTER - Invoke the function to customize the segment that's used by a campaign.</p></li> <li><p>DELIVERY - (Deprecated) Previously, invoked the function to send a campaign through a custom channel. This functionality is not supported anymore. To send a campaign through a custom channel, use the CustomDeliveryConfiguration and CampaignCustomMessage objects of the campaign.</p></li></ul>
   */
  Mode?: Mode;

  /**
   * @public
   * <p>The web URL that Amazon Pinpoint calls to invoke the AWS Lambda function over HTTPS.</p>
   */
  WebUrl?: string;
}

/**
 * @public
 * <p>For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send.</p>
 */
export interface CampaignLimits {
  /**
   * @public
   * <p>The maximum number of messages that a campaign can send to a single endpoint during a 24-hour period. For an application, this value specifies the default limit for the number of messages that campaigns and journeys can send to a single endpoint during a 24-hour period. The maximum value is 100.</p>
   */
  Daily?: number;

  /**
   * @public
   * <p>The maximum amount of time, in seconds, that a campaign can attempt to deliver a message after the scheduled start time for the campaign. The minimum value is 60 seconds.</p>
   */
  MaximumDuration?: number;

  /**
   * @public
   * <p>The maximum number of messages that a campaign can send each second. For an application, this value specifies the default limit for the number of messages that campaigns can send each second. The minimum value is 50. The maximum value is 20,000.</p>
   */
  MessagesPerSecond?: number;

  /**
   * @public
   * <p>The maximum number of messages that a campaign can send to a single endpoint during the course of the campaign. If a campaign recurs, this setting applies to all runs of the campaign. The maximum value is 100.</p>
   */
  Total?: number;

  /**
   * @public
   * <p>The maximum total number of messages that the campaign can send per user session.</p>
   */
  Session?: number;
}

/**
 * @public
 * <p>Specifies the start and end times that define a time range when messages aren't sent to endpoints.</p>
 */
export interface QuietTime {
  /**
   * @public
   * <p>The specific time when quiet time ends. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use 02:30 to represent 2:30 AM, or 14:30 to represent 2:30 PM.</p>
   */
  End?: string;

  /**
   * @public
   * <p>The specific time when quiet time begins. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use 02:30 to represent 2:30 AM, or 14:30 to represent 2:30 PM.</p>
   */
  Start?: string;
}

/**
 * @public
 * <p>Provides information about an application, including the default settings for an application.</p>
 */
export interface ApplicationSettingsResource {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The settings for the AWS Lambda function to invoke by default as a code hook for campaigns in the application. You can use this hook to customize segments that are used by campaigns in the application.</p>
   */
  CampaignHook?: CampaignHook;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the application's settings were last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The default sending limits for campaigns in the application.</p>
   */
  Limits?: CampaignLimits;

  /**
   * @public
   * <p>The default quiet time for campaigns in the application. Quiet time is a specific time range when messages aren't sent to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign or journey that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign or journey that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign or journey, even if quiet time is enabled.</p>
   */
  QuietTime?: QuietTime;

  /**
   * @public
   * <p>The default sending limits for journeys in the application. These limits apply to each journey for the application but can be overridden, on a per journey basis, with the JourneyLimits resource.</p>
   */
  JourneyLimits?: ApplicationSettingsJourneyLimits;
}

/**
 * @public
 * <p>Provides information about all of your applications.</p>
 */
export interface ApplicationsResponse {
  /**
   * @public
   * <p>An array of responses, one for each application that was returned.</p>
   */
  Item?: ApplicationResponse[];

  /**
   * @public
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.</p>
 */
export interface AttributesResource {
  /**
   * @public
   * <p>The unique identifier for the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The type of attribute or attributes that were removed from the endpoints. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints.</p></li> <li><p>endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints.</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users.</p></li></ul>
   */
  AttributeType: string | undefined;

  /**
   * @public
   * <p>An array that specifies the names of the attributes that were removed from the endpoints.</p>
   */
  Attributes?: string[];
}

/**
 * @public
 * <p>Provides information about an API request or response.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
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
    this.RequestID = opts.RequestID;
  }
}

/**
 * @public
 * <p>Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
 */
export interface BaiduChannelRequest {
  /**
   * @public
   * <p>The API key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   */
  ApiKey: string | undefined;

  /**
   * @public
   * <p>Specifies whether to enable the Baidu channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The secret key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   */
  SecretKey: string | undefined;
}

/**
 * @public
 * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
 */
export interface BaiduChannelResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the Baidu channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The date and time when the Baidu channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The API key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   */
  Credential: string | undefined;

  /**
   * @public
   * <p>Specifies whether the Baidu channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * @public
   * <p>(Deprecated) An identifier for the Baidu channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Specifies whether the Baidu channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * @public
   * <p>The user who last modified the Baidu channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time when the Baidu channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The type of messaging or notification platform for the channel. For the Baidu channel, this value is BAIDU.</p>
   */
  Platform: string | undefined;

  /**
   * @public
   * <p>The current version of the Baidu channel.</p>
   */
  Version?: number;
}

/**
 * @public
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel.</p>
 */
export interface BaiduMessage {
  /**
   * @public
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action;

  /**
   * @public
   * <p>The body of the notification message.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: Record<string, string>;

  /**
   * @public
   * <p>The icon image name of the asset saved in your app.</p>
   */
  IconReference?: string;

  /**
   * @public
   * <p>The URL of the large icon image to display in the content view of the push notification.</p>
   */
  ImageIconUrl?: string;

  /**
   * @public
   * <p>The URL of an image to display in the push notification.</p>
   */
  ImageUrl?: string;

  /**
   * @public
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p>
   */
  RawContent?: string;

  /**
   * @public
   * <p>Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.</p>
   */
  SilentPush?: boolean;

  /**
   * @public
   * <p>The URL of the small icon image to display in the status bar and the content view of the push notification.</p>
   */
  SmallImageIconUrl?: string;

  /**
   * @public
   * <p>The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p>
   */
  Sound?: string;

  /**
   * @public
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: Record<string, string[]>;

  /**
   * @public
   * <p>The amount of time, in seconds, that the Baidu Cloud Push service should store the message if the recipient's device is offline. The default value and maximum supported time is 604,800 seconds (7 days).</p>
   */
  TimeToLive?: number;

  /**
   * @public
   * <p>The title to display above the notification message on the recipient's device.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   */
  Url?: string;
}

/**
 * @public
 * @enum
 */
export const ButtonAction = {
  CLOSE: "CLOSE",
  DEEP_LINK: "DEEP_LINK",
  LINK: "LINK",
} as const;

/**
 * @public
 */
export type ButtonAction = (typeof ButtonAction)[keyof typeof ButtonAction];

/**
 * @public
 * <p>Specifies the contents of a message that's sent through a custom channel to recipients of a campaign.</p>
 */
export interface CampaignCustomMessage {
  /**
   * @public
   * <p>The raw, JSON-formatted string to use as the payload for the message. The maximum size is 5 KB.</p>
   */
  Data?: string;
}

/**
 * @public
 * <p>Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.</p>
 */
export interface CampaignDateRangeKpiResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the metric applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the campaign that the metric applies to.</p>
   */
  CampaignId: string | undefined;

  /**
   * @public
   * <p>The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * @public
   * <p>An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.</p>
   */
  KpiResult: BaseKpiResult | undefined;

  /**
   * @public
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Campaign Metrics resource because the resource returns all results in a single page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   */
  StartTime: Date | undefined;
}

/**
 * @public
 * <p>Specifies the content and "From" address for an email message that's sent to recipients of a campaign.</p>
 */
export interface CampaignEmailMessage {
  /**
   * @public
   * <p>The body of the email for recipients whose email clients don't render HTML content.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The verified email address to send the email from. The default address is the FromAddress specified for the email channel for the application.</p>
   */
  FromAddress?: string;

  /**
   * @public
   * <p>The body of the email, in HTML format, for recipients whose email clients render HTML content.</p>
   */
  HtmlBody?: string;

  /**
   * @public
   * <p>The subject line, or title, of the email.</p>
   */
  Title?: string;
}

/**
 * @public
 * @enum
 */
export const FilterType = {
  ENDPOINT: "ENDPOINT",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

/**
 * @public
 * <p>Specifies the settings for events that cause a campaign to be sent.</p>
 */
export interface CampaignEventFilter {
  /**
   * @public
   * <p>The dimension settings of the event filter for the campaign.</p>
   */
  Dimensions: EventDimensions | undefined;

  /**
   * @public
   * <p>The type of event that causes the campaign to be sent. Valid values are: SYSTEM, sends the campaign when a system event occurs; and, ENDPOINT, sends the campaign when an endpoint event (<link  linkend="apps-application-id-events">Events</link> resource) occurs.</p>
   */
  FilterType: FilterType | undefined;
}

/**
 * @public
 * <p>Text config for Message Body.</p>
 */
export interface InAppMessageBodyConfig {
  /**
   * @public
   * <p>The alignment of the text. Valid values: LEFT, CENTER, RIGHT.</p>
   */
  Alignment: Alignment | undefined;

  /**
   * @public
   * <p>Message Body.</p>
   */
  Body: string | undefined;

  /**
   * @public
   * <p>The text color.</p>
   */
  TextColor: string | undefined;
}

/**
 * @public
 * <p>Text config for Message Header.</p>
 */
export interface InAppMessageHeaderConfig {
  /**
   * @public
   * <p>The alignment of the text. Valid values: LEFT, CENTER, RIGHT.</p>
   */
  Alignment: Alignment | undefined;

  /**
   * @public
   * <p>Message Header.</p>
   */
  Header: string | undefined;

  /**
   * @public
   * <p>The text color.</p>
   */
  TextColor: string | undefined;
}

/**
 * @public
 * <p>Override button configuration.</p>
 */
export interface OverrideButtonConfiguration {
  /**
   * @public
   * <p>Action triggered by the button.</p>
   */
  ButtonAction: ButtonAction | undefined;

  /**
   * @public
   * <p>Button destination.</p>
   */
  Link?: string;
}

/**
 * @public
 * <p>Default button configuration.</p>
 */
export interface DefaultButtonConfiguration {
  /**
   * @public
   * <p>The background color of the button.</p>
   */
  BackgroundColor?: string;

  /**
   * @public
   * <p>The border radius of the button.</p>
   */
  BorderRadius?: number;

  /**
   * @public
   * <p>Action triggered by the button.</p>
   */
  ButtonAction: ButtonAction | undefined;

  /**
   * @public
   * <p>Button destination.</p>
   */
  Link?: string;

  /**
   * @public
   * <p>Button text.</p>
   */
  Text: string | undefined;

  /**
   * @public
   * <p>The text color of the button.</p>
   */
  TextColor?: string;
}

/**
 * @public
 * <p>Button Config for an in-app message.</p>
 */
export interface InAppMessageButton {
  /**
   * @public
   * <p>Default button content.</p>
   */
  Android?: OverrideButtonConfiguration;

  /**
   * @public
   * <p>Default button content.</p>
   */
  DefaultConfig?: DefaultButtonConfiguration;

  /**
   * @public
   * <p>Default button content.</p>
   */
  IOS?: OverrideButtonConfiguration;

  /**
   * @public
   * <p>Default button content.</p>
   */
  Web?: OverrideButtonConfiguration;
}

/**
 * @public
 * <p>The configuration for the message content.</p>
 */
export interface InAppMessageContent {
  /**
   * @public
   * <p>The background color for the message.</p>
   */
  BackgroundColor?: string;

  /**
   * @public
   * <p>The configuration for the message body.</p>
   */
  BodyConfig?: InAppMessageBodyConfig;

  /**
   * @public
   * <p>The configuration for the message header.</p>
   */
  HeaderConfig?: InAppMessageHeaderConfig;

  /**
   * @public
   * <p>The image url for the background of message.</p>
   */
  ImageUrl?: string;

  /**
   * @public
   * <p>The first button inside the message.</p>
   */
  PrimaryBtn?: InAppMessageButton;

  /**
   * @public
   * <p>The second button inside message.</p>
   */
  SecondaryBtn?: InAppMessageButton;
}

/**
 * @public
 * @enum
 */
export const Layout = {
  BOTTOM_BANNER: "BOTTOM_BANNER",
  CAROUSEL: "CAROUSEL",
  MIDDLE_BANNER: "MIDDLE_BANNER",
  MOBILE_FEED: "MOBILE_FEED",
  OVERLAYS: "OVERLAYS",
  TOP_BANNER: "TOP_BANNER",
} as const;

/**
 * @public
 */
export type Layout = (typeof Layout)[keyof typeof Layout];

/**
 * @public
 * <p>In-app message configuration.</p>
 */
export interface CampaignInAppMessage {
  /**
   * @public
   * <p>The message body of the notification, the email body or the text message.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>In-app message content.</p>
   */
  Content?: InAppMessageContent[];

  /**
   * @public
   * <p>Custom config to be sent to client.</p>
   */
  CustomConfig?: Record<string, string>;

  /**
   * @public
   * <p>In-app message layout.</p>
   */
  Layout?: Layout;
}

/**
 * @public
 * <p>Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment.</p>
 */
export interface CustomDeliveryConfiguration {
  /**
   * @public
   * <p>The destination to send the campaign or treatment to. This value can be one of the following:</p> <ul><li><p>The name or Amazon Resource Name (ARN) of an AWS Lambda function to invoke to handle delivery of the campaign or treatment.</p></li> <li><p>The URL for a web application or service that supports HTTPS and can receive the message. The URL has to be a full URL, including the HTTPS protocol.</p></li></ul>
   */
  DeliveryUri: string | undefined;

  /**
   * @public
   * <p>The types of endpoints to send the campaign or treatment to. Each valid value maps to a type of channel that you can associate with an endpoint by using the ChannelType property of an endpoint.</p>
   */
  EndpointTypes?: __EndpointTypesElement[];
}

/**
 * @public
 * <p>Specifies the content and settings for a push notification that's sent to recipients of a campaign.</p>
 */
export interface Message {
  /**
   * @public
   * <p>The action to occur if a recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of iOS and Android.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action;

  /**
   * @public
   * <p>The body of the notification message. The maximum number of characters is 200.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The URL of the image to display as the push-notification icon, such as the icon for the app.</p>
   */
  ImageIconUrl?: string;

  /**
   * @public
   * <p>The URL of the image to display as the small, push-notification icon, such as a small version of the icon for the app.</p>
   */
  ImageSmallIconUrl?: string;

  /**
   * @public
   * <p>The URL of an image to display in the push notification.</p>
   */
  ImageUrl?: string;

  /**
   * @public
   * <p>The JSON payload to use for a silent push notification.</p>
   */
  JsonBody?: string;

  /**
   * @public
   * <p>The URL of the image or video to display in the push notification.</p>
   */
  MediaUrl?: string;

  /**
   * @public
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p>
   */
  RawContent?: string;

  /**
   * @public
   * <p>Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration, displaying messages in an in-app message center, or supporting phone home functionality.</p>
   */
  SilentPush?: boolean;

  /**
   * @public
   * <p>The number of seconds that the push-notification service should keep the message, if the service is unable to deliver the notification the first time. This value is converted to an expiration value when it's sent to a push-notification service. If this value is 0, the service treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again.</p> <p>This value doesn't apply to messages that are sent through the Amazon Device Messaging (ADM) service.</p>
   */
  TimeToLive?: number;

  /**
   * @public
   * <p>The title to display above the notification message on a recipient's device.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>Specifies the content and settings for an SMS message that's sent to recipients of a campaign.</p>
 */
export interface CampaignSmsMessage {
  /**
   * @public
   * <p>The body of the SMS message.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The SMS message type. Valid values are TRANSACTIONAL (for messages that are critical or time-sensitive, such as a one-time passwords) and PROMOTIONAL (for messsages that aren't critical or time-sensitive, such as marketing messages).</p>
   */
  MessageType?: MessageType;

  /**
   * @public
   * <p>The long code to send the SMS message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code using an E.164 format to ensure prompt and accurate delivery of the message. For example, +12065550100.</p>
   */
  OriginationNumber?: string;

  /**
   * @public
   * <p>The sender ID to display on recipients' devices when they receive the SMS message.</p>
   */
  SenderId?: string;

  /**
   * @public
   * <p>The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.</p>
   */
  EntityId?: string;

  /**
   * @public
   * <p>The template ID received from the regulatory body for sending SMS in your country.</p>
   */
  TemplateId?: string;
}

/**
 * @public
 * <p>Specifies the message configuration settings for a campaign.</p>
 */
export interface MessageConfiguration {
  /**
   * @public
   * <p>The message that the campaign sends through the ADM (Amazon Device Messaging) channel. If specified, this message overrides the default message.</p>
   */
  ADMMessage?: Message;

  /**
   * @public
   * <p>The message that the campaign sends through the APNs (Apple Push Notification service) channel. If specified, this message overrides the default message.</p>
   */
  APNSMessage?: Message;

  /**
   * @public
   * <p>The message that the campaign sends through the Baidu (Baidu Cloud Push) channel. If specified, this message overrides the default message.</p>
   */
  BaiduMessage?: Message;

  /**
   * @public
   * <p>The message that the campaign sends through a custom channel, as specified by the delivery configuration (CustomDeliveryConfiguration) settings for the campaign. If specified, this message overrides the default message.</p>
   */
  CustomMessage?: CampaignCustomMessage;

  /**
   * @public
   * <p>The default message that the campaign sends through all the channels that are configured for the campaign.</p>
   */
  DefaultMessage?: Message;

  /**
   * @public
   * <p>The message that the campaign sends through the email channel. If specified, this message overrides the default message.</p>
   */
  EmailMessage?: CampaignEmailMessage;

  /**
   * @public
   * <p>The message that the campaign sends through the GCM channel, which enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. If specified, this message overrides the default message.</p>
   */
  GCMMessage?: Message;

  /**
   * @public
   * <p>The message that the campaign sends through the SMS channel. If specified, this message overrides the default message.</p>
   */
  SMSMessage?: CampaignSmsMessage;

  /**
   * @public
   * <p>The in-app message configuration.</p>
   */
  InAppMessage?: CampaignInAppMessage;
}

/**
 * @public
 * @enum
 */
export const Frequency = {
  DAILY: "DAILY",
  EVENT: "EVENT",
  HOURLY: "HOURLY",
  IN_APP_EVENT: "IN_APP_EVENT",
  MONTHLY: "MONTHLY",
  ONCE: "ONCE",
  WEEKLY: "WEEKLY",
} as const;

/**
 * @public
 */
export type Frequency = (typeof Frequency)[keyof typeof Frequency];

/**
 * @public
 * <p>Specifies the schedule settings for a campaign.</p>
 */
export interface Schedule {
  /**
   * @public
   * <p>The scheduled time, in ISO 8601 format, when the campaign ended or will end.</p>
   */
  EndTime?: string;

  /**
   * @public
   * <p>The type of event that causes the campaign to be sent, if the value of the Frequency property is EVENT.</p>
   */
  EventFilter?: CampaignEventFilter;

  /**
   * @public
   * <p>Specifies how often the campaign is sent or whether the campaign is sent in response to a specific event.</p>
   */
  Frequency?: Frequency;

  /**
   * @public
   * <p>Specifies whether the start and end times for the campaign schedule use each recipient's local time. To base the schedule on each recipient's local time, set this value to true.</p>
   */
  IsLocalTime?: boolean;

  /**
   * @public
   * <p>The default quiet time for the campaign. Quiet time is a specific time range when a campaign doesn't send messages to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the campaign.</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the campaign.</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from the campaign, even if quiet time is enabled.</p>
   */
  QuietTime?: QuietTime;

  /**
   * @public
   * <p>The scheduled time when the campaign began or will begin. Valid values are: IMMEDIATE, to start the campaign immediately; or, a specific time in ISO 8601 format.</p>
   */
  StartTime: string | undefined;

  /**
   * @public
   * <p>The starting UTC offset for the campaign schedule, if the value of the IsLocalTime property is true. Valid values are: UTC, UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05,
   *                   UTC+05:30, UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+09, UTC+09:30,
   *                   UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+13, UTC-02, UTC-03, UTC-04, UTC-05, UTC-06,
   *                   UTC-07, UTC-08, UTC-09, UTC-10, and UTC-11.</p>
   */
  Timezone?: string;
}

/**
 * @public
 * @enum
 */
export const CampaignStatus = {
  COMPLETED: "COMPLETED",
  DELETED: "DELETED",
  EXECUTING: "EXECUTING",
  INVALID: "INVALID",
  PAUSED: "PAUSED",
  PENDING_NEXT_RUN: "PENDING_NEXT_RUN",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus];

/**
 * @public
 * <p>Provides information about the status of a campaign.</p>
 */
export interface CampaignState {
  /**
   * @public
   * <p>The current status of the campaign, or the current status of a treatment that belongs to an A/B test campaign.</p> <p>If a campaign uses A/B testing, the campaign has a status of COMPLETED only if all campaign treatments have a status of COMPLETED. If you delete the segment that's associated with a campaign, the campaign fails and has a status of DELETED.</p>
   */
  CampaignStatus?: CampaignStatus;
}

/**
 * @public
 * <p>Specifies the name and version of the message template to use for the message.</p>
 */
export interface Template {
  /**
   * @public
   * <p>The name of the message template to use for the message. If specified, this value must match the name of an existing message template.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The unique identifier for the version of the message template to use for the message. If specified, this value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If you don't specify a value for this property, Amazon Pinpoint uses the <i>active version</i> of the template. The <i>active version</i> is typically the version of a template that's been most recently reviewed and approved for use, depending on your workflow. It isn't necessarily the latest version of a template.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Specifies the message template to use for the message, for each type of channel.</p>
 */
export interface TemplateConfiguration {
  /**
   * @public
   * <p>The email template to use for the message.</p>
   */
  EmailTemplate?: Template;

  /**
   * @public
   * <p>The push notification template to use for the message.</p>
   */
  PushTemplate?: Template;

  /**
   * @public
   * <p>The SMS template to use for the message.</p>
   */
  SMSTemplate?: Template;

  /**
   * @public
   * <p>The voice template to use for the message. This object isn't supported for campaigns.</p>
   */
  VoiceTemplate?: Template;

  /**
   * @public
   * <p>The InApp template to use for the message. The InApp template object is not supported for SendMessages.</p>
   */
  InAppTemplate?: Template;
}

/**
 * @public
 * <p>Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.</p>
 */
export interface TreatmentResource {
  /**
   * @public
   * <p>The delivery configuration settings for sending the treatment through a custom channel. This object is required if the MessageConfiguration object for the treatment specifies a CustomMessage object.</p>
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;

  /**
   * @public
   * <p>The unique identifier for the treatment.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The message configuration settings for the treatment.</p>
   */
  MessageConfiguration?: MessageConfiguration;

  /**
   * @public
   * <p>The schedule settings for the treatment.</p>
   */
  Schedule?: Schedule;

  /**
   * @public
   * <p>The allocated percentage of users (segment members) that the treatment is sent to.</p>
   */
  SizePercent: number | undefined;

  /**
   * @public
   * <p>The current status of the treatment.</p>
   */
  State?: CampaignState;

  /**
   * @public
   * <p>The message template to use for the treatment.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * @public
   * <p>The custom description of the treatment.</p>
   */
  TreatmentDescription?: string;

  /**
   * @public
   * <p>The custom name of the treatment.</p>
   */
  TreatmentName?: string;
}

/**
 * @public
 * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
 */
export interface CampaignResponse {
  /**
   * @public
   * <p>An array of responses, one for each treatment that you defined for the campaign, in addition to the default treatment.</p>
   */
  AdditionalTreatments?: TreatmentResource[];

  /**
   * @public
   * <p>The unique identifier for the application that the campaign applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the campaign was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * @public
   * <p>The delivery configuration settings for sending the campaign through a custom channel.</p>
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;

  /**
   * @public
   * <p>The current status of the campaign's default treatment. This value exists only for campaigns that have more than one treatment.</p>
   */
  DefaultState?: CampaignState;

  /**
   * @public
   * <p>The custom description of the campaign.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.</p>
   */
  HoldoutPercent?: number;

  /**
   * @public
   * <p>The settings for the AWS Lambda function to use as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.</p>
   */
  Hook?: CampaignHook;

  /**
   * @public
   * <p>The unique identifier for the campaign.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Specifies whether the campaign is paused. A paused campaign doesn't run unless you resume it by changing this value to false.</p>
   */
  IsPaused?: boolean;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the campaign was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * @public
   * <p>The messaging limits for the campaign.</p>
   */
  Limits?: CampaignLimits;

  /**
   * @public
   * <p>The message configuration settings for the campaign.</p>
   */
  MessageConfiguration?: MessageConfiguration;

  /**
   * @public
   * <p>The name of the campaign.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The schedule settings for the campaign.</p>
   */
  Schedule?: Schedule;

  /**
   * @public
   * <p>The unique identifier for the segment that's associated with the campaign.</p>
   */
  SegmentId: string | undefined;

  /**
   * @public
   * <p>The version number of the segment that's associated with the campaign.</p>
   */
  SegmentVersion: number | undefined;

  /**
   * @public
   * <p>The current status of the campaign.</p>
   */
  State?: CampaignState;

  /**
   * @public
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the campaign. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The message template that’s used for the campaign.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * @public
   * <p>The custom description of the default treatment for the campaign.</p>
   */
  TreatmentDescription?: string;

  /**
   * @public
   * <p>The custom name of the default treatment for the campaign, if the campaign has multiple treatments. A <i>treatment</i> is a variation of a campaign that's used for A/B testing.</p>
   */
  TreatmentName?: string;

  /**
   * @public
   * <p>The version number of the campaign.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.</p>
   */
  Priority?: number;
}

/**
 * @public
 * <p>Provides information about the configuration and other settings for all the campaigns that are associated with an application.</p>
 */
export interface CampaignsResponse {
  /**
   * @public
   * <p>An array of responses, one for each campaign that's associated with the application.</p>
   */
  Item: CampaignResponse[] | undefined;

  /**
   * @public
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Provides information about the general settings and status of a channel for an application.</p>
 */
export interface ChannelResponse {
  /**
   * @public
   * <p>The unique identifier for the application.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>Specifies whether the channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * @public
   * <p>(Deprecated) An identifier for the channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Specifies whether the channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * @public
   * <p>The user who last modified the channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The current version of the channel.</p>
   */
  Version?: number;
}

/**
 * @public
 * <p>Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.</p>
 */
export interface ChannelsResponse {
  /**
   * @public
   * <p>A map that contains a multipart response for each channel. For each item in this object, the ChannelType is the key and the Channel is the value.</p>
   */
  Channels: Record<string, ChannelResponse> | undefined;
}

/**
 * @public
 * <p>Specifies the rule settings for when messages can't be sent.</p>
 */
export interface ClosedDaysRule {
  /**
   * @public
   * <p>The name of the closed day rule.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Start DateTime ISO 8601 format</p>
   */
  StartDateTime?: string;

  /**
   * @public
   * <p>End DateTime ISO 8601 format</p>
   */
  EndDateTime?: string;
}

/**
 * @public
 * <p>The time when a journey will not send messages. QuietTime should be configured first and SendingSchedule should be set to true.</p>
 */
export interface ClosedDays {
  /**
   * @public
   * <p>Rules for the Email channel.</p>
   */
  EMAIL?: ClosedDaysRule[];

  /**
   * @public
   * <p>Rules for the SMS channel.</p>
   */
  SMS?: ClosedDaysRule[];

  /**
   * @public
   * <p>Rules for the Push channel.</p>
   */
  PUSH?: ClosedDaysRule[];

  /**
   * @public
   * <p>Rules for the Voice channel.</p>
   */
  VOICE?: ClosedDaysRule[];

  /**
   * @public
   * <p>Rules for the Custom channel.</p>
   */
  CUSTOM?: ClosedDaysRule[];
}

/**
 * @public
 * <p>Provides information about an API request or response.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * @public
 * <p>Specifies the display name of an application and the tags to associate with the application.</p>
 */
export interface CreateApplicationRequest {
  /**
   * @public
   * <p>The display name of the application. This name is displayed as the <b>Project name</b> on the Amazon Pinpoint console.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the application. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAppRequest {
  /**
   * @public
   * <p>Specifies the display name of an application and the tags to associate with the application.</p>
   */
  CreateApplicationRequest: CreateApplicationRequest | undefined;
}

/**
 * @public
 */
export interface CreateAppResponse {
  /**
   * @public
   * <p>Provides information about an application.</p>
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

/**
 * @public
 * <p>Provides information about an API request or response.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * @public
 * <p>Provides information about an API request or response.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * @public
 * <p>Provides information about an API request or response.</p>
 */
export class MethodNotAllowedException extends __BaseException {
  readonly name: "MethodNotAllowedException" = "MethodNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MethodNotAllowedException, __BaseException>) {
    super({
      name: "MethodNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MethodNotAllowedException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * @public
 * <p>Provides information about an API request or response.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
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
    this.RequestID = opts.RequestID;
  }
}

/**
 * @public
 * <p>Provides information about an API request or response.</p>
 */
export class PayloadTooLargeException extends __BaseException {
  readonly name: "PayloadTooLargeException" = "PayloadTooLargeException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PayloadTooLargeException, __BaseException>) {
    super({
      name: "PayloadTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PayloadTooLargeException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * @public
 * <p>Provides information about an API request or response.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
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
    this.RequestID = opts.RequestID;
  }
}

/**
 * @public
 * <p>Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.</p>
 */
export interface WriteTreatmentResource {
  /**
   * @public
   * <p>The delivery configuration settings for sending the treatment through a custom channel. This object is required if the MessageConfiguration object for the treatment specifies a CustomMessage object.</p>
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;

  /**
   * @public
   * <p>The message configuration settings for the treatment.</p>
   */
  MessageConfiguration?: MessageConfiguration;

  /**
   * @public
   * <p>The schedule settings for the treatment.</p>
   */
  Schedule?: Schedule;

  /**
   * @public
   * <p>The allocated percentage of users (segment members) to send the treatment to.</p>
   */
  SizePercent: number | undefined;

  /**
   * @public
   * <p>The message template to use for the treatment.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * @public
   * <p>A custom description of the treatment.</p>
   */
  TreatmentDescription?: string;

  /**
   * @public
   * <p>A custom name for the treatment.</p>
   */
  TreatmentName?: string;
}

/**
 * @public
 * <p>Specifies the configuration and other settings for a campaign.</p>
 */
export interface WriteCampaignRequest {
  /**
   * @public
   * <p>An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.</p>
   */
  AdditionalTreatments?: WriteTreatmentResource[];

  /**
   * @public
   * <p>The delivery configuration settings for sending the campaign through a custom channel. This object is required if the MessageConfiguration object for the campaign specifies a CustomMessage object.</p>
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;

  /**
   * @public
   * <p>A custom description of the campaign.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.</p>
   */
  HoldoutPercent?: number;

  /**
   * @public
   * <p>The settings for the AWS Lambda function to invoke as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.</p>
   */
  Hook?: CampaignHook;

  /**
   * @public
   * <p>Specifies whether to pause the campaign. A paused campaign doesn't run unless you resume it by changing this value to false.</p>
   */
  IsPaused?: boolean;

  /**
   * @public
   * <p>The messaging limits for the campaign.</p>
   */
  Limits?: CampaignLimits;

  /**
   * @public
   * <p>The message configuration settings for the campaign.</p>
   */
  MessageConfiguration?: MessageConfiguration;

  /**
   * @public
   * <p>A custom name for the campaign.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The schedule settings for the campaign.</p>
   */
  Schedule?: Schedule;

  /**
   * @public
   * <p>The unique identifier for the segment to associate with the campaign.</p>
   */
  SegmentId?: string;

  /**
   * @public
   * <p>The version of the segment to associate with the campaign.</p>
   */
  SegmentVersion?: number;

  /**
   * @public
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the campaign. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The message template to use for the campaign.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * @public
   * <p>A custom description of the default treatment for the campaign.</p>
   */
  TreatmentDescription?: string;

  /**
   * @public
   * <p>A custom name of the default treatment for the campaign, if the campaign has multiple treatments. A <i>treatment</i> is a variation of a campaign that's used for A/B testing.</p>
   */
  TreatmentName?: string;

  /**
   * @public
   * <p>Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.</p>
   */
  Priority?: number;
}

/**
 * @public
 */
export interface CreateCampaignRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>Specifies the configuration and other settings for a campaign.</p>
   */
  WriteCampaignRequest: WriteCampaignRequest | undefined;
}

/**
 * @public
 */
export interface CreateCampaignResponse {
  /**
   * @public
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * @public
 * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
 */
export interface EmailTemplateRequest {
  /**
   * @public
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * @public
   * <p>The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.</p>
   */
  HtmlPart?: string;

  /**
   * @public
   * <p>The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.</p>
   */
  RecommenderId?: string;

  /**
   * @public
   * <p>The subject line, or title, to use in email messages that are based on the message template.</p>
   */
  Subject?: string;

  /**
   * @public
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * @public
   * <p>The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.</p>
   */
  TextPart?: string;
}

/**
 * @public
 */
export interface CreateEmailTemplateRequest {
  /**
   * @public
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
   */
  EmailTemplateRequest: EmailTemplateRequest | undefined;

  /**
   * @public
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;
}

/**
 * @public
 * <p>Provides information about a request to create a message template.</p>
 */
export interface CreateTemplateMessageBody {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the message template that was created.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The message that's returned from the API for the request to create the message template.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The unique identifier for the request to create the message template.</p>
   */
  RequestID?: string;
}

/**
 * @public
 */
export interface CreateEmailTemplateResponse {
  /**
   * @public
   * <p>Provides information about a request to create a message template.</p>
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

/**
 * @public
 * <p>Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.</p>
 */
export interface ExportJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location where you want to export endpoint definitions to.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where you want to export endpoint definitions to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/.</p>
   */
  S3UrlPrefix: string | undefined;

  /**
   * @public
   * <p>The identifier for the segment to export endpoint definitions from. If you don't specify this value, Amazon Pinpoint exports definitions for all the endpoints that are associated with the application.</p>
   */
  SegmentId?: string;

  /**
   * @public
   * <p>The version of the segment to export endpoint definitions from, if specified.</p>
   */
  SegmentVersion?: number;
}

/**
 * @public
 */
export interface CreateExportJobRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.</p>
   */
  ExportJobRequest: ExportJobRequest | undefined;
}

/**
 * @public
 * <p>Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
 */
export interface ExportJobResource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location where the endpoint definitions were exported to.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where the endpoint definitions were exported to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/.</p>
   */
  S3UrlPrefix: string | undefined;

  /**
   * @public
   * <p>The identifier for the segment that the endpoint definitions were exported from. If this value isn't present, Amazon Pinpoint exported definitions for all the endpoints that are associated with the application.</p>
   */
  SegmentId?: string;

  /**
   * @public
   * <p>The version of the segment that the endpoint definitions were exported from.</p>
   */
  SegmentVersion?: number;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  COMPLETED: "COMPLETED",
  COMPLETING: "COMPLETING",
  CREATED: "CREATED",
  FAILED: "FAILED",
  FAILING: "FAILING",
  INITIALIZING: "INITIALIZING",
  PENDING_JOB: "PENDING_JOB",
  PREPARING_FOR_INITIALIZATION: "PREPARING_FOR_INITIALIZATION",
  PROCESSING: "PROCESSING",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
 */
export interface ExportJobResponse {
  /**
   * @public
   * <p>The unique identifier for the application that's associated with the export job.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The number of pieces that were processed successfully (completed) by the export job, as of the time of the request.</p>
   */
  CompletedPieces?: number;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the export job was completed.</p>
   */
  CompletionDate?: string;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the export job was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * @public
   * <p>The resource settings that apply to the export job.</p>
   */
  Definition: ExportJobResource | undefined;

  /**
   * @public
   * <p>The number of pieces that weren't processed successfully (failed) by the export job, as of the time of the request.</p>
   */
  FailedPieces?: number;

  /**
   * @public
   * <p>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the export job, if any.</p>
   */
  Failures?: string[];

  /**
   * @public
   * <p>The unique identifier for the export job.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The status of the export job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.</p>
   */
  JobStatus: JobStatus | undefined;

  /**
   * @public
   * <p>The total number of endpoint definitions that weren't processed successfully (failed) by the export job, typically because an error, such as a syntax error, occurred.</p>
   */
  TotalFailures?: number;

  /**
   * @public
   * <p>The total number of pieces that must be processed to complete the export job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the export job.</p>
   */
  TotalPieces?: number;

  /**
   * @public
   * <p>The total number of endpoint definitions that were processed by the export job.</p>
   */
  TotalProcessed?: number;

  /**
   * @public
   * <p>The job type. This value is EXPORT for export jobs.</p>
   */
  Type: string | undefined;
}

/**
 * @public
 */
export interface CreateExportJobResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
   */
  ExportJobResponse: ExportJobResponse | undefined;
}

/**
 * @public
 * @enum
 */
export const Format = {
  CSV: "CSV",
  JSON: "JSON",
} as const;

/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * <p>Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.</p>
 */
export interface ImportJobRequest {
  /**
   * @public
   * <p>Specifies whether to create a segment that contains the endpoints, when the endpoint definitions are imported.</p>
   */
  DefineSegment?: boolean;

  /**
   * @public
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId?: string;

  /**
   * @public
   * <p>The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format. If the Amazon S3 location stores multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.</p>
   */
  Format: Format | undefined;

  /**
   * @public
   * <p>Specifies whether to register the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.</p>
   */
  RegisterEndpoints?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.</p> <p>The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/<replaceable>file-name</replaceable>. The location can end with the key for an individual object or a prefix that qualifies multiple objects.</p>
   */
  S3Url: string | undefined;

  /**
   * @public
   * <p>The identifier for the segment to update or add the imported endpoint definitions to, if the import job is meant to update an existing segment.</p>
   */
  SegmentId?: string;

  /**
   * @public
   * <p>A custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.</p>
   */
  SegmentName?: string;
}

/**
 * @public
 */
export interface CreateImportJobRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.</p>
   */
  ImportJobRequest: ImportJobRequest | undefined;
}

/**
 * @public
 * <p>Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
 */
export interface ImportJobResource {
  /**
   * @public
   * <p>Specifies whether the import job creates a segment that contains the endpoints, when the endpoint definitions are imported.</p>
   */
  DefineSegment?: boolean;

  /**
   * @public
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId?: string;

  /**
   * @public
   * <p>The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.</p> <p>If the files are stored in an Amazon S3 location and that location contains multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.</p>
   */
  Format: Format | undefined;

  /**
   * @public
   * <p>Specifies whether the import job registers the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.</p>
   */
  RegisterEndpoints?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.</p> <p>The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/<replaceable>file-name</replaceable>. The location can end with the key for an individual object or a prefix that qualifies multiple objects.</p>
   */
  S3Url: string | undefined;

  /**
   * @public
   * <p>The identifier for the segment that the import job updates or adds endpoint definitions to, if the import job updates an existing segment.</p>
   */
  SegmentId?: string;

  /**
   * @public
   * <p>The custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.</p>
   */
  SegmentName?: string;
}

/**
 * @public
 * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
 */
export interface ImportJobResponse {
  /**
   * @public
   * <p>The unique identifier for the application that's associated with the import job.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The number of pieces that were processed successfully (completed) by the import job, as of the time of the request.</p>
   */
  CompletedPieces?: number;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the import job was completed.</p>
   */
  CompletionDate?: string;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the import job was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * @public
   * <p>The resource settings that apply to the import job.</p>
   */
  Definition: ImportJobResource | undefined;

  /**
   * @public
   * <p>The number of pieces that weren't processed successfully (failed) by the import job, as of the time of the request.</p>
   */
  FailedPieces?: number;

  /**
   * @public
   * <p>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the import job, if any.</p>
   */
  Failures?: string[];

  /**
   * @public
   * <p>The unique identifier for the import job.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The status of the import job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.</p>
   */
  JobStatus: JobStatus | undefined;

  /**
   * @public
   * <p>The total number of endpoint definitions that weren't processed successfully (failed) by the import job, typically because an error, such as a syntax error, occurred.</p>
   */
  TotalFailures?: number;

  /**
   * @public
   * <p>The total number of pieces that must be processed to complete the import job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the import job.</p>
   */
  TotalPieces?: number;

  /**
   * @public
   * <p>The total number of endpoint definitions that were processed by the import job.</p>
   */
  TotalProcessed?: number;

  /**
   * @public
   * <p>The job type. This value is IMPORT for import jobs.</p>
   */
  Type: string | undefined;
}

/**
 * @public
 */
export interface CreateImportJobResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
   */
  ImportJobResponse: ImportJobResponse | undefined;
}

/**
 * @public
 * <p>InApp Template Request.</p>
 */
export interface InAppTemplateRequest {
  /**
   * @public
   * <p>The content of the message, can include up to 5 modals. Each modal must contain a message, a header, and background color. ImageUrl and buttons are optional.</p>
   */
  Content?: InAppMessageContent[];

  /**
   * @public
   * <p>Custom config to be sent to client.</p>
   */
  CustomConfig?: Record<string, string>;

  /**
   * @public
   * <p>The layout of the message.</p>
   */
  Layout?: Layout;

  /**
   * @public
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The description of the template.</p>
   */
  TemplateDescription?: string;
}

/**
 * @public
 */
export interface CreateInAppTemplateRequest {
  /**
   * @public
   * <p>InApp Template Request.</p>
   */
  InAppTemplateRequest: InAppTemplateRequest | undefined;

  /**
   * @public
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;
}

/**
 * @public
 * <p>Provides information about a request to create a message template.</p>
 */
export interface TemplateCreateMessageBody {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the message template that was created.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The message that's returned from the API for the request to create the message template.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The unique identifier for the request to create the message template.</p>
   */
  RequestID?: string;
}

/**
 * @public
 */
export interface CreateInAppTemplateResponse {
  /**
   * @public
   * <p>Provides information about a request to create a message template.</p>
   */
  TemplateCreateMessageBody: TemplateCreateMessageBody | undefined;
}

/**
 * @public
 * <p>The channel-specific configurations for the journey.</p>
 */
export interface JourneyChannelSettings {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the Connect Campaign.</p>
   */
  ConnectCampaignArn?: string;

  /**
   * @public
   * <p>IAM role ARN to be assumed when invoking Connect campaign execution APIs for dialing.</p>
   */
  ConnectCampaignExecutionRoleArn?: string;
}

/**
 * @public
 * <p>Specifies limits on the messages that a journey can send and the number of times participants can enter a journey.</p>
 */
export interface JourneyLimits {
  /**
   * @public
   * <p>The maximum number of messages that the journey can send to a single participant during a 24-hour period. The maximum value is 100.</p>
   */
  DailyCap?: number;

  /**
   * @public
   * <p>The maximum number of times that a participant can enter the journey. The maximum value is 100. To allow participants to enter the journey an unlimited number of times, set this value to 0.</p>
   */
  EndpointReentryCap?: number;

  /**
   * @public
   * <p>The maximum number of messages that the journey can send each second.</p>
   */
  MessagesPerSecond?: number;

  /**
   * @public
   * <p>Minimum time that must pass before an endpoint can re-enter a given journey. The duration should use an ISO 8601 format, such as PT1H. </p>
   */
  EndpointReentryInterval?: string;

  /**
   * @public
   * <p>The number of messages that an endpoint can receive during the specified timeframe.</p>
   */
  TimeframeCap?: JourneyTimeframeCap;

  /**
   * @public
   * <p>The maximum number of messages a journey can sent to a single endpoint. The maximum value is 100. If set to 0, this limit will not apply.</p>
   */
  TotalCap?: number;
}

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;

/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * <p>Specifies the start and end time for OpenHours.</p>
 */
export interface OpenHoursRule {
  /**
   * @public
   * <p>The start of the scheduled time, in ISO 8601 format, when the channel can send messages.</p>
   */
  StartTime?: string;

  /**
   * @public
   * <p>The end of the scheduled time, in ISO 8601 format, when the channel can't send messages.</p>
   */
  EndTime?: string;
}

/**
 * @public
 * <p>Specifies the times when message are allowed to be sent to endpoints.</p>
 */
export interface OpenHours {
  /**
   * @public
   * <p>Specifies the schedule settings for the email channel.</p>
   */
  EMAIL?: Partial<Record<DayOfWeek, OpenHoursRule[]>>;

  /**
   * @public
   * <p>Specifies the schedule settings for the SMS channel.</p>
   */
  SMS?: Partial<Record<DayOfWeek, OpenHoursRule[]>>;

  /**
   * @public
   * <p>Specifies the schedule settings for the push channel.</p>
   */
  PUSH?: Partial<Record<DayOfWeek, OpenHoursRule[]>>;

  /**
   * @public
   * <p>Specifies the schedule settings for the voice channel.</p>
   */
  VOICE?: Partial<Record<DayOfWeek, OpenHoursRule[]>>;

  /**
   * @public
   * <p>Specifies the schedule settings for the custom channel.</p>
   */
  CUSTOM?: Partial<Record<DayOfWeek, OpenHoursRule[]>>;
}

/**
 * @public
 * <p>Specifies the schedule settings for a journey.</p>
 */
export interface JourneySchedule {
  /**
   * @public
   * <p>The scheduled time, in ISO 8601 format, when the journey ended or will end.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The scheduled time, in ISO 8601 format, when the journey began or will begin.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The starting UTC offset for the journey schedule, if the value of the journey's LocalTime property is true. Valid values are: UTC,
   *                   UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05, UTC+05:30,
   *                   UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+08:45, UTC+09, UTC+09:30,
   *                   UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+12:45, UTC+13, UTC+13:45, UTC-02,
   *                   UTC-02:30, UTC-03, UTC-03:30, UTC-04, UTC-05, UTC-06, UTC-07, UTC-08, UTC-09,
   *                   UTC-09:30, UTC-10, and UTC-11.</p>
   */
  Timezone?: string;
}

/**
 * @public
 * <p>Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.</p>
 */
export interface EventFilter {
  /**
   * @public
   * <p>The dimensions for the event filter to use for the campaign or the journey activity.</p>
   */
  Dimensions: EventDimensions | undefined;

  /**
   * @public
   * <p>The type of event that causes the campaign to be sent or the journey activity to be performed. Valid values are: SYSTEM, sends the campaign or performs the activity when a system event occurs; and, ENDPOINT, sends the campaign or performs the activity when an endpoint event (<link  linkend="apps-application-id-events">Events resource</link>) occurs.</p>
   */
  FilterType: FilterType | undefined;
}

/**
 * @public
 * <p>Specifies the settings for an event that causes a journey activity to start.</p>
 */
export interface EventStartCondition {
  /**
   * @public
   * <p>Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.</p>
   */
  EventFilter?: EventFilter;

  SegmentId?: string;
}

/**
 * @public
 * <p>Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey.</p>
 */
export interface StartCondition {
  /**
   * @public
   * <p>The custom description of the condition.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies the settings for an event that causes a journey activity to start.</p>
   */
  EventStartCondition?: EventStartCondition;

  /**
   * @public
   * <p>The segment that's associated with the first activity in the journey. This segment determines which users are participants in the journey.</p>
   */
  SegmentStartCondition?: SegmentCondition;
}

/**
 * @public
 * @enum
 */
export const State = {
  ACTIVE: "ACTIVE",
  CANCELLED: "CANCELLED",
  CLOSED: "CLOSED",
  COMPLETED: "COMPLETED",
  DRAFT: "DRAFT",
  PAUSED: "PAUSED",
} as const;

/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * <p>Specifies the configuration and other settings for a journey.</p>
 */
export interface WriteJourneyRequest {
  /**
   * @public
   * <p>A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity. An activity identifier can contain a maximum of 100 characters. The characters must be alphanumeric characters.</p>
   */
  Activities?: Record<string, Activity>;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the journey was created.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the journey was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The messaging and entry limits for the journey.</p>
   */
  Limits?: JourneyLimits;

  /**
   * @public
   * <p>Specifies whether the journey's scheduled start and end times use each participant's local time. To base the schedule on each participant's local time, set this value to true.</p>
   */
  LocalTime?: boolean;

  /**
   * @public
   * <p>The name of the journey. A journey name can contain a maximum of 150 characters. The characters can be alphanumeric characters or symbols, such as underscores (_) or hyphens (-). A journey name can't contain any spaces.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.</p></li> <li><p>The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.</p></li> <li><p>The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.</p></li></ul> <p>If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</p>
   */
  QuietTime?: QuietTime;

  /**
   * @public
   * <p>The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.</p>
   */
  RefreshFrequency?: string;

  /**
   * @public
   * <p>The schedule settings for the journey.</p>
   */
  Schedule?: JourneySchedule;

  /**
   * @public
   * <p>The unique identifier for the first activity in the journey. The identifier for this activity can contain a maximum of 128 characters. The characters must be alphanumeric characters.</p>
   */
  StartActivity?: string;

  /**
   * @public
   * <p>The segment that defines which users are participants in the journey.</p>
   */
  StartCondition?: StartCondition;

  /**
   * @public
   * <p>The status of the journey. Valid values are:</p> <ul><li><p>DRAFT - Saves the journey and doesn't publish it.</p></li> <li><p>ACTIVE - Saves and publishes the journey. Depending on the journey's schedule, the journey starts running immediately or at the scheduled start time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.</p></li></ul> <p>PAUSED, CANCELLED, COMPLETED, and CLOSED states are not supported in requests to create or update a journey. To cancel, pause, or resume a journey, use the <link  linkend="apps-application-id-journeys-journey-id-state">Journey State</link> resource.</p>
   */
  State?: State;

  /**
   * @public
   * <p>Specifies whether endpoints in quiet hours should enter a wait till the end of their quiet hours.</p>
   */
  WaitForQuietTime?: boolean;

  /**
   * @public
   * <p>Indicates whether the journey participants should be refreshed when a segment is updated.</p>
   */
  RefreshOnSegmentUpdate?: boolean;

  /**
   * @public
   * <p>The channel-specific configurations for the journey.</p>
   */
  JourneyChannelSettings?: JourneyChannelSettings;

  /**
   * @public
   * <p>Indicates if journey has Advance Quiet Time enabled. This flag should be set to true in order to allow using OpenHours and ClosedDays.</p>
   */
  SendingSchedule?: boolean;

  /**
   * @public
   * <p>The time when journey allow to send messages. QuietTime should be configured first and SendingSchedule should be set to true.</p>
   */
  OpenHours?: OpenHours;

  /**
   * @public
   * <p>The time when journey will stop sending messages. QuietTime should be configured first and SendingSchedule should be set to true.</p>
   */
  ClosedDays?: ClosedDays;

  /**
   * @public
   * <p>An array of time zone estimation methods, if any, to use for determining an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html">Endpoints</a> time zone if the Endpoint does not have a value for the Demographic.Timezone attribute.</p> <ul> <li><p>PHONE_NUMBER - A time zone is determined based on the Endpoint.Address and Endpoint.Location.Country.</p></li> <li><p>POSTAL_CODE - A time zone is determined based on the Endpoint.Location.PostalCode and Endpoint.Location.Country.</p> <note><p>POSTAL_CODE detection is only supported in the United States, United Kingdom, Australia, New Zealand, Canada, France, Italy, Spain, Germany and in regions where Amazon Pinpoint is available.</p></note></li> </ul>
   */
  TimezoneEstimationMethods?: __TimezoneEstimationMethodsElement[];
}

/**
 * @public
 */
export interface CreateJourneyRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>Specifies the configuration and other settings for a journey.</p>
   */
  WriteJourneyRequest: WriteJourneyRequest | undefined;
}

/**
 * @public
 * <p>Provides information about the status, configuration, and other settings for a journey.</p>
 */
export interface JourneyResponse {
  /**
   * @public
   * <p>A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity.</p>
   */
  Activities?: Record<string, Activity>;

  /**
   * @public
   * <p>The unique identifier for the application that the journey applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the journey was created.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The unique identifier for the journey.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the journey was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The messaging and entry limits for the journey.</p>
   */
  Limits?: JourneyLimits;

  /**
   * @public
   * <p>Specifies whether the journey's scheduled start and end times use each participant's local time. If this value is true, the schedule uses each participant's local time.</p>
   */
  LocalTime?: boolean;

  /**
   * @public
   * <p>The name of the journey.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.</p></li> <li><p>The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.</p></li> <li><p>The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.</p></li></ul> <p>If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</p>
   */
  QuietTime?: QuietTime;

  /**
   * @public
   * <p>The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.</p>
   */
  RefreshFrequency?: string;

  /**
   * @public
   * <p>The schedule settings for the journey.</p>
   */
  Schedule?: JourneySchedule;

  /**
   * @public
   * <p>The unique identifier for the first activity in the journey.</p>
   */
  StartActivity?: string;

  /**
   * @public
   * <p>The segment that defines which users are participants in the journey.</p>
   */
  StartCondition?: StartCondition;

  /**
   * @public
   * <p>The current status of the journey. Possible values are:</p> <ul><li><p>DRAFT - The journey is being developed and hasn't been published yet.</p></li> <li><p>ACTIVE - The journey has been developed and published. Depending on the journey's schedule, the journey may currently be running or scheduled to start running at a later time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.</p></li> <li><p>COMPLETED - The journey has been published and has finished running. All participants have entered the journey and no participants are waiting to complete the journey or any activities in the journey.</p></li> <li><p>CANCELLED - The journey has been stopped. If a journey's status is CANCELLED, you can't add, change, or remove activities or segment settings from the journey.</p></li> <li><p>CLOSED - The journey has been published and has started running. It may have also passed its scheduled end time, or passed its scheduled start time and a refresh frequency hasn't been specified for it. If a journey's status is CLOSED, you can't add participants to it, and no existing participants can enter the journey for the first time. However, any existing participants who are currently waiting to start an activity may continue the journey.</p></li></ul>
   */
  State?: State;

  /**
   * @public
   * <p>This object is not used or supported.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Indicates whether endpoints in quiet hours should enter a wait activity until quiet hours have elapsed.</p>
   */
  WaitForQuietTime?: boolean;

  /**
   * @public
   * <p>Indicates whether the journey participants should be refreshed when a segment is updated.</p>
   */
  RefreshOnSegmentUpdate?: boolean;

  /**
   * @public
   * <p>The channel-specific configurations for the journey.</p>
   */
  JourneyChannelSettings?: JourneyChannelSettings;

  /**
   * @public
   * <p>Indicates if journey has Advance Quiet Time enabled. This flag should be set to true in order to allow using OpenHours and ClosedDays.</p>
   */
  SendingSchedule?: boolean;

  /**
   * @public
   * <p>The time when a journey can send messages. QuietTime should be configured first and SendingSchedule should be set to true.</p>
   */
  OpenHours?: OpenHours;

  /**
   * @public
   * <p>The time when a journey will not send messages. QuietTime should be configured first and SendingSchedule should be set to true.</p>
   */
  ClosedDays?: ClosedDays;

  /**
   * @public
   * <p>An array of time zone estimation methods, if any, to use for determining an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints-endpoint-id.html">Endpoints</a> time zone if the Endpoint does not have a value for the Demographic.Timezone attribute.</p> <ul> <li><p>PHONE_NUMBER - A time zone is determined based on the Endpoint.Address and Endpoint.Location.Country.</p></li> <li><p>POSTAL_CODE - A time zone is determined based on the Endpoint.Location.PostalCode and Endpoint.Location.Country.</p> <note><p>POSTAL_CODE detection is only supported in the United States, United Kingdom, Australia, New Zealand, Canada, France, Italy, Spain, Germany and in regions where Amazon Pinpoint is available.</p></note></li> </ul>
   */
  TimezoneEstimationMethods?: __TimezoneEstimationMethodsElement[];
}

/**
 * @public
 */
export interface CreateJourneyResponse {
  /**
   * @public
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

/**
 * @public
 * <p>Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel.</p>
 */
export interface DefaultPushNotificationTemplate {
  /**
   * @public
   * <p>The action to occur if a recipient taps a push notification that's based on the message template. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action;

  /**
   * @public
   * <p>The message body to use in push notifications that are based on the message template.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The sound to play when a recipient receives a push notification that's based on the message template. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p> <p>For an iOS platform, this value is the key for the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.</p>
   */
  Sound?: string;

  /**
   * @public
   * <p>The title to use in push notifications that are based on the message template. This title appears above the notification message on a recipient's device.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The URL to open in a recipient's default mobile browser, if a recipient taps a push notification that's based on the message template and the value of the Action property is URL.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
 */
export interface PushNotificationTemplateRequest {
  /**
   * @public
   * <p>The message template to use for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  ADM?: AndroidPushNotificationTemplate;

  /**
   * @public
   * <p>The message template to use for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  APNS?: APNSPushNotificationTemplate;

  /**
   * @public
   * <p>The message template to use for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  Baidu?: AndroidPushNotificationTemplate;

  /**
   * @public
   * <p>The default message template to use for push notification channels.</p>
   */
  Default?: DefaultPushNotificationTemplate;

  /**
   * @public
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * @public
   * <p>The message template to use for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  GCM?: AndroidPushNotificationTemplate;

  /**
   * @public
   * <p>The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.</p>
   */
  RecommenderId?: string;

  /**
   * @public
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A custom description of the message template.</p>
   */
  TemplateDescription?: string;
}

/**
 * @public
 */
export interface CreatePushTemplateRequest {
  /**
   * @public
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
   */
  PushNotificationTemplateRequest: PushNotificationTemplateRequest | undefined;

  /**
   * @public
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;
}

/**
 * @public
 */
export interface CreatePushTemplateResponse {
  /**
   * @public
   * <p>Provides information about a request to create a message template.</p>
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

/**
 * @public
 * <p>Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.</p>
 */
export interface CreateRecommenderConfigurationShape {
  /**
   * @public
   * <p>A map of key-value pairs that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>In the map, the key is the name of a custom attribute and the value is a custom display name for that attribute. The display name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The following restrictions apply to these names:</p> <ul><li><p>An attribute name must start with a letter or number and it can contain up to 50 characters. The characters can be letters, numbers, underscores (_), or hyphens (-). Attribute names are case sensitive and must be unique.</p></li> <li><p>An attribute display name must start with a letter or number and it can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p></li></ul> <p>This object is required if the configuration invokes an AWS Lambda function (RecommendationTransformerUri) to process recommendation data. Otherwise, don't include this object in your request.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>A custom description of the configuration for the recommender model. The description can contain up to 128 characters. The characters can be letters, numbers, spaces, or the following symbols: _ ; () , ‐.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A custom name of the configuration for the recommender model. The name must start with a letter or number and it can contain up to 128 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of Amazon Pinpoint ID to associate with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Valid values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Associate each user in the model with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Associate each user in the model with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If you specify this value, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>
   */
  RecommendationProviderIdType?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.</p>
   */
  RecommendationProviderRoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the recommender model to retrieve recommendation data from. This value must match the ARN of an Amazon Personalize campaign.</p>
   */
  RecommendationProviderUri: string | undefined;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the AWS Lambda function to invoke for additional processing of recommendation data that's retrieved from the recommender model.</p>
   */
  RecommendationTransformerUri?: string;

  /**
   * @public
   * <p>A custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This value is required if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p> <p>This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The name can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-). These restrictions don't apply to attribute values.</p>
   */
  RecommendationsDisplayName?: string;

  /**
   * @public
   * <p>The number of recommended items to retrieve from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables. The minimum value is 1. The maximum value is 5. The default value is 5.</p> <p>To use multiple recommended items and custom attributes with message variables, you have to use an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>
   */
  RecommendationsPerMessage?: number;
}

/**
 * @public
 */
export interface CreateRecommenderConfigurationRequest {
  /**
   * @public
   * <p>Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.</p>
   */
  CreateRecommenderConfiguration: CreateRecommenderConfigurationShape | undefined;
}

/**
 * @public
 * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
 */
export interface RecommenderConfigurationResponse {
  /**
   * @public
   * <p>A map that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>This value is null if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>The date, in extended ISO 8601 format, when the configuration was created for the recommender model.</p>
   */
  CreationDate: string | undefined;

  /**
   * @public
   * <p>The custom description of the configuration for the recommender model.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The unique identifier for the recommender model configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The date, in extended ISO 8601 format, when the configuration for the recommender model was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * @public
   * <p>The custom name of the configuration for the recommender model.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of Amazon Pinpoint ID that's associated with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Possible values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Each user in the model is associated with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Each user in the model is associated with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If this value is specified, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>
   */
  RecommendationProviderIdType?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.</p>
   */
  RecommendationProviderRoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the recommender model that Amazon Pinpoint retrieves the recommendation data from. This value is the ARN of an Amazon Personalize campaign.</p>
   */
  RecommendationProviderUri: string | undefined;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to perform additional processing of recommendation data that it retrieves from the recommender model.</p>
   */
  RecommendationTransformerUri?: string;

  /**
   * @public
   * <p>The custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console.</p> <p>This value is null if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>
   */
  RecommendationsDisplayName?: string;

  /**
   * @public
   * <p>The number of recommended items that are retrieved from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables.</p>
   */
  RecommendationsPerMessage?: number;
}

/**
 * @public
 */
export interface CreateRecommenderConfigurationResponse {
  /**
   * @public
   * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

/**
 * @public
 * <p>Specifies the segment identifier and version of a segment.</p>
 */
export interface SegmentReference {
  /**
   * @public
   * <p>The unique identifier for the segment.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The version number of the segment.</p>
   */
  Version?: number;
}

/**
 * @public
 * @enum
 */
export const SourceType = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const Type = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * <p>Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.</p>
 */
export interface SegmentGroup {
  /**
   * @public
   * <p>An array that defines the dimensions for the segment.</p>
   */
  Dimensions?: SegmentDimensions[];

  /**
   * @public
   * <p>The base segment to build the segment on. A base segment, also referred to as a <i>source segment</i>, defines the initial population of endpoints for a segment. When you add dimensions to a segment, Amazon Pinpoint filters the base segment by using the dimensions that you specify.</p> <p>You can specify more than one dimensional segment or only one imported segment. If you specify an imported segment, the Amazon Pinpoint console displays a segment size estimate that indicates the size of the imported segment without any filters applied to it.</p>
   */
  SourceSegments?: SegmentReference[];

  /**
   * @public
   * <p>Specifies how to handle multiple base segments for the segment. For example, if you specify three base segments for the segment, whether the resulting segment is based on all, any, or none of the base segments.</p>
   */
  SourceType?: SourceType;

  /**
   * @public
   * <p>Specifies how to handle multiple dimensions for the segment. For example, if you specify three dimensions for the segment, whether the resulting segment includes endpoints that match all, any, or none of the dimensions.</p>
   */
  Type?: Type;
}

/**
 * @public
 * @enum
 */
export const Include = {
  ALL: "ALL",
  ANY: "ANY",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Include = (typeof Include)[keyof typeof Include];

/**
 * @public
 * <p>Specifies the settings that define the relationships between segment groups for a segment.</p>
 */
export interface SegmentGroupList {
  /**
   * @public
   * <p>An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.</p>
   */
  Groups?: SegmentGroup[];

  /**
   * @public
   * <p>Specifies how to handle multiple segment groups for the segment. For example, if the segment includes three segment groups, whether the resulting segment includes endpoints that match all, any, or none of the segment groups.</p>
   */
  Include?: Include;
}

/**
 * @public
 * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
 */
export interface WriteSegmentRequest {
  /**
   * @public
   * <p>The criteria that define the dimensions for the segment.</p>
   */
  Dimensions?: SegmentDimensions;

  /**
   * @public
   * <p>The name of the segment.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The segment group to use and the dimensions to apply to the group's base segments in order to build the segment. A segment group can consist of zero or more base segments. Your request can include only one segment group.</p>
   */
  SegmentGroups?: SegmentGroupList;

  /**
   * @public
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the segment. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSegmentRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
   */
  WriteSegmentRequest: WriteSegmentRequest | undefined;
}

/**
 * @public
 * <p>Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.</p>
 */
export interface SegmentImportResource {
  /**
   * @public
   * <p>The number of channel types in the endpoint definitions that were imported to create the segment.</p>
   */
  ChannelCounts?: Record<string, number>;

  /**
   * @public
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId: string | undefined;

  /**
   * @public
   * <p>The format of the files that were imported to create the segment. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.</p>
   */
  Format: Format | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that the endpoint definitions were imported from to create the segment.</p>
   */
  S3Url: string | undefined;

  /**
   * @public
   * <p>The number of endpoint definitions that were imported successfully to create the segment.</p>
   */
  Size: number | undefined;
}

/**
 * @public
 * @enum
 */
export const SegmentType = {
  DIMENSIONAL: "DIMENSIONAL",
  IMPORT: "IMPORT",
} as const;

/**
 * @public
 */
export type SegmentType = (typeof SegmentType)[keyof typeof SegmentType];

/**
 * @public
 * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
 */
export interface SegmentResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the segment is associated with.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the segment.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The date and time when the segment was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * @public
   * <p>The dimension settings for the segment.</p>
   */
  Dimensions?: SegmentDimensions;

  /**
   * @public
   * <p>The unique identifier for the segment.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The settings for the import job that's associated with the segment.</p>
   */
  ImportDefinition?: SegmentImportResource;

  /**
   * @public
   * <p>The date and time when the segment was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The name of the segment.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A list of one or more segment groups that apply to the segment. Each segment group consists of zero or more base segments and the dimensions that are applied to those base segments.</p>
   */
  SegmentGroups?: SegmentGroupList;

  /**
   * @public
   * <p>The segment type. Valid values are:</p> <ul><li><p>DIMENSIONAL - A dynamic segment, which is a segment that uses selection criteria that you specify and is based on endpoint data that's reported by your app. Dynamic segments can change over time.</p></li> <li><p>IMPORT - A static segment, which is a segment that uses selection criteria that you specify and is based on endpoint definitions that you import from a file. Imported segments are static; they don't change over time.</p></li></ul>
   */
  SegmentType: SegmentType | undefined;

  /**
   * @public
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the segment. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The version number of the segment.</p>
   */
  Version?: number;
}

/**
 * @public
 */
export interface CreateSegmentResponse {
  /**
   * @public
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * @public
 * <p>Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
 */
export interface SMSTemplateRequest {
  /**
   * @public
   * <p>The message body to use in text messages that are based on the message template.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * @public
   * <p>The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.</p>
   */
  RecommenderId?: string;

  /**
   * @public
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A custom description of the message template.</p>
   */
  TemplateDescription?: string;
}

/**
 * @public
 */
export interface CreateSmsTemplateRequest {
  /**
   * @public
   * <p>Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
   */
  SMSTemplateRequest: SMSTemplateRequest | undefined;

  /**
   * @public
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;
}

/**
 * @public
 */
export interface CreateSmsTemplateResponse {
  /**
   * @public
   * <p>Provides information about a request to create a message template.</p>
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

/**
 * @public
 * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
 */
export interface VoiceTemplateRequest {
  /**
   * @public
   * <p>The text of the script to use in messages that are based on the message template, in plain text format.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * @public
   * <p>The code for the language to use when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  LanguageCode?: string;

  /**
   * @public
   * <note><p>As of <b>22-05-2023</b> tags has been deprecated for update operations. After this date any value in tags is not processed and an error code is not returned. To manage tags we recommend using either <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/tags-resource-arn.html">Tags</a> in the <i>API Reference for Amazon Pinpoint</i>, <a href="https://docs.aws.amazon.com/cli/latest/reference/resourcegroupstaggingapi/index.html">resourcegroupstaggingapi</a> commands in the <i>AWS Command Line Interface Documentation</i> or <a href="https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/services/resourcegroupstaggingapi/package-summary.html">resourcegroupstaggingapi</a> in the <i>AWS SDK</i>.</p></note> <p>(Deprecated) A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * @public
   * <p>The name of the voice to use when delivering messages that are based on the message template. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  VoiceId?: string;
}

/**
 * @public
 */
export interface CreateVoiceTemplateRequest {
  /**
   * @public
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
   */
  VoiceTemplateRequest: VoiceTemplateRequest | undefined;
}

/**
 * @public
 */
export interface CreateVoiceTemplateResponse {
  /**
   * @public
   * <p>Provides information about a request to create a message template.</p>
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

/**
 * @public
 * <p>Specifies the default message for all channels.</p>
 */
export interface DefaultMessage {
  /**
   * @public
   * <p>The default body of the message.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The default message variables to use in the message. You can override these default variables with individual address variables.</p>
   */
  Substitutions?: Record<string, string[]>;
}

/**
 * @public
 * <p>Specifies the default settings and content for a push notification that's sent directly to an endpoint.</p>
 */
export interface DefaultPushNotificationMessage {
  /**
   * @public
   * <p>The default action to occur if a recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action;

  /**
   * @public
   * <p>The default body of the notification message.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The JSON data payload to use for the default push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: Record<string, string>;

  /**
   * @public
   * <p>Specifies whether the default notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or delivering messages to an in-app notification center.</p>
   */
  SilentPush?: boolean;

  /**
   * @public
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: Record<string, string[]>;

  /**
   * @public
   * <p>The default title to display above the notification message on a recipient's device.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The default URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   */
  Url?: string;
}

/**
 * @public
 */
export interface DeleteAdmChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAdmChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteApnsChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApnsChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteApnsSandboxChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApnsSandboxChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteApnsVoipChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApnsVoipChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteApnsVoipSandboxChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApnsVoipSandboxChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteAppRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppResponse {
  /**
   * @public
   * <p>Provides information about an application.</p>
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

/**
 * @public
 */
export interface DeleteBaiduChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBaiduChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCampaignResponse {
  /**
   * @public
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * @public
 */
export interface DeleteEmailChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 * <p>Provides information about the status and settings of the email channel for an application.</p>
 */
export interface EmailChannelResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the email channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html">Amazon SES configuration set</a> that's applied to messages that are sent through the channel.</p>
   */
  ConfigurationSet?: string;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the email channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>Specifies whether the email channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The verified email address that email is sent from when you send email through the channel.</p>
   */
  FromAddress?: string;

  /**
   * @public
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * @public
   * <p>(Deprecated) An identifier for the email channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that's used when you send email through the channel.</p>
   */
  Identity?: string;

  /**
   * @public
   * <p>Specifies whether the email channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * @public
   * <p>The user who last modified the email channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the email channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The maximum number of emails that can be sent through the channel each second.</p>
   */
  MessagesPerSecond?: number;

  /**
   * @public
   * <p>The type of messaging or notification platform for the channel. For the email channel, this value is EMAIL.</p>
   */
  Platform: string | undefined;

  /**
   * @public
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that Amazon Pinpoint uses to submit email-related event data for the channel.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The current version of the email channel.</p>
   */
  Version?: number;
}

/**
 * @public
 */
export interface DeleteEmailChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteEmailTemplateRequest {
  /**
   * @public
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 * <p>Provides information about an API request or response.</p>
 */
export interface MessageBody {
  /**
   * @public
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
}

/**
 * @public
 */
export interface DeleteEmailTemplateResponse {
  /**
   * @public
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the endpoint.</p>
   */
  EndpointId: string | undefined;
}

/**
 * @public
 * <p>Specifies demographic information about an endpoint, such as the applicable time zone and platform.</p>
 */
export interface EndpointDemographic {
  /**
   * @public
   * <p>The version of the app that's associated with the endpoint.</p>
   */
  AppVersion?: string;

  /**
   * @public
   * <p>The locale of the endpoint, in the following format: the ISO 639-1 alpha-2 code, followed by an underscore (_), followed by an ISO 3166-1 alpha-2 value.</p>
   */
  Locale?: string;

  /**
   * @public
   * <p>The manufacturer of the endpoint device, such as apple or samsung.</p>
   */
  Make?: string;

  /**
   * @public
   * <p>The model name or number of the endpoint device, such as iPhone or SM-G900F.</p>
   */
  Model?: string;

  /**
   * @public
   * <p>The model version of the endpoint device.</p>
   */
  ModelVersion?: string;

  /**
   * @public
   * <p>The platform of the endpoint device, such as ios.</p>
   */
  Platform?: string;

  /**
   * @public
   * <p>The platform version of the endpoint device.</p>
   */
  PlatformVersion?: string;

  /**
   * @public
   * <p>The time zone of the endpoint, specified as a tz database name value, such as America/Los_Angeles.</p>
   */
  Timezone?: string;
}

/**
 * @public
 * <p>Specifies geographic information about an endpoint.</p>
 */
export interface EndpointLocation {
  /**
   * @public
   * <p>The name of the city where the endpoint is located.</p>
   */
  City?: string;

  /**
   * @public
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the endpoint is located. For example, US for the United States.</p>
   */
  Country?: string;

  /**
   * @public
   * <p>The latitude coordinate of the endpoint location, rounded to one decimal place.</p>
   */
  Latitude?: number;

  /**
   * @public
   * <p>The longitude coordinate of the endpoint location, rounded to one decimal place.</p>
   */
  Longitude?: number;

  /**
   * @public
   * <p>The postal or ZIP code for the area where the endpoint is located.</p>
   */
  PostalCode?: string;

  /**
   * @public
   * <p>The name of the region where the endpoint is located. For locations in the United States, this value is the name of a state.</p>
   */
  Region?: string;
}

/**
 * @public
 * <p>Specifies data for one or more attributes that describe the user who's associated with an endpoint.</p>
 */
export interface EndpointUser {
  /**
   * @public
   * <p>One or more custom attributes that describe the user by associating a name with an array of values. For example, the value of an attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.</p> <p>An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This restriction doesn't apply to attribute values.</p>
   */
  UserAttributes?: Record<string, string[]>;

  /**
   * @public
   * <p>The unique identifier for the user.</p>
   */
  UserId?: string;
}

/**
 * @public
 * <p>Provides information about the channel type and other settings for an endpoint.</p>
 */
export interface EndpointResponse {
  /**
   * @public
   * <p>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For example, the address for a push-notification channel is typically the token provided by a push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. The address for the SMS channel is a phone number in E.164 format, such as +12065550100. The address for the email channel is an email address.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The unique identifier for the application that's associated with the endpoint.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments.</p>
   */
  Attributes?: Record<string, string[]>;

  /**
   * @public
   * <p>The channel that's used when sending messages or push notifications to the endpoint.</p>
   */
  ChannelType?: ChannelType;

  /**
   * @public
   * <p>A number from 0-99 that represents the cohort that the endpoint is assigned to. Endpoints are grouped into cohorts randomly, and each cohort contains approximately 1 percent of the endpoints for an application. Amazon Pinpoint assigns cohorts to the holdout or treatment allocations for campaigns.</p>
   */
  CohortId?: string;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the endpoint was created.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   */
  Demographic?: EndpointDemographic;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the endpoint was last updated.</p>
   */
  EffectiveDate?: string;

  /**
   * @public
   * <p>Specifies whether messages or push notifications are sent to the endpoint. Possible values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   */
  EndpointStatus?: string;

  /**
   * @public
   * <p>The unique identifier that you assigned to the endpoint. The identifier should be a globally unique identifier (GUID) to ensure that it doesn't conflict with other endpoint identifiers that are associated with the application.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The geographic information for the endpoint.</p>
   */
  Location?: EndpointLocation;

  /**
   * @public
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   */
  Metrics?: Record<string, number>;

  /**
   * @public
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   */
  OptOut?: string;

  /**
   * @public
   * <p>The unique identifier for the most recent request to update the endpoint.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.</p>
   */
  User?: EndpointUser;
}

/**
 * @public
 */
export interface DeleteEndpointResponse {
  /**
   * @public
   * <p>Provides information about the channel type and other settings for an endpoint.</p>
   */
  EndpointResponse: EndpointResponse | undefined;
}

/**
 * @public
 */
export interface DeleteEventStreamRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
 */
export interface EventStream {
  /**
   * @public
   * <p>The unique identifier for the application to publish event data for.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream to publish event data to.</p> <p>For a Kinesis data stream, the ARN format is: arn:aws:kinesis:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:stream/<replaceable>stream_name</replaceable>
   *                </p> <p>For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:deliverystream/<replaceable>stream_name</replaceable>
   *                </p>
   */
  DestinationStreamArn: string | undefined;

  /**
   * @public
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when publishing event data, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId?: string;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the event stream was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The IAM user who last modified the event stream.</p>
   */
  LastUpdatedBy?: string;

  /**
   * @public
   * <p>The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.</p>
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventStreamResponse {
  /**
   * @public
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  EventStream: EventStream | undefined;
}

/**
 * @public
 */
export interface DeleteGcmChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 */
export interface GCMChannelResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the GCM channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The date and time when the GCM channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>The Web API Key, also referred to as an <i>API_KEY</i> or <i>server key</i>, that you received from Google to communicate with Google services.</p>
   */
  Credential?: string;

  /**
   * @public
   * <p>The default authentication method used for GCM. Values are either "TOKEN" or "KEY". Defaults to "KEY".</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * @public
   * <p>Specifies whether the GCM channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * @public
   * <p>Returns true if the JSON file provided by Google during registration process was used in the <b>ServiceJson</b> field of the request.</p>
   */
  HasFcmServiceCredentials?: boolean;

  /**
   * @public
   * <p>(Deprecated) An identifier for the GCM channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Specifies whether the GCM channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * @public
   * <p>The user who last modified the GCM channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time when the GCM channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The type of messaging or notification platform for the channel. For the GCM channel, this value is GCM.</p>
   */
  Platform: string | undefined;

  /**
   * @public
   * <p>The current version of the GCM channel.</p>
   */
  Version?: number;
}

/**
 * @public
 */
export interface DeleteGcmChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteInAppTemplateRequest {
  /**
   * @public
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 */
export interface DeleteInAppTemplateResponse {
  /**
   * @public
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface DeleteJourneyRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteJourneyResponse {
  /**
   * @public
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

/**
 * @public
 */
export interface DeletePushTemplateRequest {
  /**
   * @public
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 */
export interface DeletePushTemplateResponse {
  /**
   * @public
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderConfigurationRequest {
  /**
   * @public
   * <p>The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.</p>
   */
  RecommenderId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommenderConfigurationResponse {
  /**
   * @public
   * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface DeleteSegmentRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSegmentResponse {
  /**
   * @public
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * @public
 */
export interface DeleteSmsChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 * <p>Provides information about the status and settings of the SMS channel for an application.</p>
 */
export interface SMSChannelResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the SMS channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the SMS channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>Specifies whether the SMS channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * @public
   * <p>(Deprecated) An identifier for the SMS channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Specifies whether the SMS channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * @public
   * <p>The user who last modified the SMS channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the SMS channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The type of messaging or notification platform for the channel. For the SMS channel, this value is SMS.</p>
   */
  Platform: string | undefined;

  /**
   * @public
   * <p>The maximum number of promotional messages that you can send through the SMS channel each second.</p>
   */
  PromotionalMessagesPerSecond?: number;

  /**
   * @public
   * <p>The identity that displays on recipients' devices when they receive messages from the SMS channel.</p>
   */
  SenderId?: string;

  /**
   * @public
   * <p>The registered short code to use when you send messages through the SMS channel.</p>
   */
  ShortCode?: string;

  /**
   * @public
   * <p>The maximum number of transactional messages that you can send through the SMS channel each second.</p>
   */
  TransactionalMessagesPerSecond?: number;

  /**
   * @public
   * <p>The current version of the SMS channel.</p>
   */
  Version?: number;
}

/**
 * @public
 */
export interface DeleteSmsChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the SMS channel for an application.</p>
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteSmsTemplateRequest {
  /**
   * @public
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 */
export interface DeleteSmsTemplateResponse {
  /**
   * @public
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface DeleteUserEndpointsRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the user.</p>
   */
  UserId: string | undefined;
}

/**
 * @public
 * <p>Provides information about all the endpoints that are associated with a user ID.</p>
 */
export interface EndpointsResponse {
  /**
   * @public
   * <p>An array of responses, one for each endpoint that's associated with the user ID.</p>
   */
  Item: EndpointResponse[] | undefined;
}

/**
 * @public
 */
export interface DeleteUserEndpointsResponse {
  /**
   * @public
   * <p>Provides information about all the endpoints that are associated with a user ID.</p>
   */
  EndpointsResponse: EndpointsResponse | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 * <p>Provides information about the status and settings of the voice channel for an application.</p>
 */
export interface VoiceChannelResponse {
  /**
   * @public
   * <p>The unique identifier for the application that the voice channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the voice channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * @public
   * <p>Specifies whether the voice channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * @public
   * <p>(Deprecated) An identifier for the voice channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Specifies whether the voice channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * @public
   * <p>The user who last modified the voice channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the voice channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The type of messaging or notification platform for the channel. For the voice channel, this value is VOICE.</p>
   */
  Platform: string | undefined;

  /**
   * @public
   * <p>The current version of the voice channel.</p>
   */
  Version?: number;
}

/**
 * @public
 */
export interface DeleteVoiceChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceTemplateRequest {
  /**
   * @public
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 */
export interface DeleteVoiceTemplateResponse {
  /**
   * @public
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 * @enum
 */
export const DeliveryStatus = {
  DUPLICATE: "DUPLICATE",
  OPT_OUT: "OPT_OUT",
  PERMANENT_FAILURE: "PERMANENT_FAILURE",
  SUCCESSFUL: "SUCCESSFUL",
  TEMPORARY_FAILURE: "TEMPORARY_FAILURE",
  THROTTLED: "THROTTLED",
  UNKNOWN_FAILURE: "UNKNOWN_FAILURE",
} as const;

/**
 * @public
 */
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];

/**
 * @public
 * <p>Specifies the contents of an email message, represented as a raw MIME message.</p>
 */
export interface RawEmail {
  /**
   * @public
   * <p>The email message, represented as a raw MIME message. The entire message must be base64 encoded.</p>
   */
  Data?: Uint8Array;
}

/**
 * @public
 * <p>Specifies the subject or body of an email message, represented as textual email data and the applicable character set.</p>
 */
export interface SimpleEmailPart {
  /**
   * @public
   * <p>The applicable character set for the message content.</p>
   */
  Charset?: string;

  /**
   * @public
   * <p>The textual data of the message content.</p>
   */
  Data?: string;
}

/**
 * @public
 * <p>Specifies the contents of an email message, composed of a subject, a text part, and an HTML part.</p>
 */
export interface SimpleEmail {
  /**
   * @public
   * <p>The body of the email message, in HTML format. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.</p>
   */
  HtmlPart?: SimpleEmailPart;

  /**
   * @public
   * <p>The subject line, or title, of the email.</p>
   */
  Subject?: SimpleEmailPart;

  /**
   * @public
   * <p>The body of the email message, in plain text format. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.</p>
   */
  TextPart?: SimpleEmailPart;
}

/**
 * @public
 * <p>Specifies the default settings and content for a one-time email message that's sent directly to an endpoint.</p>
 */
export interface EmailMessage {
  /**
   * @public
   * <p>The body of the email message.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The email address to forward bounces and complaints to, if feedback forwarding is enabled.</p>
   */
  FeedbackForwardingAddress?: string;

  /**
   * @public
   * <p>The verified email address to send the email message from. The default value is the FromAddress specified for the email channel.</p>
   */
  FromAddress?: string;

  /**
   * @public
   * <p>The email message, represented as a raw MIME message.</p>
   */
  RawEmail?: RawEmail;

  /**
   * @public
   * <p>The reply-to email address(es) for the email message. If a recipient replies to the email, each reply-to address receives the reply.</p>
   */
  ReplyToAddresses?: string[];

  /**
   * @public
   * <p>The email message, composed of a subject, a text part, and an HTML part.</p>
   */
  SimpleEmail?: SimpleEmail;

  /**
   * @public
   * <p>The default message variables to use in the email message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: Record<string, string[]>;
}

/**
 * @public
 * <p>Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 */
export interface GCMMessage {
  /**
   * @public
   * <p>The action to occur if the recipient taps the push notification. Valid values are:</p> <ul><li><p>OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action.</p></li> <li><p>DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform.</p></li> <li><p>URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.</p></li></ul>
   */
  Action?: Action;

  /**
   * @public
   * <p>The body of the notification message.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>An arbitrary string that identifies a group of messages that can be collapsed to ensure that only the last message is sent when delivery can resume. This helps avoid sending too many instances of the same messages when the recipient's device comes online again or becomes active.</p> <p>Amazon Pinpoint specifies this value in the Firebase Cloud Messaging (FCM) collapse_key parameter when it sends the notification message to FCM.</p>
   */
  CollapseKey?: string;

  /**
   * @public
   * <p>The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.</p>
   */
  Data?: Record<string, string>;

  /**
   * @public
   * <p>The icon image name of the asset saved in your app.</p>
   */
  IconReference?: string;

  /**
   * @public
   * <p>The URL of the large icon image to display in the content view of the push notification.</p>
   */
  ImageIconUrl?: string;

  /**
   * @public
   * <p>The URL of an image to display in the push notification.</p>
   */
  ImageUrl?: string;

  /**
   * @public
   * <p>The preferred authentication method, with valid values "KEY" or "TOKEN". If a value isn't provided then the <b>DefaultAuthenticationMethod</b> is used.</p>
   */
  PreferredAuthenticationMethod?: string;

  /**
   * @public
   * <p>para>normal – The notification might be delayed. Delivery is optimized for battery usage on the recipient's device. Use this value unless immediate delivery is required.</p>/listitem> <li><p>high – The notification is sent immediately and might wake a sleeping device.</p></li>/para> <p>Amazon Pinpoint specifies this value in the FCM priority parameter when it sends the notification message to FCM.</p> <p>The equivalent values for Apple Push Notification service (APNs) are 5, for normal, and 10, for high. If you specify an APNs value for this property, Amazon Pinpoint accepts and converts the value to the corresponding FCM value.</p>
   */
  Priority?: string;

  /**
   * @public
   * <p>The raw, JSON-formatted string to use as the payload for the notification message. If specified, this value overrides all other content for the message.</p>
   */
  RawContent?: string;

  /**
   * @public
   * <p>The package name of the application where registration tokens must match in order for the recipient to receive the message.</p>
   */
  RestrictedPackageName?: string;

  /**
   * @public
   * <p>Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.</p>
   */
  SilentPush?: boolean;

  /**
   * @public
   * <p>The URL of the small icon image to display in the status bar and the content view of the push notification.</p>
   */
  SmallImageIconUrl?: string;

  /**
   * @public
   * <p>The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.</p>
   */
  Sound?: string;

  /**
   * @public
   * <p>The default message variables to use in the notification message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: Record<string, string[]>;

  /**
   * @public
   * <p>The amount of time, in seconds, that FCM should store and attempt to deliver the push notification, if the service is unable to deliver the notification the first time. If you don't specify this value, FCM defaults to the maximum value, which is 2,419,200 seconds (28 days).</p> <p>Amazon Pinpoint specifies this value in the FCM time_to_live parameter when it sends the notification message to FCM.</p>
   */
  TimeToLive?: number;

  /**
   * @public
   * <p>The title to display above the notification message on the recipient's device.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.</p>
 */
export interface SMSMessage {
  /**
   * @public
   * <p>The body of the SMS message.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The SMS program name that you provided to AWS Support when you requested your dedicated number.</p>
   */
  Keyword?: string;

  /**
   * @public
   * <p>This field is reserved for future use.</p>
   */
  MediaUrl?: string;

  /**
   * @public
   * <p>The SMS message type. Valid values are TRANSACTIONAL (for messages that are critical or time-sensitive, such as a one-time passwords) and PROMOTIONAL (for messsages that aren't critical or time-sensitive, such as marketing messages).</p>
   */
  MessageType?: MessageType;

  /**
   * @public
   * <p>The number to send the SMS message from. This value should be one of the dedicated long or short codes that's assigned to your AWS account. If you don't specify a long or short code, Amazon Pinpoint assigns a random long code to the SMS message and sends the message from that code.</p>
   */
  OriginationNumber?: string;

  /**
   * @public
   * <p>The sender ID to display as the sender of the message on a recipient's device. Support for sender IDs varies by country or region.</p>
   */
  SenderId?: string;

  /**
   * @public
   * <p>The message variables to use in the SMS message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: Record<string, string[]>;

  /**
   * @public
   * <p>The entity ID or Principal Entity (PE) id received from the regulatory body for sending SMS in your country.</p>
   */
  EntityId?: string;

  /**
   * @public
   * <p>The template ID received from the regulatory body for sending SMS in your country.</p>
   */
  TemplateId?: string;
}

/**
 * @public
 * <p>Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel.</p>
 */
export interface VoiceMessage {
  /**
   * @public
   * <p>The text of the script to use for the voice message.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>The code for the language to use when synthesizing the text of the message script. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  LanguageCode?: string;

  /**
   * @public
   * <p>The long code to send the voice message from. This value should be one of the dedicated long codes that's assigned to your AWS account. Although it isn't required, we recommend that you specify the long code in E.164 format, for example +12065550100, to ensure prompt and accurate delivery of the message.</p>
   */
  OriginationNumber?: string;

  /**
   * @public
   * <p>The default message variables to use in the voice message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: Record<string, string[]>;

  /**
   * @public
   * <p>The name of the voice to use when delivering the message. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  VoiceId?: string;
}

/**
 * @public
 * <p>Specifies the settings and content for the default message and any default messages that you tailored for specific channels.</p>
 */
export interface DirectMessageConfiguration {
  /**
   * @public
   * <p>The default push notification message for the ADM (Amazon Device Messaging) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  ADMMessage?: ADMMessage;

  /**
   * @public
   * <p>The default push notification message for the APNs (Apple Push Notification service) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  APNSMessage?: APNSMessage;

  /**
   * @public
   * <p>The default push notification message for the Baidu (Baidu Cloud Push) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  BaiduMessage?: BaiduMessage;

  /**
   * @public
   * <p>The default message for all channels.</p>
   */
  DefaultMessage?: DefaultMessage;

  /**
   * @public
   * <p>The default push notification message for all push notification channels.</p>
   */
  DefaultPushNotificationMessage?: DefaultPushNotificationMessage;

  /**
   * @public
   * <p>The default message for the email channel. This message overrides the default message (DefaultMessage).</p>
   */
  EmailMessage?: EmailMessage;

  /**
   * @public
   * <p>The default push notification message for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message overrides the default push notification message (DefaultPushNotificationMessage).</p>
   */
  GCMMessage?: GCMMessage;

  /**
   * @public
   * <p>The default message for the SMS channel. This message overrides the default message (DefaultMessage).</p>
   */
  SMSMessage?: SMSMessage;

  /**
   * @public
   * <p>The default message for the voice channel. This message overrides the default message (DefaultMessage).</p>
   */
  VoiceMessage?: VoiceMessage;
}

/**
 * @public
 * <p>Specifies the status and settings of the email channel for an application.</p>
 */
export interface EmailChannelRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html">Amazon SES configuration set</a> that you want to apply to messages that you send through the channel.</p>
   */
  ConfigurationSet?: string;

  /**
   * @public
   * <p>Specifies whether to enable the email channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The verified email address that you want to send email from when you send email through the channel.</p>
   */
  FromAddress: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you want to use when you send email through the channel.</p>
   */
  Identity: string | undefined;

  /**
   * @public
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that you want Amazon Pinpoint to use when it submits email-related event data for the channel.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 * @enum
 */
export const TemplateType = {
  EMAIL: "EMAIL",
  INAPP: "INAPP",
  PUSH: "PUSH",
  SMS: "SMS",
  VOICE: "VOICE",
} as const;

/**
 * @public
 */
export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType];

/**
 * @public
 * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
 */
export interface EmailTemplateResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * @public
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * @public
   * <p>The message body, in HTML format, that's used in email messages that are based on the message template.</p>
   */
  HtmlPart?: string;

  /**
   * @public
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the recommender model that's used by the message template.</p>
   */
  RecommenderId?: string;

  /**
   * @public
   * <p>The subject line, or title, that's used in email messages that are based on the message template.</p>
   */
  Subject?: string;

  /**
   * @public
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * @public
   * <p>The name of the message template.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>The type of channel that the message template is designed for. For an email template, this value is EMAIL.</p>
   */
  TemplateType: TemplateType | undefined;

  /**
   * @public
   * <p>The message body, in plain text format, that's used in email messages that are based on the message template.</p>
   */
  TextPart?: string;

  /**
   * @public
   * <p>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint.</p>
 */
export interface EndpointBatchItem {
  /**
   * @public
   * <p>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.</p> <p>An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This restriction doesn't apply to attribute values.</p>
   */
  Attributes?: Record<string, string[]>;

  /**
   * @public
   * <p>The channel to use when sending messages or push notifications to the endpoint.</p>
   */
  ChannelType?: ChannelType;

  /**
   * @public
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   */
  Demographic?: EndpointDemographic;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the endpoint was created or updated.</p>
   */
  EffectiveDate?: string;

  /**
   * @public
   * <p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   */
  EndpointStatus?: string;

  /**
   * @public
   * <p>The unique identifier for the endpoint in the context of the batch.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The geographic information for the endpoint.</p>
   */
  Location?: EndpointLocation;

  /**
   * @public
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   */
  Metrics?: Record<string, number>;

  /**
   * @public
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   */
  OptOut?: string;

  /**
   * @public
   * <p>The unique identifier for the request to create or update the endpoint.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>One or more custom attributes that describe the user who's associated with the endpoint.</p>
   */
  User?: EndpointUser;
}

/**
 * @public
 * <p>Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.</p>
 */
export interface EndpointBatchRequest {
  /**
   * @public
   * <p>An array that defines the endpoints to create or update and, for each endpoint, the property values to set or change. An array can contain a maximum of 100 items.</p>
   */
  Item: EndpointBatchItem[] | undefined;
}

/**
 * @public
 * <p>Provides the status code and message that result from processing data for an endpoint.</p>
 */
export interface EndpointItemResponse {
  /**
   * @public
   * <p>The custom message that's returned in the response as a result of processing the endpoint data.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The status code that's returned in the response as a result of processing the endpoint data.</p>
   */
  StatusCode?: number;
}

/**
 * @public
 * <p>Provides information about the delivery status and results of sending a message directly to an endpoint.</p>
 */
export interface EndpointMessageResult {
  /**
   * @public
   * <p>The endpoint address that the message was delivered to.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The delivery status of the message. Possible values are:</p> <ul> <li><p>DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>OPT_OUT - The user who's associated with the endpoint has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint. Amazon Pinpoint won't attempt to send the message again.</p></li>    <li><p>SUCCESSFUL - The message was successfully delivered to the endpoint.</p></li> <li><p>TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint.</p></li> <li><p>TIMEOUT - The message couldn't be sent within the timeout period.</p></li> <li><p>UNKNOWN_FAILURE - An unknown error occurred.</p></li></ul>
   */
  DeliveryStatus: DeliveryStatus | undefined;

  /**
   * @public
   * <p>The unique identifier for the message that was sent.</p>
   */
  MessageId?: string;

  /**
   * @public
   * <p>The downstream service status code for delivering the message.</p>
   */
  StatusCode: number | undefined;

  /**
   * @public
   * <p>The status message for delivering the message.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>For push notifications that are sent through the GCM channel, specifies whether the endpoint's device registration token was updated as part of delivering the message.</p>
   */
  UpdatedToken?: string;
}

/**
 * @public
 * <p>Specifies the channel type and other settings for an endpoint.</p>
 */
export interface EndpointRequest {
  /**
   * @public
   * <p>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.</p> <p>An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This restriction doesn't apply to attribute values.</p>
   */
  Attributes?: Record<string, string[]>;

  /**
   * @public
   * <p>The channel to use when sending messages or push notifications to the endpoint.</p>
   */
  ChannelType?: ChannelType;

  /**
   * @public
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   */
  Demographic?: EndpointDemographic;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the endpoint is updated.</p>
   */
  EffectiveDate?: string;

  /**
   * @public
   * <p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   */
  EndpointStatus?: string;

  /**
   * @public
   * <p>The geographic information for the endpoint.</p>
   */
  Location?: EndpointLocation;

  /**
   * @public
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   */
  Metrics?: Record<string, number>;

  /**
   * @public
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   */
  OptOut?: string;

  /**
   * @public
   * <p>The unique identifier for the most recent request to update the endpoint.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>One or more custom attributes that describe the user who's associated with the endpoint.</p>
   */
  User?: EndpointUser;
}

/**
 * @public
 * <p>Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint.</p>
 */
export interface EndpointSendConfiguration {
  /**
   * @public
   * <p>The body of the message. If specified, this value overrides the default message body.</p>
   */
  BodyOverride?: string;

  /**
   * @public
   * <p>A map of custom attributes to attach to the message for the address. Attribute names are case sensitive.</p> <p>For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: Record<string, string>;

  /**
   * @public
   * <p>The raw, JSON-formatted string to use as the payload for the message. If specified, this value overrides all other values for the message.</p>
   */
  RawContent?: string;

  /**
   * @public
   * <p>A map of the message variables to merge with the variables specified for the default message (DefaultMessage.Substitutions). The variables specified in this map take precedence over all other variables.</p>
   */
  Substitutions?: Record<string, string[]>;

  /**
   * @public
   * <p>The title or subject line of the message. If specified, this value overrides the default message title or subject line.</p>
   */
  TitleOverride?: string;
}

/**
 * @public
 * <p>Provides information about a session.</p>
 */
export interface Session {
  /**
   * @public
   * <p>The duration of the session, in milliseconds.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The unique identifier for the session.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The date and time when the session began.</p>
   */
  StartTimestamp: string | undefined;

  /**
   * @public
   * <p>The date and time when the session ended.</p>
   */
  StopTimestamp?: string;
}

/**
 * @public
 * <p>Specifies information about an event that reports data to Amazon Pinpoint.</p>
 */
export interface Event {
  /**
   * @public
   * <p>The package name of the app that's recording the event.</p>
   */
  AppPackageName?: string;

  /**
   * @public
   * <p>The title of the app that's recording the event.</p>
   */
  AppTitle?: string;

  /**
   * @public
   * <p>The version number of the app that's recording the event.</p>
   */
  AppVersionCode?: string;

  /**
   * @public
   * <p>One or more custom attributes that are associated with the event.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>The version of the SDK that's running on the client device.</p>
   */
  ClientSdkVersion?: string;

  /**
   * @public
   * <p>The name of the event.</p>
   */
  EventType: string | undefined;

  /**
   * @public
   * <p>One or more custom metrics that are associated with the event.</p>
   */
  Metrics?: Record<string, number>;

  /**
   * @public
   * <p>The name of the SDK that's being used to record the event.</p>
   */
  SdkName?: string;

  /**
   * @public
   * <p>Information about the session in which the event occurred.</p>
   */
  Session?: Session;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the event occurred.</p>
   */
  Timestamp: string | undefined;
}

/**
 * @public
 * <p>Provides the status code and message that result from processing an event.</p>
 */
export interface EventItemResponse {
  /**
   * @public
   * <p>A custom message that's returned in the response as a result of processing the event.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The status code that's returned in the response as a result of processing the event. Possible values are: 202, for events that were accepted; and, 400, for events that weren't valid.</p>
   */
  StatusCode?: number;
}

/**
 * @public
 * <p>Specifies the properties and attributes of an endpoint that's associated with an event.</p>
 */
export interface PublicEndpoint {
  /**
   * @public
   * <p>The unique identifier for the recipient, such as a device token, email address, or mobile phone number.</p>
   */
  Address?: string;

  /**
   * @public
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. You can use these attributes as filter criteria when you create segments.</p>
   */
  Attributes?: Record<string, string[]>;

  /**
   * @public
   * <p>The channel that's used when sending messages or push notifications to the endpoint.</p>
   */
  ChannelType?: ChannelType;

  /**
   * @public
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   */
  Demographic?: EndpointDemographic;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format, when the endpoint was last updated.</p>
   */
  EffectiveDate?: string;

  /**
   * @public
   * <p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   */
  EndpointStatus?: string;

  /**
   * @public
   * <p>The geographic information for the endpoint.</p>
   */
  Location?: EndpointLocation;

  /**
   * @public
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   */
  Metrics?: Record<string, number>;

  /**
   * @public
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   */
  OptOut?: string;

  /**
   * @public
   * <p>A unique identifier that's generated each time the endpoint is updated.</p>
   */
  RequestId?: string;

  /**
   * @public
   * <p>One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.</p>
   */
  User?: EndpointUser;
}

/**
 * @public
 * <p>Specifies a batch of endpoints and events to process.</p>
 */
export interface EventsBatch {
  /**
   * @public
   * <p>A set of properties and attributes that are associated with the endpoint.</p>
   */
  Endpoint: PublicEndpoint | undefined;

  /**
   * @public
   * <p>A set of properties that are associated with the event.</p>
   */
  Events: Record<string, Event> | undefined;
}

/**
 * @public
 * <p>Specifies a batch of events to process.</p>
 */
export interface EventsRequest {
  /**
   * @public
   * <p>The batch of events to process. For each item in a batch, the endpoint ID acts as a key that has an EventsBatch object as its value.</p>
   */
  BatchItem: Record<string, EventsBatch> | undefined;
}

/**
 * @public
 * <p>Provides information about the results of a request to create or update an endpoint that's associated with an event.</p>
 */
export interface ItemResponse {
  /**
   * @public
   * <p>The response that was received after the endpoint data was accepted.</p>
   */
  EndpointItemResponse?: EndpointItemResponse;

  /**
   * @public
   * <p>A multipart response object that contains a key and a value for each event in the request. In each object, the event ID is the key and an EventItemResponse object is the value.</p>
   */
  EventsItemResponse?: Record<string, EventItemResponse>;
}

/**
 * @public
 * <p>Provides information about endpoints and the events that they're associated with.</p>
 */
export interface EventsResponse {
  /**
   * @public
   * <p>A map that contains a multipart response for each endpoint. For each item in this object, the endpoint ID is the key and the item response is the value. If no item response exists, the value can also be one of the following: 202, the request was processed successfully; or 400, the payload wasn't valid or required fields were missing.</p>
   */
  Results?: Record<string, ItemResponse>;
}

/**
 * @public
 * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
 */
export interface ExportJobsResponse {
  /**
   * @public
   * <p>An array of responses, one for each export job that's associated with the application (Export Jobs resource) or segment (Segment Export Jobs resource).</p>
   */
  Item: ExportJobResponse[] | undefined;

  /**
   * @public
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 */
export interface GCMChannelRequest {
  /**
   * @public
   * <p>The Web API Key, also referred to as an <i>API_KEY</i> or <i>server key</i>, that you received from Google to communicate with Google services.</p>
   */
  ApiKey?: string;

  /**
   * @public
   * <p>The default authentication method used for GCM. Values are either "TOKEN" or "KEY". Defaults to "KEY".</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * @public
   * <p>Specifies whether to enable the GCM channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The contents of the JSON file provided by Google during registration in order to generate an access token for authentication. For more information see <a href="https://firebase.google.com/docs/cloud-messaging/migrate-v1">Migrate from legacy FCM APIs to HTTP v1</a>.</p>
   */
  ServiceJson?: string;
}

/**
 * @public
 */
export interface GetAdmChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetAdmChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetApnsChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApnsChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetApnsSandboxChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApnsSandboxChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetApnsVoipChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApnsVoipChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetApnsVoipSandboxChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApnsVoipSandboxChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetAppRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetAppResponse {
  /**
   * @public
   * <p>Provides information about an application.</p>
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

/**
 * @public
 */
export interface GetApplicationDateRangeKpiRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * @public
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * @public
   * <p>The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.</p>
   */
  StartTime?: Date;
}

/**
 * @public
 */
export interface GetApplicationDateRangeKpiResponse {
  /**
   * @public
   * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.</p>
   */
  ApplicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse | undefined;
}

/**
 * @public
 */
export interface GetApplicationSettingsRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationSettingsResponse {
  /**
   * @public
   * <p>Provides information about an application, including the default settings for an application.</p>
   */
  ApplicationSettingsResource: ApplicationSettingsResource | undefined;
}

/**
 * @public
 */
export interface GetAppsRequest {
  /**
   * @public
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * @public
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

/**
 * @public
 */
export interface GetAppsResponse {
  /**
   * @public
   * <p>Provides information about all of your applications.</p>
   */
  ApplicationsResponse: ApplicationsResponse | undefined;
}

/**
 * @public
 */
export interface GetBaiduChannelRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetBaiduChannelResponse {
  /**
   * @public
   * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;
}

/**
 * @public
 */
export interface GetCampaignResponse {
  /**
   * @public
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignActivitiesRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * @public
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * @public
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

/**
 * @public
 */
export interface GetCampaignActivitiesResponse {
  /**
   * @public
   * <p>Provides information about the activities that were performed by a campaign.</p>
   */
  ActivitiesResponse: ActivitiesResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignDateRangeKpiRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * @public
   * <p>The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * @public
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * @public
   * <p>The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.</p>
   */
  StartTime?: Date;
}

/**
 * @public
 */
export interface GetCampaignDateRangeKpiResponse {
  /**
   * @public
   * <p>Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.</p>
   */
  CampaignDateRangeKpiResponse: CampaignDateRangeKpiResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignsRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * @public
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

/**
 * @public
 */
export interface GetCampaignsResponse {
  /**
   * @public
   * <p>Provides information about the configuration and other settings for all the campaigns that are associated with an application.</p>
   */
  CampaignsResponse: CampaignsResponse | undefined;
}

/**
 * @public
 */
export interface GetCampaignVersionRequest {
  /**
   * @public
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * @public
   * <p>The unique version number (Version property) for the campaign version.</p>
   */
  Version: string | undefined;
}
